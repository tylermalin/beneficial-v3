'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Building2, Lightbulb, TrendingUp } from 'lucide-react'

const studioModels = [
  {
    icon: Building2,
    title: 'Venture Studio',
    description: 'We build companies from the ground up, providing product support, strategic guidance, and operational execution to turn ambitious ideas into real, working businesses. Our studio includes ventures we develop internally, as well as select partner companies we fund or support through reduced-cost services.',
    features: ['Venture & Product Formation', 'IP & Technology Strategy', 'Governance & Operating Design', 'Capital Structure & Growth Planning']
  },
  {
    icon: Lightbulb,
    title: 'Innovation Lab',
    description: 'Our research and development arm explores emerging technologies, markets, and system-level opportunities across AI, blockchain, and deep tech. The Innovation Lab supports both studio ventures and client teams by testing ideas early and reducing execution risk.',
    features: ['Technology Research', 'Market & Ecosystem Analysis', 'Systems & Risk Exploration', 'Prototype Development']
  },
  {
    icon: TrendingUp,
    title: 'Strategic Capital',
    description: 'We provide strategic investment and hands-on advisory support to teams building technology with long-term value. Capital is aligned with execution—often paired with direct support, shared infrastructure, and access to partners.',
    features: ['Strategic Investment', 'Advisory & Execution Support', 'Network Access', 'Growth Acceleration']
  }
]

export function StudioModel() {
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
            Our Studio Model
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive approach to building and supporting beneficial technologies through venture creation, strategic services, and aligned capital.
            We work across internal studio ventures and external clients—from startups to established organizations—helping teams develop, deploy, and scale new technology responsibly.
            <br /><br />
            We measure success by what ships, not what sounds impressive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {studioModels.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <model.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{model.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {model.description}
                  </p>
                  
                  {model.title === 'Venture Studio' && (
                    <p className="text-sm font-medium text-primary mb-4 italic">
                      We build alongside founders, not above them.
                    </p>
                  )}
                  
                  <ul className="space-y-2">
                    {model.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
