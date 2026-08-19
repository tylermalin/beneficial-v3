'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Reveal, StaggerGroup, staggerItem } from '@/components/ui/reveal'
import { Button, Eyebrow, Tag } from '@/components/ui/obsidian'
import { OperatorIcon, ArchitectIcon, ProjectIcon, CustomIcon } from '@/components/ui/icons'
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
    desc: 'For pre-seed, seed, and growing SMB founders who need fractional structural guidance across operations, strategy, and technology.',
    listLabel: 'Includes',
    list: [
      'Up to 8 hours of advisory / month',
      'Cap table, corporate structuring & governance review',
      'AI workflow tooling & automation advisory',
      'Vendor, developer, and outside-counsel referrals',
      'Monthly structural alignment session',
      'Async workspace support for rapid questions',
    ],
    fit: 'Bootstrapped startups, hardware and SaaS ventures, SMBs adopting AI, and lightly regulated entities.',
    Icon: OperatorIcon,
  },
  {
    name: 'Architect',
    price: '$15,000',
    cadence: '/ month',
    desc: 'For scaling enterprises and token networks launching custom tech, navigating global structures, or building in heavily regulated spaces.',
    listLabel: 'Includes',
    list: [
      'Up to 16 hours of advisory / month',
      'AI compliance & data security mapping (HIPAA, SOC 2)',
      'Custom software architecture & dev roadmap',
      'Multi-jurisdictional setup with counsel coordination',
      'Token structural design & distribution scheduling',
      'Board and investor prep for regulated rounds',
      'Bi-weekly dedicated working sessions',
    ],
    fit: 'High-growth AI startups, Web3 protocols, DePIN networks, digital health, and cross-border SaaS.',
    Icon: ArchitectIcon,
    featured: true,
  },
  {
    name: 'Project',
    price: 'From $25,000',
    desc: 'Flat-fee, high-velocity engagements with defined, time-boxed milestones across development, marketing, legal engineering, or strategy.',
    listLabel: 'Examples',
    list: [
      'Full-stack software / AI agent build & integration',
      'Go-to-market execution & branding roadmap',
      'Regulatory positioning audits & compliance memos',
      'Cayman, BVI, or EU multi-entity structuring memos',
      'Structured contract drafting (SAFTs, DPAs, SLAs)',
    ],
    fit: 'Founders with a specific, time-boxed product, growth, or compliance milestone.',
    Icon: ProjectIcon,
  },
  {
    name: 'Custom',
    price: 'Bespoke',
    desc: 'Build a completely custom advisory, development, or legal engineering plan aligned with your timeline and capacity.',
    listLabel: 'Capabilities',
    list: [
      'Custom advisory hours or dedicated builders',
      'Flexible deliverables (AI, dev, Web3, strategy)',
      'Specialized software & AI model fine-tuning',
      'Brand messaging & growth marketing squads',
      'Direct Slack / Cal channel connection',
      'Flexible pricing (hourly, flat, or monthly)',
    ],
    fit: 'Companies needing custom builders, marketing squads, or bespoke advisory packages.',
    Icon: CustomIcon,
  },
]

export function Tiers() {
  return (
    <section className="border-b border-line-hairline bg-section py-24 sm:py-32" id="engagements">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="mb-14 max-w-measure">
          <Reveal>
            <Eyebrow index="04">Engagements</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-[clamp(1.75rem,4vw,2.25rem)] font-light leading-[1.1] tracking-[-0.02em] text-body">
              Four ways to work together. <span className="headline-em">Pick the one that fits the problem</span>.
            </h2>
          </Reveal>
        </div>

        <StaggerGroup className="grid gap-6 sm:grid-cols-2" stagger={0.08}>
          {tiers.map((tier) => (
            <motion.div key={tier.name} className="flex" variants={staggerItem}>
              <TierCard featured={tier.featured}>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-2xl font-light tracking-[-0.02em] text-ink">{tier.name}</div>
                    {tier.featured && (
                      <div className="mt-2">
                        <Tag tone="lime" dot>Most common</Tag>
                      </div>
                    )}
                  </div>
                  <span className={tier.featured ? 'text-lime-400' : 'text-faint'}>
                    <tier.Icon size={28} />
                  </span>
                </div>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="tabular text-[40px] font-medium leading-none text-ink">{tier.price}</span>
                  {tier.cadence && <span className="text-sm text-faint">{tier.cadence}</span>}
                </div>

                <p className="mt-5 max-w-measure text-[15px] leading-[1.6] text-body">{tier.desc}</p>

                <div className="eyebrow mt-7 text-faint">{tier.listLabel}</div>
                <ul className="mt-3 space-y-2.5">
                  {tier.list.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[13px] leading-snug text-body">
                      <Check size={14} strokeWidth={2} className="mt-0.5 shrink-0 text-lime-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button
                    href={`/portal/onboarding?tier=${tier.name}`}
                    variant={tier.featured ? 'accent' : 'secondary'}
                    size="md"
                    className="w-full"
                  >
                    {tier.name === 'Custom' ? 'Design custom plan' : `Retain ${tier.name}`}
                  </Button>
                </div>

                <div className="mt-8 border-t border-line-hairline pt-5 text-[13px] leading-snug text-faint">
                  <span className="eyebrow mr-2 inline text-faint">Right fit</span>
                  {tier.fit}
                </div>
              </TierCard>
            </motion.div>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Button href="https://cal.com/beneficialtech" external variant="primary" size="md">
              Book a 30-min intro
            </Button>
            <p className="text-sm text-body">
              No pitch. We establish whether there&apos;s a fit and send a scope within 48 hours.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
