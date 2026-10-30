import type { Metadata } from 'next'
import { ExpertisePage } from '@/components/expertise/expertise-page'
import { aiAutomation } from '@/lib/expertise-data'

export const metadata: Metadata = {
  title: 'AI Automation',
  description:
    'Get AI out of the pilot and into the operating model: permission-aware knowledge systems, agent authority and approval, monitoring, and workflow economics. AI automation from Beneficial Technology.',
  alternates: { canonical: 'https://www.beneficial.technology/expertise/ai-automation' },
  openGraph: {
    title: 'AI Automation — Beneficial Technology',
    description: 'The layer between a model and production: who can see what, who answers for it, and whether it is working.',
    url: 'https://www.beneficial.technology/expertise/ai-automation',
    type: 'website',
  },
}

export default function Page() {
  return <ExpertisePage p={aiAutomation} />
}
