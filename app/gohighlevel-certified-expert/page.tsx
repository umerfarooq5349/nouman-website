import { CTA } from "@/components/sections/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import Link from "next/link";
import { ShieldCheck, Award, Zap, Database, Lock } from "lucide-react";

export const metadata = {
  title: "GoHighLevel Certified Expert Services — Muhammad Nouman",
  description:
    "Work with a verified, certified GoHighLevel professional for custom integrations, automation building, snapshot design, and API mapping.",
};

const qualifications = [
  {
    title: "Official Certification",
    icon: Award,
    description:
      "Completed GoHighLevel official certification exams, verifying professional expertise across CRM operations, SaaS configurations, and admin controls.",
  },
  {
    title: "Custom Snapshot Architecture",
    icon: Database,
    description:
      "Designed custom system templates (snapshots) containing pre-built workflows, pipelines, email sequences, and custom dashboards ready for single-click deployment.",
  },
  {
    title: "Advanced Integrations & Webhooks",
    icon: Zap,
    description:
      "Connected GoHighLevel with external systems (Zapier, Make, custom REST APIs, databases) to ensure data moves seamlessly between tools.",
  },
  {
    title: "Compliance & Security Mapping",
    icon: Lock,
    description:
      "Configured secure accounts compliant with data standards, mapping system boundaries to protect sensitive patient/client profiles.",
  },
];

export default function CertifiedExpertPage() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-24 sm:py-32">
        <div className="container">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <Badge>Certification & Verification</Badge>
            </Reveal>
            <TextReveal
              as="h1"
              text="Certified GoHighLevel expertise you can trust."
              className="mt-5 font-display text-display-lg font-semibold text-balance"
            />
            <Reveal index={1}>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Avoid costly setup errors. Leverage verified, certified expertise to map your CRM, pipelines, and outbound workflows correctly from day one.
              </p>
            </Reveal>
            <Reveal index={2}>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/book-a-strategy-session">Hire Certified Expert</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Capabilities Grid */}
          <Reveal>
            <Badge>Capabilities</Badge>
          </Reveal>
          <TextReveal
            as="h2"
            text="Enterprise CRM competencies built over years of real builds."
            className="mt-5 mb-10 font-display text-display-lg font-semibold text-balance"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {qualifications.map((qual, i) => {
              const Icon = qual.icon;
              return (
                <Reveal key={qual.title} index={i}>
                  <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-background text-primary">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                      {qual.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {qual.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* Trust Seal */}
          <Reveal index={5}>
            <div className="mt-16 relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-14 text-center sm:px-12">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
                style={{
                  background:
                    "radial-gradient(closest-side, hsl(var(--primary) / 0.2), transparent)",
                }}
              />
              <div className="relative max-w-lg mx-auto">
                <ShieldCheck className="size-14 text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  Verified Expert Status
                </h3>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  Every GoHighLevel setup, funnel integration, and consulting sprint is executed in accordance with GHL best practices, ensuring your system handles client and lead profile records securely.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </main>
  );
}
