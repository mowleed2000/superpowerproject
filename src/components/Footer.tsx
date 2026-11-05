import { Link } from 'react-router-dom';
import { asset } from '../utils/asset';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return <footer className="border-t border-slate-200 bg-white text-slate-700">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
      <div className="space-y-4"><Link to="/" aria-label="The Superpower Project home"><img src={asset('/images/brand/superpower-project-logo.svg')} alt="The Superpower Project" className="h-10 w-auto" width="220" height="56" /></Link><p className="max-w-sm text-sm leading-6 text-slate-600">Helping older adults understand AI, try it for themselves and bring useful skills into everyday life.</p></div>
      <div><h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-900">For organisations</h2><ul className="space-y-2 text-sm"><li><Link to="/care-homes" className="hover:text-blue-800">Care homes</Link></li><li><Link to="/councils" className="hover:text-blue-800">Councils & local authorities</Link></li><li><Link to="/community-organisations" className="hover:text-blue-800">Community organisations</Link></li></ul></div>
      <div><h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-900">For individuals</h2><ul className="space-y-2 text-sm"><li><Link to="/personal-sessions" className="hover:text-blue-800">Personal sessions</Link></li><li><Link to="/families-and-carers" className="hover:text-blue-800">Families & carers</Link></li><li><Link to="/pricing" className="hover:text-blue-800">Pricing</Link></li></ul></div>
      <div><h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-900">Explore</h2><ul className="space-y-2 text-sm"><li><Link to="/blog" className="hover:text-blue-800">AI & ageing insights</Link></li><li><Link to="/responsible-ai" className="hover:text-blue-800">Responsible AI</Link></li><li><Link to="/about" className="hover:text-blue-800">About</Link></li><li><Link to="/contact" className="hover:text-blue-800">Contact</Link></li><li><Link to="/privacy" className="hover:text-blue-800">Privacy</Link></li></ul></div>
    </div>
    <div className="border-t border-slate-200 px-4 py-5 text-center text-xs text-slate-500">© {currentYear} The Superpower Project. Service details are confirmed individually before any booking or programme begins.</div>
  </footer>;
}
