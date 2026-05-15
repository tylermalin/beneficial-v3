import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { FinalCTA } from '@/components/sections/reposition/cta'
import { ResourceCard } from '@/components/sections/reposition/resource-card'
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

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      <section className="pt-36 pb-16 sm:pt-44 sm:pb-20 border-b border-rule">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-sienna" />
              <span className="text-xs uppercase tracking-[0.22em] text-sienna font-medium">
                Resources · Field guides
              </span>
            </div>

            <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-forest leading-[0.98] tracking-[-0.02em] font-normal">
              Tools we built for the work <em className="italic font-light text-sienna">we wish someone had handed us.</em>
            </h1>

            <p className="mt-10 max-w-2xl text-lg text-slate-ink leading-[1.55]">
              Practical, founder-facing guides at the intersection of legal engineering, AI, and the regulated frontier. Free to download. Email required so we can send you future field guides — never anything else.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-10">
            {resources.map((resource) => (
              <ResourceCard key={resource.slug} resource={resource} />
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-rule grid sm:grid-cols-2 gap-8 items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-slate-soft mb-3">
                More coming
              </div>
              <p className="font-serif italic text-xl text-slate-ink leading-snug max-w-md">
                A token launch checklist. A multi-entity diligence kit. A founder&apos;s SAFT primer. More field guides on the way.
              </p>
            </div>
            <div className="sm:text-right text-xs text-slate-soft">
              Want one in particular? Tell us at{' '}
              <a href="mailto:tyler@beneficial.technology" className="text-forest border-b border-sienna pb-0.5 hover:text-sienna transition-colors">
                tyler@beneficial.technology
              </a>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
