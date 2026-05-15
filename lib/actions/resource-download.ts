'use server'

import { z } from 'zod'

const schema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(80),
  lastName: z.string().trim().min(1, 'Last name is required').max(80),
  email: z.string().trim().toLowerCase().email('Please enter a valid email'),
  company: z.string().trim().max(120).optional().default(''),
  consent: z.literal('on', {
    errorMap: () => ({ message: 'Please agree to receive updates' }),
  }),
  resourceSlug: z.string().min(1).max(80),
  resourceTitle: z.string().min(1).max(160),
  resourceUrl: z.string().min(1).max(200),
})

export type ResourceDownloadState = {
  ok: boolean
  url?: string
  errors?: Partial<Record<keyof z.infer<typeof schema> | 'form', string>>
}

const ML_API = 'https://connect.mailerlite.com/api'

export async function submitResourceDownload(
  _prev: ResourceDownloadState,
  formData: FormData
): Promise<ResourceDownloadState> {
  const parsed = schema.safeParse(Object.fromEntries(formData.entries()))

  if (!parsed.success) {
    const errors: ResourceDownloadState['errors'] = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof z.infer<typeof schema>
      if (!errors[key]) errors[key] = issue.message
    }
    return { ok: false, errors }
  }

  const {
    firstName,
    lastName,
    email,
    company,
    resourceSlug,
    resourceTitle,
    resourceUrl,
  } = parsed.data

  const apiKey = process.env.MAILERLITE_API_KEY
  const groupId = process.env.MAILERLITE_GROUP_ID
  const submittedAt = new Date().toISOString()

  if (!apiKey) {
    console.log('[resource-download] Lead captured (MailerLite not configured):', {
      firstName,
      lastName,
      email,
      company,
      resourceSlug,
      submittedAt,
    })
    return { ok: true, url: resourceUrl }
  }

  try {
    const body = {
      email,
      fields: {
        name: `${firstName} ${lastName}`.trim(),
        last_name: lastName,
        company: company || undefined,
        last_resource_downloaded: resourceTitle,
        last_resource_slug: resourceSlug,
      },
      groups: groupId ? [groupId] : undefined,
      status: 'active' as const,
      ip_address: undefined,
      opted_in_at: submittedAt.slice(0, 19).replace('T', ' '),
      optin_ip: undefined,
    }

    const res = await fetch(`${ML_API}/subscribers`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('[resource-download] MailerLite error:', res.status, text)
    }
  } catch (err) {
    console.error('[resource-download] MailerLite request failed:', err)
  }

  return { ok: true, url: resourceUrl }
}
