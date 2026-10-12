import type { Metadata } from "next";
import Kontakt from "../pages/Kontakt";
import { generatePageMetadata } from "../utils/seoMetadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Kontakt",
  description: "Kontaktieren Sie das Uenal Sachverständigenbüro für eine persönliche Beratung oder Anfrage zu Immobilienbewertungen und Gutachten.",
  path: "/kontakt",
});

export default function Page() {
  return <Kontakt />;
}


