'use client'

import { ReactNode, useRef, MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'
import { ArrowDiagonalIcon } from './icons'

type Variant = 'forest' | 'cream' | 'ghost'

const variantClass: Record<Variant, string> = {
  forest: 'bg-forest text-cream hover:bg-forest-deep',
  cream: 'bg-cream text-forest hover:bg-sand',
  ghost: 'bg-transparent text-forest border border-rule hover:border-forest',
}

type Props = {
  href: string
  children: ReactNode
  variant?: Variant
  external?: boolean
  className?: string
  withArrow?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const sizeClass: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
}

export function MagneticButton({
  href,
  children,
  variant = 'forest',
  external,
  className = '',
  withArrow = true,
  size = 'md',
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const xs = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const ys = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  const arrowX = useTransform(xs, (v) => v * 0.6)
  const arrowY = useTransform(ys, (v) => v * 0.6)

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX * 0.3)
    y.set(relY * 0.4)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  const Inner = (
    <motion.span
      style={{ x: xs, y: ys }}
      className={`relative inline-flex items-center font-medium tracking-tight transition-colors ${sizeClass[size]} ${variantClass[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {withArrow && (
        <motion.span style={{ x: arrowX, y: arrowY }} className="relative z-10 inline-flex">
          <ArrowDiagonalIcon size={16} />
        </motion.span>
      )}
    </motion.span>
  )

  if (external) {
    return (
      <a
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex"
      >
        {Inner}
      </a>
    )
  }

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-flex"
    >
      {Inner}
    </Link>
  )
}
