import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About The Superpower Project | Human-Centred AI for Older Adults"
        description="Our mission: Expanding human capability and joyful connection for older adults through practical, respectful, and social AI experiences."
      />

      <section className="bg-ivory py-14 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />

          <div className="mt-8 max-w-3xl space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-cobalt">
              Our Ethos &amp; Mission
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight leading-tight">
              Age is Experience. AI is Amplification.
            </h1>
            <p className="text-base sm:text-lg text-body-muted leading-relaxed">
              The Superpower Project was founded on a simple conviction: artificial intelligence should not belong solely to Silicon Valley engineers and tech companies. It has the extraordinary power to enrich the lives of older adults, celebrate their life stories, and re-engage their creative imagination.
            </p>
          </div>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-cobalt">
                Why We Exist
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
                Beyond Fear and Jargon
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-body leading-relaxed">
                <p>
                  Every headline about artificial intelligence either stokes existential fear or promises robotic productivity. For most older people, this language is completely alienating.
                </p>
                <p>
                  Meanwhile, mainstream digital inclusion efforts for seniors are stuck in the 1990s: teaching keyboard shortcuts, password hygiene, and browser tabs. Older adults are often left feeling frustrated and patronised.
                </p>
                <p>
                  We treat older adults as <strong>creative directors</strong>. Older people possess what no computer will ever have: eighty years of memories, heartache, wisdom, humour, and life perspective. When you pair that human depth with the instant generative capabilities of modern AI, pure magic happens.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-ivory rounded-3xl p-8 sm:p-10 border border-surface-border space-y-6">
                <h3 className="text-xl font-bold text-navy">Our Guiding Commitments</h3>
                <div className="space-y-4 text-sm text-body">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cobalt flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy block">Human First, Tech Invisible</strong>
                      <span className="text-xs text-body-muted">We handle all the devices, connections, and prompting mechanics so the participant can focus entirely on storytelling and ideas.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cobalt flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy block">Dignity &amp; Respect</strong>
                      <span className="text-xs text-body-muted">We never talk down to participants or use childlike metaphors. We treat life experience with the reverence it deserves.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cobalt flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-navy block">Safeguarding &amp; Trust</strong>
                      <span className="text-xs text-body-muted">Enhanced DBS checks, £5M insurance, and absolute data privacy compliance on all personal photos and stories.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safeguarding & Standards */}
      <section className="py-16 bg-ivory border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-surface-border shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-cobalt">
                Safeguarding &amp; Governance
              </span>
              <h3 className="text-2xl font-bold text-navy">
                Strict Quality Standards &amp; Care Policies
              </h3>
              <p className="text-xs sm:text-sm text-body-muted leading-relaxed">
                Read our complete Responsible AI framework, photo consent procedures, and safeguarding compliance pack designed specifically for residential care providers.
              </p>
            </div>
            <Link
              to="/responsible-ai"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-cobalt hover:bg-cobalt-hover text-white font-bold text-sm shadow-md transition-colors flex-shrink-0"
            >
              Read Responsible AI Policy
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
