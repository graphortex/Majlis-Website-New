"use client";

import { motion } from "framer-motion";

const locations = ["Abu Dhabi Hub", "Dubai Design District"];

const mandalaLines = [
  "M720 120 L850 220 L900 360 L850 500 L720 600 L590 500 L540 360 L590 220 Z",
  "M720 120 L720 600",
  "M540 360 L900 360",
  "M590 220 L850 500",
  "M850 220 L590 500",
  "M640 180 L800 180 L860 240 L860 420 L800 480 L640 480 L580 420 L580 240 Z",
];

export default function ContactPageContent() {
  return (
    <div className="min-h-screen bg-[var(--color-navy)] text-[var(--color-offwhite)]">
      <section className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        <div className="relative isolate overflow-hidden px-6 pt-44 pb-24 md:px-12 md:pt-56 md:pb-32">
          <motion.div
            className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5"
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 1440 860" className="h-full w-full max-w-[1200px]" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              {mandalaLines.map((d, index) => (
                <path key={index} d={d} stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" className="text-[var(--color-silver)]" />
              ))}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
                <path
                  key={`ring-${index}`}
                  d={`M720 ${140 + index * 45} A${80 + index * 42} ${80 + index * 42} 0 1 1 719 ${140 + index * 45}`}
                  stroke="currentColor"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                  className="text-[var(--color-silver)]"
                />
              ))}
            </svg>
          </motion.div>

          <div className="relative mx-auto flex max-w-xl flex-col justify-between gap-24 md:min-h-[75vh] md:gap-28">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p className="mb-5 pt-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-silver)]/50">Contact Majlis Studio</p>
              <h1 className="flex max-w-[11ch] flex-col gap-2 text-[clamp(3.2rem,6vw,4.9rem)] font-semibold leading-none tracking-tight md:max-w-none md:text-[clamp(4.5rem,5.8vw,6.8rem)]">
                <span className="inline-flex w-fit px-3 py-1 text-white md:px-4 md:py-1.5">
                  Take your seat
                </span>
                <span className="inline-flex w-fit whitespace-nowrap bg-[var(--color-blue)] px-3 py-1 font-sans italic font-[300] text-[var(--color-offwhite)] shadow-[0_10px_28px_rgba(47,124,171,0.28)] md:px-4 md:py-1.5">
                  in the Majlis
                </span>
              </h1>
            </motion.div>

            <motion.div
              className="space-y-4 text-lg font-medium text-[var(--color-offwhite)]/75 md:text-xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
            >
              {locations.map((location) => (
                <p key={location} className="border-b border-[var(--color-silver)]/10 pb-3">
                  {location}
                </p>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex items-center px-6 py-24 md:px-12 md:py-32">
          <div className="w-full max-w-xl md:mx-auto">
            <motion.form
              className="space-y-8"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
            >
              {[
                { label: "Name", type: "text", name: "name", placeholder: "Your name" },
                { label: "Email", type: "email", name: "email", placeholder: "you@company.com" },
                { label: "Company", type: "text", name: "company", placeholder: "Company name" },
              ].map((field) => (
                <label key={field.name} className="block">
                  <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-silver)]">
                    {field.label}
                  </span>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full border-b border-[var(--color-silver)] bg-transparent py-3 text-base text-[var(--color-offwhite)] outline-none transition-colors placeholder:text-[var(--color-offwhite)]/35 focus:border-[var(--color-offwhite)]"
                  />
                </label>
              ))}

              <label className="block">
                <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-silver)]">
                  What are we building together?
                </span>
                <textarea
                  name="project"
                  rows={5}
                  placeholder="Tell us about the vision, timelines, and what success looks like."
                  className="w-full resize-none border-b border-[var(--color-silver)] bg-transparent py-3 text-base text-[var(--color-offwhite)] outline-none transition-colors placeholder:text-[var(--color-offwhite)]/35 focus:border-[var(--color-offwhite)]"
                />
              </label>

              <motion.button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-blue)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-offwhite)] transition-colors hover:bg-[var(--color-blue-hover)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Send Inquiry</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  &rarr;
                </motion.span>
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}
