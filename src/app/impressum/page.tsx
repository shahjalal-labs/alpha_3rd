import type { Metadata } from "next";
import Impressum from "../pages/Impressum";
import { impressumContent } from "@/config/legalContent";
import { generatePageMetadata } from "../utils/seoMetadata";

// Server Component, damit `metadata` greift und die Seite nicht länger die
// site-weiten Standardwerte für Title und Description erbt.
export const metadata: Metadata = generatePageMetadata({
  title: impressumContent.metaTitle,
  description: impressumContent.metaDescription,
  path: impressumContent.path,
});

export default function Page() {
  return <Impressum />;
}
