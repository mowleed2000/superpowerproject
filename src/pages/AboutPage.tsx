import { Sparkles, Target, Users2, HeartHandshake, User } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

export default function AboutPage() {
  const philosophies = [
    {
      title: "Human capability first",
      description: "AI is a tool. Its value comes from what people can do with it. Our programmes begin with human interests, needs and ambitions.",
      icon: Target,
    },
    {
      title: "Practical over theoretical",
      description: "We prioritise useful applications and real experiences over abstract explanations of technology.",
      icon: Sparkles,
    },
    {
      title: "Personal and inclusive",
      description: "People arrive with different experiences, abilities, interests and expectations. We adapt our approach accordingly.",
      icon: HeartHandshake,
    },
    {
      title: "Discovery together",
      description: "Learning can be social. Shared exploration creates opportunities to exchange ideas, discover possibilities and build confidence.",
      icon: Users2,
    },
  ];

  return (
    <>
      <SEO
        title="About the Project"
        description="The Superpower Project exists to help people discover what artificial intelligence can make possible in their own lives through human-centred discovery."
      />

      {/* Page Header / Hero */}
      <section className="bg-ivory py-12 md:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About the Project' }]} />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
                Our Purpose &amp; Mission
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
                Expanding human capability through AI.
              </h1>
              <div className="space-y-4 text-base sm:text-lg text-body leading-relaxed">
                <p>
                  The Superpower Project exists to help people discover what artificial intelligence can make possible in their own lives.
                </p>
                <p>
                  We believe access to these capabilities should not be limited to people working in technology or those who already feel confident using digital tools.
                </p>
                <p>
                  Our approach is built around practical discovery, personal relevance, human interaction and meaningful experiences.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-surface-border aspect-square max-w-md mx-auto bg-white p-4">
                <img
                  src="/images/brand/superpower-abstract-world.webp"
                  alt="Conceptual visualization of human capability and discovery"
                  className="w-full h-full object-cover rounded-xl"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6 space-y-8">
              <SectionHeading
                eyebrow="Our Guiding Values"
                title="Our philosophy"
                description="Everything we do is anchored in the belief that technology must serve genuine human potential."
              />

              <div className="space-y-6">
                {philosophies.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-xl bg-ivory border border-surface-border space-y-2 hover:border-cobalt/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="p-2 rounded-lg bg-softblue text-cobalt">
                          <Icon className="w-5 h-5" />
                        </span>
                        <h2 className="text-lg font-bold text-navy">
                          {item.title}
                        </h2>
                      </div>
                      <p className="text-body-muted text-sm sm:text-base leading-relaxed pl-11">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Supporting Image: Discovery Together */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-surface-border aspect-[4/3]">
                <img
                  src="/images/community/social-discovery.jpg"
                  alt="Discovery together: shared exploration in a welcoming environment"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-softblue/50 rounded-xl p-6 border border-cobalt/20">
                <h3 className="text-base font-bold text-navy mb-1">
                  Age is experience. AI is amplification.
                </h3>
                <p className="text-sm text-body-muted leading-relaxed">
                  Decades of accumulated life experience, curiosity, craftsmanship, and storytelling become vastly more expressive when paired with intuitive generative tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-20 md:py-28 bg-ivory border-b border-surface-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-surface-border shadow-sm">
            <SectionHeading
              eyebrow="Leadership"
              title="Meet the person behind the project."
              className="mb-10 text-center"
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Founder Portrait Placeholder Frame */}
              <div className="md:col-span-5 text-center">
                <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-full border-4 border-dashed border-cobalt/30 bg-ivory flex flex-col items-center justify-center p-4 text-center">
                  <User className="w-16 h-16 text-gray-400 mb-2" />
                  <span className="text-xs font-semibold text-body-muted">
                    [Founder Portrait Placeholder]
                  </span>
                </div>
              </div>

              {/* Founder Bio Placeholder Content */}
              <div className="md:col-span-7 space-y-4">
                <div className="inline-block px-3 py-1 rounded-md bg-softblue text-cobalt text-xs font-bold uppercase tracking-wider">
                  Founder &amp; Programme Director
                </div>
                <h3 className="text-2xl font-bold text-navy">
                  The Superpower Project Founder
                </h3>
                <div className="p-4 rounded-xl bg-ivory border border-surface-border text-sm sm:text-base text-body leading-relaxed italic">
                  "[Add founder biography, relevant practical experience and personal motivation here.]"
                </div>
                <p className="text-xs text-body-muted">
                  Note: In compliance with editorial authenticity rules, professional background and credentials will be populated upon official publication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to explore what becomes possible?"
        copy="Discover our community events, group programmes, and personal sessions."
        primaryButtonText="View our programmes"
        primaryButtonLink="/programmes"
        secondaryButtonText="Contact our team"
        secondaryButtonLink="/contact"
      />
    </>
  );
}
