import Link from "next/link";

type ServiceCard = {
  id: string;
  title: string;
  image: string;
};

const serviceCards: ServiceCard[] = [
  {
    id: "home-service-branding",
    title: "Branding",
    image: "/Cover images/1_Branding Cover.jpg",
  },
  {
    id: "home-service-technology",
    title: "Technology",
    image: "/Cover images/1_Technology cover.jpg",
  },
  {
    id: "home-service-growth",
    title: "Growth Marketing",
    image: "/Cover images/1_Growth Marketing cover.jpg",
  },
  {
    id: "home-service-ai",
    title: "AI Consultation",
    image: "/Cover images/1_AI cover.jpg",
  },
  {
    id: "home-service-ecommerce",
    title: "Web & E-Commerce",
    image: "/Cover images/1_E-commerce cover.jpg",
  },
  {
    id: "home-service-mobile",
    title: "Mobile & App Development",
    image: "/Cover images/1_App Dev Cover.jpg",
  },
];

function ServiceVisual({ image, title }: { image: string; title: string }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />
    </div>
  );
}

function ServiceCard({ card }: { card: ServiceCard }) {
  return (
    <article className="group flex flex-col overflow-hidden border border-black/5 bg-transparent transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]">
      <ServiceVisual image={card.image} title={card.title} />
      <div className="flex flex-1 flex-col justify-start px-6 py-8 md:px-8 md:py-12 bg-[#f6f7f8]">
        <p className="max-w-[15ch] text-[18px] font-normal leading-[1.3] text-black md:text-[20px]">{card.title}</p>
      </div>
    </article>
  );
}

export default function WhatWeDoSection() {
  return (
    <section className="bg-[var(--color-offwhite)] px-4 py-16 text-[var(--color-charcoal)] sm:px-6 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 md:mb-12 text-[2.6rem] md:text-[clamp(3rem,5vw,3.5rem)] !font-light tracking-[-0.03em] md:tracking-[-0.05em] text-[#111111] md:text-[var(--color-navy)]">
          What We Do
        </h2>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((card) => (
            <ServiceCard key={card.id} card={card} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-silver)] bg-[var(--color-offwhite)] px-6 py-3 text-sm font-medium text-[var(--color-charcoal)] transition-colors hover:bg-white"
          >
            Explore What We Do →
          </Link>
        </div>
      </div>
    </section>
  );
}
