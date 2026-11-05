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
      'A one-to-one introduction to practical AI tools',
      'Choose a topic or everyday question to explore',
      'Plain-language explanations and guided practice',
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
      'A 75-minute session shaped around your interests',
      'Guided practice with relevant AI tools',
      'Time to review what was useful and what you want to practise',
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
      'Three 75-minute sessions',
      'Explore interests over more than one session',
      'Agree a practical focus for each visit',
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
      'Five 75-minute personal sessions',
      'Explore a larger interest or project over time',
      'Choose a practical focus for each session',
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
      desc: 'In-person availability, location and any travel costs are discussed and confirmed before a booking is agreed.',
    },
    {
      title: 'Live Online Video Sessions',
      desc: 'Online delivery may be possible depending on availability, access needs and the agreed setup.',
    },
  ],
  travelNotice: 'Any travel costs and location arrangements will be confirmed before a booking is agreed.',
  cancellationPolicy: 'Cancellation and rescheduling terms will be provided when a session is arranged.',
};
