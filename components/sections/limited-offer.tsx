"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"
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
          <Badge className="mb-6 bg-primary text-primary-foreground text-sm px-4 py-1.5">
            <Sparkles className="mr-2 h-4 w-4" />
            Limited Offer
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Move Beyond AI Noise.
            <br />
            <span className="gradient-text">Build Defensible Intelligence.</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-medium">
            Four-week sprint. Board-ready roadmap. November only: $10k.
          </p>
          
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
          
          <p className="text-sm text-muted-foreground mt-6">
            Regular price: $25,000 • Limited availability
          </p>
        </motion.div>
      </div>
    </section>
  )
}

