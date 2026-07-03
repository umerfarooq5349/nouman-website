import { CTA } from "@/components/sections/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import Link from "next/link";
import { BarChart2, Lightbulb, Target, Users, Megaphone, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Fractional CMO Services — Muhammad Nouman",
  description:
    "Hire Muhammad Nouman as your Fractional CMO to build a complete marketing strategy, automation stack, and lead generation system without the full-time executive overhead.",
};

const services = [
  {
    title: "Marketing Strategy Design",
    icon: Lightbulb,
    desc: "Build a cohesive go-to-market plan aligned to your revenue targets — covering positioning, channel mix, funnel architecture, and quarterly campaign calendars.",
  },
  {
    title: "Full-Stack Automation Build",
    icon: BarChart2,
    desc: "Design and implement the complete CRM, email/SMS sequences, AI chatbots, and lead nurturing workflows that execute your marketing strategy 24/7.",
  },
  {
    title: "Paid & Outbound Channels",
    icon: Megaphone,
    desc: "Structure and oversee Facebook Ads, Google Ads, LinkedIn outreach, and cold email campaigns with precise targeting, tracking, and conversion optimization.",
  },
  {
    title: "Pipeline & Revenue Visibility",
    icon: Target,
    desc: "Implement dashboards, reporting automations, and KPI frameworks so leadership has real-time visibility into lead volume, conversion rates, and cost per acquisition.",
  },
  {
    title: "Team Mentoring & Ops",
    icon: Users,
    desc: "Train your internal team on GoHighLevel operations, content processes, and campaign management so they can execute independently as the strategy matures.",
  },
];

const included = [
  "Monthly strategy sessions and roadmap reviews",
  "Full GoHighLevel setup and optimization",
  "Email, SMS and AI workflow implementation",
  "Paid ads oversight and creative direction",
  "Lead funnel audit and conversion optimization",
  "Monthly performance reporting and analysis",
];

export default function FractionalCMOPage() {
  return (
    <main className="pt-20">
      <section className="py-24 sm:py-32">
        <div className="container">
          {/* Header */}
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <Badge>Fractional CMO</Badge>
            </Reveal>
            <TextReveal
              as="h1"
              text="Senior marketing leadership — without the full-time hire."
              className="mt-5 font-display text-display-lg font-semibold text-balance"
            />
            <Reveal index={1}>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                As your Fractional CMO, I take ownership of your entire marketing function — strategy, automation stack, paid channels, and team enablement — at a fraction of the cost of a full-time executive.
              </p>
            </Reveal>
            <Reveal index={2}>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/book-a-strategy-session">Book an Intro Call</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Services Grid */}
          <Reveal>
            <Badge>What I Cover</Badge>
          </Reveal>
          <TextReveal
            as="h2"
            text="Full marketing ownership across every critical function."
            className="mt-5 mb-10 font-display text-display-lg font-semibold text-balance"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-24">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Reveal key={svc.title} index={i}>
                  <article className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-background text-primary">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{svc.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{svc.desc}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* What's Included */}
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-14 sm:px-12">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.2), transparent)" }}
            />
            <div className="relative max-w-2xl mx-auto">
              <Reveal>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-center mb-10">
                  What&apos;s included every month
                </h2>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {included.map((item, i) => (
                  <Reveal key={item} index={i}>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium leading-tight">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal index={7}>
                <div className="mt-12 text-center">
                  <Button size="lg" asChild>
                    <Link href="/book-a-strategy-session">Get Started →</Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
}
