import type { Metadata } from 'next'
import { ExpertisePage } from '@/components/expertise/expertise-page'
import { capitalFormation } from '@/lib/expertise-data'

export const metadata: Metadata = {
  title: 'Capital Formation',
  description:
    'Be ready before investors start looking: capital architecture, diligence readiness, and term analysis so the structure, the numbers, and the story line up before the first meeting. From Beneficial Technology.',
  alternates: { canonical: 'https://www.beneficial.technology/expertise/capital-formation' },
  openGraph: {
    title: 'Capital Formation — Beneficial Technology',
    description: 'Close the gaps before investors find them: the right instrument, a reconciled data room, and plain-language term analysis.',
    url: 'https://www.beneficial.technology/expertise/capital-formation',
    type: 'website',
  },
}

export default function Page() {
  return <ExpertisePage p={capitalFormation} />
}
