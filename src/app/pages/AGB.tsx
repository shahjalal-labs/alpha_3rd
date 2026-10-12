"use client";

/**
 * /agb — Inhalte ausschließlich aus src/config/legalContent.ts.
 *
 * Kein Verweis auf die Online-Streitbeilegungsplattform der Europäischen
 * Kommission. § 13 enthält allein die Erklärung zur Nichtteilnahme nach
 * § 36 Abs. 1 Nr. 1 VSBG.
 */

import LegalDocument from "../components/legal/LegalDocument";
import { agbContent } from "@/config/legalContent";

export default function AGB() {
  return <LegalDocument content={agbContent} />;
}
