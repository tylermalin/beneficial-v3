'use client'

import { motion } from 'framer-motion'
import { Reveal, StaggerGroup, staggerItem } from '@/components/ui/reveal'
import { Eyebrow } from '@/components/ui/obsidian'

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
    headline: 'Built a multi-entity framework for a cross-jurisdiction AI compliance startup.',
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
    <section className="border-b border-line-hairline bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="mb-14 max-w-measure">
          <Reveal>
            <Eyebrow index="06">Recent work</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-[clamp(1.75rem,4vw,2.25rem)] font-light leading-[1.1] tracking-[-0.02em] text-body">
              A sample of what we&apos;ve <span className="headline-em">shipped</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-measure text-[15px] leading-[1.6] text-faint">
              Anonymized to protect founders. Happy to give specifics on a call under NDA.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="border-t border-line-hairline" stagger={0.06}>
          {work.map((item, i) => (
            <motion.div
              key={item.headline}
              variants={staggerItem}
              className="grid grid-cols-1 gap-2 border-b border-line-hairline py-7 sm:grid-cols-[96px_1fr] sm:gap-6"
            >
              <span className="font-mono text-sm text-lime-400 tabular">
                — {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <div className="mb-2 text-[13px] text-faint">{item.tag}</div>
                <div className="max-w-measure text-[18px] font-light leading-snug text-ink">
                  {item.headline}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
