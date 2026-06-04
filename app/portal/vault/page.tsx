'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { getDbClients, updateDbClient, getDbClientById, VaultFile } from '@/lib/db'
import { ClientProfile } from '@/lib/mockData'
import { isClientAuthenticated, getCurrentSession } from '@/lib/auth'
import { Folder, FileText, Upload, Plus, Check, ArrowLeft, ArrowDown, UserCheck } from 'lucide-react'
import { recordEvent } from '@/lib/analytics'

function DocumentVaultContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [clients, setClients] = useState<ClientProfile[]>([])
  const [currentClient, setCurrentClient] = useState<ClientProfile | null>(null)
  const [simulationPersona, setSimulationPersona] = useState('')
  const [filterCategory, setFilterCategory] = useState<'all' | 'legal' | 'technical' | 'strategy' | 'deliverable'>('all')
  
  // File upload simulation fields
  const [newFileName, setNewFileName] = useState('')
  const [newFileCategory, setNewFileCategory] = useState<'legal' | 'technical' | 'strategy' | 'deliverable'>('legal')
  const [isUploading, setIsUploading] = useState(false)

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
        router.push(`/portal/vault?client=${session.clientId}`)
        return
      }
    }

    const fetchVaultData = async () => {
      const list = await getDbClients()
      setClients(list)
      const found = list.find(c => c.id === clientParam) || list[0]
      if (found) {
        setCurrentClient(found)
        setSimulationPersona(found.id)
      }
    }
    fetchVaultData()

    recordEvent('pageview', { section: 'vault', clientId: clientParam })
  }, [clientParam, router])

  const handlePersonaChange = (id: string) => {
    setSimulationPersona(id)
    router.push(`/portal/vault?client=${id}`)
  }

  const handleFileUploadSim = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentClient || !newFileName) return

    setIsUploading(true)
    setTimeout(async () => {
      const file: VaultFile = {
        id: Math.random().toString(36).substring(2, 9),
        name: newFileName.endsWith('.pdf') || newFileName.endsWith('.xlsx') ? newFileName : `${newFileName}.pdf`,
        size: `${(Math.random() * 3 + 0.5).toFixed(1)} MB`,
        category: newFileCategory,
        uploadedAt: new Date().toISOString().split('T')[0],
        url: '#'
      }

      const updatedClient = {
        ...currentClient,
        vault: [file, ...currentClient.vault]
      }

      setCurrentClient(updatedClient)
      await updateDbClient(updatedClient)
      setNewFileName('')
      setIsUploading(false)
      recordEvent('click', { action: 'upload_document', category: newFileCategory })
    }, 1000)
  }

  if (!currentClient) return null

  const filteredFiles = filterCategory === 'all'
    ? currentClient.vault
    : currentClient.vault.filter(f => f.category === filterCategory)

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      {/* Persona Toggle */}
      <section className="pt-24 pb-4 border-b border-rule bg-sand-soft text-forest relative z-30">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <UserCheck size={18} className="text-sienna" />
            <span className="text-xs uppercase tracking-[0.16em] font-bold">Simulator Vault Panel</span>
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
            Document Vault · {currentClient.company}
          </h1>
          <p className="text-xs text-slate-soft mt-1.5 uppercase tracking-wider">
            Category-filtered repository for token design specs, cap tables, and legal memos.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left Column: Category Filter & Files List */}
            <div className="lg:col-span-8 space-y-6">
              {/* Category selector */}
              <div className="flex flex-wrap gap-2 border-b border-rule/30 pb-4">
                {[
                  { value: 'all', label: 'All files' },
                  { value: 'legal', label: 'Legal contracts & forms' },
                  { value: 'technical', label: 'Technical audits & tokens' },
                  { value: 'strategy', label: 'Strategy proposals' },
                  { value: 'deliverable', label: 'Deliverables shipped' }
                ].map(cat => (
                  <button
                    key={cat.value}
                    onClick={() => setFilterCategory(cat.value as any)}
                    className={`px-3.5 py-1.5 border text-xs tracking-wider rounded-full transition-all ${
                      filterCategory === cat.value
                        ? 'bg-forest text-cream border-forest font-semibold'
                        : 'bg-cream text-forest border-rule/50 hover:border-rule'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Files Grid */}
              <div className="space-y-3">
                {filteredFiles.length === 0 ? (
                  <div className="text-center py-20 bg-sand-soft border border-rule/20 rounded-sm">
                    <Folder size={40} className="mx-auto text-rule mb-3 opacity-55" />
                    <p className="font-serif text-lg text-slate-ink">No documents found</p>
                    <p className="text-xs text-slate-soft mt-1">Upload a draft file to begin the audit simulation</p>
                  </div>
                ) : (
                  filteredFiles.map((file) => (
                    <div
                      key={file.id}
                      className="p-5 bg-sand-soft border border-rule/20 hover:border-rule/60 flex items-center justify-between rounded-sm transition-all"
                    >
                      <div className="flex items-center gap-4.5">
                        <div className="p-3 bg-cream border border-rule/20 text-sienna shrink-0 rounded-sm">
                          <FileText size={22} />
                        </div>
                        <div>
                          <span className="block font-mono text-sm font-semibold text-forest leading-snug truncate max-w-sm sm:max-w-md">
                            {file.name}
                          </span>
                          <div className="flex gap-2 text-[10px] text-slate-soft uppercase tracking-wider font-semibold mt-1">
                            <span>{file.category}</span>
                            <span>·</span>
                            <span>{file.size}</span>
                            <span>·</span>
                            <span>Uploaded: {file.uploadedAt}</span>
                          </div>
                        </div>
                      </div>

                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          alert(`Downloading file: ${file.name}`)
                          recordEvent('click', { action: 'download_document', file: file.name })
                        }}
                        className="p-2.5 bg-forest hover:bg-sienna text-cream transition-colors duration-300 rounded-sm"
                        aria-label="Download document"
                      >
                        <ArrowDown size={15} />
                      </a>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Right Column: Upload Simulator Form */}
            <div className="lg:col-span-4">
              <div className="bg-cream border border-rule/30 p-6 rounded-sm space-y-6">
                <div>
                  <h4 className="font-serif text-lg text-forest mb-2">Simulate Document Upload</h4>
                  <p className="text-xs text-slate-ink leading-relaxed">
                    Upload documents to your legal or strategy team to request dynamic audits.
                  </p>
                </div>

                <form onSubmit={handleFileUploadSim} className="space-y-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">
                      Document Name
                    </label>
                    <input
                      type="text"
                      required
                      value={newFileName}
                      onChange={(e) => setNewFileName(e.target.value)}
                      placeholder="OpenAI_BAA_Agreement_v3.pdf"
                      className="w-full px-3.5 py-2.5 bg-sand-soft border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-slate-soft font-semibold mb-1">
                      Document Category
                    </label>
                    <select
                      value={newFileCategory}
                      onChange={(e) => setNewFileCategory(e.target.value as any)}
                      className="w-full px-3 py-2.5 bg-sand-soft border border-rule/50 focus:outline-none focus:border-sienna rounded-sm text-sm"
                    >
                      <option value="legal">Legal contracts & forms</option>
                      <option value="technical">Technical audits & tokens</option>
                      <option value="strategy">Strategy proposals</option>
                      <option value="deliverable">Deliverables shipped</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isUploading}
                    className="w-full py-3.5 bg-sienna hover:bg-forest text-cream font-bold text-xs uppercase tracking-widest transition-colors duration-300 rounded-sm flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    {isUploading ? (
                      'Encrypting & Uploading...'
                    ) : (
                      <>
                        Upload To Audit Team <Plus size={15} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function DocumentVault() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-cream flex items-center justify-center text-forest text-sm uppercase tracking-widest font-semibold">
        Loading Vault...
      </div>
    }>
      <DocumentVaultContent />
    </Suspense>
  )
}
