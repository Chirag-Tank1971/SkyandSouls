import { SiteHeader } from "@/components/site/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloatingButton } from "@/components/site/WhatsAppFloatingButton";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-2 opacity-90"
        style={{
          background:
            "radial-gradient(1100px 620px at 50% 18%, rgba(200, 162, 200, 0.25), transparent 60%), radial-gradient(900px 520px at 85% 30%, rgba(231, 183, 164, 0.28), transparent 55%), radial-gradient(800px 520px at 25% 55%, rgba(212, 175, 55, 0.10), transparent 60%)",
        }}
      />

      <main className="relative z-10">
        <Page />
      </main>
    </div>
  );
}

function Page() {
  return (
    <>
      <SiteHeader />
      <HeroSection />
      <SocialProofSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <SiteFooter />
      <WhatsAppFloatingButton phoneNumberE164="+919999999999" />
    </>
  );
}
