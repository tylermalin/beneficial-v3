"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { Menu, X } from "lucide-react"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { WordmarkGlyph } from "@/components/ui/icons"

const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/#engagements", label: "Engagements" },
  { href: "/products", label: "Products" },
  { href: "/membership", label: "Membership" },
  { href: "/resources", label: "Resources" },
  { href: "/portal", label: "Client Portal" },
]


export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const navBg = useTransform(scrollY, [0, 80], [0, 0.92])

  useEffect(() => {
    return scrollY.on('change', (v) => setScrolled(v > 30))
  }, [scrollY])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        style={{ opacity: navBg }}
        className="absolute inset-0 bg-cream backdrop-blur-xl border-b border-rule pointer-events-none"
      />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="group flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-sienna"
            >
              <WordmarkGlyph size={24} />
            </motion.div>
            <span className="font-serif text-xl sm:text-[1.35rem] text-forest tracking-tight group-hover:text-sienna transition-colors duration-500">
              Beneficial Technology
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-9">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm text-slate-ink hover:text-forest transition-colors"
              >
                <span className="relative">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-sienna scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </span>
              </Link>
            ))}
            <MagneticButton href="https://cal.com/beneficialtech" external size="sm" variant="forest">
              Book a call
            </MagneticButton>
          </div>

          <button
            className="md:hidden text-forest relative z-10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-cream border-b border-rule overflow-hidden"
          >
            <div className="container mx-auto px-6 py-7 space-y-5">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    className="block font-serif text-2xl text-forest hover:text-sienna transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-3"
              >
                <a
                  href="https://cal.com/beneficialtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-forest text-cream px-5 py-3 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Book a call ↗
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
