import type { Metadata } from 'next'
import { ExpertisePage } from '@/components/expertise/expertise-page'
import { legalEngineering } from '@/lib/expertise-data'

export const metadata: Metadata = {
  title: 'Legal Engineering',
  description:
    'Entities, agreements, and governance designed as one architecture — built to survive your next raise, your next jurisdiction, and serious diligence. Legal engineering from Beneficial Technology.',
  alternates: { canonical: 'https://www.beneficial.technology/expertise/legal-engineering' },
  openGraph: {
    title: 'Legal Engineering — Beneficial Technology',
    description: 'Legal structure, designed like a system: entity and SPV architecture, IP chain of title, governance and regulatory mapping.',
    url: 'https://www.beneficial.technology/expertise/legal-engineering',
    type: 'website',
  },
}

export default function Page() {
  return <ExpertisePage p={legalEngineering} />
}
