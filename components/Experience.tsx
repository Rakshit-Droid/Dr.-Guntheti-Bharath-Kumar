"use client";

import { motion } from "framer-motion";
import { Gavel, Scales, Buildings, ShieldCheck } from "@phosphor-icons/react";
import { experience, leadershipRoles, medicoLegalWork } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal, RevealGroup, itemVariants } from "./ui/Reveal";

const medicoIcons = [Scales, ShieldCheck, Buildings, Gavel];

export function Experience() {
  return (
    <section id="experience" className="relative bg-coal-soft py-24 lg:py-36">
      <div className="shell">
        <SectionHeading
          eyebrow="Trajectory"
          index="02"
          title={
            <>
              Two decades, one
              <br className="hidden sm:block" /> department, rising rank.
            </>
          }
          intro="From medico-legal in-charge to Professor & Head — a continuous arc of academic stewardship at Mamata Medical College."
        />

        <div className="mt-16 grid gap-14 lg:mt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left — career timeline */}
          <div className="relative">
            {/* drawn spine */}
            <motion.span
              aria-hidden
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ originY: 0 }}
              className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brass via-line to-transparent"
            />
            <RevealGroup stagger={0.07} className="flex flex-col">
              {experience.map((item) => (
                <motion.div
                  key={`${item.role}-${item.period}`}
                  variants={itemVariants}
                  className="group relative grid grid-cols-[auto_1fr] gap-5 pb-8 last:pb-0"
                >
                  <div className="relative pt-1.5">
                    <span
                      className={`relative z-10 block h-3.5 w-3.5 rounded-full border-2 transition-all duration-500 ${
                        item.current
                          ? "border-brass bg-brass shadow-[0_0_0_4px_rgba(190,158,108,0.18)]"
                          : "border-ink/25 bg-coal-soft group-hover:border-navy"
                      }`}
                    />
                  </div>
                  <div className="pt-0.5">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brass-deep">
                        {item.period}
                      </span>
                      {item.current && (
                        <span className="rounded-full bg-brass px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-coal">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="mt-1.5 font-display text-lg font-medium leading-snug tracking-tight text-ink">
                      {item.role}
                    </h3>
                    <p className="mt-0.5 text-sm text-ink-soft">{item.org}</p>
                  </div>
                </motion.div>
              ))}
            </RevealGroup>
          </div>

          {/* Right — leadership + medico-legal, stacked */}
          <div className="flex flex-col gap-12">
            {/* Academic leadership */}
            <div>
              <Reveal>
                <p className="mb-5 text-xs font-semibold uppercase tracking-eyebrow text-ink-faint">
                  Academic Leadership &amp; Administration
                </p>
              </Reveal>
              <RevealGroup stagger={0.06} className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
                {leadershipRoles.map((role) => (
                  <motion.div
                    key={`${role.role}-${role.body}`}
                    variants={itemVariants}
                    className="bg-coal-raised px-5 py-4 transition-colors duration-500 hover:bg-coal-raised2"
                  >
                    <p className="font-display text-base font-medium tracking-tight text-navy">
                      {role.role}
                    </p>
                    <p className="mt-0.5 text-[13px] leading-snug text-ink-soft">
                      {role.body}
                    </p>
                  </motion.div>
                ))}
              </RevealGroup>
            </div>

            {/* Medico-legal & forensic work — double-bezel feature card */}
            <div>
              <Reveal>
                <p className="mb-5 text-xs font-semibold uppercase tracking-eyebrow text-ink-faint">
                  Medico-Legal &amp; Forensic Practice
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="bezel">
                  <div className="bezel-inner divide-y divide-line p-2">
                    {medicoLegalWork.map((w, i) => {
                      const Icon = medicoIcons[i % medicoIcons.length];
                      return (
                        <div
                          key={w.title}
                          className="group flex items-start gap-4 px-4 py-4"
                        >
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy/[0.06] text-navy transition-colors duration-500 group-hover:bg-brass group-hover:text-coal">
                            <Icon size={17} weight="duotone" />
                          </span>
                          <div>
                            <p className="text-[15px] font-semibold tracking-tight text-ink">
                              {w.title}
                            </p>
                            <p className="mt-0.5 text-[13px] leading-snug text-ink-soft">
                              {w.detail}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
