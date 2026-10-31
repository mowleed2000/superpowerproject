import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, CalendarCheck } from 'lucide-react';
import { asset } from '../utils/asset';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [careHomesOpen, setCareHomesOpen] = useState(false);
  const [personalOpen, setPersonalOpen] = useState(false);
  const [possibilitiesOpen, setPossibilitiesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const careHomesRef = useRef<HTMLDivElement>(null);
  const personalRef = useRef<HTMLDivElement>(null);
  const possibilitiesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCareHomesOpen(false);
    setPersonalOpen(false);
    setPossibilitiesOpen(false);
    setAboutOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (careHomesRef.current && !careHomesRef.current.contains(e.target as Node)) {
        setCareHomesOpen(false);
      }
      if (personalRef.current && !personalRef.current.contains(e.target as Node)) {
        setPersonalOpen(false);
      }
      if (possibilitiesRef.current && !possibilitiesRef.current.contains(e.target as Node)) {
        setPossibilitiesOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setCareHomesOpen(false);
        setPersonalOpen(false);
        setPossibilitiesOpen(false);
        setAboutOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
  const isCareHomesActive = ['/care-homes', '/care-home-programmes'].includes(location.pathname);
  const isPersonalActive = ['/personal-sessions', '/pricing', '/book-for-someone', '/families-and-carers'].includes(location.pathname);
  const isPossibilitiesActive = ['/possibilities', '/experiences'].includes(location.pathname);
  const isAboutActive = ['/about', '/how-it-works', '/responsible-ai'].includes(location.pathname);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-surface-border py-3'
          : 'bg-white border-b border-surface-border/70 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Brand Wordmark */}
          <Link
            to="/"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cobalt rounded-md flex-shrink-0"
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
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/') ? 'text-cobalt bg-softblue/60' : 'text-navy hover:text-cobalt hover:bg-ivory'
              }`}
            >
              Home
            </Link>

            {/* For Care Homes Dropdown */}
            <div className="relative" ref={careHomesRef}>
              <button
                type="button"
                onClick={() => setCareHomesOpen(!careHomesOpen)}
                onMouseEnter={() => setCareHomesOpen(true)}
                aria-expanded={careHomesOpen}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isCareHomesActive ? 'text-cobalt bg-softblue/60' : 'text-navy hover:text-cobalt hover:bg-ivory'
                }`}
              >
                <span>For Care Homes</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${careHomesOpen ? 'rotate-180 text-cobalt' : 'text-gray-400'}`} />
              </button>

              {careHomesOpen && (
                <div
                  onMouseLeave={() => setCareHomesOpen(false)}
                  className="absolute left-0 mt-1 w-64 rounded-2xl bg-white shadow-xl border border-surface-border p-2 z-50 animate-in fade-in slide-in-from-top-2"
                >
                  <Link
                    to="/care-homes"
                    className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-navy hover:bg-ivory hover:text-cobalt transition-colors"
                  >
                    Care Home Overview
                    <span className="block text-xs font-normal text-body-muted mt-0.5">Engaging resident activities &amp; discovery</span>
                  </Link>
                  <Link
                    to="/care-home-programmes"
                    className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-navy hover:bg-ivory hover:text-cobalt transition-colors"
                  >
                    Programme Formats
                    <span className="block text-xs font-normal text-body-muted mt-0.5">Discovery events, weekly &amp; bespoke programmes</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Personal Sessions Dropdown */}
            <div className="relative" ref={personalRef}>
              <button
                type="button"
                onClick={() => setPersonalOpen(!personalOpen)}
                onMouseEnter={() => setPersonalOpen(true)}
                aria-expanded={personalOpen}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isPersonalActive ? 'text-cobalt bg-softblue/60' : 'text-navy hover:text-cobalt hover:bg-ivory'
                }`}
              >
                <span>Personal Sessions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${personalOpen ? 'rotate-180 text-cobalt' : 'text-gray-400'}`} />
              </button>

              {personalOpen && (
                <div
                  onMouseLeave={() => setPersonalOpen(false)}
                  className="absolute left-0 mt-1 w-72 rounded-2xl bg-white shadow-xl border border-surface-border p-2 z-50 animate-in fade-in slide-in-from-top-2"
                >
                  <Link
                    to="/personal-sessions"
                    className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-navy hover:bg-ivory hover:text-cobalt transition-colors"
                  >
                    1-to-1 Personal Sessions
                    <span className="block text-xs font-normal text-body-muted mt-0.5">Patient guidance for older adults</span>
                  </Link>
                  <Link
                    to="/pricing"
                    className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-cobalt hover:bg-softblue transition-colors"
                  >
                    Pricing &amp; Booking
                    <span className="block text-xs font-normal text-body-muted mt-0.5">From £49 • Transparent session packages</span>
                  </Link>
                  <Link
                    to="/book-for-someone"
                    className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-navy hover:bg-ivory hover:text-cobalt transition-colors"
                  >
                    Book for a Parent or Relative
                    <span className="block text-xs font-normal text-body-muted mt-0.5">A thoughtful, stimulating experience</span>
                  </Link>
                  <Link
                    to="/families-and-carers"
                    className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-navy hover:bg-ivory hover:text-cobalt transition-colors"
                  >
                    For Families and Carers
                    <span className="block text-xs font-normal text-body-muted mt-0.5">Common questions, pacing &amp; support</span>
                  </Link>
                </div>
              )}
            </div>

            {/* What We Can Do Dropdown */}
            <div className="relative" ref={possibilitiesRef}>
              <button
                type="button"
                onClick={() => setPossibilitiesOpen(!possibilitiesOpen)}
                onMouseEnter={() => setPossibilitiesOpen(true)}
                aria-expanded={possibilitiesOpen}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isPossibilitiesActive ? 'text-cobalt bg-softblue/60' : 'text-navy hover:text-cobalt hover:bg-ivory'
                }`}
              >
                <span>What We Can Do</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${possibilitiesOpen ? 'rotate-180 text-cobalt' : 'text-gray-400'}`} />
              </button>

              {possibilitiesOpen && (
                <div
                  onMouseLeave={() => setPossibilitiesOpen(false)}
                  className="absolute left-0 mt-1 w-64 rounded-2xl bg-white shadow-xl border border-surface-border p-2 z-50 animate-in fade-in slide-in-from-top-2"
                >
                  <Link
                    to="/possibilities"
                    className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-navy hover:bg-ivory hover:text-cobalt transition-colors"
                  >
                    The 10 Possibilities
                    <span className="block text-xs font-normal text-body-muted mt-0.5">Photos, memories, creativity &amp; knowledge</span>
                  </Link>
                  <Link
                    to="/experiences"
                    className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-navy hover:bg-ivory hover:text-cobalt transition-colors"
                  >
                    Example Experiences
                    <span className="block text-xs font-normal text-body-muted mt-0.5">Realistic scenarios from real sessions</span>
                  </Link>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative" ref={aboutRef}>
              <button
                type="button"
                onClick={() => setAboutOpen(!aboutOpen)}
                onMouseEnter={() => setAboutOpen(true)}
                aria-expanded={aboutOpen}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  isAboutActive ? 'text-cobalt bg-softblue/60' : 'text-navy hover:text-cobalt hover:bg-ivory'
                }`}
              >
                <span>About</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutOpen ? 'rotate-180 text-cobalt' : 'text-gray-400'}`} />
              </button>

              {aboutOpen && (
                <div
                  onMouseLeave={() => setAboutOpen(false)}
                  className="absolute left-0 mt-1 w-60 rounded-2xl bg-white shadow-xl border border-surface-border p-2 z-50 animate-in fade-in slide-in-from-top-2"
                >
                  <Link
                    to="/about"
                    className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-navy hover:bg-ivory hover:text-cobalt transition-colors"
                  >
                    Our Philosophy &amp; Story
                  </Link>
                  <Link
                    to="/how-it-works"
                    className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-navy hover:bg-ivory hover:text-cobalt transition-colors"
                  >
                    How Delivery Works
                  </Link>
                  <Link
                    to="/responsible-ai"
                    className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-navy hover:bg-ivory hover:text-cobalt transition-colors"
                  >
                    Safeguarding &amp; Ethics
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/faq"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/faq') ? 'text-cobalt bg-softblue/60' : 'text-navy hover:text-cobalt hover:bg-ivory'
              }`}
            >
              FAQ
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                isActive('/contact') ? 'text-cobalt bg-softblue/60' : 'text-navy hover:text-cobalt hover:bg-ivory'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Header Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Secondary B2B entry link */}
            <Link
              to="/care-homes"
              className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors border ${
                isCareHomesActive
                  ? 'border-cobalt text-cobalt bg-softblue/40'
                  : 'border-surface-border text-navy hover:border-cobalt hover:text-cobalt bg-ivory'
              }`}
            >
              For Care Homes
            </Link>

            {/* Primary B2C Conversion Button */}
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cobalt text-white text-sm font-bold hover:bg-cobalt-hover shadow-sm hover:shadow transition-all duration-200"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book a Session</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center xl:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-navy hover:text-cobalt hover:bg-ivory focus:outline-none focus:ring-2 focus:ring-cobalt"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[65px] z-40 bg-navy/60 backdrop-blur-sm xl:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 top-[65px] w-full max-w-sm bg-white shadow-2xl p-6 overflow-y-auto flex flex-col border-l border-surface-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Primary Dual Action Badges */}
            <div className="grid grid-cols-2 gap-2 pb-4 mb-4 border-b border-surface-border">
              <Link
                to="/pricing"
                className="py-2.5 px-3 rounded-xl bg-cobalt text-white text-center text-xs font-bold"
              >
                Book a Session
              </Link>
              <Link
                to="/care-homes"
                className="py-2.5 px-3 rounded-xl bg-navy text-white text-center text-xs font-bold"
              >
                Care Homes
              </Link>
            </div>

            <div className="flex flex-col space-y-1 text-sm font-medium">
              <Link to="/" className="px-3 py-2.5 rounded-lg text-navy hover:bg-ivory font-bold">Home</Link>
              
              <div className="pt-2 pb-1 text-xs font-bold uppercase text-cobalt px-3">B2B Care Providers</div>
              <Link to="/care-homes" className="px-3 py-2 rounded-lg text-navy hover:bg-ivory pl-5">For Care Homes</Link>
              <Link to="/care-home-programmes" className="px-3 py-2 rounded-lg text-navy hover:bg-ivory pl-5">Care Home Programmes</Link>

              <div className="pt-2 pb-1 text-xs font-bold uppercase text-cobalt px-3">Personal &amp; Families</div>
              <Link to="/personal-sessions" className="px-3 py-2 rounded-lg text-navy hover:bg-ivory pl-5">Personal Sessions Overview</Link>
              <Link to="/pricing" className="px-3 py-2 rounded-lg font-bold text-cobalt hover:bg-softblue pl-5">Pricing &amp; Booking (From £49)</Link>
              <Link to="/book-for-someone" className="px-3 py-2 rounded-lg text-navy hover:bg-ivory pl-5">Book for a Parent or Relative</Link>
              <Link to="/families-and-carers" className="px-3 py-2 rounded-lg text-navy hover:bg-ivory pl-5">For Families &amp; Carers</Link>

              <div className="pt-2 pb-1 text-xs font-bold uppercase text-cobalt px-3">Discovery &amp; Experience</div>
              <Link to="/possibilities" className="px-3 py-2 rounded-lg text-navy hover:bg-ivory pl-5">What We Can Do (10 Areas)</Link>
              <Link to="/experiences" className="px-3 py-2 rounded-lg text-navy hover:bg-ivory pl-5">Example Experiences</Link>
              <Link to="/how-it-works" className="px-3 py-2 rounded-lg text-navy hover:bg-ivory pl-5">How Delivery Works</Link>

              <div className="pt-2 pb-1 text-xs font-bold uppercase text-cobalt px-3">Organisation &amp; Info</div>
              <Link to="/about" className="px-3 py-2 rounded-lg text-navy hover:bg-ivory pl-5">About the Project</Link>
              <Link to="/community-organisations" className="px-3 py-2 rounded-lg text-navy hover:bg-ivory pl-5">Community Organisations</Link>
              <Link to="/faq" className="px-3 py-2 rounded-lg text-navy hover:bg-ivory pl-5">FAQ</Link>
              <Link to="/contact" className="px-3 py-2 rounded-lg text-navy hover:bg-ivory pl-5">Contact Us</Link>
              <Link to="/responsible-ai" className="px-3 py-2 rounded-lg text-navy hover:bg-ivory pl-5">Responsible AI &amp; Safeguarding</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
