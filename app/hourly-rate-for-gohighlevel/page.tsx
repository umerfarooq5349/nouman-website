import { CTA } from "@/components/sections/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import Link from "next/link";
import { Clock, Code, Settings, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Hourly GoHighLevel Consulting Rates — Muhammad Nouman",
  description:
    "Flexible hourly rates, packages, and custom consulting options for GoHighLevel setups, funnel builds, and technical troubleshooting.",
};

const packages = [
  {
    title: "Strategy & Scoping Call",
    price: "FREE",
    period: "15 min session",
    icon: Clock,
    description:
      "Map out system requirements, define data models, analyze migration paths, and align workflows.",
    features: [
      "Initial operations review",
      "System integration check",
      "Migration safety roadmap",
      "Detailed project estimate",
    ],
    cta: "Book Free Call",
    variant: "outline" as const,
  },
  {
    title: "Hourly Consulting Sprint",
    price: "$100",
    period: "per hour",
    icon: Code,
    description:
      "Ideal for custom automation building, trigger troubleshooting, custom webhook API maps, and custom CSS setups.",
    features: [
      "Direct screen-share sessions",
      "Workflow logic debugging",
      "Custom webhook API testing",
      "Detailed time tracking report",
    ],
    cta: "Hire Nouman",
    variant: "primary" as const,
  },
  {
    title: "Retainer Build Package",
    price: "Custom",
    period: "flat rate per project",
    icon: Settings,
    description:
      "Best for complete migrations, enterprise SaaS platform setup, multi-channel pipelines, and team training programs.",
    features: [
      "Dedicated development portal",
      "Full CRM custom database build",
      "A/B split tested sales funnels",
      "Priority Slack communication",
    ],
    cta: "Hire Nouman",
    variant: "primary" as const,
  },
];

export default function HourlyRatePage() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-24 sm:py-32">
        <div className="container">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <Badge>Consulting & Pricing</Badge>
            </Reveal>
            <TextReveal
              as="h1"
              text="Hourly GoHighLevel consulting — no long-term commitment required."
              className="mt-5 font-display text-display-lg font-semibold text-balance"
            />
            <Reveal index={1}>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Get expert, certified help on an as-needed basis. Hire for individual troubleshooting, custom API integrations, or comprehensive setup builds.
              </p>
            </Reveal>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, i) => {
              const Icon = pkg.icon;
              return (
                <Reveal key={pkg.title} index={i}>
                  <article className="group h-full flex flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                    <div>
                      <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-background text-primary">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                        {pkg.title}
                      </h3>
                      <div className="mt-3 flex items-baseline gap-1.5">
                        <span className="font-display text-3xl font-bold tracking-tight">{pkg.price}</span>
                        <span className="text-xs text-muted-foreground">{pkg.period}</span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {pkg.description}
                      </p>
                      <ul className="mt-6 pt-6 border-t border-border/50 space-y-3">
                        {pkg.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-xs">
                            <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground leading-tight">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-8">
                      <Button className="w-full" asChild variant={pkg.variant}>
                        <Link href="/book-a-strategy-session">{pkg.cta}</Link>
                      </Button>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* Engagement Terms */}
          <Reveal index={4}>
            <div className="mt-16 relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-14 sm:px-12">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
                style={{
                  background:
                    "radial-gradient(closest-side, hsl(var(--primary) / 0.2), transparent)",
                }}
              />
              <div className="relative max-w-2xl">
                <h2 className="font-display text-2xl font-semibold mb-6">Engagement Terms</h2>
                <div className="space-y-6 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">1. Time Tracking:</strong> All hourly consulting sprints are logged down to the minute using digital trackers. You only pay for active design, workflow building, custom code writing, and system setup time.
                  </p>
                  <p>
                    <strong className="text-foreground">2. Deliverables Scope:</strong> Before any sprint begins, we align on a clear scope list during a strategy session or scoping call, ensuring we achieve your objectives within budget bounds.
                  </p>
                  <p>
                    <strong className="text-foreground">3. Multi-Hour Discounts:</strong> Pre-paid retainer packages of 10+ hours are eligible for volume pricing discounts. Speak to Nouman directly during your session to map out custom terms.
                  </p>
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
