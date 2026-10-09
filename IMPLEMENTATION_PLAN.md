# Implementation Plan: SpaceWood Interiors Prototype Website

## 1. Overview & Objectives
Build a mobile-first (390px) and desktop-responsive (1280px+) prototype website for **SpaceWood Interiors**, a modular kitchen and wardrobe studio established in 2016 in Deshpande Nagar, Hubballi, Karnataka.

The design strictly adopts the mood of the provided reference:
- **Aesthetic**: Dark, warm, cinematic atmosphere reminiscent of high-end architectural studios.
- **Palette**: Deep espresso/smoked walnut blacks, warm champagne/tan accents, off-white typography, hairline borders.
- **Typography**: Light uppercase serif headings with generous tracking, paired with a modern geometric sans-serif for body copy.
- **Strict Scope**: Exactly 12 sections in specified order — no extra popups, floating widgets, or sticky bars.
- **Technology**: Vanilla HTML5, CSS3, and JavaScript (ES6+) with zero external framework overhead.

---

## 2. Brand Identity & Reference Design Tokens

### A. Color Palette
| Token | Value | Purpose |
|---|---|---|
| `--bg-primary` | `#0C0A09` | Deep espresso obsidian background |
| `--bg-surface` | `#161311` | Card & section container background |
| `--bg-surface-elevated` | `#221C18` | Hover states, elevated cards |
| `--accent-champagne` | `#C8A87D` | Primary brand accent / tan gold |
| `--accent-champagne-light` | `#DFCAAE` | Light champagne for borders & active states |
| `--accent-champagne-dim` | `rgba(200, 168, 125, 0.12)` | Subtle pill & tag fills |
| `--text-primary` | `#F5F2EB` | Soft linen off-white for crisp readability |
| `--text-muted` | `#9E968B` | Warm stone/taupe for secondary text |
| `--text-dim` | `#686259` | Subtle captions, timestamps, disclaimer |
| `--border-hairline` | `rgba(255, 255, 255, 0.08)` | Ultra-thin architectural borders |
| `--border-accent` | `rgba(200, 168, 125, 0.28)` | Highlight borders and active indicators |

### B. Typography
- **Headings**: `'Cormorant Garamond', Georgia, serif` (weights: 300, 400, 600)
  - Display headline styling: `letter-spacing: 0.04em; text-transform: uppercase; font-weight: 300;`
- **Body & UI**: `'Plus Jakarta Sans', system-ui, sans-serif` (weights: 400, 500, 600)
  - Minimum body font size: `16px` (mobile-first readability)
- **Overlines & Micro-labels**: `letter-spacing: 0.20em; text-transform: uppercase; font-size: 0.75rem; font-weight: 500;`

### C. Visual Texture & Image Placeholders
- Instead of raw grey wireframe boxes, image slots use cinematic warm dual-tone gradients with subtle architectural SVG lighting overlays and dark wood/marble grain effects.
- Every photo slot is marked with an explicit code comment:
  `<!-- [PHOTO REPLACE: collections-kitchen.jpg | Recommended size: 800x1000px | Subject: Dark oak modern kitchen with warm LED underlighting] -->`

---

## 3. Section Architecture (Strict 12-Section Order)

### Section 1: Header
- **Left**: SpaceWood Interiors minimalist serif wordmark (`SPACEWOOD` + small tracked `INTERIORS · HUBLI`).
- **Right**: Hairline pill button `"Book a Visit"` linking smoothly to Section 9.
- Clean backdrop-blur navigation bar with thin hairline bottom border (`height: 72px`).

### Section 2: Full-Screen Hero
- Full-bleed atmospheric architectural backdrop.
- Overline label: `SPACEWOOD / EST. 2016 · HUBLI`
- Headline: `"KITCHENS AND WARDROBES, CUT TO YOUR MEASUREMENTS."`
- Single-line copy: `"Precision modular craftsmanship engineered with German Hettich and Ebco hardware for Hubballi homes."`
- Two buttons:
  1. Solid champagne pill: `"Explore Collections"` (scrolls to Section 4)
  2. Hairline outline pill: `"Book a Studio Visit"` (scrolls to Section 9)
- Subtle ambient scroll-down indicator: `"SCROLL DOWN ↓"`

### Section 3: Trust Strip
- 4 items laid out with hairline vertical dividers (horizontal scroll / 2x2 grid on mobile):
  1. **Since 2016** — 9 years of studio craftsmanship in Hubballi
  2. **Made to Measure** — Millimetre-accurate custom cabinetry
  3. **Soft-Close Hardware** — Hettich & Ebco standard, Hafele upgrade
  4. **Free Site Visit** — In-person laser measurement & consultation

### Section 4: Collection Cards
- 4 architectural cards:
  1. **Modular Kitchens** (Straight, L-shape, U-shape, Island)
  2. **Wardrobes** (Floor-to-ceiling sliding & hinged walk-ins)
  3. **Full-Home Interiors** (2BHK & 3BHK turnkey transformations)
  4. **Office Furniture** (Executive desks, storage, and acoustic panelling)
- Cards feature dark vignette imagery, bottom title with arrow indicator (`MODULAR KITCHENS →`), and smooth scale micro-interaction on hover.

### Section 5: Featured Project Carousel
- Interactive showcase replicating the reference's editorial layout:
  - Slide counter: `01 / 04`
  - Featured items:
    - *Project 01*: The Shirur Park Minimalist Kitchen (Acrylic & Quartz)
    - *Project 02*: Deshpande Nagar Master Walk-in Wardrobe (Fluted glass & PU)
    - *Project 03*: Vidyanagar 3BHK Turnkey Interior (Walnut veneer & warm LED)
    - *Project 04*: Gokul Road Executive Studio (Ebony laminate & Hettich fittings)
  - Detailed spec grid: Finish, Size, Hubballi Area, Hardware.
  - Interactive prev/next arrows and mobile touch swipe.

### Section 6: Materials Row
- Left column (desktop) / top header (mobile): `MATERIALS MATTER.` + copy `"Hand-selected surfaces crafted for moisture resistance and longevity."`
- Horizontal scrolling swatch cards with snap points:
  1. **Walnut Veneer** (Warm natural grain, matte polyurethane coat)
  2. **Matt Laminate** (Anti-fingerprint, 1mm heavy duty)
  3. **Acrylic Gloss** (Mirror reflection, German edge-banded)
  4. **PU Finish** (Seamless satin automotive-grade paint)
  5. **Granite** (Sourced South Indian black pearl & galaxy)
  6. **Quartz** (Stain-proof engineered stone, 20mm profile)

### Section 7: Kitchen Configurator (Interactive Live Estimate)
- Step-by-step interactive selectors:
  - **Layout**: Straight | L-Shape | U-Shape | Parallel (with SVG shape previews)
  - **Finish**: Matt Laminate | Acrylic Gloss | PU Finish | Walnut Veneer
  - **Countertop**: Granite | Quartz | Ceramic Slab
  - **Length in Feet**: Interactive slider / step selector (8 ft to 24 ft)
- **Live Output**: Dynamic price range calculation (e.g., `₹1.85 L – ₹2.35 L`).
- Small sample disclaimer: `*Sample estimate for Hubballi projects. Final price confirmed upon laser site measurement.`
- **CTA Button**: `"Share Design on WhatsApp"` -> Generates clean URI pre-filled message directly to `9739077177`.

### Section 8: How It Works
- 4 clear chronological phases with day counts:
  1. **Site Visit** (Days 1–2): Free laser measurement & room check
  2. **3D Design** (Days 3–5): Photorealistic 3D renders & material selection
  3. **Fixed Quote** (Days 6–7): Itemized pricing with zero surprise charges
  4. **Build & Fit** (Days 21–30): Factory precision manufacturing & on-site assembly

### Section 9: Book a Site Visit Form
- Interactive inputs:
  - **Next 7 Days Selector**: Auto-generated dates (e.g., `Fri 10 Oct`, `Sat 11 Oct`, etc.) with day pills.
  - **Time Slots**: `10:30 AM – 1:00 PM` | `2:00 PM – 4:30 PM` | `5:00 PM – 7:00 PM`.
  - **Name** (Full Name).
  - **Phone** (10-digit mobile number).
  - **Hubli Area** (Locality in Hubballi, e.g. Vidyanagar, Deshpande Nagar, Keshwapur, Shirur Park).
  - **Optional Note** (e.g., "Looking for 3BHK kitchen and 2 wardrobes").
- On submit: Validates input, then triggers WhatsApp with pre-formatted booking details to `9739077177`.

### Section 10: Google Reviews Block
- Rating header: `★ 4.9 / 5.0 Rating` based on Hubballi homeowner reviews (marked with sample content label).
- 3 authentic cards:
  - Review 1: *Anand Kulkarni, Deshpande Nagar* (Praises Hettich soft-close modular kitchen & timeline)
  - Review 2: *Pooja Patil, Vidyanagar* (Appreciates floor-to-ceiling wardrobes and factory finish)
  - Review 3: *Mahesh Joshi, Shirur Park* (Highlights transparent pricing and 3D design accuracy)

### Section 11: Find Us (Studio Location & Hours)
- **Address**: F-32, First Floor, Laxmi Complex, Neeligin Road, beside Kittur Rani Chennamma Bank, Deshpande Nagar, Hubballi 580029
- **Hours**:
  - Monday to Saturday: `10:00 – 19:00`
  - Sunday: `10:00 – 13:00`
- **Phone & WhatsApp**: `+91 97390 77177`
- **Action**: `"Open in Google Maps"` external link.
- Embedded stylized dark-themed map card.

### Section 12: Footer
- SpaceWood Interiors brand wordmark and Hubballi address summary.
- Quick navigation anchor links.
- Sample content disclaimer:
  `*Prototype demonstration created for SpaceWood Interiors. All pricing, reviews, and images are sample representations.`
- Copyright: `© 2016–2025 SpaceWood Interiors. All rights reserved.`

---

## 4. Technical File Structure
```
SpaceWood Interiors/
├── index.html              # Clean, semantic HTML5 structure for all 12 sections
├── styles/
│   └── style.css           # Custom CSS: variables, mobile-first layouts, luxury typography, animations
├── scripts/
│   └── app.js              # Vanilla JS: WhatsApp configuration, configurator calculator, booking form, carousel
├── assets/
│   └── (SVG icons, texture patterns)
└── IMPLEMENTATION_PLAN.md  # Architectural roadmap and design specifications
```

---

## 5. Technical Constraints & Quality Checks
1. **WhatsApp Configuration**: Single constant `const WHATSAPP_NUMBER = '919739077177';` at the very top of `app.js`.
2. **Mobile First Verification (390px)**:
   - Zero horizontal overflow (`overflow-x: hidden`).
   - Tap targets strictly `>= 44px`.
   - Body font strictly `>= 16px` to prevent iOS auto-zoom on inputs.
   - Horizontal snap scrolling on carousel and material swatches.
3. **Desktop Verification (1280px+)**:
   - Balanced multi-column layouts matching the reference screenshot.
   - Max container width clamped gracefully (`max-width: 1240px`).
   - Subtle hover states and smooth transitions.
4. **Motion & Accessibility**:
   - Subtle scroll fade-ins using `IntersectionObserver`.
   - Complete `@media (prefers-reduced-motion: reduce)` support.
