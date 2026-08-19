'use client'

import { useEffect, useRef, useState, useTransition } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { ArrowDiagonalIcon } from './icons'
import { Button, Eyebrow } from './obsidian'
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
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gated-download-title"
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={reset}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-line-hairline bg-canvas shadow-depth"
          >
            <button
              ref={closeRef}
              onClick={reset}
              className="absolute right-4 top-4 z-10 p-2 text-faint transition-colors hover:text-ink"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {!state.ok ? (
              <div className="p-8 sm:p-12">
                <Eyebrow>Field guide</Eyebrow>
                <h2
                  id="gated-download-title"
                  className="mt-6 text-2xl font-light leading-[1.15] tracking-[-0.02em] text-ink sm:text-[28px]"
                >
                  {resource.title}
                </h2>
                <p className="mt-3 max-w-measure text-[15px] leading-[1.6] text-body">
                  {resource.subtitle}
                </p>

                <form action={handleSubmit} className="mt-8 space-y-5" noValidate>
                  <input type="hidden" name="resourceSlug" value={resource.slug} />
                  <input type="hidden" name="resourceTitle" value={resource.title} />
                  <input type="hidden" name="resourceUrl" value={resource.url} />

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="First name" name="firstName" autoComplete="given-name" error={state.errors?.firstName} required />
                    <Field label="Last name" name="lastName" autoComplete="family-name" error={state.errors?.lastName} required />
                  </div>
                  <Field label="Email" name="email" type="email" autoComplete="email" error={state.errors?.email} required />
                  <Field label="Company (optional)" name="company" autoComplete="organization" error={state.errors?.company} />

                  <label className="group flex cursor-pointer items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      name="consent"
                      className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-lime-400"
                      required
                    />
                    <span className="text-[13px] leading-relaxed text-body transition-colors group-hover:text-ink">
                      I agree to receive occasional updates from Beneficial Technology. Unsubscribe anytime.
                    </span>
                  </label>
                  {state.errors?.consent && (
                    <p className="-mt-2 text-xs text-red-400">{state.errors.consent}</p>
                  )}

                  <div className="flex flex-col items-start gap-4 pt-4 sm:flex-row sm:items-center">
                    <Button
                      type="submit"
                      variant="accent"
                      size="md"
                      disabled={pending}
                      icon={<ArrowDiagonalIcon size={16} />}
                    >
                      {pending ? 'Sending…' : 'Get the PDF'}
                    </Button>
                    <p className="max-w-sm text-xs leading-relaxed text-faint">
                      We&apos;ll send the PDF immediately and keep your details private. No spam.
                    </p>
                  </div>

                  {state.errors?.form && <p className="text-sm text-red-400">{state.errors.form}</p>}
                </form>
              </div>
            ) : (
              <div className="p-8 sm:p-12">
                <Eyebrow>On its way</Eyebrow>
                <h2 className="mt-6 text-2xl font-light leading-[1.15] tracking-[-0.02em] text-ink sm:text-[28px]">
                  Your download is starting.
                </h2>
                <p className="mt-4 text-[15px] leading-[1.6] text-body">
                  If it doesn&apos;t open automatically, click below.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a ref={linkRef} href={state.url} download target="_blank" rel="noopener noreferrer" className="hidden" aria-hidden />
                  <Button
                    href={state.url}
                    external
                    variant="accent"
                    size="md"
                    icon={<ArrowDiagonalIcon size={16} />}
                  >
                    Download the PDF
                  </Button>
                  <button onClick={reset} className="text-sm text-faint transition-colors hover:text-ink">
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
      <span className="eyebrow mb-2 block text-faint">{label}</span>
      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-lg border border-line-hairline surface-flat px-4 py-2.5 text-[15px] text-ink placeholder:text-faint transition-[border-color,box-shadow] duration-200 ease-obsidian-out focus:border-line-accent focus:outline-none focus:ring-[3px] focus:ring-[rgba(204,255,0,.25)]"
      />
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  )
}
