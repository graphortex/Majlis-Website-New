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

function CurvedArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 stroke-current stroke-[1.6] fill-none">
      <path d="M17 7H8.5a4.5 4.5 0 0 0 0 9H14" />
      <path d="M14 3l4 4-4 4" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 stroke-current stroke-[1.6] fill-none">
      <circle cx="12" cy="12" r="8" />
      <path d="M10 14l2-5 5-2-2 5-5 2z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function StarBurstIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 stroke-current stroke-[1.6] fill-none">
      <path d="M12 3.5l1.3 3.9 3.9 1.3-3.9 1.3L12 14l-1.3-3.9-3.9-1.3 3.9-1.3L12 3.5z" fill="currentColor" stroke="none" />
      <path d="M12 18.5l.8 2.2.7-2.2 2.2-.7-2.2-.8-.7-2.2-.8 2.2-2.2.8 2.2.7z" fill="currentColor" stroke="none" opacity="0.75" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 stroke-current stroke-[1.6] fill-none">
      <rect x="4" y="4" width="6" height="6" />
      <rect x="14" y="4" width="6" height="6" />
      <rect x="4" y="14" width="6" height="6" />
      <rect x="14" y="14" width="6" height="6" />
    </svg>
  );
}

function CrescentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 stroke-current stroke-[1.6] fill-none">
      <path d="M16.8 4.8A8.8 8.8 0 1 0 19.2 19.2 7.8 7.8 0 1 1 16.8 4.8z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CircleWIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 stroke-current stroke-[1.5] fill-none">
      <circle cx="12" cy="12" r="9" />
      <path d="M7.5 9.5l1.7 5.2 2.8-3.5 2.8 3.5 1.7-5.2" />
    </svg>
  );
}

const trustedCards = [
  { kind: "logo", label: "U-Turn", icon: <CurvedArrowIcon /> },
  { kind: "logo", label: "Swiss", icon: null, cropped: true },
  { kind: "logo", label: "theo", icon: null, script: true },
  { kind: "stat", label: "86+", sublabel: "Trusted clients" },
  { kind: "logo", label: "KOBE", icon: <GridIcon /> },
  { kind: "logo", label: "Manila.", icon: null, serif: true },
  { kind: "logo", label: "Trace", icon: <CompassIcon /> },
  { kind: "logo", label: "Hamilton", icon: <StarBurstIcon /> },
  { kind: "logo", label: "Silicon.V", icon: null },
  { kind: "logo", label: "Invert", icon: <CrescentIcon /> },
  { kind: "logo", label: "waveless", icon: <CircleWIcon /> },
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
      <div className="flex items-center gap-1.5 md:gap-2 text-[var(--color-offwhite)]/60 transition-opacity duration-200 group-hover:text-[var(--color-offwhite)]">
        {item.icon ? <span className="flex items-center justify-center scale-75 md:scale-100 text-[var(--color-offwhite)]/60 transition-colors duration-200 group-hover:text-[var(--color-offwhite)]">{item.icon}</span> : null}
        {item.script ? (
          <span className="font-sans text-[18px] md:text-[26px] font-[200] italic tracking-[-0.04em] text-[var(--color-offwhite)]/60 transition-colors duration-200 group-hover:text-[var(--color-offwhite)]">
            {item.label}
          </span>
        ) : item.cropped ? (
          <span className="overflow-hidden text-[16px] md:text-[24px] font-semibold tracking-[0.28em] text-[var(--color-offwhite)]/60 transition-colors duration-200 group-hover:text-[var(--color-offwhite)]">
            <span className="block translate-x-1 scale-x-[1.15]">{item.label}</span>
          </span>
        ) : item.serif ? (
          <span className="font-sans text-[17px] md:text-[25px] font-[200] tracking-[-0.03em] text-[var(--color-offwhite)]/60 transition-colors duration-200 group-hover:text-[var(--color-offwhite)]">
            {item.label}
          </span>
        ) : (
          <span className="text-[15px] md:text-[22px] font-semibold tracking-[-0.04em] text-[var(--color-offwhite)]/60 transition-colors duration-200 group-hover:text-[var(--color-offwhite)]">
            {item.label}
          </span>
        )}
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
