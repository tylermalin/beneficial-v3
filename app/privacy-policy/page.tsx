import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
              Privacy Policy
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
                  <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                  <p>
                    Beneficial Technology ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                    when you visit our website, use our services, or interact with us in any way.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
                  <p className="mb-4">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Name and contact information (email, phone number, address)</li>
                    <li>Professional information (company, job title, industry)</li>
                    <li>Communication preferences and history</li>
                    <li>Information provided through contact forms or consultations</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">2.2 Automatically Collected Information</h3>
                  <p className="mb-4">
                    When you visit our website, we automatically collect certain information, including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website and search terms</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                  <p className="mb-4">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Providing and improving our services</li>
                    <li>Communicating with you about our services</li>
                    <li>Responding to your inquiries and requests</li>
                    <li>Analyzing website usage and trends</li>
                    <li>Complying with legal obligations</li>
                    <li>Marketing and promotional activities (with your consent)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
                  <p className="mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations or court orders</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>To service providers who assist us in operating our business (under strict confidentiality agreements)</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational security measures to protect your 
                    personal information against unauthorized access, alteration, disclosure, or destruction. 
                    However, no method of transmission over the internet or electronic storage is 100% secure, 
                    and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
                  <p className="mb-4">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Access and review your personal information</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to or restrict certain processing activities</li>
                    <li>Data portability</li>
                    <li>Withdraw consent where processing is based on consent</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
                  <p>
                    We use cookies and similar tracking technologies to enhance your browsing experience, 
                    analyze website traffic, and understand where our visitors are coming from. You can 
                    control cookie settings through your browser preferences, though disabling cookies may 
                    affect website functionality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites. We are not responsible for the 
                    privacy practices or content of these external sites. We encourage you to review their 
                    privacy policies before providing any personal information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
                  <p>
                    Our services are not intended for children under the age of 13. We do not knowingly 
                    collect personal information from children under 13. If you believe we have collected 
                    such information, please contact us immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">10. International Data Transfers</h2>
                  <p>
                    Your information may be transferred to and processed in countries other than your own. 
                    We ensure that such transfers comply with applicable data protection laws and implement 
                    appropriate safeguards to protect your information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">11. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material 
                    changes by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                    Your continued use of our services after such changes constitutes acceptance of the updated policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
                  <p className="mb-4">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <p className="mb-2"><strong>Email:</strong> privacy@beneficial.technology</p>
                    <p className="mb-2"><strong>Address:</strong> [Your Business Address]</p>
                    <p><strong>Phone:</strong> [Your Business Phone]</p>
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
