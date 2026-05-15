export function HowWeWork() {
  const steps = [
    {
      num: '01',
      title: 'Intro call',
      text: '30 minutes. We figure out if there’s a fit. No pitch.',
    },
    {
      num: '02',
      title: 'Scope',
      text: 'Statement of work or retainer agreement within 48 hours.',
    },
    {
      num: '03',
      title: 'Onboard',
      text: 'Welcome packet, shared workspace, kickoff within the first week.',
    },
    {
      num: '04',
      title: 'Operate',
      text: 'Monthly sessions, async support, regular structural reviews.',
    },
  ]

  return (
    <section className="py-20 sm:py-24 border-b border-rule">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-xs uppercase tracking-[0.18em] text-sienna font-medium">
          How we work
        </div>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-forest tracking-tight max-w-2xl leading-tight">
          Four steps. No procurement theater.
        </h2>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {steps.map((step) => (
            <div key={step.num} className="border-l border-rule pl-5">
              <div className="font-serif text-4xl text-sienna leading-none">
                {step.num}
              </div>
              <div className="mt-3 font-medium text-forest">
                {step.title}
              </div>
              <p className="mt-2 text-sm text-slate-ink leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
