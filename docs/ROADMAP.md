# ROADMAP.md

Estado: 🟡 landing y portfolio funcionales en desarrollo local, pendientes de publicar/desplegar.

## Etapa 1 — Landing (`srdejo-web`) 🟢

- [x] Componente `landing` con secciones: pasos, sectores atendidos, ventajas, precio/proceso
- [x] CTA a WhatsApp con mensaje pre-armado
- [x] Link a portafolio (`srdejo.github.io`)
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

- [ ] Revisar visualmente las 3 rutas con `ng serve portfolio` (dark/light, acordeón FAQ, modal de historia, formularios)
- [ ] Correr `npm run publish:portfolio`, revisar el diff en `srdejo.github.io/` y confirmar el commit/push con el usuario
- [ ] Verificar en producción (`https://srdejo.github.io/`) que GitHub Pages sirve el nuevo build correctamente

## Posibles mejoras futuras (no priorizadas)

- [ ] Formulario de contacto propio en la landing de `srdejo-web` en vez de solo WhatsApp, si se vuelve necesario
- [ ] Analítica básica de visitas
- [ ] Recomprimir `favicon.png` (1.15MB) y `perfil-avatar-v3.jpg` (2.79MB) del portfolio — quedaron migrados tal cual, sin optimizar
- [ ] Resolver el nombre `portfolio.test` en `infra/nginx/edge.conf` — hoy apunta a `srdejo-web` (la landing), no al proyecto `portfolio`, lo cual puede confundir. Requiere tocar `infra/` compartida, coordinar antes de cambiar.
