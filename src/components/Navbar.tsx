import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { asset } from '../utils/asset';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programmesOpen, setProgrammesOpen] = useState(false);
  const [mobileProgrammesOpen, setMobileProgrammesOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProgrammesOpen(false);
  }, [location.pathname]);

  // Handle scroll state for navbar shadow/styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProgrammesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle Escape key to close menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setProgrammesOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;
  const isProgrammesActive = ['/programmes', '/community-events', '/group-programmes', '/personal-sessions'].includes(location.pathname);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-surface-border py-3.5'
          : 'bg-white border-b border-surface-border/60 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Brand Wordmark */}
          <Link
            to="/"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt rounded-md"
            aria-label="The Superpower Project Home"
          >
            <img
              src={asset('/images/brand/superpower-project-logo.svg')}
              alt="The Superpower Project"
              className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:opacity-90"
              width="240"
              height="60"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            <Link
              to="/about"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/about')
                  ? 'text-cobalt bg-softblue/60'
                  : 'text-navy hover:text-cobalt hover:bg-ivory'
              }`}
            >
              About
            </Link>

            {/* Programmes Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setProgrammesOpen(!programmesOpen)}
                onMouseEnter={() => setProgrammesOpen(true)}
                aria-expanded={programmesOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isProgrammesActive
                    ? 'text-cobalt bg-softblue/60'
                    : 'text-navy hover:text-cobalt hover:bg-ivory'
                }`}
              >
                <span>Programmes</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${programmesOpen ? 'rotate-180 text-cobalt' : 'text-gray-400'}`}
                />
              </button>

              {/* Dropdown Menu */}
              {programmesOpen && (
                <div
                  onMouseLeave={() => setProgrammesOpen(false)}
                  className="absolute left-0 mt-1.5 w-64 rounded-xl bg-white shadow-xl border border-surface-border p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <Link
                    to="/programmes"
                    role="menuitem"
                    className="block px-3.5 py-2.5 rounded-lg text-sm font-semibold text-navy hover:bg-ivory hover:text-cobalt transition-colors border-b border-surface-border/50 mb-1"
                  >
                    Programmes Overview
                    <span className="block text-xs font-normal text-body-muted mt-0.5">Explore our range of learning pathways</span>
                  </Link>
                  <Link
                    to="/community-events"
                    role="menuitem"
                    className={`block px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive('/community-events')
                        ? 'bg-softblue text-cobalt'
                        : 'text-navy hover:bg-ivory hover:text-cobalt'
                    }`}
                  >
                    Community Events
                    <span className="block text-xs font-normal text-body-muted mt-0.5">Interactive live introductions</span>
                  </Link>
                  <Link
                    to="/group-programmes"
                    role="menuitem"
                    className={`block px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive('/group-programmes')
                        ? 'bg-softblue text-cobalt'
                        : 'text-navy hover:bg-ivory hover:text-cobalt'
                    }`}
                  >
                    Group Programmes
                    <span className="block text-xs font-normal text-body-muted mt-0.5">Recurring shared discovery cohorts</span>
                  </Link>
                  <Link
                    to="/personal-sessions"
                    role="menuitem"
                    className={`block px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive('/personal-sessions')
                        ? 'bg-softblue text-cobalt'
                        : 'text-navy hover:bg-ivory hover:text-cobalt'
                    }`}
                  >
                    Personal Sessions
                    <span className="block text-xs font-normal text-body-muted mt-0.5">Tailored 1-to-1 guided exploration</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/possibilities"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/possibilities')
                  ? 'text-cobalt bg-softblue/60'
                  : 'text-navy hover:text-cobalt hover:bg-ivory'
              }`}
            >
              Possibilities
            </Link>

            <Link
              to="/organisations"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/organisations')
                  ? 'text-cobalt bg-softblue/60'
                  : 'text-navy hover:text-cobalt hover:bg-ivory'
              }`}
            >
              For Organisations
            </Link>

            <Link
              to="/faq"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/faq')
                  ? 'text-cobalt bg-softblue/60'
                  : 'text-navy hover:text-cobalt hover:bg-ivory'
              }`}
            >
              FAQ
            </Link>
          </nav>

          {/* Right Header Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-cobalt' : 'text-navy hover:text-cobalt'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/programmes"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cobalt text-white text-sm font-semibold hover:bg-cobalt-hover shadow-sm hover:shadow transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2"
            >
              <span>Explore the Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-navy hover:text-cobalt hover:bg-ivory focus:outline-none focus:ring-2 focus:ring-cobalt"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open main menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[65px] z-40 bg-navy/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-menu"
            className="fixed inset-y-0 right-0 top-[65px] w-full max-w-sm bg-white shadow-2xl p-6 overflow-y-auto flex flex-col border-l border-surface-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-1.5 flex-grow">
              <Link
                to="/"
                className={`px-4 py-3 rounded-lg text-base font-semibold ${
                  isActive('/') ? 'bg-softblue text-cobalt' : 'text-navy hover:bg-ivory'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-4 py-3 rounded-lg text-base font-semibold ${
                  isActive('/about') ? 'bg-softblue text-cobalt' : 'text-navy hover:bg-ivory'
                }`}
              >
                About the Project
              </Link>

              {/* Mobile Programmes Collapsible */}
              <div className="py-2">
                <button
                  type="button"
                  onClick={() => setMobileProgrammesOpen(!mobileProgrammesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-semibold text-navy hover:bg-ivory"
                >
                  <span>Programmes</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${mobileProgrammesOpen ? 'rotate-180 text-cobalt' : 'text-gray-400'}`}
                  />
                </button>
                {mobileProgrammesOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1">
                    <Link
                      to="/programmes"
                      className="block px-3 py-2 rounded-lg text-sm text-body hover:text-cobalt hover:bg-ivory font-medium"
                    >
                      • All Programmes Overview
                    </Link>
                    <Link
                      to="/community-events"
                      className="block px-3 py-2 rounded-lg text-sm text-body hover:text-cobalt hover:bg-ivory"
                    >
                      • Community Events
                    </Link>
                    <Link
                      to="/group-programmes"
                      className="block px-3 py-2 rounded-lg text-sm text-body hover:text-cobalt hover:bg-ivory"
                    >
                      • Group Programmes
                    </Link>
                    <Link
                      to="/personal-sessions"
                      className="block px-3 py-2 rounded-lg text-sm text-body hover:text-cobalt hover:bg-ivory"
                    >
                      • Personal Sessions
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/possibilities"
                className={`px-4 py-3 rounded-lg text-base font-semibold ${
                  isActive('/possibilities') ? 'bg-softblue text-cobalt' : 'text-navy hover:bg-ivory'
                }`}
              >
                What AI Can Help You Do
              </Link>

              <Link
                to="/organisations"
                className={`px-4 py-3 rounded-lg text-base font-semibold ${
                  isActive('/organisations') ? 'bg-softblue text-cobalt' : 'text-navy hover:bg-ivory'
                }`}
              >
                For Organisations
              </Link>

              <Link
                to="/faq"
                className={`px-4 py-3 rounded-lg text-base font-semibold ${
                  isActive('/faq') ? 'bg-softblue text-cobalt' : 'text-navy hover:bg-ivory'
                }`}
              >
                Frequently Asked Questions
              </Link>

              <Link
                to="/contact"
                className={`px-4 py-3 rounded-lg text-base font-semibold ${
                  isActive('/contact') ? 'bg-softblue text-cobalt' : 'text-navy hover:bg-ivory'
                }`}
              >
                Contact Us
              </Link>
            </div>

            <div className="pt-6 border-t border-surface-border mt-auto">
              <Link
                to="/programmes"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-cobalt text-white font-semibold shadow hover:bg-cobalt-hover text-center"
              >
                <span>Explore the Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
