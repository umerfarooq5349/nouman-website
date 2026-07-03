import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Muhammad Nouman",
  description:
    "Learn how we collect, store, and protect your contact records and integration data securely.",
};

const sections = [
  {
    title: "1. Information Collected",
    body: "When you interact with this site, I collect personal coordinates you submit directly (such as name, email address, phone number, and business details) to book sessions or ask for custom quotes. This information is processed securely inside our CRM.",
  },
  {
    title: "2. Integration Data Security",
    body: "As a CRM database and automation engineer, I hold security to high standards. All client system credentials, API tokens, webhook parameters, and customer profiles accessed during setups are handled over encrypted channels, stored securely, and never shared or sold to third parties.",
  },
  {
    title: "3. Web Cookies & Analytics",
    body: "We use small cookies and analytics tools to understand site traffic, improve page load speeds, and optimize user experience. You can manage or disable cookie settings directly in your browser.",
  },
  {
    title: "4. Contact Information",
    body: "If you have any questions about this policy, or want to request the deletion of your personal contact records, please reach out via email at muhammadnoumanrauf@gmail.com.",
  },
];

export default function PrivacyPolicyPage() {
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
              text="Privacy Policy"
              className="mt-5 font-display text-display-lg font-semibold text-balance"
            />
            <Reveal index={1}>
              <p className="mt-2 text-sm text-muted-foreground">Last updated: July 3, 2026</p>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                I respect your privacy and am committed to protecting it. This Privacy Policy describes how I collect, process, and protect your information when you use my website or consulting services.
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
