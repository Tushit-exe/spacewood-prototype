# SpaceWood Interiors — Modular Studio Website Prototype

A luxury mobile-first and desktop web prototype designed and engineered for **SpaceWood Interiors**, a modular kitchen and bespoke wardrobe studio established in 2016 in Deshpande Nagar, Hubli, Karnataka.

---

## 🏛️ Studio Facts
- **Business**: SpaceWood Interiors (est. 2016 · 9+ Years of Craftsmanship)
- **Location**: F-32, First Floor, Laxmi Complex, Neeligin Road, beside Kittur Rani Chennamma Bank, Deshpande Nagar, Hubli 580029
- **Phone & WhatsApp**: +91 97390 77177
- **Operating Hours**: Monday–Saturday 10:00–19:00 | Sunday 10:00–13:00

---

## ✨ Design & Architectural Highlights

1. **Frosted Glass Header & Navigation**:
   - High-depth glassmorphic navigation bar (`backdrop-filter: blur(28px) saturate(190%)`) with specular top rim highlights.
   - Dedicated frosted capsule navigation buttons (`Collections`, `Commissions`, `Materials`, `Configurator`, `Process`, `Studio`).
   - Quick one-tap phone call button (`97390 77177`) and solid champagne gold `"Book a Visit"` pill.
   - Touch-friendly horizontal frosted quick navigation bar on mobile viewports.

2. **Dark, Warm Cinematic Aesthetic**:
   - Palette: Warm obsidian espresso (`#0C0A09`), champagne gold accents (`#C8A87D`), crisp off-white linen typography (`#F5F2EB`).
   - Cormorant Garamond light serif headings paired with Plus Jakarta Sans body copy.
   - Subtle tactile film grain texture and floating ambient warm light canvas.

3. **Glassmorphism Design System**:
   - Frosted glass cards across all 12 sections (`backdrop-filter: blur(24px)`), hairline specular borders, ambient depth glow, and `-5px` hover elevation.

4. **Interactive Kitchen Configurator**:
   - 2-Column Luxury Studio Suite on desktop:
     * **Left**: Interactive SVG architectural floorplan blueprint, live price bracket calculation box, and direct WhatsApp sharing button.
     * **Right**: Real-time selectors for Layout (Straight, L-Shape, U-Shape, Parallel), Shutter Finish, Countertop Stone, and 8–24 ft Length Slider.
   - Animated odometer price counter smoothly transitions estimated rates without static jumps.

5. **Site Visit Booking Form**:
   - Balanced 2-column desktop grid with dynamic next-7-days rolling calendar picker, 3 time windows, and one-tap Hubli locality quick chips (Deshpande Nagar, Vidyanagar, Shirur Park, Keshwapur, Gokul Road, Lingaraj Nagar).
   - Generates pre-filled WhatsApp message directly to studio management (`+91 97390 77177`).

6. **Full Responsive Fidelity**:
   - Engineered from mobile baseline (390px iPhone width) up to 4K displays (1440px+).
   - Minimum tap target sizes >= 44px, zero horizontal overflow.

---

## 🛠️ Technology Stack
- **Structure**: Semantic HTML5 (Single `<h1>`, proper heading hierarchy, descriptive landmarks)
- **Styling**: Vanilla CSS (CSS Design Tokens, Glassmorphism, CSS Grid, Flexbox, Keyframe Animations)
- **Scripting**: Modern Vanilla JavaScript (Zero external libraries, single configurable WhatsApp constant)

---

## 🚀 Running Locally

You can serve the prototype with any standard local HTTP server:

```bash
# Using Python 3
python3 -m http.server 8088

# Or using Node.js / npx
npx serve .
```

Open `http://localhost:8088/` in your browser.

---

## 📄 License
Created as a client prototype for SpaceWood Interiors, Hubli. All customer ratings, reviews, and project photography represent demonstration content for client presentation.
