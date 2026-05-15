'use client'

import { motion } from 'framer-motion'
import { Reveal, SplitWords } from '@/components/ui/reveal'

export function WhatWeDontDo() {
  return (
    <section className="py-24 sm:py-32 bg-sand border-b border-rule relative overflow-hidden">
      <motion.div
        aria-hidden="true"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.07 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-20 top-1/2 -translate-y-1/2 font-serif text-forest text-[28rem] leading-none pointer-events-none select-none italic"
      >
        no
      </motion.div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-sienna" />
                <span className="text-xs uppercase tracking-[0.22em] text-sienna font-medium">
                  What we don&apos;t do
                </span>
              </div>
            </Reveal>
            <h3 className="font-serif text-2xl text-forest tracking-tight leading-[1.15]">
              <SplitWords text="A short list of things we won't pretend to do." />
            </h3>
          </div>

          <div className="lg:col-span-8 max-w-3xl">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="border-l-2 border-sienna pl-8 origin-top"
            >
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-forest leading-[1.2] tracking-tight">
                <SplitWords text="We're not a law firm. We don't give legal advice. We don't represent clients in legal matters. We don't file regulatory submissions on your behalf." />
              </p>

              <Reveal delay={0.4}>
                <p className="mt-8 text-base text-slate-ink leading-relaxed">
                  We do the structural and strategic work upstream of legal, and we coordinate with the counsel you retain. For any matter requiring legal advice or representation, you&apos;ll work with an attorney you separately engage — <span className="text-forest">and we&apos;ll help you find the right one.</span>
                </p>
              </Reveal>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
