# CLAUDE.md

Reglas de trabajo para este repo (`srdejo-web`, descrito en `README.md`). Léelo antes de tocar código.

## Qué es este proyecto

Workspace Angular con **dos aplicaciones independientes**:

1. **`srdejo-web`** (proyecto raíz, `src/`) — landing pública de SRDEJO: presenta el servicio de desarrollo a medida (hoteles, joyerías, tiendas), con CTA a WhatsApp y link al portafolio. Sin backend, sin autenticación.
2. **`portfolio`** (`projects/portfolio/`) — el portafolio personal de Daniel Jiménez (home, `/preguntas-frecuentes`, `/steward-privacy`). Su build (`npm run build:portfolio`) se exporta al repo anidado `srdejo.github.io/` (ver más abajo) para publicarse en GitHub Pages.

Para más detalle ver, en este orden:
1. `docs/ARCHITECTURE.md` — cómo está construido hoy, incluyendo el mecanismo de publicación del portfolio.
2. `docs/DECISIONS.md` — decisiones tomadas.
3. `docs/ROADMAP.md` — qué falta, si algo.
4. `docs/PROGRESS.md` — estado actual.

## Stack

- Angular 22, standalone components, con `@angular/ssr` (SSR/prerender para SEO), workspace multi-proyecto (`ng generate application <nombre>`).
- Sin backend propio en ninguna de las dos apps — ambas se sirven como estáticas detrás de nginx, mismo patrón que `hotel`/`distriapp`/`consulting` en `infra/`.

## Repo anidado: `srdejo.github.io/`

`srdejo-web/srdejo.github.io/` es un checkout completo del repo `git@github.com:srdejo/srdejo.github.io.git`, con su propio `.git` — **no es parte de este repo** (está en `.gitignore`, tratado como carpeta opaca). Es el destino de publicación del proyecto `portfolio`:

```
npm run build:portfolio     # ng build portfolio → dist/portfolio/browser/
npm run publish:portfolio   # copia dist/portfolio/browser/ → srdejo.github.io/ (sin tocar .git)
```

El commit/push desde `srdejo.github.io/` se hace manualmente (o con confirmación explícita) — el script de publicación nunca hace commit ni push por su cuenta. Ver `scripts/publish-portfolio.mjs`.

**No editar `srdejo.github.io/` a mano.** Su código fuente real vive en `projects/portfolio/`; cualquier cambio manual se pierde en la próxima publicación.

## Convenciones de código

- Todo el contenido textual (landing y portfolio) vive como datos tipados en el componente correspondiente (`landing.ts`, `home.data.ts`, `faq.data.ts`) — no hardcodear texto suelto en el template si ya existe una lista similar.
- Español en todo el copy (es contenido orientado al usuario final, no código de dominio).
- Sin `template`/`styles` inline — siempre `templateUrl`/`styleUrl` separados.
- `projects/portfolio` usa un `styles.css` global (no encapsulado) para las páginas de contenido (`home`, `faq`) porque replica clases de un diseño ya hecho en HTML/CSS plano; `steward-privacy` sí usa estilos encapsulados por componente porque es un mini-sitio con su propio sistema de diseño, sin relación con el resto.
- No agregar backend, rutas adicionales ni estado global en `srdejo-web` (proyecto raíz) mientras el sitio siga siendo una landing de una sola página — YAGNI. `portfolio` sí tiene rutas (es multi-página por naturaleza).

## Proceso de trabajo

- Cambios de copy o de secciones: verificar que el build (`ng build` / `ng build portfolio`) sigue generando el prerender correctamente antes de darlo por terminado.
- Cambios al portfolio: no se consideran publicados hasta correr `npm run publish:portfolio` y confirmar el commit/push en `srdejo.github.io/` con el usuario.
- Actualizar `docs/PROGRESS.md` al cerrar una tarea del roadmap.
- Si un ítem del roadmap no tiene criterio de aceptación claro, no lo ejecutes a ciegas — regístralo como bloqueo de definición en `docs/PROGRESS.md` y pregunta al usuario en vez de asumir el alcance.
