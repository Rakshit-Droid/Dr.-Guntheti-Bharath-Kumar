"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  animate,
} from "framer-motion";

type CounterProps = {
  value: number;
  suffix?: string;
  className?: string;
  durationMs?: number;
};

/**
 * Count-up that fires once when scrolled into view.
 * Writes directly to textContent via a motion value subscription — no per-frame
 * React re-render, so it stays cheap even with several counters on screen.
 */
export function Counter({
  value,
  suffix = "",
  className,
  durationMs = 1600,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (reduce || !inView) {
      if (inView) node.textContent = `${value}${suffix}`;
      return;
    }

    const controls = animate(mv, value, {
      duration: durationMs / 1000,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = `${Math.round(latest)}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [inView, value, suffix, durationMs, reduce, mv]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
