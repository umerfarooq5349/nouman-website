"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { 
  Mail, Linkedin, Copy, Check, Facebook, Instagram, Youtube, Loader2,
  CheckCircle2, ArrowRight, BookOpen, Download, PhoneCall, Briefcase, 
  ShieldCheck, Calendar, Star, Users, ExternalLink, Activity, Sparkles
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { ServicesBento } from "@/components/sections/services-bento";
import { ParallaxToolsSection } from "@/components/sections/parallax-tools";
import { Testimonials } from "@/components/sections/testimonials";
import { site } from "@/lib/content";
import Image from "next/image";

export default function Home2Page() {
  const [copied, setCopied] = useState(false);
  const [formLoading, setFormLoading] = useState(true);
  const [calendarLoading, setCalendarLoading] = useState(true);

  const copyEmail = () => {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToContact = () => {
    document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-border/40 bg-grid-white/[0.01]">
        {/* Soft Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-[#FFC64F]/5 blur-3xl pointer-events-none -z-10" />
        
        <div className="container relative z-10 text-center max-w-4xl px-6">
          <Reveal>
            <Badge className="px-4 py-1.5 text-sm bg-primary/10 text-primary border-primary/20 mb-6">
              Hello! I&apos;m Muhammad Nouman
            </Badge>
          </Reveal>
          
          <Reveal index={1}>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-balance leading-[1.05] mb-6">
              Certified <span className="text-[#FFC64F]">Go</span><span className="text-[#519CAB]">High</span><span className="text-[#839958]">Level</span> Expert & Automation Specialst
            </h1>
          </Reveal>

          <Reveal index={2}>
            <p className="text-lg sm:text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed mb-8">
              Let me Automate and Scale Your Business with GoHighLevel. Build converting systems that run themselves.
            </p>
          </Reveal>

          <Reveal index={3}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" onClick={scrollToContact} className="gap-2 shadow-lg hover:shadow-primary/25 transition-all">
                BOOK A STRATEGY SESSION
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById("certification")?.scrollIntoView({ behavior: "smooth" })}>
                Verify Certification
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Certification Details Section */}
      <section id="certification" className="py-20 bg-muted/20 border-b border-border/40 relative">
        <div className="container px-6 max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            <Reveal className="space-y-6">
              <Badge className="bg-[#839958]/10 text-[#839958] border-[#839958]/20">Certified GHL Authority</Badge>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight">
                When You Want the Best for Your GoHighLevel Project, I&apos;m the Certified Expert You Need.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-balance">
                As a certified GoHighLevel expert, I specialize in business automation, setting up CRM systems properly for different niches, building funnels that convert, client onboarding, integrations and automating tasks to save you time. I&apos;ll handle everything from moving your business to GoHighLevel to connecting it with other platforms.
              </p>
              
              <div className="flex flex-col gap-4 border-l-2 border-[#519CAB] pl-5 py-2">
                <p className="font-semibold text-[#519CAB] text-lg">Real Business Growth Results</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  With a track record of helping clients make over $100K a month, I can help you build systems that drive real growth. Let&apos;s make success easy for your business!
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a 
                  href="https://www.gohighlevel.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#FFC64F] hover:underline"
                >
                  Verify my GoHighLevel Certification here
                  <ExternalLink className="size-4" />
                </a>
              </div>
            </Reveal>

            {/* Certificate mockup wrapper */}
            <Reveal index={2} className="relative flex justify-center lg:justify-end">
              <div className="w-full max-w-md aspect-[4/3] rounded-3xl border border-border bg-card p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between glow-border">
                {/* Accent lights */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFC64F]/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#519CAB]/10 rounded-full blur-2xl" />
                
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="font-display font-bold text-lg tracking-tight">
                    <span className="text-[#FFC64F]">Go</span><span className="text-[#519CAB]">High</span><span className="text-[#839958]">Level</span>
                  </div>
                  <ShieldCheck className="size-8 text-[#839958]" />
                </div>
                
                <div className="space-y-3 py-6 text-center">
                  <p className="text-xs uppercase tracking-widest text-[#519CAB] font-semibold">Certified Expert Certificate</p>
                  <h3 className="font-display text-2xl font-bold">Muhammad Nouman</h3>
                  <p className="text-sm text-muted-foreground">Certified GoHighLevel Automation & Strategy Consultant</p>
                </div>
                
                <div className="flex items-center justify-between border-t border-border pt-4 text-[10px] text-muted-foreground uppercase tracking-wider font-medium">
                  <span>Credential ID: GHL-8829-X</span>
                  <span className="text-[#839958] font-bold">Status: Active</span>
                </div>
              </div>
            </Reveal>
            
          </div>
        </div>
      </section>

      {/* 3. Lead Magnet Playbook Section */}
      <section className="py-24 border-b border-border/40 relative">
        <div className="container px-6 max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            {/* 3D Book Mockup */}
            <Reveal className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative group perspective-1000">
                <div className="w-64 sm:w-72 aspect-[1/1.5] rounded-r-2xl bg-gradient-to-br from-[#1F2937] to-[#111827] border-y border-r border-[#FFC64F]/30 p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between transition-transform duration-500 transform group-hover:rotate-y-12">
                  {/* Spine Highlight */}
                  <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-r from-black/40 to-transparent border-r border-white/5" />
                  
                  {/* Book Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="size-1.5 rounded-full bg-[#FFC64F]" />
                      <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFC64F]">Marketing Playbook</span>
                    </div>
                    
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight mt-4">
                      The Ultimate <br />
                      <span className="text-[#FFC64F]">Cold Email</span> <br />
                      Marketing Guide
                    </h3>
                    
                    <p className="text-xs text-slate-400 leading-relaxed max-w-[200px]">
                      Maximize your outreach efforts, automate lead generation, and grow your practice.
                    </p>
                  </div>

                  <div className="border-t border-slate-800 pt-4">
                    <p className="text-xs font-semibold text-white">By Muhammad Nouman</p>
                    <p className="text-[9px] uppercase tracking-wider text-[#519CAB] font-bold mt-0.5">GHL Certified Expert</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Copy & CTAs */}
            <Reveal index={2} className="space-y-6 order-1 lg:order-2">
              <Badge className="bg-[#FFC64F]/10 text-[#FFC64F] border-[#FFC64F]/20">Free Resources</Badge>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight">
                The Ultimate Cold Email Marketing Guide
              </h2>
              <p className="text-muted-foreground leading-relaxed text-balance">
                Maximize your marketing efforts, Automate lead generation, and grow your business with GoHighLevel. Whether you&apos;re looking to streamline your CRM, build high-converting funnels, or automate your marketing, we&apos;ve got you covered.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="gap-2 shadow-lg bg-[#FFC64F] hover:bg-[#FFC64F]/90 text-black font-semibold">
                  <Download className="size-4" />
                  GET PLAYBOOK
                </Button>
                <Button variant="outline" size="lg" onClick={scrollToContact} className="gap-2">
                  <PhoneCall className="size-4" />
                  BOOK A DISCOVERY CALL
                </Button>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 4. Services Bento Section */}
      <ServicesBento />

      {/* 5. GHL Migration Section */}
      <section className="py-24 bg-muted/20 border-t border-b border-border/40 relative">
        <div className="container px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="bg-[#519CAB]/10 text-[#519CAB] border-[#519CAB]/20 mb-4">Hassle-Free Migration</Badge>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight">
              Smooth GoHighLevel Migration: Professional Services for a Hassle-Free Transition
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Looking to switch your business to GoHighLevel without the hassle? My Smooth GoHighLevel Migration Services make the process easy and stress-free. As a certified GoHighLevel expert, I’ll take care of everything—from moving your data and setting up funnels to automating workflows and integrating third-party tools.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {[
              { name: "HubSpot", desc: "HubSpot to GoHighLevel Migration By Muhammad Nouman", bg: "hover:border-[#FF7A59]/40 hover:bg-[#FF7A59]/5" },
              { name: "Kajabi", desc: "Kajabi To GoHighLevel Migration By Muhammad Nouman", bg: "hover:border-[#009BFF]/40 hover:bg-[#009BFF]/5" },
              { name: "Keap", desc: "Keap To GoHighLevel Migration By Muhammad Nouman", bg: "hover:border-[#839958]/40 hover:bg-[#839958]/5" },
              { name: "Salesforce", desc: "SalesForce To GoHighLevel Migration By Muhammad Nouman", bg: "hover:border-[#00A1E0]/40 hover:bg-[#00A1E0]/5" }
            ].map((mig, idx) => (
              <Reveal key={mig.name} index={idx}>
                <div className={`p-8 rounded-3xl border border-border bg-card shadow-sm flex flex-col justify-between h-56 transition-all duration-300 hover:-translate-y-1 ${mig.bg}`}>
                  <div className="font-display font-extrabold text-2xl tracking-tight text-foreground/45">
                    {mig.name}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm leading-tight mb-2">
                      {mig.desc}
                    </h3>
                    <p className="text-xs text-muted-foreground">Secure transfer with zero service downtime</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" onClick={scrollToContact} className="gap-2">
              BOOK A DISCOVERY CALL
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Affiliate Logo Cloud Section */}
      <section className="py-24 border-b border-border/40 relative">
        <div className="container px-6 max-w-4xl text-center mb-12">
          <Badge className="bg-[#839958]/10 text-[#839958] border-[#839958]/20 mb-4">Integrations & Tech Stack</Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight">
            Your Business Deserves The Absolute Best
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed max-w-2xl mx-auto">
            I believe your business deserves nothing less than excellence. That&apos;s why we utilize only the most advanced and intelligent platforms to elevate your success. By establishing a robust foundation with premier platforms, we empower you to achieve new levels of excellence.
          </p>
        </div>
        <ParallaxToolsSection />
      </section>

      {/* 7. Testimonials Section */}
      <Testimonials />

      {/* 8. Ignitto Done-For-You Marketing Agency Section */}
      <section className="py-24 bg-muted/20 border-b border-border/40 relative">
        <div className="container px-6 max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            
            <Reveal className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20">Introducing Ignitto</Badge>
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-foreground">
                Ignitto
              </h2>
              <p className="text-lg font-semibold text-[#519CAB]">
                Done-For-You Marketing Agency for Clinics & Doctors
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Introducing Ignitto, your go-to marketing agency designed for clinics and doctors who want to grow their practices! I’m Muhammad Nouman, the CEO, and I understand the challenges you face in today’s busy world. Our goal at Ignitto is to help you attract more patients while you focus on providing great care. We offer simple and effective marketing solutions, like engaging sales funnels and easy patient communication systems, all tailored to fit your needs. Our experienced team knows the healthcare industry well, allowing us to create strategies that connect with your audience. Let Ignitto take care of your marketing, so you can focus on what you do best—helping your patients. Together, we can make your clinic the top choice for quality healthcare!
              </p>
              
              <div className="pt-2 flex items-center gap-3">
                <div className="size-2 rounded-full bg-[#839958]" />
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold">
                  Muhammad Nouman Certified GoHighLevel Expert
                </p>
              </div>
            </Reveal>

            {/* Visual agency representation */}
            <Reveal index={2} className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-square rounded-3xl border border-border bg-card p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between glow-border">
                {/* Grid layout representational */}
                <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
                
                <div>
                  <div className="flex items-center gap-2 mb-8">
                    <Sparkles className="size-6 text-[#FFC64F]" />
                    <span className="font-display font-extrabold text-xl tracking-wider text-white">IGNITTO</span>
                  </div>
                  
                  <h3 className="font-display text-3xl font-extrabold tracking-tight mb-4">Patient Acquisition <br />Made Simple.</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">Automated booking systems and highly customized medical funnels built to book patient calendars on autopilot.</p>
                </div>
                
                <div className="flex items-center justify-between border-t border-border pt-6 mt-8">
                  <div className="flex -space-x-2">
                    {[
                      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=150&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=150&auto=format&fit=crop"
                    ].map((img, i) => (
                      <img key={i} src={img} alt="doctor" className="size-8 rounded-full border border-card object-cover" />
                    ))}
                  </div>
                  <span className="text-xs text-[#839958] font-bold">Clinics & Doctors Marketing</span>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 9. Contact / Strategy Booking Section */}
      <section id="booking-section" className="py-24 border-b border-border/40 relative">
        <div className="container relative z-10 max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start">
            
            {/* Copy side */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Badge className="bg-primary/10 text-primary border-primary/20">Get In Touch</Badge>
              
              <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-balance leading-none">
                Reach out to me for inquiries or to book a session.
              </h1>
              
              <p className="text-lg text-muted-foreground text-balance">
                Fill out the secure message form to request a setup, consultation, or custom snapshorts.
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
              </div>
            </motion.div>

            {/* GHL embed form */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
              <p className="text-[10px] text-muted-foreground mt-3 leading-relaxed text-center">
                By submitting this form, you agree to receive email and SMS messages from IGNITTO LLC related to your inquiry and services.
              </p>
            </motion.div>
          </div>

          {/* Calendly Scheduler Integration */}
          <motion.div
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
          </motion.div>
        </div>
      </section>

      {/* 10. Footer Terms details & resources */}
      <section className="py-12 bg-muted/10">
        <div className="container px-6 max-w-6xl text-center md:text-left">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            
            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Best Resources for GoHighLevel</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Best Tools</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Best GoHighLevel Snapshots</a></li>
                <li><a href="https://www.gohighlevel.com/634876b5?fp_ref=ignitto26" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GoHighLevel 30-Day Free Trial</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">GoHighLevel Whitelabel Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Terms of Services</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Please be advised that I don’t offer refunds on services rendered. I strive to provide my clients with the highest quality of service and make all efforts to ensure satisfaction. If you have any concerns or inquiries regarding my services, please don&apos;t hesitate to contact me.
              </p>
            </div>

            <div className="flex flex-col justify-between">
              <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Ignitto LLC</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                © {new Date().getFullYear()} IGNITTO LLC. All rights reserved.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
