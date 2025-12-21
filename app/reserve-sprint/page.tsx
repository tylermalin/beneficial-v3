import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Reserve Your Innovation Sprint - Beneficial Technology",
  description:
    "Schedule a call with our team to reserve your 2026 Innovation Sprint Package. Build What Matters—On Purpose.",
}

export default function ReserveSprintPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Build What Matters—On Purpose.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              The Innovation Sprint is a focused, high-touch engagement for teams ready to move from experimentation to execution.
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-4">
              In a structured sprint, we help you clarify what to build, how to deploy it, and how to scale it responsibly—so your team can move forward with confidence.
            </p>
            <div className="mt-6 space-y-3">
              <p className="text-sm font-medium text-primary">
                2026 Innovation Sprint Package
              </p>
              <p className="text-sm text-muted-foreground">
                2 slots remaining
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
                <Link href="/studio">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4" asChild>
                <Link href="#booking">
                  Reserve Your Sprint
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              This is not a workshop or brainstorming session. It's a working sprint designed to produce clear direction, alignment, and momentum.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              We work closely with your leadership and technical team to pressure-test ideas, identify risks, and define a path to real-world deployment.
            </p>
            <p className="text-base font-medium text-primary italic">
              We take on few teams so we can go deep and deliver real outcomes.
            </p>
          </div>

          <div id="booking" className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 sm:p-12 overflow-visible">
            <div className="sm:hidden mb-6">
              <a
                href="https://calendly.com/tyler-beneficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium mb-3"
              >
                Reserve your Sprint (opens Calendly)
              </a>
              <p className="text-xs text-muted-foreground mb-4 text-center">
                Limited availability for 2026.
              </p>
            </div>
            <div className="hidden sm:block">
              <CalendlyWidget url="https://calendly.com/tyler-beneficial/30min" />
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Schedule a call with our team to discuss the Innovation Sprint and determine if it's the right fit for your organization.
            </p>
            <p className="text-sm text-muted-foreground">
              Questions? Email us at{" "}
              <a
                href="mailto:contact@beneficialtech.ai"
                className="text-primary hover:underline"
              >
                contact@beneficialtech.ai
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

