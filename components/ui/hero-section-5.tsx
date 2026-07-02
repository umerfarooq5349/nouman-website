"use client";

import * as React from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Define the type for a single milestone
interface Milestone {
  id: number;
  name: string;
  description?: string;
  status: "complete" | "in-progress" | "pending";
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

// Define the props for the AnimatedRoadmap component
interface AnimatedRoadmapProps extends React.HTMLAttributes<HTMLDivElement> {
  milestones: Milestone[];
  mapImageSrc: string;
}

// Sub-component for a single milestone marker
const MilestoneMarker = ({ milestone }: { milestone: Milestone }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const statusClasses = {
    complete: "bg-green-500 border-green-700 dark:border-green-400",
    "in-progress": "bg-blue-500 border-blue-700 dark:border-blue-400 animate-pulse",
    pending: "bg-muted border-border",
  };

  const isRightSide = milestone.position.right !== undefined;

  return (
    <div
      className="absolute z-20 group"
      style={milestone.position}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: milestone.id * 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.8 }}
        className="flex items-center gap-4 cursor-pointer"
      >
        {/* Interactive bubble dot */}
        <div className="relative flex h-8 w-8 items-center justify-center bg-background rounded-full border border-border shadow-sm hover:scale-110 transition-transform duration-200">
          <div
            className={cn(
              "absolute h-3 w-3 rounded-full border-2",
              statusClasses[milestone.status]
            )}
          />
          <div className="absolute h-full w-full rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>

        {/* Milestone Name Badge */}
        <div className="rounded-full border bg-card/90 backdrop-blur-md px-4 py-2 text-sm font-semibold text-card-foreground shadow-sm whitespace-nowrap group-hover:border-primary/40 transition-colors duration-200">
          {milestone.name}
        </div>
      </motion.div>

      {/* Floating Detailed Card with Fade In & Fade Out */}
      <AnimatePresence>
        {isHovered && milestone.description && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={cn(
              "absolute mt-3 w-72 rounded-2xl border border-border/80 bg-card/95 p-4 shadow-xl backdrop-blur-md z-30 pointer-events-none text-left",
              isRightSide ? "right-0" : "left-0"
            )}
            style={{
              top: "100%",
            }}
          >
            <div className="space-y-1.5">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                Phase {milestone.id}
              </div>
              <h4 className="text-sm font-bold text-foreground">
                {milestone.name.split(". ").slice(1).join(". ")}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {milestone.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main AnimatedRoadmap component
const AnimatedRoadmap = React.forwardRef<HTMLDivElement, AnimatedRoadmapProps>(
  ({ className, milestones, mapImageSrc, ...props }, ref) => {
    const targetRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
    });

    const pathLength = useTransform(scrollYProgress, [0.15, 0.7], [0, 1]);

    return (
      <div
        ref={targetRef}
        className={cn("relative w-full max-w-4xl mx-auto py-24", className)}
        {...props}
      >
        {/* Background map image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="absolute inset-0 top-10 select-none pointer-events-none opacity-40 dark:opacity-20"
        >
          <img
            src={mapImageSrc}
            alt="Product roadmap map"
            className="h-full w-full object-contain filter invert dark:invert-0"
          />
        </motion.div>

        {/* SVG path for animation */}
        <div className="relative h-[400px]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 400"
            preserveAspectRatio="none"
            className="absolute top-0 left-0"
          >
            <motion.path
              d="M 50 350 Q 200 50 400 200 T 750 100"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="3"
              strokeDasharray="10 5"
              strokeLinecap="round"
              style={{ pathLength }}
            />
          </svg>

          {/* Render each milestone */}
          {milestones.map((milestone) => (
            <MilestoneMarker key={milestone.id} milestone={milestone} />
          ))}
        </div>
      </div>
    );
  }
);

AnimatedRoadmap.displayName = "AnimatedRoadmap";

export { AnimatedRoadmap };
