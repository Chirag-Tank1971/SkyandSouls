import { SiteHeader } from "@/components/site/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloatingButton } from "@/components/site/WhatsAppFloatingButton";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#07070f]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-2 opacity-70"
        style={{
          background:
            "radial-gradient(1200px 600px at 50% 20%, rgba(168, 85, 247, 0.18), transparent 60%), radial-gradient(900px 520px at 80% 40%, rgba(34, 211, 238, 0.12), transparent 55%)",
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
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <SiteFooter />
      <WhatsAppFloatingButton phoneNumberE164="+919999999999" />
    </>
  );
}
