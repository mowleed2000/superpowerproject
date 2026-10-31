import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function CareHomeProgrammesPage() {
  const scheduleItems = [
    {
      time: '00–15 mins',
      title: 'Warm Welcome & Nostalgia Warmup',
      desc: 'Facilitator sets up the wireless display and opens with a gentle verbal icebreaker—such as a nostalgic music track, a vintage advertisement, or asking residents about their childhood neighbourhoods.',
    },
    {
      time: '15–45 mins',
      title: 'Collective Creation: Visuals & Stories',
      desc: 'Residents collaborate to create an original scene or story. A resident might suggest a 1950s seaside holiday at Blackpool; the facilitator prompts the AI live, showing vintage trams, donkey rides, and candy floss carts appearing on screen based directly on resident memories.',
    },
    {
      time: '45–70 mins',
      title: 'Personal Spotlight & Interactive Questions',
      desc: 'Residents take turns suggesting curiosities—such as "How did they make steam trains in Swindon?", hearing poetry composed in their honour, or listening to custom verses created from their anecdotes.',
    },
    {
      time: '70–90 mins',
      title: 'Keepsake Review, Printing & Reflection',
      desc: 'Review of the morning or afternoon creations. The facilitator prints postcard-sized copies of created artwork or binds resident poems into a folder for the lounge display table and family visits.',
    },
  ];

  return (
    <>
      <SEO
        title="Care Home Programmes & Formats | The Superpower Project"
        description="Structured group and individual AI discovery programmes for residential care homes. Detailed schedules, facilitator standards and bespoke provider packages."
      />

      {/* Hero */}
      <section className="bg-ivory py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'For Care Homes', href: '/care-homes' },
              { label: 'Programme Formats' },
            ]}
          />

          <div className="mt-8 max-w-3xl space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
              Structured Resident Experiences
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              Care Home Programme Formats &amp; Schedules
            </h1>
            <p className="text-base sm:text-lg text-body-muted leading-relaxed">
              Explore our structured resident session anatomy, flexible booking packages, and multi-home group agreements designed to enrich your activities calendar with zero administrative burden.
            </p>
          </div>
        </div>
      </section>

      {/* Session Anatomy Walkthrough */}
      <section className="py-16 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cobalt">
              Session Anatomy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              A Sample 90-Minute Care Home Session
            </h2>
            <p className="text-base text-body-muted leading-relaxed">
              Carefully paced to accommodate shorter attention spans and avoid cognitive overstimulation. Every session follows a structured, comforting rhythm:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scheduleItems.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-ivory border border-surface-border flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="inline-block px-3 py-1 rounded-full bg-softblue/30 text-cobalt text-xs font-bold">
                    {item.time}
                  </div>
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-body leading-relaxed">{item.desc}</p>
                </div>
                <div className="text-xs font-semibold text-cobalt pt-2 border-t border-surface-border">
                  Step {idx + 1} of 4
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Formats Breakdown */}
      <section className="py-16 lg:py-24 bg-ivory border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-cobalt">
              Choose the Right Match
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Three Distinct Delivery Models
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Box 1 */}
            <div className="bg-white rounded-3xl p-8 border border-surface-border shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cobalt/10 text-cobalt flex items-center justify-center font-bold text-lg">
                  A
                </div>
                <h3 className="text-2xl font-bold text-navy">Single Discovery Half-Day</h3>
                <p className="text-sm text-body leading-relaxed">
                  Ideal as an introductory pilot or special event feature on your monthly calendar.
                </p>
                <div className="space-y-2 text-xs text-body pt-2 border-t border-surface-border">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>3 hours total delivery time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Includes 2 distinct resident groups</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>All hardware &amp; cellular connectivity provided</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Laminated prints for resident rooms</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/care-homes#proposal-form"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-navy text-white text-sm font-semibold hover:bg-navy-light transition-colors"
                >
                  Request Single Event Quote
                </Link>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-cobalt shadow-md space-y-6 flex flex-col justify-between relative">
              <div className="absolute -top-3.5 left-8 bg-cobalt text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                Most Popular
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cobalt/10 text-cobalt flex items-center justify-center font-bold text-lg">
                  B
                </div>
                <h3 className="text-2xl font-bold text-navy">Recurring Wellbeing Series</h3>
                <p className="text-sm text-body leading-relaxed">
                  Scheduled bi-weekly or monthly visits building familiarity, relationship with the facilitator, and cumulative projects.
                </p>
                <div className="space-y-2 text-xs text-body pt-2 border-t border-surface-border">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                    <span>Consistent facilitator continuity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                    <span>Seasonal themes (e.g. coronation memories, holidays)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                    <span>Activities log documentation for CQC evidence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                    <span>Discounted recurring programme pricing</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/care-homes#proposal-form"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-cobalt text-white text-sm font-semibold hover:bg-cobalt-hover transition-colors shadow-md"
                >
                  Request Series Proposal
                </Link>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white rounded-3xl p-8 border border-surface-border shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-lg">
                  C
                </div>
                <h3 className="text-2xl font-bold text-navy">Multi-Home &amp; Group Providers</h3>
                <p className="text-sm text-body leading-relaxed">
                  Tailored programmes across multiple care homes within an operator group or local authority trust.
                </p>
                <div className="space-y-2 text-xs text-body pt-2 border-t border-surface-border">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-700 flex-shrink-0" />
                    <span>Centralized billing and account management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-700 flex-shrink-0" />
                    <span>Rotational scheduling across 3 to 10+ homes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-700 flex-shrink-0" />
                    <span>Custom resident impact reporting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-700 flex-shrink-0" />
                    <span>Volume partnership discounts</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/care-homes#proposal-form"
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-navy text-white text-sm font-semibold hover:bg-navy-light transition-colors"
                >
                  Discuss Multi-Home Agreement
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilitator Safeguarding & Insurance Banner */}
      <section className="py-16 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-softblue/20 rounded-3xl p-8 sm:p-12 border border-softblue/40 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-cobalt">
                Compliance &amp; Assurance
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                Complete Safeguarding &amp; Documentation Pack
              </h3>
              <p className="text-sm text-body leading-relaxed">
                Prior to every initial session, your activities team receives our full compliance pack: Enhanced DBS certificates, £5M public liability insurance certificate, risk assessments, and health &amp; safety policies.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/care-homes#proposal-form"
                className="inline-flex items-center px-6 py-3.5 rounded-xl bg-cobalt hover:bg-cobalt-hover text-white font-bold text-sm shadow-md transition-colors"
              >
                Request Care Home Proposal
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
