import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { RepositionHero } from '@/components/sections/reposition/hero'
import { Credentials } from '@/components/sections/reposition/credentials'
import { Services } from '@/components/sections/reposition/services'
import { WhatWeDo } from '@/components/sections/reposition/what-we-do'
import { WhoWeWorkWith } from '@/components/sections/reposition/who-we-work-with'
import { Tiers } from '@/components/sections/reposition/tiers'
import { HowWeWork } from '@/components/sections/reposition/how-we-work'
import { WhatWeDontDo } from '@/components/sections/reposition/what-we-dont-do'
import { RecentWork } from '@/components/sections/reposition/recent-work'
import { FinalCTA } from '@/components/sections/reposition/cta'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <RepositionHero />
      <Credentials />
      <Services />
      <WhatWeDo />
      <WhoWeWorkWith />
      <Tiers />
      <HowWeWork />
      <WhatWeDontDo />
      <RecentWork />
      <FinalCTA />
      <Footer />
    </main>
  )
}

