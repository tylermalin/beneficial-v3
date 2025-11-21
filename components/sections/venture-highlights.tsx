'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const ventures = [
  {
    name: 'NeuralFlow',
    tagline: 'AI-Powered Legal Document Analysis',
    category: 'Artificial Intelligence',
    status: 'Series A',
    description: 'Revolutionary AI platform that automates legal document review and analysis, reducing review time by 90% while improving accuracy.',
    metrics: ['$2.5M ARR', '150+ Enterprise Clients', '99.7% Accuracy Rate']
  },
  {
    name: 'MoonKit',
    tagline: 'Decentralized Space Commerce Platform',
    category: 'Deep Science',
    status: 'Seed',
    description: 'Building the legal and financial infrastructure for commercial space activities, from satellite deployment to asteroid mining rights.',
    metrics: ['$500K MRR', '12 Space Partners', '3 Regulatory Approvals']
  },
  {
    name: 'FusionGrid',
    tagline: 'Next-Gen Energy Trading Protocol',
    category: 'Energy Transition',
    status: 'Pre-Seed',
    description: 'Blockchain-based energy trading platform enabling peer-to-peer renewable energy transactions with automated compliance.',
    metrics: ['$100K TVL', '50+ Energy Producers', '5 Pilot Programs']
  },
  {
    name: 'ChainGuard',
    tagline: 'DeFi Security & Compliance Suite',
    category: 'Blockchain & DeFi',
    status: 'Series A',
    description: 'Comprehensive security and compliance platform for DeFi protocols, providing real-time monitoring and regulatory reporting.',
    metrics: ['$10B+ Protected', '200+ Protocols', '24/7 Monitoring']
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
            Our portfolio companies are pushing the boundaries of what's possible at the intersection of technology and law.
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
