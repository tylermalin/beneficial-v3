'use server'

import { z } from 'zod'
import { Resend } from 'resend'

const schema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(80),
  lastName: z.string().trim().min(1, 'Last name is required').max(80),
  email: z.string().trim().toLowerCase().email('Please enter a valid email'),
  company: z.string().trim().max(120).optional().default(''),
  consent: z.literal('on', { errorMap: () => ({ message: 'Please agree to receive updates' }) }),
  resourceSlug: z.string().min(1).max(80),
  resourceTitle: z.string().min(1).max(160),
  resourceUrl: z.string().min(1).max(200),
})

export type ResourceDownloadState = {
  ok: boolean
  url?: string
  errors?: Partial<Record<keyof z.infer<typeof schema> | 'form', string>>
}

const LEADS_TO = 'tyler@beneficial.technology'
const LEADS_FROM = process.env.RESEND_FROM || 'Beneficial Technology <leads@beneficial.technology>'

export async function submitResourceDownload(
  _prev: ResourceDownloadState,
  formData: FormData
): Promise<ResourceDownloadState> {
  const raw = Object.fromEntries(formData.entries())
  const parsed = schema.safeParse(raw)

  if (!parsed.success) {
    const errors: ResourceDownloadState['errors'] = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof z.infer<typeof schema>
      if (!errors[key]) errors[key] = issue.message
    }
    return { ok: false, errors }
  }

  const { firstName, lastName, email, company, resourceSlug, resourceTitle, resourceUrl } = parsed.data

  const apiKey = process.env.RESEND_API_KEY
  const submittedAt = new Date().toISOString()

  if (apiKey) {
    try {
      const resend = new Resend(apiKey)
      await resend.emails.send({
        from: LEADS_FROM,
        to: LEADS_TO,
        replyTo: email,
        subject: `Resource download: ${resourceTitle} — ${firstName} ${lastName}`,
        text: [
          `${firstName} ${lastName} <${email}>${company ? ` · ${company}` : ''}`,
          ``,
          `Resource: ${resourceTitle}`,
          `Slug: ${resourceSlug}`,
          `Submitted: ${submittedAt}`,
          `Consented to updates: yes`,
        ].join('\n'),
      })
    } catch (err) {
      console.error('[resource-download] Resend failed:', err)
    }
  } else {
    console.log('[resource-download] Lead captured (Resend not configured):', {
      firstName,
      lastName,
      email,
      company,
      resourceSlug,
      submittedAt,
    })
  }

  return { ok: true, url: resourceUrl }
}
