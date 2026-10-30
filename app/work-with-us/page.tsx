import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Services } from '@/components/sections/reposition/services'
import { WhatWeDo } from '@/components/sections/reposition/what-we-do'
import { HowWeWork } from '@/components/sections/reposition/how-we-work'
import { WhatWeDontDo } from '@/components/sections/reposition/what-we-dont-do'
import { WhoWeWorkWith } from '@/components/sections/reposition/who-we-work-with'
import { RecentWork } from '@/components/sections/reposition/recent-work'
import { Tiers } from '@/components/sections/reposition/tiers'
import { FinalCTA } from '@/components/sections/reposition/cta'
import { Eyebrow } from '@/components/ui/obsidian'

const url = 'https://www.beneficial.technology/work-with-us'

export const metadata: Metadata = {
  title: 'Work with us',
  description:
    'Legal engineering, software development, and AI implementation in one engagement. Fractional and project-based structural strategy for founders at the regulated frontier, with plain tiers and prices.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Work with us — Beneficial Technology',
    description:
      'Legal engineering, software development, and AI implementation in one engagement. Plain tiers, prices on the page.',
    url,
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <main className="obsidian min-h-screen">
      <Navigation />

      <section className="relative overflow-hidden border-b border-line-hairline pt-[136px] pb-16 sm:pt-40 sm:pb-20">
        <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" />
        <div aria-hidden className="veil-top pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="max-w-4xl">
            <Eyebrow>Work with us</Eyebrow>
            <h1 className="mt-6 text-[clamp(2.25rem,5.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-body">
              One engagement for the structure,{' '}
              <span className="headline-em">the systems, and the software</span>.
            </h1>
            <p className="mt-8 max-w-measure text-[18px] leading-[1.6] text-body">
              Legal engineering, software development, and AI implementation, delivered
              together. You get the enterprise structure built, the workflows integrated,
              and the execution work traditional agencies leave unshipped.
            </p>
          </div>
        </div>
      </section>

      <Services />
      <WhatWeDo />
      <HowWeWork />
      <WhatWeDontDo />
      <WhoWeWorkWith />
      <RecentWork />

      <div id="engagements" className="scroll-mt-24">
        <Tiers />
      </div>

      <FinalCTA />
      <Footer />
    </main>
  )
}
