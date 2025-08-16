import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ConsultationBooking } from '@/components/consultation-booking'

export const metadata = {
  title: 'Book a Consultation - Beneficial Technology',
  description: 'Schedule a strategic consultation with our legal engineering experts. Get personalized advice for your project.',
}

export default function BookConsultationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Book Your Strategy Consultation
            </h1>
            <p className="text-lg text-muted-foreground">
              Get personalized legal engineering advice from our experts. 30-minute sessions focused on your specific challenges and opportunities.
            </p>
          </div>
          <ConsultationBooking />
        </div>
      </section>
      <Footer />
    </main>
  )
}
