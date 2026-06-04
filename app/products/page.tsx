'use client'

import { useState, useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { getProducts, Product } from '@/lib/mockData'
import { recordEvent } from '@/lib/analytics'

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [submittedSlugs, setSubmittedSlugs] = useState<string[]>([])
  const [waitlistEmail, setWaitlistEmail] = useState<{ [slug: string]: string }>({})

  useEffect(() => {
    setProducts(getProducts().filter(p => p.type === 'playbook'))
    recordEvent('pageview', { section: 'products_waitlist' })
  }, [])

  const handleJoinWaitlist = (e: React.FormEvent, product: Product) => {
    e.preventDefault()
    const email = waitlistEmail[product.slug]
    if (!email) return

    recordEvent('click', { action: 'join_waitlist', product: product.title, email })
    
    // Save waitlist in localStorage to persist joined states locally
    const stored = JSON.parse(localStorage.getItem('beneficial_product_waitlists') || '[]')
    if (!stored.includes(product.slug)) {
      stored.push(product.slug)
      localStorage.setItem('beneficial_product_waitlists', JSON.stringify(stored))
    }
    
    setSubmittedSlugs(prev => [...prev, product.slug])
  }

  // Load already submitted waitlists from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('beneficial_product_waitlists') || '[]')
    setSubmittedSlugs(stored)
  }, [])

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Header Section */}
      <section className="pt-36 pb-16 sm:pt-44 sm:pb-20 border-b border-rule">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-sienna" />
              <span className="text-xs uppercase tracking-[0.22em] text-sienna font-medium">
                Playbooks &amp; Toolkits (Coming Soon)
              </span>
            </div>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] text-forest leading-[0.98] tracking-[-0.02em] font-normal">
              Frameworks that compile. <br />
              <em className="italic font-light text-sienna">Built for builders.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-slate-ink leading-relaxed">
              We are packaging our internal legal engineering playbooks, SAFT checklists, and custom LLM prompt directories. Join the waitlists below to be notified as soon as they release.
            </p>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-10">
            {products.map((product) => (
              <div
                key={product.slug}
                className="bg-sand-soft border border-rule/30 p-8 sm:p-10 flex flex-col justify-between rounded-sm relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-background opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10" />
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-xs uppercase tracking-[0.16em] text-sienna font-semibold bg-cream px-3 py-1 border border-rule/20">
                        PDF Field Guide
                      </span>
                      <div className="flex flex-col items-end">
                        <span className="font-serif text-3xl text-forest font-semibold opacity-50">${product.price}</span>
                        <span className="text-[9px] uppercase tracking-wider text-sienna font-bold mt-1 bg-sienna/10 px-2 py-0.5 rounded-sm">Coming Soon</span>
                      </div>
                    </div>
                    <h2 className="font-serif text-3xl text-forest mb-4 leading-tight group-hover:text-sienna transition-colors duration-300">
                      {product.title}
                    </h2>
                    <p className="text-sm text-slate-ink leading-relaxed mb-8">
                      {product.desc}
                    </p>
                    <div className="border-t border-rule/30 pt-6 mb-8">
                      <div className="text-[10px] uppercase tracking-[0.16em] text-slate-soft font-bold mb-3">
                        What will be included
                      </div>
                      <ul className="space-y-2.5">
                        {product.features.map((feature, i) => (
                          <li key={i} className="text-xs text-forest flex items-start gap-2.5">
                            <span className="text-sienna mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-rule/20 pt-6">
                    {submittedSlugs.includes(product.slug) ? (
                      <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-sm text-center text-xs font-semibold">
                        ✓ Joined waitlist. We will notify you when this playbook launches.
                      </div>
                    ) : (
                      <form
                        onSubmit={(e) => handleJoinWaitlist(e, product)}
                        className="space-y-2"
                      >
                        <label className="block text-[9px] uppercase tracking-wider text-slate-soft font-bold">
                          Enter Email to join playbook waitlist
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="email"
                            required
                            value={waitlistEmail[product.slug] || ''}
                            onChange={(e) => setWaitlistEmail(prev => ({ ...prev, [product.slug]: e.target.value }))}
                            placeholder="founder@yourstartup.com"
                            className="flex-grow px-4 py-2.5 bg-cream border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest"
                          />
                          <button
                            type="submit"
                            className="px-5 py-2.5 bg-forest hover:bg-sienna text-cream text-[10px] uppercase tracking-wider font-bold transition-colors rounded-sm shadow-sm"
                          >
                            Join Waitlist
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
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
