"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function LimitedOffer() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-background border-y border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Innovation Sprint
          </h2>
          
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-muted-foreground">
            Build What Matters—On Purpose.
          </h3>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            A focused, high-touch engagement for teams ready to move from experimentation to execution.
            In a structured sprint, we help you clarify what to build, how to deploy it, and how to scale it responsibly.
            <br /><br />
            We take on few teams so we can go deep and deliver real outcomes.
          </p>
          
          <div className="mb-8">
            <Badge className="mb-2 bg-primary text-primary-foreground text-sm px-4 py-1.5">
              2026 Innovation Sprint Package
            </Badge>
            <p className="text-sm text-muted-foreground">
              2 slots remaining
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-10 py-6"
              asChild
            >
              <Link href="/enterprise-ai-strategy-sprint">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6"
              asChild
            >
              <Link href="/reserve-sprint">Reserve Your Sprint</Link>
            </Button>
          </div>
          
        </motion.div>
      </div>
    </section>
  )
}

