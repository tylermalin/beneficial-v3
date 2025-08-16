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
                Founded in 2019 by a team of technologists, lawyers, and entrepreneurs, Beneficial Technology emerged from a simple observation: the most transformative technologies of our time were being held back by outdated legal frameworks and regulatory uncertainty.
              </p>
              <p>
                We saw brilliant innovations struggling to navigate complex compliance requirements, promising startups failing due to regulatory missteps, and entire industries moving slowly because of legal ambiguity. We knew there had to be a better way.
              </p>
              <p>
                Our approach combines deep legal expertise with technological innovation, regulatory foresight with entrepreneurial execution. We don't just solve legal problems—we engineer legal solutions that enable breakthrough technologies to scale globally.
              </p>
              <p>
                Today, we're proud to have helped structure over $10 billion in compliant transactions, navigate 500+ regulatory frameworks, and build some of the most innovative companies in AI, blockchain, energy, and deep science.
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
                  <h3 className="text-xl font-bold">Innovation First</h3>
                </div>
                <p className="text-muted-foreground">
                  We believe that legal frameworks should enable innovation, not hinder it. Our approach starts with understanding the technology and its potential impact.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Scale className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold">Regulatory Excellence</h3>
                </div>
                <p className="text-muted-foreground">
                  Our team includes former regulators, policy experts, and compliance specialists who understand how to navigate complex regulatory landscapes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Venture Building</h3>
                </div>
                <p className="text-muted-foreground">
                  We don't just provide legal services—we build companies. Our venture studio approach combines legal engineering with strategic capital and operational expertise.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
