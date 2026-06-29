# Implementation Plan

**Project:** Modern Hybrid motion portfolio
**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion · Lucide React · Lenis (smooth scroll) · next-themes
**Deploy:** Vercel

---

## 1. Architecture overview

A single-page (with room for `/work/[slug]` later) marketing/portfolio site. Server Components
render static content; a thin layer of Client Components owns all motion (cursor, smooth scroll,
reveals). This keeps the bundle lean and the page fast while still feeling alive.

```
project/
├─ app/
│  ├─ layout.tsx              # fonts, <Providers>, metadata
│  ├─ page.tsx                # composes the sections
│  ├─ globals.css             # tokens + base layers
│  └─ providers.tsx          # ThemeProvider + SmoothScroll + Cursor mount
├─ components/
│  ├─ layout/
│  │  ├─ header.tsx
│  │  ├─ footer.tsx
│  │  └─ scroll-progress.tsx
│  ├─ sections/
│  │  ├─ hero.tsx
│  │  ├─ marquee.tsx
│  │  ├─ about-stats.tsx
│  │  ├─ services-bento.tsx
│  │  ├─ work-gallery.tsx
│  │  ├─ process-steps.tsx
│  │  ├─ testimonials.tsx
│  │  └─ cta.tsx
│  ├─ motion/
│  │  ├─ smooth-scroll.tsx     # Lenis provider
│  │  ├─ custom-cursor.tsx     # mouse-follow
│  │  ├─ magnetic.tsx          # magnetic wrapper
│  │  ├─ reveal.tsx            # whileInView mask/translate
│  │  ├─ text-reveal.tsx       # per-word headline reveal
│  │  └─ count-up.tsx          # stat counters
│  └─ ui/                      # shadcn primitives (button, card, badge…)
├─ lib/
│  ├─ utils.ts                 # cn()
│  └─ content.ts               # all copy/data in one typed file (easy to edit)
├─ docs/research/design_dna.md
├─ tasks.md
└─ config files (tailwind, tsconfig, next, components.json…)
```

**Content strategy:** every piece of text/data lives in `lib/content.ts` as typed objects, so you
(or your team) can swap copy, projects, and testimonials without touching component code.

---

## 2. Build sequence (why this order)

Dependencies flow downward — nothing later breaks something earlier.

1. **Foundation** — scaffold, Tailwind, tokens, fonts, `cn()`, shadcn init. *(Everything depends on this.)*
2. **Providers & motion primitives** — theme, Lenis, cursor, reveal/magnetic/text-reveal/count-up. *(Sections consume these.)*
3. **Layout shell** — header, footer, scroll progress. *(Frames every section.)*
4. **Sections, top→bottom** — hero → marquee → about → services → work → process → testimonials → CTA. *(Each is self-contained and uses primitives from step 2.)*
5. **Content pass** — fill `content.ts`, real copy/placeholders, OG metadata, favicon.
6. **Polish & a11y** — reduced-motion, keyboard/ARIA audit, focus rings, responsive sweep at 1440/768/390.
7. **Performance & deploy prep** — image optimization, font display swap, Lighthouse pass, `vercel` config, README.

---

## 3. Key technical decisions

- **Smooth scroll:** Lenis (not CSS `scroll-behavior`) because it gives the inertial feel from Clayo/Kaifox and integrates with Framer's `useScroll`.
- **Cursor:** custom, RAF-lerp based (not a library) so we control hover states/labels and respect reduced-motion.
- **Theme:** `next-themes` with `class` strategy; tokens already defined for both modes in `design_dna.md`.
- **Animations:** Framer Motion only (no GSAP) to keep one motion mental model and a smaller dep tree.
- **No 3D:** Spline/Three not needed for this scope (see DNA §7).

---

## 4. Risks / things to confirm

- **Whose site & real content?** References are personal/agency portfolios. I'll build with structured placeholder copy and a clear `content.ts` you can fill. Tell me the brand name, tagline, services list, and 3–6 projects whenever ready — doesn't block the build.
- **Accent color:** defaulting to indigo `245`; give me a hex to lock your brand.
- **Cursor on touch devices:** auto-disabled on coarse pointers (mobile/tablet) — they get the clean static version, which is correct UX.
- **Fonts:** Outfit + Inter via `next/font`. Swappable to any Google font in one place.

---

## 5. Definition of done

- Builds clean (`next build`), TypeScript strict, no console errors.
- Smooth scroll + custom cursor + reveals + magnetic + parallax all working.
- Light/dark toggle with no flash, persisted.
- Passes `prefers-reduced-motion`; keyboard-navigable; visible focus.
- Responsive at 390 / 768 / 1440.
- One-command deploy to Vercel; README with setup + customization notes.
