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
                Last updated: November 21, 2025
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                  <p className="mb-4">
                    At Beneficial Technology, we are committed to transparency and giving you control over your personal data. 
                    This page explains your data rights and how to request deletion of your personal information.
                  </p>
                  <p>
                    Depending on your location and applicable data protection laws (such as GDPR, CCPA, CPRA), you have 
                    several rights regarding your personal information. This document outlines these rights and the process 
                    for exercising them, particularly the right to request deletion of your data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Your Data Rights</h2>
                  <p className="mb-4">
                    You have the following rights regarding your personal data, subject to applicable law:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Right to Access</h3>
                      <p className="text-muted-foreground">
                        You have the right to request access to and receive a copy of your personal data that we hold. 
                        This includes information about what data we have, how we use it, and with whom we share it.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Right to Rectification</h3>
                      <p className="text-muted-foreground">
                        You have the right to request correction of inaccurate or incomplete personal data. We will 
                        update your information promptly upon verification of your identity and the accuracy of the 
                        correction request.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Right to Erasure</h3>
                      <p className="text-muted-foreground">
                        You have the right to request deletion of your personal data, subject to certain exceptions 
                        where we may be required to retain data for legal, regulatory, or legitimate business purposes.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Right to Restrict Processing</h3>
                      <p className="text-muted-foreground">
                        You have the right to request that we restrict the processing of your personal data in certain 
                        circumstances, such as when you contest the accuracy of the data or object to processing.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Right to Data Portability</h3>
                      <p className="text-muted-foreground">
                        You have the right to receive your personal data in a structured, commonly used, and 
                        machine-readable format and to transmit that data to another service provider, where technically feasible.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Right to Object</h3>
                      <p className="text-muted-foreground">
                        You have the right to object to certain types of processing of your personal data, including 
                        processing for direct marketing purposes or processing based on legitimate interests.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Requesting Data Deletion</h2>
                  <p className="mb-4">
                    You can request the deletion of your personal data at any time using any of the following methods:
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-muted/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-3">Method 1: Email Request</h3>
                      <p className="mb-3">
                        Send an email to <strong>privacy@beneficial.technology</strong> with the subject line 
                        "Data Deletion Request".
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Include your full name, email address, and any other identifying information to help us 
                        locate your data. Please provide sufficient information to verify your identity.
                      </p>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-3">Method 2: Contact Form</h3>
                      <p className="mb-3">
                        Use our <a href="/contact" className="text-primary hover:underline">contact form</a> and 
                        select "Data Deletion Request" as the subject or include it in your message.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Provide the same identifying information to ensure we can process your request accurately 
                        and verify your identity.
                      </p>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-3">Method 3: Phone Request</h3>
                      <p className="mb-3">
                        Call us at <strong>(760) 652-9968</strong> and ask to speak with our privacy team.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        We will guide you through the verification process and document your request. You may be 
                        asked to follow up with a written request to confirm your identity.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">What Happens After Your Request</h2>
                  <p className="mb-4">
                    Once we receive your data deletion request, we follow a structured process to ensure your request 
                    is handled securely and in accordance with applicable law:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Step 1: Verification (1-2 business days)</h3>
                      <p className="text-muted-foreground">
                        We will verify your identity to ensure the request is legitimate and protect your data from 
                        unauthorized deletion. This may require you to provide additional identifying information.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Step 2: Data Review (3-5 business days)</h3>
                      <p className="text-muted-foreground">
                        Our team will locate all instances of your personal data across our systems, databases, and 
                        third-party service providers. We will identify what data can be deleted and what data must 
                        be retained for legal or regulatory purposes.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Step 3: Deletion Process (5-10 business days)</h3>
                      <p className="text-muted-foreground">
                        We will securely delete your data from all our systems and databases. This includes removing 
                        data from active systems, backup systems, and archived records where technically feasible and 
                        legally permissible.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Step 4: Confirmation (within 30 days)</h3>
                      <p className="text-muted-foreground">
                        You will receive a detailed report of what was deleted and confirmation of completion. If any 
                        data must be retained for legal or regulatory reasons, we will inform you of what is being 
                        kept and why.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">What We Delete</h2>
                  <p className="mb-4">
                    When you request data deletion, we will remove the following types of personal information, 
                    subject to legal retention requirements:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Contact Information</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>Name and email address</li>
                        <li>Phone numbers</li>
                        <li>Physical addresses</li>
                        <li>Company information</li>
                      </ul>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Account Data</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>User accounts and profiles</li>
                        <li>Login credentials</li>
                        <li>Preferences and settings</li>
                        <li>Communication history</li>
                      </ul>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Website Activity</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>Browsing history</li>
                        <li>Form submissions</li>
                        <li>Cookie data</li>
                        <li>Analytics information</li>
                      </ul>
                    </div>

                    <div className="bg-muted/30 rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Service Data</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>Consultation records</li>
                        <li>Service requests</li>
                        <li>Payment information (where not required for tax/legal purposes)</li>
                        <li>Legal documents (where not required for retention)</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Data We May Retain</h2>
                  <p className="mb-4">
                    In certain circumstances, we may be legally required or permitted to retain some information, 
                    even after a deletion request:
                  </p>
                  
                  <div className="bg-muted/30 border border-border rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Legal Obligations</h3>
                    <ul className="space-y-2">
                      <li>Financial records for tax purposes (typically 7 years as required by law)</li>
                      <li>Legal contracts and agreements that are still in effect</li>
                      <li>Regulatory compliance records required by applicable laws</li>
                      <li>Information required for ongoing legal proceedings or investigations</li>
                      <li>Data necessary to establish, exercise, or defend legal claims</li>
                      <li>Information required to comply with court orders or governmental requests</li>
                    </ul>
                  </div>

                  <p className="mt-4">
                    If we must retain any data due to legal requirements, we will inform you of what is being kept 
                    and why, and ensure it is stored securely with minimal access. We will only retain data for as 
                    long as legally required or necessary for the stated purpose.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Verification Requirements</h2>
                  <p className="mb-4">
                    To protect your privacy and prevent unauthorized deletion requests, we require verification of 
                    your identity. The following information is typically required:
                  </p>
                  
                  <div className="bg-muted/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-3">Required Identifying Information:</h3>
                    <ul className="space-y-2">
                      <li>Full legal name as it appears in our records</li>
                      <li>Email address associated with your account</li>
                      <li>Phone number (if provided during registration or service engagement)</li>
                      <li>Company name (if applicable)</li>
                      <li>Description of your relationship with us</li>
                      <li>Any account numbers or reference numbers associated with your account</li>
                    </ul>
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground">
                    For additional security, we may request additional verification such as a government-issued ID 
                    or proof of address for high-risk deletion requests or when we cannot verify your identity 
                    through standard means. This helps ensure that only authorized individuals can request deletion 
                    of personal data.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Timeline and Expectations</h2>
                  <p className="mb-4">
                    We are committed to processing your data deletion request promptly and in accordance with 
                    applicable law. The following timelines apply:
                  </p>
                  
                  <div className="bg-muted/30 border border-border rounded-lg p-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span><strong>Initial Response:</strong></span>
                        <span>Within 24 hours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span><strong>Verification Complete:</strong></span>
                        <span>1-2 business days</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span><strong>Data Review:</strong></span>
                        <span>3-5 business days</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span><strong>Deletion Process:</strong></span>
                        <span>5-10 business days</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span><strong>Final Confirmation:</strong></span>
                        <span>Within 30 days of request</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    These timelines may be extended in complex cases or when verification requires additional time. 
                    We will keep you informed of any delays and the reasons for such delays.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                  
                  <div className="space-y-4">
                    <div className="border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Can I request partial deletion of my data?</h3>
                      <p className="text-sm text-muted-foreground">
                        Yes, you can request deletion of specific types of data while keeping others. Just specify 
                        what you would like deleted in your request. We will process partial deletion requests in 
                        the same manner as full deletion requests.
                      </p>
                    </div>

                    <div className="border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">What if I change my mind after requesting deletion?</h3>
                      <p className="text-sm text-muted-foreground">
                        You can cancel your deletion request within 24 hours of submission by contacting us at 
                        privacy@beneficial.technology. After that time, the deletion process may have begun and 
                        cannot be reversed. Once data is deleted, it cannot be recovered.
                      </p>
                    </div>

                    <div className="border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">Will deletion affect my ability to use your services?</h3>
                      <p className="text-sm text-muted-foreground">
                        Yes, deleting your account data will prevent you from accessing our services that require 
                        an account. You would need to create a new account if you wish to use our services again. 
                        If you have active service agreements, please contact us before requesting deletion to 
                        understand the implications.
                      </p>
                    </div>

                    <div className="border border-border rounded-lg p-4">
                      <h3 className="font-semibold mb-2">How do I know my data was actually deleted?</h3>
                      <p className="text-sm text-muted-foreground">
                        We provide a detailed deletion report showing exactly what was removed from each system. 
                        You can also request a verification audit. However, please note that some data may remain 
                        in backup systems for a limited period before being permanently deleted, and some data 
                        may be retained for legal or regulatory reasons as described above.
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
                        <p className="mb-2"><strong>Phone:</strong> (760) 652-9968</p>
                        <p><strong>Address:</strong> 8 The Green, Ste A, Dover, DE 19901</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Closing Statement</h2>
                  <p>
                    Beneficial Technology is committed to protecting your privacy and respecting your data rights. 
                    We take our obligations under applicable data protection laws seriously and are dedicated to 
                    providing transparent, secure, and compliant data handling practices. If you have any concerns 
                    about how we handle your personal data or if you believe we have not adequately addressed your 
                    request, please contact us using the information provided above.
                  </p>
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
