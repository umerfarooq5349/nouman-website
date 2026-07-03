import { CTA } from "@/components/sections/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Salesforce to GoHighLevel Migration — Muhammad Nouman",
  description:
    "Migrate from Salesforce to GoHighLevel. Move contacts, opportunities, custom objects, and automation flows without disrupting your revenue pipeline.",
};

const whatMigrates = [
  "Contacts and leads with custom field mapping",
  "Opportunity and deal pipeline stages",
  "Account and company records",
  "Email templates and campaign sequences",
  "Task and activity notes",
  "Web-to-lead form configurations",
];

const whySwitch = [
  {
    title: "Fraction of the Cost",
    desc: "Salesforce Enterprise can run $150+ per user/month. GoHighLevel delivers equivalent CRM, funnel, and automation capabilities at a flat rate — saving thousands annually.",
  },
  {
    title: "No Admin Specialists Required",
    desc: "Salesforce typically requires a certified admin to configure and maintain. GoHighLevel is intuitive enough for marketing teams to manage without dedicated Salesforce developers.",
  },
  {
    title: "SMS, AI & Reputation Built In",
    desc: "GoHighLevel ships with native SMS automations, AI conversation agents, Google Review requests, and missed-call text-back — all features that require costly Salesforce add-ons.",
  },
  {
    title: "Agency-Ready Architecture",
    desc: "GoHighLevel's sub-account model allows agencies to manage multiple clients under one dashboard — a capability Salesforce reserves for its most expensive enterprise tiers.",
  },
];

export default function SalesforceMigrationPage() {
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
              text="Migrate from Salesforce to GoHighLevel — same power, lower cost."
              className="mt-5 font-display text-display-lg font-semibold text-balance"
            />
            <Reveal index={1}>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                I migrate your Salesforce contacts, opportunities, custom fields, and pipeline logic into a production-ready GoHighLevel environment — without disrupting a single active deal.
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
            text="Your Salesforce data, fully recreated in GoHighLevel."
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
            text="Why businesses are replacing Salesforce with GoHighLevel."
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
                  Salesforce stays live for your team throughout the migration. We configure, map, and validate GoHighLevel completely before your team switches — protecting every open opportunity.
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
