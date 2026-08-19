'use client'

import { Reveal } from '@/components/ui/reveal'
import { Card, Eyebrow, Tag } from '@/components/ui/obsidian'

const specialties = [
  'Token launches',
  'Multi-entity structures',
  'SAFT & SAFE design',
  'Regulatory positioning',
  'Climate-asset frameworks',
  'Compliance architecture',
  'Investor narrative',
]

export function WhatWeDo() {
  return (
    <section className="border-b border-line-hairline bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow index="02">What we do</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 max-w-measure text-[clamp(1.75rem,4vw,2.25rem)] font-light leading-[1.1] tracking-[-0.02em] text-body">
                Seven things we ship, and <span className="headline-em">one we won&apos;t</span>.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="flex flex-wrap gap-3">
                {specialties.map((label) => (
                  <Tag key={label} dot>
                    {label}
                  </Tag>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <Card variant="outline" className="mt-8 p-8">
                <div className="eyebrow mb-4 text-faint">And what we don&apos;t</div>
                <p className="max-w-measure text-lg font-light leading-[1.4] tracking-[-0.02em] text-ink">
                  We&apos;re not a law firm. We coordinate with the counsel you retain.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
