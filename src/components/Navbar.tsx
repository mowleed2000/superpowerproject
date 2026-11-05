import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { asset } from '../utils/asset';

const links = [
  { to: '/care-homes', label: 'Care homes' },
  { to: '/councils', label: 'Councils' },
  { to: '/personal-sessions', label: 'Individuals & families' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Insights' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="shrink-0" aria-label="The Superpower Project home">
          <img src={asset('/images/brand/superpower-project-logo.svg')} alt="The Superpower Project" className="h-10 w-auto" width="240" height="60" />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {links.map((link) => <Link key={link.to} to={link.to} className={`rounded-lg px-3 py-2 text-sm font-semibold ${location.pathname.startsWith(link.to) ? 'bg-blue-50 text-blue-800' : 'text-slate-700 hover:bg-slate-50 hover:text-blue-800'}`}>{link.label}</Link>)}
          <Link to="/contact" className="ml-2 rounded-full bg-blue-800 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-900">Talk with us</Link>
        </nav>
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} className="rounded-lg p-2 text-slate-800 hover:bg-slate-100 lg:hidden">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto flex max-w-7xl flex-col gap-1">{links.map((link) => <Link key={link.to} onClick={() => setOpen(false)} to={link.to} className="rounded-lg px-3 py-3 font-semibold text-slate-800 hover:bg-blue-50">{link.label}</Link>)}<Link onClick={() => setOpen(false)} to="/contact" className="mt-2 rounded-full bg-blue-800 px-5 py-3 text-center font-bold text-white">Talk with us</Link></div></nav>}
    </header>
  );
}
