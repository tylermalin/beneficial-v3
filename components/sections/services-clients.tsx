"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote } from "lucide-react"

const clientTestimonials = [
  {
    company: "TechFlow AI",
    industry: "Artificial Intelligence",
    stage: "Series B",
    quote:
      "Beneficial Technology's legal engineering approach was instrumental in our successful Series B raise. They helped us navigate complex AI regulations across multiple jurisdictions.",
    result: "$50M Series B raised",
    person: "Sarah Kim, CEO",
  },
  {
    company: "GreenChain Energy",
    industry: "Energy Transition",
    stage: "Growth",
    quote:
      "Their expertise in renewable energy regulations and carbon markets enabled us to scale our operations globally while maintaining full compliance.",
    result: "5x revenue growth",
    person: "Michael Chen, CTO",
  },
  {
    company: "Fortune 500 Bank",
    industry: "Financial Services",
    stage: "Enterprise",
    quote:
      "The digital transformation legal strategy they developed allowed us to launch our blockchain initiative ahead of competitors while managing regulatory risk.",
    result: "$2B digital initiative",
    person: "Jennifer Walsh, Chief Innovation Officer",
  },
  {
    company: "QuantumLabs",
    industry: "Deep Science",
    stage: "Seed",
    quote:
      "From IP strategy to regulatory pathways, they provided the legal foundation that enabled us to commercialize our quantum computing breakthrough.",
    result: "12 patents filed",
    person: "Dr. Alex Rodriguez, Founder",
  },
  {
    company: "DeFi Protocol",
    industry: "Blockchain",
    stage: "Series A",
    quote:
      "Their deep understanding of DeFi regulations and token economics was crucial in structuring our protocol for global compliance and growth.",
    result: "$1B+ TVL achieved",
    person: "Emma Thompson, Co-founder",
  },
  {
    company: "BioTech Innovations",
    industry: "Biotechnology",
    stage: "IPO",
    quote:
      "They guided us through the complex regulatory landscape from clinical trials to IPO, ensuring compliance at every stage of our growth.",
    result: "Successful IPO",
    person: "Dr. James Park, CEO",
  },
]

const clientStats = [
  { metric: "500+", label: "Companies Served" },
  { metric: "$50B+", label: "Transaction Value" },
  { metric: "98%", label: "Success Rate" },
  { metric: "50+", label: "Countries" },
]

export function ServicesClients() {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Trusted by Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            From innovative startups to Fortune 500 enterprises, we've helped companies across industries navigate
            complex legal challenges and achieve their strategic objectives.
          </p>

          {/* Client Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {clientStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.metric}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground leading-relaxed italic">"{testimonial.quote}"</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{testimonial.company}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.person}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.stage}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{testimonial.industry}</Badge>
                      <span className="text-sm font-medium text-green-600">{testimonial.result}</span>
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
