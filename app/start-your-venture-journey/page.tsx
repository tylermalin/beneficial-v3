import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"

export const metadata = {
  title: "Start Your Venture Journey - Beneficial Technology",
  description:
    "Book a call to discuss your venture vision. We'll help you turn it into a plan that ships.",
}

export default function StartYourVentureJourneyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Start Your Venture Journey
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-medium">
              Bring us the vision. We'll help you turn it into a plan that ships.
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Whether you're forming a new venture or scaling an existing one, this call is a fast way to align on scope, constraints, and next steps. If it's a fit, we'll recommend the right path—Studio support, an Innovation Sprint, or a longer engagement.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">What we'll cover</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>What you're building and why it matters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Your current state: team, timeline, constraints</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Where you're stuck (and what to do next)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>The best engagement path and rough scope</span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">What to expect</h2>
                <p className="text-muted-foreground">
                  30 minutes. Clear next steps. No fluff.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 sm:p-12 overflow-visible">
            <h2 className="text-2xl font-bold mb-6 text-center">Choose a time</h2>
            
            <div className="sm:hidden mb-6">
              <a
                href="https://calendly.com/tyler-beneficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Book a call (opens Calendly)
              </a>
            </div>
            <div className="hidden sm:block">
              <CalendlyWidget url="https://calendly.com/tyler-beneficial/30min" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

