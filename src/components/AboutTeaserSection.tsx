"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const aboutCopy =
  "Majlis Studio bridges the gap between creative storytelling and robust IT infrastructure. Born in the UAE, we realized that modern businesses shouldn't have to choose between a beautiful brand and a powerful backend. From crafting bespoke visual identities and intuitive applications, to deploying complex cloud environments and scalable CRM systems, we provide a single, unified space for your enterprise to grow. Take a seat with us, and let's build your digital legacy.";

export default function AboutTeaserSection() {
  return (
    <section id="about" className="bg-[var(--color-offwhite)] px-4 py-20 text-[var(--color-charcoal)] sm:px-6 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 border-t border-[var(--color-navy)]/10 pt-12 md:grid-cols-2 md:gap-16 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[var(--color-navy)] sm:text-5xl md:text-6xl lg:text-7xl">
            About
            <br />
            <span className="font-sans italic font-[200]">Majlis Studio.</span>
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-col items-start"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
        >
          <p className="max-w-3xl text-lg leading-relaxed text-[var(--color-silver)] sm:text-xl md:text-2xl">
            {aboutCopy}
          </p>

          <Link
            href="/about"
            className="mt-10 inline-flex rounded-full bg-[var(--color-blue)] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-offwhite)] transition-colors hover:bg-[var(--color-blue-hover)] sm:px-8 sm:py-4"
          >
            Step into the Majlis &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
