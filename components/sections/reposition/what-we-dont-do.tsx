export function WhatWeDontDo() {
  return (
    <section className="py-20 sm:py-24 bg-sand border-b border-rule">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-[0.18em] text-sienna font-medium">
              What we don&apos;t do
            </div>
            <div className="mt-4 h-px w-12 bg-sienna" />
          </div>

          <div className="lg:col-span-9 max-w-3xl border-l-2 border-sienna pl-8">
            <p className="font-serif text-2xl sm:text-3xl text-forest leading-[1.3] tracking-tight">
              We&apos;re not a law firm. We don&apos;t give legal advice. We don&apos;t represent clients in legal matters. We don&apos;t file regulatory submissions on your behalf.
            </p>

            <p className="mt-6 text-base text-slate-ink leading-relaxed">
              We do the structural and strategic work upstream of legal, and we coordinate with the counsel you retain. For any matter requiring legal advice or representation, you&apos;ll work with an attorney you separately engage — and we&apos;ll help you find the right one.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
