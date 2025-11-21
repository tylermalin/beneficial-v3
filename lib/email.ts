import { Resend } from 'resend'

// Initialize Resend only if API key is available
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return null
  }
  return new Resend(apiKey)
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  company?: string
  services: string[]
  focusAreas: string[]
  timeline?: string
  budget?: string
  message: string
}

export async function sendContactNotification(data: ContactFormData) {
  try {
    // Validate required fields before sending
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      throw new Error('Missing required fields for email notification')
    }

    const resend = getResend()
    if (!resend) {
      console.warn('Resend API key not configured. Email sending disabled.')
      return { success: false, error: 'Email service not configured' }
    }

    // Send notification to internal team
    const internalEmail = await resend.emails.send({
      from: 'notifications@beneficial.technology',
      to: ['hello@beneficial.technology', 'legal@beneficial.technology'],
      subject: `New Contact Form Submission - ${data.firstName} ${data.lastName}`,
      html: generateInternalEmailTemplate(data),
    })

    // Send confirmation to client
    const clientEmail = await resend.emails.send({
      from: 'hello@beneficial.technology',
      to: [data.email],
      subject: 'Thank you for contacting Beneficial Technology',
      html: generateClientEmailTemplate(data),
    })

    return { success: true, internalEmail, clientEmail }
  } catch (error) {
    console.error('Email sending failed:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

function generateInternalEmailTemplate(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #FA4C14 0%, #FF6B35 100%); color: white; padding: 30px; text-align: center; }
        .content { padding: 30px; }
        .field { margin-bottom: 20px; }
        .label { font-weight: 600; color: #555; margin-bottom: 5px; display: block; }
        .value { background: #f8f9fa; padding: 12px; border-radius: 6px; border-left: 4px solid #FA4C14; }
        .tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .tag { background: #FA4C14; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; }
        .priority { background: #dc3545; color: white; padding: 8px 16px; border-radius: 6px; display: inline-block; font-weight: 600; margin-bottom: 20px; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 24px;">🚨 New Contact Form Submission</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Immediate attention required</p>
        </div>
        
        <div class="content">
          <div class="priority">HIGH PRIORITY LEAD</div>
          
          <div class="field">
            <span class="label">Contact Information</span>
            <div class="value">
              <strong>${data.firstName} ${data.lastName}</strong><br>
              📧 <a href="mailto:${data.email}">${data.email}</a><br>
              ${data.company ? `🏢 ${data.company}` : 'No company specified'}
            </div>
          </div>

          ${data.services.length > 0 ? `
          <div class="field">
            <span class="label">Services Requested</span>
            <div class="value">
              <div class="tags">
                ${data.services.map(service => `<span class="tag">${service}</span>`).join('')}
              </div>
            </div>
          </div>
          ` : ''}

          ${data.focusAreas.length > 0 ? `
          <div class="field">
            <span class="label">Focus Areas</span>
            <div class="value">
              <div class="tags">
                ${data.focusAreas.map(area => `<span class="tag">${area}</span>`).join('')}
              </div>
            </div>
          </div>
          ` : ''}

          ${data.timeline ? `
          <div class="field">
            <span class="label">Project Timeline</span>
            <div class="value">⏰ ${data.timeline}</div>
          </div>
          ` : ''}

          ${data.budget ? `
          <div class="field">
            <span class="label">Budget Range</span>
            <div class="value">💰 ${data.budget}</div>
          </div>
          ` : ''}

          <div class="field">
            <span class="label">Message</span>
            <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
          </div>

          <div style="margin-top: 30px; padding: 20px; background: #e3f2fd; border-radius: 6px; border-left: 4px solid #2196f3;">
            <h3 style="margin: 0 0 10px 0; color: #1976d2;">⚡ Recommended Next Steps</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Respond within 2 hours for optimal conversion</li>
              <li>Schedule initial consultation call</li>
              <li>Prepare relevant case studies based on focus areas</li>
              <li>Review budget alignment with service requirements</li>
            </ul>
          </div>
        </div>

        <div class="footer">
          <p>This email was generated automatically from the Beneficial Technology contact form.</p>
          <p><strong>Action Required:</strong> Please respond to this inquiry within 2 business hours.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

function generateClientEmailTemplate(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank you for contacting Beneficial Technology</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #FA4C14 0%, #FF6B35 100%); color: white; padding: 40px 30px; text-align: center; }
        .content { padding: 40px 30px; }
        .highlight { background: #fff3f0; padding: 20px; border-radius: 8px; border-left: 4px solid #FA4C14; margin: 20px 0; }
        .cta-button { display: inline-block; background: #FA4C14; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 10px 5px; }
        .footer { background: #f8f9fa; padding: 30px; text-align: center; color: #666; }
        .team-member { display: inline-block; margin: 10px; text-align: center; }
        .team-photo { width: 60px; height: 60px; border-radius: 50%; background: #ddd; margin: 0 auto 8px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 28px;">Thank You, ${data.firstName}!</h1>
          <p style="margin: 15px 0 0 0; opacity: 0.9; font-size: 18px;">We've received your inquiry and are excited to help.</p>
        </div>
        
        <div class="content">
          <p>Dear ${data.firstName},</p>
          
          <p>Thank you for reaching out to Beneficial Technology. We've received your inquiry regarding <strong>${data.services.length > 0 ? data.services.join(', ') : 'our legal engineering services'}</strong> and are excited about the opportunity to work with you.</p>

          <div class="highlight">
            <h3 style="margin: 0 0 15px 0; color: #FA4C14;">🚀 What Happens Next?</h3>
            <ol style="margin: 0; padding-left: 20px;">
              <li><strong>Initial Review (Within 2 hours):</strong> Our team will review your requirements and identify the best experts for your project.</li>
              <li><strong>Strategy Call (Within 24 hours):</strong> We'll schedule a 30-minute consultation to discuss your specific needs and challenges.</li>
              <li><strong>Proposal & Timeline (Within 48 hours):</strong> You'll receive a detailed proposal with our recommended approach and timeline.</li>
            </ol>
          </div>

          <p>Based on your interest in <strong>${data.focusAreas.length > 0 ? data.focusAreas.join(' and ') : 'our services'}</strong>, we're already thinking about how our expertise can help accelerate your project.</p>

          <div style="text-align: center; margin: 30px 0;">
            <a href="https://calendly.com/beneficial-technology/consultation" class="cta-button">📅 Schedule Your Strategy Call</a>
            <a href="https://beneficial.technology/resources" class="cta-button">📚 Explore Our Resources</a>
          </div>

          <div class="highlight">
            <h3 style="margin: 0 0 15px 0; color: #FA4C14;">💡 While You Wait</h3>
            <p style="margin: 0;">Check out our recent insights on legal engineering in your focus area:</p>
            <ul style="margin: 10px 0 0 0; padding-left: 20px;">
              ${data.focusAreas.includes('Artificial Intelligence') ? '<li><a href="#" style="color: #FA4C14;">AI Governance Framework: A Practical Guide</a></li>' : ''}
              ${data.focusAreas.includes('Blockchain & DeFi') ? '<li><a href="#" style="color: #FA4C14;">DeFi Compliance: Navigating the Regulatory Landscape</a></li>' : ''}
              ${data.focusAreas.includes('Energy Transition') ? '<li><a href="#" style="color: #FA4C14;">Renewable Energy Legal Structures for Scale</a></li>' : ''}
              ${data.focusAreas.includes('Deep Science') ? '<li><a href="#" style="color: #FA4C14;">Deep Tech IP Strategy: From Lab to Market</a></li>' : ''}
              <li><a href="#" style="color: #FA4C14;">Legal Engineering Best Practices for Startups</a></li>
            </ul>
          </div>

          <p>If you have any urgent questions before our call, don't hesitate to reach out:</p>
          <ul>
            <li>📧 Email: <a href="mailto:hello@beneficial.technology">hello@beneficial.technology</a></li>
            <li>📞 Phone: +1 (415) 555-0123</li>
            <li>💬 Emergency Hotline: +1 (415) 555-0911 (24/7)</li>
          </ul>

          <p>We're looking forward to helping you navigate the complex intersection of law and technology.</p>

          <p>Best regards,<br>
          <strong>The Beneficial Technology Team</strong></p>
        </div>

        <div class="footer">
          <div style="margin-bottom: 20px;">
            <div class="team-member">
              <div class="team-photo"></div>
              <div style="font-size: 12px; font-weight: 600;">Sarah Chen</div>
              <div style="font-size: 11px; color: #999;">Founder & CEO</div>
            </div>
            <div class="team-member">
              <div class="team-photo"></div>
              <div style="font-size: 12px; font-weight: 600;">Marcus Rodriguez</div>
              <div style="font-size: 11px; color: #999;">Co-Founder & CTO</div>
            </div>
            <div class="team-member">
              <div class="team-photo"></div>
              <div style="font-size: 12px; font-weight: 600;">Dr. Aisha Patel</div>
              <div style="font-size: 11px; color: #999;">Head of Regulatory</div>
            </div>
          </div>
          
          <p style="margin: 0; font-size: 12px; color: #999;">
            Beneficial Technology | Legal Engineering for the Crypto-Native Future<br>
            101 California Street, Suite 2450, San Francisco, CA 94111
          </p>
          
          <div style="margin-top: 15px;">
            <a href="#" style="color: #FA4C14; text-decoration: none; margin: 0 10px; font-size: 12px;">Unsubscribe</a>
            <a href="#" style="color: #FA4C14; text-decoration: none; margin: 0 10px; font-size: 12px;">Privacy Policy</a>
            <a href="#" style="color: #FA4C14; text-decoration: none; margin: 0 10px; font-size: 12px;">Contact Preferences</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

// Newsletter subscription
export async function subscribeToNewsletter(email: string) {
  try {
    if (!email || !email.includes('@')) {
      throw new Error('Invalid email address')
    }

    const resend = getResend()
    if (!resend) {
      console.warn('Resend API key not configured. Newsletter subscription disabled.')
      return { success: false, error: 'Email service not configured' }
    }

    const result = await resend.emails.send({
      from: 'hello@beneficial.technology',
      to: [email],
      subject: 'Welcome to Beneficial Technology Insights',
      html: generateNewsletterWelcomeTemplate(email),
    })

    // Also notify internal team
    await resend.emails.send({
      from: 'notifications@beneficial.technology',
      to: ['marketing@beneficial.technology'],
      subject: `New Newsletter Subscription: ${email}`,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subscribed:</strong> ${new Date().toISOString()}</p>
        <p>Please add to the newsletter list and marketing automation.</p>
      `,
    })

    return { success: true, result }
  } catch (error) {
    console.error('Newsletter subscription failed:', error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}

function generateNewsletterWelcomeTemplate(email: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Beneficial Technology Insights</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
        .header { background: linear-gradient(135deg, #FA4C14 0%, #FF6B35 100%); color: white; padding: 40px 30px; text-align: center; }
        .content { padding: 40px 30px; }
        .highlight { background: #fff3f0; padding: 20px; border-radius: 8px; border-left: 4px solid #FA4C14; margin: 20px 0; }
        .footer { background: #f8f9fa; padding: 30px; text-align: center; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 28px;">🎉 Welcome to the Future!</h1>
          <p style="margin: 15px 0 0 0; opacity: 0.9;">You're now part of the Beneficial Technology community</p>
        </div>
        
        <div class="content">
          <p>Thank you for subscribing to Beneficial Technology Insights!</p>
          
          <p>You'll now receive our weekly newsletter featuring:</p>
          <ul>
            <li>🚀 Latest developments in legal engineering</li>
            <li>📊 Regulatory updates across AI, blockchain, and deep science</li>
            <li>💡 Insights from our venture portfolio</li>
            <li>🎯 Exclusive invites to events and webinars</li>
          </ul>

          <div class="highlight">
            <h3 style="margin: 0 0 15px 0; color: #FA4C14;">📚 Recommended Reading</h3>
            <p style="margin: 0;">Start with these popular resources:</p>
            <ul style="margin: 10px 0 0 0; padding-left: 20px;">
              <li><a href="#" style="color: #FA4C14;">The Legal Engineering Manifesto</a></li>
              <li><a href="#" style="color: #FA4C14;">Crypto-Native Legal Structures: A Guide</a></li>
              <li><a href="#" style="color: #FA4C14;">AI Governance in Practice</a></li>
            </ul>
          </div>

          <p>Questions? Reply to this email or reach out to our team at <a href="mailto:hello@beneficial.technology">hello@beneficial.technology</a>.</p>
        </div>

        <div class="footer">
          <p>Beneficial Technology | Legal Engineering for the Crypto-Native Future</p>
          <div style="margin-top: 15px;">
            <a href="#" style="color: #FA4C14; text-decoration: none; margin: 0 10px;">Unsubscribe</a>
            <a href="#" style="color: #FA4C14; text-decoration: none; margin: 0 10px;">Update Preferences</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}
