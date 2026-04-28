import Link from "next/link";
import Image from "next/image";

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 shrink-0 fill-current">
      <path d="M12 2.4l1.93 5.6h5.95l-4.82 3.45 1.85 5.76L12 14.08 7.09 17.21l1.85-5.76L4.12 8h5.95L12 2.4z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 stroke-current stroke-[1.7] fill-none">
      <path d="M5 12h12" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

type LogoCard = { kind: "logo"; label: string; src: string; alt: string };

const logoCards: LogoCard[] = [
  { kind: "logo", label: "Trusted Logo 1", src: "/trusted-visionaries-images/1_Logo 1.png", alt: "Trusted visionary logo 1" },
  { kind: "logo", label: "Trusted Logo 4", src: "/trusted-visionaries-images/1_Logo 4.png", alt: "Trusted visionary logo 4" },
  { kind: "logo", label: "Trusted Logo 6", src: "/trusted-visionaries-images/1_Logo 6 .png", alt: "Trusted visionary logo 6" },
  { kind: "logo", label: "Power Integrated", src: "/trusted-visionaries-images/15 power integrated.png", alt: "Power Integrated logo" },
  { kind: "logo", label: "Trusted Logo 2", src: "/trusted-visionaries-images/1_Logo 2.png", alt: "Trusted visionary logo 2" },
  { kind: "logo", label: "Trusted Logo 7", src: "/trusted-visionaries-images/1_Logo 7.png", alt: "Trusted visionary logo 7" },
  { kind: "logo", label: "Trusted Badge 09", src: "/trusted-visionaries-images/1-09.png", alt: "Trusted visionary badge 09" },
  { kind: "logo", label: "Trusted Badge 07", src: "/trusted-visionaries-images/1-07.png", alt: "Trusted visionary badge 07" },
  { kind: "logo", label: "Trusted Logo 5", src: "/trusted-visionaries-images/1_Logo 5.png", alt: "Trusted visionary logo 5" },
  { kind: "logo", label: "Trusted Logo 3", src: "/trusted-visionaries-images/1_Logo 3.png", alt: "Trusted visionary logo 3" },
  { kind: "logo", label: "Trusted Badge 08", src: "/trusted-visionaries-images/1-08.png", alt: "Trusted visionary badge 08" },
  { kind: "logo", label: "Trusted Badge 10", src: "/trusted-visionaries-images/1-10.png", alt: "Trusted visionary badge 10" },
  { kind: "logo", label: "Trusted Badge 11", src: "/trusted-visionaries-images/1-11.png", alt: "Trusted visionary badge 11" },
  { kind: "logo", label: "Trusted Badge 12", src: "/trusted-visionaries-images/1-12.png", alt: "Trusted visionary badge 12" },
];

// Duplicate logos for infinite scroll effect
const scrollingLogos = [...logoCards, ...logoCards];

function LogoCard({ item }: { item: LogoCard }) {
  return (
    <div className="flex h-[120px] md:h-[150px] w-[120px] md:w-[150px] items-center justify-center rounded-[12px] md:rounded-[16px] bg-[var(--color-offwhite)]/5 px-2 md:px-4 text-[var(--color-offwhite)] transition-colors duration-200 hover:bg-[var(--color-offwhite)]/10 flex-shrink-0">
      <Image src={item.src} alt={item.alt} width={120} height={120} className="object-contain p-3 md:p-4 max-h-[110px] md:max-h-[140px] transition-opacity duration-200" />
    </div>
  );
}

function CtaButton() {
  return (
    <Link
      href="/contact"
      aria-label="Join us now and contact Majlis Studio"
      className="group flex h-[80px] md:h-[110px] items-center justify-center rounded-[12px] md:rounded-[16px] bg-[var(--color-offwhite)]/5 px-2 md:px-4 transition-colors duration-200 hover:bg-[var(--color-offwhite)]/10"
    >
      <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center sm:text-left">
        <span className="text-[11px] md:text-[13px] font-bold tracking-[-0.01em] text-[var(--color-offwhite)]">Join us now</span>
        <span className="flex h-5 w-5 md:h-8 md:w-8 items-center justify-center rounded-full bg-[var(--color-offwhite)]/10 text-[var(--color-offwhite)] transition-transform duration-200 group-hover:translate-x-0.5">
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}

export default function SocialProofSection() {
  return (
    <section className="bg-[var(--color-navy)] px-4 py-16 flex flex-col min-h-[100dvh] justify-center sm:px-6 md:block md:min-h-0 md:px-12 md:py-28 text-[var(--color-offwhite)]">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scroll-container {
          animation: scroll 5s linear infinite;
        }
        .scroll-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto grid w-full max-w-7xl">
        <div className="mb-10 md:mb-16 flex flex-col gap-6 md:gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="flex items-center gap-2 text-[13px] text-[var(--color-silver)]">
            <StarIcon />
            <span>Trusted by the visionaries</span>
          </div>

          <div className="max-w-[600px] text-[20px] md:text-[24px] font-medium leading-[1.2] tracking-[-0.04em] sm:text-[28px]">
            <span className="text-[var(--color-offwhite)]">Together, we build impactful experiences,</span>{" "}
            <span className="text-[var(--color-silver)]">lasting relationships, and digital solutions that move businesses forward.</span>
          </div>
        </div>

        {/* Scrolling logos container */}
        <div className="mb-4 md:mb-6 overflow-hidden">
          <div className="scroll-container flex gap-2 md:gap-3">
            {scrollingLogos.map((item, idx) => (
              <LogoCard key={`${item.label}-${idx}`} item={item} />
            ))}
          </div>
        </div>

        {/* Fixed centered CTA button */}
        <div className="flex justify-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
