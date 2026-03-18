export type ServiceKey = "wedding" | "corporate" | "private" | "destination";

export type Service = {
  key: ServiceKey;
  title: string;
  description: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    key: "wedding",
    title: "Weddings",
    description:
      "Editorial storytelling, timeless design, and flawless execution—crafted around your love story.",
    highlights: ["Creative direction", "Vendor orchestration", "Show-day excellence"],
  },
  {
    key: "corporate",
    title: "Corporate",
    description:
      "Brand-forward experiences that feel effortless—product launches, conferences, and executive retreats.",
    highlights: ["Run-of-show design", "Stage & AV", "Guest experience"],
  },
  {
    key: "private",
    title: "Private",
    description:
      "Milestones that feel intimate yet iconic—birthdays, anniversaries, and at-home transformations.",
    highlights: ["Luxury décor", "Bespoke menus", "Atmosphere engineering"],
  },
  {
    key: "destination",
    title: "Destination",
    description:
      "Worldwide celebrations with concierge-level logistics—every detail handled, every moment elevated.",
    highlights: ["Travel coordination", "Local sourcing", "On-site team"],
  },
];

export type PortfolioCategory = "All" | "Weddings" | "Corporate" | "Private" | "Destination";

export type PortfolioItem = {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "All">;
  location: string;
  imageSrc: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "aurora-wedding",
    title: "Aurora Vows",
    category: "Weddings",
    location: "Udaipur, India",
    imageSrc: "/portfolio/aurora-vows.svg",
  },
  {
    id: "noir-corporate",
    title: "Noir Product Reveal",
    category: "Corporate",
    location: "Dubai, UAE",
    imageSrc: "/portfolio/noir-reveal.svg",
  },
  {
    id: "cyan-private",
    title: "Cyan Garden Night",
    category: "Private",
    location: "Goa, India",
    imageSrc: "/portfolio/cyan-garden.svg",
  },
  {
    id: "mirage-destination",
    title: "Mirage Coastline",
    category: "Destination",
    location: "Santorini, Greece",
    imageSrc: "/portfolio/mirage-coast.svg",
  },
  {
    id: "violet-wedding",
    title: "Violet Cathedral",
    category: "Weddings",
    location: "Florence, Italy",
    imageSrc: "/portfolio/violet-cathedral.svg",
  },
  {
    id: "signal-corporate",
    title: "Signal Summit",
    category: "Corporate",
    location: "Singapore",
    imageSrc: "/portfolio/signal-summit.svg",
  },
  {
    id: "midnight-private",
    title: "Midnight Soirée",
    category: "Private",
    location: "Mumbai, India",
    imageSrc: "/portfolio/midnight-soiree.svg",
  },
  {
    id: "arc-destination",
    title: "Arc of Lights",
    category: "Destination",
    location: "Bali, Indonesia",
    imageSrc: "/portfolio/arc-of-lights.svg",
  },
];

export type TeamMember = {
  id: string;
  name: string;
  title: string;
  specialty: string;
  imageSrc: string;
};

export const mainOwners: TeamMember[] = [
  {
    id: "owner-aria",
    name: "Aria Nayar",
    title: "Co-Founder • Creative Director",
    specialty: "Concept worlds, styling language, and brand-level storytelling.",
    imageSrc: "/team/owner-aria.svg",
  },
  {
    id: "owner-kai",
    name: "Kai Mehta",
    title: "Co-Founder • Production Lead",
    specialty: "Logistics, timelines, vendor orchestration, and show-day control.",
    imageSrc: "/team/owner-kai.svg",
  },
  {
    id: "owner-noor",
    name: "Noor Iqbal",
    title: "Co-Founder • Hospitality & Ops",
    specialty: "Guest journeys, concierge service, and on-ground experience design.",
    imageSrc: "/team/owner-noor.svg",
  },
];

export const employees: TeamMember[] = [
  {
    id: "emp-mira",
    name: "Mira Chen",
    title: "Senior Event Planner",
    specialty: "Planning systems, budgets, and vendor communications.",
    imageSrc: "/team/emp-mira.svg",
  },
  {
    id: "emp-zayn",
    name: "Zayn Qureshi",
    title: "Design Producer",
    specialty: "Stage, florals, lighting cues, and cohesive décor execution.",
    imageSrc: "/team/emp-zayn.svg",
  },
  {
    id: "emp-elena",
    name: "Elena Rossi",
    title: "Client Experience Manager",
    specialty: "Hospitality flow, guest support, and VIP coordination.",
    imageSrc: "/team/emp-elena.svg",
  },
  {
    id: "emp-adi",
    name: "Adi Krishnan",
    title: "Logistics Coordinator",
    specialty: "Run-of-show, movement plans, and contingency readiness.",
    imageSrc: "/team/emp-adi.svg",
  },
  {
    id: "emp-sana",
    name: "Sana Patel",
    title: "Content & Moments",
    specialty: "Capture planning, shot lists, and creator/vendor alignment.",
    imageSrc: "/team/emp-sana.svg",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ananya Kapoor",
    role: "Bride",
    quote:
      "SkyAndSouls turned our vision into a cinematic experience. Every detail felt intentional—and effortless.",
  },
  {
    name: "Marcus Lee",
    role: "Head of Marketing, Lumen",
    quote:
      "From the first storyboard to the final applause, their team executed with calm precision. Our brand never looked better.",
  },
  {
    name: "Sofia Alvarez",
    role: "Client",
    quote:
      "They transformed a private celebration into a masterpiece. Guests are still talking about the atmosphere.",
  },
  {
    name: "Ravi Menon",
    role: "Founder, Meridian Ventures",
    quote:
      "Run-of-show, hospitality, and production were world-class. Smooth, premium, and perfectly on time.",
  },
];

export type ExperienceStat = {
  label: string;
  value: number;
  suffix?: string;
};

export const experienceStats: ExperienceStat[] = [
  { label: "Events delivered", value: 240, suffix: "+" },
  { label: "Cities activated", value: 48, suffix: "+" },
  { label: "Five-star vendor partners", value: 130, suffix: "+" },
  { label: "Average client satisfaction", value: 98, suffix: "%" },
];

