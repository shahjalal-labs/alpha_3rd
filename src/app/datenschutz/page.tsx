import type { Metadata } from "next";
import Datenschutz from "../pages/Datenschutz";
import { datenschutzContent } from "@/config/legalContent";
import { generatePageMetadata } from "../utils/seoMetadata";

// Server Component, damit `metadata` greift und die Seite nicht länger die
// site-weiten Standardwerte für Title und Description erbt.
export const metadata: Metadata = generatePageMetadata({
  title: datenschutzContent.metaTitle,
  description: datenschutzContent.metaDescription,
  path: datenschutzContent.path,
});

export default function Page() {
  return <Datenschutz />;
}
