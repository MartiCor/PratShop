---
name: Slate & Thread Minimalist Commerce
colors:
  surface: '#0e141a'
  surface-dim: '#0e141a'
  surface-bright: '#343a41'
  surface-container-lowest: '#090f15'
  surface-container-low: '#161c23'
  surface-container: '#1a2027'
  surface-container-high: '#242a32'
  surface-container-highest: '#2f353d'
  on-surface: '#dde3ec'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dde3ec'
  inverse-on-surface: '#2b3138'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#89ceff'
  on-secondary: '#00344d'
  secondary-container: '#00a2e6'
  on-secondary-container: '#00344e'
  tertiary: '#b9c8de'
  on-tertiary: '#233143'
  tertiary-container: '#8392a6'
  on-tertiary-container: '#1c2b3c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#d4e4fa'
  tertiary-fixed-dim: '#b9c8de'
  on-tertiary-fixed: '#0d1c2d'
  on-tertiary-fixed-variant: '#39485a'
  background: '#0e141a'
  on-background: '#dde3ec'
  surface-variant: '#2f353d'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Manrope
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Manrope
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 3rem
  margin-sm: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a high-end, contemporary digital storefront for curated apparel. Blending architectural minimalism with editorial precision, the visual language avoids pitch-black brutalism in favor of an atmospheric, deep slate and cool-gray ambiance.

### Target Audience & Personality
- **Audience:** Design-conscious consumers seeking quality, timeless tailoring, and effortless modern fashion.
- **Tone:** Discerning, understated, fluid, and calm.
- **Emotional Response:** Confidence, clarity, luxury without intimidation, and friction-free decision-making.

### Design Style
The aesthetic employs **Cool-Tone Slate Minimalism**. Interfaces prioritize vast breathing room, crisp typographic hierarchy, micro-interactions, and low-contrast surface separations over heavy lines or drop shadows.

## Colors

The palette avoids the sterile harshness of absolute black (`#000000`) and optical pure white (`#ffffff`). Instead, it relies on a foundation of balanced cool graphite and slate hues enriched by refined electric cerulean accents.

### Color Tiers
- **Canvas / Root Background:** `#1e242b` (Deep Slate Gray). Provides depth and reduces glare while letting garment imagery command attention.
- **Surface Elevation 1 (Card/Container):** `#252d37` (Soft Cool Slate).
- **Surface Elevation 2 (Dropdowns/Modals):** `#2f3844` (Elevated Slate).
- **Primary Accent:** `#3b82f6` (Clean Vibrant Cobalt). Used for primary calls-to-action, cart counts, and critical focus triggers.
- **Secondary Accent:** `#0ea5e9` (Crisp Sky Slate). Reserved for active states, secondary notifications, and subtle highlights.
- **Tertiary Neutral:** `#94a3b8` (Muted Steel Slate). Applied to secondary product specs, metadata, and iconography.
- **Text & Foreground:** `#f1f5f9` (Cool Off-White) for prominent titles; `#cbd5e1` (Light Slate Tint) for body text and descriptive editorial blocks.

## Typography

Typography pairs **Hanken Grotesk** for structured, confident headlines with **Manrope** for legible, geometric body and transactional information.

- **Editorial Hierarchy:** Display sizes command collection drops, lookbooks, and hero banners. Keep letter-spacing negative on large scale text to ensure a tight, contemporary editorial finish.
- **Product Details & Metadata:** Use `label-sm` with upper-case styling and positive letter-spacing (`0.06em`) for material specs, SKUs, and category tags.
- **Scalability:** Scale display and large headline fonts dynamically on mobile devices to prevent wrapping issues across portrait orientations.

## Layout & Spacing

The structural layout adheres to an asymmetric, airy 12-column responsive grid built to showcase high-resolution fashion photography.

### Grid & Breakpoints
- **Desktop (1280px+):** 12 columns, `margin: 3rem`, `gutter: 1.5rem`. Max container width capped at `1440px` for optimal eye tracking.
- **Tablet (768px - 1279px):** 8 columns, `margin: 2rem`, `gutter: 1.25rem`.
- **Mobile (< 768px):** 4 columns, `margin-sm: 1rem`, `gutter-sm: 1rem`.

### Spacing Guidelines
Use `space-xs` and `space-sm` for inline alignments like swatch indicators and icon-to-label gaps. Apply `space-lg` and `space-xl` internally across cards, drawer sidebars, and checkout containers to sustain a luxurious, decluttered rhythm.

## Elevation & Depth

To sustain a clean and minimal atmosphere, visual depth relies on **tonal stepping** and **low-contrast cool-slate borders** rather than standard drop shadows.

- **Level 0 (Base Canvas):** `#1e242b` - Base page canvas.
- **Level 1 (Card & Product Surfaces):** `#252d37` with a subtle 1px border colored `rgba(148, 163, 184, 0.12)`.
- **Level 2 (Drawers, Sticky Headers, Hover States):** `#2f3844` combined with a soft ambient shadow: `0 12px 32px -8px rgba(10, 15, 23, 0.45)`.
- **Level 3 (Quick-view Modals & Dialogs):** `#333d4b` surrounded by an ambient tint of `0 24px 48px -12px rgba(2, 6, 23, 0.65)` and a 1px border of `rgba(59, 130, 246, 0.25)` to softly highlight focus.

## Shapes

The design system adopts a **soft corner geometry** (`roundedness: 1`), conveying modern structural refinement without the playfulness of circular shapes or the harshness of pure rectangles.

- **Base Components (Buttons, Inputs, Badges):** `0.25rem` (4px). Maintains clean architectural alignment with product grids.
- **Containers & Cards:** `0.5rem` (8px). Softens large image compositions.
- **Floating Modals & Drawers:** `0.75rem` (12px). Creates a distinct layer separation from background content.

## Components

### Buttons
- **Primary:** Background `#3b82f6`, foreground `#ffffff`, border radius `0.25rem`, vertical padding `0.75rem`, horizontal padding `1.5rem`. On hover: `#2563eb`. Transition: `all 150ms ease-out`.
- **Secondary:** Background transparent, border `1px solid rgba(148, 163, 184, 0.25)`, foreground `#f1f5f9`. On hover: background `#252d37`, border-color `#3b82f6`.
- **Ghost/Tertiary:** Minimal inline action with underlined cool-gray accent shifting to blue upon hover.

### Product Cards
- **Structure:** Clean borderless frame using `#252d37` surface or transparent frame on `#1e242b`.
- **Image Container:** 3:4 or 4:5 aspect ratio with `0.25rem` corner radius, subtle hover zoom (`scale 1.02`), and floating size chips in the bottom corner.
- **Typography Block:** Product title in `body-md`, muted brand in `label-sm`, and price in `headline-sm`.

### Form Fields & Inputs
- **Base Style:** Background `#252d37`, border `1px solid rgba(148, 163, 184, 0.2)`, text `#f1f5f9`, placeholder text `#64748b`.
- **Focus State:** Border shifts to `#3b82f6` with a soft outer glow `0 0 0 1px #3b82f6`. Corner radius `0.25rem`.

### Chips & Filters
- **Default State:** Background `#252d37`, border `1px solid rgba(148, 163, 184, 0.15)`, text `#cbd5e1`.
- **Selected State:** Background `rgba(59, 130, 246, 0.15)`, border `1px solid #3b82f6`, text `#60a5fa`.

### Checkboxes & Radios
- **Control Box:** `18px × 18px`, `0.25rem` radius (rounded for checkbox, circular for radio), border `1px solid rgba(148, 163, 184, 0.3)`.
- **Active State:** Background `#3b82f6` with a white checkmark or inner dot.

### Color Swatches (E-commerce Specific)
- **Geometry:** `24px × 24px` circles with a `2px` transparent gap and a `1px` outer ring on selection matching `#3b82f6`.