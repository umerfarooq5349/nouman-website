import { AboutStats } from "@/components/sections/about-stats";
import { CTA } from "@/components/sections/cta";

export const metadata = {
  title: "About — Muhammad Nouman",
  description: "Certified GoHighLevel Expert helping clinics, agencies, and service businesses scale.",
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      <AboutStats />
      <CTA />
    </main>
  );
}
