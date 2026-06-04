'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ShieldCheck, Compass, MessageSquare, BookOpen, Key, Check, Loader2 } from 'lucide-react'
import { getProducts, Product } from '@/lib/mockData'
import { recordEvent } from '@/lib/analytics'

export default function MembershipPage() {
  const [membershipProduct, setMembershipProduct] = useState<Product | null>(null)
  const [isWaitlisted, setIsWaitlisted] = useState(false)
  const [isSimulating, setIsSimulating] = useState(false)
  const [email, setEmail] = useState('')
  const [activeTab, setActiveTab] = useState<'benefits' | 'vault'>('benefits')

  useEffect(() => {
    const products = getProducts()
    const mem = products.find(p => p.type === 'membership') || null
    setMembershipProduct(mem)

    const storedWaitlist = localStorage.getItem('beneficial_member_waitlisted')
    if (storedWaitlist === 'true') {
      setIsWaitlisted(true)
      const storedEmail = localStorage.getItem('beneficial_member_email')
      if (storedEmail) setEmail(storedEmail)
    }

    recordEvent('pageview', { section: 'membership' })
  }, [])

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSimulating(true)
    setTimeout(() => {
      setIsSimulating(false)
      setIsWaitlisted(true)
      localStorage.setItem('beneficial_member_waitlisted', 'true')
      localStorage.setItem('beneficial_member_email', email)
      recordEvent('click', { action: 'join_membership_waitlist', email })
    }, 1200)
  }

  const handleLeaveWaitlist = () => {
    setIsWaitlisted(false)
    localStorage.removeItem('beneficial_member_waitlisted')
    localStorage.removeItem('beneficial_member_email')
    recordEvent('click', { action: 'leave_membership_waitlist' })
  }

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Header */}
      <section className="pt-36 pb-16 sm:pt-44 sm:pb-20 border-b border-rule">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-sienna" />
              <span className="text-xs uppercase tracking-[0.22em] text-sienna font-medium">
                Exclusive Membership (Coming Soon)
              </span>
            </div>
            <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] text-forest leading-[0.98] tracking-[-0.02em] font-normal">
              The Regulated Frontier Club. <br />
              <em className="italic font-light text-sienna">Guidance at scale.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-slate-ink leading-relaxed">
              A private circle for founders scaling businesses at the intersection of AI, Web3, and regulated markets. Access tools, templates, peer calls, and direct advisory.
            </p>
          </div>
        </div>
      </section>

      {/* Content Selector */}
      <section className="py-12 border-b border-rule bg-sand-soft/50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex gap-6 border-b border-rule/50 pb-4">
            <button
              onClick={() => setActiveTab('benefits')}
              className={`font-serif text-lg pb-1 relative transition-colors ${
                activeTab === 'benefits' ? 'text-forest font-semibold' : 'text-slate-soft hover:text-forest'
              }`}
            >
              Benefits &amp; Pricing
              {activeTab === 'benefits' && (
                <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-sienna" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('vault')}
              className={`font-serif text-lg pb-1 relative transition-colors flex items-center gap-1.5 ${
                activeTab === 'vault' ? 'text-forest font-semibold' : 'text-slate-soft hover:text-forest'
              }`}
            >
              <Key size={16} className="text-sienna" />
              Member Vault (Coming Soon)
              {activeTab === 'vault' && (
                <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-sienna" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Tab Area */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatePresence mode="wait">
            {activeTab === 'benefits' && (
              <motion.div
                key="benefits-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-12 gap-12 items-start"
              >
                {/* Benefits List */}
                <div className="lg:col-span-7 space-y-8">
                  <h2 className="font-serif text-3xl text-forest">What is included in the membership:</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      { icon: Compass, t: 'Monthly Cohort Calls', d: 'Interactive 60-minute group sessions covering token launches, HIPAA configurations, and regulatory risk mappings.' },
                      { icon: BookOpen, t: 'Diligence Templates', d: 'Immediate downloads of our multi-jurisdiction setup spreadsheets, contractor agreements, and token vesting templates.' },
                      { icon: MessageSquare, t: 'Private Slack Channel', d: 'Ask structure questions, get quick referrals, and collaborate with founders building at similar frontiers.' },
                      { icon: ShieldCheck, t: 'Priority 1-on-1 Scoping', d: 'Members skip wait times and receive accelerated scoping proposals for custom fractional engineering work.' }
                    ].map((item, i) => {
                      const IconComp = item.icon
                      return (
                        <div key={i} className="p-5 bg-sand-soft border border-rule/20 rounded-sm">
                          <div className="text-sienna mb-3"><IconComp size={24} /></div>
                          <h4 className="font-serif text-lg text-forest mb-2">{item.t}</h4>
                          <p className="text-xs text-slate-ink leading-relaxed">{item.d}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Sub Card */}
                <div className="lg:col-span-5 bg-forest text-cream p-8 sm:p-10 rounded-sm shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-forest-deep opacity-30 -z-10" />
                  <div className="text-xs uppercase tracking-[0.2em] text-[#D4A574] font-semibold mb-2 flex items-center gap-2">
                    Active Retainer <span className="bg-[#D4A574]/20 text-[#D4A574] text-[9px] px-1.5 py-0.5 rounded-sm font-bold uppercase">Coming Soon</span>
                  </div>
                  <h3 className="font-serif text-3xl mb-1">Frontier Membership</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-3xl font-semibold text-[#D4A574]">$950</span>
                    <span className="text-xs opacity-75">/ month (billed annually)</span>
                  </div>

                  <p className="text-sm opacity-80 leading-relaxed mb-8">
                    Gain strategic momentum. Secure structural safety rails. Minimize legal bills and move with Bain-level clarity.
                  </p>

                  <ul className="space-y-3 mb-8 border-t border-cream/15 pt-6">
                    {membershipProduct?.features.map((f, i) => (
                      <li key={i} className="text-xs flex items-start gap-2.5">
                        <span className="text-[#D4A574]">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {!isWaitlisted ? (
                    <form onSubmit={handleJoinWaitlist} className="space-y-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-cream/70 mb-1.5">
                          Enter Email to Join Membership Waitlist
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="founder@yourstartup.com"
                          className="w-full px-4 py-3 bg-forest-deep border border-cream/20 text-cream placeholder-cream/40 focus:outline-none focus:border-[#D4A574] text-sm"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSimulating}
                        className="w-full py-4 bg-[#D4A574] hover:bg-[#c99a67] text-forest font-bold text-xs uppercase tracking-[0.2em] transition-colors duration-300 rounded-sm flex items-center justify-center gap-2"
                      >
                        {isSimulating ? (
                          <>
                            <Loader2 className="animate-spin" size={14} /> Joining Waitlist...
                          </>
                        ) : (
                          'Join Priority Waitlist'
                        )}
                      </button>
                    </form>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-forest-deep/60 p-4 border border-cream/15 rounded-sm">
                        <p className="text-xs text-[#D4A574] font-semibold mb-1">✓ Added to Priority Waitlist</p>
                        <p className="text-[11px] opacity-75">We will notify: {email}</p>
                      </div>
                      <button
                        onClick={handleLeaveWaitlist}
                        className="w-full text-center text-[10px] text-cream/50 hover:text-cream/80 transition-colors uppercase tracking-wider underline pt-2"
                      >
                        Leave Waitlist
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {activeTab === 'vault' && (
              <motion.div
                key="vault-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto"
              >
                <div className="text-center py-20 bg-sand-soft border border-rule/30 rounded-sm">
                  <Key size={48} className="mx-auto text-sienna mb-4 animate-pulse" />
                  <h3 className="font-serif text-2xl text-forest mb-2">Member Document Vault (Coming Soon)</h3>
                  <p className="text-sm text-slate-ink max-w-md mx-auto leading-relaxed mb-6">
                    The document vault, compliance matrices, legal drafting templates, and contractor frameworks will be accessible to active members of the Regulated Frontier Club once membership launches.
                  </p>
                  {isWaitlisted ? (
                    <div className="inline-block bg-emerald-50 border border-emerald-200 text-emerald-800 px-5 py-2.5 rounded-sm text-xs font-semibold">
                      ✓ You have joined the priority waitlist for early access
                    </div>
                  ) : (
                    <button
                      onClick={() => setActiveTab('benefits')}
                      className="px-6 py-3.5 bg-forest hover:bg-sienna text-cream text-xs uppercase tracking-wider font-semibold transition-colors duration-300 rounded-sm"
                    >
                      Join Priority Waitlist
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  )
}
