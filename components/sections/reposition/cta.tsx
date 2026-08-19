'use client'

import { Reveal } from '@/components/ui/reveal'
import { Button, Eyebrow } from '@/components/ui/obsidian'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-b border-line-hairline bg-section py-28 sm:py-36">
      <div aria-hidden className="veil-top pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow>Book a call</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 max-w-measure text-[clamp(2rem,5vw,3rem)] font-light leading-[1.05] tracking-[-0.03em] text-body">
              30 minutes to establish whether there&apos;s a fit.{' '}
              <span className="headline-em">No pitch</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-measure text-[15px] leading-[1.6] text-body">
              If you&apos;re stuck at the intersection of complex strategy, technical AI
              integration, and regulated legal bottlenecks, the call is free and short.
              If we&apos;re not the right partner, we&apos;ll tell you and point you somewhere better.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button href="https://cal.com/beneficialtech" external variant="accent" size="lg">
                Book a 30-min call
              </Button>
              <Button href="mailto:tyler@beneficial.technology" variant="ghost" size="lg" className="font-mono">
                tyler@beneficial.technology
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative h-[320px] w-full overflow-hidden rounded-2xl border border-line-hairline">
            <div
              className="absolute inset-0"
              style={{
                filter: 'saturate(.78) contrast(1.06) brightness(.82)',
                background:
                  'radial-gradient(60% 50% at 30% 25%, rgba(184,233,38,.28), transparent 60%),' +
                  'radial-gradient(50% 45% at 78% 70%, rgba(204,255,0,.16), transparent 60%),' +
                  'radial-gradient(40% 40% at 60% 40%, rgba(60,80,20,.5), transparent 70%),' +
                  '#0b0f06',
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, rgba(255,255,255,.12) 1px, transparent 0)',
                backgroundSize: '7px 7px',
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to bottom, transparent 45%, var(--bg-section))' }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
