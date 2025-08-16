'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Lightbulb, Building2, TrendingUp, Rocket, ArrowRight } from 'lucide-react'

const processSteps = [
  {
    icon: Lightbulb,
    title: 'Ideation & Validation',
    description: 'We identify breakthrough technologies and validate market opportunities through rigorous analysis.',
    details: [
      'Technology scouting and evaluation',
      'Market opportunity assessment',
      'Regulatory landscape analysis',
      'Competitive intelligence'
    ]
  },
  {
    icon: Building2,
    title: 'Legal Foundation',
    description: 'Establish robust legal infrastructure and intellectual property protection from day one.',
    details: [
      'Entity formation and structure',
      'IP strategy and protection',
      'Regulatory compliance framework',
      'Founder and employee agreements'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Growth & Scale',
    description: 'Provide strategic capital and operational expertise to accelerate growth and market penetration.',
    details: [
      'Strategic funding rounds',
      'Partnership development',
      'Regulatory approvals',
      'International expansion'
    ]
  },
  {
    icon: Rocket,
    title: 'Market Leadership',
    description: 'Support ventures in achieving market leadership and sustainable competitive advantages.',
    details: [
      'IPO preparation',
      'Strategic acquisitions',
      'Global market expansion',
      'Industry standard setting'
    ]
  }
]

export function VenturesProcess() {
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
            Our Venture Building Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From initial concept to market leadership, we provide comprehensive support at every stage of the venture lifecycle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-2 text-left">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Build the Future?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you have a breakthrough technology or a bold vision, we're here to help you navigate the complex journey from concept to market leadership.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Your Venture Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
