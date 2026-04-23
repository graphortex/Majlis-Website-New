import {
  SITE_URL,
  SITE_NAME,
  PHONE,
  EMAIL,
  ADDRESS,
  GEO,
  SOCIAL_LINKS,
  OPENING_HOURS,
} from "./seo-data";

// ── Organization ──────────────────────────────────────────
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo/majlis-logo-new.png`,
    sameAs: SOCIAL_LINKS,
    areaServed: {
      "@type": "Country",
      name: "AE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      email: EMAIL,
      contactType: "customer service",
      availableLanguage: ["en", "ar"],
    },
  };
}

// ── LocalBusiness (ProfessionalService) ───────────────────
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/logo/majlis-logo-new.png`,
    telephone: PHONE,
    email: EMAIL,
    priceRange: "$$",
    openingHours: OPENING_HOURS,
    address: {
      "@type": "PostalAddress",
      ...ADDRESS,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    sameAs: SOCIAL_LINKS,
  };
}

// ── WebSite with SearchAction ─────────────────────────────
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ── FAQPage ───────────────────────────────────────────────
export type FAQItem = { question: string; answer: string };

export function faqPageSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ── BreadcrumbList ────────────────────────────────────────
export type BreadcrumbItem = { name: string; href: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

// ── Service ───────────────────────────────────────────────
export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.url}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "AE",
    },
  };
}

// ── Article ───────────────────────────────────────────────
export function articleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: `${SITE_URL}${opts.url}`,
    datePublished: opts.datePublished ?? new Date().toISOString(),
    dateModified: opts.dateModified ?? new Date().toISOString(),
    image: opts.image ?? `${SITE_URL}/og-image.jpg`,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo/majlis-logo-new.png`,
      },
    },
  };
}
