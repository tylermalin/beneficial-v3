import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EnterpriseAIHero } from "@/components/sections/enterprise-ai-hero"
import { ProblemFraming } from "@/components/sections/problem-framing"
import { DefensibleIntelligence } from "@/components/sections/defensible-intelligence"
import { SprintProcess } from "@/components/sections/sprint-process"
import { WhatYouGet } from "@/components/sections/what-you-get"
import { WhyNow } from "@/components/sections/why-now"
import { Testimonials } from "@/components/sections/testimonials"
import { Pricing } from "@/components/sections/pricing"
import { FAQ } from "@/components/sections/faq"
import { FinalCTA } from "@/components/sections/final-cta"

export const metadata = {
  title: "Enterprise AI Strategy Sprint — Build Your Defensible Intelligence System",
  description:
    "Four-week sprint. Board-ready roadmap. Move beyond AI noise. Build defensible intelligence. November only: $10k.",
}

export default function EnterpriseAIStrategySprintPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <EnterpriseAIHero />
      <ProblemFraming />
      <DefensibleIntelligence />
      <SprintProcess />
      <WhatYouGet />
      <WhyNow />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}

