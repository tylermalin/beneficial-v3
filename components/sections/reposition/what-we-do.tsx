export function WhatWeDo() {
  const specialties = [
    'Token launches',
    'Multi-entity structures',
    'SAFT & SAFE design',
    'Regulatory positioning',
    'Climate-asset frameworks',
    'Compliance architecture',
    'Investor narrative for regulated verticals',
  ]

  return (
    <section className="py-20 sm:py-24 border-b border-rule">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.18em] text-sienna font-medium">
              What we do
            </div>
          </div>

          <div className="lg:col-span-9 max-w-3xl">
            <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-forest leading-[1.25] tracking-tight">
              Token launches. Multi-entity structures. SAFT and SAFE design. Regulatory positioning. Climate-asset frameworks. Compliance architecture. Investor narrative for regulated verticals.
            </p>

            <p className="mt-8 font-serif italic text-lg text-slate-ink">
              This is the layer most founders only realize they need after something breaks at scale.
            </p>

            <div className="mt-10 flex flex-wrap gap-x-3 gap-y-2">
              {specialties.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center text-xs uppercase tracking-wider text-slate-ink border border-rule px-3 py-1.5"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
