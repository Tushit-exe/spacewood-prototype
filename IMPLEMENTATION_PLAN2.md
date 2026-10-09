# Implementation Plan 2: SpaceWood Interiors Prototype Refinement

## 1. Executive Summary & Problem Diagnosis
Based on your feedback, this plan addresses the two primary issues:
1. **Hero Background Visibility**: The background image in the hero is overly darkened by heavy nested overlays and filters (`brightness(0.68)` + dual dark gradients), obscuring the modular kitchen, fluted walnut cabinetry, and illuminated quartzite island.
2. **Alignment & Visual Dynamism ("Too bland, nothing happening")**:
   - The layouts currently feel like generic vertical stacks rather than the locked, grid-aligned architectural elegance of the reference design.
   - Sections lack visual hierarchy, rhythmic spacing, and dynamic life (no scroll reveals, static counters, flat card states).

---

## 2. Fix 1: Hero Background Visibility & Lighting Treatment

### A. The Issue
- Multiple stacked dark overlays (`rgba(12,10,9,0.72)` + radial dark gradient + `brightness(0.68)`) reduce the image's presence to near-black.
- The kitchen's key selling points (backlit quartzite waterfall island, warm fluted walnut cabinets, ambient ceiling downlights) are barely discernible.

### B. The Solution
- **Increase Image Brightness & Contrast**: Set `.hero-backdrop-img` to `filter: brightness(0.88) contrast(1.08)`.
- **Asymmetrical Gradient Masking**:
  - Replace the heavy full-screen dark veil with a directional horizontal mask:
    `linear-gradient(90deg, rgba(12, 10, 9, 0.88) 0%, rgba(12, 10, 9, 0.55) 45%, rgba(12, 10, 9, 0.20) 100%)`
  - This keeps the text on the left 100% crisp, contrast-rich, and readable, while allowing the illuminated kitchen island and fluted cabinetry on the right to shine through vibrantly.
- **Cinematic Ambient Motion**:
  - Subtle slow-panning Ken Burns effect (`scale(1.02)` to `scale(1.06)` over 20s) with soft pause, giving the hero cinematic life without overwhelming the user.
- **Volumetric Light Cone**:
  - Add a soft golden ceiling light beam that gently reflects off the quartzite counter.

---

## 3. Fix 2: Precision Content Alignment Overhaul (Section by Section)

To match the reference's locked, magazine-grade grid alignment:

### 1. Header (Desktop Navigation Alignment)
- **Currently**: Only wordmark on left and single button on right. Feels empty on desktop.
- **Refinement**:
  - Add minimalist uppercase tracked anchor links in the center: `COLLECTIONS · COMMISSIONS · MATERIALS · CONFIGURATOR · STUDIO`.
  - Right: Clean hairline pill button `"Book a Visit"`.
  - Perfect vertical alignment with fixed 72px glassmorphic header.

### 2. Trust Strip (Editorial Metric Grid)
- **Currently**: Simple flex rows that can look scattered on wider viewports.
- **Refinement**:
  - Strictly align as a 4-column locked grid (`grid-template-columns: repeat(4, 1fr)`) with hairline vertical dividers (`border-right: 1px solid rgba(255,255,255,0.08)`).
  - Standardize icon container + title + subtitle alignment so all 4 items have identical visual heights and baseline alignment.

### 3. Collection Cards (Reference Match)
- **Currently**: Extraneous category spec badge sits awkwardly over the content.
- **Refinement**:
  - Replicate the reference's exact card format:
    - Clean 3:4 portrait ratio.
    - Image fills the entire card with a rich dark bottom vignette.
    - Bottom content: Category title on left (`MODULAR KITCHENS`), tracked arrow on right (`→`), with a clean single-line description below (`Precision work triangles & German fittings`).
    - Remove cluttered floating badges for pure architectural minimalism.
    - 4 columns on desktop (1280px+), 2 columns on tablet (768px), 1 column with snap on mobile (390px).

### 4. Featured Project Carousel (Asymmetrical Editorial Split)
- **Currently**: Visual on top, details below.
- **Refinement**:
  - Match the reference's iconic 2-column layout:
    - **Left Column (56%)**: Elevated showcase container with rounded corners, subtle warm glow, and spec pill in corner (`Shirur Park, Hubballi`).
    - **Right Column (44%)**:
      * Top row: `01 / 04` counter on left, small champagne category label on right.
      * Project title in Cormorant Garamond serif (`THE SHIRUR PARK MINIMALIST KITCHEN`).
      * Project description with generous line spacing.
      * 3-column specification table (`Finish`, `Size`, `Fittings`) with hairline top and bottom borders.
      * Bottom row: WhatsApp CTA button on left, circular navigation arrow buttons `(←) (→)` grouped on the far right.

### 5. Materials Row (Reference Asymmetric Layout)
- **Currently**: Full-width header on top, row of swatches underneath.
- **Refinement**:
  - Desktop: Replicate the reference's side-by-side format:
    - Left (28%): Large serif `MATERIALS MATTER.`, subtitle, and `"Explore Materials →"` button.
    - Right (72%): Horizontal row of square swatches with labels directly underneath (`WALNUT VENEER`, `MATT LAMINATE`, `ACRYLIC GLOSS`, `PU FINISH`, `GRANITE`, `QUARTZ`).
  - Mobile: Clean header followed by smooth horizontal snap-scroll swatches.

### 6. Kitchen Configurator (2-Column Studio Suite)
- **Currently**: Long vertical stack of inputs. On desktop, this feels like an ordinary form.
- **Refinement**:
  - Convert to a 2-Column Luxury Studio Suite on desktop:
    - **Left Column (44%)**:
      * Live architectural SVG floorplan blueprint with glowing active counter walls.
      * Live Price Estimate Box with animated rolling numbers (`₹1,85,000 – ₹2,35,000`).
      * Hardware inclusion badge (`Hettich & Ebco standard`).
      * `"Share Design on WhatsApp"` primary CTA button.
    - **Right Column (56%)**:
      * Segmented chips for Layout (Straight, L, U, Parallel), Shutter Finish, Countertop, and Length Slider.
      * Everything stays aligned and visible without awkward vertical scrolling.

### 7. How It Works (Roadmap Progression)
- **Currently**: 4 independent cards.
- **Refinement**:
  - Add an illuminated hairline connector track running through the 4 steps (Day 1-2 → Day 3-5 → Day 6-7 → Day 21-30).
  - Step numbers `01`, `02`, `03`, `04` in elegant serif gold with day badges above.

### 8. Book a Site Visit Form (Balanced 2-Column Desktop Grid)
- **Currently**: Long vertical scroll.
- **Refinement**:
  - Left column: Dynamic 7-day picker pills + Time slot buttons.
  - Right column: Name, Phone, Hubli Locality (with quick chips), and Optional Notes.
  - Bottom: Full-width `"Confirm Visit via WhatsApp"` button with gold icon.

### 9. Reviews & Find Us
- **Reviews**: 3 symmetrical cards with gold star badges, quotation mark accents, and author locality tags.
- **Find Us**: 50/50 split on desktop: Left = studio facts, hours, phone, and maps button; Right = dark architectural map card with pulsing gold pin.

---

## 4. Fix 3: Making the Website Alive & Dynamic ("Nothing is happening")

To make the site feel responsive, state-of-the-art, and interactive:

1. **Scroll-Driven Reveal Micro-Animations**:
   - Add lightweight `IntersectionObserver` scroll reveals:
     - Section titles and subtitles fade up smoothly (`translateY(24px)` to `0`, `opacity: 0` to `1`).
     - Cards stagger in sequentially (100ms delay between cards).
     - Hairline dividers draw across smoothly (`scaleX(0)` to `1`).

2. **Interactive Rolling Price Counter (Configurator)**:
   - When switching layouts, finishes, or dragging the slider, the price does not jump statically. Instead, numbers roll smoothly like a luxury odometer/ticker, accompanied by a subtle champagne glow pulse on the price display.

3. **Dynamic Material Texture Visualizer**:
   - In the Configurator, as the user selects *Matt Laminate*, *Acrylic Gloss*, *PU Finish*, or *Walnut Veneer*, the preview card's background texture and reflection angle dynamically change to reflect that material's finish.

4. **Interactive SVG Architectural Blueprint**:
   - Active layout walls highlight with golden outline pulses, animated dimension callouts (e.g., `12 ft span`), and stove/sink icons positioned according to the chosen layout.

5. **Smooth Interactive Button Hover Sheen**:
   - Buttons feature a subtle diagonal light reflection sweep on hover, giving tactile luxury feedback.

6. **Card Specular Edge Reflection**:
   - Cards have dynamic cursor-driven or hover-driven specular edge highlights (`box-shadow: 0 12px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(200,168,125,0.2)`).

---

## 5. Implementation Roadmap (Awaiting Your Approval)

| Phase | Tasks |
|---|---|
| **Phase 1: Hero & Background** | Adjust hero brightness & contrast (`0.88`), apply directional left-gradient veil, enable subtle Ken Burns ambient zoom, brighten background ambient orbs. |
| **Phase 2: Layout & Grid Alignment** | Add desktop header navigation links, re-align collection cards to clean 3:4 aspect ratio, restructure Featured Project into 56/44 editorial split, re-align Materials into 28/72 side-by-side strip. |
| **Phase 3: 2-Column Configurator & Booking** | Split configurator into left blueprint/price and right controls; restructure booking form into 2 balanced columns. |
| **Phase 4: Dynamic Animations & Counters** | Implement scroll-reveal observer, rolling price number animations, SVG blueprint dimension callouts, and button hover sheen. |
| **Phase 5: Verification** | Test at 390px mobile and 1280px desktop, verify zero overflow, verify touch targets >= 44px, verify WhatsApp link encoding. |

---

> [!NOTE]
> This plan has been prepared without modifying existing site code. Please review the proposed refinements above and indicate if you would like me to proceed with execution or make further adjustments.
