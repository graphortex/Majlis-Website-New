import type { Metadata } from "next";
import AboutPageContent from "../../components/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us | Majlis Studio — Dubai's Creative & Digital Agency",
  description: "Majlis Studio is a Dubai-based digital agency blending creative strategy with cutting-edge technology. Learn who we are, what we stand for, and why 80+ brands trust us to grow.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
