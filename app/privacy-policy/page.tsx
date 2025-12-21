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
                Last updated: November 21, 2025
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                  <p>
                    Beneficial Technology ("we," "our," or "us") is committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                    when you visit our website, use our services, or interact with us in any way.
                  </p>
                  <p className="mt-4">
                    By using our website or services, you consent to the data practices described in this policy. 
                    If you do not agree with the practices described in this Privacy Policy, please do not use our 
                    website or services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
                  <p className="mb-4">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Name and contact information (email address, phone number, mailing address)</li>
                    <li>Professional information (company name, job title, industry, business address)</li>
                    <li>Communication preferences and history</li>
                    <li>Information provided through contact forms, consultations, or service requests</li>
                    <li>Payment and billing information (when applicable)</li>
                    <li>Any other information you choose to provide to us</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3">2.2 Automatically Collected Information</h3>
                  <p className="mb-4">
                    When you visit our website, we automatically collect certain information, including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website and search terms</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Clickstream data and navigation patterns</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                  <p className="mb-4">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Providing, operating, and maintaining our services</li>
                    <li>Improving and personalizing your experience</li>
                    <li>Communicating with you about our services, updates, and promotional materials</li>
                    <li>Responding to your inquiries, requests, and comments</li>
                    <li>Processing transactions and managing accounts</li>
                    <li>Analyzing website usage, trends, and user behavior</li>
                    <li>Detecting, preventing, and addressing technical issues and security threats</li>
                    <li>Complying with legal obligations and regulatory requirements</li>
                    <li>Enforcing our terms and conditions</li>
                    <li>Marketing and promotional activities (with your consent where required)</li>
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
                    <li>To comply with legal obligations, court orders, or governmental requests</li>
                    <li>To protect our rights, property, or safety, or that of our users or others</li>
                    <li>To service providers, contractors, and other third parties who assist us in operating our business, 
                        conducting our services, or serving our users, provided such parties agree to keep this information 
                        confidential and use it only for the purposes for which we disclose it to them</li>
                    <li>In connection with a business transfer, merger, consolidation, or sale of assets</li>
                    <li>To prevent or investigate possible wrongdoing in connection with our services</li>
                    <li>To protect against legal liability</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                  <p className="mb-4">
                    We implement appropriate technical and organizational security measures to protect your 
                    personal information against unauthorized access, alteration, disclosure, or destruction. 
                    These measures include:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication procedures</li>
                    <li>Employee training on data protection</li>
                    <li>Secure data storage and backup procedures</li>
                  </ul>
                  <p>
                    However, no method of transmission over the internet or electronic storage is 100% secure, 
                    and we cannot guarantee absolute security. You acknowledge that you provide your personal 
                    information at your own risk.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Your Rights and Choices</h2>
                  <p className="mb-4">
                    Depending on your location and applicable data protection laws (such as GDPR, CCPA, CPRA), 
                    you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Right to Access:</strong> Request access to and receive a copy of your personal information</li>
                    <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Right to Erasure:</strong> Request deletion of your personal information (subject to certain exceptions)</li>
                    <li><strong>Right to Restrict Processing:</strong> Request restriction of processing of your personal information</li>
                    <li><strong>Right to Data Portability:</strong> Request transfer of your personal information to another service provider</li>
                    <li><strong>Right to Object:</strong> Object to certain types of processing of your personal information</li>
                    <li><strong>Right to Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                    <li><strong>Right to Opt-Out:</strong> Opt-out of the sale or sharing of personal information (where applicable)</li>
                  </ul>
                  <p className="mb-4">
                    To exercise these rights, please contact us using the information provided in the Contact Us section below. 
                    We will respond to your request within the timeframes required by applicable law.
                  </p>
                  <p>
                    For more detailed information about data deletion and your rights, please see our 
                    <a href="/data-deletion" className="text-primary hover:underline"> Data Deletion & Your Rights</a> page.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
                  <p className="mb-4">
                    We use cookies and similar tracking technologies to enhance your browsing experience, 
                    analyze website traffic, understand where our visitors are coming from, and improve our services. 
                    Cookies are small data files stored on your device that help us remember your preferences and 
                    track your interactions with our website.
                  </p>
                  <p className="mb-4">
                    Types of cookies we may use include:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                    <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</li>
                  </ul>
                  <p>
                    You can control cookie settings through your browser preferences. Most browsers allow you to 
                    refuse or accept cookies, and to delete cookies. However, disabling cookies may affect 
                    website functionality and your ability to use certain features of our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites, services, or applications. We are not 
                    responsible for the privacy practices or content of these external sites. We encourage you to 
                    review the privacy policies of any third-party sites you visit before providing any personal 
                    information. This Privacy Policy applies only to information collected by Beneficial Technology.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
                  <p>
                    Our services are not intended for children under the age of 13 (or the applicable age of 
                    majority in your jurisdiction). We do not knowingly collect personal information from children 
                    under 13. If you are a parent or guardian and believe that your child has provided us with 
                    personal information, please contact us immediately. If we become aware that we have collected 
                    personal information from a child under 13, we will take steps to delete such information 
                    promptly.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">10. International Data Transfers</h2>
                  <p className="mb-4">
                    Your information may be transferred to and processed in countries other than your own, including 
                    countries that may not have the same data protection laws as your country of residence. We ensure 
                    that such transfers comply with applicable data protection laws and implement appropriate safeguards 
                    to protect your information, including:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Standard contractual clauses approved by relevant data protection authorities</li>
                    <li>Other appropriate legal mechanisms to ensure adequate protection</li>
                  </ul>
                  <p>
                    By using our services, you consent to the transfer of your information to countries outside your 
                    country of residence, subject to the safeguards described above.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">11. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices, 
                    technology, legal requirements, or other factors. We will notify you of any material changes by 
                    posting the new Privacy Policy on this page and updating the "Last updated" date. We may also 
                    notify you by email or through other means if the changes are significant. Your continued use of 
                    our services after such changes constitutes acceptance of the updated policy. We encourage you to 
                    review this Privacy Policy periodically to stay informed about how we protect your information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
                  <p className="mb-4">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy 
                    practices, please contact us:
                  </p>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <p className="mb-2"><strong>Beneficial Technology</strong></p>
                    <p className="mb-2"><strong>Email:</strong> privacy@beneficial.technology</p>
                    <p className="mb-2"><strong>Address:</strong> 8 The Green, Ste A, Dover, DE 19901</p>
                    <p><strong>Phone:</strong> (760) 652-9968</p>
                  </div>
                  <p className="mt-4">
                    For general inquiries, you may also contact us at hello@beneficial.technology. For legal matters, 
                    please contact legal@beneficial.technology.
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
