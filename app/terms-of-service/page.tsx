import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
              Terms of Service
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8 text-center">
                Last updated: November 21, 2025
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using the website and services of Beneficial Technology ("we," "our," or "us"), 
                    you accept and agree to be bound by the terms and provisions of this agreement. If you do not 
                    agree to abide by these Terms of Service, please do not use this website or our services.
                  </p>
                  <p className="mt-4">
                    These Terms of Service constitute a legally binding agreement between you and Beneficial Technology. 
                    Your use of our website or services constitutes your acceptance of these terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Description of Services</h2>
                  <p className="mb-4">
                    Beneficial Technology provides technology development, venture support, strategic advisory, and 
                    execution services. Our services include but are not limited to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Technology development and support services</li>
                    <li>Venture studio and incubation services</li>
                    <li>Strategic investment and capital services</li>
                    <li>Advisory and execution support</li>
                    <li>Technology, governance, and operational infrastructure development</li>
                    <li>Research and development services</li>
                    <li>Consultation and strategic planning services</li>
                  </ul>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any aspect of our services at any time 
                    without prior notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. No Professional Advice Disclaimer</h2>
                  <p className="mb-4">
                    <strong>IMPORTANT:</strong> The information provided on this website and through our services does 
                    NOT constitute legal, financial, tax, investment, or professional advice of any kind. Nothing on 
                    this website or in our communications should be construed as:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Legal advice or the practice of law</li>
                    <li>Financial or investment advice</li>
                    <li>Tax advice</li>
                    <li>Business or professional advice</li>
                    <li>Regulatory or compliance advice</li>
                  </ul>
                  <p className="mb-4">
                    Use of this website or our services does not create an attorney-client relationship, fiduciary 
                    relationship, or any other professional advisory relationship unless explicitly agreed to in writing 
                    through a separate engagement agreement.
                  </p>
                  <p>
                    You should consult with qualified professionals (including attorneys, accountants, financial advisors, 
                    and other experts) before making any decisions based on information obtained from this website or 
                    our services. We make no representations or warranties regarding the suitability of any information 
                    for your specific circumstances.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Use License</h2>
                  <p className="mb-4">
                    Permission is granted to temporarily download one copy of the materials (information or software) 
                    on Beneficial Technology's website for personal, non-commercial transitory viewing only. This is 
                    the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer, decompile, or disassemble any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                    <li>Use the materials in any way that violates applicable laws or regulations</li>
                  </ul>
                  <p>
                    This license shall automatically terminate if you violate any of these restrictions and may be 
                    terminated by Beneficial Technology at any time. Upon terminating your viewing of these materials 
                    or upon the termination of this license, you must destroy any downloaded materials in your 
                    possession whether in electronic or printed format.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
                  <p className="mb-4">
                    The content on this website, including but not limited to text, graphics, logos, images, 
                    software, trademarks, service marks, and other materials, is the property of Beneficial Technology 
                    or its licensors and is protected by copyright, trademark, patent, trade secret, and other 
                    intellectual property laws.
                  </p>
                  <p className="mb-4">
                    You may not reproduce, distribute, modify, create derivative works of, publicly display, 
                    publicly perform, republish, download, store, or transmit any of the material on our website, 
                    except as follows:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</li>
                    <li>You may store files that are automatically cached by your Web browser for display enhancement purposes</li>
                    <li>You may print or download one copy of a reasonable number of pages of the website for your own personal, non-commercial use</li>
                  </ul>
                  <p>
                    Any unauthorized use of the materials on this website may violate copyright laws, trademark laws, 
                    and other applicable laws and may result in civil or criminal penalties.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Disclaimer of Warranties</h2>
                  <p className="mb-4">
                    The materials on Beneficial Technology's website are provided on an "as is" and "as available" basis. 
                    Beneficial Technology makes no warranties, expressed or implied, and hereby disclaims and negates all 
                    other warranties including without limitation:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Implied warranties or conditions of merchantability</li>
                    <li>Fitness for a particular purpose</li>
                    <li>Non-infringement of intellectual property or other violation of rights</li>
                    <li>Accuracy, completeness, or reliability of information</li>
                    <li>Uninterrupted or error-free operation</li>
                    <li>Freedom from viruses or other harmful components</li>
                  </ul>
                  <p>
                    Beneficial Technology does not warrant or make any representations concerning the accuracy, likely 
                    results, or reliability of the use of the materials on its website or otherwise relating to such 
                    materials or on any sites linked to this site.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                  <p className="mb-4">
                    To the fullest extent permitted by applicable law, in no event shall Beneficial Technology, its 
                    affiliates, officers, directors, employees, agents, or licensors be liable for any direct, indirect, 
                    incidental, special, consequential, or punitive damages, including without limitation:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Loss of profits, revenue, data, use, goodwill, or other intangible losses</li>
                    <li>Damages resulting from your use or inability to use the website or services</li>
                    <li>Damages resulting from any conduct or content of third parties on the website</li>
                    <li>Damages resulting from unauthorized access to or use of our servers or any personal information stored therein</li>
                    <li>Damages resulting from any errors or omissions in any content or for any loss or damage of any kind incurred as a result of your use of any content posted, transmitted, or otherwise made available through the website</li>
                  </ul>
                  <p>
                    This limitation of liability applies regardless of the theory of liability, whether based on contract, 
                    tort, negligence, strict liability, or otherwise, even if Beneficial Technology has been advised of 
                    the possibility of such damages. Some jurisdictions do not allow the exclusion or limitation of 
                    incidental or consequential damages, so the above limitation or exclusion may not apply to you.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. User Conduct</h2>
                  <p className="mb-4">
                    You agree not to use the website or services to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Violate any applicable laws, regulations, or third-party rights</li>
                    <li>Infringe upon the intellectual property rights of others</li>
                    <li>Transmit harmful, offensive, defamatory, or inappropriate content</li>
                    <li>Attempt to gain unauthorized access to our systems, networks, or data</li>
                    <li>Interfere with or disrupt the proper functioning of the website or services</li>
                    <li>Use automated systems to access the website without permission</li>
                    <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                    <li>Collect or store personal data about other users without their consent</li>
                    <li>Engage in any activity that could harm, disable, or overburden our systems</li>
                  </ul>
                  <p>
                    We reserve the right to investigate and take appropriate legal action against anyone who violates 
                    these terms, including without limitation, removing offending content, suspending or terminating 
                    accounts, and reporting violations to law enforcement authorities.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites, services, or resources. Beneficial Technology 
                    has not reviewed all of the sites linked to its website and is not responsible for the contents, 
                    privacy practices, or availability of any such linked site. The inclusion of any link does not imply 
                    endorsement by Beneficial Technology of the site. Use of any such linked website is at the user's own 
                    risk. We encourage you to review the terms and privacy policies of any third-party sites you visit.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">10. Modifications to Terms</h2>
                  <p>
                    Beneficial Technology may revise these Terms of Service for its website at any time without notice. 
                    By using this website, you are agreeing to be bound by the then current version of these Terms of 
                    Service. We will notify you of any material changes by posting the updated terms on this page and 
                    updating the "Last updated" date. Your continued use of our services after such changes constitutes 
                    acceptance of the updated terms. If you do not agree to the modified terms, you must discontinue 
                    use of our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">11. Termination</h2>
                  <p className="mb-4">
                    We may terminate or suspend your access to our services immediately, without prior notice or 
                    liability, for any reason whatsoever, including without limitation if you breach the Terms. 
                    Upon termination:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Your right to use the website and services will immediately cease</li>
                    <li>We may delete or disable your account and all related information and files</li>
                    <li>All provisions of these Terms that by their nature should survive termination shall survive, 
                        including ownership provisions, warranty disclaimers, indemnity, and limitations of liability</li>
                  </ul>
                  <p>
                    You may also terminate your use of our services at any time by discontinuing use of the website 
                    and services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">12. Severability</h2>
                  <p>
                    If any provision of these Terms is held to be unenforceable or invalid by a court of competent 
                    jurisdiction, such provision will be changed and interpreted to accomplish the objectives of such 
                    provision to the greatest extent possible under applicable law and the remaining provisions will 
                    continue in full force and effect. The invalid or unenforceable provision will be replaced with a 
                    valid and enforceable provision that comes closest to the intent underlying the invalid or 
                    unenforceable provision.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">13. Governing Law</h2>
                  <p>
                    These terms and conditions are governed by and construed in accordance with the laws of the 
                    jurisdiction in which Beneficial Technology operates, without regard to its conflict of law 
                    provisions. You irrevocably submit to the exclusive jurisdiction of the courts in that location 
                    for the resolution of any disputes arising out of or relating to these Terms or your use of our 
                    services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
                  <p className="mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <p className="mb-2"><strong>Beneficial Technology</strong></p>
                    <p className="mb-2"><strong>Email:</strong> legal@beneficial.technology</p>
                    <p className="mb-2"><strong>Address:</strong> 8 The Green, Ste A, Dover, DE 19901</p>
                    <p><strong>Phone:</strong> (760) 652-9968</p>
                  </div>
                  <p className="mt-4">
                    For general inquiries, you may contact us at hello@beneficial.technology.
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
