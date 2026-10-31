import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import Accordion from '../components/Accordion';
import CTASection from '../components/CTASection';

export default function FAQPage() {
  const faqItems = [
    {
      id: 1,
      question: "Do I need to know anything about AI beforehand?",
      answer: "No. Our experiences are designed to be accessible to people with different levels of familiarity. Curiosity is enough to get started.",
    },
    {
      id: 2,
      question: "Is this just a ChatGPT class?",
      answer: "No. We explore a range of practical and creative AI applications. The focus is on what people can accomplish, not simply learning one particular tool.",
    },
    {
      id: 3,
      question: "Is it suitable for older adults?",
      answer: "Yes. Experiences can be adapted for older adults, including people who have little previous experience with AI or digital tools.",
    },
    {
      id: 4,
      question: "Is it only for older adults?",
      answer: "No. The project explores AI capability development across different audiences and communities.",
    },
    {
      id: 5,
      question: "Can organisations host an event?",
      answer: "Yes. Community centres, libraries, charities and other organisations can enquire about hosting a community event or commissioning a programme.",
    },
    {
      id: 6,
      question: "Can I book individual sessions?",
      answer: "Personal sessions can be arranged around individual interests and learning objectives. Contact us to discuss availability.",
    },
    {
      id: 7,
      question: "Do I need to bring a laptop?",
      answer: "Requirements depend on the format. Arrangements can be discussed in advance. Participants should not assume devices will automatically be supplied.",
    },
    {
      id: 8,
      question: "Is AI always accurate?",
      answer: "No. AI systems can produce inaccurate or misleading information. We encourage critical thinking and checking important information.",
    },
    {
      id: 9,
      question: "Is my personal information safe?",
      answer: "We encourage responsible use of AI and careful consideration of what information is shared with third-party tools.",
    },
    {
      id: 10,
      question: "How much does it cost?",
      answer: "Costs depend on format, duration and arrangements. Contact us to discuss an appropriate option.",
    },
    {
      id: 11,
      question: "Can family members arrange a session for someone?",
      answer: "Yes. A family member can enquire, but the participant's own preferences and consent remain central.",
    },
    {
      id: 12,
      question: "How do I get involved?",
      answer: "Explore the programme pages or contact us directly.",
    },
  ];

  return (
    <>
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about The Superpower Project, session formats, accessibility, safety, and bookings."
      />

      {/* Hero */}
      <section className="bg-ivory py-12 md:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

          <div className="mt-8 max-w-3xl space-y-5">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
              Got Questions?
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-body-muted leading-relaxed">
              Clear answers about our educational sessions, who can attend, what equipment is required, and how we approach safety and responsible AI.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion items={faqItems} defaultOpenId={1} />

          {/* Additional Guidance Box */}
          <div className="mt-16 p-8 rounded-2xl bg-ivory border border-surface-border text-center space-y-4">
            <h3 className="text-xl font-bold text-navy">
              Have a question that isn't answered here?
            </h3>
            <p className="text-body-muted text-sm sm:text-base max-w-xl mx-auto">
              We are always happy to discuss specific access requirements, bespoke arrangements for your venue, or how sessions work.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cobalt text-white font-semibold hover:bg-cobalt-hover shadow-sm"
              >
                <span>Get in touch with us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to explore what AI could make possible?"
        copy="Take a look through our programmes or enquire for your local organisation."
        primaryButtonText="Explore programmes"
        primaryButtonLink="/programmes"
        secondaryButtonText="Contact our team"
        secondaryButtonLink="/contact"
      />
    </>
  );
}
