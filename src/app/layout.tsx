import type { Metadata } from "next";
import { Cinzel, Manrope } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { ParticlesCanvas } from "@/components/effects/ParticlesCanvas";
import { GsapScrollEffects } from "@/components/effects/GsapScrollEffects";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skyandsouls.com"),
  title: {
    default: "SkyAndSouls | Luxury Event Management",
    template: "%s | SkyAndSouls",
  },
  description:
    "SkyAndSouls is a premium event management studio crafting weddings, corporate experiences, private celebrations, and destination events with cinematic precision.",
  keywords: [
    "event management",
    "wedding planner",
    "corporate events",
    "destination wedding",
    "luxury events",
    "SkyAndSouls",
  ],
  openGraph: {
    type: "website",
    title: "SkyAndSouls | Luxury Event Management",
    description:
      "A premium event management studio crafting weddings, corporate experiences, private celebrations, and destination events.",
    url: "https://skyandsouls.com",
    siteName: "SkyAndSouls",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyAndSouls | Luxury Event Management",
    description:
      "A premium event management studio crafting weddings, corporate experiences, private celebrations, and destination events.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${manrope.variable} ${cinzel.variable} antialiased`}
      >
        <AppProviders>
          <ParticlesCanvas />
          <CursorGlow />
          <GsapScrollEffects />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
