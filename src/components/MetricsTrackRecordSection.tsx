"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type Metric = {
  value: number;
  symbol: string;
  description: string;
};

const metrics: Metric[] = [
  {
    value: 25,
    symbol: "+",
    description: "Projects delivered across branding, tech, and marketing",
  },
  {
    value: 6,
    symbol: "",
    description: "Countries our clients operate in",
  },
  {
    value: 90,
    symbol: "%",
    description: "Client retention rate in year one",
  },
  {
    value: 4,
    symbol: "",
    description: "Core service pillars, one accountable team",
  },
];

function StarIcon() {
  return <span aria-hidden="true" className="text-[14px] leading-none text-[var(--color-blue)]">✦</span>;
}

function ArrowButtonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-none stroke-current stroke-[1.8]">
      <path d="M5 12h12" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) {
      return;
    }

    let frameId = 0;
    const startTime = performance.now();
    const duration = 2000;

    const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [active, target]);

  return value;
}

function MetricRow({ metric, active }: { metric: Metric; active: boolean }) {
  const countedValue = useCountUp(metric.value, active);

  return (
    <div className="flex items-center gap-3 border-b border-[var(--color-silver)]/40 py-2.5 last:border-b-0 sm:gap-6 sm:py-4 md:py-5 lg:py-6">
      <div className="flex min-w-[96px] items-start gap-1 sm:min-w-[130px] md:min-w-[190px]">
        <span className="text-[clamp(2.4rem,6vw,4rem)] font-semibold leading-[0.9] tracking-[-0.08em] text-[var(--color-navy)]">
          {countedValue}
        </span>
        <span className="translate-y-1 font-sans text-[clamp(1.2rem,3.2vw,2.3rem)] font-[200] italic leading-none text-[var(--color-blue)] sm:translate-y-2">
          {metric.symbol}
        </span>
      </div>

      <p className="max-w-[260px] text-[12px] leading-[1.35] text-black sm:text-[14px] md:text-[15px] md:leading-relaxed">{metric.description}</p>
    </div>
  );
}

export default function MetricsTrackRecordSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const metricRows = useMemo(
    () => metrics.map((metric) => <MetricRow key={`${metric.value}-${metric.symbol}`} metric={metric} active={active} />),
    [active]
  );

  return (
    <section ref={sectionRef} className="bg-[var(--color-offwhite)] px-4 py-12 sm:px-6 md:px-10 md:py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[42%_58%] lg:gap-10">
        <div>
          <div className="max-w-[460px]">
            <div className="mb-4 flex items-center gap-2 text-[var(--color-silver)]">
              <StarIcon />
              <span className="text-[14px] font-medium">Our track record</span>
            </div>

            <h2 className="text-[clamp(2.2rem,7vw,3.5rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[var(--color-navy)] md:tracking-[-0.06em]">
              <span className="block">Metrics that</span>
              <span className="block font-sans text-[1.05em] font-[200] italic tracking-[-0.03em] text-[var(--color-blue)]">Prove</span>
              <span className="block">value</span>
            </h2>

            <Link
              href="/about"
              className="mt-4 inline-flex items-center gap-3 rounded-full bg-[var(--color-navy)] px-4 py-2 text-xs font-medium text-[var(--color-offwhite)] transition-colors hover:bg-[var(--color-navy)]/90 md:mt-6 md:px-5 md:py-2.5 md:text-sm"
            >
              <span>Know more about us</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-offwhite)] text-[var(--color-navy)] md:h-7 md:w-7">
                <ArrowButtonIcon />
              </span>
            </Link>
          </div>
        </div>

        <div>{metricRows}</div>
      </div>
    </section>
  );
}
