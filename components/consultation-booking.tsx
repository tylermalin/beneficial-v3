'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Clock, CheckCircle } from 'lucide-react'
import { bookConsultation } from '@/lib/actions'

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
]

const timezones = [
  'America/New_York',
  'America/Chicago', 
  'America/Denver',
  'America/Los_Angeles',
  'Europe/London',
  'Europe/Paris',
  'Asia/Tokyo',
  'Asia/Singapore'
]

const consultationTopics = [
  'Legal Entity Structure',
  'Regulatory Compliance',
  'IP Strategy',
  'Fundraising & Securities',
  'International Expansion',
  'General Legal Engineering'
]

export function ConsultationBooking() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setSubmitMessage(null)
    
    const result = await bookConsultation(formData)
    
    if (result.success) {
      setIsSubmitted(true)
    } else {
      setSubmitMessage(result.message)
    }
    
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
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
            <h2 className="text-2xl font-bold mb-4">Consultation Requested!</h2>
            <p className="text-muted-foreground mb-6">
              We've received your consultation request and will confirm your booking within 2 hours. You'll receive a calendar invite with all the details.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
            >
              Book Another Consultation
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Book a Strategy Consultation</h2>
        </div>
        
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
            <label className="block text-sm font-medium mb-2">Consultation Topic *</label>
            <select name="topic" className="w-full px-3 py-2 border border-border rounded-md bg-background" required>
              <option value="">Select a topic</option>
              {consultationTopics.map((topic) => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Date *</label>
              <Input 
                name="preferredDate" 
                type="date" 
                min={new Date().toISOString().split('T')[0]}
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Preferred Time *</label>
              <select name="preferredTime" className="w-full px-3 py-2 border border-border rounded-md bg-background" required>
                <option value="">Select time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Timezone *</label>
            <select name="timezone" className="w-full px-3 py-2 border border-border rounded-md bg-background" required>
              <option value="">Select timezone</option>
              {timezones.map((tz) => (
                <option key={tz} value={tz}>{tz.replace('_', ' ')}</option>
              ))}
            </select>
          </div>
          
          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-primary hover:bg-primary/90"
            disabled={isSubmitting}
          >
            <Clock className="mr-2 h-5 w-5" />
            {isSubmitting ? 'Booking...' : 'Book Consultation'}
          </Button>
        </form>

        {submitMessage && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600 text-sm">{submitMessage}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
