'use client'

import { motion } from 'framer-motion'
import { Reveal, SplitWords, StaggerGroup, staggerItem } from '@/components/ui/reveal'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { OperatorIcon, ArchitectIcon, ProjectIcon } from '@/components/ui/icons'
import { TierCard } from './tier-card'
import type { ComponentType, SVGProps } from 'react'

type Tier = {
  name: string
  price: string
  cadence?: string
  desc: string
  listLabel: string
  list: string[]
  fit: string
  Icon: ComponentType<SVGProps<SVGSVGElement> & { size?: number }>
  featured?: boolean
}

const tiers: Tier[] = [
  {
    name: 'Operator',
    price: '$8,500',
    cadence: '/ month',
    desc: 'For pre-seed and seed-stage founders who need a structural partner, not a law firm.',
    listLabel: 'Includes',
    list: [
      'Up to 8 hours of advisory / month',
      'Cap table, SAFE & contract structural review',
      'Vendor and counsel referrals',
      'Monthly working session',
      'Async support via shared workspace',
    ],
    fit: 'Equity-only startups, climate projects without token components, AI startups in lightly regulated verticals.',
    Icon: OperatorIcon,
  },
  {
    name: 'Architect',
    price: '$15,000',
    cadence: '/ month',
    desc: 'For founders launching tokens, navigating multi-jurisdiction structures, or operating in heavily regulated verticals.',
    listLabel: 'Includes',
    list: [
      'Up to 16 hours of advisory / month',
      'Token structure & launch design',
      'SAFT, SAFE-T & instrument design',
      'Regulatory positioning & risk mapping',
      'Multi-entity setup with outside counsel',
      'Investor & board prep for regulated raises',
      'Bi-weekly working sessions',
    ],
    fit: 'Pre-launch token companies, DePIN networks, climate-asset issuers, regulated AI.',
    Icon: ArchitectIcon,
    featured: true,
  },
  {
    name: 'Project',
    price: 'From $25,000',
    desc: 'Flat-fee engagements for specific deliverables. Scoped per engagement. Defined timelines.',
    listLabel: 'Examples',
    list: [
      'Token launch structuring memo & execution roadmap',
      'Multi-entity setup across US, Cayman & EU',
      'Regulatory positioning memo for a fundraise',
      'SAFT documentation & instrument design',
      'Counsel selection & engagement management',
    ],
    fit: 'Founders with a specific, time-boxed structural problem.',
    Icon: ProjectIcon,
  },
]

export function Tiers() {
  return (
    <section className="py-24 sm:py-32 bg-sand-soft border-b border-rule relative" id="engagements">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-sienna" />
              <span className="text-xs uppercase tracking-[0.22em] text-sienna font-medium">
                Engagements
              </span>
            </div>
          </Reveal>
          <h2 className="font-serif text-4xl sm:text-5xl text-forest tracking-tight leading-[1.05]">
            <span className="block">
              <SplitWords text="Three ways to work" />
            </span>
            <span className="block">
              <SplitWords text="with us." delay={0.15} />{' '}
              <motion.em
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="italic font-light text-sienna"
              >
                Pick the one that fits the problem.
              </motion.em>
            </span>
          </h2>
        </div>

        <StaggerGroup
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          stagger={0.12}
        >
          {tiers.map((tier) => (
            <motion.div key={tier.name} variants={staggerItem}>
              <TierCard featured={tier.featured}>
                {tier.featured && (
                  <div className="absolute top-0 right-0 -mt-3 mr-6 z-20">
                    <motion.span
                      initial={{ opacity: 0, y: -4 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="inline-flex bg-sienna text-cream text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 font-medium"
                    >
                      Most common
                    </motion.span>
                  </div>
                )}

                <div className="flex items-start justify-between mb-2">
                  <div className="font-serif text-3xl tracking-tight">{tier.name}</div>
                  <div className={tier.featured ? 'text-[#D4A574]' : 'text-sienna'}>
                    <tier.Icon size={32} />
                  </div>
                </div>
                <div className={`flex items-baseline gap-1.5 ${tier.featured ? 'text-[#D4A574]' : 'text-sienna'}`}>
                  <span className="font-medium text-lg">{tier.price}</span>
                  {tier.cadence && (
                    <span className="text-sm opacity-80">{tier.cadence}</span>
                  )}
                </div>

                <p className={`mt-5 text-sm leading-relaxed ${tier.featured ? 'text-cream/80' : 'text-slate-ink'}`}>
                  {tier.desc}
                </p>

                <div className={`mt-7 text-[10px] uppercase tracking-[0.18em] font-medium ${
                  tier.featured ? 'text-cream/60' : 'text-slate-soft'
                }`}>
                  {tier.listLabel}
                </div>

                <ul className="mt-3 space-y-2 flex-grow">
                  {tier.list.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.04, duration: 0.4 }}
                      className="flex gap-3 text-sm leading-snug"
                    >
                      <span className={`${tier.featured ? 'text-[#D4A574]' : 'text-sienna'} mt-0.5 shrink-0`}>›</span>
                      <span className={tier.featured ? 'text-cream' : 'text-forest'}>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className={`mt-8 pt-5 border-t font-serif italic text-xs leading-snug ${
                  tier.featured
                    ? 'border-cream/15 text-cream/70'
                    : 'border-rule text-slate-ink'
                }`}>
                  <span className={`not-italic font-sans uppercase tracking-wider text-[10px] mr-2 ${
                    tier.featured ? 'text-cream/50' : 'text-slate-soft'
                  }`}>
                    Right fit
                  </span>
                  {tier.fit}
                </div>
              </TierCard>
            </motion.div>
          ))}
        </StaggerGroup>

        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <MagneticButton href="https://cal.com/beneficialtech" external variant="forest" size="md">
              Book a 30-min intro
            </MagneticButton>
            <p className="text-sm text-slate-ink">
              No pitch. We figure out if there&apos;s a fit and send a scope within 48 hours.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
