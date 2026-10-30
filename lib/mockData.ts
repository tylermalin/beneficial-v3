// Temporary browser-local data structures for the disabled portal feature.

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
  buyUrl?: string
}

const STORAGE_KEY = 'beneficial_db'

const defaultClients: ClientProfile[] = []

const defaultProducts: Product[] = []

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
