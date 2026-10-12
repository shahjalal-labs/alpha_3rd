"use client";

/**
 * /impressum — Inhalte ausschließlich aus src/config/legalContent.ts.
 */

import LegalDocument from "../components/legal/LegalDocument";
import { impressumContent } from "@/config/legalContent";

export default function Impressum() {
  return <LegalDocument content={impressumContent} />;
}
