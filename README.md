# juanmespinoza

CV interactivo de **Juan Manuel Espinoza Nevárez** (ES/EN) — [juanespinoza.lat](https://juanespinoza.lat) · [juanespinoza.site](https://juanespinoza.site)

Sitio estático, autoalojado en el homelab. Sin dependencias externas en tiempo de ejecución (CSS, fuentes, íconos y gráficas se sirven desde el propio dominio) y con una CSP estricta (`script-src 'self'`, sin estilos ni scripts inline).

## Estructura

```
index.html            HTML final (GENERADO por build.mjs; el contenido ES viene prerenderizado)
404.html, robots.txt, sitemap.xml, favicon.svg
assets/
  js/content.js       FUENTE DE VERDAD del contenido (ES y EN): experiencia, proyectos, habilidades y contacto
  js/render.js        funciones de render compartidas (build + navegador)
  js/app.js           comportamiento: idioma, menú, expandir/contraer, gráfica, impresión
  js/icons.js         GENERADO (Font Awesome Free) · js/chart.umd.min.js (Chart.js, carga diferida)
  css/styles.css      GENERADO por Tailwind desde src/input.css · css/noscript.css
  fonts/, img/og.png  Inter (variable) e imagen para compartir enlaces
  cv/                 GENERADOS: CV en PDF (ES y EN), curados para impresión (4 páginas)
src/                  template.html, input.css, og.html (fuente de la imagen og.png)
deploy/               nginx.conf, docker-compose.yml, deploy.sh, bifrost-publish.sh
tools/make-pdf.mjs    genera los PDF desde el propio sitio con Edge/Chrome headless (CHROME_PATH opcional)
build.mjs, serve.mjs  build y servidor local (con la misma CSP que producción)
```

## Desarrollo

```bash
npm install
npm run build     # iconos -> Tailwind -> index.html prerenderizado + sitemap
npm run pdf       # PDF del CV en assets/cv/ (ES y EN) usando el modo de impresión del sitio
npm run serve     # http://localhost:8099
```

Para cambiar texto, experiencia, habilidades, teléfono o enlaces: edita **`assets/js/content.js`** y corre `npm run build`. Nunca edites `index.html`, `icons.js` ni `styles.css` a mano.

Reglas del contenido: no publiques datos sensibles (domicilio, fecha de nacimiento, matrícula, créditos, sueldos, finanzas). El sitio solo expone correo, WhatsApp, LinkedIn y GitHub. `contact.github` apunta al perfil público de GitHub (LLM Dev Framework es público); si se deja vacío, el enlace desaparece de contacto, pie y datos estructurados.

Todo lo que afirma `content.js` debe poder verificarse (repos, pruebas, documentación). Los PDF se regeneran en cada `deploy.sh`; en impresión se muestran completos los puestos recientes (`printCompact: true` los resume) y se omiten secciones de relleno.

Imagen para compartir (1200×630), si cambias `src/og.html`:

```bash
msedge --headless=new --window-size=1200,630 --hide-scrollbars --screenshot=assets/img/og.png file:///RUTA/src/og.html
```

## Publicación

```
Navegador ──HTTPS──> Cloudflare (DNS + TLS) ──túnel "homelab"──> bifrost ──Tailscale──> sleipnir:8090 (nginx sin privilegios)
```

1. **Servidor** (`sleipnir`): `bash deploy/deploy.sh` compila y sincroniza `~/sites/juanespinoza/` y levanta el contenedor `cv-juanespinoza` (solo lectura, sin capacidades, healthcheck en `/healthz`). `www.*` redirige 301 al dominio sin `www`.
2. **Túnel** (`bifrost`, una sola vez): `bash ~/bifrost-publish.sh --dry-run` para revisar y `sudo bash ~/bifrost-publish.sh` para aplicar (agrega los 4 hostnames a `/etc/cloudflared/config.yml`; hace respaldo, valida y restaura si falla).
3. **DNS** (panel de Cloudflare, en cada zona `juanespinoza.lat` y `juanespinoza.site`): registros `CNAME` `@` y `www` hacia `293d930d-b5da-4767-981d-d42e1d361ee3.cfargotunnel.com`, con proxy activado. Recomendado: *SSL/TLS → Edge Certificates → Always Use HTTPS*.

El dominio canónico (SEO, Open Graph, sitemap) es `https://juanespinoza.lat/`; se cambia en `build.mjs` (`SITE_URL`).

## Accesibilidad e impresión

Probado con axe-core (0 violaciones, ES/EN, escritorio y móvil), navegación por teclado, `prefers-reduced-motion` y modo sin JavaScript (el contenido en español viene en el HTML). El botón *Imprimir / PDF* abre todas las secciones y oculta la navegación.

## Licencias de terceros

Inter (SIL OFL 1.1) · Font Awesome Free (íconos CC BY 4.0) · Chart.js (MIT) · Tailwind CSS (MIT).
