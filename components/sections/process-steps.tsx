"use client";

import * as React from "react";
import { useScroll } from "framer-motion";
import { steps } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { AnimatedRoadmap } from "@/components/ui/hero-section-5";
import { Phone, Layout, Rocket, Key } from "lucide-react";

export function ProcessSteps() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const milestones = [
    {
      id: 1,
      name: `01. ${steps[0].title}`,
      description: steps[0].description,
      status: "complete" as const,
      icon: Phone,
      position: { top: "70%", left: "5%" },
    },
    {
      id: 2,
      name: `02. ${steps[1].title}`,
      description: steps[1].description,
      status: "complete" as const,
      icon: Layout,
      position: { top: "15%", left: "20%" },
    },
    {
      id: 3,
      name: `03. ${steps[2].title}`,
      description: steps[2].description,
      status: "in-progress" as const,
      icon: Rocket,
      position: { top: "45%", left: "55%" },
    },
    {
      id: 4,
      name: `04. ${steps[3].title}`,
      description: steps[3].description,
      status: "pending" as const,
      icon: Key,
      position: { top: "10%", right: "10%" },
    },
  ];

  if (isMobile) {
    return (
      <section id="process" className="bg-background py-20 px-4 mt-8 border-t border-border/40">
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
    <section ref={containerRef} id="process" className="relative h-[180vh] bg-background border-t border-border/40">
      {/* Sticky full-screen view */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-12">
        <div className="container px-6 flex flex-col justify-center h-full max-w-5xl mx-auto">
          <div className="text-center mb-4">
            <Reveal>
              <Badge>How it works</Badge>
            </Reveal>
            <TextReveal
              as="h2"
              text="From first call to a system that runs itself — in four steps."
              className="mt-4 font-display text-display-lg font-semibold text-center text-balance max-w-4xl mx-auto"
            />
          </div>

          {/* Animated Roadmap Component */}
          <AnimatedRoadmap
            milestones={milestones}
            mapImageSrc="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-SsfjxCJh43Hr1dqzkbFWUGH3ICZQbH.png&w=320&q=75"
            scrollYProgress={scrollYProgress}
            className="py-6"
          />
        </div>
      </div>
    </section>
  );
}
