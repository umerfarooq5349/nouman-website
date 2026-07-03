import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions — Muhammad Nouman",
  description:
    "Terms of service and engagement rules for GoHighLevel consulting, setups, and integration projects.",
};

const sections = [
  {
    title: "1. Scope of Services",
    body: "All technical CRM database design, workflow mapping, API integrations, and funnel building services are executed on a consulting basis. Deliverables and timelines are outlined in individual project proposals or milestone maps and require prompt client feedback to stay on schedule.",
  },
  {
    title: "2. Client Responsibilities",
    body: "Clients must provide timely, secure access to their GoHighLevel sub-accounts, domain DNS dashboards, and third-party API profiles (such as Zapier, Make, or Stripe) as required for setup. We are not responsible for project delays arising from missing access credentials.",
  },
  {
    title: "3. Limitation of Liability",
    body: "While I follow CRM build best practices, Muhammad Nouman is not liable for indirect or consequential damages, lead loss, API rate limitations, or subscription billing issues arising from the operation of third-party platforms (including GoHighLevel, Twilio, or Mailgun).",
  },
  {
    title: "4. Intellectual Property",
    body: "Upon complete payment of project retainers, all custom GoHighLevel snapshots, funnels, webhooks, and workflow logic built specifically for your account belong entirely to you. We retain the right to utilize general, non-proprietary technical design templates for other setups.",
  },
];

export default function TermsConditionsPage() {
  return (
    <main className="pt-20">
      <section className="py-24 sm:py-32">
        <div className="container">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <Badge>Legal</Badge>
            </Reveal>
            <TextReveal
              as="h1"
              text="Terms & Conditions"
              className="mt-5 font-display text-display-lg font-semibold text-balance"
            />
            <Reveal index={1}>
              <p className="mt-2 text-sm text-muted-foreground">Last updated: July 3, 2026</p>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                By browsing this website, booking a strategy session, or engaging my GoHighLevel consulting services, you agree to comply with and be bound by the following terms of use.
              </p>
            </Reveal>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-14 sm:px-12 max-w-3xl">
            <div className="space-y-10">
              {sections.map((section, i) => (
                <Reveal key={section.title} index={i}>
                  <div className="border-b border-border/50 pb-8 last:border-b-0 last:pb-0">
                    <h2 className="font-display text-xl font-semibold mb-3">{section.title}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{section.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal index={5}>
            <div className="mt-10">
              <Button variant="outline" asChild className="gap-2">
                <Link href="/">
                  <ArrowLeft className="size-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
