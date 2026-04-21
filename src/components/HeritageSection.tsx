"use client";

import { motion } from "framer-motion";

const heritageCopy =
  "In Arab culture, the Majlis is a space of consequence. It is where guests are welcomed, ideas are shared, alliances are formed, and the future is shaped. We are bringing this centuries-old tradition of hospitality and collaboration into the modern digital landscape. By blending deep-rooted cultural heritage with cutting-edge technology, we don’t just build websites or deploy cloud infrastructure. We craft premium digital spaces where your business can truly welcome the world.";

export default function HeritageSection() {
  return (
    <section className="bg-[#161618] px-6 py-32 text-[#F9F9F9] md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Rooted in tradition,
            <br />
            <span className="font-sans italic font-[200] text-[#9A8B7E]">built for the digital frontier.</span>
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-[#888888] sm:text-lg md:text-xl">
            {heritageCopy}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
