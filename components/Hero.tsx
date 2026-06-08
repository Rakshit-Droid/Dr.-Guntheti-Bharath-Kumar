"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "@phosphor-icons/react";
import { profile } from "@/lib/data";
import { MagneticButton } from "./ui/MagneticButton";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
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
  { value: "20+", label: "Years teaching" },
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
    <>
      <section
        id="main"
        className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#0a0b0d] text-paper lg:block"
      >
        {/* Portrait — a top block on mobile (subject centred), full-bleed background on desktop */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[44vh] w-full shrink-0 lg:absolute lg:inset-0 lg:h-full"
        >
          {/* Mobile: centred seated portrait so the subject sits in the middle */}
          <Image
            src={profile.headshot}
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_24%] [filter:contrast(1.05)] lg:hidden"
          />
          {/* Desktop: wide cinematic background (subject right, dark space left) */}
          <Image
            src={profile.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hidden object-cover object-[82%_50%] [filter:contrast(1.05)] lg:block"
          />
          {/* Top fade for nav legibility (all sizes) */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(8,9,12,0.6) 0%, rgba(8,9,12,0) 18%)",
            }}
          />
          {/* Mobile: fade the foot of the picture into the page below it */}
          <div
            aria-hidden
            className="absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(to top, #0a0b0d 1%, rgba(10,11,13,0) 38%)",
            }}
          />
          {/* Desktop scrims: left (headline legibility) + bottom (stats) */}
          <div
            aria-hidden
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(to right, rgba(8,9,12,0.94) 0%, rgba(8,9,12,0.7) 26%, rgba(8,9,12,0.2) 48%, rgba(8,9,12,0) 64%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(to top, rgba(8,9,12,0.92) 0%, rgba(8,9,12,0) 34%)",
            }}
          />
        </motion.div>

        {/* Content — below the picture on mobile, centred overlay on desktop */}
        <div className="shell relative z-10 flex flex-1 flex-col pb-10 pt-7 lg:min-h-[100dvh] lg:flex-none lg:pt-28">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-1 lg:justify-center"
          >
            <motion.div
              variants={rise}
              className="mb-7 flex flex-wrap items-center gap-x-3 gap-y-2"
            >
              <span className="eyebrow border-paper/20 bg-paper/5 text-brass-light">
                Forensic Medicine &amp; Toxicology
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-paper/60">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass-light opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brass-light" />
                </span>
                Accepting expert-opinion enquiries
              </span>
            </motion.div>

            <motion.h1
              variants={rise}
              className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-tightest text-paper"
            >
              Dr. Guntheti
              <br />
              <span className="relative inline-block">
                Bharath Kumar
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-brass-light/80"
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
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={rise}
              className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70 sm:text-xl"
            >
              <span className="font-medium text-paper">{profile.title}.</span>{" "}
              Twenty years of medico-legal scholarship, autopsy practice, and
              mentorship — building forensic rigour into the next generation of
              physicians.
            </motion.p>

            <motion.div
              variants={rise}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <MagneticButton href="/contact" variant="light">
                Request a consultation
              </MagneticButton>
              <MagneticButton href="/experience" variant="outlineLight">
                Explore the work
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={rise}
              className="mt-8 flex items-center gap-2 text-sm text-paper/55"
            >
              <MapPin size={16} weight="duotone" className="text-brass-light" />
              {profile.location}
            </motion.div>
          </motion.div>

          {/* Stat strip */}
          <motion.dl
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-10 grid grid-cols-2 gap-y-7 border-t border-paper/15 pt-7 sm:grid-cols-4 sm:gap-y-0 lg:mt-0"
          >
            {heroStats.map((s) => (
              <motion.div
                key={s.label}
                variants={rise}
                className="sm:border-l sm:border-paper/12 sm:pl-6 sm:first:border-l-0 sm:first:pl-0"
              >
                <dt className="font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-paper/55">
                  {s.label}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* Kinetic marquee band — transition into the page */}
      <div className="bg-coal">
        <div className="group flex select-none overflow-hidden border-b border-line py-4">
          {[0, 1].map((dup) => (
            <div
              key={dup}
              aria-hidden={dup === 1}
              className="marquee-track flex shrink-0 animate-marquee items-center gap-6 pr-6 group-hover:[animation-play-state:paused]"
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
      </div>
    </>
  );
}
