"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { navLinks, profile } from "@/lib/data";

const overlayLink = {
  hidden: { y: 36, opacity: 0, filter: "blur(8px)" },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { delay: 0.12 + i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`pointer-events-auto mt-5 flex w-[min(92vw,1100px)] items-center justify-between rounded-full border py-2.5 pl-5 pr-2.5 transition-all duration-500 ease-editorial ${
          scrolled || open
            ? "border-line bg-coal/70 shadow-soft backdrop-blur-xl"
            : "border-transparent bg-coal/0"
        }`}
      >
        {/* Wordmark → home */}
        <Link href="/" className="group flex items-center gap-3" aria-label={profile.name}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brass text-[11px] font-semibold tracking-tight text-coal transition-colors duration-500 group-hover:bg-brass-light">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-ink sm:block">
            {profile.shortName}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-300 ${
                  active
                    ? "text-brass-light"
                    : "text-ink/75 hover:bg-paper/10 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full bg-brass px-5 py-2.5 text-[13px] font-medium text-coal transition-all duration-500 ease-editorial hover:bg-brass-light active:scale-[0.97] md:inline-flex"
          >
            Consult
          </Link>

          {/* Morphing hamburger → X */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-paper/10 transition-colors duration-300 hover:bg-paper/20 md:hidden"
          >
            <span className="relative block h-3 w-5">
              <motion.span
                className="absolute left-0 top-0 h-[1.5px] w-5 rounded-full bg-ink"
                animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.span
                className="absolute left-0 bottom-0 h-[1.5px] w-5 rounded-full bg-ink"
                animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
          </button>
        </div>
      </motion.nav>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto fixed inset-0 z-40 flex flex-col justify-center bg-coal/90 px-8 backdrop-blur-3xl md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={overlayLink}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-4 font-display text-4xl font-medium tracking-tightest text-ink transition-colors duration-300 hover:text-brass-light"
                  >
                    <span className="mr-4 align-middle font-sans text-xs text-ink-faint">
                      0{i + 1}
                    </span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.a
              custom={navLinks.length}
              variants={overlayLink}
              initial="hidden"
              animate="visible"
              href={`mailto:${profile.email}`}
              className="mt-10 text-sm tracking-tight text-ink-soft"
            >
              {profile.email}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
