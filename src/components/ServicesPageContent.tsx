"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type OfferAccordionItem = {
	title: string;
	description: string;
};

type OfferSection = {
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	items: OfferAccordionItem[];
};

const offerSections: OfferSection[] = [
	{
		title: "Branding",
		description:
			"Crafting iconic visual identities and product designs that resonate with your audience and leave a lasting impression.",
		image:
			"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80",
		imageAlt: "Creative team discussing branding concepts",
		items: [
			{
				title: "Brand Consulting →",
				description: "Align your identity with your core values and market positioning to establish a distinct, memorable brand voice."
			},
			{
				title: "Logo Design →",
				description: "Develop timeless, minimalist logos and visual marks that instantly communicate your brand's essence."
			},
			{
				title: "Industrial & Product Design →",
				description: "Engineer physical and digital products guided by exceptional aesthetics and user-centric functionality."
			},
			{
				title: "Graphic Design →",
				description: "Create compelling marketing collateral, brand assets, and content that maintain absolute visual consistency."
			}
		]
	},
	{
		title: "Technology",
		description:
			"Building robust, scalable digital infrastructures, web applications, and intelligent systems engineered for the modern enterprise.",
		image:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
		imageAlt: "Technology circuit board and engineering infrastructure",
		items: [
			{
				title: "Web Development →",
				description: "Build incredibly fast, responsive, and secure custom web platforms using modern React and Node architectures."
			},
			{
				title: "E-Commerce →",
				description: "Deploy robust, high-conversion headless commerce stores to manage high-volume global transactions effortlessly."
			},
			{
				title: "MVP Development →",
				description: "Rapidly prototype, build, and launch minimum viable products built explicitly to test and scale new ideas."
			},
			{
				title: "Mobile App Development →",
				description: "Develop native and cross-platform mobile experiences that users love, optimized for iOS and Android ecosystems."
			},
			{
				title: "AI & Machine Learning →",
				description: "Integrate predictive algorithms and custom AI capabilities to automate workflows and uncover new data insights."
			},
			{
				title: "Email Services →",
				description: "Deploy and manage secure, enterprise-ready email environments tailored strictly to your operational compliance needs."
			},
			{
				title: "Cloud Services →",
				description: "Architect ultra-resilient AWS scaling foundations and managed hosting for absolute stability during mass traffic."
			}
		]
	},
	{
		title: "Growth Marketing",
		description:
			"Data-driven strategies and automation to accelerate customer acquisition, boost loyalty, and scale brand visibility exponentially.",
		image:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
		imageAlt: "Marketing growth analytics displayed on screens",
		items: [
			{
				title: "Search Engine Optimisation (SEO, GEO & AEO) →",
				description: "Achieve organic dominance through technical search engine, global entity, and AI answer engine optimization."
			},
			{
				title: "Social Media Marketing →",
				description: "Engineer algorithmic growth programs designed to turn your social networks into formidable customer acquisition funnels."
			},
			{
				title: "Performance Marketing →",
				description: "Execute highly targeted, data-backed paid advertising campaigns capable of scaling ROAS with absolute precision."
			},
			{
				title: "Marketing Automation →",
				description: "Implement complex behavioral automation systems to guide prospects through lifecycle marketing funnels seamlessly."
			}
		]
	},
	{
		title: "AI Consultation",
		description:
			"Empowering teams and executives with bespoke AI strategies, process automation, and operational intelligence.",
		image:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
		imageAlt: "AI consultation dashboard and automation workflows",
		items: [
			{
				title: "Academic Training →",
				description: "Provide rigorous, hands-on syllabus training for enterprise teams to fully understand and safely leverage AI tools."
			},
			{
				title: "C-Suite Strategy →",
				description: "Partner with executives to conceptualize high-level, business-critical AI integration architectures for massive scaling."
			},
			{
				title: "Automation →",
				description: "Develop smart bot pipelines and agentic automation workflows that eliminate tedious manual administration forever."
			},
			{
				title: "Operations Optimisation →",
				description: "Analyze and overhaul legacy business operations by deploying machine intelligence to discover new operational efficiencies."
			}
		]
	}
];

function OfferAccordion({ items }: { items: OfferAccordionItem[] }) {
	return (
		<div className="mt-8">
			{items.map((item, index) => (
				<details
					key={item.title}
					className={`group border-t border-[var(--color-silver)] ${index === items.length - 1 ? "border-b" : ""}`}
				>
					<summary className="flex cursor-pointer list-none items-center justify-between py-4 text-[var(--color-charcoal)] [&::-webkit-details-marker]:hidden">
						<span className="text-[16px] font-light">{item.title}</span>
						<span className="ml-4 text-xl leading-none text-[var(--color-navy)] group-open:hidden">+</span>
						<span className="ml-4 hidden text-xl leading-none text-[var(--color-navy)] group-open:inline">-</span>
					</summary>
					<p className="pb-4 pr-12 text-[15px] leading-relaxed text-[var(--color-silver)]">{item.description}</p>
				</details>
			))}
		</div>
	);
}

function MobileOfferSectionRow({ section, reverse }: { section: OfferSection; reverse: boolean }) {
	return (
		<section className="py-20 md:py-24 relative isolate border-t border-[var(--color-silver)]/10 first:border-0 md:hidden">
			<div className="relative mx-auto flex flex-col gap-10">
				<div>
					<h2 className="text-[clamp(2.3rem,4.2vw,3rem)] font-light leading-[1.08] tracking-[-0.04em] text-[var(--color-navy)]">
						{section.title}
					</h2>
					<p className="mt-5 max-w-[560px] text-[16px] leading-relaxed text-[var(--color-silver)]">{section.description}</p>
					<Link
						href="/contact"
						className="mt-6 inline-flex text-[14px] font-light text-[var(--color-navy)] transition-colors hover:text-[var(--color-charcoal)]"
					>
						Explore now →
					</Link>

					<OfferAccordion items={section.items} />
				</div>

				<div
					className="mt-8 transition-transform hover:scale-105 duration-500 z-10 focus:outline-none"
					style={{ transform: reverse ? 'rotate(-7deg)' : 'rotate(7deg)' }}
				>
					<img
						src={section.image}
						alt={section.imageAlt}
						className="aspect-[4/3] w-full max-w-sm rounded-[12px] object-cover shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-[6px] border-white"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
}

function DesktopPinnedOfferSections() {
	const containerRef = useRef<HTMLDivElement>(null);
	const textRefs = useRef<(HTMLDivElement | null)[]>([]);
	const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

	const handlePanelWheel = (event: React.WheelEvent<HTMLDivElement>) => {
		const panel = event.currentTarget;
		const atTop = panel.scrollTop <= 0;
		const atBottom = panel.scrollTop + panel.clientHeight >= panel.scrollHeight - 1;
		const scrollingUp = event.deltaY < 0;
		const scrollingDown = event.deltaY > 0;

		// Keep wheel input scoped to this panel so parent/page scroll never chains through.
		event.stopPropagation();

		if ((scrollingUp && atTop) || (scrollingDown && atBottom)) {
			event.preventDefault();
		}
	};

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const ctx = gsap.context(() => {
			gsap.set(textRefs.current, { clearProps: "all" });
			gsap.set(imageRefs.current, { clearProps: "all" });

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					start: "top top",
					end: `+=${offerSections.length * 100}%`,
					pin: true,
					scrub: 1,
				},
			});

			gsap.set(textRefs.current[0], { opacity: 1, y: 0 });
			gsap.set(imageRefs.current[0], { opacity: 1, y: 0, rotation: 7 });

			for (let i = 1; i < offerSections.length; i++) {
				gsap.set(textRefs.current[i], { opacity: 0, y: 50 });
				gsap.set(imageRefs.current[i], { opacity: 0, y: 50, rotation: 7 });
			}

			// Add a slight pause at the very beginning
			tl.to({}, { duration: 0.5 });

			for (let i = 0; i < offerSections.length - 1; i++) {
				tl.to(textRefs.current[i], { opacity: 0, y: -50, duration: 1, filter: "blur(5px)" }, `transition${i}`);
				tl.to(imageRefs.current[i], { opacity: 0, y: -50, duration: 1, scale: 0.9, filter: "blur(5px)" }, `transition${i}`);

				tl.to(textRefs.current[i + 1], { opacity: 1, y: 0, duration: 1, filter: "blur(0px)" }, `transition${i}`);
				tl.to(imageRefs.current[i + 1], { opacity: 1, y: 0, duration: 1, scale: 1, filter: "blur(0px)" }, `transition${i}`);

				// Hold each section so it doesn't zip past
				tl.to({}, { duration: 0.8 });
			}
		}, container);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={containerRef} className="hidden md:flex relative h-screen w-full items-center justify-center overflow-hidden bg-[var(--color-offwhite)] pt-16">
			<div className="relative mx-auto w-full max-w-7xl px-12 h-[80%] flex items-center shadow-sm rounded-3xl bg-white border border-[var(--color-silver)]/10">
				{offerSections.map((section, index) => (
					<div key={section.title} className="absolute inset-0 px-12 py-16 flex items-center justify-between pointer-events-none">
						<div
							ref={el => { textRefs.current[index] = el; }}
							onWheel={handlePanelWheel}
							className="max-w-[55%] lg:max-w-[60%] flex flex-col justify-start h-full pointer-events-auto overflow-y-auto overscroll-contain [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
						>
								<h2 className="text-[clamp(2.3rem,4.2vw,3rem)] font-light leading-[1.08] tracking-[-0.04em] text-[var(--color-navy)] mt-8">
								{section.title}
							</h2>
							<p className="mt-5 max-w-[560px] text-[16px] leading-relaxed text-[var(--color-silver)]">{section.description}</p>
							<Link
								href="/contact"
								className="mt-6 inline-flex text-[14px] font-semibold text-[var(--color-navy)] transition-colors hover:text-[var(--color-charcoal)] mb-8"
							>
								Explore now →
							</Link>
							<div className="pb-16 flex-1">
								<OfferAccordion items={section.items} />
							</div>
						</div>

						<div
							ref={el => { imageRefs.current[index] = el; }}
							className="absolute right-6 lg:right-12 top-[10%] lg:top-[15%] pointer-events-auto"
							style={{ transform: 'rotate(7deg)' }}
						>
							<img
								src={section.image}
								alt={section.imageAlt}
								className="aspect-[4/3] w-[320px] lg:w-[420px] rounded-[16px] object-cover shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-[8px] border-white transition-transform hover:scale-105 duration-500"
								loading="lazy"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default function ServicesPageContent() {
	return (
		<div className="text-[var(--color-charcoal)]">
			<section className="relative isolate overflow-hidden bg-[var(--color-navy)] px-6 pt-44 pb-24 text-[var(--color-offwhite)] md:px-12 md:pt-56 md:pb-28">
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
					<svg
						viewBox="0 0 1440 860"
						className="h-full w-full max-w-[1400px] opacity-30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden
					>
						<path
							d="M240 760 V360 C240 190 390 90 720 90 C1050 90 1200 190 1200 360 V760"
							stroke="currentColor"
							className="text-[var(--color-silver)]/35"
							strokeWidth="1"
							vectorEffect="non-scaling-stroke"
						/>
						<path
							d="M420 760 V350 C420 250 520 170 720 170 C920 170 1020 250 1020 350 V760"
							stroke="currentColor"
							className="text-[var(--color-silver)]/20"
							strokeWidth="1"
							vectorEffect="non-scaling-stroke"
						/>
					</svg>
				</div>

				<div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
					<p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-silver)]/55">Services</p>
					<h1 className="mx-auto max-w-4xl text-[clamp(3.2rem,7vw,3.8rem)] font-light tracking-[-0.05em] !text-white">
						What <span className="bg-[var(--color-blue)] px-2 py-1 text-[var(--color-offwhite)]">We Offer</span>
					</h1>
					<p className="mx-auto mt-5 max-w-[700px] text-[18px] leading-relaxed text-[var(--color-silver)]/85">
						Integrated digital solutions that elevate customer experience and accelerate brand growth.
					</p>
				</div>
			</section>

			{/* Mobile stacked mapping - hidden on medium+ devices */}
			<section className="mb-24 mt-24 px-4 sm:px-6 md:hidden">
				<div className="mx-auto max-w-7xl">
					{offerSections.map((section, index) => (
						<MobileOfferSectionRow
							key={section.title}
							section={section}
							reverse={index % 2 === 1}
						/>
					))}
				</div>
			</section>

			{/* Desktop pinned scrolling sequence - hidden on small devices */}
			<div className="mt-24 mb-24">
				<DesktopPinnedOfferSections />
			</div>

			<section className="px-4 py-20 sm:px-6 md:px-12">
				<div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
					<div>
						<h2 className="text-[clamp(2.3rem,4.6vw,2.8rem)] font-light leading-[1.1] tracking-[-0.04em] text-[var(--color-navy)]">
							Start Your Digital Transformation!
						</h2>
						<p className="mt-5 max-w-[560px] text-[16px] leading-relaxed text-[var(--color-silver)]">
							Connect with our experts and reimagine your business for the digital age.
						</p>
						<Link
							href="/contact"
							className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--color-blue)] px-6 py-3 text-sm font-semibold text-[var(--color-offwhite)] transition-colors hover:bg-[var(--color-blue-hover)]"
						>
							Request a quote →
						</Link>
					</div>

					<div className="relative min-h-[320px] overflow-hidden rounded-[8px] border border-[var(--color-silver)]/30 bg-white">
						<div className="absolute inset-0 bg-white" />
						<div className="absolute left-8 top-8 h-24 w-40 rounded-lg border border-[var(--color-blue)]/15 bg-white/90" />
						<div className="absolute left-14 top-14 h-[2px] w-16 bg-[var(--color-blue)]/40" />
						<div className="absolute left-14 top-20 h-[2px] w-10 bg-[var(--color-blue)]/25" />

						<div className="absolute right-12 top-16 h-36 w-44 rounded-xl border border-[var(--color-blue)]/15 bg-white/90" />
						<div className="absolute right-24 top-24 h-20 w-20 rounded-full border border-[var(--color-blue)]/15 bg-[var(--color-offwhite)]" />

						<div className="absolute left-20 bottom-16 h-20 w-64 rounded-2xl border border-[var(--color-blue)]/15 bg-white/90" />
						<div className="absolute left-24 bottom-26 h-[2px] w-32 bg-[var(--color-blue)]/35" />
						<div className="absolute left-24 bottom-20 h-[2px] w-20 bg-[var(--color-blue)]/25" />
					</div>
				</div>
			</section>
		</div>
	);
}
