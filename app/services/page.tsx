import { ServicesBento } from "@/components/sections/services-bento";
import { CTA } from "@/components/sections/cta";

export const metadata = {
  title: "Services — Muhammad Nouman",
  description: "I build complete GoHighLevel setups, funnels, AI chatbots, and outbound pipelines.",
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <ServicesBento />
      <CTA />
    </main>
  );
}
