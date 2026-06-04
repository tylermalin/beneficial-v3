'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { getDbClients, isLiveDb } from '@/lib/db'
import { ClientProfile } from '@/lib/mockData'
import { getAnalyticsSummary, AnalyticsSummary } from '@/lib/analytics'
import { isAdminAuthenticated, logout } from '@/lib/auth'
import { Users, DollarSign, Activity, FileText, ChevronRight, BarChart3, ShieldAlert, Award, UserPlus, LogOut, HardDrive } from 'lucide-react'

export default function AdminDashboard() {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [clients, setClients] = useState<ClientProfile[]>([])
  const [analytics, setAnalytics] = useState<AnalyticsSummary | null>(null)

  useEffect(() => {
    // Authenticate admin
    if (!isAdminAuthenticated()) {
      router.push('/admin/login')
      return
    }
    setIsAdmin(true)

    const loadAdminData = async () => {
      const list = await getDbClients()
      setClients(list)
      setAnalytics(getAnalyticsSummary())
    }
    loadAdminData()

    // Sync updates
    const syncDb = async () => {
      const list = await getDbClients()
      setClients(list)
      setAnalytics(getAnalyticsSummary())
    }

    window.addEventListener('beneficial_db_updated', syncDb)
    return () => window.removeEventListener('beneficial_db_updated', syncDb)
  }, [router])

  const handleLogout = () => {
    logout()
    router.push('/admin/login')
  }

  if (!isAdmin) return null

  // Calculations
  const activeClients = clients.filter(c => c.status === 'active')
  const totalMrr = activeClients.reduce((sum, c) => {
    const rate = c.tier === 'Operator' ? 8500 : c.tier === 'Architect' ? 15000 : 0
    return sum + rate
  }, 0)

  const pendingInvoiceSum = clients.reduce((sum, c) => {
    const unpaid = c.invoices.filter(i => i.status !== 'paid')
    return sum + unpaid.reduce((s, i) => s + i.amount, 0)
  }, 0)

  const pendingSowSignatures = clients.filter(c => (c as any).sowSignedByClient && !(c as any).sowSignedByAdmin).length

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Database Integration Alert Banner */}
      <section className={`py-2 px-6 text-center text-xs font-semibold ${
        isLiveDb ? 'bg-emerald-50 text-emerald-800 border-b border-emerald-200' : 'bg-amber-50 text-amber-800 border-b border-amber-200'
      }`}>
        <div className="container mx-auto flex items-center justify-center gap-2">
          <HardDrive size={14} />
          {isLiveDb ? (
            <span>Production Database Active: Connected to live Vercel KV Redis database.</span>
          ) : (
            <span>Running in local simulation mode. To persist live data in production, configure your Vercel database environment variables (KV_REST_API_URL and KV_REST_API_TOKEN).</span>
          )}
        </div>
      </section>

      {/* SOW Signatures Alert Notification */}
      {pendingSowSignatures > 0 && (
        <section className="bg-rose-50 border-b border-rose-200 py-3 text-rose-800 text-xs font-semibold">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <ShieldAlert size={15} />
              You have {pendingSowSignatures} Client SOW proposal contract(s) awaiting your Principal countersign.
            </span>
            <span className="italic">Review them in the client logs below.</span>
          </div>
        </section>
      )}

      {/* Header */}
      <section className="pt-28 pb-12 border-b border-rule bg-cream">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-sienna" />
                <span className="text-xs uppercase tracking-[0.22em] text-sienna font-medium">
                  Beneficial Systems Admin
                </span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl text-forest leading-[0.98] tracking-[-0.02em] font-normal">
                Firm Operations
              </h1>
              <p className="text-xs text-slate-soft mt-1.5 uppercase tracking-wider font-bold">
                Operator: tylermalin@gmail.com · Authenticated Admin Console
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href="/admin/create-client"
                className="px-4 py-3 bg-forest hover:bg-sienna text-cream text-[10px] uppercase tracking-wider font-bold transition-all rounded-sm flex items-center gap-1"
              >
                <UserPlus size={14} /> Provision Client Portal
              </Link>
              <Link
                href="/admin/agents"
                className="px-4 py-3 bg-sand-soft hover:bg-[#D4A574] hover:text-cream text-forest text-[10px] uppercase tracking-wider font-bold transition-all border border-rule/30 rounded-sm flex items-center gap-1"
              >
                Launch AI Agent Sandbox
              </Link>
              <button
                onClick={handleLogout}
                className="px-3.5 py-3 border border-rule/30 text-slate-ink hover:text-rose-800 transition-colors rounded-sm flex items-center gap-1 text-[10px] uppercase tracking-wider font-bold"
              >
                <LogOut size={13} /> Exit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics & Overview Cards */}
      <section className="py-12 border-b border-rule bg-sand-soft/40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* KPI 1 */}
            <div className="bg-cream border border-rule/20 p-6 rounded-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-wider text-slate-soft font-semibold">Active Practice MRR</span>
                <Users className="text-sienna" size={16} />
              </div>
              <span className="font-serif text-3xl text-forest font-semibold">${totalMrr.toLocaleString()}</span>
              <span className="block text-[10px] text-emerald-800 font-semibold mt-1">✓ Retainer streams active</span>
            </div>

            {/* KPI 2 */}
            <div className="bg-cream border border-rule/20 p-6 rounded-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-wider text-slate-soft font-semibold">Outstanding Accounts</span>
                <DollarSign className="text-sienna" size={16} />
              </div>
              <span className="font-serif text-3xl text-forest font-semibold">${pendingInvoiceSum.toLocaleString()}</span>
              <span className="block text-[10px] text-amber-700 font-semibold mt-1">⚠️ Net 15 pending balances</span>
            </div>

            {/* KPI 3 */}
            <div className="bg-cream border border-rule/20 p-6 rounded-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-wider text-slate-soft font-semibold">Simulated Page Views</span>
                <Activity className="text-sienna" size={16} />
              </div>
              <span className="font-serif text-3xl text-forest font-semibold">
                {analytics?.totalPageViews || 142}
              </span>
              <span className="block text-[10px] text-slate-soft mt-1">Onsite interactions tracked</span>
            </div>

            {/* KPI 4 */}
            <div className="bg-cream border border-rule/20 p-6 rounded-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-wider text-slate-soft font-semibold">Conversion Actions</span>
                <Award className="text-sienna" size={16} />
              </div>
              <span className="font-serif text-3xl text-forest font-semibold">
                {analytics?.events.filter(e => e.type !== 'pageview').length || 8}
              </span>
              <span className="block text-[10px] text-slate-soft mt-1">Downloads / orders completed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main CRM Registry */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left Column: CRM client table */}
            <div className="lg:col-span-8 space-y-6">
              <h3 className="font-serif text-2xl text-forest mb-4">Client Registry</h3>

              <div className="space-y-4">
                {clients.map((client) => {
                  const blockersCount = client.whatsBlocking.filter(b => !b.resolved).length
                  const hasPendingSow = (client as any).sowSignedByClient && !(client as any).sowSignedByAdmin
                  
                  return (
                    <div
                      key={client.id}
                      className="p-6 bg-cream border border-rule/30 hover:border-rule rounded-sm transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <h4 className="font-serif text-xl text-forest">{client.company}</h4>
                          <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-sm ${
                            client.tier === 'Architect' ? 'bg-indigo-50 border border-indigo-200 text-indigo-800 font-bold' : 'bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold'
                          }`}>
                            {client.tier}
                          </span>
                        </div>
                        <p className="text-xs text-slate-soft font-medium">Founder: {client.name} · {client.email}</p>
                        
                        <div className="flex items-center gap-4.5 pt-2 text-[10px] text-slate-soft uppercase tracking-wider font-bold">
                          {hasPendingSow ? (
                            <span className="text-rose-800 font-bold flex items-center gap-1">
                              <ShieldAlert size={12} /> Awaiting countersign
                            </span>
                          ) : blockersCount > 0 ? (
                            <span className="flex items-center gap-1 text-rose-800 font-semibold animate-pulse">
                              <ShieldAlert size={12} /> {blockersCount} Blockers Active
                            </span>
                          ) : (
                            <span className="text-emerald-800 font-semibold">✓ Operations Clear</span>
                          )}
                          <span>·</span>
                          <span>Timeline: {client.kickoffDate || 'Pending'}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 border-rule/20 pt-4 sm:pt-0">
                        <div className="text-right sm:block hidden">
                          <span className="block text-[9px] uppercase text-slate-soft font-semibold">Proposal Status</span>
                          <span className={`text-xs font-bold uppercase ${
                            hasPendingSow ? 'text-amber-700 font-bold' : blockersCount > 0 ? 'text-amber-700' : 'text-emerald-800'
                          }`}>
                            {hasPendingSow ? 'AWAITING SIGN' : blockersCount > 0 ? 'NEEDS ATTENTION' : 'ACTIVE'}
                          </span>
                        </div>

                        <Link
                          href={hasPendingSow ? `/portal/proposal?client=${client.id}` : `/admin/client/${client.id}`}
                          className="px-4 py-2.5 bg-sand-soft hover:bg-sienna hover:text-cream text-forest text-xs uppercase tracking-wider font-semibold transition-all rounded-sm flex items-center gap-1 border border-rule/30"
                        >
                          {hasPendingSow ? 'Sign SOW Proposal' : 'Manage Account'} <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Column: Traffic Analytics */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-cream border border-rule/30 p-6 rounded-sm">
                <div className="flex items-center gap-2 mb-4 border-b border-rule/30 pb-3">
                  <BarChart3 className="text-sienna" size={18} />
                  <span className="font-serif text-lg text-forest">Traffic Channels</span>
                </div>

                <div className="space-y-4">
                  {/* Referral summary list */}
                  <div>
                    <span className="block text-[10px] uppercase text-slate-soft font-semibold mb-2">Referrer Hostnames</span>
                    {analytics && Object.keys(analytics.referrers).length > 0 ? (
                      <div className="space-y-2">
                        {Object.entries(analytics.referrers).slice(0, 4).map(([ref, count]) => (
                          <div key={ref} className="flex justify-between items-center text-xs">
                            <span className="font-mono text-slate-ink truncate max-w-[200px]">{ref}</span>
                            <span className="font-bold text-forest">{count} visits</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs italic text-slate-soft">No traffic records stored. Navigate pages to generate events.</p>
                    )}
                  </div>

                  {/* UTM campaigns */}
                  <div className="pt-4 border-t border-rule/20">
                    <span className="block text-[10px] uppercase text-slate-soft font-semibold mb-2">UTM Campaigns</span>
                    {analytics && Object.keys(analytics.utmSources).length > 0 ? (
                      <div className="space-y-2">
                        {Object.entries(analytics.utmSources).slice(0, 3).map(([src, count]) => (
                          <div key={src} className="flex justify-between items-center text-xs">
                            <span className="font-mono text-slate-ink">{src}</span>
                            <span className="font-bold text-forest">{count} entries</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs italic text-slate-soft">No UTM source tags active.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
