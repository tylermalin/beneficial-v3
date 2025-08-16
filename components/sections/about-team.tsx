'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Linkedin, Twitter } from 'lucide-react'

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    bio: 'Former partner at Skadden Arps with 15+ years in tech law. Led regulatory strategy for 3 unicorn IPOs.',
    expertise: ['Corporate Law', 'Securities', 'M&A'],
    education: 'Harvard Law School, MIT',
    image: '/professional-woman-lawyer-ceo.png'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Co-Founder & CTO',
    bio: 'Ex-Google engineer turned legal tech entrepreneur. Built compliance platforms used by Fortune 500 companies.',
    expertise: ['Legal Tech', 'AI/ML', 'Compliance'],
    education: 'Stanford CS, Berkeley Law',
    image: '/professional-cto.png'
  },
  {
    name: 'Dr. Aisha Patel',
    role: 'Head of Regulatory Affairs',
    bio: 'Former SEC commissioner with deep expertise in emerging technology regulation and policy development.',
    expertise: ['Securities Law', 'Regulatory Policy', 'DeFi'],
    education: 'Yale Law School, Oxford',
    image: '/placeholder-apgy0.png'
  },
  {
    name: 'James Thompson',
    role: 'Managing Partner, Ventures',
    bio: 'Serial entrepreneur with 4 exits. Led venture investments at Andreessen Horowitz for 8 years.',
    expertise: ['Venture Capital', 'Strategy', 'Scaling'],
    education: 'Wharton MBA, Princeton',
    image: '/professional-man-venture-capital.png'
  },
  {
    name: 'Dr. Elena Kowalski',
    role: 'Head of Deep Science',
    bio: 'Former DARPA program manager with expertise in quantum computing and advanced materials regulation.',
    expertise: ['Deep Tech', 'Quantum', 'Defense'],
    education: 'MIT PhD, Georgetown Law',
    image: '/professional-woman-scientist.png'
  },
  {
    name: 'David Kim',
    role: 'Head of Energy & Climate',
    bio: 'Led renewable energy policy at DOE. Expert in carbon markets and clean technology regulation.',
    expertise: ['Energy Law', 'Climate Policy', 'ESG'],
    education: 'Columbia Law, UC Berkeley',
    image: '/professional-man-energy-policy.png'
  }
]

export function AboutTeam() {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Leadership Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our team combines decades of experience in law, technology, and entrepreneurship to deliver unparalleled expertise in legal engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm card-hover">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted overflow-hidden">
                      <img 
                        src={member.image || "/placeholder.svg"} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.education}</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 justify-center">
                    <button className="w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors">
                      <Twitter className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
