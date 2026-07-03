import { CTA } from "@/components/sections/cta";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import Link from "next/link";

export const metadata = {
  title: "Marketing & CRM Automation Articles — Muhammad Nouman",
  description:
    "In-depth automation guides, CRM tutorials, and GoHighLevel migration playbooks compiled by Muhammad Nouman.",
};

const articles = [
  {
    title: "How to Optimize Your GoHighLevel Workflows for Maximum Conversion",
    slug: "optimize-gohighlevel-workflows",
    category: "Automation",
    date: "July 2, 2026",
    readTime: "5 min read",
    description:
      "Learn step-by-step how to clean up your triggers, reduce workflow delays, and structure follow-ups to increase lead-to-booking conversion rates.",
  },
  {
    title: "Why Your Clinic Needs a Unified GHL CRM System in 2026",
    slug: "clinic-unified-ghl-crm",
    category: "CRM & SaaS",
    date: "June 28, 2026",
    readTime: "7 min read",
    description:
      "Discover how patient tracking, SMS follow-ups, and appointment reminders inside GoHighLevel cut no-show rates by over 40% for healthcare clinics.",
  },
  {
    title: "Migrating from ActiveCampaign to GoHighLevel with Zero Lead Loss",
    slug: "migrate-activecampaign-to-gohighlevel",
    category: "Migration",
    date: "June 15, 2026",
    readTime: "8 min read",
    description:
      "A complete technical playbook covering data mapping, contact tags import, and active trigger replication without interrupting your active sales funnel.",
  },
  {
    title: "Leveraging AI Chatbots in GoHighLevel to Automate 24/7 Bookings",
    slug: "ai-chatbots-gohighlevel-bookings",
    category: "AI & Chatbots",
    date: "May 30, 2026",
    readTime: "6 min read",
    description:
      "How to connect advanced conversational AI with GHL calendars to automatically book qualifying leads directly from Instagram, Facebook, and Web Chat.",
  },
];

export default function ArticlesPage() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-24 sm:py-32">
        <div className="container">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <Badge>Resources</Badge>
            </Reveal>
            <TextReveal
              as="h1"
              text="Automation playbooks and guides that actually work."
              className="mt-5 font-display text-display-lg font-semibold text-balance"
            />
            <Reveal index={1}>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Practical strategies, technical tutorials, and industry insights to help you get the most out of GoHighLevel and system automation.
              </p>
            </Reveal>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {articles.map((article, i) => (
              <Reveal key={article.slug} index={i}>
                <article className="group h-full flex flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <Badge>{article.category}</Badge>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h2 className="font-display text-xl font-semibold tracking-tight leading-tight group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {article.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-border/50 text-xs text-muted-foreground">
                    <span>{article.date}</span>
                    <span className="font-semibold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                      Read Article →
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
