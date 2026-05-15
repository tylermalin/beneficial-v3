import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export const metadata = {
  title: 'Disclaimer — Beneficial Technology',
  description: 'Beneficial Technology is not a law firm and does not provide legal advice. Full disclaimer.',
}

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />

      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 border-b border-rule">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] text-sienna font-medium mb-6">
              Disclaimer
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest leading-[1.1] tracking-tight">
              We&apos;re not a law firm. <em className="italic font-light">This page explains exactly what that means.</em>
            </h1>
            <p className="mt-6 text-sm text-slate-soft">
              Last updated: November 21, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-14 text-base text-slate-ink leading-relaxed">

            <DisclaimerSection num="01" title="What we are, and what we aren't">
              <p>
                Beneficial Technology is a Delaware limited liability company providing strategic and structural consulting services. We are <strong className="text-forest">not a law firm</strong>. We do not provide legal advice. We do not represent clients in legal matters. We do not file regulatory submissions on your behalf.
              </p>
              <p>
                Engaging Beneficial Technology does not create an attorney-client relationship, fiduciary relationship, or any other professional advisory relationship except as expressly stated in a written engagement agreement signed by both parties.
              </p>
              <p>
                For any matter requiring legal advice or representation, you must engage a licensed attorney separately. We are happy to help you select the right counsel.
              </p>
            </DisclaimerSection>

            <DisclaimerSection num="02" title="General information disclaimer">
              <p>
                All information on this website is for general informational purposes only and is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied. We make no representations or warranties regarding the accuracy, completeness, reliability, suitability, or availability of any information, products, services, or related graphics on this website.
              </p>
              <p>
                Content may change without notice and may not always be complete, accurate, or up to date. Any reliance you place on information here is strictly at your own risk.
              </p>
            </DisclaimerSection>

            <DisclaimerSection num="03" title="No professional advice">
              <p>
                Nothing on this website constitutes, and nothing should be construed as:
              </p>
              <ul className="space-y-1.5 mt-3 pl-5 list-disc marker:text-sienna">
                <li>Legal advice or the practice of law</li>
                <li>Financial or investment advice</li>
                <li>Tax advice</li>
                <li>Regulatory or compliance advice</li>
                <li>Any other form of professional advice</li>
              </ul>
              <p>
                You should consult qualified professionals (attorneys, accountants, financial advisors, tax professionals, and other experts) before making any decisions based on information obtained from this website or our services.
              </p>
            </DisclaimerSection>

            <DisclaimerSection num="04" title="No guarantees or representations">
              <p>
                We make no guarantees, representations, or warranties regarding outcomes, results, performance of services, regulatory approvals, financial returns, business success, or the suitability of any information or service for a specific purpose.
              </p>
              <p>
                Forward-looking statements involve risks, uncertainties, and assumptions. Actual results may differ materially from those expressed or implied.
              </p>
            </DisclaimerSection>

            <DisclaimerSection num="05" title="Frontier-technology risk">
              <p>
                Our work touches emerging technologies — including but not limited to tokenization, blockchain infrastructure, AI, climate-asset issuance, and other frontier systems — that involve inherent risks: rapid technological change, regulatory uncertainty, market volatility, technical failures, intellectual property disputes, operational risk, and competition.
              </p>
              <p>
                You acknowledge that you assume full responsibility for any decisions made based on website content or services. We shall not be liable for losses, damages, or negative consequences resulting from your use of or reliance on information related to emerging technologies or our services.
              </p>
            </DisclaimerSection>

            <DisclaimerSection num="06" title="Third-party content and links">
              <p>
                This website may reference, link to, or incorporate content from third-party websites, services, or resources. We are not responsible for the accuracy, availability, privacy practices, or terms of third-party content or services. The inclusion of any link does not imply endorsement.
              </p>
            </DisclaimerSection>

            <DisclaimerSection num="07" title="Limitation of liability">
              <p>
                To the fullest extent permitted by applicable law, Beneficial Technology and its affiliates, officers, directors, employees, agents, and licensors shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the website or services.
              </p>
              <p>
                This limitation applies regardless of the theory of liability and even if we have been advised of the possibility of such damages. Some jurisdictions do not allow the exclusion of incidental or consequential damages, so the above may not apply to you.
              </p>
              <p>
                This section should be read with — but does not replace — the limitation-of-liability provisions in our Terms of Service.
              </p>
            </DisclaimerSection>

            <DisclaimerSection num="08" title="Jurisdiction">
              <p>
                Laws and regulations vary by jurisdiction. Information on this website may not be applicable, appropriate, or legal in all locations. You are responsible for understanding and complying with applicable local, state, national, and international laws, and for determining whether the information here is appropriate for your jurisdiction.
              </p>
              <p>
                Access to the website from jurisdictions where such access is illegal is prohibited. If you choose to access the website, you do so at your own initiative.
              </p>
            </DisclaimerSection>

            <DisclaimerSection num="09" title="Changes to this disclaimer">
              <p>
                We may update this disclaimer at any time without prior notice. Changes are effective immediately upon posting. The &ldquo;last updated&rdquo; date above reflects when changes were made. Continued use of this website after any changes constitutes acceptance of the updated disclaimer.
              </p>
            </DisclaimerSection>

            <DisclaimerSection num="10" title="Contact">
              <div className="bg-sand-soft border-l-2 border-sienna pl-6 py-5 not-italic">
                <p className="font-serif text-lg text-forest mb-2">Beneficial Technology, LLC</p>
                <p className="text-sm mb-1"><span className="text-slate-soft uppercase tracking-wider text-xs mr-2">Email</span> legal@beneficial.tech</p>
                <p className="text-sm mb-1"><span className="text-slate-soft uppercase tracking-wider text-xs mr-2">Address</span> 8 The Green, Ste A, Dover, DE 19901</p>
              </div>
              <p>
                For general inquiries, contact <a href="mailto:tyler@beneficial.tech" className="text-forest border-b border-sienna pb-0.5 hover:text-sienna transition-colors">tyler@beneficial.tech</a>.
              </p>
            </DisclaimerSection>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

function DisclaimerSection({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <section className="grid grid-cols-12 gap-4 sm:gap-6">
      <div className="col-span-12 sm:col-span-2">
        <div className="font-serif italic text-sienna text-sm tabular-nums">— {num}</div>
      </div>
      <div className="col-span-12 sm:col-span-10">
        <h2 className="font-serif text-xl sm:text-2xl text-forest tracking-tight mb-4 leading-tight">
          {title}
        </h2>
        <div className="space-y-4">
          {children}
        </div>
      </div>
    </section>
  )
}
