'use client'

import { motion } from 'framer-motion'
import { Reveal, StaggerGroup, staggerItem } from '@/components/ui/reveal'
import { Eyebrow } from '@/components/ui/obsidian'

const fits = [
  { label: 'Token teams', statement: 'Token-launching companies that need structure before they hire BigLaw.' },
  { label: 'Climate infra', statement: 'Climate and environmental projects with credit, registry, or asset-tokenization components.' },
  { label: 'Regulated AI', statement: 'AI and data startups operating in regulated verticals.' },
  { label: 'Cross-border', statement: 'Cross-jurisdiction businesses where US, EU, and offshore structures interact.' },
  { label: 'Crypto-native', statement: 'Crypto-native teams that need a coherent regulatory story before they fundraise.' },
]

export function WhoWeWorkWith() {
  return (
    <section className="border-b border-line-hairline bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="mb-14 max-w-measure">
          <Reveal>
            <Eyebrow index="03">Who we work with</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-[clamp(1.75rem,4vw,2.25rem)] font-light leading-[1.1] tracking-[-0.02em] text-body">
              Founders raising pre-seed through Series A, building where the{' '}
              <span className="headline-em">standard playbook doesn&apos;t fit</span>.
            </h2>
          </Reveal>
        </div>

        <StaggerGroup className="border-t border-line-hairline" stagger={0.06}>
          {fits.map((fit, i) => (
            <motion.div
              key={fit.label}
              variants={staggerItem}
              className="grid grid-cols-1 gap-2 border-b border-line-hairline py-7 sm:grid-cols-[96px_1fr] sm:gap-6"
            >
              <span className="font-mono text-sm text-lime-400 tabular">
                — {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <div className="mb-2 text-[13px] text-faint">{fit.label}</div>
                <div className="max-w-measure text-[18px] font-light leading-snug text-ink">
                  {fit.statement}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
