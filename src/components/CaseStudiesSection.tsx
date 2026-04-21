import Link from "next/link";

type CaseStudyCard = {
  category: string;
  title: string;
  accent: string;
};

const caseStudyCards: CaseStudyCard[] = [
  {
    category: "Food",
    title: "Saffron Table: a refined restaurant identity and booking experience.",
    accent: "from-[#f5efe8] via-[#d8c4ad] to-[#ad8c6e]",
  },
  {
    category: "Retail",
    title: "Miro Atelier: a quiet luxury commerce system for a modern flagship.",
    accent: "from-[#f7f7f7] via-[#dcdcdc] to-[#b6b6b6]",
  },
  {
    category: "Education",
    title: "North Star Academy: a clean admissions journey for ambitious families.",
    accent: "from-[#eef3f8] via-[#c7d4e1] to-[#9eaec0]",
  },
  {
    category: "Hospitality",
    title: "Maison Mira: a polished digital presence for a boutique hotel collection.",
    accent: "from-[#f3eee9] via-[#d7ccc0] to-[#a98d73]",
  },
  {
    category: "Lifestyle",
    title: "Luma Club: a member-first portal for elevated wellness and events.",
    accent: "from-[#f6f3ef] via-[#ddd2c4] to-[#b29f8a]",
  },
  {
    category: "Tech",
    title: "Orbit Labs: a sharper product story for a high-trust software brand.",
    accent: "from-[#eef0f4] via-[#c5ced8] to-[#95a2b4]",
  },
  {
    category: "Food",
    title: "Cedar Room: a cinematic launch campaign for a chef-led concept.",
    accent: "from-[#f7efe8] via-[#e0c7ae] to-[#bd9472]",
  },
  {
    category: "Retail",
    title: "Nomad Goods: a minimalist storefront with stronger product storytelling.",
    accent: "from-[#f8f8f8] via-[#e1e1e1] to-[#a9a9a9]",
  },
  {
    category: "Education",
    title: "Atelier One: an admissions-first website for a design school launch.",
    accent: "from-[#f0f4f3] via-[#c7d7d1] to-[#97aea7]",
  },
  {
    category: "Hospitality",
    title: "Solara House: an elevated reservation flow for a private dining venue.",
    accent: "from-[#f4f1ee] via-[#d9cec2] to-[#b29781]",
  },
  {
    category: "Lifestyle",
    title: "Verve Studio: a brand refresh for a modern wellness destination.",
    accent: "from-[#f3f5f7] via-[#d9e0e8] to-[#a7b5c5]",
  },
  {
    category: "Tech",
    title: "Pillar AI: a more human product narrative for enterprise buyers.",
    accent: "from-[#f2f2f2] via-[#d4d4d4] to-[#9f9f9f]",
  },
];

function CaseStudyCardBlock({ card, showClickOverlay = false }: { card: CaseStudyCard; showClickOverlay?: boolean }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden border border-[var(--color-silver)] bg-white">
        <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} transition-transform duration-700 ease-out group-hover:scale-[1.03]`} />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.38),transparent_38%,rgba(255,255,255,0.1)_72%,rgba(0,0,0,0.04))]" />
        <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(17,17,17,0.18)_1px,transparent_1px)] [background-size:18px_18px]" />

        {showClickOverlay ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-xl">
              <span className="text-[10px] font-medium tracking-[0.3em] text-white">CLICK</span>
            </div>
          </div>
        ) : null}
      </div>

      <p className="mt-4 text-[13px] font-medium text-[var(--color-silver)]">{card.category}</p>
      <p className="mt-2 max-w-[28ch] text-[18px] leading-[1.45] text-[var(--color-charcoal)] sm:text-[19px]">
        {card.title}
      </p>
    </article>
  );
}

function CaseStudiesGrid({ cards, showClickOverlay = false }: { cards: CaseStudyCard[]; showClickOverlay?: boolean }) {
  return (
    <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <CaseStudyCardBlock key={card.title} card={card} showClickOverlay={showClickOverlay} />
      ))}
    </div>
  );
}

export function CaseStudiesSection() {
  const cards = caseStudyCards.slice(0, 6);

  return (
    <section id="case-studies" className="bg-white px-4 py-20 text-[var(--color-charcoal)] sm:px-6 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-[clamp(3rem,4vw,3.5rem)] font-normal tracking-[-0.06em] text-[var(--color-navy)]">
          Case Studies
        </h2>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <CaseStudyCardBlock key={card.title} card={card} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-silver)] bg-[var(--color-offwhite)] px-8 py-3 text-sm font-medium text-[var(--color-charcoal)] transition-colors hover:bg-white"
          >
            View all works →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CaseStudiesPageContent() {
  return (
    <section className="min-h-screen bg-[var(--color-offwhite)] px-4 pb-10 pt-44 text-[var(--color-charcoal)] sm:px-6 md:px-12 md:pb-14 md:pt-56">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 border-b border-[var(--color-silver)] pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex items-start gap-3">
            <h1 className="text-[clamp(3rem,5vw,3.75rem)] font-normal tracking-[-0.06em] text-[var(--color-navy)]">
              Case Studies
            </h1>
            <span className="translate-y-3 text-sm text-[var(--color-silver)]">(137)</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "Industries v",
              "Expertise v",
            ].map((filter) => (
              <button
                key={filter}
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-silver)] bg-white px-5 py-3 text-sm font-medium text-[var(--color-charcoal)] transition-colors hover:bg-[var(--color-offwhite)]"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <CaseStudiesGrid cards={caseStudyCards} showClickOverlay />
      </div>
    </section>
  );
}
