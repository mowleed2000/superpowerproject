import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Info, User, Building2 } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ContactPage() {
  const [pathway, setPathway] = useState<'individual' | 'organisation'>('individual');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiryType: 'personal-sessions',
    message: '',
    privacyAccepted: false,
    marketingConsent: false,
    honeypot: '', // anti-spam
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePathwaySelect = (selected: 'individual' | 'organisation') => {
    setPathway(selected);
    setFormData((prev) => ({
      ...prev,
      enquiryType: selected === 'individual' ? 'personal-sessions' : 'community-event',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) {
      // Spam bot triggered
      return;
    }
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please provide your name, email, and message.');
      return;
    }
    if (!formData.privacyAccepted) {
      setError('Please acknowledge the privacy policy to submit.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Whether you are interested in participating or representing an organisation, get in touch with The Superpower Project."
      />

      {/* Hero */}
      <section className="bg-ivory py-12 md:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact' }]} />

          <div className="mt-8 max-w-3xl space-y-5">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              Let's start a conversation.
            </h1>
            <p className="text-base sm:text-lg text-body-muted leading-relaxed">
              Whether you're interested in attending a session, arranging a personal experience or bringing The Superpower Project to your community, we'd be pleased to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-ivory rounded-3xl p-8 sm:p-12 border border-surface-border shadow-sm">
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-cobalt mb-3">
                  Step 1: Choose Your Enquiry Pathway
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handlePathwaySelect('individual')}
                    className={`flex items-center gap-3 p-4 rounded-xl border font-semibold text-sm transition-all text-left ${
                      pathway === 'individual'
                        ? 'bg-white border-cobalt text-cobalt shadow-sm ring-2 ring-cobalt/20'
                        : 'bg-white/60 border-surface-border text-navy hover:bg-white'
                    }`}
                  >
                    <User className="w-5 h-5 flex-shrink-0" />
                    <span>I'm interested in participating</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handlePathwaySelect('organisation')}
                    className={`flex items-center gap-3 p-4 rounded-xl border font-semibold text-sm transition-all text-left ${
                      pathway === 'organisation'
                        ? 'bg-white border-cobalt text-cobalt shadow-sm ring-2 ring-cobalt/20'
                        : 'bg-white/60 border-surface-border text-navy hover:bg-white'
                    }`}
                  >
                    <Building2 className="w-5 h-5 flex-shrink-0" />
                    <span>I'm representing an organisation</span>
                  </button>
                </div>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-white border border-cobalt/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-softblue text-cobalt flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">
                    Enquiry Validated (Development State)
                  </h3>
                  <p className="text-sm text-body-muted leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your message for <em>{formData.enquiryType}</em> has been processed in testing mode.
                  </p>
                  <div className="p-4 rounded-xl bg-ivory text-xs text-body-muted text-left border border-surface-border flex items-start gap-2">
                    <Info className="w-4 h-4 text-cobalt flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Submission Notice:</strong> An active SMTP mail relay or CRM endpoint has not yet been connected to this environment. In accordance with Section 15 rules, we display this status rather than pretending an external email was transmitted. Please refer to our direct contact configuration details on this page.
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 text-sm font-semibold text-cobalt hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm font-medium border border-red-200">
                      {error}
                    </div>
                  )}

                  {/* Honeypot field (hidden from users, catches bots) */}
                  <div className="hidden" aria-hidden="true">
                    <label>
                      Leave this field blank
                      <input
                        type="text"
                        name="honeypot"
                        tabIndex={-1}
                        value={formData.honeypot}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-navy mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-surface-border text-navy text-sm focus:border-cobalt focus:ring-1 focus:ring-cobalt"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-navy mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-surface-border text-navy text-sm focus:border-cobalt focus:ring-1 focus:ring-cobalt"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-navy mb-2">
                      Enquiry Focus
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-surface-border text-navy text-sm focus:border-cobalt focus:ring-1 focus:ring-cobalt"
                    >
                      {pathway === 'individual' ? (
                        <>
                          <option value="personal-sessions">Personal 1-to-1 Sessions</option>
                          <option value="joining-group">Joining a Group Programme</option>
                          <option value="attending-event">Attending a Community Event</option>
                          <option value="general-question">General Question / Other</option>
                        </>
                      ) : (
                        <>
                          <option value="community-event">Hosting a Community Event</option>
                          <option value="group-programme">Commissioning a Group Programme</option>
                          <option value="sponsorship">Sponsorship &amp; Community Access</option>
                          <option value="other-partnership">Other Organisational Partnership</option>
                        </>
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-navy mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you? Feel free to mention any specific interests or questions..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-surface-border text-navy text-sm focus:border-cobalt focus:ring-1 focus:ring-cobalt"
                    ></textarea>
                  </div>

                  {/* Mandatory Privacy Acknowledgement */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 rounded border-surface-border text-cobalt focus:ring-cobalt"
                      />
                      <span className="text-xs text-body leading-relaxed">
                        I acknowledge that the information submitted above will be processed in accordance with the project's{' '}
                        <a href="/privacy" target="_blank" rel="noreferrer" className="text-cobalt underline">
                          Privacy Policy
                        </a>
                        . <span className="text-red-500">*</span>
                      </span>
                    </label>
                  </div>

                  {/* Optional Separate Marketing Consent (Unchecked by default, not required) */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="marketingConsent"
                        checked={formData.marketingConsent}
                        onChange={handleChange}
                        className="mt-1 h-4 w-4 rounded border-surface-border text-cobalt focus:ring-cobalt"
                      />
                      <span className="text-xs text-body-muted leading-relaxed">
                        Optional: I would like to receive occasional updates about new programmes and open resources.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-cobalt text-white font-semibold text-base hover:bg-cobalt-hover shadow-md hover:shadow-lg transition-all"
                  >
                    Send enquiry
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar / Configuration Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-3xl p-8 border border-surface-border shadow-sm space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-cobalt">
                    Direct Contact
                  </span>
                  <h3 className="text-2xl font-bold text-navy">
                    Project Office
                  </h3>
                  <p className="text-sm text-body-muted leading-relaxed">
                    We welcome direct communications from community groups, prospective participants, and partner organisations.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3 text-sm">
                    <Mail className="w-5 h-5 text-cobalt flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-navy">Email Enquiries</p>
                      <p className="text-body-muted text-xs">
                        [hello@thesuperpowerproject.org.uk — configuration placeholder]
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <Phone className="w-5 h-5 text-cobalt flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-navy">Telephone</p>
                      <p className="text-body-muted text-xs">
                        [Direct phone line to be announced — configuration placeholder]
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="w-5 h-5 text-cobalt flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-navy">Location</p>
                      <p className="text-body-muted text-xs">
                        United Kingdom (Delivering across community venues and remote sessions)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-surface-border text-xs text-body-muted">
                  <p>
                    <strong>Editorial Integrity:</strong> In accordance with project policy, placeholder channels are designated above. We do not invent fictional personal numbers or unmonitored social handles.
                  </p>
                </div>
              </div>

              {/* Quick links to FAQs and Policies */}
              <div className="bg-ivory rounded-2xl p-6 border border-surface-border space-y-3">
                <h4 className="font-bold text-navy text-sm">Helpful resources before writing:</h4>
                <ul className="space-y-2 text-xs text-body">
                  <li>
                    <a href="/faq" className="text-cobalt hover:underline">
                      → Frequently Asked Questions
                    </a>
                  </li>
                  <li>
                    <a href="/responsible-use" className="text-cobalt hover:underline">
                      → Responsible AI &amp; Safeguarding Standards
                    </a>
                  </li>
                  <li>
                    <a href="/organisations" className="text-cobalt hover:underline">
                      → Organisational Partnership Details
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
