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
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Parallax logic using standard requestAnimationFrame for butter smooth rendering
    const handleScroll = () => {
      if (!logoWrapperRef.current) return;
      const rect = logoWrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress of scroll through this 150vh wrapper
      const totalScrollable = rect.height + windowHeight;
      const currentScroll = windowHeight - rect.top;
      const rawProgress = currentScroll / totalScrollable;
      const progress = Math.max(0, Math.min(1, rawProgress));

      // 1. Parallax items movement
      toolEls.current.forEach((el, index) => {
        if (!el) return;
        const tool = tools[index];
        // Standard data-parallax-speed multiplier (standard delta of 250px)
        const delta = progress * 250 * tool.speed;
        el.style.transform = `translate3d(0, ${-delta}px, 0)`;
      });

      // 2. Reveal text opacity fade-in at 55% progress
      if (revealEl.current) {
        if (progress > 0.48) {
          revealEl.current.style.opacity = "1";
        } else {
          revealEl.current.style.opacity = "0";
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run initial trigger
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      ref={logoWrapperRef}
      className="relative w-full h-[140vh] md:h-[150vh] bg-background flex items-center justify-center"
    >
      {/* Sticky container for logos and text */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Parallax Logo Canvas */}
        <div className="relative w-full max-w-6xl h-[80vh] mx-auto px-6">
          {tools.map((tool, i) => {
            const pos: React.CSSProperties = {
              position: "absolute",
              top: tool.top,
            };

            // Responsive left mappings
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
            className="font-heading font-medium text-center text-balance px-8 py-6 rounded-3xl bg-background/70 backdrop-blur-md border border-border/40 shadow-2xl"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 2.1rem)",
              lineHeight: 1.4,
              color: "hsl(var(--primary))",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "82%",
              maxWidth: "800px",
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
