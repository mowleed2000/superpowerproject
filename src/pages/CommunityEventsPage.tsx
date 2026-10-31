import { Link } from 'react-router-dom';
import { ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

export default function CommunityEventsPage() {
  const elements = [
    { title: "Live demonstrations", desc: "Watch intuitive AI tools applied to spontaneous tasks live on screen." },
    { title: "Audience-led challenges", desc: "You suggest the topics, objects, or queries—we explore them together in real time." },
    { title: "Everyday problem-solving", desc: "From deciphering confusing official documents to organizing household projects." },
    { title: "Creative exploration", desc: "Generating visual art, transforming photographs, and crafting poetry or stories." },
    { title: "Questions and discussion", desc: "An open, patient floor for genuine curiosity, safety, privacy, and ethics." },
    { title: "Opportunities to try things personally", desc: "Low-pressure hands-on moments for anyone who wishes to test a prompt." },
  ];

  const examples = [
    {
      num: "01",
      title: "Identify an unfamiliar object",
      description: "Photograph an antique, tool, botanical specimen, or household gadget to discover what it is, its history, and how it works.",
    },
    {
      num: "02",
      title: "Explore a personal interest",
      description: "Use an AI research companion to dive into local genealogy, historic architecture, astronomy, or craft techniques.",
    },
    {
      num: "03",
      title: "Transform an old photograph",
      description: "Experience modern restoration, recolouring, or reimagining vintage family prints through creative generative techniques.",
    },
    {
      num: "04",
      title: "Plan a tailored journey",
      description: "Design an itinerary around specific walking speeds, mobility needs, culinary tastes, and off-the-beaten-track interests.",
    },
    {
      num: "05",
      title: "Live language translation",
      description: "Translate colloquial dialects, historical letters, or foreign menus into clear, accessible plain English.",
    },
    {
      num: "06",
      title: "Turn an idea into a creative project",
      description: "Outline a short story, sketch a layout for a community newsletter, or compose a personalized celebration speech.",
    },
  ];

  return (
    <>
      <SEO
        title="Community Events"
        description="Our community events introduce people to practical and creative applications of artificial intelligence through live demonstrations and shared discovery."
      />

      {/* Hero */}
      <section className="bg-ivory py-12 md:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Programmes', href: '/programmes' }, { label: 'Community Events' }]} />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
                Interactive Group Experience
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
                An experience that opens up new possibilities.
              </h1>
              <div className="space-y-4 text-base sm:text-lg text-body leading-relaxed">
                <p>
                  Our community events introduce people to practical and creative applications of artificial intelligence through live demonstrations, audience participation and shared discovery.
                </p>
                <p className="text-navy font-medium">
                  Rather than sitting through a technical presentation, participants explore what AI can actually help them accomplish.
                </p>
              </div>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/organisations"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cobalt text-white font-semibold hover:bg-cobalt-hover shadow-sm"
                >
                  <span>Discuss hosting an event</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/faq"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-white border border-surface-border text-navy font-semibold hover:bg-ivory"
                >
                  Read event FAQs
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src="/images/community/community-workshop.jpg"
                  alt="Community members participating in an AI discovery event"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: What Happens? */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Inside the Event"
            title="What happens during a session?"
            description="A dynamic, informal, and conversational experience where the audience steers the exploration."
            className="mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-surface-border aspect-[4/3]">
                <img
                  src="/images/community/facilitator-demonstration.jpg"
                  alt="Facilitator demonstrating live AI capabilities to the room"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-body-muted text-center italic">
                Live demonstrations showcase real-time problem solving and spontaneous queries.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {elements.map((el, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-ivory border border-surface-border space-y-2">
                  <div className="flex items-center gap-2 text-cobalt font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{el.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-body-muted leading-relaxed">
                    {el.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Participation Image showcase */}
          <div className="bg-ivory rounded-3xl p-8 sm:p-12 border border-surface-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-cobalt">Participation</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-navy">
                Shared curiosity in a social space
              </h3>
              <p className="text-body-muted text-base leading-relaxed">
                Nobody is put on the spot or expected to know technical terms. Whether you want to watch and take notes or volunteer a challenge from your own daily life, the atmosphere is encouraging and collaborative.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-md border border-surface-border aspect-[4/3]">
                <img
                  src="/images/community/social-discovery.jpg"
                  alt="Participants enjoying shared social discovery"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Demonstrations */}
      <section className="py-20 md:py-28 bg-ivory border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Hands-On Examples"
            title="Example live demonstrations"
            description="Here are typical real-world activities explored during community events."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examples.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-surface-border shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="inline-block text-xs font-bold text-cobalt bg-softblue px-2.5 py-1 rounded-md">
                    Example {item.num}
                  </span>
                  <h3 className="text-xl font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="text-sm text-body-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-white/70 border border-surface-border text-xs text-body-muted flex items-center gap-2 max-w-2xl">
            <ShieldAlert className="w-4 h-4 text-amber flex-shrink-0" />
            <span>
              Note: Every example is illustrative, designed to spark practical curiosity, not a guaranteed uniform outcome.
            </span>
          </div>
        </div>
      </section>

      {/* Hosting an Event Section */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
            Bring It To Your Venue
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
            Bring the experience to your community.
          </h2>
          <p className="text-lg text-body-muted max-w-2xl mx-auto leading-relaxed">
            Community centres, libraries, charities and other organisations can enquire about hosting an introductory event.
          </p>
          <div className="pt-4">
            <Link
              to="/organisations"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cobalt text-white font-semibold text-lg hover:bg-cobalt-hover shadow-md hover:shadow-lg transition-all"
            >
              <span>Discuss hosting an event</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Have questions about our community sessions?"
        copy="Read our comprehensive FAQ or get in touch with our team."
        primaryButtonText="View FAQs"
        primaryButtonLink="/faq"
        secondaryButtonText="Send an enquiry"
        secondaryButtonLink="/contact"
      />
    </>
  );
}
