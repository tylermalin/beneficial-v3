"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/obsidian"

type NavItem = { href?: string; label: string; children?: { href: string; label: string }[] }

const navItems: NavItem[] = [
  { href: "/work-with-us", label: "Work With Us" },
  {
    label: "Expertise",
    children: [
      { href: "/expertise/legal-engineering", label: "Legal Engineering" },
      { href: "/expertise/ai-automation", label: "AI Automation" },
      { href: "/expertise/rwa-tokenization", label: "RWA Tokenization" },
      { href: "/expertise/capital-formation", label: "Capital Formation" },
    ],
  },
  { href: "/work", label: "Work" },
  { href: "/products", label: "Products" },
  { href: "/tokenization", label: "Tokenization" },
  { href: "/membership", label: "Membership" },
  { href: "/resources", label: "Resources" },
  { href: "/portal/login", label: "Portal Login" },
]

const linkClass =
  "group relative text-[13px] text-faint transition-colors duration-150 ease-obsidian-out hover:text-ink"
const underline =
  "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-lime-400 transition-transform duration-200 ease-obsidian-out group-hover:scale-x-100"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [expExpanded, setExpExpanded] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-line-hairline backdrop-blur-[16px] bg-[rgba(7,7,7,.72)]">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex h-[68px] items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <Image src="/beneficial-mark.png" alt="Beneficial Technology" width={28} height={28} priority className="h-7 w-7 object-contain" />
            <span className="hidden text-[18px] font-light tracking-[-0.02em] text-ink sm:inline">Beneficial Technology</span>
          </Link>

          <div className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <button className="flex items-center gap-1 text-[13px] text-faint transition-colors hover:text-ink">
                    {item.label}
                    <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 opacity-0 transition-[opacity] duration-150 group-hover:visible group-hover:opacity-100">
                    <div className="overflow-hidden rounded-lg border border-line-hairline bg-[rgba(10,10,10,.96)] backdrop-blur-[16px]">
                      {item.children.map((c) => (
                        <Link key={c.href} href={c.href} className="block px-4 py-3 text-[13px] text-faint transition-colors hover:bg-[rgba(255,255,255,.04)] hover:text-ink">
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.href} href={item.href!} className={linkClass}>
                  {item.label}
                  <span className={underline} />
                </Link>
              )
            )}
            <Button href="https://cal.com/beneficialtech" external variant="primary" size="sm">Book a call</Button>
          </div>

          <button className="relative z-10 text-ink lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
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
            className="overflow-hidden border-b border-line-hairline bg-[rgba(7,7,7,.92)] backdrop-blur-[16px] lg:hidden"
          >
            <div className="mx-auto max-w-[1200px] space-y-4 px-6 py-7">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      className="flex items-center gap-1.5 text-2xl font-light tracking-[-0.02em] text-ink"
                      onClick={() => setExpExpanded((v) => !v)}
                    >
                      {item.label}
                      <ChevronDown className={`h-5 w-5 transition-transform ${expExpanded ? "rotate-180" : ""}`} />
                    </button>
                    {expExpanded && (
                      <div className="mt-3 flex flex-col gap-3 border-l border-line-hairline pl-4">
                        {item.children.map((c) => (
                          <Link key={c.href} href={c.href} className="block text-[17px] text-faint" onClick={() => setIsOpen(false)}>
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={item.href} href={item.href!} className="block text-2xl font-light tracking-[-0.02em] text-ink" onClick={() => setIsOpen(false)}>
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-3">
                <Button href="https://cal.com/beneficialtech" external variant="primary" size="md">Book a call</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
