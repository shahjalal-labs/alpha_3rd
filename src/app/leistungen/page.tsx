import type { Metadata } from "next";
import Leistungen from "../pages/Leistungen";
import { generatePageMetadata } from "../utils/seoMetadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Leistungen",
  description: "Verkehrswertgutachten und Kurzgutachten nach § 194 BauGB und ImmoWertV. Fundierte Immobilienbewertung für Privatpersonen, Gerichte, Rechtsanwälte und Notare.",
  path: "/leistungen",
});

export default function Page() {
  return <Leistungen />;
}


