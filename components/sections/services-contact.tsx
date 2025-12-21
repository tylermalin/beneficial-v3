"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, CheckCircle, Calendar, MessageSquare, Phone } from "lucide-react"
import { submitContactForm } from "@/lib/actions"

const serviceTypes = [
  "Foundation & Formation",
  "Growth & Scaling",
  "Innovation & Technology",
  "Enterprise Solutions",
  "Regulatory Compliance",
  "International Expansion",
  "M&A Support",
  "Strategic Advisory",
]

const companyStages = [
  "Pre-Seed Startup",
  "Seed Stage",
  "Series A",
  "Series B+",
  "Growth Company",
  "Pre-IPO",
  "Public Company",
  "Fortune 500",
]

const budgetRanges = [
  "Under $25K",
  "$25K - $50K",
  "$50K - $100K",
  "$100K - $250K",
  "$250K - $500K",
  "$500K - $1M",
  "Over $1M",
  "Enterprise Contract",
]

export function ServicesContact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedStage, setSelectedStage] = useState<string>("")
  const [selectedBudget, setSelectedBudget] = useState<string>("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)

  const toggleService = (service: string) => {
    setSelectedServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Add selected services and company info to form data
    selectedServices.forEach((service) => formData.append("services", service))
    if (selectedStage) formData.append("companyStage", selectedStage)
    if (selectedBudget) formData.append("budget", selectedBudget)
    formData.append("focusAreas", "Legal Engineering Services")

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setIsSubmitted(true)
        form.reset()
        setSelectedServices([])
        setSelectedStage("")
        setSelectedBudget("")
        setSubmitMessage(null)
      } else {
        setSubmitMessage(result.message || "Please check your form data and try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitMessage(
        error instanceof Error 
          ? error.message 
          : "Something went wrong. Please try again or contact us directly."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
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
                <h2 className="text-2xl font-bold mb-4">Request Received!</h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for your interest in our services. Our team will review your requirements
                  and get back to you within 2 hours with a customized proposal.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Submit Another Request
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Strategy Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get Started Today</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tell us what you're building and where you're stuck. We'll help you find a clear, practical path forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div id="request-proposal" className="lg:col-span-2">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Request a Proposal</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input name="email" type="email" placeholder="john@company.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <Input name="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company *</label>
                      <Input name="company" placeholder="Your Company" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Title</label>
                      <Input name="title" placeholder="CEO, CTO, General Counsel" />
                    </div>
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Stage</label>
                      <select
                        name="companyStage"
                        className="w-full px-3 py-2 border border-border rounded-md bg-background"
                        value={selectedStage}
                        onChange={(e) => setSelectedStage(e.target.value)}
                      >
                        <option value="">Select stage</option>
                        {companyStages.map((stage) => (
                          <option key={stage} value={stage}>
                            {stage}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Range</label>
                      <select
                        name="budgetRange"
                        className="w-full px-3 py-2 border border-border rounded-md bg-background"
                        value={selectedBudget}
                        onChange={(e) => setSelectedBudget(e.target.value)}
                      >
                        <option value="">Select budget</option>
                        {budgetRanges.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
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
                    <label className="block text-sm font-medium mb-2">Project Description *</label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project, current challenges, and what you're trying to achieve..."
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
                    {isSubmitting ? "Sending Request..." : "Request Proposal"}
                  </Button>
                </form>

                {submitMessage && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-600 text-sm">{submitMessage}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Prefer to Talk?</h3>
                <div className="space-y-4">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Strategy Call
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Live Chat
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Phone className="mr-2 h-4 w-4" />
                    Call +1 (415) 555-0123
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">What to Expect</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Response within 2 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Customized proposal with pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>30-minute strategy consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Detailed project timeline</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Emergency Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Need urgent legal assistance? Our emergency hotline is available 24/7 for existing clients and
                  critical situations.
                </p>
                <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50 bg-transparent">
                  <Phone className="mr-2 h-4 w-4" />
                  Emergency: +1 (415) 555-0911
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
