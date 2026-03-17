# Repository Guidelines

## Project Structure & Module Organization
Source lives under `src/`: `components/` contains reusable LCD, pocket-operator, and control widgets, `hooks/` keeps shared clock/animation logic, and `lib/` stores lightweight utilities (audio math, data mappers). Entry point is `index.html` → `src/main.tsx` → `src/App.tsx`. Global assets, SVGs, and audio live in `public/`. CSS Modules (e.g., `src/components/LCD/lcd.module.scss`) localize styling, so prefer co-locating styles beside the component they serve.

## Build, Test, and Development Commands
- `bun dev` — Runs Vite dev server with HMR. Useful while iterating on figure animators or sampler UI.
- `bun run build` — Production build to `dist/`; ensure it passes before opening a PR.
- `bun run preview` — Serves the optimized build locally.
- `bun run deploy` — Build and deploy to Cloudflare Pages.

## Coding Style & Naming Conventions
Use TypeScript everywhere. Follow 2-space indentation. Components are PascalCase (`PocketOperatorPanel`), hooks begin with `use` and camelCase (`useFigureAnimator`), and CSS Modules follow `*.module.scss`. Prefer refs + DOM class toggles for high-frequency animation to avoid React churn, and keep derived values memoized to limit rerenders.

## Testing Guidelines
Automated tests are not yet wired up, so rely on manual regression passes: verify transport timing, keypad presses, and LCD animations in Chrome + Safari. When adding tests, place them next to the feature (`componentName.test.tsx`) and run through `bun test` (add the script when introducing a framework such as Vitest). Document any new QA steps in the PR so others can reproduce.

## Commit & Pull Request Guidelines
Recent history favors concise, imperative subjects (e.g., `Use rAF beat clock and update AGENTS`). Reference issues or PR numbers in parentheses when relevant. For PRs, include: purpose, key implementation notes (especially around beat clock or animator changes), screenshots or screen recordings for UI tweaks, and a checklist of manual verifications. Keep branches rebased so deploy previews remain clean.

## Animation & Beat Clock Tips
`useFigureAnimator`, `useSpoolAnimator`, and `useCurrentBeat` own high-frequency updates; extend them with refs or subscription APIs instead of adding React state. Prefer partitioning beat data into integer index vs fractional phase, and drive keypad glows via DOM attributes so the React tree keeps its ~16 renders per bar goal.
