import { Link, Navigate, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { articles } from './blogData';

export default function BlogArticlePage() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);
  if (!article) return <Navigate to="/blog" replace />;
  return <><SEO title={`${article.title} | The Superpower Project`} description={article.intro} /><article className="bg-white"><header className="border-b border-slate-200 bg-slate-50"><div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20"><Link to="/blog" className="text-sm font-bold text-blue-800">← All insights</Link><p className="mt-8 text-sm font-bold uppercase tracking-widest text-blue-800">{article.category}</p><h1 className="mt-3 text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl">{article.title}</h1><p className="mt-5 text-xl leading-8 text-slate-600">{article.intro}</p></div></header><div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">{article.sections.map((section) => <section key={section.heading} className="mb-10"><h2 className="text-2xl font-bold text-slate-950">{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-lg leading-8 text-slate-700">{paragraph}</p>)}</section>)}<aside className="mt-12 rounded-3xl bg-blue-50 p-7"><h2 className="text-2xl font-bold text-slate-950">Keep the next step practical</h2><p className="mt-3 leading-7 text-slate-700">Explore a personal session or talk with us about a programme for your organisation.</p><div className="mt-5 flex flex-wrap gap-3"><Link to="/pricing" className="rounded-full bg-blue-800 px-5 py-3 font-bold text-white">See personal pricing</Link><Link to="/contact" className="rounded-full border border-blue-800 px-5 py-3 font-bold text-blue-900">Ask a question</Link></div></aside></div></article></>;
}
