"use client";

import { about, stats } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { CountUp } from "@/components/motion/count-up";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function AboutStats() {
  return (
    <section id="about" className="relative bg-muted/35 border-y border-border/50 py-12 overflow-visible">
      <div className="container">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center">
              <Reveal>
                <Badge>{about.eyebrow}</Badge>
              </Reveal>
              <TextReveal
                as="h2"
                text={about.heading}
                className="mt-5 max-w-[24ch] font-display text-display-lg font-semibold text-center text-balance"
              />
            </div>
          }
        >
          <div className="flex flex-col h-full justify-between gap-8 md:gap-12">
            <div className="space-y-5 text-left">
              {about.body.map((p, i) => (
                <Reveal key={i} index={i}>
                  <p className="text-lg text-muted-foreground leading-relaxed">{p}</p>
                </Reveal>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4 mt-auto">
              {stats.map((stat, i) => {
                const statColors = [
                  // Blue
                  {
                    text: "text-[#519CAB]",
                    bg: "hover:bg-[#519CAB]/5",
                  },
                  // Red
                  {
                    text: "text-[#EF4444] dark:text-red-500",
                    bg: "hover:bg-[#EF4444]/5",
                  },
                  // Yellow
                  {
                    text: "text-[#FFC64F]",
                    bg: "hover:bg-[#FFC64F]/5",
                  },
                  // Combined Gradient
                  {
                    text: "bg-gradient-to-r from-[#519CAB] via-[#EF4444] to-[#FFC64F] bg-clip-text text-transparent font-bold",
                    bg: "hover:bg-primary/5",
                  },
                ];

                const config = statColors[i % statColors.length];

                return (
                  <Reveal key={i} index={i} className="bg-card">
                    <div className={`flex h-full flex-col gap-2 p-6 sm:p-8 transition-colors duration-300 ${config.bg}`}>
                      <p className={`font-display text-4xl font-semibold tracking-tight sm:text-5xl ${config.text}`}>
                        <CountUp
                          value={stat.value}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                        />
                      </p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
}
