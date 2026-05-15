'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { MouseEvent, useRef, useState } from 'react'
import { ArrowDiagonalIcon } from '@/components/ui/icons'
import { GatedDownloadModal } from '@/components/ui/gated-download-modal'
import type { Resource } from '@/lib/resources'

export function ResourceCard({ resource }: { resource: Resource }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const smx = useSpring(mx, { stiffness: 120, damping: 18 })
  const smy = useSpring(my, { stiffness: 120, damping: 18 })

  const rotateX = useTransform(smy, [0, 1], [2, -2])
  const rotateY = useTransform(smx, [0, 1], [-2, 2])
  const glowX = useTransform(smx, (v) => `${v * 100}%`)
  const glowY = useTransform(smy, (v) => `${v * 100}%`)

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }
  function handleLeave() {
    mx.set(0.5)
    my.set(0.5)
  }

  const isAvailable = resource.status === 'available'

  return (
    <>
      <motion.article
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          transformPerspective: 1400,
        }}
        whileHover={{ y: -6 }}
        transition={{ y: { duration: 0.4 } }}
        className="group relative bg-cream border-t-2 border-forest"
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at ${glowX.get()} ${glowY.get()}, hsl(var(--accent-sienna) / 0.15), transparent 55%)`,
          }}
        />

        <div className="relative p-8 sm:p-10 lg:p-12 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] uppercase tracking-[0.22em] text-sienna font-medium">
                {resource.format}
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-slate-soft">
                {resource.size}
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest tracking-tight leading-[1.05]">
              {resource.title}
            </h3>
            <p className="mt-5 text-base sm:text-lg text-slate-ink leading-snug max-w-2xl">
              {resource.subtitle}
            </p>

            <div className="mt-7 flex items-center gap-3 text-sm text-slate-soft">
              <span className="text-xs uppercase tracking-[0.18em]">By</span>
              <span className="text-forest font-serif italic">{resource.author}</span>
            </div>
          </div>

          <div className="lg:col-span-5 lg:border-l lg:border-rule lg:pl-12 flex flex-col">
            <p className="font-serif italic text-base text-slate-ink leading-relaxed">
              {resource.excerpt}
            </p>

            <div className="mt-auto pt-8 flex flex-col items-start gap-4">
              {isAvailable ? (
                <button
                  onClick={() => setOpen(true)}
                  className="group/cta inline-flex items-center gap-2 bg-forest text-cream px-6 py-3 text-sm font-medium hover:bg-forest-deep transition-colors"
                >
                  Download the PDF
                  <span className="inline-flex group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform">
                    <ArrowDiagonalIcon size={16} />
                  </span>
                </button>
              ) : (
                <span className="inline-flex items-center px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-soft border border-rule">
                  Coming soon
                </span>
              )}
              <p className="text-xs text-slate-soft leading-relaxed max-w-xs">
                Free download. Requires email so we can send you future field guides.
              </p>
            </div>
          </div>
        </div>
      </motion.article>

      <GatedDownloadModal
        open={open}
        onClose={() => setOpen(false)}
        resource={{
          slug: resource.slug,
          title: resource.title,
          subtitle: resource.subtitle,
          url: resource.url,
        }}
      />
    </>
  )
}
