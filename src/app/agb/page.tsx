import type { Metadata } from "next";
import AGB from "../pages/AGB";
import { agbContent } from "@/config/legalContent";
import { generatePageMetadata } from "../utils/seoMetadata";

// Diese Route fehlte bisher vollständig — /agb war nicht erreichbar.
export const metadata: Metadata = generatePageMetadata({
  title: agbContent.metaTitle,
  description: agbContent.metaDescription,
  path: agbContent.path,
});

export default function Page() {
  return <AGB />;
}
