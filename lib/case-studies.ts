export type CaseStudyData = {
  slug: string;
  title: string;
  niche: string;
  headline: string;
  partnerLogo?: string;
  stats: {
    number: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    label: string;
  }[];
  services: string[];
  background: string[];
  challenge: string;
  goal: string;
  solutionIntro: string;
  solutionSteps: {
    title: string;
    description: string;
  }[];
  results: {
    highlightNumber: number;
    highlightPrefix?: string;
    highlightSuffix?: string;
    highlightLabel: string;
    quote: string;
    author: string;
    role: string;
  };
  accentClass: string;
};

export const caseStudies: Record<string, CaseStudyData> = {
  "dr-tarek-aesthetics": {
    slug: "dr-tarek-aesthetics",
    title: "Dr. Tarek Aesthetics",
    niche: "Aesthetic Clinic",
    headline: "From $0 to $210,000/Month in Booking Revenue via GHL Funnels & Automation",
    stats: [
      { number: 410, suffix: "%", label: "Increase in Lead-to-Booking Rate" },
      { number: 24, suffix: "/7", label: "Automated Appointment Coverage" },
      { number: 5, suffix: " Min", label: "Average Response Time to Inquiries" }
    ],
    services: [
      "Mobile-First Funnel Design",
      "Lead Routing Automations",
      "SMS & WhatsApp Notification Setup",
      "No-Show Prevention Sequences"
    ],
    background: [
      "Dr. Tarek Aesthetics is a premier aesthetic clinic looking to expand its reach. They had three physical retail facilities and focused primarily on physical bookings and organic walk-in patients.",
      "When market conditions shifted overnight and digital customer acquisition became vital, their team struggled to manage the incoming ad traffic manually, causing up to 60% of leads to be neglected or lost in messy sheets."
    ],
    challenge: "The clinic was spending heavily on social media ads but chasing leads manually. Leads were getting lost in spreadsheets, and delayed responses meant that up to 60% of potential patients booked elsewhere.",
    goal: "To build a 100% automated GHL booking machine that qualifies incoming leads in under 5 minutes and fills the calendars of 4 cosmetic practitioners.",
    solutionIntro: "We designed a multi-layered automation strategy inside GoHighLevel that replaced manual workflows with instant, high-converting pipelines:",
    solutionSteps: [
      {
        title: "High-Converting GHL Landing Pages",
        description: "Optimized mobile-first funnels tailored specifically for aesthetic procedures, featuring clear trust badges, micro-copy, and direct call-to-actions."
      },
      {
        title: "2-Step Qualification Workflows",
        description: "Wired automations that ask pre-qualifying questions via SMS/WhatsApp before redirecting verified prospects to the calendar booking page."
      },
      {
        title: "Instant Calendar Routing",
        description: "Custom GHL calendar configuration distributing bookings dynamically across practitioners depending on availability and procedure type."
      },
      {
        title: "No-Show Prevention Sequences",
        description: "Automatic email, SMS, and voice reminders that prompt clients to confirm their appointments, reducing booking drop-offs."
      }
    ],
    results: {
      highlightNumber: 210,
      highlightPrefix: "+$",
      highlightSuffix: "k/mo",
      highlightLabel: "New Booking Revenue",
      quote: "Our clinic went from chasing cold leads to a calendar that fills itself. The automations Muhammad built paid for themselves in the very first week.",
      author: "Dr. T. Aesthetics",
      role: "Lead Surgeon & Owner"
    },
    accentClass: "from-primary/30 to-fuchsia-500/10"
  },
  "the-posture-doctor": {
    slug: "the-posture-doctor",
    title: "The Posture Doctor",
    niche: "Chiropractic · AU",
    headline: "How We Optimized Booking Flow to Boost Show-Up Rates by 38%",
    stats: [
      { number: 38, suffix: "%", label: "Increase in Show-Up Rate" },
      { number: 2, suffix: " Mins", label: "Response Time Reduced From 1.4 Days" },
      { number: 92, suffix: "%", label: "Self-Qualified Automated Bookings" }
    ],
    services: [
      "Interactive Intake Funnel",
      "WhatsApp Confirmation Automations",
      "Patient Engagement Campaigns",
      "Re-booking Automation Pipelines"
    ],
    background: [
      "The Posture Doctor is an established Australian chiropractic clinic generating high lead volumes from physical and digital events.",
      "However, due to slow follow-up times and a lack of patient orientation, a massive portion of scheduled bookings were cancelations or no-shows, clogging practitioner schedules and wasting marketing spend."
    ],
    challenge: "The chiropractic clinic was successfully generating leads, but faced a massive 45% no-show rate. In addition, their front-desk team was taking up to 36 hours to follow up with new submissions.",
    goal: "Clean up the funnel booking experience and build a high-performance, automated confirmation and check-in campaign.",
    solutionIntro: "Under the Ignitto brand, we conducted a complete audit of their booking flow and implemented the following solutions:",
    solutionSteps: [
      {
        title: "Interactive Patient Intake Funnel",
        description: "Replaced flat contact forms with an interactive assessment questionnaire that filters out non-serious inquiries."
      },
      {
        title: "WhatsApp & SMS Engagement Workflows",
        description: "Automated instant confirmation messages containing map directions, parking instructions, and dynamic preparation guides."
      },
      {
        title: "Intelligent Re-Engagement Campaigns",
        description: "Automatically tags non-responders and triggers customized follow-ups to re-book missed calls or incomplete check-ins."
      }
    ],
    results: {
      highlightNumber: 38,
      highlightSuffix: "%",
      highlightLabel: "Fewer Cancelations",
      quote: "Muhammad completely transformed our intake funnel. Patients show up prepared, and our front desk staff can finally focus on patient care instead of endless calls.",
      author: "Practice Manager",
      role: "Operations Director, AU Clinic"
    },
    accentClass: "from-fuchsia-500/25 to-primary/10"
  },
  "nazeer-farms": {
    slug: "nazeer-farms",
    title: "Nazeer Farms",
    niche: "Real Estate",
    headline: "Generating 840+ Qualified Property Inquiries in 60 Days",
    stats: [
      { number: 840, suffix: "+", label: "Qualified Real Estate Leads" },
      { number: 3, prefix: "<", suffix: " Mins", label: "Average Agent Callback Speed" },
      { number: 4.2, prefix: "$", suffix: "M", decimals: 1, label: "Pipeline Value Generated" }
    ],
    services: [
      "Segmented Property Matching Quiz",
      "Instant Agent Hot-Routing",
      "Agent Dashboard Design",
      "High-Intent Email Nurtures"
    ],
    background: [
      "Nazeer Farms is a premium agricultural development and real estate listing team.",
      "Lacking an automated filtering system, their agents spent hours calling cold inquiries while high-net-worth investors were left waiting, resulting in missed sales and stale pipelines."
    ],
    challenge: "A premium agricultural and real estate development was launching new listings but struggled to capture high-net-worth buyers, resulting in low-quality leads and wasted ad spend.",
    goal: "Build an interactive property matching system to qualify buyers by budget and intent, then connect them instantly to sales agents.",
    solutionIntro: "We developed an automated property matching engine within GoHighLevel, integrated with real-time agent routing features:",
    solutionSteps: [
      {
        title: "Dynamic Property Quiz Funnel",
        description: "A step-by-step quiz capturing budget, investment timeline, and property preferences, which segment buyers automatically."
      },
      {
        title: "Instant Agent Call Triggering",
        description: "As soon as a qualified lead submits the quiz, GHL automatically dials the sales agent and connects them directly via phone call."
      },
      {
        title: "Custom Agent Dashboards",
        description: "Designed clean pipelines for agents to track buyer interactions, automated tasks, and stage drop-offs in real time."
      }
    ],
    results: {
      highlightNumber: 840,
      highlightSuffix: "+",
      highlightLabel: "Qualified Inquiries",
      quote: "The speed of the system is incredible. Leads get a call back within minutes, and they are pre-qualified by budget. Our sales team closed 4 deals this month.",
      author: "Sales Lead",
      role: "Nazeer Properties"
    },
    accentClass: "from-cyan-500/25 to-primary/10"
  },
  "breakfast-leadership-network": {
    slug: "breakfast-leadership-network",
    title: "Breakfast Leadership Network",
    niche: "Coaching",
    headline: "Re-activating 1,200+ Dormant Leads using GHL Conversation AI",
    stats: [
      { number: 1200, suffix: "+", label: "Re-activated Client Chats" },
      { number: 184, label: "Discovery Calls Booked in 30 Days" },
      { number: 68, prefix: "$", suffix: "k", label: "Added Direct Pipeline Revenue" }
    ],
    services: [
      "AI Knowledge Base Setup",
      "Re-activation Sequence Engineering",
      "Multi-Channel Campaign Triggers",
      "Auto-Calendar Hand-offs"
    ],
    background: [
      "Breakfast Leadership Network is an executive coaching and business mentorship community.",
      "They had accumulated thousands of dormant contacts over several years of running newsletters and webinars. Chasing these manually was impossible, meaning massive hidden revenue was left sitting in spreadsheets."
    ],
    challenge: "The client had a massive list of over 12,000 historical leads from webinars and email campaigns that had been cold and uncontacted for up to two years.",
    goal: "Utilize GoHighLevel's new Conversation AI features to build a automated re-engagement campaign that books calls without manual outreach.",
    solutionIntro: "We programmed and deployed a custom GoHighLevel Conversation AI agent trained specifically on the network's offers and calendar availability:",
    solutionSteps: [
      {
        title: "Knowledge Base AI Training",
        description: "Constructed detailed instruction sets for the AI model to handle FAQs, identify warm intent, and guide clients to a call."
      },
      {
        title: "Multi-Channel Reactivation Campaigns",
        description: "Sent personalized, low-friction SMS and email messages asking if leads were still working on their leadership development."
      },
      {
        title: "Seamless Calendar Hand-Off",
        description: "Wired AI triggers that automatically present scheduling links when the user expresses intent to talk or book a call."
      }
    ],
    results: {
      highlightNumber: 68,
      highlightPrefix: "$",
      highlightSuffix: "k",
      highlightLabel: "Extra Revenue Unlocked",
      quote: "We had thousands of dollars sitting in cold spreadsheets. Muhammad woke our email lists up, and the AI booked more calls than we could handle.",
      author: "Executive Coach",
      role: "Breakfast Leadership Network"
    },
    accentClass: "from-amber-500/25 to-primary/10"
  }
};
