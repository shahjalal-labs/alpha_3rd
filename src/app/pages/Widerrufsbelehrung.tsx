"use client";

/**
 * /widerrufsbelehrung — Inhalte ausschließlich aus src/config/legalContent.ts.
 *
 * Derzeit ist dort die gesetzliche Musterbelehrung hinterlegt. Der endgültige,
 * mandantenseitig freigegebene Text wird separat geliefert; siehe
 * `pendingDisclosures.widerrufsbelehrungFinalised` in der Konfiguration.
 */

import LegalDocument from "../components/legal/LegalDocument";
import { widerrufsbelehrungContent } from "@/config/legalContent";

export default function Widerrufsbelehrung() {
  return <LegalDocument content={widerrufsbelehrungContent} />;
}
