import { useState } from 'react';
import { User, Building2, Heart, Laptop, ShieldCheck, CreditCard, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<'personal' | 'family' | 'care-homes' | 'tech' | 'privacy' | 'pricing'>('personal');
  const [openItem, setOpenItem] = useState<number | null>(0);

  const tabs = [
    { id: 'personal', label: 'Personal Sessions', icon: User },
    { id: 'family', label: 'Family Bookings', icon: Heart },
    { id: 'care-homes', label: 'Care Homes', icon: Building2 },
    { id: 'tech', label: 'Tech & Equipment', icon: Laptop },
    { id: 'privacy', label: 'Privacy & Safety', icon: ShieldCheck },
    { id: 'pricing', label: 'Pricing & Logistics', icon: CreditCard },
  ];

  const faqs: Record<string, { q: string; a: string }[]> = {
    personal: [
      {
        q: 'What actually happens in a personal discovery session?',
        a: 'The session is a friendly, relaxed 1-to-1 conversation where you direct the exploration. The facilitator handles all the typing and computer navigation while you dictate memories, ask questions, or describe artwork. You will see text, images, and answers appear live on a large tablet screen.',
      },
      {
        q: 'Do I need any previous computer experience?',
        a: 'None at all. You do not need to touch the keyboard unless you wish to. Our sessions are designed specifically for people who may feel intimidated by modern devices.',
      },
      {
        q: 'Can I choose what we work on?',
        a: 'Yes, completely. Whether you want to write a poem for a family wedding, explore vintage maps of your hometown, or compile your life story, the agenda is 100% yours.',
      },
    ],
    family: [
      {
        q: 'Can I purchase a session as a gift for my parent or grandparent?',
        a: 'Yes! We offer beautiful presentation gift certificates (digital or postal). You can book a single discovery session (£49) or a multi-session package.',
      },
      {
        q: 'Can I sit in on the session with my relative?',
        a: 'Absolutely. Many sons, daughters, and grandchildren love joining in over tea to share in the memories and laughter. You are also welcome to leave them in our safe, vetted care.',
      },
      {
        q: 'What if my parent needs to reschedule due to illness?',
        a: 'We understand health can be unpredictable. You can reschedule any session freely up to 48 hours prior with zero penalty.',
      },
    ],
    'care-homes': [
      {
        q: 'How does this integrate with our CQC compliance requirements?',
        a: 'Our sessions provide tangible, documented evidence of responsive and caring resident engagement. Following each session, we supply an engagement summary log detailing resident participation and mood impact for your activities portfolio.',
      },
      {
        q: 'What burden does this place on our activities coordinators?',
        a: 'Zero. We provide a turnkey service. We bring all displays, iPads, speakers, and mobile 5G internet. Your staff can sit in, enjoy the session, or attend to other care duties.',
      },
      {
        q: 'Can residents with dementia participate?',
        a: 'Yes. Our reminiscence sessions focus on sensory memories (music, sights, childhood hometowns) rather than cognitive tests. It is proven to stimulate lively communication even in quieter residents.',
      },
    ],
    tech: [
      {
        q: 'Do we need Wi-Fi or high-speed internet at our venue?',
        a: 'No. Our facilitators carry independent cellular 5G mobile hotspots that work independently of local building Wi-Fi.',
      },
      {
        q: 'What devices are used?',
        a: 'We bring large-screen iPad displays with high-contrast text and external speakers so everyone can see and hear comfortably.',
      },
    ],
    privacy: [
      {
        q: 'Will our family photos or life stories be used to train AI models?',
        a: 'No. We operate under commercial zero-data-retention agreements where user inputs are never used to train public AI models. All personal photos are deleted from temporary working memory once the session concludes.',
      },
      {
        q: 'Are facilitators DBS checked?',
        a: 'Yes. All facilitators hold clean Enhanced DBS certificates for working with vulnerable adults and we carry £5,000,000 public liability insurance.',
      },
    ],
    pricing: [
      {
        q: 'What are your prices for personal sessions?',
        a: 'An introductory Personal Discovery Session is £49 (up to 60 minutes). A standard Personal Session is £65 (up to 75 minutes). We also offer a 3-Session Package for £180 and a 5-Session Package for £275.',
      },
      {
        q: 'Where do you deliver in-person sessions?',
        a: 'In-person visits are available across Greater London and the Home Counties. Online video sessions are available nationwide throughout the UK.',
      },
      {
        q: 'How does care home pricing work?',
        a: 'Care home packages depend on whether you book a half-day discovery pilot, a bi-weekly recurring series, or bespoke 1-to-1 bedside visits. Request a proposal on our Care Homes page for clear, transparent pricing.',
      },
    ],
  };

  const currentFaqs = faqs[activeTab] || [];

  return (
    <>
      <SEO
        title="Frequently Asked Questions | The Superpower Project"
        description="Comprehensive answers about personal sessions, care home programmes, pricing, technology, safeguarding, and booking for older relatives."
      />

      <section className="bg-ivory py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Frequently Asked Questions' }]} className="justify-center" />

          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt block">
            Clear Answers
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-body-muted max-w-2xl mx-auto leading-relaxed">
            Select a category below to explore details about our personal sessions, care home offerings, equipment, and safeguarding.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 bg-white border-b border-surface-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 pb-8 border-b border-surface-border">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    setOpenItem(0);
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-cobalt text-white shadow-md'
                      : 'bg-ivory text-navy hover:bg-gray-100 border border-surface-border'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Accordion List */}
          <div className="pt-8 space-y-4">
            {currentFaqs.map((item, idx) => {
              const isOpen = openItem === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-surface-border bg-ivory overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenItem(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-navy hover:text-cobalt transition-colors"
                  >
                    <span className="text-base">{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 text-cobalt ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-body leading-relaxed border-t border-surface-border/60 pt-4 bg-white">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
