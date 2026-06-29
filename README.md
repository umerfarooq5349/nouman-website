# Muhammad Nouman — Portfolio & GHL Automations Showcase

A premium, state-of-the-art developer portfolio and CRM marketing showcase for **Muhammad Nouman**, a Certified GoHighLevel Expert. Built with modern, high-fidelity web design principles, featuring fluid micro-interactions, smooth scroll hijacking, and fanned animations.

## Technical Architecture & Stack

### React Web Application (Next.js)
* **Framework**: Next.js 14 (App Router) with TypeScript.
* **Styling**: Tailwind CSS & vanilla CSS HSL tokens.
* **Animations**: 
  * **GSAP (GreenSock)**: Drives the fanned card carousel with responsive arc offsets, elastic mouse hovers, and click-to-center alignments.
  * **Framer Motion**: Powers staggered scroll-reveals, magnetic button wrappers, and progressive numbers counting.
  * **Lenis**: Integrated globally for inertial smooth scrolling.
* **Theme**: `next-themes` (Default: Dark Mode blend).

### Static HTML Landing Page (`/html-site/`)
* **Core**: Pure HTML5 and Vanilla CSS variables (no external framework overhead).
* **Interactions**: Custom lightweight JavaScript listeners implementing:
  * Fade-up keyframe entrance animations.
  * Transparent floating glass navigation bar that locks to a blurred dark pill upon scroll.
  * Mouse follow effect (lerped cursor follower ring with interactive hover triggers).
  * Staggered one-by-one process step entrances using `IntersectionObserver`.

---

## Key Components

### Card Fan Carousel (`/components/ui/card-fan-carousel.tsx`)
A custom-engineered GSAP slider displaying case studies in a fanned arc configuration:
* **Interactive Hover Spreading**: Cards dynamically shift left/right and lift up when hovered to reveal underlying details.
* **Inertial Scroll-Locking**: Active page scroll is hijacked (`e.stopPropagation()` and `e.preventDefault()`) when scrolling inside the fanned carousel. Page scrolling automatically releases once the user finishes reviewing all cards (reaches the first or last index).
* **Click-to-Center Navigation**: Clicking any non-centered card centers it, while clicking the active card directly navigates to its full case study page.

---

## Local Setup & Commands

### Prerequisites
Make sure you have Node.js installed.

### Installation
```bash
# Install NPM dependencies (Next.js, GSAP, Framer Motion, Lenis)
npm install
```

### Development
```bash
# Run Next.js local development server (accessible at http://localhost:3000)
npm run dev
```

### Production Build & Linting
```bash
# Compile TypeScript typecheck
npm run typecheck

# Build optimized production bundle
npm run build
```

---

## Deployment
Push changes to the GitHub repository. The application is configured for direct deployment via **Vercel**:
```bash
npx vercel
```
