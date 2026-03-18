"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  city: string;
  date: string;
  message: string;
};

const initialFormState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  eventType: "Wedding",
  city: "",
  date: "",
  message: "",
};

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submissionState, setSubmissionState] = useState<
    "idle" | "submitting" | "submitted"
  >("idle");

  const mailtoHref = useMemo(() => {
    const subject = `Booking Inquiry — ${formState.eventType}`;
    const bodyLines = [
      `Name: ${formState.fullName}`,
      `Email: ${formState.email}`,
      `Phone: ${formState.phone}`,
      `Event type: ${formState.eventType}`,
      `City: ${formState.city}`,
      `Date: ${formState.date}`,
      "",
      formState.message || "(No additional message)",
    ];
    return `mailto:hello@skyandsouls.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
  }, [formState]);

  return (
    <section id="contact" className="relative z-10 py-24 sm:py-28">
      <div className="mx-auto w-[min(1200px,calc(100%-2rem))]">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <Badge className="rounded-full border-white/10 bg-white/5 text-white/80 hover:bg-white/5">
              Contact / Booking
            </Badge>
            <h2 className="font-display mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Let’s design your{" "}
              <span className="text-gradient">signature</span> moment.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Share a few details and we’ll respond with a curated discovery call.
              Prefer email? One click generates a polished booking message.
            </p>

            <div className="mt-10 glass glow-ring rounded-3xl p-6" data-gsap="reveal">
              <div className="text-sm font-semibold text-white">FAQs</div>
              <Accordion type="single" collapsible className="mt-4">
                <AccordionItem value="item-1" className="border-white/10">
                  <AccordionTrigger className="text-left text-sm text-white/75 hover:text-white">
                    How far in advance should we book?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-white/60">
                    Ideally 3–8 months for weddings and 4–12 weeks for corporate
                    experiences. If you have a tight timeline, we’ll adapt.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-white/10">
                  <AccordionTrigger className="text-left text-sm text-white/75 hover:text-white">
                    Do you handle destination events?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-white/60">
                    Yes. We manage travel coordination, local sourcing, vendor
                    partnerships, and a dedicated on-site team.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-white/10">
                  <AccordionTrigger className="text-left text-sm text-white/75 hover:text-white">
                    What’s included in your planning?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-white/60">
                    Creative direction, budget strategy, vendor orchestration,
                    timelines, guest experience design, and show-day execution.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass glow-ring rounded-3xl p-6 sm:p-8"
            data-gsap="reveal"
          >
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSubmissionState("submitting");
                window.setTimeout(() => setSubmissionState("submitted"), 600);
              }}
              className="space-y-6"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-white/70" htmlFor="fullName">
                    Full name
                  </Label>
                  <Input
                    id="fullName"
                    value={formState.fullName}
                    onChange={(event) =>
                      setFormState((previous) => ({
                        ...previous,
                        fullName: event.target.value,
                      }))
                    }
                    placeholder="Your name"
                    className="h-11 border-white/10 bg-white/5 text-white placeholder:text-white/40"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/70" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(event) =>
                      setFormState((previous) => ({
                        ...previous,
                        email: event.target.value,
                      }))
                    }
                    placeholder="you@domain.com"
                    className="h-11 border-white/10 bg-white/5 text-white placeholder:text-white/40"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/70" htmlFor="phone">
                    Phone (optional)
                  </Label>
                  <Input
                    id="phone"
                    value={formState.phone}
                    onChange={(event) =>
                      setFormState((previous) => ({
                        ...previous,
                        phone: event.target.value,
                      }))
                    }
                    placeholder="+91 98765 43210"
                    className="h-11 border-white/10 bg-white/5 text-white placeholder:text-white/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/70" htmlFor="eventType">
                    Event type
                  </Label>
                  <Input
                    id="eventType"
                    value={formState.eventType}
                    onChange={(event) =>
                      setFormState((previous) => ({
                        ...previous,
                        eventType: event.target.value,
                      }))
                    }
                    placeholder="Wedding"
                    className="h-11 border-white/10 bg-white/5 text-white placeholder:text-white/40"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/70" htmlFor="city">
                    City
                  </Label>
                  <Input
                    id="city"
                    value={formState.city}
                    onChange={(event) =>
                      setFormState((previous) => ({
                        ...previous,
                        city: event.target.value,
                      }))
                    }
                    placeholder="Where is your event?"
                    className="h-11 border-white/10 bg-white/5 text-white placeholder:text-white/40"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/70" htmlFor="date">
                    Date (optional)
                  </Label>
                  <Input
                    id="date"
                    value={formState.date}
                    onChange={(event) =>
                      setFormState((previous) => ({
                        ...previous,
                        date: event.target.value,
                      }))
                    }
                    placeholder="Month / Year"
                    className="h-11 border-white/10 bg-white/5 text-white placeholder:text-white/40"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-white/70" htmlFor="message">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formState.message}
                  onChange={(event) =>
                    setFormState((previous) => ({
                      ...previous,
                      message: event.target.value,
                    }))
                  }
                  placeholder="Tell us the vibe, guest count, and what matters most."
                  className="min-h-28 border-white/10 bg-white/5 text-white placeholder:text-white/40"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  type="submit"
                  disabled={submissionState === "submitting"}
                  className="h-12 flex-1 rounded-full bg-white text-black hover:bg-white/90"
                >
                  {submissionState === "submitted" ? "Request sent" : "Request booking"}
                </Button>
                <a href={mailtoHref} className="flex-1">
                  <Button
                    type="button"
                    variant="secondary"
                    className="h-12 w-full rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  >
                    Email this inquiry
                  </Button>
                </a>
              </div>

              {submissionState === "submitted" ? (
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-200">
                  Perfect—your request is ready. For a real backend submission, wire
                  this form to an API route or your CRM.
                </div>
              ) : null}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

