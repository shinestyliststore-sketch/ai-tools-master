import type { Category, Tool, Article } from "@/lib/types";
import {
  PenTool,
  Paintbrush,
  Globe,
  Megaphone,
  CodeXml,
  Sun,
} from "lucide-react";

export const categories: Category[] = [
  {
    id: "writing",
    name: "AI Writing",
    icon: PenTool,
    imageId: "category-writing",
  },
  {
    id: "design",
    name: "AI Design",
    icon: Paintbrush,
    imageId: "category-design",
  },
  {
    id: "web",
    name: "Web Build",
    icon: Globe,
    imageId: "category-web",
  },
  {
    id: "marketing",
    name: "Marketing",
    icon: Megaphone,
    imageId: "category-marketing",
  },
  {
    id: "dev",
    name: "Developer",
    icon: CodeXml,
    imageId: "category-dev",
  },
  {
    id: "daily",
    name: "Daily Use",
    icon: Sun,
    imageId: "category-daily",
  },
];

export const tools: Tool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "AI tool for writing, summarizing, and generating content.",
    link: "https://chat.openai.com/",
    category: "writing",
    imageId: "tool-chatgpt",
  },
  {
    id: "dalle",
    name: "DALL·E 3",
    description: "AI tool for generating images from text prompts.",
    link: "https://openai.com/dall-e",
    category: "design",
    imageId: "tool-dalle",
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "Generate high-quality images from textual descriptions.",
    link: "https://www.midjourney.com/",
    category: "design",
    imageId: "tool-midjourney",
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "Your AI pair programmer that suggests code in real-time.",
    link: "https://github.com/features/copilot",
    category: "dev",
    imageId: "tool-github-copilot",
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "Integrate AI power into your notes and docs.",
    link: "https://www.notion.so/product/ai",
    category: "daily",
    imageId: "tool-notion-ai",
  },
  {
    id: "canva",
    name: "Canva Magic Studio",
    description: "All the power of AI, all in one place. Create compelling content, fast.",
    link: "https://www.canva.com/magic-studio/",
    category: "design",
    imageId: "tool-canva",
  },
  {
    id: "grammarly",
    name: "Grammarly",
    description: "AI-powered writing assistant for mistake-free writing.",
    link: "https://www.grammarly.com/",
    category: "writing",
    imageId: "tool-grammarly",
  },
  {
    id: "synthesia",
    name: "Synthesia",
    description: "Create professional AI videos from text in minutes.",
    link: "https://www.synthesia.io/",
    category: "marketing",
    imageId: "tool-synthesia",
  },
  {
    id: "10web",
    name: "10Web",
    description: "AI website builder to create a professional website in minutes.",
    link: "https://10web.io/",
    category: "web",
    imageId: "tool-10web",
  },
];

export const articles: Article[] = [
  {
    id: "top-30-ai-tools",
    title: "Top 30 AI Tools in 2025",
    description:
      "Explore trending AI tools revolutionizing creativity and productivity across various industries.",
    link: "#",
    imageId: "article-1",
  },
  {
    id: "ai-in-marketing",
    title: "How AI is Reshaping the Marketing Landscape",
    description:
      "Discover how artificial intelligence is personalizing customer experiences and automating campaigns.",
    link: "#",
    imageId: "article-2",
  },
  {
    id: "future-of-web-dev",
    title: "The Future of Web Development is AI-Powered",
    description:
      "A deep dive into AI-driven platforms and tools that are accelerating the web creation process.",
    link: "#",
    imageId: "article-3",
  },
];
