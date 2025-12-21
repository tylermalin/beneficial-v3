'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users, ClipboardCheck } from 'lucide-react'
import Link from 'next/link'

export function AboutHero() {
  return (
    <section className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Users className="h-8 w-8 text-primary" />
            <span className="text-primary font-semibold">About Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Building Tech That Matters
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Technology should do more than impress—it should work, scale, and make a real difference.
            <br /><br />
            Beneficial Technology helps teams build and deploy technologies that create lasting value. We work across AI, blockchain, energy, and frontier systems, supporting ventures from early ideas through real-world execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="#leadership-profile">
                Meet Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/tools/ai-readiness-diagnostic">
                <ClipboardCheck className="mr-2 h-5 w-5" />
                Assess Your AI Readiness
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
