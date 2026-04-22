import Image from "next/image";
import Link from "next/link";

const postParagraphs = [
  "Majlis Studio reps attended Final Draft in Abu Dhabi on April 18, and the day felt focused, generous, and refreshingly practical. The format encouraged real conversation over performance, with design, making, and culture all treated as part of one connected practice.",
  "What stood out most was the tone of the sessions. Instead of abstract talk, each segment gave clear process insight: how teams ask better questions, how craft keeps ideas grounded, and how creativity gets sharper when context is respected. The sessions around AI, making, and cross-cultural perspective were especially strong.",
  "By the end of the day, our team left with simple but important reminders: build with intention, stay close to material thinking, and keep design tied to purpose. Final Draft created the kind of environment where meaningful work can move from discussion into action.",
];

export default function RippleCollectiveBlogPost() {
  return (
    <article className="bg-[var(--color-offwhite)] font-sans text-[var(--color-charcoal)]">
      <section className="mx-auto w-full max-w-5xl px-6 pb-8 pt-40 md:px-12 md:pt-48">
        <p className="mb-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[var(--color-blue)]">
          <span className="inline-block h-px w-10 bg-[var(--color-blue)]" />
          Event Recap · 2 mins read
        </p>

        <h1 className="text-[clamp(2.6rem,6vw,4.6rem)] font-light leading-[0.98] tracking-[-0.04em] text-black">
          Majlis Studio reps attended
          <br />
          <span className="italic text-[var(--color-blue)]">Final Draft.</span>
        </h1>

        <p className="mt-5 max-w-3xl border-l-2 border-[var(--color-blue)] pl-5 text-[17px] leading-[1.85] text-[var(--color-charcoal)]/88">
          A short recap of what our team experienced in Abu Dhabi on April 18, and the ideas we brought back to the studio.
        </p>
      </section>

      <main className="mx-auto w-full max-w-5xl px-6 pb-16 md:px-12 md:pb-24">
        <figure className="mb-10 overflow-hidden rounded-[20px] border border-[var(--color-silver)]/60 bg-white">
          <div className="relative aspect-[16/9]">
            <Image
              src="/blog/blog-ripple-collective/ripple-image-1.jpeg"
              alt="Ripple Collective event moment"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 900px, 100vw"
              priority
            />
          </div>
        </figure>

        <section className="space-y-5 border-b border-[var(--color-silver)]/70 pb-10 text-[17px] leading-[1.9] text-[var(--color-charcoal)]/88">
          {postParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <div className="mt-10">
          <Link
            className="inline-flex bg-[var(--color-blue)] px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-white transition-colors hover:bg-[var(--color-navy)]"
            href="https://ripplecollective.ae/"
            target="_blank"
            rel="noreferrer"
          >
            Explore Final Draft
          </Link>
        </div>
      </main>

      <footer className="mx-6 flex flex-col gap-4 border-t-2 border-black py-8 text-[11px] uppercase tracking-[0.12em] text-[var(--color-charcoal)]/60 md:mx-12 md:flex-row md:items-center md:justify-between">
        <p>Written after a very full Saturday · Abu Dhabi</p>
        <p>
          Final Draft -{" "}
          <Link className="text-[var(--color-blue)] transition-colors hover:text-black" href="https://ripplecollective.ae/" target="_blank" rel="noreferrer">
            ripplecollective.ae
          </Link>
        </p>
      </footer>
    </article>
  );
}
