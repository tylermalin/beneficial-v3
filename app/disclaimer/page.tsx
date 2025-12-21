import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
              Legal Disclaimer
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8 text-center">
                Last updated: November 21, 2025
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. General Information Disclaimer</h2>
                  <p className="mb-4">
                    All information provided on this website is for general informational purposes only and is provided 
                    "as is" without warranties of any kind, either express or implied. Beneficial Technology makes no 
                    representations or warranties regarding the accuracy, completeness, reliability, suitability, or 
                    availability of any information, products, services, or related graphics contained on this website 
                    for any purpose.
                  </p>
                  <p>
                    The content on this website may change without notice and may not always be complete, accurate, or 
                    up to date. Beneficial Technology reserves the right to modify, update, or remove any content on 
                    this website at any time without prior notice. Any reliance you place on such information is 
                    strictly at your own risk.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. No Professional Advice</h2>
                  <p className="mb-4">
                    Nothing on this website constitutes, and nothing should be construed as:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Legal advice or the practice of law</li>
                    <li>Financial or investment advice</li>
                    <li>Tax advice</li>
                    <li>Business or professional advice</li>
                    <li>Regulatory or compliance advice</li>
                    <li>Any other form of professional advice</li>
                  </ul>
                  <p className="mb-4">
                    The information on this website is not intended to be a substitute for professional advice. Use of 
                    this website or our services does not create an attorney-client relationship, fiduciary relationship, 
                    or any other professional advisory relationship unless explicitly agreed to in writing through a 
                    separate engagement agreement.
                  </p>
                  <p>
                    You should consult with qualified professionals (including attorneys, accountants, financial advisors, 
                    tax professionals, and other experts) before making any decisions based on information obtained from 
                    this website or our services. We make no representations or warranties regarding the suitability of 
                    any information for your specific circumstances.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. No Guarantees or Representations</h2>
                  <p className="mb-4">
                    Beneficial Technology makes no guarantees, representations, or warranties regarding:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Outcomes or results of any kind</li>
                    <li>Performance of any services or products</li>
                    <li>Compliance results or regulatory approvals</li>
                    <li>Financial returns, profits, or business success</li>
                    <li>Regulatory approvals or compliance status</li>
                    <li>Suitability of any information, service, or product for a specific purpose</li>
                    <li>Uninterrupted or error-free operation of the website or services</li>
                    <li>Freedom from viruses, malware, or other harmful components</li>
                  </ul>
                  <p>
                    Any statements made on this website regarding potential outcomes, results, or benefits are forward-looking 
                    statements that are subject to risks, uncertainties, and assumptions. Actual results may differ 
                    materially from those expressed or implied in such statements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Technology & Innovation Risk Disclaimer</h2>
                  <p className="mb-4">
                    Emerging technologies, including but not limited to artificial intelligence, blockchain, energy systems, 
                    quantum computing, biotechnology, and other frontier technologies, involve inherent risks, uncertainties, 
                    and regulatory changes. These risks include:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Rapid technological change and obsolescence</li>
                    <li>Regulatory uncertainty and evolving legal frameworks</li>
                    <li>Market volatility and economic risks</li>
                    <li>Technical failures, security vulnerabilities, and cyber threats</li>
                    <li>Intellectual property disputes and infringement risks</li>
                    <li>Operational and execution risks</li>
                    <li>Competition and market disruption</li>
                    <li>Environmental, health, and safety risks</li>
                  </ul>
                  <p>
                    You acknowledge and agree that you assume full responsibility for any decisions made based on website 
                    content or services. Beneficial Technology shall not be liable for any losses, damages, or negative 
                    consequences resulting from your use of or reliance on information related to emerging technologies 
                    or our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Third-Party Content and Links</h2>
                  <p className="mb-4">
                    This website may reference, link to, or incorporate content from third-party websites, services, 
                    or resources. Beneficial Technology is not responsible for:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>The accuracy, completeness, or reliability of third-party content</li>
                    <li>The availability or functionality of third-party websites or services</li>
                    <li>The privacy practices or data handling of third parties</li>
                    <li>The terms of service or policies of third-party providers</li>
                    <li>Any losses or damages arising from your use of or reliance on third-party content or services</li>
                  </ul>
                  <p>
                    The inclusion of any link or reference to third-party content does not imply endorsement by 
                    Beneficial Technology. Your use of third-party websites, services, or content is at your own risk, 
                    and you should review the terms and policies of such third parties before using their services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                  <p className="mb-4">
                    To the fullest extent permitted by applicable law, Beneficial Technology, its affiliates, officers, 
                    directors, employees, agents, and licensors shall not be liable for any direct, indirect, incidental, 
                    special, consequential, or punitive damages arising from:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Your use of or inability to use the website or services</li>
                    <li>Your reliance on any information, content, or materials on the website</li>
                    <li>Any errors or omissions in the website content</li>
                    <li>Any unauthorized access to or use of our servers or data</li>
                    <li>Any interruption or cessation of transmission to or from the website</li>
                    <li>Any bugs, viruses, trojan horses, or the like that may be transmitted through the website</li>
                    <li>Any loss of profits, revenue, data, use, goodwill, or other intangible losses</li>
                    <li>Any decisions made or actions taken based on information from the website</li>
                  </ul>
                  <p>
                    This limitation of liability applies regardless of the theory of liability, whether based on contract, 
                    tort, negligence, strict liability, or otherwise, even if Beneficial Technology has been advised of 
                    the possibility of such damages. Some jurisdictions do not allow the exclusion or limitation of 
                    incidental or consequential damages, so the above limitation or exclusion may not apply to you.
                  </p>
                  <p className="mt-4">
                    This section should be read in conjunction with, but does not replace, the Limitation of Liability 
                    provisions in our Terms of Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Jurisdictional Limitations</h2>
                  <p className="mb-4">
                    Laws and regulations vary by jurisdiction. The information and content on this website may not be 
                    applicable, appropriate, or legal in all locations. You are responsible for:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Understanding and complying with applicable local, state, national, and international laws</li>
                    <li>Determining whether the information on this website is appropriate for your jurisdiction</li>
                    <li>Seeking local legal, financial, and professional advice as necessary</li>
                    <li>Ensuring that your use of this website and our services complies with all applicable laws</li>
                  </ul>
                  <p>
                    Beneficial Technology makes no representation that the website or services are appropriate or available 
                    for use in all jurisdictions. Access to the website from jurisdictions where such access is illegal 
                    is prohibited. If you choose to access the website, you do so at your own initiative and are 
                    responsible for compliance with local laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Changes to This Disclaimer</h2>
                  <p>
                    Beneficial Technology may update this Legal Disclaimer at any time without prior notice. Changes are 
                    effective immediately upon posting to this page. We will update the "Last updated" date at the top of 
                    this page to reflect when changes were made. Your continued use of this website after any changes 
                    constitutes acceptance of the updated disclaimer. We encourage you to review this Legal Disclaimer 
                    periodically to stay informed about our disclaimers and limitations.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
                  <p className="mb-4">
                    If you have any questions about this Legal Disclaimer, please contact us:
                  </p>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <p className="mb-2"><strong>Beneficial Technology</strong></p>
                    <p className="mb-2"><strong>Email:</strong> legal@beneficial.technology</p>
                    <p className="mb-2"><strong>Address:</strong> 8 The Green, Ste A, Dover, DE 19901</p>
                    <p><strong>Phone:</strong> (760) 652-9968</p>
                  </div>
                  <p className="mt-4">
                    For general inquiries, you may contact us at hello@beneficial.technology. For privacy-related 
                    matters, please contact privacy@beneficial.technology.
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

