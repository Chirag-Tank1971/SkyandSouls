"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-4 w-[min(1200px,calc(100%-2rem))] rounded-2xl border border-border/60 bg-background/60 px-4 py-3 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="group inline-flex items-center gap-3">
            <span className="relative grid size-10 place-items-center overflow-hidden rounded-xl ring-1 ring-border/60 transition group-hover:ring-border/80">
              <Image
                src="/logo.png"
                alt="SkyAndSoul logo"
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </span>
            <div className="leading-tight">
              <div className="font-display text-base font-semibold tracking-wide text-foreground">
                SkyAndSoul
              </div>
              <div className="text-xs text-foreground/55">Wedding Event Studio</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-wide text-foreground/70 transition hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden sm:block">
              <Button
                variant="secondary"
                className="rounded-full border border-border/60 bg-background/60 text-foreground hover:bg-background/80"
              >
                Book Consultation
              </Button>
            </a>
            <a href="#portfolio">
              <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                View Work
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

