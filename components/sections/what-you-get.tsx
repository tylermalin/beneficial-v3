"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Map,
  Waves,
  Layers,
  Calendar,
  Users,
  TrendingUp,
} from "lucide-react"

const deliverables = [
  {
    icon: Map,
    title: "Prioritized Use-Case Map",
    description:
      "A strategic map of AI opportunities ranked by impact, feasibility, and defensibility. Clear prioritization that aligns with your business objectives and competitive positioning.",
  },
  {
    icon: Waves,
    title: "Three-Wave Strategy",
    description:
      "A phased implementation approach: Wave 1 (quick wins), Wave 2 (foundational systems), Wave 3 (advanced capabilities). Each wave builds on the previous, creating compounding value.",
  },
  {
    icon: Layers,
    title: "Logic & Evidence Layer Design",
    description:
      "Architecture for your proprietary business logic and evidence base. This is where your competitive moat gets encoded into your intelligence system.",
  },
  {
    icon: Calendar,
    title: "12-Month Roadmap",
    description:
      "Detailed implementation roadmap with milestones, dependencies, and success metrics. Clear path from strategy to execution with quarterly checkpoints.",
  },
  {
    icon: Users,
    title: "Talent & Data Recommendations",
    description:
      "Specific recommendations on team structure, roles to hire, and data strategy. What capabilities you need to build internally vs. what to source externally.",
  },
  {
    icon: TrendingUp,
    title: "Investment Model",
    description:
      "Resource allocation framework: where to invest, how much, and expected returns. Financial model that ties intelligence investments to business outcomes.",
  },
]

export function WhatYouGet() {
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
            What You Get
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            Comprehensive deliverables that transform strategy into actionable execution plans.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

