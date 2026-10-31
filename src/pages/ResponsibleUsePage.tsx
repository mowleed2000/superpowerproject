import { Shield, CheckCircle2, AlertCircle, Eye, Lock, Accessibility, Users, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

export default function ResponsibleUsePage() {
  const principles = [
    {
      title: "Human judgement remains important.",
      desc: "AI can be remarkably useful, but it does not replace personal judgement, lived experience, or professional expertise. Human critical thinking is the central element of every session.",
      icon: Eye,
    },
    {
      title: "Information should be checked.",
      desc: "Generative AI systems can generate inaccurate, out-of-date, or misleading information. We consistently train participants to verify factual statements, recipes, dates, and instructions.",
      icon: AlertCircle,
    },
    {
      title: "Privacy matters.",
      desc: "Participants should avoid sharing passwords, financial details, sensitive medical history, or confidential personal information with AI systems unless they thoroughly understand that tool's privacy and data-retention controls.",
      icon: Lock,
    },
    {
      title: "Participation is voluntary.",
      desc: "Nobody is ever pressured. Participants are always free to ask questions, decline any activity, observe quietly, or choose what ideas they wish to share.",
      icon: CheckCircle2,
    },
    {
      title: "Accessibility matters.",
      desc: "Experiences should be adapted where reasonable to accommodate differing communication, sensory, visual, mobility, and pacing requirements. Technology should remove barriers, never erect them.",
      icon: Accessibility,
    },
    {
      title: "Human relationships come first.",
      desc: "AI should support human connection, community dialogue, and intergenerational sharing. It must never be presented as an emotional substitute for meaningful human relationships or professional social care.",
      icon: Users,
    },
    {
      title: "Appropriate boundaries.",
      desc: "The Superpower Project provides practical, educational and capability-development experiences. It does not provide medical, psychiatric, legal, immigration, or financial advisory services.",
      icon: Shield,
    },
  ];

  return (
    <>
      <SEO
        title="Responsible AI & Safeguarding"
        description="Our core principles for responsible artificial intelligence education, safeguarding, digital privacy, and inclusive delivery."
      />

      {/* Hero */}
      <section className="bg-ivory py-12 md:py-20 border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Responsible AI & Safeguarding' }]} />

          <div className="mt-8 space-y-5">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
              Ethical Standards &amp; Care
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              Curiosity, confidence and responsibility.
            </h1>
            <p className="text-lg text-body-muted leading-relaxed">
              We believe that empowering people with artificial intelligence requires transparent ethical boundaries, respect for individual dignity, and clear safeguards.
            </p>
          </div>
        </div>
      </section>

      {/* Principles List */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Commitments"
            title="Core principles of responsible use"
            description="These seven pillars guide every event, group programme, and individual session we conduct."
            className="mb-14"
          />

          <div className="space-y-6">
            {principles.map((pr, idx) => {
              const Icon = pr.icon;
              return (
                <div
                  key={idx}
                  className="bg-ivory rounded-2xl p-6 sm:p-8 border border-surface-border hover:border-cobalt/30 transition-all flex flex-col sm:flex-row items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-softblue text-cobalt flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold text-navy">
                      {pr.title}
                    </h2>
                    <p className="text-body-muted text-base leading-relaxed">
                      {pr.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Delivery Arrangements & Safeguarding Section (Mandatory in Section 17) */}
          <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-surface-border shadow-sm space-y-6">
            <div className="flex items-center gap-3 text-cobalt">
              <FileText className="w-6 h-6" />
              <h3 className="text-2xl font-bold text-navy">
                Delivery Arrangements &amp; Organisational Safeguards
              </h3>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-body leading-relaxed">
              <p>
                When partnering with community centres, libraries, local authorities, and residential care communities, delivery arrangements may require tailored risk assessments, safeguarding policies, public liability insurance, and venue-specific operational guidelines.
              </p>
              <p>
                The Superpower Project collaborates directly with hosting institutions prior to event confirmation to review:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-body-muted">
                <li>Physical venue accessibility, step-free access, and seating arrangements.</li>
                <li>Digital connectivity, Wi-Fi requirements, and projection equipment.</li>
                <li>Vulnerable adult safeguarding protocols and designated venue lead liaison.</li>
                <li>Clear emergency procedures and health and safety requirements.</li>
              </ul>
              <div className="p-4 rounded-xl bg-ivory text-xs text-body-muted border border-surface-border">
                <strong>Compliance Statement:</strong> Delivery agreements, risk assessments, insurance certificates, and partner-specific safeguarding documentation are established and agreed collaboratively per venue engagement before in-person sessions take place.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Have questions about our safeguarding standards?"
        copy="Contact us directly to discuss venue requirements, risk assessments, or bespoke accessibility adjustments."
        primaryButtonText="Contact our team"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore programmes"
        secondaryButtonLink="/programmes"
      />
    </>
  );
}
