import { useState } from 'react';
import { CheckCircle2, Info, User, Heart, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../config/pricing';

interface BookingFormProps {
  initialPlanId?: string;
  isGiftOrFamily?: boolean;
  onSuccess?: () => void;
}

export default function BookingForm({
  initialPlanId = 'discovery',
  isGiftOrFamily = false,
}: BookingFormProps) {
  const [selectedPlan, setSelectedPlan] = useState(initialPlanId);
  const [bookingFor, setBookingFor] = useState<'self' | 'someone_else'>(
    isGiftOrFamily ? 'someone_else' : 'self'
  );
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    recipientName: '',
    relationship: 'Parent',
    preferredFormat: 'in-person',
    preferredDays: '',
    interests: '',
    privacyConsent: false,
    honeypot: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const activePlan = PRICING_PLANS.find((p) => p.id === selectedPlan) || PRICING_PLANS[0];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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
    if (formData.honeypot) return;

    if (!formData.name || !formData.email) {
      setError('Please provide your name and email address.');
      return;
    }
    if (bookingFor === 'someone_else' && !formData.recipientName) {
      setError('Please provide the name of the person this session is for.');
      return;
    }
    if (!formData.privacyConsent) {
      setError('Please accept the privacy terms to continue.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-cobalt/30 shadow-lg text-center space-y-5">
        <div className="w-16 h-16 rounded-full bg-softblue text-cobalt flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-navy">
          Booking Request Received
        </h3>
        <p className="text-body text-base max-w-lg mx-auto leading-relaxed">
          Thank you, <strong>{formData.name}</strong>. We have received your booking request for{' '}
          <strong>{activePlan.name} ({activePlan.formattedPrice})</strong>
          {bookingFor === 'someone_else' ? ` for ${formData.recipientName}` : ''}.
        </p>
        <div className="p-5 rounded-2xl bg-ivory border border-surface-border text-left max-w-lg mx-auto text-xs sm:text-sm text-body-muted space-y-2">
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-cobalt flex-shrink-0 mt-0.5" />
            <p>
              <strong>Next Steps:</strong> We will review your preferred schedule and reply within 1 business day to confirm date, time, and session arrangements.
            </p>
          </div>
          <p className="text-xs text-gray-500 pl-6">
            No payment is taken right now. Invoicing is settled securely once dates are agreed.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-sm font-semibold text-cobalt hover:underline pt-2"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-surface-border shadow-md space-y-6">
      {error && (
        <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm font-medium border border-red-200">
          {error}
        </div>
      )}

      {/* Hidden honeypot */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* 1. Who is this for? */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-3">
          1. Who is this session for?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setBookingFor('self')}
            className={`p-4 rounded-xl border text-sm font-semibold text-left flex items-center gap-3 transition-all ${
              bookingFor === 'self'
                ? 'bg-softblue border-cobalt text-cobalt shadow-sm ring-2 ring-cobalt/20'
                : 'bg-ivory border-surface-border text-navy hover:bg-white'
            }`}
          >
            <User className="w-5 h-5 flex-shrink-0" />
            <div>
              <p className="font-bold">For Myself</p>
              <p className="text-xs text-body-muted font-normal">I'd like to explore AI myself</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setBookingFor('someone_else')}
            className={`p-4 rounded-xl border text-sm font-semibold text-left flex items-center gap-3 transition-all ${
              bookingFor === 'someone_else'
                ? 'bg-softblue border-cobalt text-cobalt shadow-sm ring-2 ring-cobalt/20'
                : 'bg-ivory border-surface-border text-navy hover:bg-white'
            }`}
          >
            <Heart className="w-5 h-5 flex-shrink-0" />
            <div>
              <p className="font-bold">For a Parent or Relative</p>
              <p className="text-xs text-body-muted font-normal">I'm arranging this for someone else</p>
            </div>
          </button>
        </div>
      </div>

      {/* 2. Choose Session Package */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-3">
          2. Select Session or Package
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PRICING_PLANS.map((plan) => (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelectedPlan(plan.id)}
              className={`p-4 rounded-xl border text-left transition-all relative ${
                selectedPlan === plan.id
                  ? 'bg-softblue border-cobalt shadow-sm ring-2 ring-cobalt/20'
                  : 'bg-ivory border-surface-border hover:bg-white'
              }`}
            >
              {plan.badge && (
                <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-cobalt text-white">
                  {plan.badge}
                </span>
              )}
              <p className="font-bold text-navy text-sm">{plan.name}</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-xl font-extrabold text-cobalt">{plan.formattedPrice}</span>
                <span className="text-xs text-body-muted font-medium">{plan.duration}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Recipient Info (if booking for someone else) */}
      {bookingFor === 'someone_else' && (
        <div className="p-4 rounded-2xl bg-amber/10 border border-amber/30 space-y-4">
          <p className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber" />
            Recipient Details
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-navy mb-1">
                Their Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="recipientName"
                value={formData.recipientName}
                onChange={handleChange}
                placeholder="e.g. Margaret Smith"
                className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-surface-border text-sm text-navy focus:border-cobalt focus:ring-1 focus:ring-cobalt"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy mb-1">
                Your Relationship
              </label>
              <select
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-surface-border text-sm text-navy focus:border-cobalt focus:ring-1 focus:ring-cobalt"
              >
                <option value="Parent">Parent / Grandparent</option>
                <option value="Spouse">Spouse / Partner</option>
                <option value="Sibling">Sibling</option>
                <option value="Friend">Friend</option>
                <option value="Professional Carer">Professional Carer / Support Worker</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* 4. Contact Details */}
      <div className="space-y-4">
        <label className="block text-xs font-bold uppercase tracking-wider text-navy">
          3. Your Contact Details
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs text-body-muted mb-1">
              Your Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className="w-full px-3.5 py-2.5 rounded-lg bg-ivory border border-surface-border text-sm text-navy focus:border-cobalt focus:ring-1 focus:ring-cobalt"
            />
          </div>
          <div>
            <label className="block text-xs text-body-muted mb-1">
              Your Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className="w-full px-3.5 py-2.5 rounded-lg bg-ivory border border-surface-border text-sm text-navy focus:border-cobalt focus:ring-1 focus:ring-cobalt"
            />
          </div>
          <div>
            <label className="block text-xs text-body-muted mb-1">
              Telephone (Optional)
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="07123 456789"
              className="w-full px-3.5 py-2.5 rounded-lg bg-ivory border border-surface-border text-sm text-navy focus:border-cobalt focus:ring-1 focus:ring-cobalt"
            />
          </div>
        </div>
      </div>

      {/* 5. Preferences & Interests */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy mb-1">
            Preferred Format
          </label>
          <select
            name="preferredFormat"
            value={formData.preferredFormat}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg bg-ivory border border-surface-border text-sm text-navy focus:border-cobalt focus:ring-1 focus:ring-cobalt"
          >
            <option value="in-person">In-Person (Home visit in Greater London / Home Counties)</option>
            <option value="online">Online Video Session (Zoom / Meet)</option>
            <option value="flexible">Flexible / Either</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy mb-1">
            Preferred Days or Times
          </label>
          <input
            type="text"
            name="preferredDays"
            value={formData.preferredDays}
            onChange={handleChange}
            placeholder="e.g. Weekday mornings, Tuesday afternoon"
            className="w-full px-3.5 py-2.5 rounded-lg bg-ivory border border-surface-border text-sm text-navy focus:border-cobalt focus:ring-1 focus:ring-cobalt"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-navy mb-1">
          Topics, Interests or Questions You'd Like to Explore
        </label>
        <textarea
          name="interests"
          rows={3}
          value={formData.interests}
          onChange={handleChange}
          placeholder="e.g. Restoring old family prints, writing family stories, learning what ChatGPT is, travel planning for Spain..."
          className="w-full px-3.5 py-2.5 rounded-lg bg-ivory border border-surface-border text-sm text-navy focus:border-cobalt focus:ring-1 focus:ring-cobalt"
        ></textarea>
      </div>

      {/* Privacy Consent */}
      <div className="pt-2">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="privacyConsent"
            checked={formData.privacyConsent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-surface-border text-cobalt focus:ring-cobalt"
          />
          <span className="text-xs text-body-muted leading-relaxed">
            I agree that the details supplied above may be used to process this session booking in accordance with the{' '}
            <a href="/privacy" className="text-cobalt underline" target="_blank" rel="noreferrer">
              Privacy Policy
            </a>
            . <span className="text-red-500">*</span>
          </span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-xl bg-cobalt text-white font-bold text-base hover:bg-cobalt-hover shadow-md hover:shadow-lg transition-all"
      >
        Submit Booking Request — {activePlan.name} ({activePlan.formattedPrice})
      </button>

      <p className="text-xs text-center text-body-muted">
        No immediate payment required • We will contact you to confirm timing and any travel or accessibility arrangements.
      </p>
    </form>
  );
}
