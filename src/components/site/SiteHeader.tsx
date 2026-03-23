"use client";

import { useState } from "react";
import type { MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileNavigate =
    (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      setMobileOpen(false);

      const sectionId = href.replace("#", "");

      window.setTimeout(() => {
        const target =
          sectionId === "top" ? document.documentElement : document.getElementById(sectionId);
        if (!target) return;

        const offset = 96;
        const top =
          sectionId === "top"
            ? 0
            : target.getBoundingClientRect().top + window.scrollY - offset;

        if (sectionId === "top") {
          window.history.replaceState(null, "", window.location.pathname);
        } else if (window.location.hash !== `#${sectionId}`) {
          window.location.hash = sectionId;
        }

        window.scrollTo({
          top: Math.max(0, top),
          behavior: "smooth",
        });
      }, 220);
    };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-4 w-[min(1200px,calc(100%-2rem))] rounded-2xl border border-border/45 bg-background/40 px-4 py-3 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between gap-4">
          <a
            href="#top"
            className="group inline-flex items-center gap-3"
          >
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

          <div className="hidden items-center gap-2 sm:flex">
            <a href="#contact" className="hidden sm:block">
              <Button
                variant="secondary"
                className="rounded-full border border-border/60 bg-background/60 text-foreground hover:bg-background/80"
              >
                Book Consultation
              </Button>
            </a>
            <a href="#services">
              <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                View Work
              </Button>
            </a>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border/60 bg-background/60 text-foreground transition hover:bg-background/80 lg:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {mobileOpen ? (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8, scale: 0.98, height: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1, height: "auto" }}
              exit={{ opacity: 0, y: -6, scale: 0.985, height: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 overflow-hidden rounded-2xl border border-border/55 bg-background/65 backdrop-blur-xl lg:hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="p-3"
              >
                <nav className="flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={handleMobileNavigate(item.href)}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -6 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                        delay: index * 0.03,
                      }}
                      className="rounded-xl px-3 py-2 text-sm font-medium tracking-wide text-foreground/80 transition hover:bg-background/60 hover:text-foreground"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.2, delay: 0.08 }}
                  className="mt-3 grid grid-cols-2 gap-2"
                >
                  <a href="#contact" onClick={handleMobileNavigate("#contact")}>
                    <Button
                      variant="secondary"
                      className="w-full rounded-full border border-border/60 bg-background/60 text-foreground hover:bg-background/80"
                    >
                      Book
                    </Button>
                  </a>
                  <a href="#services" onClick={handleMobileNavigate("#services")}>
                    <Button className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90">
                      View Work
                    </Button>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}

