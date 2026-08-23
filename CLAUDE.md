# CLAUDE.md

Reglas de trabajo para este repo (`srdejo-web`, descrito en `README.md`). Léelo antes de tocar código.

## Qué es este proyecto

Landing pública de SRDEJO — presenta el servicio de desarrollo a medida (hoteles, joyerías, tiendas), con CTA a WhatsApp y link al portafolio (`srdejo.github.io`). Sin backend, sin autenticación, un solo componente (`landing`).

Para más detalle ver, en este orden:
1. `docs/ARCHITECTURE.md` — cómo está construido hoy.
2. `docs/DECISIONS.md` — decisiones tomadas.
3. `docs/ROADMAP.md` — qué falta, si algo.
4. `docs/PROGRESS.md` — estado actual.

## Stack

- Angular 22, standalone components, con `@angular/ssr` (SSR/prerender para SEO).
- Sin backend propio — se sirve como estático (`dist/srdejo-web/browser`) detrás de nginx, mismo patrón que `hotel`/`distriapp`/`consulting` en `infra/`.

## Convenciones de código

- Todo el contenido de la landing (textos, secciones) vive como datos tipados dentro de `landing.ts` (`Paso`, `Sector`, `Ventaja`, `EtapaPrecio`) — no hardcodear texto suelto en el template si ya existe una lista similar.
- Español en todo el copy (es contenido orientado al usuario final, no código de dominio).
- Sin `template`/`styles` inline — siempre `templateUrl`/`styleUrl` separados.
- No agregar backend, rutas adicionales ni estado global mientras el sitio siga siendo una landing de una sola página — YAGNI.

## Proceso de trabajo

- Cambios de copy o de secciones: verificar que el build (`ng build`) sigue generando el prerender correctamente antes de darlo por terminado.
- Actualizar `docs/PROGRESS.md` al cerrar una tarea del roadmap.
