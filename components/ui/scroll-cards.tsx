"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface iCardItem {
  title: string;
  description: string;
  tag?: string;
  src: string;
  link: string;
  color: string;
  textColor: string;
}

interface CardsParallaxProps {
  items: iCardItem[];
}

export function CardsParallax({ items }: CardsParallaxProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative flex flex-col gap-8 md:gap-16 py-8 md:py-16">
      {items.map((project, i) => {
        const targetScale = 1 - (items.length - i) * 0.04;
        return (
          <Card
            key={`c_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * (1 / items.length), 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}

interface CardProps extends iCardItem {
  i: number;
  progress: any;
  range: [number, number];
  targetScale: number;
}

function Card({
  title,
  description,
  tag,
  src,
  link,
  color,
  textColor,
  i,
  progress,
  range,
  targetScale,
}: CardProps) {
  const container = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    setIsDesktop(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  // Scale down the card as we scroll further down the container
  const scale = useTransform(progress, range, [1, targetScale]);
  const scaleVal = isDesktop ? scale : 1;

  // Parallax translation to slide card up/down immediately on scroll
  const y = useTransform(progress, range, [0, -120]);
  const yVal = isDesktop ? y : 0;

  // Modern brand-specific styling configuration
  const getBrandConfig = (colorName: string) => {
    switch (colorName.toLowerCase()) {
      case "beige":
        return {
          glow: "bg-amber-500/10 dark:bg-amber-500/5",
          border: "hover:border-amber-500/30",
          tagBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
        };
      case "moss-green":
        return {
          glow: "bg-emerald-500/10 dark:bg-emerald-500/5",
          border: "hover:border-emerald-500/30",
          tagBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
        };
      case "rosy-brown":
        return {
          glow: "bg-rose-500/10 dark:bg-rose-500/5",
          border: "hover:border-rose-500/30",
          tagBg: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
        };
      case "moonstone":
        return {
          glow: "bg-cyan-500/10 dark:bg-cyan-500/5",
          border: "hover:border-cyan-500/30",
          tagBg: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
        };
      default:
        return {
          glow: "bg-primary/10 dark:bg-primary/5",
          border: "hover:border-primary/30",
          tagBg: "bg-primary/10 text-primary",
        };
    }
  };

  const brand = getBrandConfig(color);

  return (
    <div
      ref={container}
      className="relative md:sticky flex h-fit md:h-[80vh] items-center justify-center px-4 py-4 md:py-0"
      style={{
        top: isDesktop ? "100px" : "auto",
      }}
    >
      <Link href={link} className="w-full max-w-5xl block cursor-pointer group">
        <motion.div
          style={{
            scale: scaleVal,
            y: yVal,
          }}
          className={`relative w-full h-fit md:h-[55vh] rounded-[2rem] md:rounded-[2.5rem] border border-border/80 bg-card/60 dark:bg-card/35 backdrop-blur-md p-6 md:p-10 shadow-xl flex flex-col md:flex-row gap-6 md:gap-10 overflow-hidden transition-all duration-300 ${brand.border}`}
        >
          {/* Soft Ambient Brand Glow */}
          <div className={`absolute -right-24 -bottom-24 w-80 h-80 rounded-full blur-3xl pointer-events-none z-0 ${brand.glow}`} />

          {/* Details section */}
          <div className="flex flex-col justify-between flex-[1.1] relative z-10">
            <div>
              {tag && (
                <span className={`inline-block text-xs font-semibold uppercase tracking-wider mb-3 md:mb-4 px-3 py-1 rounded-full ${brand.tagBg}`}>
                  {tag}
                </span>
              )}
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
                {title}
              </h3>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <div
                className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300"
              >
                <span>View Case Study</span>
                <ArrowUpRight className="size-4 md:size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>

          {/* Visual section */}
          <div className="flex-1 relative h-48 sm:h-56 md:h-full w-full rounded-xl md:rounded-2xl overflow-hidden border border-border/20 aspect-[16/10] md:aspect-auto">
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors duration-300 z-10" />
            <Image
              src={src}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={i === 0}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
            />
          </div>
        </motion.div>
      </Link>
    </div>
  );
}
