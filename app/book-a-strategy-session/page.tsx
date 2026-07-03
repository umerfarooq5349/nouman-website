"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";

export default function BookSessionPage() {
  const [calendarLoading, setCalendarLoading] = useState(true);

  return (
    <main className="pt-20">
      <section className="py-24 sm:py-32">
        <div className="container">
          <div className="mb-14 max-w-2xl mx-auto text-center">
            <Reveal>
              <Badge>Appointment Scheduler</Badge>
            </Reveal>
            <TextReveal
              as="h1"
              text="Book your free 15-minute strategy session."
              className="mt-5 font-display text-display-lg font-semibold text-balance"
            />
            <Reveal index={1}>
              <p className="mt-4 text-lg text-muted-foreground text-balance">
                Select a date and time slot from the calendar below to speak with Muhammad Nouman directly. Let&apos;s map out your GoHighLevel system configuration.
              </p>
            </Reveal>
          </div>

          <Reveal index={2}>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm w-full min-h-[680px] flex items-center justify-center">
              {calendarLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-card z-20">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <p className="text-xs text-muted-foreground mt-2">Loading calendar...</p>
                </div>
              )}
              <iframe
                src="https://calendly.com/muhammadnoumanrauf/15min?embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1"
                width="100%"
                height="100%"
                style={{ minHeight: "680px" }}
                frameBorder="0"
                className="w-full h-full"
                title="Calendly Scheduler"
                onLoad={() => setCalendarLoading(false)}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
