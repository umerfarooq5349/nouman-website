import {
  type LucideIcon,
  Workflow,
  LayoutTemplate,
  Send,
  Bot,
  Target,
  MessageSquare,
  Users,
  BookOpen,
  Layers,
  Globe,
  Cpu,
  FileText,
  Mail,
  Database,
  Calendar,
  Lock,
  Copy,
  PhoneCall,
  Share2,
  Link2,
  PenTool,
  Blocks,
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
    title: "GHL Client Onboarding",
    description:
      "Boost your business with a friendly GoHighLevel (GHL) onboarding! Get the personalized support you need to make your operations smoother and more efficient. If you've built your own branded white-label SMMA or SaaS on GoHighLevel, I can help onboard your clients and act as your brand expert to ensure their success.",
    icon: Users,
    span: "wide",
  },
  {
    title: "GHL Mentoring and Consultation",
    description:
      "Learning GoHighLevel doesn’t have to be tough! I’m here to make it easy for you. With my mentoring and consultation, you’ll discover how to use this powerful platform to grow your business. GoHighLevel can transform your operations, but knowing how to implement it is essential. Let me help you navigate the process and unlock its full potential!",
    icon: BookOpen,
  },
  {
    title: "High-Converting Sales Funnels",
    description:
      "I can help you boost your business with high-converting sales funnels using GoHighLevel! I create easy and effective customer journeys that turn curious visitors into loyal customers. With my funnels, you’ll see more sales and higher revenue. Let’s work together to grow your business and achieve your goals!",
    icon: Layers,
  },
  {
    title: "GHL Website Design",
    description:
      "I can help you create more than just a website; I build a strong online presence! With my GoHighLevel website design services, you’ll get a site that not only looks great but also drives results. Let’s work together to bring your vision to life and make your online presence shine!",
    icon: LayoutTemplate,
  },
  {
    title: "AI-Powered Automation",
    description:
      "I can help you harness the power of AI to automate your customer interactions with smart chatbots. Plus, my workflow automations simplify your business operations. From nurturing leads to managing tasks, I create customized solutions that save you time and enhance your customer experience. Let’s make your business more efficient together!",
    icon: Cpu,
    span: "wide",
  },
  {
    title: "Advanced Workflows & Automation",
    description:
      "I can help you simplify complex tasks by automating your pipelines and business requirements with GoHighLevel workflows. I design automations that handle if-else logic, wait times, and more, ensuring everything runs smoothly and efficiently. Let’s boost your productivity by making your workflows work for you!",
    icon: Workflow,
  },
  {
    title: "Optimized Landing Pages",
    description:
      "I can help you create landing pages that captivate and convert! With my expertise, I design high-performance, engaging landing pages that unlock your business potential and drive real results. Let’s work together to turn your visitors into loyal customers!",
    icon: FileText,
  },
  {
    title: "Email Automation",
    description:
      "I can help you keep your audience engaged with smart email automation! I create automated email sequences that nurture leads, deliver timely content, and build lasting customer relationships—all while saving you time and effort. Let’s streamline your communication and boost your business together!",
    icon: Mail,
    span: "wide",
  },
  {
    title: "Migration to GoHighlevel",
    description:
      "I can help you migrate to GoHighLevel securely and effortlessly! We ensure a smooth, hassle-free migration from platforms like HubSpot, Keap, Kajabi, and Salesforce, with no downtime. You can focus on what matters most while we handle the transition for you. Let’s make your move to GoHighLevel seamless!",
    icon: Database,
  },
  {
    title: "Calendar Setup and Domain Integration",
    description:
      "I can handle your calendar and domain integrations for smooth scheduling and management. I set up calendars that sync perfectly with your workflow, making appointment booking a breeze for you and your clients. Plus, I ensure your domain configurations are secure and ready for your websites. Let’s streamline your operations together!",
    icon: Calendar,
  },
  {
    title: "Membership Site Creation",
    description:
      "I can help you create exclusive membership sites where you can offer premium content, courses, or other gated materials. I build strong membership platforms within GoHighLevel, making it easy for you to manage subscriptions, control content access, and engage with your members. Let’s bring your membership vision to life!",
    icon: Lock,
  },
  {
    title: "GHL Snapshot",
    description:
      "I can help you with easy and hassle-free GoHighLevel snapshot setup, whether you’re migrating from another platform, backing up your existing data, or have purchased a pre-built snapshot for your niche. My GoHighlevel Snapshot setup services ensure that your workflows, funnels, and settings are smoothly transferred and preserved. Let’s quickly set you up for success with prebuilt snapshots!",
    icon: Copy,
    span: "wide",
  },
  {
    title: "Phone & Text Messaging System A2P 10DLC Registration",
    description:
      "I can enhance your communication by integrating phone and text messaging systems directly into GoHighLevel. I’ll set up and configure your phone and SMS channels while ensuring compliance with A2P 10DLC regulations. This makes it easy for you to manage calls and messages right from your CRM, ensuring seamless client interactions and smooth, compliant communication.",
    icon: PhoneCall,
  },
  {
    title: "Social Media Integration",
    description:
      "I can help you connect all your social media platforms to GoHighLevel for centralized management. By integrating your social channels, you can post, track, and engage with your audience without the hassle of switching between multiple platforms. This streamlines your marketing efforts and helps you stay connected with your audience more effectively.",
    icon: Share2,
  },
  {
    title: "GHL CRM and Pipeline for Lead Generation",
    description:
      "Transform your lead generation process with GoHighLevel’s CRM and pipeline setup. I can help you effectively capture, track, and nurture leads through a customized pipeline designed for your business needs. With streamlined workflows and powerful automation, you can maximize opportunities and convert more leads into loyal customers, driving your business growth forward.",
    icon: Target,
    span: "wide",
  },
  {
    title: "Facebook Ads Lead Mapping to GHL CRM",
    description:
      "Automatically sync leads generated through Facebook ads directly into your GoHighLevel CRM. I can configure your systems to ensure seamless lead mapping, allowing you to nurture and convert leads with ease while improving ad campaign performance.",
    icon: Link2,
  },
  {
    title: "Branding, Compelling Copy & Brand Messaging",
    description:
      "Enhance your brand identity with compelling copy and messaging that reflects your unique vision. I create persuasive content that aligns with your brand’s color scheme, logo, and overall aesthetic. Whether for email campaigns, SMS, or landing pages, I ensure your messaging resonates with your audience and strengthens your brand presence, driving engagement and action.",
    icon: PenTool,
  },
  {
    title: "GHL Integration with Third-Party Apps",
    description:
      "Seamlessly connect your favorite third-party apps with GoHighLevel to enhance your business operations. I can help you integrate platforms using GoHighLevel webhooks, Zapier, and Pabbly, ensuring that your systems work together smoothly. This integration allows you to automate processes, synchronize data, and improve overall efficiency, enabling you to focus on what matters most—growing your business.",
    icon: Blocks,
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

// Real, attributed client quotes.
export const testimonials: Testimonial[] = [
  {
    quote:
      "I hired Muhammad to help me complete a GoHighLevel landing page build-out I had been struggling with, and he was amazing to work with. He was responsive to all requests and completed the project quickly and accurately. What would have taken me weeks to figure out, Muhammad was able to complete in just a few days. I will absolutely use him for future GoHighLevel projects",
    name: "Lauren Newman",
    title: "Leadership Professional | Marketing Strategist",
  },
  {
    quote:
      "I'm SO happy I found Muhammad. He has been such a huge part of my business' automations and growth potential. He's very great to work with, timely, and very knowledgeable with GoHighLevel. Thank you for your great work ethic and talent, Muhammad!",
    name: "Kristen O'Briant Fickeisen",
    title: "Growth & Digital Marketing Strategy Consultant",
  },
  {
    quote:
      "Muhammad was amazing to work with, and he over delivered. great experience having him help me with my go high level setup. I'm definitely planning on working with him again. I would say his English was amazing and easy to understand. highly recommend",
    name: "Eric Campbell",
    title: "Owner, Eric Campbell Photography",
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
