"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-border/60 bg-background/70">
      <div className="mx-auto w-[min(1200px,calc(100%-2rem))] py-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-10 md:grid-cols-2"
        >
          <div>
            <div className="font-display text-2xl font-semibold tracking-wide text-foreground">
              SkyAndSoul
            </div>
            <p className="mt-3 max-w-md text-sm leading-7 text-foreground/60">
              A premium wedding-first event studio crafting celebrations with
              cinematic storytelling, refined design, and calm execution.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-foreground">Explore</div>
              <Separator className="my-3 bg-border/60" />
              <div className="space-y-2 text-sm text-foreground/60">
                <a className="block hover:text-foreground" href="#about">
                  About
                </a>
                <a className="block hover:text-foreground" href="#services">
                  Services
                </a>
                <a className="block hover:text-foreground" href="#portfolio">
                  Portfolio
                </a>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Studio</div>
              <Separator className="my-3 bg-border/60" />
              <div className="space-y-2 text-sm text-foreground/60">
                <a className="block hover:text-foreground" href="#experience">
                  Experience
                </a>
                <a className="block hover:text-foreground" href="#testimonials">
                  Testimonials
                </a>
                <a className="block hover:text-foreground" href="#contact">
                  Contact
                </a>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-sm font-semibold text-foreground">Email</div>
              <Separator className="my-3 bg-border/60" />
              <a
                href="mailto:hello@skyandsoul.com"
                className="text-sm text-foreground/60 hover:text-foreground"
              >
                hello@skyandsoul.com
              </a>
            </div>
          </div>
        </motion.div>

        <Separator className="my-10 bg-border/60" />
        <div className="flex flex-col items-start justify-between gap-4 text-xs text-foreground/50 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} SkyAndSoul. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span className="text-foreground/40">Designed for weddings + motion.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

