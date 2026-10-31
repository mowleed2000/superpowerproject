import { ShieldCheck, Lock, Heart, EyeOff } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ResponsibleAIPage() {
  const policies = [
    {
      title: 'Zero Public Training on Personal Data',
      desc: 'We operate strictly under business and enterprise agreements with AI model providers where data retention for model training is disabled. When we process family memories, letters, or childhood records, they are never used to train public commercial AI models.',
      icon: Lock,
    },
    {
      title: 'Facial Privacy & Photograph Safeguards',
      desc: 'When restoring or colourising historical family photographs, images are processed securely and deleted from working memory once sessions conclude. We never upload photographs of care home residents or participants to public photo libraries or open social channels without explicit written consent.',
      icon: EyeOff,
    },
    {
      title: 'Pacing Adapted for Dementia & Sensory Wellbeing',
      desc: 'We understand that rapid visual transitions or sensory overload can cause agitation. Our facilitators carefully regulate display brightness, audio levels, and conversational pacing. If a resident exhibits fatigue or confusion, we pause immediately.',
      icon: Heart,
    },
    {
      title: 'Enhanced DBS Clearance & £5M Public Liability',
      desc: 'Every facilitator visiting a private home or residential care setting is cleared through an Enhanced Disclosure and Barring Service (DBS) check for working with vulnerable adults. The Superpower Project carries £5,000,000 public liability insurance.',
      icon: ShieldCheck,
    },
  ];

  return (
    <>
      <SEO
        title="Responsible AI, Safeguarding & Safety | The Superpower Project"
        description="Our ethical principles: zero training on personal data, photo privacy safeguards, dementia-friendly pacing, enhanced DBS vetting, and £5M public liability insurance."
      />

      <section className="bg-ivory py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Responsible AI & Safety' }]} />

          <div className="mt-8 max-w-3xl space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
              Ethics, Privacy &amp; Safeguarding
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              Responsible AI &amp; Safety Standards
            </h1>
            <p className="text-base sm:text-lg text-body-muted leading-relaxed">
              We apply the highest professional care standards to ensure artificial intelligence is used safely, respectfully, and transparently with older adults and care home residents.
            </p>
          </div>
        </div>
      </section>

      {/* Main Principles */}
      <section className="py-16 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-ivory border border-surface-border space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-cobalt/10 text-cobalt flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-body leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="p-8 rounded-3xl bg-sand/60 border border-surface-border space-y-4">
            <h3 className="text-lg font-bold text-navy">Care Home Governance &amp; Inspection Pack</h3>
            <p className="text-xs sm:text-sm text-body leading-relaxed">
              Prior to commencement of any care home programme, we supply activities coordinators and home managers with our full Governance Pack:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-navy font-semibold">
              <div className="p-3 bg-white rounded-xl border border-surface-border">
                ✓ Enhanced DBS Certificate Copies
              </div>
              <div className="p-3 bg-white rounded-xl border border-surface-border">
                ✓ £5M Liability Insurance Policy
              </div>
              <div className="p-3 bg-white rounded-xl border border-surface-border">
                ✓ Full Dynamic Risk Assessments
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
