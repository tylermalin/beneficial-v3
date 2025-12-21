"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Scale, Lightbulb, Globe, Zap, Users, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

const serviceOverview = [
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Navigate complex regulatory environments without slowing innovation.",
    color: "from-blue-500 to-cyan-500",
    stats: "500+ Frameworks Navigated",
  },
  {
    icon: Scale,
    title: "Legal Engineering",
    description: "Build scalable operational and governance infrastructure that supports growth.",
    color: "from-green-500 to-emerald-500",
    stats: "$10B+ Transactions Structured",
  },
  {
    icon: Lightbulb,
    title: "Innovation Strategy",
    description: "Turn advanced technology into deployable, market-ready systems.",
    color: "from-yellow-500 to-orange-500",
    stats: "200+ Innovations Launched",
  },
  {
    icon: Globe,
    title: "Global Expansion",
    description: "Scale across borders with clarity and coordination.",
    color: "from-purple-500 to-pink-500",
    stats: "50+ Jurisdictions Covered",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Modernize operations and governance alongside technology adoption.",
    color: "from-red-500 to-rose-500",
    stats: "95% Efficiency Improvement",
  },
  {
    icon: Users,
    title: "Strategic Advisory",
    description: "Executive-level guidance for high-stakes decisions and moments of change.",
    color: "from-indigo-500 to-blue-500",
    stats: "24/7 Expert Support",
  },
  {
    icon: TrendingUp,
    title: "Investor Services",
    description: "Tailored research, market intelligence, and diligence support across AI, blockchain, energy, and frontier systems.",
    color: "from-amber-500 to-yellow-500",
    stats: "Market Intelligence",
  },
]

export function ServicesOverview() {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Comprehensive Services Overview</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our integrated approach combines technology strategy, governance, and operational execution to support companies at every stage of growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceOverview.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm card-hover">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}
                  >
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <Badge variant="secondary" className="text-xs mb-4">
                    {service.stats}
                  </Badge>
                  {service.title === "Investor Services" && (
                    <Button variant="outline" size="sm" className="w-full mt-4" asChild>
                      <Link href="/investor-services">
                        Explore Investor Services
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
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
