import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/sections/service-hero"
import { ServiceDetails } from "@/components/sections/service-details"
import { CTAStrip } from "@/components/sections/cta-strip"
import { LimitedOffer } from "@/components/sections/limited-offer"

export const metadata = {
  title: "Legal Engineering Services - Beneficial Technology",
  description:
    "Comprehensive legal engineering services for crypto-native companies. From entity formation to regulatory compliance, we engineer the legal infrastructure for breakthrough technologies.",
}

const serviceData = {
  title: "Legal Engineering",
  subtitle: "Building the legal infrastructure for crypto-native innovation",
  description:
    "We engineer legal structures and frameworks that enable breakthrough technologies to scale globally while maintaining regulatory compliance. Our legal engineering approach combines deep technical understanding with strategic legal expertise.",
  overview: [
    "Entity formation and corporate structuring optimized for crypto-native businesses",
    "Intellectual property strategy and protection for emerging technologies",
    "Regulatory compliance frameworks tailored to your industry and jurisdiction",
    "Securities law navigation for token offerings and fundraising",
    "Cross-border legal structures for global operations",
  ],
  services: [
    {
      title: "Entity Formation & Structure",
      description:
        "Optimal corporate structures for tax efficiency, operational flexibility, and regulatory compliance. We design entities that work across multiple jurisdictions.",
      deliverables: [
        "Corporate entity setup and registration",
        "Governance frameworks and bylaws",
        "Equity and token structures",
        "Tax optimization strategies",
        "Multi-jurisdictional coordination",
      ],
    },
    {
      title: "Intellectual Property Strategy",
      description:
        "Comprehensive IP protection and monetization strategies for AI, blockchain, and deep science innovations.",
      deliverables: [
        "Patent filing and prosecution",
        "Trademark protection and registration",
        "Trade secret protocols",
        "IP licensing agreements",
        "Open source strategy",
      ],
    },
    {
      title: "Regulatory Compliance Framework",
      description:
        "Industry-specific compliance programs and ongoing monitoring for regulated technologies.",
      deliverables: [
        "Compliance assessment and gap analysis",
        "Policy development and documentation",
        "Training programs and workshops",
        "Monitoring systems and reporting",
        "Regulatory change management",
      ],
    },
    {
      title: "Securities & Fundraising",
      description:
        "End-to-end support for funding rounds, token offerings, and securities compliance.",
      deliverables: [
        "Due diligence preparation",
        "Term sheet negotiation",
        "Securities filings and exemptions",
        "Investor relations and communications",
        "Regulatory reporting",
      ],
    },
  ],
}

export default function LegalEngineeringPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServiceHero
        title={serviceData.title}
        subtitle={serviceData.subtitle}
        description={serviceData.description}
      />
      <ServiceDetails serviceData={serviceData} />
      <LimitedOffer />
      <CTAStrip />
      <Footer />
    </main>
  )
}

