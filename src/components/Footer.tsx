import { Link } from 'react-router-dom';
import { asset } from '../utils/asset';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy text-white overflow-hidden border-t border-navy-light">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat bg-center"
        style={{ backgroundImage: `url('${asset('/images/brand/programme-pattern.webp')}')` }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-navy-light/60">
          {/* Column 1: Brand & Proposition */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block" aria-label="The Superpower Project Home">
              <img
                src={asset('/images/brand/superpower-project-logo.svg')}
                alt="The Superpower Project"
                className="h-10 w-auto object-contain brightness-0 invert"
                width="220"
                height="56"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Expanding human capability through practical, personal and social AI experiences. Not lessons. Experiences.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs uppercase tracking-wider font-semibold text-softblue/90 bg-navy-light px-3 py-1 rounded-full border border-softblue/20">
                Age is experience. AI is amplification.
              </span>
            </div>
          </div>

          {/* Column 2: Care Homes (B2B) */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-softblue">
              For Care Homes
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/care-homes" className="text-gray-300 hover:text-white transition-colors">
                  Care Home Overview
                </Link>
              </li>
              <li>
                <Link to="/care-home-programmes" className="text-gray-300 hover:text-white transition-colors">
                  Programme Formats
                </Link>
              </li>
              <li>
                <Link to="/care-homes#proposal-form" className="text-gray-300 hover:text-white transition-colors">
                  Request a Proposal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Individuals & Families (B2C) */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-softblue">
              Personal &amp; Families
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/personal-sessions" className="text-gray-300 hover:text-white transition-colors">
                  Personal Sessions
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing &amp; Booking (£49+)
                </Link>
              </li>
              <li>
                <Link to="/book-for-someone" className="text-gray-300 hover:text-white transition-colors">
                  Book for a Relative
                </Link>
              </li>
              <li>
                <Link to="/families-and-carers" className="text-gray-300 hover:text-white transition-colors">
                  Families &amp; Carers Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Discovery & Governance */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-softblue">
              Explore &amp; Trust
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/possibilities" className="text-gray-300 hover:text-white transition-colors">
                  10 Areas of Possibility
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="text-gray-300 hover:text-white transition-colors">
                  Real Participant Stories
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/responsible-ai" className="text-gray-300 hover:text-white transition-colors">
                  Responsible AI &amp; Safeguarding
                </Link>
              </li>
              <li>
                <Link to="/community-organisations" className="text-gray-300 hover:text-white transition-colors">
                  Community &amp; Libraries
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {currentYear} The Superpower Project. All rights reserved.</p>
          <p className="text-gray-400">
            Enhanced DBS Checked • £5M Public Liability Insurance • UK GDPR Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
