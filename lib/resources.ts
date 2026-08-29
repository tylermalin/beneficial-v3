export type ResourceKind = 'download' | 'external'

export type Resource = {
  slug: string
  title: string
  subtitle: string
  format: string
  size?: string
  pages?: number
  author: string
  excerpt: string
  url: string
  status: 'available' | 'coming-soon'
  /** 'download' gates a PDF behind the email modal. 'external' links straight out. */
  kind: ResourceKind
  /** Label for the button on an external resource. */
  cta?: string
  /** Small print under the button. Omitted resources fall back to the download line. */
  note?: string
}

export const resources: Resource[] = [
  {
    slug: 'everyday-legal-ai-playbook',
    title: 'The Everyday Legal AI Playbook',
    subtitle:
      'A practical guide to reading contracts, leases, employment agreements, NDAs, and other legal documents with AI assistance.',
    format: 'Book · Amazon',
    author: 'Tyler Malin',
    excerpt:
      'AI systems are powerful, but they can be confidently wrong. They miss context, misread law, and hallucinate citations. Use AI to understand, translate, and ask better questions. Use a licensed attorney to make decisions that carry real consequences. This book will help you do the rest.',
    url: 'https://www.amazon.com/dp/B0HH42MWCB',
    status: 'available',
    kind: 'external',
    cta: 'Get it on Amazon',
    note: 'Available in paperback and Kindle.',
  },
  {
    slug: 'repo-ip-auditor',
    title: 'Repo IP Auditor',
    subtitle:
      'Audit a git repository for IP chain-of-title gaps and copyleft exposure. Reads commit history, root license, and package manifests before an investor\u2019s counsel does.',
    format: 'Tool · Free',
    author: 'Beneficial Technology',
    excerpt:
      'Unassigned contractor commits and AGPL dependencies are ordinary problems that become expensive during diligence, because they surface after the term sheet rather than before it. The web audit runs entirely in your browser and stores nothing. The CLI and the GitHub Action read local git, scan file headers, and score against the same published rubric. MIT licensed, no runtime dependencies.',
    url: '/tools/repo-ip-auditor',
    status: 'available',
    kind: 'external',
    cta: 'Run a free audit',
    note: 'No signup. Nothing uploaded, stored, or logged.',
  },
]

export function findResource(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug)
}
