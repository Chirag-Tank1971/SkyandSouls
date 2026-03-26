"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  clientLogos,
  googleRating,
  socialProofStats,
  testimonials,
} from "@/lib/site-data";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const sectionEase = [0.22, 1, 0.36, 1] as const;

export function SocialProofSection() {
  const highlightedTestimonials = testimonials.slice(0, 3);
  const reduceMotion = useReducedMotion();

  return (
    <section className="cv-auto relative z-10 py-16 sm:py-20">
      <div className="mx-auto w-[min(1200px,calc(100%-2rem))]">
        <div className="glass glow-ring rounded-3xl p-6 sm:p-8" data-gsap="reveal">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge className="rounded-full border-border/60 bg-background/60 text-foreground/80 hover:bg-background/70">
                Trusted by hosts and brands
              </Badge>
              <h2 className="font-display mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Proven performance,{" "}
                <span className="text-gradient">premium execution</span>.
              </h2>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/70 px-4 py-3 text-sm text-foreground/75">
              <span className="font-semibold text-foreground">Google rating:</span>{" "}
              <AnimatedCounter
                value={googleRating.score}
                decimalPlaces={1}
                durationSeconds={1.35}
                delaySeconds={0}
              />
              /5 (
              <AnimatedCounter
                value={googleRating.reviews}
                suffix="+"
                durationSeconds={1.2}
                delaySeconds={0.15}
              />{" "}
              reviews)
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {socialProofStats.map((item, index) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border/55 bg-background/65 p-4"
              >
                <div className="font-display text-3xl font-semibold text-foreground">
                  <AnimatedCounter
                    value={item.value}
                    suffix={item.suffix}
                    durationSeconds={1.25}
                    delaySeconds={0.08 + index * 0.12}
                  />
                </div>
                <div className="mt-1 text-sm text-foreground/65">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <motion.div
              className="text-xs font-semibold uppercase tracking-widest text-foreground/60"
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.55, ease: sectionEase }}
            >
              Worked with
            </motion.div>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, y: 18, scale: 0.98 }
                  }
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{
                    duration: 0.55,
                    delay: reduceMotion ? 0 : index * 0.06,
                    ease: sectionEase,
                  }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -4,
                          transition: { duration: 0.28, ease: sectionEase },
                        }
                  }
                  className="flex h-28 cursor-default items-center justify-center rounded-xl border border-border/55 bg-background/65 px-4 py-3 shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-border/75 hover:shadow-[0_10px_28px_rgba(36,24,18,0.09)]"
                >
                  <div className="relative h-16 w-full max-w-[220px]">
                    <Image
                      src={client.imageSrc}
                      alt={client.name}
                      fill
                      unoptimized
                      className="object-contain opacity-95 transition duration-300 hover:opacity-100"
                      sizes="220px"
                    />
                  </div>
                </motion.div>
              ))}
              <motion.a
                href="#contact"
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 18, scale: 0.98 }
                }
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{
                  duration: 0.55,
                  delay: reduceMotion ? 0 : clientLogos.length * 0.06,
                  ease: sectionEase,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -4,
                        transition: { duration: 0.28, ease: sectionEase },
                      }
                }
                className="col-span-2 flex h-28 flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-border/60 bg-background/40 px-6 py-3 text-center shadow-sm transition-[border-color,box-shadow,background-color] duration-300 hover:border-[#e8aa93]/55 hover:bg-background/70 hover:shadow-[0_10px_28px_rgba(36,24,18,0.09)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:col-span-4 lg:col-start-2"
              >
                <span className="font-display text-lg font-semibold tracking-wide text-gradient sm:text-xl">
                  + more
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/50">
                  partners &amp; brands
                </span>
              </motion.a>
            </div>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {highlightedTestimonials.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-2xl border border-border/55 bg-background/70 p-4"
              >
                <p className="text-sm leading-7 text-foreground/70">"{item.quote}"</p>
                <div className="mt-3 text-xs font-semibold text-foreground/75">
                  {item.name} • {item.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
