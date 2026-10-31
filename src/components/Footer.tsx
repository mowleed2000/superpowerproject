import { Link } from 'react-router-dom';
import { asset } from '../utils/asset';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy text-white overflow-hidden border-t border-navy-light">
      {/* Subtle decorative background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat bg-center"
        style={{ backgroundImage: `url('${asset('/images/brand/programme-pattern.webp')}')` }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-navy-light/60">
          {/* Column 1: Brand & Proposition */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-block" aria-label="The Superpower Project Home">
              <img
                src={asset('/images/brand/superpower-project-logo.svg')}
                alt="The Superpower Project"
                className="h-10 w-auto object-contain brightness-0 invert"
                width="220"
                height="56"
              />
            </Link>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-sm">
              Expanding human capability through practical, personal and social AI experiences.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs uppercase tracking-wider font-semibold text-softblue/80 bg-navy-light px-3 py-1 rounded-full border border-softblue/20">
                Age is experience. AI is amplification.
              </span>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-softblue/90">
              Explore
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/programmes" className="text-gray-300 hover:text-white transition-colors">
                  Programmes
                </Link>
              </li>
              <li>
                <Link to="/possibilities" className="text-gray-300 hover:text-white transition-colors">
                  Possibilities
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Get Involved */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-softblue/90">
              Get Involved
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/community-events" className="text-gray-300 hover:text-white transition-colors">
                  Community Events
                </Link>
              </li>
              <li>
                <Link to="/group-programmes" className="text-gray-300 hover:text-white transition-colors">
                  Group Programmes
                </Link>
              </li>
              <li>
                <Link to="/personal-sessions" className="text-gray-300 hover:text-white transition-colors">
                  Personal Sessions
                </Link>
              </li>
              <li>
                <Link to="/organisations" className="text-gray-300 hover:text-white transition-colors">
                  Host an Experience
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Information */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-softblue/90">
              Information
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/responsible-use" className="text-gray-300 hover:text-white transition-colors">
                  Responsible Use &amp; Safeguarding
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {currentYear} The Superpower Project. All rights reserved.</p>
          <p className="text-gray-400">
            Applied AI Education &amp; Human Capability Initiative
          </p>
        </div>
      </div>
    </footer>
  );
}
