'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight, ClipboardCheck } from 'lucide-react'
import Link from 'next/link'

export function CTAStrip() {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to Launch Your Vision?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
            Whether you're building a new venture or integrating emerging technology into an existing organization, we help you move from ideas to systems that work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <Link href="/book-consultation">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Strategy Call
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white/20 text-white hover:bg-white/10 hover:text-white" asChild>
              <Link href="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white/20 text-white hover:bg-white/10 hover:text-white" asChild>
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
