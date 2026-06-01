"use client";

import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react";
import { profile, coreExpertise } from "@/lib/data";
import { Reveal, RevealGroup, itemVariants } from "./ui/Reveal";

export function About() {
  return (
    <section id="about" className="relative bg-paper pt-12 pb-24 lg:pt-16 lg:pb-36">
      <div className="shell">
        {/* Asymmetric two-column: oversized statement left, expertise index right */}
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Left — narrative */}
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow mb-7">
                <span className="font-display text-[13px] not-italic">01</span>
                The Practitioner
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="text-balance font-display text-[1.7rem] font-medium leading-[1.25] tracking-tight text-ink sm:text-[2.15rem]">
                For nearly two decades, his work has defined how forensic
                medicine is{" "}
                <span className="text-brass-deep">taught, examined, and practised</span>{" "}
                across Telangana.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">
                {profile.longBio}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 max-w-prose text-base leading-relaxed text-ink-soft sm:text-lg">
                {profile.summary}
              </p>
            </Reveal>

            {/* Signature flourish */}
            <Reveal delay={0.2}>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-12 bg-brass/60" />
                <span className="font-display text-xl italic text-navy">
                  {profile.shortName}
                </span>
              </div>
            </Reveal>
          </div>

          {/* Right — core expertise index, hairline rows (no card boxes) */}
          <div className="lg:pt-2">
            <Reveal>
              <p className="mb-2 text-xs font-semibold uppercase tracking-eyebrow text-ink-faint">
                Core Expertise
              </p>
            </Reveal>
            <RevealGroup className="divide-y divide-line border-t border-line">
              {coreExpertise.map((item, i) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                  className="group flex items-center gap-4 py-4"
                >
                  <span className="font-display text-sm italic text-ink-faint transition-colors duration-300 group-hover:text-brass-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy/[0.06] text-navy transition-colors duration-300 group-hover:bg-brass group-hover:text-paper">
                    <Check size={13} weight="bold" />
                  </span>
                  <span className="text-[15px] font-medium leading-snug text-ink transition-transform duration-500 ease-editorial group-hover:translate-x-1">
                    {item}
                  </span>
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
