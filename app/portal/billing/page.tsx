'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { getDbClients, updateDbClient, payInvoice, getDbClientById } from '@/lib/db'
import { ClientProfile, Invoice } from '@/lib/mockData'
import { isClientAuthenticated, getCurrentSession } from '@/lib/auth'
import { CreditCard, DollarSign, ArrowLeft, Check, CheckCircle2, UserCheck, Loader2, Calendar } from 'lucide-react'
import { recordEvent } from '@/lib/analytics'

function BillingInvoicesContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [clients, setClients] = useState<ClientProfile[]>([])
  const [currentClient, setCurrentClient] = useState<ClientProfile | null>(null)
  const [simulationPersona, setSimulationPersona] = useState('')

  // Checkout modal
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null)
  const [isPaying, setIsPaying] = useState(false)
  const [cardNumber, setCardNumber] = useState('')
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const clientParam = searchParams.get('client') || 'pearson'

  useEffect(() => {
    // Authenticate
    const session = getCurrentSession()
    if (!session) {
      router.push('/portal/login')
      return
    }

    if (!isClientAuthenticated(clientParam)) {
      if (session.role === 'client') {
        router.push(`/portal/billing?client=${session.clientId}`)
        return
      }
    }

    const fetchBillingData = async () => {
      const list = await getDbClients()
      setClients(list)
      const found = list.find(c => c.id === clientParam) || list[0]
      if (found) {
        setCurrentClient(found)
        setSimulationPersona(found.id)
      }
    }
    fetchBillingData()

    recordEvent('pageview', { section: 'billing', clientId: clientParam })
  }, [clientParam, router])

  const handlePersonaChange = (id: string) => {
    setSimulationPersona(id)
    router.push(`/portal/billing?client=${id}`)
  }

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentClient || !selectedInvoice) return

    setIsPaying(true)
    setTimeout(async () => {
      // Perform database payment updates
      const updatedClient = {
        ...currentClient,
        invoices: currentClient.invoices.map((inv) => {
          if (inv.id === selectedInvoice.id) {
            return { ...inv, status: 'paid' as const }
          }
          return inv
        })
      }
      setCurrentClient(updatedClient)
      await updateDbClient(updatedClient)

      setIsPaying(false)
      setPaymentSuccess(true)
      recordEvent('purchase', { product: selectedInvoice.description, price: selectedInvoice.amount, paymentMode: 'invoice' })
      
      const updatedList = await getDbClients()
      setClients(updatedList)
    }, 1500)
  }

  if (!currentClient) return null

  // Calculate sums
  const unpaidInvoices = currentClient.invoices.filter(i => i.status !== 'paid')
  const totalDue = unpaidInvoices.reduce((sum, i) => sum + i.amount, 0)

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Switch Persona */}
      <section className="pt-24 pb-4 border-b border-rule bg-sand-soft text-forest relative z-30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <UserCheck size={18} className="text-sienna" />
            <span className="text-xs uppercase tracking-[0.16em] font-bold">Simulator Billing Control</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-ink">Switch Client Persona:</span>
            <select
              value={simulationPersona}
              onChange={(e) => handlePersonaChange(e.target.value)}
              className="bg-cream border border-rule px-3 py-1.5 text-xs focus:outline-none focus:border-sienna rounded-sm text-forest font-semibold"
            >
              {clients.map(c => (
                <option key={c.id} value={c.id}>
                  {c.company}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="py-12 border-b border-rule bg-cream">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center gap-2 text-sienna mb-4">
            <Link
              href={`/portal?client=${currentClient.id}`}
              className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold hover:text-forest transition-colors"
            >
              <ArrowLeft size={14} /> Back to Portal
            </Link>
          </div>
          <h1 className="font-serif text-4xl text-forest font-normal">
            Billing & Invoices · {currentClient.company}
          </h1>
          <p className="text-xs text-slate-soft mt-1.5 uppercase tracking-wider">
            Review client ledger summaries, retrieve historical invoices, and process retainer balances.
          </p>
        </div>
      </section>

      {/* Core Billing Ledger */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Ledger Overview */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-forest text-cream p-8 rounded-sm shadow-md">
                <span className="text-[10px] uppercase text-[#D4A574] tracking-widest font-semibold block mb-2">
                  Active Package Retainer
                </span>
                <h3 className="font-serif text-2xl mb-4">{currentClient.tier} Engagement</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-serif text-3xl text-[#D4A574]">
                    {currentClient.tier === 'Operator' ? '$8,500' : currentClient.tier === 'Architect' ? '$15,000' : currentClient.tier === 'Project' ? '$25,000+' : 'Bespoke'}
                  </span>
                  {currentClient.tier !== 'Custom' && <span className="text-xs opacity-75">/ month</span>}
                </div>
                <div className="border-t border-cream/15 pt-5 space-y-3 text-xs">
                  <div className="flex justify-between">
                    <span className="opacity-70">Total Outstanding</span>
                    <span className="font-semibold text-[#D4A574]">${totalDue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-70">Payment Schedule</span>
                    <span className="font-semibold">Monthly Net 15</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Invoices List */}
            <div className="lg:col-span-8 space-y-6">
              <h3 className="font-serif text-2xl text-forest mb-4">Historical Statements</h3>

              <div className="space-y-3">
                {currentClient.invoices.map((invoice) => (
                  <div
                    key={invoice.id}
                    className="p-5 bg-sand-soft border border-rule/20 hover:border-rule/50 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 border rounded-sm shrink-0 ${
                        invoice.status === 'paid'
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                          : 'bg-amber-50 border-amber-200 text-amber-800'
                      }`}>
                        <DollarSign size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-sm font-bold text-forest">{invoice.id}</span>
                          <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-sm ${
                            invoice.status === 'paid'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {invoice.status}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-forest mt-1.5">{invoice.description}</p>
                        <div className="flex gap-4 text-[10px] text-slate-soft uppercase tracking-wider mt-1">
                          <span>Issued: {invoice.issuedDate}</span>
                          <span>·</span>
                          <span>Due: {invoice.dueDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 border-rule/25 pt-4 sm:pt-0">
                      <span className="font-serif text-xl text-forest font-semibold">${invoice.amount.toLocaleString()}</span>
                      {invoice.status !== 'paid' ? (
                        <button
                          onClick={() => setSelectedInvoice(invoice)}
                          className="px-4 py-2 bg-sienna hover:bg-forest text-cream text-[10px] uppercase tracking-wider font-bold transition-all rounded-sm flex items-center gap-1 shadow-sm"
                        >
                          <CreditCard size={12} /> Pay Invoice
                        </button>
                      ) : (
                        <span className="text-[10px] uppercase font-bold text-forest flex items-center gap-1 bg-cream px-3 py-2 border border-rule/30 rounded-sm">
                          <Check size={12} className="text-sienna" /> Receipt Sent
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Card Payment Simulator Modal */}
      <AnimatePresence>
        {selectedInvoice && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!isPaying) {
                  setSelectedInvoice(null)
                  setPaymentSuccess(false)
                }
              }}
              className="fixed inset-0 bg-forest-deep z-50 pointer-events-auto"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="fixed inset-x-6 sm:inset-x-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-cream border border-rule z-50 shadow-2xl p-6 sm:p-8 rounded-sm"
            >
              {!paymentSuccess ? (
                <form onSubmit={handleSimulatePayment} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-rule/30 pb-3 mb-2">
                    <span className="font-serif text-xl text-forest">Pay Retainer Invoice</span>
                    <button
                      type="button"
                      onClick={() => setSelectedInvoice(null)}
                      className="text-slate-soft hover:text-forest"
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="bg-sand-soft p-4 border border-rule/20 space-y-1">
                    <span className="text-[9px] uppercase tracking-wider text-slate-soft font-semibold">Ledger Entry</span>
                    <span className="block font-serif text-base text-forest font-semibold">{selectedInvoice.description}</span>
                    <div className="flex justify-between items-baseline pt-2">
                      <span className="text-xs text-slate-ink">Invoice ID: {selectedInvoice.id}</span>
                      <span className="font-serif text-lg text-sienna font-bold">${selectedInvoice.amount.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">
                        Mock Credit Card Number
                      </label>
                      <input
                        type="text"
                        required
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="4242 4242 4242 4242"
                        className="w-full px-3.5 py-2.5 bg-sand-soft border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">
                          Expiry
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="MM/YY"
                          className="w-full px-3.5 py-2.5 bg-sand-soft border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">
                          CVC
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="123"
                          className="w-full px-3.5 py-2.5 bg-sand-soft border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isPaying}
                    className="w-full py-4 bg-forest hover:bg-sienna text-cream font-bold text-xs uppercase tracking-wider transition-colors duration-300 rounded-sm flex items-center justify-center gap-2"
                  >
                    {isPaying ? (
                      <>
                        <Loader2 className="animate-spin" size={14} /> Processing Stripe Payment...
                      </>
                    ) : (
                      <>
                        Submit Retainer Payment <Check size={14} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-sienna text-cream rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={30} />
                  </div>
                  <h3 className="font-serif text-2xl text-forest mb-2">Retainer Received</h3>
                  <p className="text-xs text-slate-ink leading-relaxed mb-6">
                    Simulated transaction completed successfully. The ledger has updated client status to paid. Invoice receipt has been sent to client mailbox.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedInvoice(null)
                      setPaymentSuccess(false)
                    }}
                    className="px-6 py-3.5 bg-forest hover:bg-sienna text-cream text-[10px] uppercase tracking-wider font-bold transition-all rounded-sm"
                  >
                    Return to Invoices
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  )
}

export default function BillingInvoices() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-cream flex items-center justify-center text-forest text-sm uppercase tracking-widest font-semibold">
        Loading Billing Ledger...
      </div>
    }>
      <BillingInvoicesContent />
    </Suspense>
  )
}
