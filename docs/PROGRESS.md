# PROGRESS.md

## Estado actual

Landing (`srdejo-web`) funcional, corre en local vía `infra/start.ps1` bajo `portfolio.test` (estático, sin proceso propio — ver `infra/nginx/edge.conf`). Agregada a `infra/deploy.ps1` como proyecto `srdejo-web` (frontend estático, `NoBackend`), desplegable a `https://srdejo.com.co/` — nginx y SSL ya estaban configurados de antemano en `nolost-vps`. Falta correr el primer deploy real y verificar en producción.

Portfolio (`projects/portfolio`) migrado de HTML/CSS/JS vanilla a Angular en esta sesión (2026-08-23/24): las 3 rutas (`/`, `/preguntas-frecuentes`, `/steward-privacy`) compilan y prerenderizan correctamente, tanto en desarrollo como en producción (`ng build portfolio --configuration production`, bundle inicial ~336KB raw / ~93KB transferido, dentro de budget). Se corrió `npm run publish:portfolio` una vez para verificar el mecanismo de copia hacia `srdejo.github.io/` — el diff resultante se ve correcto (archivos vanilla viejos removidos, build Angular nuevo copiado), pero **todavía no se hizo commit/push** desde `srdejo.github.io/`, queda pendiente de revisión visual y confirmación del usuario.

Reposicionamiento a **Arquitecto de Software** (2026-09-07), a partir de los diseños `Landing Daniel Jimenez.dc.html` y `Hoja de Vida Arquitecto Daniel Jimenez v3 (2 paginas).dc.html` del proyecto de Claude Design:

- `projects/portfolio` actualizado: hero, sobre mí, cargos y bullets de experiencia, 4 tarjetas de habilidades (arquitectura e integraciones / seguridad y autenticación / plataforma y datos / cloud & devops), tarjeta de proyecto `srdejo.com.co`, certificaciones con fecha de aprobación + link al perfil de Platzi, idiomas B1 (Duolingo 62 pts) y bloque de aprendizaje.
- Hoja de vida descargable regenerada desde el diseño v3 (2 páginas, con foto, sin bloque salarial) como `Hoja-de-Vida-Daniel-Jimenez-Arquitecto-de-Software.pdf`; se eliminó `Hoja de Vida Daniel Jimenez - Julio 2026.pdf`.
- SEO: `<title>`/description reposicionados a "Arquitecto de Software", JSON-LD `@graph` con `ProfilePage` + `Person` (knowsAbout, alumniOf, sameAs), OG/Twitter completos con dimensiones y alt, `robots.txt` ya no bloquea el PDF, `sitemap.xml` incluye el PDF y usa fechas actuales.
- Rendimiento: `perfil-avatar-v3.jpg` era un PNG de 2,7 MB servido como `.jpg` — ahora es un JPEG real de 560px (~36 KB). Las fuentes (Barlow, Lora, Work Sans) se auto-hospedan en `assets/fonts/` vía `@font-face` en `styles.css`, en vez de la petición bloqueante a `fonts.googleapis.com`; eso además hace el build reproducible sin red.
- `scripts/publish-portfolio.mjs`: `.gitignore` y `.vscode/` agregados al set de archivos preservados — el script los estaba borrando del repo destino en cada publicación.

Se corrió `npm run build:portfolio` y `npm run publish:portfolio`; `srdejo.github.io/` queda listo para revisión y commit/push manual.

## Próximo paso recomendado

1. Revisar visualmente el portfolio con `ng serve portfolio` (las 3 rutas, dark/light, modal de "experiencia significativa", ambos formularios).
2. Si todo se ve bien, confirmar con el usuario y hacer commit/push desde `srdejo-web/srdejo.github.io/`.
3. Por separado: decidir y ejecutar el despliegue a producción de la landing `srdejo-web` (Etapa 2 de `docs/ROADMAP.md`).

## Bloqueos o problemas conocidos

_Convención: prefijar cada bloqueo con `[definición]` (el roadmap no da criterio de aceptación claro) o `[externo]` (credenciales, infraestructura, dependencia de otro equipo) para distinguir el origen._

Ninguno registrado en esta revisión.
