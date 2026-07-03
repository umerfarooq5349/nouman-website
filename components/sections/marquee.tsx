"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const logos = [
  { name: "Clay", src: "/affilate%20website%20logos/clay.png" },
  { name: "Apify", src: "/affilate%20website%20logos/apify.png" },
  { name: "GoHighLevel", src: "/affilate%20website%20logos/Gohoghlevel.png" },
  { name: "Malcare", src: "/affilate%20website%20logos/malecare.png" },
  { name: "Make", src: "/affilate%20website%20logos/make.png" },
  { name: "Lovable", src: "/affilate%20website%20logos/lovable.png" },
  { name: "Keap", src: "/affilate%20website%20logos/keap.png" },
  { name: "Instantly", src: "/affilate%20website%20logos/instantly.png" },
  { name: "Hunter", src: "/affilate%20website%20logos/hunter.png" },
  { name: "Snov", src: "/affilate%20website%20logos/snov.png" },
  { name: "Extendly", src: "/affilate%20website%20logos/extendly.png" },
  { name: "Warmly", src: "/affilate%20website%20logos/warmly.png" },
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
      <div className="relative flex overflow-hidden mask-fade-x">
        <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16">
          {items.map((item, i) => (
            <img
              key={i}
              src={item.src}
              alt={item.name}
              className="h-8 md:h-10 w-auto object-contain filter grayscale opacity-60 dark:grayscale-0 dark:brightness-0 dark:invert dark:opacity-40"
            />
          ))}
        </div>
        <div
          aria-hidden
          className="flex shrink-0 animate-marquee items-center gap-16 pr-16"
        >
          {items.map((item, i) => (
            <img
              key={`b-${i}`}
              src={item.src}
              alt={item.name}
              className="h-8 md:h-10 w-auto object-contain filter grayscale opacity-60 dark:grayscale-0 dark:brightness-0 dark:invert dark:opacity-40"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
