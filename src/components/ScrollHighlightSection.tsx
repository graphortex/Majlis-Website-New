"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PARAGRAPH =
  "We believe great businesses deserve a digital partner that thinks beyond borders. We build brands, platforms, and growth systems - from the UAE, for the world. ";

export default function ScrollHighlightSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const textContainer = textContainerRef.current;
    if (!section || !textContainer) return;

    const words = textContainer.querySelectorAll<HTMLSpanElement>(".highlight-word");

    const ctx = gsap.context(() => {
      // Pin the section and scrub through word highlights
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: textContainer,
        pinSpacing: false,
        onUpdate: (self) => {
          const progress = self.progress;
          const activationIndex = Math.floor(progress * words.length);

          words.forEach((word, i) => {
            if (i <= activationIndex) {
              word.style.color = "var(--color-offwhite)";
            } else {
              word.style.color = "rgba(241,241,241,0.15)";
            }
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const words = PARAGRAPH.split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative bg-[var(--color-navy)]"
      style={{ height: "300vh" }}
    >
      <div
        ref={textContainerRef}
        className="flex h-screen items-center"
      >
        <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
          <p className="text-[clamp(1.8rem,4.5vw,3.8rem)] font-[200] leading-[1.25] tracking-[-0.01em]">
            {words.map((word, i) => (
              <span
                key={i}
                className="highlight-word inline-block"
                style={{
                  color: "rgba(241,241,241,0.15)",
                  transition: "color 0.3s ease",
                  marginRight: "0.3em",
                }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
