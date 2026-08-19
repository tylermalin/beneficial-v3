'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ShieldCheck, Compass, MessageSquare, BookOpen, Check, Loader2 } from 'lucide-react'
import { getProducts, Product } from '@/lib/mockData'
import { recordEvent } from '@/lib/analytics'
import { Card, Eyebrow, FeatureTile, Button } from '@/components/ui/obsidian'

const vaultItems = [
  { icon: Compass, t: 'Monthly cohort calls', d: 'Interactive 60-minute group sessions covering token launches, HIPAA configurations, and regulatory risk mappings.' },
  { icon: BookOpen, t: 'Diligence templates', d: 'Immediate downloads of our multi-jurisdiction setup spreadsheets, contractor agreements, and token vesting templates.' },
  { icon: MessageSquare, t: 'Private Slack channel', d: 'Ask structure questions, get quick referrals, and collaborate with founders building at similar frontiers.' },
  { icon: ShieldCheck, t: 'Priority 1-on-1 scoping', d: 'Members skip wait times and receive accelerated scoping proposals for custom fractional engineering work.' },
]

export default function MembershipPage() {
  const [membershipProduct, setMembershipProduct] = useState<Product | null>(null)
  const [isWaitlisted, setIsWaitlisted] = useState(false)
  const [isSimulating, setIsSimulating] = useState(false)
  const [email, setEmail] = useState('')

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
    <main className="obsidian min-h-screen">
      <Navigation />

      {/* Page header */}
      <section className="relative overflow-hidden border-b border-line-hairline pt-[136px] pb-16 sm:pt-40 sm:pb-20">
        <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" />
        <div aria-hidden className="veil-top pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="max-w-4xl">
            <Eyebrow>Membership · Coming soon</Eyebrow>
            <h1 className="mt-6 text-[clamp(2.25rem,5.5vw,3.5rem)] font-light leading-[1.05] tracking-[-0.03em] text-body">
              A private circle for founders at the{' '}
              <span className="headline-em">regulated frontier</span>.
            </h1>
            <p className="mt-8 max-w-measure text-[15px] leading-[1.6] text-body">
              For founders scaling businesses at the intersection of AI, Web3, and regulated markets. Access tools, templates, peer calls, and direct advisory — before you need the full retainer.
            </p>
          </div>
        </div>
      </section>

      {/* 01 — Member vault */}
      <section className="border-b border-line-hairline bg-section py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="mb-12 max-w-measure">
            <Eyebrow index="01">Member vault</Eyebrow>
            <h2 className="mt-6 text-[clamp(1.75rem,4vw,2.25rem)] font-light leading-[1.1] tracking-[-0.02em] text-body">
              What&apos;s included in the <span className="headline-em">membership</span>.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {vaultItems.map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.t} variant="glass" interactive className="flex flex-col p-7">
                  <FeatureTile>
                    <Icon size={16} strokeWidth={1.5} />
                  </FeatureTile>
                  <h3 className="mt-6 text-xl font-normal tracking-[-0.02em] text-ink">{item.t}</h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-body">{item.d}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* 02 — Pricing */}
      <section className="border-b border-line-hairline bg-canvas py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow index="02">Pricing</Eyebrow>
              <h2 className="mt-6 max-w-measure text-[clamp(1.75rem,4vw,2.25rem)] font-light leading-[1.1] tracking-[-0.02em] text-body">
                One membership. <span className="headline-em">Structural momentum at scale</span>.
              </h2>
              <p className="mt-6 max-w-measure text-[15px] leading-[1.6] text-body">
                Gain strategic momentum, secure structural safety rails, and minimize legal bills. Prefer a dedicated partner?{' '}
                <Link href="/#engagements" className="border-b border-line-accent pb-0.5 text-lime-400 transition-colors hover:text-ink">
                  See the retainer engagements
                </Link>
                .
              </p>
            </div>

            <Card variant="glass" glow className="p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <Eyebrow>Frontier membership</Eyebrow>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="tabular text-[40px] font-medium leading-none text-ink">$950</span>
                <span className="text-sm text-faint">/ month, billed annually</span>
              </div>

              <ul className="mt-8 space-y-3 border-t border-line-hairline pt-6">
                {membershipProduct?.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13px] leading-snug text-body">
                    <Check size={14} strokeWidth={2} className="mt-0.5 shrink-0 text-lime-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {!isWaitlisted ? (
                <form onSubmit={handleJoinWaitlist} className="mt-8 space-y-4">
                  <div>
                    <label className="eyebrow mb-2 block text-faint">
                      Enter email to join the membership waitlist
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="founder@yourstartup.com"
                      className="w-full rounded-lg border border-line-hairline surface-flat px-4 py-2.5 text-[15px] text-ink placeholder:text-faint transition-[border-color,box-shadow] duration-200 ease-obsidian-out focus:border-line-accent focus:outline-none focus:ring-[3px] focus:ring-[rgba(204,255,0,.25)]"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="accent"
                    size="md"
                    disabled={isSimulating}
                    className="w-full"
                    icon={isSimulating ? <Loader2 className="animate-spin" size={14} /> : undefined}
                  >
                    {isSimulating ? 'Joining waitlist…' : 'Join the priority waitlist'}
                  </Button>
                  <p className="text-xs leading-relaxed text-faint">
                    We&apos;ll notify you when membership opens. No spam, unsubscribe anytime.
                  </p>
                </form>
              ) : (
                <div className="mt-8 space-y-4">
                  <div className="rounded-lg border border-line-accent surface-flat p-4">
                    <p className="mb-1 flex items-center gap-2 text-[13px] font-medium text-lime-400">
                      <Check size={14} strokeWidth={2} /> Added to the priority waitlist
                    </p>
                    <p className="text-xs text-faint">We&apos;ll notify: {email}</p>
                  </div>
                  <button
                    onClick={handleLeaveWaitlist}
                    className="text-xs text-faint underline transition-colors hover:text-ink"
                  >
                    Leave waitlist
                  </button>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
