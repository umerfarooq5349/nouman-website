"use client";

import { cn } from "@/lib/utils";
import { services } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

export function ServicesBento() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <Badge>Services</Badge>
          </Reveal>
          <TextReveal
            as="h2"
            text="Everything you need to capture, nurture, and book — built in one place."
            className="mt-5 font-display text-display-lg font-semibold text-balance"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal
                key={service.title}
                index={i}
                className={cn(
                  service.span === "wide" && "sm:col-span-2 lg:col-span-2"
                )}
              >
                <article
                  data-cursor
                  className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-shadow duration-300 hover:glow-border"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative flex h-full flex-col">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-background text-primary">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
