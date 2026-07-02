"use client";

import { useRef, useCallback, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { TextReveal } from "@/components/motion/text-reveal";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hasInteracted = useRef(false);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yPanel = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yBg = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yChipA = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yChipB = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Spring physics for smooth mouse follow translation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 120 };
  const moveX = useSpring(mouseX, springConfig);
  const moveY = useSpring(mouseY, springConfig);

  // Direct DOM mutation for spotlight + framer motion spring updates
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (overlayRef.current) {
      if (!hasInteracted.current) {
        hasInteracted.current = true;
        overlayRef.current.style.opacity = "1";
      }
      overlayRef.current.style.background = `radial-gradient(
        circle 380px at ${x}px ${y}px,
        transparent 0%,
        transparent 60px,
        hsl(var(--background) / 0.55) 190px,
        hsl(var(--background) / 0.92) 380px
      )`;
    }

    // Parallax mouse follow calculation (translates max -25px to 25px)
    if (!prefersReduced) {
      const width = rect.width;
      const height = rect.height;
      const xOffset = ((e.clientX - rect.left) / width - 0.5) * 50;
      const yOffset = ((e.clientY - rect.top) / height - 0.5) * 50;
      mouseX.set(xOffset);
      mouseY.set(yOffset);
    }
  }, [mouseX, mouseY, prefersReduced]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    if (!overlayRef.current) return;
    overlayRef.current.style.opacity = "0";
    hasInteracted.current = false;
  }, [mouseX, mouseY]);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    section.addEventListener("mousemove", handleMouseMove, { passive: true });
    section.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <section
      ref={ref}
      id="top"
      className="dark bg-background text-foreground relative overflow-hidden pb-16 pt-36 sm:pt-44"
    >
      {/* ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[640px] w-[900px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, hsl(var(--primary) / 0.35), transparent)",
        }}
      />

      {/* Static Base Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/bg.png"
          alt="Background grid"
          className="w-full h-full object-cover object-center opacity-65"
        />
      </div>

      {/* Multi-Layered Parallax Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden w-full h-[120%] pointer-events-none">
        {/* Layer 2: nouman.png (Portrait which follows the mouse) */}
        <motion.div
          style={{ 
            y: yBg,
            x: moveX,
            translateY: moveY,
          }}
          className="absolute inset-0 w-full h-full opacity-35 sm:opacity-100 transition-opacity duration-300 z-10"
        >
          <img
            src="/nouman.png"
            alt="Muhammad Nouman profile"
            className="w-full h-full object-cover object-top"
          />
          {/* Gradients to blend the background image on edges softly */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/25 to-transparent z-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
        </motion.div>
      </div>

      {/* Mouse spotlight overlay — sits behind content, pointer-events:none so clicks pass through */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          opacity: 0,
          transition: "opacity 0.6s ease",
          background: "transparent",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge>
              <Sparkles className="size-3.5 text-primary" aria-hidden />
              {site.role}
            </Badge>
          </motion.div>

          <TextReveal
            as="h1"
            text={site.headline}
            delay={0.1}
            className="mt-6 max-w-[14ch] font-display text-display-xl font-semibold text-balance"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            {site.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic strength={0.25}>
              <Button asChild size="lg" data-cursor>
                <a href={site.calendly} target="_blank" rel="noopener noreferrer">
                  {site.primaryCtaLabel}
                  <ArrowRight aria-hidden />
                </a>
              </Button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Button asChild variant="outline" size="lg" data-cursor>
                <a href="#work">{site.secondaryCtaLabel}</a>
              </Button>
            </Magnetic>
          </motion.div>
        </div>

        {/* parallax visual */}
        <motion.div style={{ opacity }} className="relative">
          <motion.div
            style={{ y: yPanel }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm rounded-3xl border border-border bg-card glow-border"
          >
            {/* Technical grid dashboard pattern */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.06] dark:opacity-[0.12] rounded-3xl"
              style={{
                backgroundImage:
                  "linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-card/30 via-card/75 to-card" aria-hidden />
            <div className="relative flex h-full flex-col justify-between p-7">
              <div className="space-y-3">
                <div className="h-2.5 w-24 rounded-full bg-muted-foreground/30" />
                <div className="h-9 w-44 rounded-xl bg-primary/20" />
              </div>
              <div className="space-y-3">
                {["New lead captured", "Booking confirmed", "Follow-up sent"].map(
                  (t) => (
                    <div
                      key={t}
                      className="flex items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3"
                    >
                      <CheckCircle2 className="size-4 text-primary" aria-hidden />
                      <span className="text-sm text-foreground/80">{t}</span>
                    </div>
                  )
                )}
              </div>

              {/* Growth elements / graph */}
              <div className="mt-4 border-t border-border/50 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground font-medium">Monthly Bookings Growth</span>
                  <span className="text-xs text-primary font-semibold flex items-center gap-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                    +142%
                  </span>
                </div>
                {/* Mini SVG Area Chart */}
                <svg viewBox="0 0 200 60" width="100%" height="60" className="overflow-visible">
                  <defs>
                    <linearGradient id="grad-react" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  <line x1="0" y1="10" x2="200" y2="10" stroke="hsl(var(--border) / 0.3)" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="0" y1="30" x2="200" y2="30" stroke="hsl(var(--border) / 0.3)" strokeWidth="0.5" stroke-dasharray="2 2" />
                  <line x1="0" y1="50" x2="200" y2="50" stroke="hsl(var(--border) / 0.3)" stroke-width="0.5" stroke-dasharray="2 2" />
                  {/* Area path */}
                  <path d="M 0 50 Q 25 45 50 35 T 100 30 T 150 15 T 200 5 L 200 60 L 0 60 Z" fill="url(#grad-react)" />
                  {/* Line path */}
                  <path d="M 0 50 Q 25 45 50 35 T 100 30 T 150 15 T 200 5" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
                  {/* Data point dots */}
                  <circle cx="200" cy="5" r="4" fill="hsl(var(--primary))" />
                  <circle cx="200" cy="5" r="7" fill="none" stroke="hsl(var(--primary))" stroke-width="1.5" opacity="0.5" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* floating chips */}
          <motion.div
            style={{ y: yChipA }}
            className="absolute -left-2 top-10 hidden rounded-2xl border border-border bg-card px-4 py-3 glow-border sm:block"
          >
            <p className="font-display text-2xl font-semibold">+38%</p>
            <p className="text-xs text-muted-foreground">show-up rate</p>
          </motion.div>
          <motion.div
            style={{ y: yChipB }}
            className="absolute -right-2 bottom-8 hidden rounded-2xl border border-border bg-card px-4 py-3 glow-border sm:block"
          >
            <p className="font-display text-2xl font-semibold">24/7</p>
            <p className="text-xs text-muted-foreground">AI booking</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
