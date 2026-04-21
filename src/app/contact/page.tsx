import type { Metadata } from "next";
import ContactPageContent from "../../components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | Majlis Studio",
  description: "Get in touch with Majlis Studio to discuss your next project.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
