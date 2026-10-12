"use client";

import { ArrowLeft, ArrowRight, BookOpen, Calendar, Clock } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../components/ui/button";

interface BlogPostData {
  title: string;
  date: string;
  category: string;
  readTime: string;
  content: React.ReactNode;
}

interface BlogPostProps {
  slug?: string;
}

export default function BlogPost({ slug: slugProp }: BlogPostProps = {}) {
  const slug =
    slugProp ??
    (typeof window !== "undefined"
      ? window.location.pathname.split("/").filter(Boolean).pop()
      : undefined);

  const blogPosts: Record<string, BlogPostData> = {
    "wann-brauche-ich-ein-verkehrswertgutachten": {
      title: "Wann brauche ich ein Verkehrswertgutachten?",
      date: "15. März 2026",
      category: "Ratgeber",
      readTime: "5 Min.",
      content: (
        <>
          <p className="text-lg leading-relaxed mb-6">
            Ein Verkehrswertgutachten nach § 194 BauGB ist das umfassendste und
            rechtssicherste Gutachten für Immobilien. Doch nicht in jedem Fall
            ist ein solches Vollgutachten notwendig. In diesem Artikel erklären
            wir Ihnen, wann Sie ein Verkehrswertgutachten benötigen und wann ein
            Kurzgutachten ausreicht.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Wann ist ein Verkehrswertgutachten zwingend erforderlich?
          </h2>
          <p className="leading-relaxed mb-4">
            In folgenden Situationen ist ein Verkehrswertgutachten nach § 194
            BauGB in der Regel unerlässlich:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>Gerichtliche Verfahren:</strong> Bei Scheidungen,
              Erbauseinandersetzungen oder Enteignungen fordern Gerichte ein
              gerichtsfestes Vollgutachten.
            </li>
            <li>
              <strong>Zwangsversteigerungen:</strong> Das Amtsgericht benötigt
              ein Verkehrswertgutachten zur Festlegung des Mindestgebots.
            </li>
            <li>
              <strong>Finanzamt:</strong> Für steuerliche Zwecke wie Erbschaft-
              oder Schenkungsteuer wird oft ein Vollgutachten verlangt.
            </li>
            <li>
              <strong>Behördliche Verfahren:</strong> Bei Enteignungen,
              Entschädigungen oder Umlegungsverfahren ist ein normgerechtes
              Gutachten erforderlich.
            </li>
            <li>
              <strong>Bankfinanzierungen:</strong> Manche Banken verlangen bei
              hohen Kreditsummen ein Vollgutachten statt eines Kurzgutachtens.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Wann reicht ein Kurzgutachten?
          </h2>
          <p className="leading-relaxed mb-4">
            Für folgende Zwecke ist ein Kurzgutachten in der Regel ausreichend:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Private Kauf- oder Verkaufsentscheidungen</li>
            <li>Orientierung über den aktuellen Marktwert</li>
            <li>Interne Vermögensplanung</li>
            <li>Beratung zu Modernisierungsmaßnahmen</li>
            <li>Vorbereitung auf Verhandlungen mit potenziellen Käufern</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Der Unterschied im Umfang
          </h2>
          <p className="leading-relaxed mb-6">
            Ein Verkehrswertgutachten umfasst typischerweise 40–80 Seiten mit
            detaillierter Objektanalyse, Fotodokumentation, Anwendung aller drei
            Wertermittlungsverfahren und umfassender Herleitung des
            Verkehrswerts. Ein Kurzgutachten hingegen ist kompakter (ca. 15–25
            Seiten), konzentriert sich auf das relevante Hauptverfahren und
            verzichtet auf einige Details, die für private Zwecke nicht
            notwendig sind.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Kosten und Nutzen abwägen
          </h2>
          <p className="leading-relaxed mb-6">
            Ein Verkehrswertgutachten ist deutlich aufwendiger und daher teurer
            als ein Kurzgutachten. Wenn Sie das Gutachten jedoch für rechtliche
            oder behördliche Zwecke benötigen, führt kein Weg am Vollgutachten
            vorbei. Für private Zwecke hingegen bietet das Kurzgutachten ein
            sehr gutes Preis-Leistungs-Verhältnis.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Fazit</h2>
          <p className="leading-relaxed mb-6">
            Die Wahl zwischen Verkehrswertgutachten und Kurzgutachten hängt vom
            Verwendungszweck ab. Wir beraten Sie gerne, welches Gutachten für
            Ihre Situation das richtige ist. Kontaktieren Sie uns für eine
            unverbindliche Erstberatung.
          </p>
        </>
      ),
    },
    "unterschied-kurzgutachten-vollgutachten": {
      title: "Kurzgutachten vs. Vollgutachten: Der Unterschied",
      date: "08. März 2026",
      category: "Gutachten",
      readTime: "6 Min.",
      content: (
        <>
          <p className="text-lg leading-relaxed mb-6">
            Kurzgutachten und Verkehrswertgutachten (Vollgutachten) sind beide
            Instrumente der Immobilienbewertung – unterscheiden sich aber
            erheblich in Umfang, Kosten und Verwendungszweck. In diesem Artikel
            erklären wir die wesentlichen Unterschiede und helfen Ihnen bei der
            Entscheidung, welches Gutachten Sie benötigen.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Das Verkehrswertgutachten (Vollgutachten)
          </h2>
          <p className="leading-relaxed mb-4">
            Das Verkehrswertgutachten nach § 194 BauGB ist die umfassendste Form
            der Immobilienbewertung:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>Umfang:</strong> 40–80 Seiten, vollständige
              Objektdokumentation mit Fotos und Plänen
            </li>
            <li>
              <strong>Methodik:</strong> Anwendung aller drei normierten
              Wertermittlungsverfahren (Vergleichswert-, Ertragswert-,
              Sachwertverfahren)
            </li>
            <li>
              <strong>Rechtssicherheit:</strong> Gerichtsfest, von Behörden und
              Banken anerkannt
            </li>
            <li>
              <strong>Verwendung:</strong> Scheidung, Erbschaft,
              Zwangsversteigerung, Finanzamt, Gericht
            </li>
            <li>
              <strong>Bearbeitungszeit:</strong> 2–4 Wochen
            </li>
            <li>
              <strong>Kosten:</strong> Höher aufgrund des erheblichen Aufwands
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">Das Kurzgutachten</h2>
          <p className="leading-relaxed mb-4">
            Das Kurzgutachten ist eine kompakte Alternative für private Zwecke:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>Umfang:</strong> 15–25 Seiten, konzentriert auf das
              Wesentliche
            </li>
            <li>
              <strong>Methodik:</strong> Anwendung des relevanten
              Hauptverfahrens (i.d.R. Vergleichswertverfahren)
            </li>
            <li>
              <strong>Rechtssicherheit:</strong> Fundiert, aber nicht für alle
              rechtlichen Zwecke geeignet
            </li>
            <li>
              <strong>Verwendung:</strong> Private Kauf-/Verkaufsentscheidung,
              Orientierung, Vermögensplanung
            </li>
            <li>
              <strong>Bearbeitungszeit:</strong> 5–7 Werktage
            </li>
            <li>
              <strong>Kosten:</strong> Deutlich günstiger als Vollgutachten
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">Gemeinsamkeiten</h2>
          <p className="leading-relaxed mb-6">
            Beide Gutachtenarten beinhalten eine Objektbesichtigung vor Ort,
            eine Analyse der Bausubstanz und Ausstattung, eine Marktanalyse mit
            aktuellen Vergleichsdaten sowie eine fundierte Wertermittlung nach
            anerkannten Methoden. Beide werden von zertifizierten
            Sachverständigen erstellt.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Welches Gutachten ist das richtige für mich?
          </h2>
          <p className="leading-relaxed mb-4">
            Die Wahl hängt vom Verwendungszweck ab:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>Verkehrswertgutachten wählen,</strong> wenn Sie das
              Gutachten vor Gericht, Finanzamt oder Behörden verwenden müssen.
            </li>
            <li>
              <strong>Kurzgutachten wählen,</strong> wenn Sie eine fundierte
              Werteinschätzung für private Zwecke benötigen und dabei Kosten
              sparen möchten.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">Unser Tipp</h2>
          <p className="leading-relaxed mb-6">
            Sind Sie unsicher, welches Gutachten Sie benötigen? Kontaktieren Sie
            uns für eine kostenlose Erstberatung. Wir analysieren Ihre Situation
            und empfehlen Ihnen die passende Gutachtenart – transparent und
            unverbindlich.
          </p>
        </>
      ),
    },
    "immobilienbewertung-bei-scheidung": {
      title: "Immobilienbewertung bei Scheidung – Was Sie wissen müssen",
      date: "01. März 2026",
      category: "Scheidung",
      readTime: "7 Min.",
      content: (
        <>
          <p className="text-lg leading-relaxed mb-6">
            Bei einer Scheidung gehört die gemeinsame Immobilie oft zu den
            größten Streitpunkten. Eine professionelle und unabhängige
            Immobilienbewertung schafft Klarheit und bildet die Grundlage für
            eine faire Vermögensaufteilung. In diesem Artikel erklären wir,
            worauf es bei der Bewertung im Scheidungsfall ankommt.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Warum ist ein Gutachten bei Scheidung wichtig?
          </h2>
          <p className="leading-relaxed mb-6">
            Im Scheidungsverfahren muss der Wert der gemeinsamen Immobilie
            ermittelt werden, um den Zugewinnausgleich zu berechnen. Ohne
            objektive Bewertung entstehen oft langwierige Konflikte. Ein
            unabhängiges Gutachten eines zertifizierten Sachverständigen wird
            von beiden Parteien und vom Gericht anerkannt und beschleunigt das
            Verfahren erheblich.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Welches Gutachten wird benötigt?
          </h2>
          <p className="leading-relaxed mb-4">
            Für Scheidungsverfahren wird in der Regel ein Verkehrswertgutachten
            nach § 194 BauGB benötigt, da es:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Gerichtsfest und rechtssicher ist</li>
            <li>Von Familiengerichten anerkannt wird</li>
            <li>
              Eine detaillierte und nachvollziehbare Wertherleitung bietet
            </li>
            <li>Beide Parteien rechtlich absichert</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Der richtige Bewertungsstichtag
          </h2>
          <p className="leading-relaxed mb-6">
            Entscheidend ist der Stichtag der Bewertung. Im Scheidungsverfahren
            ist dies in der Regel der Zeitpunkt der Zustellung des
            Scheidungsantrags. Der Sachverständige ermittelt den Verkehrswert zu
            diesem Stichtag – auch wenn die Bewertung später erfolgt.
            Marktveränderungen nach dem Stichtag werden nicht berücksichtigt.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Unabhängigkeit ist entscheidend
          </h2>
          <p className="leading-relaxed mb-6">
            Wichtig ist, dass der Sachverständige von beiden Parteien gemeinsam
            beauftragt wird oder vom Gericht bestellt ist. So wird
            sichergestellt, dass die Bewertung neutral erfolgt und keine Partei
            benachteiligt wird. Ein gemeinsam beauftragter Gutachter ist zudem
            kostengünstiger, da nur ein Gutachten erstellt werden muss.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Was wird bewertet?</h2>
          <p className="leading-relaxed mb-4">Der Sachverständige bewertet:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Den aktuellen Verkehrswert der Immobilie</li>
            <li>Eventuelle Wertminderungen durch Mängel oder Schäden</li>
            <li>Wertsteigernde Faktoren wie Modernisierungen</li>
            <li>Die aktuelle Marktsituation am Standort</li>
            <li>Bestehende Belastungen (z.B. Grundschulden, Wegerechte)</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Kosten und Aufteilung
          </h2>
          <p className="leading-relaxed mb-6">
            Die Kosten für das Gutachten werden in der Regel von beiden Parteien
            je zur Hälfte getragen. Diese Investition lohnt sich jedoch, da ein
            professionelles Gutachten langwierige und teure Rechtsstreitigkeiten
            vermeidet und zu einer fairen Einigung beiträgt.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Unser Service für Scheidungsfälle
          </h2>
          <p className="leading-relaxed mb-6">
            Wir sind erfahren in der Bewertung von Immobilien im
            Scheidungskontext und arbeiten stets neutral und diskret. Unser
            Gutachten wird von Familiengerichten anerkannt und bildet eine
            verlässliche Grundlage für die Vermögensaufteilung. Kontaktieren Sie
            uns für eine sensible und professionelle Beratung.
          </p>
        </>
      ),
    },
    "immobilie-geerbt-welches-gutachten": {
      title: "Immobilie geerbt – Welches Gutachten brauche ich?",
      date: "22. Februar 2026",
      category: "Erbschaft",
      readTime: "6 Min.",
      content: (
        <>
          <p className="text-lg leading-relaxed mb-6">
            Eine geerbte Immobilie bringt nicht nur emotionale, sondern auch
            rechtliche und finanzielle Herausforderungen mit sich. Ein
            professionelles Gutachten hilft Ihnen bei wichtigen Entscheidungen –
            von der Erbauseinandersetzung über die Steuererklärung bis hin zur
            Frage, ob Sie die Immobilie behalten oder verkaufen sollten.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Warum brauche ich bei einer Erbschaft ein Gutachten?
          </h2>
          <p className="leading-relaxed mb-4">
            Ein Gutachten ist in folgenden Situationen wichtig:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>Erbschaftsteuer:</strong> Das Finanzamt benötigt den
              Verkehrswert zum Todeszeitpunkt zur Berechnung der Erbschaftsteuer
            </li>
            <li>
              <strong>Erbauseinandersetzung:</strong> Bei mehreren Erben muss
              der Wert für eine faire Aufteilung ermittelt werden
            </li>
            <li>
              <strong>Pflichtteilsansprüche:</strong> Pflichtteilsberechtigte
              benötigen eine Wertermittlung
            </li>
            <li>
              <strong>Verkaufsentscheidung:</strong> Sie möchten wissen, ob sich
              ein Verkauf lohnt
            </li>
            <li>
              <strong>Finanzierung:</strong> Falls Sie Miterben auszahlen
              müssen, benötigt die Bank ein Gutachten
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Verkehrswertgutachten für das Finanzamt
          </h2>
          <p className="leading-relaxed mb-6">
            Für die Erbschaftsteuererklärung verlangt das Finanzamt den
            Verkehrswert der Immobilie zum Todeszeitpunkt des Erblassers. Ein
            Verkehrswertgutachten nach § 194 BauGB wird vom Finanzamt anerkannt
            und kann Ihnen helfen, zu hohe Steuerfestsetzungen zu vermeiden.
            Besonders bei höherwertigen Immobilien lohnt sich ein Gutachten, da
            das Finanzamt sonst oft überhöhte Werte ansetzt.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Erbauseinandersetzung unter mehreren Erben
          </h2>
          <p className="leading-relaxed mb-6">
            Erben mehrere Personen eine Immobilie, entsteht eine
            Erbengemeinschaft. Für eine faire Aufteilung oder Auszahlung
            einzelner Miterben ist ein unabhängiges Gutachten unerlässlich. Es
            schafft Klarheit und verhindert langwierige Streitigkeiten. Das
            Gutachten sollte von allen Erben gemeinsam beauftragt werden, um
            Akzeptanz und Kosteneffizienz zu gewährleisten.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Der richtige Bewertungsstichtag
          </h2>
          <p className="leading-relaxed mb-6">
            Bei Erbschaften ist der Bewertungsstichtag der Todestag des
            Erblassers. Der Sachverständige ermittelt den Verkehrswert zu diesem
            Zeitpunkt – auch wenn die Bewertung erst Monate später erfolgt. Dies
            ist rechtlich zwingend und wird vom Finanzamt und von Gerichten so
            verlangt.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Kurzgutachten oder Vollgutachten?
          </h2>
          <p className="leading-relaxed mb-4">
            Die Wahl hängt vom Verwendungszweck ab:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>Vollgutachten:</strong> Notwendig für Finanzamt, Gericht
              und bei strittigen Erbauseinandersetzungen
            </li>
            <li>
              <strong>Kurzgutachten:</strong> Ausreichend für interne
              Orientierung und einvernehmliche Aufteilungen unter Erben
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">Kosten und Nutzen</h2>
          <p className="leading-relaxed mb-6">
            Die Kosten für ein Gutachten sind eine Investition, die sich
            mehrfach auszahlt: Sie vermeiden zu hohe Erbschaftsteuern, schaffen
            Klarheit unter den Erben und erhalten eine fundierte Grundlage für
            Ihre Entscheidung über Behalten oder Verkaufen. Bei
            Erbengemeinschaften werden die Kosten in der Regel anteilig geteilt.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Unser Service für Erbfälle
          </h2>
          <p className="leading-relaxed mb-6">
            Wir haben langjährige Erfahrung in der Bewertung geerbter Immobilien
            und berücksichtigen alle rechtlichen und steuerlichen
            Besonderheiten. Unsere Gutachten werden vom Finanzamt und von
            Gerichten anerkannt. Kontaktieren Sie uns für eine einfühlsame und
            professionelle Beratung.
          </p>
        </>
      ),
    },
    "drei-wertermittlungsverfahren-erklaert": {
      title: "Die drei Wertermittlungsverfahren einfach erklärt",
      date: "15. Februar 2026",
      category: "Fachwissen",
      readTime: "8 Min.",
      content: (
        <>
          <p className="text-lg leading-relaxed mb-6">
            Bei der Immobilienbewertung kommen drei normierte Verfahren zum
            Einsatz: das Vergleichswertverfahren, das Ertragswertverfahren und
            das Sachwertverfahren. Jedes Verfahren hat seine Stärken und wird
            für unterschiedliche Immobilienarten verwendet. In diesem Artikel
            erklären wir die Verfahren verständlich und praxisnah.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            1. Das Vergleichswertverfahren
          </h2>
          <h3 className="text-xl font-semibold mb-3 mt-6">
            Wann wird es angewendet?
          </h3>
          <p className="leading-relaxed mb-4">
            Das Vergleichswertverfahren ist die erste Wahl für selbstgenutzte
            Wohnimmobilien wie Eigentumswohnungen, Einfamilienhäuser und
            Reihenhäuser. Es wird angewendet, wenn ausreichend Vergleichsdaten
            aus tatsächlichen Verkäufen vorliegen.
          </p>
          <h3 className="text-xl font-semibold mb-3 mt-6">
            Wie funktioniert es?
          </h3>
          <p className="leading-relaxed mb-6">
            Der Wert der Immobilie wird durch den Vergleich mit kürzlich
            verkauften ähnlichen Objekten in vergleichbarer Lage ermittelt.
            Dabei werden Faktoren wie Größe, Ausstattung, Baujahr und Zustand
            berücksichtigt. Der Sachverständige gleicht Unterschiede durch Zu-
            und Abschläge aus und ermittelt so den marktgerechten Verkehrswert.
          </p>
          <h3 className="text-xl font-semibold mb-3 mt-6">Vorteile</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Sehr marktnah, da es reale Verkaufspreise berücksichtigt</li>
            <li>Relativ einfach nachvollziehbar</li>
            <li>Spiegelt tatsächliche Marktentwicklungen wider</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            2. Das Ertragswertverfahren
          </h2>
          <h3 className="text-xl font-semibold mb-3 mt-6">
            Wann wird es angewendet?
          </h3>
          <p className="leading-relaxed mb-4">
            Das Ertragswertverfahren kommt bei vermieteten Immobilien zum
            Einsatz – insbesondere bei Mehrfamilienhäusern, Gewerbeimmobilien
            und Renditeobjekten. Hier steht der erzielbare Ertrag im
            Vordergrund.
          </p>
          <h3 className="text-xl font-semibold mb-3 mt-6">
            Wie funktioniert es?
          </h3>
          <p className="leading-relaxed mb-6">
            Der Wert wird aus den erzielbaren Mieteinnahmen abgeleitet. Dabei
            werden die Jahresnettokaltmiete, die Bewirtschaftungskosten
            (Instandhaltung, Verwaltung, Mietausfallwagnis) und der Bodenwert
            berücksichtigt. Der Reinertrag wird kapitalisiert und zum Bodenwert
            addiert. Das Ergebnis ist der Ertragswert der Immobilie.
          </p>
          <h3 className="text-xl font-semibold mb-3 mt-6">Vorteile</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Berücksichtigt die tatsächliche Rendite der Immobilie</li>
            <li>Ideal für Investoren und Kapitalanleger</li>
            <li>Zeigt das Verhältnis von Kaufpreis zu Mietertrag</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            3. Das Sachwertverfahren
          </h2>
          <h3 className="text-xl font-semibold mb-3 mt-6">
            Wann wird es angewendet?
          </h3>
          <p className="leading-relaxed mb-4">
            Das Sachwertverfahren wird angewendet, wenn weder Vergleichsdaten
            noch Mieteinnahmen vorliegen – etwa bei selbstgenutzten
            Sonderimmobilien, individuell gestalteten Villen, denkmalgeschützten
            Gebäuden oder öffentlichen Gebäuden.
          </p>
          <h3 className="text-xl font-semibold mb-3 mt-6">
            Wie funktioniert es?
          </h3>
          <p className="leading-relaxed mb-6">
            Der Sachwert setzt sich aus dem Bodenwert und dem Gebäudesachwert
            zusammen. Der Gebäudesachwert wird aus den Herstellungskosten
            abgeleitet, unter Berücksichtigung von Alter, Abnutzung und
            baulichen Besonderheiten. Über einen Marktanpassungsfaktor wird der
            Sachwert an die tatsächlichen Marktverhältnisse angepasst.
          </p>
          <h3 className="text-xl font-semibold mb-3 mt-6">Vorteile</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Funktioniert auch ohne Vergleichsdaten oder Mieterträge</li>
            <li>Berücksichtigt den Substanzwert der Immobilie</li>
            <li>Geeignet für außergewöhnliche Objekte</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Welches Verfahren ist das richtige?
          </h2>
          <p className="leading-relaxed mb-4">
            Die Wahl des Verfahrens richtet sich nach Art und Nutzung der
            Immobilie:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>Eigentumswohnung, Einfamilienhaus:</strong>{" "}
              Vergleichswertverfahren
            </li>
            <li>
              <strong>Mehrfamilienhaus, Renditeobjekt:</strong>{" "}
              Ertragswertverfahren
            </li>
            <li>
              <strong>Sonderimmobilie, keine Vergleichsdaten:</strong>{" "}
              Sachwertverfahren
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Kombination mehrerer Verfahren
          </h2>
          <p className="leading-relaxed mb-6">
            In einem Verkehrswertgutachten nach § 194 BauGB werden oft mehrere
            Verfahren angewendet und die Ergebnisse miteinander abgeglichen.
            Dies erhöht die Rechtssicherheit und ermöglicht eine präzisere
            Wertermittlung.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Fazit</h2>
          <p className="leading-relaxed mb-6">
            Alle drei Verfahren sind normiert und anerkannt. Die Kunst liegt
            darin, das richtige Verfahren auszuwählen und fachgerecht
            anzuwenden. Als zertifizierte Sachverständige beherrschen wir alle
            drei Verfahren und wählen für Ihre Immobilie die optimale Methode.
            Kontaktieren Sie uns für eine fundierte Bewertung Ihrer Immobilie.
          </p>
        </>
      ),
    },
    "haeufige-fehler-immobilienbewertung": {
      title: "5 häufige Fehler bei der Immobilienbewertung",
      date: "08. Februar 2026",
      category: "Ratgeber",
      readTime: "6 Min.",
      content: (
        <>
          <p className="text-lg leading-relaxed mb-6">
            Viele Immobilieneigentümer überschätzen oder unterschätzen den Wert
            ihrer Immobilie erheblich. Dies kann zu Enttäuschungen beim Verkauf
            oder zu finanziellen Nachteilen führen. In diesem Artikel zeigen wir
            Ihnen die fünf häufigsten Fehler bei der Immobilienbewertung und wie
            Sie diese vermeiden können.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Fehler 1: Emotionale Überbewertung
          </h2>
          <p className="leading-relaxed mb-6">
            <strong>Das Problem:</strong> Eigentümer haben eine emotionale
            Bindung zu ihrer Immobilie und überschätzen deren Wert. Sie
            berücksichtigen nicht, dass persönliche Erinnerungen und
            individuelle Vorlieben keinen Marktwert haben. <br />
            <br />
            <strong>Die Lösung:</strong> Lassen Sie Ihre Immobilie von einem
            unabhängigen Sachverständigen bewerten. Dieser bewertet objektiv und
            marktgerecht – ohne emotionale Verzerrung. Ein zu hoher
            Angebotspreis führt zu langer Vermarktungszeit und letztlich zu
            Preisabschlägen.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Fehler 2: Investitionskosten mit Wertsteigerung gleichsetzen
          </h2>
          <p className="leading-relaxed mb-6">
            <strong>Das Problem:</strong> Eigentümer addieren alle
            Modernisierungskosten zum ursprünglichen Kaufpreis und erwarten,
            diesen Betrag als Verkaufspreis zu erzielen. Doch nicht jede
            Investition steigert den Marktwert im gleichen Maße. <br />
            <br />
            <strong>Die Lösung:</strong> Der Marktwert orientiert sich an
            Vergleichspreisen, nicht an Ihren Investitionen. Eine hochwertige
            Küche für 50.000 € steigert den Wert meist nicht um 50.000 €. Ein
            Sachverständiger bewertet, welche Investitionen tatsächlich
            werthaltig sind.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Fehler 3: Online-Bewertungstools als verlässlich ansehen
          </h2>
          <p className="leading-relaxed mb-6">
            <strong>Das Problem:</strong> Kostenlose Online-Rechner versprechen
            schnelle Ergebnisse, berücksichtigen aber weder den tatsächlichen
            Zustand noch die Mikrolage oder Besonderheiten der Immobilie. Die
            Ergebnisse weichen oft um 20–30 % vom realen Marktwert ab. <br />
            <br />
            <strong>Die Lösung:</strong> Online-Tools können eine grobe
            Orientierung geben, ersetzen aber kein professionelles Gutachten.
            Für wichtige Entscheidungen sollten Sie immer einen Sachverständigen
            beauftragen, der die Immobilie vor Ort besichtigt.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Fehler 4: Mängel verschweigen oder ignorieren
          </h2>
          <p className="leading-relaxed mb-6">
            <strong>Das Problem:</strong> Eigentümer blenden Mängel aus oder
            hoffen, dass Käufer diese nicht bemerken. Doch versteckte Mängel wie
            Feuchtigkeit, Schimmel oder veraltete Elektrik mindern den Wert
            erheblich und führen bei Entdeckung zu Nachverhandlungen oder
            Rechtsstreitigkeiten. <br />
            <br />
            <strong>Die Lösung:</strong> Transparenz zahlt sich aus. Ein
            Sachverständiger dokumentiert alle Mängel im Gutachten und
            berücksichtigt diese bei der Wertermittlung. So vermeiden Sie
            spätere Überraschungen und schaffen Vertrauen beim Käufer.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Fehler 5: Die Lage unterschätzen
          </h2>
          <p className="leading-relaxed mb-6">
            <strong>Das Problem:</strong> Die Lage ist einer der wichtigsten
            Wertfaktoren – wird aber oft unterschätzt. Selbst hochwertig
            ausgestattete Immobilien erzielen in schlechter Lage deutlich
            niedrigere Preise als einfache Objekte in Top-Lagen. <br />
            <br />
            <strong>Die Lösung:</strong> Ein erfahrener Sachverständiger kennt
            die lokalen Marktdaten und Mikrolagen. Er bewertet nicht nur die
            Immobilie selbst, sondern auch die Lagequalität (Infrastruktur,
            Verkehrsanbindung, Nachbarschaft) und kann so den Marktwert
            realistisch einschätzen.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">
            Fazit: Professionelle Bewertung zahlt sich aus
          </h2>
          <p className="leading-relaxed mb-6">
            Die häufigsten Fehler bei der Immobilienbewertung sind emotionale
            Überbewertung, falsche Einschätzung von Investitionen, Vertrauen in
            ungenaue Online-Tools, Verschweigen von Mängeln und Unterschätzung
            der Lage. Ein professionelles Gutachten schützt Sie vor diesen
            Fehlern und gibt Ihnen Sicherheit bei Verkauf, Kauf oder anderen
            wichtigen Entscheidungen.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">Unser Angebot</h2>
          <p className="leading-relaxed mb-6">
            Als zertifizierte Sachverständige erstellen wir fundierte Gutachten
            auf Basis aktueller Marktdaten, detaillierter Objektanalyse und
            jahrelanger Erfahrung. Kontaktieren Sie uns für eine objektive und
            marktgerechte Bewertung Ihrer Immobilie.
          </p>
        </>
      ),
    },
  };

  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artikel nicht gefunden</h1>
          <Link href="/blog" className="text-[#0A0A0A] hover:underline">
            Zurück zur Übersicht
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Übersicht
          </Link>

          <motion.div>
            <div className="flex items-center gap-4 mb-6 text-sm">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 rounded-full">
                <BookOpen className="w-3 h-3" />
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-gray-300">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1 text-gray-300">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6">
              {post.content}
            </div>
          </motion.div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="bg-black text-white p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Haben Sie Fragen zur Immobilienbewertung?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Wir beraten Sie gerne und erstellen Ihnen ein unverbindliches
              Angebot.
            </p>
            <Link href="/kontakt">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg">
                Jetzt Kontakt aufnehmen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#0A0A0A] hover:underline font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Blog-Übersicht
          </Link>
        </div>
      </section>
    </div>
  );
}
