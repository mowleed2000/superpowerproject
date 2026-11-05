import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// The 16 Core Pages
import HomePage from './pages/HomePage';
import CareHomesPage from './pages/CareHomesPage';
import CareHomeProgrammesPage from './pages/CareHomeProgrammesPage';
import PersonalSessionsPage from './pages/PersonalSessionsPage';
import PricingPage from './pages/PricingPage';
import BookForSomeonePage from './pages/BookForSomeonePage';
import FamiliesAndCarersPage from './pages/FamiliesAndCarersPage';
import PossibilitiesPage from './pages/PossibilitiesPage';
import ExperiencesPage from './pages/ExperiencesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import CommunityOrganisationsPage from './pages/CommunityOrganisationsPage';
import FAQPage from './pages/FAQPage';
import AboutPage from './pages/AboutPage';
import ResponsibleAIPage from './pages/ResponsibleAIPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import CouncilsPage from './pages/CouncilsPage';
import BlogPage from './pages/BlogPage';
import BlogArticlePage from './pages/BlogArticlePage';

function NotFoundPage() {
  return (
    <div className="flex-grow flex items-center justify-center py-24 px-4 bg-ivory">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-surface-border text-center space-y-4 shadow-sm">
        <span className="text-4xl font-extrabold text-cobalt">404</span>
        <h1 className="text-2xl font-bold text-navy">Page Not Found</h1>
        <p className="text-sm text-body-muted">
          The page you requested could not be located. You can explore our programmes or return to the homepage.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-cobalt text-white font-semibold hover:bg-cobalt-hover transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* The 16 Main Site Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/care-homes" element={<CareHomesPage />} />
            <Route path="/care-home-programmes" element={<CareHomeProgrammesPage />} />
            <Route path="/personal-sessions" element={<PersonalSessionsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/book-for-someone" element={<BookForSomeonePage />} />
            <Route path="/families-and-carers" element={<FamiliesAndCarersPage />} />
            <Route path="/possibilities" element={<PossibilitiesPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/community-organisations" element={<CommunityOrganisationsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/responsible-ai" element={<ResponsibleAIPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/councils" element={<CouncilsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />

            {/* Backwards Compatibility / Legacy Aliases */}
            <Route path="/responsible-use" element={<Navigate to="/responsible-ai" replace />} />
            <Route path="/organisations" element={<Navigate to="/community-organisations" replace />} />
            <Route path="/community-events" element={<Navigate to="/community-organisations" replace />} />
            <Route path="/group-programmes" element={<Navigate to="/care-home-programmes" replace />} />
            <Route path="/programmes" element={<Navigate to="/care-homes" replace />} />

            {/* Catch-all 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
