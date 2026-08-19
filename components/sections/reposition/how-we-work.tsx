'use client'

import { motion } from 'framer-motion'
import { Reveal, StaggerGroup, staggerItem } from '@/components/ui/reveal'
import { Card, Eyebrow } from '@/components/ui/obsidian'

const steps = [
  { num: '01', title: 'Intro call', text: '30 minutes. We establish whether there’s a fit. No pitch.' },
  { num: '02', title: 'Scope', text: 'Statement of work or retainer agreement within 48 hours.' },
  { num: '03', title: 'Onboard', text: 'Welcome packet, shared workspace, kickoff within the first week.' },
  { num: '04', title: 'Operate', text: 'Monthly sessions, async support, regular structural reviews.' },
]

export function HowWeWork() {
  return (
    <section className="border-b border-line-hairline bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="mb-14 max-w-measure">
          <Reveal>
            <Eyebrow index="05">How we work</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-[clamp(1.75rem,4vw,2.25rem)] font-light leading-[1.1] tracking-[-0.02em] text-body">
              Four steps, <span className="headline-em">no procurement theater</span>.
            </h2>
          </Reveal>
        </div>

        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {steps.map((step) => (
            <motion.div key={step.num} variants={staggerItem} className="flex">
              <Card variant="flat" className="flex w-full flex-col p-7">
                <span className="font-mono text-sm text-lime-400 tabular">{step.num}</span>
                <div className="mt-6 text-xl font-normal tracking-[-0.02em] text-ink">{step.title}</div>
                <p className="mt-2 text-[15px] leading-[1.6] text-body">{step.text}</p>
              </Card>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
