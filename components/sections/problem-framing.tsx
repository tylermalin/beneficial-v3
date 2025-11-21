"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, TrendingDown, Building2 } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    title: "AI Noise vs. Real Enterprise Value",
    description:
      "Most companies are drowning in AI hype—point solutions, vendor pitches, and tactical experiments that don't build lasting competitive advantage. The noise distracts from what actually matters: building intelligence systems that create defensible value.",
  },
  {
    icon: TrendingDown,
    title: "Efficiency vs. Defensibility",
    description:
      "Many organizations optimize for short-term efficiency gains through AI tools, but fail to build systems that competitors can't easily replicate. True competitive advantage comes from defensible intelligence architecture, not rented capabilities.",
  },
  {
    icon: Building2,
    title: "Renting Intelligence vs. Owning It",
    description:
      "Most companies are renting intelligence through third-party APIs and platforms. They're building on rented infrastructure that can be commoditized, restricted, or taken away. The companies that win will own their intelligence systems—with proprietary data, logic, and evidence layers that create structural advantages.",
  },
]

export function ProblemFraming() {
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
            The Problem Most Companies Face
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            Enterprise AI strategy isn't about adopting the latest tools. It's about building systems that create lasting competitive distance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <problem.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

