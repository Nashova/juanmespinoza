import { icons } from './icons.js';
import { careerStart } from './content.js';

export const esc = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export function icon(name, cls = 'h-4 w-4') {
  const found = icons[name];
  if (!found) throw new Error(`Icono desconocido: ${name}`);
  return `<svg class="${cls}" viewBox="${found.vb}" fill="currentColor" aria-hidden="true" focusable="false"><path d="${found.d}"/></svg>`;
}

export function yearsOfExperience(now = new Date()) {
  const anniversary = Date.UTC(now.getUTCFullYear(), careerStart.month - 1, 1);
  const years = now.getUTCFullYear() - careerStart.year;
  return now.getTime() < anniversary ? years - 1 : years;
}

export function formatUpdated(isoDate, lang) {
  const date = new Date(`${isoDate}T12:00:00Z`);
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-MX' : 'en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

const SECTIONS = ['inicio', 'trayectoria', 'habilidades', 'fortalezas', 'formacion'];

export function renderHeader(c, lang) {
  const labels = [c.ui.nav.home, c.ui.nav.career, c.ui.nav.skills, c.ui.nav.strengths, c.ui.nav.education];
  const desktop = SECTIONS.map(
    (id, i) => `<a href="#${id}" class="nav-link" data-nav="${id}">${esc(labels[i])}</a>`,
  ).join('');
  const mobile = SECTIONS.map(
    (id, i) =>
      `<a href="#${id}" class="mobile-link" data-mobile-link>${esc(labels[i])}</a>`,
  ).join('');
  const langButton = (code) =>
    `<button type="button" class="lang-btn" data-lang="${code}" lang="${code}" aria-pressed="${lang === code}">${code.toUpperCase()}</button>`;

  return `
    <nav class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6" aria-label="${esc(c.ui.navAria)}">
      <a href="#inicio" class="logo" aria-label="JMEN — ${esc(c.hero.name)}"><span class="text-accent-dark">J</span>M<span class="text-accent-dark">E</span>N</a>
      <div class="hidden items-center gap-8 md:flex">${desktop}</div>
      <div class="flex items-center gap-2">
        <div class="lang-switch" role="group" aria-label="${esc(c.ui.langLabel)}">${langButton('es')}${langButton('en')}</div>
        <button type="button" id="menu-btn" class="menu-btn md:hidden" aria-expanded="false" aria-controls="mobile-menu" aria-label="${esc(c.ui.menu)}" data-label-open="${esc(c.ui.menu)}" data-label-close="${esc(c.ui.closeMenu)}">
          <span data-menu-icon="open">${icon('bars', 'h-5 w-5')}</span>
          <span data-menu-icon="close" class="hidden">${icon('xmark', 'h-5 w-5')}</span>
        </button>
      </div>
    </nav>
    <div id="mobile-menu" class="hidden border-t border-black/5 bg-white md:hidden">
      <div class="mx-auto max-w-6xl space-y-1 px-4 py-3 sm:px-6">${mobile}</div>
    </div>`;
}

function renderHero(c, ctx) {
  const k = ctx.contact;
  const external = (href) => `href="${esc(href)}" target="_blank" rel="noopener noreferrer"`;
  const sr = `<span class="sr-only"> ${esc(c.ui.newTab)}</span>`;
  const chips = [
    `<a class="chip" href="mailto:${esc(k.email)}">${icon('envelope')}<span>${esc(k.email)}</span></a>`,
    `<a class="chip" ${external(`https://wa.me/${k.whatsapp}`)}>${icon('whatsapp')}<span>WhatsApp ${esc(k.phoneDisplay)}</span>${sr}</a>`,
    `<a class="chip" ${external(k.linkedin)}>${icon('linkedin')}<span>LinkedIn</span>${sr}</a>`,
    `<a class="chip" ${external(k.github)}>${icon('github')}<span>GitHub</span>${sr}</a>`,
  ].join('');
  const stats = c.hero.stats
    .map(
      (s) => `
        <div class="stat">
          <p class="stat-value">${esc(s.value.replace('{years}', ctx.years))}</p>
          <p class="stat-label">${esc(s.label)}</p>
        </div>`,
    )
    .join('');

  return `
    <section id="inicio" class="hero" aria-labelledby="hero-name">
      <div class="w-full">
        <h1 id="hero-name" class="hero-name">${esc(c.hero.name)}</h1>
        <p class="hero-title">${esc(c.hero.title)}</p>
        <div class="mb-8 flex flex-wrap gap-3" role="group" aria-label="${esc(c.ui.contactAria)}">${chips}</div>
        <p class="hero-summary">${esc(c.hero.summary)}</p>
        <div class="mb-12 flex flex-wrap gap-3">
          <a href="#trayectoria" class="btn btn-primary">${esc(c.ui.viewCareer)}</a>
          <button type="button" class="btn btn-secondary" data-action="print">${icon('print')}<span>${esc(c.ui.print)}</span></button>
        </div>
        <div class="grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">${stats}</div>
      </div>
    </section>`;
}

function renderCareer(c) {
  const items = c.career.items
    .map(
      (job, i) => `
        <li class="relative">
          <span class="tl-dot" aria-hidden="true"></span>
          <details class="tl-card"${i === 0 ? ' open' : ''}>
            <summary class="tl-summary">
              <span class="tl-period">${esc(job.period)}</span>
              <h3 class="tl-role">${esc(job.role)}</h3>
              <span class="tl-company">${esc(job.company)}</span>
              <span class="tl-text">${esc(job.summary)}</span>
              ${icon('chevron-down', 'tl-chevron h-4 w-4')}
            </summary>
            <div class="tl-body">
              <ul class="tl-list">${job.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
            </div>
          </details>
        </li>`,
    )
    .join('');

  return `
    <section id="trayectoria" class="section" aria-labelledby="career-title">
      <h2 id="career-title" class="section-title">${esc(c.career.title)}</h2>
      <p class="section-subtitle">${esc(c.career.subtitle)}</p>
      <div class="no-print mx-auto mb-8 flex max-w-3xl justify-end gap-2">
        <button type="button" class="btn btn-ghost" data-action="expand-all">${icon('angles-down')}<span>${esc(c.ui.expandAll)}</span></button>
        <button type="button" class="btn btn-ghost" data-action="collapse-all">${icon('angles-up')}<span>${esc(c.ui.collapseAll)}</span></button>
      </div>
      <ol class="timeline">${items}</ol>
    </section>`;
}

function renderSkills(c) {
  const s = c.skills;
  const buttons = Object.keys(s.filters)
    .map(
      (key, i) =>
        `<button type="button" class="filter-btn" data-filter="${key}" aria-pressed="${i === 0}">${esc(s.filters[key])}</button>`,
    )
    .join('');
  const tables = Object.entries(s.data)
    .map(
      ([key, d]) => `
        <table class="skills-table" data-table="${key}">
          <caption>${esc(d.title)}</caption>
          <thead><tr><th scope="col">${esc(s.colSkill)}</th><th scope="col">${esc(s.colLevel)}</th></tr></thead>
          <tbody>${d.labels.map((label, i) => `<tr><th scope="row">${esc(label)}</th><td>${d.values[i]}/10</td></tr>`).join('')}</tbody>
        </table>`,
    )
    .join('');
  const first = Object.values(s.data)[0];

  return `
    <section id="habilidades" class="section" aria-labelledby="skills-title">
      <h2 id="skills-title" class="section-title">${esc(s.title)}</h2>
      <p class="section-subtitle">${esc(s.subtitle)}</p>
      <div class="no-print mb-10 flex flex-wrap justify-center gap-3" role="group" aria-label="${esc(s.filterLabel)}">${buttons}</div>
      <div class="chart-card no-print">
        <div class="chart-container"><canvas id="skills-chart" role="img" aria-label="${esc(first.title)}"></canvas></div>
      </div>
      <div class="skills-tables">${tables}</div>
    </section>`;
}

function renderStrengths(c) {
  const cards = c.strengths.cards
    .map(
      (card) => `
        <article class="strength-card">
          <div class="strength-icon">${icon(card.icon, 'h-6 w-6')}</div>
          <h3 class="strength-title">${esc(card.title)}</h3>
          <p class="strength-text">${esc(card.text)}</p>
        </article>`,
    )
    .join('');

  return `
    <section id="fortalezas" class="section" aria-labelledby="strengths-title">
      <h2 id="strengths-title" class="section-title">${esc(c.strengths.title)}</h2>
      <p class="section-subtitle">${esc(c.strengths.subtitle)}</p>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">${cards}</div>
    </section>`;
}

function renderEducation(c) {
  const e = c.education;
  const degrees = e.degrees
    .map(
      (d) => `
        <li class="edu-item">
          <p class="edu-main">${esc(d.title)}</p>
          <p class="edu-sub">${esc(d.school)}</p>
          <p class="edu-period">${esc(d.period)}</p>
        </li>`,
    )
    .join('');
  const languages = e.languages
    .map(
      (l) => `
        <li class="edu-item">
          <p class="edu-main">${esc(l.name)}</p>
          <p class="edu-sub">${esc(l.level)}</p>
        </li>`,
    )
    .join('');

  return `
    <section id="formacion" class="section" aria-labelledby="education-title">
      <h2 id="education-title" class="section-title">${esc(e.title)}</h2>
      <div class="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
        <div class="edu-card">
          <h3 class="edu-heading">${icon('graduation-cap', 'h-5 w-5')}<span>${esc(e.degreesTitle)}</span></h3>
          <ul class="space-y-4">${degrees}</ul>
        </div>
        <div class="edu-card">
          <h3 class="edu-heading">${icon('language', 'h-5 w-5')}<span>${esc(e.languagesTitle)}</span></h3>
          <ul class="space-y-4">${languages}</ul>
        </div>
      </div>
    </section>`;
}

export function renderMain(c, ctx) {
  return [renderHero(c, ctx), renderCareer(c), renderSkills(c), renderStrengths(c), renderEducation(c)].join('\n');
}

export function renderFooter(c, ctx, lang) {
  const year = ctx.updated.slice(0, 4);
  const external = (href) => `href="${esc(href)}" target="_blank" rel="noopener noreferrer"`;
  return `
    <div class="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6">
      <p class="font-semibold">© ${esc(year)} ${esc(c.hero.name)}</p>
      <p class="mt-1 text-sm text-gray-300">${esc(c.footer.updated)}: ${esc(formatUpdated(ctx.updated, lang))}</p>
      <p class="no-print mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
        <a class="footer-link" ${external(ctx.contact.linkedin)}>LinkedIn<span class="sr-only"> ${esc(c.ui.newTab)}</span></a>
        <a class="footer-link" ${external(ctx.contact.github)}>GitHub<span class="sr-only"> ${esc(c.ui.newTab)}</span></a>
        <button type="button" class="footer-link" data-action="print">${esc(c.ui.print)}</button>
      </p>
      <p class="mt-6 text-xs text-gray-400">${esc(c.footer.credits)}</p>
    </div>`;
}
