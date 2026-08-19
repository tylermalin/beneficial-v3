import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FinalCTA } from '@/components/sections/reposition/cta'
import { Credentials } from '@/components/sections/reposition/credentials'
import { Card, Eyebrow } from '@/components/ui/obsidian'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata = {
  title: 'About',
  description: 'Operator-attorney led. Beneficial Technology provides fractional structural strategy and project-based legal engineering for founders building in regulated verticals. Tyler Malin: 15+ year law-firm experience, CFTC fellow, Fordham JD, CEO of Mālama Labs.',
  alternates: { canonical: 'https://www.beneficial.technology/about' },
  openGraph: {
    title: 'About — Beneficial Technology',
    description: 'Operator-attorney led. Built for founders who can\'t afford the standard playbook.',
    url: 'https://www.beneficial.technology/about',
    type: 'profile',
  },
}

export default function AboutPage() {
  return (
    <main className="obsidian min-h-screen">
      <Navigation />

      {/* Page header */}
      <section className="relative overflow-hidden border-b border-line-hairline pt-[136px] pb-20 sm:pt-40 sm:pb-24">
        <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" />
        <div aria-hidden className="veil-top pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="max-w-4xl">
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-6 text-[clamp(2.25rem,5.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-body">
              Operator-attorney led.{' '}
              <span className="headline-em">Built for founders who can&apos;t afford the standard playbook.</span>
            </h1>
            <p className="mt-8 max-w-measure text-[15px] leading-[1.6] text-body">
              Beneficial Technology is a one-person bench with a deep network. It exists because the founders building in regulated frontiers — tokens, climate assets, AI in regulated verticals — are systematically underserved by both the BigLaw and standalone startup-counsel markets.
            </p>
          </div>
        </div>
      </section>

      <Credentials />

      {/* 01 — The thesis */}
      <section className="border-b border-line-hairline bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
            <div>
              <Eyebrow index="01">The thesis</Eyebrow>
              <h2 className="mt-6 text-2xl font-light tracking-[-0.02em] text-ink">
                Why this exists.
              </h2>
            </div>
            <div className="max-w-measure space-y-6 text-body">
              <p className="text-[17px] font-light leading-[1.6] text-body">
                Most regulated startups don&apos;t fail because their lawyers wrote a bad memo. They fail because nobody is doing the work that sits <span className="text-ink">between</span> the law firm and the operating team — translating regulatory ambiguity into product, financing, and corporate-structure decisions that survive contact with reality.
              </p>
              <p className="text-[15px] leading-[1.6]">
                BigLaw bills the hours but won&apos;t make the call. Boutique counsel ships the doc but doesn&apos;t see the whole company. Generalist fractional GCs default to caution and end up shipping nothing. Founders are left to bridge it themselves — usually after something has already gone wrong.
              </p>
              <p className="text-[17px] font-light leading-[1.5] text-ink">
                We do the layer underneath. Structural strategy. Regulatory positioning. Instrument design. Counsel orchestration. The work that lawyers don&apos;t ship and that founders shouldn&apos;t be figuring out alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Who runs this */}
      <section className="border-b border-line-hairline bg-section py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
            <div>
              <Eyebrow index="02">Who runs this</Eyebrow>
              <div className="mt-6 text-[44px] font-light leading-none tracking-[-0.03em] text-ink">
                Tyler Malin
              </div>
              <p className="mt-3 text-sm text-lime-400">Founder &amp; Principal</p>
            </div>
            <div className="max-w-measure space-y-6 text-[15px] leading-[1.6] text-body">
              <p>
                Operator-attorney. Two prior startup exits, one of them an Inc. 500 company acquired by Maker Studios. Trained in litigation with 15+ years of law-firm experience. Held a regulatory fellowship at the Commodity Futures Trading Commission. JD, Fordham Law.
              </p>
              <p>
                Currently CEO and Co-Founder of{' '}
                <a href="https://malamalabs.com" className="border-b border-line-accent pb-0.5 text-lime-400 transition-colors hover:text-ink">Mālama Labs</a>{' '}
                — a hardware-signed environmental data infrastructure company working at the intersection of climate dMRV, tokenized environmental assets, and on-chain registries. The day job sharpens the night job: every retainer client benefits from the operating context of running a regulated startup in real time.
              </p>
              <p>
                Beneficial Technology is built for the founders I&apos;d want at my own table — building in places the standard playbook doesn&apos;t fit, and needing a structural partner who can hold both the regulatory frame and the product frame at once.
              </p>

              <Card variant="outline" className="mt-8 p-8">
                <Eyebrow>Not a law firm</Eyebrow>
                <p className="mt-5 max-w-measure text-xl font-light leading-[1.35] tracking-[-0.02em] text-ink">
                  We&apos;re not a law firm. We don&apos;t give legal advice. We don&apos;t represent clients in legal matters. We don&apos;t file regulatory submissions on your behalf.
                </p>
                <p className="mt-5 text-[15px] leading-[1.6] text-body">
                  We do the structural and strategic work upstream of legal, and we coordinate with the counsel you retain. For any matter requiring legal advice or representation, you&apos;ll work with an attorney you separately engage — and we&apos;ll help you find the right one.
                </p>
                <div className="mt-6">
                  <Link
                    href="/disclaimer"
                    className="inline-flex items-center gap-1.5 text-sm text-lime-400 transition-colors hover:text-ink"
                  >
                    Full disclaimer
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
