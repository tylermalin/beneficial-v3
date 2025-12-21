'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Calendar, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export function FocusCTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Navigate Complex Regulations?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our specialized teams are ready to help you navigate the regulatory landscape in your focus area. Let's discuss your specific challenges and opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="/book-consultation">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services#request-proposal">
                <MessageSquare className="mr-2 h-5 w-5" />
                Discuss Your Project
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
