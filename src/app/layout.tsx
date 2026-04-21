import type { Metadata } from "next";
import "./globals.css";
import AppShell from "../components/AppShell";

export const metadata: Metadata = {
  title: "Majlis Studio",
  description: "Crafting narrative through design.",
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
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body
        id="top"
        className="flex min-h-full flex-col bg-[var(--color-offwhite)] font-sans text-[var(--color-charcoal)] selection:bg-[var(--color-blue)] selection:text-white"
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
