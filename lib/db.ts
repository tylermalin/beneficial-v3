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

const INITIAL_CLIENTS: ClientProfile[] = []
const INITIAL_MESSAGES: ChatMessage[] = []

const KV_URL = process.env.KV_REST_API_URL
const KV_TOKEN = process.env.KV_REST_API_TOKEN

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
