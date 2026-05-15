export function WhoWeWorkWith() {
  const fits = [
    'Token-launching companies that need structure before they hire BigLaw',
    'Climate and environmental infrastructure projects with credit, registry, or asset-tokenization components',
    'AI and data startups operating in regulated verticals',
    'Cross-jurisdiction businesses where US, EU, and offshore structures interact',
    'Crypto-native teams that need a coherent regulatory story before they fundraise',
  ]

  return (
    <section className="py-20 sm:py-24 border-b border-rule">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.18em] text-sienna font-medium">
              Who we work with
            </div>
            <h2 className="mt-4 font-serif text-3xl text-forest tracking-tight leading-tight">
              Founders raising pre-seed through Series A.
            </h2>
            <p className="mt-4 text-sm text-slate-ink leading-relaxed">
              Specifically: founders building in places the standard legal playbook doesn&apos;t fit.
            </p>
          </div>

          <div className="lg:col-span-9">
            <ul className="divide-y divide-rule">
              {fits.map((fit, i) => (
                <li key={fit} className="py-5 flex gap-6 items-baseline">
                  <span className="font-serif italic text-sienna text-sm tabular-nums shrink-0 w-8">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base sm:text-lg text-forest leading-snug">
                    {fit}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 font-serif italic text-lg text-slate-ink max-w-2xl">
              If your legal questions are routinely returning &ldquo;it depends,&rdquo; you&apos;re probably in our zone.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
