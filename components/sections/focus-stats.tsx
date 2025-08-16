'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

const stats = [
  {
    number: '500+',
    label: 'Regulatory Frameworks Navigated',
    description: 'Across 50+ jurisdictions worldwide'
  },
  {
    number: '$10B+',
    label: 'In Compliant Transactions',
    description: 'Structured and executed successfully'
  },
  {
    number: '95%',
    label: 'Regulatory Approval Rate',
    description: 'For our client applications'
  },
  {
    number: '24/7',
    label: 'Global Coverage',
    description: 'With offices in key regulatory hubs'
  }
]

export function FocusStats() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Proven Track Record
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our expertise is backed by measurable results across all focus areas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
