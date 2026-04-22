"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ── Service data ─────────────────────────────────── */
const services = [
  {
    title: "Design",
    subtitle: "Crafting visual narratives that captivate and inspire lasting impressions.",
    cta: "/services",
    image: "/images/design-majlis.png",
    gradient: "linear-gradient(135deg, #ff6fd8, #3813c2, #00fff0)",
  },
  {
    title: "Intelligence",
    subtitle: "Designing intelligent systems and insights that turn complex data into clear decisions.",
    cta: "/services",
    image: "/images/intelligence-majlis.png",
    gradient: "linear-gradient(135deg, #00d2ff, #7b2ff7, #ff0099)",
  },
  {
    title: "Strategy",
    subtitle: "Aligning business goals, customer insight, and execution with clear direction.",
    cta: "/services",
    image: "/images/strategy-majlis.png",
    gradient: "linear-gradient(135deg, #f7971e, #ffd200, #ff5e62)",
  },
  {
    title: "Growth",
    subtitle: "Scaling visibility and demand through measurable, iterative growth systems.",
    cta: "/services",
    image: "/images/growth-majlis.png",
    gradient: "linear-gradient(135deg, #26d0ce, #1a8cff, #6a5cff)",
  },
];

/* ── Section wrapper ──────────────────────────────── */

export default function ServiceCardsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black px-0 py-0 lg:h-screen lg:overflow-hidden lg:px-4 lg:py-4">
      <div className="grid grid-cols-1 gap-px bg-white/10 lg:h-full lg:grid-cols-2 lg:grid-rows-2">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="flex min-h-[220px] flex-row items-center justify-center bg-black px-6 py-7 sm:min-h-[240px] sm:px-8 sm:py-8 lg:h-full lg:min-h-0 lg:px-10 lg:py-8"
          >
            <div className="mx-auto flex w-full max-w-[760px] items-center justify-center gap-8 lg:gap-10">
              <div
                className={`flex max-w-md flex-col transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isVisible ? "translate-y-0 opacity-100 blur-0" : "translate-y-6 opacity-0 blur-sm"
                }`}
                style={{ transitionDelay: `${index * 100}ms`, transitionDuration: "700ms" }}
              >
                <h3
                  className="text-[clamp(2.4rem,4vw,3.5rem)] !font-light leading-[0.92] tracking-[-0.04em] !text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="mt-4 max-w-[24ch] text-[14px] font-[300] leading-[1.45] text-white/72 sm:text-[15px] lg:mt-3 lg:text-[14px]">
                  {service.subtitle}
                </p>
                <Link
                  href={service.cta}
                  className="mt-7 inline-flex items-center gap-3 text-[13px] font-[300] tracking-wide text-white sm:text-[14px] lg:mt-6"
                >
                  Learn More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div
                className={`relative shrink-0 h-[100px] w-[100px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-[120px] sm:w-[120px] lg:h-[150px] lg:w-[150px] ${
                  isVisible ? "translate-y-0 scale-100 opacity-100 blur-0" : "translate-y-4 scale-[0.96] opacity-0 blur-sm"
                }`}
                style={{ transitionDelay: `${index * 100 + 100}ms`, transitionDuration: "700ms" }}
              >
                <Image
                  src={service.image}
                  alt={`${service.title} visual`}
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 150px, 140px"
                  priority={service.title === "Design"}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
