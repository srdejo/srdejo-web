# PROGRESS.md

## Estado actual

Landing (`srdejo-web`) funcional, corre en local vía `infra/start.ps1` bajo `portfolio.test` (estático, sin proceso propio — ver `infra/nginx/edge.conf`). Agregada a `infra/deploy.ps1` como proyecto `srdejo-web` (frontend estático, `NoBackend`), desplegable a `https://srdejo.com.co/` — nginx y SSL ya estaban configurados de antemano en `nolost-vps`. Falta correr el primer deploy real y verificar en producción.

Portfolio (`projects/portfolio`) migrado de HTML/CSS/JS vanilla a Angular en esta sesión (2026-08-23/24): las 3 rutas (`/`, `/preguntas-frecuentes`, `/steward-privacy`) compilan y prerenderizan correctamente, tanto en desarrollo como en producción (`ng build portfolio --configuration production`, bundle inicial ~336KB raw / ~93KB transferido, dentro de budget). Se corrió `npm run publish:portfolio` una vez para verificar el mecanismo de copia hacia `srdejo.github.io/` — el diff resultante se ve correcto (archivos vanilla viejos removidos, build Angular nuevo copiado), pero **todavía no se hizo commit/push** desde `srdejo.github.io/`, queda pendiente de revisión visual y confirmación del usuario.

## Próximo paso recomendado

1. Revisar visualmente el portfolio con `ng serve portfolio` (las 3 rutas, dark/light, modal de "experiencia significativa", ambos formularios).
2. Si todo se ve bien, confirmar con el usuario y hacer commit/push desde `srdejo-web/srdejo.github.io/`.
3. Por separado: decidir y ejecutar el despliegue a producción de la landing `srdejo-web` (Etapa 2 de `docs/ROADMAP.md`).
