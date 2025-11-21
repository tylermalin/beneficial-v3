"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Target, Zap } from "lucide-react"

const reasons = [
  {
    icon: Clock,
    title: "The Structural Shift",
    description:
      "We're at an inflection point where AI moves from experimental to foundational. Companies that build defensible intelligence systems now will create structural advantages that compound over years. Those that wait will be playing catch-up in a commoditized landscape.",
  },
  {
    icon: Target,
    title: "Competitive Distance",
    description:
      "The gap between companies with strategic AI architecture and those without is widening rapidly. Early movers who build proprietary intelligence systems create moats that become harder to cross as time passes. This is your window to establish competitive distance.",
  },
  {
    icon: Zap,
    title: "From Renting to Owning",
    description:
      "The transition from renting intelligence (via APIs and platforms) to owning it (through proprietary systems) is accelerating. Companies that make this shift now will control their strategic destiny. Those that remain dependent on rented infrastructure face increasing risks of commoditization, vendor lock-in, and competitive disadvantage.",
  },
]

export function WhyNow() {
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
            Why Now
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            The window for building defensible intelligence systems is open—but it won't stay open forever.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <reason.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

