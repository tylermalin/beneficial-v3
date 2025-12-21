'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, ArrowRight } from 'lucide-react'

const processSteps = [
  {
    phase: 'Phase 1',
    title: 'Discovery & Validation',
    duration: '4–6 weeks',
    description: 'We start by pressure-testing the idea. Is the opportunity real? Can it be built? What stands in the way?',
    deliverables: [
      'Market & Opportunity Analysis',
      'Technical Feasibility Review',
      'Risk & Constraint Mapping',
      'Initial Go-to-Market Direction'
    ]
  },
  {
    phase: 'Phase 2',
    title: 'Foundation',
    duration: '6–8 weeks',
    description: 'With clarity in place, we help establish the structures needed to build and operate responsibly as the venture grows.',
    deliverables: [
      'Venture & Operating Structure',
      'IP & Technology Positioning',
      'Governance & Risk Framework',
      'Readiness for Build & Launch'
    ]
  },
  {
    phase: 'Phase 3',
    title: 'Product Development',
    duration: '12–16 weeks',
    description: 'We move into execution—building, testing, and preparing for real-world use.',
    deliverables: [
      'MVP or Initial Product Build',
      'Security & Reliability Review',
      'Systems Integration',
      'Beta or Pilot Program'
    ]
  },
  {
    phase: 'Phase 4',
    title: 'Market Launch',
    duration: '8–12 weeks',
    description: 'From first release to early scale, we support teams as they move into production and real customer use.',
    deliverables: [
      'Product Launch',
      'Early Customer & Partner Activation',
      'Operational Support',
      'Ongoing Advisory & Optimization'
    ]
  }
]

export function StudioProcess() {
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
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A practical, phased approach to venture building—designed to move teams from uncertainty to execution.
          </p>
        </motion.div>

        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div>
                      <Badge className="mb-4 bg-primary/10 text-primary">
                        {step.phase}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span className="font-medium">Duration: {step.duration}</span>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold mb-4">Key Deliverables</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.deliverables.map((deliverable) => (
                          <div key={deliverable} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                            <span className="text-sm">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {index < processSteps.length - 1 && (
                <div className="flex justify-center my-4">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
