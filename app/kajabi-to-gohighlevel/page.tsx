import { CTA } from "@/components/sections/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Kajabi to GoHighLevel Migration — Muhammad Nouman",
  description:
    "Move your Kajabi courses, memberships, contacts, funnels, and email automations into GoHighLevel without losing students or active sales.",
};

const whatMigrates = [
  "Contacts and student profile database",
  "Course content structure and modules",
  "Membership access levels and gating logic",
  "Email broadcast and drip sequences",
  "Landing pages and checkout funnels",
  "Pipeline stages and lead tags",
];

const whySwitch = [
  {
    title: "No Per-Student Fees",
    desc: "Kajabi charges based on active members. GoHighLevel's flat pricing means your cost doesn't scale with your student count — perfect for growing course creators.",
  },
  {
    title: "CRM + Course in One",
    desc: "GoHighLevel combines your full CRM, pipeline, funnel builder, email/SMS, calendar, and membership site under one roof — eliminating Kajabi's limited marketing automation.",
  },
  {
    title: "Full SMS & AI Automations",
    desc: "Unlike Kajabi, GHL ships with powerful SMS sequences, AI chatbots, and outbound calling — giving you more touchpoints to re-engage enrolled students automatically.",
  },
  {
    title: "White-Label Your Platform",
    desc: "Agencies can re-sell GHL under their own brand. If you coach or consult, this opens a SaaS revenue stream that Kajabi simply cannot provide.",
  },
];

export default function KajabiMigrationPage() {
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
              text="Migrate from Kajabi to GoHighLevel — keep every student."
              className="mt-5 font-display text-display-lg font-semibold text-balance"
            />
            <Reveal index={1}>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                I rebuild your Kajabi courses, membership access tiers, email sequences, and sales funnels inside GoHighLevel — fully tested and live before your Kajabi subscription ends.
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
            text="Everything from Kajabi arrives in GoHighLevel."
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
            text="Why course creators are moving from Kajabi to GoHighLevel."
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
                  Your Kajabi platform stays operational throughout. We build the entire GoHighLevel setup in parallel and only switch over when everything is live-tested and confirmed.
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
