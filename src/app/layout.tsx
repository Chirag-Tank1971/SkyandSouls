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
  metadataBase: new URL("https://skyandsoul.com"),
  title: {
    default: "SkyAndSoul | Luxury Event Management",
    template: "%s | SkyAndSoul",
  },
  description:
    "SkyAndSoul is a premium event management studio crafting weddings, corporate experiences, private celebrations, and destination events with cinematic precision.",
  keywords: [
    "event management",
    "wedding planner",
    "corporate events",
    "destination wedding",
    "luxury events",
    "SkyAndSoul",
  ],
  openGraph: {
    type: "website",
    title: "SkyAndSoul | Luxury Event Management",
    description:
      "A premium event management studio crafting weddings, corporate experiences, private celebrations, and destination events.",
    url: "https://skyandsoul.com",
    siteName: "SkyAndSoul",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkyAndSoul | Luxury Event Management",
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
    <html lang="en">
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
