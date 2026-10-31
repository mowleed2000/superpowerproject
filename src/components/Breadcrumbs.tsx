import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`py-4 text-xs md:text-sm text-body-muted ${className}`}>
      <ol className="flex items-center space-x-2 flex-wrap">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-cobalt transition-colors focus-visible:ring-1 focus-visible:ring-cobalt rounded"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              {isLast || !item.href ? (
                <span className="text-navy font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="hover:text-cobalt transition-colors focus-visible:ring-1 focus-visible:ring-cobalt rounded"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
