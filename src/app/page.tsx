// import { CaseStudiesSection } from "../components/CaseStudiesSection";
import HeroSection from "../components/HeroSection";
import ScrollHighlightSection from "../components/ScrollHighlightSection";
import ServiceCardsSection from "../components/ServiceCardsSection";
import SocialProofSection from "../components/SocialProofSection";
import MetricsTrackRecordSection from "../components/MetricsTrackRecordSection";
import ClientTestimonialsSection from "../components/ClientTestimonialsSection";
import { InsightsSection } from "../components/InsightsSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import JsonLd from "../components/seo/JsonLd";
import {
	organizationSchema,
	localBusinessSchema,
	webSiteSchema,
	faqPageSchema,
	serviceSchema,
} from "../lib/schemas";

const homepageFaqs = [
	{
		question: "What is Autonomous Brand Governance?",
		answer:
			"Autonomous Brand Governance is an AI-driven framework that continuously monitors, adapts, and enforces brand guidelines across every touchpoint — from social media to packaging — without manual oversight. Majlis Studio pioneered this approach for Abu Dhabi enterprises looking to maintain brand consistency at scale while reducing operational costs.",
	},
	{
		question: "How is 3D printing changing Abu Dhabi architecture?",
		answer:
			"3D printing is revolutionising Abu Dhabi's architectural landscape by enabling rapid prototyping, sustainable construction, and the creation of digital twins. From 3D-printed models to full-scale structures, this technology reduces waste, accelerates timelines, and allows architects to explore parametric designs that were previously impossible. Majlis Studio helps firms bridge the gap between physical prototypes and digital twin ecosystems.",
	},
	{
		question: "How do I hire an AI brand agent in the UAE?",
		answer:
			"You can hire an AI brand agent through Majlis Studio's Agent Marketplace. Our AI agents handle tasks like content generation, brand monitoring, SEO optimisation, and customer engagement — all tailored for UAE market regulations and bilingual Arabic-English audiences. Contact us to schedule a consultation and identify the right agents for your business needs.",
	},
	{
		question: "What is an Agent Marketplace?",
		answer:
			"An Agent Marketplace is a curated platform where businesses can discover, deploy, and manage specialised AI agents for marketing, branding, operations, and customer service. Majlis Studio's marketplace offers pre-trained agents optimised for the UAE market, with native Arabic language support and compliance with local data-sovereignty requirements.",
	},
];

const homepageServices = [
	{
		name: "AI Transformation",
		description:
			"End-to-end AI strategy, agent deployment, and intelligent automation for Abu Dhabi enterprises transitioning to AI-first operations.",
		url: "/services/hire-an-ai-brand-agent",
	},
	{
		name: "Web Development",
		description:
			"High-performance, mobile-first websites and web applications built with Next.js, React, and modern cloud infrastructure for UAE businesses.",
		url: "/services",
	},
	{
		name: "Marketing Automation",
		description:
			"Data-driven marketing automation, CRM integration, and performance marketing strategies tailored for Abu Dhabi SMEs and freezone entities.",
		url: "/services/automate-my-crm-now",
	},
	{
		name: "Phygital UX Design",
		description:
			"Bridging physical and digital experiences through immersive design — from 3D-printed brand assets to interactive digital twins for Abu Dhabi retail and hospitality.",
		url: "/services",
	},
	{
		name: "Bilingual AEO Strategy",
		description:
			"Answer Engine Optimisation for Arabic and English — ensuring your brand ranks in AI Overviews, LLM-driven search, and voice assistants across the UAE.",
		url: "/services",
	},
];

export default function Home() {
	const schemas = [
		organizationSchema(),
		localBusinessSchema(),
		webSiteSchema(),
		faqPageSchema(homepageFaqs),
		...homepageServices.map((s) => serviceSchema(s)),
	];

	return (
		<div className="flex min-h-screen flex-col overflow-x-hidden bg-[var(--color-offwhite)] font-sans">
			<JsonLd data={schemas} />

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
