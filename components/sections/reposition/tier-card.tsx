'use client'

import { MouseEvent, ReactNode, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

type Props = {
  featured?: boolean
  children: ReactNode
}

export function TierCard({ featured, children }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const smx = useSpring(mx, { stiffness: 140, damping: 18 })
  const smy = useSpring(my, { stiffness: 140, damping: 18 })

  const rotateX = useTransform(smy, [0, 1], [3.5, -3.5])
  const rotateY = useTransform(smx, [0, 1], [-3.5, 3.5])
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

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transformPerspective: 1200,
      }}
      whileHover={{ y: -6 }}
      transition={{ y: { duration: 0.4 } }}
      className={`relative flex flex-col p-8 lg:p-10 border-t-2 will-change-transform ${
        featured
          ? 'bg-forest text-cream border-sienna'
          : 'bg-cream text-forest border-forest'
      }`}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{
          background: featured
            ? `radial-gradient(circle at ${glowX.get()} ${glowY.get()}, hsl(var(--accent-sienna) / 0.25), transparent 50%)`
            : `radial-gradient(circle at ${glowX.get()} ${glowY.get()}, hsl(var(--accent-sienna) / 0.18), transparent 50%)`,
        }}
        animate={{ opacity: [0, 1] }}
        whileHover={{ opacity: 1 }}
      />
      <div style={{ transform: 'translateZ(20px)' }} className="relative flex flex-col h-full">
        {children}
      </div>
    </motion.div>
  )
}
