'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { SplitWords } from '@/components/ui/reveal'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { WaveformMotif } from './waveform-motif'

export function RepositionHero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 140])
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.25])

  return (
    <section
      ref={ref}
      className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden"
    >
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -60]) }}
        className="absolute inset-0 -z-0 opacity-[0.06] pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--forest)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--forest)) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-7 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-12 bg-sienna" />
              <span className="text-xs uppercase tracking-[0.22em] text-sienna font-medium">
                Fractional · Project
              </span>
            </motion.div>

            <h1 className="font-serif text-[clamp(2.5rem,6.2vw,5rem)] text-forest leading-[0.98] tracking-[-0.02em] font-normal">
              <span className="block">
                <SplitWords text="Legal engineering" />
              </span>
              <span className="block">
                <SplitWords text="for founders building" delay={0.2} />
              </span>
              <span className="block">
                <SplitWords text="at the" delay={0.4} />{' '}
                <motion.em
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="italic font-light text-sienna"
                >
                  regulated frontier.
                </motion.em>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 max-w-xl text-lg text-slate-ink leading-[1.55]"
            >
              We sit between your operating team and your legal team — doing the structural work that lawyers don&apos;t ship, and that founders shouldn&apos;t be figuring out alone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 flex flex-col sm:flex-row gap-5 sm:items-center"
            >
              <MagneticButton href="https://cal.com/beneficialtech" external variant="forest" size="lg">
                Book a 30-min call
              </MagneticButton>
              <Link
                href="/beneficial-technology-services.pdf"
                className="group relative text-sm text-slate-ink hover:text-forest transition-colors inline-flex items-center gap-2"
              >
                <span className="relative">
                  Download service sheet
                  <span className="absolute -bottom-0.5 left-0 h-px w-full bg-sienna scale-x-100 group-hover:scale-x-0 origin-right transition-transform duration-500" />
                </span>
                <span className="text-xs text-slate-soft">PDF · 493 KB</span>
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-5 xl:col-span-5 relative">
            <WaveformMotif />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-8 pt-10 border-t border-rule"
        >
          {[
            { k: 'Founders served', v: '20+' },
            { k: 'Tokens structured', v: '7' },
            { k: 'Jurisdictions', v: 'US · EU · KY' },
            { k: 'Time to scope', v: '48h' },
          ].map((stat, i) => (
            <motion.div
              key={stat.k}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.1 + i * 0.08 }}
              className="flex flex-col"
            >
              <span className="font-serif text-3xl text-forest tracking-tight">{stat.v}</span>
              <span className="mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-soft">
                {stat.k}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-rule origin-left"
      />
    </section>
  )
}
