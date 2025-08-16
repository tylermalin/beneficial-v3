'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Send, CheckCircle } from 'lucide-react'
import { submitContactForm } from '@/lib/actions'

const serviceTypes = [
  'Legal Engineering',
  'Venture Building',
  'Regulatory Compliance',
  'IP Strategy',
  'Corporate Structure',
  'Fundraising Support',
  'Other'
]

const focusAreas = [
  'Artificial Intelligence',
  'Blockchain & DeFi',
  'Energy Transition',
  'Deep Science',
  'General Technology'
]

export function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedFocus, setSelectedFocus] = useState<string[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
  }

  const toggleFocus = (focus: string) => {
    setSelectedFocus(prev => 
      prev.includes(focus) 
        ? prev.filter(f => f !== focus)
        : [...prev, focus]
    )
  }

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setSubmitMessage(null)
    
    // Add selected services and focus areas to form data
    selectedServices.forEach(service => formData.append('services', service))
    selectedFocus.forEach(focus => formData.append('focusAreas', focus))
    
    const result = await submitContactForm(formData)
    
    if (result.success) {
      setIsSubmitted(true)
    } else {
      setSubmitMessage(result.message)
    }
    
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-12">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Message Sent Successfully!</h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                >
                  Send Another Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <form action={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <Input name="firstName" placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <Input name="lastName" placeholder="Doe" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input name="email" type="email" placeholder="john@company.com" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input name="company" placeholder="Your Company" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Services Needed</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {serviceTypes.map((service) => (
                      <Badge
                        key={service}
                        variant={selectedServices.includes(service) ? "default" : "outline"}
                        className={`cursor-pointer transition-colors ${
                          selectedServices.includes(service) ? "bg-primary" : ""
                        }`}
                        onClick={() => toggleService(service)}
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Focus Areas</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {focusAreas.map((focus) => (
                      <Badge
                        key={focus}
                        variant={selectedFocus.includes(focus) ? "default" : "outline"}
                        className={`cursor-pointer transition-colors ${
                          selectedFocus.includes(focus) ? "bg-primary" : ""
                        }`}
                        onClick={() => toggleFocus(focus)}
                      >
                        {focus}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Project Timeline</label>
                  <select name="timeline" className="w-full px-3 py-2 border border-border rounded-md bg-background">
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (within 1 month)</option>
                    <option value="short">Short-term (1-3 months)</option>
                    <option value="medium">Medium-term (3-6 months)</option>
                    <option value="long">Long-term (6+ months)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Budget Range</label>
                  <select name="budget" className="w-full px-3 py-2 border border-border rounded-md bg-background">
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k-500k">$100K - $500K</option>
                    <option value="500k-1m">$500K - $1M</option>
                    <option value="over-1m">Over $1M</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea 
                    name="message"
                    placeholder="Tell us about your project, challenges, and how we can help..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
              {submitMessage && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-600 text-sm">{submitMessage}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
