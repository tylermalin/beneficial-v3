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
    // If already authenticated, redirect to portal
    const session = getCurrentSession()
    if (session) {
      if (session.role === 'client') {
        router.push(`/portal?client=${session.clientId}`)
      } else if (session.role === 'admin') {
        router.push('/admin')
      }
    }
    recordEvent('pageview', { section: 'portal_login' })
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simulate database lookup delay
    setTimeout(async () => {
      const clientId = await loginClient(email, password)
      setIsLoading(false)
      if (clientId) {
        recordEvent('click', { action: 'portal_login_success', email })
        router.push(`/portal?client=${clientId}`)
      } else {
        setError('Invalid credentials. Note: Pearson password is "beneficial" for testing.')
        recordEvent('click', { action: 'portal_login_failure', email })
      }
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-cream flex flex-col justify-between">
      <Navigation />

      <section className="flex-grow pt-36 pb-20 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-sand-soft border border-rule/30 p-8 sm:p-10 rounded-sm shadow-xl relative overflow-hidden"
        >
          {/* Backdrop grain */}
          <div className="absolute inset-0 bg-background opacity-20 -z-10" />
          <div className="absolute top-0 left-0 w-full h-1 bg-sienna" />

          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-[0.2em] text-sienna font-bold bg-cream px-3 py-1 border border-rule/20 rounded-full inline-block mb-3">
              Secure Access
            </span>
            <h1 className="font-serif text-3xl text-forest">Client Portal Login</h1>
            <p className="text-xs text-slate-ink mt-1.5 leading-relaxed">
              Access your SOW roadmap, vault documents, and billing ledger.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1.5">
                Client Email
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-soft" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sarah@pearsonclimate.co"
                  className="w-full pl-10 pr-4 py-3 bg-cream border border-rule/45 focus:outline-none focus:border-sienna rounded-sm text-sm text-forest"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1.5">
                Portal Password
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-soft" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-cream border border-rule/45 focus:outline-none focus:border-sienna rounded-sm text-sm text-forest"
                />
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-rose-50 border border-rose-200 text-rose-800 p-3.5 text-xs rounded-sm flex items-start gap-2.5"
              >
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>{error}</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-forest hover:bg-sienna text-cream text-xs uppercase tracking-widest font-bold transition-all rounded-sm flex items-center justify-center gap-1.5 shadow-md mt-6"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={14} /> Opening Portal...
                </>
              ) : (
                <>
                  Enter Dashboard <ArrowRight size={14} />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-5 border-t border-rule/20 text-center text-xs text-slate-soft flex justify-between">
            <span>Need an account?</span>
            <Link href="/portal/onboarding" className="text-sienna hover:underline font-semibold flex items-center gap-1">
              Start Onboarding <ArrowRight size={12} />
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
