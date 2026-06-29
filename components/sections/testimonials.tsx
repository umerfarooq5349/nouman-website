"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-muted/35 border-y border-border/50 py-24 sm:py-32">
      <div className="container">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <Badge>Testimonials</Badge>
          </Reveal>
          <TextReveal
            as="h2"
            text="What clients say after the system goes live."
            className="mt-5 font-display text-display-lg font-semibold text-balance"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} index={i}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className="size-4 fill-primary text-primary"
                      aria-hidden
                    />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.title}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
