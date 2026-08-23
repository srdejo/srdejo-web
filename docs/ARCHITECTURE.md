# ARCHITECTURE.md

Estado real de la arquitectura de `srdejo-web`. No aspiracional.

## Visión general

Landing de una sola página, sin backend ni estado de aplicación. Un componente standalone (`Landing`) con todo su contenido tipado en el propio archivo.

```
src/app/
├── app.ts                    ← shell, monta la ruta activa
├── app.routes.server.ts      ← toda ruta ("**") se prerenderiza
└── landing/
    ├── landing.ts             ← datos de la landing (pasos, sectores, ventajas, precio)
    ├── landing.html
    └── landing.css
```

## Renderizado

`RenderMode.Prerender` en `app.routes.server.ts` — todo el sitio se genera como HTML estático en build time (`ng build`), sin servidor Node corriendo en producción para servir requests. `src/server.ts` existe (scaffold de Angular SSR con Express) pero no se usa en el despliegue actual — se sirve el `dist/srdejo-web/browser` directo desde nginx.

## Contenido

Todo el copy de la landing vive como arrays tipados en `landing.ts` (`pasos`, `sectores`, `ventajas`, `etapasPrecio`) — no hay CMS ni fuente de datos externa. Cambiar el contenido significa editar ese archivo y regenerar el build.

## Integraciones externas

- **WhatsApp**: link directo `wa.me` con mensaje pre-armado (`landing.ts`, `whatsappUrl`).
- **Portafolio**: link a `https://srdejo.github.io/`, y el avatar se sirve desde ahí (`https://srdejo.github.io/assets/landing/perfil-avatar-v3.png`) — no está duplicado en este repo.

## Deploy

Estático, sin proceso propio. Servido por nginx desde `dist/srdejo-web/browser`, mismo patrón que `hotel`/`distriapp`/`consulting`. En local: dominio `portfolio.test` (ver `infra/nginx/edge.conf` y `infra/README.md` en la raíz del workspace). Dominio de producción: ver `docs/DECISIONS.md`/`docs/PROGRESS.md` para el estado real si ya está desplegado.
