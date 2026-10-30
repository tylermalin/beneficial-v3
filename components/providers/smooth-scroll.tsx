'use client'

import { ReactNode, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // The homepage runs the scroll-craft worldflight engine, which drives off
    // native scroll. Lenis would hijack it, so skip smooth-scroll on "/".
    if (pathname === '/') return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [pathname])

  return <>{children}</>
}
