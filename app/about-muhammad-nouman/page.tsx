import { AboutStats } from "@/components/sections/about-stats";
import { CTA } from "@/components/sections/cta";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "About Muhammad Nouman — GoHighLevel Certified Expert",
  description:
    "Learn about Muhammad Nouman, a certified automation specialist helping clinics, agencies, and service businesses scale using GoHighLevel.",
};

export default function AboutNoumanPage() {
  return (
    <main className="pt-20">
      <AboutStats />
      <CTA />
    </main>
  );
}
