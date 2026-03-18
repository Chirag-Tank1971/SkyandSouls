import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SkyAndSouls",
    short_name: "SkyAndSouls",
    description: "Luxury event management studio.",
    start_url: "/",
    display: "standalone",
    background_color: "#07070f",
    theme_color: "#07070f",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}

