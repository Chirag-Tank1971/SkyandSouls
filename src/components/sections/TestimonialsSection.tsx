"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/lib/site-data";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="cv-auto relative z-10 pt-12 pb-14 sm:pt-14 sm:pb-18"
    >
      <div className="mx-auto w-[min(1200px,calc(100%-2rem))]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge className="rounded-full border-border/60 bg-background/60 text-foreground/80 hover:bg-background/70">
              Testimonials
            </Badge>
            <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Loved by clients who{" "}
              <span className="text-gradient">notice</span> everything.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-foreground/60 sm:text-base">
            Luxury is felt in the quiet details—listen to the people who experienced
            them.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
          data-gsap="reveal"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="relative"
          >
            <CarouselContent className="-ml-3">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.name}
                  className="pl-3 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full rounded-3xl border border-border/60 bg-linear-to-b from-background/95 via-background/88 to-background/75 p-6 shadow-[0_20px_55px_-42px_rgba(17,12,8,0.65)] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#e8aa93]/45 hover:shadow-[0_26px_70px_-44px_rgba(142,89,64,0.48)]">
                    <div className="flex items-center justify-between">
                      <div className="text-[15px] font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="grid size-10 place-items-center rounded-xl border border-border/60 bg-background/75">
                        <Quote className="size-[15px] text-[#e8aa93]" />
                      </div>
                    </div>
                    <div className="mt-1 text-xs tracking-wide text-foreground/55">
                      {testimonial.role}
                    </div>
                    <p className="mt-5 text-[15px] leading-8 text-foreground/72">
                      “{testimonial.quote}”
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="top-auto -bottom-14 left-1/2 -translate-x-[calc(100%+0.4rem)] border-border/60 bg-background/85 text-foreground shadow-sm hover:border-[#e8aa93]/45 hover:bg-background sm:-bottom-16" />
            <CarouselNext className="top-auto -bottom-14 left-1/2 translate-x-[0.4rem] border-border/60 bg-background/85 text-foreground shadow-sm hover:border-[#e8aa93]/45 hover:bg-background sm:-bottom-16" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}

