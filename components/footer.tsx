'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { WordmarkGlyph } from '@/components/ui/icons'

export function Footer() {
  return (
    <footer className="bg-footer-bg border-t border-line-hairline">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="text-lime-400">
                <WordmarkGlyph size={20} />
              </span>
              <span className="text-lg font-light tracking-[-0.02em] text-ink">
                Beneficial Technology
              </span>
            </Link>
            <p className="mt-5 max-w-measure text-[15px] leading-[1.6] text-body">
              Strategy and engineering for builders at the regulated frontier.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href="https://cal.com/beneficialtech"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-sm text-ink"
              >
                <span className="border-b border-line-accent pb-0.5">cal.com/beneficialtech</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-obsidian-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="mailto:tyler@beneficial.technology"
                className="font-mono text-sm text-faint transition-colors hover:text-ink"
              >
                tyler@beneficial.technology
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="eyebrow mb-4 text-faint">Site</div>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="text-body transition-colors hover:text-lime-400">Home</Link></li>
              <li><Link href="/#engagements" className="text-body transition-colors hover:text-lime-400">Engagements</Link></li>
              <li><Link href="/resources" className="text-body transition-colors hover:text-lime-400">Resources</Link></li>
              <li><Link href="/about" className="text-body transition-colors hover:text-lime-400">About</Link></li>
              <li><Link href="/beneficial-technology-services.pdf" className="text-body transition-colors hover:text-lime-400">Service sheet (PDF)</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="eyebrow mb-4 text-faint">Important</div>
            <p className="max-w-measure text-[13px] leading-[1.6] text-faint">
              Beneficial Technology is a Delaware limited liability company providing strategic and structural consulting services. We are not a law firm and do not provide legal advice. For any matter requiring legal advice or representation, you&apos;ll work with an attorney you separately engage.
            </p>
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-line-divider" />

        <div className="mt-8 flex flex-col justify-between gap-4 text-xs text-faint sm:flex-row">
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="transition-colors hover:text-ink">Privacy</Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-ink">Terms</Link>
            <Link href="/disclaimer" className="transition-colors hover:text-ink">Disclaimer</Link>
          </div>
          <div>© {new Date().getFullYear()} Beneficial Technology, LLC · Delaware · Honolulu</div>
        </div>
      </div>
    </footer>
  )
}
