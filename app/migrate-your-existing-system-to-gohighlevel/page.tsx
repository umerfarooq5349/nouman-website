import { CTA } from "@/components/sections/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import Link from "next/link";
import { ShieldAlert, ArrowRight } from "lucide-react";

export const metadata = {
  title: "CRM System Migration to GoHighLevel — Muhammad Nouman",
  description:
    "Seamlessly migrate your data, contacts, active workflows, and funnels from Kajabi, HubSpot, ActiveCampaign, Salesforce, or Keap to GoHighLevel.",
};

const migrationPaths = [
  {
    from: "HubSpot",
    to: "GoHighLevel",
    desc: "Map deal pipelines, contact fields, and custom records without losing conversation histories.",
  },
  {
    from: "ActiveCampaign",
    to: "GoHighLevel",
    desc: "Port lists, contact tags, and rebuild multi-stage email drip automation sequences.",
  },
  {
    from: "Kajabi",
    to: "GoHighLevel",
    desc: "Migrate product courses, student progress databases, checkouts, and landing pages.",
  },
  {
    from: "Keap / Infusionsoft",
    to: "GoHighLevel",
    desc: "Map complex legacy database fields, tags, and active campaigns into modern workflows.",
  },
];

const phases = [
  {
    step: "Phase 1",
    title: "Discovery & Database Mapping",
    desc: "We analyze your current CRM tags, pipelines, and fields. We build a mapping sheet detailing exactly how data translates into GoHighLevel custom fields.",
  },
  {
    step: "Phase 2",
    title: "Contact & Asset Export",
    desc: "We securely export your contact databases, unsubscribes, bounce lists, tags, and media assets, verifying document sizes for completeness.",
  },
  {
    step: "Phase 3",
    title: "Setup & Workflow Recreation",
    desc: "We rebuild forms, deal pipelines, email/SMS sequences, and test the trigger maps inside GoHighLevel to ensure execution logic is sound.",
  },
  {
    step: "Phase 4",
    title: "Live Cutover & Verification",
    desc: "We switch over domain settings, link DNS configurations, test webhooks, and execute live user tests to ensure zero lead loss.",
  },
];

export default function MigrationPage() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-24 sm:py-32">
        <div className="container">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <Badge>Migration Services</Badge>
            </Reveal>
            <TextReveal
              as="h1"
              text="Migrate your existing system to GoHighLevel seamlessly."
              className="mt-5 font-display text-display-lg font-semibold text-balance"
            />
            <Reveal index={1}>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Stop paying double subscription rates. Safely move your pipelines, lists, email automations, and landing pages to GoHighLevel with zero lead loss or system downtime.
              </p>
            </Reveal>
            <Reveal index={2}>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/book-a-strategy-session">Plan Your Migration</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Migration Paths */}
          <Reveal>
            <Badge>Systems Supported</Badge>
          </Reveal>
          <TextReveal
            as="h2"
            text="CRM and funnel migration pathways."
            className="mt-5 mb-10 font-display text-display-lg font-semibold text-balance"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-24">
            {migrationPaths.map((path, i) => (
              <Reveal key={path.from} index={i}>
                <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-center gap-2 mb-4 font-display font-semibold text-lg">
                    <span className="text-muted-foreground">{path.from}</span>
                    <ArrowRight className="size-4 text-primary shrink-0" />
                    <span className="text-primary">{path.to}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{path.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Phases */}
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-14 sm:px-12">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, hsl(var(--primary) / 0.2), transparent)",
              }}
            />
            <div className="relative max-w-3xl mx-auto">
              <Reveal>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-12 text-center">
                  The migration checklist
                </h2>
              </Reveal>
              <div className="space-y-10">
                {phases.map((phase, i) => (
                  <Reveal key={phase.step} index={i}>
                    <div className="flex gap-5">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary/80 mb-1">
                          {phase.step}
                        </p>
                        <h3 className="font-display text-lg font-semibold mb-1">{phase.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{phase.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <Reveal index={5}>
            <div className="mt-10 text-center max-w-2xl mx-auto">
              <ShieldAlert className="size-12 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">Our zero-downtime guarantee</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We build and test your entire GoHighLevel configuration in the background before changing your DNS or live links, ensuring your sales operations, lead capture forms, and booking sequences experience zero service interruptions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </main>
  );
}
