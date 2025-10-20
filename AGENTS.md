# Repository Guidelines

## Project Structure & Module Organization
This is a Next.js 14 app-router project. All UI lives in `app/` (`layout.tsx`, `page.tsx`, `globals.css`) with a single-page quiz flow and supporting screens embedded as client components. Shared assets belong in `public/` (create `public/assets/` for imagery or logos). Keep integration helpers or configuration snippets in `lib/` and `config/` if they emerge; avoid scattering utilities across the repo. Generated output (`.next/`) and dependencies (`node_modules/`) remain untracked per `.gitignore`.

## Build, Test, and Development Commands
- `npm install` — install dependencies, including `next`, `react`, and `lucide-react` icons.
- `npm run dev` — start the dev server (default `http://localhost:3000`); pass `--port 4000` for alternate ports when sandboxes block 3000.
- `npm run build` — compile the production bundle and surface build-time issues before deploying.
- `npm run start` — serve the production build locally; requires a free port.
- `npm run lint` — run the Next.js ESLint preset; CI should call this before merges.
Add new scripts to `package.json` with a short comment in this section.

## Coding Style & Naming Conventions
Use TypeScript with strict mode enabled in `tsconfig.json`. Favor functional React components and hooks. Maintain two-space indentation and Prettier defaults (triggered through `next lint`). Name React components with `PascalCase`, hooks with `useCamelCase`, utility modules as `kebab-case.ts`, and CSS classes in lowercase with hyphens. Keep CTA copy and quiz wording centralized in constants within `app/page.tsx` to simplify localization tweaks.

## Testing Guidelines
Automated tests are not wired yet. When introducing them, prefer colocated `*.test.tsx` or add an explicit `tests/` directory for broader flows. Mock external calls and timers to keep the sequential quiz deterministic. Document any manual QA scenarios (e.g., video CTA delay) inside pull requests until automated coverage exists.

## Commit & Pull Request Guidelines
Follow Conventional Commits (`feat:`, `fix:`, `chore:`) and scope messages by feature (e.g., `feat(quiz): add CTA footer`). Keep bodies concise, referencing issues with `#ID` when relevant. Pull requests should outline the user-facing change, list verification steps (`npm run lint`, manual device check), and note environment variables that must be set. Require at least one reviewer before merging to `master`.
