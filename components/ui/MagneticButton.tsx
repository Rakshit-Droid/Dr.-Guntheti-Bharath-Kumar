"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { useRef, type ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost" | "light" | "outlineLight";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  external?: boolean;
};

const base =
  "group relative inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-sm font-medium tracking-tight transition-colors duration-500 ease-editorial active:scale-[0.98] will-change-transform";

const variants: Record<Variant, string> = {
  solid: "bg-navy text-paper hover:bg-navy-700",
  outline: "border border-ink/15 bg-paper/40 text-ink hover:border-ink/30 hover:bg-paper",
  ghost: "text-ink hover:text-brass-deep",
  // For use over dark imagery
  light: "bg-paper text-navy hover:bg-white",
  outlineLight:
    "border border-paper/25 bg-paper/[0.06] text-paper hover:border-paper/45 hover:bg-paper/10",
};

const iconWrapVariants: Record<Variant, string> = {
  solid: "bg-paper/15 text-paper group-hover:bg-brass group-hover:text-paper",
  outline: "bg-ink/5 text-ink group-hover:bg-navy group-hover:text-paper",
  ghost: "bg-ink/5 text-ink group-hover:bg-brass group-hover:text-paper",
  light: "bg-navy/10 text-navy group-hover:bg-navy group-hover:text-paper",
  outlineLight: "bg-paper/10 text-paper group-hover:bg-paper group-hover:text-navy",
};

/**
 * Magnetic CTA — pulls toward the cursor using motion values + springs.
 * No useState in the hover path (avoids per-frame re-render collapse on mobile).
 * Uses the Button-in-Button trailing icon pattern (circular wrapper, flush right).
 */
export function MagneticButton({
  href,
  children,
  variant = "solid",
  icon,
  className,
  external,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 150, damping: 15, mass: 0.4 });
  const y = useSpring(my, { stiffness: 150, damping: 15, mass: 0.4 });
  const iconX = useTransform(x, (v) => v * 0.4);
  const iconY = useTransform(y, (v) => v * 0.4);

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    mx.set(relX * 0.28);
    my.set(relY * 0.4);
  }

  function reset() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y }}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${className ?? ""}`}
    >
      <span>{children}</span>
      <motion.span
        style={{ x: iconX, y: iconY }}
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-500 ease-editorial ${iconWrapVariants[variant]}`}
      >
        <span className="transition-transform duration-500 ease-editorial group-hover:translate-x-[1px] group-hover:-translate-y-[1px]">
          {icon ?? <ArrowUpRight size={15} weight="bold" />}
        </span>
      </motion.span>
    </motion.a>
  );
}
