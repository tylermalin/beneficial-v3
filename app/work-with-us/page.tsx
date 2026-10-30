import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Tiers } from '@/components/sections/reposition/tiers'
import { FinalCTA } from '@/components/sections/reposition/cta'
import { Eyebrow, Button, Card } from '@/components/ui/obsidian'
import { PRACTICES } from '@/lib/expertise-data'

const url = 'https://www.beneficial.technology/work-with-us'

export const metadata: Metadata = {
  title: 'Work with us',
  description:
    'Legal engineering, AI automation, RWA tokenization, and capital formation, designed as one architecture. Founder-led structural work for builders at the regulated frontier, with plain tiers and prices.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Work with us — Beneficial Technology',
    description: 'One architecture, not three engagements. Four disciplines, plain tiers, prices on the page.',
    url,
    type: 'website',
  },
}

const CALLS = [
  { title: "You're bringing a real asset on-chain.", body: 'Issuance, custody, and investor eligibility all have to line up, and each advisor only sees one of them.' },
  { title: 'Your entity map is ahead of your paperwork.', body: "You're raising through an SPV, or across jurisdictions, and the structure grew faster than anyone documented it." },
  { title: 'Your AI agents are starting to act.', body: "They sign, spend, or commit on behalf of an entity, and you need to know who's accountable when they do." },
  { title: "Every advisor is right, and the plan still doesn't work.", body: 'Legal, technical, and capital advice each hold up alone. Together they contradict each other.' },
]

const PROCESS = [
  { title: 'Structuring call (30 min).', body: 'Book a time, then answer a short intake so the call is about your structure, not your background. You leave with a first-pass view of the architecture and the riskiest seam in it.' },
  { title: 'Scoped proposal.', body: 'A fixed scope, deliverables, and price, sent for e-signature. No open-ended hourly billing.' },
  { title: 'Build.', body: 'We design and implement the structure, coordinate counsel and partners, and hand over documentation your investors and auditors can follow.' },
]

const FAQ = [
  { q: 'Are you a law firm?', a: 'No. We design the legal architecture and coordinate the work. Legal opinions, filings, and anything requiring a licensed attorney are handled by counsel, either yours or firms we work alongside.' },
  { q: 'Who is this for?', a: "Pre-seed to Series A founders building where the standard legal playbook doesn't fit: token launches, climate assets, regulated AI, and cross-jurisdiction structures." },
  { q: 'What does an engagement cost?', a: 'Plainly, and on this page. Operator is $8,500/mo, Architect is $15,000/mo, Project engagements start at $25,000, and Custom is scoped to the work. No open-ended hourly billing.' },
  { q: 'What should I bring to the first call?', a: 'Just a short intake, answered before we talk, so the 30 minutes are about your structure rather than your background. No deck required.' },
  { q: 'Do you work with our existing advisors?', a: 'Yes. Every engagement starts with Tyler, and where a matter needs licensed counsel, specialist engineers, or capital partners, we bring them in and keep the whole system coherent.' },
  { q: 'Is the first call really free?', a: 'Yes. The structuring call is free, founder-led, and carries no obligation.' },
]

export default function WorkWithUsPage() {
  return (
    <main className="obsidian min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line-hairline pt-[136px] pb-16 sm:pt-40 sm:pb-20">
        <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" />
        <div aria-hidden className="veil-top pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="max-w-4xl">
            <Eyebrow>Work with us</Eyebrow>
            <h1 className="mt-6 text-[clamp(2.25rem,5.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-body">
              One architecture,{' '}
              <span className="headline-em">not three engagements</span>.
            </h1>
            <p className="mt-8 max-w-measure text-[18px] leading-[1.6] text-body">
              Legal, technology, and capital aren&rsquo;t separate workstreams. They&rsquo;re one system
              with three interfaces. Engage one discipline or all four; either way, each piece is
              designed knowing how it connects to the others.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="https://cal.com/beneficialtech" external variant="accent" size="lg">Book a scoping call</Button>
              <Button href="#engagements" variant="secondary" size="lg">See engagements &amp; pricing</Button>
            </div>
          </div>
        </div>
      </section>

      {/* When people call */}
      <section className="bg-canvas py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <Eyebrow>When people call</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.6rem,3.6vw,2.5rem)] font-light tracking-[-0.02em] text-ink">Usually we get the call when…</h2>
          <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {CALLS.map((c, i) => (
              <div key={i} className="border-t border-line-hairline pt-5">
                <div className="flex gap-4">
                  <span className="tabular font-mono text-[13px] text-lime-400">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-[18px] font-medium text-ink">{c.title}</h3>
                    <p className="mt-2 text-[15px] leading-[1.6] text-faint">{c.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[18px] text-body">Sound familiar? <a href="https://cal.com/beneficialtech" className="border-b border-line-accent text-ink hover:text-lime-400">Book a call</a></p>
        </div>
      </section>

      {/* How we think */}
      <section className="border-t border-line-hairline bg-section py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>How we think</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.8rem,4vw,2.75rem)] font-light leading-[1.05] tracking-[-0.02em] text-ink">
              Built together.<br />Not bolted on.
            </h2>
          </div>
          <div className="mt-8 lg:col-span-7 lg:mt-0">
            <p className="max-w-measure text-[18px] leading-[1.6] text-body">
              Most people assume legal, technology, and capital are separate workstreams. They aren&rsquo;t.
              They&rsquo;re one system with three interfaces.
            </p>
            <p className="mt-5 max-w-measure text-[18px] leading-[1.6] text-body">
              A token&rsquo;s economics depend on how the issuing entity is structured. That entity&rsquo;s
              governance depends on what the software can actually enforce. And the raise depends on
              whether investors can see all of it clearly in diligence.
            </p>
            <p className="mt-5 max-w-measure text-[18px] leading-[1.6] text-body">
              When three firms design those pieces in parallel, the gaps between them show up late and
              cost the most to fix. We start from the whole system, then engineer each connection
              deliberately.
            </p>
            <div className="mt-8 flex flex-col gap-3 font-mono text-[13px] text-faint sm:flex-row sm:gap-8">
              <span className="flex items-center gap-2"><span className="text-lime-400">→</span> One architecture, not three engagements</span>
              <span className="flex items-center gap-2"><span className="text-lime-400">→</span> Every structure built to survive diligence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="border-t border-line-hairline bg-canvas py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <Eyebrow>Expertise</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.6rem,3.6vw,2.5rem)] font-light tracking-[-0.02em] text-ink">Four disciplines. One architecture.</h2>
          <p className="mt-6 max-w-measure text-[18px] leading-[1.6] text-body">
            Engage one or all four. Either way, each piece is designed knowing how it connects to the others.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {PRACTICES.map((p) => (
              <Card key={p.slug} variant="flat" interactive className="p-8">
                <Link href={`/expertise/${p.slug}`} className="block">
                  <div className="flex items-baseline gap-3">
                    <span className="tabular font-mono text-xs text-lime-400">{p.num}</span>
                    <h3 className="text-[22px] font-light tracking-[-0.01em] text-ink">{p.name}</h3>
                  </div>
                  <p className="mt-4 text-[15px] leading-[1.6] text-faint">{p.whenPeopleCall.items[0].body}</p>
                  <div className="mt-5 font-mono text-[12px] uppercase tracking-wider text-faint">What you get</div>
                  <p className="mt-2 max-w-measure text-[15px] leading-[1.6] text-body">{p.deliverables.items[0].whatItIs}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-lime-400">How this works →</span>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements / Tiers */}
      <div id="engagements" className="scroll-mt-24">
        <Tiers />
      </div>

      {/* Founder */}
      <section className="border-t border-line-hairline bg-section py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Founder-led</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.8rem,4vw,2.75rem)] font-light leading-[1.08] tracking-[-0.02em] text-ink">
              You&rsquo;ll talk to the person doing the work.
            </h2>
            <div className="mt-6 font-mono text-sm text-faint">Tyler Malin · Founder</div>
            <div className="mt-8">
              <Button href="https://cal.com/beneficialtech" external variant="accent" size="md">Book a call with Tyler</Button>
            </div>
          </div>
          <div className="mt-8 lg:col-span-7 lg:mt-0">
            <p className="max-w-measure text-[18px] leading-[1.6] text-body">
              I&rsquo;m Tyler Malin. I&rsquo;ve spent my career where law, technology, and capital collide:
              carbon markets, blockchain-based measurement and verification, and now legal structures
              for AI agents and tokenized real-world assets.
            </p>
            <p className="mt-5 max-w-measure text-[18px] leading-[1.6] text-body">
              I started Beneficial because I kept watching good ventures stall in the gaps between
              their advisors. The lawyers were right. The engineers were right. The bankers were right.
              The combined plan still didn&rsquo;t work.
            </p>
            <p className="mt-5 max-w-measure text-[18px] leading-[1.6] text-body">
              Every engagement starts with me. Where a matter needs licensed counsel, specialist
              engineers, or capital partners, I bring them in and keep the whole system coherent.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-line-hairline bg-canvas py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <Eyebrow>Process</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.6rem,3.6vw,2.5rem)] font-light tracking-[-0.02em] text-ink">From first call to signed scope in about a week.</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PROCESS.map((p, i) => (
              <div key={i} className="rounded-lg border border-line-hairline bg-section p-8">
                <span className="tabular text-[clamp(1.5rem,3vw,2.25rem)] font-light leading-none text-lime-400">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 text-[18px] font-medium text-ink">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-faint">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="https://cal.com/beneficialtech" external variant="secondary" size="md">Book the first call</Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line-hairline bg-section py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow>Before you book</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.6rem,3.2vw,2.2rem)] font-light tracking-[-0.02em] text-ink">Questions, answered plainly.</h2>
          </div>
          <div className="mt-8 lg:col-span-8 lg:mt-0">
            <div className="flex flex-col">
              {FAQ.map((f, i) => (
                <details key={i} className="group border-t border-line-hairline py-5" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[18px] text-ink marker:content-none">
                    {f.q}
                    <span className="font-mono text-lime-400 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-measure text-[15px] leading-[1.6] text-faint">{f.a}</p>
                </details>
              ))}
              <div className="border-t border-line-hairline" />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
