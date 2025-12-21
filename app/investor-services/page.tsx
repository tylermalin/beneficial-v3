import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Brain, Atom, Zap, Coins, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Investor Services - Beneficial Technology",
  description:
    "Investor intelligence for technologies that matter. Tailored research, market intelligence, and diligence support across AI, blockchain, energy, and frontier systems.",
}

export default function InvestorServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Investor Services
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6 font-medium">
              Investor Intelligence for Technologies That Matter.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
              We provide tailored investor information services built on industry knowledge, data, insights, research, and trends across our core focus areas.
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8">
              We focus on technologies with the potential to create meaningful, lasting impact.
              <br />
              These are hard problems with real stakes. That's the point.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4" asChild>
                <Link href="/services#request-proposal">
                  Request Investor Coverage
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
                <Link href="/book-consultation">
                  Book a Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">What We Deliver</h2>
          <div className="space-y-4">
            {[
              "Sector intelligence — market structure, timelines, and adoption dynamics",
              "Technology diligence support — what's real, what's fragile, what's next",
              "Execution and deployment risk — operational blockers, dependencies, and constraints",
              "Regulatory and governance context — where decisions get constrained (or unlocked)",
              "Trend and signal tracking — updates as markets evolve, not static PDFs",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Focus Areas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Brain,
                title: "Artificial Intelligence",
                items: ["AI Product Strategy", "Data & Model Readiness", "System Oversight", "Enterprise Deployment"],
                color: "from-blue-500 to-purple-600",
              },
              {
                icon: Atom,
                title: "Deep Science",
                items: ["Quantum Computing", "Biotechnology", "Materials Science", "Space Technology"],
                color: "from-green-500 to-teal-600",
              },
              {
                icon: Zap,
                title: "Energy Transition",
                items: ["Renewable Energy", "Carbon Markets", "Grid Technology", "Energy Storage"],
                color: "from-yellow-500 to-orange-600",
              },
              {
                icon: Coins,
                title: "Blockchain & Digital Systems",
                items: ["Platforms & Protocols", "Digital Assets", "On-chain Infrastructure & Verification Systems"],
                color: "from-primary to-red-600",
              },
            ].map((area, index) => (
              <Card key={area.title} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className={`h-2 bg-gradient-to-r ${area.color} mb-4`} />
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <area.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{area.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Who This Is For</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Institutional investors & funds",
              "Family offices",
              "Corporate venture & strategy teams",
              "Research teams supporting investment committees",
              "Operators evaluating strategic acquisitions or partnerships",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Engagements Work */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">How Engagements Work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Ongoing coverage",
                description: "Monthly/quarterly briefings + analyst-style support",
              },
              {
                title: "Diligence support",
                description: "Time-boxed research for active decisions",
              },
              {
                title: "Thesis development",
                description: "Mapping markets, risks, and timelines",
              },
              {
                title: "Custom research",
                description: "Deep dives by topic, region, or subsector",
              },
            ].map((format, index) => (
              <Card key={format.title} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{format.title}</h3>
                  <p className="text-muted-foreground">{format.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Investor Information Services start at $25,000 annually, with scope based on focus area(s), depth of coverage, update frequency, and custom research needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4" asChild>
                <Link href="/services#request-proposal">
                  Request Investor Coverage
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
                <Link href="/book-consultation">
                  Book a Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">What Happens Next</h2>
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tell us what you're tracking</h3>
                <p className="text-muted-foreground">Sector, stage, time horizon</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-2">We propose a coverage scope and cadence</h3>
                <p className="text-muted-foreground">Tailored to your needs</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-2">You get structured intelligence you can use immediately</h3>
                <p className="text-muted-foreground">Actionable insights, not static reports</p>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground">
              Questions? Email us at{" "}
              <a href="mailto:hello@beneficial.technology" className="text-primary hover:underline">
                hello@beneficial.technology
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

