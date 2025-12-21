'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Building2, Lightbulb, TrendingUp } from 'lucide-react'
import Link from 'next/link'

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
            We don't just invest in the future—we help build it.
            <br /><br />
            Our studio brings together product development, strategic capital, and execution support to help teams turn ambitious ideas into real, working ventures. We work hands-on, from early exploration through launch and scale.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link href="/services#request-proposal">
              Start Building With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Building2,
              title: 'Build',
              subtitle: 'Turn ideas into real ventures.',
              description: 'From early ideation through company formation, we help teams define what they are building and set up the foundations needed to execute. This is about clarity, focus, and momentum - not paperwork for its own sake.'
            },
            {
              icon: Lightbulb,
              title: 'Incubate',
              subtitle: 'De-risk before you scale.',
              description: 'Our innovation lab works closely with teams to test assumptions, explore constraints, and accelerate development. We help navigate complexity - technical, operational, and regulatory - so teams can move forward with confidence.'
            },
            {
              icon: TrendingUp,
              title: 'Accelerate',
              subtitle: 'Scale what works.',
              description: 'Once a concept proves itself, we support growth through aligned capital, partnerships, and operational support. The goal is sustainable scale, not growth for growth sake.'
            }
          ].map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{pillar.title}</h3>
              {pillar.subtitle && (
                <p className="text-lg font-semibold text-primary mb-3">{pillar.subtitle}</p>
              )}
              <p className="text-muted-foreground">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
