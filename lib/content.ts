import {
  type LucideIcon,
  Workflow,
  LayoutTemplate,
  Send,
  Bot,
  Target,
  MessageSquare,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────────
   Edit everything about the site from this one file.
   Numbers/quotes marked PLACEHOLDER should be replaced with verified figures.
   ────────────────────────────────────────────────────────────────────────── */

export const site = {
  name: "Muhammad Nouman",
  role: "Certified GoHighLevel Expert",
  // Hero headline is intentionally split for the word-reveal animation.
  headline: "Marketing systems that book calls while you sleep.",
  subheadline:
    "I build complete GoHighLevel setups, funnels, and outbound systems for clinics, agencies, and service businesses — done for you, end to end.",
  email: "hello@ignitto.com", // PLACEHOLDER — confirm public contact email
  calendly: "https://calendly.com/muhammadnoumanrauf/15min",
  primaryCtaLabel: "Book a 15-min call",
  secondaryCtaLabel: "See selected work",
};

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/coachnouman/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-nouman-gohighlevel-expert" },
  { label: "Instagram", href: "https://www.instagram.com/muhammadnouman_ghl" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCy1814uJCURwea7YQP_9bnA" },
];

export const marquee = [
  "GoHighLevel",
  "Apollo",
  "Instantly",
  "Expandi",
  "Calendly",
  "Zapier",
  "Make",
  "Conversation AI",
];

export type Stat = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
};

export const stats: Stat[] = [
  { value: 25, suffix: "k+", label: "Leads/month built via Apollo + Instantly" },
  { value: 14, suffix: "-day", label: "Full GoHighLevel business setup turnaround" },
  { value: 8, suffix: "+", label: "Industries served — clinics, legal, real estate & more" },
  { value: 1297, prefix: "$", label: "Done-for-you GHL setup, fixed price" },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  span?: "wide" | "tall";
};

export const services: Service[] = [
  {
    title: "Lead Generation",
    description:
      "Targeted lists and sending infrastructure built to run at real scale.",
    icon: Target,
    span: "wide",
  },
  {
    title: "Funnels & Websites",
    description:
      "High-converting funnels and sites built inside GoHighLevel and ready to capture.",
    icon: LayoutTemplate,
  },
  {
    title: "Cold Email & LinkedIn Outreach",
    description:
      "Done-for-you outbound that fills your calendar without you lifting a finger.",
    icon: Send,
  },
  {
    title: "AI Chatbots",
    description:
      "Conversation AI that answers leads and books appointments around the clock.",
    icon: Bot,
  },
  {
    title: "GHL Setup & CRM Automation",
    description:
      "Your whole account built right: pipelines, calendars, workflows, and automations wired so leads never fall through the cracks.",
    icon: Workflow,
    span: "wide",
  },
  {
    title: "SMS & Email Marketing",
    description:
      "Campaigns and nurture sequences that bring quiet leads back to life.",
    icon: MessageSquare,
  }, {
    title: "Lead Generation",
    description:
      "Targeted lists and sending infrastructure built to run at real scale.",
    icon: Target,
  },
  {
    title: "Funnels & Websites",
    description:
      "High-converting funnels and sites built inside GoHighLevel and ready to capture.",
    icon: LayoutTemplate,
    span: "wide",
  },
  {
    title: "Cold Email & LinkedIn Outreach",
    description:
      "Done-for-you outbound that fills your calendar without you lifting a finger.",
    icon: Send,
  },
  {
    title: "AI Chatbots",
    description:
      "Conversation AI that answers leads and books appointments around the clock.",
    icon: Bot,
  },
  {
    title: "GHL Setup & CRM Automation",
    description:
      "Your whole account built right: pipelines, calendars, workflows, and automations wired so leads never fall through the cracks.",
    icon: Workflow,
  },
  {
    title: "SMS & Email Marketing",
    description:
      "Campaigns and nurture sequences that bring quiet leads back to life.",
    icon: MessageSquare,
    span: "wide",
  },
];

export type Project = {
  title: string;
  niche: string;
  blurb: string;
  href?: string;
  src: string;
  color: string;
  textColor: string;
};

export const projects: Project[] = [
  {
    title: "Dr. Tarek Aesthetics",
    niche: "Aesthetic Clinic",
    blurb: "Full GHL funnel and booking automation for a cosmetic clinic.",
    href: "/case-study/dr-tarek-aesthetics",
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
    color: "beige",
    textColor: "black",
  },
  {
    title: "The Posture Doctor",
    niche: "Chiropractic · AU",
    blurb: "Funnel audit and conversion roadmap under the Ignitto brand.",
    href: "/case-study/the-posture-doctor",
    src: "https://images.unsplash.com/photo-1579684389782-64d84b5e905d?q=80&w=1200&auto=format&fit=crop",
    color: "moss-green",
    textColor: "white",
  },
  {
    title: "Nazeer Farms",
    niche: "Real Estate",
    blurb: "Lead-capture funnel and content system for a property team.",
    href: "/case-study/nazeer-farms",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    color: "rosy-brown",
    textColor: "black",
  },
  {
    title: "Breakfast Leadership Network",
    niche: "Coaching",
    blurb: "Re-engagement system built around new GHL AI features.",
    href: "/case-study/breakfast-leadership-network",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    color: "moonstone",
    textColor: "white",
  }, {
    title: "Dr. Tarek Aesthetics",
    niche: "Aesthetic Clinic",
    blurb: "Full GHL funnel and booking automation for a cosmetic clinic.",
    href: "/case-study/dr-tarek-aesthetics",
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
    color: "beige",
    textColor: "black",
  },
  {
    title: "The Posture Doctor",
    niche: "Chiropractic · AU",
    blurb: "Funnel audit and conversion roadmap under the Ignitto brand.",
    href: "/case-study/the-posture-doctor",
    src: "https://images.unsplash.com/photo-1579684389782-64d84b5e905d?q=80&w=1200&auto=format&fit=crop",
    color: "moss-green",
    textColor: "white",
  },
  {
    title: "Nazeer Farms",
    niche: "Real Estate",
    blurb: "Lead-capture funnel and content system for a property team.",
    href: "/case-study/nazeer-farms",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    color: "rosy-brown",
    textColor: "black",
  },
  {
    title: "Breakfast Leadership Network",
    niche: "Coaching",
    blurb: "Re-engagement system built around new GHL AI features.",
    href: "/case-study/breakfast-leadership-network",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    color: "moonstone",
    textColor: "white",
  },
  {
    title: "Dr. Tarek Aesthetics",
    niche: "Aesthetic Clinic",
    blurb: "Full GHL funnel and booking automation for a cosmetic clinic.",
    href: "/case-study/dr-tarek-aesthetics",
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
    color: "beige",
    textColor: "black",
  },
  {
    title: "The Posture Doctor",
    niche: "Chiropractic · AU",
    blurb: "Funnel audit and conversion roadmap under the Ignitto brand.",
    href: "/case-study/the-posture-doctor",
    src: "https://images.unsplash.com/photo-1579684389782-64d84b5e905d?q=80&w=1200&auto=format&fit=crop",
    color: "moss-green",
    textColor: "white",
  },
  {
    title: "Nazeer Farms",
    niche: "Real Estate",
    blurb: "Lead-capture funnel and content system for a property team.",
    href: "/case-study/nazeer-farms",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    color: "rosy-brown",
    textColor: "black",
  },
  {
    title: "Breakfast Leadership Network",
    niche: "Coaching",
    blurb: "Re-engagement system built around new GHL AI features.",
    href: "/case-study/breakfast-leadership-network",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    color: "moonstone",
    textColor: "white",
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Discovery call",
    description:
      "We map your offers, your audience, and exactly where leads are leaking today.",
  },
  {
    number: "02",
    title: "System design",
    description:
      "I design the pipelines, funnels, and automations around your goals before a single thing is built.",
  },
  {
    number: "03",
    title: "Build & launch",
    description:
      "Everything gets set up inside GoHighLevel in about 14 days, tested, and switched on.",
  },
  {
    number: "04",
    title: "Handover & support",
    description:
      "I train your team, hand over the keys, and stay on for mentoring whenever you need it.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

// PLACEHOLDER testimonials — replace with real, attributed client quotes.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Our clinic went from chasing leads to a calendar that fills itself. The setup paid for itself in the first month.",
    name: "Clinic Owner",
    title: "Aesthetics · United States",
  },
  {
    quote:
      "He rebuilt our funnel and the booking flow finally makes sense. Bookings climbed without us touching anything.",
    name: "Practice Manager",
    title: "Chiropractic · Australia",
  },
  {
    quote:
      "The outbound system books calls on its own now. Best money we've spent on the business this year.",
    name: "Founder",
    title: "B2B Services · UK",
  },
];

export const about = {
  eyebrow: "About",
  heading: "I turn GoHighLevel into a machine that runs your front office.",
  body: [
    "I'm Muhammad Nouman, a Certified GoHighLevel Expert and the founder of Ignitto. For the last few years I've helped clinics, agencies, and service businesses replace messy, manual follow-up with systems that capture, nurture, and book leads on their own.",
    "Most owners don't need more tools — they need the ones they have wired together properly. That's what I do: a single setup where your funnel, CRM, outreach, and AI all talk to each other, so nothing gets dropped and your calendar stays full.",
  ],
};
