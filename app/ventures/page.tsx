import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { VenturesHero } from '@/components/sections/ventures-hero'
import { VenturesPortfolio } from '@/components/sections/ventures-portfolio'
import { VenturesProcess } from '@/components/sections/ventures-process'

export const metadata = {
  title: 'Ventures Portfolio - Beneficial Technology',
  description: 'Our portfolio of breakthrough ventures across AI, Deep Science, Energy Transition, and Blockchain. Building the future through legal engineering.',
}

export default function VenturesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <VenturesHero />
      <VenturesPortfolio />
      <VenturesProcess />
      <Footer />
    </main>
  )
}
