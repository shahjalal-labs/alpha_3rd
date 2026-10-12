import type { MetadataRoute } from "next";

const cities = [
  "apen",
  "bad-zwischenahn",
  "bockhorn",
  "brake",
  "butjadingen",
  "edewecht",
  "elsfleth",
  "grossenkneten",
  "hatten",
  "hude",
  "jever",
  "nordenham",
  "oldenburg",
  "ovelgoenne",
  "rastede",
  "sande",
  "schortens",
  "stadland",
  "varel",
  "wangerland",
  "wangerooge",
  "wardenburg",
  "westerstede",
  "wiefelstede",
  "wilhelmshaven",
  "zetel",
];

const keywords = [
  "immobilienbewertung",
  "hausbewertung",
  "immobiliengutachter",
  "sachverstaendiger-immobilien",
  "immobiliensachverstaendiger",
  "verkehrswertgutachten",
  "gutachter-immobilien",
  "kurzgutachten-immobilien",
  "haus-bewerten-lassen",
  "immobilie-bewerten-lassen",
  "wertgutachten-immobilien",
  "immobiliengutachten",
  "grundstuecksbewertung",
  "wohnungsbewertung",
  "mehrfamilienhaus-bewerten",
  "gutachten-erbschaft-immobilie",
  "gutachten-scheidung-immobilie",
  "gutachten-zwangsversteigerung",
  "marktwert-immobilie-ermitteln",
  "zertifizierter-sachverstaendiger",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://uenal-gutachten.de";

  const staticPages = [
    "",
    "/leistungen",
    "/ueber-uns",
    "/standorte",
    "/kontakt",
    "/impressum",
    "/datenschutz",
    "/agb",
    "/widerrufsbelehrung",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const regionalPages = keywords.flatMap((keyword) =>
    cities.map((city) => ({
      url: `${baseUrl}/${keyword}-${city}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  );

  return [...staticPages, ...regionalPages];
}
