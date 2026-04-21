import Link from "next/link";

type InsightCard = {
  category: string;
  readTime: string;
  date: string;
  title: string;
  author: string;
  image: string;
};

type FeedCard = InsightCard;

const homepageInsights: InsightCard[] = [
  {
    category: "Strategy",
    readTime: "6 mins read",
    date: "Apr 2026",
    title: "How premium digital experiences shape trust before the first conversation.",
    author: "Majlis Studio",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Design",
    readTime: "4 mins read",
    date: "Mar 2026",
    title: "The editorial systems behind agencies that feel expensive, calm, and clear.",
    author: "Majlis Studio",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Growth",
    readTime: "7 mins read",
    date: "Mar 2026",
    title: "What clients actually notice when a website starts performing like a product.",
    author: "Majlis Studio",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80",
  },
];

const insightsHeroLeft: FeedCard[] = [
  {
    category: "Blogs",
    readTime: "5 mins read",
    date: "Apr 2026",
    title: "The difference between a premium brand story and a nice-looking website.",
    author: "Amina Rahman",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "News",
    readTime: "3 mins read",
    date: "Apr 2026",
    title: "Why editorial layouts are making a comeback in high-end agency websites.",
    author: "Maya Chen",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  },
];

const insightsHeroMain: FeedCard = {
  category: "Feature",
  readTime: "8 mins read",
  date: "Apr 2026",
  title: "How we design insight-led digital ecosystems that turn readers into clients.",
  author: "Omar Khoury",
  image:
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80",
};

const mostPopular: FeedCard[] = [
  {
    category: "Opinion",
    readTime: "4 mins read",
    date: "Apr 2026",
    title: "A practical guide to writing headlines that feel calm, clear, and persuasive.",
    author: "Sana Ali",
    image: "",
  },
  {
    category: "Events",
    readTime: "2 mins read",
    date: "Apr 2026",
    title: "Inside our next studio talk: design systems, motion, and storytelling.",
    author: "Majlis Studio",
    image: "",
  },
  {
    category: "Blogs",
    readTime: "5 mins read",
    date: "Mar 2026",
    title: "The hidden cost of website decisions that look good but don't convert.",
    author: "Riya Kapoor",
    image: "",
  },
  {
    category: "News",
    readTime: "3 mins read",
    date: "Mar 2026",
    title: "How stronger content hierarchy improves editorial and product pages alike.",
    author: "Daniel Rios",
    image: "",
  },
];

const feedCards: FeedCard[] = [
  {
    category: "Blogs",
    readTime: "5 mins read",
    date: "Apr 2026",
    title: "The difference between a premium brand story and a nice-looking website.",
    author: "Amina Rahman",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Design",
    readTime: "4 mins read",
    date: "Apr 2026",
    title: "Why editorial interfaces feel more trustworthy than generic marketing pages.",
    author: "Maya Chen",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Strategy",
    readTime: "6 mins read",
    date: "Apr 2026",
    title: "How to structure content so your strongest ideas stay impossible to miss.",
    author: "Omar Khoury",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "News",
    readTime: "3 mins read",
    date: "Mar 2026",
    title: "The agency websites shifting from portfolio galleries to narrative systems.",
    author: "Riya Kapoor",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Events",
    readTime: "2 mins read",
    date: "Mar 2026",
    title: "What we learned from building digital experiences that feel editorial first.",
    author: "Majlis Studio",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Blogs",
    readTime: "5 mins read",
    date: "Mar 2026",
    title: "How lightweight motion can make a page feel premium without feeling busy.",
    author: "Sana Ali",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Design",
    readTime: "4 mins read",
    date: "Mar 2026",
    title: "The visual hierarchy techniques we use to make dense pages feel calm.",
    author: "Amina Rahman",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "Strategy",
    readTime: "6 mins read",
    date: "Mar 2026",
    title: "Why insight pages perform better when they read like magazines, not grids.",
    author: "Daniel Rios",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    category: "News",
    readTime: "3 mins read",
    date: "Feb 2026",
    title: "The role of content cadence in building long-term brand authority online.",
    author: "Maya Chen",
    image:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1400&q=80",
  },
];

function InsightCard({ card, compact = false, showAuthor = false }: { card: FeedCard; compact?: boolean; showAuthor?: boolean }) {
  return (
    <article className="group">
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
}

function PopularItem({ card }: { card: FeedCard }) {
  return (
    <a href="/insights" className="block transition-opacity hover:opacity-80">
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
        <h2 className="text-[2.6rem] md:text-[clamp(3rem,5vw,3.75rem)] !font-light tracking-[-0.03em] text-[#111111] md:text-[var(--color-navy)] mb-4 md:mb-12">Insights</h2>
        
        {/* Mobile View */}
        <div className="flex flex-col md:hidden">
          {homepageInsights.map((card) => (
            <Link key={card.title} href="/insights" className="flex items-center gap-[18px] py-5 border-b border-black/10">
              <div className="relative shrink-0 overflow-hidden bg-[var(--color-silver)]/20 w-[120px] h-[80px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
              </div>
              <div className="flex flex-col flex-1 justify-center">
                <p className="text-[14px] text-[#4a4a4a] mb-1">
                  {card.category === "Blogs" || card.category === "Design" || card.category === "Strategy" || card.category === "Growth" ? "Blog" : card.category} · {card.readTime}
                </p>
                <h3 className="text-[16px] font-[500] leading-[1.3] text-[#111111] line-clamp-2">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden gap-10 md:grid md:grid-cols-3">
          {homepageInsights.map((card) => (
            <InsightCard key={card.title} card={card} compact />
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-8 flex md:hidden pb-4">
          <Link
            href="/insights"
            className="flex w-full items-center justify-center gap-3 border border-[#111111] bg-transparent py-[14px] text-[18px] text-[#111111] transition-colors hover:bg-black/5"
          >
            Explore all insights
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>

        {/* Desktop Button */}
        <div className="mt-12 hidden justify-center md:flex">
          <Link
            href="/insights"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-silver)] bg-transparent px-6 py-3 text-sm font-medium text-[var(--color-charcoal)] transition-colors hover:bg-white"
          >
            Explore all insights →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function InsightsPageContent() {
  return (
    <main className="bg-[var(--color-offwhite)] px-4 py-8 text-[var(--color-charcoal)] sm:px-6 md:px-12 md:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 border-b border-[var(--color-silver)] pb-8 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="text-[clamp(3rem,5vw,4rem)] !font-light tracking-[-0.05em] text-[var(--color-navy)]">Insights</h1>
          <div className="flex flex-wrap gap-3">
            {['Blogs', 'News', 'Events'].map((filter, index) => (
              <button
                key={filter}
                type="button"
                className={`rounded-full border border-[var(--color-silver)] px-4 py-2 text-sm font-medium transition-colors ${index === 0 ? 'bg-white text-[var(--color-charcoal)]' : 'bg-white text-[var(--color-charcoal)] hover:bg-[var(--color-offwhite)]'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <section className="py-14">
          <div className="grid gap-10 lg:grid-cols-[25%_50%_25%] lg:gap-12">
            <div className="space-y-8">
              {insightsHeroLeft.map((card) => (
                <InsightCard key={card.title} card={card} compact />
              ))}
            </div>

            <div>
              <InsightCard card={insightsHeroMain} showAuthor />
            </div>

            <aside>
              <div className="rounded-[20px] border border-[var(--color-silver)] bg-white p-6">
                <h2 className="text-[18px] font-semibold text-[var(--color-navy)]">Most popular</h2>
                <div className="mt-8 space-y-8">
                  {mostPopular.map((card) => (
                    <PopularItem key={card.title} card={card} />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-[var(--color-silver)] py-12">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {feedCards.map((card) => (
              <InsightCard key={card.title} card={card} showAuthor />
            ))}
          </div>
        </section>

        <div className="flex items-center justify-center gap-3 pb-8 pt-2 text-[14px] text-[var(--color-charcoal)]">
          {['1', '2', '3', '4', '5'].map((page) => (
            <button
              key={page}
              type="button"
              className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${page === '1' ? 'bg-[var(--color-navy)] text-[var(--color-offwhite)]' : 'text-[var(--color-charcoal)] hover:bg-white'}`}
            >
              {page}
            </button>
          ))}
          <span className="px-1 text-[var(--color-silver)]">...</span>
          <button type="button" className="text-[var(--color-charcoal)] transition-colors hover:opacity-70">16</button>
          <button type="button" className="text-[var(--color-charcoal)] transition-colors hover:opacity-70">&gt;</button>
        </div>
      </div>
    </main>
  );
}
