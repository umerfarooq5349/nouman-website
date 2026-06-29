import { ProcessSteps } from "@/components/sections/process-steps";
import { CTA } from "@/components/sections/cta";

export const metadata = {
  title: "Process — Muhammad Nouman",
  description: "How we build and launch your CRM setup and marketing funnels in 4 simple steps.",
};

export default function ProcessPage() {
  return (
    <main className="pt-20">
      <ProcessSteps />
      <CTA />
    </main>
  );
}
