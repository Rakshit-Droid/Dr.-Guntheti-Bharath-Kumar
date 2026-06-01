"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "@phosphor-icons/react";
import { profile, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy pt-20 text-paper">
      {/* Oversized wordmark watermark */}
      <div className="shell relative">
        <div className="flex flex-col gap-12 pb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <span className="eyebrow border-paper/15 bg-paper/5 text-brass-light">
              {profile.initials}
            </span>
            <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-tight tracking-tightest sm:text-4xl">
              Forensic rigour, taught and practised — for nineteen years and counting.
            </h2>
            <a
              href={`mailto:${profile.email}`}
              className="mt-7 inline-block border-b border-paper/25 pb-1 text-lg tracking-tight text-paper/80 transition-colors duration-300 hover:border-brass hover:text-paper"
            >
              {profile.email}
            </a>
          </div>

          <div className="flex gap-16">
            <nav className="flex flex-col gap-3">
              <p className="mb-1 text-xs font-semibold uppercase tracking-eyebrow text-paper/40">
                Navigate
              </p>
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-paper/65 transition-colors duration-300 hover:text-paper"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <p className="mb-1 text-xs font-semibold uppercase tracking-eyebrow text-paper/40">
                Reach
              </p>
              <a
                href={`tel:${profile.phoneHref}`}
                className="text-sm text-paper/65 transition-colors duration-300 hover:text-paper"
              >
                {profile.phone}
              </a>
              <span className="text-sm text-paper/65">{profile.location}</span>
            </div>
          </div>
        </div>

        {/* Giant name band that the footer "signs off" with */}
        <div className="select-none border-t border-paper/10 py-8">
          <p className="text-balance font-display text-[clamp(2.2rem,9vw,7rem)] font-medium leading-none tracking-tightest text-paper/[0.07]">
            Dr. Bharath Kumar
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-paper/10 py-7 text-xs text-paper/45 sm:flex-row sm:items-center">
          <p>
            © {2026} {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Department of Forensic Medicine &amp; Toxicology, Mamata Medical College
          </p>
          <a
            href="#main"
            className="group flex items-center gap-2 font-medium text-paper/65 transition-colors duration-300 hover:text-paper"
          >
            Back to top
            <motion.span
              whileHover={{ y: -2 }}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-paper/15 transition-colors duration-300 group-hover:border-brass"
            >
              <ArrowUp size={13} weight="bold" />
            </motion.span>
          </a>
        </div>
      </div>
    </footer>
  );
}
