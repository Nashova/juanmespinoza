import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT ?? 8099);
const PUBLIC = /^\/(index\.html|404\.html|robots\.txt|sitemap\.xml|favicon\.svg|assets\/.+)$/;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
};

const SECURITY_HEADERS = {
  'Content-Security-Policy':
    "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'none'",
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

createServer(async (req, res) => {
  const { pathname } = new URL(req.url, 'http://localhost');
  const rel = pathname === '/' ? '/index.html' : decodeURIComponent(pathname);
  const file = path.join(ROOT, rel);
  const allowed = PUBLIC.test(rel) && file.startsWith(ROOT) && !rel.includes('..');

  try {
    if (!allowed) throw new Error('no publicable');
    const body = await readFile(file);
    res.writeHead(200, { ...SECURITY_HEADERS, 'Content-Type': MIME[path.extname(file)] ?? 'application/octet-stream', 'Cache-Control': 'no-cache' });
    res.end(body);
  } catch {
    const body = await readFile(path.join(ROOT, '404.html'));
    res.writeHead(404, { ...SECURITY_HEADERS, 'Content-Type': MIME['.html'] });
    res.end(body);
  }
}).listen(PORT, () => console.log(`Sirviendo ${ROOT} en http://localhost:${PORT}`));
