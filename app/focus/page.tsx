import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FocusHero } from '@/components/sections/focus-hero'
import { FocusDetails } from '@/components/sections/focus-details'
import { FocusStats } from '@/components/sections/focus-stats'
import { FocusCTA } from '@/components/sections/focus-cta'

export const metadata = {
  title: 'Focus Areas - Beneficial Technology',
  description: 'Our specialized focus areas: AI, Deep Science, Energy Transition, and Blockchain & DeFi. Legal engineering for tomorrow\'s most transformative technologies.',
}

export default function FocusPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <FocusHero />
      <FocusDetails />
      <FocusStats />
      <FocusCTA />
      <Footer />
    </main>
  )
}
