import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Palette, HelpCircle, Gift, Compass } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { asset } from '../utils/asset';

export default function PersonalSessionsPage() {
  const explorationAreas = [
    {
      title: 'Life Stories & Memoirs',
      desc: 'Dictate childhood recollections, career highlights, or wartime family memories and watch them transformed into beautifully formatted prose chapters.',
      icon: BookOpen,
      image: asset('/images/personal/personal-memories.jpg'),
    },
    {
      title: 'Visual Art & Painting Styles',
      desc: 'Describe a scene—such as your prize garden, a beloved pet, or a childhood landscape—and generate museum-quality watercolour or oil paintings.',
      icon: Palette,
      image: asset('/images/personal/creative-capability.jpg'),
    },
    {
      title: 'Everyday Curiosities & Deep Learning',
      desc: 'Ask any question you have ever wondered about science, history, philosophy, or family origins without feeling silly or rushed.',
      icon: HelpCircle,
      image: asset('/images/personal/personal-ai-session.jpg'),
    },
    {
      title: 'Travel & Nostalgic Exploration',
      desc: 'Explore the hometowns of your youth, recreate ancient destinations, or plan the itinerary for an upcoming holiday or reunion.',
      icon: Compass,
      image: asset('/images/personal/travel-exploration.jpg'),
    },
  ];

  return (
    <>
      <SEO
        title="Personal 1-to-1 AI Sessions | The Superpower Project"
        description="Personal, patient 1-to-1 AI discovery sessions for older adults. Explore memoirs, artwork, everyday questions and creative projects. Transparent pricing from £49."
      />

      {/* Hero */}
      <section className="bg-ivory py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Personal Sessions' }]} />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt block">
                Tailored 1-to-1 Guidance
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
                Explore What AI Can Do For You, At Your Own Pace.
              </h1>
              <p className="text-base sm:text-lg text-body leading-relaxed">
                No computer manuals. No stressful tech tests. Just a friendly, knowledgeable facilitator sitting alongside you to explore your creative ideas, answer life questions, and turn your memories into lasting treasures.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-7 py-3.5 rounded-xl bg-cobalt hover:bg-cobalt-hover text-white font-bold text-base shadow-md transition-all"
                >
                  View Pricing &amp; Book (from £49)
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/book-for-someone"
                  className="inline-flex items-center px-6 py-3.5 rounded-xl bg-white border border-surface-border hover:bg-gray-50 text-navy font-semibold text-base transition-colors"
                >
                  <Gift className="w-4 h-4 mr-2 text-cobalt" />
                  Book for a Parent or Relative
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src={asset('/images/personal/personal-ai-session.jpg')}
                  alt="An older adult discovering generative AI in a friendly 1-to-1 session"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before, During, After Walkthrough */}
      <section className="py-16 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cobalt">
              What to Expect
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Before, During &amp; After Your Session
            </h2>
            <p className="text-base text-body-muted leading-relaxed">
              We remove all the friction so you can focus entirely on curiosity and enjoyment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-ivory border border-surface-border space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cobalt/10 text-cobalt flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-navy">Before the Session</h3>
              <p className="text-sm text-body leading-relaxed">
                We have a brief, friendly conversation by phone to hear about what you enjoy—gardening, family history, writing, or travel. There is nothing you need to study or download in advance.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-ivory border border-surface-border space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cobalt/10 text-cobalt flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-navy">During the Session</h3>
              <p className="text-sm text-body leading-relaxed">
                The facilitator arrives at your home (or dials in via a simple video link). You dictate your thoughts while the facilitator operates the tools live. You see words, artwork, and answers appear instantaneously.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-ivory border border-surface-border space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cobalt/10 text-cobalt flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-navy">After the Session</h3>
              <p className="text-sm text-body leading-relaxed">
                You receive high-quality colour printouts or digital files of all poems, artwork, or memoirs created, along with a simple prompt summary sheet if you ever want to explore on your own device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exploration Areas */}
      <section className="py-16 lg:py-24 bg-ivory border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-cobalt">
              Limitless Topics
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Popular Areas of Exploration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {explorationAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-surface-border shadow-sm flex flex-col sm:flex-row items-stretch"
              >
                <div className="sm:w-2/5 relative h-48 sm:h-auto">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="sm:w-3/5 p-6 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-navy">{area.title}</h3>
                    <p className="text-xs text-body leading-relaxed mt-2">{area.desc}</p>
                  </div>
                  <Link
                    to="/possibilities"
                    className="text-xs font-bold text-cobalt hover:underline inline-flex items-center gap-1"
                  >
                    See examples →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-softblue">
                Clear &amp; Transparent
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Sessions start from just £49
              </h3>
              <p className="text-sm text-gray-300 max-w-lg leading-relaxed">
                Choose a single discovery session to test the waters, or select a multi-session package for in-depth memoir and creative projects.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                to="/pricing"
                className="px-6 py-3.5 rounded-xl bg-cobalt hover:bg-cobalt-hover text-white font-bold text-sm shadow-md transition-colors text-center"
              >
                View All Pricing &amp; Book
              </Link>
              <Link
                to="/book-for-someone"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors text-center"
              >
                Gift for a Loved One
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
