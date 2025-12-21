'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Brain, Atom, Zap, Coins, CheckCircle } from 'lucide-react'

const focusAreas = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Navigating the complex regulatory landscape of AI governance, data rights, and algorithmic accountability in the age of machine intelligence.',
    subcategories: ['AI Governance', 'Data Rights', 'Algorithmic Auditing', 'ML Compliance'],
    color: 'from-blue-500 to-purple-600',
    services: [
      'AI Ethics Framework Development',
      'Algorithmic Impact Assessments',
      'Data Privacy Compliance (GDPR, CCPA)',
      'AI Liability and Risk Management',
      'Regulatory Sandbox Applications',
      'Cross-border AI Governance'
    ],
    caseStudies: [
      'Helped a Fortune 500 company navigate EU AI Act compliance',
      'Structured $50M AI startup for regulatory compliance across 12 jurisdictions',
      'Developed industry-first algorithmic auditing framework'
    ]
  },
  {
    icon: Atom,
    title: 'Deep Science',
    description: 'Regulatory pathways for breakthrough scientific innovations, from quantum computing to biotechnology and advanced materials.',
    subcategories: ['Quantum Computing', 'Biotechnology', 'Materials Science', 'Space Technology'],
    color: 'from-green-500 to-teal-600',
    services: [
      'Quantum Technology IP Strategy',
      'Biotech Regulatory Pathways',
      'Advanced Materials Compliance',
      'Space Commerce Legal Framework',
      'Research Collaboration Agreements',
      'Technology Transfer Optimization'
    ],
    caseStudies: [
      'Secured quantum computing patents worth $100M+ in value',
      'Navigated FDA approval process for breakthrough biotech therapy',
      'Structured first commercial space mining venture'
    ]
  },
  {
    icon: Zap,
    title: 'Energy Transition',
    description: 'Legal infrastructure for renewable energy, carbon markets, and sustainable technology deployment at scale.',
    subcategories: ['Renewable Energy', 'Carbon Markets', 'Grid Technology', 'Energy Storage'],
    color: 'from-yellow-500 to-orange-600',
    services: [
      'Renewable Energy Project Finance',
      'Carbon Credit Legal Framework',
      'Grid Modernization Compliance',
      'Energy Storage Regulations',
      'Green Bond Structuring',
      'ESG Compliance Strategy'
    ],
    caseStudies: [
      'Structured $2B renewable energy fund with regulatory approval',
      'Developed carbon credit trading platform legal framework',
      'Facilitated largest grid-scale battery deployment in US'
    ]
  },
  {
    icon: Coins,
    title: 'Blockchain & DeFi',
    description: 'Comprehensive legal engineering for decentralized finance, digital assets, and Web3 infrastructure.',
    subcategories: ['DeFi Protocols', 'Digital Assets', 'Smart Contracts', 'DAO Governance'],
    color: 'from-primary to-red-600',
    services: [
      'DeFi Protocol Legal Structure',
      'Token Economics & Compliance',
      'Smart Contract Auditing',
      'DAO Governance Framework',
      'Cross-chain Legal Architecture',
      'Regulatory Compliance Strategy'
    ],
    caseStudies: [
      'Launched compliant DeFi protocol with $500M+ TVL',
      'Structured first regulated DAO in multiple jurisdictions',
      'Navigated SEC approval for innovative token structure'
    ]
  }
]

export function FocusDetails() {
  return (
    <section id="focus-areas" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} flex flex-col lg:flex-row gap-12 items-center`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${area.color} flex items-center justify-center`}>
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold">{area.title}</h2>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {area.subcategories.map((sub) => (
                    <Badge key={sub} variant="secondary" className="text-sm">
                      {sub}
                    </Badge>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Key Services</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {area.services.map((service) => (
                      <div key={service} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Case Studies Card */}
              <div className="flex-1">
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-6">Recent Success Stories</h3>
                    <div className="space-y-4">
                      {area.caseStudies.map((study, studyIndex) => (
                        <div key={studyIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {study}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
