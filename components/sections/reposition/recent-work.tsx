export function RecentWork() {
  const work = [
    {
      tag: 'Climate · Series A prep',
      headline: 'Restructured a $4M-raised climate startup’s cap table and SAFT obligations ahead of Series A.',
    },
    {
      tag: 'DePIN · Token launch',
      headline: 'Designed token launch structure and regulatory positioning for a DePIN environmental data network.',
    },
    {
      tag: 'AI · Multi-jurisdiction',
      headline: 'Built multi-entity framework for a cross-jurisdiction AI compliance startup.',
    },
    {
      tag: 'RWA · Counsel coordination',
      headline: 'Coordinated regulatory memo and counsel selection for a tokenized real-world asset issuer.',
    },
    {
      tag: 'Climate finance · $6M seed',
      headline: 'Advised on instrument design and investor narrative for a $6M seed in regulated climate finance.',
    },
  ]

  return (
    <section className="py-20 sm:py-24 border-b border-rule">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.18em] text-sienna font-medium">
              Recent work
            </div>
            <h2 className="mt-4 font-serif text-3xl text-forest tracking-tight leading-tight">
              A sample of what we&apos;ve shipped.
            </h2>
            <p className="mt-4 text-sm text-slate-ink leading-relaxed">
              Anonymized to protect founders.
            </p>
          </div>

          <div className="lg:col-span-9">
            <ul className="divide-y divide-rule border-y border-rule">
              {work.map((item, i) => (
                <li key={item.headline} className="py-6 grid grid-cols-12 gap-4 items-baseline">
                  <span className="col-span-12 sm:col-span-1 font-serif italic text-sienna text-sm tabular-nums">
                    — {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="col-span-12 sm:col-span-11">
                    <div className="text-[11px] uppercase tracking-[0.16em] text-slate-soft mb-1.5">
                      {item.tag}
                    </div>
                    <div className="text-base sm:text-lg text-forest leading-snug">
                      {item.headline}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
