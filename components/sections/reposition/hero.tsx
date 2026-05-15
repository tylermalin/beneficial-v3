'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function RepositionHero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-rule">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.18em] text-sienna mb-6 font-medium"
          >
            Fractional services · Project work
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-forest leading-[1.05] tracking-tight font-normal"
          >
            Legal engineering and structural strategy for founders building at the{' '}
            <em className="italic font-light">regulated frontier.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 max-w-2xl text-lg sm:text-xl text-slate-ink leading-relaxed"
          >
            We sit between your operating team and your legal team — doing the structural, strategic, and regulatory work that lawyers don&apos;t ship, and that founders shouldn&apos;t be figuring out alone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center"
          >
            <Link
              href="https://cal.com/beneficialtech"
              className="group inline-flex items-center gap-2 bg-forest text-cream px-6 py-3 text-sm font-medium hover:bg-forest-deep transition-colors"
            >
              Book a 30-minute call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/beneficial-technology-services.pdf"
              className="text-sm text-slate-ink hover:text-forest underline underline-offset-4 decoration-sienna/60"
            >
              Download service sheet (PDF)
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
