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
                Last updated: {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p>
                    By accessing and using the website and services of Beneficial Technology ("we," "our," or "us"), 
                    you accept and agree to be bound by the terms and provision of this agreement. If you do not 
                    agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                  <p className="mb-4">
                    Beneficial Technology provides legal engineering services, venture building, strategic capital, 
                    and regulatory advisory services. Our services include but are not limited to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Legal infrastructure development for emerging technologies</li>
                    <li>Venture studio and incubation services</li>
                    <li>Strategic investment and advisory services</li>
                    <li>Regulatory compliance and legal engineering</li>
                    <li>Technology research and development</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Use License</h2>
                  <p className="mb-4">
                    Permission is granted to temporarily download one copy of the materials (information or software) 
                    on Beneficial Technology's website for personal, non-commercial transitory viewing only. This is 
                    the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                    <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Disclaimer</h2>
                  <p className="mb-4">
                    The materials on Beneficial Technology's website are provided on an 'as is' basis. Beneficial 
                    Technology makes no warranties, expressed or implied, and hereby disclaims and negates all other 
                    warranties including without limitation, implied warranties or conditions of merchantability, 
                    fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                  <p>
                    <strong>Important:</strong> The information provided on this website does not constitute legal advice 
                    and should not be relied upon as such. All legal matters should be discussed with qualified legal counsel.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Limitations</h2>
                  <p>
                    In no event shall Beneficial Technology or its suppliers be liable for any damages (including, 
                    without limitation, damages for loss of data or profit, or due to business interruption) arising 
                    out of the use or inability to use the materials on Beneficial Technology's website, even if 
                    Beneficial Technology or a Beneficial Technology authorized representative has been notified orally 
                    or in writing of the possibility of such damage.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Accuracy of Materials</h2>
                  <p>
                    The materials appearing on Beneficial Technology's website could include technical, typographical, 
                    or photographic errors. Beneficial Technology does not warrant that any of the materials on its 
                    website are accurate, complete, or current. Beneficial Technology may make changes to the materials 
                    contained on its website at any time without notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Links</h2>
                  <p>
                    Beneficial Technology has not reviewed all of the sites linked to its website and is not responsible 
                    for the contents of any such linked site. The inclusion of any link does not imply endorsement by 
                    Beneficial Technology of the site. Use of any such linked website is at the user's own risk.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Modifications</h2>
                  <p>
                    Beneficial Technology may revise these terms of service for its website at any time without notice. 
                    By using this website you are agreeing to be bound by the then current version of these Terms of Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
                  <p>
                    These terms and conditions are governed by and construed in accordance with the laws of the 
                    jurisdiction in which Beneficial Technology operates, and you irrevocably submit to the exclusive 
                    jurisdiction of the courts in that location.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">10. Intellectual Property Rights</h2>
                  <p className="mb-4">
                    The content on this website, including but not limited to text, graphics, logos, images, 
                    software, and other materials, is the property of Beneficial Technology and is protected by 
                    copyright, trademark, and other intellectual property laws.
                  </p>
                  <p>
                    You may not reproduce, distribute, modify, create derivative works of, publicly display, 
                    publicly perform, republish, download, store, or transmit any of the material on our website, 
                    except as follows:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</li>
                    <li>You may store files that are automatically cached by your Web browser for display enhancement purposes</li>
                    <li>You may print or download one copy of a reasonable number of pages of the website for your own personal, non-commercial use</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">11. User Conduct</h2>
                  <p className="mb-4">
                    You agree not to use the website or services to:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe upon the rights of others</li>
                    <li>Transmit harmful, offensive, or inappropriate content</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with the proper functioning of the website</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">12. Termination</h2>
                  <p>
                    We may terminate or suspend your access to our services immediately, without prior notice or 
                    liability, for any reason whatsoever, including without limitation if you breach the Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">13. Severability</h2>
                  <p>
                    If any provision of these Terms is held to be unenforceable or invalid, such provision will 
                    be changed and interpreted to accomplish the objectives of such provision to the greatest extent 
                    possible under applicable law and the remaining provisions will continue in full force and effect.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">14. Contact Information</h2>
                  <p className="mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <p className="mb-2"><strong>Email:</strong> legal@beneficial.technology</p>
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
