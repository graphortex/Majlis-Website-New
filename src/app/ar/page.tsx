import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "../../components/seo/JsonLd";
import {
  organizationSchema,
  localBusinessSchema,
  webSiteSchema,
} from "../../lib/schemas";

export const metadata: Metadata = {
  title: "ماجلس ستوديو: التحول الرقمي بالذكاء الاصطناعي وتطوير المواقع في أبوظبي",
  description:
    "عزز علامتك التجارية مع ماجلس ستوديو في أبوظبي. متخصصون في التحول الرقمي بالذكاء الاصطناعي وتطوير المواقع لأتمتة التنفيذ ودفع النمو. احجز الآن.",
  alternates: {
    canonical: "https://majlistudio.com/ar",
    languages: {
      "en-AE": "https://majlistudio.com",
      "ar-AE": "https://majlistudio.com/ar",
      "x-default": "https://majlistudio.com",
    },
  },
  openGraph: {
    title: "ماجلس ستوديو: التحول الرقمي بالذكاء الاصطناعي وتطوير المواقع في أبوظبي",
    description:
      "عزز علامتك التجارية مع ماجلس ستوديو في أبوظبي. متخصصون في التحول الرقمي وتطوير المواقع.",
    url: "https://majlistudio.com/ar",
    siteName: "ماجلس ستوديو",
    locale: "ar_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function ArHomePage() {
  const schemas = [organizationSchema(), localBusinessSchema(), webSiteSchema()];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-offwhite)] px-6 py-20 text-center">
      <JsonLd data={schemas} />

      <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
        ماجلس ستوديو
      </h1>
      <p className="mt-4 text-lg text-[var(--color-charcoal)]/80 sm:text-xl">
        أفكار مدعومة بالذكاء الاصطناعي. تنفيذ آلي.
      </p>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-charcoal)]/70">
        عزز علامتك التجارية مع ماجلس ستوديو في أبوظبي. نحن متخصصون في التحول الرقمي بالذكاء
        الاصطناعي وتطوير المواقع الإلكترونية لأتمتة التنفيذ ودفع عجلة النمو في الإمارات العربية المتحدة.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="tel:+971524779626"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-blue)] px-8 py-4 text-base font-semibold text-white shadow-lg transition-colors hover:bg-[var(--color-blue-hover)]"
          aria-label="اتصل بماجلس ستوديو"
        >
          اتصل بنا
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-[var(--color-charcoal)]/20 px-8 py-4 text-base font-semibold text-[var(--color-charcoal)] transition-colors hover:bg-[var(--color-charcoal)] hover:text-white"
        >
          احجز استشارة
        </Link>
      </div>

      <p className="mt-12 text-sm text-[var(--color-silver)]">
        <Link href="/" className="underline hover:text-[var(--color-blue)]">
          Switch to English
        </Link>
      </p>
    </div>
  );
}
