"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building, Rocket, TrendingUp, Calendar } from "lucide-react"
import Link from "next/link"

export function ServicesHero() {
  return (
    <section className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Technology, Governance, and Execution—Built to Scale</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            From ambitious startups to global enterprises, we support teams building and deploying advanced technology in complex environments. Our services help you move faster, scale responsibly, and operate with confidence—without slowing innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link href="#service-categories">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/reserve-sprint">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Call
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Client Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Rocket,
              title: "Startups & Scale-ups",
              description: "Foundational support and hands-on guidance for teams building and shipping new technology.",
              features: ["Entity Formation", "IP Strategy", "Fundraising Support", "Regulatory Roadmaps"],
            },
            {
              icon: TrendingUp,
              title: "Growth Companies",
              description: "Strategic support for companies expanding products, markets, and operations.",
              features: ["International Expansion", "M&A Support", "Compliance Scaling", "Partnership Structuring"],
            },
            {
              icon: Building,
              title: "Fortune 500",
              description: "Enterprise-grade support for organizations deploying new technology at scale.",
              features: ["Innovation Labs", "Regulatory Strategy", "Digital Transformation", "Risk Management"],
            },
          ].map((clientType, index) => (
            <motion.div
              key={clientType.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <clientType.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{clientType.title}</h3>
              <p className="text-muted-foreground mb-6">{clientType.description}</p>
              <ul className="space-y-2">
                {clientType.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
