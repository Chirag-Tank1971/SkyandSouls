"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/20">
      <div className="mx-auto w-[min(1200px,calc(100%-2rem))] py-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-10 md:grid-cols-2"
        >
          <div>
            <div className="font-display text-2xl font-semibold tracking-wide text-white">
              SkyAndSouls
            </div>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/60">
              A premium event management studio designing weddings, corporate
              experiences, private celebrations, and destination events with
              cinematic precision.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <div className="text-sm font-semibold text-white">Explore</div>
              <Separator className="my-3 bg-white/10" />
              <div className="space-y-2 text-sm text-white/60">
                <a className="block hover:text-white" href="#about">
                  About
                </a>
                <a className="block hover:text-white" href="#services">
                  Services
                </a>
                <a className="block hover:text-white" href="#portfolio">
                  Portfolio
                </a>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Studio</div>
              <Separator className="my-3 bg-white/10" />
              <div className="space-y-2 text-sm text-white/60">
                <a className="block hover:text-white" href="#experience">
                  Experience
                </a>
                <a className="block hover:text-white" href="#testimonials">
                  Testimonials
                </a>
                <a className="block hover:text-white" href="#contact">
                  Contact
                </a>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-sm font-semibold text-white">Email</div>
              <Separator className="my-3 bg-white/10" />
              <a
                href="mailto:hello@skyandsouls.com"
                className="text-sm text-white/60 hover:text-white"
              >
                hello@skyandsouls.com
              </a>
            </div>
          </div>
        </motion.div>

        <Separator className="my-10 bg-white/10" />
        <div className="flex flex-col items-start justify-between gap-4 text-xs text-white/50 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} SkyAndSouls. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span className="text-white/40">Designed with luxury + motion.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

