import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-32 bg-forest text-cream">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.18em] text-[#D4A574] font-medium">
            Book a call
          </div>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
            30 minutes to figure out if there&apos;s a fit. <em className="italic font-light text-cream/80">No pitch.</em>
          </h2>

          <p className="mt-8 text-lg text-cream/70 max-w-2xl leading-relaxed">
            If your legal questions are routinely returning &ldquo;it depends,&rdquo; the call is free and short. If we&apos;re not the right partner, we&apos;ll tell you and point you somewhere better.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
            <Link
              href="https://cal.com/beneficialtech"
              className="group inline-flex items-center gap-2 bg-cream text-forest px-7 py-4 text-base font-medium hover:bg-sand transition-colors"
            >
              cal.com/beneficialtech
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="mailto:tyler@beneficial.tech"
              className="text-cream/80 hover:text-cream underline underline-offset-4 decoration-[#D4A574]/60"
            >
              tyler@beneficial.tech
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
