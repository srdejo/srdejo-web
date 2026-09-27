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

Se publica en el entorno Docker local con `.\infra\local-deploy.ps1 -Project srdejo-web` (raíz del workspace): `srdejo-web` en `srdejo.test` y `portfolio` en `portfolio.test`.

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
