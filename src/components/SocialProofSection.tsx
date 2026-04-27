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

const trustedCards = [
  { kind: "logo", label: "Power Integrated", src: "/trusted-visionaries-images/15 power integrated.png", alt: "Power Integrated logo" },
  { kind: "logo", label: "Trusted Logo 1", src: "/trusted-visionaries-images/1_Logo 1.png", alt: "Trusted visionary logo 1" },
  { kind: "logo", label: "Trusted Logo 2", src: "/trusted-visionaries-images/1_Logo 2.png", alt: "Trusted visionary logo 2" },
  { kind: "stat", label: "86+", sublabel: "Trusted clients" },
  { kind: "logo", label: "Trusted Logo 3", src: "/trusted-visionaries-images/1_Logo 3.png", alt: "Trusted visionary logo 3" },
  { kind: "logo", label: "Trusted Logo 4", src: "/trusted-visionaries-images/1_Logo 4.png", alt: "Trusted visionary logo 4" },
  { kind: "logo", label: "Trusted Logo 5", src: "/trusted-visionaries-images/1_Logo 5.png", alt: "Trusted visionary logo 5" },
  { kind: "logo", label: "Trusted Logo 6", src: "/trusted-visionaries-images/1_Logo 6 .png", alt: "Trusted visionary logo 6" },
  { kind: "logo", label: "Trusted Logo 7", src: "/trusted-visionaries-images/1_Logo 7.png", alt: "Trusted visionary logo 7" },
  { kind: "logo", label: "Trusted Badge 07", src: "/trusted-visionaries-images/1-07.png", alt: "Trusted visionary badge 07" },
  { kind: "logo", label: "Trusted Badge 08", src: "/trusted-visionaries-images/1-08.png", alt: "Trusted visionary badge 08" },
  { kind: "logo", label: "Trusted Badge 09", src: "/trusted-visionaries-images/1-09.png", alt: "Trusted visionary badge 09" },
  { kind: "logo", label: "Trusted Badge 10", src: "/trusted-visionaries-images/1-10.png", alt: "Trusted visionary badge 10" },
  { kind: "logo", label: "Trusted Badge 11", src: "/trusted-visionaries-images/1-11.png", alt: "Trusted visionary badge 11" },
  { kind: "logo", label: "Trusted Badge 12", src: "/trusted-visionaries-images/1-12.png", alt: "Trusted visionary badge 12" },
  { kind: "cta", label: "Join us now" },
];

function TrustedCard({ item }: { item: (typeof trustedCards)[number] }) {
  if (item.kind === "stat") {
    return (
      <div className="flex h-[80px] md:h-[110px] flex-col items-center justify-center rounded-[12px] md:rounded-[16px] bg-[var(--color-offwhite)]/5 px-2 md:px-4 text-center text-[var(--color-offwhite)] transition-colors duration-200 hover:bg-[var(--color-offwhite)]/10">
        <div className="font-sans text-[26px] md:text-[38px] font-[200] italic leading-none tracking-[-0.06em] text-[var(--color-offwhite)]">{item.label}</div>
        <div className="mt-1 text-[9px] md:text-[11px] uppercase tracking-[0.2em] text-[var(--color-silver)]">{item.sublabel}</div>
      </div>
    );
  }

  if (item.kind === "cta") {
    return (
      <div className="group flex h-[80px] md:h-[110px] items-center justify-center rounded-[12px] md:rounded-[16px] bg-[var(--color-offwhite)]/5 px-2 md:px-4 transition-colors duration-200 hover:bg-[var(--color-offwhite)]/10">
        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center sm:text-left">
          <span className="text-[11px] md:text-[13px] font-bold tracking-[-0.01em] text-[var(--color-offwhite)]">{item.label}</span>
          <span className="flex h-5 w-5 md:h-8 md:w-8 items-center justify-center rounded-full bg-[var(--color-offwhite)]/10 text-[var(--color-offwhite)] transition-transform duration-200 group-hover:translate-x-0.5">
            <ArrowIcon />
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex h-[80px] md:h-[110px] items-center justify-center rounded-[12px] md:rounded-[16px] bg-[var(--color-offwhite)]/5 px-2 md:px-4 text-[var(--color-offwhite)] transition-colors duration-200 hover:bg-[var(--color-offwhite)]/10">
      <div className="relative flex h-full w-full items-center justify-center">
        <Image src={item.src} alt={item.alt} fill sizes="(max-width: 768px) 50vw, 180px" className="object-contain p-3 md:p-4 transition-opacity duration-200 group-hover:opacity-100" />
      </div>
    </div>
  );
}

export default function SocialProofSection() {
  return (
    <section className="bg-[var(--color-navy)] px-4 py-16 flex flex-col min-h-[100dvh] justify-center sm:px-6 md:block md:min-h-0 md:px-12 md:py-28 text-[var(--color-offwhite)]">
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

        <div className="grid grid-cols-3 gap-2 md:grid-cols-3 lg:grid-cols-6 md:gap-3">
          {trustedCards.map((item) => (
            <TrustedCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
