import { CTA } from "@/components/sections/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "HubSpot to GoHighLevel Migration — Muhammad Nouman",
  description:
    "Migrate from HubSpot to GoHighLevel without losing contacts, deal pipelines, or email automation sequences. Zero downtime, certified expert.",
};

const whatMigrates = [
  "All contacts, companies, and deal records",
  "Pipeline stages and custom CRM properties",
  "Email sequences and drip campaigns",
  "Form submissions and tracking history",
  "Meeting/calendar links and embed codes",
  "Conversation and activity history",
];

const whySwitch = [
  {
    title: "All-in-one Platform",
    desc: "GoHighLevel replaces HubSpot, Calendly, MailChimp, and your funnel builder in a single subscription — dramatically reducing your monthly SaaS spend.",
  },
  {
    title: "Built-in SMS & AI Workflows",
    desc: "Unlike HubSpot, GHL ships with native SMS/MMS, AI conversation bots, reputation management, and outbound dialer — no add-on required.",
  },
  {
    title: "White-label SaaS Ready",
    desc: "Agencies can resell GoHighLevel under their own brand as a SaaS product and generate recurring revenue — a capability HubSpot simply does not offer.",
  },
  {
    title: "Flat Predictable Pricing",
    desc: "HubSpot scales cost aggressively with contact count. GoHighLevel charges flat rates per account, making it far more cost-effective at volume.",
  },
];

export default function HubSpotMigrationPage() {
  return (
    <main className="pt-20">
      <section className="py-24 sm:py-32">
        <div className="container">
          {/* Header */}
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <Badge>Migration Services</Badge>
            </Reveal>
            <TextReveal
              as="h1"
              text="Migrate from HubSpot to GoHighLevel — zero lead loss."
              className="mt-5 font-display text-display-lg font-semibold text-balance"
            />
            <Reveal index={1}>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                I map every contact, deal pipeline, custom field, and email automation from HubSpot into a clean, fully operational GoHighLevel account — live and tested within 14 days.
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

          {/* What Migrates */}
          <Reveal>
            <Badge>What Gets Moved</Badge>
          </Reveal>
          <TextReveal
            as="h2"
            text="Everything from HubSpot arrives in GoHighLevel."
            className="mt-5 mb-10 font-display text-display-lg font-semibold text-balance"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-24">
            {whatMigrates.map((item, i) => (
              <Reveal key={item} index={i}>
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium leading-relaxed">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Why Switch */}
          <Reveal>
            <Badge>Why Switch</Badge>
          </Reveal>
          <TextReveal
            as="h2"
            text="Why agencies are leaving HubSpot for GoHighLevel."
            className="mt-5 mb-10 font-display text-display-lg font-semibold text-balance"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-16">
            {whySwitch.map((item, i) => (
              <Reveal key={item.title} index={i}>
                <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-center gap-2 mb-3">
                    <ArrowRight className="size-4 text-primary shrink-0" />
                    <h3 className="font-display text-lg font-semibold tracking-tight">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Guarantee */}
          <Reveal index={5}>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-14 sm:px-12 text-center max-w-2xl mx-auto">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
                style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.2), transparent)" }}
              />
              <div className="relative">
                <ShieldCheck className="size-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-semibold mb-2">Zero-Downtime Guarantee</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your HubSpot account stays live during the entire migration. We build, configure, and test the full GoHighLevel setup in the background before any DNS or link changes go live.
                </p>
                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link href="/book-a-strategy-session">Start Migration →</Link>
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
