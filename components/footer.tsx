'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Twitter, Linkedin, Github, Mail } from 'lucide-react'
import { submitNewsletterSubscription } from '@/lib/actions'
import { useState } from 'react'

const footerLinks = {
  Studio: [
    { href: '/studio', label: 'Studio Model' },
    { href: '/focus', label: 'Focus Areas' },
    { href: '/ventures', label: 'Ventures' },
    { href: '/about', label: 'About Us' }
  ],
  Services: [
    { href: '/services/legal-engineering', label: 'Legal Engineering' },
    { href: '/services/ai-blockchain-consulting', label: 'AI and Blockchain Consulting Services' },
    { href: '/services/strategic-capital', label: 'Strategic Capital' },
    { href: '/services/regulatory-advisory', label: 'Regulatory Advisory' }
  ],
  Legal: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
    { href: '/data-deletion', label: 'Data Deletion' },
    { href: '/disclaimer', label: 'Legal Disclaimer' }
  ]
}

const socialLinks = [
  { href: 'https://twitter.com/beneficial_tech', icon: Twitter, label: 'Twitter' },
  { href: 'https://linkedin.com/company/beneficial-technology', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://github.com/beneficial-tech', icon: Github, label: 'GitHub' },
  { href: 'mailto:hello@beneficial.technology', icon: Mail, label: 'Email' }
]

export function Footer() {
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [newsletterMessage, setNewsletterMessage] = useState<string | null>(null)

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <span className="font-bold text-xl">Beneficial Technology</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Legal engineering for the crypto-native future. Building, incubating, and accelerating breakthrough technologies.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-2">
              <h4 className="font-semibold">Stay Updated</h4>
              <form 
                action={async (formData: FormData) => {
                  setNewsletterStatus('loading')
                  const result = await submitNewsletterSubscription(formData)
                  if (result.success) {
                    setNewsletterStatus('success')
                    setNewsletterMessage(result.message)
                  } else {
                    setNewsletterStatus('error')
                    setNewsletterMessage(result.message)
                  }
                }}
                className="space-y-2"
              >
                <div className="flex gap-2">
                  <Input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email" 
                    className="max-w-xs"
                    required
                    disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                  />
                  <Button 
                    type="submit"
                    size="sm" 
                    className="bg-primary hover:bg-primary/90"
                    disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                  >
                    {newsletterStatus === 'loading' ? 'Subscribing...' : 
                     newsletterStatus === 'success' ? 'Subscribed!' : 'Subscribe'}
                  </Button>
                </div>
                {newsletterMessage && (
                  <p className={`text-xs ${newsletterStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {newsletterMessage}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Beneficial Technology. All rights reserved.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </Link>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-border mt-8 pt-8">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Legal Disclaimer:</strong> Beneficial Technology provides legal engineering and advisory services. This website does not constitute legal advice and should not be relied upon as such. All investments involve risk, including potential loss of principal. Past performance does not guarantee future results. Please consult with qualified legal and financial professionals before making any investment or business decisions.
          </p>
        </div>
      </div>
    </footer>
  )
}
