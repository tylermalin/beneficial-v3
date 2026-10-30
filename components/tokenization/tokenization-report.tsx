'use client'

import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Card } from '@/components/ui/obsidian'
import {
  ERAS,
  MARKET_ROWS,
  TOTAL_AUM_LABEL,
  TOTAL_EX_STABLE_LABEL,
} from '@/lib/tokenization-data'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function TokenizationReport() {
  const [active, setActive] = useState(0)
  const era = ERAS[active]

  const onKey = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      setActive((i) => Math.min(i + 1, ERAS.length - 1))
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    }
  }, [])

  return (
    <div className="flex flex-col gap-16">
      {/* ---- Era stepper ---- */}
      <div
        role="tablist"
        aria-label="Tokenization eras, 2018 to 2030"
        onKeyDown={onKey}
        className="relative grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line-hairline sm:grid-cols-5"
      >
        {ERAS.map((e, i) => {
          const selected = i === active
          return (
            <button
              key={e.n}
              role="tab"
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={`group relative flex flex-col gap-1 px-5 py-4 text-left transition-colors duration-200 ease-obsidian-out ${
                selected ? 'bg-[var(--lime-tint-08)]' : 'bg-section hover:bg-[rgba(255,255,255,0.03)]'
              }`}
            >
              <span
                className={`tabular font-mono text-xs ${
                  selected ? 'text-lime-400' : 'text-faint'
                }`}
              >
                {e.n}
              </span>
              <span
                className={`text-[14px] font-medium leading-tight ${
                  selected ? 'text-ink' : 'text-body'
                }`}
              >
                {e.years}
              </span>
              <span
                aria-hidden
                className={`absolute inset-x-0 bottom-0 h-px origin-left bg-lime-400 transition-transform duration-300 ease-obsidian-out ${
                  selected ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>
          )
        })}
      </div>

      {/* ---- Active era panel ---- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={era.n}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="grid gap-12 lg:grid-cols-12 lg:gap-16"
        >
          {/* Narrative + milestones */}
          <div className="lg:col-span-7">
            <div className="flex items-baseline gap-4">
              <span className="tabular text-[clamp(2.5rem,7vw,4.5rem)] font-light leading-none text-lime-400">
                {era.n}
              </span>
              <span className="eyebrow">{era.years}</span>
            </div>

            <h3 className="mt-6 max-w-measure text-[clamp(1.75rem,4vw,2.75rem)] font-light leading-[1.08] tracking-[-0.02em] text-ink">
              {era.title}
            </h3>

            <p className="mt-6 max-w-measure text-[18px] leading-[1.6] text-body">
              {era.lede}
            </p>

            <ul className="mt-10 flex flex-col">
              {era.milestones.map((m, i) => (
                <li
                  key={m.title}
                  className={`flex flex-col gap-1.5 border-l border-line-divider py-4 pl-6 sm:flex-row sm:gap-8 ${
                    i === 0 ? '' : ''
                  }`}
                >
                  <span className="shrink-0 font-mono text-[12px] uppercase tracking-wider text-lime-400 sm:w-24 sm:pt-1">
                    {m.date}
                  </span>
                  <div>
                    <div className="text-[18px] font-medium text-ink">{m.title}</div>
                    <p className="mt-1.5 text-[14px] leading-[1.6] text-faint">{m.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Hero stat */}
          <div className="lg:col-span-5">
            <Card variant="glass" glow className="p-8">
              <div className="eyebrow mb-6">{era.hero.kicker}</div>
              <div className="tabular text-[clamp(3rem,8vw,4.5rem)] font-medium leading-none text-ink">
                {era.hero.value}
              </div>
              <p className="mt-6 text-[14px] leading-[1.6] text-faint">{era.hero.caption}</p>
              <div className="mt-6 flex items-center gap-2 border-t border-line-hairline pt-5 font-mono text-xs text-faint">
                <ArrowUpRight className="h-3.5 w-3.5 text-lime-400" />
                {era.note}
              </div>
            </Card>
          </div>
        </motion.div>
      </AnimatePresence>

      <MarketSnapshot />

      <HorizonProjection />
    </div>
  )
}

/* ---------- Market snapshot: AUM by asset category ---------- */

function MarketSnapshot() {
  const [exStable, setExStable] = useState(false)

  const rows = exStable ? MARKET_ROWS.filter((r) => r.name !== 'Fiat stablecoins') : MARKET_ROWS
  const max = Math.max(...rows.map((r) => r.aumB))

  return (
    <div className="rounded-lg border border-line-hairline bg-section p-8 sm:p-10">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="eyebrow mb-3">Where value sits now · Sept 2026</div>
          <h3 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-light tracking-[-0.02em] text-ink">
            Distributed on-chain AUM by asset class
          </h3>
        </div>
        <div
          role="group"
          aria-label="Snapshot scale"
          className="inline-flex shrink-0 overflow-hidden rounded-md border border-line-hairline font-mono text-xs"
        >
          <button
            onClick={() => setExStable(false)}
            aria-pressed={!exStable}
            className={`px-4 py-2 transition-colors ${
              !exStable ? 'bg-lime-400 text-canvas' : 'text-faint hover:text-ink'
            }`}
          >
            All assets
          </button>
          <button
            onClick={() => setExStable(true)}
            aria-pressed={exStable}
            className={`px-4 py-2 transition-colors ${
              exStable ? 'bg-lime-400 text-canvas' : 'text-faint hover:text-ink'
            }`}
          >
            Ex-stablecoins
          </button>
        </div>
      </div>

      <p className="mt-4 max-w-measure text-[14px] leading-[1.6] text-faint">
        {exStable
          ? 'With stablecoins removed, Treasuries and private credit lead the yield-bearing RWA market.'
          : 'Stablecoins dwarf every other class. Switch the scale to see how the rest of the market stacks up.'}
      </p>

      <div className="mt-8 flex flex-col divide-y divide-line-hairline">
        {rows.map((r, i) => {
          const pct = Math.max((r.aumB / max) * 100, 1.5)
          return (
            <div key={r.name} className="py-5">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[18px] text-ink">{r.name}</span>
                <span className="tabular shrink-0 font-mono text-[14px] text-lime-400">
                  {r.aumLabel}
                </span>
              </div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-[rgba(255,255,255,0.06)]">
                <motion.div
                  className="h-full rounded-full bg-lime-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.8, ease: EASE, delay: i * 0.06 }}
                />
              </div>
              <p className="mt-2 text-[12px] text-faint">{r.players}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-line-hairline pt-5 font-mono text-xs text-faint">
        <span>{exStable ? 'Total, ex-stablecoins' : 'Total on-chain AUM'}</span>
        <span className="tabular text-ink">
          {exStable ? TOTAL_EX_STABLE_LABEL : TOTAL_AUM_LABEL}
        </span>
      </div>
    </div>
  )
}

/* ---------- 2030 horizon: dot-grid projection ---------- */

const TOTAL_DOTS = 160 // each dot = $100B of the $16T BCG optimistic case
const BASE_DOTS = 20 // $2T McKinsey base case

function HorizonProjection() {
  return (
    <div className="grid gap-12 rounded-lg border border-line-hairline bg-section p-8 sm:p-10 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <div className="eyebrow mb-3">The 2030 horizon</div>
        <h3 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-light tracking-[-0.02em] text-ink">
          A $2T&ndash;$16T opportunity
        </h3>
        <p className="mt-5 max-w-measure text-[18px] leading-[1.6] text-body">
          Analyst projections for tokenized market cap by 2030 span an order of
          magnitude. The gap between the base case and the optimistic case is the
          structuring work still to be done.
        </p>
        <div className="mt-8 flex flex-col gap-4">
          <LegendRow swatch="bg-lime-400" label="McKinsey base case" value="$2T" />
          <LegendRow swatch="bg-[rgba(255,255,255,0.14)]" label="BCG optimistic" value="$16T" />
        </div>
        <p className="mt-8 font-mono text-xs text-faint">Each dot = $100B of projected 2030 market cap</p>
      </div>

      <div className="lg:col-span-7">
        <div
          aria-hidden
          className="grid grid-cols-10 gap-2 sm:gap-2.5"
        >
          {Array.from({ length: TOTAL_DOTS }).map((_, i) => (
            <motion.span
              key={i}
              className={`aspect-square rounded-full ${
                i < BASE_DOTS ? 'bg-lime-400' : 'bg-[rgba(255,255,255,0.12)]'
              }`}
              initial={{ opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, ease: EASE, delay: Math.min(i * 0.004, 0.8) }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function LegendRow({ swatch, label, value }: { swatch: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`h-3 w-3 shrink-0 rounded-full ${swatch}`} />
      <span className="text-[14px] text-body">{label}</span>
      <span className="tabular ml-auto font-mono text-[14px] text-ink">{value}</span>
    </div>
  )
}
