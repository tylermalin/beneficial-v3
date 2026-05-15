'use client'

import { motion } from 'framer-motion'
import { Reveal, SplitWords, StaggerGroup, staggerItem } from '@/components/ui/reveal'

const fits = [
  'Token-launching companies that need structure before they hire BigLaw',
  'Climate and environmental infrastructure projects with credit, registry, or asset-tokenization components',
  'AI and data startups operating in regulated verticals',
  'Cross-jurisdiction businesses where US, EU, and offshore structures interact',
  'Crypto-native teams that need a coherent regulatory story before they fundraise',
]

export function WhoWeWorkWith() {
  return (
    <section className="py-24 sm:py-32 border-b border-rule">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-sienna" />
                <span className="text-xs uppercase tracking-[0.22em] text-sienna font-medium">
                  Who we work with
                </span>
              </div>
            </Reveal>
            <h2 className="font-serif text-3xl lg:text-4xl text-forest tracking-tight leading-[1.15]">
              <SplitWords text="Founders raising pre-seed through Series A." />
            </h2>
            <Reveal delay={0.4}>
              <p className="mt-6 text-sm text-slate-ink leading-relaxed">
                Building in places the standard legal playbook doesn&apos;t fit.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <StaggerGroup className="space-y-0" stagger={0.08}>
              {fits.map((fit, i) => (
                <motion.div
                  key={fit}
                  variants={staggerItem}
                  className="group relative py-7 border-t border-rule last:border-b cursor-default"
                >
                  <motion.div
                    className="absolute left-0 top-0 h-full w-0 bg-sand-soft -z-0 group-hover:w-full transition-all duration-700 ease-out"
                    aria-hidden="true"
                  />
                  <div className="relative grid grid-cols-12 gap-4 items-baseline">
                    <span className="col-span-2 sm:col-span-1 font-serif italic text-sienna text-sm tabular-nums">
                      — {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="col-span-10 sm:col-span-10 text-base sm:text-lg text-forest leading-snug">
                      {fit}
                    </span>
                    <motion.span
                      className="col-span-12 sm:col-span-1 text-sienna text-xl translate-y-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 hidden sm:block"
                      aria-hidden="true"
                    >
                      ›
                    </motion.span>
                  </div>
                </motion.div>
              ))}
            </StaggerGroup>

            <Reveal delay={0.3}>
              <p className="mt-10 font-serif italic text-xl text-slate-ink max-w-2xl leading-snug">
                If your legal questions are routinely returning <span className="text-forest">&ldquo;it depends,&rdquo;</span> you&apos;re probably in our zone.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
