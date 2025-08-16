'use client'

import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'

export function ContactHero() {
  return (
    <section className="pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <MessageSquare className="h-8 w-8 text-primary" />
            <span className="text-primary font-semibold">Contact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Let's Build the Future Together
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're launching a breakthrough technology, navigating complex regulations, or building the next unicorn, our team is here to help you succeed.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
