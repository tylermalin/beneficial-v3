import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FinalCTA } from '@/components/sections/reposition/cta'
import { Button, Eyebrow, Card, Divider } from '@/components/ui/obsidian'

export type Practice = {
  slug: string
  num: string
  category: string
  name: string
  headline: string
  subhead: string
  difference: {
    kicker: string
    headline: string
    intro: string
    rows: { before: string; after: string }[]
  }
  whenPeopleCall: {
    kicker: string
    headline: string
    items: { title: string; body: string }[]
    cta: string
  }
  deliverables: {
    kicker: string
    headline: string
    items: { title: string; whatItIs: string; whatItPrevents: string }[]
  }
  delivery: {
    kicker: string
    headline: string
    intro: string
    steps: { title: string; body: string; gate: string }[]
    guardrails: { title: string; body: string }
  }
  oneArchitecture: {
    kicker: string
    headline: string
    links: { name: string; href: string; body: string }[]
    footer: string
  }
  work: {
    kicker: string
    headline: string
    items: { tag: string; title: string; body: string }[]
  }
}

export function ExpertisePage({ p }: { p: Practice }) {
  return (
    <main className="obsidian min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line-hairline pt-[136px] pb-16 sm:pt-40 sm:pb-20">
        <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" />
        <div aria-hidden className="veil-top pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="max-w-4xl">
            <div className="eyebrow mb-6">Practice {p.num} · {p.category} : {p.name}</div>
            <h1 className="text-[clamp(2.25rem,5.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-body">
              {p.headline}
            </h1>
            <p className="mt-8 max-w-measure text-[18px] leading-[1.6] text-body">{p.subhead}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="https://cal.com/beneficialtech" external variant="accent" size="lg">Book a structuring call</Button>
              <Button href="#deliverables" variant="secondary" size="lg">See what we deliver</Button>
            </div>
          </div>
        </div>
      </section>

      {/* The difference */}
      <section className="bg-canvas py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <Eyebrow>{p.difference.kicker}</Eyebrow>
          <h2 className="mt-6 max-w-[22ch] text-[clamp(1.6rem,3.6vw,2.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-ink">
            {p.difference.headline}
          </h2>
          <p className="mt-6 max-w-measure text-[18px] leading-[1.6] text-body">{p.difference.intro}</p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line-hairline sm:grid-cols-2">
            <div className="bg-section px-6 py-4 font-mono text-xs uppercase tracking-wider text-faint">Document by document</div>
            <div className="bg-[var(--lime-tint-08)] px-6 py-4 font-mono text-xs uppercase tracking-wider text-lime-400">Designed as a system</div>
            {p.difference.rows.map((r, i) => (
              <div key={i} className="contents">
                <div className="bg-section px-6 py-5 text-[15px] text-faint">{r.before}</div>
                <div className="bg-[rgba(204,255,0,0.03)] px-6 py-5 text-[15px] text-ink">{r.after}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When people call */}
      <section className="border-t border-line-hairline bg-section py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <Eyebrow>{p.whenPeopleCall.kicker}</Eyebrow>
          <h2 className="mt-6 max-w-[20ch] text-[clamp(1.6rem,3.6vw,2.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-ink">
            {p.whenPeopleCall.headline}
          </h2>
          <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {p.whenPeopleCall.items.map((it, i) => (
              <div key={i} className="border-t border-line-hairline pt-5">
                <div className="flex gap-4">
                  <span className="tabular font-mono text-[13px] text-lime-400">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-[18px] font-medium text-ink">{it.title}</h3>
                    <p className="mt-2 text-[15px] leading-[1.6] text-faint">{it.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="https://cal.com/beneficialtech" external variant="secondary" size="md">{p.whenPeopleCall.cta}</Button>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section id="deliverables" className="scroll-mt-24 border-t border-line-hairline bg-canvas py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <Eyebrow>{p.deliverables.kicker}</Eyebrow>
          <h2 className="mt-6 max-w-[22ch] text-[clamp(1.6rem,3.6vw,2.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-ink">
            {p.deliverables.headline}
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {p.deliverables.items.map((it, i) => (
              <Card key={i} variant="flat" className="flex flex-col p-8">
                <span className="tabular font-mono text-xs text-lime-400">{String(i + 1).padStart(2, '0')} /</span>
                <h3 className="mt-4 text-[20px] font-light tracking-[-0.01em] text-ink">{it.title}</h3>
                <div className="mt-5 font-mono text-[12px] uppercase tracking-wider text-faint">What it is</div>
                <p className="mt-2 text-[15px] leading-[1.6] text-body">{it.whatItIs}</p>
                <div className="mt-5 font-mono text-[12px] uppercase tracking-wider text-faint">What it prevents</div>
                <p className="mt-2 text-[15px] leading-[1.6] text-faint">{it.whatItPrevents}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="border-t border-line-hairline bg-section py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <Eyebrow>{p.delivery.kicker}</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.6rem,3.6vw,2.5rem)] font-light tracking-[-0.02em] text-ink">{p.delivery.headline}</h2>
          <p className="mt-5 max-w-measure text-[16px] leading-[1.6] text-faint">{p.delivery.intro}</p>
          <div className="mt-12 flex flex-col gap-4">
            {p.delivery.steps.map((st, i) => (
              <div key={i} className="grid gap-4 rounded-lg border border-line-hairline bg-canvas p-8 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-1"><span className="tabular text-[clamp(1.5rem,3vw,2.25rem)] font-light leading-none text-lime-400">{String(i + 1).padStart(2, '0')}</span></div>
                <div className="lg:col-span-7">
                  <h3 className="text-[18px] font-medium text-ink">{st.title}</h3>
                  <p className="mt-2 max-w-measure text-[15px] leading-[1.6] text-faint">{st.body}</p>
                </div>
                <div className="flex items-start lg:col-span-4">
                  <div className="font-mono text-[12px] uppercase tracking-wider text-lime-400">
                    Approval gate<span className="mt-1 block font-sans text-[14px] normal-case tracking-normal text-ink">{st.gate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-line-accent bg-[var(--lime-tint-08)] p-8">
            <h3 className="text-[18px] font-medium text-ink">{p.delivery.guardrails.title}</h3>
            <p className="mt-2 max-w-measure text-[15px] leading-[1.6] text-body">{p.delivery.guardrails.body}</p>
          </div>
        </div>
      </section>

      {/* One architecture */}
      <section className="border-t border-line-hairline bg-canvas py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <Eyebrow>{p.oneArchitecture.kicker}</Eyebrow>
          <h2 className="mt-6 max-w-[24ch] text-[clamp(1.6rem,3.6vw,2.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-ink">
            {p.oneArchitecture.headline}
          </h2>
          <div className="mt-10 flex flex-col">
            {p.oneArchitecture.links.map((l, i) => (
              <Link key={l.href} href={l.href} className="group block border-t border-line-hairline py-6 transition-colors hover:bg-[rgba(255,255,255,0.02)]">
                {i === p.oneArchitecture.links.length - 1 && <span className="sr-only">last</span>}
                <div className="grid gap-2 lg:grid-cols-12 lg:items-baseline lg:gap-8">
                  <h3 className="text-[18px] font-medium text-ink transition-colors group-hover:text-lime-400 lg:col-span-3">{l.name}</h3>
                  <p className="max-w-measure text-[15px] leading-[1.6] text-faint lg:col-span-9">{l.body}</p>
                </div>
              </Link>
            ))}
            <div className="border-t border-line-hairline" />
          </div>
          <p className="mt-8 max-w-measure text-[15px] leading-[1.6] text-faint">{p.oneArchitecture.footer}</p>
        </div>
      </section>

      {/* Work */}
      <section className="border-t border-line-hairline bg-section py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <Eyebrow>{p.work.kicker}</Eyebrow>
          <h2 className="mt-6 text-[clamp(1.6rem,3.6vw,2.5rem)] font-light tracking-[-0.02em] text-ink">{p.work.headline}</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {p.work.items.map((w, i) => (
              <Card key={i} variant="glass" className="flex flex-col p-8">
                <div className="eyebrow mb-4">{w.tag}</div>
                <h3 className="text-[22px] font-light tracking-[-0.01em] text-ink">{w.title}</h3>
                <p className="mt-3 max-w-measure text-[15px] leading-[1.6] text-body">{w.body}</p>
                <div className="mt-6 pt-2">
                  <Button href="https://cal.com/beneficialtech" external variant="secondary" size="sm">Book a call about a similar structure</Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/work" className="inline-flex items-center gap-2 font-mono text-sm text-lime-400 hover:underline">See all our work →</Link>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
