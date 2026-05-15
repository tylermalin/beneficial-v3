'use client'

import { motion } from 'framer-motion'
import { Reveal, SplitWords } from '@/components/ui/reveal'
import { MagneticButton } from '@/components/ui/magnetic-button'

export function FinalCTA() {
  return (
    <section className="py-28 sm:py-40 bg-forest text-cream relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--cream)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cream)) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <motion.svg
        aria-hidden="true"
        className="absolute -bottom-12 -right-12 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] opacity-[0.08]"
        viewBox="0 0 400 400"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      >
        {[180, 150, 120, 90, 60].map((r) => (
          <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="hsl(var(--cream))" strokeWidth={0.4} />
        ))}
      </motion.svg>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-[#D4A574]" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#D4A574] font-medium">
                Book a call
              </span>
            </div>
          </Reveal>
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.02]">
            <span className="block">
              <SplitWords text="30 minutes to figure" />
            </span>
            <span className="block">
              <SplitWords text="out if there's a fit." delay={0.18} />
            </span>
            <span className="block">
              <motion.em
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1 }}
                className="italic font-light text-cream/55"
              >
                No pitch.
              </motion.em>
            </span>
          </h2>

          <Reveal delay={0.5}>
            <p className="mt-10 text-lg text-cream/70 max-w-2xl leading-[1.55]">
              If your legal questions are routinely returning &ldquo;it depends,&rdquo; the call is free and short. If we&apos;re not the right partner, we&apos;ll tell you and point you somewhere better.
            </p>
          </Reveal>

          <Reveal delay={0.7}>
            <div className="mt-12 flex flex-col sm:flex-row gap-5 sm:gap-7 items-start sm:items-center">
              <MagneticButton href="https://cal.com/beneficialtech" external variant="cream" size="lg">
                cal.com/beneficialtech
              </MagneticButton>
              <a
                href="mailto:tyler@beneficial.technology"
                className="group text-cream/80 hover:text-cream relative inline-flex items-center"
              >
                <span className="relative">
                  tyler@beneficial.technology
                  <span className="absolute -bottom-0.5 left-0 h-px w-full bg-[#D4A574]/60 origin-right scale-x-100 group-hover:scale-x-0 transition-transform duration-500" />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
