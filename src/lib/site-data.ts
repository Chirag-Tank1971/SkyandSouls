export type ServiceKey = "wedding" | "corporate" | "private" | "destination";

export type Service = {
  key: ServiceKey;
  title: string;
  description: string;
  highlights: string[];
  imageSrc: string;
};

export const services: Service[] = [
  {
    key: "wedding",
    title: "Weddings",
    description:
      "Editorial storytelling, timeless design, and flawless execution—crafted around your love story.",
    highlights: ["Creative direction", "Vendor orchestration", "Show-day excellence"],
    imageSrc: "/portfolio/the-lalit-jaipur.jpg",
  },
  {
    key: "corporate",
    title: "Corporate",
    description:
      "Brand-forward experiences that feel effortless—product launches, conferences, and executive retreats.",
    highlights: ["Run-of-show design", "Stage & AV", "Guest experience"],
    imageSrc: "/portfolio/marriott-hotel.jpg",
  },
  {
    key: "private",
    title: "Private celebrations",
    description:
      "Bespoke birthdays, anniversaries, and milestone evenings with elevated ambiance and warm hosting.",
    highlights: ["Theme-led styling", "Premium hospitality", "Atmosphere design"],
    imageSrc: "/portfolio/fairmont.jpg",
  },
  {
    key: "destination",
    title: "Destination events",
    description:
      "End-to-end planning across cities and countries with one calm production command center.",
    highlights: ["Travel + logistics", "Local vendor curation", "Multi-day programming"],
    imageSrc: "/portfolio/umaid-bhawan-palace-jodhpur.webp",
  },
];

export type AlbumItem = {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
};

export const heroSlides = [
  "/portfolio/the-lalit-jaipur.jpg",
  "/portfolio/umaid-bhawan-palace-jodhpur.webp",
  "/portfolio/rambagh-palace.jpg",
  "/portfolio/hyatt-regency.jpg",
  "/portfolio/fairmont.jpg",
];

export const featuredAlbums: AlbumItem[] = [
  {
    id: "album-sindhu-datta",
    title: "Sindhu & Datta",
    subtitle: "Wedding album",
    imageSrc: "/gallery/imgi_107_sindhu27-768x672.jpg",
  },
  {
    id: "album-saadhya-ashwin",
    title: "Saadhya & Ashwin",
    subtitle: "Bali moments",
    imageSrc: "/gallery/imgi_11_saadya-ashwini-bali5.jpg",
  },
  {
    id: "album-kara-chaitu",
    title: "Kara & Chaitu",
    subtitle: "Ceremony highlights",
    imageSrc: "/gallery/imgi_142_sindhu23-768x672.jpg",
  },
  {
    id: "album-palace-evening",
    title: "Palace Evening",
    subtitle: "Reception styling",
    imageSrc: "/gallery/imgi_56_sindhu19-768x672.jpg",
  },
  {
    id: "album-signature-vows",
    title: "Signature Vows",
    subtitle: "Editorial frames",
    imageSrc: "/gallery/imgi_61_sindhu16-768x672.jpg",
  },
  {
    id: "album-festive-night",
    title: "Festive Night",
    subtitle: "Guest experience",
    imageSrc: "/gallery/imgi_187_sindhu24-768x672.jpg",
  },
];

export type ServicePackage = {
  id: string;
  title: string;
  description: string;
  startingFrom: string;
  highlights: string[];
};

export const servicePackages: ServicePackage[] = [
  {
    id: "full-planning",
    title: "Full planning",
    description:
      "Complete event ownership from concept to execution, with one central planning team.",
    startingFrom: "Starting from INR 2.5L",
    highlights: ["Concept development", "Timeline + budget control", "Vendor management"],
  },
  {
    id: "decor-styling",
    title: "Decor & styling",
    description:
      "Visual world-building for stage, dining, entry experiences, florals, and ambiance.",
    startingFrom: "Starting from INR 1.2L",
    highlights: ["Theme direction", "Stage + floral styling", "Moodboard-to-installation"],
  },
  {
    id: "production-logistics",
    title: "Production & logistics",
    description:
      "Precision operations for AV, technical setup, movement plans, and run-of-show delivery.",
    startingFrom: "Starting from INR 1.8L",
    highlights: ["Technical production", "Vendor coordination", "On-ground execution"],
  },
  {
    id: "hospitality",
    title: "Hospitality & guest experience",
    description:
      "Guest-first journeys with concierge flow, support teams, and premium service touchpoints.",
    startingFrom: "Custom quote",
    highlights: ["Guest flow design", "VIP coordination", "Arrival-to-departure support"],
  },
];

export type SocialProofStat = {
  label: string;
  value: number;
  suffix: string;
};

export const socialProofStats: SocialProofStat[] = [
  { label: "Events delivered", value: 25, suffix: "+" },
  { label: "Cities covered", value: 10, suffix: "+" },
  { label: "Repeat-client rate", value: 72, suffix: "%" },
];

export type ClientLogo = {
  name: string;
  imageSrc: string;
};

export const clientLogos: ClientLogo[] = [
  {
    name: "Tata Motors",
    imageSrc: "/clients/tata-motors.png",
  },
  {
    name: "Samsung",
    imageSrc: "/clients/samsung.png",
  },
  {
    name: "Kotak",
    imageSrc: "/clients/kotak.png",
  },
  {
    name: "Arisotech",
    imageSrc: "/clients/arisotech.png",
  },
  {
    name: "AsianPaints",
    imageSrc: "/clients/asian_paints.png",
  },
  {
    name: "Accenture",
    imageSrc: "/clients/accenture.png",
  },
];

export const googleRating = {
  score: 4.9,
  reviews: 118,
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

/** All images under `public/gallery` (sorted by filename). */
export const galleryImages: GalleryImage[] = [
  { id: "g-1", src: "/gallery/imgi_107_sindhu27-768x672.jpg", alt: "Event photography" },
  { id: "g-2", src: "/gallery/imgi_112_sindhu13-768x672.jpg", alt: "Celebration moment" },
  { id: "g-3", src: "/gallery/imgi_11_saadya-ashwini-bali5.jpg", alt: "Wedding celebration" },
  { id: "g-4", src: "/gallery/imgi_127_sindhu18-768x672.jpg", alt: "Ceremony details" },
  { id: "g-5", src: "/gallery/imgi_142_sindhu23-768x672.jpg", alt: "Venue and décor" },
  { id: "g-6", src: "/gallery/imgi_152_sindhu20-768x672.jpg", alt: "Evening event" },
  { id: "g-7", src: "/gallery/imgi_167_sindhu17-768x672.jpg", alt: "Reception styling" },
  { id: "g-8", src: "/gallery/imgi_172_sindhu.jpg4_-768x672.jpg", alt: "Wedding décor" },
  { id: "g-9", src: "/gallery/imgi_177_sindhu14-768x672.jpg", alt: "Guest celebration" },
  { id: "g-10", src: "/gallery/imgi_187_sindhu24-768x672.jpg", alt: "Event atmosphere" },
  { id: "g-11", src: "/gallery/imgi_29_sindhu13.jpg", alt: "Traditional celebration" },
  { id: "g-12", src: "/gallery/imgi_3_sindhu16.jpg", alt: "Wedding ritual" },
  { id: "g-13", src: "/gallery/imgi_30_sindhu11.jpg", alt: "Festive gathering" },
  { id: "g-14", src: "/gallery/imgi_31_sindhu8.jpg", alt: "Event photography" },
  { id: "g-15", src: "/gallery/imgi_33_sindhu9.jpg", alt: "Celebration" },
  { id: "g-16", src: "/gallery/imgi_34_sindhu26.jpg", alt: "Wedding details" },
  { id: "g-17", src: "/gallery/imgi_36_sindhu21.jpg", alt: "Venue styling" },
  { id: "g-18", src: "/gallery/imgi_37_sindhu20.jpg", alt: "Event décor" },
  { id: "g-19", src: "/gallery/imgi_38_sindhu22.jpg", alt: "Ceremony" },
  { id: "g-20", src: "/gallery/imgi_39_sindhu25.jpg", alt: "Celebration moment" },
  { id: "g-21", src: "/gallery/imgi_41_sindhu.jpg4_.jpg", alt: "Wedding photography" },
  { id: "g-22", src: "/gallery/imgi_42_sindhu14.jpg", alt: "Event styling" },
  { id: "g-23", src: "/gallery/imgi_43_sindhu7.jpg", alt: "Gathering" },
  { id: "g-24", src: "/gallery/imgi_45_sindhu15.jpg", alt: "Wedding celebration" },
  { id: "g-25", src: "/gallery/imgi_5_sindhu.jpg6_.jpg", alt: "Festive event" },
  { id: "g-26", src: "/gallery/imgi_56_sindhu19-768x672.jpg", alt: "Palace event" },
  { id: "g-27", src: "/gallery/imgi_61_sindhu16-768x672.jpg", alt: "Reception" },
  { id: "g-28", src: "/gallery/imgi_66_sindhu13-1-768x672.jpg", alt: "Celebration details" },
  { id: "g-29", src: "/visuals/imgi_7_sindhubanner.jpg", alt: "Sindhu wedding visual story" },
  { id: "g-30", src: "/visuals/imgi_9_Kara-Chaitu-2.jpg", alt: "Kara and Chaitu visual story" },
  { id: "g-31", src: "/visuals/imgi_19_Vogue-India.jpg", alt: "Vogue India feature visual" },
  { id: "g-32", src: "/visuals/imgi_22_NY-TIMES-1.jpg", alt: "New York Times feature visual" },
  { id: "g-33", src: "/visuals/imgi_25_Youtube.jpg", alt: "YouTube feature visual story" },
  { id: "g-34", src: "/visuals/imgi_26_Aneesh-Vaishnavi.jpg", alt: "Aneesh and Vaishnavi visual story" },
  { id: "g-35", src: "/visuals/imgi_85_saadya-ashwini-bali-banner-1536x960.jpg", alt: "Saadhya and Ashwini Bali visual story" },
  { id: "g-36", src: "/visuals/imgi_14_bride-today-scaled.jpg", alt: "Brides Today feature visual story" },
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
    name: "Aakash Singh",
    title: " Creative Director",
    specialty: "Concept worlds, styling language, and brand-level storytelling.",
    imageSrc: "/team/aakashsingh.jpeg",
  },
  {
    id: "owner-kai",
    name: "Chirag Tank",
    title: " Production Lead",
    specialty: "Logistics, timelines, vendor orchestration, and show-day control.",
    imageSrc: "/team/chiragtank.jpg",
  },
  {
    id: "owner-noor",
    name: "Naveen Singh",
    title: " Hospitality & Ops",
    specialty: "Guest journeys, concierge service, and on-ground experience design.",
    imageSrc: "/team/naveensingh.jpeg",
  },
];

export const employees: TeamMember[] = [
  {
    id: "emp-mira",
    name: "Yuvraj Singh",
    title: "Senior Event Planner",
    specialty: "Planning systems, budgets, and vendor communications.",
    imageSrc: "/team/emp-mira.svg",
  },
  {
    id: "emp-zayn",
    name: "Bharat Rathore",
    title: "Design Producer",
    specialty: "Stage, florals, lighting cues, and cohesive décor execution.",
    imageSrc: "/team/emp-zayn.svg",
  },
  {
    id: "emp-elena",
    name: "Anshuman Singh",
    title: "Client Experience Manager",
    specialty: "Hospitality flow, guest support, and VIP coordination.",
    imageSrc: "/team/emp-elena.svg",
  },
  {
    id: "emp-adi",
    name: "Akshay Verma",
    title: "Logistics Coordinator",
    specialty: "Run-of-show, movement plans, and contingency readiness.",
    imageSrc: "/team/emp-adi.svg",
  },
  {
    id: "emp-sana",
    name: "Siddharth Verma",
    title: "Content & Moments",
    specialty: "Capture planning, shot lists, and creator/vendor alignment.",
    imageSrc: "/team/emp-sana.svg",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  imageSrc: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ananya Kapoor",
    role: "Bride",
    quote:
      "SkyAndSoul turned our vision into a cinematic experience. Every detail felt intentional—and effortless.",
    imageSrc: "/gallery/imgi_34_sindhu26.jpg",
  },
  {
    name: "Marcus Lee",
    role: "Head of Marketing, Lumen",
    quote:
      "From the first storyboard to the final applause, their team executed with calm precision. Our brand never looked better.",
    imageSrc: "/portfolio/marriott-hotel.jpg",
  },
  {
    name: "Sofia Alvarez",
    role: "Client",
    quote:
      "They transformed a private celebration into a masterpiece. Guests are still talking about the atmosphere.",
    imageSrc: "/gallery/imgi_39_sindhu25.jpg",
  },
  {
    name: "Ravi Menon",
    role: "Founder, Meridian Ventures",
    quote:
      "Run-of-show, hospitality, and production were world-class. Smooth, premium, and perfectly on time.",
    imageSrc: "/portfolio/the-oberoi.jpg",
  },
];

export const preContactCollageImages = [
  "/gallery/imgi_172_sindhu.jpg4_-768x672.jpg",
  "/gallery/imgi_152_sindhu20-768x672.jpg",
  "/gallery/imgi_38_sindhu22.jpg",
  "/gallery/imgi_45_sindhu15.jpg",
  "/portfolio/rambagh-palace.jpg",
  "/portfolio/fairmont.jpg",
  "/gallery/imgi_66_sindhu13-1-768x672.jpg",
  "/gallery/imgi_43_sindhu7.jpg",
];

export const footerImageRail = [
  "/gallery/imgi_31_sindhu8.jpg",
  "/gallery/imgi_42_sindhu14.jpg",
  "/gallery/imgi_61_sindhu16-768x672.jpg",
  "/gallery/imgi_36_sindhu21.jpg",
  "/gallery/imgi_107_sindhu27-768x672.jpg",
  "/portfolio/hyatt-regency.jpg",
];

export type ExperienceStat = {
  label: string;
  value: number;
  suffix?: string;
};

export const experienceStats: ExperienceStat[] = [
  { label: "Events delivered", value: 25, suffix: "+" },
  { label: "Cities activated", value: 10, suffix: "+" },
  { label: "Five-star vendor partners", value: 50, suffix: "+" },
  { label: "Average client satisfaction", value: 98, suffix: "%" },
];

