import type { Metadata } from "next";
import UeberUns from "../pages/UeberUns";
import { generatePageMetadata } from "../utils/seoMetadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Über uns",
  description: "Erfahren Sie mehr über das Uenal Sachverständigenbüro: Qualifizierter Sachverständiger für Immobilienwertermittlung (DGuSV) im Nordwesten und bundesweit.",
  path: "/ueber-uns",
});

export default function Page() {
  return <UeberUns />;
}


