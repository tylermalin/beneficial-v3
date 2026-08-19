'use client'

import { Reveal } from '@/components/ui/reveal'
import { Card, Eyebrow } from '@/components/ui/obsidian'

export function WhatWeDontDo() {
  return (
    <section className="border-b border-line-hairline bg-canvas pb-24 sm:pb-32">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <Reveal>
          <Card variant="outline" className="p-8 sm:p-12">
            <Eyebrow>What we don&apos;t do</Eyebrow>
            <p className="mt-6 max-w-4xl text-[clamp(1.5rem,3.5vw,2rem)] font-light leading-[1.2] tracking-[-0.02em] text-ink">
              We&apos;re not a law firm. We don&apos;t give legal advice. We don&apos;t represent clients in legal matters. We don&apos;t file regulatory submissions on your behalf.
            </p>
            <p className="mt-8 max-w-measure text-[15px] leading-[1.6] text-body">
              We do the structural and strategic work upstream of legal, and we coordinate with the counsel you retain. For any matter requiring legal advice or representation, you&apos;ll work with an attorney you separately engage — <span className="text-ink">and we&apos;ll help you find the right one.</span>
            </p>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
