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

## Portfolio como segundo proyecto Angular en el mismo workspace, no un repo aparte

**Decisión:** el portafolio personal (antes HTML/CSS/JS vanilla en `srdejo.github.io`) se reescribió como el proyecto `portfolio` dentro de este mismo workspace Angular (`ng generate application portfolio`), no como un repositorio Angular independiente.

**Por qué:** ambos sitios (landing de servicios y portfolio personal) son del mismo autor, comparten stack y convenciones, y Angular CLI soporta workspaces multi-proyecto de forma nativa (`angular.json` ya tenía `newProjectRoot: "projects"`). Mantenerlos en un solo repo evita duplicar configuración (tsconfig, linting, CI) para dos sitios chicos.

## Repo anidado con `.git` propio para publicar en GitHub Pages, no submodule

**Decisión:** `srdejo.github.io/` vive físicamente dentro de `srdejo-web/` como una carpeta con su propio `.git`, ignorada por el `.gitignore` del repo padre — no como git submodule.

**Por qué:** GitHub Pages exige que el contenido publicado esté en el repo `srdejo/srdejo.github.io` (por convención de nombre). Un submodule habría añadido complejidad (`git submodule update`, commits de puntero) sin beneficio real para este caso: nunca se versiona el estado del repo anidado desde `srdejo-web`, solo se genera y se publica por separado. Una carpeta anidada simple, con un script que copia el build y nada de magia git, es más fácil de razonar.

## Se descartó el simulador de pagos, no se migró

**Decisión:** `payment-simulator.js` (código muerto en el sitio original, no enlazado desde ningún HTML) no se migró a Angular. Se limpiaron las entradas de `robots.txt`/`sitemap.xml` que apuntaban a `payment-simulator-pro.html`/`payment-system-simulator.html`, páginas que nunca existieron como archivos.

**Por qué:** no aportaba valor real al portfolio y mantenerlo habría sido trabajo migrado sin uso — YAGNI. Si se quiere una demo interactiva de pagos en el futuro, se construye como una feature nueva, no reviviendo código muerto.

## Los `git push` los hace Daniel, no el agente (2026-09-08)

**Decisión:** las sesiones del agente trabajan en una rama `claude/<tema>-<fecha>` y hacen commit local, pero **no publican nada**. El `push` y el merge a `main` los hace Daniel desde su máquina. En el entorno del agente no se configuran credenciales de git: ni deploy key, ni token, ni llaves SSH.

**Por qué:** el entorno del agente es efímero — cada sesión arranca con un `$HOME` limpio, así que cualquier credencial tendría que quedar en texto plano dentro de la carpeta del workspace para sobrevivir de un día para otro. Y el push manual conserva un punto de revisión humano: el diff se ve antes de que entre a GitHub. Automatizarlo ahorra ~30 segundos al día a cambio de un secreto en disco; el cambio no compensa.

**Alternativas descartadas:**
- **Deploy key por repo.** Son 10 repos y una deploy key sirve para uno solo (GitHub no permite reusar la misma llave en varios). Además **no se puede limitar a un patrón de ramas**: lo que limita por rama es un *ruleset* del repositorio, no el tipo de credencial.
- **Token fino (fine-grained PAT)** con `Contents: Read and write` sobre los 10 repos. Sería la vía si algún día se automatiza —es más simple que 10 llaves— pero implica igualmente el token en disco, y exigiría proteger `main` con un ruleset para que el secreto no pueda escribir ahí.
- **GitHub App.** Lo más correcto (tokens de vida corta, sin secreto persistente) y demasiado montaje para lo que se gana.

**Consecuencia práctica:** que `git push` falle en el entorno del agente con `Host key verification failed` es el **comportamiento esperado**, no un problema por resolver ni un bloqueante que reportar. Cada sesión deja las ramas listas y los comandos de push en `RESUMEN-DIARIO.md`, en la raíz del workspace. Aplica a los 10 repos.
