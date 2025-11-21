import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ContactHero } from '@/components/sections/contact-hero'
import { ContactForm } from '@/components/sections/contact-form'
import { ContactInfo } from '@/components/sections/contact-info'
import { LimitedOffer } from '@/components/sections/limited-offer'

export const metadata = {
  title: 'Contact Us - Beneficial Technology',
  description: 'Get in touch with our legal engineering experts. Schedule a consultation or discuss your project with our team.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <LimitedOffer />
      <Footer />
    </main>
  )
}
