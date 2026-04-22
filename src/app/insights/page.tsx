import type { Metadata } from "next";
import { InsightsPageContent } from "../../components/InsightsSection";

export const metadata: Metadata = {
  title: "Blog | Majlis Studio",
  description: "Editorial blog posts, news, and events from Majlis Studio.",
};

export default function InsightsPage() {
  return <InsightsPageContent />;
}
