import Link from "next/link";

type InsightCard = {
  category: string;
  readTime: string;
  date: string;
  title: string;
  author: string;
  image: string;
  href?: string;
};

type FeedCard = InsightCard;

const homepageInsights: InsightCard[] = [
  {
    category: "Feature",
    readTime: "2 mins read",
    date: "Apr 2026",
    title: "Majlis Studio reps attended Final Draft.",
    author: "Majlis Studio",
    href: "/insights/ripple-collective-april-18",
    image: "/blog/blog-ripple-collective/ripple-image-1.jpeg",
  },
];

const insightsHeroMain: FeedCard = {
  category: "Feature",
  readTime: "2 mins read",
  date: "Apr 2026",
  title: "Majlis Studio reps attended Final Draft.",
  author: "Majlis Studio",
  href: "/insights/ripple-collective-april-18",
  image:
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80",
};

function InsightCard({ card, compact = false, showAuthor = false }: { card: FeedCard; compact?: boolean; showAuthor?: boolean }) {
  const content = (
    <article className="group h-full">
      {card.image ? (
        <div className={`relative overflow-hidden rounded-[8px] bg-[var(--color-silver)]/20 ${compact ? "aspect-[4/3]" : "aspect-[16/9]"}`}>
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ backgroundImage: `url(${card.image})` }}
          />
        </div>
      ) : null}

      <div className={compact ? "pt-4" : "pt-5"}>
        <p className="text-[12px] text-[var(--color-silver)]">
          {card.category} • {card.readTime} | {card.date}
        </p>
        <h3 className={`mt-3 font-bold leading-[1.4] text-[var(--color-navy)] ${compact ? "text-[18px]" : "text-[20px]"}`}>
          {card.title}
        </h3>
        {showAuthor ? <p className="mt-2 text-[13px] text-[var(--color-silver)]">By {card.author}</p> : null}
      </div>
    </article>
  );

  if (card.href) {
    return (
      <Link href={card.href} className="block h-full transition-opacity hover:opacity-90">
        {content}
      </Link>
    );
  }

  return content;
}

function PopularItem({ card }: { card: FeedCard }) {
  return (
    <a href={card.href ?? "/insights"} className="block transition-opacity hover:opacity-80">
      <p className="text-[12px] text-[var(--color-silver)]">
        {card.category} • {card.readTime} | {card.date}
      </p>
      <p className="mt-2 max-w-[22ch] text-[18px] font-bold leading-[1.4] text-[var(--color-navy)]">{card.title}</p>
    </a>
  );
}

export function InsightsSection() {
  return (
    <section className="bg-[var(--color-offwhite)] px-5 py-12 sm:px-6 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-[2.6rem] md:text-[clamp(3rem,5vw,3.75rem)] !font-light tracking-[-0.03em] text-[#111111] md:text-[var(--color-navy)] mb-4 md:mb-12">Blog</h2>
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {homepageInsights.map((card) => (
            <InsightCard key={card.title} card={card} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

export function InsightsPageContent() {
  return (
    <main className="bg-[var(--color-offwhite)] px-4 pb-8 pt-40 text-[var(--color-charcoal)] sm:px-6 md:px-12 md:pb-10 md:pt-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 border-b border-[var(--color-silver)] pb-8">
          <h1 className="text-[clamp(3rem,5vw,4rem)] !font-light tracking-[-0.05em] text-[var(--color-navy)]">Blog</h1>
          <p className="max-w-2xl text-[16px] leading-[1.8] text-[var(--color-charcoal)]/75">
            One featured story from Majlis Studio, highlighted from our blog section.
          </p>
        </div>

        <section className="max-w-4xl">
          <InsightCard card={insightsHeroMain} showAuthor />
        </section>
      </div>
    </main>
  );
}
