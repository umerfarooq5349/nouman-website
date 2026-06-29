"use client";

import { steps } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

export function ProcessSteps() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="container">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <Badge>How it works</Badge>
          </Reveal>
          <TextReveal
            as="h2"
            text="From first call to a system that runs itself — in four steps."
            className="mt-5 font-display text-display-lg font-semibold text-balance"
          />
        </div>

        <ol className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.number} index={i} as="li" className="bg-card">
              <div className="flex h-full flex-col p-7">
                <span className="font-display text-5xl font-semibold text-primary/30">
                  {step.number}
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
