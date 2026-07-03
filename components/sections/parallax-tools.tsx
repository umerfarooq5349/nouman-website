"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ToolItem {
  name: string;
  speed: number;   // data-parallax-speed equivalent
  opacity: number;
  fontSize: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  link: string;
  logoSrc: string;
}

// Placed in distinct Left (left: 2% or 10%) and Right (right: 2% or 10%) zones to keep the center completely empty
const tools: ToolItem[] = [
  { name: "Clay",          speed: 0.16, opacity: 1.0,  fontSize: "2.6rem",  top: "8%",  left: "15%", link: "https://clay.com/?via=nouman", logoSrc: "/affiliate-logos/clay.png" },
  { name: "Apify",         speed: 0.08, opacity: 0.75, fontSize: "1.8rem",  top: "10%", left: "50%", link: "https://apify.com/?fpr=yvcnzu", logoSrc: "/affiliate-logos/apify.png" },
  { name: "GoHighLevel",   speed: 0.20, opacity: 1.0,  fontSize: "2.8rem",  top: "8%",  left: "80%", link: "https://www.gohighlevel.com/634876b5?fp_ref=ignitto26", logoSrc: "/affiliate-logos/gohighlevel.png" },
  
  { name: "Malcare",       speed: 0.07, opacity: 0.55, fontSize: "1.4rem",  top: "30%", left: "8%",  link: "https://malcare.com/?src=F0F396", logoSrc: "/affiliate-logos/malecare.png" },
  { name: "Make.com",      speed: 0.14, opacity: 1.0,  fontSize: "2.3rem",  top: "32%", left: "42%", link: "https://www.make.com/en/register?pc=ignitto", logoSrc: "/affiliate-logos/make.png" },
  { name: "Lovable.dev",   speed: 0.10, opacity: 0.80, fontSize: "2.0rem",  top: "30%", left: "75%", link: "https://lovable.dev/?via=muhammad-nouman", logoSrc: "/affiliate-logos/lovable.png" },
  
  { name: "Keap",          speed: 0.05, opacity: 0.60, fontSize: "1.5rem",  top: "55%", left: "20%", link: "https://get.keap.com/btccdnpsegsv", logoSrc: "/affiliate-logos/keap.png" },
  { name: "Instantly.ai",  speed: 0.12, opacity: 1.0,  fontSize: "2.4rem",  top: "68%", left: "65%", link: "https://instantly.ai/?via=muhammad-nouman", logoSrc: "/affiliate-logos/instantly.png" },
  
  { name: "Hunter.io",     speed: 0.09, opacity: 0.75, fontSize: "1.9rem",  top: "78%", left: "15%", link: "https://hunter.io/?via=muhammad", logoSrc: "/affiliate-logos/hunter.png" },
  { name: "Snov.io",       speed: 0.11, opacity: 0.75, fontSize: "2.0rem",  top: "80%", left: "75%", link: "https://snov.io/?fp_ref=muhammad97", logoSrc: "/affiliate-logos/snov.png" },
];

export function ParallaxToolsSection() {
  // ref on the 150vh logo wrapper only — same as logoWrapper in test.html
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const toolEls = useRef<(HTMLElement | null)[]>([]);
  const revealEl = useRef<HTMLElement | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const logoWrapper = logoWrapperRef.current;
    if (!logoWrapper) return;

    function onScroll() {
      if (!logoWrapper) return;
      const rect = logoWrapper.getBoundingClientRect();
      const wh = window.innerHeight;

      // Exact formula from test.html
      const total = logoWrapper.offsetHeight + wh;
      const scrolled = wh - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      const range = logoWrapper.offsetHeight;

      toolEls.current.forEach((el, i) => {
        if (!el) return;
        const speed = tools[i].speed;
        const shift = (progress - 0.5) * range * speed * -1;
        el.style.transform = `translate3d(0px, ${shift.toFixed(2)}px, 0px)`;
      });

      // Fade in reveal text at progress > 0.55 (test.html uses 0.55)
      if (revealEl.current) {
        revealEl.current.style.opacity = progress > 0.55 ? "1" : "0";
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-background border-t border-border/40 py-16">
      {/* ── Intro copy wrapper ─── */}
      <div
        className="flex flex-col items-center justify-center mb-8"
        style={{ height: "20vh" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-semibold text-center text-balance px-4"
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
            lineHeight: 1.4,
            color: "hsl(var(--foreground))",
            maxWidth: "72%",
          }}
        >
          I build on the world&apos;s most powerful marketing &amp; automation platforms.
        </motion.h2>
      </div>

      {/* ── Logo cloud ─── */}
      <div
        ref={logoWrapperRef}
        style={{ height: "80vh", position: "relative", overflow: "hidden" }}
      >
        <div
          style={{
            position: "relative",
            width: "90%",
            height: "100%",
            margin: "0 auto",
          }}
        >
          {tools.map((tool, i) => {
            const pos: React.CSSProperties = {};
            if (tool.top) pos.top = tool.top;
            if (tool.bottom) pos.bottom = tool.bottom;

            if (isMobile && tool.left) {
              const val = parseFloat(tool.left);
              pos.left = `${(val * 0.7 + 15).toFixed(1)}%`;
              pos.transform = "translateX(-50%)"; // Center aligned anchor
            } else if (tool.left) {
              pos.left = tool.left;
              pos.transform = "translateX(-50%)"; // Center aligned anchor
            }

            return (
              <a
                key={tool.name}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => { toolEls.current[i] = el; }}
                className="parallax-item transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer flex items-center justify-center"
                style={{
                  ...pos,
                  opacity: isMobile ? tool.opacity * 0.45 : tool.opacity,
                  zIndex: 20,
                }}
              >
                <img
                  src={tool.logoSrc}
                  alt={tool.name}
                  className="h-10 md:h-12 w-auto object-contain transition-all duration-300 opacity-80 hover:opacity-100"
                />
              </a>
            );
          })}

          {/* Reveal text — fades in at 55% progress */}
          <h3
            ref={(el) => { revealEl.current = el; }}
            className="font-heading font-medium text-center text-balance"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 2.1rem)",
              lineHeight: 1.4,
              color: "hsl(var(--primary))",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "72%",
              zIndex: 10,
              opacity: 0,
              transition: "opacity 0.8s ease",
            }}
          >
            Powering results for agencies and businesses across the{" "}
            <span className="text-[#FFC64F] font-semibold">US, UK, UAE</span>, and beyond.
          </h3>
        </div>
      </div>
    </div>
  );
}
