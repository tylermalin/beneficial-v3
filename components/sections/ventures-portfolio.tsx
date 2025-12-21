'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, ArrowRight, Brain, Atom, Zap, Coins, Building, Users, DollarSign } from 'lucide-react'

const ventures = [
  {
    id: 1,
    name: 'NeuralFlow',
    tagline: 'AI-Powered Legal Document Analysis',
    category: 'Artificial Intelligence',
    status: 'Series A',
    stage: 'Growth',
    description: 'Revolutionary AI platform that automates legal document review and analysis, reducing review time by 90% while improving accuracy through advanced natural language processing.',
    longDescription: 'NeuralFlow leverages cutting-edge transformer models and legal domain expertise to provide unprecedented accuracy in contract analysis, due diligence, and regulatory compliance review. Our platform has processed over 10 million legal documents and serves Fortune 500 companies globally.',
    metrics: ['$2.5M ARR', '150+ Enterprise Clients', '99.7% Accuracy Rate'],
    funding: '$15M Series A',
    team: '45 employees',
    founded: '2021',
    website: 'neuralflow.ai',
    icon: Brain,
    color: 'from-blue-500 to-purple-600',
    achievements: [
      'Processed 10M+ legal documents',
      'Reduced review time by 90%',
      'Serving 15 Fortune 500 companies',
      'Patent pending on legal AI architecture'
    ]
  },
  {
    id: 2,
    name: 'MoonKit',
    tagline: 'Decentralized Space Commerce Platform',
    category: 'Deep Science',
    status: 'Seed',
    stage: 'Early',
    description: 'Building the legal and financial infrastructure for commercial space activities, from satellite deployment to asteroid mining rights and orbital commerce.',
    longDescription: 'MoonKit is pioneering the regulatory framework for the new space economy. We provide legal infrastructure for satellite operators, space mining ventures, and orbital manufacturing, ensuring compliance across multiple jurisdictions while enabling unprecedented commercial opportunities.',
    metrics: ['$500K MRR', '12 Space Partners', '3 Regulatory Approvals'],
    funding: '$8M Seed',
    team: '28 employees',
    founded: '2022',
    website: 'moonkit.space',
    icon: Atom,
    color: 'from-green-500 to-teal-600',
    achievements: [
      'First commercial space mining license',
      'Partnership with 3 space agencies',
      'Orbital manufacturing framework',
      'Cross-jurisdictional compliance platform'
    ]
  },
  {
    id: 3,
    name: 'FusionGrid',
    tagline: 'Next-Gen Energy Trading Protocol',
    category: 'Energy Transition',
    status: 'Pre-Seed',
    stage: 'Early',
    description: 'Blockchain-based energy trading platform enabling peer-to-peer renewable energy transactions with automated compliance and carbon credit integration.',
    longDescription: 'FusionGrid democratizes energy trading by connecting renewable energy producers directly with consumers through smart contracts. Our platform automatically handles regulatory compliance, carbon credit generation, and cross-border energy transactions.',
    metrics: ['$100K TVL', '50+ Energy Producers', '5 Pilot Programs'],
    funding: '$3M Pre-Seed',
    team: '18 employees',
    founded: '2023',
    website: 'fusiongrid.energy',
    icon: Zap,
    color: 'from-yellow-500 to-orange-600',
    achievements: [
      'First P2P energy trading in 3 states',
      'Automated carbon credit generation',
      '50MW renewable energy capacity',
      'Grid integration partnerships'
    ]
  },
  {
    id: 4,
    name: 'ChainGuard',
    tagline: 'DeFi Security & Compliance Suite',
    category: 'Blockchain & DeFi',
    status: 'Series A',
    stage: 'Growth',
    description: 'Comprehensive security and compliance platform for DeFi protocols, providing real-time monitoring, automated reporting, and regulatory compliance tools.',
    longDescription: 'ChainGuard provides institutional-grade security and compliance infrastructure for DeFi protocols. Our platform monitors transactions in real-time, detects suspicious activity, and ensures regulatory compliance across multiple jurisdictions.',
    metrics: ['$10B+ Protected', '200+ Protocols', '24/7 Monitoring'],
    funding: '$25M Series A',
    team: '65 employees',
    founded: '2020',
    website: 'chainguard.fi',
    icon: Coins,
    color: 'from-primary to-red-600',
    achievements: [
      'Protected $10B+ in DeFi assets',
      'Zero successful attacks on monitored protocols',
      'Regulatory approval in 8 jurisdictions',
      'Industry-leading threat detection'
    ]
  },
  {
    id: 5,
    name: 'QuantumLegal',
    tagline: 'Quantum-Safe Legal Infrastructure',
    category: 'Deep Science',
    status: 'Seed',
    stage: 'Early',
    description: 'Developing quantum-resistant legal frameworks and cryptographic solutions for the post-quantum era of digital contracts and identity verification.',
    longDescription: 'As quantum computing threatens current cryptographic standards, QuantumLegal is building the legal and technical infrastructure for quantum-safe digital transactions, contracts, and identity systems.',
    metrics: ['$200K MRR', '25 Enterprise Pilots', '2 Patents Filed'],
    funding: '$5M Seed',
    team: '22 employees',
    founded: '2023',
    website: 'quantumlegal.tech',
    icon: Atom,
    color: 'from-purple-500 to-pink-600',
    achievements: [
      'First quantum-safe legal framework',
      'Partnership with NIST',
      'Post-quantum cryptography integration',
      'Government pilot programs'
    ]
  },
  {
    id: 6,
    name: 'CarbonChain',
    tagline: 'Transparent Carbon Credit Marketplace',
    category: 'Energy Transition',
    status: 'Series A',
    stage: 'Growth',
    description: 'Blockchain-based carbon credit marketplace with full transparency, automated verification, and real-time impact tracking for corporate ESG compliance.',
    longDescription: 'CarbonChain eliminates greenwashing in carbon markets through blockchain transparency and automated verification. Our platform connects carbon projects directly with buyers while ensuring additionality and permanence.',
    metrics: ['$50M Credits Traded', '500+ Projects', '99% Verification Rate'],
    funding: '$20M Series A',
    team: '55 employees',
    founded: '2021',
    website: 'carbonchain.earth',
    icon: Zap,
    color: 'from-green-400 to-blue-500',
    achievements: [
      'Largest transparent carbon marketplace',
      'Automated satellite verification',
      'Corporate partnerships with 100+ companies',
      'UN Climate initiative partnership'
    ]
  }
]

const categories = ['All', 'Artificial Intelligence', 'Deep Science', 'Energy Transition', 'Blockchain & DeFi']
const stages = ['All', 'Early', 'Growth']

export function VenturesPortfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedStage, setSelectedStage] = useState('All')
  const [expandedVenture, setExpandedVenture] = useState<number | null>(null)

  const filteredVentures = ventures.filter(venture => {
    const categoryMatch = selectedCategory === 'All' || venture.category === selectedCategory
    const stageMatch = selectedStage === 'All' || venture.stage === selectedStage
    return categoryMatch && stageMatch
  })

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-sm font-medium text-muted-foreground mr-2">Category:</span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-sm font-medium text-muted-foreground mr-2">Stage:</span>
              {stages.map((stage) => (
                <Button
                  key={stage}
                  variant={selectedStage === stage ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedStage(stage)}
                  className={selectedStage === stage ? "bg-primary" : ""}
                >
                  {stage}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredVentures.map((venture, index) => (
              <motion.div
                key={venture.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card className="h-full card-hover border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${venture.color}`} />
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${venture.color} flex items-center justify-center`}>
                          <venture.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{venture.name}</h3>
                          <p className="text-sm text-muted-foreground">{venture.tagline}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="ml-2">
                        {venture.status}
                      </Badge>
                    </div>
                    
                    <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
                      {venture.category}
                    </Badge>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                      {expandedVenture === venture.id ? venture.longDescription : venture.description}
                    </p>
                    
                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 gap-2 mb-6">
                      {venture.metrics.map((metric) => (
                        <div key={metric} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>

                    {/* Additional Details (when expanded) */}
                    <AnimatePresence>
                      {expandedVenture === venture.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4 mb-6"
                        >
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <Building className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                              <div className="text-xs text-muted-foreground">Founded</div>
                              <div className="text-sm font-medium">{venture.founded}</div>
                            </div>
                            <div>
                              <Users className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                              <div className="text-xs text-muted-foreground">Team</div>
                              <div className="text-sm font-medium">{venture.team}</div>
                            </div>
                            <div>
                              <DollarSign className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                              <div className="text-xs text-muted-foreground">Funding</div>
                              <div className="text-sm font-medium">{venture.funding}</div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-semibold mb-2">Key Achievements</h4>
                            <div className="space-y-1">
                              {venture.achievements.map((achievement) => (
                                <div key={achievement} className="flex items-center gap-2">
                                  <div className="w-1 h-1 bg-primary rounded-full" />
                                  <span className="text-xs text-muted-foreground">{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => setExpandedVenture(expandedVenture === venture.id ? null : venture.id)}
                      >
                        {expandedVenture === venture.id ? 'Less Info' : 'More Info'}
                      </Button>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredVentures.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No ventures found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
