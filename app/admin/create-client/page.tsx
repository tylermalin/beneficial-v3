'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { isAdminAuthenticated } from '@/lib/auth'
import { addDbClient } from '@/lib/db'
import { ClientProfile } from '@/lib/mockData'
import { ArrowLeft, UserPlus, Key, Building2, User, Mail, ShieldAlert, Check } from 'lucide-react'
import { recordEvent } from '@/lib/analytics'

export default function AdminCreateClient() {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [company, setCompany] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [tier, setTier] = useState<'Operator' | 'Architect' | 'Project'>('Operator')
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      router.push('/admin/login')
    } else {
      setIsAdmin(true)
    }
    recordEvent('pageview', { section: 'admin_create_client' })
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!company || !name || !email || !password) return

    const newClient: ClientProfile = {
      id: company.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      name,
      company,
      email,
      tier,
      status: 'onboarding', // starts at onboarding / proposal stage
      kickoffDate: '',
      whatsNext: [
        { id: Math.random().toString(36).substring(2, 9), title: 'Review SOW Proposal and sign SOW digitally', status: 'todo' }
      ],
      whatsBlocking: [],
      vault: [],
      invoices: [],
      weeklyUpdates: [],
      // SOW Workflow details stored on client
      sowSignedByClient: false,
      sowSignedByAdmin: false,
      sowDetails: {
        scoping: 'AI model fine-tuning validation, cap table engineering and Cayman compliance structure.',
        deliverables: 'Cayman SPV Constitution, HIPAA compliant medical logs transcribers pipeline configuration, advisory memo.',
        exclusions: 'Real-world litigation defense representing company in civil courts, external audit representation.',
        price: tier === 'Operator' ? 8500 : tier === 'Architect' ? 15000 : 25000
      }
    } as any // cast so dynamic properties pass TS checks

    // Save password
    ;(newClient as any).password = password

    await addDbClient(newClient)
    recordEvent('click', { action: 'admin_created_client_directly', company })
    setIsSuccess(true)
  }

  if (!isAdmin) return null

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Header */}
      <section className="pt-36 pb-12 border-b border-rule bg-cream">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 text-sienna mb-4">
            <Link
              href="/admin"
              className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold hover:text-forest transition-colors"
            >
              <ArrowLeft size={14} /> Back to CRM Registry
            </Link>
          </div>
          <h1 className="font-serif text-4xl text-forest font-normal flex items-center gap-3">
            <UserPlus className="text-sienna" size={28} /> Provision Client Portal
          </h1>
          <p className="text-xs text-slate-soft mt-1.5 uppercase tracking-wider">
            Directly create client profiles, set credentials, and generate default scoping agreements.
          </p>
        </div>
      </section>

      {/* Creator Form */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-xl">
          <div className="bg-sand-soft border border-rule/35 p-8 sm:p-10 rounded-sm relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-sienna" />

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">Company Name</label>
                    <div className="relative">
                      <Building2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-soft" />
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Pearson Climate"
                        className="w-full pl-9 pr-4 py-2.5 bg-cream border border-rule/40 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">Founder Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-soft" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Sarah Pearson"
                        className="w-full pl-9 pr-4 py-2.5 bg-cream border border-rule/40 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">Client Email Address</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-soft" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sarah@pearsonclimate.co"
                      className="w-full pl-9 pr-4 py-2.5 bg-cream border border-rule/40 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">Portal Security Password</label>
                  <div className="relative">
                    <Key size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-soft" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Assign a secure password"
                      className="w-full pl-9 pr-4 py-2.5 bg-cream border border-rule/40 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1.5">Engagement Tier</label>
                  <div className="flex gap-4">
                    {['Operator', 'Architect', 'Project'].map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTier(t as any)}
                        className={`flex-1 py-2 text-xs font-semibold border rounded-sm transition-colors ${
                          tier === t
                            ? 'bg-sienna border-sienna text-cream'
                            : 'bg-cream border-rule/50 text-forest hover:border-rule'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-forest hover:bg-sienna text-cream text-xs uppercase tracking-widest font-bold transition-all rounded-sm flex items-center justify-center gap-1.5 shadow-sm mt-6"
                >
                  Create Client Portal Account <Check size={14} />
                </button>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-sienna text-cream rounded-full flex items-center justify-center mx-auto mb-5">
                  <Check size={30} />
                </div>
                <h3 className="font-serif text-2xl text-forest mb-2">Portal Account Provisioned</h3>
                <p className="text-xs text-slate-ink leading-relaxed mb-6">
                  Client profile for <strong>{company}</strong> has been successfully instantiated. 
                  Login email: <strong>{email}</strong>. SOW draft templates have been prepared.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/admin"
                    className="flex-1 py-3 bg-forest hover:bg-sienna text-cream text-[10px] uppercase tracking-wider font-bold rounded-sm"
                  >
                    Back to CRM Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      setIsSuccess(false)
                      setCompany('')
                      setName('')
                      setEmail('')
                      setPassword('')
                    }}
                    className="flex-1 py-3 border border-rule text-slate-ink text-[10px] uppercase tracking-wider font-bold rounded-sm"
                  >
                    Create Another Portal
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
