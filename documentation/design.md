---
name: Anytime Spanish
colors:
  surface: '#fff8f6'
  surface-dim: '#e5d7d4'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0ee'
  surface-container: '#f9ebe8'
  surface-container-high: '#f3e5e2'
  surface-container-highest: '#eedfdd'
  on-surface: '#211a19'
  on-surface-variant: '#534340'
  inverse-surface: '#372f2d'
  inverse-on-surface: '#fceeeb'
  outline: '#86736f'
  outline-variant: '#d9c1bd'
  surface-tint: '#8f4b3e'
  primary: '#8f4b3e'
  on-primary: '#ffffff'
  primary-container: '#dc8a7a'
  on-primary-container: '#5e251a'
  inverse-primary: '#ffb4a5'
  secondary: '#765a26'
  on-secondary: '#ffffff'
  secondary-container: '#fed797'
  on-secondary-container: '#785c28'
  tertiary: '#526443'
  on-tertiary: '#ffffff'
  tertiary-container: '#92a57f'
  on-tertiary-container: '#2b3b1e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad3'
  primary-fixed-dim: '#ffb4a5'
  on-primary-fixed: '#3a0a04'
  on-primary-fixed-variant: '#723429'
  secondary-fixed: '#ffdea9'
  secondary-fixed-dim: '#e6c183'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5c4210'
  tertiary-fixed: '#d5e9bf'
  tertiary-fixed-dim: '#b9cda5'
  on-tertiary-fixed: '#111f06'
  on-tertiary-fixed-variant: '#3b4c2d'
  background: '#fff8f6'
  on-background: '#211a19'
  surface-variant: '#eedfdd'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-sm:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: '8'
  margin-mobile: '24'
  gutter: '16'
  section-gap: '40'
---

## Purpose

This document defines the visual and content design for the **Anytime Spanish marketing website** — a single-page landing experience whose job is to advertise the mobile app. The site shares the app's brand tokens and "Digital Traveler's Journal" aesthetic so visitors understand the product before they download it.

The landing page is not the product. Copy, layout, and CTAs should always point toward the app: what it feels like, what you can practice, and why it's worth installing.

## Brand & Style

The design system is built on the concept of a **"Digital Traveler's Journal."** It eschews the clinical, hyper-efficient aesthetic of modern SaaS in favor of a warm, organic, and tactile experience. On the website, that warmth should read as an invitation — speaking Spanish feels like a relaxed conversation in a sun-drenched plaza, not a classroom drill.

The style leans into **refined organic minimalism**: soft textures, generous negative space, and hand-drawn influences. Motion on the web should be subtle and fluid — gentle fades or scroll reveals — never flashy or salesy. The page should feel calm enough to read, but confident enough to convert.

## Page Structure

The homepage is a vertical stack of anchored sections. Each section has one job; avoid cramming multiple messages into a single block.

| Section | Role |
| --- | --- |
| **Header** | Persistent brand mark, in-page nav anchors, primary CTA |
| **Hero** | Value proposition, emotional hook, primary and secondary CTAs |
| **Features** | Three proof points that mirror the app's core differentiators |
| **Conversation preview** | Showcase of topic categories — a taste of in-app content |
| **CTA banner** | Final conversion moment with a concrete free offer |
| **Footer** | Brand reinforcement and tagline |

**Content width:** Center content in a `max-w-5xl` container. Horizontal padding is `24px` on mobile (`px-6`) and `32px` on desktop (`md:px-8`).

**Section rhythm:** Use `py-16` on mobile and `md:py-20` between major sections. Alternate or tint backgrounds (`surface`, `surface-container`) to create gentle visual separation without hard breaks.

## Colors

The palette is inspired by Mediterranean and Latin American landscapes — earthy, sun-baked, and revitalizing. On the landing page, color directs attention toward conversion and reinforces the app's personality.

- **Primary (Sun-Bleached Terracotta):** Used for header/footer CTAs, the closing CTA banner button, and Spanish accent copy in the hero. Conveys warmth, history, and a welcoming openness.
- **Secondary (Soft Amber):** Reserved for the hero's primary CTA — the highest-intent action on the page. Represents energy, clarity, and the spark of communication (the app's voice-first promise).
- **Tertiary (Agave Sage):** Used for feature-card accents and success-adjacent highlights. Provides a cool, calming counterpoint to the warm terracotta.
- **Background (Dusty Sand):** The default page canvas. Warm and non-reflective, it reads more like parchment than a stark white marketing page.
- **Surface containers:** Use `surface-container` and `surface-container-high` for feature cards, topic cards, and the CTA banner panel — tonal layering instead of heavy shadows.

**Ambient glows:** Hero and CTA sections may use soft, blurred circular gradients (`primary-container/20`, `secondary-container/30`) or a radial wash behind the closing banner. These are decorative only (`aria-hidden`, `pointer-events-none`).

## Typography

The typography strategy balances the classic, literary elegance of **Libre Caslon Text** for headlines with the clear, modern legibility of **DM Sans** for body copy.

| Use | Token | Notes |
| --- | --- | --- |
| Hero headline | `display-lg` / `display-lg-mobile` | One clear promise; avoid subhead clutter |
| Section titles | `headline-md` | Features, conversation preview, CTA banner |
| Body copy | `body-lg` in hero, `body-md` elsewhere | Loose line height for a calm, readable pace |
| Labels & nav | `label-sm` | Pill badges, header links, category tags |
| Spanish accent | `body-lg` in `primary`, often `font-medium` | Short phrase in Spanish to signal the product's focus |

Headlines reinforce the journal aesthetic — a printed travelogue, not a startup pitch deck. Keep marketing copy concise; let whitespace do the persuading.

## Layout & Spacing

The landing page uses a **centered content column** model. On mobile, side margins match the app (`24px`) so the brand feels consistent across touchpoints.

- **Vertical stacks:** Favor `section-gap` (40px) between conversation categories and `gutter` (16px) between cards within a group.
- **Feature grid:** Single column on mobile; three columns from `md` breakpoint. Cards share equal height treatment via consistent padding (`p-6`).
- **CTAs:** Stack vertically on narrow viewports (`flex-col`); row layout from `sm` when two buttons sit side by side in the hero.
- **Sticky header:** `backdrop-blur-sm` over `surface/90` so content scrolls beneath without losing nav access.

Avoid dense layouts. Every block should have room to breathe — the page sells an unhurried learning experience, and the layout should embody that.

## Elevation & Depth

Depth on the landing page is communicated through **tonal layering** and **soft borders**, not drop shadows.

- **Cards:** `rounded-lg`, `border border-outline-variant/70`, background `surface` or `surface-container`. Hover states lighten the border or background slightly — enough to feel interactive on topic cards, not gimmicky on static feature cards.
- **Buttons:** Primary actions use `rounded-xl` with a low-opacity ambient shadow tinted to the button color (e.g. `rgba(118,90,38,0.12)` for secondary, `rgba(143,75,62,0.12)` for primary). Hover via `opacity-90`, not scale transforms.
- **No hard drop shadows:** If elevation is needed, use wide, low-opacity glows that match the element's hue.

## Shapes

The shape language is defined by **high circularity** — soft, touchable, and human.

- **Content cards:** `rounded-lg` (1rem).
- **Buttons & pills:** `rounded-xl` (1.5rem) or `rounded-full` for badges and hero chips.
- **Icons:** Line icons with rounded caps and corners. Prefer microphone, map, journal, and dialogue motifs over abstract SaaS glyphs.

## Calls to Action

Every CTA on the landing page should eventually route to the app (store link or deep link). Until those URLs exist, use placeholder `href="#"` or in-page anchors.

| Location | Style | Intent |
| --- | --- | --- |
| Header | `primary` button, compact | Persistent "Get started" |
| Hero primary | `secondary` button, large | Main conversion — "Start your first conversation" |
| Hero secondary | Outlined `surface-container` button | Scroll to conversation preview |
| CTA banner | `primary` button, large | Repeat offer with concrete free topics |

Secondary actions use a bordered, filled-neutral treatment so the amber/terracotta primaries remain visually dominant.

## Conversation Preview

The conversation section is a **marketing preview** of in-app content — not a functional topic browser. It shows visitors the breadth of practice scenarios they'll find after installing.

Categories are grouped like sections in a phrasebook. **Free** is always first and acts as a curated showcase; its topics also appear in their thematic category so the page mirrors how learners discover content in the app.

| Order | Category | ID | Topics |
| --- | --- | --- | --- |
| 1 | Free | `free` | Ordering Food in Madrid, Talking About Your Day |
| 2 | Travel | `travel` | Asking for Directions, Hotel Check-in, Train Station, Ordering Food in Madrid |
| 3 | Everyday Errands | `everyday` | Clothing Store, Opening a Bank Account, Apartment Viewing |
| 4 | Work & Goals | `work` | Job Interview Practice, Personal Goal |
| 5 | Social & Connection | `social` | Weekend Small Talk, Family, Talking About a Hobby, Childhood Memories, Talking About Your Day |

**Section layout:** Each category is a vertical stack — a header row, a one-line description, then topic cards. Use **Libre Caslon Text** at `headline-md` for the category title and **DM Sans** at `body-md` in `on-surface-variant` for the description. Separate categories with `section-gap` (40px). Within a category, keep `gutter` (16px) between the header block and the first card, and between cards.

**Free badge:** When a category is marked free (`isFree`), show a small full-pill label (`rounded-full`) beside the title — **Secondary Soft Amber** (`secondary-container` / `on-secondary-container`). Label copy: **Free**.

**Topic cards:** Display topic titles only. They are illustrative on the web; tapping them should not imply an in-browser lesson. Style as static preview rows with a subtle hover state for polish.

## Features Section

Three feature cards explain why the app is different. Each card follows the same structure: accent icon container, `headline-md` title, `body-md` description.

Rotate accent colors across cards — `secondary-container`, `primary-container`, `tertiary-container` — so the row feels varied but balanced. Copy should describe app behavior ("talk, don't tap") in second person, as if the visitor will experience it on their phone moments after downloading.
