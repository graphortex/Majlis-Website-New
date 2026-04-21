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
  }, []);

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