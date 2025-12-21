'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Lightbulb, Scale, Rocket } from 'lucide-react'

export function AboutStory() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                We started Beneficial Technology in 2019 after seeing the same pattern again and again:
                great technology stalled by weak execution, unclear structure, or systems that couldn't keep up.
              </p>
              <p>
                The problem wasn't innovation.
                It was everything around it.
              </p>
              <p>
                So we built a studio designed to support the full journey—from exploration to launch to scale. We focus on the infrastructure, coordination, and decisions that turn ideas into working systems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold">Technology First</h3>
                </div>
                <p className="text-muted-foreground">
                  We start with how the system actually works and who it serves.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Scale className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold">Built for Reality</h3>
                </div>
                <p className="text-muted-foreground">
                  If it can't survive production, it doesn't matter.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Hands-On</h3>
                </div>
                <p className="text-muted-foreground">
                  We build alongside teams, not from the sidelines.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
