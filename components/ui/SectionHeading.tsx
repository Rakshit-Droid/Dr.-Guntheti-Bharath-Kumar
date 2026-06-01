import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  index: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "right";
  tone?: "ink" | "paper";
};

/**
 * Editorial section header — eyebrow pill + numbered index + serif display title.
 * Deliberately left/right aligned (never centered) to honour the anti-center bias.
 */
export function SectionHeading({
  eyebrow,
  index,
  title,
  intro,
  align = "left",
  tone = "ink",
}: SectionHeadingProps) {
  const isPaper = tone === "paper";
  return (
    <div
      className={`flex max-w-3xl flex-col gap-5 ${
        align === "right" ? "ml-auto items-end text-right" : "items-start text-left"
      }`}
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <span
            className={`eyebrow ${
              isPaper ? "border-paper/20 bg-paper/5 text-brass-light" : ""
            }`}
          >
            {eyebrow}
          </span>
          <span
            className={`font-display text-sm italic ${
              isPaper ? "text-paper/40" : "text-ink-faint"
            }`}
          >
            {index}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.06}>
        <h2
          className={`text-balance font-display text-4xl font-medium leading-[1.02] tracking-tightest sm:text-5xl md:text-[3.4rem] ${
            isPaper ? "text-paper" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.12}>
          <p
            className={`max-w-prose text-base leading-relaxed sm:text-lg ${
              isPaper ? "text-paper/65" : "text-ink-soft"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
