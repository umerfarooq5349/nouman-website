import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Client Testimonials & Reviews — Muhammad Nouman",
  description:
    "Real reviews and success stories from agency owners, clinics, and businesses scaling with Muhammad Nouman's GoHighLevel setups.",
};

export default function TestimonialsPage() {
  return (
    <main className="pt-20">
      <section className="py-24 sm:py-32">
        <div className="container">
          <div className="mb-14 max-w-2xl">
            <Reveal>
              <Badge>Testimonials</Badge>
            </Reveal>
            <TextReveal
              as="h1"
              text="Loved by agencies and businesses across 8+ industries."
              className="mt-5 font-display text-display-lg font-semibold text-balance"
            />
          </div>
        </div>
      </section>
      <Testimonials />
      <CTA />
    </main>
  );
}
