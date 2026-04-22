"use client";

import { motion } from "framer-motion";

const narrativeHighlights = [
	"Every great endeavor begins with a conversation.",
	"Historically, those pivotal conversations happened in the Majlis-a space defined by respect, vision, and partnership.",
	"We founded Majlis Studio to revive that exact ethos in the fast-paced, often impersonal tech industry.",
	"We believe that behind every line of code, every marketing campaign, and every server deployment, there are human beings trying to make an impact.",
	"We are here to architect the systems that make that impact possible.",
];

const philosophyIntroHighlights = [
	"We are a collective of developers, designers, cloud architects, and strategists acting as your dedicated digital partners.",
	"The digital world is fragmented, but your brand's presence shouldn't be.",
	"Whether we are forging a new corporate identity from scratch, managing a seamless Microsoft 365 migration, or sourcing dedicated engineering talent to scale your startup, our approach remains uncompromising: meticulous craftsmanship and unwavering support.",
];

const philosophyCards = [
	{
		id: "01",
		title: "Design",
		desc: "Crafted aesthetics and fluid digital experiences.",
	},
	{
		id: "02",
		title: "Infrastructure",
		desc: "Resilient cloud foundations and enterprise systems.",
	},
	{
		id: "03",
		title: "Growth",
		desc: "Marketing, scaling, and long-term digital momentum.",
	},
];

const promiseCopy =
	"Your digital presence should be as welcoming, secure, and structurally sound as a physical headquarters. We build the architecture-from the beautiful UI your users fall in love with, to the AWS servers they will never see-so you can focus on what matters most: hosting your clients and growing your vision.";

function HighlightLine({ children }: { children: string }) {
	return (
		<span className="inline-block bg-[var(--color-blue)] px-2 py-1 text-[var(--color-offwhite)] shadow-[0_10px_28px_rgba(47,124,171,0.28)]">
			{children}
		</span>
	);
}

export default function AboutPageContent() {
	return (
		<div className="min-h-screen bg-[var(--color-offwhite)] text-[var(--color-charcoal)]">
			<section className="relative isolate overflow-hidden bg-[var(--color-navy)] px-6 pt-44 pb-28 text-[var(--color-offwhite)] md:min-h-[80vh] md:px-12 md:pt-56 md:pb-36">
				<motion.div
					className="pointer-events-none absolute inset-0 flex items-center justify-center"
					initial={{ scale: 0.92, opacity: 0.18 }}
					animate={{ scale: 1, opacity: 0.28 }}
					transition={{ duration: 1.2, ease: "easeOut" }}
				>
					<motion.svg
						viewBox="0 0 1440 860"
						className="h-full w-full max-w-[1400px] opacity-30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden
					>
						<motion.path
							d="M240 760 V360 C240 190 390 90 720 90 C1050 90 1200 190 1200 360 V760"
							stroke="currentColor"
							className="text-[var(--color-silver)]/35"
							strokeWidth="1"
							vectorEffect="non-scaling-stroke"
							initial={{ pathLength: 0, opacity: 0 }}
							animate={{ pathLength: 1, opacity: 1 }}
							transition={{ duration: 1.8, ease: "easeInOut" }}
						/>
						<motion.path
							d="M420 760 V350 C420 250 520 170 720 170 C920 170 1020 250 1020 350 V760"
							stroke="currentColor"
							className="text-[var(--color-silver)]/20"
							strokeWidth="1"
							vectorEffect="non-scaling-stroke"
							initial={{ pathLength: 0, opacity: 0 }}
							animate={{ pathLength: 1, opacity: 1 }}
							transition={{ duration: 2.1, ease: "easeInOut", delay: 0.12 }}
						/>
					</motion.svg>
				</motion.div>

				<motion.div
					className="relative mx-auto flex max-w-5xl flex-col items-center text-center"
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
				>
				<p className="mb-5 text-xs font-light uppercase tracking-[0.28em] text-[var(--color-silver)]/55">About Majlis Studio</p>
				<h1 className="text-5xl font-light leading-[0.95] tracking-tight text-[var(--color-offwhite)] md:text-7xl lg:text-8xl flex flex-col items-center gap-3">
						<span className="text-white">Rooted in majlis.</span>
						<span className="font-sans italic font-[200] text-[var(--color-silver)]">
							built for the future
						</span>
					</h1>
				</motion.div>
			</section>

			<section className="bg-[var(--color-offwhite)] px-6 py-24 text-[var(--color-charcoal)] md:px-12 md:py-32">
				<div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 md:grid-cols-12 md:gap-24 lg:gap-28">
					<motion.div
						className="md:col-span-4 md:pr-8 lg:pr-12"
						initial={{ opacity: 0, y: 18 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.35 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<div className="sticky top-20">
							<p className="font-sans italic text-5xl font-[200] leading-none text-[var(--color-navy)] md:text-7xl lg:text-8xl">Our Narrative</p>
						</div>
					</motion.div>

					<motion.div
						className="md:col-span-8 md:pl-4 lg:pl-6"
						initial={{ opacity: 0, y: 18 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.35 }}
						transition={{ duration: 0.85, ease: "easeOut", delay: 0.05 }}
					>
						<div className="max-w-4xl space-y-4 text-lg leading-relaxed text-[var(--color-charcoal)] md:text-2xl md:leading-[1.65]">
							{narrativeHighlights.map((line) => (
								<p key={line}>
									{line}
								</p>
							))}

							<div className="flex items-center justify-center py-4">
								<svg viewBox="0 0 240 40" className="h-10 w-40 text-[var(--color-silver)]/50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
									<motion.path
										d="M20 20 L60 20 L80 0 L100 20 L140 20 L160 40 L180 20 L220 20"
										stroke="currentColor"
										strokeWidth="1"
										vectorEffect="non-scaling-stroke"
										initial={{ pathLength: 0 }}
										whileInView={{ pathLength: 1 }}
										viewport={{ once: true, amount: 0.6 }}
										transition={{ duration: 1.2, ease: "easeInOut" }}
									/>
								</svg>
							</div>

							<p>
								We are building digital spaces that feel warm, structured, and built to last.
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			<section className="bg-[var(--color-offwhite)] px-6 pb-24 text-[var(--color-charcoal)] md:px-12 md:pb-32">
				<div className="mx-auto max-w-7xl">
					<motion.div
						className="mx-auto mb-12 max-w-5xl space-y-4 text-lg leading-relaxed text-[var(--color-charcoal)] md:mb-16 md:text-2xl md:leading-[1.7]"
						initial={{ opacity: 0, y: 18 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.35 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						{philosophyIntroHighlights.map((line) => (
							<p key={line}>
								{line}
							</p>
						))}
					</motion.div>

					<div className="grid gap-5 md:grid-cols-3">
						{philosophyCards.map((card) => (
							<motion.article
								key={card.id}
								className="group relative overflow-hidden rounded-2xl border border-[var(--color-navy)]/20 bg-transparent p-6 md:p-8"
								initial={{ opacity: 0, y: 18 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.3 }}
								transition={{ duration: 0.7, ease: "easeOut" }}
								whileHover={{ borderColor: "rgba(35, 31, 32, 0.6)" }}
							>
								<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
									<div className="absolute inset-0 rounded-2xl border border-[var(--color-navy)]/55" />
								</div>
							<p className="mb-8 text-sm font-light uppercase tracking-[0.24em] text-[var(--color-navy)]/60">{card.id}</p>
							<div className="space-y-4 text-[var(--color-silver)]">
								<p className="text-3xl font-light tracking-tight text-[var(--color-navy)] md:text-4xl">
										{card.title}
									</p>
									<p className="max-w-sm text-base leading-relaxed text-black md:text-lg">{card.desc}</p>
								</div>
							</motion.article>
						))}
					</div>
				</div>
			</section>

			<section className="bg-[var(--color-offwhite)] px-6 pb-24 text-[var(--color-charcoal)] md:px-12 md:pb-32">
				<motion.div
					className="mx-auto max-w-6xl rounded-[32px] border border-[var(--color-navy)]/10 bg-transparent px-6 py-14 text-center md:px-12 md:py-20"
					initial={{ opacity: 0, y: 18 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.35 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<p className="mx-auto max-w-5xl text-lg leading-relaxed text-black md:text-2xl md:leading-[1.7]">
						{promiseCopy}
					</p>
				</motion.div>
			</section>
		</div>
	);
}
