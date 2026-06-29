"use client";

import { ArrowRight } from "lucide-react";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

export function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-20 text-center sm:px-12">
          {/* glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, hsl(var(--primary) / 0.25), transparent)",
            }}
          />
          <div className="relative mx-auto max-w-2xl">
            <TextReveal
              as="h2"
              text="Ready to make your calendar fill itself?"
              className="font-display text-display-lg font-semibold text-balance"
            />
            <Reveal index={1}>
              <p className="mx-auto mt-5 max-w-lg text-lg text-muted-foreground">
                Book a free 15-minute call. We&apos;ll look at your current setup
                and map exactly what to build first.
              </p>
            </Reveal>
            <Reveal index={2}>
              <div className="mt-9 flex justify-center">
                <Magnetic strength={0.3}>
                  <Button asChild size="lg" data-cursor>
                    <a
                      href={site.calendly}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {site.primaryCtaLabel}
                      <ArrowRight aria-hidden />
                    </a>
                  </Button>
                </Magnetic>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
