import Link from "next/link";

type CaseStudyCard = {
	category: string;
	title: string;
	accent: string;
	videoSrc?: string;
	imgSrc?: string;
	href?: string;
};

const caseStudyCards: CaseStudyCard[] = [
	{
		category: "Branding",
		title: "Ibtikar: complete branding crafted by Majlis Studio.",
		accent: "from-[#e6edf5] via-[#bac9d9] to-[#7c93ad]",
		videoSrc: "/case-studies-assets/ibtikar-motion-video.mp4",
	},
	{
		category: "Company Profile",
		title: "Ibtikar: professional company profile and corporate presentation.",
		accent: "from-[#eef0f4] via-[#c5ced8] to-[#95a2b4]",
		videoSrc: "/case-studies-assets/Ibtikar-company-profile-video.mp4",
	},
	{
		category: "Branding",
		title: "Maithana: a cohesive branding experience.",
		accent: "from-[#f5efe8] via-[#d8c4ad] to-[#ad8c6e]",
		imgSrc: "/case-studies-assets/maithana-cover-image.png",
		href: "/case-studies/maithana",
	},
];

function CaseStudyCardBlock({ card, showClickOverlay = false }: { card: CaseStudyCard; showClickOverlay?: boolean }) {
	const innerContent = (
		<>
			<div className="relative aspect-square overflow-hidden border border-[var(--color-silver)] bg-white">
				{card.videoSrc ? (
					<video
						src={card.videoSrc}
						autoPlay
						loop
						muted
						playsInline
						preload="metadata"
						className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
						aria-label={card.title}
					/>
				) : card.imgSrc ? (
					<img
						src={card.imgSrc}
						alt={card.title}
						className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
					/>
				) : (
					<div className={`absolute inset-0 bg-gradient-to-br ${card.accent} transition-transform duration-700 ease-out group-hover:scale-[1.03]`} />
				)}

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
		</>
	);

	if (card.href) {
		return (
			<Link href={card.href} className="group block">
				{innerContent}
			</Link>
		);
	}

	return (
		<article className="group">
			{innerContent}
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
				<h2 className="mb-10 text-[clamp(3rem,4vw,3.5rem)] !font-light tracking-[-0.06em] text-[var(--color-navy)]">
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
						<h1 className="text-[clamp(3rem,5vw,3.75rem)] !font-light tracking-[-0.06em] text-[var(--color-navy)]">
							Case Studies
						</h1>
						<span className="translate-y-3 text-sm text-[var(--color-silver)]">({caseStudyCards.length})</span>
					</div>

					{/* <div className="flex flex-wrap gap-3">
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
          </div> */}
				</div>

				<CaseStudiesGrid cards={caseStudyCards} showClickOverlay />
			</div>
		</section>
	);
}
