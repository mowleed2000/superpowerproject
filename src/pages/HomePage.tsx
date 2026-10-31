import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Palette, BookOpen, MessageSquare, CheckCircle2, Globe } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';

export default function HomePage() {
  const capabilities = [
    {
      title: "Discover",
      description: "Identify unfamiliar things, explore questions and find answers to everyday curiosities.",
      image: "/images/capabilities/capability-object-discovery.webp",
      icon: Compass,
      tag: "Exploration",
    },
    {
      title: "Create",
      description: "Explore photography, writing, artwork, stories and personal projects.",
      image: "/images/capabilities/capability-memories.webp",
      icon: Palette,
      tag: "Creativity",
    },
    {
      title: "Learn",
      description: "Explore new subjects, practise languages and develop knowledge.",
      image: "/images/capabilities/capability-learning.webp",
      icon: BookOpen,
      tag: "Knowledge",
    },
    {
      title: "Connect",
      description: "Communicate, translate, prepare conversations and express yourself.",
      image: "/images/capabilities/capability-communication.webp",
      icon: MessageSquare,
      tag: "Communication",
    },
    {
      title: "Accomplish",
      description: "Plan activities, organise information and solve practical problems.",
      image: "/images/homepage/everyday-discovery.jpg",
      icon: CheckCircle2,
      tag: "Practical",
    },
    {
      title: "Explore",
      description: "Discover destinations, research interests and investigate opportunities.",
      image: "/images/personal/travel-exploration.jpg",
      icon: Globe,
      tag: "Curiosity",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Bring your curiosity.",
      description: "You don't need to arrive with technical knowledge or a particular skill. Start with an interest, question, problem or ambition.",
    },
    {
      number: "02",
      title: "Explore what AI makes possible.",
      description: "Discover practical applications with guidance and support. Experiment, ask questions and see what you can accomplish.",
    },
    {
      number: "03",
      title: "Develop your capabilities.",
      description: "Build confidence through experience, discover new interests and find ways to keep using what you've learned.",
    },
  ];

  const experiences = [
    {
      title: "Community Events",
      description: "An engaging introduction to the possibilities of AI, designed to bring people together through discovery and participation.",
      image: "/images/community/community-workshop.jpg",
      link: "/community-events",
      cta: "Explore community events",
    },
    {
      title: "Group Programmes",
      description: "Regular shared experiences where participants explore practical AI applications, develop interests and discover new capabilities together.",
      image: "/images/community/group-interaction.jpg",
      link: "/group-programmes",
      cta: "Explore group programmes",
    },
    {
      title: "Personal Sessions",
      description: "Individual guidance built around your interests, ambitions and circumstances.",
      image: "/images/personal/personal-ai-session.jpg",
      link: "/personal-sessions",
      cta: "Explore personal sessions",
    },
  ];

  return (
    <>
      <SEO
        title="The Superpower Project | Discover What You're Capable Of"
        description="Discover practical, personal and social AI experiences designed to help people learn, create, explore and develop new capabilities."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-ivory pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-20 lg:pb-32 border-b border-surface-border">
        {/* Subtle decorative background */}
        <div
          className="absolute -right-20 -top-20 w-96 h-96 opacity-10 pointer-events-none rounded-full blur-3xl bg-cobalt"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-softblue/70 border border-cobalt/20 text-cobalt text-xs font-bold tracking-wider uppercase">
                <span>The Superpower Project</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.08]">
                Discover what you're <span className="text-cobalt">capable of</span>.
              </h1>

              <p className="text-lg sm:text-xl text-body leading-relaxed max-w-2xl">
                Artificial intelligence is opening up new ways to learn, create, explore and accomplish things.
              </p>

              <p className="text-base sm:text-lg text-body-muted leading-relaxed max-w-2xl">
                We help people discover those possibilities through practical experiences, personal guidance and shared discovery.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/programmes"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cobalt text-white font-semibold hover:bg-cobalt-hover shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <span>Explore our programmes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/organisations"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-navy font-semibold hover:bg-ivory-dark border border-surface-border transition-all duration-200 shadow-sm"
                >
                  Host an experience
                </Link>
              </div>

              {/* Supporting Credibility Note */}
              <div className="pt-4 flex items-center gap-3 text-xs text-body-muted">
                <span className="w-2 h-2 rounded-full bg-amber"></span>
                <span>Age is experience. AI is amplification. Practical, human-centred capability building.</span>
              </div>
            </div>

            {/* Right Hero Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Abstract World Accent Background */}
                <div
                  className="absolute -top-6 -right-6 w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden opacity-30 pointer-events-none hidden sm:block border border-cobalt/20 shadow-sm"
                  aria-hidden="true"
                >
                  <img
                    src="/images/brand/superpower-abstract-world.webp"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Primary Hero Photograph */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3]">
                  <img
                    src="/images/homepage/hero-community-discovery.jpg"
                    alt="Community participants exploring AI capabilities together in a welcoming group setting"
                    className="w-full h-full object-cover"
                    loading="eager"
                    width="1200"
                    height="900"
                  />
                </div>

                {/* Floating Stat/Accent badge */}
                <div className="absolute -bottom-5 -left-4 sm:left-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-surface-border flex items-center gap-3 max-w-xs">
                  <div className="w-10 h-10 rounded-lg bg-softblue flex items-center justify-center text-cobalt flex-shrink-0 font-bold">
                    AI
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-navy">Human Capability First</p>
                    <p className="text-body-muted">Real interests, personal guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — The Idea */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image side */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-surface-border aspect-[4/3]">
                <img
                  src="/images/homepage/everyday-discovery.jpg"
                  alt="Practical everyday AI exploration and learning"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="1000"
                  height="750"
                />
              </div>
            </div>

            {/* Editorial Content side */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <SectionHeading
                eyebrow="The Idea"
                title="More than technology. More possibilities."
              />
              <div className="space-y-4 text-base sm:text-lg text-body leading-relaxed">
                <p>
                  AI is changing what people can do.
                </p>
                <p>
                  It can help you explore a new interest, understand something unfamiliar, create something original, solve an everyday problem or pursue an ambition.
                </p>
                <p>
                  But knowing that these capabilities exist is only the beginning.
                </p>
                <p className="text-navy font-medium">
                  The Superpower Project brings people and AI together through experiences designed around real interests, practical applications and human connection.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-cobalt font-semibold hover:text-cobalt-hover group"
                >
                  <span>Learn more about our philosophy</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — What Becomes Possible? */}
      <section className="py-20 md:py-28 bg-ivory border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14 space-y-4">
            <SectionHeading
              eyebrow="Capabilities"
              title="What becomes possible?"
              description="Explore areas where artificial intelligence opens up practical everyday opportunities."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden border border-surface-border shadow-sm hover:shadow-md hover:border-cobalt/40 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-ivory-dark">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-semibold text-navy flex items-center gap-1.5 shadow-sm">
                      <IconComp className="w-3.5 h-3.5 text-cobalt" />
                      <span>{item.tag}</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-navy group-hover:text-cobalt transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-body-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="pt-2">
                      <Link
                        to="/possibilities"
                        className="text-xs font-semibold text-cobalt inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
                      >
                        <span>See practical examples</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/possibilities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-surface-border text-navy font-semibold hover:border-cobalt hover:text-cobalt transition-all shadow-sm"
            >
              <span>Explore all possibilities in detail</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 — How It Works (Timeline) */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Process"
            title="Discovery starts with you."
            description="Our structured approach meets you where you are, with no prior tech skills required."
            align="center"
            className="mb-16"
          />

          {/* Desktop Horizontal / Mobile Vertical Timeline */}
          <div className="relative">
            {/* Connecting line on desktop */}
            <div
              className="hidden lg:block absolute top-12 left-16 right-16 h-0.5 bg-surface-border"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative bg-ivory rounded-2xl p-8 border border-surface-border hover:border-cobalt/30 transition-all flex flex-col space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-xl bg-cobalt text-white flex items-center justify-center font-bold text-lg shadow-sm">
                      {step.number}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-body-muted">
                      Step {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-navy pt-2">
                    {step.title}
                  </h3>
                  <p className="text-body-muted text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Our Experiences */}
      <section className="py-20 md:py-28 bg-ivory border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Programmes"
            title="Our experiences"
            description="Whether through community events, regular groups or individual coaching, choose the pathway that suits you best."
            className="mb-14 max-w-3xl"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-surface-border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-navy group-hover:text-cobalt transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-body-muted text-base leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  <div className="pt-2">
                    <Link
                      to={exp.link}
                      className="inline-flex items-center gap-2 text-cobalt font-semibold hover:text-cobalt-hover group-hover:gap-3 transition-all"
                    >
                      <span>{exp.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Human at the Centre */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Our Principle"
                title="Technology should expand human possibility."
              />
              <div className="space-y-4 text-base sm:text-lg text-body leading-relaxed">
                <p>
                  We believe the most valuable use of AI is not simply doing things faster.
                </p>
                <p>
                  It is helping people do things they previously couldn't, explore interests they hadn't considered and access capabilities that might otherwise have felt out of reach.
                </p>
                <p className="text-navy font-semibold text-lg">
                  Our approach is personal, practical and centred on people.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/responsible-use"
                  className="inline-flex items-center gap-2 text-cobalt font-semibold hover:text-cobalt-hover"
                >
                  <span>Read our Safeguarding &amp; Responsible AI principles</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-surface-border aspect-[4/3]">
                <img
                  src="/images/community/social-discovery.jpg"
                  alt="People collaborating and exploring ideas together"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — For Organisations */}
      <section className="py-20 md:py-28 bg-ivory border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-surface-border aspect-[4/3]">
                <img
                  src="/images/organisations/community-venue.jpg"
                  alt="Community venue for hosting AI discovery workshops"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <SectionHeading
                eyebrow="Institutional Partnerships"
                title="Bring new possibilities to your community."
              />
              <div className="space-y-4 text-base sm:text-lg text-body leading-relaxed">
                <p>
                  We work with organisations interested in bringing practical, engaging AI experiences to the people they serve.
                </p>
                <p>
                  Whether you're a community centre, library, housing organisation, charity or retirement community, we can explore a programme suited to your audience.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/organisations"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy text-white font-semibold hover:bg-navy-light shadow-md transition-all duration-200"
                >
                  <span>Explore organisational partnerships</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        headline="There's more you can do than you think."
        copy="Discover what AI could make possible for you or your community."
        primaryButtonText="Explore programmes"
        primaryButtonLink="/programmes"
        secondaryButtonText="Get in touch"
        secondaryButtonLink="/contact"
      />
    </>
  );
}
