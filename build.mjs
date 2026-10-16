import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const at = (...parts) => path.join(ROOT, ...parts);
const SITE_URL = 'https://juanespinoza.lat';

const FA_ICONS = {
  envelope: 'solid/envelope',
  'chevron-down': 'solid/chevron-down',
  print: 'solid/print',
  'graduation-cap': 'solid/graduation-cap',
  language: 'solid/language',
  'angles-down': 'solid/angles-down',
  'angles-up': 'solid/angles-up',
  bars: 'solid/bars',
  xmark: 'solid/xmark',
  lightbulb: 'solid/lightbulb',
  rocket: 'solid/rocket',
  users: 'solid/users',
  'arrows-rotate': 'solid/arrows-rotate',
  link: 'solid/link',
  download: 'solid/download',
  robot: 'solid/robot',
  whatsapp: 'brands/whatsapp',
  linkedin: 'brands/linkedin',
  github: 'brands/github',
};

function buildIcons() {
  const base = at('node_modules/@fortawesome/fontawesome-free/svgs');
  const icons = {};
  for (const [name, rel] of Object.entries(FA_ICONS)) {
    const svg = readFileSync(path.join(base, `${rel}.svg`), 'utf8');
    const vb = svg.match(/viewBox="([^"]+)"/)?.[1];
    const d = [...svg.matchAll(/<path[^>]*\sd="([^"]+)"/g)].map((m) => m[1]).join(' ');
    if (!vb || !d) throw new Error(`SVG inválido: ${rel}`);
    icons[name] = { vb, d };
  }
  const header =
    '// Generado por build.mjs — no editar a mano.\n// Iconos: Font Awesome Free 6 (CC BY 4.0) https://fontawesome.com/license/free\n';
  writeFileSync(at('assets/js/icons.js'), `${header}export const icons = ${JSON.stringify(icons)};\n`);
}

function buildCss() {
  execFileSync(
    process.execPath,
    [at('node_modules/tailwindcss/lib/cli.js'), '-i', at('src/input.css'), '-o', at('assets/css/styles.css'), '--minify'],
    { stdio: 'inherit' },
  );
}

function assetVersion() {
  const hash = createHash('sha1');
  const files = [
    'assets/css/styles.css',
    'assets/css/noscript.css',
    ...readdirSync(at('assets/js'))
      .filter((f) => f.endsWith('.js') && !f.startsWith('chart.'))
      .map((f) => `assets/js/${f}`),
  ];
  for (const file of files) hash.update(readFileSync(at(file)));
  return hash.digest('hex').slice(0, 8);
}

function fill(template, values) {
  const out = template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    if (!(key in values)) throw new Error(`Falta el valor de {{${key}}}`);
    return values[key];
  });
  if (/\{\{\w+\}\}/.test(out)) throw new Error('Quedaron marcadores sin reemplazar');
  return out;
}

async function buildHtml(version, updated) {
  const bust = `?t=${Date.now()}`;
  const { content, contact } = await import(pathToFileURL(at('assets/js/content.js')).href + bust);
  const { renderHeader, renderMain, renderFooter, yearsOfExperience, esc } = await import(
    pathToFileURL(at('assets/js/render.js')).href + bust
  );

  const lang = 'es';
  const c = content[lang];
  const ctx = { years: yearsOfExperience(new Date(`${updated}T12:00:00Z`)), contact, updated };

  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: c.hero.name,
    url: `${SITE_URL}/`,
    jobTitle: 'Ingeniero de Software y Arquitecto Empresarial',
    description: c.meta.description,
    sameAs: [contact.linkedin, contact.github].filter(Boolean),
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad Autónoma de Chihuahua' },
    knowsLanguage: ['es', 'en'],
    knowsAbout: ['Java', 'Spring Boot', 'JavaScript', 'TypeScript', 'React', 'Python', 'FastAPI', 'Rust', 'Oracle Database', 'PostgreSQL', 'Supabase', 'Docker', 'TOGAF', 'ArchiMate', 'Enterprise Architecture', 'Agile', 'AI-assisted software engineering'],
  };

  const html = fill(readFileSync(at('src/template.html'), 'utf8'), {
    lang,
    updated,
    title: esc(c.meta.title),
    description: esc(c.meta.description),
    canonical: `${SITE_URL}/`,
    ogImage: `${SITE_URL}/assets/img/og.png`,
    v: version,
    jsonld: JSON.stringify(jsonld).replace(/</g, '\\u003c'),
    skip: esc(c.ui.skip),
    header: renderHeader(c, lang),
    main: renderMain(c, ctx),
    footer: renderFooter(c, ctx, lang),
  });
  writeFileSync(at('index.html'), html);
}

function buildSitemap(updated) {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${SITE_URL}/</loc><lastmod>${updated}</lastmod></url>\n</urlset>\n`;
  writeFileSync(at('sitemap.xml'), xml);
}

const updated = process.env.BUILD_DATE ?? new Date().toISOString().slice(0, 10);
buildIcons();
buildCss();
const version = assetVersion();
await buildHtml(version, updated);
buildSitemap(updated);
console.log(`OK — versión de assets ${version}, fecha ${updated}`);
