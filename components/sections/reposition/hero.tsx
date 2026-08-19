'use client'

import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { Button, Card, Divider } from '@/components/ui/obsidian'

const metrics = [
  { v: '20+', k: 'Founders served' },
  { v: '7', k: 'Tokens structured' },
  { v: 'US · EU · KY', k: 'Jurisdictions' },
  { v: '48h', k: 'Time to scope' },
]

const credentials = [
  { label: 'Operator-attorney', value: 'Building & advising' },
  { label: '15+ years', value: 'Law-firm litigation' },
  { label: 'CFTC', value: 'Regulatory fellowship' },
  { label: 'Fordham JD', value: 'School of Law' },
  { label: 'Two prior exits', value: 'One Inc. 500, acq. Maker Studios' },
  { label: 'Mālama Labs', value: 'CEO · climate dMRV' },
]

export function RepositionHero() {
  return (
    <section className="relative overflow-hidden pt-[136px] pb-24 sm:pt-40 sm:pb-32">
      {/* stacked texture: masked hairline grid + top veil */}
      <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" />
      <div aria-hidden className="veil-top pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-[1200px] items-start gap-12 px-6 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="eyebrow mb-8">Fractional · Project</div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="max-w-measure text-[clamp(2.5rem,6vw,3.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-body">
              Strategy and engineering for builders at the{' '}
              <span className="headline-em">regulated frontier</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-measure text-[15px] leading-[1.6] text-body">
              Legal engineering, software development, and AI implementation in one
              engagement. You get the enterprise structure built, the workflows
              integrated, and the execution work traditional agencies leave unshipped.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                href="https://cal.com/beneficialtech"
                external
                variant="accent"
                size="lg"
              >
                Book a 30-min call
              </Button>
              <Button href="/beneficial-technology-services.pdf" variant="secondary" size="lg">
                Download service sheet
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-14 grid grid-cols-2 gap-8 border-t border-line-hairline pt-10 sm:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.k} className="flex flex-col">
                  <span className="tabular text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-none text-ink">
                    {m.v}
                  </span>
                  <span className="mt-2 text-[13px] text-faint">{m.k}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <Card variant="glass" glow className="p-8">
              <div className="eyebrow mb-6">Who you work with</div>
              <div className="flex flex-col">
                {credentials.map((c, i) => (
                  <div key={c.label}>
                    {i > 0 && <Divider className="bg-line-hairline" />}
                    <div className="flex items-baseline justify-between gap-4 py-3.5">
                      <span className="text-[15px] text-ink">{c.label}</span>
                      <span className="text-right text-[13px] text-faint">{c.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 border-t border-line-hairline pt-5 font-mono text-xs text-faint">
                <ArrowUpRight className="h-3.5 w-3.5 text-lime-400" />
                operator-attorney · US · EU · KY
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
