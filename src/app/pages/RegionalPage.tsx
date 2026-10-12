"use client";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Home,
  Mail,
  MapPin,
  Phone,
  Scale,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "../components/ui/button";

interface RegionalPageProps {
  keyword: string;
  city: string;
}

export default function RegionalPage({ keyword, city }: RegionalPageProps) {
  const getKeywordData = (keyword: string) => {
    const keywordMap: Record<
      string,
      {
        title: string;
        articleTitle: string;
        subtitle: string;
        description: string;
        icon: any;
        benefits: string[];
      }
    > = {
      immobilienbewertung: {
        title: "Immobilienbewertung",
        articleTitle: "Immobilienbewertung",
        subtitle: "Professionelle Wertermittlung nach ImmoWertV",
        description:
          "Als zertifizierter Sachverständiger für Immobilienwertermittlung (DGuSV) bieten wir Ihnen in " +
          city +
          " präzise Verkehrswertgutachten und Kurzgutachten nach ImmoWertV. Ob für Kauf, Verkauf, Finanzierung, Erbschaft, Schenkung oder Scheidung – wir ermitteln den marktgerechten Wert Ihrer Immobilie fundiert und rechtssicher.",
        icon: Building2,
        benefits: [
          "Sachverständiger für Immobilienwertermittlung (DGuSV)",
          "Inhaber Personenzertifikat EU/A-001 (EWIVS)",
          "Gerichtlich und behördlich anerkannte Gutachten",
          "Objektbesichtigung vor Ort in " + city,
          "Detaillierte Marktanalyse der Region (" + city + ")",
        ],
      },
      hausbewertung: {
        title: "Hausbewertung",
        articleTitle: "Hausbewertung",
        subtitle: "Ihr Haus in " + city + " professionell bewerten lassen",
        description:
          "Sie möchten Ihr Haus in " +
          city +
          " bewerten lassen? Als zertifizierter Sachverständiger für Immobilienwertermittlung (DGuSV) erstellen wir fundierte Wertgutachten für Einfamilienhäuser, Doppelhaushälften, Reihenhäuser und Mehrfamilienhäuser.",
        icon: Home,
        benefits: [
          "Bewertung von Ein- und Mehrfamilienhäusern",
          "Berücksichtigung von Bausubstanz, energetischem Zustand und Ausstattung",
          "Analyse aktueller Bodenrichtwerte und Verkäufe in " + city,
          "Bewertung von Grundstück und Außenanlagen",
          "Erfassung werteinflussender Mängel und Schäden",
        ],
      },
      immobiliengutachter: {
        title: "Immobiliengutachter",
        articleTitle: "Immobiliengutachten",
        subtitle: "Sachverständige Immobilienwertermittlung",
        description:
          "Als Sachverständiger für Immobilienwertermittlung (DGuSV) für " +
          city +
          " und Umgebung erstellen wir gerichtsfeste Gutachten für alle Immobilienarten nach den Qualitätsstandards der ImmoWertV.",
        icon: Scale,
        benefits: [
          siteConfig.amtsgerichteText,
          "Sachverständiger für Immobilienwertermittlung (DGuSV)",
          "Personenzertifikat EU/A-001 (EWIVS)",
          "Fundierte Marktkenntnisse in " + city,
          "Persönliche Betreuung vom Erstkontakt bis zur Übergabe",
        ],
      },
      "sachverständiger-immobilien": {
        title: "Sachverständiger für Immobilienwertermittlung",
        articleTitle: "Immobilienwertermittlung",
        subtitle: "Unabhängige Immobilienbewertung",
        description:
          "Als unabhängiger Sachverständiger für Immobilienwertermittlung (DGuSV) bieten wir in " +
          city +
          " neutrale Wertermittlungen. Unsere Gutachten dienen als verlässliche Entscheidungsgrundlage bei Kauf, Verkauf, Finanzierung, Erbauseinandersetzungen und gerichtlichen Verfahren.",
        icon: Building2,
        benefits: [
          "100% unabhängig und neutral",
          "Keine Vermittlungs- oder Maklerinteressen",
          "Methodisch transparente Bewertung nach ImmoWertV",
          "Detaillierte Objektdokumentation",
          "Rechtssichere Gutachten für private & gerichtliche Verwendungszwecke",
        ],
      },
      immobiliensachverständiger: {
        title: "Immobiliensachverständiger",
        articleTitle: "Wertermittlung",
        subtitle: "Ihr Experte für " + city + " & Umgebung",
        description:
          "Als Immobiliensachverständiger mit Schwerpunkt auf der Region " +
          city +
          " verfügen wir über detaillierte Kenntnisse des lokalen Immobilienmarktes. Wir erstellen Verkehrswertgutachten und Kurzgutachten nach höchsten fachlichen Standards.",
        icon: FileText,
        benefits: [
          "Spezialisiert auf " + city + " und das Umland",
          "Detaillierte Mikrolagen-Kenntnisse",
          "Aktuelle Marktdaten und Bodenrichtwerte der Gutachterausschüsse",
          "Rechtssichere Erstellung nach ImmoWertV",
          "Schnelle Terminvergabe für Besichtigungen vor Ort",
        ],
      },
      verkehrswertgutachten: {
        title: "Verkehrswertgutachten",
        articleTitle: "Verkehrswertgutachten",
        subtitle: "Vollgutachten nach § 194 BauGB",
        description:
          "Das Verkehrswertgutachten ist das umfassendste Immobiliengutachten nach § 194 BauGB. Für Immobilien in " +
          city +
          " erstellen wir gerichtsfeste Vollgutachten mit detaillierter Objektanalyse und Herleitung des Verkehrswerts.",
        icon: FileText,
        benefits: [
          "Vollgutachten nach § 194 BauGB & ImmoWertV",
          "Anwendung aller normierten Wertermittlungsverfahren",
          "Gerichtlich, behördlich und steuerlich anerkannt",
          "Umfangreiche Objektdokumentation mit Fotoanlage",
          "Ausführliche Begründung aller Ansatzwerte",
        ],
      },
      "gutachter-immobilien": {
        title: "Gutachter für Immobilien",
        articleTitle: "Immobiliengutachten",
        subtitle: "Sachverständige Wertermittlung",
        description:
          "Als Gutachter für Immobilien in " +
          city +
          " erstellen wir Wertgutachten für alle Immobilienarten – von Eigentumswohnungen über Einfamilienhäuser bis zu Gewerbeimmobilien.",
        icon: Building2,
        benefits: [
          "Bewertung aller Immobilienarten",
          "Wohn-, Gewerbe- und Sonderimmobilien",
          "Rechtssichere Dokumentation",
          "Verständliche Aufbereitung komplexer Sachverhalte",
          "Persönliche Erläuterung des Gutachtens",
        ],
      },
      "kurzgutachten-immobilien": {
        title: "Kurzgutachten",
        articleTitle: "Kurzgutachten",
        subtitle: "Kompakte Immobilienwertermittlung",
        description:
          "Das Kurzgutachten bietet eine kompakte und kostengünstige Wertermittlung Ihrer Immobilie in " +
          city +
          " nach ImmoWertV-Standards – ideal für private Kauf- oder Verkaufsentscheidungen.",
        icon: ClipboardCheck,
        benefits: [
          "Kompakte Wertermittlung",
          "Nachvollziehbare Berechnung nach ImmoWertV",
          "Objektbesichtigung vor Ort in " + city,
          "Schnelle Erstellung innerhalb weniger Werktage",
          "Attraktives Preis-Leistungs-Verhältnis",
        ],
      },
      "zertifizierter-sachverständiger": {
        title: "Zertifizierter Sachverständiger für Immobilienwertermittlung (DGuSV)",
        articleTitle: "Immobilienwertermittlung",
        subtitle: "Zertifizierte Fachkompetenz",
        description:
          "Als zertifizierter Sachverständiger für Immobilienwertermittlung (DGuSV) und Inhaber des Personenzertifikats EU/A-001 (EWIVS) gewährleisten wir in " +
          city +
          " höchste Qualitätsstandards bei jeder Gutachtenerstellung.",
        icon: Scale,
        benefits: [
          "Mitglied im Deutschen Gutachter- und Sachverständigenverband e.V. (DGuSV)",
          "EWIVS Personenzertifikat EU/A-001",
          siteConfig.amtsgerichteText,
          "Einhaltung aller gesetzlichen Bewertungsstandards",
          "Bundesweit tätig mit regionalem Schwerpunkt",
        ],
      },
    };

    const key = keyword.toLowerCase();
    if (keywordMap[key]) {
      return keywordMap[key];
    }

    const cleanTitle = keyword
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
    return {
      title: cleanTitle,
      articleTitle: cleanTitle,
      subtitle: "Professionelle Immobilienwertermittlung in " + city,
      description:
        "Als zertifizierter Sachverständiger für Immobilienwertermittlung (DGuSV) bieten wir in " +
        city +
        " verlässliche Gutachten nach den aktuellen Standards der ImmoWertV.",
      icon: Building2,
      benefits: [
        "Sachverständiger für Immobilienwertermittlung (DGuSV)",
        "Personenzertifikat EU/A-001 (EWIVS)",
        "Wertermittlung nach ImmoWertV",
        "Objektbesichtigung vor Ort in " + city,
        "Schnelle Bearbeitung und persönliche Beratung",
      ],
    };
  };

  const data = getKeywordData(keyword);
  const Icon = data.icon;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A0A0A] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A0A0A] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-1 bg-white/10 rounded-full">
              <span className="text-white text-sm font-semibold">
                {city} & Region
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {data.title} in <span className="text-white">{city}</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8">
              {data.subtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt">
                <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-semibold cursor-pointer">
                  Gutachten anfragen
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full font-semibold cursor-pointer">
                  <Phone className="mr-2 w-5 h-5" />
                  {siteConfig.contact.phoneDisplay}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="mb-8">
                <div className="w-16 h-16 bg-[#0A0A0A]/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-[#0A0A0A]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Professionelle {data.title} in {city}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {data.description}
                </p>
              </div>

              <div className="space-y-4">
                {data.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#0A0A0A] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Kontaktieren Sie uns</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-[#0A0A0A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#0A0A0A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefon</h4>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-[#0A0A0A] hover:underline font-medium"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-[#0A0A0A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#0A0A0A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">E-Mail</h4>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-[#0A0A0A] hover:underline font-medium"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-[#0A0A0A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#0A0A0A]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Adresse</h4>
                    <p className="text-gray-600">{siteConfig.name}</p>
                    <p className="text-gray-600">{siteConfig.contact.address.street}</p>
                    <p className="text-gray-600">{siteConfig.contact.address.zip} {siteConfig.contact.address.city}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <Link href="/kontakt">
                    <Button className="w-full bg-[#0A0A0A] hover:bg-[#555555] text-white py-6 text-lg rounded-full cursor-pointer">
                      Unverbindlich anfragen
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unsere Leistungen in {city}
            </h2>
            <p className="text-xl text-gray-600">
              Wertermittlung nach ImmoWertV für jeden Verwendungszweck
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#0A0A0A] hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-4">Verkehrswertgutachten</h3>
              <p className="text-gray-600 mb-6">
                Vollgutachten nach § 194 BauGB für gerichtliche Verfahren,
                Finanzierungen, Erbschaften und behördliche Zwecke. Umfassende Wertermittlung
                mit detaillierter Objektanalyse.
              </p>
              <Link
                href="/kontakt"
                className="text-[#0A0A0A] font-semibold hover:underline inline-flex items-center"
              >
                Gutachten anfragen
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#0A0A0A] hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-4">Kurzgutachten</h3>
              <p className="text-gray-600 mb-6">
                Kompakte Wertermittlung für private Zwecke wie Kauf, Verkauf
                oder Erstorientierung. Fundierte Bewertung nach ImmoWertV zu einem fairen
                Preis-Leistungs-Verhältnis.
              </p>
              <Link
                href="/kontakt"
                className="text-[#0A0A0A] font-semibold hover:underline inline-flex items-center"
              >
                Gutachten anfragen
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Benötigen Sie ein Gutachten in {city}?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {siteConfig.responseCommitment}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/kontakt">
                <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg rounded-full cursor-pointer font-semibold">
                  Jetzt anfragen
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full cursor-pointer font-semibold">
                  <Phone className="mr-2 w-5 h-5" />
                  Direkt anrufen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
