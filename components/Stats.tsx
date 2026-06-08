"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { Counter } from "./ui/Counter";
import { Reveal, RevealGroup, itemVariants } from "./ui/Reveal";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-coal-soft py-24 text-paper lg:py-32">
      {/* subtle brass bloom, off-center */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-1/3 left-1/4 h-[520px] w-[520px] rounded-full opacity-[0.14] blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(190,158,108,1), rgba(190,158,108,0) 70%)",
        }}
      />

      <div className="shell relative">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <h2 className="max-w-xl text-balance font-display text-3xl font-medium leading-tight tracking-tightest sm:text-4xl">
              A career measured in evidence, not adjectives.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-sm text-sm leading-relaxed text-paper/55">
              Every figure below is drawn directly from the record — autopsies
              conducted, opinions rendered, physicians taught.
            </p>
          </Reveal>
        </div>

        <RevealGroup
          stagger={0.1}
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-bezel border border-paper/10 bg-paper/[0.06] sm:grid-cols-2 lg:grid-cols-3"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={itemVariants}
              className="group relative bg-coal-raised px-7 py-9 transition-colors duration-500 hover:bg-coal-raised2"
            >
              <div className="flex items-baseline gap-1">
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  className="font-display text-5xl font-medium tracking-tight text-paper sm:text-6xl"
                />
              </div>
              <p className="mt-4 text-[15px] font-medium leading-snug text-paper/90">
                {s.label}
              </p>
              <p className="mt-1.5 text-xs leading-snug text-paper/45">{s.note}</p>
              {/* brass accent rule that grows on hover */}
              <span className="mt-5 block h-px w-10 bg-brass transition-all duration-500 ease-editorial group-hover:w-20" />
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
