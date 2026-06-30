"use client";

import { testimonials } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { AnimatedTestimonials } from "@/components/ui/testimonial";

export function Testimonials() {
  const mappedTestimonials = testimonials.map((t, idx) => {
    const srcs = [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    ];
    return {
      quote: t.quote,
      name: t.name,
      designation: t.title,
      src: srcs[idx % srcs.length],
    };
  });

  return (
    <section id="testimonials" className="relative bg-muted/35 border-y border-border/50 py-24 sm:py-32 overflow-hidden">
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

        <AnimatedTestimonials testimonials={mappedTestimonials} autoplay={true} />
      </div>
    </section>
  );
}
