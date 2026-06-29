"use client";

import { ArrowUp } from "lucide-react";
import { nav, site, socials } from "@/lib/content";
import { Magnetic } from "@/components/motion/magnetic";

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="container">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="font-display text-2xl font-semibold tracking-tight">
              Muhammad<span className="text-primary">.</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              {site.role} · Founder of Ignitto. Building done-for-you
              GoHighLevel systems for service businesses.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
                Navigate
              </h3>
              <ul className="space-y-2 text-sm">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
                Elsewhere
              </h3>
              <ul className="space-y-2 text-sm">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <Magnetic strength={0.3}>
            <a
              href="#top"
              data-cursor
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 transition-colors hover:bg-muted"
            >
              Back to top <ArrowUp className="size-4" aria-hidden />
            </a>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
