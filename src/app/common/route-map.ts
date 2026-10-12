const cities = [
  "Apen",
  "Bad Zwischenahn",
  "Bockhorn",
  "Brake",
  "Butjadingen",
  "Edewecht",
  "Elsfleth",
  "Großenkneten",
  "Hatten",
  "Hude",
  "Jever",
  "Nordenham",
  "Oldenburg",
  "Ovelgönne",
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

export function transliterate(str: string): string {
  return str
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/\s+/g, "-");
}

const routePropsMap: Record<string, { keyword: string; city: string }> = {};

keywords.forEach((keyword) => {
  cities.forEach((city) => {
    const slug = `${transliterate(keyword)}-${transliterate(city)}`;
    routePropsMap[slug] = { keyword, city };
  });
});

export function getRouteProps(slug: string) {
  const normSlug = transliterate(decodeURIComponent(slug));
  return routePropsMap[normSlug] || null;
}
