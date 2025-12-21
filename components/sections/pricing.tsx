"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export function Pricing() {
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
            Availability
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-primary bg-card/50 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <p className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                    2026 Innovation Sprint Package
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    2 slots remaining
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Four-week sprint • Board-ready deliverables • Limited availability
                  </p>
                </div>

                <div className="border-t border-border/50 pt-8 mb-8">
                  <h3 className="font-semibold text-lg mb-4">What's Included:</h3>
                  <ul className="space-y-3">
                    {[
                      "Four-week intensive sprint",
                      "Current state intelligence audit",
                      "Defensible intelligence architecture design",
                      "Prioritized use-case map",
                      "Three-wave implementation strategy",
                      "12-month roadmap",
                      "Logic & evidence layer framework",
                      "Talent and data recommendations",
                      "Investment model",
                      "Board-ready presentation deck",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-10 py-6" asChild>
                    <Link href="/reserve-sprint">
                      Reserve Your Sprint
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-10 py-6" asChild>
                    <Link href="/book-consultation">Schedule a Call</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

