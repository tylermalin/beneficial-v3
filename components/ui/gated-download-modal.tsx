'use client'

import { useEffect, useRef, useState, useTransition } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { ArrowDiagonalIcon } from './icons'
import {
  submitResourceDownload,
  type ResourceDownloadState,
} from '@/lib/actions/resource-download'

type Resource = {
  slug: string
  title: string
  subtitle: string
  url: string
}

type Props = {
  open: boolean
  onClose: () => void
  resource: Resource
}

const initialState: ResourceDownloadState = { ok: false }

export function GatedDownloadModal({ open, onClose, resource }: Props) {
  const [state, setState] = useState<ResourceDownloadState>(initialState)
  const [pending, startTransition] = useTransition()
  const closeRef = useRef<HTMLButtonElement>(null)
  const linkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [open, onClose])

  useEffect(() => {
    if (state.ok && state.url) {
      linkRef.current?.click()
    }
  }, [state.ok, state.url])

  function reset() {
    setState(initialState)
    onClose()
  }

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await submitResourceDownload(state, formData)
      setState(result)
    })
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gated-download-title"
        >
          <motion.div
            className="absolute inset-0 bg-forest/70 backdrop-blur-md"
            onClick={reset}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-2xl bg-cream border border-rule shadow-2xl overflow-hidden"
          >
            <button
              ref={closeRef}
              onClick={reset}
              className="absolute top-4 right-4 z-10 p-2 text-slate-ink hover:text-forest transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {!state.ok ? (
              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-sienna" />
                  <span className="text-xs uppercase tracking-[0.22em] text-sienna font-medium">
                    Field guide
                  </span>
                </div>
                <h2
                  id="gated-download-title"
                  className="font-serif text-2xl sm:text-3xl text-forest tracking-tight leading-[1.15]"
                >
                  {resource.title}
                </h2>
                <p className="mt-3 text-sm text-slate-ink leading-relaxed">
                  {resource.subtitle}
                </p>

                <form
                  action={handleSubmit}
                  className="mt-8 space-y-5"
                  noValidate
                >
                  <input type="hidden" name="resourceSlug" value={resource.slug} />
                  <input type="hidden" name="resourceTitle" value={resource.title} />
                  <input type="hidden" name="resourceUrl" value={resource.url} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field
                      label="First name"
                      name="firstName"
                      autoComplete="given-name"
                      error={state.errors?.firstName}
                      required
                    />
                    <Field
                      label="Last name"
                      name="lastName"
                      autoComplete="family-name"
                      error={state.errors?.lastName}
                      required
                    />
                  </div>
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    error={state.errors?.email}
                    required
                  />
                  <Field
                    label="Company (optional)"
                    name="company"
                    autoComplete="organization"
                    error={state.errors?.company}
                  />

                  <label className="flex items-start gap-3 cursor-pointer group pt-2">
                    <input
                      type="checkbox"
                      name="consent"
                      className="mt-1 h-4 w-4 accent-forest cursor-pointer shrink-0"
                      required
                    />
                    <span className="text-sm text-slate-ink leading-relaxed group-hover:text-forest transition-colors">
                      I agree to receive occasional updates from Beneficial Technology.
                      Unsubscribe anytime.
                    </span>
                  </label>
                  {state.errors?.consent && (
                    <p className="text-xs text-red-700 -mt-2">{state.errors.consent}</p>
                  )}

                  <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button
                      type="submit"
                      disabled={pending}
                      className="group inline-flex items-center gap-2 bg-forest text-cream px-6 py-3 text-sm font-medium hover:bg-forest-deep transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {pending ? 'Sending…' : 'Get the PDF'}
                      <span className="inline-flex group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        <ArrowDiagonalIcon size={16} />
                      </span>
                    </button>
                    <p className="text-xs text-slate-soft leading-relaxed max-w-sm">
                      We&apos;ll send the PDF immediately and keep your details private.
                      No spam.
                    </p>
                  </div>

                  {state.errors?.form && (
                    <p className="text-sm text-red-700">{state.errors.form}</p>
                  )}
                </form>
              </div>
            ) : (
              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8 bg-sienna" />
                  <span className="text-xs uppercase tracking-[0.22em] text-sienna font-medium">
                    On its way
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-forest tracking-tight leading-[1.15]">
                  Your download is starting.
                </h2>
                <p className="mt-4 text-base text-slate-ink leading-relaxed">
                  If it doesn&apos;t open automatically, click below.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    ref={linkRef}
                    href={state.url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-forest text-cream px-6 py-3 text-sm font-medium hover:bg-forest-deep transition-colors"
                  >
                    Download the PDF
                    <span className="inline-flex group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      <ArrowDiagonalIcon size={16} />
                    </span>
                  </a>
                  <button
                    onClick={reset}
                    className="text-sm text-slate-ink hover:text-forest transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Field({
  label,
  name,
  type = 'text',
  autoComplete,
  error,
  required,
}: {
  label: string
  name: string
  type?: string
  autoComplete?: string
  error?: string
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="block text-[10px] uppercase tracking-[0.18em] text-slate-soft font-medium mb-1.5">
        {label}
      </span>
      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        required={required}
        className="w-full bg-transparent border-b border-rule px-0 py-2 text-base text-forest placeholder:text-slate-soft focus:outline-none focus:border-sienna transition-colors"
      />
      {error && <span className="block mt-1 text-xs text-red-700">{error}</span>}
    </label>
  )
}
