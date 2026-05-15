'use client'

import { motion } from 'framer-motion'
import { Reveal, SplitWords, StaggerGroup, staggerItem } from '@/components/ui/reveal'

const steps = [
  { num: '01', title: 'Intro call', text: '30 minutes. We figure out if there’s a fit. No pitch.' },
  { num: '02', title: 'Scope', text: 'Statement of work or retainer agreement within 48 hours.' },
  { num: '03', title: 'Onboard', text: 'Welcome packet, shared workspace, kickoff within the first week.' },
  { num: '04', title: 'Operate', text: 'Monthly sessions, async support, regular structural reviews.' },
]

export function HowWeWork() {
  return (
    <section className="py-24 sm:py-32 border-b border-rule">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-sienna" />
            <span className="text-xs uppercase tracking-[0.22em] text-sienna font-medium">
              How we work
            </span>
          </div>
        </Reveal>
        <h2 className="font-serif text-4xl sm:text-5xl text-forest tracking-tight max-w-2xl leading-[1.05]">
          <SplitWords text="Four steps." />{' '}
          <motion.em
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="italic font-light text-sienna"
          >
            No procurement theater.
          </motion.em>
        </h2>

        <div className="relative mt-16">
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-7 left-0 right-0 h-px bg-rule origin-left hidden lg:block"
          />

          <StaggerGroup
            className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14"
            stagger={0.12}
          >
            {steps.map((step, i) => (
              <motion.div key={step.num} variants={staggerItem} className="group relative">
                <motion.div
                  className="absolute -top-0.5 left-0 w-3 h-3 rounded-full bg-sand border border-sienna -translate-y-1/2 hidden lg:block"
                  whileHover={{ scale: 1.4 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="lg:pt-14">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                    className="font-serif text-5xl text-sienna leading-none mb-1"
                  >
                    {step.num}
                  </motion.div>
                  <div className="mt-4 font-serif text-xl text-forest">
                    {step.title}
                  </div>
                  <p className="mt-2 text-sm text-slate-ink leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
