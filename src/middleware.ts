import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Matcher configuration prevents static assets from getting locale prefixes
  // which would cause 404 errors for CSS, JS, and other _next files
  matcher: [
    {
      // Exclude Next.js internals and static files from internationalization
      // This prevents routes like /en/_next/static/... which break asset loading
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      // Skip prefetch requests to avoid unnecessary middleware execution
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
    // Handle root route redirects to default locale
    '/',
  ],
};
