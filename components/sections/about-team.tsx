"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Tyler Malin",
    role: "Founder & CEO",
    bio: "Tyler is a founder and operator with 20+ years of experience building technology-driven ventures at the intersection of climate, blockchain, and AI. He is also Co-Founder of Mālama Labs, where he leads the development of durable carbon markets powered by biochar, blockchain-based MRV, and advanced market design. Through Beneficial Technology, Tyler works closely with startups and enterprises to move emerging technology into real-world deployment.",
    expertise: ["Climate & Energy Systems", "Blockchain & Digital Infrastructure", "AI Strategy", "Carbon Markets", "Market & Token Design"],
    education: "Environmental Science & Business",
    location: "Los Angeles",
    image: "/tyler-malin-profile.png",
  },
]

export function AboutTeam() {
  return (
    <section id="leadership-profile" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Leadership Profile</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our team combines decades of experience building and deploying technology across complex environments.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
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
                    <p className="text-sm text-muted-foreground mb-2">{member.education}</p>
                    {member.location && (
                      <p className="text-xs text-muted-foreground mb-4">{member.location}</p>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.bio}</p>

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
