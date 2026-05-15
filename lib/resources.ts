export type Resource = {
  slug: string
  title: string
  subtitle: string
  format: 'PDF · Field guide'
  size: string
  pages?: number
  author: string
  excerpt: string
  url: string
  status: 'available' | 'coming-soon'
}

export const resources: Resource[] = [
  {
    slug: 'everyday-legal-ai-playbook',
    title: 'The Everyday Legal AI Playbook',
    subtitle:
      'A practical guide to reading contracts, leases, employment agreements, NDAs, and other legal documents with AI assistance.',
    format: 'PDF · Field guide',
    size: '152 KB',
    author: 'Tyler Malin',
    excerpt:
      'AI systems are powerful, but they can be confidently wrong. They miss context, misread law, and hallucinate citations. Use AI to understand, translate, and ask better questions. Use a licensed attorney to make decisions that carry real consequences. This guide will help you do the rest.',
    url: '/resources/everyday-legal-ai-playbook.pdf',
    status: 'available',
  },
]

export function findResource(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug)
}
