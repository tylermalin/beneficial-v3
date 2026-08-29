import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Eyebrow } from '@/components/ui/obsidian'
import { RepoIpAuditor } from '@/components/tools/repo-ip-auditor'

const url = 'https://www.beneficial.technology/tools/repo-ip-auditor'
const description =
  'Audit a Git repository for IP chain-of-title gaps and copyleft exposure. Reads commit history, root license, and package manifests in your browser. Free, no signup, nothing uploaded.'

export const metadata = {
  title: 'Repo IP Auditor',
  description,
  alternates: { canonical: url },
  openGraph: {
    title: 'Repo IP Auditor — Beneficial Technology',
    description,
    url,
    type: 'website',
  },
}

export default function RepoIpAuditorPage() {
  return (
    <main className="obsidian min-h-screen">
      <Navigation />

      <section className="relative overflow-hidden border-b border-line-hairline pt-[136px] pb-14 sm:pt-40 sm:pb-16">
        <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" />
        <div aria-hidden className="veil-top pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="max-w-4xl">
            <Eyebrow>Tools · Free</Eyebrow>
            <h1 className="mt-6 text-[clamp(2.25rem,5.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-body">
              Repo IP Auditor. <span className="headline-em">Chain of title, in 30 seconds</span>.
            </h1>
            <p className="mt-8 max-w-measure text-[15px] leading-[1.6] text-body">
              Audit a repository&rsquo;s commit history, root license, and package manifests. Flag unassigned
              contributor commits and copyleft obligations before an investor&rsquo;s counsel finds them. Runs
              entirely in your browser. Nothing is uploaded, stored, or logged.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-14 sm:py-16">
        <div className="mx-auto max-w-[1000px] px-6 sm:px-8">
          <RepoIpAuditor />
        </div>
      </section>

      <section className="border-t border-line-hairline bg-section py-12">
        <div className="mx-auto max-w-[1000px] px-6 sm:px-8">
          <p className="text-[13px] leading-[1.7] text-faint">
            This tool produces an engineering signal, not a legal opinion. It reads commit metadata and declared
            dependency licenses. It cannot see signed agreements, employment records, contribution license
            agreements, or how a dependency is actually linked, and those facts change the answer. No
            attorney-client relationship is created by running an audit.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
