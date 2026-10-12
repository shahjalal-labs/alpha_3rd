import type { Metadata } from "next";
import Widerrufsbelehrung from "../pages/Widerrufsbelehrung";
import { widerrufsbelehrungContent } from "@/config/legalContent";
import { generatePageMetadata } from "../utils/seoMetadata";

export const metadata: Metadata = generatePageMetadata({
  title: widerrufsbelehrungContent.metaTitle,
  description: widerrufsbelehrungContent.metaDescription,
  path: widerrufsbelehrungContent.path,
});

export default function Page() {
  return <Widerrufsbelehrung />;
}
