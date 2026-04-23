import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { insightArticles } from "../../../data/contentHubData";
import JsonLd from "../../../components/seo/JsonLd";
import { breadcrumbSchema, articleSchema } from "../../../lib/schemas";
import { PHONE, PHONE_DISPLAY } from "../../../lib/seo-data";

export function generateStaticParams() {
  return insightArticles.map((a) => ({ slug: a.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insightArticles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `https://majlistudio.com/insights/${slug}`,
      languages: {
        "en-AE": `https://majlistudio.com/insights/${slug}`,
        "ar-AE": `https://majlistudio.com/ar/insights/${slug}`,
      },
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://majlistudio.com/insights/${slug}`,
      siteName: "Majlis Studio",
      locale: "en_AE",
      type: "article",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}

export default async function InsightArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = insightArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const schemas = [
    breadcrumbSchema([
      { name: "Home", href: "/" },
      { name: "Insights", href: "/insights" },
      { name: article.title, href: `/insights/${slug}` },
    ]),
    articleSchema({
      headline: article.title,
      description: article.description,
      url: `/insights/${slug}`,
      datePublished: article.datePublished,
    }),
  ];

  return (
    <article className="mx-auto w-full max-w-4xl px-6 pb-20 pt-40 sm:px-8 lg:px-12">
      <JsonLd data={schemas} />

      <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        {article.h1}
      </h1>

      <time
        dateTime={article.datePublished}
        className="mt-4 block text-sm text-[var(--color-silver)]"
      >
        Published {new Date(article.datePublished).toLocaleDateString("en-AE", { year: "numeric", month: "long", day: "numeric" })}
      </time>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-[var(--color-charcoal)]/80 sm:text-lg">
        {article.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <a
          href={`tel:${PHONE}`}
          id={`cta-call-${slug}`}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-blue)] px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[var(--color-blue-hover)]"
          aria-label="Call Majlis Studio"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6.9 3.5h2.5a1 1 0 0 1 1 .8l.6 3a1 1 0 0 1-.3.95L9.1 9.8a14.6 14.6 0 0 0 5.1 5.1l1.55-1.6a1 1 0 0 1 .95-.3l3 .6a1 1 0 0 1 .8 1v2.5a1.4 1.4 0 0 1-1.55 1.4A17.45 17.45 0 0 1 5.5 5.05 1.4 1.4 0 0 1 6.9 3.5Z" />
          </svg>
          Call Us — {PHONE_DISPLAY}
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-[var(--color-charcoal)]/20 px-8 py-4 text-base font-semibold text-[var(--color-charcoal)] transition-colors hover:bg-[var(--color-charcoal)] hover:text-white"
        >
          Book a Consultation
        </Link>
      </div>
    </article>
  );
}
