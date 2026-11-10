import { NextResponse } from 'next/server'

const siteUrl = 'https://www.beneficial.technology'

export async function GET() {
  const content = `# Beneficial Technology

> Structural strategy and legal engineering for founders building in regulated verticals — token launches, multi-jurisdiction structures, climate assets, and AI systems. Operator-attorney led, designed as one architecture across law, technology, and capital.

## Pages

- [Home](${siteUrl}): Overview of services and approach
- [About](${siteUrl}/about): Founder background, credentials, and philosophy
- [Work with us](${siteUrl}/work-with-us): Engagement models, pricing, and process
- [Legal Engineering](${siteUrl}/expertise/legal-engineering): Entity structures, IP chain of title, governance architecture
- [AI Automation](${siteUrl}/expertise/ai-automation): AI agent accountability frameworks and compliance architecture
- [RWA Tokenization](${siteUrl}/expertise/rwa-tokenization): Tokenized asset issuance, custody design, investor eligibility
- [Capital Formation](${siteUrl}/expertise/capital-formation): Multi-jurisdiction raise structures, SAFT and SAFE-T design
- [Work](${siteUrl}/work): Systems designed and shipped including Proofable, Mālama Labs, AgentCorp
- [Tokenization timeline](${siteUrl}/tokenization): Interactive RWA market report with milestones and projections
- [Repo IP Auditor](${siteUrl}/tools/repo-ip-auditor): Open-source tool for repository intellectual property auditing
- [Resources](${siteUrl}/resources): Articles, frameworks, and case studies
- [Contact](${siteUrl}/contact): Get in touch

## Optional

- [Disclaimer](${siteUrl}/disclaimer): Not a law firm, does not provide legal advice
- [Privacy Policy](${siteUrl}/privacy-policy): Data handling and privacy practices
- [Terms of Service](${siteUrl}/terms-of-service): Terms governing use of the site
`

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
