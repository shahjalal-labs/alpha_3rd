"use client";

import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

const cities = [
  "Apen",
  "Bad Zwischenahn",
  "Bockhorn",
  "Brake",
  "Butjadingen",
  "Edewecht",
  "Elsfleth",
  "Grossenkneten",
  "Hatten",
  "Hude",
  "Jever",
  "Nordenham",
  "Oldenburg",
  "Ovelgoenne",
  "Rastede",
  "Sande",
  "Schortens",
  "Stadland",
  "Varel",
  "Wangerland",
  "Wangerooge",
  "Wardenburg",
  "Westerstede",
  "Wiefelstede",
  "Wilhelmshaven",
  "Zetel",
];

const mainServices = [
  { name: "Verkehrswertgutachten", slug: "verkehrswertgutachten" },
  { name: "Kurzgutachten", slug: "kurzgutachten-immobilien" },
  { name: "Immobilienbewertung", slug: "immobilienbewertung" },
  { name: "Hausbewertung", slug: "hausbewertung" },
  { name: "Grundstücksbewertung", slug: "grundstuecksbewertung" },
  { name: "Wohnungsbewertung", slug: "wohnungsbewertung" },
];

export default function Standorte() {
  return (
    <div className="bg-white min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0A0A0A] bg-[#0A0A0A]/10 px-3 py-1 rounded-full">
            Tätigkeitsgebiet
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-4">
            Unsere Standorte &amp; Regionalbereiche
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immobilienwertermittlung nach ImmoWertV im Nordwesten Deutschlands: {siteConfig.taetigkeitsgebiet}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) => (
            <div key={city} className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <h2 className="text-xl font-bold text-black mb-3">{city}</h2>
              <p className="text-xs text-gray-600 mb-4">
                Gutachten &amp; Wertermittlung für Wohn-, Gewerbeimmobilien und Grundstücke in {city}.
              </p>
              <div className="space-y-1.5 text-sm">
                {mainServices.map((service) => (
                  <Link
                    key={`${service.slug}-${city}`}
                    href={`/${service.slug}-${city.toLowerCase()}`}
                    className="block text-gray-700 hover:text-[#0A0A0A] hover:underline transition-colors"
                  >
                    {service.name} {city} →
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
