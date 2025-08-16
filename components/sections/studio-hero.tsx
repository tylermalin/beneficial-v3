'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Building2, Lightbulb, TrendingUp } from 'lucide-react'

export function StudioHero() {
  return (
    <section className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our Studio Model
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We don't just invest in the future—we engineer it. Our three-pillar approach combines legal expertise, strategic capital, and operational excellence to build breakthrough ventures from the ground up.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Building With Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Building2,
              title: 'Build',
              description: 'From ideation to incorporation, we provide the legal foundation and operational infrastructure needed to transform breakthrough concepts into viable ventures.'
            },
            {
              icon: Lightbulb,
              title: 'Incubate',
              description: 'Our innovation lab provides the resources, expertise, and regulatory guidance needed to navigate complex compliance landscapes and accelerate development.'
            },
            {
              icon: TrendingUp,
              title: 'Accelerate',
              description: 'Strategic capital deployment and network access to scale proven concepts into market-leading companies with sustainable competitive advantages.'
            }
          ].map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
