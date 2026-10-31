import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ContactPage() {
  const [formType, setFormType] = useState<'personal' | 'care-home' | 'community'>('personal');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organisationName: '',
    message: '',
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

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact & Enquiries | The Superpower Project"
        description="Get in touch with our team for personal discovery session bookings, care home programme proposals, or community partnerships. Response within 24 business hours."
      />

      <section className="bg-ivory py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />

          <div className="mt-8 max-w-3xl space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
              We're Here to Help
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg text-body-muted leading-relaxed">
              Have a question about booking a personal session for a parent, scheduling a care home discovery event, or hosting a community workshop? We are always happy to speak.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-navy">Direct Contact</h2>
                <p className="text-sm text-body leading-relaxed">
                  We respond to all enquiries within 24 business hours. If your request is urgent, please call us directly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cobalt/10 text-cobalt flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-body-muted block">
                      Email Us
                    </span>
                    <a
                      href="mailto:hello@thesuperpowerproject.org"
                      className="text-base font-bold text-navy hover:text-cobalt transition-colors"
                    >
                      hello@thesuperpowerproject.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cobalt/10 text-cobalt flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-body-muted block">
                      Telephone
                    </span>
                    <a
                      href="tel:02080000000"
                      className="text-base font-bold text-navy hover:text-cobalt transition-colors"
                    >
                      020 8123 4567
                    </a>
                    <span className="block text-xs text-body-muted mt-0.5">
                      Mon–Fri: 9:00am – 5:30pm
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cobalt/10 text-cobalt flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-body-muted block">
                      Service Coverage
                    </span>
                    <span className="text-sm font-semibold text-navy block">
                      In-Person: Greater London &amp; Home Counties
                    </span>
                    <span className="text-xs text-body-muted block mt-0.5">
                      Online Video: Nationwide Across the UK
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-ivory border border-surface-border space-y-2">
                <h3 className="font-bold text-navy text-sm">Need Care Home Pricing Directly?</h3>
                <p className="text-xs text-body leading-relaxed">
                  Activities coordinators and care home managers can also use our dedicated proposal request form for fast quotes.
                </p>
                <Link
                  to="/care-homes#proposal-form"
                  className="inline-flex items-center text-xs font-bold text-cobalt hover:underline gap-1 pt-1"
                >
                  Go to Care Home Proposal Form →
                </Link>
              </div>
            </div>

            {/* Right Column: 3-Form Switcher */}
            <div className="lg:col-span-7">
              <div className="bg-ivory rounded-3xl p-8 sm:p-10 border border-surface-border shadow-md space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-cobalt block">
                    Send an Enquiry
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setFormType('personal')}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        formType === 'personal'
                          ? 'bg-cobalt text-white shadow-sm'
                          : 'bg-white text-navy border border-surface-border'
                      }`}
                    >
                      Personal &amp; Family
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormType('care-home')}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        formType === 'care-home'
                          ? 'bg-cobalt text-white shadow-sm'
                          : 'bg-white text-navy border border-surface-border'
                      }`}
                    >
                      Care Home B2B
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormType('community')}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        formType === 'community'
                          ? 'bg-cobalt text-white shadow-sm'
                          : 'bg-white text-navy border border-surface-border'
                      }`}
                    >
                      Community &amp; Libraries
                    </button>
                  </div>
                </div>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <h3 className="font-bold text-emerald-950">Thank You, {formData.name}!</h3>
                    <p className="text-xs text-emerald-900 leading-relaxed">
                      Your message has been received. Our team will review your enquiry and respond within 24 business hours.
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
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Margaret Davies"
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
                          placeholder="margaret@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-sm outline-none focus:ring-2 focus:ring-cobalt bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                          Telephone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 07123 456789"
                          className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-sm outline-none focus:ring-2 focus:ring-cobalt bg-white"
                        />
                      </div>

                      {formType !== 'personal' && (
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                            Organisation Name
                          </label>
                          <input
                            type="text"
                            name="organisationName"
                            value={formData.organisationName}
                            onChange={handleChange}
                            placeholder="e.g. Sunshine Care Home / Local Library"
                            className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-sm outline-none focus:ring-2 focus:ring-cobalt bg-white"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                        Your Message or Enquiry *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what you'd like to explore, ask about dates, or share details about your home or loved one..."
                        className="w-full px-4 py-2.5 rounded-xl border border-surface-border text-sm outline-none focus:ring-2 focus:ring-cobalt bg-white resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-7 py-3 rounded-xl bg-cobalt hover:bg-cobalt-hover text-white font-bold text-sm shadow-md transition-colors"
                      >
                        Send Enquiry
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
