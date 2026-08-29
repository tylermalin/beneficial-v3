'use client'

import { useState } from 'react'
import { Card, Eyebrow, Button, TextInput } from '@/components/ui/obsidian'
import {
  type AuditReport,
  type ContributorStatus,
  LICENSE_LABEL,
  STATUS_LABEL,
  RUBRIC,
  verdict,
  markdown,
} from '@/lib/ip-audit/core'
import { scanRepository } from '@/lib/ip-audit/scan-github'
import { sampleReport } from '@/lib/ip-audit/sample'

type Tab = 'findings' | 'contributors' | 'dependencies'

const RISK = 'border-[rgba(255,107,94,0.35)] bg-[rgba(255,107,94,0.08)] text-[#ff6b5e]'
const CAUTION = 'border-[rgba(224,163,46,0.35)] bg-[rgba(224,163,46,0.08)] text-[#e0a32e]'
const PASS = 'border-line-accent bg-[rgba(204,255,0,0.08)] text-lime-400'
const NEUTRAL = 'border-line-hairline text-faint'

const STATUS_STYLE: Record<ContributorStatus, string> = {
  'on-domain': PASS,
  allowlisted: PASS,
  automation: NEUTRAL,
  'identity-masked': CAUTION,
  'unassigned-consumer': RISK,
  'third-party-domain': RISK,
}

const gradeStyle = (g: string) =>
  g === 'A' || g === 'B' ? PASS : g === 'C' ? CAUTION : RISK

const CLI_COMMAND = 'npx @beneficialtech/repo-ip-auditor . --domains acme.com'
const ACTION_SNIPPET = 'uses: Beneficial-Technology/repo-ip-auditor@v0'

const EXPLAINER: Array<[string, string]> = [
  ['Chain of title', 'Every commit author identity in the history, grouped by email domain, with the ones that carry no assignment evidence separated out. It reads domains, not signed agreements.'],
  ['Copyleft obligations', 'Declared dependencies from npm, PyPI, Go, Cargo, Composer and Bundler manifests, resolved against public registries and classified from AGPL down to permissive.'],
  ['Root license clarity', 'Whether the repository declares a license, and whether that license is itself copyleft. File header scanning runs in the CLI, which reads every tracked source file.'],
  ['Export', 'A score against a published rubric, a remediation list, and markdown, JSON and print output for a diligence folder.'],
]

export function RepoIpAuditor() {
  const [repoInput, setRepoInput] = useState('')
  const [domainInput, setDomainInput] = useState('')
  const [tokenInput, setTokenInput] = useState('')
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const [report, setReport] = useState<AuditReport | null>(null)
  const [isSample, setIsSample] = useState(false)
  const [tab, setTab] = useState<Tab>('findings')

  async function runAudit() {
    if (!repoInput.trim() || busy) return
    setBusy(true)
    setError('')
    setReport(null)
    setIsSample(false)
    try {
      const result = await scanRepository({
        repo: repoInput,
        domains: domainInput.split(',').map((s) => s.trim()).filter(Boolean),
        token: tokenInput.trim() || undefined,
        onProgress: setStatus,
      })
      setReport(result)
      setTab('findings')
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Audit failed.')
    } finally {
      setBusy(false)
      setStatus('')
    }
  }

  function runSample() {
    setError('')
    setReport(sampleReport())
    setIsSample(true)
    setTab('findings')
  }

  function downloadJson() {
    if (!report) return
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `ip-audit-${report.repo.replace('/', '-')}.json`
    a.click()
    URL.revokeObjectURL(a.href)
  }

  const unassigned = report?.contributors.filter(
    (c) => c.status === 'unassigned-consumer' || c.status === 'third-party-domain',
  ) ?? []
  const masked = report?.contributors.filter((c) => c.status === 'identity-masked') ?? []
  const strong = report?.dependencies.flagged.filter(
    (d) => d.scope === 'runtime' && (d.cls === 'agpl' || d.cls === 'source-available' || d.cls === 'gpl'),
  ) ?? []

  return (
    <div className="flex flex-col gap-6">
      <Card variant="flat" className="p-6 sm:p-8">
        <label htmlFor="repo" className="mb-3 block font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
          Repository
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <TextInput
            id="repo"
            value={repoInput}
            spellCheck={false}
            autoComplete="off"
            onChange={(e) => setRepoInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') runAudit() }}
            placeholder="owner/repo or https://github.com/owner/repo"
            className="flex-1 font-mono"
          />
          <Button onClick={runAudit} disabled={busy} className="sm:w-auto">
            {busy ? 'Auditing' : 'Run audit'}
          </Button>
        </div>

        <button
          type="button"
          onClick={runSample}
          className="mt-4 font-mono text-xs text-lime-400 underline decoration-line-hairline underline-offset-4 transition hover:decoration-line-accent"
        >
          See a sample report (no scan, no network calls)
        </button>

        <details className="group mt-5 border-t border-line-hairline pt-4">
          <summary className="cursor-pointer select-none font-mono text-xs text-faint transition hover:text-body">
            Options
          </summary>
          <div className="grid gap-5 pt-5 sm:grid-cols-2">
            <div>
              <label htmlFor="domains" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                Company email domains
              </label>
              <TextInput
                id="domains"
                value={domainInput}
                spellCheck={false}
                autoComplete="off"
                onChange={(e) => setDomainInput(e.target.value)}
                placeholder="acme.com, acme-labs.io"
                className="font-mono text-xs"
              />
              <p className="mt-2 text-[12px] leading-relaxed text-faint">
                Leave blank and the auditor infers the domain from the dominant non-consumer email in the history. Subdomains of a declared domain count as on-domain.
              </p>
            </div>
            <div>
              <label htmlFor="token" className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                GitHub token
              </label>
              <TextInput
                id="token"
                type="password"
                value={tokenInput}
                autoComplete="off"
                onChange={(e) => setTokenInput(e.target.value)}
                placeholder="ghp_…"
                className="font-mono text-xs"
              />
              <p className="mt-2 text-[12px] leading-relaxed text-faint">
                Optional. Held in this tab only, never persisted and never sent anywhere but GitHub. Raises the limit from 60 calls an hour to 5,000 and reaches private repositories.
              </p>
            </div>
          </div>
        </details>

        {busy && (
          <div className="mt-5 flex items-center gap-3 border-t border-line-hairline pt-5 font-mono text-xs text-lime-400">
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-lime-400 border-t-transparent" />
            <span>{status}</span>
          </div>
        )}
        {error && (
          <p className="mt-5 border-l-2 border-[#ff6b5e] bg-[rgba(255,107,94,0.08)] px-4 py-3 text-sm text-[#ff9b91]">
            {error}
          </p>
        )}
      </Card>

      {!report && (
        <div className="grid gap-4 sm:grid-cols-2">
          {EXPLAINER.map(([title, body]) => (
            <Card key={title} variant="outline" className="p-6">
              <h3 className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-lime-400">{title}</h3>
              <p className="text-[14px] leading-[1.6] text-body">{body}</p>
            </Card>
          ))}
        </div>
      )}

      {report && (
        <>
          {isSample && (
            <p className={`rounded-xl border px-4 py-3 font-mono text-xs ${CAUTION}`}>
              Sample report. No repository was scanned. Every name and package below is fictional and exists to show the output shape.
            </p>
          )}

          <Card variant="flat" className="p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-5 border-b border-line-hairline pb-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-mono text-lg text-ink">{report.repo}</h2>
                <p className="mt-2 font-mono text-[12px] text-faint">
                  {report.commitsScanned} commits · {report.scanDepth} scan · root license {report.rootLicense ?? 'none'} ·{' '}
                  <span className="text-lime-400">{report.companyDomains.join(', ') || 'no domain set'}</span>
                  {report.inferredDomain && ' (inferred)'}
                </p>
              </div>
              <div className="flex items-center gap-5">
                <div className="text-right">
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">Score</div>
                  <div className="font-serif text-3xl text-ink">
                    {report.score}
                    <span className="text-base text-faint">/100</span>
                  </div>
                </div>
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl border font-serif text-3xl ${gradeStyle(report.grade)}`}>
                  {report.grade}
                </div>
              </div>
            </div>

            <p className="pt-6 text-[15px] leading-[1.6] text-body">{verdict(report)}</p>

            {report.deductions.length > 0 && (
              <ul className="mt-6 space-y-2 border-t border-line-hairline pt-6">
                {report.deductions.map((d) => (
                  <li key={d.label} className="flex justify-between gap-6 text-[14px] text-body">
                    <span>{d.label}</span>
                    <span className="font-mono text-[#ff6b5e]">-{d.points}</span>
                  </li>
                ))}
              </ul>
            )}

            {report.warnings.length > 0 && (
              <ul className="mt-6 space-y-1.5 border-t border-line-hairline pt-6 font-mono text-[12px] text-faint">
                {report.warnings.map((w) => (
                  <li key={w}>! {w}</li>
                ))}
              </ul>
            )}

            <div className="mt-6 flex flex-wrap gap-3 border-t border-line-hairline pt-6">
              <Button variant="secondary" size="sm" onClick={() => navigator.clipboard.writeText(markdown(report))}>
                Copy markdown
              </Button>
              <Button variant="secondary" size="sm" onClick={downloadJson}>
                Download JSON
              </Button>
              <Button variant="secondary" size="sm" onClick={() => window.print()}>
                Print or save PDF
              </Button>
            </div>
          </Card>

          <div className="flex border-b border-line-hairline font-mono text-xs">
            {([
              ['findings', `Fix first (${unassigned.length + strong.length})`],
              ['contributors', `Contributors (${report.contributors.length})`],
              ['dependencies', `Dependencies (${report.dependencies.total})`],
            ] as const).map(([id, label]) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`border-b-2 px-4 py-3 transition ${
                  tab === id ? 'border-lime-400 text-lime-400' : 'border-transparent text-faint hover:text-body'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {tab === 'findings' && (
            <Card variant="outline" className="p-6 sm:p-8">
              <ol className="list-decimal space-y-4 pl-5 text-[15px] leading-[1.6] text-body marker:font-mono marker:text-faint">
                {unassigned.length > 0 && (
                  <li>
                    Get a signed IP assignment from {unassigned.length} contributor{unassigned.length === 1 ? '' : 's'}, starting with{' '}
                    <code className="font-mono text-[13px] text-lime-400">
                      {unassigned.slice(0, 3).map((c) => c.email).join(', ')}
                    </code>
                    . Retroactive assignments get harder every month after someone stops contributing.
                  </li>
                )}
                {masked.length > 0 && (
                  <li>
                    Map {masked.length} masked GitHub identit{masked.length === 1 ? 'y' : 'ies'} to real people and confirm each is covered by an employment agreement, contractor agreement, or CLA. The commit log cannot tell you who they are.
                  </li>
                )}
                {strong.length > 0 && (
                  <li>
                    Resolve {strong.length} strong copyleft runtime dependenc{strong.length === 1 ? 'y' : 'ies'} ({strong.map((d) => d.name).join(', ')}). AGPL obligations trigger on network use without distribution, and how you link a GPL library changes the answer.
                  </li>
                )}
                {!report.rootLicense && (
                  <li>Add a root LICENSE file. An unlicensed repository is ambiguous to everyone reading it, including your acquirer.</li>
                )}
                {unassigned.length + masked.length + strong.length === 0 && report.rootLicense && (
                  <li>Nothing flagged in this history. Run it in CI so the next contractor commit does not slip through.</li>
                )}
                <li>Store the result. Diligence asks for the history, not just today&rsquo;s snapshot.</li>
              </ol>
            </Card>
          )}

          {tab === 'contributors' && (
            <Card variant="outline" className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead className="border-b border-line-hairline text-faint">
                  <tr>
                    <th className="p-4 font-normal">Identity</th>
                    <th className="p-4 font-normal">Domain</th>
                    <th className="p-4 font-normal">Commits</th>
                    <th className="p-4 font-normal">Active</th>
                    <th className="p-4 font-normal">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {report.contributors.map((c) => (
                    <tr key={c.email} className="border-b border-line-hairline last:border-0">
                      <td className="p-4">
                        <div className="text-ink">{c.name}</div>
                        <div className="text-faint">{c.email}</div>
                      </td>
                      <td className="p-4 text-body">{c.domain || '—'}</td>
                      <td className="p-4 text-body">{c.commits}</td>
                      <td className="p-4 text-faint">
                        {c.first.slice(0, 7)} to {c.last.slice(0, 7)}
                      </td>
                      <td className="p-4">
                        <span className={`rounded border px-2 py-1 text-[10px] ${STATUS_STYLE[c.status]}`}>
                          {STATUS_LABEL[c.status]}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          )}

          {tab === 'dependencies' && (
            <Card variant="outline" className="overflow-x-auto">
              {report.dependencies.flagged.length === 0 ? (
                <p className="p-6 text-[15px] leading-[1.6] text-body">
                  No copyleft obligations in the declared dependency set. {report.dependencies.resolved} of {report.dependencies.total} licenses resolved. This reads declared licenses only, not vendored code, transitive packages, or how each one is linked.
                </p>
              ) : (
                <table className="w-full text-left font-mono text-xs">
                  <thead className="border-b border-line-hairline text-faint">
                    <tr>
                      <th className="p-4 font-normal">Package</th>
                      <th className="p-4 font-normal">Ecosystem</th>
                      <th className="p-4 font-normal">Declared</th>
                      <th className="p-4 font-normal">Scope</th>
                      <th className="p-4 font-normal">Class</th>
                    </tr>
                  </thead>
                  <tbody>
                    {report.dependencies.flagged.map((d) => (
                      <tr key={`${d.ecosystem}:${d.name}`} className="border-b border-line-hairline last:border-0">
                        <td className="p-4 text-ink">{d.name}</td>
                        <td className="p-4 uppercase text-faint">{d.ecosystem}</td>
                        <td className="p-4 text-body">{d.license ?? '—'}</td>
                        <td className="p-4 text-faint">
                          {d.scope}
                          {d.direct ? '' : ', transitive'}
                        </td>
                        <td className="p-4">
                          <span className={`rounded border px-2 py-1 text-[10px] ${
                            d.cls === 'agpl' || d.cls === 'gpl' || d.cls === 'source-available' ? RISK : CAUTION
                          }`}>
                            {LICENSE_LABEL[d.cls]}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Card>
          )}

          <Card variant="outline" className="p-6">
            <details>
              <summary className="cursor-pointer font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                Scoring rubric
              </summary>
              <table className="mt-5 w-full text-left font-mono text-xs">
                <thead className="text-faint">
                  <tr>
                    <th className="py-2 font-normal">Finding</th>
                    <th className="py-2 font-normal">Per item</th>
                    <th className="py-2 font-normal">Cap</th>
                  </tr>
                </thead>
                <tbody>
                  {RUBRIC.map((r) => (
                    <tr key={r.id} className="border-t border-line-hairline">
                      <td className="py-2 pr-4 text-body">{r.label}</td>
                      <td className="py-2 text-[#ff6b5e]">-{r.per}</td>
                      <td className="py-2 text-faint">{r.cap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-[13px] leading-relaxed text-faint">
                Grades: A 90+, B 75+, C 60+, D 40+, F below 40. The same function scores the CLI, the GitHub Action, and this page.
              </p>
            </details>
          </Card>
        </>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {[
          ['Private repos and full history', 'The browser reads at most 500 commits and cannot open file headers. The CLI reads local git, scans every tracked source file for copyleft headers and third-party copyright notices, resolves .mailmap identities, picks up Co-authored-by trailers, walks installed dependency trees, and runs offline.', CLI_COMMAND],
          ['Continuous check', 'Post the report to every pull request and fail the build below a score you set. Requires fetch-depth: 0 on checkout, or the history is incomplete.', ACTION_SNIPPET],
        ].map(([title, body, snippet]) => (
          <Card key={title} variant="flat" className="flex flex-col justify-between p-6">
            <div>
              <Eyebrow>{title}</Eyebrow>
              <p className="mt-4 mb-5 text-[14px] leading-[1.6] text-body">{body}</p>
            </div>
            <div className="flex items-center justify-between gap-3 rounded-lg border border-line-hairline px-3 py-2.5">
              <code className="overflow-x-auto font-mono text-[11px] text-body">{snippet}</code>
              <button
                onClick={() => navigator.clipboard.writeText(snippet)}
                className="shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] text-lime-400 transition hover:text-lime-500"
              >
                Copy
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
