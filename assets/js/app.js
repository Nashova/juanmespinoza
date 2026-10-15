import { content, contact } from './content.js';
import { renderHeader, renderMain, renderFooter, yearsOfExperience } from './render.js';

const LANGS = ['es', 'en'];
const STORAGE_KEY = 'cv-lang';
const ACCENT = '#D4A373';
const DB_COLORS = ['#D4A373', '#E1C3A5', '#A27C5A', '#C2B280', '#A4936A'];

const root = document.documentElement;
const header = document.getElementById('site-header');
const main = document.getElementById('contenido');
const footer = document.getElementById('site-footer');

const state = { lang: root.lang, filter: 'languages', chart: null, chartLib: null, io: null, spy: null };

function storedLang() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return LANGS.includes(value) ? value : null;
  } catch {
    return null;
  }
}

function initialLang() {
  const fromQuery = new URLSearchParams(location.search).get('lang');
  if (LANGS.includes(fromQuery)) return fromQuery;
  return storedLang() ?? ((navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es');
}

function context() {
  return { years: yearsOfExperience(), contact, updated: root.dataset.updated };
}

function setMeta(name, value) {
  document.querySelector(`meta[name="${name}"]`)?.setAttribute('content', value);
}

function loadChartLib() {
  if (window.Chart) return Promise.resolve();
  state.chartLib ??= new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = '/assets/js/chart.umd.min.js';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
  return state.chartLib;
}

function drawChart() {
  const canvas = document.getElementById('skills-chart');
  if (!canvas || !window.Chart) return;
  const { Chart } = window;
  const skills = content[state.lang].skills;
  const data = skills.data[state.filter];
  const isPolar = state.filter === 'databases';
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  state.chart?.destroy();
  canvas.setAttribute('aria-label', data.title);
  Chart.defaults.font.family = '"Inter Variable", Inter, system-ui, sans-serif';
  Chart.defaults.color = '#4b5563';

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: reduceMotion ? false : { duration: 600 },
    plugins: {
      legend: { display: isPolar, position: 'right', labels: { boxWidth: 12, font: { size: 12 } } },
      title: { display: true, text: data.title, font: { size: 16 }, padding: { bottom: 20 } },
      tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${isPolar ? ctx.parsed.r : ctx.parsed.x}/10` } },
    },
  };

  if (isPolar) {
    options.scales = {
      r: {
        min: 0,
        max: 10,
        angleLines: { color: '#e5e5e5' },
        grid: { color: '#e5e5e5' },
        pointLabels: { font: { size: 12 } },
        ticks: { stepSize: 2, backdropColor: 'rgba(253, 251, 248, 0.7)' },
      },
    };
  } else {
    options.indexAxis = 'y';
    options.scales = {
      x: {
        beginAtZero: true,
        max: 10,
        ticks: { stepSize: 1 },
        title: { display: true, text: skills.axisLabel, font: { size: 13, weight: 'bold' } },
      },
      y: { grid: { display: false } },
    };
  }

  state.chart = new Chart(canvas.getContext('2d'), {
    type: isPolar ? 'polarArea' : 'bar',
    data: {
      labels: data.labels,
      datasets: [
        {
          label: skills.axisLabel,
          data: data.values,
          backgroundColor: isPolar ? DB_COLORS : ACCENT,
          borderWidth: 1,
          borderColor: '#ffffff',
        },
      ],
    },
    options,
  });
}

function observeChart() {
  state.io?.disconnect();
  const target = main.querySelector('.chart-container');
  if (!target) return;
  state.io = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      state.io.disconnect();
      loadChartLib()
        .then(drawChart)
        .catch(() => main.querySelector('#habilidades')?.classList.add('chart-failed'));
    },
    { rootMargin: '300px' },
  );
  state.io.observe(target);
}

function observeSections() {
  state.spy?.disconnect();
  const links = [...header.querySelectorAll('.nav-link')];
  state.spy = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const link of links) {
          if (link.dataset.nav === entry.target.id) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        }
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  main.querySelectorAll('section[id]').forEach((section) => state.spy.observe(section));
}

function applyFilterButtons() {
  main.querySelectorAll('[data-filter]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.filter === state.filter));
  });
}

function render(lang) {
  state.chart?.destroy();
  state.chart = null;
  state.lang = lang;
  root.lang = lang;
  const c = content[lang];
  document.title = c.meta.title;
  setMeta('description', c.meta.description);
  header.innerHTML = renderHeader(c, lang);
  main.innerHTML = renderMain(c, context());
  footer.innerHTML = renderFooter(c, context(), lang);
  applyFilterButtons();
  observeSections();
  observeChart();
}

function hydrate() {
  const years = String(yearsOfExperience());
  const value = main.querySelector('.stat-value');
  if (value) value.textContent = `${years}+`;
  observeSections();
  observeChart();
}

function switchLanguage(lang, { persist }) {
  if (lang === state.lang) return;
  render(lang);
  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* almacenamiento no disponible */
    }
  }
  header.querySelector(`[data-lang="${lang}"]`)?.focus();
}

function setMenu(open) {
  const button = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!button || !menu) return;
  menu.classList.toggle('hidden', !open);
  button.setAttribute('aria-expanded', String(open));
  button.setAttribute('aria-label', open ? button.dataset.labelClose : button.dataset.labelOpen);
  button.querySelector('[data-menu-icon="open"]').classList.toggle('hidden', open);
  button.querySelector('[data-menu-icon="close"]').classList.toggle('hidden', !open);
}

function setAllDetails(open) {
  main.querySelectorAll('.tl-card').forEach((details) => {
    details.open = open;
  });
}

document.addEventListener('click', (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;

  const langButton = target.closest('[data-lang]');
  if (langButton) return switchLanguage(langButton.dataset.lang, { persist: true });

  const filterButton = target.closest('[data-filter]');
  if (filterButton) {
    state.filter = filterButton.dataset.filter;
    applyFilterButtons();
    return drawChart();
  }

  const action = target.closest('[data-action]')?.dataset.action;
  if (action === 'expand-all') return setAllDetails(true);
  if (action === 'collapse-all') return setAllDetails(false);
  if (action === 'print') return window.print();

  if (target.closest('#menu-btn')) {
    return setMenu(document.getElementById('menu-btn').getAttribute('aria-expanded') !== 'true');
  }
  if (target.closest('[data-mobile-link]')) setMenu(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});

let reopen = [];
window.addEventListener('beforeprint', () => {
  reopen = [...main.querySelectorAll('.tl-card')].map((details) => details.open);
  setAllDetails(true);
});
window.addEventListener('afterprint', () => {
  main.querySelectorAll('.tl-card').forEach((details, i) => {
    details.open = reopen[i] ?? false;
  });
});

const wanted = initialLang();
if (wanted === state.lang) hydrate();
else render(wanted);
