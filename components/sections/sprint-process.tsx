"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Layout, Code, FileCheck } from "lucide-react"

const weeks = [
  {
    week: "Week 1",
    icon: Search,
    title: "Discovery & Current State Assessment",
    description:
      "Deep analysis of your existing AI initiatives, data assets, and strategic objectives. We map your current intelligence infrastructure and identify gaps, redundancies, and opportunities.",
    deliverables: [
      "Current state intelligence audit",
      "Gap analysis across six pillars",
      "Stakeholder alignment sessions",
      "Initial use-case prioritization",
    ],
  },
  {
    week: "Week 2",
    icon: Layout,
    title: "Defensible Intelligence Architecture Design",
    description:
      "Design your unified intelligence system architecture. We define how the six pillars integrate, establish data flows, and create the blueprint for your defensible intelligence system.",
    deliverables: [
      "System architecture blueprint",
      "Logic layer framework design",
      "Evidence layer strategy",
      "Integration patterns and standards",
    ],
  },
  {
    week: "Week 3",
    icon: Code,
    title: "Strategy Development & Roadmap",
    description:
      "Build your prioritized use-case map, three-wave implementation strategy, and 12-month roadmap. We define what to build, in what order, and how to measure success.",
    deliverables: [
      "Prioritized use-case map",
      "Three-wave strategy document",
      "12-month implementation roadmap",
      "Investment model and resource requirements",
    ],
  },
  {
    week: "Week 4",
    icon: FileCheck,
    title: "Board-Ready Deliverables & Recommendations",
    description:
      "Finalize all deliverables, create executive presentations, and provide detailed recommendations on talent, data strategy, and architecture decisions. Everything packaged for board presentation and immediate action.",
    deliverables: [
      "Board-ready presentation deck",
      "Talent and team recommendations",
      "Data strategy and governance framework",
      "Architecture implementation guide",
    ],
  },
]

export function SprintProcess() {
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
            The Sprint Process
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            Four weeks. Clear deliverables. Board-ready outcomes.
          </p>
        </motion.div>

        <div className="space-y-8">
          {weeks.map((week, index) => (
            <motion.div
              key={week.week}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 md:mb-0">
                        <week.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-sm font-bold text-primary mb-2 md:hidden">
                        {week.week}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="text-sm font-bold text-primary mb-2 hidden md:block">
                            {week.week}
                          </div>
                          <h3 className="text-2xl font-bold mb-3">{week.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {week.description}
                      </p>
                      <div>
                        <h4 className="font-semibold mb-3">Key Deliverables:</h4>
                        <ul className="space-y-2">
                          {week.deliverables.map((deliverable) => (
                            <li
                              key={deliverable}
                              className="flex items-start gap-3 text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

