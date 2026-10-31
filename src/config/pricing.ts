export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  duration: string;
  badge?: string;
  popular?: boolean;
  tagline: string;
  description: string;
  features: string[];
  ctaText: string;
  idealFor: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'discovery',
    name: 'Personal Discovery Session',
    price: 49,
    formattedPrice: '£49',
    duration: 'Up to 60 minutes',
    badge: 'Introductory Offer',
    tagline: 'A gentle, hands-on introduction to what AI can do for you.',
    description: 'Explore personal interests and possibilities with patient, 1-to-1 guided demonstrations. No previous tech experience required.',
    features: [
      'One-to-one introductory session (in-person or online)',
      'Explore your specific curiosities and everyday questions',
      'Live practical demonstrations with clear, jargon-free explanations',
      'Try hands-on prompting at your own comfortable pace',
      'Takeaway summary of tools and topics explored',
    ],
    ctaText: 'Book a Discovery Session',
    idealFor: 'Older adults and beginners curious about what AI is and how it works.',
  },
  {
    id: 'standard',
    name: 'Personal Session',
    price: 65,
    formattedPrice: '£65',
    duration: 'Up to 75 minutes',
    popular: true,
    tagline: 'A tailored deep dive into your projects, hobbies and goals.',
    description: 'Focused exploration built around what matters to you—from photo preservation and creative writing to travel planning.',
    features: [
      'Dedicated 75-minute personalised session',
      'Full focus on your personal files, photographs, or creative ideas',
      'In-depth practice with image creation, writing, or research tools',
      'Step-by-step guidance to build lasting digital confidence',
      'Follow-up summary email with links and helpful prompts',
    ],
    ctaText: 'Book a Personal Session',
    idealFor: 'Anyone wanting dedicated time to accomplish a specific project or learn a practical skill.',
  },
  {
    id: 'three-pack',
    name: 'Three-Session Package',
    price: 180,
    formattedPrice: '£180',
    duration: '3 × 75 minutes',
    tagline: 'Build confidence, habits and diverse capabilities over time.',
    description: 'Spread across several weeks to explore different interests, practise between sessions, and develop real independence.',
    features: [
      'Three comprehensive 75-minute sessions',
      'Progressive learning path adapted to your pace',
      'Explore multiple domains (e.g. creative writing, photo restoration, research)',
      'Practice exercises and email check-ins between sessions',
      'Save £15 compared to individual session bookings',
    ],
    ctaText: 'Choose Three Sessions',
    idealFor: 'Individuals or family members seeking ongoing exploration and progressive mastery.',
  },
  {
    id: 'five-pack',
    name: 'Five-Session Package',
    price: 275,
    formattedPrice: '£275',
    duration: '5 × 75 minutes',
    badge: 'Best Value',
    tagline: 'A complete personal capability journey across multiple domains.',
    description: 'Our most thorough individual experience for completing complex creative projects, archives, or ongoing personal learning.',
    features: [
      'Five full 75-minute personal sessions',
      'End-to-end guidance for ambitious projects (e.g. complete memoir, illustrated book)',
      'Continuous support and custom prompt templates tailored to you',
      'Flexible scheduling across 3 to 6 months',
      'Save £50 compared to individual session bookings',
    ],
    ctaText: 'Choose Five Sessions',
    idealFor: 'Those undertaking dedicated personal projects or seeking deep technology confidence.',
  },
];

export const SERVICE_POLICIES = {
  deliveryMethods: [
    {
      title: 'In-Person Delivery',
      desc: 'Available across London and the Home Counties. The facilitator arrives at your home or chosen quiet venue with all required equipment.',
    },
    {
      title: 'Live Online Video Sessions',
      desc: 'Available UK-wide and internationally via Zoom or Google Meet with patient screen-sharing and full visual clarity.',
    },
  ],
  travelNotice: 'In-person sessions within our primary travel zone include travel. For locations beyond 15 miles of our base, a modest agreed travel contribution may apply and will be confirmed transparently prior to booking.',
  cancellationPolicy: 'We understand that health, family commitments, and appointments change. Sessions may be rescheduled or cancelled without fee with at least 24 hours’ notice. For cancellations with less than 24 hours’ notice, we do our best to accommodate alternative times.',
  contactPlaceholder: {
    email: 'enquiries@thesuperpowerproject.org.uk',
    phone: '020 7946 0192',
    hours: 'Monday – Friday, 9:00am – 5:30pm',
  },
};
