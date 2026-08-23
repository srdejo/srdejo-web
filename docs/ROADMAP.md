# ROADMAP.md

Estado: 🟡 landing funcional en desarrollo local, pendiente de despliegue a producción.

## Etapa 1 — Landing 🟢

- [x] Componente `landing` con secciones: pasos, sectores atendidos, ventajas, precio/proceso
- [x] CTA a WhatsApp con mensaje pre-armado
- [x] Link a portafolio (`srdejo.github.io`)
- [x] Prerender configurado (`RenderMode.Prerender`)
- [x] Integrado a `infra/` local (`portfolio.test`, ver `infra/nginx/edge.conf`)

## Etapa 2 — Producción 🔴

- [ ] Deploy a un dominio real (nginx + systemd o solo estático, según se decida) — no está desplegado todavía, ver `docs/PROGRESS.md`
- [ ] Confirmar dominio final de producción

## Posibles mejoras futuras (no priorizadas)

- [ ] Formulario de contacto propio en vez de solo WhatsApp, si se vuelve necesario
- [ ] Analítica básica de visitas
