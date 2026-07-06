# Kesariya — Design System

## Overview
The design system is based on **Material Design 3** (Material You) with a warm, gold-centric palette that reflects the brand identity of "Kesariya" (saffron/gold). All tokens are defined in `src/index.css` using Tailwind CSS v4's `@theme` directive.

## Color Palette

### Primary — Saffron Gold
The core brand color. Used for headings, CTAs, active states, and the logo.
- `--color-primary`: `#755b00` — Deep gold-brown
- `--color-primary-container`: `#f4c430` — Bright saffron (buttons, badges)
- `--color-on-primary-container`: `#695200` — Text on primary containers

### Secondary — Warm Amber
Supporting accent. Used for hover states and secondary containers.
- `--color-secondary`: `#735c00`
- `--color-secondary-container`: `#fed65b`

### Tertiary — Earthy Rose
Warm complement. Used sparingly for tertiary elements.
- `--color-tertiary`: `#77574d`
- `--color-tertiary-container`: `#eac1b5`

### Surface — Warm Cream
Background and card surfaces. The site feels warm and premium.
- `--color-surface`: `#fff8f1` — Main background
- `--color-surface-container`: `#f6eddd` — Card backgrounds
- `--color-inverse-surface`: `#353025` — Dark cards (Lounge Bar)

### Error / Success
Standard semantic colors for form validation states.

## Typography

### Fonts
- **Display/Headlines**: Playfair Display (serif) — elegant, premium
- **Body/Labels**: Montserrat (sans-serif) — modern, readable

### Scale
| Token | Size | Weight | Use |
|---|---|---|---|
| `display-lg` | 56px | 700 | Hero heading |
| `headline-lg` | 40px | 700 | Section titles |
| `headline-md` | 32px | 600 | Sub-section titles |
| `headline-sm` | 24px | 600 | Card titles |
| `body-lg` | 18px | 400 | Hero tagline |
| `body-md` | 16px | 400 | Body text |
| `label-md` | 14px | 600 | Buttons, nav links |
| `label-sm` | 12px | 500 | Captions, badges |

Fluid typography is achieved via `clamp()` on key headings for responsive scaling.

## Spacing
Based on an 4px grid with named tokens:
- `xs`: 4px — Tight gaps
- `base`: 8px — Base unit
- `sm`: 12px — Component padding
- `md`: 24px — Section gaps
- `lg`: 48px — Large spacing
- `xl`: 80px — Section vertical padding

## Components

### Button (3 variants)
1. **Filled** — `bg-primary-container` — Primary CTAs
2. **Outlined** — `border-primary` — Secondary actions
3. **Tonal** — `bg-primary text-on-primary` — Dark emphasis

All buttons use `rounded-full` pill shape with `active:scale-95` micro-interaction.

### Cards
- **DishCard** — White card with image, snap-scroll, hover shadow
- **ReviewCard** — White card with star rating, italic quote, author divider

### Animations
- `fadeInUp` — Content entrance (hero, sections)
- `slideInRight` — Mobile menu items
- `stagger-children` — Sequential animation for list items (banquet features)

## Responsive Strategy
- **Mobile-first** with `md:` breakpoint (768px) for two-column layouts
- Hero uses `min-h-[600px]` to prevent collapse on short viewports
- Horizontal dish scroll: CSS `snap-x snap-mandatory` + `-webkit-overflow-scrolling: touch`
- Mobile drawer: `translate-x` animation, 280px width, backdrop overlay
