"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Testimonial = {
  name: string;
  title: string;
  quote: string;
  stars: Array<"white" | "gray">;
  image: string;
  alt: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Lim",
    title: "Marketing Director, NovaTech Labs",
    quote:
      "From strategy to execution, they nailed every detail of our new site. Communication was clear throughout, and the outcome blew us away.",
    stars: ["white", "white", "white", "white", "white"],
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    alt: "Portrait of Sarah Lim",
  },
  {
    name: "Anjali Verma",
    title: "Co-Founder, Lush & Bold",
    quote:
      "They understood our brand instantly and delivered a digital experience that exceeded expectations. The process was smooth, and the results speak for themselves.",
    stars: ["white", "white", "white", "white", "gray"],
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80",
    alt: "Portrait of Anjali Verma",
  },
  {
    name: "Ravi Patel",
    title: "Founder, Elevate Creative",
    quote:
      "They brought our vision to life with incredible precision. The collaboration was seamless, and the final product elevated our entire digital presence.",
    stars: ["white", "white", "white", "white", "white"],
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    alt: "Portrait of Ravi Patel",
  },
  {
    name: "Daniel Rios",
    title: "CEO, Verde Commerce",
    quote:
      "They took time to understand our goals and delivered a platform that feels truly ours. Everything was handled with care, and the impact was immediate.",
    stars: ["white", "white", "white", "white", "white"],
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    alt: "Portrait of Daniel Rios",
  },
  {
    name: "Meera Nanda",
    title: "Head of Product, Zenloop Studio",
    quote:
      "Working with them felt effortless—they translated our complex ideas into stunning design. Every deadline was met, and the project management was refreshingly smooth.",
    stars: ["white", "white", "white", "white", "white"],
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
    alt: "Portrait of Meera Nanda",
  },
  {
    name: "Liam Carter",
    title: "Co-Founder, Studio Kinetic",
    quote:
      "What impressed us most was their ability to balance functionality with style. The team listened, adapted, and produced something we are genuinely proud of.",
    stars: ["white", "white", "white", "white", "white"],
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    alt: "Portrait of Liam Carter",
  },
];

function Stars({ stars }: { stars: Testimonial["stars"] }) {
  return (
    <div className="flex items-center gap-[3px] text-[14px]">
      {stars.map((tone, index) => (
        <span key={`${tone}-${index}`} className={tone === "white" ? "text-[var(--color-offwhite)]" : "text-[var(--color-silver)]/40"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function ClientTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSelect = (index: number) => {
    if (index === activeIndex) {
      return;
    }

    setActiveIndex(index);
    setIsFading(true);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setDisplayIndex(index);
      setIsFading(false);
    }, 300);
  };

  const activeTestimonial = testimonials[displayIndex];

  // Split avatars into 2 rows of 3
  const topRow = testimonials.slice(0, 3);
  const bottomRow = testimonials.slice(3, 6);

  return (
    <section className="relative overflow-hidden bg-[var(--color-navy)] px-6 py-20 text-[var(--color-offwhite)] sm:px-10 md:px-16 md:py-24 lg:px-20">
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:radial-gradient(rgba(241,241,241,0.04)_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Section label */}
        <p className="mb-10 flex items-center gap-2 text-[13px] font-light tracking-wide text-[var(--color-silver)]/60 md:mb-14">
          <span className="text-[var(--color-silver)]/30">✦</span>
          The proof is in their words
        </p>

        {/* Main grid: avatars left, quote right */}
        <div className="grid items-center gap-10 lg:grid-cols-[220px_1fr] lg:gap-16 xl:grid-cols-[260px_1fr] xl:gap-24">
          {/* Avatar grid — 2 rows x 3 columns */}
          <div className="flex flex-col gap-3">
            {[topRow, bottomRow].map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-3">
                {row.map((testimonial, colIndex) => {
                  const globalIndex = rowIndex * 3 + colIndex;
                  const isActive = globalIndex === activeIndex;

                  return (
                    <button
                      key={testimonial.name}
                      type="button"
                      onClick={() => handleSelect(globalIndex)}
                      aria-pressed={isActive}
                      aria-label={`View testimonial from ${testimonial.name}`}
                      className={`group relative h-[60px] w-[60px] flex-shrink-0 overflow-hidden rounded-full transition-all duration-300 sm:h-[68px] sm:w-[68px] xl:h-[76px] xl:w-[76px] ${
                        isActive
                          ? "cursor-pointer opacity-100 ring-2 ring-[var(--color-offwhite)]/40 ring-offset-2 ring-offset-[var(--color-navy)]"
                          : "cursor-pointer opacity-40 hover:opacity-60"
                      }`}
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.alt}
                        fill
                        sizes="76px"
                        className={`object-cover transition-all duration-300 ${
                          isActive ? "grayscale-0" : "grayscale"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Quote content — no card border, just text */}
          <div className={`pl-10 transition-opacity duration-300 lg:pl-40 xl:pl-64 ${isFading ? "opacity-0" : "opacity-100"}`}>
            <Stars stars={activeTestimonial.stars} />

            <p className="mt-6 max-w-3xl font-sans text-[clamp(1.25rem,2.2vw,1.75rem)] font-[200] italic leading-[1.6] text-[var(--color-offwhite)]/90">
              {activeTestimonial.quote}
            </p>

            <div className="mt-8">
              <p className="text-[15px] font-medium text-[var(--color-offwhite)]">{activeTestimonial.name}</p>
              <p className="mt-1 text-[13px] font-light text-[var(--color-silver)]/60">{activeTestimonial.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
