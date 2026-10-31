import { Link } from 'react-router-dom';
import { Eye, Volume2, Brain, ShieldCheck, ArrowRight, Coffee } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function FamiliesAndCarersPage() {
  const concerns = [
    {
      icon: Brain,
      q: 'Will my parent feel patronised or out of their depth?',
      a: 'Never. Our core philosophy is "Age is experience. AI is amplification." We do not treat older adults as passive students needing basic computer instruction. Instead, we treat them as directors of an extraordinarily powerful creative tool. We follow their lead, ask about their expertise, and let their stories shape the session.',
    },
    {
      icon: Eye,
      q: 'What if they have arthritic fingers, tremors, or poor eyesight?',
      a: 'They do not need to touch a keyboard or mouse unless they wish to. We use voice input, large-print tablet displays, high-contrast settings, and our facilitator handles all physical typing. The resident or participant simply speaks their thoughts and observes the magic unfold.',
    },
    {
      icon: Coffee,
      q: 'Can I (the son, daughter, or carer) sit in on the session?',
      a: 'Absolutely. Many families love sitting in with a cup of tea, hearing stories about relatives or childhood memories that have never come up before. Alternatively, if your relative prefers an independent session, you can leave them in our safe, vetted hands.',
    },
    {
      icon: Volume2,
      q: 'What if they get tired or lose focus after 30 minutes?',
      a: 'We pace every session gently. There is zero rush. We can pause for tea, take comfort breaks, or wrap up early and roll the remaining time into a follow-up visit. The comfort and emotional wellbeing of the participant is our absolute priority.',
    },
    {
      icon: ShieldCheck,
      q: 'Is their personal information and family photos kept safe?',
      a: 'Yes. We strictly follow UK GDPR standards. We do not use commercial AI tools that retain or train publicly on user data. Photos brought out for restoration or colourisation remain strictly private and are never uploaded to public image libraries.',
    },
  ];

  return (
    <>
      <SEO
        title="Families & Carers Guide | The Superpower Project"
        description="A complete guide for adult children and family carers. Understanding how we adapt AI discovery sessions for older adults with dignity, patience and safety."
      />

      <section className="bg-ivory py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Personal Sessions', href: '/personal-sessions' },
              { label: 'Families & Carers Guide' },
            ]}
          />

          <div className="mt-8 max-w-3xl space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
              Reassurance &amp; Practical Advice
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              The Families &amp; Carers Guide
            </h1>
            <p className="text-base sm:text-lg text-body-muted leading-relaxed">
              Everything you need to know about how we deliver respectful, dignified, and joyous AI experiences for older adults across London and the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Breakdown */}
      <section className="py-16 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-8">
            {concerns.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-ivory border border-surface-border space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cobalt/10 text-cobalt flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl font-bold text-navy">{item.q}</h2>
                  </div>
                  <p className="text-sm text-body leading-relaxed pl-0 sm:pl-13">{item.a}</p>
                </div>
              );
            })}
          </div>

          <div className="p-8 rounded-3xl bg-sand/60 border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-navy">Ready to arrange a session for your parent?</h3>
              <p className="text-xs text-body-muted">Discovery sessions start from £49 with full gift voucher presentation.</p>
            </div>
            <Link
              to="/book-for-someone"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-cobalt text-white font-bold text-sm hover:bg-cobalt-hover transition-colors shadow-md flex-shrink-0"
            >
              Book for a Relative
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
