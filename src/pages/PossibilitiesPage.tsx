import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, Sparkles, Compass, Palette, BookOpen, Clock, Globe, MessageSquare, Briefcase } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';
import { asset } from '../utils/asset';

export default function PossibilitiesPage() {
  const categories = [
    {
      id: "discovery",
      title: "Discovery",
      image: asset('/images/capabilities/capability-object-discovery.webp'),
      icon: Compass,
      description: "Identify unfamiliar objects, understand puzzling symbols, and satisfy everyday curiosities instantly using multimodal vision.",
      examples: [
        "Take a smartphone photo of a strange garden insect or wild mushroom to learn its species, safety, and habitat.",
        "Photograph an old hallmarked silver spoon or vintage tool to discover where and when it was manufactured.",
        "Interpret cryptic maintenance error codes on household boilers, washing machines, or car dashboards.",
      ],
      scenario: "Arthur found a brass nautical instrument in his late grandfather's attic. Within seconds of uploading a photo, the tool identified it as a 1920s mariner's parallel rule, explaining its exact navigational function.",
    },
    {
      id: "creativity",
      title: "Creativity",
      image: asset('/images/capabilities/capability-memories.webp'),
      icon: Palette,
      description: "Unleash imaginative artwork, poetry, and storytelling without needing formal fine arts or draftsmanship training.",
      examples: [
        "Compose an illustrated bedtime fairy tale featuring your grandchildren as brave interstellar explorers.",
        "Generate custom watercolor cover designs and chapter illustrations for your self-published short stories.",
        "Draft humorous rhyming verses for a milestone 80th birthday toast or anniversary speech.",
      ],
      scenario: "Margaret had always wanted to illustrate a children's storybook based on the mischievous foxes in her garden. She learned to craft prompts that generated consistent, charming watercolor characters for her chapters.",
    },
    {
      id: "memories",
      title: "Memories & Heritage",
      image: asset('/images/personal/personal-memories.jpg'),
      icon: Sparkles,
      description: "Preserve cherished family heritage, restore fragile photographs, and document personal life stories for posterity.",
      examples: [
        "Transcribe faded handwritten letters and vintage wartime diaries into cleanly searchable digital text.",
        "Repair creases, water stains, and scratches on fragile sepia portraits of great-grandparents.",
        "Conduct an AI-guided oral history interview to structure and write an engaging 50-page family memoir.",
      ],
      scenario: "David possessed a box of sixty handwritten letters sent from abroad in the 1950s. Using AI vision, he converted them into an edited digital anthology with historical annotations on 1950s currency and geography.",
    },
    {
      id: "learning",
      title: "Learning & Knowledge",
      image: asset('/images/capabilities/capability-learning.webp'),
      icon: BookOpen,
      description: "Explore complex academic topics, master languages at your own speed, and ask infinite questions without hesitation.",
      examples: [
        "Practise conversational French, Spanish, or Italian with a patient speaking partner that corrects grammar gently.",
        "Break down intimidating scientific topics like quantum physics or astrophysics into intuitive everyday analogies.",
        "Dive into local social history, exploring how your neighbourhood looked and functioned two centuries ago.",
      ],
      scenario: "Evelyn wanted to understand how solar panels and battery storage worked before speaking to contractors. She asked the AI to explain kilowatt-hours and inverter functions using familiar water piping analogies until she felt fully confident.",
    },
    {
      id: "everyday",
      title: "Everyday Life",
      image: asset('/images/homepage/everyday-discovery.jpg'),
      icon: Clock,
      description: "Organise daily routines, plan nutritious meals from leftover pantry ingredients, and demystify official bureaucracy.",
      examples: [
        "Photograph the contents of your vegetable crisper to get three quick, delicious soup recipes that avoid waste.",
        "Paste dense council tax, planning permission, or pension letters to receive a three-sentence plain-English summary.",
        "Create structured weekly task schedules, medication reminders, and household maintenance checklists.",
      ],
      scenario: "George received an 8-page legal notice from his water provider regarding pipe replacement. He used AI to extract exactly what action he needed to take and confirmed that no out-of-pocket charges applied to his property.",
    },
    {
      id: "travel",
      title: "Travel & Exploration",
      image: asset('/images/personal/travel-exploration.jpg'),
      icon: Globe,
      description: "Research trips tailored to your exact physical mobility, dietary preferences, and personal historical interests.",
      examples: [
        "Design a 5-day walking tour of the Scottish Highlands that avoids steep stairs and includes accessible cafes every 45 minutes.",
        "Translate foreign train timetables, transit signage, and localized cultural customs before departure.",
        "Find historic bookshops, classical concerts, and hidden artisan gardens overlooked by mainstream tourist guides.",
      ],
      scenario: "Patricia planned a two-week railway journey through northern Italy with a knee injury. The AI identified stations with working step-free elevators, recommended ground-floor trattorias, and scheduled relaxed afternoon rest periods.",
    },
    {
      id: "communication",
      title: "Communication",
      image: asset('/images/capabilities/capability-communication.webp'),
      icon: MessageSquare,
      description: "Overcome writer's block, translate between languages effortlessly, and prepare for difficult conversations.",
      examples: [
        "Draft a firm but courteous letter of dispute to an airline over delayed luggage and statutory compensation.",
        "Translate long voice notes or messages between overseas family members who speak different languages.",
        "Roleplay and rehearse negotiating a tricky contract renewal or boundary discussion with a neighbour.",
      ],
      scenario: "Brian needed to dispute an unfair municipal parking fine. He provided the timeline and photos of ambiguous signage; the AI composed a polite, legally structured formal appeal that successfully had the ticket cancelled.",
    },
    {
      id: "projects",
      title: "Personal Projects",
      image: asset('/images/personal/creative-capability.jpg'),
      icon: Briefcase,
      description: "Bring ambitious personal goals to fruition with step-by-step project planning and creative problem solving.",
      examples: [
        "Plan and build a bespoke raised garden bed or woodworking workbench, including timber cut lists and joint diagrams.",
        "Organize, catalogue, and value a lifelong collection of postage stamps, classic vinyl records, or antique porcelain.",
        "Launch an independent community book club or fundraising initiative with posters, agendas, and discussion guides.",
      ],
      scenario: "Joan wanted to restore an overgrown allotment garden. She photographed the plot over the seasons, and the AI produced an 18-month companion planting schedule tailored to her local soil type and shaded zones.",
    },
  ];

  return (
    <>
      <SEO
        title="What AI Can Help You Do"
        description="Explore 8 practical areas where artificial intelligence amplifies personal creativity, discovery, memories, and everyday problem-solving."
      />

      {/* Hero */}
      <section className="bg-ivory py-12 md:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Possibilities' }]} />

          <div className="mt-8 max-w-3xl space-y-5">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
              Practical Applications
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              Start with something you've always wanted to do.
            </h1>
            <div className="space-y-4 text-base sm:text-lg text-body leading-relaxed">
              <p>
                AI capabilities are often easier to understand when you see them applied to something real.
              </p>
              <p className="text-navy font-medium">
                Explore some of the possibilities below. They are starting points, not a complete list.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Category Editorial Grid */}
      <section className="py-20 md:py-28 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="bg-ivory rounded-3xl border border-surface-border overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  {/* Category Image Header */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-ivory-dark">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs font-bold text-navy flex items-center gap-2 shadow-sm">
                      <Icon className="w-4 h-4 text-cobalt" />
                      <span>{cat.title}</span>
                    </div>
                  </div>

                  {/* Category Details */}
                  <div className="p-8 sm:p-10 flex-grow flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-navy">
                        {cat.title}
                      </h2>
                      <p className="text-body text-base leading-relaxed">
                        {cat.description}
                      </p>

                      {/* Practical Examples */}
                      <div className="space-y-2 pt-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-cobalt">
                          Three Practical Examples:
                        </p>
                        <ul className="space-y-2 text-sm text-body-muted">
                          {cat.examples.map((ex, eIdx) => (
                            <li key={eIdx} className="flex items-start gap-2">
                              <span className="text-cobalt font-bold">•</span>
                              <span>{ex}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Illustrative Scenario */}
                      <div className="p-4 rounded-xl bg-white border border-surface-border/80 text-xs sm:text-sm text-body space-y-1">
                        <p className="font-bold text-navy">Illustrative Scenario:</p>
                        <p className="italic text-body-muted leading-relaxed">
                          "{cat.scenario}"
                        </p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-cobalt hover:text-cobalt-hover uppercase tracking-wider"
                      >
                        <span>Explore this in a personal session</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Responsible Use Note (Mandatory in Section 12) */}
          <div className="mt-16 bg-softblue/40 rounded-2xl p-6 sm:p-8 border border-cobalt/20 flex flex-col sm:flex-row items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber flex-shrink-0 mt-0.5" />
            <div className="space-y-2 text-sm text-body leading-relaxed">
              <h3 className="font-bold text-navy text-base">
                Responsible Use Note: AI Systems Can Make Mistakes
              </h3>
              <p>
                Generative AI models are powerful creative and synthesising companions, but they can occasionally generate inaccurate, obsolete, or misleading statements (often termed "hallucinations").
              </p>
              <p className="text-body-muted">
                Always verify important facts—particularly concerning health, legal contracts, travel reservations, and finances—using reliable primary sources. The Superpower Project emphasizes critical thinking and human judgement as core principles in all programmes.
              </p>
              <div className="pt-1">
                <Link
                  to="/responsible-use"
                  className="font-semibold text-cobalt hover:underline text-xs"
                >
                  Read our complete Safeguarding &amp; Responsible Use Guidelines →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Which possibility speaks to you?"
        copy="Whether you want to learn independently or bring a demonstration to your local group, we are here to help."
        primaryButtonText="Explore our programmes"
        primaryButtonLink="/programmes"
        secondaryButtonText="Get in touch"
        secondaryButtonLink="/contact"
      />
    </>
  );
}
