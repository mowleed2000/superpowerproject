import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="UK GDPR Privacy Policy for The Superpower Project, detailing data controller identity, lawful bases, data retention, and individual rights."
      />

      {/* Hero */}
      <section className="bg-ivory py-12 md:py-20 border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

          <div className="mt-8 space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
              Data Protection &amp; UK GDPR
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-body-muted">
              Last updated: October 2026. This policy applies to personal data collected through The Superpower Project website and enquiry pathways.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-navy max-w-none text-body leading-relaxed space-y-10">
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-navy">1. Data Controller</h2>
            <p>
              The data controller responsible for personal information processed through this website is:
            </p>
            <div className="p-4 rounded-xl bg-ivory border border-surface-border text-sm">
              <p><strong>The Superpower Project</strong></p>
              <p>[Legal Entity Name / Trading Name Placeholder]</p>
              <p>[Registered Address / Operational Office Placeholder]</p>
              <p>Email: [privacy@thesuperpowerproject.org.uk — placeholder]</p>
            </div>
            <p className="text-xs text-body-muted">
              Note: Formal corporate entity registration details will be specified upon incorporation / formal launch.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-navy">2. Personal Information Collected</h2>
            <p>
              We collect the minimum personal information required to respond to your queries, deliver educational sessions, and coordinate organisational partnerships. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><strong>Contact information:</strong> Name, email address, optional telephone number.</li>
              <li><strong>Organisational information:</strong> Organisation name, job title, venue location, and event requirements.</li>
              <li><strong>Enquiry message details:</strong> Details of your interest, questions, or requested session format.</li>
              <li><strong>Communication preferences:</strong> Your voluntary consent status regarding marketing communications.</li>
            </ul>
            <p className="text-sm bg-softblue/40 p-4 rounded-xl border border-cobalt/20">
              <strong>Special Category Data Note:</strong> In ordinary enquiry forms, we do not request or collect medical diagnoses, health information, or other sensitive personal data. If reasonable adjustments or venue accessibility accommodations are needed for in-person workshops, these are handled strictly on a necessary, confidential basis.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-navy">3. Purpose and Lawful Bases for Processing</h2>
            <p className="text-sm">
              Under UK GDPR (Data Protection Act 2018), we rely on the following lawful bases:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-ivory border border-surface-border space-y-1">
                <p className="font-bold text-navy">Legitimate Interests</p>
                <p className="text-xs text-body-muted">
                  Responding to direct enquiries, managing organisational relationships, planning workshop schedules, and maintaining administrative records.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-ivory border border-surface-border space-y-1">
                <p className="font-bold text-navy">Consent</p>
                <p className="text-xs text-body-muted">
                  Where you voluntarily opt in to receive news or programme updates via separate, unchecked checkboxes. You may withdraw consent at any time.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-ivory border border-surface-border space-y-1">
                <p className="font-bold text-navy">Contract</p>
                <p className="text-xs text-body-muted">
                  Taking preliminary steps at your request before entering into an event booking or delivery agreement with an institution.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-ivory border border-surface-border space-y-1">
                <p className="font-bold text-navy">Legal Obligation</p>
                <p className="text-xs text-body-muted">
                  Compliance with applicable UK accounting, safeguarding, or public health requirements where legally mandated.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-navy">4. Data Retention</h2>
            <p className="text-sm">
              We retain personal data only for as long as necessary to fulfil the purposes for which it was gathered:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-body-muted">
              <li>General enquiries: Retained for up to 12 months after the last correspondence.</li>
              <li>Booking &amp; partnership correspondence: Retained for up to 6 years following delivery in line with UK statutory limitation periods.</li>
              <li>Consented newsletter subscriptions: Retained until you unsubscribe or request erasure.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-navy">5. Third-Party Processors &amp; AI Tools</h2>
            <p className="text-sm">
              We may utilize vetted data processors to facilitate web hosting, secure email transmission, and calendar scheduling.
            </p>
            <div className="p-4 rounded-xl bg-ivory border border-surface-border text-sm space-y-2">
              <p className="font-bold text-navy">Use of Third-Party AI Services in Workshops:</p>
              <p className="text-xs text-body-muted">
                During interactive demonstrations or personal sessions, participants explore commercial AI systems (such as OpenAI, Anthropic, or Google tools). In accordance with our Responsible AI principles:
              </p>
              <ul className="list-disc pl-6 text-xs text-body-muted space-y-1">
                <li>We explicitly advise participants never to input passwords, financial details, or confidential medical records into AI platforms.</li>
                <li>Live demonstrations use illustrative or public-domain examples.</li>
                <li>Participants are informed about individual AI provider privacy terms and data opt-out controls.</li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-navy">6. Cookies &amp; Analytics</h2>
            <p className="text-sm">
              This website currently operates without non-essential third-party advertising or profiling cookies.
            </p>
            <p className="text-sm text-body-muted">
              Only essential technical session storage required for page navigation and security is utilized. If non-essential statistical or analytical cookies are introduced in the future, explicit prior consent will be requested via a compliant cookie banner.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-navy">7. International Transfers</h2>
            <p className="text-sm">
              Where cloud services or hosting infrastructure involve data transfers outside the United Kingdom or European Economic Area, we ensure appropriate safeguards (such as the UK International Data Transfer Agreement or standard contractual clauses) are implemented.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-navy">8. Your Individual Rights</h2>
            <p className="text-sm">
              Under UK data protection law, you possess enforceable rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-body-muted">
              <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete information.</li>
              <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of your personal data where no overriding legal basis exists.</li>
              <li><strong>Right to Restrict Processing:</strong> Request temporary pause on processing under certain circumstances.</li>
              <li><strong>Right to Object:</strong> Object to processing based on legitimate interests or direct marketing.</li>
              <li><strong>Right to Data Portability:</strong> Request electronic transfer of your data to another controller.</li>
            </ul>
            <p className="text-sm">
              To exercise any of these rights, please contact our team via the designated privacy email placeholder or our contact form. We respond within one calendar month.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-navy">9. Questions &amp; ICO Complaints</h2>
            <p className="text-sm">
              If you have any questions, concerns, or complaints about how we handle your personal data, we encourage you to contact us first so we can resolve the matter promptly.
            </p>
            <p className="text-sm text-body-muted">
              You also have the statutory right to lodge a complaint with the UK supervisory authority:
            </p>
            <div className="p-4 rounded-xl bg-ivory border border-surface-border text-xs text-body-muted">
              <p className="font-bold text-navy">Information Commissioner's Office (ICO)</p>
              <p>Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</p>
              <p>Helpline: 0303 123 1113 | Website: <a href="https://ico.org.uk" target="_blank" rel="noreferrer" className="text-cobalt underline">ico.org.uk</a></p>
            </div>
          </div>

          {/* Section 10 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-navy">10. Policy Updates</h2>
            <p className="text-sm text-body-muted">
              We may review and update this Privacy Policy from time to time to reflect changes in our activities, technologies, or applicable legislation. Any revisions will be published on this page with an updated revision date.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
