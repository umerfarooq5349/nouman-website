"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Star, Play, Check, Workflow, Sparkles, 
  HelpCircle, Target, Trophy, MessageSquare 
} from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { CountUp } from "@/components/motion/count-up";
import { site } from "@/lib/content";

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies[params.slug];

  if (!study) {
    notFound();
  }

  // Horizontal Scrolling Marquee items (mimics King Kong awards row)
  const achievements = [
    "GO HIGH LEVEL CERTIFIED",
    "CRM AUTOMATION SPECIALIST",
    "OUTBOUND PIPELINE ARCHITECT",
    "DONE-FOR-YOU Account SETUP",
    "CONVERSION RATE OPTIMIZED",
    "24/7 AI AGENT DEVELOPMENT",
  ];
  const marqueeItems = [...achievements, ...achievements];

  const tools = [
    "GoHighLevel", "Zapier", "Make.com", "Twilio", "Stripe", 
    "Calendly", "ActiveCampaign", "Salesforce", "WhatsApp API"
  ];
  const toolsMarquee = [...tools, ...tools];

  return (
    <div className="relative min-h-screen bg-background text-foreground pb-24 pt-32 overflow-hidden">
      
      {/* ─── Premium King Kong Stripes Background ─── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Vertical stripes grid */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "12.5% 100%",
          }}
        />
        {/* Radial ambient glow */}
        <div
          className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{
            background: "radial-gradient(closest-side, hsl(var(--primary) / 0.3), transparent)",
          }}
        />
      </div>

      <div className="container relative z-10">
        
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            Back to Selected Work
          </Link>
        </div>

        {/* ─── HERO HEADER SECTION ─── */}
        <header className="mb-16 text-center max-w-4xl mx-auto flex flex-col items-center">
          {/* Stars Aggregate Rating */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-2 mb-4"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="size-5 fill-saffron text-saffron drop-shadow-[0_0_8px_rgba(255,198,79,0.3)]" />
              ))}
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-saffron">
              4.8 out of 5 stars from client review
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance"
          >
            {study.headline}
          </motion.h1>

          {/* Partnership Block */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 inline-flex items-center gap-4 rounded-full border border-border/40 bg-card/40 px-6 py-2.5 backdrop-blur-md text-sm"
          >
            <span className="font-semibold text-foreground">{study.title}</span>
            <span className="text-muted-foreground/60 font-light">+</span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-primary">
              <Sparkles className="size-4" />
              Muhammad Nouman
            </span>
          </motion.div>
        </header>

        {/* ─── AWARDS ROW MARQUEE ─── */}
        <section className="border-y border-border/30 py-6 mb-20 overflow-hidden relative">
          <div className="flex shrink-0 animate-marquee items-center gap-16 whitespace-nowrap pr-16 select-none">
            {marqueeItems.map((item, i) => (
              <span
                key={i}
                className="font-display text-sm font-bold tracking-widest text-foreground/35 flex items-center gap-3"
              >
                <div className="size-2 rounded-full bg-primary" />
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ─── BACKGROUND & SERVICES SECTION ─── */}
        <section className="mb-24 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          
          {/* Background Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Badge>Project Background</Badge>
            <h2 className="font-display text-3xl font-semibold tracking-tight">The Origin Story</h2>
            {study.background.map((para, idx) => (
              <p key={idx} className="text-muted-foreground leading-relaxed text-base">
                {para}
              </p>
            ))}
          </motion.div>

          {/* Services Provided Bento */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-border/40 bg-card/30 p-8 backdrop-blur-md space-y-6"
          >
            <h3 className="font-display text-xl font-bold tracking-tight text-primary">
              Core Setup & Services
            </h3>
            <ul className="space-y-4">
              {study.services.map((service, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-primary/15 text-primary shrink-0">
                    <Check className="size-4 stroke-[2.5]" />
                  </div>
                  <span className="font-medium text-sm text-foreground/90">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* ─── BRAND EXPERIENCE MARQUEE ─── */}
        <section className="py-6 mb-24 overflow-hidden relative border-y border-border/10 bg-card/10 select-none">
          <div className="flex shrink-0 animate-marquee items-center gap-16 whitespace-nowrap pr-16">
            {toolsMarquee.map((item, i) => (
              <span
                key={i}
                className="font-display text-lg font-semibold tracking-tight text-foreground/20"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ─── CHALLENGE SECTION ─── */}
        <section className="mb-24 grid gap-12 lg:grid-cols-[1fr_1.1fr] items-center">
          
          {/* Challenge Description */}
          <div className="space-y-6">
            <Badge className="border-red-500/30 text-red-400 bg-red-500/5">
              The Hurdle
            </Badge>
            <h2 className="font-display text-3xl font-semibold tracking-tight">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              {study.challenge}
            </p>
          </div>

          {/* CRM Mockup Placeholder (Leads Leaking Flow) */}
          <div className="relative rounded-3xl border border-border/30 bg-card/20 p-6 md:p-8 backdrop-blur-md overflow-hidden glow-border">
            <div className="absolute top-0 right-0 size-24 -mr-4 -mt-4 rounded-full bg-red-500/5 blur-xl pointer-events-none" />
            <div className="flex items-center justify-between border-b border-border/20 pb-4 mb-6">
              <span className="text-xs font-semibold tracking-wider text-muted-foreground">CRITICAL PIPELINE FAULTS</span>
              <div className="size-2.5 rounded-full bg-red-500 animate-pulse" />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 relative">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                  <HelpCircle className="size-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">Lead Source (Facebook/Insta Ads)</p>
                  <p className="text-sm font-semibold truncate text-foreground">Traffic Chased Manually</p>
                </div>
                <span className="text-xs font-mono text-red-400 shrink-0">Lost 45%</span>
              </div>

              <div className="flex justify-center my-1.5">
                <div className="h-6 w-0.5 border-r border-dashed border-red-500/30" />
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-border/30 bg-background/30 px-4 py-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <Workflow className="size-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">Response Channel</p>
                  <p className="text-sm font-semibold truncate text-foreground">Spreadsheet Data Transfer</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground shrink-0">Delay: Hours</span>
              </div>

              <div className="flex justify-center my-1.5">
                <div className="h-6 w-0.5 border-r border-dashed border-red-500/30" />
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                  <Target className="size-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">Outcome Stage</p>
                  <p className="text-sm font-semibold truncate text-foreground">Practitioner Calendar booking</p>
                </div>
                <span className="text-xs font-mono text-red-400 shrink-0">No-shows: 45%</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── OUR APPROACH SECTION ─── */}
        <section className="mb-24 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          
          {/* Approach Mockup Placeholder (Growth chart curve) */}
          <div className="relative rounded-3xl border border-border/30 bg-card/20 p-6 md:p-8 backdrop-blur-md overflow-hidden glow-border order-last lg:order-first">
            <div className="absolute top-0 right-0 size-24 -mr-4 -mt-4 rounded-full bg-primary/5 blur-xl pointer-events-none" />
            <div className="flex items-center justify-between border-b border-border/20 pb-4 mb-6">
              <span className="text-xs font-semibold tracking-wider text-muted-foreground">LEADS & REVENUE GROWTH VELOCITY</span>
              <div className="size-2.5 rounded-full bg-green-500 animate-pulse" />
            </div>
            
            {/* SVG line chart representing conversion trend */}
            <div className="w-full h-48 relative">
              <svg viewBox="0 0 400 150" className="w-full h-full stroke-primary fill-none overflow-visible">
                {/* Horizontal guide lines */}
                <line x1="0" y1="20" x2="400" y2="20" stroke="hsl(var(--foreground) / 0.08)" strokeWidth="1" />
                <line x1="0" y1="70" x2="400" y2="70" stroke="hsl(var(--foreground) / 0.08)" strokeWidth="1" />
                <line x1="0" y1="120" x2="400" y2="120" stroke="hsl(var(--foreground) / 0.08)" strokeWidth="1" />

                {/* Graph Curve */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                  d="M0 135 C 50 135, 100 110, 150 90 C 200 70, 250 30, 300 25 C 350 20, 375 15, 400 10"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="stroke-primary filter drop-shadow-[0_0_10px_rgba(81,156,171,0.5)]"
                />
              </svg>
              <div className="absolute bottom-1 right-2 text-[10px] font-mono text-muted-foreground">Weeks 1-8</div>
              <div className="absolute top-1 left-2 text-[10px] font-mono text-primary font-semibold">100% Automations Live</div>
            </div>
          </div>

          {/* Approach Description */}
          <div className="space-y-6">
            <Badge className="border-primary/30 text-primary bg-primary/5">
              The Strategy
            </Badge>
            <h2 className="font-display text-3xl font-semibold tracking-tight">Our Approach</h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              {study.solutionIntro}
            </p>
            <div className="space-y-3">
              {study.solutionSteps.slice(0, 3).map((step, s) => (
                <div key={s} className="flex gap-3">
                  <div className="size-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold mt-1">
                    {s+1}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground/95">{step.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── RESULTS METRICS GRID (COUNT UP) ─── */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge>Impact Metrics</Badge>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight">
              Measurable Performance Growth
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {study.stats.map((stat, i) => (
              <div
                key={i}
                className="relative rounded-3xl border border-border/40 bg-card/20 p-8 backdrop-blur-sm transition-all hover:glow-border overflow-hidden"
              >
                <div className="absolute top-0 right-0 size-24 -mr-4 -mt-4 rounded-full bg-primary/5 blur-xl pointer-events-none" />
                <CountUp
                  value={stat.number}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  className="block font-display text-5xl font-bold text-primary tracking-tight"
                />
                <span className="mt-3 block text-sm font-medium text-muted-foreground/80 leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── TESTIMONIAL VIDEO PLACEHOLDER ─── */}
        <section className="mb-24 relative rounded-[2rem] border border-border/30 overflow-hidden aspect-[16/9] w-full max-w-4xl mx-auto shadow-md glow-border">
          {/* Background image mockup placeholder */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#0c0f0a]/90 to-primary/25 z-0" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center">
            {/* Pulsing Play Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="flex size-20 sm:size-24 items-center justify-center rounded-full bg-primary text-background shadow-lg shadow-primary/20 relative"
            >
              <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
              <Play className="size-8 sm:size-10 fill-background ml-1.5" />
            </motion.button>
            <p className="mt-6 text-sm font-semibold tracking-wider text-primary">WATCH FULL VIDEO INTERVIEW</p>
            <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold max-w-lg text-balance">
              How we built a complete CRM machine for {study.title}
            </h3>
          </div>
        </section>

        {/* ─── REVIEW BLOCK ─── */}
        <section className="mb-24 rounded-[2rem] border border-border/40 bg-card/25 p-8 sm:p-12 relative overflow-hidden backdrop-blur-md">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] items-center">
            {/* Massive Key Result Box */}
            <div className="text-center lg:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-saffron">
                Key Result Accomplished
              </span>
              <div className="mt-2 block font-display text-5xl sm:text-7xl font-bold tracking-tighter text-foreground">
                <CountUp
                  value={study.results.highlightNumber}
                  prefix={study.results.highlightPrefix}
                  suffix={study.results.highlightSuffix}
                  className="text-primary"
                />
              </div>
              <span className="mt-2 block text-sm font-medium text-muted-foreground">
                {study.results.highlightLabel}
              </span>
            </div>

            {/* Testimonial Quote */}
            <div className="border-t border-border/20 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <div className="flex gap-0.5 justify-center lg:justify-start">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4.5 fill-saffron text-saffron" />
                ))}
              </div>
              <blockquote className="mt-6 text-lg italic leading-relaxed text-foreground/90 text-center lg:text-left">
                &ldquo;{study.results.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex flex-col items-center lg:items-start">
                <span className="font-semibold text-foreground">{study.results.author}</span>
                <span className="text-sm text-muted-foreground">{study.results.role}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CALL TO ACTION ─── */}
        <section className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-3xl font-semibold tracking-tight">
            Ready to scale your business?
          </h2>
          <p className="mt-3 text-muted-foreground text-balance">
            Let&apos;s build a custom GoHighLevel CRM and automated funnel system that runs on autopilot.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Magnetic strength={0.25}>
              <Button asChild size="lg" data-cursor>
                <a href={site.calendly} target="_blank" rel="noopener noreferrer">
                  {site.primaryCtaLabel}
                </a>
              </Button>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Button asChild variant="outline" size="lg" data-cursor>
                <Link href="/work">See other work</Link>
              </Button>
            </Magnetic>
          </div>
        </section>

      </div>
    </div>
  );
}
