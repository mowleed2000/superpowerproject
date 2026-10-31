import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

export default function SEO({
  title = "The Superpower Project | Discover What You're Capable Of",
  description = "Discover practical, personal and social AI experiences designed to help people learn, create, explore and develop new capabilities.",
  canonical,
}: SEOProps) {
  useEffect(() => {
    document.title = title.includes("The Superpower Project") ? title : `${title} | The Superpower Project`;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      metaDesc.setAttribute('content', description);
      document.head.appendChild(metaDesc);
    }

    // Update canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (linkCanonical) {
        linkCanonical.setAttribute('href', canonical);
      } else {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        linkCanonical.setAttribute('href', canonical);
        document.head.appendChild(linkCanonical);
      }
    }
  }, [title, description, canonical]);

  return null;
}
