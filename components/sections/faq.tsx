"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What's the scope of the sprint?",
    answer:
      "The sprint covers comprehensive AI strategy development focused on building defensible intelligence systems. We assess your current state, design your architecture across six pillars, prioritize use cases, create implementation roadmaps, and provide detailed recommendations on talent, data, and investment. All deliverables are board-ready and actionable.",
  },
  {
    question: "Who is this sprint for?",
    answer:
      "This sprint is designed for enterprise leaders—CTOs, Chief Innovation Officers, VPs of Strategy, and executives responsible for AI and digital transformation. Ideal for companies that have experimented with AI but need a strategic framework to build defensible competitive advantages. Works best for organizations with existing data assets and clear business objectives.",
  },
  {
    question: "What's required from our team?",
    answer:
      "We need access to key stakeholders (leadership, technical teams, business units), existing AI initiatives documentation, data asset inventories, and strategic business objectives. Expect 2-3 hours per week from your team for alignment sessions and reviews. The sprint is designed to be intensive but not disruptive to day-to-day operations.",
  },
  {
    question: "How is intellectual property handled?",
    answer:
      "All deliverables and recommendations are your company's intellectual property. We operate under strict NDAs and clear IP assignment agreements. The frameworks and methodologies we use are our proprietary approach, but all specific outputs, strategies, and recommendations belong to you. We never reuse your specific strategies or data with other clients.",
  },
  {
    question: "What about security and confidentiality?",
    answer:
      "We follow enterprise-grade security practices and can work within your security frameworks. All work is conducted under NDA, and we can adapt to your data handling requirements. We don't require access to sensitive production systems—we work with documentation, strategic discussions, and aggregated information.",
  },
  {
    question: "Can this be done remotely?",
    answer:
      "Yes. The sprint is designed to work effectively in a remote or hybrid format. We conduct virtual sessions, work asynchronously on deliverables, and maintain regular check-ins. In-person sessions can be arranged if preferred and logistically feasible.",
  },
  {
    question: "What happens after the sprint?",
    answer:
      "You receive all deliverables and can execute independently, or we can provide ongoing support through implementation. Many clients engage us for follow-up work on specific components, but there's no obligation. The sprint is designed to give you everything needed to move forward on your own.",
  },
  {
    question: "Why November only pricing?",
    answer:
      "We're offering limited-time pricing to build our portfolio of enterprise AI strategy engagements. This allows us to work with select companies while refining our approach. Regular pricing reflects the full value of the engagement, but November sprints get the same comprehensive deliverables at the introductory rate.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            Common questions about the Enterprise AI Strategy Sprint.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-start justify-between gap-4 text-left"
                  >
                    <h3 className="text-lg font-semibold flex-1">{faq.question}</h3>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-border/50"
                    >
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

