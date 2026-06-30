"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Copy, Check, Facebook, Instagram, Youtube, Loader2 } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Script from "next/script";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formLoading, setFormLoading] = useState(true);
  const [calendarLoading, setCalendarLoading] = useState(true);

  const copyEmail = () => {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <Script src="https://link.muhammadnouman.services/js/form_embed.js" strategy="afterInteractive" />
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start">
          
          {/* copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge>Contact</Badge>
            
            <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-balance leading-none">
              Let&apos;s build something great.
            </h1>
            
            <p className="text-lg text-muted-foreground text-balance">
              Fill out the form to request a setup or consultation. You can also book a call directly below or reach out via email.
            </p>

            <div className="space-y-4 pt-4">
              {/* Email Card */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <div className="flex items-center gap-3 flex-1">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Direct email</p>
                    <p className="text-sm font-medium">{site.email}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={copyEmail} className="gap-2">
                  {copied ? (
                    <>
                      <Check className="size-3.5 text-green-500" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" />
                      Copy
                    </>
                  )}
                </Button>
              </div>

              {/* Socials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {/* LinkedIn Card */}
                <a
                  href="https://www.linkedin.com/in/muhammad-nouman-gohighlevel-expert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:border-primary/50 transition-all hover:bg-primary/5 duration-300"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Linkedin className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">LinkedIn</p>
                    <p className="text-sm font-medium">Connect</p>
                  </div>
                </a>

                {/* Facebook Card */}
                <a
                  href="https://www.facebook.com/coachnouman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:border-primary/50 transition-all hover:bg-primary/5 duration-300"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Facebook className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Facebook</p>
                    <p className="text-sm font-medium">Follow</p>
                  </div>
                </a>

                {/* Instagram Card */}
                <a
                  href="https://www.instagram.com/muhammadnouman_ghl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:border-primary/50 transition-all hover:bg-primary/5 duration-300"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Instagram className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Instagram</p>
                    <p className="text-sm font-medium">Follow</p>
                  </div>
                </a>

                {/* YouTube Card */}
                <a
                  href="https://www.youtube.com/channel/UCy1814uJCURwea7YQP_9bnA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 hover:border-primary/50 transition-all hover:bg-primary/5 duration-300"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Youtube className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">YouTube</p>
                    <p className="text-sm font-medium">Subscribe</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* GHL Form column */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full"
          >
            <div className="relative w-full min-h-[500px] rounded-3xl border border-border bg-card shadow-sm glow-border overflow-hidden p-2 sm:p-4 flex items-center justify-center">
              {formLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-card z-20">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <p className="text-xs text-muted-foreground mt-2">Loading secure form...</p>
                </div>
              )}
              <iframe
                src="https://link.muhammadnouman.services/widget/form/K5geJyG4mkuuSvWUP7Hy"
                style={{ width: "100%", height: "100%", minHeight: "460px", border: "none", borderRadius: "8px" }}
                id="inline-K5geJyG4mkuuSvWUP7Hy" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Facebook Ads Funnel Form"
                data-height="443"
                data-layout-iframe-id="inline-K5geJyG4mkuuSvWUP7Hy"
                data-form-id="K5geJyG4mkuuSvWUP7Hy"
                title="Facebook Ads Funnel Form"
                onLoad={() => setFormLoading(false)}
              />
            </div>
          </motion.div>

        </div>

        {/* New section for Calendly Calendar */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-t border-border pt-16"
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge className="mb-4">Schedule</Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              Book a Strategy Session
            </h2>
            <p className="text-muted-foreground mt-2">
              Select a date and time slot from the calendar below to speak with Muhammad Nouman directly.
            </p>
          </div>
          <div className="w-full max-w-5xl mx-auto aspect-[16/10] min-h-[600px] sm:min-h-[700px] rounded-3xl border border-border bg-card shadow-sm glow-border overflow-hidden flex items-center justify-center relative">
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
              frameBorder="0"
              className="w-full h-full"
              title="Calendly Scheduler"
              onLoad={() => setCalendarLoading(false)}
            />
          </div>
        </motion.section>

      </div>
    </main>
  );
}
