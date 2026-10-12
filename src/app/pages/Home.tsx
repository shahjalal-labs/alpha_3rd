import logoImage from "@/imports/PNG.png";
import dgusvSeal from "@/imports/Siegel_DGuSV_2026_PNG.png";
import ewivsSeal from "@/assets/ewivs_siegel_de.png";

import {
  Building2,
  ClipboardCheck,
  Clock,
  Home as HomeIcon,
  Mail,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import QualificationBlock from "../components/QualificationBlock";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";

const services = [
  {
    icon: ClipboardCheck,
    title: "Kurzgutachten",
    description:
      "Wir liefern eine fundierte Einschätzung des Marktwerts Ihrer Immobilie – ob für eine Kaufentscheidung, Erbschaft, Schenkung oder erste Orientierung. Schnell, verständlich und nachvollziehbar.",
  },
  {
    icon: Building2,
    title: "Verkehrswertgutachten",
    description:
      "Wir erstellen vollständige Gutachten nach § 194 BauGB und ImmoWertV – gerichtsfest und für alle Immobilientypen: Wohnimmobilien, Gewerbeimmobilien und Grundstücke.",
  },
];

export default function Home() {
  const faqCategories = [
    {
      category: "Allgemein",
      faqs: [
        {
          question: "Was ist ein Verkehrswertgutachten?",
          answer:
            "Ein Verkehrswertgutachten ermittelt den objektiven Marktwert einer Immobilie nach § 194 BauGB und der Immobilienwertermittlungsverordnung (ImmoWertV). Es ist das rechtssicherste und umfangreichste Bewertungsinstrument – anerkannt von Gerichten, Behörden und weiteren institutionellen Auftraggebern.",
        },
        {
          question:
            "Was ist der Unterschied zwischen Verkehrswertgutachten und Kurzgutachten?",
          answer:
            "Das Verkehrswertgutachten ist ein vollständiges, rechtssicheres Dokument nach ImmoWertV – geeignet für gerichtliche Verfahren, Erbauseinandersetzungen und behördliche Zwecke. Das Kurzgutachten liefert eine fundierte Markteinschätzung für private Entscheidungen wie Kauf, Verkauf oder Erbschaft – schneller und kostengünstiger, jedoch nicht gerichtsfest.",
        },
        {
          question: "Für welche Immobilientypen erstellen Sie Gutachten?",
          answer:
            "Wir bewerten Wohnimmobilien (Einfamilienhäuser, Mehrfamilienhäuser, Eigentumswohnungen), Gewerbeimmobilien sowie unbebaute Grundstücke – bundesweit.",
        },
        {
          question: "Sind Ihre Gutachten gerichtsfest?",
          answer:
            "Ja. Unsere Verkehrswertgutachten erfüllen die Anforderungen von Amtsgerichten und werden im Rahmen von Zwangsversteigerungsverfahren und anderen gerichtlichen Verfahren eingesetzt.",
        },
      ],
    },
    {
      category: "Ablauf & Zusammenarbeit",
      faqs: [
        {
          question: "Wie läuft ein Gutachtenauftrag ab?",
          answer:
            "Nach Ihrer Anfrage führen wir ein persönliches Vorgespräch zur Bedarfsanalyse. Anschließend unterstützen wir Sie bei der Unterlagenbeschaffung, besichtigen das Objekt vor Ort und erstellen das Gutachten auf Basis aller relevanten Marktdaten. Die Lieferung erfolgt fristgerecht – digital oder in gedruckter Form.",
        },
        {
          question: "Wie schnell erhalte ich eine Rückmeldung?",
          answer:
            "Wir melden uns in der Regel innerhalb eines Werktages. Bei Anfragen am Wochenende spätestens am nächsten Werktag.",
        },
        {
          question: "Wie lange dauert die Erstellung eines Gutachtens?",
          answer:
            "Die Bearbeitungszeit hängt vom Gutachtentyp und der Objektkomplexität ab. Ein Kurzgutachten ist in der Regel binnen weniger Tage verfügbar. Ein vollständiges Verkehrswertgutachten benötigt je nach Umfang und Unterlagenlage typischerweise zwei bis vier Wochen.",
        },
        {
          question: "Muss ich selbst Unterlagen beschaffen?",
          answer:
            "Nein – wir unterstützen Sie aktiv bei der Zusammenstellung aller erforderlichen Dokumente wie Grundbuchauszug, Baupläne, Flurkarte oder Teilungserklärung.",
        },
        {
          question: "Sind Sie auch außerhalb Niedersachsens tätig?",
          answer:
            "Ja. Wir sind bundesweit tätig – mit regionaler Verwurzelung im Nordwesten Deutschlands.",
        },
      ],
    },
    {
      category: "Kosten & Auftrag",
      faqs: [
        {
          question: "Was kostet ein Gutachten?",
          answer:
            "Die Kosten richten sich nach Gutachtentyp, Objektart und Aufwand. Wir erstellen Ihnen nach dem Erstgespräch ein transparentes und individuelles Angebot – ohne versteckte Kosten.",
        },
        {
          question: "Gibt es eine Mindestbeauftragung?",
          answer:
            "Nein. Jeder Auftrag wird individuell besprochen und angeboten – unabhängig von Objektgröße oder Auftragswert.",
        },
        {
          question: "Wie kann ich einen Auftrag erteilen?",
          answer:
            "Per Telefon, E-Mail oder über unser Kontaktformular. Nach dem Erstgespräch erhalten Sie ein schriftliches Angebot. Der Auftrag gilt mit Ihrer Bestätigung als erteilt.",
        },
      ],
    },
    {
      category: "Anlässe & Verwendungszwecke",
      faqs: [
        {
          question: "Wann brauche ich ein Gutachten?",
          answer:
            "Typische Anlässe sind: Kauf oder Verkauf einer Immobilie, Erbschaft oder Schenkung, Scheidung und Vermögensaufteilung, Zwangsversteigerungsverfahren, steuerliche Bewertung, Beleihung sowie gerichtliche und behördliche Verfahren.",
        },
        {
          question: "Kann ich ein Gutachten für steuerliche Zwecke verwenden?",
          answer:
            "Unsere Gutachten dienen als fundierte fachliche Grundlage für steuerliche Fragestellungen, etwa bei Erbschaft oder Schenkung, und können gegenüber dem Finanzamt vorgelegt werden. Ob ein Gutachten im Einzelfall als Nachweis eines niedrigeren gemeinen Werts nach § 198 BewG anerkannt wird, richtet sich nach den gesetzlichen Anforderungen an die Person des Gutachters. Den Verwendungszweck besprechen wir daher vor Auftragsannahme mit Ihnen.",
        },
        {
          question:
            "Ich möchte eine Immobilie kaufen – welches Gutachten benötige ich?",
          answer:
            "Für eine erste fundierte Einschätzung vor einer Kaufentscheidung empfehlen wir ein Kurzgutachten. Wenn rechtliche Sicherheit erforderlich ist, erstellen wir ein vollständiges Verkehrswertgutachten.",
        },
        {
          question:
            "Ich bin Rechtsanwalt oder Notar – können wir dauerhaft zusammenarbeiten?",
          answer:
            "Ja. Wir arbeiten regelmäßig mit Rechtsanwälten und Notaren zusammen und sind an einer langfristigen, verlässlichen Zusammenarbeit interessiert. Sprechen Sie uns gerne direkt an.",
        },
      ],
    },
    {
      category: "Qualifikation & Verband",
      faqs: [
        {
          question: "Welche Qualifikationen haben Sie?",
          answer:
            "Inhaber Alparslan Ünal ist Immobilienkaufmann (IHK), Sachverständiger für Immobilienwertermittlung (DGuSV) und Inhaber des Personenzertifikats EU/A-001 (EWIVS). Gutachten werden nach den aktuellen Standards der ImmoWertV erstellt.",
        },
        {
          question: "Was ist der DGuSV?",
          answer:
            "Der Deutsche Gutachter- und Sachverständigenverband e.V. (DGuSV) ist ein anerkannter Berufsverband für Sachverständige in Deutschland. Die Mitgliedschaft setzt eine nachgewiesene Qualifikation voraus und steht für fachliche Kompetenz und Seriosität.",
        },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - 100% Server Rendered HTML for instant LCP */}
      <section className="relative min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-88px)] flex flex-col md:flex-row items-center md:items-start overflow-hidden bg-[#FAFAF9]">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 md:py-12 flex flex-col lg:flex-row items-center lg:items-center gap-16 lg:gap-20">
          <div className="w-full max-w-4xl lg:flex-1">
            <div className="mb-8 md:mb-12">
              <h1 className="text-4xl md:text-6xl lg:text-[88px] font-bold mb-8 leading-[1.1] tracking-tight break-words">
                Immobilienbewertung mit Substanz.
              </h1>
            </div>

            <div className="mb-7 md:mb-14">
              <p className="text-base md:text-2xl text-gray-600 mb-4 md:mb-10 w-full max-w-full md:max-w-2xl leading-relaxed break-words">
                Verkehrswertgutachten und Kurzgutachten – <br /> für Privatpersonen,
                Gerichte, Rechtsanwälte und Notare. Verankert im Nordwesten.
                Bundesweit aktiv.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+4944888600455" aria-label="Jetzt anrufen: +49 4488 8600455">
                <Button className="bg-[#0A0A0A] hover:bg-[#555555] text-white px-6 py-3 md:px-12 md:py-8 md:text-lg rounded-full group flex items-center min-h-[48px]">
                  <Phone className="w-5 h-5 mr-2" />
                  Jetzt anrufen
                </Button>
              </a>
              <a href="#kontakt-form" aria-label="Zum Kontaktformular springen">
                <Button
                  variant="outline"
                  className="border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white px-6 py-3 md:px-12 md:py-8 md:text-lg rounded-full min-h-[48px]"
                >
                  Gutachten anfragen
                </Button>
              </a>
            </div>
          </div>

          <div className="w-full flex justify-center items-center gap-2 lg:w-auto lg:flex-none lg:pl-6">
            <Image
              src={dgusvSeal}
              alt="DGuSV Siegel 2026"
              width={144}
              height={144}
              sizes="(max-width: 640px) 96px, 144px"
              className="w-24 md:w-36 h-auto drop-shadow-xl object-contain"
              priority
            />
            <Image
              src={ewivsSeal}
              alt="EWIVS Certification – Personenzertifikat EU/A-001"
              width={144}
              height={144}
              sizes="(max-width: 640px) 96px, 144px"
              className="w-24 md:w-36 h-auto drop-shadow-xl pr-[16px] object-contain"
              priority
            />
          </div>
        </div>

        <div className="hidden md:flex absolute bottom-28 md:bottom-24 left-8 lg:left-16">
          <div className="flex flex-col items-center gap-4">
            <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#B8A67D]/50 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#0A0A0A]" />
          </div>
        </div>

        <div className="relative z-10 flex w-full md:w-auto justify-center md:justify-end mt-8 md:mt-0 px-4 md:px-0 md:absolute md:bottom-16 md:right-8 lg:right-16">
          <div className="flex flex-col items-center md:items-end gap-3 md:gap-4">
            <div className="flex flex-col items-center md:items-end gap-2 md:mr-8">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-full border border-gray-200">
                <Clock className="w-5 h-5 text-[#0A0A0A]" />
                <span className="text-sm font-medium">
                  Antwort i. d. R. in 1 Werktag
                </span>
              </div>
              <a
                href="#leistungen"
                aria-label="Leistungen ansehen"
                className="flex items-center gap-2 cursor-pointer bg-white/80 backdrop-blur-sm px-4 py-3 rounded-full border border-gray-200 hover:bg-white transition-colors min-h-[44px]"
              >
                <span className="text-sm font-medium">
                  Leistungen ansehen
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute top-0 right-16 lg:right-24 w-[1px] h-full bg-gradient-to-b from-transparent via-[#B8A67D]/20 to-transparent" />
      </section>

      {/* Leistungen Section */}
      <section id="leistungen" className="py-16 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Unsere <span className="text-[#0A0A0A]">Leistungen</span> auf
              einen Blick
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Präzise Gutachten – für private und gerichtliche Auftraggeber
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-[#0A0A0A] hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-6 w-16 h-16 bg-[#0A0A0A]/10 rounded-xl flex items-center justify-center group-hover:bg-[#0A0A0A] transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-[#0A0A0A] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Credentials Section */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-1 bg-[#0A0A0A]/10 rounded-full">
                <span className="text-[#0A0A0A] text-sm font-semibold">
                  GEGRÜNDET 2025
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ihre Immobilie.{" "}
                <span className="text-[#0A0A0A]">Professionell bewertet.</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Als zertifizierter Sachverständiger für Immobilienwertermittlung (DGuSV)
                  erstelle ich fundierte Verkehrswertgutachten und Kurzgutachten
                  – für Privatpersonen, Amtsgerichte, Rechtsanwälte und Notare.
                </p>
                <p>
                  Mit regionaler Expertise im Nordwesten und bundesweiter
                  Reichweite. Mitglied im Deutschen Gutachter- und Sachverständigenverband e.V. (DGuSV).
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border-2 border-gray-100 flex items-center justify-center p-12">
                <Image
                  src={logoImage}
                  alt="Uenal Sachverständigenbüro Logo"
                  width={360}
                  height={240}
                  sizes="(max-width: 640px) 260px, 360px"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
              <div className="absolute md:-bottom-8 -bottom-16 right-0 md:-right-8 bg-white p-8 rounded-2xl shadow-2xl border border-gray-200">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0A0A0A]">2025</div>
                  <div className="text-sm text-gray-600 mt-2">Gegründet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Warum{" "}
              <span className="text-[#0A0A0A]">Uenal Sachverständigenbüro</span>
              ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Zertifizierte Kompetenz",
                description:
                  "Wir arbeiten nach aktuellen Standards der Immobilienwertermittlung – zertifiziert als Sachverständiger für Immobilienwertermittlung (DGuSV) und Personenzertifikat EU/A-001 (EWIVS).",
                icon: ShieldCheck,
              },
              {
                title: "Antwort innerhalb eines Werktages",
                description:
                  "Wir melden uns in der Regel innerhalb eines Werktages. Bei Anfragen am Wochenende spätestens am nächsten Werktag. Kein Formular-Chaos, keine Warteschleife.",
                icon: Clock,
              },
              {
                title: "Neutral & objektiv",
                description:
                  "Unser Gutachten basiert ausschließlich auf Fakten, Marktdaten und anerkannten Bewertungsverfahren – transparent und nachvollziehbar für alle Beteiligten.",
                icon: Users,
              },
              {
                title: "Gerichtsfeste Gutachten",
                description:
                  "Unsere Gutachten erfüllen die Anforderungen von Gerichten, Behörden und weiteren institutionellen Auftraggebern – methodisch sauber und rechtssicher.",
                icon: Building2,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-[#0A0A0A] hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-[#0A0A0A]/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-[#0A0A0A]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Für wen wir <span className="text-[#0A0A0A]">arbeiten</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Privatpersonen, Gerichte und Rechtsberufe – wir sind der richtige
              Ansprechpartner
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Privatpersonen",
                description:
                  "Ob Kauf, Verkauf, Erbschaft oder Schenkung – wir liefern eine verlässliche Wertermittlung als sichere Grundlage für Ihre Entscheidung.",
                icon: HomeIcon,
              },
              {
                title: "Amtsgerichte & Zwangsversteigerung",
                description:
                  "Als Sachverständiger für Zwangsversteigerungsverfahren tätig, u. a. für die Amtsgerichte Osterholz-Scharmbeck, Buxtehude, Rotenburg (Wümme) und Gifhorn.",
                icon: Building2,
              },
              {
                title: "Rechtsanwälte & Notare",
                description:
                  "Wir erstellen fundierte Gutachten für Scheidungsverfahren, Erbauseinandersetzungen und notarielle Beurkundungen – präzise, rechtssicher und termingerecht.",
                icon: ClipboardCheck,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-2xl border-2 border-transparent hover:bg-white hover:border-[#0A0A0A] hover:shadow-lg transition-all text-center"
              >
                <div className="w-12 h-12 bg-[#0A0A0A]/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="w-6 h-6 text-[#0A0A0A]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              So läuft Ihr{" "}
              <span className="text-[#0A0A0A]">Gutachtenauftrag</span> ab
            </h2>
            <p className="text-xl text-gray-600">
              Von der Anfrage bis zum fertigen Gutachten
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div
              className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#0A0A0A] to-gray-300 pointer-events-none"
            />

            {[
              {
                step: "01",
                title: "Anfrage",
                description:
                  "Nehmen Sie Kontakt auf – per Telefon, E-Mail oder Formular. Wir melden uns in der Regel innerhalb eines Werktages.",
                side: "left",
              },
              {
                step: "02",
                title: "Vorbesprechung & Bedarfsanalyse",
                description:
                  "Wir besprechen Ihr Anliegen persönlich, klären den Gutachtentyp und alle relevanten Rahmenbedingungen – damit wir gezielt vorgehen können.",
                side: "right",
              },
              {
                step: "03",
                title: "Unterlagenbeschaffung",
                description:
                  "Wir unterstützen Sie bei der Zusammenstellung aller erforderlichen Dokumente – Grundbuchauszug, Baupläne, Flurkarte, Teilungserklärung und weitere objektrelevante Unterlagen.",
                side: "left",
              },
              {
                step: "04",
                title: "Ortstermin",
                description:
                  "Wir besichtigen das Objekt vor Ort, dokumentieren den Zustand und erfassen alle bewertungsrelevanten Merkmale.",
                side: "right",
              },
              {
                step: "05",
                title: "Gutachtenerstellung",
                description:
                  "Wir werten alle Unterlagen und Marktdaten aus und erstellen ein vollständiges, rechtssicheres Gutachten nach anerkannten Bewertungsverfahren.",
                side: "left",
              },
              {
                step: "06",
                title: "Lieferung",
                description:
                  "Sie erhalten Ihr Gutachten in der vereinbarten Frist – digital und auf Wunsch auch in gedruckter Form.",
                side: "right",
              },
            ].map((item, index) => {
              const card = (
                <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-[#0A0A0A] transition-all">
                  <div className={`flex items-center gap-3 mb-3 ${item.side === "left" ? "md:justify-end" : ""}`}>
                    <div className="flex-shrink-0 w-10 h-10 bg-[#0A0A0A] text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-[#0A0A0A]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );

              return (
                <div
                  key={index}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-16 ${index === 5 ? "mb-0" : ""}`}
                >
                  <div className={`md:pr-8 ${item.side === "left" ? "md:text-right" : "hidden md:block"}`}>
                    {item.side === "left" && card}
                  </div>

                  <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 bg-[#0A0A0A] rounded-full border-4 border-gray-50" />

                  <div className={`md:pl-8 ${item.side === "right" ? "md:text-left" : "hidden md:block"}`}>
                    {item.side === "right" && card}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Qualification Block */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-8">
          <div className="p-8 bg-gray-50 rounded-2xl border border-gray-200">
            <QualificationBlock />
          </div>
        </div>
      </section>

      {/* Contact Form Island */}
      <ContactForm />

      {/* FAQ Section */}
      <section className="py-16 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Häufige <span className="text-[#0A0A0A]">Fragen</span> – FAQ
            </h2>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold mb-6 text-[#0A0A0A]">
                  {category.category}
                </h3>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`category-${categoryIndex}-item-${faqIndex}`}
                      className="border border-gray-200 rounded-2xl px-6 bg-white hover:border-[#0A0A0A] transition-colors"
                    >
                      <AccordionTrigger className="text-lg font-semibold text-left hover:text-[#0A0A0A] hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section id="kontakt" className="py-16 md:pt-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Bereit für Ihre <span className="text-white">Immobilie</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Kontaktieren Sie uns noch heute für eine persönliche Beratung
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+4944888600455"
                aria-label="Jetzt anrufen: +49 4488 8600455"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0A0A0A] rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold min-h-[48px]"
              >
                <Phone className="w-5 h-5" />
                Jetzt anrufen
              </a>
              <a
                href="mailto:info@uenal-gutachten.de"
                aria-label="E-Mail schreiben an info@uenal-gutachten.de"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white rounded-full hover:bg-white/20 transition-all duration-300 font-semibold min-h-[48px]"
              >
                <Mail className="w-5 h-5" />
                E-Mail schreiben
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
