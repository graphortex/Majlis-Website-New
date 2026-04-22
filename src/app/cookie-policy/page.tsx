import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Majlis Studio",
  description: "Cookie policy for Majlis Studio.",
};

export default function CookiePolicyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-24 sm:px-8 lg:px-12">
      <article className="space-y-8">
        <header className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-sand)]">
            Legal
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-5xl">
            Cookie Policy
          </h1>
          <p className="max-w-2xl text-base leading-8 text-black/70">
            This page explains how cookies and similar technologies may be used on the Majlis Studio website.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[var(--color-charcoal)]">What we use</h2>
          <p className="leading-8 text-black/70">
            We may use essential cookies for site functionality and analytics tools to understand traffic and
            improve performance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[var(--color-charcoal)]">Your choices</h2>
          <p className="leading-8 text-black/70">
            You can control cookies through your browser settings. Disabling some cookies may affect how the
            site behaves.
          </p>
        </section>
      </article>
    </div>
  );
}
