import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/sections/service-hero"
import { ServiceDetails } from "@/components/sections/service-details"
import { CTAStrip } from "@/components/sections/cta-strip"
import { LimitedOffer } from "@/components/sections/limited-offer"

export const metadata = {
  title: "Regulatory Advisory Services - Beneficial Technology",
  description:
    "Expert regulatory guidance for emerging technologies. Navigate complex regulatory landscapes with our specialized advisory services.",
}

const serviceData = {
  title: "Regulatory Advisory",
  subtitle: "Navigate complex regulatory landscapes",
  description:
    "We provide specialized regulatory advisory services for companies operating in highly regulated or emerging technology sectors. Our expertise spans AI governance, blockchain regulation, energy transition policies, and deep science regulatory pathways.",
  overview: [
    "Regulatory pathway mapping and strategy",
    "Compliance gap analysis and remediation",
    "Policy advocacy and regulatory engagement",
    "Multi-jurisdictional regulatory coordination",
    "Ongoing regulatory monitoring and updates",
  ],
  services: [
    {
      title: "Regulatory Pathway Mapping",
      description:
        "Strategic mapping of regulatory requirements and pathways for your technology and business model.",
      deliverables: [
        "Regulatory landscape analysis",
        "Jurisdiction assessment",
        "Compliance roadmap development",
        "Risk assessment and mitigation",
        "Timeline and milestone planning",
      ],
    },
    {
      title: "Compliance Strategy",
      description:
        "Comprehensive compliance programs tailored to your industry and regulatory environment.",
      deliverables: [
        "Compliance gap analysis",
        "Policy and procedure development",
        "Training and education programs",
        "Monitoring and reporting systems",
        "Remediation planning",
      ],
    },
    {
      title: "Policy Advocacy",
      description:
        "Strategic engagement with regulators and policymakers to shape favorable regulatory outcomes.",
      deliverables: [
        "Regulatory comment submissions",
        "Industry association participation",
        "Direct regulator engagement",
        "Policy position development",
        "Stakeholder coalition building",
      ],
    },
    {
      title: "Multi-Jurisdictional Coordination",
      description:
        "Coordinate regulatory compliance across multiple jurisdictions and regulatory bodies.",
      deliverables: [
        "Cross-border regulatory analysis",
        "Jurisdiction-specific compliance plans",
        "Regulatory reporting coordination",
        "Conflict resolution strategies",
        "Unified compliance framework",
      ],
    },
  ],
}

export default function RegulatoryAdvisoryPage() {
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

