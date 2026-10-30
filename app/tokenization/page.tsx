import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FinalCTA } from '@/components/sections/reposition/cta'
import { Button, Eyebrow } from '@/components/ui/obsidian'
import { TokenizationReport } from '@/components/tokenization/tokenization-report'
import { ERAS, MARKET_ROWS } from '@/lib/tokenization-data'

const url = 'https://www.beneficial.technology/tokenization'

export const metadata: Metadata = {
  title: 'Tokenization timeline — asset tokenization, 2018 to 2030',
  description:
    'An interactive market report on real-world asset (RWA) tokenization: the milestones from security tokens to tokenized Treasuries, the September 2026 on-chain AUM by asset class, and the $2T–$16T 2030 projections. Built by Beneficial Technology.',
  keywords: [
    'tokenization timeline',
    'asset tokenization',
    'real-world assets',
    'RWA tokenization',
    'tokenized treasuries',
    'tokenized equities',
    'BUIDL',
    'stablecoins AUM',
    'on-chain RWA market',
    'tokenized market cap 2030',
    'security token offerings',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Tokenization timeline — asset tokenization, 2018 to 2030',
    description:
      'An interactive market report on real-world asset (RWA) tokenization: milestones, September 2026 on-chain AUM by asset class, and the $2T–$16T 2030 projections.',
    url,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tokenization timeline — asset tokenization, 2018 to 2030',
    description:
      'Interactive RWA tokenization market report: milestones, on-chain AUM by asset class, and $2T–$16T 2030 projections.',
  },
}

function JsonLd() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Asset tokenization, 2018 to 2030 — an interactive market report',
        description:
          'The milestones of real-world asset tokenization, on-chain AUM by asset class as of September 2026, and analyst projections for 2030.',
        about: ['Asset tokenization', 'Real-world assets', 'Tokenized securities'],
        author: { '@type': 'Organization', name: 'Beneficial Technology, LLC' },
        publisher: { '@type': 'Organization', name: 'Beneficial Technology, LLC' },
        mainEntityOfPage: url,
        url,
      },
      {
        '@type': 'Dataset',
        name: 'On-chain RWA AUM by asset class, September 2026',
        description:
          'Distributed on-chain assets under management by asset category, in USD, as of September 2026.',
        url,
        creator: { '@type': 'Organization', name: 'Beneficial Technology, LLC' },
        variableMeasured: MARKET_ROWS.map((r) => ({
          '@type': 'PropertyValue',
          name: r.name,
          value: r.aumLabel,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beneficial.technology' },
          { '@type': 'ListItem', position: 2, name: 'Tokenization timeline', item: url },
        ],
      },
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}

export default function TokenizationPage() {
  return (
    <main className="obsidian min-h-screen">
      <JsonLd />
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line-hairline pt-[136px] pb-16 sm:pt-40 sm:pb-20">
        <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" />
        <div aria-hidden className="veil-top pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="max-w-4xl">
            <Eyebrow>Interactive market report</Eyebrow>
            <h1 className="mt-6 text-[clamp(2.25rem,5.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-body">
              Asset tokenization,{' '}
              <span className="headline-em">2018 to 2030</span>
            </h1>
            <p className="mt-8 max-w-measure text-[18px] leading-[1.6] text-body">
              How capital-market plumbing became the rail for a machine-to-machine
              economy — from niche security tokens to multi-hundred-billion-dollar
              financial infrastructure. Step through the timeline, see where on-chain
              value sits today, and where the $2T–$16T opportunity lands by 2030.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="https://cal.com/beneficialtech" external variant="accent" size="lg">
                Structuring a token? Book a call
              </Button>
              <Button href="/#services" variant="secondary" size="lg">
                How we help
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive report */}
      <section className="bg-canvas py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <TokenizationReport />
        </div>
      </section>

      {/* Tie-in: utility / conversion */}
      <section className="border-t border-line-hairline bg-section py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>From timeline to term sheet</Eyebrow>
              <h2 className="mt-6 text-[clamp(1.5rem,3.5vw,2.25rem)] font-light tracking-[-0.02em] text-ink">
                The structuring work behind every milestone
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="max-w-measure text-[18px] leading-[1.6] text-body">
                Every point on this timeline is an entity structure, a disclosure
                posture, and a set of regulatory choices made before the token ever
                shipped. Beneficial Technology does that work: token structuring, SAFT
                / SAFE-T design, multi-jurisdiction entities, and the legal engineering
                that makes a tokenized asset issuable across {ERAS.length}+ phases of a
                fast-moving market.
              </p>
              <p className="mt-5 max-w-measure text-[14px] leading-[1.6] text-faint">
                Figures as reported in source material; projections are analyst
                estimates. Data as of September 2026. Not legal or investment advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
