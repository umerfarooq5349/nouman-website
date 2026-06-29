"use client";

import { useRef } from "react";
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
    <div ref={container} className="relative flex flex-col gap-12 py-12">
      {items.map((project, i) => {
        const targetScale = 1 - (items.length - i) * 0.05;
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
  
  // Scale down the card as we scroll further down the container
  const scale = useTransform(progress, range, [1, targetScale]);

  // Color mapping mapping standard color names to premium, polished Tailwind CSS classes
  const getBgClass = (colorName: string) => {
    switch (colorName.toLowerCase()) {
      case "white":
      case "beige":
        return "bg-[#F7F4D5] border-border/80 text-[#812510] dark:bg-zinc-900/90 dark:border-zinc-800/80";
      case "green":
      case "moss-green":
        return "bg-[#839958] border-[#F7F4D5]/20 text-[#F7F4D5] dark:bg-emerald-950/80";
      case "black":
      case "rosy-brown":
        return "bg-[#D3968C] border-amber-900/20 text-[#812510] dark:bg-zinc-950/95";
      case "saffron":
      case "orange":
        return "bg-[#FFC64F] border-[#839958]/20 text-[#812510] dark:bg-amber-950/80";
      case "indigo":
      case "blue":
      case "moonstone":
        return "bg-[#519CAB] border-zinc-800 text-white dark:bg-indigo-950/80";
      default:
        return "bg-card border-border";
    }
  };

  const getTextColorClass = (colorName: string, textCol: string) => {
    if (colorName.toLowerCase() === "black" || textCol.toLowerCase() === "white") {
      return "text-zinc-400";
    }
    return "text-muted-foreground";
  };

  return (
    <div
      ref={container}
      className="sticky flex h-[65vh] md:h-[70vh] items-center justify-center px-4"
      style={{
        // Stacking visual offset
        top: `calc(10vh + ${i * 32}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className={`relative w-full max-w-4xl h-full rounded-[2.5rem] border p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-8 md:gap-12 overflow-hidden backdrop-blur-md ${getBgClass(
          color
        )}`}
      >
        {/* Details section */}
        <div className="flex flex-col justify-between flex-[1.2] relative z-10">
          <div>
            {tag && (
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-4 bg-primary/10 px-3 py-1 rounded-full">
                {tag}
              </span>
            )}
            <h3 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              {title}
            </h3>
            <p className={`mt-4 text-sm md:text-base lg:text-lg leading-relaxed max-w-md ${getTextColorClass(color, textColor)}`}>
              {description}
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href={link}
              className="inline-flex items-center gap-2 group text-sm md:text-base font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="size-4 md:size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Visual section */}
        <div className="flex-1 relative h-40 md:h-full w-full rounded-2xl overflow-hidden border border-border/20 group">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300 z-10" />
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i === 0}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </motion.div>
    </div>
  );
}
