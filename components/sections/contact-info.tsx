'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock, Calendar, MessageSquare, Linkedin, Twitter } from 'lucide-react'

const offices = [
  {
    city: 'San Francisco',
    address: '101 California Street, Suite 2450',
    zipcode: 'San Francisco, CA 94111',
    phone: '+1 (415) 555-0123',
    email: 'sf@beneficial.technology'
  },
  {
    city: 'New York',
    address: '200 Park Avenue, 17th Floor',
    zipcode: 'New York, NY 10166',
    phone: '+1 (212) 555-0456',
    email: 'ny@beneficial.technology'
  },
  {
    city: 'London',
    address: '1 Finsbury Avenue, Level 42',
    zipcode: 'London EC2M 2PF, UK',
    phone: '+44 20 7946 0789',
    email: 'london@beneficial.technology'
  }
]

const contactMethods = [
  {
    icon: Calendar,
    title: 'Schedule a Consultation',
    description: 'Book a 30-minute strategy call with our experts',
    action: 'Book Now',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with our team during business hours',
    action: 'Start Chat',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Phone,
    title: 'Emergency Hotline',
    description: '24/7 support for urgent legal matters',
    action: 'Call Now',
    color: 'from-red-500 to-pink-500'
  }
]

export function ContactInfo() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Contact Methods */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Other Ways to Connect</h2>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={method.title} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center`}>
                        <method.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{method.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                        <Button size="sm" variant="outline">
                          {method.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Office Locations */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
            <div className="space-y-6">
              {offices.map((office, index) => (
                <Card key={office.city} className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{office.city}</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <p>{office.address}</p>
                          <p>{office.zipcode}</p>
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span>{office.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>{office.email}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Business Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday:</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday:</span>
                      <span>Closed</span>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        Emergency support available 24/7 for existing clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <Button size="sm" variant="outline" className="flex-1">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Stay updated with the latest in legal engineering and regulatory developments
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
