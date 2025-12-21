import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { StudioHero } from '@/components/sections/studio-hero'
import { StudioProcess } from '@/components/sections/studio-process'
import { LegalInfrastructure } from '@/components/sections/legal-infrastructure'
import { LimitedOffer } from '@/components/sections/limited-offer'

export const metadata = {
  title: 'Studio Model - Beneficial Technology',
  description: 'Our comprehensive approach to building and supporting beneficial technologies through venture creation, strategic services, and aligned capital.',
}

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <StudioHero />
      <StudioProcess />
      <LegalInfrastructure />
      <LimitedOffer />
      <Footer />
    </main>
  )
}
