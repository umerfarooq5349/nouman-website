import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Refund Policy — Muhammad Nouman",
  description:
    "Consultation and technical setup services refund policy terms and conditions.",
};

const sections = [
  {
    title: "1. Consultation Services",
    body: "Payments for completed strategy calls, hourly consulting sessions, and system review sprints are non-refundable. Once direct scoping, training, or development hours have been logged and delivered, they cannot be returned or refunded.",
  },
  {
    title: "2. Retainer Build Projects",
    body: "For complete migration builds or custom configurations, deposits and stage retainer payments are governed by the specific project milestone agreement signed prior to project kickoff. In the event of a project cancellation, refunds for uncompleted milestones will be evaluated based on the proportion of design or engineering hours already logged.",
  },
  {
    title: "3. Training Programs",
    body: "Training package registration fees are eligible for rescheduling but are non-refundable once custom snapshot templates have been delivered or video coaching sessions have begun.",
  },
  {
    title: "4. Dispute Resolution",
    body: "If you are unsatisfied with the quality of any custom builds or setups, please contact me directly at muhammadnoumanrauf@gmail.com. I am committed to working with you to audit any bugs, resolve workflow errors, and verify the configuration satisfies our scoped requirements.",
  },
];

export default function RefundPolicyPage() {
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
              text="Refund Policy"
              className="mt-5 font-display text-display-lg font-semibold text-balance"
            />
            <Reveal index={1}>
              <p className="mt-2 text-sm text-muted-foreground">Last updated: July 3, 2026</p>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Thank you for choosing Muhammad Nouman&apos;s GoHighLevel and system automation consulting services. Because of the custom nature of our technical consulting, please review our refund policy below.
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
