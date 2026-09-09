# ROADMAP.md

Estado: 🟡 landing y portfolio funcionales en desarrollo local, pendientes de publicar/desplegar.

## Etapa 1 — Landing (`srdejo-web`) 🟢

- [x] Componente `landing` con secciones: pasos, sectores atendidos, ventajas, precio/proceso
- [x] CTA a WhatsApp con mensaje pre-armado
- [x] Link a portafolio (`srdejo.github.io`)
- [x] Corregida la foto rota del hero de la landing — `avatarUrl` apuntaba a `perfil-avatar-v3.png` y el archivo publicado es `.jpg`, así que el `[ngSrc]` daba 404 y la landing salía sin foto. Encontrado y corregido 2026-09-08. **Verificado**: `ng build` en verde y las 6 referencias del bundle generado apuntan ya a `.jpg` (0 a `.png`).
- [x] Prerender configurado (`RenderMode.Prerender`)
- [x] Integrado a `infra/` local (`portfolio.test`, ver `infra/nginx/edge.conf`)

## Etapa 2 — Producción de la landing 🟡

- [x] Dominio final de producción confirmado: `https://srdejo.com.co/`
- [x] nginx + SSL ya configurados de antemano en `nolost-vps` (mismo patrón que `consultores`/`hotel`)
- [x] Entrada `srdejo-web` agregada a `infra/deploy.ps1` (frontend estático, sin backend — `NoBackend`)
- [ ] Correr el primer deploy real (`infra/deploy.ps1 -Projects srdejo-web`) y verificar `https://srdejo.com.co/` en producción

## Etapa 3 — Migración del portfolio a Angular (`projects/portfolio`) 🟢

- [x] Proyecto Angular generado (`ng generate application portfolio`), multi-proyecto en el mismo workspace
- [x] Ruta `/` — home migrada desde `index.html` (hero, sobre mí, experiencia, habilidades, proyectos, formación, contacto)
- [x] Ruta `/preguntas-frecuentes` — FAQ migrada, con acordeón por signals
- [x] Ruta `/steward-privacy` — migrada como componente Angular propio, estilos encapsulados
- [x] Theme toggle (dark/light) como `ThemeService` compartido
- [x] JSON-LD `Person` + meta/OG/Twitter por ruta, vía `Title`/`Meta` de Angular
- [x] Formulario de contacto y de sugerencia de preguntas, reusando `ContactApiService` → `micasachurch.co/contact`
- [x] `payment-simulator.js` descartado (código muerto); `robots.txt`/`sitemap.xml` limpiados de páginas inexistentes
- [x] Build de producción verificado (`ng build portfolio --configuration production`, dentro de budget)
- [x] Mecanismo de publicación: `npm run build:portfolio` + `npm run publish:portfolio` → copia a `srdejo.github.io/` (repo anidado)

## Etapa 4 — Primera publicación real del portfolio 🔴

**Objetivo**: el portfolio Angular queda publicado en `https://srdejo.github.io/` y servido
correctamente por GitHub Pages, con las 3 rutas revisadas antes de publicar. Los tres pasos
dependen de Daniel (revisión visual, confirmar el push del repo anidado y verificar producción),
no de una definición que falte — ver `BLOQUEANTES.md` en la raíz del workspace.

- [ ] Revisar visualmente las 3 rutas con `ng serve portfolio` (dark/light, acordeón FAQ, modal de historia, formularios)
- [ ] Correr `npm run publish:portfolio`, revisar el diff en `srdejo.github.io/` y confirmar el commit/push con el usuario
- [ ] Verificar en producción (`https://srdejo.github.io/`) que GitHub Pages sirve el nuevo build correctamente

## Posibles mejoras futuras (no priorizadas)

- [ ] Formulario de contacto propio en la landing de `srdejo-web` en vez de solo WhatsApp, si se vuelve necesario
- [ ] Analítica básica de visitas
- [x] Recomprimir `favicon.png` y `perfil-avatar-v3.jpg` del portfolio — hecho 2026-09-08. `favicon.png` pesaba **1.12 MB a 1254×1254** y se sirve como `icon` y `apple-touch-icon`, o sea que todo visitante bajaba 1.12 MB para un icono que nunca se dibuja a más de 180 px: se reescaló a **512×512** (el tamaño estándar máximo de icono de app, con margen para un icono PWA) y quedó en **150 KB, un 86.6% menos**. Sin cuantización de color ni recorte: solo reescalado Lanczos. `perfil-avatar-v3.jpg` ya no aplicaba — se reemplazó el 2026-09-07 con la landing nueva y hoy pesa 36 KB a 560×560. **Verificado**: la diferencia contra el original, renderizando ambos a los tamaños en que el navegador lo usa, es de máximo 5/255 por canal a 180 px y 1/255 a 32 px (imperceptible); `ng build portfolio --configuration production` en verde con las 3 rutas prerenderizadas y el `favicon.png` de 150 KB en `dist/`.
- [ ] Resolver el nombre `portfolio.test` en `infra/nginx/edge.conf` — hoy apunta a `srdejo-web` (la landing), no al proyecto `portfolio`, lo cual puede confundir. Requiere tocar `infra/` compartida, coordinar antes de cambiar.
