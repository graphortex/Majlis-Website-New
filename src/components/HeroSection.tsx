"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const heroContentRef = useRef<HTMLDivElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isMuted, setIsMuted] = useState(true);

	useEffect(() => {
		const section = sectionRef.current;
		const heroContent = heroContentRef.current;
		const overlay = overlayRef.current;
		if (!section || !heroContent || !overlay) return;

		const ctx = gsap.context(() => {
			// Parallax wipe: hero image stays, overlay rises from bottom
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: "top top",
					end: "bottom top",
					scrub: 1,
					pin: false,
				},
			});

			tl.to(
				heroContent,
				{
					y: -80,
					opacity: 0,
					ease: "none",
				},
				0
			);

			tl.fromTo(
				overlay,
				{ y: "100%" },
				{ y: "0%", ease: "none" },
				0
			);
		}, section);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			id="hero"
			className="relative h-[100vh] overflow-hidden bg-[var(--color-navy)]"
		>
			{/* Background video */}
			<div className="absolute inset-0">
				<video
					ref={videoRef}
					src="/hero-video/proud_of_uae_compressed.mp4"
					autoPlay
					loop
					muted={isMuted}
					playsInline
					className="h-full w-full object-cover"
				/>
				{/* Dark gradient overlay for readability */}
				<div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/80 via-[var(--color-navy)]/30 to-[var(--color-navy)]/20" />
				<div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)]/50 via-transparent to-transparent" />
			</div>

			{/* Hero content */}
			<div
				ref={heroContentRef}
				className="relative z-10 flex h-full flex-col justify-end px-6 pb-14 sm:px-10 lg:px-16"
			>
				{/* Top-left logo for desktop */}
				<div className="absolute top-6 left-6 sm:top-10 sm:left-10 lg:top-8 lg:left-12 xl:top-10 xl:left-16 hidden md:block">
					<Image
						src="/logo/majlis-logo-new.png"
						alt="Majlis Studios"
						width={350}
						height={120}
						className="h-10 lg:h-14 w-auto object-contain"
						priority
					/>
				</div>

				{/* Bottom content wrapper */}
				<div className="flex w-full items-end justify-between gap-8">
					{/* Bottom-left headline and CTA */}
					<div className="max-w-[28rem] pb-1 text-white sm:max-w-[34rem] lg:max-w-[38rem] translate-x-2 -translate-y-2 sm:translate-x-4 sm:-translate-y-4">
						<h1 className="!text-white !font-light text-[clamp(2.4rem,6vw,5.75rem)] leading-[0.92] tracking-[-0.06em]">
							Built here.
							<br />
							Proud of it.
						</h1>

						<Link
							href="/case-studies"
							className="mt-5 inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-medium !text-white backdrop-blur-md transition-colors hover:bg-white/18"
						>
							See our work →
						</Link>
					</div>

					{/* Bottom-right Sound Toggle */}
					<button
						onClick={() => setIsMuted(!isMuted)}
						className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20 mb-2 sm:mb-4 lg:mb-6"
						aria-label={isMuted ? "Unmute video" : "Mute video"}
					>
						{isMuted ? (
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
								<line x1="23" x2="17" y1="9" y2="15" />
								<line x1="17" x2="23" y1="9" y2="15" />
							</svg>
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
								<path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
								<path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
							</svg>
						)}
					</button>
				</div>
			</div>

			{/* Navy overlay that wipes up on scroll */}
			<div
				ref={overlayRef}
				className="absolute inset-0 z-20 bg-[var(--color-navy)]"
				style={{ transform: "translateY(100%)" }}
			/>
		</section>
	);
}