'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { getDbClients } from '@/lib/db'
import { ClientProfile } from '@/lib/mockData'
import { isAdminAuthenticated } from '@/lib/auth'
import { Brain, Sparkles, Send, ArrowLeft, Loader2, Megaphone, Search, FileSpreadsheet, Check } from 'lucide-react'
import { recordEvent } from '@/lib/analytics'

export default function AgentsSandbox() {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [clients, setClients] = useState<ClientProfile[]>([])
  const [activeTab, setActiveTab] = useState<'social' | 'seo' | 'status'>('social')

  // Social Agent States
  const [socialPlaybook, setSocialPlaybook] = useState('everyday-legal-ai-playbook')
  const [socialChannel, setSocialChannel] = useState<'twitter' | 'linkedin'>('linkedin')
  const [socialTopic, setSocialTopic] = useState('')
  const [isSocialRunning, setIsSocialRunning] = useState(false)
  const [socialResult, setSocialResult] = useState('')

  // SEO Agent States
  const [seoDraft, setSeoDraft] = useState('')
  const [isSeoRunning, setIsSeoRunning] = useState(false)
  const [seoResult, setSeoResult] = useState<any>(null)

  // Status Agent States
  const [statusClientId, setStatusClientId] = useState('')
  const [isStatusRunning, setIsStatusRunning] = useState(false)
  const [statusResult, setStatusResult] = useState('')

  useEffect(() => {
    // Authenticate
    if (!isAdminAuthenticated()) {
      router.push('/admin/login')
      return
    }
    setIsAdmin(true)

    const fetchAgentsData = async () => {
      const list = await getDbClients()
      setClients(list)
      if (list.length > 0) setStatusClientId(list[0].id)
    }
    fetchAgentsData()

    recordEvent('pageview', { section: 'admin_agents_sandbox' })
  }, [router])

  const handleGenerateSocial = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSocialRunning(true)
    setSocialResult('')

    setTimeout(() => {
      let draft = ''
      if (socialChannel === 'twitter') {
        draft = `🧵 1/5 Scaling at the regulated frontier is brutal. Legal bills pile up, and lawyers don't build software structures. That's why we created Legal Engineering. Here is how founders are ship-proofing their tools with AI. 👇

2/5 Most AI startups think they need a massive law firm to map HIPAA or compliance paths. Real talk: your counsel sets parameters, but your devs write the code. You need a structural bridge. 

3/5 Introducing our "Everyday Legal AI Playbook." We mapped the exact prompt blueprints to read, translate, and audit NDAs, leases, and developer contracts without paying $1,000/hr retainers. 

4/5 Use AI to verify, search, and parse context. But ALWAYS use certified attorneys to sign execution agreements. Optimize the middle layer. 

5/5 Download the full 42-page field guide completely free at: beneficial.technology/resources`
      } else {
        draft = `💼 How to Scale an AI Startup Without Getting Crushed by Legal Bills

Every founder reaches a point where legal parameters start throttling developer velocity. You are trying to ship HIPAA-compliant transcribers or token frameworks, but outside counsel is slow and expensive.

Here is the secret: Outside counsel defines boundaries. They do NOT write code, design schemas, or audit API endpoints. 

That is the role of Legal Engineering.

At Beneficial Technology, we bridge the gap between counsel specifications and active developer workflows. We built the "Everyday Legal AI Playbook" to give founders a clear roadmap for reading NDAs, contractor agreements, and leases using LLMs safely.

Inside the guide:
• Prompt frameworks for contract parsing
• Hallucination risk mitigation
• Custom audit template checklists

Download the PDF field guide directly at: beneficial.technology/resources

#LegalEngineering #AIStartups #Founders #Growth #Web3`
      }

      setSocialResult(draft)
      setIsSocialRunning(false)
      recordEvent('click', { action: 'run_agent_social', channel: socialChannel })
    }, 1500)
  }

  const handleGenerateSeo = (e: React.FormEvent) => {
    e.preventDefault()
    if (!seoDraft) return

    setIsSeoRunning(true)
    setSeoResult(null)

    setTimeout(() => {
      setSeoResult({
        score: Math.floor(75 + Math.random() * 20),
        keywords: ['legal engineering', 'AI compliance', 'regulated raise', 'token design'],
        suggestions: [
          'Increase density of keyword "token launch checklist" in the first 200 words.',
          'Add a H3 heading detailing "Cayman SPV regulatory structures".',
          'Include an internal link to /resources/everyday-legal-ai-playbook.'
        ]
      })
      setIsSeoRunning(false)
      recordEvent('click', { action: 'run_agent_seo' })
    }, 1500)
  }

  const handleGenerateStatus = (e: React.FormEvent) => {
    e.preventDefault()
    const target = clients.find(c => c.id === statusClientId)
    if (!target) return

    setIsStatusRunning(true)
    setStatusResult('')

    setTimeout(() => {
      const completed = target.whatsNext.filter(t => t.status === 'done').map(t => `- ${t.title} [COMPLETED]`)
      const pending = target.whatsNext.filter(t => t.status !== 'done').map(t => `- ${t.title} [${t.status.toUpperCase()}]`)
      const blockers = target.whatsBlocking.filter(b => !b.resolved).map(b => `- ${b.title} (${b.severity.toUpperCase()} BLOCKER)`)

      const report = `AI Agent Report for ${target.company}

Summary Statement:
${target.company} is currently in a ${target.whatsBlocking.filter(b => !b.resolved).length > 0 ? 'critical warning' : 'stable'} status. Retainer details are structure aligned. 

Key Metrics:
• Active roadmap milestones: ${target.whatsNext.length}
• Core blockers: ${target.whatsBlocking.filter(b => !b.resolved).length}
• Total assets uploaded: ${target.vault.length}

Tasks Roadmap details:
${completed.join('\n')}
${pending.join('\n')}

Active Blockers details:
${blockers.length > 0 ? blockers.join('\n') : 'No outstanding blocker items.'}`

      setStatusResult(report)
      setIsStatusRunning(false)
      recordEvent('click', { action: 'run_agent_status', client: target.company })
    }, 1200)
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
              <ArrowLeft size={14} /> Back to CRM Operations
            </Link>
          </div>
          <h1 className="font-serif text-4xl text-forest font-normal flex items-center gap-3">
            <Brain className="text-sienna" size={32} /> Custom Agent Sandbox
          </h1>
          <p className="text-xs text-slate-soft mt-1.5 uppercase tracking-wider">
            Simulate and orchestrate autonomous custom AI agents targeting marketing, search engine visibility, and client communication.
          </p>
        </div>
      </section>

      {/* Tab Selectors */}
      <section className="py-8 border-b border-rule bg-sand-soft/40">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex gap-6">
            {[
              { value: 'social', label: 'Social Content Agent', icon: Megaphone },
              { value: 'seo', label: 'Visibility / SEO Agent', icon: Search },
              { value: 'status', label: 'Status Summary Agent', icon: FileSpreadsheet }
            ].map(tab => {
              const TabIcon = tab.icon
              return (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value as any)}
                  className={`font-serif text-lg pb-1 relative transition-colors flex items-center gap-2 ${
                    activeTab === tab.value ? 'text-forest font-bold' : 'text-slate-soft hover:text-forest'
                  }`}
                >
                  <TabIcon size={16} className="text-sienna" />
                  {tab.label}
                  {activeTab === tab.value && (
                    <motion.div layoutId="activeAgentTabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-sienna" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Agents Playgrounds */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
          <AnimatePresence mode="wait">
            {activeTab === 'social' && (
              <motion.div
                key="social-agent"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="space-y-6"
              >
                <div className="bg-cream border border-rule/30 p-8 rounded-sm">
                  <h3 className="font-serif text-2xl text-forest mb-4 flex items-center gap-1.5">
                    <Sparkles size={20} className="text-sienna" />
                    Social Content Agent Simulator
                  </h3>
                  <p className="text-xs text-slate-ink leading-relaxed mb-6">
                    Create structured social media threads and articles based on internal playbooks.
                  </p>

                  <form onSubmit={handleGenerateSocial} className="grid sm:grid-cols-2 gap-5 items-end">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">
                        Select Reference Asset
                      </label>
                      <select
                        value={socialPlaybook}
                        onChange={(e) => setSocialPlaybook(e.target.value)}
                        className="w-full px-3 py-2.5 bg-sand-soft border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest font-semibold"
                      >
                        <option value="everyday-legal-ai-playbook">The Everyday Legal AI Playbook</option>
                        <option value="token-launch-diligence-kit">Token Launch Diligence Kit</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">
                        Distribution Network
                      </label>
                      <select
                        value={socialChannel}
                        onChange={(e) => setSocialChannel(e.target.value as any)}
                        className="w-full px-3 py-2.5 bg-sand-soft border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest font-semibold"
                      >
                        <option value="linkedin">LinkedIn Article</option>
                        <option value="twitter">Twitter / X Thread</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        disabled={isSocialRunning}
                        className="w-full py-3.5 bg-sienna hover:bg-forest text-cream text-xs uppercase tracking-widest font-bold transition-all rounded-sm flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        {isSocialRunning ? (
                          <>
                            <Loader2 className="animate-spin" size={14} /> Orchestrating Social Copy...
                          </>
                        ) : (
                          <>
                            Synthesize Social Thread <Send size={12} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>

                  {socialResult && (
                    <div className="mt-8 pt-6 border-t border-rule/20">
                      <label className="block text-[10px] uppercase text-slate-soft font-bold mb-2">Generated Network Copy</label>
                      <textarea
                        readOnly
                        value={socialResult}
                        className="w-full h-80 p-4 bg-sand-soft border border-rule font-mono text-[11px] leading-relaxed text-slate-ink focus:outline-none rounded-sm"
                      />
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(socialResult)
                          alert('Social post copied to clipboard!')
                        }}
                        className="w-full mt-3 py-3 bg-forest hover:bg-sienna text-cream text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors"
                      >
                        Copy generated copy to clipboard
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {activeTab === 'seo' && (
              <motion.div
                key="seo-agent"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="space-y-6"
              >
                <div className="bg-cream border border-rule/30 p-8 rounded-sm">
                  <h3 className="font-serif text-2xl text-forest mb-4 flex items-center gap-1.5">
                    <Search size={20} className="text-sienna" />
                    Visibility & SEO Audit Agent
                  </h3>
                  <p className="text-xs text-slate-ink leading-relaxed mb-6">
                    Analyze content copies or service descriptions to verify alignment with search keyword visibility indexes.
                  </p>

                  <form onSubmit={handleGenerateSeo} className="space-y-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">
                        Input Copy Draft
                      </label>
                      <textarea
                        required
                        value={seoDraft}
                        onChange={(e) => setSeoDraft(e.target.value)}
                        placeholder="We sit between your developer operations and legal team, building Cayman entity mapping for carbon tokens..."
                        className="w-full h-40 p-3 bg-sand-soft border border-rule/50 text-xs focus:outline-none focus:border-sienna rounded-sm text-forest"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSeoRunning}
                      className="w-full py-3.5 bg-sienna hover:bg-forest text-cream text-xs uppercase tracking-widest font-bold transition-all rounded-sm flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      {isSeoRunning ? (
                        <>
                          <Loader2 className="animate-spin" size={14} /> Assessing Keyword Densities...
                        </>
                      ) : (
                        'Execute SEO Suitability Assessment'
                      )}
                    </button>
                  </form>

                  {seoResult && (
                    <div className="mt-8 pt-6 border-t border-rule/20 space-y-5">
                      <div className="flex items-center justify-between bg-sand-soft p-4 border border-rule/30 rounded-sm">
                        <div>
                          <span className="text-[10px] uppercase text-slate-soft block font-semibold">Visibility Index</span>
                          <span className="font-serif text-3xl text-forest font-bold">{seoResult.score} / 100</span>
                        </div>
                        <span className={`text-xs font-bold uppercase px-3 py-1.5 rounded-sm ${
                          seoResult.score >= 85 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {seoResult.score >= 85 ? 'Optimized' : 'Needs tuning'}
                        </span>
                      </div>

                      <div>
                        <span className="block text-[10px] uppercase text-slate-soft font-bold mb-2">Indexed Core Keywords</span>
                        <div className="flex flex-wrap gap-2">
                          {seoResult.keywords.map((kw: string) => (
                            <span key={kw} className="text-xs bg-cream px-3 py-1 border border-rule/35 text-forest rounded-full">
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="block text-[10px] uppercase text-slate-soft font-bold mb-2">Audit Tuning Proposals</span>
                        <ul className="space-y-2">
                          {seoResult.suggestions.map((sg: string, i: number) => (
                            <li key={i} className="text-xs text-forest flex items-start gap-2">
                              <span className="text-sienna mt-0.5">•</span>
                              <span>{sg}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {activeTab === 'status' && (
              <motion.div
                key="status-agent"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="space-y-6"
              >
                <div className="bg-cream border border-rule/30 p-8 rounded-sm">
                  <h3 className="font-serif text-2xl text-forest mb-4 flex items-center gap-1.5">
                    <FileSpreadsheet size={20} className="text-sienna" />
                    Status Review Synthesis Agent
                  </h3>
                  <p className="text-xs text-slate-ink leading-relaxed mb-6">
                    Synthesize outstanding blockers, task milestones, and billing ledgers into a structured firm report.
                  </p>

                  <form onSubmit={handleGenerateStatus} className="grid sm:grid-cols-12 gap-4 items-end">
                    <div className="sm:col-span-8">
                      <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">
                        Select Target Client
                      </label>
                      <select
                        value={statusClientId}
                        onChange={(e) => setStatusClientId(e.target.value)}
                        className="w-full px-3 py-2.5 bg-sand-soft border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest font-semibold"
                      >
                        {clients.map(c => (
                          <option key={c.id} value={c.id}>
                            {c.company}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-4">
                      <button
                        type="submit"
                        disabled={isStatusRunning}
                        className="w-full py-3.5 bg-sienna hover:bg-forest text-cream text-xs uppercase tracking-widest font-bold transition-all rounded-sm flex items-center justify-center gap-1 shadow-sm"
                      >
                        {isStatusRunning ? (
                          <>
                            <Loader2 className="animate-spin" size={13} /> Analyzing Ledger...
                          </>
                        ) : (
                          'Compile Status Report'
                        )}
                      </button>
                    </div>
                  </form>

                  {statusResult && (
                    <div className="mt-8 pt-6 border-t border-rule/20">
                      <label className="block text-[10px] uppercase text-slate-soft font-bold mb-2">Synthesized Status Report</label>
                      <textarea
                        readOnly
                        value={statusResult}
                        className="w-full h-80 p-4 bg-sand-soft border border-rule font-mono text-[11px] leading-relaxed text-slate-ink focus:outline-none rounded-sm"
                      />
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(statusResult)
                          alert('Status report copied!')
                        }}
                        className="w-full mt-2.5 py-2.5 bg-forest hover:bg-sienna text-cream text-[10px] uppercase tracking-wider font-semibold rounded-sm transition-colors"
                      >
                        Copy status report
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  )
}
