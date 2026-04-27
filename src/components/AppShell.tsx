"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";
import PageLoader from "./PageLoader";
import Breadcrumbs from "./Breadcrumbs";
import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const showBreadcrumbs = pathname !== "/";
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const scrollToTop = () => {
      lenisRef.current?.scrollTo(0, { immediate: true });
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    // Run on next frame so new route content is mounted before forcing position.
    const frameId = window.requestAnimationFrame(scrollToTop);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [pathname]);

  useEffect(() => {
    // Prefer native scrolling for browsers/devices where wheel interception can be unreliable.
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const isFirefox = /firefox/i.test(window.navigator.userAgent);
    const isBlogPage = pathname.startsWith("/insights");

    if (prefersReducedMotion || isCoarsePointer || isFirefox || isBlogPage) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    let animationFrameId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = window.requestAnimationFrame(raf);
    };

    animationFrameId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [pathname]);

  return (
    <PageLoader key={pathname} isHomepage={pathname === "/"}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        {showBreadcrumbs ? <Breadcrumbs pathname={pathname} /> : null}
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </PageLoader>
  );
}