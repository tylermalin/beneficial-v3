import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FinalCTA } from '@/components/sections/reposition/cta'
import { Credentials } from '@/components/sections/reposition/credentials'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const metadata = {
  title: 'About',
  description: 'Operator-attorney led. Beneficial Technology provides fractional structural strategy and project-based legal engineering for founders building in regulated verticals. Tyler Malin: 15+ year lawfirm experience, CFTC fellow, Fordham JD, CEO of Mālama Labs.',
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
    <main className="min-h-screen bg-cream">
      <Navigation />

      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24 border-b border-rule">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.18em] text-sienna font-medium mb-6">
              About
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest leading-[1.1] tracking-tight">
              Operator-attorney led. <em className="italic font-light">Built for founders who can&apos;t afford the standard playbook.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg sm:text-xl text-slate-ink leading-relaxed">
              Beneficial Technology is a one-person bench with a deep network. It exists because the founders building in regulated frontiers — tokens, climate assets, AI in regulated verticals — are systematically underserved by both the BigLaw and standalone startup-counsel markets.
            </p>
          </div>
        </div>
      </section>

      <Credentials />

      <section className="py-20 sm:py-28 border-b border-rule">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <div className="text-xs uppercase tracking-[0.18em] text-sienna font-medium">
                The thesis
              </div>
              <h2 className="mt-4 font-serif text-3xl text-forest tracking-tight leading-tight">
                Why this exists.
              </h2>
            </div>
            <div className="lg:col-span-9 max-w-3xl space-y-6 text-base sm:text-lg text-slate-ink leading-relaxed">
              <p>
                Most regulated startups don&apos;t fail because their lawyers wrote a bad memo. They fail because nobody is doing the work that sits <em className="italic">between</em> the law firm and the operating team — translating regulatory ambiguity into product, financing, and corporate-structure decisions that survive contact with reality.
              </p>
              <p>
                BigLaw bills the hours but won&apos;t make the call. Boutique counsel ships the doc but doesn&apos;t see the whole company. Generalist fractional GCs default to caution and end up shipping nothing. Founders are left to bridge it themselves — usually after something has already gone wrong.
              </p>
              <p className="font-serif italic text-xl text-forest">
                We do the layer underneath. Structural strategy. Regulatory positioning. Instrument design. Counsel orchestration. The work that lawyers don&apos;t ship and that founders shouldn&apos;t be figuring out alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-sand-soft border-b border-rule">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <div className="text-xs uppercase tracking-[0.18em] text-sienna font-medium">
                Who runs this
              </div>
              <h2 className="mt-4 font-serif text-3xl text-forest tracking-tight leading-tight">
                Tyler Malin
              </h2>
              <p className="mt-3 text-sm text-slate-ink">
                Founder &amp; Principal
              </p>
            </div>
            <div className="lg:col-span-9 max-w-3xl space-y-6 text-base sm:text-lg text-slate-ink leading-relaxed">
              <p>
                Operator-attorney. Two prior startup exits, one of them an Inc. 500 company acquired by Maker Studios. Trained in litigation with 15+ year lawfirm experience. Held a regulatory fellowship at the Commodity Futures Trading Commission. JD, Fordham Law.
              </p>
              <p>
                Currently CEO and Co-Founder of <a href="https://malamalabs.com" className="text-forest border-b border-sienna pb-0.5 hover:text-sienna transition-colors">Mālama Labs</a> — a hardware-signed environmental data infrastructure company working at the intersection of climate dMRV, tokenized environmental assets, and on-chain registries. The day job sharpens the night job: every retainer client benefits from the operating context of running a regulated startup in real time.
              </p>
              <p>
                Beneficial Technology is built for the founders I&apos;d want at my own table — building in places the standard playbook doesn&apos;t fit, and needing a structural partner who can hold both the regulatory frame and the product frame at once.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 border-b border-rule">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              <div className="text-xs uppercase tracking-[0.18em] text-sienna font-medium">
                Not a law firm
              </div>
            </div>
            <div className="lg:col-span-9 max-w-3xl border-l-2 border-sienna pl-8">
              <p className="font-serif text-2xl sm:text-3xl text-forest leading-[1.3] tracking-tight">
                We&apos;re not a law firm. We don&apos;t give legal advice. We don&apos;t represent clients in legal matters. We don&apos;t file regulatory submissions on your behalf.
              </p>
              <p className="mt-6 text-base text-slate-ink leading-relaxed">
                We do the structural and strategic work upstream of legal, and we coordinate with the counsel you retain. For any matter requiring legal advice or representation, you&apos;ll work with an attorney you separately engage — and we&apos;ll help you find the right one.
              </p>
              <div className="mt-8">
                <Link
                  href="/disclaimer"
                  className="inline-flex items-center gap-2 text-sm text-slate-ink hover:text-forest"
                >
                  Full disclaimer
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
