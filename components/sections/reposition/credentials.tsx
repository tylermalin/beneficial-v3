'use client'

import { motion } from 'framer-motion'
import { StaggerGroup, staggerItem } from '@/components/ui/reveal'

const items = [
  { primary: 'Operator-attorney', secondary: 'building & advising' },
  { primary: '15+ Yrs Law Firm', secondary: 'experience' },
  { primary: 'CFTC', secondary: 'regulatory fellowship' },
  { primary: 'Fordham Law', secondary: 'JD' },
  { primary: 'Two prior exits', secondary: 'one Inc. 500, acq. Maker Studios' },
  { primary: 'Mālama Labs', secondary: 'CEO · climate dMRV' },
]

export function Credentials() {
  return (
    <section className="py-14 sm:py-16 bg-sand-soft border-b border-rule relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        className="absolute -left-12 top-1/2 -translate-y-1/2 font-serif italic text-sienna/15 text-[14rem] leading-none pointer-events-none select-none"
        initial={{ x: -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        ·
      </motion.div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative">
        <StaggerGroup
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-7"
          stagger={0.06}
        >
          {items.map((item) => (
            <motion.div
              key={item.primary}
              variants={staggerItem}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col cursor-default"
            >
              <div className="h-px w-6 bg-sienna mb-3 origin-left group-hover:w-12 transition-all duration-500" />
              <div className="font-serif text-lg text-forest leading-tight">
                {item.primary}
              </div>
              <div className="mt-1 text-[10px] text-slate-soft uppercase tracking-[0.16em]">
                {item.secondary}
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
