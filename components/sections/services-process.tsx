"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Search, FileText, Rocket, BarChart, Headphones } from "lucide-react"

const processSteps = [
  {
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "Deep dive into your business needs, challenges, and objectives",
    duration: "1-2 hours",
    deliverables: ["Needs assessment", "Preliminary roadmap", "Service recommendations"],
  },
  {
    icon: Search,
    title: "Discovery & Analysis",
    description: "Comprehensive analysis of your current legal and regulatory position",
    duration: "1-2 weeks",
    deliverables: ["Legal audit", "Risk assessment", "Compliance gap analysis"],
  },
  {
    icon: FileText,
    title: "Strategy Development",
    description: "Custom legal engineering strategy tailored to your specific requirements",
    duration: "2-3 weeks",
    deliverables: ["Strategic plan", "Implementation timeline", "Resource allocation"],
  },
  {
    icon: Rocket,
    title: "Implementation",
    description: "Execute the legal engineering strategy with dedicated project management",
    duration: "Variable",
    deliverables: ["Legal documentation", "Compliance frameworks", "Process implementation"],
  },
  {
    icon: BarChart,
    title: "Monitoring & Optimization",
    description: "Ongoing monitoring and continuous improvement of legal infrastructure",
    duration: "Ongoing",
    deliverables: ["Performance metrics", "Regular reviews", "Strategy updates"],
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "24/7 access to our legal engineering experts for ongoing guidance",
    duration: "Continuous",
    deliverables: ["Expert consultation", "Emergency support", "Strategic updates"],
  },
]

export function ServicesProcess() {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Proven Process</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to legal engineering that ensures optimal outcomes and long-term success for your
            business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm relative">
                <CardContent className="p-6">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {index + 1}
                  </div>

                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">Duration:</span>
                      <span className="text-muted-foreground">{step.duration}</span>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm mb-2">Key Deliverables:</h4>
                      <ul className="space-y-1">
                        {step.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <div className="w-1 h-1 bg-primary rounded-full" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
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
