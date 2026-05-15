'use client'

import { motion } from 'framer-motion'
import { Reveal, SplitWords, StaggerGroup, staggerItem } from '@/components/ui/reveal'

const work = [
  {
    tag: 'Climate · Series A prep',
    headline: 'Restructured a $4M-raised climate startup’s cap table and SAFT obligations ahead of Series A.',
  },
  {
    tag: 'DePIN · Token launch',
    headline: 'Designed token launch structure and regulatory positioning for a DePIN environmental data network.',
  },
  {
    tag: 'AI · Multi-jurisdiction',
    headline: 'Built multi-entity framework for a cross-jurisdiction AI compliance startup.',
  },
  {
    tag: 'RWA · Counsel coordination',
    headline: 'Coordinated regulatory memo and counsel selection for a tokenized real-world asset issuer.',
  },
  {
    tag: 'Climate finance · $6M seed',
    headline: 'Advised on instrument design and investor narrative for a $6M seed in regulated climate finance.',
  },
]

export function RecentWork() {
  return (
    <section className="py-24 sm:py-32 border-b border-rule">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-sienna" />
                <span className="text-xs uppercase tracking-[0.22em] text-sienna font-medium">
                  Recent work
                </span>
              </div>
            </Reveal>
            <h2 className="font-serif text-3xl lg:text-4xl text-forest tracking-tight leading-[1.15]">
              <SplitWords text="A sample of what we've shipped." />
            </h2>
            <Reveal delay={0.4}>
              <p className="mt-6 text-sm text-slate-ink leading-relaxed">
                Anonymized to protect founders. Happy to give specifics on a call under NDA.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <StaggerGroup className="border-y border-rule" stagger={0.08}>
              {work.map((item, i) => (
                <motion.div
                  key={item.headline}
                  variants={staggerItem}
                  className="group relative py-7 border-b border-rule last:border-b-0 cursor-default overflow-hidden"
                >
                  <motion.div
                    className="absolute left-0 top-0 h-full w-1 bg-sienna scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-700 ease-out"
                    aria-hidden="true"
                  />
                  <div className="grid grid-cols-12 gap-4 items-baseline pl-4">
                    <span className="col-span-12 sm:col-span-1 font-serif italic text-sienna text-sm tabular-nums">
                      — {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="col-span-12 sm:col-span-11">
                      <div className="text-[11px] uppercase tracking-[0.16em] text-slate-soft mb-1.5">
                        {item.tag}
                      </div>
                      <div className="text-base sm:text-lg text-forest leading-snug">
                        {item.headline}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  )
}
