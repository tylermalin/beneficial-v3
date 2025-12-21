"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

const serviceCategories = [
  {
    category: "Foundation & Formation",
    description: "Core structures and systems that support long-term execution.",
    services: [
      {
        name: "Entity Formation & Structure",
        description: "Company structures designed to support growth, flexibility, and future change.",
        deliverables: ["Corporate entity setup", "Governance frameworks", "Equity structures", "Tax optimization"],
        pricing: "Starting at $15K",
        timeline: "2-4 weeks",
      },
      {
        name: "Intellectual Property Strategy",
        description: "Protect what you're building while enabling partnerships and scale.",
        deliverables: ["Patent filing & prosecution", "Trademark protection", "Trade secret protocols", "IP licensing"],
        pricing: "Starting at $25K",
        timeline: "4-8 weeks",
      },
      {
        name: "Regulatory Compliance Framework",
        description: "Practical compliance programs designed to support real operations—not slow them.",
        deliverables: ["Compliance assessment", "Policy development", "Training programs", "Monitoring systems"],
        pricing: "Starting at $35K",
        timeline: "6-10 weeks",
      },
    ],
  },
  {
    category: "Growth & Scaling",
    description: "Strategic legal support for companies ready to scale operations",
    services: [
      {
        name: "Fundraising & Securities",
        description: "Support for capital raises with an emphasis on speed, clarity, and alignment.",
        deliverables: [
          "Due diligence preparation",
          "Term sheet negotiation",
          "Securities filings",
          "Investor relations",
        ],
        pricing: "Starting at $50K",
        timeline: "8-12 weeks",
      },
      {
        name: "International Expansion",
        description: "Structured support for entering new markets and operating across borders.",
        deliverables: [
          "Market entry analysis",
          "Local entity formation",
          "Regulatory mapping",
          "Partnership agreements",
        ],
        pricing: "Starting at $75K",
        timeline: "10-16 weeks",
      },
      {
        name: "M&A and Strategic Transactions",
        description: "Hands-on support for complex transactions—from diligence through integration.",
        deliverables: [
          "Transaction structuring",
          "Due diligence management",
          "Contract negotiation",
          "Post-merger integration",
        ],
        pricing: "Custom pricing",
        timeline: "12-24 weeks",
      },
    ],
  },
  {
    category: "Innovation & Technology",
    description: "Specialized services for cutting-edge technology companies",
    services: [
      {
        name: "AI & Machine Learning Compliance",
        description: "Support for teams deploying AI systems in real-world, regulated environments.",
        deliverables: ["AI ethics framework", "Algorithmic auditing", "Data governance", "Regulatory compliance"],
        pricing: "Starting at $40K",
        timeline: "6-12 weeks",
      },
      {
        name: "Blockchain & DeFi Legal Engineering",
        description: "Operational and governance support for digital platforms and decentralized systems.",
        deliverables: ["Token economics", "Smart contract auditing", "DAO governance", "Regulatory strategy"],
        pricing: "Starting at $60K",
        timeline: "8-14 weeks",
      },
      {
        name: "Deep Science Regulatory Pathways",
        description: "Guidance for advanced technology moving from research to commercialization.",
        deliverables: [
          "Regulatory pathway mapping",
          "Clinical trial support",
          "Safety assessments",
          "Approval strategies",
        ],
        pricing: "Starting at $80K",
        timeline: "12-20 weeks",
      },
    ],
  },
  {
    category: "Enterprise Solutions",
    description: "Comprehensive legal engineering for Fortune 500 companies",
    services: [
      {
        name: "Digital Transformation Legal Strategy",
        description: "Support for enterprise technology initiatives where risk, scale, and execution matter.",
        deliverables: ["Technology assessment", "Risk analysis", "Implementation roadmap", "Change management"],
        pricing: "Custom pricing",
        timeline: "16-24 weeks",
      },
      {
        name: "Innovation Lab Legal Infrastructure",
        description: "Structures that enable internal innovation, experimentation, and spin-outs.",
        deliverables: ["Innovation policies", "Partnership frameworks", "IP management", "Spin-out structures"],
        pricing: "Custom pricing",
        timeline: "12-18 weeks",
      },
      {
        name: "Global Regulatory Strategy",
        description: "Ongoing support for organizations operating across multiple jurisdictions.",
        deliverables: ["Global compliance audit", "Regulatory monitoring", "Policy advocacy", "Crisis management"],
        pricing: "Custom pricing",
        timeline: "Ongoing",
      },
    ],
  },
]

export function ServiceCategories() {
  return (
    <section id="service-categories" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Service Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our integrated approach combines technology strategy, governance, and operational execution to support companies at every stage of growth.
          </p>
        </motion.div>

        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">{category.category}</h3>
                <p className="text-muted-foreground text-lg">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <Card key={service.name} className="h-full border-border/50 bg-card/50 backdrop-blur-sm card-hover">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-3">{service.name}</h4>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h5 className="font-semibold mb-2">Key Deliverables</h5>
                          <ul className="space-y-2">
                            {service.deliverables.map((deliverable) => (
                              <li key={deliverable} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-border">
                          <div>
                            <Badge variant="outline" className="mb-2">
                              {service.pricing}
                            </Badge>
                            <p className="text-xs text-muted-foreground">Timeline: {service.timeline}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
