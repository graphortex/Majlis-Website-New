import type { Metadata } from "next";
import ServicesPageContent from "../../components/ServicesPageContent";

export const metadata: Metadata = {
  title: "What We Offer | Majlis Studio",
  description: "Integrated digital solutions that elevate customer experience and accelerate brand growth.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}