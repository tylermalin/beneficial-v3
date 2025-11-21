import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/sections/services-hero"
import { ServicesOverview } from "@/components/sections/services-overview"
import { ServiceCategories } from "@/components/sections/service-categories"
import { ServicesProcess } from "@/components/sections/services-process"
import { ServicesClients } from "@/components/sections/services-clients"
import { ServicesContact } from "@/components/sections/services-contact"
import { LimitedOffer } from "@/components/sections/limited-offer"

export const metadata = {
  title: "Legal Engineering Services - Beneficial Technology",
  description:
    "Comprehensive legal engineering services for companies from startups to Fortune 500. Expert guidance in AI, blockchain, energy transition, and deep science.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServicesHero />
      <ServicesOverview />
      <ServiceCategories />
      <ServicesProcess />
      <ServicesClients />
      <ServicesContact />
      <LimitedOffer />
      <Footer />
    </main>
  )
}
