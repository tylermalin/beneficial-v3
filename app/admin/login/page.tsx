'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { loginAdmin, getCurrentSession } from '@/lib/auth'
import { Lock, Mail, ArrowRight, Loader2, AlertCircle, ShieldAlert } from 'lucide-react'
import { recordEvent } from '@/lib/analytics'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const session = getCurrentSession()
    if (session) {
      if (session.role === 'admin') {
        router.push('/admin')
      } else {
        router.push(`/portal?client=${session.clientId}`)
      }
    }
    recordEvent('pageview', { section: 'admin_login' })
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simulate database lookup delay
    setTimeout(async () => {
      const success = await loginAdmin(email, password)
      setIsLoading(false)
      if (success) {
        recordEvent('click', { action: 'admin_login_success', email })
        router.push('/admin')
      } else {
        setError('Unauthorized administrator credentials. Access logged.')
        recordEvent('click', { action: 'admin_login_failure', email })
      }
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-forest flex flex-col justify-between text-cream">
      <Navigation />

      <section className="flex-grow pt-36 pb-20 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-forest-deep border border-[#D4A574]/25 p-8 sm:p-10 rounded-sm shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#D4A574]" />

          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4A574] font-bold bg-forest px-3 py-1 border border-[#D4A574]/20 rounded-full inline-block mb-3">
              Operator Console
            </span>
            <h1 className="font-serif text-3xl text-cream flex items-center justify-center gap-2">
              <ShieldAlert className="text-[#D4A574]" size={24} /> Admin Login
            </h1>
            <p className="text-xs text-cream/70 mt-1.5 leading-relaxed">
              Verify credentials to unlock CRM ledgers and stages pipelines.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-cream/60 font-semibold mb-1.5">
                Admin Email
              </label>
              <div className="relative">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D4A574]" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tylermalin@gmail.com"
                  className="w-full pl-10 pr-4 py-3 bg-forest border border-[#D4A574]/25 focus:outline-none focus:border-[#D4A574] rounded-sm text-sm text-cream placeholder-cream/30"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-cream/60 font-semibold mb-1.5">
                Admin Security Password
              </label>
              <div className="relative">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D4A574]" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-forest border border-[#D4A574]/25 focus:outline-none focus:border-[#D4A574] rounded-sm text-sm text-cream placeholder-cream/30"
                />
              </div>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-rose-950/40 border border-rose-800 text-rose-300 p-3.5 text-xs rounded-sm flex items-start gap-2.5"
              >
                <AlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>{error}</span>
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-[#D4A574] hover:bg-[#c99a67] text-forest font-bold text-xs uppercase tracking-widest transition-all rounded-sm flex items-center justify-center gap-1.5 mt-6"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={14} /> Initializing Admin Session...
                </>
              ) : (
                <>
                  Enter Operator Console <ArrowRight size={14} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
