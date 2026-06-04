// Database adapter supporting Vercel KV (Redis REST API) and localStorage fallback.
// Avoids external package bloat by directly calling the Upstash Redis REST API.

import { ClientProfile } from './mockData'

export type ChatMessage = {
  id: string
  clientId: string
  sender: 'client' | 'admin'
  content: string
  timestamp: string
}

// Initial default database state
const INITIAL_CLIENTS: ClientProfile[] = [
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
      { id: 'vf2', name: 'Carbon_Token_Tokenomics_Model.xlsx', size: '4.8 MB', category: 'technical', uploadedAt: '2026-05-20', url: '#' }
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
      { id: 'r2', title: 'Setup data processing addendums (DPA) with OpenAI API', status: 'todo', dueDate: '2026-06-12' }
    ],
    whatsBlocking: [
      { id: 'rb1', title: 'Awaiting BAA signed agreement from transcription API vendor', severity: 'high', resolved: false }
    ],
    vault: [
      { id: 'vr1', name: 'HIPAA_Compliance_Mapping_v1.pdf', size: '2.4 MB', category: 'legal', uploadedAt: '2026-05-10', url: '#' }
    ],
    invoices: [
      { id: 'INV-2026-002', amount: 12500, dueDate: '2026-04-05', issuedDate: '2026-04-01', status: 'paid', description: 'ScribeMed AI Project Milestone 1 (HIPAA Mapping)' }
    ],
    weeklyUpdates: [
      {
        week: 'Week of May 25, 2026',
        content: 'Currently draft HIPAA mapping is 75% complete. We are stuck waiting on transcription vendor BAA form signature. Raamit is pushing them on his end.',
        health: 'warning'
      }
    ]
  }
]

const INITIAL_MESSAGES: ChatMessage[] = [
  { id: 'm1', clientId: 'pearson', sender: 'admin', content: 'Hi Sarah, Cayman setup sheets are ready in the vault.', timestamp: '2026-05-28T10:00:00Z' },
  { id: 'm2', clientId: 'pearson', sender: 'client', content: 'Thanks Tyler! Reviewing now.', timestamp: '2026-05-28T10:15:00Z' }
]

const KV_URL = process.env.NEXT_PUBLIC_KV_REST_API_URL || process.env.KV_REST_API_URL
const KV_TOKEN = process.env.NEXT_PUBLIC_KV_REST_API_TOKEN || process.env.KV_REST_API_TOKEN

export const isLiveDb = !!(KV_URL && KV_TOKEN)

// Sync KV utility
async function runKvCommand(command: string[]): Promise<any> {
  if (!isLiveDb) return null
  try {
    const res = await fetch(KV_URL!, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${KV_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(command),
      next: { revalidate: 0 } // disable fetch caching
    })
    const data = await res.json()
    return data.result
  } catch (e) {
    console.error('KV Storage Command Failure:', e)
    return null
  }
}

// Local storage helpers
function getLocalKey(key: string, defaultVal: string): any {
  if (typeof window === 'undefined') return JSON.parse(defaultVal)
  const val = localStorage.getItem(key)
  if (!val) {
    localStorage.setItem(key, defaultVal)
    return JSON.parse(defaultVal)
  }
  return JSON.parse(val)
}

function setLocalKey(key: string, val: any): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(key, JSON.stringify(val))
  window.dispatchEvent(new CustomEvent('beneficial_db_updated'))
}

// Client Abstractions
export async function getDbClients(): Promise<ClientProfile[]> {
  if (isLiveDb) {
    const res = await runKvCommand(['get', 'beneficial_clients'])
    if (res) return JSON.parse(res)
    // Initialize if empty
    await setDbClients(INITIAL_CLIENTS)
    return INITIAL_CLIENTS
  } else {
    return getLocalKey('beneficial_clients', JSON.stringify(INITIAL_CLIENTS))
  }
}

export async function setDbClients(clients: ClientProfile[]): Promise<void> {
  if (isLiveDb) {
    await runKvCommand(['set', 'beneficial_clients', JSON.stringify(clients)])
  } else {
    setLocalKey('beneficial_clients', clients)
  }
}

export async function getDbClientById(id: string): Promise<ClientProfile | undefined> {
  const list = await getDbClients()
  return list.find(c => c.id === id)
}

export async function updateDbClient(updatedClient: ClientProfile): Promise<void> {
  const list = await getDbClients()
  const nextList = list.map(c => c.id === updatedClient.id ? updatedClient : c)
  await setDbClients(nextList)
}

export async function addDbClient(client: ClientProfile): Promise<void> {
  const list = await getDbClients()
  list.push(client)
  await setDbClients(list)
}

// Message Abstractions
export async function getDbMessages(): Promise<ChatMessage[]> {
  if (isLiveDb) {
    const res = await runKvCommand(['get', 'beneficial_messages'])
    if (res) return JSON.parse(res)
    await setDbMessages(INITIAL_MESSAGES)
    return INITIAL_MESSAGES
  } else {
    return getLocalKey('beneficial_messages', JSON.stringify(INITIAL_MESSAGES))
  }
}

export async function setDbMessages(messages: ChatMessage[]): Promise<void> {
  if (isLiveDb) {
    await runKvCommand(['set', 'beneficial_messages', JSON.stringify(messages)])
  } else {
    setLocalKey('beneficial_messages', messages)
  }
}

export async function addDbMessage(message: Omit<ChatMessage, 'id' | 'timestamp'>): Promise<ChatMessage> {
  const messages = await getDbMessages()
  const msg: ChatMessage = {
    ...message,
    id: Math.random().toString(36).substring(2, 9),
    timestamp: new Date().toISOString()
  }
  messages.push(msg)
  await setDbMessages(messages)
  return msg
}
