import { Link } from 'react-router-dom';
import { Building2, User, Laptop, Wifi, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function HowItWorksPage() {
  const individualSteps = [
    {
      num: '01',
      title: 'A Warm Initial Conversation',
      desc: 'We start with a quick, friendly telephone call to understand your interests, hobbies, or what project you might like to explore. No technical knowledge or preparation is required.',
    },
    {
      num: '02',
      title: 'Gentle Setup (In-Person or Online)',
      desc: 'If in-person, the facilitator arrives with a high-resolution tablet, cellular data connection, and all equipment. If online, we send a one-click video link that requires zero logins or software downloads.',
    },
    {
      num: '03',
      title: 'Guided Exploration & Co-Creation',
      desc: 'You dictate ideas, ask questions, or share memories. The facilitator demonstrates live how modern AI interprets and expands on your thoughts, letting you steer the direction completely.',
    },
    {
      num: '04',
      title: 'Takeaway Creations & Ongoing Support',
      desc: 'All artwork, poems, memoir chapters, and summaries are printed out or emailed in crystal-clear format. You also receive a handy prompt guide if you wish to try further on your own device.',
    },
  ];

  const careHomeSteps = [
    {
      num: '01',
      title: 'Activities Lead Consultation',
      desc: 'We discuss your resident community, cognitive profiles, lounge layout, and preferred scheduling (morning vs afternoon) to tailor the themes appropriately.',
    },
    {
      num: '02',
      title: 'Turnkey Facilitated Delivery',
      desc: 'Our DBS-vetted facilitator brings all necessary equipment—large wireless displays, wireless mobile 5G internet, and creative materials. Your activities team has zero setup work.',
    },
    {
      num: '03',
      title: 'Stimulating, Inclusive Session',
      desc: 'Residents collaborate on nostalgic scenes, historical hometowns, poetry, and stories. The pace is gentle, sensory-rich, and tailored to resident energy levels.',
    },
    {
      num: '04',
      title: 'CQC Evidence & Keepsake Prints',
      desc: 'We provide printed keepsakes for resident rooms, plus an activity summary log detailing resident participation and engagement impact for your care records.',
    },
  ];

  return (
    <>
      <SEO
        title="How It Works | Personal & Care Home Delivery | The Superpower Project"
        description="Understand our step-by-step delivery process for individuals, families, and residential care homes. Hardware, facilitator standards and zero-friction setup."
      />

      <section className="bg-ivory py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'How It Works' }]} />

          <div className="mt-8 max-w-3xl space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
              Simple, Dignified &amp; Supported
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              How The Superpower Experience Works
            </h1>
            <p className="text-base sm:text-lg text-body-muted leading-relaxed">
              Whether you are an individual wanting to explore a personal curiosity or a care home manager seeking stimulating resident activities, we remove every barrier to entry.
            </p>
          </div>
        </div>
      </section>

      {/* Pathway 1: Individuals & Families */}
      <section className="py-16 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-cobalt/10 text-cobalt">
              <User className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cobalt">
                Pathway A
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                For Individuals &amp; Families
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {individualSteps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-ivory border border-surface-border space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cobalt text-white flex items-center justify-center font-bold text-sm">
                    {s.num}
                  </div>
                  <h3 className="font-bold text-navy text-base">{s.title}</h3>
                  <p className="text-xs text-body leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-right">
            <Link
              to="/pricing"
              className="inline-flex items-center text-sm font-bold text-cobalt hover:underline gap-1"
            >
              View pricing and packages (from £49) →
            </Link>
          </div>
        </div>
      </section>

      {/* Pathway 2: Care Homes */}
      <section className="py-16 lg:py-24 bg-ivory border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-cobalt/10 text-cobalt">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cobalt">
                Pathway B
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                For Care Homes &amp; Residential Providers
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {careHomeSteps.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-surface-border space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center font-bold text-sm">
                    {s.num}
                  </div>
                  <h3 className="font-bold text-navy text-base">{s.title}</h3>
                  <p className="text-xs text-body leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-right">
            <Link
              to="/care-homes#proposal-form"
              className="inline-flex items-center text-sm font-bold text-cobalt hover:underline gap-1"
            >
              Request a care home proposal →
            </Link>
          </div>
        </div>
      </section>

      {/* Equipment & Standards Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-ivory border border-surface-border space-y-2">
              <div className="flex items-center gap-2 text-navy font-bold text-base">
                <Laptop className="w-5 h-5 text-cobalt" />
                <span>All Equipment Supplied</span>
              </div>
              <p className="text-xs text-body leading-relaxed">
                We bring large-print tablets, external keyboards, portable speakers, and photo scanning apparatus. You do not need to purchase or configure anything.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ivory border border-surface-border space-y-2">
              <div className="flex items-center gap-2 text-navy font-bold text-base">
                <Wifi className="w-5 h-5 text-cobalt" />
                <span>Zero Wi-Fi Hassle</span>
              </div>
              <p className="text-xs text-body leading-relaxed">
                We carry independent 5G mobile cellular hotspots. Even if your venue has thick stone walls or restricted passwords, our sessions run smoothly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ivory border border-surface-border space-y-2">
              <div className="flex items-center gap-2 text-navy font-bold text-base">
                <ShieldCheck className="w-5 h-5 text-cobalt" />
                <span>Vetted &amp; Insured</span>
              </div>
              <p className="text-xs text-body leading-relaxed">
                Enhanced DBS checks, £5M public liability insurance, and rigorous adult safeguarding procedures accompany every single facilitator visit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
