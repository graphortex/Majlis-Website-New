export type ServiceCategory = {
  id: string;
  title: string;
  summary: string;
  items: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "branding",
    title: "Branding",
    summary:
      "Crafting iconic visual identities and product designs that resonate with your audience.",
    items: [
      "Brand Consulting",
      "Logo Design",
      "Industrial & Product Design",
      "Graphic Design",
    ],
  },
  {
    id: "technology",
    title: "Technology",
    summary:
      "Building robust, scalable digital infrastructures, web applications, and intelligent systems.",
    items: [
      "Web Development",
      "E-Commerce",
      "MVP Development",
      "Mobile App Development",
      "AI & Machine Learning",
      "Email Services",
      "Cloud Services",
    ],
  },
  {
    id: "growth-marketing",
    title: "Growth Marketing",
    summary:
      "Data-driven strategies and automation to accelerate customer acquisition and brand visibility.",
    items: [
      "Search Engine Optimisation (SEO, GEO & AEO)",
      "Social Media Marketing",
      "Performance Marketing",
      "Marketing Automation",
    ],
  },
  {
    id: "ai-consultation",
    title: "AI Consultation",
    summary:
      "Empowering teams and executives with AI strategies, automation, and operational intelligence.",
    items: [
      "Academic Training",
      "C-Suite Strategy",
      "Automation",
      "Operations Optimisation",
    ],
  },
];
