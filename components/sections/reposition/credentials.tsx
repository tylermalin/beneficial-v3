export function Credentials() {
  const items = [
    { primary: 'Operator-attorney', secondary: 'building & advising' },
    { primary: 'Cravath', secondary: 'litigation' },
    { primary: 'CFTC', secondary: 'regulatory fellowship' },
    { primary: 'Fordham Law', secondary: 'JD' },
    { primary: 'Two prior exits', secondary: 'one Inc. 500, acq. by Maker Studios' },
    { primary: 'CEO, Mālama Labs', secondary: 'climate dMRV infrastructure' },
  ]

  return (
    <section className="py-12 sm:py-14 bg-sand-soft border-b border-rule">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-6">
          {items.map((item) => (
            <div key={item.primary} className="flex flex-col">
              <div className="font-serif text-base text-forest leading-tight">
                {item.primary}
              </div>
              <div className="mt-1 text-xs text-slate-soft uppercase tracking-wider">
                {item.secondary}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
