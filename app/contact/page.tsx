"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Copy, Check } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
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
              Book a 15-minute call directly on my calendar to discuss your GoHighLevel setup, funnels, or automations — or reach out via email.
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

              {/* Socials Card */}
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Linkedin className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn profile</p>
                  <a
                    href="https://www.linkedin.com/in/muhammad-nouman-gohighlevel-expert"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-primary transition-colors inline-flex items-center gap-1.5"
                  >
                    Connect with Nouman
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* calendly inline widget */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full"
          >
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full min-h-[580px] sm:min-h-[660px] rounded-3xl border border-border bg-card shadow-sm glow-border overflow-hidden">
              <iframe
                src="https://calendly.com/muhammadnoumanrauf/15min?embed_domain=localhost&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1"
                width="100%"
                height="100%"
                frameBorder="0"
                className="absolute inset-0 w-full h-full"
                title="Calendly Scheduler"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
