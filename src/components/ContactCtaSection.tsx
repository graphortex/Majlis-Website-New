"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function CopyIcon() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" className="h-3.5 w-3.5 fill-none stroke-current stroke-[1.6]">
      <rect x="6" y="2.5" width="8.5" height="11" rx="1.8" />
      <rect x="3.5" y="5" width="8.5" height="11" rx="1.8" />
    </svg>
  );
}

function BulletIcon() {
  return <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-offwhite)]" />;
}

export default function ContactCtaSection() {
  const [copyLabel, setCopyLabel] = useState("Copy");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("info@majlistudio.com");
      setCopyLabel("Copied");
      window.setTimeout(() => setCopyLabel("Copy"), 1800);
    } catch {
      setCopyLabel("Copy failed");
      window.setTimeout(() => setCopyLabel("Copy"), 1800);
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-navy)] px-4 py-8 text-[var(--color-offwhite)] sm:px-6 md:px-12 md:py-12">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover object-center opacity-75"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80"
        >
          <source src="https://cdn.coverr.co/videos/coverr-dark-fluid-1562162143962?download=1" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[var(--color-navy)]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(47,124,171,0.08),transparent_38%),linear-gradient(180deg,rgba(2,38,54,0.22),rgba(2,38,54,0.42))]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[55%_45%] lg:gap-16">
          <div className="rounded-[24px] bg-white p-5 text-[var(--color-charcoal)] shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-8 md:p-10">
            <h3 className="text-[24px] font-bold tracking-[-0.04em] text-[var(--color-navy)]">Let&apos;s work together</h3>

            <form className="mt-8 space-y-5">
              <label className="block">
                <span className="mb-2 block text-[14px] font-medium text-[var(--color-silver)]">Full name*</span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Riley Brooks"
                  className="w-full rounded-[8px] bg-[var(--color-offwhite)] px-4 py-4 text-[15px] text-[var(--color-charcoal)] outline-none transition-shadow placeholder:text-[var(--color-silver)] focus:shadow-[0_0_0_1px_var(--color-navy)]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[14px] font-medium text-[var(--color-silver)]">Email address*</span>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className="w-full rounded-[8px] bg-[var(--color-offwhite)] px-4 py-4 text-[15px] text-[var(--color-charcoal)] outline-none transition-shadow placeholder:text-[var(--color-silver)] focus:shadow-[0_0_0_1px_var(--color-navy)]"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-[14px] font-medium text-[var(--color-silver)]">Message</span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us the purpose"
                  className="w-full resize-none rounded-[8px] bg-[var(--color-offwhite)] px-4 py-4 text-[15px] text-[var(--color-charcoal)] outline-none transition-shadow placeholder:text-[var(--color-silver)] focus:shadow-[0_0_0_1px_var(--color-navy)]"
                />
              </label>

              <div className="flex flex-col gap-5 border-t border-[var(--color-silver)]/30 pt-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-blue)] px-6 py-3 text-sm font-bold text-[var(--color-offwhite)] transition-colors duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-blue-hover)]"
                >
                  Submit
                </button>

                <div className="text-right">
                  <p className="text-[12px] text-[var(--color-silver)]">Do you prefer email?</p>
                  <div className="mt-1 flex items-center justify-end gap-2">
                    <span className="text-[14px] font-bold text-[var(--color-navy)]">info@majlistudio.com</span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-offwhite)] px-3 py-1.5 text-[11px] font-medium text-[var(--color-charcoal)] transition-colors hover:bg-[var(--color-silver)]/20"
                      aria-label="Copy email address"
                    >
                      <CopyIcon />
                      <span>{copyLabel}</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="flex flex-col justify-between py-2 text-[var(--color-offwhite)] lg:py-4">
            {/* <div>
              <h3 className="text-[16px] font-medium tracking-[-0.02em] text-[var(--color-offwhite)]">How do we connect?</h3>

              <ul className="mt-5 space-y-4 text-[18px] leading-[1.5] text-[var(--color-offwhite)]/95">
                {[
                  "We reply within 24 hours",
                  "Direct access to our team — no bots.",
                  "We ask smart questions fast.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <BulletIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div> */}

            <div className="mt-14 space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full border border-[var(--color-silver)]/18 bg-[var(--color-offwhite)]/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                  <Image
                    src="/profile_pictures/ahmed_wafi_k.jpg"
                    alt="Amanda Ferguson"
                    fill
                    sizes="72px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-[18px] font-bold text-[var(--color-offwhite)]">Ahmed Wafi K</p>
                  <p className="mt-1 text-[14px] text-[var(--color-silver)]">Managing Director</p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex w-fit items-center justify-center rounded-full border border-[var(--color-silver)]/35 bg-[var(--color-offwhite)]/10 px-6 py-3 text-sm font-medium text-[var(--color-offwhite)] backdrop-blur-sm transition-colors hover:bg-[var(--color-offwhite)]/15"
              >
                Book a discovery call -&gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}