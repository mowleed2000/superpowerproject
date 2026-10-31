import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { asset } from '../utils/asset';

export default function GroupProgrammesPage() {
  const elements = [
    "Practical demonstrations",
    "Guided exploration",
    "Individual participation",
    "Collaborative challenges",
    "Creative projects",
    "Personal interest sessions",
    "Opportunities to develop skills over time",
  ];

  const formats = [
    {
      title: "Introductory sessions",
      desc: "Single cohort sessions focused on establishing initial orientation and demystifying generative technology.",
    },
    {
      title: "Short multi-session programmes",
      desc: "Structured courses spanning several weeks where participants dive deeper into targeted creative or problem-solving workflows.",
    },
    {
      title: "Regular community groups",
      desc: "Ongoing recurring meetup circles providing continuous mutual discovery, peer feedback, and new tool exploration.",
    },
    {
      title: "Themed discovery programmes",
      desc: "Specialized cohorts focusing on specific interest areas like family history writing, visual digital arts, or travel research.",
    },
    {
      title: "Bespoke institutional programmes",
      desc: "Tailored curriculums designed in collaboration with charities, libraries, housing associations, or community centres.",
    },
  ];

  return (
    <>
      <SEO
        title="Group Programmes"
        description="Our group programmes provide a recurring space to explore AI through shared interests, practical challenges and creative experiences."
      />

      {/* Hero */}
      <section className="bg-ivory py-12 md:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Programmes', href: '/programmes' }, { label: 'Group Programmes' }]} />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
                Shared Cohort Learning
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
                Discover more, together.
              </h1>
              <div className="space-y-4 text-base sm:text-lg text-body leading-relaxed">
                <p>
                  Our group programmes provide a recurring space to explore AI through shared interests, practical challenges and creative experiences.
                </p>
                <p className="text-navy font-medium">
                  Participants are encouraged to experiment, ask questions, exchange ideas and discover new applications together.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cobalt text-white font-semibold hover:bg-cobalt-hover shadow-sm"
                >
                  <span>Enquire about a group programme</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src={asset('/images/community/group-interaction.jpg')}
                  alt="Participants engaging in a collaborative group programme"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Elements & Visuals */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Structure &amp; Activities"
            title="Programme elements"
            description="Every cohort balances instructor facilitation with hands-on practice, collaborative feedback, and creative enjoyment."
            className="mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-ivory rounded-2xl p-6 sm:p-8 border border-surface-border space-y-4">
                <h3 className="text-lg font-bold text-navy">What participants experience:</h3>
                <ul className="space-y-3">
                  {elements.map((el, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm sm:text-base text-body font-medium">
                      <span className="w-6 h-6 rounded-full bg-softblue text-cobalt flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        ✓
                      </span>
                      <span>{el}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-softblue/40 border border-cobalt/20 text-xs text-body-muted leading-relaxed">
                <p>
                  <strong>Collaborative Atmosphere:</strong> Cohorts build collective confidence. When one participant discovers an exciting query or creative trick, the entire group shares the benefit.
                </p>
              </div>
            </div>

            {/* Three Designated Assets in Spec */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image 1: social-discovery.jpg */}
              <div className="sm:col-span-2 rounded-2xl overflow-hidden border border-surface-border shadow-sm aspect-[16/9]">
                <img
                  src={asset('/images/community/social-discovery.jpg')}
                  alt="Learning together in a welcoming peer environment"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Image 2: capability-learning.webp */}
              <div className="rounded-2xl overflow-hidden border border-surface-border shadow-sm aspect-[4/3] bg-ivory">
                <img
                  src={asset('/images/capabilities/capability-learning.webp')}
                  alt="Capability: Structured learning and knowledge exploration"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Image 3: capability-memories.webp */}
              <div className="rounded-2xl overflow-hidden border border-surface-border shadow-sm aspect-[4/3] bg-ivory">
                <img
                  src={asset('/images/capabilities/capability-memories.webp')}
                  alt="Capability: Creative storytelling and personal projects"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-20 md:py-28 bg-ivory border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Delivery Options"
            title="Available formats"
            description="Programmes can be adapted to suit differing schedules, community venues, and group goals."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formats.map((fmt, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-surface-border shadow-sm hover:border-cobalt/40 transition-colors space-y-3"
              >
                <span className="w-8 h-8 rounded-lg bg-softblue text-cobalt flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </span>
                <h3 className="text-xl font-bold text-navy">
                  {fmt.title}
                </h3>
                <p className="text-sm text-body-muted leading-relaxed">
                  {fmt.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-white/80 border border-surface-border text-xs text-body-muted max-w-2xl">
            Schedules, duration, and group capacity are tailored collaboratively with hosting partners or cohort participants. Contact us to discuss options for your community.
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Interested in joining or commissioning a group?"
        copy="Contact us to discuss current availability or request a bespoke cohort for your organisation."
        primaryButtonText="Enquire about a group programme"
        primaryButtonLink="/contact"
        secondaryButtonText="For organisations"
        secondaryButtonLink="/organisations"
      />
    </>
  );
}
