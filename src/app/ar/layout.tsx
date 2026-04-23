import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://majlistudio.com/ar",
    languages: {
      "en-AE": "https://majlistudio.com",
      "ar-AE": "https://majlistudio.com/ar",
      "x-default": "https://majlistudio.com",
    },
  },
};

export default function ArLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div dir="rtl" lang="ar" className="font-sans">
      {children}
    </div>
  );
}
