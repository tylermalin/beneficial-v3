'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const ventures = [
  {
    name: 'NeuralFlow',
    tagline: 'AI-Powered Document Intelligence',
    category: 'Artificial Intelligence',
    status: 'Series A',
    description: 'An AI platform built to handle complex document workflows at enterprise scale—quietly improving speed, accuracy, and reliability where it matters most.',
    metrics: ['Used by 150+ enterprise teams', 'Trusted for mission-critical workflows', '99.7% Accuracy']
  },
  {
    name: 'MoonKit',
    tagline: 'Space Infrastructure Platform',
    category: 'Deep Science',
    status: 'Seed',
    description: 'Building the tools and systems that make commercial space operations practical, coordinated, and scalable.',
    metrics: ['Trusted by industry partners', 'Supporting active space missions', '3 Regulatory Approvals']
  },
  {
    name: 'FusionGrid',
    tagline: 'Next-Generation Energy Trading Platform',
    category: 'Energy Transition',
    status: 'Pre-Seed',
    description: 'Modern market infrastructure designed for distributed renewable energy and real-world deployment.',
    metrics: ['Working with live energy producers', 'Running active pilot programs', '5 Pilot Programs']
  },
  {
    name: 'ChainGuard',
    tagline: 'Monitoring & Security for Digital Platforms',
    category: 'Blockchain & Digital Systems',
    status: 'Series A',
    description: 'Always-on visibility and protection for complex digital systems—designed to catch issues before they become failures.',
    metrics: ['Supporting hundreds of live platforms', '24/7 monitoring', '200+ Protocols']
  }
]

export function VentureHighlights() {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Venture Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Some of the companies we've built and supported.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{venture.name}</h3>
                      <p className="text-muted-foreground">{venture.tagline}</p>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      {venture.status}
                    </Badge>
                  </div>
                  
                  <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                    {venture.category}
                  </Badge>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {venture.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {venture.metrics.map((metric) => (
                      <div key={metric} className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="text-sm font-medium">{metric}</div>
                      </div>
                    ))}
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
