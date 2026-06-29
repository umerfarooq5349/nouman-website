# tasks.md — Build Checklist

Legend: `[ ]` todo · `[~]` in progress · `[x]` done
Phases are sequential; items inside a phase can be parallel unless noted.

---

## Phase 0 — Foundation  ✅ DONE
- [x] Scaffold Next.js 14 (App Router, TypeScript) — manual, Tailwind v3 for token control
- [x] Install deps: framer-motion, lucide-react, lenis, next-themes, clsx, tailwind-merge, cva
- [x] UI primitives (shadcn-style, hand-written): `button`, `card`, `badge`
- [x] `lib/utils.ts` → `cn()`
- [x] `globals.css` → light/dark HSL tokens
- [x] Fonts: Outfit + Inter — self-hosted via Fontsource (no runtime Google fetch)
- [x] `tailwind.config.ts` → container 1280, radius, font tokens, color mapping, marquee anim

## Phase 1 — Providers & motion primitives  ✅ DONE
- [x] `providers.tsx` → ThemeProvider (no-flash), SmoothScroll, CustomCursor
- [x] `motion/smooth-scroll.tsx` → Lenis (off on reduced-motion)
- [x] `motion/custom-cursor.tsx` → RAF-lerp cursor; default/hover/"View" states; coarse-pointer + reduced-motion fallback
- [x] `motion/magnetic.tsx` → magnetic spring wrapper
- [x] `motion/reveal.tsx` → whileInView fade/translate, stagger
- [x] `motion/text-reveal.tsx` → per-word headline reveal
- [x] `motion/count-up.tsx` → in-view stat counter

## Phase 2 — Layout shell  ✅ DONE
- [x] `layout/header.tsx` → glass sticky nav, magnetic links, theme toggle, CTA, mobile menu
- [x] `layout/scroll-progress.tsx` → top progress bar
- [x] `layout/footer.tsx` → sitemap, socials, back-to-top
- [x] `layout/theme-toggle.tsx`
- [x] Providers + shell mounted in `app/layout.tsx`; metadata + skip link

## Phase 3 — Sections (top → bottom)  ✅ DONE
- [x] `sections/hero.tsx` → word-reveal headline, dual CTA, parallax dashboard visual + floating chips
- [x] `sections/marquee.tsx` → platforms strip (GoHighLevel, Apollo, Instantly…)
- [x] `sections/about-stats.tsx` → narrative + animated stat counters
- [x] `sections/services-bento.tsx` → uneven grid, glow-border hover
- [x] `sections/work-gallery.tsx` → project tiles, "View" cursor label, hover parallax
- [x] `sections/process-steps.tsx` → numbered 4-step
- [x] `sections/testimonials.tsx` → rating + quote wall
- [x] `sections/cta.tsx` → single-column magnetic CTA
- [x] Composed in `app/page.tsx`
- [x] Content tailored to Muhammad Nouman in `lib/content.ts`
- [x] `npm run build` passes · `tsc --noEmit` clean

---

## Phase 4 — Content  (NEXT — needs your input)
- [ ] Replace PLACEHOLDER testimonials with real, attributed quotes
- [ ] Confirm/replace stat figures; confirm public contact email
- [ ] Real project images/case-study links for Work gallery
- [ ] Add YouTube + Instagram URLs in `socials`
- [ ] Lock accent hex (default indigo)
- [ ] Favicon / OG image

## Phase 5 — Polish & accessibility
- [ ] `prefers-reduced-motion` end-to-end re-verify
- [ ] Keyboard nav + focus audit on every interactive
- [ ] ARIA/landmark sweep; contrast check both themes
- [ ] Responsive pass @ 390 / 768 / 1440

## Phase 6 — Performance & deploy
- [ ] `next/image` for real media; lazy-load below the fold
- [ ] Lighthouse pass
- [ ] Vercel deploy

---

### Notes
- Spline/3D: NOT triggered — depth comes from layered 2D + parallax + cursor.
