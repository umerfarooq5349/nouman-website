# Muhammad Nouman — Portfolio

Personal site for a Certified GoHighLevel Expert. Modern Hybrid build with a
mouse-follow cursor, inertial smooth scroll, and scroll-reveal motion.

## Stack
- Next.js 14 (App Router) · TypeScript
- Tailwind CSS · shadcn-style UI primitives
- Framer Motion (reveals, magnetic, parallax, page motion)
- Lenis (smooth scroll) · next-themes (dark/light)
- Lucide React (icons) · Fontsource (self-hosted Inter + Outfit)

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Customize
- **All copy & data:** `lib/content.ts` (nav, hero, services, work, process, testimonials, stats).
- **Accent color:** change the single `--primary` token in `app/globals.css` (both `:root` and `.dark`). Default is indigo.
- **Fonts:** swap the Fontsource imports in `app/layout.tsx` and the `--font-*` vars in `globals.css`.
- **Theme default:** `app/providers.tsx` (`defaultTheme`).

## Motion components (`components/motion/`)
- `custom-cursor.tsx` — mouse-follow cursor; shows a "View" label over `[data-cursor="view"]` tiles. Auto-off on touch / reduced-motion.
- `smooth-scroll.tsx` — Lenis provider (off on reduced-motion).
- `magnetic.tsx`, `reveal.tsx`, `text-reveal.tsx`, `count-up.tsx`.

All motion respects `prefers-reduced-motion`.

## Deploy (Vercel)
Push to a Git repo and import in Vercel, or:
```bash
npx vercel
```
No env vars required.

## Status
Phases 0–3 complete (foundation, motion, layout, all sections). Remaining:
content polish with real assets, full a11y/responsive sweep, and perf/Lighthouse pass — see `tasks.md`.
