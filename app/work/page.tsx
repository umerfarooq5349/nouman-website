import { WorkGallery } from "@/components/sections/work-gallery";
import { CTA } from "@/components/sections/cta";

export const metadata = {
  title: "Selected Work — Muhammad Nouman",
  description: "Check out some of the systems, funnels, and marketing setups I've built.",
};

export default function WorkPage() {
  return (
    <main className="pt-20">
      <WorkGallery />
      <CTA />
    </main>
  );
}
