"use client";

import { about, stats } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { CountUp } from "@/components/motion/count-up";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { TrendingUp, Clock, Globe, BadgeDollarSign } from "lucide-react";

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

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-auto w-full py-4">
              {stats.map((stat, i) => {
                const statData = [
                  // Blue
                  {
                    icon: (className: string) => <TrendingUp className={className} />,
                    color: "text-[#519CAB]",
                    bgGlow: "bg-[#519CAB]/5",
                    borderColor: "hover:border-[#519CAB]/30",
                  },
                  // Red
                  {
                    icon: (className: string) => <Clock className={className} />,
                    color: "text-[#D3968C]",
                    bgGlow: "bg-[#D3968C]/5",
                    borderColor: "hover:border-[#D3968C]/30",
                  },
                  // Yellow
                  {
                    icon: (className: string) => <Globe className={className} />,
                    color: "text-[#FFC64F]",
                    bgGlow: "bg-[#FFC64F]/5",
                    borderColor: "hover:border-[#FFC64F]/30",
                  },
                  // Combined Gradient
                  {
                    icon: (className: string) => <BadgeDollarSign className={className} />,
                    color: "bg-gradient-to-r from-[#519CAB] via-[#D3968C] to-[#FFC64F] bg-clip-text text-transparent font-bold",
                    bgGlow: "bg-primary/5",
                    borderColor: "hover:border-primary/30",
                  },
                ];

                const config = statData[i % statData.length];

                return (
                  <Reveal key={i} index={i} className="h-full">
                    <div 
                      className={`group relative flex h-full flex-col items-center text-center justify-between p-8 rounded-3xl border border-border bg-card/45 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${config.borderColor}`}
                    >
                      {/* Ambient background glow */}
                      <div className={`absolute inset-0 w-full h-full rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10 ${config.bgGlow}`} />

                      <div className="flex flex-col items-center gap-4 w-full">
                        {/* Icon Container */}
                        <div className={`p-3 rounded-2xl bg-muted/60 transition-transform duration-300 group-hover:scale-110 ${config.color}`}>
                          {config.icon("size-6")}
                        </div>

                        {/* Stat Value */}
                        <p className={`font-display text-4xl font-semibold tracking-tight sm:text-5xl ${config.color}`}>
                          <CountUp
                            value={stat.value}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                          />
                        </p>
                      </div>

                      {/* Stat Label */}
                      <p className="text-sm text-muted-foreground leading-relaxed mt-4 font-medium">
                        {stat.label}
                      </p>
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
