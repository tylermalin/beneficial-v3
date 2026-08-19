"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/obsidian"
import { WordmarkGlyph } from "@/components/ui/icons"

const navItems = [
  { href: "/#services", label: "Services" },
  { href: "/#engagements", label: "Engagements" },
  { href: "/products", label: "Products" },
  { href: "/membership", label: "Membership" },
  { href: "/resources", label: "Resources" },
  { href: "/portal", label: "Client portal" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-line-hairline backdrop-blur-[16px] bg-[rgba(7,7,7,.72)]">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex h-[68px] items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <span className="text-lime-400">
              <WordmarkGlyph size={22} />
            </span>
            <span className="text-[15px] font-light tracking-[-0.02em] text-ink">
              Beneficial Technology
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-[13px] text-faint transition-colors duration-150 ease-obsidian-out hover:text-ink"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-lime-400 transition-transform duration-200 ease-obsidian-out group-hover:scale-x-100" />
              </Link>
            ))}
            <Button
              href="https://cal.com/beneficialtech"
              external
              variant="primary"
              size="sm"
            >
              Book a call
            </Button>
          </div>

          <button
            className="relative z-10 text-ink md:hidden"
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
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-line-hairline bg-[rgba(7,7,7,.92)] backdrop-blur-[16px] md:hidden"
          >
            <div className="mx-auto max-w-[1200px] space-y-5 px-6 py-7">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-2xl font-light tracking-[-0.02em] text-ink"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3">
                <Button
                  href="https://cal.com/beneficialtech"
                  external
                  variant="primary"
                  size="md"
                >
                  Book a call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
