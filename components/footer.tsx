'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-cream border-t border-rule">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl text-forest tracking-tight">
                Beneficial Technology
              </span>
            </Link>
            <p className="mt-4 font-serif italic text-base text-slate-ink leading-relaxed max-w-md">
              Legal engineering and structural strategy for founders building at the regulated frontier.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="https://cal.com/beneficialtech"
                className="group inline-flex items-center gap-2 text-forest text-base"
              >
                <span className="font-serif border-b border-sienna pb-0.5">cal.com/beneficialtech</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="mailto:tyler@beneficial.tech"
                className="text-sm text-slate-ink hover:text-forest"
              >
                tyler@beneficial.tech
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-soft font-medium mb-4">
              Site
            </div>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-forest hover:text-sienna transition-colors">Home</Link></li>
              <li><Link href="/#engagements" className="text-forest hover:text-sienna transition-colors">Engagements</Link></li>
              <li><Link href="/about" className="text-forest hover:text-sienna transition-colors">About</Link></li>
              <li><Link href="/beneficial-technology-services.pdf" className="text-forest hover:text-sienna transition-colors">Service sheet (PDF)</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-soft font-medium mb-4">
              Important
            </div>
            <p className="font-serif italic text-sm text-slate-ink leading-relaxed">
              Beneficial Technology is a Delaware limited liability company providing strategic and structural consulting services. We are not a law firm and do not provide legal advice. For any matter requiring legal advice or representation, you&apos;ll work with an attorney you separately engage.
            </p>
            <div className="mt-4 flex gap-4 text-xs text-slate-soft">
              <Link href="/privacy-policy" className="hover:text-forest">Privacy</Link>
              <Link href="/terms-of-service" className="hover:text-forest">Terms</Link>
              <Link href="/disclaimer" className="hover:text-forest">Disclaimer</Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-rule flex flex-col sm:flex-row justify-between gap-4 text-xs text-slate-soft">
          <div>© {new Date().getFullYear()} Beneficial Technology, LLC</div>
          <div>Delaware · Honolulu · Operator-attorney led</div>
        </div>
      </div>
    </footer>
  )
}
