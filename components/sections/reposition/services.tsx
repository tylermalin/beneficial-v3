'use client'

import { motion } from 'framer-motion'
import { BrainCircuit, Coins, Scale, Compass, Megaphone, Code } from 'lucide-react'
import { Reveal, SplitWords, StaggerGroup, staggerItem } from '@/components/ui/reveal'

const expandedServices = [
  {
    icon: BrainCircuit,
    title: 'AI Implementations & SMB Workflows',
    desc: 'We audit business operations and integrate generative AI pipelines directly into your tools and workflows. From HIPAA-compliant medical transcribers to automatic client check-ins, we build internal systems that act as multipliers.',
    details: ['Workflow AI audits', 'LLM pipeline architecture', 'Security & HIPAA mappings', 'Prompt engineering systems']
  },
  {
    icon: Coins,
    title: 'Web3 & Token Engineering',
    desc: 'Comprehensive structural and regulatory design for modern decentralized networks. We design tokenomics, coordinate Cayman/EU setups, and structure token distribution agreements (SAFT, SAFE-T) with external legal teams.',
    details: ['Tokenomics design & audit', 'Multi-entity Cayman/BVI setups', 'SAFT / SAFE-T instruments', 'DePIN & RWA structures']
  },
  {
    icon: Scale,
    title: 'Legal Engineering',
    desc: 'The essential layer between your legal counsel and operating team. We translate complex legal parameters into clean code, parse massive contract portfolios with automated parsers, and execute technical compliance audits.',
    details: ['Counsel-ready term sheets', 'Cap table structural reviews', 'Automated contract parsing', 'Vendor DPAs & agreements']
  },
  {
    icon: Compass,
    title: 'Planning & Scaling Strategy',
    desc: 'Bain-style corporate strategy for high-growth firms. We structure board materials, refine fundraising narratives for regulated raises, coordinate service sheet releases, and map exit strategies.',
    details: ['Board & investor prep', 'Multi-entity corporate scaling', 'Growth modeling & advisory', 'Strategic partnership framing']
  },
  {
    icon: Megaphone,
    title: 'GTM & Growth Marketing',
    desc: 'Building brand visibility at the regulated frontier. We draft high-impact educational field guides, design search-engine optimized content funnels, and write automated agent strategies for social media amplification.',
    details: ['SEO content engineering', 'Field guide & lead gen design', 'Narrative positioning', 'Social visibility campaigns']
  },
  {
    icon: Code,
    title: 'Next-Gen Software Development',
    desc: 'High-end production engineering for responsive web applications, secure client portals, and automated backends. We build with modern tools (Next.js, Tailwind, React Three Fiber) and deploy with optimal Core Web Vitals.',
    details: ['React / Next.js web applications', 'Secure client portals', 'Simulated AI workflows & agents', 'LCP & performance optimization']
  }
]

export function Services() {
  return (
    <section className="py-24 sm:py-32 bg-cream border-b border-rule relative" id="services">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-16 sm:mb-24">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-sienna" />
              <span className="text-xs uppercase tracking-[0.22em] text-sienna font-medium">
                Practice Areas
              </span>
            </div>
          </Reveal>
          <h2 className="font-serif text-4xl sm:text-5xl text-forest tracking-tight leading-[1.05]">
            <span className="block">
              <SplitWords text="McKinsey execution speed." />
            </span>
            <span className="block">
              <SplitWords text="Founder-level empathy." delay={0.15} />{' '}
              <motion.em
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="italic font-light text-sienna"
              >
                Six practices under one roof.
              </motion.em>
            </span>
          </h2>
        </div>

        <StaggerGroup
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          stagger={0.08}
        >
          {expandedServices.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className="group relative bg-sand-soft border border-rule/30 p-8 flex flex-col justify-between overflow-hidden cursor-default min-h-[380px]"
              >
                {/* Visual grain / hover backdrop */}
                <div className="absolute inset-0 bg-background opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-sienna origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
                  style={{ width: '100%' }}
                  aria-hidden="true"
                />

                <div>
                  <div className="text-sienna mb-6 shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <IconComponent size={34} />
                  </div>
                  <h3 className="font-serif text-2xl text-forest mb-4 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-ink leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-auto border-t border-rule/30 pt-4">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-soft font-semibold mb-2">
                    Capabilities
                  </div>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-forest">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-1.5">
                        <span className="text-sienna">•</span>
                        <span className="truncate">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
