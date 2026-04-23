import type { Metadata } from "next";
import "./globals.css";
import AppShell from "../components/AppShell";
import MobileCallCta from "../components/seo/MobileCallCta";

export const metadata: Metadata = {
  metadataBase: new URL("https://majlistudio.com"),
  title: {
    default: "Majlis Studio: AI Transformation & Web Development Abu Dhabi",
    template: "%s | Majlis Studio Abu Dhabi",
  },
  description:
    "Empower your brand with Majlis Studio in Abu Dhabi. Specialized in AI transformation and web development to automate execution and drive growth. Book now.",
  keywords: [
    "AI transformation Abu Dhabi",
    "web development Abu Dhabi",
    "AI branding agency UAE",
    "Agent Marketplace UAE",
    "marketing automation Abu Dhabi",
    "bilingual AEO UAE",
    "Arabic AI optimization",
    "phygital UX Abu Dhabi",
    "ADGM startup branding",
    "Khalifa City industrial branding",
    "autonomous brand governance",
    "sovereign tech UAE",
    "3D printed branding Abu Dhabi",
    "Majlis Studio",
  ],
  authors: [{ name: "Majlis Studio" }],
  creator: "Majlis Studio",
  publisher: "Majlis Studio",
  alternates: {
    canonical: "https://majlistudio.com",
    languages: {
      "en-AE": "https://majlistudio.com",
      "ar-AE": "https://majlistudio.com/ar",
      "x-default": "https://majlistudio.com",
    },
  },
  openGraph: {
    title: "Majlis Studio: AI Transformation & Web Development Abu Dhabi",
    description:
      "Empower your brand with Majlis Studio in Abu Dhabi. Specialized in AI transformation and web development to automate execution and drive growth.",
    url: "https://majlistudio.com",
    siteName: "Majlis Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Majlis Studio — AI Transformation & Web Development Abu Dhabi",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Majlis Studio | AI & Web Development Abu Dhabi",
    description:
      "AI-Powered Ideas. Automated Execution. The leading tech-first studio for Abu Dhabi's digital economy.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
    other: { "msvalidate.01": [""] },
  },
  category: "technology",
  icons: {
    icon: "/logo/majlis-favicon.png",
    shortcut: "/logo/majlis-favicon.png",
    apple: "/logo/majlis-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body
        id="top"
        className="flex min-h-full flex-col bg-[var(--color-offwhite)] font-sans text-[var(--color-charcoal)] selection:bg-[var(--color-blue)] selection:text-white"
      >
        <AppShell>{children}</AppShell>
        <MobileCallCta />
      </body>
    </html>
  );
}
