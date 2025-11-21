"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The defensible intelligence framework transformed how we think about AI strategy. We moved from tactical tool adoption to building a strategic moat that creates lasting competitive advantage.",
    author: "Enterprise CTO",
    company: "Fortune 500 Technology Company",
  },
  {
    quote:
      "The four-week sprint delivered exactly what we needed: a board-ready roadmap that our leadership could immediately act on. The architecture design alone was worth the investment.",
    author: "VP of Strategy",
    company: "Growth-Stage Enterprise",
  },
  {
    quote:
      "Finally, an AI strategy approach that focuses on defensibility rather than hype. The six-pillar framework gave us clarity on what actually matters for long-term competitive positioning.",
    author: "Chief Innovation Officer",
    company: "Mid-Market Leader",
  },
]

export function Testimonials() {
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
            What Leaders Are Saying
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto">
            Enterprise executives who've transformed their AI strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border/50 pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
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

