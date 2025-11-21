import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AboutHero } from '@/components/sections/about-hero'
import { AboutStory } from '@/components/sections/about-story'
import { AboutTeam } from '@/components/sections/about-team'
import { AboutValues } from '@/components/sections/about-values'
import { LimitedOffer } from '@/components/sections/limited-offer'

export const metadata = {
  title: 'About Us - Beneficial Technology',
  description: 'Learn about our mission to engineer the legal infrastructure for tomorrow\'s most ambitious ventures. Meet our team and discover our values.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <LimitedOffer />
      <Footer />
    </main>
  )
}
