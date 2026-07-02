"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Headline reveal: each word slides up from a clipped mask, staggered.
 * Echoes the Kaifox "modern flow" headline animation.
 */
export function TextReveal({
  text,
  className,
  delay = 0,
  as: Tag = "h2",
  highlightWords = [],
  highlightClassName = "text-primary",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
  highlightWords?: string[];
  highlightClassName?: string;
}) {
  const words = text.split(" ");
  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: 0.05, delayChildren: delay }}
      aria-label={text}
    >
      {words.map((word, i) => {
        const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord.toLowerCase()
        );
        const isGHL = cleanWord.toLowerCase() === "gohighlevel";

        return (
          <span key={i} className="inline-block overflow-hidden align-bottom" aria-hidden>
            <motion.span
              className={cn("inline-block", isHighlighted && highlightClassName)}
              variants={{
                hidden: { y: "110%" },
                show: { y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {isGHL ? (
                <>
                  <span className="text-[#FFC64F]">Go</span>
                  <span className="text-[#519CAB]">High</span>
                  <span className="text-[#EF4444] dark:text-red-500">Level</span>
                  {word.substring(cleanWord.length)}
                </>
              ) : (
                word
              )}
              {i < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        );
      })}
    </MotionTag>
  );
}
