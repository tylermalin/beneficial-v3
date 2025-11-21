"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Layers,
  Lightbulb,
  Network,
  Database,
  Briefcase,
  Users,
} from "lucide-react"

const pillars = [
  {
    icon: Layers,
    title: "Unified Intelligence Layer",
    description:
      "A single, coherent system that integrates all your AI capabilities—not a collection of disconnected tools. This layer provides consistent interfaces, shared context, and unified governance across your entire intelligence infrastructure.",
  },
  {
    icon: Lightbulb,
    title: "Insight Generation",
    description:
      "Automated systems that transform raw data into actionable intelligence. This goes beyond basic analytics to generate strategic insights, identify patterns, and surface opportunities that drive business decisions.",
  },
  {
    icon: Network,
    title: "Logic Layer",
    description:
      "Proprietary business logic and decision frameworks encoded into your intelligence system. This is where your competitive advantage lives—the unique ways your organization thinks, reasons, and makes decisions.",
  },
  {
    icon: Database,
    title: "Proprietary Evidence",
    description:
      "Your own data assets, research, and evidence base that feed your intelligence system. This proprietary knowledge creates defensible moats that competitors can't easily replicate or access.",
  },
  {
    icon: Briefcase,
    title: "Living Portfolio Intelligence",
    description:
      "Continuous intelligence about your markets, competitors, opportunities, and risks. This isn't static reporting—it's a living system that evolves with your business and the external environment.",
  },
  {
    icon: Users,
    title: "Human-in-the-Loop Architecture",
    description:
      "Strategic integration of human expertise with automated intelligence. The right balance of automation and human judgment ensures quality, accountability, and continuous improvement of your intelligence systems.",
  },
]

export function DefensibleIntelligence() {
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
            The Defensible Intelligence System
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            Six architectural pillars that transform AI from a cost center into a competitive moat.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <pillar.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

