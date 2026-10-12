"use client";

import { Award, Heart, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import alpaImage from "../../assets/alpa.JPG";
import QualificationBlock from "../components/QualificationBlock";
import SealsBlock from "../components/SealsBlock";
import { siteConfig } from "@/config/siteConfig";

export default function UeberUns() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Unabhängigkeit",
      description:
        "Unsere Gutachten basieren ausschließlich auf Fakten, Marktdaten und anerkannten Bewertungsverfahren der ImmoWertV. Kein Interessenkonflikt, kein Verkaufsdruck – nur objektive Bewertung.",
    },
    {
      icon: Award,
      title: "Fachkompetenz",
      description:
        "Erstellung nach den aktuellen Standards der ImmoWertV. Inhaber Alparslan Ünal ist zertifizierter Sachverständiger für Immobilienwertermittlung (DGuSV) und Inhaber des Personenzertifikats EU/A-001 (EWIVS).",
    },
    {
      icon: Heart,
      title: "Verlässlichkeit",
      description:
        siteConfig.responseCommitment + " Verbindliche Fristen und persönliche Betreuung.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A0A0A] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A0A0A] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
          <div>
            <div className="inline-block mb-6 px-4 py-1 bg-[#0A0A0A]/20 rounded-full">
              <span className="text-white bg-white/10 px-3 py-1 rounded-full text-sm font-semibold">
                ÜBER UNS
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ihr Experte für <span className="text-white">unabhängige</span>{" "}
              Immobilienbewertung
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Gegründet {siteConfig.foundedYear} · Verankert im Nordwesten · Bundesweit aktiv
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Unsere <span className="text-[#0A0A0A]">Philosophie</span>
            </h2>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              {siteConfig.name} wurde mit einem klaren Anspruch gegründet: Immobilienbewertung transparent, rechtssicher und methodisch einwandfrei nach ImmoWertV durchzuführen.
            </p>
            <p>
              Fachkenntnis, Sorgfalt und die volle Verantwortung für jedes erstellte Gutachten stehen im Mittelpunkt unserer Arbeit.
            </p>
            <p>
              Ob Privatperson, Amtsgericht, Rechtsanwalt oder Notar – jeder Auftrag wird mit derselben Ernsthaftigkeit behandelt. Ein Gutachten ist keine reine Formalität, sondern bildet häufig die Grundlage für weitreichende finanzielle und rechtliche Entscheidungen.
            </p>
            <p>
              Mit Hauptsitz in Westerstede betreuen wir Auftraggeber im Nordwesten Deutschlands ({siteConfig.taetigkeitsgebiet}) sowie im gesamten Bundesgebiet.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Unsere <span className="text-[#0A0A0A]">Werte</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Drei Säulen unserer täglichen Arbeit
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#0A0A0A] hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6 w-16 h-16 bg-[#0A0A0A]/10 rounded-xl flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-[#0A0A0A]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-1 bg-white/10 rounded-full">
                <span className="text-white text-sm font-semibold">
                  GRÜNDER UND INHABER
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Alparslan Ünal
              </h2>

              <div className="space-y-4 text-gray-200 leading-relaxed text-base md:text-lg">
                <p>
                  Mein Name ist Alparslan Ünal. Ich bin Inhaber des {siteConfig.name} und befasse mich intensiv mit der Bewertung von Immobilien.
                </p>
                <p>
                  Meine Ausbildung zum Immobilienkaufmann (IHK) sowie meine umfassende praktische Erfahrung in der Immobilienwirtschaft bilden die fachliche Grundlage meiner Arbeit.
                </p>
                <p>
                  Als zertifizierter Sachverständiger für Immobilienwertermittlung (DGuSV) und Inhaber des Personenzertifikats EU/A-001 (EWIVS Certification GmbH) arbeite ich nach den strengen Vorgaben der ImmoWertV.
                </p>
                <p className="font-semibold text-white">
                  {siteConfig.amtsgerichteText}
                </p>
                <p>
                  Mir ist wichtig, dass jedes Gutachten methodisch sauber, nachvollziehbar und verständlich aufbereitet ist – für private Eigentümer ebenso wie für Gerichte und Rechtsberater.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-gray-300 text-sm">
                  Sachverständiger für Immobilienwertermittlung (DGuSV) · Personenzertifikat EU/A-001 (EWIVS) · Bundesweit tätig
                </p>
              </div>
            </div>

            <div className="relative flex flex-col items-center gap-8">
              <div className="aspect-square w-full max-w-md rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 relative shadow-2xl">
                <Image
                  src={alpaImage}
                  alt="Alparslan Ünal - Sachverständiger für Immobilienwertermittlung"
                  fill
                  sizes="(max-width: 768px) 320px, 450px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Side-by-Side Seals */}
              <div className="p-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md w-full max-w-md">
                <SealsBlock sealClassName="h-20 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Single Source Section */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm">
            <QualificationBlock />
          </div>
        </div>
      </section>
    </div>
  );
}
