'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Scale, FileText, Users, Globe, Zap } from 'lucide-react'

const infrastructureComponents = [
  {
    icon: Shield,
    title: 'Compliance & Risk',
    description: 'Clear frameworks tailored to the realities of your industry and geography.',
    features: ['Risk assessment', 'Ongoing monitoring', 'Reporting readiness', 'Cross-jurisdiction awareness']
  },
  {
    icon: Scale,
    title: 'Venture Structure',
    description: 'Flexible structures designed to support growth and change over time.',
    features: ['Company formation', 'Ownership & incentive design', 'Governance frameworks', 'Operational flexibility']
  },
  {
    icon: FileText,
    title: 'IP & Documentation',
    description: 'Protecting what you build and enabling future partnerships.',
    features: ['IP strategy', 'Trademarks & patents (where applicable)', 'Licensing structures', 'Core documentation']
  },
  {
    icon: Users,
    title: 'Governance & Operations',
    description: 'Building teams and systems that can scale.',
    features: ['Board and leadership support', 'Team agreements', 'Operating policies', 'Internal enablement']
  },
  {
    icon: Globe,
    title: 'International Expansion',
    description: 'Support for teams operating across borders.',
    features: ['Market entry planning', 'Regulatory mapping', 'Local partner strategy', 'Operational adaptation']
  },
  {
    icon: Zap,
    title: 'Technology Integration',
    description: 'Tools and systems that reduce friction as you grow.',
    features: ['Automated workflows', 'Platform integrations', 'Monitoring & dashboards', 'System visibility']
  }
]

export function LegalInfrastructure() {
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
            Infrastructure & Support Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide the practical support systems ventures need to scale without breaking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infrastructureComponents.map((component, index) => (
            <motion.div
              key={component.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <component.icon className="h-6 w-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{component.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {component.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {component.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
