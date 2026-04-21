import Link from "next/link";

type ServiceCard = {
  id: string;
  title: string;
  summary: string;
  items: string[];
  tone: string;
};

const serviceCardTones = [
  {
    tone: "bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.95),transparent_17%),radial-gradient(circle_at_76%_24%,rgba(41,215,255,0.6),transparent_18%),linear-gradient(135deg,rgba(255,79,216,0.92),rgba(157,77,255,0.82),rgba(41,215,255,0.84))]",
  },
  {
    tone: "bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.95),transparent_16%),radial-gradient(circle_at_70%_66%,rgba(109,72,255,0.56),transparent_20%),linear-gradient(135deg,rgba(94,243,255,0.92),rgba(47,143,255,0.84),rgba(109,72,255,0.88))]",
  },
  {
    tone: "bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.95),transparent_16%),radial-gradient(circle_at_76%_78%,rgba(255,216,79,0.55),transparent_18%),linear-gradient(135deg,rgba(255,107,156,0.92),rgba(255,141,79,0.86),rgba(255,216,79,0.84))]",
  },
  {
    tone: "bg-[radial-gradient(circle_at_18%_28%,rgba(255,255,255,0.96),transparent_15%),radial-gradient(circle_at_76%_36%,rgba(107,91,255,0.48),transparent_18%),linear-gradient(135deg,rgba(72,246,198,0.9),rgba(49,177,255,0.84),rgba(107,91,255,0.88))]",
  },
  {
    tone: "bg-[radial-gradient(circle_at_28%_20%,rgba(255,255,255,0.96),transparent_16%),radial-gradient(circle_at_68%_74%,rgba(122,92,255,0.5),transparent_19%),linear-gradient(135deg,rgba(255,119,204,0.9),rgba(255,88,103,0.86),rgba(122,92,255,0.88))]",
  },
  {
    tone: "bg-[radial-gradient(circle_at_22%_20%,rgba(255,255,255,0.96),transparent_15%),radial-gradient(circle_at_72%_28%,rgba(138,92,255,0.48),transparent_18%),linear-gradient(135deg,rgba(109,247,255,0.9),rgba(103,164,255,0.84),rgba(138,92,255,0.88))]",
  },
] as const;

const homepageServices = [
  "Branding",
  "Technology",
  "Growth Marketing",
  "AI Consultation",
  "Web & E-Commerce",
  "Mobile & App Development"
];

const serviceCards: ServiceCard[] = homepageServices.map((title, index) => ({
  id: `home-service-${index}`,
  title: title,
  summary: "",
  items: [],
  tone: serviceCardTones[index % serviceCardTones.length].tone,
}));

function ServiceVisual({ tone }: { tone: string }) {
  return (
    <div className={`relative aspect-[16/9] overflow-hidden ${tone}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_26%,rgba(255,255,255,0.55),transparent_16%),radial-gradient(circle_at_76%_30%,rgba(255,255,255,0.18),transparent_14%),radial-gradient(circle_at_54%_76%,rgba(255,255,255,0.12),transparent_20%)]" />
      <div className="absolute inset-0 opacity-80 blur-2xl bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.55),transparent_18%),radial-gradient(circle_at_68%_40%,rgba(255,255,255,0.18),transparent_16%),radial-gradient(circle_at_82%_72%,rgba(255,255,255,0.2),transparent_20%)]" />

      <div className="absolute -left-8 top-7 h-24 w-24 rounded-full border border-white/35 bg-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.15)] backdrop-blur-md" />
      <div className="absolute left-[42%] top-8 h-28 w-28 rotate-12 rounded-2xl border border-white/30 bg-white/18 backdrop-blur-sm" />
      <div className="absolute right-7 bottom-6 h-20 w-20 rounded-[28px] bg-black/10 blur-[1px]" />
      <div className="absolute left-[55%] top-[62%] h-16 w-28 -translate-x-1/2 rotate-[-12deg] rounded-full bg-white/14 blur-[1px]" />
    </div>
  );
}

function ServiceCard({ card }: { card: ServiceCard }) {
  return (
    <article className="group flex flex-col overflow-hidden border border-black/5 bg-transparent transition-colors hover:shadow-sm">
      <ServiceVisual tone={card.tone} />
      <div className="flex flex-1 flex-col justify-start px-6 py-8 md:px-8 md:py-12 bg-[#f6f7f8]">
        <p className="max-w-[15ch] text-[18px] font-normal leading-[1.3] text-black md:text-[20px]">{card.title}</p>
      </div>
    </article>
  );
}

export default function WhatWeDoSection() {
  return (
    <section className="bg-[var(--color-offwhite)] px-4 py-16 text-[var(--color-charcoal)] sm:px-6 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 md:mb-12 text-[2.6rem] md:text-[clamp(3rem,5vw,3.5rem)] font-normal tracking-[-0.03em] md:tracking-[-0.05em] text-[#111111] md:text-[var(--color-navy)]">
          What We Do
        </h2>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((card) => (
            <ServiceCard key={card.id} card={card} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-silver)] bg-[var(--color-offwhite)] px-6 py-3 text-sm font-medium text-[var(--color-charcoal)] transition-colors hover:bg-white"
          >
            Explore What We Do →
          </Link>
        </div>
      </div>
    </section>
  );
}
