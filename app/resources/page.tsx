import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FinalCTA } from '@/components/sections/reposition/cta'
import { ResourceCard } from '@/components/sections/reposition/resource-card'
import { Card, Eyebrow, Divider } from '@/components/ui/obsidian'
import { resources } from '@/lib/resources'

export const metadata = {
  title: 'Resources',
  description:
    'Field guides, playbooks, and templates from Beneficial Technology. Practical, founder-facing tools at the intersection of legal engineering, AI, and the regulated frontier.',
  alternates: { canonical: 'https://www.beneficial.technology/resources' },
  openGraph: {
    title: 'Resources — Beneficial Technology',
    description:
      'Field guides, playbooks, and templates from Beneficial Technology. Founder-facing tools at the intersection of legal engineering and AI.',
    url: 'https://www.beneficial.technology/resources',
    type: 'website',
  },
}

const upcoming = [
  'A token launch checklist',
  'A multi-entity diligence kit',
  'A founder’s SAFT primer',
]

export default function ResourcesPage() {
  return (
    <main className="obsidian min-h-screen">
      <Navigation />

      <section className="relative overflow-hidden border-b border-line-hairline pt-[136px] pb-16 sm:pt-40 sm:pb-20">
        <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" />
        <div aria-hidden className="veil-top pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="max-w-4xl">
            <Eyebrow>Resources · Field guides</Eyebrow>
            <h1 className="mt-6 text-[clamp(2.25rem,5.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-body">
              Tools we built for the work{' '}
              <span className="headline-em">we wish someone had handed us</span>.
            </h1>
            <p className="mt-8 max-w-measure text-[15px] leading-[1.6] text-body">
              Practical, founder-facing guides at the intersection of legal engineering, AI, and the regulated frontier. Free to download. Email required so we can send you future field guides — never anything else.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 flex flex-col gap-6">
              {resources.map((resource) => (
                <ResourceCard key={resource.slug} resource={resource} />
              ))}
            </div>

            <Card variant="flat" className="flex flex-col p-8">
              <Eyebrow>More coming</Eyebrow>
              <p className="mt-5 text-[15px] leading-[1.6] text-body">
                More field guides on the way.
              </p>
              <div className="mt-6 flex flex-col">
                {upcoming.map((item, i) => (
                  <div key={item}>
                    {i > 0 && <Divider className="bg-line-hairline" />}
                    <div className="py-3.5 text-[15px] text-ink">{item}</div>
                  </div>
                ))}
              </div>
              <div className="mt-auto border-t border-line-hairline pt-6 text-[13px] leading-relaxed text-faint">
                Want one in particular? Tell us at{' '}
                <a
                  href="mailto:tyler@beneficial.technology"
                  className="font-mono text-lime-400 transition-colors hover:text-ink"
                >
                  tyler@beneficial.technology
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
