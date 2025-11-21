"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
            Reserve Your November Sprint
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Limited availability. Four-week sprint. Board-ready roadmap. Move beyond AI noise and build defensible intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-10 py-6"
              asChild
            >
              <a href="mailto:contact@beneficialtech.ai">
                <Mail className="mr-2 h-5 w-5" />
                contact@beneficialtech.ai
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-6 border-white/20 text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href="/reserve-sprint">
                Reserve Your Sprint
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-primary-foreground/70">
            November only: $10,000 • Regular price: $25,000
          </p>
        </motion.div>
      </div>
    </section>
  )
}

