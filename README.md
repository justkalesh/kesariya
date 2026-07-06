# Kesariya — Restaurant, Banquet & Hotel

A modern, production-ready website for **Kesariya Restaurant, Banquet & Hotel** in Gorakhpur, Uttar Pradesh.

Built with React, TypeScript, Tailwind CSS v4, and Vite.

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features

- **Responsive Design** — Mobile-first with functional hamburger menu drawer
- **Horizontal Scroll Menu** — Touch-swipeable dish carousel with snap scrolling
- **Scroll Spy Navigation** — Active nav link tracks current section
- **Local SEO** — Schema.org JSON-LD (LocalBusiness + Restaurant + LodgingBusiness), full meta tags, sitemap
- **Performance Optimized** — Lazy loading images, font preconnect, aggressive asset caching
- **Vercel Ready** — `vercel.json` with caching headers and security headers

## Tech Stack

| | |
|---|---|
| **Framework** | React 19 + TypeScript 6 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS 4 (CSS-first `@theme`) |
| **Fonts** | Playfair Display + Montserrat (Google Fonts) |
| **Icons** | Material Symbols Outlined |
| **Deployment** | Vercel |

## Project Structure

```
src/
├── components/
│   ├── layout/      → Navbar, MobileMenu, Footer
│   ├── sections/    → Hero, Restaurant, SignatureDishes, LoungeBar, Banquets, Rooms, Reviews
│   └── ui/          → Button, SectionHeading, DishCard, ReviewCard, FeatureItem
├── data/            → Typed data modules (dishes, reviews, site config)
├── hooks/           → useScrollSpy
├── seo/             → SchemaMarkup (JSON-LD)
├── App.tsx          → Root component
├── index.css        → Design system (Tailwind @theme)
└── main.tsx         → Entry point
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel dashboard
3. Framework auto-detected as Vite
4. Deploy

### Manual
```bash
npm run build
# Serve the `dist/` directory with any static host
```

## SEO Checklist
- [x] Descriptive `<title>` and `<meta description>`
- [x] Open Graph + Twitter Card tags
- [x] Schema.org JSON-LD (LocalBusiness, Restaurant, LodgingBusiness)
- [x] Geo meta tags (IN-UP, Gorakhpur)
- [x] Canonical URL
- [x] `robots.txt` + `sitemap.xml`
- [x] Semantic HTML with proper heading hierarchy

## License
Proprietary — © Kesariya Restaurant Banquet & Hotel
