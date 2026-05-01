import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maithana Branding | Majlis Studio",
  description: "Explore the cohesive branding experience crafted for Maithana by Majlis Studio.",
};

export default function MaithanaCaseStudy() {
  return (
    <main className="fixed inset-0 z-[9999] bg-white">
      <iframe 
        src="/case-studies-assets/inner_page_assets/Maithana-Branding.pdf#toolbar=0&navpanes=0&scrollbar=0" 
        className="w-full h-full border-none block"
        title="Maithana Branding Case Study"
      />
    </main>
  );
}
