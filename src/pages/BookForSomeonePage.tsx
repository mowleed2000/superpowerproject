import { Link } from 'react-router-dom';
import { Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import BookingForm from '../components/BookingForm';
import { asset } from '../utils/asset';

export default function BookForSomeonePage() {
  return (
    <>
      <SEO
        title="Book an AI Session for a Parent or Relative | The Superpower Project"
        description="A thoughtful, stimulating gift for an older parent, grandparent, or relative. We provide patient, respectful 1-to-1 AI discovery sessions tailored to what they love."
      />

      {/* Hero */}
      <section className="bg-sand/60 py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Personal Sessions', href: '/personal-sessions' },
              { label: 'Book for Someone Else' },
            ]}
          />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-softblue/30 text-cobalt text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                For Adult Children, Grandchildren &amp; Family Carers
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
                Give the Gift of Curiosity, Not Another Pair of Slippers.
              </h1>
              <p className="text-base sm:text-lg text-body leading-relaxed">
                Looking for a truly meaningful experience for an older parent, grandparent, or loved one? The Superpower Project provides gentle, 1-to-1 guided explorations of AI built entirely around their passions, stories, and curiosities.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-body font-medium pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                  <span>You can sit in together or let them enjoy it solo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                  <span>Deep patience, no technical jargon</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                  <span>Physical gift voucher or digital presentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0" />
                  <span>Zero tech setup needed for your parent</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#gift-form"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-cobalt hover:bg-cobalt-hover text-white font-bold text-base shadow-md transition-all"
                >
                  Arrange a Session for a Loved One
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <img
                  src={asset('/images/personal/personal-memories.jpg')}
                  alt="Adult daughter and elderly mother looking at generated family memories together"
                  className="w-full h-[380px] object-cover"
                />
                <div className="p-5 bg-white border-t border-surface-border">
                  <p className="text-xs text-body italic">
                    "My mother was astonished to see her childhood street in Bristol recreated and write a poem about her garden. It was the most engaged I've seen her in years."
                  </p>
                  <span className="block text-[11px] font-bold text-navy mt-1">
                    — Claire M., booked for her 79-year-old mother
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works When Booking for Someone Else */}
      <section className="py-16 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cobalt">
              A Thoughtful Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
              How It Works From Booking to Delivery
            </h2>
            <p className="text-base text-body-muted leading-relaxed">
              We make the entire experience smooth, gentle, and completely reassuring for both you and your loved one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-ivory border border-surface-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cobalt/10 text-cobalt flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="font-bold text-navy text-base">You Book &amp; Share Interests</h3>
              <p className="text-xs text-body leading-relaxed">
                Fill in the form below with your relative's name, hobbies, or life stories they love sharing. You choose whether you'd like an in-person home visit or online session.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-ivory border border-surface-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cobalt/10 text-cobalt flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="font-bold text-navy text-base">Gift Presentation Pack</h3>
              <p className="text-xs text-body leading-relaxed">
                We provide a beautifully designed gift certificate (either by email or postal presentation card) explaining the experience warmly without technical overwhelm.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-ivory border border-surface-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cobalt/10 text-cobalt flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="font-bold text-navy text-base">Pre-Session Check-in</h3>
              <p className="text-xs text-body leading-relaxed">
                We have a friendly brief phone call with you or them to answer any questions, check mobility or hearing needs, and agree on a convenient day and time.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-ivory border border-surface-border space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cobalt/10 text-cobalt flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h3 className="font-bold text-navy text-base">The Discovery Session</h3>
              <p className="text-xs text-body leading-relaxed">
                The facilitator arrives with everything needed. You are welcome to join over tea, or let them have an independent, stimulating 1-to-1 session. Keepsake prints are provided!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="gift-form" className="py-16 lg:py-24 bg-ivory scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cobalt">
              Gift &amp; Family Booking
            </span>
            <h2 className="text-3xl font-extrabold text-navy">
              Book a Personal Session for a Loved One
            </h2>
            <p className="text-sm text-body-muted max-w-lg mx-auto">
              Our initial discovery session is £49. You can also select 3 or 5-session packages for an ongoing creative journey.
            </p>
          </div>

          <BookingForm initialPlanId="discovery" isGiftOrFamily={true} />

          <div className="mt-8 text-center">
            <Link
              to="/families-and-carers"
              className="text-xs font-bold text-cobalt hover:underline inline-flex items-center gap-1"
            >
              Have questions about pacing, vision, or memory loss? Read our full Families &amp; Carers Guide →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
