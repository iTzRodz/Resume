# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server at localhost:5173
npm run build      # type-check + production build → dist/
npm run preview    # serve production build locally
npm run lint       # run ESLint
npm run lint:fix   # run ESLint and auto-fix
```

## Architecture

Static portfolio landing page — no backend, no routing, no auth.

**Stack:** Vite + React 18 + TypeScript + Tailwind CSS v3

### Content layer (`src/data/`)

All page content lives here as typed data files — not hardcoded in components:

- `experience.ts` — work history. `endDate: null` means current role; duration is calculated automatically with `new Date()`. Set `endDate: 'YYYY-MM'` when leaving a company — everything updates automatically. The `isCurrent` field does not exist; derive it from `endDate === null`.
- `skills.ts` — tech icons grouped by `Frontend | Backend | Tooling` category.
- `projects.ts` — project cards with optional `thumbnail`, `githubUrl`, and `liveUrl`.

### Design tokens

CSS custom properties are defined in `src/index.css` and mirrored in `tailwind.config.js`. Always use tokens instead of raw hex values. Key variables: `--color-accent`, `--color-bg-base/surface/elevated/overlay`, `--color-text-primary/secondary/muted`.

### Hover interactions

All hover effects are CSS-only classes defined in `src/index.css` — never use `onMouseEnter`/`onMouseLeave` to mutate `el.style` directly. Available classes: `.card-hover`, `.project-card-hover`, `.btn-primary`, `.btn-secondary`, `.link-accent`, `.social-link-hover`.

### Scroll animations

`useReveal` hook (fires once via `IntersectionObserver`) + CSS classes `.reveal-hidden`/`.reveal-visible` handle section entrance animations. `prefers-reduced-motion` is handled globally in `src/index.css` — no need to check it per-component.

### Navbar

Uses `useScrollSpy` (tracks active section by ID) and `useNavbarScroll` (triggers blur background after 80px scroll). The mobile drawer implements a full focus trap: Tab cycles within the open menu, Escape closes it, focus returns to the hamburger on close.

### Assets

Static files (SVGs, images) live in `public/assets/img/`. Referenced with absolute paths (`/assets/img/...`). Project thumbnails go in `public/assets/img/projects/`.
