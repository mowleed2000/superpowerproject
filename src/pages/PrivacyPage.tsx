import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | UK GDPR Compliance | The Superpower Project"
        description="Our privacy and data protection policy. How we protect personal data, memories, and photos in accordance with UK GDPR."
      />

      <section className="bg-ivory py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />

          <div className="mt-8 space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
              Data Protection &amp; UK GDPR
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs sm:text-sm text-body-muted">
              Last updated: October 2026 • The Superpower Project
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-navy text-sm text-body leading-relaxed space-y-8">
          <div>
            <h2 className="text-xl font-bold text-navy">1. Who We Are</h2>
            <p>
              The Superpower Project is an applied AI educational initiative and community service provider. For the purposes of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, The Superpower Project acts as the Data Controller in respect of personal data collected through this website and during our facilitated discovery sessions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">2. The Information We Collect</h2>
            <p>We may collect and process the following information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Contact Information:</strong> Names, email addresses, phone numbers, and postal addresses provided via enquiry and booking forms.</li>
              <li><strong>Session Planning Details:</strong> Specific participant interests, life topics, or hobbies voluntarily shared to tailor the session.</li>
              <li><strong>Care Home Coordinator Details:</strong> Job titles, work emails, and provider addresses provided for institutional quotes.</li>
              <li><strong>Technical Data:</strong> Anonymized website analytics to ensure proper site navigation.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">3. How We Treat AI Inputs &amp; Personal Memories</h2>
            <p>
              We maintain strict ethical controls regarding personal data and artificial intelligence:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>No Model Training:</strong> We use business and enterprise AI API endpoints configured with zero data retention for model training. The personal memoirs, anecdotes, and spoken accounts you share are strictly never used to train public commercial AI models.</li>
              <li><strong>Photograph Security:</strong> Any historical family photographs brought to sessions for scanning, enhancement, or colorisation remain entirely your property. We do not store or distribute facial images without explicit, separate written consent.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-navy">4. Your Legal Rights</h2>
            <p>
              Under UK GDPR, you have the right to access, rectify, or request the deletion of any personal data we hold about you. You may also withdraw consent or object to processing at any time by contacting our Data Protection Officer at:
            </p>
            <p className="font-semibold text-navy">
              Email: <a href="mailto:privacy@thesuperpowerproject.org" className="text-cobalt underline">privacy@thesuperpowerproject.org</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
