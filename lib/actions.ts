'use server'

import { ContactFormData, sendContactNotification, subscribeToNewsletter } from './email'
import { z } from 'zod'

// Contact form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  email: z.string().email('Invalid email address'),
  company: z.string().max(100).optional(),
  services: z.array(z.string()).default([]),
  focusAreas: z.array(z.string()).default([]),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
})

// Newsletter subscription schema
const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export async function submitContactForm(formData: FormData) {
  try {
    // Extract and validate form data with proper null handling
    const rawData = {
      firstName: formData.get('firstName')?.toString() || '',
      lastName: formData.get('lastName')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      company: formData.get('company')?.toString() || undefined,
      services: formData.getAll('services').map(s => s.toString()),
      focusAreas: formData.getAll('focusAreas').map(f => f.toString()),
      timeline: formData.get('timeline')?.toString() || undefined,
      budget: formData.get('budget')?.toString() || undefined,
      message: formData.get('message')?.toString() || '',
    }

    // Validate the data
    const validatedData = contactFormSchema.parse(rawData)

    // Log the submission for analytics (you could also save to database here)
    console.log('Contact form submitted:', {
      email: validatedData.email,
      company: validatedData.company,
      services: validatedData.services,
      focusAreas: validatedData.focusAreas,
      timeline: validatedData.timeline,
      budget: validatedData.budget,
      timestamp: new Date().toISOString(),
    })

    // Try to send email notifications (non-blocking - form succeeds even if email fails)
    try {
      const emailResult = await sendContactNotification(validatedData)
      if (!emailResult.success) {
        console.warn('Email notification failed, but form submission succeeded:', emailResult.error)
      }
    } catch (emailError) {
      console.warn('Email notification error (non-blocking):', emailError)
      // Continue anyway - form submission is successful even if email fails
    }

    return {
      success: true,
      message: 'Thank you for your inquiry! We\'ll get back to you within 24 hours.',
    }
  } catch (error) {
    console.error('Contact form submission error:', error)
    
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map(e => {
        const field = e.path.join('.')
        return `${field}: ${e.message}`
      }).join(', ')
      
      return {
        success: false,
        message: `Please check your form data: ${errorMessages}`,
        errors: error.errors,
      }
    }

    return {
      success: false,
      message: error instanceof Error ? error.message : 'Something went wrong. Please try again or contact us directly.',
    }
  }
}

export async function submitNewsletterSubscription(formData: FormData) {
  try {
    const rawData = {
      email: formData.get('email')?.toString() || '',
    }

    // Validate the email
    const validatedData = newsletterSchema.parse(rawData)

    // Subscribe to newsletter
    const result = await subscribeToNewsletter(validatedData.email)

    if (!result.success) {
      throw new Error('Failed to subscribe to newsletter')
    }

    return {
      success: true,
      message: 'Successfully subscribed to our newsletter!',
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Please enter a valid email address.',
        errors: error.errors,
      }
    }

    return {
      success: false,
      message: 'Failed to subscribe. Please try again.',
    }
  }
}

// Consultation booking action
export async function bookConsultation(formData: FormData) {
  try {
    const rawData = {
      firstName: formData.get('firstName')?.toString() || '',
      lastName: formData.get('lastName')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      company: formData.get('company')?.toString() || undefined,
      preferredDate: formData.get('preferredDate')?.toString() || '',
      preferredTime: formData.get('preferredTime')?.toString() || '',
      timezone: formData.get('timezone')?.toString() || '',
      topic: formData.get('topic')?.toString() || '',
    }

    // Here you would integrate with a calendar service like Calendly, Cal.com, or Google Calendar
    // For now, we'll send an email notification

    const emailResult = await sendContactNotification({
      firstName: rawData.firstName,
      lastName: rawData.lastName,
      email: rawData.email,
      company: rawData.company,
      services: ['Consultation Booking'],
      focusAreas: [rawData.topic],
      timeline: 'immediate',
      budget: 'consultation',
      message: `Consultation booking request:
        Preferred Date: ${rawData.preferredDate}
        Preferred Time: ${rawData.preferredTime}
        Timezone: ${rawData.timezone}
        Topic: ${rawData.topic}`,
    })

    if (!emailResult.success) {
      throw new Error('Failed to book consultation')
    }

    return {
      success: true,
      message: 'Consultation request submitted! We\'ll confirm your booking within 2 hours.',
    }
  } catch (error) {
    console.error('Consultation booking error:', error)
    return {
      success: false,
      message: 'Failed to book consultation. Please try again or contact us directly.',
    }
  }
}
