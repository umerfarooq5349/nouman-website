import { CTA } from "@/components/sections/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { projects } from "@/lib/content";
import Link from "next/link";

export const metadata = {
  title: "Portfolio & Client Work — Muhammad Nouman",
  description:
    "Browse real GoHighLevel setups, funnel builds, and CRM automation systems built by Muhammad Nouman for clinics, agencies, and service businesses.",
};

export default function PortfolioPage() {
  return (
    <main className="pt-20">
      <section className="py-24 sm:py-32">
        <div className="container">
          {/* Header */}
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <Badge>Portfolio</Badge>
            </Reveal>
            <TextReveal
              as="h1"
              text="Real systems built for real businesses."
              className="mt-5 font-display text-display-lg font-semibold text-balance"
            />
            <Reveal index={1}>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Every project below is a live GoHighLevel system — funnels, pipelines, automations, and CRM setups built and handed over to business owners across 8+ industries.
              </p>
            </Reveal>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.slice(0, 8).map((project, i) => (
              <Reveal key={`${project.title}-${i}`} index={i % 4}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.src}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  </div>
                  {/* Content */}
                  <div className="p-7">
                    <Badge>{project.niche}</Badge>
                    <h2 className="mt-4 font-display text-xl font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.blurb}
                    </p>
                    {project.href && (
                      <div className="mt-6">
                        <Link
                          href={project.href}
                          className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300 w-fit"
                        >
                          View Case Study →
                        </Link>
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* CTA to book */}
          <Reveal index={5}>
            <div className="mt-20 relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-14 sm:px-12 text-center">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
                style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.25), transparent)" }}
              />
              <div className="relative max-w-xl mx-auto">
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-balance">
                  Want a system like this for your business?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Book a free 15-minute call. I&apos;ll map out exactly what your setup should look like.
                </p>
                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link href="/book-a-strategy-session">Book a Free Call →</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <CTA />
    </main>
  );
}
