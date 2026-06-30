"use client";

import * as React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { steps } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

export function ProcessSteps() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Smoothly transform scroll progress to horizontal translation
  const x = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "-56%"]);

  if (isMobile) {
    return (
      <section id="process" className="bg-background py-20 px-4">
        <div className="container">
          <div className="mb-12">
            <Reveal>
              <Badge>How it works</Badge>
            </Reveal>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-balance">
              From first call to a system that runs itself — in four steps.
            </h2>
          </div>

          <div className="relative border-l border-primary/20 ml-4 pl-8 space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex flex-col gap-3">
                {/* Step Number Dot */}
                <div className="absolute -left-[50px] top-0 rounded-full size-9 bg-primary text-primary-foreground text-sm font-bold flex justify-center items-center shadow-md border-4 border-background">
                  {step.number}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                    Phase {index + 1}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold leading-tight text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} id="process" className="relative h-[250vh] bg-background">
      {/* Sticky full-screen view */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-12">
        <div className="container px-6 mb-12">
          <Reveal>
            <Badge>How it works</Badge>
          </Reveal>
          <TextReveal
            as="h2"
            text="From first call to a system that runs itself — in four steps."
            className="mt-5 font-display text-display-lg font-semibold text-balance"
          />
        </div>

        {/* Horizontal scrollable track container */}
        <div className="relative w-full">
          <motion.div
            style={{ x }}
            className="flex gap-6 px-6 md:px-16 lg:px-24 w-max"
          >
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="w-[290px] sm:w-[360px] md:w-[420px] rounded-[2rem] border border-border bg-card/60 backdrop-blur-md p-8 md:p-10 shadow-xl flex flex-col gap-6 shrink-0 relative group hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-full size-12 bg-primary text-primary-foreground text-base font-bold flex justify-center items-center shadow-md">
                    {step.number}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                    Phase {index + 1}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-display text-xl md:text-2xl font-semibold leading-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
