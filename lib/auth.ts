// Client-side authentication helpers for Client Portal and Admin CRM
import { getDbClients } from './db'

export type AuthSession = {
  role: 'admin' | 'client'
  clientId?: string
  email: string
}

const ADMIN_EMAIL = 'tylermalin@gmail.com'
const ADMIN_PASSWORD = 'Admin2026!'

export async function loginAdmin(email: string, password: string): Promise<boolean> {
  if (typeof window === 'undefined') return false

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const session: AuthSession = { role: 'admin', email }
    localStorage.setItem('beneficial_session', JSON.stringify(session))
    return true
  }
  return false
}

export async function loginClient(email: string, password: string): Promise<string | null> {
  if (typeof window === 'undefined') return null

  const clients = await getDbClients()
  // Find a client profile matching email and password (stored dynamically)
  const client = clients.find(c => c.email.toLowerCase() === email.toLowerCase())
  
  if (client) {
    // Dynamic password check (fallback to 'beneficial' or company id if none set)
    const storedPassword = (client as any).password || 'beneficial'
    if (password === storedPassword) {
      const session: AuthSession = { role: 'client', clientId: client.id, email }
      localStorage.setItem('beneficial_session', JSON.stringify(session))
      return client.id
    }
  }
  return null
}

export function logout(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem('beneficial_session')
}

export function getCurrentSession(): AuthSession | null {
  if (typeof window === 'undefined') return null
  const data = localStorage.getItem('beneficial_session')
  if (!data) return null
  try {
    return JSON.parse(data)
  } catch {
    return null
  }
}

export function isAdminAuthenticated(): boolean {
  const session = getCurrentSession()
  return session?.role === 'admin'
}

export function isClientAuthenticated(clientId?: string): boolean {
  const session = getCurrentSession()
  if (session?.role === 'admin') return true // admin can inspect client portals
  if (session?.role === 'client') {
    if (clientId) return session.clientId === clientId
    return true
  }
  return false
}
