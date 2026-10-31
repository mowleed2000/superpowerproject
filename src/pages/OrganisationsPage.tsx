import { useState } from 'react';
import { ArrowRight, Building2, CheckCircle2, Info } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionHeading from '../components/SectionHeading';
import { asset } from '../utils/asset';

export default function OrganisationsPage() {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    role: '',
    email: '',
    telephone: '',
    orgType: 'Community Centre',
    location: '',
    interest: 'event',
    audienceSize: '',
    message: '',
    marketingConsent: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const benefits = [
    "Introduce communities to emerging capabilities with safe, patient guidance.",
    "Offer an engaging, innovative and distinctive activity for your regular calendar.",
    "Encourage social participation and shared discovery across generations.",
    "Provide practical opportunities to explore AI tools without hype or jargon.",
    "Support confidence and access to new forms of learning, creativity, and self-expression.",
  ];

  const orgTypes = [
    "Community centres",
    "Public libraries",
    "Retirement communities & villages",
    "Housing associations",
    "Charities & non-profits",
    "Local authorities & councils",
    "Community foundations",
    "Other public-benefit organisations",
  ];

  const waysToWork = [
    {
      title: "Community event",
      tagline: "An introductory experience delivered at your venue.",
      desc: "Live interactive presentations with demonstrations and audience participation, perfect for introducing your community to generative AI.",
    },
    {
      title: "Group programme",
      tagline: "A recurring programme adapted to your community.",
      desc: "Multi-week cohorts or regular discovery circles designed around the specific interests and pace of your service users.",
    },
    {
      title: "Personal sessions",
      tagline: "Individual support for people who want to explore AI around their own interests.",
      desc: "One-to-one coaching sessions held at your facilities for participants working on personal memoirs, research, or creative goals.",
    },
    {
      title: "Sponsorship",
      tagline: "Explore opportunities to support access for communities who might otherwise face barriers.",
      desc: "Partner with us to fund subsidized or fully free access cohorts for digitally excluded or underserved demographics.",
    },
  ];

  const processSteps = [
    { step: "01", title: "Initial conversation", desc: "We learn about your organisation, audience and objectives." },
    { step: "02", title: "Programme design", desc: "We discuss the appropriate format, content, accessibility considerations and practical requirements." },
    { step: "03", title: "Delivery", desc: "The agreed experience is delivered at your venue or through another agreed arrangement." },
    { step: "04", title: "Review", desc: "Feedback and participation can be used to refine future sessions." },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.organisation || !formData.email || !formData.message) {
      setFormError('Please fill in all required fields.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  return (
    <>
      <SEO
        title="For Organisations"
        description="The Superpower Project works with community centres, libraries, housing associations and charities to deliver human-centred AI experiences."
      />

      {/* Hero */}
      <section className="bg-ivory py-12 md:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'For Organisations' }]} />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
                Institutional Partnerships
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
                Bring practical AI discovery to the people you serve.
              </h1>
              <p className="text-lg sm:text-xl text-body leading-relaxed max-w-2xl">
                The Superpower Project works with organisations to deliver engaging, human-centred AI experiences designed around the interests and needs of their communities.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#enquiry-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cobalt text-white font-semibold hover:bg-cobalt-hover shadow-sm"
                >
                  <span>Submit an organisational enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src={asset('/images/organisations/institutional-partnership.jpg')}
                  alt="Institutional partnership in progress"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Host */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Why Partner"
                title="Why organisations host the programme"
                description="Equip your community with hands-on exposure to transformative tools in a safe, guided setting."
              />
              <div className="space-y-4 pt-2">
                {benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-softblue text-cobalt flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-base text-body leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-surface-border aspect-[4/3]">
                <img
                  src={asset('/images/organisations/community-impact.jpg')}
                  alt="Positive community participation and impact"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organisations We Work With & Venue */}
      <section className="py-20 md:py-28 bg-ivory border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-surface-border aspect-[4/3]">
                <img
                  src={asset('/images/organisations/community-venue.jpg')}
                  alt="Community venue for hosting AI events"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <SectionHeading
                eyebrow="Sectors Served"
                title="Organisations we work with"
                description="We partner with diverse public and social organisations across the UK."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {orgTypes.map((org, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-white border border-surface-border text-sm font-medium text-navy">
                    <Building2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                    <span>{org}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Work Together */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Collaboration Models"
            title="Ways to work together"
            description="Select an arrangement that aligns with your community's facilities and programming schedule."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {waysToWork.map((way, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-ivory border border-surface-border shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-cobalt uppercase tracking-wider">Model 0{idx + 1}</span>
                  <h3 className="text-xl font-bold text-navy">{way.title}</h3>
                  <p className="text-xs font-semibold text-body italic">{way.tagline}</p>
                  <p className="text-sm text-body-muted leading-relaxed pt-2">{way.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-20 md:py-28 bg-ivory border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Deliver"
            title="Our delivery process"
            align="center"
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((st, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-surface-border shadow-sm space-y-3">
                <span className="w-10 h-10 rounded-lg bg-softblue text-cobalt flex items-center justify-center font-bold text-sm">
                  {st.step}
                </span>
                <h3 className="text-lg font-bold text-navy">{st.title}</h3>
                <p className="text-xs sm:text-sm text-body-muted leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organisational Enquiry Form */}
      <section id="enquiry-form" className="py-20 md:py-28 bg-white border-b border-surface-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-ivory rounded-3xl p-8 sm:p-12 border border-surface-border shadow-md space-y-8">
            <div className="space-y-3 text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-cobalt">Partnership Enquiry</span>
              <h2 className="text-3xl font-extrabold text-navy">
                Let's explore what we could bring to your community.
              </h2>
              <p className="text-sm sm:text-base text-body-muted">
                Complete the details below and we will get back to you promptly to arrange an initial conversation.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-white border border-cobalt/40 shadow-sm space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-softblue text-cobalt flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy">Enquiry Recorded (Development Mode)</h3>
                <p className="text-sm text-body-muted leading-relaxed">
                  Thank you, <strong>{formData.name}</strong> from <strong>{formData.organisation}</strong>. Your enquiry details have been validated successfully.
                </p>
                <div className="p-4 rounded-xl bg-ivory text-xs text-body-muted text-left border border-surface-border flex items-start gap-2">
                  <Info className="w-4 h-4 text-cobalt flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Production Notice:</strong> Direct backend form submission is currently in configuration. To contact us directly via email in the interim, please use the configuration details on our Contact page.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-5 py-2 text-sm font-semibold text-cobalt hover:underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {formError && (
                  <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm font-medium border border-red-200">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-navy mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-surface-border text-navy text-sm focus:border-cobalt focus:ring-1 focus:ring-cobalt"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-navy mb-2">
                      Organisation <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      required
                      value={formData.organisation}
                      onChange={handleChange}
                      placeholder="e.g. Westside Community Centre"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-surface-border text-navy text-sm focus:border-cobalt focus:ring-1 focus:ring-cobalt"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-navy mb-2">
                      Role / Position
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="Programme Manager"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-surface-border text-navy text-sm focus:border-cobalt focus:ring-1 focus:ring-cobalt"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-navy mb-2">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@organisation.org.uk"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-surface-border text-navy text-sm focus:border-cobalt focus:ring-1 focus:ring-cobalt"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-navy mb-2">
                      Telephone (Optional)
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="020 7946 0000"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-surface-border text-navy text-sm focus:border-cobalt focus:ring-1 focus:ring-cobalt"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-navy mb-2">
                      Organisation Type
                    </label>
                    <select
                      name="orgType"
                      value={formData.orgType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-surface-border text-navy text-sm focus:border-cobalt focus:ring-1 focus:ring-cobalt"
                    >
                      <option value="Community Centre">Community Centre</option>
                      <option value="Library">Library</option>
                      <option value="Retirement Community">Retirement Community</option>
                      <option value="Housing Association">Housing Association</option>
                      <option value="Charity">Charity / Non-Profit</option>
                      <option value="Local Authority">Local Authority</option>
                      <option value="Foundation">Community Foundation / Funder</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase text-navy mb-2">
                      Location / Region
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Manchester / Greater London"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-surface-border text-navy text-sm focus:border-cobalt focus:ring-1 focus:ring-cobalt"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-navy mb-2">
                      Interested In
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-surface-border text-navy text-sm focus:border-cobalt focus:ring-1 focus:ring-cobalt"
                    >
                      <option value="event">Community Event (Introductory)</option>
                      <option value="group programme">Group Programme (Cohort)</option>
                      <option value="personal sessions">Personal Sessions (1-to-1)</option>
                      <option value="sponsorship">Sponsorship &amp; Subsidized Access</option>
                      <option value="other">Other / Custom Collaboration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-navy mb-2">
                    Approximate Audience / Service Users
                  </label>
                  <input
                    type="text"
                    name="audienceSize"
                    value={formData.audienceSize}
                    onChange={handleChange}
                    placeholder="e.g. 20-30 older adults or weekly drop-in attendees"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-surface-border text-navy text-sm focus:border-cobalt focus:ring-1 focus:ring-cobalt"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-navy mb-2">
                    Message &amp; Objectives <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your community, goals, or preferred dates..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-surface-border text-navy text-sm focus:border-cobalt focus:ring-1 focus:ring-cobalt"
                  ></textarea>
                </div>

                {/* Separate Optional Marketing Consent (Unchecked by default, not required) */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="marketingConsent"
                      checked={formData.marketingConsent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border-surface-border text-cobalt focus:ring-cobalt"
                    />
                    <span className="text-xs text-body-muted leading-relaxed">
                      Optional: Keep me updated on future Superpower Project resources, case studies, and programme updates. (You may unsubscribe at any time).
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-cobalt text-white font-semibold text-base hover:bg-cobalt-hover shadow-md hover:shadow-lg transition-all"
                >
                  Let's explore what we could bring to your community
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
