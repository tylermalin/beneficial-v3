import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'

const url = 'https://www.beneficial.technology/tokenization'

export const metadata: Metadata = {
  title: 'Tokenization timeline — asset tokenization, 2018 to 2030',
  description:
    'An interactive market report on real-world asset (RWA) tokenization: the milestones from security tokens to tokenized Treasuries, the September 2026 on-chain AUM by asset class, and the $2T–$16T 2030 projections. Built by Beneficial Technology.',
  keywords: [
    'tokenization timeline', 'asset tokenization', 'real-world assets', 'RWA tokenization',
    'tokenized treasuries', 'tokenized equities', 'BUIDL', 'stablecoins AUM',
    'on-chain RWA market', 'tokenized market cap 2030', 'security token offerings',
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

const MARKET_ROWS = [
  { name: 'Fiat stablecoins', amt: '$305.19B' },
  { name: 'Treasuries & MMFs', amt: '$13.55B' },
  { name: 'Private credit', amt: '$7.96B' },
  { name: 'Commodities', amt: '$4.85B' },
  { name: 'Equities & ETFs', amt: '$2.92B' },
  { name: 'Real estate', amt: '$226.32M' },
]

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
        description: 'Distributed on-chain assets under management by asset category, in USD, as of September 2026.',
        url,
        creator: { '@type': 'Organization', name: 'Beneficial Technology, LLC' },
        variableMeasured: MARKET_ROWS.map((r) => ({ '@type': 'PropertyValue', name: r.name, value: r.amt })),
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
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
}

export default function TokenizationPage() {
  return (
    <main className="min-h-screen bg-[#EEEBE3]">
      <JsonLd />
      <Navigation />
      <iframe
        src="/tokenization-report/index.html"
        title="Asset tokenization, 2018 to 2030 — interactive market report"
        loading="eager"
        className="block w-full border-0"
        style={{ height: 'calc(100vh - 68px)', marginTop: '68px' }}
      />
    </main>
  )
}
