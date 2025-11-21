import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/sections/service-hero"
import { ServiceDetails } from "@/components/sections/service-details"
import { CTAStrip } from "@/components/sections/cta-strip"
import { LimitedOffer } from "@/components/sections/limited-offer"

export const metadata = {
  title: "AI and Blockchain Consulting Services - Beneficial Technology",
  description:
    "Strategic consulting for AI and blockchain companies. From AI governance to DeFi compliance, we help you navigate the complex regulatory landscape.",
}

const serviceData = {
  title: "AI and Blockchain Consulting Services",
  subtitle: "Strategic guidance for the future of technology",
  description:
    "We provide specialized consulting services for companies building with AI and blockchain technologies. Our expertise spans AI governance, DeFi compliance, smart contract auditing, and regulatory strategy for emerging technologies.",
  overview: [
    "AI governance frameworks and algorithmic accountability",
    "DeFi protocol legal structure and compliance",
    "Smart contract auditing and security",
    "Token economics and regulatory strategy",
    "Cross-chain legal architecture",
  ],
  services: [
    {
      title: "AI Governance & Compliance",
      description:
        "Navigate the complex regulatory landscape of AI governance, data rights, and algorithmic accountability.",
      deliverables: [
        "AI ethics framework development",
        "Algorithmic impact assessments",
        "Data privacy compliance (GDPR, CCPA)",
        "AI liability and risk management",
        "Regulatory sandbox applications",
      ],
    },
    {
      title: "Blockchain & DeFi Legal Engineering",
      description:
        "Comprehensive legal infrastructure for decentralized finance, digital assets, and Web3 protocols.",
      deliverables: [
        "DeFi protocol legal structure",
        "Token economics and compliance",
        "Smart contract auditing",
        "DAO governance frameworks",
        "Cross-chain legal architecture",
      ],
    },
    {
      title: "Regulatory Strategy",
      description:
        "Strategic guidance for navigating evolving regulations in AI and blockchain spaces.",
      deliverables: [
        "Regulatory pathway mapping",
        "Compliance gap analysis",
        "Policy advocacy and engagement",
        "Regulatory monitoring and updates",
        "Crisis management and response",
      ],
    },
    {
      title: "Technology Risk Management",
      description:
        "Comprehensive risk assessment and mitigation strategies for AI and blockchain deployments.",
      deliverables: [
        "Technology risk audits",
        "Security and vulnerability assessments",
        "Incident response planning",
        "Insurance and liability strategies",
        "Ongoing risk monitoring",
      ],
    },
  ],
}

export default function AIBlockchainConsultingPage() {
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

