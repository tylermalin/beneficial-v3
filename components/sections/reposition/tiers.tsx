import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

type Tier = {
  name: string
  price: string
  cadence?: string
  desc: string
  listLabel: string
  list: string[]
  fit: string
  featured?: boolean
}

const tiers: Tier[] = [
  {
    name: 'Operator',
    price: '$8,500',
    cadence: '/ month',
    desc: 'For pre-seed and seed-stage founders who need a structural partner, not a law firm.',
    listLabel: 'Includes',
    list: [
      'Up to 8 hours of advisory per month',
      'Cap table, SAFE & contract structural review',
      'Vendor and counsel referrals',
      'Monthly working session',
      'Async support via shared workspace',
    ],
    fit: 'Equity-only startups, climate projects without token components, AI startups in lightly regulated verticals.',
  },
  {
    name: 'Architect',
    price: '$15,000',
    cadence: '/ month',
    desc: 'For founders launching tokens, navigating multi-jurisdiction structures, or operating in heavily regulated verticals.',
    listLabel: 'Includes',
    list: [
      'Up to 16 hours of advisory per month',
      'Token structure & launch design',
      'SAFT, SAFE-T & instrument design strategy',
      'Regulatory positioning & risk mapping',
      'Multi-entity setup with outside counsel',
      'Investor & board prep for regulated raises',
      'Bi-weekly working sessions',
    ],
    fit: 'Pre-launch token companies, DePIN networks, climate-asset issuers, regulated AI.',
    featured: true,
  },
  {
    name: 'Project',
    price: 'From $25,000',
    desc: 'Flat-fee engagements for specific deliverables. Scoped per engagement. Defined timelines.',
    listLabel: 'Examples',
    list: [
      'Token launch structuring memo & execution roadmap',
      'Multi-entity setup across US, Cayman & EU',
      'Regulatory positioning memo for a fundraise',
      'SAFT documentation & instrument design',
      'Counsel selection & engagement management',
    ],
    fit: 'Founders with a specific, time-boxed structural problem that doesn’t need an ongoing retainer.',
  },
]

export function Tiers() {
  return (
    <section className="py-20 sm:py-24 bg-sand-soft border-b border-rule" id="engagements">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.18em] text-sienna font-medium">
            Engagements
          </div>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-forest tracking-tight leading-[1.15]">
            Three ways to work with us. Pick the one that fits the problem.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-8 lg:p-10 border-t-2 ${
                tier.featured
                  ? 'bg-forest text-cream border-sienna'
                  : 'bg-cream text-forest border-forest'
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 -mt-3 mr-6">
                  <span className="bg-sienna text-cream text-[10px] uppercase tracking-[0.18em] px-2 py-1 font-medium">
                    Most common
                  </span>
                </div>
              )}

              <div className="font-serif text-3xl tracking-tight">{tier.name}</div>
              <div className={`mt-2 flex items-baseline gap-1.5 ${tier.featured ? 'text-[#D4A574]' : 'text-sienna'}`}>
                <span className="font-medium text-lg">{tier.price}</span>
                {tier.cadence && (
                  <span className="text-sm opacity-80">{tier.cadence}</span>
                )}
              </div>

              <p className={`mt-5 text-sm leading-relaxed ${tier.featured ? 'text-cream/80' : 'text-slate-ink'}`}>
                {tier.desc}
              </p>

              <div className={`mt-7 text-[10px] uppercase tracking-[0.18em] font-medium ${
                tier.featured ? 'text-cream/60' : 'text-slate-soft'
              }`}>
                {tier.listLabel}
              </div>

              <ul className="mt-3 space-y-2 flex-grow">
                {tier.list.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-snug">
                    <span className={`${tier.featured ? 'text-[#D4A574]' : 'text-sienna'} mt-0.5 shrink-0`}>›</span>
                    <span className={tier.featured ? 'text-cream' : 'text-forest'}>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={`mt-8 pt-5 border-t font-serif italic text-xs leading-snug ${
                tier.featured
                  ? 'border-cream/15 text-cream/70'
                  : 'border-rule text-slate-ink'
              }`}>
                <span className={`not-italic font-sans uppercase tracking-wider text-[10px] mr-2 ${
                  tier.featured ? 'text-cream/50' : 'text-slate-soft'
                }`}>
                  Right fit
                </span>
                {tier.fit}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            href="https://cal.com/beneficialtech"
            className="group inline-flex items-center gap-2 bg-forest text-cream px-6 py-3 text-sm font-medium hover:bg-forest-deep transition-colors"
          >
            Book a 30-minute intro
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <p className="text-sm text-slate-ink">
            No pitch. We figure out if there&apos;s a fit and send a scope within 48 hours.
          </p>
        </div>
      </div>
    </section>
  )
}
