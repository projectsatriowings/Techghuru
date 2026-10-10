---
name: Luminous Nexus
colors:
  surface: '#fff8f1'
  surface-dim: '#e0d9cf'
  surface-bright: '#fff8f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf2e9'
  surface-container: '#f5ede3'
  surface-container-high: '#efe7dd'
  surface-container-highest: '#e9e1d8'
  on-surface: '#1e1b15'
  on-surface-variant: '#584237'
  inverse-surface: '#33302a'
  inverse-on-surface: '#f7f0e6'
  outline: '#8c7164'
  outline-variant: '#e0c0b1'
  surface-tint: '#9d4300'
  primary: '#9d4300'
  on-primary: '#ffffff'
  primary-container: '#f97316'
  on-primary-container: '#582200'
  inverse-primary: '#ffb690'
  secondary: '#865138'
  on-secondary: '#ffffff'
  secondary-container: '#ffb99b'
  on-secondary-container: '#7a472f'
  tertiary: '#8d4d3b'
  on-tertiary: '#ffffff'
  tertiary-container: '#d38772'
  on-tertiary-container: '#562214'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbca'
  primary-fixed-dim: '#ffb690'
  on-primary-fixed: '#341100'
  on-primary-fixed-variant: '#783200'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#fcb798'
  on-secondary-fixed: '#341001'
  on-secondary-fixed-variant: '#6a3a23'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a1'
  on-tertiary-fixed: '#380c02'
  on-tertiary-fixed-variant: '#703626'
  background: '#fff8f1'
  on-background: '#1e1b15'
  surface-variant: '#e9e1d8'
typography:
  display-xl:
    fontFamily: Outfit
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Outfit
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.025em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system projects authority, technical prowess, and human-centric innovation for an ultra-modern IT and digital transformation agency. It targets enterprise decision-makers, high-growth startups, and technical leaders seeking reliable, high-end engineering. The visual style merges refined modernism with warm, tactile glassmorphism—steering clear of cold, sterile corporate clichés in favor of rich, energetic warmth.

Visual signatures include:
- Translucent frosted glass containers layered over soft, warm ambient gradients.
- Micro-fine hairline borders (`1px`) reflecting light, simulating treated optical glass.
- Radiant focal points utilizing vibrant orange energy contrasted against deep espresso grounding surfaces.
- Dynamic tactile feedback, including subtle floating lifts, glowing perimeter borders, and refined transitions.

## Colors

The palette balances energy with deep architectural anchor tones over an inviting canvas:

- **Primary (`#F97316`)**: The electric core. Reserved for key calls-to-action, active tab states, progress indicators, interactive highlights, and focal badges.
- **Secondary (`#49200B`)**: Deep Chocolate Brown. Applied to secondary interactive elements, subtle tinted backplates, gradient transitions, and high-contrast card backgrounds.
- **Tertiary (`#431407`)**: Deep Espresso / Orange 950. Dedicated to high-contrast headings, body typography, deep structural sections (footers, hero split panels), and high-impact structural borders.
- **Neutral Canvas (`#FFF7ED`)**: Warm Sand / Orange 50. The foundational surface that replaces stark clinical white, offering sustained readability and a sunlit optical temperature.

### Semantic Overlays & Alpha Tints
- **Glass Panel Surface**: `rgba(255, 255, 255, 0.70)` with `backdrop-filter: blur(16px)` on light backdrops.
- **Glass Border Stroke**: `rgba(249, 115, 22, 0.16)` on standard glass surfaces; `rgba(255, 255, 255, 0.2)` on dark espresso containers.
- **Gradients**: Linear gradient (`135deg, #F97316 0%, #49200B 100%`) applied selectively to hero highlights, primary badge fills, and dynamic graphical accents.

## Typography

The type system blends geometric confidence with programmatic precision:

- **Display & Headlines (Outfit)**: Distinctive, geometric, and modern. Tighter letter spacing on display scales creates impact, projecting technical authority.
- **Body & Controls (Inter)**: Clean, neutral, and engineered for high legibility across digital viewports.
- **Hierarchy Rules**: Display headings leverage the deep espresso hue (`#431407`) for crisp reading, occasionally adopting the warm brand gradient for leading keywords. Body text maintains a muted reading contrast (`rgba(67, 20, 7, 0.85)`). All operational labels and metadata use uppercase tracking via `label-sm` or `label-md`.

## Layout & Spacing

The layout is built upon a responsive 12-column grid designed for modularity, whitespace control, and rhythmic breathing room:

- **Desktop (≥ 1280px)**: 12-column grid, max-width `1280px` centered, `margin` of `3rem`, and `gutter` of `1.5rem`.
- **Tablet (768px - 1279px)**: 8-column grid, `margin` of `2rem`, `gutter` of `1.25rem`. Complex dual-column cards collapse to single or split-balanced stacks.
- **Mobile (< 768px)**: 4-column grid, `margin` of `1.25rem`, `gutter` of `1rem`. All multi-column modules collapse vertically; navigation condenses into a floating glass drawer.
- **Spacing Rhythm**: Layout blocks use `space-xl` (40px) or double-scale increments (80px) between distinct narrative sections. Component interiors strictly follow `space-xs` through `space-lg` step scales to maintain layout cohesion.

## Elevation & Depth

Visual depth is achieved through optical glassmorphism combined with warm-tinted ambient diffusion:

- **Floating Glass (Level 1)**: `backdrop-filter: blur(16px); background: rgba(255, 255, 255, 0.72); border: 1px solid rgba(249, 115, 22, 0.12); box-shadow: 0 4px 20px -2px rgba(73, 32, 11, 0.05);`. Used for standard cards, inputs, and tab containers.
- **Elevated Interactive (Level 2)**: `backdrop-filter: blur(20px); background: rgba(255, 255, 255, 0.88); border: 1px solid rgba(249, 115, 22, 0.28); box-shadow: 0 12px 32px -4px rgba(249, 115, 22, 0.12), 0 4px 12px -2px rgba(67, 20, 7, 0.06);`. Activated during hover states and popovers.
- **Floating Navigation Layer (Level 3)**: Fixed top or bottom navbars use `backdrop-filter: blur(24px); background: rgba(255, 247, 237, 0.78); border: 1px solid rgba(255, 255, 255, 0.6); box-shadow: 0 16px 40px -8px rgba(67, 20, 7, 0.12);`.
- **Deep Solid Containers**: Dark panels utilize `#49200B` with an inner border of `rgba(255, 255, 255, 0.08)` and subtle radiant corner glows created by radial orange light leaks.

## Shapes

The design system utilizes rounded geometric profiles (`roundedness: 2` = 0.5rem base) to balance technical precision with approachable fluidity:

- **Buttons & Small Controls**: `0.5rem` (8px) for crisp interaction edges.
- **Cards, Panels, & Glass Shells**: `rounded-lg` (`1rem` / 16px) to define structural presence while maintaining smooth silhouettes.
- **Floating Navbars & Modals**: `rounded-xl` (`1.5rem` / 24px) for organic, floating characteristics.
- **Badges & Pill Toggles**: Fully circular radii (`9999px`) to emphasize distinct status and categorization metadata.

## Components

### Buttons
- **Primary**: Solid `#F97316` fill, text `#FFFFFF`, font `label-lg`, padding `space-sm` `space-lg`, radius `0.5rem`. Subtle glow shadow: `0 4px 14px rgba(249, 115, 22, 0.35)`. Hover: translateY(-1px), shadow increases to `0 6px 20px rgba(249, 115, 22, 0.45)`.
- **Secondary (Glass)**: Background `rgba(255, 255, 255, 0.6)`, text `#431407`, border `1px solid rgba(73, 32, 11, 0.15)`. Hover: background `rgba(255, 255, 255, 0.95)`, border color `#F97316`.
- **Ghost**: Transparent fill, text `#49200B`, with orange underline appearing on hover.

### Floating Navbar
- Floating pill-container centered horizontally at top viewport.
- Background `rgba(255, 247, 237, 0.85)`, backdrop blur `20px`, border `1px solid rgba(249, 115, 22, 0.15)`. Radius `rounded-xl`.
- Links use `body-sm` weight 500 in `#431407`. Active links get `#F97316` indicator dots beneath them.

### Interactive Cards
- Surface `rgba(255, 255, 255, 0.65)` layered over canvas, border `1px solid rgba(249, 115, 22, 0.12)`.
- Hover triggers `transform: translateY(-4px)`, border shifts to `rgba(249, 115, 22, 0.4)`, and shadow deepens with an amber-tinted cast (`rgba(249, 115, 22, 0.1)`).

### Input Fields
- Background `rgba(255, 255, 255, 0.8)`, border `1px solid rgba(73, 32, 11, 0.15)`, radius `0.5rem`, typography `body-md`.
- Focus state: outline none, border color `#F97316`, box-shadow `0 0 0 3px rgba(249, 115, 22, 0.2)`.

### Chips & Badges
- Pill-shaped (`rounded-full`), padding `space-xs` `space-sm`.
- Status/Accent: Background `rgba(249, 115, 22, 0.1)`, text `#F97316`, border `1px solid rgba(249, 115, 22, 0.25)`. Font `label-sm`.

### Checkboxes & Radios
- Size `20px`, border `1.5px solid rgba(73, 32, 11, 0.3)`, radius `4px` (checkbox) or circular (radio).
- Checked: Background `#F97316`, border `#F97316`, checkmark icon in `#FFFFFF`.

### Metric & Stat Blocks
- Specialized component for IT solutions: large numeric readouts in `display-lg` (`Outfit`), deep chocolate description in `label-md`, anchored inside an ambient-glass container with subtle corner light streaks.