import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

export default function PersonalSessionsPage() {
  const steps = [
    {
      step: "01",
      title: "Start with your interests.",
      desc: "We begin with what you'd like to explore or accomplish.",
    },
    {
      step: "02",
      title: "Discover possibilities.",
      desc: "Together, we investigate how AI might help and identify useful approaches.",
    },
    {
      step: "03",
      title: "Practise and develop.",
      desc: "You have the opportunity to experiment, ask questions and build practical confidence.",
    },
  ];

  const otherPossibilities = [
    "Learning new academic or historical topics",
    "Independent research & finding information",
    "Drafting speeches, correspondence & letters",
    "Everyday household organisation & problem-solving",
    "Digital creativity & visual exploration",
    "Personal memoirs & archiving family recipes",
    "Investigating new hobbies, crafts & gardening",
  ];

  return (
    <>
      <SEO
        title="Personal Sessions"
        description="Personal sessions provide individual guidance and practical experimentation built around what matters to you."
      />

      {/* Hero */}
      <section className="bg-ivory py-12 md:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Programmes', href: '/programmes' }, { label: 'Personal Sessions' }]} />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
                Tailored 1-to-1 Guidance
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
                Explore what AI could make possible for you.
              </h1>
              <div className="space-y-4 text-base sm:text-lg text-body leading-relaxed">
                <p>
                  Sometimes the most useful way to discover AI is to explore it around your own interests, questions and ambitions.
                </p>
                <p className="text-navy font-medium">
                  Personal sessions provide individual guidance and practical experimentation built around what matters to you.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cobalt text-white font-semibold hover:bg-cobalt-hover shadow-sm"
                >
                  <span>Enquire about a personal session</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src="/images/personal/personal-ai-session.jpg"
                  alt="Personal one-to-one AI session with patient guidance"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Exploration */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Focused Topics"
            title="Areas of exploration"
            description="Sessions are paced to your needs, whether you are exploring a single creative project or building broad digital confidence."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Card 1: Creative projects */}
            <div className="bg-ivory rounded-2xl overflow-hidden border border-surface-border shadow-sm flex flex-col group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/personal/creative-capability.jpg"
                  alt="Creative capability and personal artwork projects"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs font-bold text-cobalt uppercase tracking-wider">Creativity</span>
                <h3 className="text-xl font-bold text-navy">Creative projects</h3>
                <p className="text-sm text-body-muted leading-relaxed">
                  Explore original illustration, creative writing, poetry, lyrics, and conceptual designs tailored to your artistic voice.
                </p>
              </div>
            </div>

            {/* Card 2: Memories and photography */}
            <div className="bg-ivory rounded-2xl overflow-hidden border border-surface-border shadow-sm flex flex-col group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/personal/personal-memories.jpg"
                  alt="Restoring and preserving family memories and photographs"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs font-bold text-cobalt uppercase tracking-wider">Preservation</span>
                <h3 className="text-xl font-bold text-navy">Memories and photography</h3>
                <p className="text-sm text-body-muted leading-relaxed">
                  Digitise, enhance, and organize family albums, write commemorative life stories, and preserve oral histories with AI assistance.
                </p>
              </div>
            </div>

            {/* Card 3: Travel and exploration */}
            <div className="bg-ivory rounded-2xl overflow-hidden border border-surface-border shadow-sm flex flex-col group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/personal/travel-exploration.jpg"
                  alt="Curating travel exploration and destination research"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-xs font-bold text-cobalt uppercase tracking-wider">Exploration</span>
                <h3 className="text-xl font-bold text-navy">Travel and exploration</h3>
                <p className="text-sm text-body-muted leading-relaxed">
                  Design detailed bespoke itineraries tailored to individual accessibility, interests, local cuisines, and relaxed pacing.
                </p>
              </div>
            </div>
          </div>

          {/* Other Possibilities List */}
          <div className="bg-ivory rounded-2xl p-8 border border-surface-border">
            <h3 className="text-xl font-bold text-navy mb-4">Other possibilities to explore together:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-body">
              {otherPossibilities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Sessions Work */}
      <section className="py-20 md:py-28 bg-ivory border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Workflow"
            title="How sessions work"
            description="A gentle, supportive 3-stage process focused completely on your goals."
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-surface-border shadow-sm space-y-4 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-softblue text-cobalt font-extrabold text-lg flex items-center justify-center mx-auto">
                  {st.step}
                </div>
                <h3 className="text-xl font-bold text-navy">{st.title}</h3>
                <p className="text-sm sm:text-base text-body-muted leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Scope & Boundaries Advisory */}
          <div className="mt-12 bg-white rounded-2xl p-6 border border-surface-border max-w-3xl mx-auto flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-cobalt flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-body-muted space-y-1">
              <p className="font-bold text-navy">Educational Scope &amp; Appropriate Boundaries</p>
              <p>
                Personal sessions are dedicated educational and capability-development experiences designed to foster digital confidence and personal exploration. They are not medical, psychological, legal, or financial advisory services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to explore what AI could do for your project?"
        copy="Contact us to discuss your goals, check current availability, or enquire on behalf of a family member."
        primaryButtonText="Enquire about a personal session"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore all programmes"
        secondaryButtonLink="/programmes"
      />
    </>
  );
}
