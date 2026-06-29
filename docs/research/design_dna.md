# Design DNA — Reconnaissance & Synthesis

**Mode:** Modern Hybrid (keep proven layout structure, upgrade aesthetics).
**Site archetype:** Premium personal / agency portfolio with motion-led interactions.

> Method note: Chris Orlob and Clayo were read from live source via fetch. Ollivere blocks
> automated access, and the Made-in-Webflow portfolio + Kaifox render content client-side,
> so those three are synthesized from their genre conventions plus the specific behaviors you
> flagged. No automated multi-breakpoint screenshots were taken (no headless browser in this
> environment); responsive targets below follow standard Webflow breakpoints, which all five
> references use.

---

## 1. What we're pulling from each reference

| URL | What you liked | What we extract |
|-----|----------------|-----------------|
| indev portfolio (Made-in-Webflow) | Mouse-follow effect | Custom cursor that lerps toward pointer; grows/labels on hover over links & work tiles |
| Clayo | Animations + smooth scroll | Lenis smooth scroll, soft card UI, bento feature grid, stat blocks, tabbed features |
| Kaifox "Modern Flow" | Animations + smooth scroll | Section reveal on scroll (mask/translate-up), image parallax, page transitions |
| Chris Orlob | Design + element placement + presentation | Editorial hero (headshot + layered backdrop), numbered 4-step section, testimonial wall, strong single-column CTA rhythm |
| Ollivere | Overall website flow | Calm narrative top-to-bottom pacing, generous whitespace, one clear CTA per section |

**Net direction:** dark-first, high-contrast, lots of breathing room, one vivid accent, and motion that feels physical (smooth scroll + magnetic + cursor) rather than decorative.

---

## 2. Color palette (Tailwind / shadcn HSL tokens)

Dark is the primary surface (matches the motion-portfolio genre); light mode is a first-class toggle.
Accent is intentionally a single swappable token — drop in any brand hex and the whole site retunes.

```css
/* globals.css — :root = light, .dark = dark */
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 6%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 6%;
  --muted: 240 5% 96%;
  --muted-foreground: 240 4% 46%;
  --border: 240 6% 90%;
  --primary: 245 80% 60%;          /* accent — swap to brand here */
  --primary-foreground: 0 0% 100%;
  --ring: 245 80% 60%;
  --radius: 0.9rem;
}

.dark {
  --background: 240 10% 4%;         /* near-black, slight cool */
  --foreground: 0 0% 98%;
  --card: 240 8% 7%;
  --card-foreground: 0 0% 98%;
  --muted: 240 6% 12%;
  --muted-foreground: 240 5% 65%;
  --border: 240 6% 16%;
  --primary: 245 90% 66%;
  --primary-foreground: 240 10% 4%;
  --ring: 245 90% 66%;
}
```

Supporting surface effects:
- **Glow border:** `1px` border at `hsl(var(--border))` + soft `box-shadow` in `--primary` at ~12% alpha on hover.
- **Glass:** `backdrop-blur-md` + `bg-background/60` for the sticky nav and floating cards.
- **Grain/noise:** optional very-low-opacity noise PNG over the hero for depth (toggle).

> Default accent is indigo (`245`). Tell me a hex (e.g. your brand blue) and I'll set `--primary`
> across both themes — that's a one-line change, not a rebuild.

---

## 3. Typography

Two-family system, both available through `next/font/google` (zero layout shift, Vercel-friendly):

- **Display / headings:** `Outfit` — geometric, confident, great at large sizes.
- **Body / UI:** `Inter` — neutral, highly legible at small sizes.

| Token | Font | Size (desktop) | Weight | Tracking | Use |
|-------|------|----------------|--------|----------|-----|
| display-xl | Outfit | clamp(3rem → 6rem) | 600 | -0.03em | Hero headline |
| display-lg | Outfit | clamp(2.25rem → 3.5rem) | 600 | -0.02em | Section titles |
| heading | Outfit | 1.5rem | 600 | -0.01em | Card titles |
| body-lg | Inter | 1.125rem | 400 | 0 | Lead paragraphs |
| body | Inter | 1rem | 400 | 0 | Default text |
| label | Inter | 0.8125rem | 500 | 0.08em uppercase | Eyebrows / tags |

Line-height: 1.05–1.1 on display, 1.6 on body. Headlines may use a subtle character/word
reveal animation (mask + translate-y) to echo Kaifox.

---

## 4. Layout & spacing

- **Container:** `max-width: 1280px`, side padding `clamp(1.25rem, 5vw, 4rem)`. Some sections go full-bleed (marquee, work gallery) with inner content still capped.
- **Section rhythm:** vertical padding `clamp(5rem, 12vh, 9rem)`. Generous, Ollivere-style.
- **Grid:** 12-col conceptual; bento feature grid uses a 6-col span mix (matches Clayo's uneven feature tiles).
- **Breakpoints (Tailwind defaults, aligned to Webflow):** mobile `<640`, `sm 640`, `md 768` (tablet), `lg 1024`, `xl 1280` (desktop target 1440 sits inside the capped container).
- **Radius:** `--radius: 0.9rem` base; pill buttons `9999px`.

---

## 5. Motion system (the part you care about most)

| Behavior | Library | Where |
|----------|---------|-------|
| Smooth scroll (inertia/lerp) | **Lenis** | Global, wraps the app |
| Mouse-follow custom cursor | Custom React + `requestAnimationFrame` lerp | Global; states: default dot, hover-grow on links, "View" label over work tiles |
| Magnetic buttons / nav links | Framer Motion springs | CTAs, nav, social icons |
| Scroll reveal (mask + translate-up) | Framer Motion `whileInView` | Section headings, cards, list items (stagger) |
| Image parallax | Framer Motion `useScroll` + `useTransform` | Hero media, work thumbnails |
| Scroll progress bar | Framer Motion `useScroll` | Top of viewport |
| Marquee logo strip | CSS keyframes / Framer | Trust bar under hero |
| Page transitions | Framer Motion `AnimatePresence` | Route changes |

**Accessibility guardrails:** every motion respects `prefers-reduced-motion` (cursor falls back to native, Lenis disabled, reveals become instant). Custom cursor is `pointer-events-none` and never traps focus. All interactive elements keep visible focus rings + full keyboard nav.

---

## 6. Page flow (top → bottom)

Synthesized from Chris Orlob's CTA rhythm + Ollivere's calm pacing + Clayo's content blocks:

1. **Sticky glass nav** — logo, links (magnetic), theme toggle, primary CTA.
2. **Hero** — eyebrow + display headline (word reveal) + sub + dual CTA + layered media with parallax. Custom cursor active.
3. **Trust marquee** — logos / "as seen in" strip.
4. **About / intro** — short narrative + animated stat counters (Clayo's 95% / 10+ / $10m pattern).
5. **Services / Feature bento** — uneven grid of capability cards with glow-border hover.
6. **Selected work** — gallery of project tiles; hover shows "View" cursor label + image parallax (the indev mouse-follow showcase).
7. **Process** — numbered 4-step section (Chris Orlob structure) with scroll-pinned or staggered reveal.
8. **Testimonials** — star ratings + avatar + quote wall (Chris Orlob + Clayo blend).
9. **Big CTA** — single-column, high-contrast, magnetic button.
10. **Footer** — sitemap, socials, theme toggle, back-to-top.

---

## 7. Asset / 3D flag

None of the readable references require a true 3D (Spline/Three) scene — the "depth" comes from
layered 2D media + parallax + cursor, which we get natively. **Spline 3D Animator workflow is NOT
triggered** for the current scope. If you later want an interactive 3D hero object, that's an
additive task and I'll flag it then.
