import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Gift, MapPin, Monitor, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import BookingForm from '../components/BookingForm';
import { PRICING_PLANS } from '../config/pricing';

export default function PricingPage() {
  const [selectedPlanId, setSelectedPlanId] = useState('standard');

  const scrollToBooking = (planId: string) => {
    setSelectedPlanId(planId);
    const element = document.getElementById('booking-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO
        title="Pricing & Booking | Personal AI Sessions | The Superpower Project"
        description="Listed pricing for one-to-one AI learning sessions for older adults, with options for a single session or a small series."
      />

      {/* Hero */}
      <section className="bg-ivory py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }, { label: 'Pricing & Booking' }]}
            className="justify-center"
          />

          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt block">
            Personal session pricing
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight">
            Personal Sessions &amp; Packages
          </h1>
          <p className="text-base sm:text-lg text-body-muted max-w-2xl mx-auto leading-relaxed">
            These listed prices cover the session time shown. Discuss location, format, access needs and any additional costs before confirming a booking.
          </p>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 rounded-full px-4 py-1.5 w-fit mx-auto">
            <Gift className="w-3.5 h-3.5" />
            <span>Booking as a gift for a parent or relative?</span>
            <Link to="/book-for-someone" className="underline font-bold hover:text-emerald-950 ml-1">
              View gift options →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-16 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRICING_PLANS.map((plan) => {
              
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-200 bg-white border-2 ${
                    plan.popular
                      ? 'border-cobalt shadow-lg ring-1 ring-cobalt/20'
                      : 'border-surface-border hover:border-gray-400 shadow-sm'
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cobalt text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      {plan.badge}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-navy">{plan.name}</h3>
                      <p className="text-xs text-body-muted mt-1 min-h-[32px]">{plan.tagline}</p>
                    </div>

                    <div className="pt-2 pb-3 border-b border-surface-border flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-navy tracking-tight">
                        {plan.formattedPrice}
                      </span>
                      <span className="text-xs text-body-muted">/ {plan.duration}</span>
                    </div>

                    <p className="text-xs text-body leading-relaxed">{plan.description}</p>

                    <div className="space-y-2.5 pt-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-navy block">
                        Included:
                      </span>
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-body">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cobalt flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-surface-border">
                    <button
                      type="button"
                      onClick={() => scrollToBooking(plan.id)}
                      className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 ${
                        plan.popular
                          ? 'bg-cobalt text-white hover:bg-cobalt-hover shadow-md'
                          : 'bg-navy text-white hover:bg-navy-light'
                      }`}
                    >
                      {plan.ctaText}
                    </button>
                    <span className="block text-[11px] text-body-muted text-center mt-2">
                      Ideal: {plan.idealFor}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery Methods & Policies */}
      <section className="py-14 bg-ivory border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-surface-border space-y-2">
              <div className="flex items-center gap-2.5 text-navy font-bold text-base">
                <MapPin className="w-5 h-5 text-cobalt flex-shrink-0" />
                <span>In-Person Delivery</span>
              </div>
              <p className="text-xs text-body leading-relaxed">
                In-person availability depends on location. Confirm any travel costs and practical arrangements before booking.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-surface-border space-y-2">
              <div className="flex items-center gap-2.5 text-navy font-bold text-base">
                <Monitor className="w-5 h-5 text-cobalt flex-shrink-0" />
                <span>Online Video Delivery</span>
              </div>
              <p className="text-xs text-body leading-relaxed">
                An online format may be possible. Discuss the preferred platform, device and support needed before arranging a session.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-surface-border space-y-2">
              <div className="flex items-center gap-2.5 text-navy font-bold text-base">
                <ShieldCheck className="w-5 h-5 text-cobalt flex-shrink-0" />
                <span>Flexible Rescheduling</span>
              </div>
              <p className="text-xs text-body leading-relaxed">
                Cancellation and rescheduling terms will be shared when the session is arranged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Anchor Section */}
      <section id="booking-section" className="py-16 lg:py-24 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cobalt">
              Reserve Your Date
            </span>
            <h2 className="text-3xl font-extrabold text-navy">
              Book a Personal Discovery Session
            </h2>
            <p className="text-sm text-body-muted max-w-lg mx-auto">
              Select your package below, tell us what you'd like to explore, and we will confirm scheduling details and preparation with you.
            </p>
          </div>

          <BookingForm initialPlanId={selectedPlanId} />
        </div>
      </section>
    </>
  );
}
