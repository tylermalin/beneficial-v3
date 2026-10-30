import type { Metadata } from 'next'
import { ExpertisePage } from '@/components/expertise/expertise-page'
import { rwaTokenization } from '@/lib/expertise-data'

export const metadata: Metadata = {
  title: 'RWA Tokenization',
  description:
    'Bring a real asset on-chain, designed to hold up: the SPV, investor eligibility, custody, and on-chain rails built together from day one. RWA tokenization from Beneficial Technology.',
  alternates: { canonical: 'https://www.beneficial.technology/expertise/rwa-tokenization' },
  openGraph: {
    title: 'RWA Tokenization — Beneficial Technology',
    description: 'Issuance structures where the asset, the legal wrapper, and the on-chain rails are designed together.',
    url: 'https://www.beneficial.technology/expertise/rwa-tokenization',
    type: 'website',
  },
}

export default function Page() {
  return <ExpertisePage p={rwaTokenization} />
}
