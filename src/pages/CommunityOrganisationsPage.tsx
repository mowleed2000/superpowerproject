import { useState } from 'react';
import { CheckCircle2, ArrowRight, Library } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { asset } from '../utils/asset';
import { sendEnquiry } from '../utils/enquiry';
import { Link } from 'react-router-dom';
import EnquiryConfigNotice from '../components/EnquiryConfigNotice';

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
    privacyConsent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.honeypot) return;

    if (!formData.orgName || !formData.contactName || !formData.email) {
      setError('Please provide your organization name, contact name, and email address.');
      return;
    }
    if (!formData.privacyConsent) {
      setError('Please read the privacy information and agree to use of your details for this enquiry.');
      return;
    }

    setError('');
    setSending(true);
    try {
      await sendEnquiry({ formType: 'community-enquiry', ...formData });
      setSubmitted(true);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Your enquiry could not be sent. Please try again.');
    } finally {
      setSending(false);
    }
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
                Libraries, community groups and charities may be interested in accessible AI activities for older residents. Tell us about your audience and goals so we can discuss whether a suitable format may be possible.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-body pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                  <span>Format shaped around the group</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                  <span>Not a dry IT class — creative and social</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                  <span>Practical details agreed in advance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                  <span>Costs discussed before any commitment</span>
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
                Tell us about your organisation and community. Availability, format and costs can be discussed before an activity is agreed.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-emerald-950">Thank you, {formData.contactName}!</h3>
                <p className="text-xs text-emerald-900 leading-relaxed">
                  Your enquiry has been sent for <strong>{formData.orgName}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <EnquiryConfigNotice />
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

                <label className="flex items-start gap-2 text-xs leading-5 text-body-muted"><input required type="checkbox" name="privacyConsent" checked={formData.privacyConsent} onChange={handleChange} className="mt-1" />I have read the <Link className="text-cobalt underline" to="/privacy">privacy information</Link> and agree to my details being used to respond to this enquiry.</label>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-xl bg-cobalt hover:bg-cobalt-hover text-white font-bold text-sm shadow-md transition-colors"
                  >
                    {sending ? 'Sending…' : 'Send community enquiry'}
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
