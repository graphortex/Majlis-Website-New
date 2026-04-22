// import { CaseStudiesSection } from "../components/CaseStudiesSection";
import HeroSection from "../components/HeroSection";
import ScrollHighlightSection from "../components/ScrollHighlightSection";
import ServiceCardsSection from "../components/ServiceCardsSection";
import SocialProofSection from "../components/SocialProofSection";
import MetricsTrackRecordSection from "../components/MetricsTrackRecordSection";
import ClientTestimonialsSection from "../components/ClientTestimonialsSection";
import { InsightsSection } from "../components/InsightsSection";
import WhatWeDoSection from "../components/WhatWeDoSection";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col overflow-x-hidden bg-[var(--color-offwhite)] font-sans">
			{/* Section 1 — Full-screen hero with parallax wipe */}
			<HeroSection />

			{/* Section 2 — Scroll-triggered word-by-word text highlight */}
			<ScrollHighlightSection />

			{/* Section 3 — Service cards */}
			<ServiceCardsSection />

			{/* Existing sections below */}
			{/* <CaseStudiesSection /> */}

			<WhatWeDoSection />

			<SocialProofSection />

			<MetricsTrackRecordSection />

			<ClientTestimonialsSection />

			<InsightsSection />
		</div>
	);
}
