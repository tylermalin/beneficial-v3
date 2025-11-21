import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/sections/service-hero"
import { ServiceDetails } from "@/components/sections/service-details"
import { CTAStrip } from "@/components/sections/cta-strip"

export const metadata = {
  title: "Strategic Capital Services - Beneficial Technology",
  description:
    "Strategic investment and advisory services for high-potential ventures. We provide capital, legal engineering expertise, and network access to accelerate growth.",
}

const serviceData = {
  title: "Strategic Capital",
  subtitle: "Investment and advisory for breakthrough technologies",
  description:
    "We provide strategic investment and advisory services to high-potential ventures, leveraging our legal engineering expertise and network to accelerate growth. Our capital comes with deep technical and regulatory knowledge.",
  overview: [
    "Strategic investment in crypto-native and deep tech companies",
    "Legal engineering advisory as part of investment",
    "Network access to investors, partners, and customers",
    "Growth acceleration through operational support",
    "Regulatory navigation and compliance guidance",
  ],
  services: [
    {
      title: "Strategic Investment",
      description:
        "Capital investment combined with legal engineering expertise for crypto-native and deep tech ventures.",
      deliverables: [
        "Seed and Series A investments",
        "Strategic partnership opportunities",
        "Follow-on funding support",
        "Portfolio company collaboration",
        "Exit strategy planning",
      ],
    },
    {
      title: "Legal Advisory",
      description:
        "Comprehensive legal engineering support as part of our investment relationship.",
      deliverables: [
        "Entity structure optimization",
        "IP strategy and protection",
        "Regulatory compliance guidance",
        "Fundraising support",
        "M&A transaction support",
      ],
    },
    {
      title: "Network Access",
      description:
        "Access to our network of investors, partners, customers, and advisors.",
      deliverables: [
        "Investor introductions",
        "Partnership opportunities",
        "Customer connections",
        "Advisor network access",
        "Industry event participation",
      ],
    },
    {
      title: "Growth Acceleration",
      description:
        "Operational support to accelerate growth and scale operations.",
      deliverables: [
        "Strategic planning and roadmapping",
        "Team building and recruitment",
        "Go-to-market strategy",
        "Product development guidance",
        "Operational best practices",
      ],
    },
  ],
}

export default function StrategicCapitalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ServiceHero
        title={serviceData.title}
        subtitle={serviceData.subtitle}
        description={serviceData.description}
      />
      <ServiceDetails serviceData={serviceData} />
      <CTAStrip />
      <Footer />
    </main>
  )
}

