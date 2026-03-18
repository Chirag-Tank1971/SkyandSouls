"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const latestPointerRef = useRef<{ x: number; y: number } | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    const isCoarsePointer = window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
    if (prefersReducedMotion || isCoarsePointer) {
      return;
    }

    const onPointerMove = (event: PointerEvent) => {
      latestPointerRef.current = { x: event.clientX, y: event.clientY };
      if (animationFrameIdRef.current !== null) {
        return;
      }

      animationFrameIdRef.current = window.requestAnimationFrame(() => {
        animationFrameIdRef.current = null;
        const overlay = overlayRef.current;
        const latestPointer = latestPointerRef.current;
        if (!overlay || !latestPointer) {
          return;
        }
        overlay.style.setProperty("--x", `${latestPointer.x}px`);
        overlay.style.setProperty("--y", `${latestPointer.y}px`);
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (animationFrameIdRef.current !== null) {
        window.cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 opacity-70 mix-blend-multiply will-change-[background]"
      style={{
        background:
          "radial-gradient(540px 540px at var(--x, 50%) var(--y, 50%), rgba(200, 162, 200, 0.26), transparent 58%), radial-gradient(560px 560px at calc(var(--x, 50%) + 180px) calc(var(--y, 50%) - 120px), rgba(231, 183, 164, 0.22), transparent 62%), radial-gradient(620px 620px at calc(var(--x, 50%) - 220px) calc(var(--y, 50%) + 160px), rgba(212, 175, 55, 0.12), transparent 62%)",
      }}
    />
  );
}

