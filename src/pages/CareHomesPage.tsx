import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, ShieldCheck, CheckCircle2, ArrowRight, Award, ChevronRight, FileCheck2 } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { asset } from '../utils/asset';

export default function CareHomesPage() {
  const [formData, setFormData] = useState({
    homeName: '',
    contactName: '',
    role: '',
    email: '',
    phone: '',
    location: '',
    residentBeds: '',
    programmeInterest: 'discovery-half-day',
    notes: '',
    honeypot: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    if (!formData.homeName || !formData.contactName || !formData.email || !formData.phone) {
      setError('Please complete all required fields so we can prepare your proposal.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="AI Discovery Sessions for Care Homes | The Superpower Project"
        description="Structured, stimulating, fully facilitated AI experiences for care home residents. Turnkey delivery, DBS-checked facilitators, zero tech burden for your team."
      />

      {/* Hero Section */}
      <section className="relative bg-navy text-white overflow-hidden py-16 lg:py-24">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url('${asset('/images/brand/programme-pattern.webp')}')` }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }, { label: 'For Care Homes' }]}
            className="text-gray-300"
          />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-softblue/10 border border-softblue/30 text-softblue text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                For Care Homes, Care Providers &amp; Wellbeing Leads
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Meaningful AI Discovery Sessions for Care Home Residents
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-2xl">
                Structured, stimulating, fully facilitated group and 1-to-1 sessions that ignite memories, spark lively conversation, and re-engage residents with curiosity and creative joy.
              </p>

              {/* Key Trust Signals */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-navy-light/60">
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-softblue flex-shrink-0" />
                  <span>Turnkey delivery — zero staff tech burden</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <ShieldCheck className="w-5 h-5 text-softblue flex-shrink-0" />
                  <span>Enhanced DBS &amp; £5M Public Liability</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-200">
                  <FileCheck2 className="w-5 h-5 text-softblue flex-shrink-0" />
                  <span>Evidenced for CQC Wellbeing KLOEs</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="#proposal-form"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-cobalt hover:bg-cobalt-hover text-white font-bold text-base shadow-lg shadow-cobalt/25 transition-all duration-200"
                >
                  Request a Care Home Proposal
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                <Link
                  to="/care-home-programmes"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-base transition-colors"
                >
                  View Programme Formats
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 bg-navy-light">
                <img
                  src={asset('/images/community/social-discovery.jpg')}
                  alt="Care home residents engaging in an interactive AI storytelling session"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs uppercase tracking-wider font-bold text-softblue mb-1">
                    Live Session Snapshot
                  </span>
                  <p className="text-white font-semibold text-sm">
                    Residents co-creating historical street scenes of 1950s London in their communal lounge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Not a Computer Class Banner */}
      <section className="bg-sand/60 border-b border-surface-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-surface-border shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-cobalt">
                The Superpower Approach
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-navy">
                This is not a technology class. It is an engaging resident activity.
              </h2>
              <p className="text-body text-sm sm:text-base leading-relaxed">
                Residents do not need to memorize menus, learn keyboard shortcuts, or operate complex devices. We use artificial intelligence as an imaginative canvas: turning verbal memories into paintings, nostalgic soundscapes, poetry, and family stories right before their eyes.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                to="/possibilities"
                className="inline-flex items-center text-sm font-bold text-cobalt hover:text-cobalt-hover gap-1"
              >
                See 10 exploration areas <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Resident Experience */}
      <section className="py-16 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
              Inside the Lounge
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              What Actually Happens in a Care Home Session
            </h2>
            <p className="text-base sm:text-lg text-body-muted leading-relaxed">
              Every session is fully facilitated by an experienced, patient practitioner. We bring the large display tablet, speakers, and mobile 5G internet so you never have to worry about Wi-Fi or technical setup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ivory rounded-3xl p-8 border border-surface-border hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cobalt/10 text-cobalt flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-navy">Igniting Personal Memories</h3>
              <p className="text-sm text-body leading-relaxed">
                Residents talk about their first car, childhood street, wedding day dance, or past professions. Using conversational AI, we recreate authentic scenes, nostalgic recipes, and period-accurate imagery in seconds.
              </p>
              <div className="pt-2 text-xs font-semibold text-cobalt">
                ✓ Proven to unlock deep reminiscence in quiet residents
              </div>
            </div>

            <div className="bg-ivory rounded-3xl p-8 border border-surface-border hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cobalt/10 text-cobalt flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-navy">Creative Collaboration</h3>
              <p className="text-sm text-body leading-relaxed">
                Residents describe an idea—a poem about springtime, an illustrated fable for grandchildren, or a watercolour of their favourite bird. The group directs the colours and phrasing, seeing their imagination come to life.
              </p>
              <div className="pt-2 text-xs font-semibold text-cobalt">
                ✓ No fine motor skills or digital dexterity needed
              </div>
            </div>

            <div className="bg-ivory rounded-3xl p-8 border border-surface-border hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cobalt/10 text-cobalt flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-navy">Keepsake Prints for Residents</h3>
              <p className="text-sm text-body leading-relaxed">
                At the end of the session, created stories, artwork, and poems are printed or shared as digital keepsakes for residents to display in their rooms or post to proud family members.
              </p>
              <div className="pt-2 text-xs font-semibold text-cobalt">
                ✓ Tangible positive outcomes families cherish
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Care Home Managers & Activities Coordinators Choose Us */}
      <section className="py-16 lg:py-24 bg-ivory border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
                Built For Activities Teams
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
                Designed to relieve activities staff, not add to their workload.
              </h2>
              <p className="text-base text-body leading-relaxed">
                Activities coordinators already carry enormous demands on their time. When you book The Superpower Project, we provide a complete, standalone experience:
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-100 text-emerald-800 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">Zero Setup or Technical Prep</h4>
                    <p className="text-xs text-body-muted mt-0.5">
                      We arrive fully equipped with iPads, displays, high-speed 5G mobile Wi-Fi, and creative software. Your staff can sit in, enjoy the session, or attend to other duties.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-100 text-emerald-800 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">CQC Evidence &amp; Wellbeing Documentation</h4>
                    <p className="text-xs text-body-muted mt-0.5">
                      Following each session, we supply a concise engagement log highlighting resident participation, creative outputs, and mood impact for your activity records and CQC inspection portfolios.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-100 text-emerald-800 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">Inclusive for Cognitive Variation</h4>
                    <p className="text-xs text-body-muted mt-0.5">
                      Pacing is completely gentle, respectful, and sensory-friendly. We adapt continuously to residents with mild-to-moderate memory loss or sensory fatigue.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-100 text-emerald-800 mt-1">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-sm">A Standout Feature for Prospective Families</h4>
                    <p className="text-xs text-body-muted mt-0.5">
                      Showcase forward-thinking, intellectually stimulating resident wellbeing that goes well beyond traditional bingo and chair exercise when touring prospective families.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-8 border border-surface-border shadow-sm space-y-6">
                <div className="flex items-center gap-4 pb-6 border-b border-surface-border">
                  <div className="w-12 h-12 rounded-2xl bg-cobalt/10 text-cobalt flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-navy text-base">Professional Safeguarding Standards</h4>
                    <p className="text-xs text-body-muted">Rigorous compliance for residential care environments</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 rounded-2xl bg-ivory border border-surface-border">
                    <span className="block font-bold text-navy">Enhanced DBS</span>
                    <span className="text-xs text-body-muted mt-1 block">Full background checking renewed annually</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-ivory border border-surface-border">
                    <span className="block font-bold text-navy">£5M Public Liability</span>
                    <span className="text-xs text-body-muted mt-1 block">Comprehensive commercial liability cover</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-ivory border border-surface-border">
                    <span className="block font-bold text-navy">Strict GDPR &amp; Privacy</span>
                    <span className="text-xs text-body-muted mt-1 block">Zero training on resident data or facial photos</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-ivory border border-surface-border">
                    <span className="block font-bold text-navy">Independent Hotspot</span>
                    <span className="text-xs text-body-muted mt-1 block">No reliance on care home Wi-Fi networks</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-softblue/10 border border-softblue/20 text-xs text-navy leading-relaxed">
                  <strong>Facilitator Experience:</strong> Our facilitators combine technology mastery with deep patience, dignity, and warmth in care home and residential community settings.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Delivery Formats */}
      <section className="py-16 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
              Flexible Formats
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              Care Home Programme Formats
            </h2>
            <p className="text-base sm:text-lg text-body-muted leading-relaxed">
              Whether you want to trial a single high-energy discovery event or establish a regular bi-weekly wellbeing feature on your calendar, we tailor each engagement to your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Format 1 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-surface-border hover:border-cobalt transition-colors flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-softblue/20 text-cobalt text-xs font-bold uppercase">
                  Most Popular Pilot
                </span>
                <h3 className="text-2xl font-bold text-navy">Discovery Half-Day</h3>
                <p className="text-sm text-body leading-relaxed">
                  A high-impact 3-hour morning or afternoon session introducing up to 15 residents in small groups to the wonder of AI reminiscence and creativity.
                </p>
                <ul className="space-y-2.5 text-xs text-body pt-2 border-t border-surface-border">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>2 × 75-minute interactive group sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Full facilitator &amp; mobile equipment kit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Printed keepsakes for participating residents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Activity report for care logs</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <a
                  href="#proposal-form"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-navy text-white text-sm font-semibold hover:bg-navy-light transition-colors"
                >
                  Enquire for Discovery Day
                </a>
              </div>
            </div>

            {/* Format 2 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-cobalt shadow-md flex flex-col justify-between relative">
              <div className="absolute -top-3.5 left-8 bg-cobalt text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                Recommended For Wellbeing
              </div>
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-cobalt/10 text-cobalt text-xs font-bold uppercase">
                  Ongoing Engagement
                </span>
                <h3 className="text-2xl font-bold text-navy">Recurring Group Series</h3>
                <p className="text-sm text-body leading-relaxed">
                  Bi-weekly or monthly sessions building themed resident projects—such as a care home poetry collection, nostalgia photo album, or group storytelling.
                </p>
                <ul className="space-y-2.5 text-xs text-body pt-2 border-t border-surface-border">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                    <span>Consistent scheduled slot (e.g. 1st &amp; 3rd Tuesday)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                    <span>Fosters anticipation and sustained mental stimulation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                    <span>Cumulative project culminating in an exhibition</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                    <span>Discounted recurring institutional rate</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <a
                  href="#proposal-form"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-cobalt text-white text-sm font-semibold hover:bg-cobalt-hover transition-colors shadow-md"
                >
                  Request Series Proposal
                </a>
              </div>
            </div>

            {/* Format 3 */}
            <div className="bg-white rounded-3xl p-8 border-2 border-surface-border hover:border-cobalt transition-colors flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase">
                  Specialist &amp; Bed-Bound
                </span>
                <h3 className="text-2xl font-bold text-navy">1-to-1 Bedside &amp; Room Visits</h3>
                <p className="text-sm text-body leading-relaxed">
                  Gentle, personalized visits dedicated to residents who cannot join the communal lounge due to mobility limits or sensory overstimulation.
                </p>
                <ul className="space-y-2.5 text-xs text-body pt-2 border-t border-surface-border">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-700 flex-shrink-0" />
                    <span>30–45 minute gentle 1-to-1 bedside visits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-700 flex-shrink-0" />
                    <span>Deep focus on personal nostalgia and family ties</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-700 flex-shrink-0" />
                    <span>Sensory music, vintage visuals and quiet conversation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-700 flex-shrink-0" />
                    <span>Can be combined with group afternoon sessions</span>
                  </li>
                </ul>
              </div>
              <div className="pt-6">
                <a
                  href="#proposal-form"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-navy text-white text-sm font-semibold hover:bg-navy-light transition-colors"
                >
                  Enquire for 1-to-1 Visits
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/care-home-programmes"
              className="inline-flex items-center text-sm font-bold text-cobalt hover:text-cobalt-hover gap-1.5"
            >
              Explore sample 90-minute session schedules &amp; multi-home packages
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Proposal Request Form Section */}
      <section id="proposal-form" className="py-16 lg:py-24 bg-ivory scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-surface-border shadow-xl">
            <div className="space-y-3 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-cobalt">
                Tailored Quotation &amp; Proposal
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                Request a Care Home Programme Proposal
              </h2>
              <p className="text-sm text-body-muted leading-relaxed">
                Tell us about your home and resident community. We will prepare a clear, transparent proposal with zero obligation, including suggested formats and pricing for your activities budget.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-emerald-950">
                  Thank You, {formData.contactName}!
                </h3>
                <p className="text-sm text-emerald-900 leading-relaxed max-w-lg mx-auto">
                  We have received your enquiry for <strong>{formData.homeName}</strong>. A dedicated programme coordinator will review your requirements and respond within 24 business hours with an initial proposal and pricing options.
                </p>
                <div className="pt-2 text-xs text-emerald-800">
                  Need an immediate answer? Email us directly at{' '}
                  <a href="mailto:hello@thesuperpowerproject.org" className="underline font-bold">
                    hello@thesuperpowerproject.org
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {error && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-sm text-rose-800 font-medium">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                      Care Home or Provider Name *
                    </label>
                    <input
                      type="text"
                      name="homeName"
                      required
                      value={formData.homeName}
                      onChange={handleChange}
                      placeholder="e.g. Oakwood House Care Home"
                      className="w-full px-4 py-3 rounded-xl border border-surface-border focus:ring-2 focus:ring-cobalt focus:border-cobalt text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl border border-surface-border focus:ring-2 focus:ring-cobalt focus:border-cobalt text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                      Your Job Role
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="e.g. Activities Coordinator / Home Manager"
                      className="w-full px-4 py-3 rounded-xl border border-surface-border focus:ring-2 focus:ring-cobalt focus:border-cobalt text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sarah@oakwoodcare.co.uk"
                      className="w-full px-4 py-3 rounded-xl border border-surface-border focus:ring-2 focus:ring-cobalt focus:border-cobalt text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                      Contact Telephone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 020 8123 4567"
                      className="w-full px-4 py-3 rounded-xl border border-surface-border focus:ring-2 focus:ring-cobalt focus:border-cobalt text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                      Location / Postcode *
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Richmond, TW9 or London"
                      className="w-full px-4 py-3 rounded-xl border border-surface-border focus:ring-2 focus:ring-cobalt focus:border-cobalt text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                      Approximate Resident Count / Beds
                    </label>
                    <input
                      type="text"
                      name="residentBeds"
                      value={formData.residentBeds}
                      onChange={handleChange}
                      placeholder="e.g. 40 beds (approx. 15 active in lounge)"
                      className="w-full px-4 py-3 rounded-xl border border-surface-border focus:ring-2 focus:ring-cobalt focus:border-cobalt text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                      Format of Interest
                    </label>
                    <select
                      name="programmeInterest"
                      value={formData.programmeInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-surface-border focus:ring-2 focus:ring-cobalt focus:border-cobalt text-sm outline-none bg-white transition-all"
                    >
                      <option value="discovery-half-day">Discovery Half-Day Pilot Event</option>
                      <option value="recurring-biweekly">Bi-weekly / Monthly Wellbeing Series</option>
                      <option value="bedside-1to1">Specialist 1-to-1 Bedside Sessions</option>
                      <option value="bespoke-package">Multi-Home or Bespoke Package</option>
                      <option value="exploring">Just exploring options for our calendar</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
                    Any specific resident interests or dates in mind? (Optional)
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Tell us about your home, any preferred days of the week, or resident hobbies..."
                    className="w-full px-4 py-3 rounded-xl border border-surface-border focus:ring-2 focus:ring-cobalt focus:border-cobalt text-sm outline-none transition-all resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-cobalt hover:bg-cobalt-hover text-white font-bold text-base shadow-md transition-all duration-200"
                  >
                    Submit Proposal Request
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                  <span className="text-xs text-body-muted text-center sm:text-right">
                    Zero obligation • Response within 24 business hours
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Care Home FAQ / Objection Handling */}
      <section className="py-16 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cobalt">
              Questions &amp; Practical Details
            </span>
            <h2 className="text-3xl font-extrabold text-navy">
              Frequently Asked by Care Providers
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-ivory border border-surface-border space-y-2">
              <h3 className="font-bold text-navy text-base">
                How does this work for residents with dementia or memory impairment?
              </h3>
              <p className="text-sm text-body leading-relaxed">
                Our sessions are heavily focused on sensory reminiscence rather than cognitive testing. We evoke memories through sights, familiar voices, music of their era, and nostalgic scenes from their youth. Because residents do not need to follow linear technical steps, it provides a deeply comforting, non-threatening environment where their life memories are celebrated.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ivory border border-surface-border space-y-2">
              <h3 className="font-bold text-navy text-base">
                What if our care home Wi-Fi is patchy or password-restricted?
              </h3>
              <p className="text-sm text-body leading-relaxed">
                We do not require access to your care home network. Our facilitators bring dedicated cellular 5G mobile hotspots and offline fallback tools, ensuring seamless delivery regardless of building thickness or Wi-Fi coverage.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ivory border border-surface-border space-y-2">
              <h3 className="font-bold text-navy text-base">
                What involvement is required from our care or activities staff?
              </h3>
              <p className="text-sm text-body leading-relaxed">
                We handle the complete delivery from start to finish. A member of your care team is always welcome to sit in, observe, or assist with routine care needs, but there is zero technical preparation, setup, or pack-down required from your staff.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ivory border border-surface-border space-y-2">
              <h3 className="font-bold text-navy text-base">
                Are your facilitators fully vetted and insured?
              </h3>
              <p className="text-sm text-body leading-relaxed">
                Yes. Every facilitator holds an Enhanced DBS check (cleared for working with vulnerable adults) and The Superpower Project is covered by £5,000,000 public liability insurance. Full policy certificates and risk assessments are supplied prior to our first visit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
