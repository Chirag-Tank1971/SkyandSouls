"use client";

import { useEffect, useMemo, useRef } from "react";
import { animate, useInView } from "framer-motion";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  durationSeconds?: number;
  /** When set, animates with fixed decimal places (e.g. 4.9). */
  decimalPlaces?: number;
  /** Extra delay after the element enters view (stagger). */
  delaySeconds?: number;
};

export function AnimatedCounter({
  value,
  suffix,
  durationSeconds = 1.3,
  decimalPlaces = 0,
  delaySeconds = 0,
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(counterRef, { once: true, margin: "-20% 0px" });

  const formatter = useMemo(() => new Intl.NumberFormat(), []);

  const initialText =
    decimalPlaces > 0 ? (0).toFixed(decimalPlaces) : formatter.format(0);

  useEffect(() => {
    const node = counterRef.current;
    if (!node || !isInView) {
      return;
    }

    const controls = animate(0, value, {
      duration: durationSeconds,
      delay: delaySeconds,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        if (decimalPlaces > 0) {
          node.textContent = latest.toFixed(decimalPlaces);
        } else {
          node.textContent = formatter.format(Math.round(latest));
        }
      },
    });

    return () => controls.stop();
  }, [
    delaySeconds,
    decimalPlaces,
    durationSeconds,
    formatter,
    isInView,
    value,
  ]);

  return (
    <span className="tabular-nums">
      <span ref={counterRef}>{initialText}</span>
      {suffix ? <span>{suffix}</span> : null}
    </span>
  );
}

