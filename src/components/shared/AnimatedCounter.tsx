"use client";

import { useEffect, useMemo, useRef } from "react";
import { animate, useInView } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  durationSeconds?: number;
};

export function AnimatedCounter({
  value,
  suffix,
  durationSeconds = 1.3,
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(counterRef, { once: true, margin: "-20% 0px" });

  const formatter = useMemo(() => new Intl.NumberFormat(), []);

  useEffect(() => {
    const node = counterRef.current;
    if (!node || !isInView) {
      return;
    }

    const controls = animate(0, value, {
      duration: durationSeconds,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = formatter.format(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [durationSeconds, formatter, isInView, value]);

  return (
    <span className="tabular-nums">
      <span ref={counterRef}>0</span>
      {suffix ? <span>{suffix}</span> : null}
    </span>
  );
}

