"use client";

import { motion } from "framer-motion";
import { Phone, EnvelopeSimple, MapPin, House } from "@phosphor-icons/react";
import { profile, addresses } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal, RevealGroup, itemVariants } from "./ui/Reveal";
import { ContactForm } from "./ContactForm";

const directChannels = [
  {
    icon: Phone,
    label: "Direct line",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
  },
  {
    icon: EnvelopeSimple,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-paper-deep py-24 lg:py-36">
      {/* warm bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[8%] top-1/3 h-[480px] w-[480px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at center, rgba(190,158,108,0.16), rgba(190,158,108,0) 70%)",
        }}
      />
      <div className="shell relative">
        <SectionHeading
          eyebrow="Consult & Connect"
          index="06"
          title={
            <>
              For a measured opinion,
              <br className="hidden sm:block" /> begin here.
            </>
          }
          intro="Whether you represent a court, a college, or a curious student — enquiries on medico-legal opinion, lectures, and mentorship are welcome."
        />

        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          {/* Left — direct details */}
          <div className="flex flex-col gap-8">
            <RevealGroup stagger={0.08} className="grid grid-cols-1 gap-px overflow-hidden rounded-bezel border border-line bg-line sm:grid-cols-2">
              {directChannels.map((c) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  variants={itemVariants}
                  className="group flex flex-col gap-4 bg-paper p-7 transition-colors duration-500 hover:bg-paper-dim"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy/[0.06] text-navy transition-colors duration-500 group-hover:bg-navy group-hover:text-paper">
                    <c.icon size={19} weight="duotone" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-eyebrow text-ink-faint">
                      {c.label}
                    </span>
                    <span className="mt-1.5 block font-display text-lg font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-brass-deep">
                      {c.value}
                    </span>
                  </span>
                </motion.a>
              ))}
            </RevealGroup>

            {/* Addresses */}
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-bezel border border-line bg-paper">
                <div className="flex items-start gap-4 border-b border-line p-7">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy/[0.06] text-navy">
                    <MapPin size={17} weight="duotone" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-eyebrow text-ink-faint">
                      Professional address
                    </p>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                      {addresses.professional}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-7">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy/[0.06] text-navy">
                    <House size={17} weight="duotone" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-eyebrow text-ink-faint">
                      Permanent address
                    </p>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                      {addresses.permanent}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — enquiry form */}
          <Reveal delay={0.06}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
