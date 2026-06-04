'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { getDbClientById, updateDbClient, getDbClients, TaskItem, BlockerItem, Invoice } from '@/lib/db'
import { isAdminAuthenticated } from '@/lib/auth'
import { KanbanBoard } from '@/components/sections/reposition/kanban'
import { ProjectCalendar } from '@/components/sections/reposition/calendar'
import { MessagingPanel } from '@/components/sections/reposition/chat'
import { ArrowLeft, Plus, Check, Trash, ShieldAlert, Sparkles, Inbox, PlusCircle, AlertCircle, FileText, Send, Calendar as CalendarIcon, Layers, MessageSquare, Award, Loader2 } from 'lucide-react'
import { recordEvent } from '@/lib/analytics'

export default function AdminClientDetails({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [client, setClient] = useState<ClientProfile | null>(null)
  const [activeTab, setActiveTab] = useState<'roadmap' | 'kanban' | 'calendar' | 'chat'>('roadmap')

  // New task/blocker form fields
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDueDate, setTaskDueDate] = useState('')
  const [blockerTitle, setBlockerTitle] = useState('')
  const [blockerSeverity, setBlockerSeverity] = useState<'low' | 'medium' | 'high'>('low')

  // New invoice form
  const [invoiceDesc, setInvoiceDesc] = useState('')
  const [invoiceAmount, setInvoiceAmount] = useState('')

  // Staged Weekly Update email state
  const [isStagedModalOpen, setIsStagedModalOpen] = useState(false)
  const [stagedEmailContent, setStagedEmailContent] = useState('')
  const [isSendingEmail, setIsSendingEmail] = useState(false)
  const [emailSentSuccess, setEmailSentSuccess] = useState(false)

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      router.push('/admin/login')
      return
    }
    setIsAdmin(true)

    const fetchClient = async () => {
      const found = await getDbClientById(params.id)
      if (found) {
        setClient(found)
        stageWeeklyEmailDraft(found)
      }
    }
    fetchClient()

    recordEvent('pageview', { section: 'admin_client_details', clientId: params.id })
  }, [params.id, router])

  const stageWeeklyEmailDraft = (c: ClientProfile) => {
    const completed = c.whatsNext.filter(t => t.status === 'done').map(t => `✓ ${t.title}`)
    const inProgress = c.whatsNext.filter(t => t.status === 'in-progress').map(t => `↳ ${t.title}`)
    const blockers = c.whatsBlocking.filter(b => !b.resolved).map(b => `⚠️ [${b.severity.toUpperCase()}] ${b.title}`)
    
    const draft = `Subject: Weekly Status Update: ${c.company} - Beneficial Technology

Hi ${c.name},

Here is our weekly review and roadmap progress status for ${c.company}:

Milestones Completed:
${completed.length > 0 ? completed.join('\n') : 'No milestones marked completed this week.'}

Work In Progress:
${inProgress.length > 0 ? inProgress.join('\n') : 'None currently in progress.'}

Outstanding Blockers:
${blockers.length > 0 ? blockers.join('\n') : '✓ No active blockers.'}

Next Week Objectives:
- Finalize ongoing structural milestones.
- Schedule counsel sync review.

Let me know if anything here requires calibration.

Best,
Tyler Malin
Principal, Beneficial Technology`

    setStagedEmailContent(draft)
  }

  const handleUpdateTaskStatus = async (taskId: string, newStatus: TaskItem['status']) => {
    if (!client) return
    const nextWhats = client.whatsNext.map(t => t.id === taskId ? { ...t, status: newStatus } : t)
    const nextClient = { ...client, whatsNext: nextWhats }
    setClient(nextClient)
    await updateDbClient(nextClient)
    stageWeeklyEmailDraft(nextClient)
  }

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!client || !taskTitle) return

    const newTask: TaskItem = {
      id: Math.random().toString(36).substring(2, 9),
      title: taskTitle,
      status: 'todo',
      dueDate: taskDueDate || undefined
    }

    const nextClient = { ...client, whatsNext: [...client.whatsNext, newTask] }
    setClient(nextClient)
    await updateDbClient(nextClient)
    setTaskTitle('')
    setTaskDueDate('')
    stageWeeklyEmailDraft(nextClient)
  }

  const handleDeleteTask = async (taskId: string) => {
    if (!client) return
    const nextWhats = client.whatsNext.filter(t => t.id !== taskId)
    const nextClient = { ...client, whatsNext: nextWhats }
    setClient(nextClient)
    await updateDbClient(nextClient)
    stageWeeklyEmailDraft(nextClient)
  }

  const handleAddBlocker = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!client || !blockerTitle) return

    const newBlocker: BlockerItem = {
      id: Math.random().toString(36).substring(2, 9),
      title: blockerTitle,
      severity: blockerSeverity,
      resolved: false
    }

    const nextClient = { ...client, whatsBlocking: [...client.whatsBlocking, newBlocker] }
    setClient(nextClient)
    await updateDbClient(nextClient)
    setBlockerTitle('')
    stageWeeklyEmailDraft(nextClient)
  }

  const handleToggleBlocker = async (blockerId: string) => {
    if (!client) return
    const nextBlocks = client.whatsBlocking.map(b => b.id === blockerId ? { ...b, resolved: !b.resolved } : b)
    const nextClient = { ...client, whatsBlocking: nextBlocks }
    setClient(nextClient)
    await updateDbClient(nextClient)
    stageWeeklyEmailDraft(nextClient)
  }

  const handleDeleteBlocker = async (blockerId: string) => {
    if (!client) return
    const nextBlocks = client.whatsBlocking.filter(b => b.id !== blockerId)
    const nextClient = { ...client, whatsBlocking: nextBlocks }
    setClient(nextClient)
    await updateDbClient(nextClient)
    stageWeeklyEmailDraft(nextClient)
  }

  const handleAddInvoice = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!client || !invoiceDesc || !invoiceAmount) return

    const newInvoice: Invoice = {
      id: `INV-2026-${Math.floor(100 + Math.random() * 900)}`,
      amount: parseFloat(invoiceAmount),
      dueDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      issuedDate: new Date().toISOString().split('T')[0],
      status: 'pending',
      description: invoiceDesc
    }

    const nextClient = { ...client, invoices: [...client.invoices, newInvoice] }
    setClient(nextClient)
    await updateDbClient(nextClient)
    setInvoiceDesc('')
    setInvoiceAmount('')
  }

  const handleSendWeeklyEmail = async () => {
    if (!client) return
    setIsSendingEmail(true)
    setEmailSentSuccess(false)

    // Simulate sending email through Resend
    setTimeout(async () => {
      // Append update to client history
      const weekRange = `Week of ${new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}`
      const nextClient = {
        ...client,
        weeklyUpdates: [
          {
            week: weekRange,
            content: stagedEmailContent.split('\n\n').slice(2).join('\n\n'), // strip subject & greetings
            health: client.whatsBlocking.filter(b => !b.resolved).length > 0 ? 'warning' as const : 'good' as const
          },
          ...(client.weeklyUpdates || [])
        ]
      }
      setClient(nextClient)
      await updateDbClient(nextClient)

      setIsSendingEmail(false)
      setEmailSentSuccess(true)
      recordEvent('click', { action: 'admin_dispatched_weekly_review', client: client.company })
    }, 1500)
  }

  if (!client) return null

  const isSowFullySigned = (client as any).sowSignedByClient && (client as any).sowSignedByAdmin

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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-serif text-4xl text-forest font-normal">
                Manage: {client.company}
              </h1>
              <p className="text-xs text-slate-soft mt-1.5 uppercase tracking-wider font-bold">
                Client: {client.name} · {client.email} · Tier: {client.tier}
              </p>
            </div>
            <Link
              href={`/portal?client=${client.id}`}
              className="px-4 py-2 bg-[#D4A574] text-forest hover:bg-forest hover:text-cream text-[10px] uppercase tracking-wider font-bold transition-all rounded-sm text-center"
            >
              Enter Client Portal view ↗
            </Link>
          </div>
        </div>
      </section>

      {/* Action Staging banner for weekly emails */}
      <section className="bg-emerald-50 border-b border-emerald-200 py-4 text-emerald-800 text-xs font-semibold">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Inbox size={16} className="text-sienna" />
            Next Action: Stage and dispatch weekly roadmap updates email to client inbox.
          </span>
          <button
            onClick={() => {
              setIsStagedModalOpen(true)
              setEmailSentSuccess(false)
            }}
            className="px-4 py-2 bg-sienna text-cream text-[10px] uppercase tracking-wider font-bold hover:bg-forest transition-colors rounded-sm shadow-sm"
          >
            Send Weekly Updates email
          </button>
        </div>
      </section>

      {/* Tab Menu */}
      <section className="border-b border-rule bg-sand-soft/50 py-4">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex gap-6">
          {[
            { value: 'roadmap', label: 'Milestone Roadmaps', icon: Inbox },
            { value: 'kanban', label: 'Kanban Operations', icon: Layers },
            { value: 'calendar', label: 'Engagement Schedule', icon: CalendarIcon },
            { value: 'chat', label: 'Direct Messages', icon: MessageSquare }
          ].map(tab => {
            const TabIcon = tab.icon
            return (
              <button
                key={tab.value}
                onClick={() => {
                  if (!isSowFullySigned && tab.value !== 'roadmap') {
                    alert('Please countersign client proposal to activate boards.')
                    return
                  }
                  setActiveTab(tab.value as any)
                }}
                className={`font-serif text-base pb-1 relative transition-colors flex items-center gap-1.5 ${
                  !isSowFullySigned && tab.value !== 'roadmap' ? 'opacity-50 cursor-not-allowed' : ''
                } ${
                  activeTab === tab.value ? 'text-forest font-bold' : 'text-slate-soft hover:text-forest'
                }`}
              >
                <TabIcon size={14} className="text-sienna" />
                {tab.label}
                {activeTab === tab.value && (
                  <motion.div layoutId="adminTabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-sienna" />
                )}
              </button>
            )
          })}
        </div>
      </section>

      {/* Active Tab Panel */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatePresence mode="wait">
            {activeTab === 'roadmap' && (
              <motion.div
                key="roadmap-tab"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="grid lg:grid-cols-12 gap-10"
              >
                {/* Milestone details editing */}
                <div className="lg:col-span-8 space-y-8">
                  {/* Task Manager list */}
                  <div className="bg-cream border border-rule/30 p-8 rounded-sm">
                    <h3 className="font-serif text-2xl text-forest mb-6">Manage Client Roadmap</h3>

                    {/* Add task form */}
                    <form onSubmit={handleAddTask} className="grid sm:grid-cols-12 gap-4 items-end mb-6 border-b border-rule/20 pb-6">
                      <div className="sm:col-span-6">
                        <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">New roadmap task title</label>
                        <input
                          type="text"
                          required
                          value={taskTitle}
                          onChange={(e) => setTaskTitle(e.target.value)}
                          placeholder="Draft token emissions schedule"
                          className="w-full px-3 py-2 bg-sand-soft border border-rule/55 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest font-medium"
                        />
                      </div>
                      <div className="sm:col-span-4">
                        <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">Target deadline</label>
                        <input
                          type="date"
                          value={taskDueDate}
                          onChange={(e) => setTaskDueDate(e.target.value)}
                          className="w-full px-3 py-2 bg-sand-soft border border-rule/55 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest font-medium"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          className="w-full py-2 bg-forest hover:bg-sienna text-cream text-[10px] uppercase tracking-wider font-bold transition-all rounded-sm flex items-center justify-center gap-1"
                        >
                          <Plus size={12} /> Add
                        </button>
                      </div>
                    </form>

                    {/* Tasks List */}
                    <div className="space-y-3">
                      {client.whatsNext.map((task) => (
                        <div
                          key={task.id}
                          className="p-4 bg-sand-soft border border-rule/20 flex items-center justify-between rounded-sm"
                        >
                          <div>
                            <span className={`text-sm ${task.status === 'done' ? 'line-through text-slate-soft' : 'text-forest font-semibold'}`}>
                              {task.title}
                            </span>
                            {task.dueDate && <span className="block text-[9px] text-slate-soft mt-1">Deadline: {task.dueDate}</span>}
                          </div>

                          <div className="flex items-center gap-3">
                            <select
                              value={task.status}
                              onChange={(e) => handleUpdateTaskStatus(task.id, e.target.value as any)}
                              className="bg-cream border border-rule/40 text-xs px-2 py-1 text-forest focus:outline-none focus:border-sienna rounded-sm font-semibold"
                            >
                              <option value="todo">Todo</option>
                              <option value="in-progress">In Progress</option>
                              <option value="done">Done</option>
                            </select>
                            <button
                              onClick={() => handleDeleteTask(task.id)}
                              className="p-1.5 text-slate-soft hover:text-rose-800 transition-colors"
                            >
                              <Trash size={14} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Blocker details editing */}
                  <div className="bg-cream border border-rule/30 p-8 rounded-sm">
                    <h3 className="font-serif text-2xl text-forest mb-6 flex items-center gap-2">
                      <ShieldAlert className="text-sienna" size={22} />
                      Blockers Constraint Board
                    </h3>

                    {/* Add blocker form */}
                    <form onSubmit={handleAddBlocker} className="grid sm:grid-cols-12 gap-4 items-end mb-6 border-b border-rule/20 pb-6">
                      <div className="sm:col-span-6">
                        <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">Issue / Block description</label>
                        <input
                          type="text"
                          required
                          value={blockerTitle}
                          onChange={(e) => setBlockerTitle(e.target.value)}
                          placeholder="Pending Delaware tax clearance"
                          className="w-full px-3 py-2 bg-sand-soft border border-rule/55 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest font-medium"
                        />
                      </div>
                      <div className="sm:col-span-4">
                        <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">Severity</label>
                        <select
                          value={blockerSeverity}
                          onChange={(e) => setBlockerSeverity(e.target.value as any)}
                          className="w-full px-3 py-2 bg-sand-soft border border-rule/55 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest font-medium"
                        >
                          <option value="low">Low severity</option>
                          <option value="medium">Medium severity</option>
                          <option value="high">High severity</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          className="w-full py-2 bg-sienna hover:bg-forest text-cream text-[10px] uppercase tracking-wider font-bold transition-all rounded-sm flex items-center justify-center gap-1"
                        >
                          <Plus size={12} /> Add
                        </button>
                      </div>
                    </form>

                    {/* Blockers list */}
                    <div className="space-y-3">
                      {client.whatsBlocking.length === 0 ? (
                        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-sm">
                          ✓ No active blockers logged. Operations clear.
                        </div>
                      ) : (
                        client.whatsBlocking.map((blocker) => (
                          <div
                            key={blocker.id}
                            className={`p-4 border flex items-center justify-between rounded-sm ${
                              blocker.resolved ? 'border-rule/20 bg-sand-soft/30 opacity-70' : 'border-rose-200 bg-rose-50/20'
                            }`}
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className={`text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm ${
                                  blocker.severity === 'high' ? 'bg-rose-100 text-rose-800 font-bold' : 'bg-slate-100 text-slate-700'
                                }`}>
                                  {blocker.severity}
                                </span>
                                {blocker.resolved && <span className="text-[10px] text-emerald-800 font-semibold">RESOLVED</span>}
                              </div>
                              <p className={`text-xs ${blocker.resolved ? 'line-through text-slate-soft' : 'text-forest font-semibold'}`}>
                                {blocker.title}
                              </p>
                            </div>

                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleToggleBlocker(blocker.id)}
                                className={`px-3 py-1 text-[9px] uppercase tracking-wider font-bold border rounded-sm transition-all ${
                                  blocker.resolved
                                    ? 'bg-cream border-rule hover:bg-sand-soft text-slate-soft'
                                    : 'bg-sienna border-sienna text-cream hover:bg-forest hover:border-forest'
                                }`}
                              >
                                {blocker.resolved ? 'Reopen' : 'Mark Resolved'}
                              </button>
                              <button
                                onClick={() => handleDeleteBlocker(blocker.id)}
                                className="p-1.5 text-slate-soft hover:text-rose-800 transition-colors"
                              >
                                <Trash size={14} />
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: SOW Details, Invoicing */}
                <div className="lg:col-span-4 space-y-8">
                  {/* SOW details display */}
                  <div className="bg-cream border border-rule/30 p-6 rounded-sm space-y-3 text-xs text-slate-ink">
                    <h4 className="font-serif text-base text-forest flex items-center gap-1.5 mb-2">
                      <Award className="text-sienna" size={16} /> SOW Scope Details
                    </h4>
                    <p><strong>Scoping:</strong> {((client as any).sowDetails?.scoping) || 'Initial scoping setup.'}</p>
                    {client.tier === 'Custom' && (client as any).customDecisions && (
                      <div className="border-t border-rule/20 pt-2.5 mt-2.5 space-y-1.5 text-xs">
                        <p className="font-bold text-forest uppercase text-[9px] tracking-wider">Custom Brief Decisions</p>
                        <p><strong>Practice Areas:</strong> {((client as any).customDecisions.services || []).join(', ') || 'None selected'}</p>
                        <p><strong>Target Budget:</strong> {(client as any).customDecisions.budget}</p>
                        <p><strong>Timeline:</strong> {(client as any).customDecisions.timeline}</p>
                      </div>
                    )}
                    <p><strong>Deliverables:</strong> {((client as any).sowDetails?.deliverables) || 'Milestones configurations.'}</p>
                    <p><strong>Exclusions:</strong> {((client as any).sowDetails?.exclusions) || 'Civil courts representations.'}</p>
                    <p><strong>Target Timeline:</strong> {((client as any).sowDetails?.completionDate) || 'Pending schedule.'}</p>
                  </div>

                  {/* Add invoice panel */}
                  <div className="bg-cream border border-rule/30 p-6 rounded-sm space-y-4">
                    <div className="flex items-center gap-2 mb-2 border-b border-rule/20 pb-3">
                      <FileText className="text-sienna" size={18} />
                      <span className="font-serif text-lg text-forest">Generate Invoices</span>
                    </div>
                    <form onSubmit={handleAddInvoice} className="space-y-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">
                          Billing description
                        </label>
                        <input
                          type="text"
                          required
                          value={invoiceDesc}
                          onChange={(e) => setInvoiceDesc(e.target.value)}
                          placeholder="Retainer balance - June 2026"
                          className="w-full px-3 py-2 bg-sand-soft border border-rule/55 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">
                          Amount Due (USD)
                        </label>
                        <input
                          type="number"
                          required
                          value={invoiceAmount}
                          onChange={(e) => setInvoiceAmount(e.target.value)}
                          placeholder="15000"
                          className="w-full px-3 py-2 bg-sand-soft border border-rule/55 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-2.5 bg-forest hover:bg-sienna text-cream text-[10px] uppercase tracking-wider font-bold transition-all rounded-sm flex items-center justify-center gap-1 shadow-sm"
                      >
                        <PlusCircle size={13} /> Issue Ledger Invoice
                      </button>
                    </form>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'kanban' && isSowFullySigned && (
              <motion.div
                key="kanban-tab"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
              >
                <KanbanBoard client={client} onUpdate={setClient} />
              </motion.div>
            )}

            {activeTab === 'calendar' && isSowFullySigned && (
              <motion.div
                key="calendar-tab"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
              >
                <ProjectCalendar client={client} />
              </motion.div>
            )}

            {activeTab === 'chat' && isSowFullySigned && (
              <motion.div
                key="chat-tab"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="max-w-2xl mx-auto"
              >
                <MessagingPanel clientId={client.id} role="admin" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Staged Weekly Email Review Modal */}
      <AnimatePresence>
        {isStagedModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!isSendingEmail) setIsStagedModalOpen(false)
              }}
              className="fixed inset-0 bg-forest-deep z-50 pointer-events-auto"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="fixed inset-x-6 sm:inset-x-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-cream border border-rule z-50 shadow-2xl p-6 sm:p-8 rounded-sm"
            >
              {!emailSentSuccess ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-rule/30 pb-3 mb-2">
                    <span className="font-serif text-xl text-forest flex items-center gap-1.5">
                      <Sparkles size={18} className="text-sienna" /> Review Staged Email
                    </span>
                    <button
                      onClick={() => setIsStagedModalOpen(false)}
                      className="text-slate-soft hover:text-forest text-xs"
                    >
                      Close
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="block text-[9px] uppercase tracking-wider text-slate-soft font-bold">Recipient client</span>
                      <span className="text-xs font-semibold text-forest">{client.name} &lt;{client.email}&gt;</span>
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider text-slate-soft font-bold mb-1">Weekly Update Text</label>
                      <textarea
                        value={stagedEmailContent}
                        onChange={(e) => setStagedEmailContent(e.target.value)}
                        className="w-full h-72 p-3.5 bg-sand-soft border border-rule text-slate-ink font-mono text-[10px] leading-relaxed focus:outline-none rounded-sm"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSendWeeklyEmail}
                    disabled={isSendingEmail}
                    className="w-full py-4 bg-forest hover:bg-sienna text-cream font-bold text-xs uppercase tracking-wider transition-colors duration-300 rounded-sm flex items-center justify-center gap-2"
                  >
                    {isSendingEmail ? (
                      <>
                        <Loader2 className="animate-spin" size={14} /> Dispatching Resend Email API...
                      </>
                    ) : (
                      <>
                        Dispatch Live Client Email <Send size={13} />
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-14 h-14 bg-sienna text-cream rounded-full flex items-center justify-center mx-auto mb-5">
                    <Check size={28} />
                  </div>
                  <h3 className="font-serif text-2xl text-forest mb-2">Weekly Update Dispatched</h3>
                  <p className="text-xs text-slate-ink leading-relaxed mb-6">
                    Resend email successfully sent to client mailbox <strong>{client.email}</strong>. 
                    Ledger update log has been saved.
                  </p>
                  <button
                    onClick={() => setIsStagedModalOpen(false)}
                    className="px-6 py-3 bg-forest hover:bg-sienna text-cream text-[10px] uppercase tracking-wider font-bold transition-all rounded-sm"
                  >
                    Return to CRM Details
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
