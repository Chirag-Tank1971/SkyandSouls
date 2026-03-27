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
    imageSrc: "/gallery/imgi_112_sindhu13-768x672.jpg",
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
    imageSrc: "/gallery/imgi_36_sindhu21.jpg",
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

/** Synced gallery assets from `public/gallery` and `public/visuals`. */
export const galleryImages: GalleryImage[] = [
  { id: "g-1", src: "/gallery/imgi_152_sindhu20-768x672.jpg", alt: "Gallery image 1" },
  { id: "g-2", src: "/gallery/imgi_21_652013903_18387077662153961_8424618039898146809_n.jpg", alt: "Gallery image 2" },
  { id: "g-3", src: "/gallery/imgi_30_587796508_1481884346203416_835104573646554277_n.jpg", alt: "Gallery image 3" },
  { id: "g-4", src: "/gallery/imgi_16_533073408_18521179669036446_8179457044609109497_n.jpg", alt: "Gallery image 4" },
  { id: "g-5", src: "/gallery/imgi_26_619127538_18443931241098875_696738974869715155_n.jpg", alt: "Gallery image 5" },
  { id: "g-6", src: "/gallery/imgi_35_583751171_17889731451380296_279657415238561444_n.jpg", alt: "Gallery image 6" },
  { id: "g-7", src: "/gallery/imgi_34_sindhu26.jpg", alt: "Gallery image 7" },
  { id: "g-8", src: "/gallery/imgi_22_642035879_18452276602098875_1262189288179815668_n.jpg", alt: "Gallery image 8" },
  { id: "g-9", src: "/gallery/imgi_29_587299057_18438891322098875_4659553332862685484_n.jpg", alt: "Gallery image 9" },
  { id: "g-10", src: "/gallery/imgi_19_538978624_18421257388098875_8023830212109047370_n.jpg", alt: "Gallery image 10" },
  { id: "g-11", src: "/gallery/imgi_27_614582881_18443676562098875_1658793482716484520_n.jpg", alt: "Gallery image 11" },
  { id: "g-12", src: "/gallery/imgi_21_639840018_18564883696002324_2032333331850076197_n.jpg", alt: "Gallery image 12" },
  { id: "g-13", src: "/gallery/imgi_39_541539900_18422751685098875_1518222818907265010_n.jpg", alt: "Gallery image 13" },
  { id: "g-14", src: "/gallery/imgi_30_587273545_18437961460098875_4736393908631515894_n.jpg", alt: "Gallery image 14" },
  { id: "g-15", src: "/gallery/imgi_32_588803334_885616773915962_4993677869865322200_n.jpg", alt: "Gallery image 15" },
  { id: "g-16", src: "/gallery/imgi_11_saadya-ashwini-bali5.jpg", alt: "Gallery image 16" },
  { id: "g-17", src: "/gallery/imgi_28_587299057_18438891322098875_4659553332862685484_n.jpg", alt: "Gallery image 17" },
  { id: "g-18", src: "/gallery/imgi_142_sindhu23-768x672.jpg", alt: "Gallery image 18" },
  { id: "g-19", src: "/gallery/imgi_25_652769960_18386734198153961_8940198376752284387_n.jpg", alt: "Gallery image 19" },
  { id: "g-20", src: "/gallery/imgi_43_615801451_18443931256098875_1513797178014460251_n.jpg", alt: "Gallery image 20" },
  { id: "g-21", src: "/gallery/imgi_56_sindhu19-768x672.jpg", alt: "Gallery image 21" },
  { id: "g-22", src: "/gallery/imgi_28_587564831_18439171114098875_6857598121203912982_n.jpg", alt: "Gallery image 22" },
  { id: "g-23", src: "/gallery/imgi_31_588803334_885616773915962_4993677869865322200_n.jpg", alt: "Gallery image 23" },
  { id: "g-24", src: "/gallery/imgi_36_571234812_18379497313197062_9033383074507992742_n.jpg", alt: "Gallery image 24" },
  { id: "g-25", src: "/gallery/imgi_24_631782381_18450851716098875_8282630596412913996_n.jpg", alt: "Gallery image 25" },
  { id: "g-26", src: "/gallery/imgi_33_584383550_18437213521098875_2835794349740803911_n.jpg", alt: "Gallery image 26" },
  { id: "g-27", src: "/gallery/imgi_18_477601483_18486511360036446_9165365940837096710_n.jpg", alt: "Gallery image 27" },
  { id: "g-28", src: "/gallery/imgi_17_527210714_18417758692098875_6230412919562364969_n.jpg", alt: "Gallery image 28" },
  { id: "g-29", src: "/gallery/imgi_18_511336802_18517645960012557_4001020452558082529_n.webp", alt: "Gallery image 29" },
  { id: "g-30", src: "/gallery/imgi_42_sindhu14.jpg", alt: "Gallery image 30" },
  { id: "g-31", src: "/gallery/imgi_34_587281497_18437086588098875_6245535686469557110_n.jpg", alt: "Gallery image 31" },
  { id: "g-32", src: "/gallery/imgi_18_504349924_18413584291098875_4952695409574663448_n.jpg", alt: "Gallery image 32" },
  { id: "g-33", src: "/gallery/imgi_25_619291820_18444242245098875_7010934080269272780_n.jpg", alt: "Gallery image 33" },
  { id: "g-34", src: "/gallery/imgi_172_sindhu.jpg4_-768x672.jpg", alt: "Gallery image 34" },
  { id: "g-35", src: "/gallery/imgi_39_sindhu25.jpg", alt: "Gallery image 35" },
  { id: "g-36", src: "/gallery/imgi_36_sindhu21.jpg", alt: "Gallery image 36" },
  { id: "g-37", src: "/gallery/imgi_20_641238338_18566516821002324_7771514081643347445_n.jpg", alt: "Gallery image 37" },
  { id: "g-38", src: "/gallery/imgi_5_sindhu.jpg6_.jpg", alt: "Gallery image 38" },
  { id: "g-39", src: "/gallery/imgi_45_sindhu15.jpg", alt: "Gallery image 39" },
  { id: "g-40", src: "/gallery/imgi_39_543649774_18423233659098875_1182136737870873654_n.jpg", alt: "Gallery image 40" },
  { id: "g-41", src: "/gallery/imgi_21_639840018_18564883696002324_2032333331850076197_n (1).jpg", alt: "Gallery image 41" },
  { id: "g-42", src: "/gallery/imgi_40_541539900_18422751685098875_1518222818907265010_n.jpg", alt: "Gallery image 42" },
  { id: "g-43", src: "/gallery/imgi_31_587796508_1481884346203416_835104573646554277_n.jpg", alt: "Gallery image 43" },
  { id: "g-44", src: "/gallery/imgi_23_631510210_25909617558718920_7084080609877146352_n.jpg", alt: "Gallery image 44" },
  { id: "g-45", src: "/gallery/imgi_22_631510210_25909617558718920_7084080609877146352_n.jpg", alt: "Gallery image 45" },
  { id: "g-46", src: "/gallery/imgi_112_sindhu13-768x672.jpg", alt: "Gallery image 46" },
  { id: "g-47", src: "/gallery/imgi_187_sindhu24-768x672.jpg", alt: "Gallery image 47" },
  { id: "g-48", src: "/gallery/imgi_35_583751171_17889731451380296_279657415238561444_n (1).jpg", alt: "Gallery image 48" },
  { id: "g-49", src: "/gallery/imgi_41_sindhu.jpg4_.jpg", alt: "Gallery image 49" },
  { id: "g-50", src: "/gallery/imgi_27_587564831_18439171114098875_6857598121203912982_n.jpg", alt: "Gallery image 50" },
  { id: "g-51", src: "/gallery/imgi_25_619127538_18443931241098875_696738974869715155_n.jpg", alt: "Gallery image 51" },
  { id: "g-52", src: "/visuals/imgi_25_Youtube.jpg", alt: "Visual story 1" },
  { id: "g-53", src: "/visuals/imgi_85_saadya-ashwini-bali-banner-1536x960.jpg", alt: "Visual story 2" },
  { id: "g-54", src: "/visuals/imgi_26_Aneesh-Vaishnavi.jpg", alt: "Visual story 3" },
  { id: "g-55", src: "/visuals/imgi_14_bride-today-scaled.jpg", alt: "Visual story 4" },
  { id: "g-56", src: "/visuals/imgi_19_Vogue-India.jpg", alt: "Visual story 5" },
  { id: "g-57", src: "/visuals/imgi_22_NY-TIMES-1.jpg", alt: "Visual story 6" },
  { id: "g-58", src: "/visuals/imgi_7_sindhubanner.jpg", alt: "Visual story 7" },
  { id: "g-59", src: "/visuals/imgi_9_Kara-Chaitu-2.jpg", alt: "Visual story 8" },
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
  "/gallery/imgi_31_587796508_1481884346203416_835104573646554277_n.jpg",
  "/gallery/imgi_42_sindhu14.jpg",
  "/gallery/imgi_36_sindhu21.jpg",
  "/gallery/imgi_45_sindhu15.jpg",
  "/gallery/imgi_112_sindhu13-768x672.jpg",
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

