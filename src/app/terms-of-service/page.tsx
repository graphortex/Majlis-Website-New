import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Majlis Studio",
  description: "Terms of service for Majlis Studio.",
};

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-24 sm:px-8 lg:px-12">
      <article className="space-y-8">
        <header className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-sand)]">
            Legal
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-5xl">
            Terms of Service
          </h1>
          <p className="max-w-2xl text-base leading-8 text-black/70">
            These terms describe the basic rules that apply when you use the Majlis Studio website or engage
            our services.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[var(--color-charcoal)]">Website use</h2>
          <p className="leading-8 text-black/70">
            You may browse and share our public content for lawful purposes only. You agree not to misuse the
            website, attempt unauthorized access, or interfere with its operation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[var(--color-charcoal)]">Services</h2>
          <p className="leading-8 text-black/70">
            Project scope, timelines, and commercial terms are defined separately in proposals, statements of
            work, or other written agreements.
          </p>
        </section>
      </article>
    </div>
  );
}
