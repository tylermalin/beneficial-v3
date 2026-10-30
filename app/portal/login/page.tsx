'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { loginClient, getCurrentSession } from '@/lib/auth'
import { Lock, Mail, ArrowRight, Loader2, AlertCircle } from 'lucide-react'
import { recordEvent } from '@/lib/analytics'

export default function ClientLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const session = getCurrentSession()
    if (session) {
      if (session.role === 'client') router.push(`/portal?client=${session.clientId}`)
      else if (session.role === 'admin') router.push('/admin')
    }
    recordEvent('pageview', { section: 'portal_login' })
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    setTimeout(async () => {
      const clientId = await loginClient(email, password)
      setIsLoading(false)
      if (clientId) {
        recordEvent('click', { action: 'portal_login_success', email })
        router.push(`/portal?client=${clientId}`)
      } else {
        setError('Invalid credentials. Please check your email and password.')
        recordEvent('click', { action: 'portal_login_failure', email })
      }
    }, 800)
  }

  return (
    <main className="obsidian flex min-h-screen flex-col justify-between">
      <Navigation />

      <section className="relative flex flex-grow items-center justify-center overflow-hidden px-6 pt-36 pb-20">
        <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" />
        <div aria-hidden className="veil-top pointer-events-none absolute inset-0" />
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="surface-glass relative z-10 w-full max-w-md rounded-lg border border-line-hairline p-8 sm:p-10"
        >
          <div className="mb-8">
            <div className="eyebrow mb-4">Secure access</div>
            <h1 className="text-2xl font-light tracking-[-0.02em] text-ink">Client portal login</h1>
            <p className="mt-2 text-[14px] leading-[1.6] text-faint">
              Access your SOW roadmap, vault documents, and billing ledger.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="mb-1.5 block font-mono text-[12px] uppercase tracking-wider text-faint">
                Client email
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-faint" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-md border border-line-hairline bg-section py-3 pl-10 pr-4 text-[14px] text-ink placeholder:text-faint focus:border-line-accent focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block font-mono text-[12px] uppercase tracking-wider text-faint">
                Portal password
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-faint" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-md border border-line-hairline bg-section py-3 pl-10 pr-4 text-[14px] text-ink placeholder:text-faint focus:border-line-accent focus:outline-none"
                />
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-start gap-2.5 rounded-md border border-destructive/40 bg-destructive/10 p-3.5 text-[13px] text-ink"
              >
                <AlertCircle size={16} className="mt-0.5 shrink-0 text-destructive" />
                <span>{error}</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-md bg-lime-400 py-4 font-mono text-[12px] uppercase tracking-widest font-medium text-canvas transition-[filter] hover:brightness-105 disabled:opacity-60"
            >
              {isLoading ? (
                <><Loader2 className="animate-spin" size={14} /> Opening portal…</>
              ) : (
                <>Enter dashboard <ArrowRight size={14} /></>
              )}
            </button>
          </form>

          <div className="mt-8 flex justify-between border-t border-line-hairline pt-5 text-[13px] text-faint">
            <span>Need an account?</span>
            <Link href="/portal/onboarding" className="flex items-center gap-1 font-medium text-lime-400 hover:underline">
              Start onboarding <ArrowRight size={12} />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
