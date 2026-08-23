# DECISIONS.md

Decisiones tomadas en este repo y por qué. No incluye decisiones triviales.

## Prerender estático en vez de SSR en runtime

**Decisión:** todas las rutas se prerenderizan en build time (`RenderMode.Prerender`), aunque el scaffold de Angular incluye `src/server.ts` para SSR con Express.

**Por qué:** la landing es contenido estático que no cambia por request (sin auth, sin datos dinámicos). Prerender da el mismo beneficio de SEO que SSR en runtime sin necesitar un proceso Node corriendo en producción — se sirve como archivos estáticos desde nginx, igual que `hotel`/`distriapp`/`consulting`, reduciendo superficie operativa.

## Contenido como datos tipados en el componente, sin CMS

**Decisión:** el copy de la landing (pasos, sectores, ventajas, precios) vive en arrays TypeScript dentro de `landing.ts`, no en un CMS ni archivo de configuración externo.

**Por qué:** es una landing de una sola persona/marca personal con cambios de contenido poco frecuentes — un CMS agregaría infraestructura y complejidad sin beneficio real para este volumen de cambios.

## Avatar y portafolio servidos desde `srdejo.github.io`, no duplicados aquí

**Decisión:** el link de portafolio y la imagen de avatar apuntan a `srdejo.github.io` en vez de vivir en este repo.

**Por qué:** `srdejo.github.io` ya es la fuente de verdad del portafolio personal — evita mantener el mismo asset en dos lugares.
