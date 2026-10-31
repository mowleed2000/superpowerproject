import { useState } from 'react';
import { CheckCircle2, ArrowRight, Library } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { asset } from '../utils/asset';

export default function CommunityOrganisationsPage() {
  const [formData, setFormData] = useState({
    orgName: '',
    contactName: '',
    role: '',
    email: '',
    phone: '',
    venueLocation: '',
    audienceDesc: '',
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

    if (!formData.orgName || !formData.contactName || !formData.email) {
      setError('Please provide your organization name, contact name, and email address.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="For Community Organisations & Libraries | The Superpower Project"
        description="Interactive group AI workshops and discovery events for public libraries, community centres, local charities, and housing associations."
      />

      <section className="bg-ivory py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }, { label: 'Community Organisations' }]}
          />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-softblue/30 text-cobalt text-xs font-bold uppercase tracking-wider">
                <Library className="w-3.5 h-3.5" />
                Libraries, Charities &amp; Housing Associations
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
                AI Discovery Events for Community Spaces
              </h1>
              <p className="text-base sm:text-lg text-body leading-relaxed">
                Looking to deliver an inspiring, high-attendance event that introduces local older residents to artificial intelligence in an accessible, joyful way? We partner with libraries, voluntary sector hubs, and community centres to host participatory discovery sessions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-body pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                  <span>Interactive group format (10 to 30 attendees)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                  <span>Not a dry IT class — creative and social</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                  <span>Turnkey delivery with all gear included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                  <span>Discounted rates for registered charities</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#community-form"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-cobalt hover:bg-cobalt-hover text-white font-bold text-base shadow-md transition-all"
                >
                  Enquire About Hosting an Event
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src={asset('/images/community/community-workshop.jpg')}
                  alt="A community workshop with older adults exploring AI together"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="community-form" className="py-16 lg:py-24 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-ivory rounded-3xl p-8 sm:p-12 border border-surface-border shadow-md space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-cobalt">
                Community Partnership
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                Host an Event in Your Venue
              </h2>
              <p className="text-xs sm:text-sm text-body-muted">
                Tell us about your organization and community. We will respond within 24 business hours with workshop outlines and budget options.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-emerald-950">Thank you, {formData.contactName}!</h3>
                <p className="text-xs text-emerald-900 leading-relaxed">
                  We have received your enquiry for <strong>{formData.orgName}</strong> and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                />

                {error && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 font-medium">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      Organisation Name *
                    </label>
                    <input
                      type="text"
                      name="orgName"
                      required
                      value={formData.orgName}
                      onChange={handleChange}
                      placeholder="e.g. Camden Libraries / Age UK Branch"
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-sm outline-none focus:ring-2 focus:ring-cobalt bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      required
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="e.g. David Ross"
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-sm outline-none focus:ring-2 focus:ring-cobalt bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="david@camden.gov.uk"
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-sm outline-none focus:ring-2 focus:ring-cobalt bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 020 7974 4444"
                      className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-sm outline-none focus:ring-2 focus:ring-cobalt bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                    Venue Location &amp; Audience Description
                  </label>
                  <textarea
                    name="audienceDesc"
                    rows={3}
                    value={formData.audienceDesc}
                    onChange={handleChange}
                    placeholder="Tell us about your venue, expected attendee numbers, or any specific digital inclusion objectives..."
                    className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-sm outline-none focus:ring-2 focus:ring-cobalt bg-white resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-xl bg-cobalt hover:bg-cobalt-hover text-white font-bold text-sm shadow-md transition-colors"
                  >
                    Send Community Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
