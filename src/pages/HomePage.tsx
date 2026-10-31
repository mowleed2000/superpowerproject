import { Link } from 'react-router-dom';
import { Building2, User, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, FileCheck2, Heart, Gift, ChevronRight, Award } from 'lucide-react';
import SEO from '../components/SEO';
import { asset } from '../utils/asset';

export default function HomePage() {
  const capabilities = [
    {
      title: 'Life Stories & Memoirs',
      desc: 'Turn childhood memories, military service, and career milestones into illustrated chapters.',
      image: asset('/images/personal/personal-memories.jpg'),
      link: '/possibilities#memoirs',
    },
    {
      title: 'Watercolour & Fine Art',
      desc: 'Describe a beloved garden, pet, or landscape and watch original artwork painted by voice.',
      image: asset('/images/personal/creative-capability.jpg'),
      link: '/possibilities#visual-art',
    },
    {
      title: 'Care Home Reminiscence',
      desc: 'Revisit 1950s hometown streets, historic steam trains, and childhood radio broadcasts.',
      image: asset('/images/community/social-discovery.jpg'),
      link: '/possibilities#travel-geography',
    },
    {
      title: 'Lifelong Curiosities',
      desc: 'Investigate deep historical questions, world languages, or family origin mysteries without jargon.',
      image: asset('/images/capabilities/capability-learning.webp'),
      link: '/possibilities#lifelong-learning',
    },
  ];

  return (
    <>
      <SEO
        title="The Superpower Project | Artificial Intelligence for Older Adults & Care Homes"
        description="Structured, patient, fully facilitated AI experiences for residential care homes, older adults, and families. Reignite memories, spark creative joy, and build confidence."
      />

      {/* Hero Section */}
      <section className="relative bg-navy text-white overflow-hidden py-16 lg:py-24 border-b border-navy-light">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url('${asset('/images/brand/programme-pattern.webp')}')` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-softblue/10 border border-softblue/30 text-softblue text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Age is experience. AI is amplification.
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Artificial Intelligence for Older Adults — Not Lessons. <span className="text-softblue">Experiences.</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl">
                We bring stimulating, patient, fully facilitated AI discovery sessions into residential care homes and private homes. Reignite cherished memories, spark creative joy, and explore what modern technology can do for you.
              </p>

              {/* Dual Primary Doors */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/care-homes"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-cobalt hover:bg-cobalt-hover text-white font-bold text-base shadow-lg shadow-cobalt/25 transition-all duration-200"
                >
                  <Building2 className="w-5 h-5 mr-2" />
                  For Care Homes &amp; Providers
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base transition-colors"
                >
                  <User className="w-5 h-5 mr-2 text-softblue" />
                  Personal Sessions (from £49)
                </Link>
              </div>

              {/* Trust Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-navy-light/60 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-softblue flex-shrink-0" />
                  <span>Turnkey delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-softblue flex-shrink-0" />
                  <span>Enhanced DBS checked</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-softblue flex-shrink-0" />
                  <span>£5M Public Liability</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-softblue flex-shrink-0" />
                  <span>CQC Evidence Ready</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-navy-light">
                <img
                  src={asset('/images/homepage/hero-community-discovery.jpg')}
                  alt="An older adult discovering generative AI with a facilitator"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-softblue mb-1">
                    Hands-On Discovery
                  </span>
                  <p className="text-white text-sm font-semibold">
                    No tech background needed. We guide every step with dignity, warmth, and patience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: More Than Technology Lessons */}
      <section className="py-16 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
              A Fundamentally Different Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              More Than Technology Lessons
            </h2>
            <p className="text-base sm:text-lg text-body-muted leading-relaxed">
              Most digital initiatives for older adults focus on rote device training. We do the opposite: we handle the technology entirely so participants can experience the thrill of creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Column A: Traditional IT */}
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 space-y-5">
              <span className="inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-bold uppercase">
                Traditional Digital Skills Classes
              </span>
              <ul className="space-y-4 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-base">✕</span>
                  <span>Heavy focus on passwords, menus, settings, and updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-base">✕</span>
                  <span>Requires memorising multi-step technical instructions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-base">✕</span>
                  <span>Frustrating for arthritic fingers or tremor difficulties</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-rose-500 font-bold text-base">✕</span>
                  <span>Feels like a school test where people fear making mistakes</span>
                </li>
              </ul>
            </div>

            {/* Column B: The Superpower Project */}
            <div className="p-8 rounded-3xl bg-softblue/15 border-2 border-cobalt shadow-md space-y-5">
              <span className="inline-block px-3 py-1 rounded-full bg-cobalt text-white text-xs font-bold uppercase tracking-wider">
                The Superpower Project Experience
              </span>
              <ul className="space-y-4 text-sm text-navy font-medium">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cobalt flex-shrink-0" />
                  <span>Zero passwords, logins, or tech homework required</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cobalt flex-shrink-0" />
                  <span>Voice-led prompting: speak your memories, hear them amplified</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cobalt flex-shrink-0" />
                  <span>Facilitator operates all physical devices and software</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cobalt flex-shrink-0" />
                  <span>Tangible keepsakes: beautiful prints, poems, and stories to keep</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Market Showcase Panels */}
      <section className="py-16 lg:py-24 bg-ivory border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cobalt">
              Choose Your Pathway
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy">
              Two Dedicated Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Panel 1: Care Homes */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-surface-border shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-softblue/20 text-cobalt text-xs font-bold uppercase">
                  <Building2 className="w-3.5 h-3.5" />
                  For Care Homes &amp; Providers
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  Stimulating Resident Activities That Spark Wonder
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  Turnkey group and 1-to-1 bedside sessions tailored for care homes. We bring large displays, soundscapes, and 5G cellular connection. Evidenced for CQC Wellbeing KLOEs with zero staff setup burden.
                </p>
                <div className="space-y-2 text-xs text-body pt-2 border-t border-surface-border">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Discovery Half-Day events &amp; recurring series</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Dementia-inclusive &amp; sensory reminiscence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Written engagement logs for care inspections</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/care-homes"
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-cobalt hover:bg-cobalt-hover text-white font-bold text-sm shadow-md transition-colors"
                >
                  Explore Care Home Offerings
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Panel 2: Older Adults & Families */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-surface-border shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase">
                  <Heart className="w-3.5 h-3.5 text-purple-700" />
                  For Older Adults &amp; Families
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                  Personal 1-to-1 Sessions Built Around What You Love
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  Patient, friendly 1-to-1 discovery sessions delivered in your home across London or online nationwide. Transparent pricing starting from £49, with elegant gift packages for parents.
                </p>
                <div className="space-y-2 text-xs text-body pt-2 border-t border-surface-border">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                    <span>Introductory Discovery Session: £49</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                    <span>Memoirs, botanical art, family history &amp; stories</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                    <span>Thoughtful gift option for adult children to purchase</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/pricing"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-navy hover:bg-navy-light text-white font-bold text-sm transition-colors text-center"
                >
                  View Pricing (from £49)
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  to="/book-for-someone"
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-sand/60 hover:bg-sand text-navy font-semibold text-sm transition-colors"
                >
                  <Gift className="w-4 h-4 mr-1.5 text-cobalt" />
                  Gift for a Parent
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Could You Discover: Capabilities Grid */}
      <section className="py-16 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
              Limitless Possibilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              What Could You Discover?
            </h2>
            <p className="text-base text-body-muted leading-relaxed">
              Whether you are an aspiring writer, a passionate gardener, a former engineer, or simply curious about the world, AI opens doors you never thought possible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c, idx) => (
              <div
                key={idx}
                className="bg-ivory rounded-3xl overflow-hidden border border-surface-border shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="h-44 overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-bold text-navy">{c.title}</h3>
                    <p className="text-xs text-body leading-relaxed">{c.desc}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    to={c.link}
                    className="text-xs font-bold text-cobalt hover:underline inline-flex items-center gap-1"
                  >
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/possibilities"
              className="inline-flex items-center text-sm font-bold text-cobalt hover:text-cobalt-hover gap-1.5"
            >
              Explore all 10 areas of possibility in detail
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="py-16 lg:py-24 bg-sand/40 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
              Patient &amp; Supported
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              How a Session Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-surface-border space-y-3 shadow-sm">
              <span className="text-3xl font-extrabold text-cobalt">01</span>
              <h3 className="text-lg font-bold text-navy">Bring Your Curiosity</h3>
              <p className="text-xs sm:text-sm text-body leading-relaxed">
                You do not need computer experience. Start with a question, a faded photo, an untold memory, or a hobby you've loved for decades.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-surface-border space-y-3 shadow-sm">
              <span className="text-3xl font-extrabold text-cobalt">02</span>
              <h3 className="text-lg font-bold text-navy">Explore with Guidance</h3>
              <p className="text-xs sm:text-sm text-body leading-relaxed">
                Your patient facilitator operates the technology alongside you. Speak your thoughts naturally and watch stories and artwork come to life.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-surface-border space-y-3 shadow-sm">
              <span className="text-3xl font-extrabold text-cobalt">03</span>
              <h3 className="text-lg font-bold text-navy">Keep What You Create</h3>
              <p className="text-xs sm:text-sm text-body leading-relaxed">
                Take away high-resolution printed keepsakes, poems, and stories to frame, display, or send to children and grandchildren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Final Conversion Panels */}
      <section className="py-16 lg:py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Discover What's Possible?
            </h2>
            <p className="text-sm text-gray-300">
              Get in touch today to schedule your session or request a care home proposal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-3xl bg-navy-light/90 border border-softblue/30 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-softblue">
                For Care Homes &amp; Providers
              </span>
              <h3 className="text-2xl font-bold text-white">Request a Care Home Proposal</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Turnkey resident activity pilot events and recurring wellbeing programmes. Full CQC documentation provided.
              </p>
              <div className="pt-2">
                <Link
                  to="/care-homes#proposal-form"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-cobalt hover:bg-cobalt-hover text-white font-bold text-sm shadow-md transition-colors"
                >
                  Request Proposal
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-navy-light/90 border border-softblue/30 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-softblue">
                For Individuals &amp; Families
              </span>
              <h3 className="text-2xl font-bold text-white">Book a Personal Session</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Individual discovery sessions start at £49. Available in-person across London or online nationwide.
              </p>
              <div className="pt-2">
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-white text-navy font-bold text-sm hover:bg-gray-100 transition-colors shadow-md"
                >
                  Book Session (£49)
                  <ArrowRight className="ml-2 w-4 h-4 text-cobalt" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
