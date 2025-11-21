import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"

export const metadata = {
  title: "Reserve Your Enterprise AI Strategy Sprint - Beneficial Technology",
  description:
    "Schedule a call with our team to reserve your November Enterprise AI Strategy Sprint. Four-week sprint. Board-ready roadmap. $10k.",
}

export default function ReserveSprintPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Reserve Your Enterprise AI Strategy Sprint
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Schedule a call with our team to discuss your Enterprise AI Strategy Sprint.
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Four-week sprint • Board-ready roadmap • November only: $10,000
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 sm:p-12">
            <CalendlyWidget url="https://calendly.com/tyler-beneficial/30min" />
          </div>

          <div className="mt-8 text-center">
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

