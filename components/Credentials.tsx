"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Certificate,
  Trophy,
  IdentificationBadge,
  Translate,
} from "@phosphor-icons/react";
import {
  education,
  certifications,
  memberships,
  awards,
  languages,
} from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal, RevealGroup, itemVariants } from "./ui/Reveal";

function PanelLabel({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy/[0.06] text-navy">
        <Icon size={16} weight="duotone" />
      </span>
      <p className="text-xs font-semibold uppercase tracking-eyebrow text-ink-faint">
        {children}
      </p>
    </div>
  );
}

export function Credentials() {
  return (
    <section id="credentials" className="relative bg-paper py-24 lg:py-36">
      <div className="shell">
        <SectionHeading
          eyebrow="The Record"
          index="05"
          title="Credentials & standing."
          intro="Qualifications, certifications, lifelong professional memberships, and recognition — the formal scaffolding behind the practice."
        />

        {/* Asymmetric bento */}
        <div className="mt-16 grid grid-cols-1 gap-5 lg:mt-20 lg:grid-cols-12">
          {/* Education — tall, prominent */}
          <Reveal className="lg:col-span-7" delay={0}>
            <div className="h-full rounded-bezel border border-line bg-paper-deep p-8 shadow-soft sm:p-10">
              <PanelLabel icon={GraduationCap}>Education</PanelLabel>
              <RevealGroup stagger={0.08} className="flex flex-col">
                {education.map((ed, i) => (
                  <motion.div
                    key={ed.qualification}
                    variants={itemVariants}
                    className="group grid grid-cols-[auto_1fr] gap-5 border-t border-line py-5 first:border-t-0 first:pt-0"
                  >
                    <span className="pt-1 font-display text-sm italic text-brass-deep">
                      {ed.year}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-medium leading-snug tracking-tight text-ink">
                        {ed.qualification}
                      </h3>
                      <p className="mt-1 text-sm leading-snug text-ink-soft">
                        {ed.org}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </RevealGroup>
            </div>
          </Reveal>

          {/* Certifications */}
          <Reveal className="lg:col-span-5" delay={0.06}>
            <div className="h-full rounded-bezel border border-line bg-paper p-8 shadow-soft sm:p-10">
              <PanelLabel icon={Certificate}>Certifications & Training</PanelLabel>
              <RevealGroup stagger={0.07} className="flex flex-col gap-px">
                {certifications.map((c) => (
                  <motion.div
                    key={c.name}
                    variants={itemVariants}
                    className="flex items-center justify-between gap-4 border-t border-line py-4 first:border-t-0 first:pt-0"
                  >
                    <p className="text-[15px] font-medium leading-snug text-ink">
                      {c.name}
                    </p>
                    <span className="shrink-0 rounded-full bg-navy/[0.06] px-2.5 py-1 text-[11px] font-semibold tracking-wide text-navy">
                      {c.meta}
                    </span>
                  </motion.div>
                ))}
              </RevealGroup>
            </div>
          </Reveal>

          {/* Awards — navy feature */}
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-bezel bg-navy p-8 text-paper shadow-lift sm:p-10">
              <div>
                <div className="mb-5 flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper/10 text-brass-light">
                    <Trophy size={16} weight="duotone" />
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-eyebrow text-paper/55">
                    Awards & Honours
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  {awards.map((a) => (
                    <div key={a.title} className="border-t border-paper/10 pt-5 first:border-t-0 first:pt-0">
                      <h3 className="font-display text-xl font-medium leading-snug tracking-tight text-paper">
                        {a.title}
                      </h3>
                      <p className="mt-1 text-sm text-paper/55">{a.org}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Memberships */}
          <Reveal className="lg:col-span-7" delay={0.14}>
            <div className="h-full rounded-bezel border border-line bg-paper p-8 shadow-soft sm:p-10">
              <PanelLabel icon={IdentificationBadge}>
                Professional Memberships
              </PanelLabel>
              <RevealGroup
                stagger={0.06}
                className="grid grid-cols-1 gap-px sm:grid-cols-2"
              >
                {memberships.map((m) => (
                  <motion.div
                    key={m}
                    variants={itemVariants}
                    className="group flex items-start gap-3 py-3"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass transition-transform duration-500 group-hover:scale-150" />
                    <p className="text-[14px] font-medium leading-snug text-ink">
                      {m}
                    </p>
                  </motion.div>
                ))}
              </RevealGroup>

              {/* Languages — inline within memberships panel */}
              <div className="mt-7 flex flex-wrap items-center gap-2 border-t border-line pt-6">
                <span className="mr-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-eyebrow text-ink-faint">
                  <Translate size={15} weight="duotone" className="text-navy" />
                  Languages
                </span>
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full border border-line bg-paper-deep px-3 py-1 text-[13px] font-medium text-ink-soft"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
