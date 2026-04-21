import type { Metadata } from "next";
import { CaseStudiesPageContent } from "../../components/CaseStudiesSection";

export const metadata: Metadata = {
  title: "Case Studies | Majlis Studios",
  description: "A minimalist portfolio of selected case studies from Majlis Studios.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesPageContent />;
}
