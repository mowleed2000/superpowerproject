import { Link } from 'react-router-dom';
import { BookOpen, Archive, PenTool, Palette, Music, GraduationCap, Compass, HelpCircle, Mail, Globe2 } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { asset } from '../utils/asset';

export default function PossibilitiesPage() {
  const categories = [
    {
      id: 'memoirs',
      number: '01',
      title: 'Life Stories & Memoirs',
      subtitle: 'Preserving personal history and lived wisdom',
      icon: BookOpen,
      image: asset('/images/personal/personal-memories.jpg'),
      description: 'Turn spoken recollections, career milestones, childhood anecdotes, and family values into structured, beautifully written memoir chapters without needing to write a single word by hand.',
      examples: [
        'Recording memories of living through 1960s London or rural village life',
        'Creating a chaptered life story book for children and grandchildren',
        'Documenting reflections on past trades, professions, or wartime service',
      ],
    },
    {
      id: 'family-history',
      number: '02',
      title: 'Family History & Archival Photos',
      subtitle: 'Bringing ancestors and historical records to life',
      icon: Archive,
      image: asset('/images/capabilities/capability-memories.webp'),
      description: 'Interpret century-old census records, decode faded handwritten letters, reconstruct family trees, and visualise the streets and towns where your grandparents once lived.',
      examples: [
        'Enhancing, repairing, and colorising faded black-and-white family portraits',
        'Writing biographical sketches of ancestors based on military or parish records',
        'Understanding historical contexts (e.g. what everyday life was like in 1910)',
      ],
    },
    {
      id: 'creative-writing',
      number: '03',
      title: 'Creative Writing & Poetry',
      subtitle: 'Unlocking imagination in rhyme and prose',
      icon: PenTool,
      image: asset('/images/capabilities/capability-learning.webp'),
      description: 'Compose rhyming verse, limericks, short mysteries, or bedtime fables. Direct the tone, rhythm, and characters while AI helps craft effortless stanzas and vivid descriptions.',
      examples: [
        'Composing personalised poems for birthdays, anniversaries, or memorials',
        'Writing an illustrated fantasy tale starring your grandchildren or pets',
        'Exploring playful limericks celebrating favourite hobbies and friends',
      ],
    },
    {
      id: 'visual-art',
      number: '04',
      title: 'Visual Art, Illustration & Painting Styles',
      subtitle: 'Creating original fine artwork through imagination and voice',
      icon: Palette,
      image: asset('/images/personal/creative-capability.jpg'),
      description: 'Describe any vision in your mind—a favourite garden border, a dream cottage in the Cotswolds, or a coastal sunset—and render it as a watercolour, oil painting, or woodcut print.',
      examples: [
        'Recreating a painting of your childhood home in the style of Monet or Turner',
        'Creating botanical watercolour illustrations of favourite garden plants',
        'Designing bespoke greeting cards and family event invitations',
      ],
    },
    {
      id: 'music-soundscapes',
      number: '05',
      title: 'Music, Songs & Soundscapes',
      subtitle: 'Exploring vintage tunes, lyrical compositions and memories',
      icon: Music,
      image: asset('/images/community/facilitator-demonstration.jpg'),
      description: 'Explore the great American songbook, 1950s swing, vintage radio melodies, and British dance bands. Compose bespoke lyrics set to classic musical eras and genres.',
      examples: [
        'Composing personalised musical verses celebrating a couple\'s golden anniversary',
        'Evoking the atmospheric street sounds and steam engines of bygone cities',
        'Exploring the background and sheet music of favourite classic songs',
      ],
    },
    {
      id: 'lifelong-learning',
      number: '06',
      title: 'Lifelong Learning & Deep Curiosities',
      subtitle: 'Mastering topics you have always wanted to understand',
      icon: GraduationCap,
      image: asset('/images/capabilities/capability-learning.webp'),
      description: 'Ever wondered how radio astronomy works, what life was like in Byzantine Constantinople, or how modern vaccines operate? Explore without fear of asking "silly" questions.',
      examples: [
        'Deep dives into world history, archaeology, and ancient civilisations',
        'Clear, jargon-free explanations of complex scientific and cosmological phenomena',
        'Investigating philosophy, ethics, and world religions at your own pace',
      ],
    },
    {
      id: 'travel-geography',
      number: '07',
      title: 'Travel, Geography & Cultural Nostalgia',
      subtitle: 'Virtual wanderlust and nostalgic journeys',
      icon: Compass,
      image: asset('/images/personal/travel-exploration.jpg'),
      description: 'Revisit places you traveled to in decades past or explore destinations you always dreamed of seeing. Tour ancient ruins, historic rail lines, and charming European villages.',
      examples: [
        'Tracing the steps of a 1968 road trip across France or Italy',
        'Creating detailed travel itineraries for upcoming scenic railway journeys',
        'Visualising lost monuments and historic landmarks as they appeared decades ago',
      ],
    },
    {
      id: 'everyday-problem-solving',
      number: '08',
      title: 'Everyday Problem-Solving & Household Advice',
      subtitle: 'Practical troubleshooting and household cleverness',
      icon: HelpCircle,
      image: asset('/images/homepage/everyday-discovery.jpg'),
      description: 'Get instant, thoughtful advice on pruning heirloom roses, substituting hard-to-find ingredients in traditional recipes, organizing collections, or deciphering confusing instructions.',
      examples: [
        'Diagnosing plant ailments from description or photos',
        'Adapting classic family baking recipes for dietary requirements',
        'Step-by-step practical advice for household maintenance and craft projects',
      ],
    },
    {
      id: 'correspondence',
      number: '09',
      title: 'Letter Writing, Speeches & Correspondence',
      subtitle: 'Eloquent words for life\'s important moments',
      icon: Mail,
      image: asset('/images/capabilities/capability-communication.webp'),
      description: 'Find the exact right words for difficult, formal, or emotionally meaningful communications. Write moving wedding speeches, articulate letters to local councils, or warm thank-you notes.',
      examples: [
        'Crafting a heartfelt, humorous father-of-the-bride or anniversary toast',
        'Drafting clear, polite, but firm correspondence to utility companies or councils',
        'Writing sincere letters of gratitude and appreciation to longtime friends',
      ],
    },
    {
      id: 'languages-heritage',
      number: '10',
      title: 'Languages, Translation & Heritage Exploration',
      subtitle: 'Connecting across borders, dialects and ancestral tongues',
      icon: Globe2,
      image: asset('/images/capabilities/capability-object-discovery.webp'),
      description: 'Practise conversational Italian for an upcoming holiday, translate old postcards and letters sent from overseas relatives, or explore regional dialects and folklore.',
      examples: [
        'Translating vintage wartime postcards and diaries in French, German, or Italian',
        'Practising gentle spoken conversational phrases for holiday trips abroad',
        'Preserving folklore, colloquial sayings, and idioms from ancestral cultures',
      ],
    },
  ];

  return (
    <>
      <SEO
        title="10 Areas of AI Possibility for Older Adults | The Superpower Project"
        description="Explore 10 human categories of what AI makes possible—from memoirs and family history to fine art, poetry, travel exploration and lifelong learning."
      />

      <section className="bg-ivory py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Possibilities' }]} />

          <div className="mt-8 max-w-3xl space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
              Human-Centred Applications
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              What Could You Discover?
            </h1>
            <p className="text-base sm:text-lg text-body-muted leading-relaxed">
              We look at artificial intelligence not as a corporate productivity tool or a technical mystery, but as a magical, responsive mirror for human creativity, memory, and lifelong curiosity.
            </p>
          </div>
        </div>
      </section>

      {/* 10 Categories List */}
      <section className="py-16 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 gap-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  id={cat.id}
                  className="bg-ivory rounded-3xl p-8 sm:p-10 border border-surface-border shadow-sm flex flex-col lg:flex-row items-center gap-10 scroll-mt-24"
                >
                  <div className="w-full lg:w-5/12 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-extrabold text-cobalt tracking-wider">
                        {cat.number}
                      </span>
                      <div className="p-2 rounded-xl bg-cobalt/10 text-cobalt">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                      {cat.title}
                    </h2>
                    <span className="block text-xs font-semibold text-cobalt uppercase tracking-wider">
                      {cat.subtitle}
                    </span>
                    <p className="text-sm text-body leading-relaxed">{cat.description}</p>

                    <div className="pt-2 space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-navy block">
                        Popular Explorations:
                      </span>
                      {cat.examples.map((ex, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-body-muted">
                          <span className="text-cobalt font-bold">•</span>
                          <span>{ex}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full lg:w-7/12">
                    <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white bg-white">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-64 sm:h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Prompt */}
      <section className="py-16 bg-sand/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
            Bring Your Own Curiosity to a Personal Session
          </h2>
          <p className="text-sm text-body max-w-xl mx-auto leading-relaxed">
            You don't need a project ready in advance. Simply tell us what interests you and we'll discover what is possible together.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/pricing"
              className="px-7 py-3.5 rounded-xl bg-cobalt hover:bg-cobalt-hover text-white font-bold text-sm shadow-md transition-colors"
            >
              Book a Personal Discovery Session (£49)
            </Link>
            <Link
              to="/care-homes"
              className="px-6 py-3.5 rounded-xl bg-white border border-surface-border text-navy font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              For Care Home Resident Sessions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
