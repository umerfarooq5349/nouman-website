"use client";

import { cn } from "@/lib/utils";
import { services } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
  className?: string;
}

function ServiceCard({ service, index, className }: ServiceCardProps) {
  const Icon = service.icon;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Card 1: Animates from bottom.
  // Card 2, 4, 6...: Animates from right.
  // Card 3, 5, 7...: Animates from left.
  const isFirst = index === 0;
  const isEven = index % 2 === 0;
  
  const initialX = isFirst ? 0 : (isEven ? -80 : 80);
  const initialY = isFirst ? 40 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <article
        onMouseMove={handleMouseMove}
        data-cursor
        className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-primary/50 hover:glow-border hover:shadow-lg hover:shadow-primary/5"
      >
        {/* Dynamic Glow Spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 z-0"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                240px circle at ${mouseX}px ${mouseY}px,
                hsla(var(--primary) / 0.15),
                transparent 80%
              )
            `,
          }}
        />
        
        {/* Dynamic Border Spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 z-10 border border-primary/20"
          style={{
            maskImage: useMotionTemplate`
              radial-gradient(
                120px circle at ${mouseX}px ${mouseY}px,
                black 40%,
                transparent 100%
              )
            `,
            WebkitMaskImage: useMotionTemplate`
              radial-gradient(
                120px circle at ${mouseX}px ${mouseY}px,
                black 40%,
                transparent 100%
              )
            `,
          }}
        />

        <div className="relative flex h-full flex-col z-20">
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
    </motion.div>
  );
}

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
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              className={cn(
                service.span === "wide" && "sm:col-span-2 lg:col-span-2"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
