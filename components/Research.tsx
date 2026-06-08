"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Flask, ChalkboardTeacher, Scales, GraduationCap } from "@phosphor-icons/react";
import { research } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const areaIcons = [Flask, ChalkboardTeacher, Scales, GraduationCap];

export function Research() {
  const [active, setActive] = useState(0);

  return (
    <section id="research" className="relative bg-coal-soft py-24 lg:py-36">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left — heading + highlights */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Research & Publications"
              index="04"
              title={
                <>
                  Questions worth
                  <br className="hidden sm:block" /> publishing.
                </>
              }
              intro={research.intro}
            />

            <Reveal delay={0.15}>
              <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line">
                {research.highlights.map((h) => (
                  <div key={h.label} className="bg-coal-soft px-4 py-5 text-center">
                    <p className="font-display text-3xl font-medium tracking-tight text-navy">
                      {h.value}
                    </p>
                    <p className="mt-1.5 text-[11px] leading-tight text-ink-soft">
                      {h.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — interactive accordion of research areas */}
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-bezel border border-line bg-coal-raised">
              {research.areas.map((area, i) => {
                const Icon = areaIcons[i % areaIcons.length];
                const isOpen = active === i;
                return (
                  <div
                    key={area.title}
                    className={`border-b border-line last:border-b-0 transition-colors duration-500 ${
                      isOpen ? "bg-coal-raised" : "bg-coal-raised hover:bg-coal-soft"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-5 px-7 py-6 text-left sm:px-9"
                    >
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-colors duration-500 ${
                          isOpen
                            ? "bg-brass text-coal"
                            : "bg-navy/[0.06] text-navy"
                        }`}
                      >
                        <Icon size={20} weight="duotone" />
                      </span>
                      <span className="flex-1">
                        <span className="block font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">
                          {area.title}
                        </span>
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink/[0.04] text-ink"
                      >
                        <Plus size={16} weight="bold" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-prose px-7 pb-7 pl-[5.5rem] text-[15px] leading-relaxed text-ink-soft sm:px-9 sm:pl-[6.25rem]">
                            {area.detail}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
