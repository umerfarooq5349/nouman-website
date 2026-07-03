import { CTA } from "@/components/sections/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import Link from "next/link";
import { BookOpen, Users, Compass, Laptop, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "GoHighLevel Operations & Team Training — Muhammad Nouman",
  description:
    "Get comprehensive 1-on-1 or team training on GoHighLevel operations, workflow structures, custom fields, and agency scaling models.",
};

const modules = [
  {
    title: "1. Core Operations & CRM",
    icon: Laptop,
    description:
      "Understand sub-account structures, custom values/fields, smart lists, user permissions, and initial white-label configurations.",
  },
  {
    title: "2. Workflows & Automation Engine",
    icon: Compass,
    description:
      "Build advanced multi-channel follow-up campaigns, trigger mapping, lead distributions, and wait condition setups without errors.",
  },
  {
    title: "3. Funnel Building & Calendars",
    icon: BookOpen,
    description:
      "Create high-converting landing pages, forms, surveys, and integrate calendars with automated booking reminder sequences.",
  },
  {
    title: "4. SaaS Mode & Reselling GHL",
    icon: Users,
    description:
      "How to package GoHighLevel as a SaaS product, set up Stripe recurring billing, build snapshots, and manage agency sub-accounts.",
  },
];

const deliverables = [
  "Recorded video training replays for reference",
  "Custom GoHighLevel Snapshots ready to import",
  "Direct QA sessions resolving account blockages",
  "Workflow documentation & mapping diagrams",
  "White-label agency operations playbook",
  "Slack support window for tech queries",
];

export default function TrainingPage() {
  return (
    <main className="pt-20">
      {/* Hero Header */}
      <section className="py-24 sm:py-32">
        <div className="container">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <Badge>Training Programs</Badge>
            </Reveal>
            <TextReveal
              as="h1"
              text="Master GoHighLevel operations end to end."
              className="mt-5 font-display text-display-lg font-semibold text-balance"
            />
            <Reveal index={1}>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Empower your team or agency with 1-on-1 custom training designed to eliminate technical confusion and accelerate GHL build times.
              </p>
            </Reveal>
            <Reveal index={2}>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/book-a-strategy-session">Book a Strategy Session</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Curriculum Modules */}
          <div className="mb-24">
            <Reveal>
              <Badge>Curriculum</Badge>
            </Reveal>
            <TextReveal
              as="h2"
              text="Custom modules tailored to your exact goals."
              className="mt-5 mb-10 font-display text-display-lg font-semibold text-balance"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {modules.map((mod, i) => {
                const Icon = mod.icon;
                return (
                  <Reveal key={mod.title} index={i}>
                    <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                      <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-background text-primary">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                        {mod.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {mod.description}
                      </p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Deliverables */}
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-14 sm:px-12">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
              style={{
                background: "radial-gradient(closest-side, hsl(var(--primary) / 0.2), transparent)",
              }}
            />
            <div className="relative max-w-2xl mx-auto">
              <Reveal>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-center mb-10">
                  What you receive
                </h2>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {deliverables.map((item, i) => (
                  <Reveal key={item} index={i}>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium leading-tight">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
