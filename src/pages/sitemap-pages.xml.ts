/**
 * This Site's own page list, at `/sitemap-pages.xml` (the App's `/sitemap.xml`
 * links to it). Public pages only; blog posts are listed by the App itself.
 * Change PAGES whenever a page is added, renamed or removed.
 */
import {siteOrigin} from '../platform/api';

export const prerender = false; // answer per request, on the visitor's host

const PAGES = ['/', '/coaching', '/agency', '/toolkit', '/about', '/blog', '/contact'];

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET = ({request}: {request: Request}) => {
  const base = siteOrigin(request.url);
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${PAGES.map(
    p => `  <url><loc>${esc(new URL(p, base).href)}</loc></url>`
  ).join('\n')}\n</urlset>\n`;
  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
};
