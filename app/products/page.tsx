'use client'

import { useState, useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Eyebrow } from '@/components/ui/obsidian'
import { getProducts, Product } from '@/lib/mockData'
import { recordEvent } from '@/lib/analytics'

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [submittedSlugs, setSubmittedSlugs] = useState<string[]>([])
  const [waitlistEmail, setWaitlistEmail] = useState<{ [slug: string]: string }>({})

  useEffect(() => {
    setProducts(getProducts().filter((p) => p.type === 'playbook'))
    recordEvent('pageview', { section: 'products_waitlist' })
  }, [])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('beneficial_product_waitlists') || '[]')
    setSubmittedSlugs(stored)
  }, [])

  const handleJoinWaitlist = (e: React.FormEvent, product: Product) => {
    e.preventDefault()
    const email = waitlistEmail[product.slug]
    if (!email) return

    recordEvent('click', { action: 'join_waitlist', product: product.title, email })

    const stored = JSON.parse(localStorage.getItem('beneficial_product_waitlists') || '[]')
    if (!stored.includes(product.slug)) {
      stored.push(product.slug)
      localStorage.setItem('beneficial_product_waitlists', JSON.stringify(stored))
    }
    setSubmittedSlugs((prev) => [...prev, product.slug])
  }

  return (
    <main className="obsidian min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-line-hairline pt-[136px] pb-16 sm:pt-40 sm:pb-20">
        <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" />
        <div aria-hidden className="veil-top pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="max-w-4xl">
            <Eyebrow>Playbooks &amp; toolkits · Coming soon</Eyebrow>
            <h1 className="mt-6 text-[clamp(2.25rem,5.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-body">
              Frameworks that compile.{' '}
              <span className="headline-em">Built for builders.</span>
            </h1>
            <p className="mt-8 max-w-measure text-[18px] leading-[1.6] text-body">
              We&rsquo;re packaging our internal legal-engineering playbooks, SAFT checklists,
              and custom LLM prompt directories. Join a waitlist below to be notified the
              moment each one ships.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="bg-canvas py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product) => (
              <div
                key={product.slug}
                className="surface-flat flex flex-col rounded-lg border border-line-hairline p-8 transition-colors duration-200 hover:border-line-strong sm:p-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-faint">
                    PDF field guide
                  </span>
                  <div className="flex flex-col items-end">
                    <span className={`tabular text-2xl font-medium leading-none ${product.buyUrl ? 'text-ink' : 'text-ink/60'}`}>
                      ${product.price}
                    </span>
                    <span className="mt-2 font-mono text-[12px] uppercase tracking-wider text-lime-400">
                      {product.buyUrl ? 'Available now' : 'Coming soon'}
                    </span>
                  </div>
                </div>

                <h2 className="mt-6 text-2xl font-light tracking-[-0.01em] text-ink">
                  {product.title}
                </h2>
                <p className="mt-3 text-[14px] leading-[1.6] text-faint">{product.desc}</p>

                <div className="mt-6 border-t border-line-hairline pt-6">
                  <div className="mb-3 font-mono text-[12px] uppercase tracking-wider text-faint">
                    What will be included
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[14px] text-body">
                        <span className="mt-0.5 text-lime-400">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto border-t border-line-hairline pt-6">
                  {product.buyUrl ? (
                    <a
                      href={product.buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => recordEvent('click', { action: 'buy_on_amazon', product: product.title })}
                      className="flex items-center justify-center gap-2 rounded-md bg-lime-400 px-5 py-3 font-mono text-[12px] uppercase tracking-wider font-medium text-canvas transition-[filter] hover:brightness-105"
                    >
                      Buy on Amazon · ${product.price}
                    </a>
                  ) : submittedSlugs.includes(product.slug) ? (
                    <div className="flex items-center gap-2 rounded-md border border-line-accent bg-[var(--lime-tint-08)] p-4 text-[14px] text-ink">
                      <span className="text-lime-400">✓</span>
                      Joined. We&rsquo;ll notify you when this playbook launches.
                    </div>
                  ) : (
                    <form onSubmit={(e) => handleJoinWaitlist(e, product)} className="flex flex-col gap-2">
                      <label className="font-mono text-[12px] uppercase tracking-wider text-faint">
                        Enter email to join the waitlist
                      </label>
                      <div className="flex flex-col gap-2 sm:flex-row">
                        <input
                          type="email"
                          required
                          value={waitlistEmail[product.slug] || ''}
                          onChange={(e) =>
                            setWaitlistEmail((prev) => ({ ...prev, [product.slug]: e.target.value }))
                          }
                          placeholder="founder@yourstartup.com"
                          className="flex-grow rounded-md border border-line-hairline bg-section px-4 py-2.5 text-[14px] text-ink placeholder:text-faint focus:border-line-accent focus:outline-none"
                        />
                        <button
                          type="submit"
                          className="rounded-md bg-lime-400 px-5 py-2.5 font-mono text-[12px] uppercase tracking-wider font-medium text-canvas transition-[filter] hover:brightness-105"
                        >
                          Join waitlist
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
