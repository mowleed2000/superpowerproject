import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { articles } from './blogData';

export default function BlogPage() {
  const [category, setCategory] = useState('All guides');
  const categories = ['All guides', ...new Set(articles.map((article) => article.category))];
  const visibleArticles = category === 'All guides'
    ? articles
    : articles.filter((article) => article.category === category);

  return <>
    <SEO title="AI & Ageing Insights | The Superpower Project" description="Practical, accessible guides to AI for older adults, families, care providers and councils." />
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-800">Ideas for everyday life</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold text-slate-950 sm:text-5xl">AI, explained with people in mind.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">Guides and ideas for older adults, families, care teams and local authorities. Practical steps, clear limits and no assumption that everyone wants the same thing.</p>
        <div className="mt-8 flex flex-wrap gap-2" aria-label="Filter guides by topic">
          {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition-colors ${category === item ? 'border-blue-800 bg-blue-800 text-white' : 'border-slate-200 text-slate-700 hover:border-blue-700 hover:text-blue-800'}`}>{item}</button>)}
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleArticles.map((article) => <article key={article.slug} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><p className="text-xs font-bold uppercase tracking-widest text-blue-800">{article.category}</p><h2 className="mt-3 text-xl font-bold leading-snug text-slate-950">{article.title}</h2><p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{article.intro}</p><Link className="mt-5 inline-flex font-bold text-blue-800 hover:text-blue-950" to={`/blog/${article.slug}`}>Read the guide <span aria-hidden="true" className="ml-2">→</span></Link></article>)}
        </div>
        <div className="mt-14 rounded-3xl bg-blue-50 p-7 sm:p-10">
          <h2 className="text-2xl font-bold text-slate-950">Want to explore what this could look like?</h2>
          <p className="mt-2 max-w-2xl text-slate-600">Choose the route that fits: personal support for an older adult, a programme conversation for a care home, or an early discussion with a council.</p>
          <div className="mt-5 flex flex-wrap gap-3"><Link to="/pricing" className="rounded-full bg-blue-800 px-5 py-3 font-bold text-white">Personal sessions & pricing</Link><Link to="/councils" className="rounded-full border border-blue-800 px-5 py-3 font-bold text-blue-900">For councils</Link></div>
        </div>
      </div>
    </section>
  </>;
}
