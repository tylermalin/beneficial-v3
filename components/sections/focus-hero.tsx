'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function FocusHero() {
  return (
    <section className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Focus Areas
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            We specialize in the legal engineering challenges of tomorrow's most transformative technologies. Our expertise spans four critical domains where innovation meets regulation.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Explore Our Expertise
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
