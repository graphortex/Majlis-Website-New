"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

type PageLoaderProps = {
  children: ReactNode;
  isHomepage?: boolean;
};

type Segment = {
  id: number;
  points: string;
};

const logoWidth = 1302;
const logoHeight = 1150;

const segmentOffsets = [0, 0, 0, 0, 0];
const startOffsets = [-380, -200, -30, 180, 360];
const exitOffsets = [-300, -160, 0, 160, 300];
const segmentTilt = [0, 0, 0, 0, 0];
const foldAngles = [-92, 96, -88, 92, -86];

const segments: Segment[] = [
  { id: 1, points: "14,16 414,16 152,1134 14,1134" },
  { id: 2, points: "520,16 646,52 646,1134 331,1134" },
  { id: 3, points: "742,54 872,16 956,1134 734,1134" },
  { id: 4, points: "956,16 1102,52 1134,1134 1062,1134" },
  { id: 5, points: "1234,56 1302,16 1302,1134 1234,1134" },
];

const overlayVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.06,
    },
  },
  exit: {
    opacity: 1,
    y: -10,
    scale: 0.98,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.06,
      staggerDirection: -1,
      duration: 0.18,
      ease: "easeOut",
    },
  },
};

const segmentVariants: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: startOffsets[index],
    rotateY: foldAngles[index],
    scaleX: 0.1,
    z: -80,
    rotateZ: 0,
  }),
  visible: (index: number) => ({
    opacity: 1,
    x: segmentOffsets[index],
    rotateY: 0,
    scaleX: 1,
    z: 0,
    rotateZ: segmentTilt[index],
    transition: {
      duration: 1.35,
      ease: [0.65, 0, 0.35, 1],
    },
  }),
  exit: (index: number) => ({
    opacity: 0,
    x: exitOffsets[index],
    rotateY: index % 2 === 0 ? -70 : 70,
    scaleX: 0.72,
    z: -60,
    transition: {
      duration: 0.48,
      ease: [0.65, 0, 0.35, 1],
    },
  }),
};

export default function PageLoader({ children, isHomepage = true }: PageLoaderProps) {
  const [minDurationDone, setMinDurationDone] = useState(!isHomepage);
  const [pageReady, setPageReady] = useState(!isHomepage);
  const loading = isHomepage ? !(minDurationDone && pageReady) : false;

  useEffect(() => {
    const minTimer = window.setTimeout(() => {
      setMinDurationDone(true);
    }, 2500);

    return () => {
      window.clearTimeout(minTimer);
    };
  }, []);

  useEffect(() => {
    if (document.readyState === "complete") {
      setPageReady(true);
      return;
    }

    const onLoaded = () => {
      setPageReady(true);
    };

    window.addEventListener("load", onLoaded);
    return () => {
      window.removeEventListener("load", onLoaded);
    };
  }, []);

  return (
    <>
      {!loading ? (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          {children}
        </motion.main>
      ) : null}

      <AnimatePresence>
        {loading ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-navy)]"
            style={{ perspective: "1000px" }}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="relative w-[88vw] max-w-[620px] aspect-[1302/1150] sm:w-[78vw] md:w-[56vw] lg:w-[589px]"
              variants={logoVariants}
            >
              {segments.map((segment, index) => (
                <motion.div
                  key={segment.id}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "50% 50%",
                  }}
                  variants={segmentVariants}
                  custom={index}
                >
                  <motion.svg
                    className="h-full w-full -translate-x-1/2 -translate-y-1/2"
                    viewBox={`0 0 ${logoWidth} ${logoHeight}`}
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ filter: "brightness(0.84)" }}
                    animate={{ filter: "brightness(1)" }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: 0.28 + index * 0.08 }}
                  >
                    <polygon
                      points={segment.points}
                      fill="var(--color-silver)"
                      stroke="rgba(255, 255, 255, 0.2)"
                      strokeWidth="1"
                    />
                  </motion.svg>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}