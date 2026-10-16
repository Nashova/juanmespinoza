import { spawn, spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'assets', 'cv');
const SITE_PORT = 8098;
const DEBUG_PORT = 9334;

const CANDIDATES = [
  process.env.CHROME_PATH,
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
].filter(Boolean);

const browser = CANDIDATES.find((candidate) => existsSync(candidate));
if (!browser) {
  console.error('No encontré Edge/Chrome. Define CHROME_PATH con la ruta del ejecutable.');
  process.exit(1);
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const children = [];
const profile = mkdtempSync(path.join(tmpdir(), 'cv-pdf-'));

function stopAll() {
  for (const child of children) {
    if (process.platform === 'win32') spawnSync('taskkill', ['/pid', String(child.pid), '/T', '/F'], { stdio: 'ignore' });
    else child.kill('SIGKILL');
  }
  try {
    rmSync(profile, { recursive: true, force: true });
  } catch {
    /* el sistema libera el perfil temporal después */
  }
}

async function waitFor(url) {
  for (let i = 0; i < 80; i++) {
    try {
      if ((await fetch(url)).ok) return;
    } catch {
      /* aún no responde */
    }
    await sleep(250);
  }
  throw new Error(`No responde: ${url}`);
}

async function main() {
  mkdirSync(OUT, { recursive: true });

  children.push(spawn(process.execPath, [path.join(ROOT, 'serve.mjs')], { env: { ...process.env, PORT: String(SITE_PORT) }, stdio: 'ignore' }));
  await waitFor(`http://localhost:${SITE_PORT}/robots.txt`);

  children.push(
    spawn(browser, ['--headless=new', `--remote-debugging-port=${DEBUG_PORT}`, `--user-data-dir=${profile}`, '--no-first-run', '--disable-gpu', '--no-default-browser-check', 'about:blank'], { stdio: 'ignore' }),
  );
  await waitFor(`http://127.0.0.1:${DEBUG_PORT}/json/version`);

  const targets = await (await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/list`)).json();
  const ws = new WebSocket(targets.find((t) => t.type === 'page').webSocketDebuggerUrl);
  await new Promise((resolve) => (ws.onopen = resolve));

  let seq = 0;
  const pending = new Map();
  ws.onmessage = (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(JSON.stringify(message.error)));
      else resolve(message.result);
    }
  };
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const id = ++seq;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });

  await send('Page.enable');
  for (const lang of ['es', 'en']) {
    await send('Emulation.setEmulatedMedia', { media: 'print' });
    await send('Page.navigate', { url: `http://localhost:${SITE_PORT}/?lang=${lang}&print=1` });
    await sleep(2500);
    const pdf = await send('Page.printToPDF', {
      printBackground: true,
      preferCSSPageSize: true,
      paperWidth: 8.5,
      paperHeight: 11,
      displayHeaderFooter: false,
    });
    const file = path.join(OUT, `Juan-Manuel-Espinoza-CV-${lang.toUpperCase()}.pdf`);
    writeFileSync(file, Buffer.from(pdf.data, 'base64'));
    console.log(`PDF ${lang.toUpperCase()}: ${file} (${Math.round((pdf.data.length * 3) / 4 / 1024)} KB)`);
  }
  ws.close();
}

try {
  await main();
} finally {
  stopAll();
}
process.exit(0);
