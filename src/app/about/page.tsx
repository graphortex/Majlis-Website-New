import type { Metadata } from "next";
import AboutPageContent from "../../components/AboutPageContent";

export const metadata: Metadata = {
  title: "About | Majlis Studio",
  description: "Learn about Majlis Studio, our story, values, and approach.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
