import { Hero } from '@/components/sections/hero'
import { StudioModel } from '@/components/sections/studio-model'
import { FocusAreas } from '@/components/sections/focus-areas'
import { VentureHighlights } from '@/components/sections/venture-highlights'
import { CTAStrip } from '@/components/sections/cta-strip'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <StudioModel />
      <FocusAreas />
      <VentureHighlights />
      <CTAStrip />
      <Footer />
    </main>
  )
}
