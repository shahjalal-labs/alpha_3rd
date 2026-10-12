"use client";

/**
 * /datenschutz — Inhalte ausschließlich aus src/config/legalContent.ts.
 *
 * Das Widerspruchsrecht nach Art. 21 DSGVO wird dort als Callout mit
 * variant: "legal" gepflegt und deshalb als abgesetzter Kasten mit Rahmen
 * dargestellt (Pflicht nach Art. 21 Abs. 4 DSGVO).
 */

import LegalDocument from "../components/legal/LegalDocument";
import { datenschutzContent } from "@/config/legalContent";

export default function Datenschutz() {
  return <LegalDocument content={datenschutzContent} />;
}
