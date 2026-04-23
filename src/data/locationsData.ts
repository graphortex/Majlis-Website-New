

// ── Location data ─────────────────────────────────────────
export type LocationEntry = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  body: string[];
  faqs: { question: string; answer: string }[];
  serviceType: string;
  serviceDescription: string;
};

export const locations: LocationEntry[] = [
  {
    slug: "adgm-startups",
    title: "AI Branding for ADGM Startups",
    h1: "AI Branding for ADGM Startups — Abu Dhabi Global Market",
    description:
      "Majlis Studio delivers AI-powered branding, web development, and marketing automation for ADGM-licensed startups and fintech ventures in Abu Dhabi.",
    body: [
      "Abu Dhabi Global Market (ADGM) is the UAE's premier international financial centre, home to hundreds of startups, fintechs, and fund managers. As an ADGM-based startup, your brand identity must communicate trust, innovation, and regulatory compliance to a global audience. Majlis Studio specialises in crafting brand strategies that resonate with investors, partners, and customers across the GCC and beyond.",
      "Our AI Transformation services are purpose-built for ADGM's fast-paced ecosystem. From deploying AI brand agents that automate content localisation in Arabic and English, to building high-performance Next.js investor portals, we help ADGM startups move from launch to scale without compromising brand consistency. Our Agent Marketplace offers pre-trained agents for fintech compliance communications, investor reporting, and social media management.",
      "Whether you are preparing for a Series A, launching a neobank, or building a blockchain platform, Majlis Studio's team in Abu Dhabi understands the regulatory nuances and cultural sensitivities unique to ADGM. We combine sovereign tech principles with cutting-edge AI to deliver autonomous brand governance — so you can focus on building your product while your brand runs itself.",
    ],
    faqs: [
      {
        question: "What branding services does Majlis Studio offer ADGM startups?",
        answer:
          "We offer full-stack branding — logo design, brand strategy, investor pitch decks, bilingual websites, AI-powered content generation, and marketing automation — all tailored for ADGM's regulatory and cultural environment.",
      },
      {
        question: "Can Majlis Studio build a bilingual website for my ADGM fintech?",
        answer:
          "Absolutely. We specialise in bilingual (English-Arabic) web development using Next.js, optimised for mobile performance, AEO, and compliance with ADGM and UAE communications standards.",
      },
    ],
    serviceType: "AI Branding & Web Development for Startups",
    serviceDescription:
      "End-to-end AI branding, web development, and marketing automation for ADGM-licensed startups and fintech companies in Abu Dhabi.",
  },
  {
    slug: "khalifa-city-industrial",
    title: "Industrial Automation Branding in Khalifa City",
    h1: "Industrial Automation Branding in Khalifa City — Abu Dhabi",
    description:
      "Majlis Studio provides industrial branding, automation solutions, and AI-driven marketing for manufacturers and logistics firms in Khalifa City, Abu Dhabi.",
    body: [
      "Khalifa City and the broader Khalifa Industrial Zone Abu Dhabi (KIZAD) corridor are the backbone of Abu Dhabi's industrial economy. Manufacturers, logistics operators, and supply-chain enterprises in this area require branding that communicates reliability, precision, and technological sophistication. Majlis Studio brings AI-first branding strategies to the industrial sector, helping Khalifa City businesses stand out in a competitive B2B landscape.",
      "Our phygital UX design approach is particularly impactful for industrial clients. We create digital twins of physical products, interactive 3D catalogues, and augmented reality brand experiences that sales teams can deploy on tablets during site visits. Combined with our marketing automation platform, your lead generation and CRM workflows become fully automated — reducing manual overhead and accelerating deal cycles.",
      "From 3D-printed branding prototypes to AI-driven supply-chain communications, Majlis Studio's Abu Dhabi team delivers integrated solutions that bridge the gap between factory floor and digital presence. Our bilingual AEO strategies ensure your brand ranks in Arabic and English search queries, targeting procurement officers and industrial buyers across the GCC.",
    ],
    faqs: [
      {
        question: "Does Majlis Studio work with industrial companies in Khalifa City?",
        answer:
          "Yes. We work with manufacturers, logistics firms, and industrial service providers in Khalifa City and KIZAD, offering branding, web development, and AI automation tailored for B2B industrial markets.",
      },
      {
        question: "What is phygital UX for industrial branding?",
        answer:
          "Phygital UX bridges physical and digital experiences — such as interactive 3D product catalogues, augmented reality demos, and digital twin integrations — enabling industrial sales teams to showcase products digitally during in-person engagements.",
      },
    ],
    serviceType: "Industrial Branding & Automation",
    serviceDescription:
      "AI-driven industrial branding, phygital UX design, and marketing automation for manufacturers in Khalifa City, Abu Dhabi.",
  },
  {
    slug: "masdar-city",
    title: "Sustainable Tech Branding for Masdar City",
    h1: "Sustainable Tech Branding for Masdar City — Abu Dhabi",
    description:
      "Majlis Studio helps cleantech and sustainability startups in Masdar City build powerful brand identities that reflect innovation, ESG values, and Abu Dhabi's green vision.",
    body: [
      "Masdar City is Abu Dhabi's flagship sustainable urban development, home to IRENA, the Masdar Institute, and a growing ecosystem of cleantech startups and renewable energy firms. Branding in this space demands a unique balance of environmental credibility, technological innovation, and alignment with the UAE's Net Zero 2050 strategy. Majlis Studio specialises in crafting brand narratives that authentically communicate sustainability without greenwashing.",
      "Our AI-powered branding services help Masdar City companies automate ESG reporting communications, generate multilingual sustainability content, and maintain consistent messaging across global markets. We use autonomous brand governance frameworks to ensure every touchpoint — from investor decks to social media — aligns with your sustainability commitments and Abu Dhabi's environmental regulations.",
      "Whether you are launching a solar technology venture, a carbon capture startup, or a green fintech platform, Majlis Studio combines sovereign tech principles with deep knowledge of Abu Dhabi's sustainability ecosystem. Our web development team builds performant, carbon-conscious websites optimised for mobile-first audiences, while our AEO strategies ensure your brand appears in AI-driven search results for cleantech and renewable energy queries.",
    ],
    faqs: [
      {
        question: "Can Majlis Studio help a cleantech startup in Masdar City with branding?",
        answer:
          "Yes. We specialise in sustainability-focused branding for Masdar City startups, including ESG-aligned messaging, green website design, and AI-powered content that avoids greenwashing while highlighting genuine environmental impact.",
      },
      {
        question: "What is autonomous brand governance for sustainability companies?",
        answer:
          "It is an AI-driven framework that monitors and enforces your brand's sustainability messaging across all channels, ensuring compliance with ESG standards and Abu Dhabi's environmental regulations without manual oversight.",
      },
    ],
    serviceType: "Sustainable Tech Branding",
    serviceDescription:
      "ESG-aligned branding, green web development, and AI content automation for cleantech companies in Masdar City, Abu Dhabi.",
  },
  {
    slug: "yas-island",
    title: "Hospitality & Entertainment Branding for Yas Island",
    h1: "Hospitality & Entertainment Branding for Yas Island — Abu Dhabi",
    description:
      "Majlis Studio creates immersive brand experiences for hospitality, entertainment, and leisure businesses on Yas Island, Abu Dhabi.",
    body: [
      "Yas Island is Abu Dhabi's premier entertainment destination, featuring Ferrari World, Yas Waterworld, Warner Bros. World, and world-class hotels. Businesses operating on Yas Island need branding that captures excitement, luxury, and unforgettable experiences. Majlis Studio brings AI-first creative strategies to hospitality and entertainment brands, helping them connect with global tourists and local audiences alike.",
      "Our phygital UX design services are transformative for Yas Island venues. We create immersive digital experiences — interactive maps, AR-enhanced visitor guides, and digital concierge services powered by AI — that enhance guest satisfaction and drive repeat visits. Combined with our marketing automation platform, your promotional campaigns, loyalty programs, and guest communications run on autopilot, freeing your team to focus on delivering exceptional in-person experiences.",
      "From boutique hotels to F&B concepts to event venues, Majlis Studio understands the competitive dynamics of Yas Island's hospitality sector. Our bilingual content strategies ensure your brand reaches Arabic- and English-speaking audiences through AI Overviews, social media, and voice search. Let us help you build a brand that is as memorable as the experiences you create.",
    ],
    faqs: [
      {
        question: "Does Majlis Studio work with hospitality brands on Yas Island?",
        answer:
          "Yes. We work with hotels, restaurants, entertainment venues, and event companies on Yas Island, delivering AI-powered branding, immersive phygital experiences, and automated marketing solutions.",
      },
      {
        question: "What are phygital experiences in hospitality?",
        answer:
          "Phygital experiences blend physical and digital interactions — such as AR-enhanced venue guides, interactive digital menus, and AI-powered concierge chatbots — creating seamless guest journeys that increase engagement and satisfaction.",
      },
    ],
    serviceType: "Hospitality & Entertainment Branding",
    serviceDescription:
      "Immersive AI branding, phygital UX, and marketing automation for hospitality and entertainment businesses on Yas Island, Abu Dhabi.",
  },
  {
    slug: "saadiyat-cultural-district",
    title: "Cultural Brand Strategy for Saadiyat District",
    h1: "Cultural Brand Strategy for Saadiyat District — Abu Dhabi",
    description:
      "Majlis Studio develops culturally nuanced brand strategies for museums, galleries, and cultural institutions in Saadiyat Island's Cultural District, Abu Dhabi.",
    body: [
      "Saadiyat Island's Cultural District is home to the Louvre Abu Dhabi, the upcoming Guggenheim Abu Dhabi, and the Zayed National Museum — positioning it as one of the world's most significant cultural destinations. Organisations operating in this district require branding that honours cultural heritage while embracing contemporary innovation. Majlis Studio bridges this divide with AI-powered brand strategies rooted in cultural intelligence.",
      "Our bilingual AEO strategy is especially critical for Saadiyat's cultural institutions. We optimise your brand presence for Arabic and English AI Overviews, ensuring that when travellers, researchers, and art enthusiasts ask AI assistants about Abu Dhabi's cultural offerings, your institution appears prominently. Our content team crafts culturally sensitive, multilingual narratives that resonate with both local Emirati audiences and international visitors.",
      "From exhibition branding to digital archive experiences to membership program automation, Majlis Studio's Abu Dhabi team understands the intersection of art, culture, and technology. We create immersive digital experiences that extend the gallery beyond physical walls — including virtual tours, interactive timelines, and AI-curated content recommendations that keep audiences engaged long after their visit.",
    ],
    faqs: [
      {
        question: "Can Majlis Studio help cultural institutions on Saadiyat Island with branding?",
        answer:
          "Yes. We work with museums, galleries, and cultural organisations on Saadiyat Island, delivering culturally nuanced brand strategies, bilingual digital experiences, and AI-powered audience engagement solutions.",
      },
      {
        question: "What is bilingual AEO for cultural institutions?",
        answer:
          "Bilingual AEO (Answer Engine Optimisation) ensures your cultural institution ranks in both Arabic and English AI search results, voice assistants, and AI Overviews — capturing audiences researching Abu Dhabi's cultural scene.",
      },
    ],
    serviceType: "Cultural Brand Strategy",
    serviceDescription:
      "Culturally intelligent branding, bilingual AEO, and immersive digital experiences for Saadiyat Island cultural institutions in Abu Dhabi.",
  },
  {
    slug: "twofour54",
    title: "Media & Content Branding for twofour54",
    h1: "Media & Content Branding for twofour54 — Abu Dhabi",
    description:
      "Majlis Studio empowers media companies, content creators, and production studios at twofour54 with AI-driven branding and marketing automation in Abu Dhabi.",
    body: [
      "twofour54 is Abu Dhabi's media and entertainment hub, hosting broadcasters, production studios, gaming companies, and digital content creators. In a fast-moving media landscape, brands at twofour54 need to stay ahead of trends, produce content at scale, and reach global audiences without losing local authenticity. Majlis Studio's AI-first approach is purpose-built for this challenge.",
      "Our Agent Marketplace features specialised AI agents for content production workflows — from scriptwriting assistance and social media scheduling to automated video captioning in Arabic and English. These agents integrate seamlessly with existing production pipelines, enabling twofour54 companies to increase output while maintaining creative quality. Combined with our marketing automation services, your distribution and audience engagement strategies operate autonomously across multiple platforms.",
      "Whether you are a broadcaster looking to rebrand, a gaming studio launching a new title, or a content creator building a personal brand, Majlis Studio's Abu Dhabi team delivers end-to-end solutions. Our phygital UX capabilities extend to AR filters, interactive show companion apps, and immersive brand activations — helping twofour54 companies create experiences that transcend traditional screens.",
    ],
    faqs: [
      {
        question: "Does Majlis Studio work with media companies at twofour54?",
        answer:
          "Yes. We serve broadcasters, production studios, gaming companies, and digital creators at twofour54 with AI-powered branding, content automation, and marketing solutions tailored for Abu Dhabi's media ecosystem.",
      },
      {
        question: "Can AI agents help with content production at twofour54?",
        answer:
          "Absolutely. Our Agent Marketplace includes AI agents for scriptwriting, social media management, bilingual captioning, and audience analytics — designed to integrate with existing media production workflows.",
      },
    ],
    serviceType: "Media & Content Branding",
    serviceDescription:
      "AI-driven media branding, content automation, and marketing solutions for production companies and creators at twofour54, Abu Dhabi.",
  },
  {
    slug: "kizad",
    title: "Industrial & Logistics Branding for KIZAD",
    h1: "Industrial & Logistics Branding for KIZAD — Abu Dhabi",
    description:
      "Majlis Studio provides AI-powered industrial branding and B2B marketing automation for logistics, manufacturing, and trade companies in KIZAD, Abu Dhabi.",
    body: [
      "Khalifa Industrial Zone Abu Dhabi (KIZAD) is one of the largest industrial zones in the Middle East, spanning over 410 square kilometres and serving as a critical trade corridor connecting Abu Dhabi to global markets. Companies operating in KIZAD — from heavy manufacturers to logistics operators to food processing plants — need branding that communicates scale, reliability, and operational excellence to B2B buyers and government procurement agencies.",
      "Majlis Studio's AI-first branding approach transforms how KIZAD companies present themselves. Our AI agents automate B2G (Business-to-Government) communications, generate compliance-ready marketing materials, and manage multilingual content across trade platforms. We understand that industrial branding in Abu Dhabi requires a different tone than consumer branding — one that emphasises technical specifications, safety certifications, and supply-chain reliability.",
      "Our phygital UX services enable KIZAD companies to create digital twins of their facilities, interactive logistics dashboards for clients, and AR-enhanced safety training materials. Combined with our bilingual AEO strategy, your brand reaches procurement officers and industrial buyers searching in Arabic and English — positioning your KIZAD operation as a trusted, technology-forward partner in Abu Dhabi's industrial ecosystem.",
    ],
    faqs: [
      {
        question: "Can Majlis Studio help KIZAD companies with B2B branding?",
        answer:
          "Yes. We specialise in B2B industrial branding for KIZAD companies, including facility digital twins, procurement-focused marketing, multilingual content automation, and B2G communication strategies.",
      },
      {
        question: "What is B2G brand governance for KIZAD?",
        answer:
          "B2G brand governance ensures your company's communications with government agencies and procurement bodies meet Abu Dhabi's regulatory standards. Our AI systems automate compliance checks and maintain consistent messaging across all government-facing touchpoints.",
      },
    ],
    serviceType: "Industrial & Logistics Branding",
    serviceDescription:
      "AI-powered B2B industrial branding, logistics marketing automation, and B2G communications for KIZAD companies in Abu Dhabi.",
  },
];
