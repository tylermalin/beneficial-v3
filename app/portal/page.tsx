'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { getDbClients, updateDbClient, getDbClientById } from '@/lib/db'
import { ClientProfile, TaskItem } from '@/lib/mockData'
import { isClientAuthenticated, getCurrentSession } from '@/lib/auth'
import { KanbanBoard } from '@/components/sections/reposition/kanban'
import { ProjectCalendar } from '@/components/sections/reposition/calendar'
import { MessagingPanel } from '@/components/sections/reposition/chat'
import { Calendar, ShieldAlert, CheckCircle2, ChevronRight, FileText, UserCheck, Inbox, DollarSign, ListTodo, MessageSquare, Award } from 'lucide-react'
import { recordEvent } from '@/lib/analytics'

function ClientPortalContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Access validations
  const [session, setSession] = useState<any>(null)
  const [clients, setClients] = useState<ClientProfile[]>([])
  const [currentClient, setCurrentClient] = useState<ClientProfile | null>(null)
  const [simulationPersona, setSimulationPersona] = useState('')
  const [activePortalTab, setActivePortalTab] = useState<'roadmap' | 'kanban' | 'calendar' | 'chat'>('roadmap')

  const clientParam = searchParams.get('client') || 'pearson'

  useEffect(() => {
    // Check credentials
    const activeSession = getCurrentSession()
    if (!activeSession) {
      router.push('/portal/login')
      return
    }
    setSession(activeSession)

    // Verify client access permission
    if (!isClientAuthenticated(clientParam)) {
      // If client auth fails, route them to their authorized portal or login
      if (activeSession.role === 'client') {
        router.push(`/portal?client=${activeSession.clientId}`)
        return
      }
    }

    const loadPortalData = async () => {
      const list = await getDbClients()
      setClients(list)
      const found = list.find(c => c.id === clientParam) || list[0]
      if (found) {
        setCurrentClient(found)
        setSimulationPersona(found.id)
      }
    }
    loadPortalData()

    recordEvent('pageview', { section: 'portal_dashboard', clientId: clientParam })
  }, [clientParam, router])

  // Sync details from DB updates
  useEffect(() => {
    const syncDb = async () => {
      const list = await getDbClients()
      setClients(list)
      const found = list.find(c => c.id === simulationPersona)
      if (found) setCurrentClient(found)
    }

    window.addEventListener('beneficial_db_updated', syncDb)
    return () => window.removeEventListener('beneficial_db_updated', syncDb)
  }, [simulationPersona])

  const handlePersonaChange = (id: string) => {
    setSimulationPersona(id)
    router.push(`/portal?client=${id}`)
  }

  const toggleTaskStatus = async (taskId: string) => {
    if (!currentClient) return

    const updatedTasks = currentClient.whatsNext.map((task) => {
      if (task.id === taskId) {
        const nextStatus: TaskItem['status'] =
          task.status === 'todo' ? 'in-progress' : task.status === 'in-progress' ? 'done' : 'todo'
        return { ...task, status: nextStatus }
      }
      return task
    })

    const updatedClient = { ...currentClient, whatsNext: updatedTasks }
    setCurrentClient(updatedClient)
    await updateDbClient(updatedClient)
    recordEvent('click', { action: 'toggle_task', taskId })
  }

  if (!currentClient) return null

  // Calculate project completion percentage
  const completedTasks = currentClient.whatsNext.filter(t => t.status === 'done').length
  const totalTasks = currentClient.whatsNext.length
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

  const clientSigned = (currentClient as any).sowSignedByClient || false
  const adminSigned = (currentClient as any).sowSignedByAdmin || false
  const isSowFullySigned = clientSigned && adminSigned

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Simulator Switch Client Bar */}
      <section className="pt-24 pb-4 border-b border-rule bg-sand-soft text-forest relative z-30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <UserCheck size={18} className="text-sienna" />
            <span className="text-xs uppercase tracking-[0.16em] font-bold">Simulator Client View Dashboard</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs text-slate-ink">Switch Portal View:</span>
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
            {session?.role === 'admin' && (
              <Link
                href="/admin"
                className="text-[10px] uppercase font-bold bg-sienna text-cream px-3.5 py-1.5 hover:bg-forest transition-colors rounded-sm"
              >
                Go to Admin View ↗
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Warning SOW Banner */}
      {!isSowFullySigned && (
        <section className="bg-amber-50 border-b border-amber-200 py-3.5 relative z-25 text-amber-800 text-xs font-semibold">
          <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <ShieldAlert size={16} /> 
              Project Proposal & Statement of Work (SOW) is pending signature execution.
            </span>
            <Link
              href={`/portal/proposal?client=${currentClient.id}`}
              className="underline text-sienna hover:text-forest"
            >
              Review & Sign SOW Proposal ↗
            </Link>
          </div>
        </section>
      )}

      {/* Header */}
      <section className="py-12 border-b border-rule bg-cream">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-sienna mb-3">
                <span className="text-xs uppercase tracking-widest font-semibold px-2 py-0.5 border border-rule bg-sand-soft rounded-sm">
                  {currentClient.tier} Engagement
                </span>
                {!isSowFullySigned ? (
                  <span className="text-[10px] uppercase tracking-wider font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-sm">
                    SOW Proposal
                  </span>
                ) : (
                  <span className="text-[10px] uppercase tracking-wider font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-sm">
                    Active
                  </span>
                )}
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl text-forest tracking-tight">
                {currentClient.company}
              </h1>
              <p className="text-xs text-slate-soft mt-1.5 uppercase tracking-wider">
                Authorized Client Portal · Representative: {currentClient.name}
              </p>
            </div>

            <div className="flex gap-4">
              <Link
                href={`/portal/vault?client=${currentClient.id}`}
                className="px-4 py-3 bg-sand-soft border border-rule hover:border-sienna hover:bg-cream text-forest text-xs uppercase tracking-wider font-semibold transition-all rounded-sm flex items-center gap-1.5"
              >
                <FileText size={14} /> Document Vault
              </Link>
              <Link
                href={`/portal/billing?client=${currentClient.id}`}
                className="px-4 py-3 bg-sand-soft border border-rule hover:border-sienna hover:bg-cream text-forest text-xs uppercase tracking-wider font-semibold transition-all rounded-sm flex items-center gap-1.5"
              >
                <DollarSign size={14} /> Billing & Invoices
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Menu */}
      <section className="border-b border-rule bg-sand-soft/50 py-4">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex gap-6">
          {[
            { value: 'roadmap', label: 'Milestone Roadmap', icon: ListTodo },
            { value: 'kanban', label: 'Project Kanban Board', icon: Layers },
            { value: 'calendar', label: 'Schedule Timeline', icon: Calendar },
            { value: 'chat', label: 'Sync Messages', icon: MessageSquare }
          ].map(tab => {
            const TabIcon = tab.icon
            return (
              <button
                key={tab.value}
                onClick={() => {
                  if (!isSowFullySigned && tab.value !== 'roadmap') {
                    alert('Please sign SOW contract to unlock active boards.')
                    return
                  }
                  setActivePortalTab(tab.value as any)
                }}
                className={`font-serif text-base pb-1 relative transition-colors flex items-center gap-1.5 ${
                  !isSowFullySigned && tab.value !== 'roadmap' ? 'opacity-50 cursor-not-allowed' : ''
                } ${
                  activePortalTab === tab.value ? 'text-forest font-bold' : 'text-slate-soft hover:text-forest'
                }`}
              >
                <TabIcon size={14} className="text-sienna" />
                {tab.label}
                {activePortalTab === tab.value && (
                  <motion.div layoutId="portalTabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-sienna" />
                )}
              </button>
            )
          })}
        </div>
      </section>

      {/* Main tab content */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatePresence mode="wait">
            {activePortalTab === 'roadmap' && (
              <motion.div
                key="roadmap-tab"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="grid lg:grid-cols-12 gap-10"
              >
                {/* Tasks & Milestones */}
                <div className="lg:col-span-8 space-y-8">
                  {/* Progress bar */}
                  <div className="bg-sand-soft border border-rule/30 p-6 rounded-sm">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-serif text-xl text-forest">Milestone Completion</h3>
                      <span className="text-sm font-bold text-sienna">{completionPercentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-cream rounded-full overflow-hidden border border-rule/20">
                      <div
                        className="h-full bg-forest transition-all duration-500"
                        style={{ width: `${completionPercentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="bg-cream border border-rule/30 p-8 rounded-sm">
                    <h3 className="font-serif text-2xl text-forest mb-6">Task Checklist</h3>
                    <div className="space-y-3">
                      {currentClient.whatsNext.map((task) => (
                        <div
                          key={task.id}
                          onClick={() => toggleTaskStatus(task.id)}
                          className={`p-4 border flex items-center justify-between cursor-pointer transition-all duration-300 rounded-sm ${
                            task.status === 'done'
                              ? 'border-rule/20 bg-sand-soft/30 opacity-70'
                              : task.status === 'in-progress'
                              ? 'border-sienna bg-sand-soft/60'
                              : 'border-rule/50 bg-cream hover:border-rule'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                              task.status === 'done'
                                ? 'bg-forest'
                                : task.status === 'in-progress'
                                ? 'bg-sienna'
                                : 'bg-slate-soft/40'
                            }`} />
                            <span className={`text-sm ${task.status === 'done' ? 'line-through text-slate-soft' : 'text-forest font-semibold'}`}>
                              {task.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-[10px] uppercase font-bold text-slate-soft">
                            {task.dueDate && <span>Due: {task.dueDate}</span>}
                            <span className="border border-rule/30 px-2 py-0.5 rounded-sm">{task.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Weekly updates */}
                  <div className="bg-cream border border-rule/30 p-8 rounded-sm">
                    <h3 className="font-serif text-2xl text-forest mb-6">Weekly Updates</h3>
                    <div className="space-y-6">
                      {currentClient.weeklyUpdates?.map((update, i) => (
                        <div key={i} className="border-l-2 border-sienna pl-5 py-1">
                          <div className="flex justify-between items-baseline mb-2">
                            <span className="font-serif text-base text-forest font-semibold">{update.week}</span>
                          </div>
                          <p className="text-sm text-slate-ink leading-relaxed">{update.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Blockers, Proposals & SOW Details */}
                <div className="lg:col-span-4 space-y-8">
                  {/* Scope proposal panel */}
                  <div className="bg-cream border border-rule/30 p-6 rounded-sm space-y-4">
                    <h4 className="font-serif text-lg text-forest flex items-center gap-2">
                      <Award className="text-sienna" size={18} />
                      SOW Details
                    </h4>
                    <p className="text-xs text-slate-ink leading-relaxed">
                      This project operates under the agreed SOW scoping. You can retrieve details at the SOW contract page.
                    </p>
                    <Link
                      href={`/portal/proposal?client=${currentClient.id}`}
                      className="w-full text-center py-2.5 bg-forest hover:bg-sienna text-cream text-[10px] uppercase tracking-wider font-bold transition-all rounded-sm block"
                    >
                      View SOW Proposal
                    </Link>
                  </div>

                  {/* Blockers */}
                  <div className="bg-cream border border-rule/30 p-6 rounded-sm">
                    <h4 className="font-serif text-lg text-forest mb-4 flex items-center gap-2">
                      <ShieldAlert className="text-sienna" size={18} />
                      What&apos;s Blocking
                    </h4>
                    <div className="space-y-3">
                      {currentClient.whatsBlocking.length === 0 ? (
                        <div className="flex items-center gap-2 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-sm">
                          <CheckCircle2 size={16} />
                          <span className="text-xs font-semibold">No active blockers.</span>
                        </div>
                      ) : (
                        currentClient.whatsBlocking.map((blocker) => (
                          <div key={blocker.id} className="p-4 border border-rule/30 bg-sand-soft rounded-sm">
                            <span className="text-[8px] bg-rose-100 text-rose-800 px-1.5 py-0.5 rounded-sm font-bold uppercase block mb-1 self-start">
                              {blocker.severity} Block
                            </span>
                            <p className="text-xs font-semibold text-forest leading-relaxed">
                              {blocker.title}
                            </p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activePortalTab === 'kanban' && isSowFullySigned && (
              <motion.div
                key="kanban-tab"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
              >
                <KanbanBoard client={currentClient} onUpdate={setCurrentClient} />
              </motion.div>
            )}

            {activePortalTab === 'calendar' && isSowFullySigned && (
              <motion.div
                key="calendar-tab"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
              >
                <ProjectCalendar client={currentClient} />
              </motion.div>
            )}

            {activePortalTab === 'chat' && isSowFullySigned && (
              <motion.div
                key="chat-tab"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="max-w-2xl mx-auto"
              >
                <MessagingPanel clientId={currentClient.id} role="client" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function ClientPortal() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-cream flex items-center justify-center text-forest text-sm uppercase tracking-widest font-semibold">
        Loading Client Portal...
      </div>
    }>
      <ClientPortalContent />
    </Suspense>
  )
}
