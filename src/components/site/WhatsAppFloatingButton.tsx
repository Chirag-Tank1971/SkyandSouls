"use client";

import { FaWhatsapp } from "react-icons/fa6";

type WhatsAppFloatingButtonProps = {
  phoneNumberE164: string;
  message?: string;
};

export function WhatsAppFloatingButton({
  phoneNumberE164,
  message = "Hi SkyAndSoul! I’d like to book a consultation.",
}: WhatsAppFloatingButtonProps) {
  const href = `https://wa.me/${phoneNumberE164.replace("+", "")}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-60 inline-flex items-center gap-3 rounded-full border border-border/60 bg-background/75 px-4 py-3 text-foreground shadow-[0_24px_80px_rgba(36,24,18,0.14)] backdrop-blur-xl transition hover:bg-background"
    >
      <span className="grid size-10 place-items-center rounded-full bg-emerald-500/12 ring-1 ring-emerald-600/25 transition group-hover:bg-emerald-500/16">
        <FaWhatsapp className="text-emerald-700" size={20} />
      </span>
      <span className="hidden text-sm font-medium tracking-wide sm:inline">
        WhatsApp
      </span>
    </a>
  );
}

