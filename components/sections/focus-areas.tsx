'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Brain, Atom, Zap, Coins } from 'lucide-react'

const focusAreas = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Building and deploying AI systems that are useful, reliable, and ready for the real world.',
    subcategories: ['AI Product Strategy', 'Data & Model Readiness', 'System Oversight', 'Enterprise Deployment'],
    color: 'from-blue-500 to-purple-600'
  },
  {
    icon: Atom,
    title: 'Deep Science',
    description: 'Supporting advanced technical innovation as it moves from research into real-world systems.',
    subcategories: ['Quantum Computing', 'Biotechnology', 'Materials Science', 'Space Technology'],
    color: 'from-green-500 to-teal-600'
  },
  {
    icon: Zap,
    title: 'Energy Transition',
    description: 'Developing and scaling technologies that support a more resilient, sustainable energy system.',
    subcategories: ['Renewable Energy', 'Carbon Markets', 'Grid Technology', 'Energy Storage'],
    color: 'from-yellow-500 to-orange-600'
  },
  {
    icon: Coins,
    title: 'Blockchain & Digital Systems',
    description: 'Building digital infrastructure focused on real use cases, not speculation.',
    subcategories: ['Platforms & Protocols', 'Digital Assets', 'Smart Contracts', 'Network & DAO Operations'],
    color: 'from-primary to-red-600'
  }
]

export function FocusAreas() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Focus Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We focus on technologies with the potential to create meaningful, lasting impact.
            <br /><br />
            These are hard problems with real stakes. That's the point.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${area.color}`} />
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <area.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{area.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {area.subcategories.map((sub) => (
                      <Badge key={sub} variant="secondary" className="text-xs">
                        {sub}
                      </Badge>
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
