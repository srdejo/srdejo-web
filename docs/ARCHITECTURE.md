# ARCHITECTURE.md

Estado real de la arquitectura de `srdejo-web`. No aspiracional.

## Visión general

Workspace Angular multi-proyecto con dos aplicaciones independientes, sin backend ni estado de servidor compartido:

```
src/app/                        ← proyecto raíz "srdejo-web" (landing de servicios)
├── app.ts
├── app.routes.server.ts        ← toda ruta ("**") se prerenderiza
└── landing/
    ├── landing.ts               ← datos de la landing (pasos, sectores, ventajas, precio)
    ├── landing.html
    └── landing.css

projects/portfolio/src/app/     ← proyecto "portfolio" (portafolio personal)
├── app.ts                       ← inicializa ThemeService, <router-outlet>
├── app.routes.ts                ← '', 'preguntas-frecuentes', 'steward-privacy'
├── app.routes.server.ts         ← toda ruta se prerenderiza
├── theme.service.ts             ← dark/light, signal + localStorage
├── contact-api.service.ts       ← POST a micasachurch.co/contact (compartido home/faq)
├── story.service.ts             ← estado del modal "experiencia significativa"
├── reveal.directive.ts          ← animación reveal-on-scroll (IntersectionObserver)
├── theme-toggle/, story-modal/  ← componentes compartidos entre home y faq
├── home/                        ← página principal (hero, experiencia, skills, proyectos, contacto)
├── faq/                         ← /preguntas-frecuentes
└── steward-privacy/             ← /steward-privacy (mini-sitio con su propio diseño)
```

## Renderizado

`RenderMode.Prerender` en ambos `app.routes.server.ts` — cada sitio se genera como HTML estático en build time, sin servidor Node corriendo en producción. `src/server.ts` / `projects/portfolio/src/server.ts` existen (scaffold de Angular SSR con Express) pero no se usan en el despliegue actual — se sirve `dist/<proyecto>/browser` directo desde nginx.

## Contenido

- `srdejo-web`: copy de la landing en `landing.ts` (`pasos`, `sectores`, `ventajas`, `etapasPrecio`).
- `portfolio`: copy en `home/home.data.ts` (experiencia profesional, extras) y `faq/faq.data.ts` (categorías de preguntas frecuentes). Skills, proyectos personales y formación quedan hardcodeados directo en `home.html` — son bloques únicos, no listas que se repitan con la misma forma.

Sin CMS ni fuente de datos externa en ninguno de los dos proyectos — cambiar contenido es editar el archivo de datos y regenerar el build correspondiente.

## Publicación del portfolio a `srdejo.github.io`

El proyecto `portfolio` no se despliega directo — se exporta a un repo anidado con `.git` propio:

```
srdejo-web/srdejo.github.io/    ← checkout de git@github.com:srdejo/srdejo.github.io.git
                                    (en .gitignore de srdejo-web, tratado como carpeta opaca)
```

Flujo: `npm run build:portfolio` (genera `dist/portfolio/browser/`) → `npm run publish:portfolio` (`scripts/publish-portfolio.mjs` copia ese `browser/` hacia `srdejo.github.io/`, borrando el contenido previo salvo `.git`/`.kiro`) → commit/push manual desde `srdejo.github.io/`. El script nunca hace commit ni push por su cuenta.

Contenido migrado desde el HTML/CSS/JS vanilla original: se descartó `payment-simulator.js` (código muerto, no enlazado desde ningún HTML) y las entradas de `robots.txt`/`sitemap.xml` que apuntaban a páginas inexistentes (`payment-simulator-pro.html`, `payment-system-simulator.html`). `steward-privacy` se migró como ruta Angular propia, con sus propios estilos encapsulados (no comparte diseño con el resto del portfolio). Detalle en `docs/DECISIONS.md`.

## Integraciones externas

- **WhatsApp**: link directo `wa.me` en ambos proyectos.
- **Contacto**: `portfolio` reutiliza el endpoint `https://micasachurch.co/contact` (el mismo `contact-api` de `nolost`) para el formulario de contacto y el de sugerencia de preguntas — así funcionaba el sitio original, se preservó tal cual.

## Deploy

Estático, sin proceso propio, en ambos proyectos. Servidos por nginx desde `dist/<proyecto>/browser`, mismo patrón que `hotel`/`distriapp`/`consulting`. En local, `infra/nginx/edge.conf` sirve `srdejo-web` bajo el dominio `portfolio.test` (nombre heredado de antes de que existiera el proyecto `portfolio` — puede confundir, ver `docs/ROADMAP.md`). El proyecto `portfolio` se publica por separado a GitHub Pages vía el repo anidado, no a través de `infra/`.
