import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Majlis Studio",
  description: "Privacy policy for Majlis Studio.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-24 sm:px-8 lg:px-12">
      <article className="space-y-8">
        <header className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-sand)]">
            Legal
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="max-w-2xl text-base leading-8 text-black/70">
            We collect only the information needed to respond to inquiries, deliver services, and improve
            the experience on our site.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[var(--color-charcoal)]">Information we collect</h2>
          <p className="leading-8 text-black/70">
            When you contact us, we may store your name, email address, company name, and the details you
            share in your message. We also may collect basic analytics data to understand how visitors use
            the website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-[var(--color-charcoal)]">How we use it</h2>
          <p className="leading-8 text-black/70">
            We use this information to answer inquiries, provide proposals, improve content, and keep the
            website secure and reliable.
          </p>
        </section>
      </article>
    </div>
  );
}
