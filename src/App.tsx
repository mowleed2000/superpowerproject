import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgrammesPage from './pages/ProgrammesPage';
import CommunityEventsPage from './pages/CommunityEventsPage';
import GroupProgrammesPage from './pages/GroupProgrammesPage';
import PersonalSessionsPage from './pages/PersonalSessionsPage';
import OrganisationsPage from './pages/OrganisationsPage';
import PossibilitiesPage from './pages/PossibilitiesPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import ResponsibleUsePage from './pages/ResponsibleUsePage';

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
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programmes" element={<ProgrammesPage />} />
            <Route path="/community-events" element={<CommunityEventsPage />} />
            <Route path="/group-programmes" element={<GroupProgrammesPage />} />
            <Route path="/personal-sessions" element={<PersonalSessionsPage />} />
            <Route path="/organisations" element={<OrganisationsPage />} />
            <Route path="/possibilities" element={<PossibilitiesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/responsible-use" element={<ResponsibleUsePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
