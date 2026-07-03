import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { AboutStats } from "@/components/sections/about-stats";
import { ParallaxToolsSection } from "@/components/sections/parallax-tools";
import { ParallaxToolsSection2 } from "@/components/sections/parallax-tools-2";
import { ServicesBento } from "@/components/sections/services-bento";
import { WorkGallery } from "@/components/sections/work-gallery";
import { ProcessSteps } from "@/components/sections/process-steps";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutStats />
      {/* <ParallaxToolsSection /> */}
      <ParallaxToolsSection2 />
      <ServicesBento />
      <WorkGallery />
      <ProcessSteps />
      <Testimonials />
      <CTA />
    </>
  );
}
