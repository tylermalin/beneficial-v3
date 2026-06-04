'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ArrowLeft, ArrowRight, Check, Upload, Calendar, Building2, Layers, Key, ShieldAlert } from 'lucide-react'
import { addDbClient } from '@/lib/db'
import { ClientProfile } from '@/lib/mockData'
import { recordEvent } from '@/lib/analytics'

export default function OnboardingWizard() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [tier, setTier] = useState<'Operator' | 'Architect' | 'Project' | 'Custom'>('Operator')
  const [company, setCompany] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  // Custom tier choices state
  const [customServices, setCustomServices] = useState<string[]>([])
  const [customBudget, setCustomBudget] = useState('Startup Retainer ($5,000 - $10,000 / mo)')
  const [customTimeline, setCustomTimeline] = useState('Immediate (next 14 days)')
  
  // SOW Scope definitions
  const [scoping, setScoping] = useState('Integration of HIPAA compliant transcribe pipelines and Cayman token SPV structures.')
  const [deliverables, setDeliverables] = useState('Cayman Foundation draft constitution, HIPAA OpenAI audio data routing configurations.')
  const [exclusions, setExclusions] = useState('Civil court representation, independent external financial statements audits.')
  
  // Schedule
  const [kickoffDate, setKickoffDate] = useState('')
  const [completionDate, setCompletionDate] = useState('')

  // Digital Signature
  const [clientSignature, setClientSignature] = useState('')
  const [isSigned, setIsSigned] = useState(false)

  const handleComplete = async () => {
    if (!company || !name || !email || !password || !clientSignature || !isSigned) {
      alert('Please fill out all required fields and sign the contract agreement.')
      return
    }

    const clientId = company.toLowerCase().replace(/[^a-z0-9]/g, '-')
    
    // Create detailed project proposal & SOW client structure
    const newClient: ClientProfile = {
      id: clientId,
      name,
      company,
      email,
      tier,
      status: 'onboarding', // stays in onboarding SOW status until signed by admin
      kickoffDate: kickoffDate || new Date().toISOString().split('T')[0],
      whatsNext: tier === 'Custom' ? [
        { id: 't-custom-call', title: `Attend Strategy consultation call (${kickoffDate})`, status: 'todo' },
        { id: 't-custom-scope', title: 'Review custom proposal scope from Tyler', status: 'todo' }
      ] : [
        { id: 't-sow-admin', title: 'Awaiting Admin signature on detailed SOW SOW', status: 'todo' },
        { id: 't-vault-upload', title: 'Upload initial entity structural files to Vault', status: 'todo' }
      ],
      whatsBlocking: tier === 'Custom' ? [
        { id: 'b-custom-call', title: 'Awaiting strategy alignment call to finalize custom scope', severity: 'medium', resolved: false }
      ] : [
        { id: 'b-sow-sign', title: 'Detailed SOW Proposal needs Admin signature to activate dashboards', severity: 'high', resolved: false }
      ],
      vault: [],
      invoices: [],
      weeklyUpdates: [
        {
          week: `Week of ${new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}`,
          content: tier === 'Custom'
            ? `Bespoke engagement brief submitted. Alignment call scheduled for ${kickoffDate}.`
            : 'SOW proposal signed by Client. Staged for Admin signature verification.',
          health: 'good'
        }
      ],
      // SOW additions
      sowSignedByClient: true,
      sowSignedByAdmin: false,
      sowClientSignature: clientSignature,
      sowDetails: {
        scoping: tier === 'Custom' ? scoping : scoping,
        deliverables: tier === 'Custom' ? 'Custom build & advisory plan details, scoped post video call.' : deliverables,
        exclusions: tier === 'Custom' ? 'None specified (pending scope call)' : exclusions,
        price: tier === 'Operator' ? 8500 : tier === 'Architect' ? 15000 : tier === 'Project' ? 25000 : 0,
        completionDate: completionDate || new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
      },
      customDecisions: tier === 'Custom' ? {
        services: customServices,
        budget: customBudget,
        timeline: customTimeline
      } : undefined
    } as any

    ;(newClient as any).password = password

    await addDbClient(newClient)
    recordEvent('onboard', { company, tier })
    router.push(`/portal/proposal?client=${clientId}`)
  }

  const nextStep = () => {
    if (step === 2 && (!company || !name || !email || !password)) {
      alert('Please fill out all client details and secure password.')
      return
    }
    setStep(s => s + 1)
  }
  const prevStep = () => setStep(s => s - 1)

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-3xl">
          {/* Progress Indicator */}
          <div className="mb-10">
            <div className="flex justify-between text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-3">
              <span>Step {step} of 5</span>
              <span>
                {step === 1 ? 'Retainer Tier' : 
                 step === 2 ? 'Credentials' : 
                 step === 3 ? 'Project Scope' : 
                 step === 4 ? 'Milestone Schedule' : 
                 'Digital Contract Signature'}
              </span>
            </div>
            <div className="h-1 w-full bg-rule/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-sienna"
                initial={{ width: '20%' }}
                animate={{ width: `${step * 20}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-sand-soft border border-rule/30 p-8 sm:p-12 min-h-[440px] flex flex-col justify-between rounded-sm relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-sienna" />

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="font-serif text-3xl text-forest mb-2">Select engagement capacity</h2>
                    <p className="text-sm text-slate-ink leading-relaxed">
                      Choose the retention scale that matches your operational needs.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { value: 'Operator', title: 'Operator Tier', desc: 'Pre-seed, seed, and SMBs. Up to 8h/mo advising.', price: '$8,500/mo' },
                      { value: 'Architect', title: 'Architect Tier', desc: 'Enterprise, Web3 & AI. Up to 16h/mo advising.', price: '$15,000/mo' },
                      { value: 'Project', title: 'Project Engagement', desc: 'Milestone deliverables, software & marketing execution.', price: 'From $25k' },
                      { value: 'Custom', title: 'Custom Plan', desc: 'Bespoke advisory, software builders & marketing squads.', price: 'Bespoke' }
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setTier(opt.value as any)}
                        className={`p-5 border text-left flex flex-col justify-between min-h-[170px] rounded-sm transition-all duration-300 ${
                          tier === opt.value
                            ? 'border-sienna bg-background shadow-md'
                            : 'border-rule/50 hover:border-rule bg-sand-soft'
                        }`}
                      >
                        <div>
                          <h4 className="font-serif text-lg text-forest">{opt.title}</h4>
                          <p className="text-[11px] text-slate-ink mt-2 leading-relaxed">{opt.desc}</p>
                        </div>
                        <span className="text-xs uppercase text-sienna tracking-wider font-bold mt-4">{opt.price}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  <div>
                    <h2 className="font-serif text-3xl text-forest mb-2">Portal Profile & Credentials</h2>
                    <p className="text-sm text-slate-ink">
                      Set up your profile and password to log in to the Client Portal.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">Company Name *</label>
                        <div className="relative">
                          <Building2 size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-soft" />
                          <input
                            type="text"
                            required
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="ScribeMed AI"
                            className="w-full pl-9 pr-4 py-2.5 bg-cream border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">Founder Full Name *</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Dr. Raamit Patel"
                          className="w-full px-4 py-2.5 bg-cream border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">Founder Email *</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="raamit@scribemed.ai"
                          className="w-full px-4 py-2.5 bg-cream border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">Portal Secure Password *</label>
                        <div className="relative">
                          <Key size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-soft" />
                          <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Set login password"
                            className="w-full pl-9 pr-4 py-2.5 bg-cream border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                tier === 'Custom' ? (
                  <motion.div
                    key="step3-custom"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <h2 className="font-serif text-3xl text-forest mb-2">Bespoke Scope Choices</h2>
                      <p className="text-sm text-slate-ink">
                        Select the practice areas and capacity constraints that match your goals.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-2">Practice Focus Areas *</label>
                        <div className="grid grid-cols-2 gap-2 text-[11px]">
                          {[
                            'AI Integration & Workflows',
                            'Custom Software Build',
                            'Web3 & Digital Assets',
                            'Legal Engineering & Compliance',
                            'Growth Marketing Strategy',
                            'Executive Planning Advisory'
                          ].map((srv) => (
                            <button
                              type="button"
                              key={srv}
                              onClick={() => {
                                setCustomServices(prev => 
                                  prev.includes(srv) ? prev.filter(x => x !== srv) : [...prev, srv]
                                )
                              }}
                              className={`p-3 text-left border rounded-sm transition-all flex items-center justify-between font-semibold ${
                                customServices.includes(srv)
                                  ? 'border-sienna bg-background text-forest font-bold'
                                  : 'border-rule/45 bg-cream/40 text-slate-ink hover:border-rule'
                              }`}
                            >
                              <span>{srv}</span>
                              {customServices.includes(srv) && <Check size={13} className="text-sienna" />}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">Target Monthly Budget Range *</label>
                          <select
                            value={customBudget}
                            onChange={(e) => setCustomBudget(e.target.value)}
                            className="w-full px-3 py-2.5 bg-cream border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest font-semibold"
                          >
                            <option>Bootstrapped (&lt;$5,000 / mo)</option>
                            <option>Startup Retainer ($5,000 - $10,000 / mo)</option>
                            <option>Mid-Market Retainer ($10,000 - $25,000 / mo)</option>
                            <option>Enterprise &amp; Dedicated Build (&gt;$25,000 / mo)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">Engagement Urgency / Timeline *</label>
                          <select
                            value={customTimeline}
                            onChange={(e) => setCustomTimeline(e.target.value)}
                            className="w-full px-3 py-2.5 bg-cream border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest font-semibold"
                          >
                            <option>Immediate (next 14 days)</option>
                            <option>Short-term (next 30-60 days)</option>
                            <option>Ongoing / Fractional (6+ months)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <h2 className="font-serif text-3xl text-forest mb-2">Project Scoping & Boundaries</h2>
                      <p className="text-sm text-slate-ink">
                        Describe what we are engineering, and specify any legal or technical boundaries.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">Engagement Scoping Details *</label>
                        <textarea
                          required
                          value={scoping}
                          onChange={(e) => setScoping(e.target.value)}
                          className="w-full h-24 p-3 bg-cream border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest font-medium leading-relaxed"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">Exclusions (Scope limits) *</label>
                        <textarea
                          required
                          value={exclusions}
                          onChange={(e) => setExclusions(e.target.value)}
                          className="w-full h-20 p-3 bg-cream border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest font-medium leading-relaxed"
                        />
                      </div>
                    </div>
                  </motion.div>
                )
              )}

              {step === 4 && (
                tier === 'Custom' ? (
                  <motion.div
                    key="step4-custom"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <h2 className="font-serif text-3xl text-forest mb-2">Objectives & Strategy Booking</h2>
                      <p className="text-sm text-slate-ink">
                        Describe your core goals and reserve your strategic video consultation.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">Primary Objectives (Brief summary) *</label>
                        <textarea
                          required
                          value={scoping}
                          onChange={(e) => setScoping(e.target.value)}
                          placeholder="e.g. Setting up clean AI transcribing pipelines and verifying Cayman SPV tokens governance."
                          className="w-full h-20 p-3 bg-cream border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest font-medium leading-relaxed"
                        />
                      </div>

                      <div className="border border-rule/30 bg-cream p-4 rounded-sm">
                        <span className="block text-[10px] uppercase tracking-wider text-slate-soft font-bold mb-2 flex items-center gap-1.5">
                          <Calendar size={13} className="text-sienna" /> Book Strategy Alignment Call
                        </span>
                        
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            'June 8 at 10:00 AM',
                            'June 8 at 2:00 PM',
                            'June 9 at 11:30 AM',
                            'June 9 at 3:00 PM',
                            'June 10 at 9:00 AM',
                            'June 10 at 1:30 PM'
                          ].map((slot) => (
                            <button
                              type="button"
                              key={slot}
                              onClick={() => setKickoffDate(slot)}
                              className={`py-2 px-1 text-center text-[10px] rounded-sm border transition-all font-semibold ${
                                kickoffDate === slot
                                  ? 'bg-forest text-cream border-forest'
                                  : 'bg-sand-soft/50 text-forest border-rule/30 hover:border-rule'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                        <p className="text-[10px] text-slate-soft mt-3 italic text-center">
                          {kickoffDate ? `Selected video conference slot: ${kickoffDate}` : 'Please choose a call slot above to complete the onboarding wizard.'}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <div>
                      <h2 className="font-serif text-3xl text-forest mb-2">Deliverables & Timeline Schedule</h2>
                      <p className="text-sm text-slate-ink">
                        Define the exact milestone deliverables and critical dates.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">Milestone Deliverables List *</label>
                        <textarea
                          required
                          value={deliverables}
                          onChange={(e) => setDeliverables(e.target.value)}
                          className="w-full h-24 p-3 bg-cream border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest font-medium leading-relaxed"
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">Target Kickoff Date</label>
                          <input
                            type="date"
                            value={kickoffDate}
                            onChange={(e) => setKickoffDate(e.target.value)}
                            className="w-full px-3 py-2.5 bg-cream border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">Target Delivery Date</label>
                          <input
                            type="date"
                            value={completionDate}
                            onChange={(e) => setCompletionDate(e.target.value)}
                            className="w-full px-3 py-2.5 bg-cream border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              )}

              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-5"
                >
                  <div>
                    <h2 className="font-serif text-3xl text-forest mb-2">
                      {tier === 'Custom' ? 'Verify Custom Brief' : 'Digital SOW Signature'}
                    </h2>
                    <p className="text-sm text-slate-ink">
                      {tier === 'Custom' 
                        ? 'Verify custom options details. The portal will activate once we align on the call.'
                        : 'Review SOW elements and sign. The portal will activate once the admin countersigns.'}
                    </p>
                  </div>

                  <div className="bg-cream p-5 border border-rule/30 rounded-sm space-y-3 text-xs max-h-56 overflow-y-auto">
                    {tier === 'Custom' ? (
                      <>
                        <h4 className="font-serif text-sm text-forest font-bold border-b border-rule/20 pb-2">CUSTOM ALIGNMENT BRIEF</h4>
                        <p><strong>Provider:</strong> Beneficial Technology, LLC</p>
                        <p><strong>Client:</strong> {company} ({name})</p>
                        <p><strong>Practice Areas:</strong> {customServices.length > 0 ? customServices.join(', ') : 'General Strategy Consulting'}</p>
                        <p><strong>Budget capacity:</strong> {customBudget}</p>
                        <p><strong>Target Timeline:</strong> {customTimeline}</p>
                        <p><strong>Staged Objectives:</strong> {scoping}</p>
                        <p><strong>Strategy Call Booked:</strong> {kickoffDate || 'Pending scheduling'}</p>
                      </>
                    ) : (
                      <>
                        <h4 className="font-serif text-sm text-forest font-bold border-b border-rule/20 pb-2">STATEMENT OF WORK (DRAFT SOW)</h4>
                        <p><strong>Provider:</strong> Beneficial Technology, LLC</p>
                        <p><strong>Client:</strong> {company} ({name})</p>
                        <p><strong>Tier / Fee:</strong> {tier} Engagement - ${tier === 'Operator' ? '8,500' : tier === 'Architect' ? '15,000' : '25,000'}/month</p>
                        <p><strong>Scoping Parameters:</strong> {scoping}</p>
                        <p><strong>Exclusions:</strong> {exclusions}</p>
                        <p><strong>Deliverables:</strong> {deliverables}</p>
                        <p><strong>Kickoff Date:</strong> {kickoffDate || 'Immediate'}</p>
                        <p><strong>Target Delivery:</strong> {completionDate || '60 days post sign'}</p>
                      </>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">Enter Full Name to Sign *</label>
                      <input
                        type="text"
                        required
                        value={clientSignature}
                        onChange={(e) => setClientSignature(e.target.value)}
                        placeholder="Dr. Raamit Patel"
                        className="w-full px-4 py-2.5 bg-cream border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-xs text-forest font-semibold"
                      />
                    </div>
                    <div className="flex items-end pb-1.5">
                      <label className="flex items-center gap-2 text-xs text-forest cursor-pointer font-semibold">
                        <input
                          type="checkbox"
                          checked={isSigned}
                          onChange={(e) => setIsSigned(e.target.checked)}
                          className="w-4 h-4 text-sienna border-rule focus:ring-sienna accent-sienna"
                        />
                        <span>I accept terms and sign digitally</span>
                      </label>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Controls */}
            <div className="flex justify-between items-center pt-8 border-t border-rule/30 mt-8">
              {step > 1 ? (
                <button
                  onClick={prevStep}
                  className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-slate-ink hover:text-forest font-semibold transition-colors animate-none"
                >
                  <ArrowLeft size={14} /> Back
                </button>
              ) : (
                <div />
              )}

              {step < 5 ? (
                <button
                  onClick={nextStep}
                  className="flex items-center gap-1.5 px-5 py-3 bg-forest hover:bg-sienna text-cream text-xs uppercase tracking-wider font-semibold transition-all rounded-sm"
                >
                  Next <ArrowRight size={14} />
                </button>
              ) : (
                <button
                  onClick={handleComplete}
                  className="flex items-center gap-1.5 px-6 py-4 bg-sienna hover:bg-forest text-cream text-xs uppercase tracking-wider font-bold transition-all rounded-sm shadow-md"
                >
                  Submit Proposal & Sign <Check size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
