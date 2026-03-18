"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const latestPointerRef = useRef<{ x: number; y: number } | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
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
      className="pointer-events-none fixed inset-0 z-[5] opacity-70 mix-blend-screen"
      style={{
        background:
          "radial-gradient(480px 480px at var(--x, 50%) var(--y, 50%), rgba(168, 85, 247, 0.22), transparent 55%), radial-gradient(520px 520px at calc(var(--x, 50%) + 180px) calc(var(--y, 50%) - 120px), rgba(34, 211, 238, 0.18), transparent 60%)",
      }}
    />
  );
}

