# PROGRESS.md

## Estado actual

Landing funcional, corre en local vía `infra/start.ps1` bajo `portfolio.test` (estático, sin proceso propio — ver `infra/nginx/edge.conf`). No se encontró referencia a un despliegue de producción en `infra/` (a diferencia de `hotel`, `distriapp`, `consulting`, que sí tienen entrada de deploy) — parece pendiente.

## Próximo paso recomendado

Decidir y ejecutar el despliegue a producción (Etapa 2 de `docs/ROADMAP.md`): elegir dominio, agregar entrada en `infra/deploy.ps1` si existe un mecanismo equivalente al de los otros proyectos estáticos, y documentar el resultado en `docs/DECISIONS.md`.
