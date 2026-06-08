"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, WarningCircle, PaperPlaneTilt } from "@phosphor-icons/react";
import { profile } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

type Fields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const enquiryTypes = [
  "Medico-legal expert opinion",
  "Guest lecture / workshop",
  "Academic collaboration",
  "Student mentorship",
  "Other",
];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields: Fields): Errors {
  const e: Errors = {};
  if (!fields.name.trim()) e.name = "Please share your name.";
  if (!fields.email.trim()) e.email = "An email is needed to reply.";
  else if (!emailRe.test(fields.email)) e.email = "That email doesn't look right.";
  if (!fields.subject.trim()) e.subject = "Choose the nature of your enquiry.";
  if (!fields.message.trim()) e.message = "A short note helps me prepare.";
  else if (fields.message.trim().length < 12)
    e.message = "Just a little more detail, please.";
  return e;
}

const fieldBase =
  "w-full rounded-xl border bg-coal px-4 py-3 text-[15px] text-ink placeholder:text-ink-faint transition-all duration-300 ease-editorial focus:outline-none focus:ring-2 focus:ring-navy/15";

export function ContactForm() {
  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    subject: enquiryTypes[0],
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(fields);
    if (Object.keys(found).length) {
      setErrors(found);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("submitting");

    try {
      // No backend required: hand off to the user's mail client with a
      // pre-composed message. Swap this block for a fetch() to your API/
      // Formspree endpoint to capture submissions server-side.
      await new Promise((r) => setTimeout(r, 900));
      const body = encodeURIComponent(
        `Name: ${fields.name}\nEmail: ${fields.email}\nEnquiry: ${fields.subject}\n\n${fields.message}`
      );
      const subject = encodeURIComponent(`[Enquiry] ${fields.subject} — ${fields.name}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setFields({ name: "", email: "", subject: enquiryTypes[0], message: "" });
    setErrors({});
    setStatus("idle");
  }

  return (
    <div className="bezel">
      <div className="bezel-inner p-6 sm:p-8">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            // ── Success state ──────────────────────────────
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start gap-5 py-8"
            >
              <motion.span
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 280, damping: 16, delay: 0.1 }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/[0.06] text-navy"
              >
                <CheckCircle size={30} weight="duotone" />
              </motion.span>
              <div>
                <h3 className="font-display text-2xl font-medium tracking-tight text-ink">
                  Your mail client is opening.
                </h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-soft">
                  If nothing appeared, write directly to{" "}
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-medium text-brass-deep underline decoration-brass/40 underline-offset-4"
                  >
                    {profile.email}
                  </a>
                  . Expect a considered reply.
                </p>
              </div>
              <button
                type="button"
                onClick={reset}
                className="rounded-full border border-line bg-coal px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-coal-soft"
              >
                Send another enquiry
              </button>
            </motion.div>
          ) : (
            // ── Form ───────────────────────────────────────
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[13px] font-semibold text-ink">
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={fields.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Adv. Meera Raghunathan"
                    aria-invalid={!!errors.name}
                    className={`${fieldBase} ${
                      errors.name ? "border-red-400/70" : "border-line"
                    }`}
                  />
                  {errors.name && <FieldError msg={errors.name} />}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[13px] font-semibold text-ink">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={fields.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="name@chambers.in"
                    aria-invalid={!!errors.email}
                    className={`${fieldBase} ${
                      errors.email ? "border-red-400/70" : "border-line"
                    }`}
                  />
                  {errors.email && <FieldError msg={errors.email} />}
                </div>
              </div>

              {/* Subject / enquiry type */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-[13px] font-semibold text-ink">
                  Nature of enquiry
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    value={fields.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    className={`${fieldBase} appearance-none pr-10 ${
                      errors.subject ? "border-red-400/70" : "border-line"
                    }`}
                  >
                    {enquiryTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-faint">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden>
                      <path
                        d="M1 1.5L6 6.5L11 1.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[13px] font-semibold text-ink">
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={fields.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="A brief outline of the case, query, or invitation."
                  aria-invalid={!!errors.message}
                  className={`${fieldBase} resize-none ${
                    errors.message ? "border-red-400/70" : "border-line"
                  }`}
                />
                {errors.message ? (
                  <FieldError msg={errors.message} />
                ) : (
                  <p className="text-xs text-ink-faint">
                    Treated in confidence. Typical reply within 2–3 working days.
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="mt-1 flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex items-center gap-3 rounded-full bg-brass py-2.5 pl-6 pr-2.5 text-sm font-medium text-coal transition-all duration-500 ease-editorial hover:bg-navy-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? "Sending…" : "Send enquiry"}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper/15 text-paper transition-colors duration-500 group-hover:bg-brass">
                    {status === "submitting" ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
                        className="block h-3.5 w-3.5 rounded-full border-2 border-paper/40 border-t-paper"
                      />
                    ) : (
                      <PaperPlaneTilt
                        size={15}
                        weight="fill"
                        className="transition-transform duration-500 ease-editorial group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                      />
                    )}
                  </span>
                </button>

                {status === "error" && Object.keys(errors).length > 0 && (
                  <motion.span
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-red-600/90"
                  >
                    <WarningCircle size={15} weight="fill" />
                    Please review the fields above.
                  </motion.span>
                )}
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function FieldError({ msg }: { msg: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-1.5 text-[12px] font-medium text-red-600/90"
    >
      <WarningCircle size={13} weight="fill" />
      {msg}
    </motion.span>
  );
}
