import {
  Building,
  Eye,
  Hammer,
  Sparkles,
  Trash2,
  Users,
  Wrench,
} from "lucide-react";
import { generateSEOPage } from "../../utils/seoPageGenerator";

// Lokale Infos für jede Stadt
const cityLocalInfo: Record<string, string> = {
  Jever:
    "Als lokaler Dienstleister kennen wir Jever und die Region bestens. Ob in der historischen Altstadt, in Wohngebieten wie Moorwarfen oder in den umliegenden Ortsteilen – wir sind schnell vor Ort und bieten unseren Service im gesamten Stadtgebiet von Jever an.",
  Oldenburg:
    "Als lokaler Dienstleister kennen wir Oldenburg und die Region bestens. Ob in der Innenstadt, in Eversten, Osternburg, Kreyenbrück oder den weiteren Stadtteilen – wir sind schnell vor Ort und bieten unseren Service im gesamten Stadtgebiet von Oldenburg an.",
  Sande:
    "Als lokaler Dienstleister kennen wir Sande und die Region bestens. Ob in Neustadtgödens, Cäciliengroden oder den weiteren Ortsteilen – wir sind schnell vor Ort und bieten unseren Service im gesamten Gemeindegebiet von Sande an.",
  Schortens:
    "Als lokaler Dienstleister kennen wir Schortens und die Region bestens. Ob in Heidmühle, Accum, Grafschaft oder den weiteren Ortsteilen – wir sind schnell vor Ort und bieten unseren Service im gesamten Stadtgebiet von Schortens an.",
  Varel:
    "Als lokaler Dienstleister kennen wir Varel und die Region bestens. Ob in Altjührden, Büppel, Dangast oder den weiteren Ortsteilen am Jadebusen – wir sind schnell vor Ort und bieten unseren Service im gesamten Stadtgebiet von Varel an.",
  Wangerland:
    "Als lokaler Dienstleister kennen wir Wangerland und die Region bestens. Ob in Hooksiel, Horumersiel, Schillig, Minsen oder den weiteren Ortsteilen an der Nordseeküste – wir sind schnell vor Ort und bieten unseren Service im gesamten Gemeindegebiet von Wangerland an.",
  Westerstede:
    "Als lokaler Dienstleister kennen wir Westerstede und die Region bestens. Ob in der Innenstadt, in Ocholt, Halsbek oder den weiteren Ortsteilen der Rhododendronstadt – wir sind schnell vor Ort und bieten unseren Service im gesamten Stadtgebiet von Westerstede an.",
  Wilhelmshaven:
    "Als lokaler Dienstleister kennen wir Wilhelmshaven und die Region bestens. Ob in der Innenstadt, in Fedderwardergroden, Rüstersiel oder den weiteren Stadtteilen der Hafenstadt – wir sind schnell vor Ort und bieten unseren Service im gesamten Stadtgebiet von Wilhelmshaven an.",
  Zetel:
    "Als lokaler Dienstleister kennen wir Zetel und die Region bestens. Ob in Neuenburg, Astederfeld, Bohlenbergerfeld oder den weiteren Ortsteilen der Gemeinde – wir sind schnell vor Ort und bieten unseren Service im gesamten Gemeindegebiet von Zetel an.",
};

// Service-Definitionen
const serviceDefinitions = {
  bauendreinigung: {
    name: "Bauendreinigung",
    description: "Professionelle Bauendreinigung für abnahmebereite Objekte",
    intro1:
      "Als Spezialist für Immobilienbewertung bietet Uenal Sachverständigenbüro professionelle Bauendreinigung und Umgebung. Wir sorgen dafür, dass Ihr Neubau, Ihre Sanierung oder Ihr Umbau abnahmebereit übergeben wird.",
    intro2:
      "Unsere erfahrenen Teams kennen die Anforderungen der Bauendreinigung nach HOAI und arbeiten mit modernsten Reinigungsmethoden. Von der groben Baustellenreinigung bis zur Baufeinreinigung – wir übernehmen alle Schritte für Sie.",
    intro3:
      "Ob Bauträger, Architekt oder Privatbauherr – wir garantieren termingerechte und professionelle Bauendreinigung.",
    benefits: [
      "Professionelle Endreinigung",
      "Erfahrenes Bauendreinigungsteam",
      "Termingerechte Abwicklung",
      "Flexible Einsatzplanung",
    ],
    services: [
      "Baufeinreinigung nach HOAI",
      "Entfernung von Baustaub und Schmutz",
      "Fensterreinigung innen und außen",
      "Reinigung von Sanitäranlagen",
      "Bodenreinigung und -versiegelung",
      "Abnahmebereit übergeben",
    ],
    icon: Hammer,
  },
  grundreinigung: {
    name: "Grundreinigung",
    description: "Professionelle Grundreinigung für makellose Sauberkeit",
    intro1:
      "Als Spezialist für Immobilienbewertung bietet Uenal Sachverständigenbüro professionelle Grundreinigung und Umgebung. Eine Grundreinigung ist weitaus intensiver als die normale Unterhaltsreinigung und entfernt hartnäckige Verschmutzungen.",
    intro2:
      "Unsere geschulten Reinigungskräfte setzen spezielle Reinigungsverfahren und professionelle Reinigungsmittel ein. Von Böden über Fenster bis zu Sanitärbereichen – wir sorgen für gründliche Sauberkeit.",
    intro3:
      "Ob Wohnungen, Büros oder Gewerbeimmobilien – wir bieten maßgeschneiderte Grundreinigungslösungen für Ihre Anforderungen.",
    benefits: [
      "Intensive Tiefenreinigung",
      "Professionelle Reinigungsverfahren",
      "Erfahrenes Fachpersonal",
      "Flexible Terminplanung",
    ],
    services: [
      "Bodengrundre inigung mit Versiegelung",
      "Intensive Fensterreinigung",
      "Sanitärbereich-Tiefenreinigung",
      "Küchen-Grundreinigung",
      "Entfernung hartnäckiger Verschmutzungen",
      "Teppich- und Polsterreinigung",
    ],
    icon: Sparkles,
  },
  entruempelung: {
    name: "Entrümpelung",
    description: "Professionelle Entrümpelungsdienste für Immobilien",
    intro1:
      "Als Spezialist für Immobilienbewertung bietet Uenal Sachverständigenbüro professionelle Entrümpelungsdienste und Umgebung. Wir übernehmen die komplette Räumung von Wohnungen, Häusern, Kellern und Dachböden.",
    intro2:
      "Unser erfahrenes Team kümmert sich um die fachgerechte Entsorgung und Verwertung. Wir arbeiten zuverlässig, diskret und hinterlassen besenreine Objekte.",
    intro3:
      "Ob Wohnungsauflösung, Messie-Wohnung oder Nachlass-Entrümpelung – wir bieten den kompletten Service aus einer Hand.",
    benefits: [
      "Komplettservice Entrümpelung",
      "Fachgerechte Entsorgung",
      "Diskrete Abwicklung",
      "Besenreine Übergabe",
    ],
    services: [
      "Wohnungsauflösungen",
      "Haushaltsauflösungen",
      "Keller- und Dachbodenräumung",
      "Messie-Wohnungen",
      "Gewerbeobjekt-Räumung",
      "Nachlass-Entrümpelung",
    ],
    icon: Trash2,
  },
  objektkontrolle: {
    name: "Objektkontrolle",
    description: "Professionelle Objektkontrollen für Ihre Immobilie",
    intro1:
      "Als Spezialist für Immobilienbewertung bietet Uenal Sachverständigenbüro professionelle Objektkontrollen und Umgebung. Regelmäßige Kontrollen sichern den Wert Ihrer Immobilie und verhindern Schäden.",
    intro2:
      "Unsere geschulten Objektbetreuer führen systematische Begehungen durch und dokumentieren den Zustand. Mängel werden frühzeitig erkannt und gemeldet.",
    intro3:
      "Ob Leerstandskontrollen, Mieterwechsel oder regelmäßige Objektbegehungen – wir sorgen für professionelle Überwachung Ihrer Immobilien.",
    benefits: [
      "Regelmäßige Objektbegehungen",
      "Professionelle Dokumentation",
      "Früherkennung von Mängeln",
      "Werterhalt der Immobilie",
    ],
    services: [
      "Leerstandskontrollen",
      "Objektbegehungen",
      "Mängelerfassung und Dokumentation",
      "Prüfung der Verkehrssicherheit",
      "Kontrolle technischer Anlagen",
      "Berichterstattung an Eigentümer",
    ],
    icon: Eye,
  },
  reparaturarbeiten: {
    name: "Reparaturarbeiten",
    description: "Professionelle Reparaturarbeiten für Ihre Immobilie",
    intro1:
      "Als Spezialist für Immobilienbewertung bietet Uenal Sachverständigenbüro professionelle Reparaturarbeiten und Umgebung. Von kleinen Instandsetzungen bis zu umfangreichen Reparaturen – wir sind Ihr zuverlässiger Partner.",
    intro2:
      "Unser erfahrenes Handwerkerteam behebt Schäden schnell und fachgerecht. Wir koordinieren alle notwendigen Gewerke und sorgen für reibungslose Abläufe.",
    intro3:
      "Ob Sanitär, Elektrik, Malerarbeiten oder Bodenbeläge – wir übernehmen alle anfallenden Reparaturarbeiten für Sie.",
    benefits: [
      "Schnelle Schadensbehebung",
      "Fachgerechte Ausführung",
      "Koordination aller Gewerke",
      "Faire Preise",
    ],
    services: [
      "Sanitär-Reparaturen",
      "Elektro-Instandsetzungen",
      "Malerarbeiten",
      "Bodenreparaturen",
      "Türen und Fenster",
      "Kleinreparaturen aller Art",
    ],
    icon: Wrench,
  },
  handwerkerkoordination: {
    name: "Handwerkerkoordination",
    description: "Professionelle Koordination aller Handwerkerleistungen",
    intro1:
      "Als Spezialist für Immobilienbewertung bietet Uenal Sachverständigenbüro professionelle Handwerkerkoordination und Umgebung. Wir übernehmen die komplette Koordination, Beauftragung und Überwachung aller Handwerkerleistungen.",
    intro2:
      "Unser erfahrenes Team managt alle Gewerke, koordiniert Termine und überwacht die Qualität. Sie haben nur einen Ansprechpartner für alle Handwerksleistungen.",
    intro3:
      "Ob Instandhaltung, Modernisierung oder Reparaturen – wir koordinieren alle Handwerker effizient und zuverlässig für Sie.",
    benefits: [
      "Ein Ansprechpartner",
      "Professionelle Gewerkekoordination",
      "Terminüberwachung",
      "Qualitätskontrolle",
    ],
    services: [
      "Beauftragung von Handwerkern",
      "Terminkoordination",
      "Angebotsvergabe",
      "Bauüberwachung",
      "Abnahme von Leistungen",
      "Rechnungsprüfung",
    ],
    icon: Users,
  },
  wohnungsverwaltung: {
    name: "Wohnungsverwaltung",
    description: "Professionelle Verwaltung Ihrer Wohnimmobilien",
    intro1:
      "Als Spezialist für Immobilienbewertung bietet Uenal Sachverständigenbüro professionelle Wohnungsverwaltung und Umgebung. Wir kümmern uns um alle Aspekte der Immobilienverwaltung und entlasten Sie vollständig.",
    intro2:
      "Unser erfahrenes Verwaltungsteam übernimmt Mieterverwaltung, Nebenkostenabrechnungen und alle organisatorischen Aufgaben. Sie haben mehr Zeit für das Wesentliche.",
    intro3:
      "Ob Einzelwohnungen, Mehrfamilienhäuser oder Wohnungsportfolios – wir bieten professionelle Verwaltungsleistungen aus einer Hand.",
    benefits: [
      "Komplette Mieterverwaltung",
      "Professionelle Abrechnungen",
      "Rechtssichere Verträge",
      "Persönlicher Service",
    ],
    services: [
      "Mieterverwaltung",
      "Nebenkostenabrechnungen",
      "Vertragsmanagement",
      "Objektbetreuung",
      "Instandhaltungsmanagement",
      "Eigentümer-Reporting",
    ],
    icon: Building,
  },
};

// Generiere alle SEO-Seiten
const cities = [
  { name: "Jever", tag: "JEVER" },
  { name: "Oldenburg", tag: "OLDENBURG" },
  { name: "Sande", tag: "SANDE" },
  { name: "Schortens", tag: "SCHORTENS" },
  { name: "Varel", tag: "VAREL" },
  { name: "Wangerland", tag: "WANGERLAND" },
  { name: "Westerstede", tag: "WESTERSTEDE" },
  { name: "Wilhelmshaven", tag: "WILHELMSHAVEN" },
  { name: "Zetel", tag: "ZETEL" },
];

// Exportiere alle generierten Seiten
export const Bauendreinigung_Jever = generateSEOPage({
  city: "Jever",
  cityTag: "JEVER",
  serviceName: "Bauendreinigung",
  description:
    serviceDefinitions.bauendreinigung.description + " in Jever und Umgebung",
  intro1: serviceDefinitions.bauendreinigung.intro1,
  intro2: serviceDefinitions.bauendreinigung.intro2,
  intro3: serviceDefinitions.bauendreinigung.intro3,
  benefits: serviceDefinitions.bauendreinigung.benefits,
  services: serviceDefinitions.bauendreinigung.services,
  localInfo: cityLocalInfo.Jever,
  Icon: serviceDefinitions.bauendreinigung.icon,
});
export const Bauendreinigung_Oldenburg = generateSEOPage({
  city: "Oldenburg",
  cityTag: "OLDENBURG",
  serviceName: "Bauendreinigung",
  description:
    serviceDefinitions.bauendreinigung.description +
    " in Oldenburg und Umgebung",
  intro1: serviceDefinitions.bauendreinigung.intro1,
  intro2: serviceDefinitions.bauendreinigung.intro2,
  intro3: serviceDefinitions.bauendreinigung.intro3,
  benefits: serviceDefinitions.bauendreinigung.benefits,
  services: serviceDefinitions.bauendreinigung.services,
  localInfo: cityLocalInfo.Oldenburg,
  Icon: serviceDefinitions.bauendreinigung.icon,
});
export const Bauendreinigung_Sande = generateSEOPage({
  city: "Sande",
  cityTag: "SANDE",
  serviceName: "Bauendreinigung",
  description:
    serviceDefinitions.bauendreinigung.description + " in Sande und Umgebung",
  intro1: serviceDefinitions.bauendreinigung.intro1,
  intro2: serviceDefinitions.bauendreinigung.intro2,
  intro3: serviceDefinitions.bauendreinigung.intro3,
  benefits: serviceDefinitions.bauendreinigung.benefits,
  services: serviceDefinitions.bauendreinigung.services,
  localInfo: cityLocalInfo.Sande,
  Icon: serviceDefinitions.bauendreinigung.icon,
});
export const Bauendreinigung_Schortens = generateSEOPage({
  city: "Schortens",
  cityTag: "SCHORTENS",
  serviceName: "Bauendreinigung",
  description:
    serviceDefinitions.bauendreinigung.description +
    " in Schortens und Umgebung",
  intro1: serviceDefinitions.bauendreinigung.intro1,
  intro2: serviceDefinitions.bauendreinigung.intro2,
  intro3: serviceDefinitions.bauendreinigung.intro3,
  benefits: serviceDefinitions.bauendreinigung.benefits,
  services: serviceDefinitions.bauendreinigung.services,
  localInfo: cityLocalInfo.Schortens,
  Icon: serviceDefinitions.bauendreinigung.icon,
});
export const Bauendreinigung_Varel = generateSEOPage({
  city: "Varel",
  cityTag: "VAREL",
  serviceName: "Bauendreinigung",
  description:
    serviceDefinitions.bauendreinigung.description + " in Varel und Umgebung",
  intro1: serviceDefinitions.bauendreinigung.intro1,
  intro2: serviceDefinitions.bauendreinigung.intro2,
  intro3: serviceDefinitions.bauendreinigung.intro3,
  benefits: serviceDefinitions.bauendreinigung.benefits,
  services: serviceDefinitions.bauendreinigung.services,
  localInfo: cityLocalInfo.Varel,
  Icon: serviceDefinitions.bauendreinigung.icon,
});
export const Bauendreinigung_Wangerland = generateSEOPage({
  city: "Wangerland",
  cityTag: "WANGERLAND",
  serviceName: "Bauendreinigung",
  description:
    serviceDefinitions.bauendreinigung.description +
    " in Wangerland und Umgebung",
  intro1: serviceDefinitions.bauendreinigung.intro1,
  intro2: serviceDefinitions.bauendreinigung.intro2,
  intro3: serviceDefinitions.bauendreinigung.intro3,
  benefits: serviceDefinitions.bauendreinigung.benefits,
  services: serviceDefinitions.bauendreinigung.services,
  localInfo: cityLocalInfo.Wangerland,
  Icon: serviceDefinitions.bauendreinigung.icon,
});
export const Bauendreinigung_Westerstede = generateSEOPage({
  city: "Westerstede",
  cityTag: "WESTERSTEDE",
  serviceName: "Bauendreinigung",
  description:
    serviceDefinitions.bauendreinigung.description +
    " in Westerstede und Umgebung",
  intro1: serviceDefinitions.bauendreinigung.intro1,
  intro2: serviceDefinitions.bauendreinigung.intro2,
  intro3: serviceDefinitions.bauendreinigung.intro3,
  benefits: serviceDefinitions.bauendreinigung.benefits,
  services: serviceDefinitions.bauendreinigung.services,
  localInfo: cityLocalInfo.Westerstede,
  Icon: serviceDefinitions.bauendreinigung.icon,
});
export const Bauendreinigung_Wilhelmshaven = generateSEOPage({
  city: "Wilhelmshaven",
  cityTag: "WILHELMSHAVEN",
  serviceName: "Bauendreinigung",
  description:
    serviceDefinitions.bauendreinigung.description +
    " in Wilhelmshaven und Umgebung",
  intro1: serviceDefinitions.bauendreinigung.intro1,
  intro2: serviceDefinitions.bauendreinigung.intro2,
  intro3: serviceDefinitions.bauendreinigung.intro3,
  benefits: serviceDefinitions.bauendreinigung.benefits,
  services: serviceDefinitions.bauendreinigung.services,
  localInfo: cityLocalInfo.Wilhelmshaven,
  Icon: serviceDefinitions.bauendreinigung.icon,
});
export const Bauendreinigung_Zetel = generateSEOPage({
  city: "Zetel",
  cityTag: "ZETEL",
  serviceName: "Bauendreinigung",
  description:
    serviceDefinitions.bauendreinigung.description + " in Zetel und Umgebung",
  intro1: serviceDefinitions.bauendreinigung.intro1,
  intro2: serviceDefinitions.bauendreinigung.intro2,
  intro3: serviceDefinitions.bauendreinigung.intro3,
  benefits: serviceDefinitions.bauendreinigung.benefits,
  services: serviceDefinitions.bauendreinigung.services,
  localInfo: cityLocalInfo.Zetel,
  Icon: serviceDefinitions.bauendreinigung.icon,
});

// Grundreinigung
export const Grundreinigung_Jever = generateSEOPage({
  city: "Jever",
  cityTag: "JEVER",
  serviceName: "Grundreinigung",
  description:
    serviceDefinitions.grundreinigung.description + " in Jever und Umgebung",
  intro1: serviceDefinitions.grundreinigung.intro1,
  intro2: serviceDefinitions.grundreinigung.intro2,
  intro3: serviceDefinitions.grundreinigung.intro3,
  benefits: serviceDefinitions.grundreinigung.benefits,
  services: serviceDefinitions.grundreinigung.services,
  localInfo: cityLocalInfo.Jever,
  Icon: serviceDefinitions.grundreinigung.icon,
});
export const Grundreinigung_Oldenburg = generateSEOPage({
  city: "Oldenburg",
  cityTag: "OLDENBURG",
  serviceName: "Grundreinigung",
  description:
    serviceDefinitions.grundreinigung.description +
    " in Oldenburg und Umgebung",
  intro1: serviceDefinitions.grundreinigung.intro1,
  intro2: serviceDefinitions.grundreinigung.intro2,
  intro3: serviceDefinitions.grundreinigung.intro3,
  benefits: serviceDefinitions.grundreinigung.benefits,
  services: serviceDefinitions.grundreinigung.services,
  localInfo: cityLocalInfo.Oldenburg,
  Icon: serviceDefinitions.grundreinigung.icon,
});
export const Grundreinigung_Sande = generateSEOPage({
  city: "Sande",
  cityTag: "SANDE",
  serviceName: "Grundreinigung",
  description:
    serviceDefinitions.grundreinigung.description + " in Sande und Umgebung",
  intro1: serviceDefinitions.grundreinigung.intro1,
  intro2: serviceDefinitions.grundreinigung.intro2,
  intro3: serviceDefinitions.grundreinigung.intro3,
  benefits: serviceDefinitions.grundreinigung.benefits,
  services: serviceDefinitions.grundreinigung.services,
  localInfo: cityLocalInfo.Sande,
  Icon: serviceDefinitions.grundreinigung.icon,
});
export const Grundreinigung_Schortens = generateSEOPage({
  city: "Schortens",
  cityTag: "SCHORTENS",
  serviceName: "Grundreinigung",
  description:
    serviceDefinitions.grundreinigung.description +
    " in Schortens und Umgebung",
  intro1: serviceDefinitions.grundreinigung.intro1,
  intro2: serviceDefinitions.grundreinigung.intro2,
  intro3: serviceDefinitions.grundreinigung.intro3,
  benefits: serviceDefinitions.grundreinigung.benefits,
  services: serviceDefinitions.grundreinigung.services,
  localInfo: cityLocalInfo.Schortens,
  Icon: serviceDefinitions.grundreinigung.icon,
});
export const Grundreinigung_Varel = generateSEOPage({
  city: "Varel",
  cityTag: "VAREL",
  serviceName: "Grundreinigung",
  description:
    serviceDefinitions.grundreinigung.description + " in Varel und Umgebung",
  intro1: serviceDefinitions.grundreinigung.intro1,
  intro2: serviceDefinitions.grundreinigung.intro2,
  intro3: serviceDefinitions.grundreinigung.intro3,
  benefits: serviceDefinitions.grundreinigung.benefits,
  services: serviceDefinitions.grundreinigung.services,
  localInfo: cityLocalInfo.Varel,
  Icon: serviceDefinitions.grundreinigung.icon,
});
export const Grundreinigung_Wangerland = generateSEOPage({
  city: "Wangerland",
  cityTag: "WANGERLAND",
  serviceName: "Grundreinigung",
  description:
    serviceDefinitions.grundreinigung.description +
    " in Wangerland und Umgebung",
  intro1: serviceDefinitions.grundreinigung.intro1,
  intro2: serviceDefinitions.grundreinigung.intro2,
  intro3: serviceDefinitions.grundreinigung.intro3,
  benefits: serviceDefinitions.grundreinigung.benefits,
  services: serviceDefinitions.grundreinigung.services,
  localInfo: cityLocalInfo.Wangerland,
  Icon: serviceDefinitions.grundreinigung.icon,
});
export const Grundreinigung_Westerstede = generateSEOPage({
  city: "Westerstede",
  cityTag: "WESTERSTEDE",
  serviceName: "Grundreinigung",
  description:
    serviceDefinitions.grundreinigung.description +
    " in Westerstede und Umgebung",
  intro1: serviceDefinitions.grundreinigung.intro1,
  intro2: serviceDefinitions.grundreinigung.intro2,
  intro3: serviceDefinitions.grundreinigung.intro3,
  benefits: serviceDefinitions.grundreinigung.benefits,
  services: serviceDefinitions.grundreinigung.services,
  localInfo: cityLocalInfo.Westerstede,
  Icon: serviceDefinitions.grundreinigung.icon,
});
export const Grundreinigung_Wilhelmshaven = generateSEOPage({
  city: "Wilhelmshaven",
  cityTag: "WILHELMSHAVEN",
  serviceName: "Grundreinigung",
  description:
    serviceDefinitions.grundreinigung.description +
    " in Wilhelmshaven und Umgebung",
  intro1: serviceDefinitions.grundreinigung.intro1,
  intro2: serviceDefinitions.grundreinigung.intro2,
  intro3: serviceDefinitions.grundreinigung.intro3,
  benefits: serviceDefinitions.grundreinigung.benefits,
  services: serviceDefinitions.grundreinigung.services,
  localInfo: cityLocalInfo.Wilhelmshaven,
  Icon: serviceDefinitions.grundreinigung.icon,
});
export const Grundreinigung_Zetel = generateSEOPage({
  city: "Zetel",
  cityTag: "ZETEL",
  serviceName: "Grundreinigung",
  description:
    serviceDefinitions.grundreinigung.description + " in Zetel und Umgebung",
  intro1: serviceDefinitions.grundreinigung.intro1,
  intro2: serviceDefinitions.grundreinigung.intro2,
  intro3: serviceDefinitions.grundreinigung.intro3,
  benefits: serviceDefinitions.grundreinigung.benefits,
  services: serviceDefinitions.grundreinigung.services,
  localInfo: cityLocalInfo.Zetel,
  Icon: serviceDefinitions.grundreinigung.icon,
});

// Entrümpelung
export const Entruempelung_Jever = generateSEOPage({
  city: "Jever",
  cityTag: "JEVER",
  serviceName: "Entrümpelung",
  description:
    serviceDefinitions.entruempelung.description + " in Jever und Umgebung",
  intro1: serviceDefinitions.entruempelung.intro1,
  intro2: serviceDefinitions.entruempelung.intro2,
  intro3: serviceDefinitions.entruempelung.intro3,
  benefits: serviceDefinitions.entruempelung.benefits,
  services: serviceDefinitions.entruempelung.services,
  localInfo: cityLocalInfo.Jever,
  Icon: serviceDefinitions.entruempelung.icon,
});
export const Entruempelung_Oldenburg = generateSEOPage({
  city: "Oldenburg",
  cityTag: "OLDENBURG",
  serviceName: "Entrümpelung",
  description:
    serviceDefinitions.entruempelung.description + " in Oldenburg und Umgebung",
  intro1: serviceDefinitions.entruempelung.intro1,
  intro2: serviceDefinitions.entruempelung.intro2,
  intro3: serviceDefinitions.entruempelung.intro3,
  benefits: serviceDefinitions.entruempelung.benefits,
  services: serviceDefinitions.entruempelung.services,
  localInfo: cityLocalInfo.Oldenburg,
  Icon: serviceDefinitions.entruempelung.icon,
});
export const Entruempelung_Sande = generateSEOPage({
  city: "Sande",
  cityTag: "SANDE",
  serviceName: "Entrümpelung",
  description:
    serviceDefinitions.entruempelung.description + " in Sande und Umgebung",
  intro1: serviceDefinitions.entruempelung.intro1,
  intro2: serviceDefinitions.entruempelung.intro2,
  intro3: serviceDefinitions.entruempelung.intro3,
  benefits: serviceDefinitions.entruempelung.benefits,
  services: serviceDefinitions.entruempelung.services,
  localInfo: cityLocalInfo.Sande,
  Icon: serviceDefinitions.entruempelung.icon,
});
export const Entruempelung_Schortens = generateSEOPage({
  city: "Schortens",
  cityTag: "SCHORTENS",
  serviceName: "Entrümpelung",
  description:
    serviceDefinitions.entruempelung.description + " in Schortens und Umgebung",
  intro1: serviceDefinitions.entruempelung.intro1,
  intro2: serviceDefinitions.entruempelung.intro2,
  intro3: serviceDefinitions.entruempelung.intro3,
  benefits: serviceDefinitions.entruempelung.benefits,
  services: serviceDefinitions.entruempelung.services,
  localInfo: cityLocalInfo.Schortens,
  Icon: serviceDefinitions.entruempelung.icon,
});
export const Entruempelung_Varel = generateSEOPage({
  city: "Varel",
  cityTag: "VAREL",
  serviceName: "Entrümpelung",
  description:
    serviceDefinitions.entruempelung.description + " in Varel und Umgebung",
  intro1: serviceDefinitions.entruempelung.intro1,
  intro2: serviceDefinitions.entruempelung.intro2,
  intro3: serviceDefinitions.entruempelung.intro3,
  benefits: serviceDefinitions.entruempelung.benefits,
  services: serviceDefinitions.entruempelung.services,
  localInfo: cityLocalInfo.Varel,
  Icon: serviceDefinitions.entruempelung.icon,
});
export const Entruempelung_Wangerland = generateSEOPage({
  city: "Wangerland",
  cityTag: "WANGERLAND",
  serviceName: "Entrümpelung",
  description:
    serviceDefinitions.entruempelung.description +
    " in Wangerland und Umgebung",
  intro1: serviceDefinitions.entruempelung.intro1,
  intro2: serviceDefinitions.entruempelung.intro2,
  intro3: serviceDefinitions.entruempelung.intro3,
  benefits: serviceDefinitions.entruempelung.benefits,
  services: serviceDefinitions.entruempelung.services,
  localInfo: cityLocalInfo.Wangerland,
  Icon: serviceDefinitions.entruempelung.icon,
});
export const Entruempelung_Westerstede = generateSEOPage({
  city: "Westerstede",
  cityTag: "WESTERSTEDE",
  serviceName: "Entrümpelung",
  description:
    serviceDefinitions.entruempelung.description +
    " in Westerstede und Umgebung",
  intro1: serviceDefinitions.entruempelung.intro1,
  intro2: serviceDefinitions.entruempelung.intro2,
  intro3: serviceDefinitions.entruempelung.intro3,
  benefits: serviceDefinitions.entruempelung.benefits,
  services: serviceDefinitions.entruempelung.services,
  localInfo: cityLocalInfo.Westerstede,
  Icon: serviceDefinitions.entruempelung.icon,
});
export const Entruempelung_Wilhelmshaven = generateSEOPage({
  city: "Wilhelmshaven",
  cityTag: "WILHELMSHAVEN",
  serviceName: "Entrümpelung",
  description:
    serviceDefinitions.entruempelung.description +
    " in Wilhelmshaven und Umgebung",
  intro1: serviceDefinitions.entruempelung.intro1,
  intro2: serviceDefinitions.entruempelung.intro2,
  intro3: serviceDefinitions.entruempelung.intro3,
  benefits: serviceDefinitions.entruempelung.benefits,
  services: serviceDefinitions.entruempelung.services,
  localInfo: cityLocalInfo.Wilhelmshaven,
  Icon: serviceDefinitions.entruempelung.icon,
});
export const Entruempelung_Zetel = generateSEOPage({
  city: "Zetel",
  cityTag: "ZETEL",
  serviceName: "Entrümpelung",
  description:
    serviceDefinitions.entruempelung.description + " in Zetel und Umgebung",
  intro1: serviceDefinitions.entruempelung.intro1,
  intro2: serviceDefinitions.entruempelung.intro2,
  intro3: serviceDefinitions.entruempelung.intro3,
  benefits: serviceDefinitions.entruempelung.benefits,
  services: serviceDefinitions.entruempelung.services,
  localInfo: cityLocalInfo.Zetel,
  Icon: serviceDefinitions.entruempelung.icon,
});

// Objektkontrolle
export const Objektkontrolle_Jever = generateSEOPage({
  city: "Jever",
  cityTag: "JEVER",
  serviceName: "Objektkontrolle",
  description:
    serviceDefinitions.objektkontrolle.description + " in Jever und Umgebung",
  intro1: serviceDefinitions.objektkontrolle.intro1,
  intro2: serviceDefinitions.objektkontrolle.intro2,
  intro3: serviceDefinitions.objektkontrolle.intro3,
  benefits: serviceDefinitions.objektkontrolle.benefits,
  services: serviceDefinitions.objektkontrolle.services,
  localInfo: cityLocalInfo.Jever,
  Icon: serviceDefinitions.objektkontrolle.icon,
});
export const Objektkontrolle_Oldenburg = generateSEOPage({
  city: "Oldenburg",
  cityTag: "OLDENBURG",
  serviceName: "Objektkontrolle",
  description:
    serviceDefinitions.objektkontrolle.description +
    " in Oldenburg und Umgebung",
  intro1: serviceDefinitions.objektkontrolle.intro1,
  intro2: serviceDefinitions.objektkontrolle.intro2,
  intro3: serviceDefinitions.objektkontrolle.intro3,
  benefits: serviceDefinitions.objektkontrolle.benefits,
  services: serviceDefinitions.objektkontrolle.services,
  localInfo: cityLocalInfo.Oldenburg,
  Icon: serviceDefinitions.objektkontrolle.icon,
});
export const Objektkontrolle_Sande = generateSEOPage({
  city: "Sande",
  cityTag: "SANDE",
  serviceName: "Objektkontrolle",
  description:
    serviceDefinitions.objektkontrolle.description + " in Sande und Umgebung",
  intro1: serviceDefinitions.objektkontrolle.intro1,
  intro2: serviceDefinitions.objektkontrolle.intro2,
  intro3: serviceDefinitions.objektkontrolle.intro3,
  benefits: serviceDefinitions.objektkontrolle.benefits,
  services: serviceDefinitions.objektkontrolle.services,
  localInfo: cityLocalInfo.Sande,
  Icon: serviceDefinitions.objektkontrolle.icon,
});
export const Objektkontrolle_Schortens = generateSEOPage({
  city: "Schortens",
  cityTag: "SCHORTENS",
  serviceName: "Objektkontrolle",
  description:
    serviceDefinitions.objektkontrolle.description +
    " in Schortens und Umgebung",
  intro1: serviceDefinitions.objektkontrolle.intro1,
  intro2: serviceDefinitions.objektkontrolle.intro2,
  intro3: serviceDefinitions.objektkontrolle.intro3,
  benefits: serviceDefinitions.objektkontrolle.benefits,
  services: serviceDefinitions.objektkontrolle.services,
  localInfo: cityLocalInfo.Schortens,
  Icon: serviceDefinitions.objektkontrolle.icon,
});
export const Objektkontrolle_Varel = generateSEOPage({
  city: "Varel",
  cityTag: "VAREL",
  serviceName: "Objektkontrolle",
  description:
    serviceDefinitions.objektkontrolle.description + " in Varel und Umgebung",
  intro1: serviceDefinitions.objektkontrolle.intro1,
  intro2: serviceDefinitions.objektkontrolle.intro2,
  intro3: serviceDefinitions.objektkontrolle.intro3,
  benefits: serviceDefinitions.objektkontrolle.benefits,
  services: serviceDefinitions.objektkontrolle.services,
  localInfo: cityLocalInfo.Varel,
  Icon: serviceDefinitions.objektkontrolle.icon,
});
export const Objektkontrolle_Wangerland = generateSEOPage({
  city: "Wangerland",
  cityTag: "WANGERLAND",
  serviceName: "Objektkontrolle",
  description:
    serviceDefinitions.objektkontrolle.description +
    " in Wangerland und Umgebung",
  intro1: serviceDefinitions.objektkontrolle.intro1,
  intro2: serviceDefinitions.objektkontrolle.intro2,
  intro3: serviceDefinitions.objektkontrolle.intro3,
  benefits: serviceDefinitions.objektkontrolle.benefits,
  services: serviceDefinitions.objektkontrolle.services,
  localInfo: cityLocalInfo.Wangerland,
  Icon: serviceDefinitions.objektkontrolle.icon,
});
export const Objektkontrolle_Westerstede = generateSEOPage({
  city: "Westerstede",
  cityTag: "WESTERSTEDE",
  serviceName: "Objektkontrolle",
  description:
    serviceDefinitions.objektkontrolle.description +
    " in Westerstede und Umgebung",
  intro1: serviceDefinitions.objektkontrolle.intro1,
  intro2: serviceDefinitions.objektkontrolle.intro2,
  intro3: serviceDefinitions.objektkontrolle.intro3,
  benefits: serviceDefinitions.objektkontrolle.benefits,
  services: serviceDefinitions.objektkontrolle.services,
  localInfo: cityLocalInfo.Westerstede,
  Icon: serviceDefinitions.objektkontrolle.icon,
});
export const Objektkontrolle_Wilhelmshaven = generateSEOPage({
  city: "Wilhelmshaven",
  cityTag: "WILHELMSHAVEN",
  serviceName: "Objektkontrolle",
  description:
    serviceDefinitions.objektkontrolle.description +
    " in Wilhelmshaven und Umgebung",
  intro1: serviceDefinitions.objektkontrolle.intro1,
  intro2: serviceDefinitions.objektkontrolle.intro2,
  intro3: serviceDefinitions.objektkontrolle.intro3,
  benefits: serviceDefinitions.objektkontrolle.benefits,
  services: serviceDefinitions.objektkontrolle.services,
  localInfo: cityLocalInfo.Wilhelmshaven,
  Icon: serviceDefinitions.objektkontrolle.icon,
});
export const Objektkontrolle_Zetel = generateSEOPage({
  city: "Zetel",
  cityTag: "ZETEL",
  serviceName: "Objektkontrolle",
  description:
    serviceDefinitions.objektkontrolle.description + " in Zetel und Umgebung",
  intro1: serviceDefinitions.objektkontrolle.intro1,
  intro2: serviceDefinitions.objektkontrolle.intro2,
  intro3: serviceDefinitions.objektkontrolle.intro3,
  benefits: serviceDefinitions.objektkontrolle.benefits,
  services: serviceDefinitions.objektkontrolle.services,
  localInfo: cityLocalInfo.Zetel,
  Icon: serviceDefinitions.objektkontrolle.icon,
});

// Reparaturarbeiten
export const Reparaturarbeiten_Jever = generateSEOPage({
  city: "Jever",
  cityTag: "JEVER",
  serviceName: "Reparaturarbeiten",
  description:
    serviceDefinitions.reparaturarbeiten.description + " in Jever und Umgebung",
  intro1: serviceDefinitions.reparaturarbeiten.intro1,
  intro2: serviceDefinitions.reparaturarbeiten.intro2,
  intro3: serviceDefinitions.reparaturarbeiten.intro3,
  benefits: serviceDefinitions.reparaturarbeiten.benefits,
  services: serviceDefinitions.reparaturarbeiten.services,
  localInfo: cityLocalInfo.Jever,
  Icon: serviceDefinitions.reparaturarbeiten.icon,
});
export const Reparaturarbeiten_Oldenburg = generateSEOPage({
  city: "Oldenburg",
  cityTag: "OLDENBURG",
  serviceName: "Reparaturarbeiten",
  description:
    serviceDefinitions.reparaturarbeiten.description +
    " in Oldenburg und Umgebung",
  intro1: serviceDefinitions.reparaturarbeiten.intro1,
  intro2: serviceDefinitions.reparaturarbeiten.intro2,
  intro3: serviceDefinitions.reparaturarbeiten.intro3,
  benefits: serviceDefinitions.reparaturarbeiten.benefits,
  services: serviceDefinitions.reparaturarbeiten.services,
  localInfo: cityLocalInfo.Oldenburg,
  Icon: serviceDefinitions.reparaturarbeiten.icon,
});
export const Reparaturarbeiten_Sande = generateSEOPage({
  city: "Sande",
  cityTag: "SANDE",
  serviceName: "Reparaturarbeiten",
  description:
    serviceDefinitions.reparaturarbeiten.description + " in Sande und Umgebung",
  intro1: serviceDefinitions.reparaturarbeiten.intro1,
  intro2: serviceDefinitions.reparaturarbeiten.intro2,
  intro3: serviceDefinitions.reparaturarbeiten.intro3,
  benefits: serviceDefinitions.reparaturarbeiten.benefits,
  services: serviceDefinitions.reparaturarbeiten.services,
  localInfo: cityLocalInfo.Sande,
  Icon: serviceDefinitions.reparaturarbeiten.icon,
});
export const Reparaturarbeiten_Schortens = generateSEOPage({
  city: "Schortens",
  cityTag: "SCHORTENS",
  serviceName: "Reparaturarbeiten",
  description:
    serviceDefinitions.reparaturarbeiten.description +
    " in Schortens und Umgebung",
  intro1: serviceDefinitions.reparaturarbeiten.intro1,
  intro2: serviceDefinitions.reparaturarbeiten.intro2,
  intro3: serviceDefinitions.reparaturarbeiten.intro3,
  benefits: serviceDefinitions.reparaturarbeiten.benefits,
  services: serviceDefinitions.reparaturarbeiten.services,
  localInfo: cityLocalInfo.Schortens,
  Icon: serviceDefinitions.reparaturarbeiten.icon,
});
export const Reparaturarbeiten_Varel = generateSEOPage({
  city: "Varel",
  cityTag: "VAREL",
  serviceName: "Reparaturarbeiten",
  description:
    serviceDefinitions.reparaturarbeiten.description + " in Varel und Umgebung",
  intro1: serviceDefinitions.reparaturarbeiten.intro1,
  intro2: serviceDefinitions.reparaturarbeiten.intro2,
  intro3: serviceDefinitions.reparaturarbeiten.intro3,
  benefits: serviceDefinitions.reparaturarbeiten.benefits,
  services: serviceDefinitions.reparaturarbeiten.services,
  localInfo: cityLocalInfo.Varel,
  Icon: serviceDefinitions.reparaturarbeiten.icon,
});
export const Reparaturarbeiten_Wangerland = generateSEOPage({
  city: "Wangerland",
  cityTag: "WANGERLAND",
  serviceName: "Reparaturarbeiten",
  description:
    serviceDefinitions.reparaturarbeiten.description +
    " in Wangerland und Umgebung",
  intro1: serviceDefinitions.reparaturarbeiten.intro1,
  intro2: serviceDefinitions.reparaturarbeiten.intro2,
  intro3: serviceDefinitions.reparaturarbeiten.intro3,
  benefits: serviceDefinitions.reparaturarbeiten.benefits,
  services: serviceDefinitions.reparaturarbeiten.services,
  localInfo: cityLocalInfo.Wangerland,
  Icon: serviceDefinitions.reparaturarbeiten.icon,
});
export const Reparaturarbeiten_Westerstede = generateSEOPage({
  city: "Westerstede",
  cityTag: "WESTERSTEDE",
  serviceName: "Reparaturarbeiten",
  description:
    serviceDefinitions.reparaturarbeiten.description +
    " in Westerstede und Umgebung",
  intro1: serviceDefinitions.reparaturarbeiten.intro1,
  intro2: serviceDefinitions.reparaturarbeiten.intro2,
  intro3: serviceDefinitions.reparaturarbeiten.intro3,
  benefits: serviceDefinitions.reparaturarbeiten.benefits,
  services: serviceDefinitions.reparaturarbeiten.services,
  localInfo: cityLocalInfo.Westerstede,
  Icon: serviceDefinitions.reparaturarbeiten.icon,
});
export const Reparaturarbeiten_Wilhelmshaven = generateSEOPage({
  city: "Wilhelmshaven",
  cityTag: "WILHELMSHAVEN",
  serviceName: "Reparaturarbeiten",
  description:
    serviceDefinitions.reparaturarbeiten.description +
    " in Wilhelmshaven und Umgebung",
  intro1: serviceDefinitions.reparaturarbeiten.intro1,
  intro2: serviceDefinitions.reparaturarbeiten.intro2,
  intro3: serviceDefinitions.reparaturarbeiten.intro3,
  benefits: serviceDefinitions.reparaturarbeiten.benefits,
  services: serviceDefinitions.reparaturarbeiten.services,
  localInfo: cityLocalInfo.Wilhelmshaven,
  Icon: serviceDefinitions.reparaturarbeiten.icon,
});
export const Reparaturarbeiten_Zetel = generateSEOPage({
  city: "Zetel",
  cityTag: "ZETEL",
  serviceName: "Reparaturarbeiten",
  description:
    serviceDefinitions.reparaturarbeiten.description + " in Zetel und Umgebung",
  intro1: serviceDefinitions.reparaturarbeiten.intro1,
  intro2: serviceDefinitions.reparaturarbeiten.intro2,
  intro3: serviceDefinitions.reparaturarbeiten.intro3,
  benefits: serviceDefinitions.reparaturarbeiten.benefits,
  services: serviceDefinitions.reparaturarbeiten.services,
  localInfo: cityLocalInfo.Zetel,
  Icon: serviceDefinitions.reparaturarbeiten.icon,
});

// Handwerkerkoordination
export const Handwerkerkoordination_Jever = generateSEOPage({
  city: "Jever",
  cityTag: "JEVER",
  serviceName: "Handwerkerkoordination",
  description:
    serviceDefinitions.handwerkerkoordination.description +
    " in Jever und Umgebung",
  intro1: serviceDefinitions.handwerkerkoordination.intro1,
  intro2: serviceDefinitions.handwerkerkoordination.intro2,
  intro3: serviceDefinitions.handwerkerkoordination.intro3,
  benefits: serviceDefinitions.handwerkerkoordination.benefits,
  services: serviceDefinitions.handwerkerkoordination.services,
  localInfo: cityLocalInfo.Jever,
  Icon: serviceDefinitions.handwerkerkoordination.icon,
});
export const Handwerkerkoordination_Oldenburg = generateSEOPage({
  city: "Oldenburg",
  cityTag: "OLDENBURG",
  serviceName: "Handwerkerkoordination",
  description:
    serviceDefinitions.handwerkerkoordination.description +
    " in Oldenburg und Umgebung",
  intro1: serviceDefinitions.handwerkerkoordination.intro1,
  intro2: serviceDefinitions.handwerkerkoordination.intro2,
  intro3: serviceDefinitions.handwerkerkoordination.intro3,
  benefits: serviceDefinitions.handwerkerkoordination.benefits,
  services: serviceDefinitions.handwerkerkoordination.services,
  localInfo: cityLocalInfo.Oldenburg,
  Icon: serviceDefinitions.handwerkerkoordination.icon,
});
export const Handwerkerkoordination_Sande = generateSEOPage({
  city: "Sande",
  cityTag: "SANDE",
  serviceName: "Handwerkerkoordination",
  description:
    serviceDefinitions.handwerkerkoordination.description +
    " in Sande und Umgebung",
  intro1: serviceDefinitions.handwerkerkoordination.intro1,
  intro2: serviceDefinitions.handwerkerkoordination.intro2,
  intro3: serviceDefinitions.handwerkerkoordination.intro3,
  benefits: serviceDefinitions.handwerkerkoordination.benefits,
  services: serviceDefinitions.handwerkerkoordination.services,
  localInfo: cityLocalInfo.Sande,
  Icon: serviceDefinitions.handwerkerkoordination.icon,
});
export const Handwerkerkoordination_Schortens = generateSEOPage({
  city: "Schortens",
  cityTag: "SCHORTENS",
  serviceName: "Handwerkerkoordination",
  description:
    serviceDefinitions.handwerkerkoordination.description +
    " in Schortens und Umgebung",
  intro1: serviceDefinitions.handwerkerkoordination.intro1,
  intro2: serviceDefinitions.handwerkerkoordination.intro2,
  intro3: serviceDefinitions.handwerkerkoordination.intro3,
  benefits: serviceDefinitions.handwerkerkoordination.benefits,
  services: serviceDefinitions.handwerkerkoordination.services,
  localInfo: cityLocalInfo.Schortens,
  Icon: serviceDefinitions.handwerkerkoordination.icon,
});
export const Handwerkerkoordination_Varel = generateSEOPage({
  city: "Varel",
  cityTag: "VAREL",
  serviceName: "Handwerkerkoordination",
  description:
    serviceDefinitions.handwerkerkoordination.description +
    " in Varel und Umgebung",
  intro1: serviceDefinitions.handwerkerkoordination.intro1,
  intro2: serviceDefinitions.handwerkerkoordination.intro2,
  intro3: serviceDefinitions.handwerkerkoordination.intro3,
  benefits: serviceDefinitions.handwerkerkoordination.benefits,
  services: serviceDefinitions.handwerkerkoordination.services,
  localInfo: cityLocalInfo.Varel,
  Icon: serviceDefinitions.handwerkerkoordination.icon,
});
export const Handwerkerkoordination_Wangerland = generateSEOPage({
  city: "Wangerland",
  cityTag: "WANGERLAND",
  serviceName: "Handwerkerkoordination",
  description:
    serviceDefinitions.handwerkerkoordination.description +
    " in Wangerland und Umgebung",
  intro1: serviceDefinitions.handwerkerkoordination.intro1,
  intro2: serviceDefinitions.handwerkerkoordination.intro2,
  intro3: serviceDefinitions.handwerkerkoordination.intro3,
  benefits: serviceDefinitions.handwerkerkoordination.benefits,
  services: serviceDefinitions.handwerkerkoordination.services,
  localInfo: cityLocalInfo.Wangerland,
  Icon: serviceDefinitions.handwerkerkoordination.icon,
});
export const Handwerkerkoordination_Westerstede = generateSEOPage({
  city: "Westerstede",
  cityTag: "WESTERSTEDE",
  serviceName: "Handwerkerkoordination",
  description:
    serviceDefinitions.handwerkerkoordination.description +
    " in Westerstede und Umgebung",
  intro1: serviceDefinitions.handwerkerkoordination.intro1,
  intro2: serviceDefinitions.handwerkerkoordination.intro2,
  intro3: serviceDefinitions.handwerkerkoordination.intro3,
  benefits: serviceDefinitions.handwerkerkoordination.benefits,
  services: serviceDefinitions.handwerkerkoordination.services,
  localInfo: cityLocalInfo.Westerstede,
  Icon: serviceDefinitions.handwerkerkoordination.icon,
});
export const Handwerkerkoordination_Wilhelmshaven = generateSEOPage({
  city: "Wilhelmshaven",
  cityTag: "WILHELMSHAVEN",
  serviceName: "Handwerkerkoordination",
  description:
    serviceDefinitions.handwerkerkoordination.description +
    " in Wilhelmshaven und Umgebung",
  intro1: serviceDefinitions.handwerkerkoordination.intro1,
  intro2: serviceDefinitions.handwerkerkoordination.intro2,
  intro3: serviceDefinitions.handwerkerkoordination.intro3,
  benefits: serviceDefinitions.handwerkerkoordination.benefits,
  services: serviceDefinitions.handwerkerkoordination.services,
  localInfo: cityLocalInfo.Wilhelmshaven,
  Icon: serviceDefinitions.handwerkerkoordination.icon,
});
export const Handwerkerkoordination_Zetel = generateSEOPage({
  city: "Zetel",
  cityTag: "ZETEL",
  serviceName: "Handwerkerkoordination",
  description:
    serviceDefinitions.handwerkerkoordination.description +
    " in Zetel und Umgebung",
  intro1: serviceDefinitions.handwerkerkoordination.intro1,
  intro2: serviceDefinitions.handwerkerkoordination.intro2,
  intro3: serviceDefinitions.handwerkerkoordination.intro3,
  benefits: serviceDefinitions.handwerkerkoordination.benefits,
  services: serviceDefinitions.handwerkerkoordination.services,
  localInfo: cityLocalInfo.Zetel,
  Icon: serviceDefinitions.handwerkerkoordination.icon,
});

// Wohnungsverwaltung
export const Wohnungsverwaltung_Jever = generateSEOPage({
  city: "Jever",
  cityTag: "JEVER",
  serviceName: "Wohnungsverwaltung",
  description:
    serviceDefinitions.wohnungsverwaltung.description +
    " in Jever und Umgebung",
  intro1: serviceDefinitions.wohnungsverwaltung.intro1,
  intro2: serviceDefinitions.wohnungsverwaltung.intro2,
  intro3: serviceDefinitions.wohnungsverwaltung.intro3,
  benefits: serviceDefinitions.wohnungsverwaltung.benefits,
  services: serviceDefinitions.wohnungsverwaltung.services,
  localInfo: cityLocalInfo.Jever,
  Icon: serviceDefinitions.wohnungsverwaltung.icon,
});
export const Wohnungsverwaltung_Oldenburg = generateSEOPage({
  city: "Oldenburg",
  cityTag: "OLDENBURG",
  serviceName: "Wohnungsverwaltung",
  description:
    serviceDefinitions.wohnungsverwaltung.description +
    " in Oldenburg und Umgebung",
  intro1: serviceDefinitions.wohnungsverwaltung.intro1,
  intro2: serviceDefinitions.wohnungsverwaltung.intro2,
  intro3: serviceDefinitions.wohnungsverwaltung.intro3,
  benefits: serviceDefinitions.wohnungsverwaltung.benefits,
  services: serviceDefinitions.wohnungsverwaltung.services,
  localInfo: cityLocalInfo.Oldenburg,
  Icon: serviceDefinitions.wohnungsverwaltung.icon,
});
export const Wohnungsverwaltung_Sande = generateSEOPage({
  city: "Sande",
  cityTag: "SANDE",
  serviceName: "Wohnungsverwaltung",
  description:
    serviceDefinitions.wohnungsverwaltung.description +
    " in Sande und Umgebung",
  intro1: serviceDefinitions.wohnungsverwaltung.intro1,
  intro2: serviceDefinitions.wohnungsverwaltung.intro2,
  intro3: serviceDefinitions.wohnungsverwaltung.intro3,
  benefits: serviceDefinitions.wohnungsverwaltung.benefits,
  services: serviceDefinitions.wohnungsverwaltung.services,
  localInfo: cityLocalInfo.Sande,
  Icon: serviceDefinitions.wohnungsverwaltung.icon,
});
export const Wohnungsverwaltung_Schortens = generateSEOPage({
  city: "Schortens",
  cityTag: "SCHORTENS",
  serviceName: "Wohnungsverwaltung",
  description:
    serviceDefinitions.wohnungsverwaltung.description +
    " in Schortens und Umgebung",
  intro1: serviceDefinitions.wohnungsverwaltung.intro1,
  intro2: serviceDefinitions.wohnungsverwaltung.intro2,
  intro3: serviceDefinitions.wohnungsverwaltung.intro3,
  benefits: serviceDefinitions.wohnungsverwaltung.benefits,
  services: serviceDefinitions.wohnungsverwaltung.services,
  localInfo: cityLocalInfo.Schortens,
  Icon: serviceDefinitions.wohnungsverwaltung.icon,
});
export const Wohnungsverwaltung_Varel = generateSEOPage({
  city: "Varel",
  cityTag: "VAREL",
  serviceName: "Wohnungsverwaltung",
  description:
    serviceDefinitions.wohnungsverwaltung.description +
    " in Varel und Umgebung",
  intro1: serviceDefinitions.wohnungsverwaltung.intro1,
  intro2: serviceDefinitions.wohnungsverwaltung.intro2,
  intro3: serviceDefinitions.wohnungsverwaltung.intro3,
  benefits: serviceDefinitions.wohnungsverwaltung.benefits,
  services: serviceDefinitions.wohnungsverwaltung.services,
  localInfo: cityLocalInfo.Varel,
  Icon: serviceDefinitions.wohnungsverwaltung.icon,
});
export const Wohnungsverwaltung_Wangerland = generateSEOPage({
  city: "Wangerland",
  cityTag: "WANGERLAND",
  serviceName: "Wohnungsverwaltung",
  description:
    serviceDefinitions.wohnungsverwaltung.description +
    " in Wangerland und Umgebung",
  intro1: serviceDefinitions.wohnungsverwaltung.intro1,
  intro2: serviceDefinitions.wohnungsverwaltung.intro2,
  intro3: serviceDefinitions.wohnungsverwaltung.intro3,
  benefits: serviceDefinitions.wohnungsverwaltung.benefits,
  services: serviceDefinitions.wohnungsverwaltung.services,
  localInfo: cityLocalInfo.Wangerland,
  Icon: serviceDefinitions.wohnungsverwaltung.icon,
});
export const Wohnungsverwaltung_Westerstede = generateSEOPage({
  city: "Westerstede",
  cityTag: "WESTERSTEDE",
  serviceName: "Wohnungsverwaltung",
  description:
    serviceDefinitions.wohnungsverwaltung.description +
    " in Westerstede und Umgebung",
  intro1: serviceDefinitions.wohnungsverwaltung.intro1,
  intro2: serviceDefinitions.wohnungsverwaltung.intro2,
  intro3: serviceDefinitions.wohnungsverwaltung.intro3,
  benefits: serviceDefinitions.wohnungsverwaltung.benefits,
  services: serviceDefinitions.wohnungsverwaltung.services,
  localInfo: cityLocalInfo.Westerstede,
  Icon: serviceDefinitions.wohnungsverwaltung.icon,
});
export const Wohnungsverwaltung_Wilhelmshaven = generateSEOPage({
  city: "Wilhelmshaven",
  cityTag: "WILHELMSHAVEN",
  serviceName: "Wohnungsverwaltung",
  description:
    serviceDefinitions.wohnungsverwaltung.description +
    " in Wilhelmshaven und Umgebung",
  intro1: serviceDefinitions.wohnungsverwaltung.intro1,
  intro2: serviceDefinitions.wohnungsverwaltung.intro2,
  intro3: serviceDefinitions.wohnungsverwaltung.intro3,
  benefits: serviceDefinitions.wohnungsverwaltung.benefits,
  services: serviceDefinitions.wohnungsverwaltung.services,
  localInfo: cityLocalInfo.Wilhelmshaven,
  Icon: serviceDefinitions.wohnungsverwaltung.icon,
});
export const Wohnungsverwaltung_Zetel = generateSEOPage({
  city: "Zetel",
  cityTag: "ZETEL",
  serviceName: "Wohnungsverwaltung",
  description:
    serviceDefinitions.wohnungsverwaltung.description +
    " in Zetel und Umgebung",
  intro1: serviceDefinitions.wohnungsverwaltung.intro1,
  intro2: serviceDefinitions.wohnungsverwaltung.intro2,
  intro3: serviceDefinitions.wohnungsverwaltung.intro3,
  benefits: serviceDefinitions.wohnungsverwaltung.benefits,
  services: serviceDefinitions.wohnungsverwaltung.services,
  localInfo: cityLocalInfo.Zetel,
  Icon: serviceDefinitions.wohnungsverwaltung.icon,
});


