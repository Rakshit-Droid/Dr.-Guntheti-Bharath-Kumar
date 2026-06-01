"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, ArrowDown } from "@phosphor-icons/react";
import { profile } from "@/lib/data";
import { MagneticButton } from "./ui/MagneticButton";
import { SmartPortrait } from "./ui/SmartPortrait";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const rise = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const heroStats = [
  { value: "19+", label: "Years teaching" },
  { value: "100", label: "PG autopsies" },
  { value: "30+", label: "Publications" },
  { value: "23+", label: "Universities examined" },
];

const marqueeWords = [
  "Medico-Legal Expert",
  "CBME State Co-ordinator",
  "Clinical Forensic Medicine",
  "Autopsy & Toxicology",
  "Faculty Development",
  "Examiner — 23+ Universities",
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="main"
      className="relative overflow-hidden pb-8 pt-32 sm:pt-40 lg:pb-10 lg:pt-44"
    >
      {/* Ambient warmth — soft, off-center radial bloom (no neon, no purple) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[10%] -top-[10%] h-[640px] w-[640px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(190,158,108,0.18), rgba(190,158,108,0) 68%)",
        }}
      />

      <div className="shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* Left — editorial type block */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.div variants={rise} className="mb-7 flex items-center gap-3">
              <span className="eyebrow">Forensic Medicine &amp; Toxicology</span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-ink-faint">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brass" />
                </span>
                Accepting expert-opinion enquiries
              </span>
            </motion.div>

            <motion.h1
              variants={rise}
              className="text-balance font-display text-[clamp(2.75rem,7vw,5.25rem)] font-medium leading-[0.96] tracking-tightest text-ink"
            >
              Dr. Guntheti
              <br />
              <span className="relative inline-block">
                Bharath Kumar
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-brass/70"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <motion.path
                    d="M2 8 Q 80 2 150 7 T 298 5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={rise}
              className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
            >
              <span className="font-medium text-ink">{profile.title}.</span>{" "}
              Nineteen years of medico-legal scholarship, autopsy practice, and
              mentorship — building forensic rigour into the next generation of
              physicians.
            </motion.p>

            <motion.div variants={rise} className="mt-9 flex flex-wrap items-center gap-3">
              <MagneticButton href="#contact" variant="solid">
                Request a consultation
              </MagneticButton>
              <MagneticButton href="#experience" variant="outline">
                Explore the work
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={rise}
              className="mt-8 flex items-center gap-2 text-sm text-ink-faint"
            >
              <MapPin size={16} weight="duotone" className="text-brass-deep" />
              {profile.location}
            </motion.div>
          </motion.div>

          {/* Right — portrait fading into the paper */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="order-1 lg:order-2"
          >
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              {/* Double-bezel framing */}
              <div className="bezel relative shadow-lift">
                <div className="bezel-inner relative overflow-hidden bg-[#0a0a0c]">
                  {/* Dark cinematic portrait, mounted gallery-style in a cream mat */}
                  <SmartPortrait />
                </div>
              </div>

              {/* Floating credential chip */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
                className="absolute -left-3 bottom-6 rounded-2xl border border-line bg-paper/80 px-4 py-3 shadow-soft backdrop-blur-md sm:-left-6"
              >
                <p className="font-display text-2xl font-medium leading-none text-navy">
                  MD
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-ink-faint">
                  Forensic Medicine
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stat strip — hairline-divided, font-display numerals */}
        <motion.dl
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4"
        >
          {heroStats.map((s) => (
            <motion.div
              key={s.label}
              variants={rise}
              className="bg-paper px-5 py-6 transition-colors duration-500 hover:bg-paper-deep"
            >
              <dt className="font-display text-3xl font-medium tracking-tight text-navy sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs leading-snug text-ink-soft">{s.label}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>

      {/* Kinetic marquee band — seamless two-track horizontal scroll */}
      <div className="group mt-10 flex select-none overflow-hidden border-y border-line py-4 lg:mt-12">
        {[0, 1].map((dup) => (
          <div
            key={dup}
            aria-hidden={dup === 1}
            className="flex shrink-0 animate-marquee items-center gap-6 pr-6 group-hover:[animation-play-state:paused]"
          >
            {marqueeWords.map((word) => (
              <span key={`${word}-${dup}`} className="flex items-center gap-6">
                <span className="font-display text-xl italic text-ink/70 sm:text-2xl">
                  {word}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-brass" />
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Scroll cue */}
      <div className="shell mt-5 hidden justify-end lg:flex">
        <a
          href="#about"
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-eyebrow text-ink-faint transition-colors hover:text-ink"
        >
          Scroll
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line transition-transform duration-500 ease-editorial group-hover:translate-y-0.5">
            <ArrowDown size={13} weight="bold" />
          </span>
        </a>
      </div>
    </section>
  );
}
