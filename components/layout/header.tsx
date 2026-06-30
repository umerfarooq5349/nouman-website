"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav, site } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2 transition-all duration-300",
            scrolled
              ? "glass border border-border shadow-sm"
              : "border border-transparent"
          )}
        >
          <a
            href="/"
            className="block"
          >
            <img
              src="/logo_light.png"
              alt={site.name}
              className="h-20 w-auto block dark:hidden object-contain"
            />
            <img
              src="/logo_dark.png"
              alt={site.name}
              className="h-20 w-auto hidden dark:block object-contain"
            />
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <Magnetic key={item.href} strength={0.25}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </Magnetic>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden md:block">
              <Magnetic strength={0.2}>
                <Button asChild size="sm" data-cursor>
                  <a href={site.calendly} target="_blank" rel="noopener noreferrer">
                    {site.primaryCtaLabel}
                  </a>
                </Button>
              </Magnetic>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X aria-hidden /> : <Menu aria-hidden />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-2 rounded-2xl border border-border glass p-4 md:hidden">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild className="mt-2 w-full">
                <a href={site.calendly} target="_blank" rel="noopener noreferrer">
                  {site.primaryCtaLabel}
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
