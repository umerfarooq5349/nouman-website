"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hand } from "lucide-react";

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

// Placed in distinct Left and Right zones to keep the center empty for text
const tools: ToolItem[] = [
  // Row 1 (top) - 3 logos
  { name: "Clay",          speed: 0.16, opacity: 1.0,  fontSize: "2.6rem",  top: "8%",  left: "15%", link: "https://clay.com/?via=nouman", logoSrc: "/affiliate-logos/clay.png" },
  { name: "Apify",         speed: 0.08, opacity: 0.75, fontSize: "1.8rem",  top: "10%", left: "48%", link: "https://apify.com/?fpr=yvcnzu", logoSrc: "/affiliate-logos/apify.png" },
  { name: "GoHighLevel",   speed: 0.20, opacity: 1.0,  fontSize: "2.8rem",  top: "8%",  left: "80%", link: "https://www.gohighlevel.com/634876b5?fp_ref=ignitto26", logoSrc: "/affiliate-logos/gohighlevel.png" },
  
  // Row 2 - 4 logos
  { name: "Malcare",       speed: 0.07, opacity: 0.55, fontSize: "1.4rem",  top: "28%", left: "8%",  link: "https://malcare.com/?src=F0F396", logoSrc: "/affiliate-logos/malecare.png" },
  { name: "Extendly",      speed: 0.13, opacity: 0.85, fontSize: "2.0rem",  top: "30%", left: "30%", link: "https://www.gohighlevel.com/634876b5?fp_ref=ignitto26", logoSrc: "/affiliate-logos/extendly.png" },
  { name: "Make.com",      speed: 0.14, opacity: 1.0,  fontSize: "2.3rem",  top: "32%", left: "65%", link: "https://www.make.com/en/register?pc=ignitto", logoSrc: "/affiliate-logos/make.png" },
  { name: "Lovable.dev",   speed: 0.10, opacity: 0.80, fontSize: "2.0rem",  top: "28%", left: "88%", link: "https://lovable.dev/?via=muhammad-nouman", logoSrc: "/affiliate-logos/lovable.png" },
  
  // Row 3 (center) - 2 logos on extreme margins to keep center empty
  { name: "Warmly",        speed: 0.15, opacity: 0.80, fontSize: "2.1rem",  top: "48%", left: "12%", link: "https://clay.com/?via=nouman", logoSrc: "/affiliate-logos/warmly.png" },
  { name: "Keap",          speed: 0.05, opacity: 0.60, fontSize: "1.5rem",  top: "48%", left: "85%", link: "https://get.keap.com/btccdnpsegsv", logoSrc: "/affiliate-logos/keap.png" },
  
  // Row 4 - 4 logos
  { name: "Platform 10",   speed: 0.09, opacity: 0.85, fontSize: "1.8rem",  top: "68%", left: "8%",  link: "https://www.gohighlevel.com/634876b5?fp_ref=ignitto26", logoSrc: "/affiliate-logos/10.png" },
  { name: "Platform 4",    speed: 0.11, opacity: 0.85, fontSize: "1.8rem",  top: "70%", left: "25%", link: "https://www.gohighlevel.com/634876b5?fp_ref=ignitto26", logoSrc: "/affiliate-logos/04.png" },
  { name: "Instantly.ai",  speed: 0.12, opacity: 1.0,  fontSize: "2.4rem",  top: "70%", left: "65%", link: "https://instantly.ai/?via=muhammad-nouman", logoSrc: "/affiliate-logos/instantly.png" },
  { name: "Hunter.io",     speed: 0.09, opacity: 0.75, fontSize: "1.9rem",  top: "68%", left: "88%", link: "https://hunter.io/?via=muhammad", logoSrc: "/affiliate-logos/hunter.png" },
  
  // Row 5 (bottom) - 2 logos
  { name: "Snov.io",       speed: 0.11, opacity: 0.75, fontSize: "2.0rem",  top: "88%", left: "20%", link: "https://snov.io/?fp_ref=muhammad97", logoSrc: "/affiliate-logos/snov.png" },
  { name: "Platform 14",   speed: 0.13, opacity: 0.85, fontSize: "1.8rem",  top: "88%", left: "80%", link: "https://www.gohighlevel.com/634876b5?fp_ref=ignitto26", logoSrc: "/affiliate-logos/14.png" },
];

interface DraggableLogoProps {
  tool: ToolItem;
  isMobile: boolean;
  dragConstraintsRef: React.RefObject<HTMLDivElement>;
  outerRef: (el: HTMLDivElement | null) => void;
  onInteraction?: () => void;
}

function DraggableLogo({ 
  tool, 
  isMobile, 
  dragConstraintsRef,
  outerRef,
  onInteraction
}: DraggableLogoProps) {
  const isDragging = useRef(false);

  const pos: React.CSSProperties = {};
  if (tool.top) pos.top = tool.top;
  if (tool.bottom) pos.bottom = tool.bottom;

  if (isMobile && tool.left) {
    const val = parseFloat(tool.left);
    pos.left = `${(val * 0.7 + 15).toFixed(1)}%`;
    pos.transform = "translateX(-50%)";
  } else if (tool.left) {
    pos.left = tool.left;
    pos.transform = "translateX(-50%)";
  }

  return (
    <div
      ref={outerRef}
      className="absolute z-20 flex items-center justify-center p-3"
      style={{
        ...pos,
        opacity: isMobile ? tool.opacity * 0.45 : tool.opacity,
      }}
    >
      <motion.div
        drag
        dragConstraints={dragConstraintsRef}
        dragElastic={0.15}
        dragMomentum={true}
        onDragStart={() => {
          isDragging.current = true;
          if (onInteraction) onInteraction();
        }}
        onDragEnd={() => {
          setTimeout(() => {
            isDragging.current = false;
          }, 50);
        }}
        onTap={() => {
          if (!isDragging.current) {
            window.open(tool.link, "_blank", "noopener,noreferrer");
          }
        }}
        whileDrag={{ scale: 1.25, zIndex: 50 }}
        className="cursor-grab active:cursor-grabbing flex items-center justify-center select-none"
      >
        <img
          src={tool.logoSrc}
          alt={tool.name}
          className="h-10 md:h-12 w-auto object-contain transition-all duration-300 opacity-80 hover:opacity-100 select-none pointer-events-none"
        />
      </motion.div>
    </div>
  );
}

export function ParallaxToolsSection2() {
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const toolEls = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

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
        // Speed multiplied by 3.0 to make it scroll faster
        const speed = tools[i].speed * 3.0;
        const shift = (progress - 0.5) * range * speed * -1;
        el.style.transform = `translate3d(0px, ${shift.toFixed(2)}px, 0px)`;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-background border-t border-border/40 py-20 relative overflow-hidden">
      {/* ── Intro copy wrapper ─── */}
      <div className="flex flex-col items-center justify-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading font-semibold text-center text-balance px-4"
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
            lineHeight: 1.4,
            color: "hsl(var(--foreground))",
            maxWidth: "72%",
          }}
        >
          Interactive Playground: Drag and move the tools around! (Fast Parallax)
        </motion.h2>
        <p className="text-muted-foreground text-sm mt-2 font-medium text-center">
          Grab any platform logo to re-arrange or throw them across the canvas.
        </p>
      </div>

      {/* ── Interactive Drag & Parallax Canvas ─── */}
      <div
        ref={logoWrapperRef}
        className="relative w-full overflow-hidden select-none bg-background/50 border border-border/40 rounded-3xl"
        style={{ 
          height: "80vh", 
          width: "92%",
          maxWidth: "1400px",
          margin: "40px auto 0 auto",
          backgroundImage: "radial-gradient(hsl(var(--border)/0.6) 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* Animated Interaction Guide Overlay (Cursor Hand Tutorial) */}
        <AnimatePresence>
          {!hasInteracted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
              className="absolute z-40 pointer-events-none select-none"
              style={{
                top: "8%", // Aligned precisely with Clay logo top
                left: "15%", // Aligned precisely with Clay logo left
              }}
            >
              <motion.div
                animate={{
                  x: [60, 0, 0, 80, 80, 60],
                  y: [60, 0, 0, 0, 0, 60],
                  scale: [1, 1, 0.8, 0.8, 1, 1],
                  rotate: [0, 0, -10, -10, 0, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.25, 0.35, 0.7, 0.8, 1],
                }}
                className="flex flex-col items-center gap-1 text-primary drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
              >
                {/* White fill with sage green (#839958) outline pointer */}
                <Hand className="w-8 h-8 fill-white text-[#839958]" />
                <span className="bg-background/95 border border-[#839958]/30 text-[#839958] text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-md">
                  Drag &amp; Throw
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Central Reveal/Intro Text Card (Un-clickable to let drags pass behind it) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-30">
          <div className="max-w-[70%] text-center">
            <h3
              className="font-heading font-medium text-center text-balance"
              style={{
                fontSize: "clamp(1.2rem, 2.8vw, 2.2rem)",
                lineHeight: 1.4,
                color: "hsl(var(--primary))",
                opacity: 1, // Throughout visible
              }}
            >
              Powering results for agencies and businesses across the{" "}
              <span className="text-[#FFC64F] font-semibold">US, UK, UAE</span>, and beyond.
            </h3>
          </div>
        </div>

        {/* Draggable & Parallax Logo Canvas Elements */}
        {tools.map((tool, i) => (
          <DraggableLogo 
            key={tool.name} 
            tool={tool} 
            isMobile={isMobile} 
            dragConstraintsRef={logoWrapperRef} 
            outerRef={(el) => { toolEls.current[i] = el; }}
            onInteraction={() => setHasInteracted(true)}
          />
        ))}
      </div>
    </div>
  );
}
