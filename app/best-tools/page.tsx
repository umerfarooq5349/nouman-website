import { CTA } from "@/components/sections/cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import Link from "next/link";
import { Workflow, Bot, Mail, Database, Send, Target } from "lucide-react";

export const metadata = {
  title: "Best Tools for Marketing Automation & CRM — Muhammad Nouman",
  description:
    "The exact tools Muhammad Nouman uses and recommends for building GoHighLevel systems, outbound campaigns, and marketing automation stacks.",
};

const toolCategories = [
  {
    category: "CRM & All-in-One Platform",
    badge: "Core Stack",
    icon: Database,
    tools: [
      {
        name: "GoHighLevel",
        role: "CRM, Funnel Builder, Email/SMS, AI Chatbot, Calendar",
        why: "The single platform that replaces 6–8 separate tools. Every client setup I build runs on GHL as the backbone. It is the most complete solution for agencies and service businesses.",
        href: "https://www.gohighlevel.com",
      },
    ],
  },
  {
    category: "Lead Generation & Outbound",
    badge: "Outbound Stack",
    icon: Send,
    tools: [
      {
        name: "Apollo.io",
        role: "Contact Database & Email Sequencer",
        why: "I use Apollo to source verified B2B contact lists by job title, industry, and company size — then pipe qualified leads directly into GHL pipelines via webhook.",
        href: "https://www.apollo.io",
      },
      {
        name: "Instantly.ai",
        role: "Cold Email Infrastructure",
        why: "Instantly handles the domain warming, sending infrastructure, and deliverability management for cold email campaigns at scale — keeping inboxes out of spam.",
        href: "https://instantly.ai",
      },
    ],
  },
  {
    category: "LinkedIn Outreach",
    badge: "Social Selling",
    icon: Target,
    tools: [
      {
        name: "Expandi",
        role: "LinkedIn Automation & Sequence Builder",
        why: "Expandi runs safe, cloud-based LinkedIn connection campaigns, InMail sequences, and profile visits — syncing replies back into GHL workflows for follow-up.",
        href: "https://expandi.io",
      },
    ],
  },
  {
    category: "Automation & Integration",
    badge: "Middleware",
    icon: Workflow,
    tools: [
      {
        name: "Make (formerly Integromat)",
        role: "Visual Workflow Automation",
        why: "For complex multi-step integrations between GHL, spreadsheets, APIs, and third-party databases, Make provides the most powerful visual automation builder available.",
        href: "https://www.make.com",
      },
      {
        name: "Zapier",
        role: "No-Code Integration Layer",
        why: "For simpler, high-reliability connections between GHL and common SaaS apps — Zapier is the fastest way to wire two platforms together without custom code.",
        href: "https://zapier.com",
      },
    ],
  },
  {
    category: "AI Assistants",
    badge: "AI Layer",
    icon: Bot,
    tools: [
      {
        name: "GHL Conversation AI",
        role: "Native AI Chatbot in GoHighLevel",
        why: "GoHighLevel's built-in AI agent handles inbound enquiries, qualifies leads with custom questions, and books appointments directly into calendars — with zero human intervention.",
        href: "https://www.gohighlevel.com",
      },
    ],
  },
  {
    category: "Scheduling & Booking",
    badge: "Booking Layer",
    icon: Mail,
    tools: [
      {
        name: "Calendly",
        role: "Booking & Scheduling",
        why: "Before migrating fully to GHL calendars, Calendly is used as a reliable embedded scheduling link. It integrates cleanly with GHL via webhook to trigger lead workflows on booking.",
        href: "https://calendly.com",
      },
    ],
  },
];

export default function BestToolsPage() {
  return (
    <main className="pt-20">
      <section className="py-24 sm:py-32">
        <div className="container">
          {/* Header */}
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <Badge>Recommended Stack</Badge>
            </Reveal>
            <TextReveal
              as="h1"
              text="The exact tools I use to build high-converting automation systems."
              className="mt-5 font-display text-display-lg font-semibold text-balance"
            />
            <Reveal index={1}>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                These are not sponsored recommendations. These are the tools I rely on every day to build GoHighLevel systems, run outbound campaigns, and automate client pipelines — battle-tested across 8+ industries.
              </p>
            </Reveal>
          </div>

          {/* Tool Categories */}
          <div className="space-y-20">
            {toolCategories.map((category, ci) => {
              const Icon = category.icon;
              return (
                <div key={category.category}>
                  <Reveal>
                    <Badge>{category.badge}</Badge>
                  </Reveal>
                  <div className="flex items-center gap-3 mt-5 mb-10">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-card text-primary">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <TextReveal
                      as="h2"
                      text={category.category}
                      className="font-display text-display-lg font-semibold"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {category.tools.map((tool, i) => (
                      <Reveal key={tool.name} index={i}>
                        <article className="group h-full flex flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                          <div>
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="font-display text-xl font-semibold tracking-tight">{tool.name}</h3>
                            </div>
                            <p className="text-xs font-medium text-primary mb-4">{tool.role}</p>
                            <p className="text-sm leading-relaxed text-muted-foreground">{tool.why}</p>
                          </div>
                          <div className="mt-6 pt-6 border-t border-border/50">
                            <Link
                              href={tool.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-semibold text-primary flex items-center gap-1 w-fit group-hover:translate-x-1 transition-transform duration-300"
                            >
                              Visit {tool.name} →
                            </Link>
                          </div>
                        </article>
                      </Reveal>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <Reveal index={5}>
            <div className="mt-24 relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-14 sm:px-12 text-center">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
                style={{ background: "radial-gradient(closest-side, hsl(var(--primary) / 0.25), transparent)" }}
              />
              <div className="relative max-w-xl mx-auto">
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-balance">
                  Want me to build your stack with these tools?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Book a free 15-minute strategy call. I&apos;ll audit your current setup and map the exact tools and workflows your business needs.
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
