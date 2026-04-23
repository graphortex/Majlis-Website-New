"use client";

import { motion } from "framer-motion";

const stats = [
	{ num: "150+", label: "Projects Delivered", desc: "From startups to established brands across the region" },
	{ num: "80+", label: "Clients Served", desc: "Long-term partnerships built on trust and results" },
	{ num: "4", label: "Core Specialisms", desc: "Branding, Web, AI & Automation, Social & E-Commerce" },
	{ num: "98%", label: "Client Satisfaction", desc: "Because our work speaks — and our clients stay" },
];

const features = [
	{
		title: "Tailored Strategy",
		text: "Personalised digital strategy tailored to your unique brand goals.",
		icon: (
			<svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="#aaa" strokeWidth="1.5" aria-hidden>
				<circle cx="13" cy="13" r="8" /><line x1="19" y1="19" x2="28" y2="28" />
			</svg>
		),
	},
	{
		title: "Experienced Team",
		text: "Experienced creatives delivering trust, results, and guidance.",
		icon: (
			<svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="#aaa" strokeWidth="1.5" aria-hidden>
				<circle cx="10" cy="12" r="4" /><circle cx="22" cy="12" r="4" /><circle cx="16" cy="9" r="4" />
			</svg>
		),
	},
	{
		title: "Proven Track Record",
		text: "Consistent delivery of success, growth, and client satisfaction.",
		icon: (
			<svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="#aaa" strokeWidth="1.5" aria-hidden>
				<rect x="4" y="18" width="6" height="10" /><rect x="13" y="12" width="6" height="16" /><rect x="22" y="6" width="6" height="22" />
			</svg>
		),
	},
	{
		title: "Client-Centric",
		text: "A client-first approach focused entirely on your success.",
		icon: (
			<svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="#aaa" strokeWidth="1.5" aria-hidden>
				<path d="M16 27s-11-7-11-15a7 7 0 0 1 14 0 7 7 0 0 1 8 0c0 8-11 15-11 15z" />
			</svg>
		),
	},
];

const team = [
	{ name: "Devon Lane", role: "Creative Director", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
	{ name: "Wade Warren", role: "Lead Developer", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
	{ name: "Aisha Malik", role: "Brand Strategist", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
];

export default function AboutPageContent() {
	return (
		<div className="min-h-screen bg-[var(--color-offwhite)] text-[var(--color-charcoal)]">

			{/* ── MAJLIS HERO ── */}
			<section className="relative isolate overflow-hidden bg-[var(--color-navy)] px-6 pt-44 pb-28 text-[var(--color-offwhite)] md:min-h-[80vh] md:px-12 md:pt-56 md:pb-36">
				<motion.div
					className="pointer-events-none absolute inset-0 flex items-center justify-center"
					initial={{ scale: 0.92, opacity: 0.18 }}
					animate={{ scale: 1, opacity: 0.28 }}
					transition={{ duration: 1.2, ease: "easeOut" }}
				>
					<motion.svg viewBox="0 0 1440 860" className="h-full w-full max-w-[1400px] opacity-30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
						<motion.path d="M240 760 V360 C240 190 390 90 720 90 C1050 90 1200 190 1200 360 V760" stroke="currentColor" className="text-[var(--color-silver)]/35" strokeWidth="1" vectorEffect="non-scaling-stroke" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.8, ease: "easeInOut" }} />
						<motion.path d="M420 760 V350 C420 250 520 170 720 170 C920 170 1020 250 1020 350 V760" stroke="currentColor" className="text-[var(--color-silver)]/20" strokeWidth="1" vectorEffect="non-scaling-stroke" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2.1, ease: "easeInOut", delay: 0.12 }} />
					</motion.svg>
				</motion.div>

				<motion.div className="relative mx-auto flex max-w-5xl flex-col items-center text-center" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
					<p className="mb-5 text-xs font-light uppercase tracking-[0.28em] text-[var(--color-silver)]/55">ABOUT MAJLIS STUDIO</p>
					<h1 className="text-5xl font-light leading-[0.95] tracking-tight md:text-7xl lg:text-8xl flex flex-col items-center gap-3">
						<span style={{ background: "linear-gradient(115deg, #5bb8f5 0%, #4a9fe8 15%, #7b5ea7 45%, #c0522a 70%, #e07840 85%, #f0a060 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent" }}>
							Rooted in culture.
						</span>
						<span className="italic font-[200]" style={{ background: "linear-gradient(115deg, #5bb8f5 0%, #4a9fe8 15%, #7b5ea7 45%, #c0522a 70%, #e07840 85%, #f0a060 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent" }}>
							Built for the digital age.
						</span>
					</h1>
				</motion.div>
			</section>

			{/* ── SECTION 1 — INTRO ── */}
			<section className="bg-white px-6 py-24 md:px-20 md:py-32">
				<div className="max-w-7xl">
					<p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-navy)]/60">OUR STORY</p>
					<h2 className="text-[clamp(2.2rem,6vw,4.8rem)] font-light leading-[1.05] tracking-[-0.04em] text-[var(--color-navy)] mb-10">
						<em className="italic">Elevate your brand </em>with precision and purpose.{" "}
						<br className="hidden md:block" />
						<span className="font-light text-[var(--color-silver)]">Shaping digital stories since 2020.</span>
					</h2>
					<p className="text-[20px] md:text-[24px] leading-relaxed text-[var(--color-silver)] max-w-4xl mb-16">
						At Majlis Studio, we believe every brand has a story worth telling — and a future worth building. Born in Dubai and rooted in the spirit of the majlis, we bring people, ideas, and technology together to create digital experiences that are bold, purposeful, and built to last.
					</p>
					
					<div className="flex flex-wrap gap-10 md:gap-20">
						<div className="max-w-[340px] text-center border border-[var(--color-silver)]/20 p-8 rounded-xl bg-[var(--color-offwhite)]/30">
							<p className="text-[18px] font-bold uppercase tracking-[0.2em] text-[var(--color-navy)] mb-4">MISSION</p>
							<p className="text-[16px] leading-relaxed text-[var(--color-charcoal)]">
								Our mission is to make digital transformation simple, strategic, and deeply personal — empowering every client to grow with confidence in an ever-changing digital world.
							</p>
						</div>
						<div className="max-w-[340px] text-center border border-[var(--color-silver)]/20 p-8 rounded-xl bg-[var(--color-offwhite)]/30">
							<p className="text-[18px] font-bold uppercase tracking-[0.2em] text-[var(--color-navy)] mb-4">VISION</p>
							<p className="text-[16px] leading-relaxed text-[var(--color-charcoal)]">
								Our vision is to be the most trusted creative and technology partner for ambitious brands across the Middle East and beyond — where culture meets innovation.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ── SECTION 2 — FULL-WIDTH PHOTO ── */}
			<img
				src="/blog/blog-ripple-collective/ripple-image-2.jpeg"
				alt="Modern studio workspace"
				className="block w-full object-cover"
				style={{ height: 150 }}
			/>

			{/* ── SECTION 3 — STATEMENT + STATS ── */}
			<section className="bg-white px-6 py-20 md:px-12 md:py-28">
				<div className="mx-auto max-w-5xl">
					<div className="flex flex-wrap gap-12 items-start mb-14">
						<h2 className="flex-1 min-w-[260px] text-[clamp(1.4rem,3vw,2rem)] font-light leading-[1.2] tracking-[-0.03em] text-[var(--color-navy)]">
							Don&apos;t just build a brand — <em className="italic">experience growth</em> with intention.
						</h2>
						<p className="flex-1 min-w-[220px] text-[15px] leading-relaxed text-[var(--color-silver)] max-w-[380px]">
							We don&apos;t believe in one-size-fits-all solutions. Every strategy we craft is rooted in your market, your audience, and your ambition. From AI-powered automation to culturally-led branding, we deliver work that moves the needle — and tells your story the right way.
						</p>
					</div>

					<div className="flex flex-wrap gap-0 border-t border-[var(--color-silver)]/20 pt-10">
						{stats.map((s) => (
							<div key={s.label} className="flex-1 min-w-[130px] pr-6 mb-8">
								<p className="text-[clamp(2rem,4vw,2.8rem)] font-light tracking-[-0.04em] text-[var(--color-navy)] leading-none">{s.num}</p>
								<p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--color-silver)] mt-2">{s.label}</p>
								<p className="text-[12px] leading-relaxed text-[var(--color-silver)]/70 mt-2">{s.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── SECTION 6 — TEAM (3 people) ── */}
			{/* <section className="bg-white px-6 py-20 md:px-12 md:py-28">
				<div className="mx-auto max-w-5xl">
					<h2 className="text-[clamp(1.6rem,3.5vw,2.4rem)] font-light tracking-[-0.03em] text-[var(--color-navy)] text-center mb-12">
						Meet Our Amazing Team
					</h2>
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
						{team.map((member) => (
							<div key={member.name}>
								<img src={member.photo} alt={member.name} className="w-full object-cover rounded-lg" style={{ height: 240 }} />
								<p className="text-[15px] font-semibold text-[var(--color-navy)] mt-4">{member.name}</p>
								<p className="text-[13px] text-[var(--color-silver)] mt-1">{member.role}</p>
							</div>
						))}
					</div>
				</div>
			</section> */}

		</div>
	);
}
