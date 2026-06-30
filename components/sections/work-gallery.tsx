"use client";

import { projects } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import SocialCards from "@/components/ui/card-fan-carousel";
import { CardsParallax } from "@/components/ui/scroll-cards";

export function WorkGallery() {
  const fannedCards = projects.map((project) => ({
    imgUrl: project.src,
    alt: project.title,
    linkUrl: project.href || "#",
  }));

  const cardItems = projects.map((project) => ({
    title: project.title,
    description: project.blurb,
    tag: project.niche,
    src: project.src,
    link: project.href || "#",
    color: project.color,
    textColor: project.textColor,
  }));

  return (
    <section id="work" className="relative bg-muted/35 border-y border-border/50 py-24 sm:py-32 overflow-visible">
      <div className="container">
        {/* Section Header */}
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Reveal>
              <Badge>Selected work</Badge>
            </Reveal>
            <TextReveal
              as="h2"
              text="Systems built for real businesses."
              className="mt-5 font-display text-display-lg font-semibold text-balance"
            />
          </div>
          <Reveal>
            <p className="max-w-xs text-sm text-muted-foreground">
              A few of the GoHighLevel builds and funnels I&apos;ve shipped. Use wheel scroll, hover, or paginations to explore case studies.
            </p>
          </Reveal>
        </div>

        {/* Dynamic Card Fan Gallery */}
        <div className="w-full flex justify-center py-6 mb-20 overflow-hidden">
          <SocialCards cards={fannedCards} />
        </div>

        {/* Spacing / Divider */}
        <div className="border-t border-border/40 my-16 pt-16">
          <div className="mb-10">
            <Badge className="mb-3">Stack View</Badge>
            <h3 className="font-display text-2xl font-semibold">Case Studies Overview</h3>
          </div>
          {/* Scroll Card Stack */}
          <CardsParallax items={cardItems} />
        </div>
      </div>
    </section>
  );
}
