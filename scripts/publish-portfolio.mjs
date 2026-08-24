// Copia el build de `projects/portfolio` (ver `npm run build:portfolio`) hacia el repo
// anidado `srdejo.github.io/`, que tiene su propio `.git` y se publica por separado en
// GitHub Pages. No hace commit ni push — eso queda a criterio de quien corre el script.
// Ver docs/ARCHITECTURE.md para el porqué de este mecanismo.

import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(root, 'dist', 'portfolio', 'browser');
const target = join(root, 'srdejo.github.io');

if (!existsSync(source)) {
  console.error(`No existe ${source}. Corré "npm run build:portfolio" primero.`);
  process.exit(1);
}

if (!existsSync(join(target, '.git'))) {
  console.error(`${target} no parece ser el repo srdejo.github.io (falta .git). Abortando.`);
  process.exit(1);
}

// Limpia el contenido actual del repo destino, preservando lo que no es parte del build
// publicado: .git, .kiro (steering local, gitignored), y la documentación de gobernanza
// (CLAUDE.md/docs/) que vive en este repo pero no la genera `ng build`.
const preserved = new Set(['.git', '.kiro', 'CLAUDE.md', 'docs']);
for (const entry of readdirSync(target)) {
  if (preserved.has(entry)) continue;
  rmSync(join(target, entry), { recursive: true, force: true });
}

mkdirSync(target, { recursive: true });
cpSync(source, target, { recursive: true });

console.log(`Publicado en ${target}. Revisá "git status" ahí antes de commitear/pushear.`);
