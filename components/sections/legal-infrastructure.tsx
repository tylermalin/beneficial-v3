'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, Scale, FileText, Users, Globe, Zap } from 'lucide-react'

const infrastructureComponents = [
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Comprehensive compliance frameworks tailored to your industry and jurisdiction.',
    features: ['Multi-jurisdictional compliance', 'Automated reporting', 'Risk assessment', 'Ongoing monitoring']
  },
  {
    icon: Scale,
    title: 'Legal Entity Structure',
    description: 'Optimized corporate structures for tax efficiency and operational flexibility.',
    features: ['Entity formation', 'Tax optimization', 'Governance frameworks', 'Equity structures']
  },
  {
    icon: FileText,
    title: 'IP & Documentation',
    description: 'Robust intellectual property protection and comprehensive legal documentation.',
    features: ['Patent filing', 'Trademark protection', 'Trade secrets', 'Licensing agreements']
  },
  {
    icon: Users,
    title: 'Governance & Operations',
    description: 'Scalable governance structures and operational frameworks for growth.',
    features: ['Board governance', 'Employee agreements', 'Operational policies', 'Compliance training']
  },
  {
    icon: Globe,
    title: 'International Expansion',
    description: 'Strategic guidance for global market entry and cross-border operations.',
    features: ['Market entry strategy', 'Local partnerships', 'Regulatory mapping', 'Cultural adaptation']
  },
  {
    icon: Zap,
    title: 'Technology Integration',
    description: 'Legal-tech solutions for automated compliance and operational efficiency.',
    features: ['Smart contracts', 'Automated workflows', 'Compliance dashboards', 'Real-time monitoring']
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
            Legal Infrastructure & Capital Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive legal engineering approach provides the foundation for scalable, compliant, and capital-efficient ventures.
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
