import { Link } from 'react-router-dom';
import { ArrowRight, Users, UsersRound, UserCheck, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';

export default function ProgrammesPage() {
  const programmes = [
    {
      title: "Community Events",
      tagline: "An engaging introduction to live AI exploration",
      image: "/images/community/community-workshop.jpg",
      link: "/community-events",
      icon: Users,
      audience: "Community centres, libraries, local groups and members of the public seeking an inspiring first look.",
      format: "Single 60–90 minute interactive group presentation with live demonstration, Q&A, and audience challenges.",
      experience: "Participants see real AI capabilities applied in real-time, solve audience-submitted curiosities, and try hands-on tasks.",
      enquiry: "Organisations can enquire about booking an event for their community hall, library or venue.",
      benefits: [
        "Live interactive demonstrations on a large screen",
        "Audience-driven everyday problem solving",
        "No individual devices or technical skills needed",
        "Welcoming, non-intimidating and social atmosphere",
      ],
    },
    {
      title: "Group Programmes",
      tagline: "Shared discovery cohorts building capabilities over time",
      image: "/images/community/group-interaction.jpg",
      link: "/group-programmes",
      icon: UsersRound,
      audience: "Individuals and groups who want regular, structured opportunities to practice AI together.",
      format: "Multi-week cohorts or recurring community discovery circles tailored to group interests.",
      experience: "Guided hands-on exercises, creative group projects, collaborative experiments, and shared peer exchange.",
      enquiry: "Enquire directly as an individual or sponsor a cohort for your residential community or charity.",
      benefits: [
        "Structured thematic exploration (Writing, Art, Research)",
        "Collaborative problem solving and mutual encouragement",
        "Progressive confidence and habit development",
        "Supportive peer environment with expert facilitation",
      ],
    },
    {
      title: "Personal Sessions",
      tagline: "Individual guidance built around what matters to you",
      image: "/images/personal/personal-ai-session.jpg",
      link: "/personal-sessions",
      icon: UserCheck,
      audience: "Individuals who want 1-to-1 attention focused on specific personal projects, curiosities, or transition goals.",
      format: "Dedicated 1-on-1 private sessions (in-person or remote) customized completely to individual objectives.",
      experience: "Patient, private exploration around your photography, family archives, memoirs, writing, hobbies or travel plans.",
      enquiry: "Enquire for yourself or arrange a gift consultation for an older family member.",
      benefits: [
        "Tailored entirely to your pace and questions",
        "Focus on personal files, photos, or writing projects",
        "Complete privacy and patient, supportive guidance",
        "Empowering practical skills you can use immediately",
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Programmes Overview"
        description="Explore our pathways to learning AI: Community Events, Group Programmes, and Personal Sessions."
      />

      {/* Page Header */}
      <section className="bg-ivory py-12 md:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Programmes Overview' }]} />

          <div className="mt-8 max-w-3xl space-y-5">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
              Learning Pathways
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              Find your way into the possibilities of AI.
            </h1>
            <div className="space-y-4 text-base sm:text-lg text-body leading-relaxed">
              <p>
                Some people want to explore AI with a group. Others want individual guidance. Some simply want to experience what is possible before deciding what comes next.
              </p>
              <p className="text-navy font-medium">
                We offer different ways to discover, develop and apply new capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Detailed Programme Cards */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programmes.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <div
                  key={idx}
                  className="bg-ivory rounded-3xl border border-surface-border overflow-hidden shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-0"
                >
                  {/* Image side */}
                  <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-navy/90 text-white backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2">
                      <Icon className="w-4 h-4 text-softblue" />
                      <span>{prog.title}</span>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-cobalt">
                          Pathway 0{idx + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-navy mt-1">
                          {prog.title}
                        </h2>
                        <p className="text-body font-medium mt-1">
                          {prog.tagline}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm">
                        <div className="bg-white p-4 rounded-xl border border-surface-border">
                          <p className="font-bold text-navy mb-1 text-xs uppercase tracking-wider">Best Audience</p>
                          <p className="text-body-muted leading-relaxed">{prog.audience}</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-surface-border">
                          <p className="font-bold text-navy mb-1 text-xs uppercase tracking-wider">Format</p>
                          <p className="text-body-muted leading-relaxed">{prog.format}</p>
                        </div>
                      </div>

                      <div className="space-y-2 pt-2">
                        <p className="font-bold text-navy text-xs uppercase tracking-wider">Key Elements</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-body">
                          {prog.benefits.map((b, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-surface-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <p className="text-xs text-body-muted max-w-sm">
                        {prog.enquiry}
                      </p>
                      <Link
                        to={prog.link}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cobalt text-white font-semibold hover:bg-cobalt-hover transition-colors shadow-sm"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Not sure which programme is right for you?"
        copy="Get in touch to discuss your interests or enquire about hosting a bespoke programme for your group."
        primaryButtonText="Contact our team"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore organisational options"
        secondaryButtonLink="/organisations"
      />
    </>
  );
}
