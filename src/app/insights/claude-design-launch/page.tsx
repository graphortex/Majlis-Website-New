import type { Metadata } from "next";
import ClaudeDesignBlogPost from "../../../components/ClaudeDesignBlogPost";

export const metadata: Metadata = {
  title: "Anthropic Launches Claude Design | Majlis Studio",
  description:
    "Anthropic's new Claude Design turns prompts into polished UI prototypes using Opus 4.7. We explore its custom design systems, Canva export, and real-world results.",
};

export default function ClaudeDesignPage() {
  return <ClaudeDesignBlogPost />;
}
