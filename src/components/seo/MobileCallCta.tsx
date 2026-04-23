"use client";

import { PHONE, PHONE_DISPLAY } from "../../lib/seo-data";

/**
 * Sticky mobile-only click-to-call bar.
 * Full-width tap target, 56px min height, high-contrast, always above fold.
 */
export default function MobileCallCta() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 block md:hidden"
      role="complementary"
      aria-label="Call Majlis Studio"
    >
      <a
        href={`tel:${PHONE}`}
        aria-label="Call Majlis Studio"
        id="mobile-call-cta"
        className="flex w-full items-center justify-center gap-2 bg-[var(--color-blue)] text-white font-semibold text-base"
        style={{ minHeight: 56 }}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6.9 3.5h2.5a1 1 0 0 1 1 .8l.6 3a1 1 0 0 1-.3.95L9.1 9.8a14.6 14.6 0 0 0 5.1 5.1l1.55-1.6a1 1 0 0 1 .95-.3l3 .6a1 1 0 0 1 .8 1v2.5a1.4 1.4 0 0 1-1.55 1.4A17.45 17.45 0 0 1 5.5 5.05 1.4 1.4 0 0 1 6.9 3.5Z" />
        </svg>
        Call Us — {PHONE_DISPLAY}
      </a>
    </div>
  );
}
