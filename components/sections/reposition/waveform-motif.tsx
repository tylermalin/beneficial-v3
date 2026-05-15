'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { MouseEvent, useRef } from 'react'

export function WaveformMotif() {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const sx = useSpring(mx, { stiffness: 100, damping: 22, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 100, damping: 22, mass: 0.6 })

  const halo1X = useTransform(sx, (v) => `${v * 100}%`)
  const halo1Y = useTransform(sy, (v) => `${v * 100}%`)

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
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative aspect-square w-full max-w-md ml-auto"
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl opacity-60"
        style={{
          background: `radial-gradient(circle at ${halo1X.get()}% ${halo1Y.get()}%, hsl(var(--accent-sienna) / 0.35), transparent 55%)`,
          left: halo1X as unknown as string,
          top: halo1Y as unknown as string,
          translateX: '-50%',
          translateY: '-50%',
          width: '60%',
          height: '60%',
        }}
      />

      <motion.svg
        viewBox="0 0 400 400"
        className="relative w-full h-full"
        initial="hidden"
        animate="show"
      >
        <defs>
          <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--forest))" stopOpacity="0.95" />
            <stop offset="50%" stopColor="hsl(var(--accent-sienna))" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(var(--forest))" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--forest) / 0.6)" />
            <stop offset="100%" stopColor="hsl(var(--accent-sienna) / 0.4)" />
          </linearGradient>
        </defs>

        {[180, 145, 110, 75].map((r, i) => (
          <motion.circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth={i === 0 ? 0.5 : 0.4}
            strokeOpacity={0.45 - i * 0.07}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.4 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            strokeDasharray={i === 1 ? '3 4' : undefined}
          />
        ))}

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {[0, 45, 90, 135].map((angle, i) => (
            <motion.line
              key={angle}
              x1="200"
              y1="200"
              x2={200 + 180 * Math.cos((angle * Math.PI) / 180)}
              y2={200 + 180 * Math.sin((angle * Math.PI) / 180)}
              stroke="hsl(var(--forest) / 0.18)"
              strokeWidth={0.4}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 0.9 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
          {[0, 45, 90, 135].map((angle) => (
            <motion.line
              key={`mirror-${angle}`}
              x1="200"
              y1="200"
              x2={200 - 180 * Math.cos((angle * Math.PI) / 180)}
              y2={200 - 180 * Math.sin((angle * Math.PI) / 180)}
              stroke="hsl(var(--forest) / 0.18)"
              strokeWidth={0.4}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </motion.g>

        <motion.path
          d="M 50 200 Q 90 130, 130 200 T 210 200 T 290 200 T 370 200"
          fill="none"
          stroke="url(#strokeGrad)"
          strokeWidth={1.5}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d="M 50 200 Q 90 270, 130 200 T 210 200 T 290 200 T 370 200"
          fill="none"
          stroke="hsl(var(--accent-sienna) / 0.55)"
          strokeWidth={1}
          strokeLinecap="round"
          strokeDasharray="2 3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.circle
          cx="200"
          cy="200"
          r="6"
          fill="hsl(var(--accent-sienna))"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="6"
          fill="none"
          stroke="hsl(var(--accent-sienna) / 0.6)"
          strokeWidth={1}
          initial={{ scale: 1, opacity: 0.7 }}
          animate={{ scale: [1, 2.6], opacity: [0.7, 0] }}
          transition={{ duration: 2.4, delay: 1.4, repeat: Infinity, repeatDelay: 0.5, ease: 'easeOut' }}
        />

        {[
          { x: 60, y: 60, label: 'TOKEN' },
          { x: 340, y: 80, label: 'SAFT' },
          { x: 340, y: 320, label: 'EU' },
          { x: 60, y: 320, label: 'US' },
        ].map((tag, i) => (
          <motion.g
            key={tag.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 + i * 0.12 }}
          >
            <circle cx={tag.x} cy={tag.y} r="2.2" fill="hsl(var(--forest) / 0.6)" />
            <text
              x={tag.x + 7}
              y={tag.y + 3}
              fontSize="8"
              fontFamily="Inter, sans-serif"
              fill="hsl(var(--slate-soft))"
              letterSpacing="0.12em"
            >
              {tag.label}
            </text>
          </motion.g>
        ))}
      </motion.svg>
    </div>
  )
}
