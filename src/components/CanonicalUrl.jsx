import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const canonicalRoutes = new Set([
  '/',
  '/services',
  '/about',
  '/blog',
  '/contacts',
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-policy',
]);

export default function CanonicalUrl() {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalPath = canonicalRoutes.has(pathname) ? pathname : '/';
    const canonicalHref = `https://nomadssecure.com${canonicalPath === '/' ? '/' : canonicalPath}`;
    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', canonicalHref);
  }, [pathname]);

  return null;
}
