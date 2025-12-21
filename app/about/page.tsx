import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AboutHero } from '@/components/sections/about-hero'
import { AboutStory } from '@/components/sections/about-story'
import { AboutTeam } from '@/components/sections/about-team'
import { AboutValues } from '@/components/sections/about-values'
import { LimitedOffer } from '@/components/sections/limited-offer'

export const metadata = {
  title: 'About Us - Beneficial Technology',
  description: 'Building Tech That Matters. Learn about our mission to help teams build and deploy technologies that create lasting value.',
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
