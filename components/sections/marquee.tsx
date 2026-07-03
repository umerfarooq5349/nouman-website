"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const logos = [
  { name: "Clay", src: "/affiliate-logos/clay.png" },
  { name: "Apify", src: "/affiliate-logos/apify.png" },
  { name: "GoHighLevel", src: "/affiliate-logos/gohighlevel.png" },
  { name: "Malcare", src: "/affiliate-logos/malecare.png" },
  { name: "Make", src: "/affiliate-logos/make.png" },
  { name: "Lovable", src: "/affiliate-logos/lovable.png" },
  { name: "Keap", src: "/affiliate-logos/keap.png" },
  { name: "Instantly", src: "/affiliate-logos/instantly.png" },
  { name: "Hunter", src: "/affiliate-logos/hunter.png" },
  { name: "Snov", src: "/affiliate-logos/snov.png" },
  { name: "Extendly", src: "/affiliate-logos/extendly.png" },
  { name: "Warmly", src: "/affiliate-logos/warmly.png" },
];

export function Marquee() {
  const items = [...logos, ...logos];
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section aria-label="Tools and platforms" className="border-y border-border py-8 bg-muted/10 overflow-hidden">
      <div className="relative flex overflow-hidden mask-fade-x group">
        <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
          {items.map((item, i) => (
            <img
              key={i}
              src={item.src}
              alt={item.name}
              className="h-8 md:h-10 w-auto object-contain opacity-85 hover:opacity-100 transition-all duration-300 hover:scale-115 cursor-pointer"
            />
          ))}
        </div>
        <div
          aria-hidden
          className="flex shrink-0 animate-marquee items-center gap-16 pr-16 group-hover:[animation-play-state:paused]"
        >
          {items.map((item, i) => (
            <img
              key={`b-${i}`}
              src={item.src}
              alt={item.name}
              className="h-8 md:h-10 w-auto object-contain opacity-85 hover:opacity-100 transition-all duration-300 hover:scale-115 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
