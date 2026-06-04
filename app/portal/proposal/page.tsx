'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { getDbClientById, updateDbClient, ClientProfile } from '@/lib/db'
import { FileCheck, ShieldAlert, Award, Calendar, Check, ArrowRight, UserCheck } from 'lucide-react'
import { recordEvent } from '@/lib/analytics'

function ProposalContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [client, setClient] = useState<ClientProfile | null>(null)
  const [isAdminMode, setIsAdminMode] = useState(false)
  const [nudgeSent, setNudgeSent] = useState(false)

  const clientId = searchParams.get('client') || 'pearson'

  useEffect(() => {
    const fetchClient = async () => {
      const found = await getDbClientById(clientId)
      if (found) {
        setClient(found)
      }
    }
    fetchClient()
    recordEvent('pageview', { section: 'proposal_page', client: clientId })
  }, [clientId])

  const handleAdminCountersign = async () => {
    if (!client) return

    // SOW details parameters
    const sow = (client as any).sowDetails || {
      scoping: 'AI validation pipelines, legal engineering structural checks.',
      deliverables: 'Cayman SPV Constitution templates, API integration scripts.',
      exclusions: 'External civil court representation.',
      price: client.tier === 'Operator' ? 8500 : client.tier === 'Architect' ? 15000 : client.tier === 'Project' ? 25000 : 0,
      completionDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    }

    // 1. Generate Kanban tasks based on SOW scoping parameters
    const generatedTasks = [
      { id: 'k-sow-1', title: 'Verify scoping details and kickoff roadmap', status: 'done', dueDate: client.kickoffDate },
      { id: 'k-sow-2', title: `Draft deliverables: ${sow.deliverables.slice(0, 45)}...`, status: 'in-progress', dueDate: sow.completionDate },
      { id: 'k-sow-3', title: `Structural engineering audit for: ${sow.scoping.slice(0, 35)}...`, status: 'todo', dueDate: sow.completionDate },
      { id: 'k-sow-4', title: 'Coordinate with outside legal counsel on exclusions review', status: 'todo', dueDate: sow.completionDate }
    ]

    // 2. Generate Invoice ledger entries based on SOW pricing
    const generatedInvoices = [
      {
        id: `INV-2026-${Math.floor(100 + Math.random() * 900)}`,
        amount: sow.price,
        dueDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        issuedDate: new Date().toISOString().split('T')[0],
        status: 'pending',
        description: `Initial SOW Onboarding Deposit - ${client.tier} Retainer`
      }
    ]

    // 3. Clear blockers, transition status to active
    const nextClient = {
      ...client,
      status: 'active',
      sowSignedByAdmin: true,
      whatsNext: generatedTasks as any,
      whatsBlocking: [], // SOW signed blocker is removed!
      invoices: generatedInvoices as any,
      weeklyUpdates: [
        {
          week: `Week of ${new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}`,
          content: 'SOW proposal signed by both Principal and Client. Milestones, Kanban boards, and retainer billing ledger activated.',
          health: 'good'
        },
        ...(client.weeklyUpdates || [])
      ]
    } as any

    setClient(nextClient)
    await updateDbClient(nextClient)
    recordEvent('click', { action: 'admin_countersigned_sow', client: client.company })
  }

  const handleNudgeAdmin = () => {
    setNudgeSent(true)
    recordEvent('click', { action: 'client_nudged_admin', client: client?.company })
    setTimeout(() => setNudgeSent(false), 3000)
  }

  if (!client) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center text-forest text-sm font-semibold uppercase tracking-wider">
        Locating Statement of Work...
      </div>
    )
  }

  const sow = (client as any).sowDetails || {
    scoping: 'AI structures and legal compliance.',
    deliverables: 'Entity design mappings.',
    exclusions: 'External litigation representations.',
    price: client.tier === 'Operator' ? 8500 : client.tier === 'Architect' ? 15000 : client.tier === 'Project' ? 25000 : 0,
    completionDate: '60 Days'
  }

  const clientSigned = (client as any).sowSignedByClient || false
  const adminSigned = (client as any).sowSignedByAdmin || false
  const isFullySigned = clientSigned && adminSigned

  return (
    <main className="min-h-screen bg-cream flex flex-col justify-between">
      <Navigation />

      {/* Simulator view switcher */}
      <section className="pt-24 pb-4 border-b border-rule bg-sand-soft text-forest relative z-30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <UserCheck size={18} className="text-sienna" />
            <span className="text-xs uppercase tracking-[0.16em] font-bold">Simulator SOW signature toggle</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-ink">Simulate Actor view:</span>
            <button
              onClick={() => setIsAdminMode(false)}
              className={`px-3.5 py-1 text-xs border rounded-sm font-semibold ${
                !isAdminMode ? 'bg-forest text-cream border-forest' : 'bg-cream text-forest border-rule'
              }`}
            >
              Client View
            </button>
            <button
              onClick={() => setIsAdminMode(true)}
              className={`px-3.5 py-1 text-xs border rounded-sm font-semibold ${
                isAdminMode ? 'bg-sienna text-cream border-sienna' : 'bg-cream text-forest border-rule'
              }`}
            >
              Admin View
            </button>
          </div>
        </div>
      </section>

      {/* SOW Document Content */}
      <section className="py-16 flex-grow">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-3xl">
          <div className="bg-sand-soft border border-rule/35 p-8 sm:p-12 rounded-sm shadow-xl space-y-8 relative">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-sienna" />

            <div className="flex items-start justify-between border-b border-rule/30 pb-6">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-sienna font-bold bg-cream px-3 py-1 border border-rule/20 rounded-sm">
                  Statement of Work (SOW)
                </span>
                <h1 className="font-serif text-3xl text-forest mt-4">
                  Project Proposal & Scope Details
                </h1>
              </div>
              <FileCheck className="text-forest shrink-0" size={40} />
            </div>

            {/* Contract Body */}
            <div className="space-y-6 text-xs text-slate-ink leading-relaxed font-medium">
              <div className="grid sm:grid-cols-2 gap-4 border-b border-rule/20 pb-4">
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-slate-soft font-bold">Provider / Principal</span>
                  <span className="text-sm font-serif font-bold text-forest">Beneficial Technology, LLC</span>
                  <span className="block opacity-75">Principal: Tyler Malin</span>
                  <span className="block opacity-75">tyler@beneficial.technology</span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-wider text-slate-soft font-bold">Client Entity</span>
                  <span className="text-sm font-serif font-bold text-forest">{client.company}</span>
                  <span className="block opacity-75">Contact: {client.name}</span>
                  <span className="block opacity-75">{client.email}</span>
                </div>
              </div>

              <div>
                <h4 className="font-serif text-sm text-forest font-bold mb-2">1. Objectives and Scoping Details</h4>
                <p className="bg-cream p-4 border border-rule/15 rounded-sm">{sow.scoping}</p>
              </div>

              <div>
                <h4 className="font-serif text-sm text-forest font-bold mb-2">2. Milestone Deliverables</h4>
                <p className="bg-cream p-4 border border-rule/15 rounded-sm">{sow.deliverables}</p>
              </div>

              <div>
                <h4 className="font-serif text-sm text-forest font-bold mb-2">3. Exclusions (Scope Constraints)</h4>
                <p className="bg-cream p-4 border border-rule/15 rounded-sm">{sow.exclusions}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 border-t border-rule/20 pt-6">
                <div>
                  <h4 className="font-serif text-sm text-forest font-bold mb-1">4. Retainer Pricing</h4>
                  <span className="text-lg font-serif text-sienna font-bold">
                    {client.tier === 'Custom' ? 'Bespoke (Pending Strategy Call)' : `$${sow.price.toLocaleString()} USD / Month`}
                  </span>
                </div>
                <div>
                  <h4 className="font-serif text-sm text-forest font-bold mb-1">5. Timeline completion</h4>
                  <span className="text-sm text-forest font-semibold flex items-center gap-1.5 mt-1">
                    <Calendar size={14} className="text-sienna" /> Target Date: {sow.completionDate}
                  </span>
                </div>
              </div>
            </div>

            {/* Signature Blocks */}
            <div className="border-t border-rule pt-8 grid sm:grid-cols-2 gap-8">
              {/* Client Signature */}
              <div className="border border-dashed border-rule/45 p-5 bg-cream/50 rounded-sm">
                <span className="block text-[9px] uppercase tracking-wider text-slate-soft font-bold mb-3">Client Signature</span>
                {clientSigned ? (
                  <div className="space-y-1">
                    <span className="block font-serif text-base italic text-forest font-bold">
                      /s/ {(client as any).sowClientSignature || client.name}
                    </span>
                    <span className="block text-[10px] text-slate-soft">Signed digitally on kickoff creation</span>
                  </div>
                ) : (
                  <span className="text-xs italic text-rose-800">Awaiting client signature</span>
                )}
              </div>

              {/* Admin Signature */}
              <div className="border border-dashed border-rule/45 p-5 bg-cream/50 rounded-sm">
                <span className="block text-[9px] uppercase tracking-wider text-slate-soft font-bold mb-3">Principal Counter-Signature</span>
                {adminSigned ? (
                  <div className="space-y-1">
                    <span className="block font-serif text-base italic text-forest font-bold">
                      /s/ Tyler Malin
                    </span>
                    <span className="block text-[10px] text-slate-soft">Countersigned - SOW Active ✓</span>
                  </div>
                ) : (
                  <span className="text-xs italic text-rose-800">Awaiting countersign by Tyler Malin</span>
                )}
              </div>
            </div>

            {/* Actions panel */}
            <div className="border-t border-rule/30 pt-6">
              {!isFullySigned ? (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-amber-50 border border-amber-200 text-amber-800 rounded-sm">
                  <div className="flex items-center gap-2.5">
                    <ShieldAlert className="shrink-0" size={20} />
                    <div className="text-xs leading-relaxed">
                      <strong>Status: Onboarding Proposal</strong> <br />
                      This SOW is awaiting counter-signature by Beneficial Technology Principal before dashboard items populate.
                    </div>
                  </div>

                  {!isAdminMode ? (
                    <button
                      onClick={handleNudgeAdmin}
                      disabled={nudgeSent}
                      className="px-4 py-2 bg-sienna text-cream text-[10px] uppercase tracking-wider font-bold hover:bg-forest transition-colors rounded-sm"
                    >
                      {nudgeSent ? 'Nudge Sent ✓' : 'Nudge Tyler Malin'}
                    </button>
                  ) : (
                    <button
                      onClick={handleAdminCountersign}
                      className="px-4 py-2.5 bg-forest text-cream text-[10px] uppercase tracking-wider font-bold hover:bg-sienna transition-colors rounded-sm shadow-sm"
                    >
                      Countersign SOW
                    </button>
                  )}
                </div>
              ) : (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-5 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <Award size={22} className="text-emerald-700 shrink-0" />
                    <div className="text-xs">
                      <strong>SOW Fully Executed ✓</strong> <br />
                      Contract signed. Client portal dashboards, Kanban roadmaps, and scheduling timelines are fully active.
                    </div>
                  </div>
                  <Link
                    href={`/portal?client=${client.id}`}
                    className="px-4 py-3.5 bg-forest hover:bg-sienna text-cream text-[10px] uppercase tracking-wider font-bold transition-all rounded-sm flex items-center gap-1"
                  >
                    Enter Active Portal <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function SOWProposalPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-cream flex items-center justify-center text-forest text-sm uppercase tracking-widest font-semibold">
        Loading SOW Document...
      </div>
    }>
      <ProposalContent />
    </Suspense>
  )
}
