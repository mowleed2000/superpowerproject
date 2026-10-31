import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  headline?: string;
  copy?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function CTASection({
  headline = "There's more you can do than you think.",
  copy = "Discover what AI could make possible for you or your community.",
  primaryButtonText = "Explore programmes",
  primaryButtonLink = "/programmes",
  secondaryButtonText = "Get in touch",
  secondaryButtonLink = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative bg-navy text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative subtle pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: `url('/images/brand/superpower-abstract-world.webp')` }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {headline}
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {copy}
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={primaryButtonLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-cobalt text-white font-semibold shadow-lg hover:bg-cobalt-hover hover:shadow-xl transition-all duration-200"
          >
            <span>{primaryButtonText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          {secondaryButtonText && secondaryButtonLink && (
            <Link
              to={secondaryButtonLink}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-sm border border-white/20 transition-all duration-200"
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
