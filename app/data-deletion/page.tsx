import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
              Data Deletion & Your Rights
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8 text-center">
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Your Data Rights</h2>
                  <p className="mb-4">
                    At Beneficial Technology, we believe in transparency and giving you control over your personal data. 
                    Depending on your location and applicable laws, you have several rights regarding your personal information.
                  </p>
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3 text-primary">Key Rights You Have:</h3>
                    <ul className="space-y-2">
                      <li>✅ <strong>Right to Access:</strong> Request a copy of your personal data</li>
                      <li>✅ <strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                      <li>✅ <strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                      <li>✅ <strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                      <li>✅ <strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                      <li>✅ <strong>Right to Object:</strong> Object to certain types of processing</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Requesting Data Deletion</h2>
                  <p className="mb-4">
                    You can request the deletion of your personal data at any time. Here's how to do it:
                  </p>
                  
                  <div className="bg-muted/30 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-3">Method 1: Email Request</h3>
                    <p className="mb-3">
                      Send an email to <strong>privacy@beneficial.technology</strong> with the subject line "Data Deletion Request"
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Include your full name, email address, and any other identifying information to help us locate your data.
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-3">Method 2: Contact Form</h3>
                    <p className="mb-3">
                      Use our <a href="/contact" className="text-primary hover:underline">contact form</a> and select "Data Deletion Request" as the subject.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Provide the same identifying information to ensure we can process your request accurately.
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Method 3: Phone Request</h3>
                    <p className="mb-3">
                      Call us at <strong>[Your Business Phone]</strong> and ask to speak with our privacy team.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We'll guide you through the verification process and document your request.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">What Happens After Your Request</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">1</div>
                      <div>
                        <h3 className="font-semibold">Verification (1-2 business days)</h3>
                        <p className="text-sm text-muted-foreground">
                          We'll verify your identity to ensure the request is legitimate and protect your data.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">2</div>
                      <div>
                        <h3 className="font-semibold">Data Review (3-5 business days)</h3>
                        <p className="text-sm text-muted-foreground">
                          Our team will locate all instances of your personal data across our systems.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">3</div>
                      <div>
                        <h3 className="font-semibold">Deletion Process (5-10 business days)</h3>
                        <p className="text-sm text-muted-foreground">
                          We'll securely delete your data from all our systems and databases.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">4</div>
                      <div>
                        <h3 className="font-semibold">Confirmation (Within 30 days)</h3>
                        <p className="text-sm text-muted-foreground">
                          You'll receive a detailed report of what was deleted and confirmation of completion.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">What We Delete</h2>
                  <p className="mb-4">
                    When you request data deletion, we will remove the following types of personal information:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Contact Information</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Name and email address</li>
                        <li>• Phone numbers</li>
                        <li>• Physical addresses</li>
                        <li>• Company information</li>
                      </ul>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Account Data</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• User accounts and profiles</li>
                        <li>• Login credentials</li>
                        <li>• Preferences and settings</li>
                        <li>• Communication history</li>
                      </ul>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Website Activity</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Browsing history</li>
                        <li>• Form submissions</li>
                        <li>• Cookie data</li>
                        <li>• Analytics information</li>
                      </ul>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Service Data</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Consultation records</li>
                        <li>• Service requests</li>
                        <li>• Payment information</li>
                        <li>• Legal documents</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Data We May Retain</h2>
                  <p className="mb-4">
                    In certain circumstances, we may be legally required to retain some information:
                  </p>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3 text-amber-800">Legal Obligations</h3>
                    <ul className="space-y-2 text-amber-700">
                      <li>• Financial records for tax purposes (typically 7 years)</li>
                      <li>• Legal contracts and agreements</li>
                      <li>• Regulatory compliance records</li>
                      <li>• Information required for ongoing legal proceedings</li>
                    </ul>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground">
                    If we must retain any data due to legal requirements, we will inform you of what is being kept 
                    and why, and ensure it's stored securely with minimal access.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Verification Requirements</h2>
                  <p className="mb-4">
                    To protect your privacy and prevent unauthorized deletion requests, we require verification:
                  </p>
                  
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">What You'll Need to Provide:</h3>
                    <ul className="space-y-2">
                      <li>• Full legal name as it appears in our records</li>
                      <li>• Email address associated with your account</li>
                      <li>• Phone number (if provided during registration)</li>
                      <li>• Company name (if applicable)</li>
                      <li>• Description of your relationship with us</li>
                    </ul>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground">
                    For additional security, we may request additional verification such as a government-issued ID 
                    or proof of address for high-risk deletion requests.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Timeline and Expectations</h2>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3 text-blue-800">Response Timeline</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span>Initial Response:</span>
                        <span className="font-semibold">Within 24 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Verification Complete:</span>
                        <span className="font-semibold">1-2 business days</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Deletion Process:</span>
                        <span className="font-semibold">5-10 business days</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Final Confirmation:</span>
                        <span className="font-semibold">Within 30 days</span>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                  
                  <div className="space-y-4">
                    <div className="border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Can I request partial deletion of my data?</h3>
                      <p className="text-sm text-muted-foreground">
                        Yes, you can request deletion of specific types of data while keeping others. Just specify 
                        what you'd like deleted in your request.
                      </p>
                    </div>

                    <div className="border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">What if I change my mind after requesting deletion?</h3>
                      <p className="text-sm text-muted-foreground">
                        You can cancel your deletion request within 24 hours of submission. After that, the process 
                        cannot be reversed.
                      </p>
                    </div>

                    <div className="border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Will deletion affect my ability to use your services?</h3>
                      <p className="text-sm text-muted-foreground">
                        Yes, deleting your account data will prevent you from accessing our services. You would 
                        need to create a new account if you wish to use our services again.
                      </p>
                    </div>

                    <div className="border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">How do I know my data was actually deleted?</h3>
                      <p className="text-sm text-muted-foreground">
                        We provide a detailed deletion report showing exactly what was removed from each system. 
                        You can also request a verification audit.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="mb-4">
                    If you have any questions about data deletion or your privacy rights, please contact us:
                  </p>
                  
                  <div className="bg-muted/30 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3">Privacy Team</h3>
                        <p className="mb-2"><strong>Email:</strong> privacy@beneficial.technology</p>
                        <p className="mb-2"><strong>Subject:</strong> Data Deletion Request</p>
                        <p><strong>Response Time:</strong> Within 24 hours</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">General Inquiries</h3>
                        <p className="mb-2"><strong>Email:</strong> hello@beneficial.technology</p>
                        <p className="mb-2"><strong>Phone:</strong> [Your Business Phone]</p>
                        <p><strong>Address:</strong> [Your Business Address]</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Ready to Request Data Deletion?</h2>
                  <p className="mb-6">
                    We're committed to making the data deletion process as simple and transparent as possible. 
                    Your privacy is important to us.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="mailto:privacy@beneficial.technology?subject=Data%20Deletion%20Request" 
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Send Deletion Request
                    </a>
                    <a 
                      href="/contact" 
                      className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
                    >
                      Contact Us First
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
