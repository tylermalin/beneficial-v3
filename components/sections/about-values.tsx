'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Globe, Zap, Heart, Target, Users } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Long-term trust beats short-term wins.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Heart,
    title: 'Purpose',
    description: 'We work on technologies that improve real systems.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Target,
    title: 'Discipline',
    description: 'Speed matters. Durability matters more.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Zap,
    title: 'Results',
    description: 'We measure success by what ships and scales.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'The best outcomes are built together.',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Globe,
    title: 'Clarity',
    description: 'Simple plans. Executed well.',
    color: 'from-indigo-500 to-blue-500'
  }
]

export function AboutValues() {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            These core values guide everything we do, from how we work with clients to how we build our own ventures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm card-hover">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center mb-4`}>
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
