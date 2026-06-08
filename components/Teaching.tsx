"use client";

import { motion } from "framer-motion";
import {
  Student,
  Microscope,
  Exam,
  Books,
  ArrowRight,
} from "@phosphor-icons/react";
import { teaching } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal, RevealGroup, itemVariants } from "./ui/Reveal";
import { MagneticButton } from "./ui/MagneticButton";

const pillarIcons = [Student, Microscope, Exam, Books];

export function Teaching() {
  return (
    <section id="teaching" className="relative bg-coal py-24 lg:py-36">
      <div className="shell">
        <SectionHeading
          eyebrow="Education & Mentorship"
          index="03"
          title={
            <>
              Teaching is the
              <br className="hidden sm:block" /> longer experiment.
            </>
          }
          intro={teaching.intro}
        />

        {/* Asymmetric bento: pillars in a 2-col grid, varying emphasis */}
        <RevealGroup
          stagger={0.08}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12"
        >
          {teaching.pillars.map((pillar, i) => {
            const Icon = pillarIcons[i % pillarIcons.length];
            // First card spans wider for asymmetry on large screens
            const span =
              i === 0
                ? "lg:col-span-7"
                : i === 1
                ? "lg:col-span-5"
                : i === 2
                ? "lg:col-span-5"
                : "lg:col-span-7";
            return (
              <motion.article
                key={pillar.title}
                variants={itemVariants}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-bezel border border-line bg-coal-raised p-8 shadow-soft transition-all duration-700 ease-editorial hover:-translate-y-1 hover:shadow-lift sm:p-9 ${span}`}
              >
                {/* hover wash */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brass/[0.07] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
                />
                <div className="relative">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy/[0.06] text-navy transition-colors duration-500 group-hover:bg-brass group-hover:text-coal">
                    <Icon size={22} weight="duotone" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-medium leading-tight tracking-tight text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
                    {pillar.detail}
                  </p>
                </div>
                <div className="relative mt-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brass-deep">
                  <span className="h-px w-6 bg-brass transition-all duration-500 ease-editorial group-hover:w-10" />
                  <span className="font-sans">0{i + 1}</span>
                </div>
              </motion.article>
            );
          })}
        </RevealGroup>

        {/* Faculty development strip */}
        <div className="mt-14 grid gap-10 rounded-bezel border border-line bg-coal-soft p-8 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:p-12">
          <Reveal>
            <div>
              <span className="eyebrow mb-4">Faculty Development</span>
              <h3 className="text-balance font-display text-2xl font-medium leading-tight tracking-tight text-ink sm:text-3xl">
                Training the people who train the doctors.
              </h3>
              <div className="mt-6">
                <MagneticButton href="/contact" variant="outline">
                  Invite for a workshop
                </MagneticButton>
              </div>
            </div>
          </Reveal>

          <RevealGroup stagger={0.07} className="divide-y divide-line border-t border-line">
            {teaching.facultyDevelopment.map((fd) => (
              <motion.div
                key={fd}
                variants={itemVariants}
                className="group flex items-center gap-4 py-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-coal-raised text-ink-faint transition-colors duration-500 group-hover:text-brass-deep">
                  <ArrowRight
                    size={14}
                    weight="bold"
                    className="transition-transform duration-500 ease-editorial group-hover:translate-x-0.5"
                  />
                </span>
                <p className="text-[15px] font-medium leading-snug text-ink">{fd}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
