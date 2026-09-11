// The portal is offline until it has server-side authentication and authorization.

export type AuthSession = {
  role: 'admin' | 'client'
  clientId?: string
  email: string
}

export async function loginAdmin(..._args: unknown[]): Promise<boolean> {
  return false
}

export async function loginClient(..._args: unknown[]): Promise<string | null> {
  return null
}

export function logout(): void {}

export function getCurrentSession(): AuthSession | null {
  return null
}

export function isAdminAuthenticated(): boolean {
  return false
}

export function isClientAuthenticated(..._args: unknown[]): boolean {
  return false
}
