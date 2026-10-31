import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { asset } from '../utils/asset';

export default function ExperiencesPage() {
  const stories = [
    {
      id: 'arthur',
      participant: 'Arthur (82, Retired Engineer)',
      location: 'Personal Session • Richmond',
      category: 'Wartime Family Memoir',
      image: asset('/images/personal/personal-memories.jpg'),
      quote: "My grandchildren never really understood what the dockyards were like during the reconstruction. Now they have a printed book with illustrations of the cranes I worked on.",
      narrative: "Arthur arrived with a shoebox containing three faded black-and-white photographs of the Royal Navy dockyards in Chatham from 1958. Working with our facilitator, Arthur described the clamour of the shipyard, the smell of diesel, and the names of his apprentices. The AI turned his spoken memories into a chronological 4-chapter narrative and generated atmospheric period-accurate watercolour illustrations of the dry docks. He presented a bound copy to his grandson on his 21st birthday.",
      outcomes: ['Spoken recollections turned into 18 pages of narrative prose', '4 custom digital watercolours of historic Chatham docks', 'Printed keepsake bound and gifted to family'],
    },
    {
      id: 'margaret',
      participant: 'Margaret (76, Keen Gardener)',
      location: 'Personal Session • Online Video',
      category: 'Botanical Illustration & Voice Art',
      image: asset('/images/personal/creative-capability.jpg'),
      quote: "Arthritis makes holding a watercolour brush painful now. Describing my garden and seeing it painted on screen brought back the joy of painting.",
      narrative: "Margaret has tended a stunning perennial cottage garden for over 40 years. Unable to paint due to severe joint stiffness, she used our voice-assisted exploration to describe her favourite climbing roses, lavender borders, and bird bath. Within seconds, she was directing the colour palette, requesting morning light through the trellis, and adjusting the painting in the style of Beatrix Potter and Monet.",
      outcomes: ['Created 6 high-resolution botanical art prints', 'Zero strain on hands or joints through voice prompting', 'Prints framed for her living room and family greeting cards'],
    },
    {
      id: 'care-home-pair',
      participant: 'David (79) & Prem (81)',
      location: 'Care Home Group Session • North London',
      category: 'Care Home Reminiscence',
      image: asset('/images/community/social-discovery.jpg'),
      quote: "Prem hadn't talked about his youth in Bombay for months. When the picture of Victoria Terminus in 1954 appeared, he spoke with so much passion the entire lounge stopped to listen.",
      narrative: "During a communal lounge discovery session at an Enfield care home, residents were sharing childhood memories. Prem, who often remained quiet during group activities, mentioned growing up near the railway station in 1950s Bombay. Together with David, who had served in the merchant navy, they collaborated to describe the vintage steam locomotives, the monsoon rains, and street vendor chai carts. The room listened spellbound as the facilitator generated street soundscapes and historical scenes.",
      outcomes: ['Unlocked deep reminiscence and verbal sharing in a reserved resident', 'Cross-cultural connection between residents who had rarely spoken before', 'Activities team noted sustained positive mood for days after'],
    },
    {
      id: 'eleanor',
      participant: 'Eleanor (88, Former Schoolteacher)',
      location: 'Booked by Her Daughter Claire • Wandsworth',
      category: 'Children\'s Storybook Creation',
      image: asset('/images/personal/personal-ai-session.jpg'),
      quote: "I wanted to leave something humorous and affectionate for my great-granddaughters that had my voice in it.",
      narrative: "Eleanor has a rescue terrier named Barnaby who is famous in the family for stealing socks. Eleanor dictated stories of Barnaby's imaginary nocturnal adventures solving neighbourhood garden mysteries. Over two 75-minute sessions, Eleanor wrote three charming chapters and guided the AI to illustrate Barnaby wearing a detective coat with his trademark floppy ear.",
      outcomes: ['Three illustrated children\'s story chapters', 'Digital PDF shared with family across Australia and Canada', 'Physical hardback booklet printed for her bookshelf'],
    },
    {
      id: 'tariq',
      participant: 'Tariq (73, Grandfather)',
      location: 'Personal Session • Ealing',
      category: 'Folklore Translation & Oral Heritage',
      image: asset('/images/capabilities/capability-communication.webp'),
      quote: "My grandchildren speak only English. These folk stories were in my head in Urdu, but now we have written them down in a language they can enjoy.",
      narrative: "Tariq grew up listening to traditional folk fables told by his grandmother in Punjab. He was concerned these tales would be lost to his British-born grandchildren. Together with the facilitator, Tariq recited the storylines. The AI helped translate the poetic nuances into engaging English prose while preserving traditional metaphors, and generated vibrant South Asian miniature-style illustrations for each tale.",
      outcomes: ['Five traditional folk fables translated and preserved in English', 'Vibrant miniature-style digital illustrations created', 'Audio voice recordings paired with written text'],
    },
    {
      id: 'beatrice',
      participant: 'Beatrice (84, Room-Bound Resident)',
      location: '1-to-1 Bedside Care Visit • Surrey',
      category: 'Sensory Nostalgia & Gentle Exploration',
      image: asset('/images/personal/travel-exploration.jpg'),
      quote: "Being in this bed, my world can feel very small. For an hour, I was back on the shores of Loch Lomond with Donald.",
      narrative: "Due to mobility limitations following hip surgery, Beatrice spends most of her day in her private room. Our facilitator visited with an iPad and wireless speaker. Beatrice spoke of her honeymoon in 1961: the mist on Loch Lomond, the tartan rug, and the tiny Austin Seven car they drove. We recreated the exact loch view in morning mist and played gentle traditional accordion melodies. The experience brought profound comfort and tears of joy.",
      outcomes: ['Gentle bedside stimulation with zero physical demands', 'Restored dignity and emotional comfort for a room-bound resident', 'Framed postcard of the loch placed on her bedside table'],
    },
    {
      id: 'oakwood-group',
      participant: 'Oakwood Lodge Care Home',
      location: 'Communal Lounge Discovery Event • Hertfordshire',
      category: 'Collective Care Home Creativity',
      image: asset('/images/community/group-interaction.jpg'),
      quote: "The energy in the room was electric. Residents who normally doze off were calling out suggestions and laughing.",
      narrative: "Fourteen residents gathered around a 55-inch wireless lounge display for an afternoon session called 'The Great 1950s Reminiscence Quiz'. Residents took turns calling out clues: favorite cinema idols, dance halls, and school dinners. Together, the group co-authored a humorous rhyming song about post-war ration books, generated an album cover, and sang the chorus together.",
      outcomes: ['14 residents actively engaged for 90 minutes', 'Tangible evidence documented for CQC Wellbeing and Caring criteria', 'Care home manager immediately booked a monthly recurring series'],
    },
  ];

  return (
    <>
      <SEO
        title="Experiences & Scenarios | Real AI Discovery Stories | The Superpower Project"
        description="Read 7 authentic, detailed editorial stories of how older adults and care home residents use AI for memoirs, botanical art, reminiscence, and family storytelling."
      />

      <section className="bg-ivory py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Experiences & Scenarios' }]} />

          <div className="mt-8 max-w-3xl space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
              Real Stories of Discovery
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              Stories from Our Sessions
            </h1>
            <p className="text-base sm:text-lg text-body-muted leading-relaxed">
              Every session begins with a human memory, an everyday question, or a creative ambition. Here are seven realistic examples of what older adults and care homes have accomplished with our guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Stories List */}
      <section className="py-16 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-ivory rounded-3xl p-8 sm:p-10 border border-surface-border shadow-sm flex flex-col lg:flex-row gap-8 items-start"
            >
              <div className="w-full lg:w-5/12 flex-shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white bg-white">
                  <img
                    src={story.image}
                    alt={story.participant}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="mt-4 p-4 rounded-xl bg-white border border-surface-border">
                  <span className="text-xs font-bold uppercase tracking-wider text-cobalt block">
                    {story.category}
                  </span>
                  <span className="text-sm font-extrabold text-navy block mt-0.5">
                    {story.participant}
                  </span>
                  <span className="text-xs text-body-muted block mt-0.5">
                    {story.location}
                  </span>
                </div>
              </div>

              <div className="w-full lg:w-7/12 space-y-4">
                <blockquote className="p-4 rounded-2xl bg-white border-l-4 border-cobalt text-sm sm:text-base font-semibold text-navy italic">
                  "{story.quote}"
                </blockquote>

                <p className="text-sm text-body leading-relaxed">{story.narrative}</p>

                <div className="pt-2 border-t border-surface-border space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy block">
                    Key Outcomes:
                  </span>
                  {story.outcomes.map((out, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl font-extrabold text-white">
            What Story Will You Create?
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed">
            Whether you want to explore for yourself, arrange a gift for a parent, or bring engaging activities to your care home, we are ready to guide you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/pricing"
              className="px-7 py-3.5 rounded-xl bg-cobalt hover:bg-cobalt-hover text-white font-bold text-sm shadow-md transition-colors"
            >
              Book a Personal Session (from £49)
            </Link>
            <Link
              to="/care-homes"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
            >
              For Care Home Enquiries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
