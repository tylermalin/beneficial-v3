'use client'

import { StaggerGroup, staggerItem } from '@/components/ui/reveal'
import { motion } from 'framer-motion'

const items = [
  { primary: 'Operator-attorney', secondary: 'Building & advising' },
  { primary: '15+ years law firm', secondary: 'Litigation experience' },
  { primary: 'CFTC', secondary: 'Regulatory fellowship' },
  { primary: 'Fordham Law', secondary: 'JD' },
  { primary: 'Two prior exits', secondary: 'One Inc. 500, acq. Maker Studios' },
  { primary: 'Mālama Labs', secondary: 'CEO · climate dMRV' },
]

export function Credentials() {
  return (
    <section className="border-b border-line-hairline bg-section py-16">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <StaggerGroup
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line-hairline bg-line-hairline md:grid-cols-3"
          stagger={0.06}
        >
          {items.map((item) => (
            <motion.div
              key={item.primary}
              variants={staggerItem}
              className="flex flex-col justify-center bg-canvas p-7"
            >
              <div className="text-lg font-light leading-tight text-ink">{item.primary}</div>
              <div className="mt-2 text-[13px] text-faint">{item.secondary}</div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
