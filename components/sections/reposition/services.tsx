'use client'

import { motion } from 'framer-motion'
import { BrainCircuit, Coins, Scale, Compass, Megaphone, Code, Check } from 'lucide-react'
import { Reveal, StaggerGroup, staggerItem } from '@/components/ui/reveal'
import { Card, Eyebrow, FeatureTile, Divider } from '@/components/ui/obsidian'

const services = [
  {
    icon: BrainCircuit,
    title: 'AI implementation & SMB workflows',
    desc: 'We audit your operations and wire generative-AI pipelines into the tools your team already uses. The result is internal systems that compound output instead of adding headcount.',
    details: ['Workflow AI audits', 'LLM pipeline architecture', 'Security & HIPAA mappings', 'Prompt engineering systems'],
  },
  {
    icon: Coins,
    title: 'Web3 & token engineering',
    desc: 'We design the tokenomics, coordinate the Cayman and EU entities, and structure distribution instruments with your counsel. You launch with a regulatory story that survives diligence.',
    details: ['Tokenomics design & audit', 'Cayman / BVI entity setups', 'SAFT / SAFE-T instruments', 'DePIN & RWA structures'],
  },
  {
    icon: Scale,
    title: 'Legal engineering',
    desc: 'We translate regulatory parameters into working code and parse contract portfolios with automated tooling. Your counsel and operating team finally share one source of truth.',
    details: ['Counsel-ready term sheets', 'Cap table structural reviews', 'Automated contract parsing', 'Vendor DPAs & agreements'],
  },
  {
    icon: Compass,
    title: 'Planning & scaling strategy',
    desc: 'We structure board materials, sharpen the fundraising narrative, and map the entity path ahead of each raise. You walk into regulated rounds with the structure already defended.',
    details: ['Board & investor prep', 'Multi-entity corporate scaling', 'Growth modeling & advisory', 'Strategic partnership framing'],
  },
  {
    icon: Megaphone,
    title: 'GTM & growth marketing',
    desc: 'We build SEO content engines and field guides that earn attention at the regulated frontier. Qualified founders arrive already understanding what you do.',
    details: ['SEO content engineering', 'Field guide & lead-gen design', 'Narrative positioning', 'Social visibility campaigns'],
  },
  {
    icon: Code,
    title: 'Software development',
    desc: 'We ship production web apps, secure client portals, and automated backends on a modern stack. You get software that deploys clean and holds its performance budget.',
    details: ['React / Next.js applications', 'Secure client portals', 'AI workflows & agents', 'LCP & performance tuning'],
  },
]

export function Services() {
  return (
    <section className="border-b border-line-hairline bg-section py-24 sm:py-32" id="services">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="mb-16 max-w-measure">
          <Reveal>
            <Eyebrow index="01">Practice areas</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-[clamp(1.75rem,4vw,2.25rem)] font-light leading-[1.1] tracking-[-0.02em] text-body">
              Six practice areas, <span className="headline-em">one coordinated engagement</span>.
            </h2>
          </Reveal>
        </div>

        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.title} variants={staggerItem} className="flex">
                <Card variant="glass" interactive className="flex w-full flex-col p-7">
                  <FeatureTile>
                    <Icon size={16} strokeWidth={1.5} />
                  </FeatureTile>
                  <h3 className="mt-6 text-xl font-normal leading-snug tracking-[-0.02em] text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-body">{service.desc}</p>

                  <Divider className="my-6" />

                  <ul className="mt-auto grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-[13px] text-body">
                        <Check size={14} strokeWidth={2} className="shrink-0 text-lime-400" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
