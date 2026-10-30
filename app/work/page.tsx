import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FinalCTA } from '@/components/sections/reposition/cta'
import { Eyebrow, Button } from '@/components/ui/obsidian'

const url = 'https://www.beneficial.technology/work'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Systems we have designed, shipped, and run — some of them our own ventures. Proofable, Mālama Labs, AgentCorp, and OWNED IT: real structures at the intersection of law, technology, and capital.',
  alternates: { canonical: url },
  openGraph: {
    title: 'Work — Beneficial Technology',
    description: 'Built, not just advised. Proofable, Mālama Labs, AgentCorp, OWNED IT.',
    url,
    type: 'website',
  },
}

type Study = {
  n: string
  name: string
  label: string
  tags: string[]
  challenge: string
  built: string
  outcome: string
  href?: string
  hrefLabel?: string
  note?: string
}

const STUDIES: Study[] = [
  {
    n: '01',
    name: 'Proofable',
    label: 'formerly NEUS Network',
    tags: ['Capital Formation', 'AI Automation'],
    challenge:
      "Proofable's core technology is a portable trust layer. Launched as NEUS Network, its positioning was too broad and too abstract, and the team struggled to explain its value to buyers or investors.",
    built:
      'Working with the team, a repositioning from the ground up: a new name and brand, new product descriptions, and a rebuilt data room. Every piece now points to one clear use case: harness and safety infrastructure for AI.',
    outcome: 'Relaunched as Proofable in September 2026. Live at proofable.me.',
    href: 'https://proofable.me',
    hrefLabel: 'Visit site',
  },
  {
    n: '02',
    name: 'Mālama Labs',
    label: 'our venture',
    tags: ['RWA Tokenization', 'Infrastructure'],
    challenge:
      "Environmental markets run on data that's mostly estimated or self-reported. Mālama needed field data that could stand as evidence: signed at the source and anchored where anyone can check it.",
    built:
      'A sensor network that signs its data in hardware and anchors it on-chain. An external technical review led to a readiness assessment, and the critical infrastructure issues it found were fixed before scaling. Signatures establish integrity after signing, not that upstream sensors were uncompromised.',
    outcome:
      'Running in the field, with hardware-signed environmental readings anchored to a public chain. The same architecture now extends to data-center energy monitoring.',
    note: 'Specific record counts, start dates, and the chains in production are being reconciled before publication.',
    href: 'https://malamalabs.com',
    hrefLabel: 'Visit site',
  },
  {
    n: '03',
    name: 'AgentCorp',
    label: 'our venture (founder)',
    tags: ['Legal Engineering', 'AI Automation'],
    challenge:
      'Onchain organizations and AI agents now hold assets, sign agreements, and create IP. Most have no legal entity behind them, so ownership and liability stay undefined until something goes wrong.',
    built:
      'Open legal infrastructure for the onchain economy. Form a Delaware Series LLC, hold IP, assign rights, and govern the organization, with the entity record minted as an NFT on Base and stored permanently on Arweave.',
    outcome: 'Whitepaper published. Early access planned for Q1 2027.',
    href: 'https://www.agentscorp.xyz',
    hrefLabel: 'Visit site',
  },
  {
    n: '04',
    name: 'OWNED IT',
    label: 'our venture (founder)',
    tags: ['Infrastructure'],
    challenge:
      'Creators selling digital products rent their storefront. Platforms charge monthly fees, hold payouts, and can change the rules at any time.',
    built:
      "A storefront that is a smart contract on Base, deployed to the creator's own wallet. Buyers pay in USDC, and the creator keeps 97%, settled onchain at the moment of sale. The 3% fee is fixed in the contract, there's no monthly fee, and media is pinned to IPFS.",
    outcome: 'Private beta on Base testnet. Mainnet launch planned for December 8, 2026.',
  },
]

export default function WorkPage() {
  return (
    <main className="obsidian min-h-screen">
      <Navigation />

      <section className="relative overflow-hidden border-b border-line-hairline pt-[136px] pb-16 sm:pt-40 sm:pb-20">
        <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" />
        <div aria-hidden className="veil-top pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="max-w-4xl">
            <Eyebrow>Work</Eyebrow>
            <h1 className="mt-6 text-[clamp(2.25rem,5.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-body">
              Built, <span className="headline-em">not just advised</span>.
            </h1>
            <p className="mt-8 max-w-measure text-[18px] leading-[1.6] text-body">
              Systems we&rsquo;ve designed, shipped, and run. Some are our own ventures, and we say
              so. We&rsquo;d rather show you something real than a polished hypothetical.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-8 sm:py-12">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          {STUDIES.map((s) => (
            <article key={s.n} className="grid gap-8 border-b border-line-hairline py-14 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <div className="flex items-baseline gap-4">
                  <span className="tabular text-[clamp(2rem,4vw,3rem)] font-light leading-none text-lime-400">{s.n}</span>
                  <div>
                    <h2 className="text-[26px] font-light tracking-[-0.02em] text-ink">{s.name}</h2>
                    <div className="mt-1 font-mono text-xs text-faint">{s.label}</div>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full border border-line-hairline px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-faint">{t}</span>
                  ))}
                </div>
                {s.href && (
                  <div className="mt-6">
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-sm text-lime-400 hover:underline">
                      {s.hrefLabel} →
                    </a>
                  </div>
                )}
              </div>
              <div className="lg:col-span-8">
                <div className="grid gap-6 sm:grid-cols-3">
                  <div>
                    <div className="font-mono text-[12px] uppercase tracking-wider text-faint">Challenge</div>
                    <p className="mt-2 text-[15px] leading-[1.6] text-body">{s.challenge}</p>
                  </div>
                  <div>
                    <div className="font-mono text-[12px] uppercase tracking-wider text-faint">What we built</div>
                    <p className="mt-2 text-[15px] leading-[1.6] text-body">{s.built}</p>
                  </div>
                  <div>
                    <div className="font-mono text-[12px] uppercase tracking-wider text-lime-400">Outcome</div>
                    <p className="mt-2 text-[15px] leading-[1.6] text-ink">{s.outcome}</p>
                  </div>
                </div>
                {s.note && (
                  <p className="mt-6 border-t border-line-hairline pt-4 text-[13px] italic text-faint">{s.note}</p>
                )}
              </div>
            </article>
          ))}
          <div className="py-12">
            <Button href="https://cal.com/beneficialtech" external variant="accent" size="lg">Book a call about a similar structure</Button>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
