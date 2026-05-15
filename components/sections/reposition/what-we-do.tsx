'use client'

import { motion } from 'framer-motion'
import {
  TokenIcon,
  MultiEntityIcon,
  InstrumentIcon,
  RegulatoryIcon,
  ClimateIcon,
  ComplianceIcon,
  NarrativeIcon,
} from '@/components/ui/icons'
import { Reveal, SplitWords, StaggerGroup, staggerItem } from '@/components/ui/reveal'

const specialties = [
  { Icon: TokenIcon, label: 'Token launches' },
  { Icon: MultiEntityIcon, label: 'Multi-entity structures' },
  { Icon: InstrumentIcon, label: 'SAFT & SAFE design' },
  { Icon: RegulatoryIcon, label: 'Regulatory positioning' },
  { Icon: ClimateIcon, label: 'Climate-asset frameworks' },
  { Icon: ComplianceIcon, label: 'Compliance architecture' },
  { Icon: NarrativeIcon, label: 'Investor narrative' },
]

export function WhatWeDo() {
  return (
    <section className="py-24 sm:py-32 border-b border-rule relative">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-sienna" />
                <span className="text-xs uppercase tracking-[0.22em] text-sienna font-medium">
                  What we do
                </span>
              </div>
            </Reveal>
            <h2 className="font-serif text-3xl lg:text-4xl text-forest tracking-tight leading-[1.15]">
              <SplitWords text="Seven things we ship." />
            </h2>
            <Reveal delay={0.3}>
              <p className="mt-6 font-serif italic text-base text-slate-ink leading-relaxed max-w-md">
                The layer most founders only realize they need after something has already broken at scale.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <StaggerGroup
              className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-rule"
              stagger={0.06}
            >
              {specialties.map(({ Icon, label }) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-cream p-7 flex items-start gap-5 cursor-default overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-sand-soft opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-sienna origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
                    style={{ width: '100%' }}
                    aria-hidden="true"
                  />
                  <div className="relative shrink-0 text-forest group-hover:text-sienna transition-colors duration-500">
                    <Icon size={38} />
                  </div>
                  <div className="relative pt-1">
                    <div className="font-serif text-xl text-forest leading-snug tracking-tight">
                      {label}
                    </div>
                  </div>
                </motion.div>
              ))}
              <motion.div
                variants={staggerItem}
                className="bg-forest text-cream p-7 flex flex-col justify-between min-h-[140px]"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-[#D4A574]">
                  And what we don&apos;t
                </div>
                <p className="font-serif italic text-lg leading-snug">
                  We&apos;re not a law firm. We coordinate with the counsel you retain.
                </p>
              </motion.div>
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  )
}
