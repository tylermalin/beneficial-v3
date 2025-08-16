'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Users } from 'lucide-react'

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
            Engineering the Future of Law
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            We're not just lawyers—we're legal engineers, venture builders, and innovation catalysts. Our mission is to create the legal infrastructure that enables tomorrow's most ambitious technologies to thrive.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Meet Our Team
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
