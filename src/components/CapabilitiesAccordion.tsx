"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { serviceCategories } from "../data/servicesData";

export default function CapabilitiesAccordion() {
  const [activeId, setActiveId] = useState<string | null>(serviceCategories[0]?.id ?? null);

  return (
    <section id="services" className="bg-white px-6 py-24 text-[#161618] md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between border-b border-black/10 pb-5">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Our Capabilities</h2>
          <Link
            href="/services"
            className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9A8B7E] transition-colors hover:text-[#7d7064]"
          >
            View All &nearr;
          </Link>
        </div>

        <div className="border-y border-black/10">
          {serviceCategories.map((category, index) => {
            const isActive = activeId === category.id;
            return (
              <Link
                key={category.id}
                href="/services"
                className="group block"
                onMouseEnter={() => setActiveId(category.id)}
                onFocus={() => setActiveId(category.id)}
              >
                <motion.div
                  className={`py-6 md:py-8 ${index !== serviceCategories.length - 1 ? "border-b border-black/10" : ""}`}
                  initial={false}
                >
                  <motion.h3
                    className="text-[1.35rem] font-semibold leading-tight tracking-tight text-[#161618] transition-colors sm:text-[1.65rem] md:text-5xl"
                    animate={{
                      x: isActive ? 12 : 0,
                      color: isActive ? "#9A8B7E" : "#161618",
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    {category.title}
                  </motion.h3>

                  <div className="mt-3 md:hidden">
                    <p className="max-w-2xl text-sm leading-relaxed text-[#888888]">{category.summary}</p>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive ? (
                      <motion.div
                        key={`${category.id}-summary`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="hidden overflow-hidden md:block"
                      >
                        <p className="max-w-2xl pt-4 text-base font-medium leading-relaxed text-[#888888] md:text-lg">
                          {category.summary}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
