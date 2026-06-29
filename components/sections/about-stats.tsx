"use client";

import { about, stats } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { CountUp } from "@/components/motion/count-up";

export function AboutStats() {
  return (
    <section id="about" className="relative bg-muted/35 border-y border-border/50 py-24 sm:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <Badge>{about.eyebrow}</Badge>
            </Reveal>
            <TextReveal
              as="h2"
              text={about.heading}
              className="mt-5 max-w-[18ch] font-display text-display-lg font-semibold text-balance"
            />
          </div>
          <div className="space-y-5 self-end">
            {about.body.map((p, i) => (
              <Reveal key={i} index={i}>
                <p className="text-lg text-muted-foreground">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={i} index={i} className="bg-card">
              <div className="flex h-full flex-col gap-2 p-6 sm:p-8">
                <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                  <CountUp
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
