# srdejo-web

Landing pública de SRDEJO: desarrollo de software a medida (hoteles, joyerías, tiendas) usando IA como motor de desarrollo. Sin backend — CTA a WhatsApp y link al portafolio (`srdejo.github.io`).

## Stack

- Angular 22, standalone components, `@angular/ssr` con prerender en build time.
- Sin backend propio — se sirve como estático detrás de nginx.

## Cómo correr en local

```bash
npm install
ng serve
```

Se levanta junto con el resto del workspace vía `infra/start.ps1` (raíz del workspace), servido estático como `portfolio.test`.

## Build

```bash
ng build
```

Genera `dist/srdejo-web/browser`, que es lo que sirve nginx.

## Documentación

- `CLAUDE.md` — reglas de trabajo y convenciones de código (léelo antes de tocar código).
- `docs/ARCHITECTURE.md` — cómo está construido hoy.
- `docs/DECISIONS.md` — decisiones tomadas y por qué.
- `docs/ROADMAP.md` — qué falta (deploy a producción, principalmente).
- `docs/PROGRESS.md` — estado actual.
