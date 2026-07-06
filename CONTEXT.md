# Kesariya — Context

## Project Overview
**Kesariya Restaurant, Banquet & Hotel** — a production-ready single-page website for a hospitality business located in Gorakhpur, Uttar Pradesh, India.

## Origin
Migrated from a static 474-line `index.html` (CDN Tailwind, no interactivity) into a modular React + TypeScript application with Vite build tooling and Tailwind CSS v4.

## Current Phase
**Phase 2 Complete** — All visual components migrated and building successfully.
- Phase 3 (Supabase/forms backend) — Deferred, user has own plan.
- Phase 4 (SEO) — Complete (meta tags, Schema.org JSON-LD, robots.txt, sitemap.xml).
- Phase 5 (Deployment) — Vercel config ready, build verified.

## Tech Stack
| Layer | Technology | Version |
|---|---|---|
| Runtime | React | 19.x |
| Language | TypeScript | 6.x |
| Build | Vite | 8.x |
| Styling | Tailwind CSS | 4.x (CSS-first `@theme`) |
| Deployment | Vercel | — |
| Backend | TBD (Supabase planned) | — |

## Key Decisions
1. **Tailwind v4 CSS-first config** — All design tokens defined via `@theme {}` in `index.css`, no separate `tailwind.config.ts`.
2. **Material Design 3 palette** — Preserved the original MD3 color scheme from the static HTML.
3. **No client-side routing** — Single-page with anchor navigation and smooth scrolling (no React Router needed).
4. **Data-driven components** — All content (dishes, reviews, amenities, bar menu) extracted into `/data` modules for easy editing.
5. **Supabase deferred** — User has own plan for backend integration.

## File Structure
```
kesariya/
├── public/               # Static assets
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── layout/       # Navbar, MobileMenu, Footer
│   │   ├── sections/     # Hero, Restaurant, SignatureDishes, LoungeBar, Banquets, Rooms, Reviews
│   │   └── ui/           # Button, SectionHeading, DishCard, ReviewCard, FeatureItem
│   ├── data/             # dishes.ts, reviews.ts, siteData.ts
│   ├── hooks/            # useScrollSpy.ts
│   ├── seo/              # SchemaMarkup.tsx (JSON-LD)
│   ├── App.tsx
│   ├── index.css         # Tailwind v4 design system
│   └── main.tsx
├── index.html            # SEO-optimized root HTML
├── vercel.json           # Deployment config
├── vite.config.ts
└── index.original.html   # Backup of original static HTML
```
