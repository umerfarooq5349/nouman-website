"use client";

import * as React from "react";
import { steps } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { AnimatedRoadmap } from "@/components/ui/hero-section-5";

export function ProcessSteps() {
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
      position: { top: "70%", left: "5%" },
    },
    {
      id: 2,
      name: `02. ${steps[1].title}`,
      description: steps[1].description,
      status: "complete" as const,
      position: { top: "15%", left: "20%" },
    },
    {
      id: 3,
      name: `03. ${steps[2].title}`,
      description: steps[2].description,
      status: "in-progress" as const,
      position: { top: "45%", left: "55%" },
    },
    {
      id: 4,
      name: `04. ${steps[3].title}`,
      description: steps[3].description,
      status: "pending" as const,
      position: { top: "10%", right: "10%" },
    },
  ];

  if (isMobile) {
    return (
      <section id="process" className="bg-background py-20 px-4 border-t border-border/40">
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
    <section id="process" className="bg-background py-24 border-t border-border/40 overflow-hidden relative">
      <div className="container px-6">
        <div className="text-center mb-8">
          <Reveal>
            <Badge>How it works</Badge>
          </Reveal>
          <TextReveal
            as="h2"
            text="From first call to a system that runs itself — in four steps."
            className="mt-5 font-display text-display-lg font-semibold text-center text-balance max-w-4xl mx-auto"
          />
        </div>

        {/* Animated Roadmap Component */}
        <AnimatedRoadmap
          milestones={milestones}
          mapImageSrc="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-SsfjxCJh43Hr1dqzkbFWUGH3ICZQbH.png&w=320&q=75"
          className="py-12"
        />

        {/* Informative process description grid below the map */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Reveal key={step.number} index={index}>
              <div className="flex flex-col gap-3 p-6 rounded-2xl border border-border/50 bg-card/45 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Phase {step.number}
                </span>
                <h3 className="font-display text-lg font-semibold leading-tight text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
