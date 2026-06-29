import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/outfit";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ScrollToTop } from "@/components/layout/scroll-to-top";

export const metadata: Metadata = {
  title: "Muhammad Nouman — Certified GoHighLevel Expert",
  description:
    "Done-for-you GoHighLevel setups, funnels, and outbound systems for clinics, agencies, and service businesses.",
  metadataBase: new URL("https://muhammadnouman.services"),
  openGraph: {
    title: "Muhammad Nouman — Certified GoHighLevel Expert",
    description:
      "Marketing systems that book calls while you sleep. Done-for-you GoHighLevel, funnels, and outreach.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Nouman — Certified GoHighLevel Expert",
    description:
      "Marketing systems that book calls while you sleep.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <a
            href="#work"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
