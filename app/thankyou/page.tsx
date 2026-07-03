import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Thank You — Session Booked Successfully | Muhammad Nouman",
  description:
    "Thank you for scheduling your strategy session. Please review the next steps checklist for your GoHighLevel audit.",
};

const nextSteps = [
  "Check your inbox for the calendar event invite and meeting details.",
  "Gather details about your current CRM (contact list size, funnel links, active domains).",
  "Ensure you have admin-level permissions if you need help debugging workflows live on the call.",
];

export default function ThankYouPage() {
  return (
    <main className="pt-20">
      <section className="py-24 sm:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <Reveal>
              <Badge>Booking Confirmed</Badge>
            </Reveal>
            <TextReveal
              as="h1"
              text="You're all set — see you on the call."
              className="mt-5 font-display text-display-lg font-semibold text-balance"
            />
            <Reveal index={1}>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Thank you for scheduling your GoHighLevel strategy session. I look forward to analyzing your business operations and building a roadmap tailored to your goals.
              </p>
            </Reveal>
          </div>

          {/* Next Steps Card */}
          <Reveal index={2}>
            <div className="mt-16 relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-14 sm:px-12 max-w-2xl">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
                style={{
                  background:
                    "radial-gradient(closest-side, hsl(var(--primary) / 0.2), transparent)",
                }}
              />
              <div className="relative">
                <h2 className="font-display text-xl font-semibold mb-8">Next steps checklist</h2>
                <ul className="space-y-5">
                  {nextSteps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                        {i + 1}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Navigation */}
          <Reveal index={3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="outline" asChild className="gap-2">
                <Link href="/">
                  <ArrowLeft className="size-4" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild className="gap-2">
                <Link href="/about-muhammad-nouman">
                  About Nouman
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
