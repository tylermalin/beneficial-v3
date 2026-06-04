// Local Mock Database with LocalStorage persistence
// Simulates a backend for clients (Pearson, Dr. Raamit, Tyle), onboarding, vault, invoices, and AI agents.

export type TaskItem = {
  id: string
  title: string
  status: 'todo' | 'in-progress' | 'done'
  dueDate?: string
}

export type BlockerItem = {
  id: string
  title: string
  severity: 'low' | 'medium' | 'high'
  resolved: boolean
}

export type VaultFile = {
  id: string
  name: string
  size: string
  category: 'legal' | 'technical' | 'strategy' | 'deliverable'
  uploadedAt: string
  url: string
}

export type Invoice = {
  id: string
  amount: number
  dueDate: string
  issuedDate: string
  status: 'paid' | 'pending' | 'overdue'
  description: string
}

export type ClientProfile = {
  id: string
  name: string
  company: string
  email: string
  tier: 'Operator' | 'Architect' | 'Project' | 'Custom'
  customDecisions?: {
    services: string[]
    budget: string
    timeline: string
  }
  status: 'onboarding' | 'active' | 'completed'
  kickoffDate?: string
  whatsNext: TaskItem[]
  whatsBlocking: BlockerItem[]
  vault: VaultFile[]
  invoices: Invoice[]
  weeklyUpdates: {
    week: string
    content: string
    health: 'good' | 'warning' | 'critical'
  }[]
}

export type Product = {
  slug: string
  title: string
  price: number
  desc: string
  type: 'playbook' | 'membership' | 'service'
  features: string[]
}

const STORAGE_KEY = 'beneficial_db'

const defaultClients: ClientProfile[] = [
  {
    id: 'pearson',
    name: 'Sarah Pearson',
    company: 'Pearson Climate Finance',
    email: 'sarah@pearsonclimate.co',
    tier: 'Architect',
    status: 'active',
    kickoffDate: '2026-02-10',
    whatsNext: [
      { id: 'p1', title: 'Complete Cayman entity structural setup with outside counsel', status: 'in-progress', dueDate: '2026-06-10' },
      { id: 'p2', title: 'Draft investor SAFT template for tokenized carbon credits', status: 'todo', dueDate: '2026-06-15' },
      { id: 'p3', title: 'Prepare board memo for Regulated Raise exemption structure', status: 'done', dueDate: '2026-05-28' }
    ],
    whatsBlocking: [
      { id: 'pb1', title: 'Pending outside counsel sign-off on Cayman tax structure', severity: 'high', resolved: false },
      { id: 'pb2', title: 'Clarification on SEC guidelines regarding carbon asset tokens', severity: 'medium', resolved: false }
    ],
    vault: [
      { id: 'vf1', name: 'Cayman_Entity_Structure_v2.pdf', size: '1.2 MB', category: 'legal', uploadedAt: '2026-05-15', url: '#' },
      { id: 'vf2', name: 'Carbon_Token_Tokenomics_Model.xlsx', size: '4.8 MB', category: 'technical', uploadedAt: '2026-05-20', url: '#' },
      { id: 'vf3', name: 'Approved_Board_Minutes_May2026.pdf', size: '890 KB', category: 'strategy', uploadedAt: '2026-05-29', url: '#' }
    ],
    invoices: [
      { id: 'INV-2026-001', amount: 15000, dueDate: '2026-05-01', issuedDate: '2026-04-15', status: 'paid', description: 'Architect Retainer - April 2026' },
      { id: 'INV-2026-004', amount: 15000, dueDate: '2026-06-01', issuedDate: '2026-05-15', status: 'pending', description: 'Architect Retainer - May 2026' }
    ],
    weeklyUpdates: [
      {
        week: 'Week of May 25, 2026',
        content: 'Completed the SEC board memo. Progress on the Cayman structure is bottlenecked by Cayman counsel responsiveness. What\'s Next: SAFT template drafting and scheduling counsel sync.',
        health: 'warning'
      },
      {
        week: 'Week of May 18, 2026',
        content: 'Finalized tokenomics schema and ran simulations. Sent structure notes to Sarah. Invoices are up to date.',
        health: 'good'
      }
    ]
  },
  {
    id: 'raamit',
    name: 'Dr. Raamit Patel',
    company: 'ScribeMed AI',
    email: 'raamit@scribemed.ai',
    tier: 'Project',
    status: 'active',
    kickoffDate: '2026-04-01',
    whatsNext: [
      { id: 'r1', title: 'Draft HIPAA compliance mapping for AI voice transcriber', status: 'in-progress', dueDate: '2026-06-08' },
      { id: 'r2', title: 'Setup data processing addendums (DPA) with OpenAI API', status: 'todo', dueDate: '2026-06-12' },
      { id: 'r3', title: 'Review medical data liability indemnification clause', status: 'done', dueDate: '2026-05-20' }
    ],
    whatsBlocking: [
      { id: 'rb1', title: 'Awaiting BAA signed agreement from transcription API vendor', severity: 'high', resolved: false }
    ],
    vault: [
      { id: 'vr1', name: 'HIPAA_Compliance_Mapping_v1.pdf', size: '2.4 MB', category: 'legal', uploadedAt: '2026-05-10', url: '#' },
      { id: 'vr2', name: 'Data_Security_Architecture.pdf', size: '3.1 MB', category: 'technical', uploadedAt: '2026-04-20', url: '#' }
    ],
    invoices: [
      { id: 'INV-2026-002', amount: 12500, dueDate: '2026-04-05', issuedDate: '2026-04-01', status: 'paid', description: 'ScribeMed AI Project Milestone 1 (HIPAA Mapping)' },
      { id: 'INV-2026-005', amount: 12500, dueDate: '2026-06-05', issuedDate: '2026-05-20', status: 'pending', description: 'ScribeMed AI Project Milestone 2 (Vendor DPAs)' }
    ],
    weeklyUpdates: [
      {
        week: 'Week of May 25, 2026',
        content: 'Currently draft HIPAA mapping is 75% complete. We are stuck waiting on transcription vendor BAA form signature. Raamit is pushing them on his end. What\'s next: finalize OpenAI data pipeline structures.',
        health: 'warning'
      }
    ]
  },
  {
    id: 'tyle',
    name: 'Mark Tyle',
    company: 'ByteForge Development',
    email: 'mark@byteforge.dev',
    tier: 'Operator',
    status: 'active',
    kickoffDate: '2026-01-15',
    whatsNext: [
      { id: 't1', title: 'Cap table structural sync for seed round advisory shares', status: 'in-progress', dueDate: '2026-06-12' },
      { id: 't2', title: 'Review contractor agreements for AI developer operations', status: 'todo', dueDate: '2026-06-20' },
      { id: 't3', title: 'Finalize founder vesting acceleration terms', status: 'done', dueDate: '2026-05-15' }
    ],
    whatsBlocking: [],
    vault: [
      { id: 'vt1', name: 'ByteForge_CapTable_2026.xlsx', size: '1.1 MB', category: 'strategy', uploadedAt: '2026-05-14', url: '#' }
    ],
    invoices: [
      { id: 'INV-2026-003', amount: 8500, dueDate: '2026-05-01', issuedDate: '2026-04-15', status: 'paid', description: 'Operator Retainer - April 2026' },
      { id: 'INV-2026-006', amount: 8500, dueDate: '2026-06-01', issuedDate: '2026-05-15', status: 'paid', description: 'Operator Retainer - May 2026' }
    ],
    weeklyUpdates: [
      {
        week: 'Week of May 25, 2026',
        content: 'Vesting acceleration completed and signed. Spoke with Mark about seed round preparation. Reviewing cap table details next week. Health is great.',
        health: 'good'
      }
    ]
  }
]

const defaultProducts: Product[] = [
  {
    slug: 'everyday-legal-ai-playbook',
    title: 'The Everyday Legal AI Playbook',
    price: 49,
    desc: 'The comprehensive field guide on how to read contracts, leases, NDAs, and other legal documents using AI models safely and effectively.',
    type: 'playbook',
    features: [
      'Step-by-step prompt library for contract parsing',
      'Hallucination and risk mitigation framework',
      'Interactive PDF playbook (42 pages)',
      'Pre-built Custom GPT template instructions'
    ]
  },
  {
    slug: 'token-launch-diligence-kit',
    title: 'Token Launch Diligence Kit',
    price: 299,
    desc: 'Ready-to-use checklist and document package to coordinate SAFT structures, investor prep, and counsel management for Web3 founders.',
    type: 'playbook',
    features: [
      'Multi-entity checklist (US vs Cayman vs BVI)',
      'Investor presentation templates for token raises',
      'Sample counsel coordination briefs',
      'Token emissions structure worksheet'
    ]
  },
  {
    slug: 'regulated-frontier-membership',
    title: 'Regulated Frontier Membership',
    price: 950,
    desc: 'Annual access to Beneficial Technology templates, monthly group advisory calls, and direct Q&A channels for scaling founders.',
    type: 'membership',
    features: [
      'Monthly 60-minute cohort advisory calls',
      'Private Slack/Discord channel access',
      'All current and future digital playbooks included',
      'Priority scheduling for 1-on-1 strategic engagements'
    ]
  }
]

export function getDb(): { clients: ClientProfile[]; products: Product[]; orders: any[] } {
  if (typeof window === 'undefined') {
    return { clients: defaultClients, products: defaultProducts, orders: [] }
  }

  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) {
      const db = { clients: defaultClients, products: defaultProducts, orders: [] }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(db))
      return db
    }
    return JSON.parse(data)
  } catch (e) {
    return { clients: defaultClients, products: defaultProducts, orders: [] }
  }
}

export function saveDb(db: any): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db))
    window.dispatchEvent(new CustomEvent('beneficial_db_updated'))
  } catch (e) {
    console.error('Failed to save to mock DB:', e)
  }
}

export function getClients(): ClientProfile[] {
  return getDb().clients
}

export function getClientById(id: string): ClientProfile | undefined {
  return getClients().find((c) => c.id === id)
}

export function updateClient(updatedClient: ClientProfile): void {
  const db = getDb()
  db.clients = db.clients.map((c) => (c.id === updatedClient.id ? updatedClient : c))
  saveDb(db)
}

export function addClient(newClient: Omit<ClientProfile, 'whatsNext' | 'whatsBlocking' | 'vault' | 'invoices' | 'weeklyUpdates'>): ClientProfile {
  const db = getDb()
  const client: ClientProfile = {
    ...newClient,
    whatsNext: [
      { id: Math.random().toString(36).substring(2, 9), title: 'Schedule kickoff call', status: 'todo' },
      { id: Math.random().toString(36).substring(2, 9), title: 'Upload initial company docs to Vault', status: 'todo' }
    ],
    whatsBlocking: [],
    vault: [],
    invoices: [
      {
        id: `INV-2026-${Math.floor(100 + Math.random() * 900)}`,
        amount: newClient.tier === 'Operator' ? 8500 : newClient.tier === 'Architect' ? 15000 : newClient.tier === 'Project' ? 25000 : 0,
        dueDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        issuedDate: new Date().toISOString().split('T')[0],
        status: 'pending',
        description: newClient.tier === 'Custom' ? 'Custom Retainer Scope - Pending Intro Call' : `${newClient.tier} Tier Onboarding Deposit`
      }
    ],
    weeklyUpdates: [
      {
        week: `Week of ${new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}`,
        content: 'Client onboarded successfully. Initial roadmap generated. Kickoff pending.',
        health: 'good'
      }
    ]
  }
  db.clients.push(client)
  saveDb(db)
  return client
}

export function getProducts(): Product[] {
  return getDb().products
}

export function payInvoice(clientId: string, invoiceId: string): boolean {
  const client = getClientById(clientId)
  if (!client) return false

  client.invoices = client.invoices.map((inv) => {
    if (inv.id === invoiceId) {
      return { ...inv, status: 'paid' }
    }
    return inv
  })

  updateClient(client)
  return true
}

export function recordPurchase(email: string, productSlug: string): void {
  const db = getDb()
  const purchase = {
    id: Math.random().toString(36).substring(2, 9),
    email,
    productSlug,
    timestamp: new Date().toISOString()
  }
  db.orders.push(purchase)
  saveDb(db)
}
