/**
 * ============================================================================
 * ZENTRALE RECHTSTEXTE — Uenal Sachverständigenbüro (uenal-gutachten.de)
 * ============================================================================
 *
 * SINGLE SOURCE OF TRUTH für Impressum, Datenschutzerklärung, AGB und
 * Widerrufsbelehrung. Änderungen an Rechtstexten ausschließlich hier vornehmen,
 * niemals direkt in den Seitenkomponenten.
 *
 * Gerendert wird über <LegalDocument /> (src/app/components/legal/LegalDocument.tsx).
 *
 * INLINE-FORMATIERUNG in allen Textfeldern:
 *   **fett**              → <strong>
 *   [Text](https://…)     → externer Link (target=_blank)
 *   [Text](/pfad)         → interner Link
 *   [Text](mailto:…)      → E-Mail-Link
 *
 * ----------------------------------------------------------------------------
 * OFFENE PUNKTE — siehe `pendingDisclosures` weiter unten.
 * Abschnitte, deren Angaben noch nicht bestätigt sind, werden bewusst NICHT
 * gerendert, solange der jeweilige Wert `null` ist. Sobald der Wert gesetzt
 * wird, erscheint der Abschnitt automatisch auf der Seite.
 * ----------------------------------------------------------------------------
 */

import { siteConfig } from "@/config/siteConfig";

/* ==========================================================================
 * Typen
 * ========================================================================== */

export type LegalBlock =
  /** Einleitender Absatz, etwas größer gesetzt. */
  | { type: "lead"; text: string }
  /** Normaler Fließtext. */
  | { type: "paragraph"; text: string }
  /** Zwischenüberschrift innerhalb eines Abschnitts. */
  | { type: "subheading"; text: string }
  /** Aufzählung mit Punkten. */
  | { type: "list"; items: string[] }
  /** Adress-/Kontaktblock, zeilenweise ohne Aufzählungspunkte. */
  | { type: "address"; lines: string[] }
  /**
   * Kompakte Zusatzangaben, z. B. Rechtsgrundlage / Berechtigtes Interesse /
   * Speicherdauer. Wird etwas kleiner und abgesetzt dargestellt.
   */
  | { type: "meta"; items: string[] }
  /**
   * Optisch abgesetzter Kasten.
   *  - "info"  → dezent hervorgehobener Hinweis
   *  - "legal" → deutlich hervorgehoben, mit Rahmen (Pflicht bei Art. 21 DSGVO)
   *  - "form"  → Formularmuster (Muster-Widerrufsformular)
   */
  | {
    type: "callout";
    variant?: "info" | "legal" | "form";
    title?: string;
    blocks: LegalBlock[];
  };

export interface LegalSection {
  /** Anker-ID für Direktverlinkung, z. B. "#widerspruchsrecht". */
  id: string;
  /** Überschrift des Abschnitts. Fehlt sie, wird nur der Inhalt gerendert. */
  heading?: string;
  blocks: LegalBlock[];
}

export interface LegalDocumentContent {
  /** H1 der Seite. */
  title: string;
  /** Untertitel im dunklen Hero-Bereich. */
  subtitle: string;
  /** Optionaler Stand-Hinweis, z. B. "Stand: August 2026". */
  status?: string;
  /** Titel für <title>-Tag (ohne Site-Suffix). */
  metaTitle: string;
  /** Meta-Description der Seite. */
  metaDescription: string;
  /** Pfad für Canonical-URL, z. B. "/impressum". */
  path: string;
  sections: LegalSection[];
}

/* ==========================================================================
 * Wiederverwendete Stammdaten
 * ========================================================================== */

const { name, contact } = siteConfig;
const address = contact.address;

/** Vollständige Anschrift in einer Zeile. */
const inlineAddress = `${address.street}, ${address.zip} ${address.city}`;

/* ==========================================================================
 * OFFENE ANGABEN ("[BITTE BESTÄTIGEN]" aus den Rechtstexten vom August 2026)
 * --------------------------------------------------------------------------
 * Solange ein Wert `null` ist, entfällt der zugehörige Abschnitt bzw. Satz
 * auf der Website ersatzlos. Kein Platzhaltertext wird veröffentlicht.
 * ========================================================================== */

export const pendingDisclosures = {
  /**
   * TODO(Mandant) — Umsatzsteuer-Identifikationsnummer nach § 27a UStG.
   * Nur ausfüllen, falls eine USt-IdNr. besteht. Bei Kleinunternehmerregelung
   * nach § 19 UStG bleibt der Wert `null`; der Abschnitt entfällt dann.
   * Die Steuernummer darf NICHT veröffentlicht werden.
   */
  ustIdNr: null as string | null,

  /**
   * TODO(Mandant) — offen seit Juli 2026. Berufshaftpflicht-/Vermögensschaden-
   * haftpflichtversicherung: Versicherer, Anschrift, Deckungssumme und
   * räumlicher Geltungsbereich. Ohne diese Angabe kann das Impressum nicht
   * abschließend freigegeben werden.
   */
  berufshaftpflicht: null as {
    versicherer: string;
    anschrift: string;
    deckungssumme: string;
    geltungsbereich: string;
  } | null,

  /**
   * TODO(Entwicklung/Mandant) — Hostinganbieter mit Name, Anschrift und
   * Sitzland. Nach Aufbau der Seite (Next.js) liegt Vercel Inc.,
   * 440 N Barranca Ave #4133, Covina, CA 91723, USA nahe — ist aber zu
   * bestätigen. Bei einem US-Anbieter zusätzlich `thirdCountryTransfer` füllen.
   */
  hostingProvider: null as string | null,

  /**
   * TODO(Entwicklung) — Löschfrist der Server-Logfiles beim Hoster,
   * üblicherweise 7 bis 30 Tage.
   */
  logfileRetention: null as string | null,

  /**
   * TODO(Entwicklung/Mandant) — Betreiber und Hosting-Standort der Formular-
   * API `https://alpa-backend-api.vercel.app` (Endpunkte /alpa-third/
   * send-message und /alpa-third/send-opinion). Über diese Schnittstelle
   * laufen sämtliche Formularanfragen. Zu klären: Auftragsverarbeitungsvertrag
   * nach Art. 28 DSGVO, Serverstandort und Löschfristen.
   */
  formBackendOperator: null as string | null,

  /**
   * TODO(Mandant) — Auftragsverarbeitungsvertrag mit Cloudflare für den
   * Einsatz von Turnstile. Der Dienst ist auf /kontakt und im
   * Kontaktformular der Startseite aktiv (siehe Ziffer 8).
   */
  cloudflareDpaInPlace: false,

  /**
   * TODO(Entwicklung/Mandant) — Weitere Dienste mit Verarbeitung außerhalb
   * der EU, die zu Ziffer 13 hinzukommen. Zu prüfen sind mindestens der
   * Hosting-Anbieter sowie Microsoft 365 für E-Mail, Kalender und Dateiablage.
   * Cloudflare (Turnstile) ist dort bereits fest benannt, weil im Code
   * nachgewiesen.
   */
  thirdCountryTransfer: null as string | null,

  /**
   * TODO(Mandant) — Existiert das Postfach datenschutz@uenal-gutachten.de?
   * Solange `null`, wird die allgemeine Adresse info@uenal-gutachten.de
   * verwendet. Das ist rechtlich zulässig und ausdrücklich so vorgesehen.
   */
  privacyEmail: null as string | null,

  /**
   * TODO(Mandant) — Endgültiger Text der Widerrufsbelehrung wird separat
   * geliefert. Bis dahin ist auf /widerrufsbelehrung die gesetzliche
   * Musterbelehrung nach Anlage 1 zu Art. 246a § 1 Abs. 2 EGBGB hinterlegt,
   * angepasst an Dienstleistungsverträge. Vor Freigabe anwaltlich prüfen.
   */
  widerrufsbelehrungFinalised: false,
} as const;

/** E-Mail-Adresse für Datenschutzanfragen, mit zulässigem Fallback. */
export const privacyContactEmail =
  pendingDisclosures.privacyEmail ?? contact.email;

/* ==========================================================================
 * Hilfsfunktion: Abschnitte/Blöcke mit `null` herausfiltern
 * ========================================================================== */

type MaybeSection = LegalSection | null | false;
type MaybeBlock = LegalBlock | null | false;

const sections = (input: MaybeSection[]): LegalSection[] =>
  input.filter((s): s is LegalSection => Boolean(s));

const blocks = (input: MaybeBlock[]): LegalBlock[] =>
  input.filter((b): b is LegalBlock => Boolean(b));

/* ==========================================================================
 * Qualifikationsangaben
 * --------------------------------------------------------------------------
 * Werden aus siteConfig.qualifications abgeleitet und NICHT hier doppelt
 * gepflegt. Damit bleibt ein späterer Wechsel von Variante B (freier
 * Sachverständiger) auf Variante A (öffentlich bestellt und vereidigt) eine
 * Änderung an einer einzigen Stelle.
 * ========================================================================== */

interface QualificationEntry {
  title: string;
  details?: string | null;
  fullText?: string;
}

/** Setzt Titel und ausstellende Stelle zu einer Zeile zusammen. */
const qualificationLines = (items: readonly QualificationEntry[]): string[] =>
  items.map((item) => {
    const suffix = item.fullText ?? item.details ?? null;
    return suffix ? `${item.title} — ${suffix}` : item.title;
  });


/* ==========================================================================
 * IMPRESSUM  —  /impressum
 * Vorlage: 02_Impressum.md (Stand August 2026), Variante B (keine öffentliche
 * Bestellung). Der Abschnitt „Zuständige Aufsichtsbehörde" entfällt bei
 * Variante B ersatzlos.
 * ========================================================================== */

export const impressumContent: LegalDocumentContent = {
  title: "Impressum",
  subtitle: "Angaben gemäß § 5 DDG",
  metaTitle: "Impressum",
  metaDescription: `Impressum des ${name} in ${address.city}: Anbieterkennzeichnung nach § 5 DDG, Verantwortlicher nach § 18 Abs. 2 MStV, Qualifikation und Tätigkeitsgebiet.`,
  path: "/impressum",
  sections: sections([
    {
      id: "anbieter",
      heading: "Angaben gemäß § 5 DDG",
      blocks: [
        {
          type: "address",
          lines: [
            `**${name}**`,
            `Inhaber: ${address.owner}`,
            address.street,
            `${address.zip} ${address.city}`,
          ],
        },
        {
          type: "address",
          lines: [
            `Telefon: [${contact.phoneDisplay}](tel:${contact.phone})`,
            `E-Mail: [${contact.email}](mailto:${contact.email})`,
            "Web: [www.uenal-gutachten.de](https://www.uenal-gutachten.de)",
          ],
        },
      ],
    },

    {
      id: "verantwortlich",
      heading: "Verantwortlich für den Inhalt nach § 18 Absatz 2 MStV",
      blocks: [
        { type: "paragraph", text: `${address.owner}, ${inlineAddress}` },
      ],
    },

    // Entfällt, solange keine USt-IdNr. bestätigt ist (§ 19 UStG).
    pendingDisclosures.ustIdNr !== null && {
      id: "umsatzsteuer",
      heading: "Umsatzsteuer",
      blocks: [
        {
          type: "paragraph",
          text: `Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: ${pendingDisclosures.ustIdNr}`,
        },
      ],
    },

    {
      id: "taetigkeitsgebiet",
      heading: "Tätigkeitsgebiet",
      blocks: [
        {
          type: "paragraph",
          text: "Immobilienbewertung und Erstellung von Wertgutachten",
        },
        {
          type: "paragraph",
          text: `Räumlicher Tätigkeitsbereich: ${siteConfig.taetigkeitsgebiet}.`,
        },
      ],
    },

    {
      id: "qualifikation",
      heading: siteConfig.qualifications.heading1,
      blocks: [
        {
          type: "list",
          items: qualificationLines(siteConfig.qualifications.items1),
        },
        {
          type: "paragraph",
          text: "Bei dem Personenzertifikat EU/A-001 handelt es sich nicht um eine durch die Deutsche Akkreditierungsstelle (DAkkS) akkreditierte Zertifizierung.",
        },
        { type: "subheading", text: siteConfig.qualifications.heading2 },
        {
          type: "list",
          items: qualificationLines(siteConfig.qualifications.items2),
        },
      ],
    },

    // Entfällt, solange die Versicherungsangaben nicht bestätigt sind.
    pendingDisclosures.berufshaftpflicht !== null && {
      id: "berufshaftpflicht",
      heading: "Berufshaftpflichtversicherung",
      blocks: [
        {
          type: "address",
          lines: [
            `Versicherer: ${pendingDisclosures.berufshaftpflicht.versicherer}`,
            `Anschrift: ${pendingDisclosures.berufshaftpflicht.anschrift}`,
            `Deckungssumme: ${pendingDisclosures.berufshaftpflicht.deckungssumme}`,
            `Räumlicher Geltungsbereich: ${pendingDisclosures.berufshaftpflicht.geltungsbereich}`,
          ],
        },
      ],
    },

    {
      id: "gerichtliche-taetigkeit",
      heading: "Gerichtliche Tätigkeit",
      blocks: [
        {
          type: "paragraph",
          // Formulierung „tätig für" ist bewusst gewählt und darf nicht
          // gegen „gerichtlich bestellt"/„Gerichtsgutachter" getauscht werden.
          text: `Herr ${address.owner} ist als Sachverständiger für Verkehrswertgutachten unter anderem tätig für die Amtsgerichte Osterholz-Scharmbeck, Buxtehude, Rotenburg (Wümme) und Gifhorn.`,
        },
      ],
    },

    {
      id: "verbraucherstreitbeilegung",
      heading: "Verbraucherstreitbeilegung",
      blocks: [
        {
          type: "paragraph",
          text: "Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 Absatz 1 Nummer 1 VSBG).",
        },
      ],
    },

    {
      id: "haftung-inhalte",
      heading: "Haftung für Inhalte",
      blocks: [
        {
          type: "paragraph",
          text: "Als Diensteanbieter sind wir gemäß § 7 Absatz 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
        },
        {
          type: "paragraph",
          text: "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.",
        },
      ],
    },

    {
      id: "haftung-links",
      heading: "Haftung für Links",
      blocks: [
        {
          type: "paragraph",
          text: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.",
        },
        {
          type: "paragraph",
          text: "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.",
        },
      ],
    },

    {
      id: "urheberrecht",
      heading: "Urheberrecht",
      blocks: [
        {
          type: "paragraph",
          text: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
        },
        {
          type: "paragraph",
          text: "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
        },
      ],
    },
  ]),
};

/* ==========================================================================
 * DATENSCHUTZERKLÄRUNG  —  /datenschutz
 * Vorlage: 03_Datenschutzerklaerung.md (Stand August 2026).
 *
 * Ziffer 8 („Eingebundene Dienste Dritter") fehlte auf der Live-Seite
 * vollständig und war der größte Einzelmangel. Die Angaben dort beruhen auf
 * einer Prüfung des Quellcodes im August 2026:
 *   - keine Einbindung von Google Fonts oder next/font, src/styles/fonts.css
 *     ist leer → Schriftarten werden lokal ausgeliefert
 *   - kein eingebetteter Kartendienst, lediglich ein ausgehender Link auf
 *     Google Maps in siteConfig.googleRating.url
 *   - kein Analyse-Werkzeug (kein gtag, kein Google Tag Manager, kein Plausible)
 *   - Google-Places-Abruf in GoogleReviewsCarousel.tsx ist auskommentiert,
 *     Bewertungen werden statisch ausgeliefert
 *   - Verbandssiegel liegen als lokale Bilddateien in src/assets bzw. src/imports
 *   - TrustlocalWidget.tsx existiert, wird aber nirgends eingebunden
 *   - Social-Media-Symbole sind über siteConfig.showSocialLinks ausgeblendet
 * Bei Änderungen an diesen Punkten ist Ziffer 8 zwingend nachzuführen.
 * ========================================================================== */

export const datenschutzContent: LegalDocumentContent = {
  title: "Datenschutzerklärung",
  subtitle:
    "Informationen über die Erhebung und Verarbeitung Ihrer personenbezogenen Daten",
  status: "Stand: August 2026",
  metaTitle: "Datenschutzerklärung",
  metaDescription: `Datenschutzerklärung des ${name}: Verantwortlicher, Rechtsgrundlagen, Empfänger, Speicherdauer, eingebundene Dienste und Ihre Rechte nach DSGVO.`,
  path: "/datenschutz",
  sections: sections([
    {
      id: "einleitung",
      blocks: [
        {
          type: "lead",
          text: "Mit den folgenden Informationen geben wir Ihnen einen Überblick über die Verarbeitung Ihrer personenbezogenen Daten durch uns und über Ihre Rechte aus dem Datenschutzrecht. Welche Daten im Einzelnen verarbeitet und in welcher Weise genutzt werden, richtet sich nach den jeweils angefragten oder vereinbarten Leistungen. Daher treffen nicht alle Teile dieser Information auf Sie zu.",
        },
      ],
    },

    {
      id: "verantwortlicher",
      heading: "1. Verantwortlicher",
      blocks: [
        {
          type: "address",
          lines: [
            `**${name}**`,
            `Inhaber: ${address.owner}`,
            address.street,
            `${address.zip} ${address.city}`,
          ],
        },
        {
          type: "address",
          lines: [
            `Telefon: [${contact.phoneDisplay}](tel:${contact.phone})`,
            `E-Mail: [${contact.email}](mailto:${contact.email})`,
          ],
        },
      ],
    },

    {
      id: "ansprechpartner-datenschutz",
      heading: "2. Ansprechpartner für den Datenschutz",
      blocks: [
        {
          type: "paragraph",
          text: "Ein Datenschutzbeauftragter ist nach § 38 Absatz 1 BDSG nicht zu bestellen. Für Fragen zum Datenschutz und zur Wahrnehmung Ihrer Rechte wenden Sie sich bitte an:",
        },
        {
          type: "address",
          lines: [
            `${address.owner}, ${name}, ${inlineAddress}`,
            `E-Mail: [${privacyContactEmail}](mailto:${privacyContactEmail})`,
          ],
        },
      ],
    },

    /* ------------------------- Teil A: Website ------------------------- */

    {
      id: "teil-a",
      heading: "Teil A: Verarbeitung beim Besuch dieser Website",
      blocks: [],
    },

    {
      id: "hosting",
      heading: "3. Hosting und Server-Logfiles",
      blocks: blocks([
        {
          type: "paragraph",
          text: "Diese Website wird bei einem externen Dienstleister gehostet. Beim Aufruf der Website erhebt und speichert der Anbieter automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser übermittelt:",
        },
        {
          type: "list",
          items: [
            "Browsertyp und Browserversion",
            "verwendetes Betriebssystem",
            "Referrer URL",
            "Hostname des zugreifenden Rechners",
            "Uhrzeit der Serveranfrage",
            "IP-Adresse",
          ],
        },
        {
          type: "paragraph",
          text: "Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Verarbeitung erfolgt zur Sicherstellung eines störungsfreien Betriebs und der Sicherheit unserer Website.",
        },
        {
          type: "meta",
          items: [
            "**Rechtsgrundlage:** Art. 6 Absatz 1 lit. f DSGVO.",
            "**Berechtigtes Interesse:** technisch fehlerfreie Darstellung, Stabilität und Sicherheit der Website.",
          ],
        },
        {
          type: "paragraph",
          text: "Hostinganbieter: netcup GmbH, Daimlerstraße 25, 76185 Karlsruhe, Deutschland (Server-Standort: Nürnberg, Deutschland). Mit dem Anbieter besteht ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO.",
        },
      ]),
    },

    {
      id: "bildoptimierung",
      heading: "4. Bildoptimierung",
      blocks: [
        {
          type: "paragraph",
          text: "Zur beschleunigten Auslieferung von Bildern nutzen wir die Bildoptimierung des eingesetzten Frameworks. Die Verarbeitung findet über die Infrastruktur unseres Hosting-Anbieters statt. Dabei fallen dieselben technischen Zugriffsdaten an wie unter Ziffer 3 beschrieben.",
        },
        {
          type: "meta",
          items: [
            "**Rechtsgrundlage:** Art. 6 Absatz 1 lit. f DSGVO.",
            "**Berechtigtes Interesse:** schnelle und ressourcenschonende Darstellung der Website.",
          ],
        },
      ],
    },

    {
      id: "kontaktaufnahme",
      heading: "5. Kontaktaufnahme über Formulare, Telefon und E-Mail",
      blocks: [
        {
          type: "paragraph",
          text: "Wenn Sie uns über ein Formular auf dieser Website, per E-Mail oder telefonisch kontaktieren, verarbeiten wir die von Ihnen übermittelten Angaben zur Bearbeitung Ihrer Anfrage und für Anschlussfragen.",
        },
        {
          type: "paragraph",
          text: "**Verarbeitete Daten:** Anrede, Name, Kontaktdaten, Angaben zum Bewertungsobjekt, zum Anlass der Bewertung und zum gewünschten Leistungsumfang sowie sämtliche weiteren Angaben, die Sie freiwillig machen.",
        },
        {
          type: "meta",
          items: [
            "**Rechtsgrundlage:** Art. 6 Absatz 1 lit. b DSGVO, wenn die Anfrage auf den Abschluss eines Vertrages gerichtet ist, im Übrigen Art. 6 Absatz 1 lit. f DSGVO.",
            "**Berechtigtes Interesse:** Bearbeitung der an uns gerichteten Anfragen.",
            "**Speicherdauer:** bis zur abschließenden Bearbeitung Ihrer Anfrage, im Übrigen nach Maßgabe von Ziffer 12.",
          ],
        },
        {
          type: "callout",
          variant: "info",
          title: "Besonderer Hinweis",
          blocks: [
            {
              type: "paragraph",
              text: "Anlässe für eine Immobilienbewertung sind häufig persönlicher Natur, etwa eine Erbschaft, eine Scheidung oder eine Zwangsversteigerung. Bitte übermitteln Sie uns über Formulare und unverschlüsselte E-Mail nur die Angaben, die zur ersten Einschätzung erforderlich sind. Alle weiteren Unterlagen stimmen wir mit Ihnen individuell ab.",
            },
          ],
        },
      ],
    },

    {
      id: "blog",
      heading: "6. Blog",
      blocks: [
        {
          type: "paragraph",
          text: "Beim Aufruf unseres Blogs werden dieselben technischen Zugriffsdaten verarbeitet wie unter Ziffer 3 beschrieben. Eine Kommentarfunktion besteht nicht. Eine Newsletter-Anmeldung und eine Messung der Lesedauer finden ebenfalls nicht statt.",
        },
      ],
    },

    {
      id: "cookies",
      heading: "7. Einsatz von Cookies und vergleichbaren Technologien",
      blocks: [
        {
          type: "paragraph",
          text: "Auf dieser Website werden ausschließlich technisch notwendige Cookies und vergleichbare lokale Speicherfunktionen eingesetzt. Sie sind für den sicheren und ordnungsgemäßen Betrieb der Website erforderlich. Cookies zu Analyse-, Tracking- oder Werbezwecken setzen wir nicht ein.",
        },
        {
          type: "paragraph",
          text: "Da keine technisch nicht notwendigen Technologien zum Einsatz kommen, ist eine Einwilligung nicht erforderlich; ein Einwilligungsbanner wird daher nicht angezeigt.",
        },
        {
          type: "meta",
          items: [
            "**Rechtsgrundlage:** § 25 Absatz 2 Nummer 2 TDDDG für die technisch notwendige Speicherung und den Zugriff, im Übrigen Art. 6 Absatz 1 lit. f DSGVO.",
          ],
        },
        {
          type: "paragraph",
          text: "Sie können Cookies über die Einstellungen Ihres Browsers jederzeit löschen oder deren Speicherung einschränken. Bei einer vollständigen Deaktivierung kann die Funktionsfähigkeit dieser Website eingeschränkt sein.",
        },
      ],
    },

    {
      id: "dienste-dritter",
      heading: "8. Eingebundene Dienste Dritter",
      blocks: blocks([
        {
          type: "paragraph",
          text: "Wir halten die Einbindung von Diensten Dritter bewusst gering. Der aktuelle Stand ist der folgende:",
        },
        {
          type: "paragraph",
          text: "**Schriftarten.** Schriftarten werden lokal von unserem Server ausgeliefert. Eine Verbindung zu Servern Dritter, insbesondere zu Google Fonts, findet dabei nicht statt.",
        },
        {
          type: "paragraph",
          text: "**Kartendienst.** Auf dieser Website ist kein Kartendienst eingebettet. An einzelnen Stellen verlinken wir auf einen Kartendienst eines Drittanbieters. Erst wenn Sie einen solchen Link aktiv anklicken, verlassen Sie unsere Website und es werden Daten an den Anbieter übermittelt. Für dessen Verarbeitung gilt die Datenschutzerklärung des jeweiligen Anbieters.",
        },
        {
          type: "paragraph",
          text: "**Webanalyse.** Ein Analyse- oder Statistikwerkzeug ist nicht im Einsatz. Wir erstellen keine Nutzungsprofile und führen keine Reichweitenmessung durch.",
        },
        {
          type: "paragraph",
          text: "**Siegel-Einbindungen.** Die auf unserer Website dargestellten Siegel der Zertifizierungs- und Verbandsstellen werden statisch aus unserem eigenen Bestand ausgeliefert. Ein dynamisches Nachladen von den Servern Dritter findet nicht statt, sodass Ihre IP-Adresse hierbei nicht an Dritte übermittelt wird.",
        },
        {
          type: "paragraph",
          text: "**Social-Media-Einbindungen.** Es sind keine Social-Media-Plugins eingebunden. Solange keine verifizierten Profile vorliegen, werden entsprechende Verweise auf dieser Website nicht angezeigt.",
        },
        {
          type: "subheading",
          text: "Schutz unserer Formulare vor Missbrauch (Cloudflare Turnstile)",
        },
        {
          type: "paragraph",
          text: "Zum Schutz unserer Kontaktformulare vor automatisierten Eingaben und Spam setzen wir Cloudflare Turnstile ein, einen Dienst der Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA. Beim Aufruf einer Seite mit Formular wird eine Verbindung zu Servern von Cloudflare aufgebaut. Dabei werden technische Zugriffsdaten, insbesondere Ihre IP-Adresse sowie Angaben zu Browser und Endgerät, verarbeitet, um zu prüfen, ob die Eingabe von einem Menschen oder von einem automatisierten Programm stammt. Nach Angaben des Anbieters findet dabei kein Tracking über Websites hinweg statt und es werden keine Cookies zu Werbezwecken gesetzt.",
        },
        {
          type: "meta",
          items: [
            "**Rechtsgrundlage:** Art. 6 Absatz 1 lit. f DSGVO.",
            "**Berechtigtes Interesse:** Abwehr von Spam, missbräuchlichen Massenanfragen und automatisierten Angriffen auf unsere Formulare sowie Sicherheit unserer Systeme.",
          ],
        },
        {
          type: "subheading",
          text: "Verarbeitung Ihrer Formularanfragen",
        },
        {
          type: "paragraph",
          text: "Die über unsere Formulare abgesendeten Angaben werden über eine Programmierschnittstelle übermittelt, die wir bei der Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA, betreiben, und von dort an unser E-Mail-Postfach weitergeleitet. Der Anbieter ist für uns als Auftragsverarbeiter nach Art. 28 DSGVO tätig und verarbeitet die Daten ausschließlich zur Zustellung Ihrer Anfrage. Wenn Sie diese Übermittlung vermeiden möchten, erreichen Sie uns jederzeit telefonisch oder postalisch.",
        },
      ]),
    },

    /* --------------- Teil B: Sachverständigentätigkeit --------------- */

    {
      id: "teil-b",
      heading: "Teil B: Verarbeitung im Rahmen unserer Sachverständigentätigkeit",
      blocks: [],
    },

    {
      id: "zwecke-rechtsgrundlagen",
      heading: "9. Zwecke und Rechtsgrundlagen",
      blocks: [
        {
          type: "paragraph",
          text: "**a) Anbahnung und Durchführung des Gutachtenauftrags.** Angebotserstellung, Terminvereinbarung, Ortsbesichtigung, Unterlagenauswertung, Erstellung und Übermittlung des Gutachtens sowie Abrechnung.",
        },
        {
          type: "meta",
          items: ["**Rechtsgrundlage:** Art. 6 Absatz 1 lit. b DSGVO."],
        },
        {
          type: "paragraph",
          text: "**b) Beschaffung wertrelevanter Informationen bei Dritten.** Zur Erstellung eines Gutachtens holen wir Auskünfte bei Behörden und Stellen ein, insbesondere bei Grundbuchämtern, Katasterämtern, Bauaufsichtsbehörden, Baulastenverzeichnissen, Gutachterausschüssen für Grundstückswerte und Hausverwaltungen.",
        },
        {
          type: "meta",
          items: [
            "**Rechtsgrundlage:** Art. 6 Absatz 1 lit. b DSGVO, bei Personen, die nicht selbst unsere Vertragspartner sind, Art. 6 Absatz 1 lit. f DSGVO.",
            "**Berechtigtes Interesse:** sachgerechte und vollständige Wertermittlung.",
          ],
        },
        {
          type: "paragraph",
          text: "**c) Objektdokumentation.** Im Rahmen der Ortsbesichtigung fertigen wir Fotoaufnahmen des Bewertungsobjekts an, die Bestandteil des Gutachtens werden. Wir achten darauf, dass Personen dabei nicht abgebildet werden. Persönliche Gegenstände und Einrichtungsdetails werden nur erfasst, soweit sie für die Wertermittlung erforderlich sind.",
        },
        {
          type: "meta",
          items: ["**Rechtsgrundlage:** Art. 6 Absatz 1 lit. b DSGVO."],
        },
        {
          type: "paragraph",
          text: "**d) Verarbeitung von Daten Dritter.** Gegenstand eines Gutachtens sind regelmäßig auch Daten von Personen, die nicht unsere Auftraggeber sind, insbesondere Eigentümer, Mieter, Erben, Beteiligte eines Zwangsversteigerungsverfahrens und Miteigentümer einer Wohnungseigentümergemeinschaft.",
        },
        {
          type: "meta",
          items: [
            "**Rechtsgrundlage:** Art. 6 Absatz 1 lit. f DSGVO, bei gerichtlichen Aufträgen Art. 6 Absatz 1 lit. c und lit. e DSGVO.",
            "**Berechtigtes Interesse:** Erfüllung des erteilten Gutachtenauftrags.",
          ],
        },
        {
          type: "paragraph",
          text: "**e) Gerichtliche und behördliche Aufträge.** Bei Aufträgen durch Gerichte, Staatsanwaltschaften oder Behörden erfolgt die Verarbeitung zur Erfüllung einer rechtlichen Verpflichtung und zur Wahrnehmung einer im öffentlichen Interesse liegenden Aufgabe.",
        },
        {
          type: "meta",
          items: [
            "**Rechtsgrundlage:** Art. 6 Absatz 1 lit. c und lit. e DSGVO in Verbindung mit den jeweiligen Verfahrensvorschriften, insbesondere ZPO, ZVG und JVEG.",
          ],
        },
        {
          type: "paragraph",
          text: "**f) Erfüllung steuerrechtlicher Pflichten.**",
        },
        {
          type: "meta",
          items: [
            "**Rechtsgrundlage:** Art. 6 Absatz 1 lit. c DSGVO in Verbindung mit § 147 AO.",
          ],
        },
        {
          type: "paragraph",
          text: "**g) Geltendmachung und Abwehr von Rechtsansprüchen.**",
        },
        {
          type: "meta",
          items: [
            "**Rechtsgrundlage:** Art. 6 Absatz 1 lit. f DSGVO.",
            "**Berechtigtes Interesse:** Durchsetzung eigener Ansprüche und Verteidigung gegen Ansprüche Dritter, insbesondere aus der Haftung für Gutachten.",
          ],
        },
      ],
    },

    {
      id: "datenkategorien",
      heading: "10. Kategorien verarbeiteter Daten",
      blocks: [
        {
          type: "paragraph",
          text: "Anrede, Titel, Vor- und Nachname, Anschrift, Kontaktdaten, Eigentums- und Grundbuchdaten, Angaben zum Bewertungsobjekt und zu dessen Zustand, Miet- und Pachtdaten, Angaben zum Anlass der Bewertung, Aktenzeichen gerichtlicher Verfahren, Fotoaufnahmen des Objekts, Kommunikationsdaten einschließlich Schriftverkehr sowie Vertrags-, Rechnungs- und Zahlungsdaten.",
        },
      ],
    },

    {
      id: "empfaenger",
      heading: "11. Empfänger",
      blocks: [
        {
          type: "paragraph",
          text: "Ihre Daten werden nur weitergegeben, soweit dies zur Durchführung des Auftrags erforderlich ist, eine gesetzliche Pflicht besteht oder Sie eingewilligt haben. Empfänger können sein: der Auftraggeber des Gutachtens, Gerichte und Behörden bei gerichtlichen Aufträgen, Gutachterausschüsse, Grundbuch- und Katasterämter, Hausverwaltungen, Steuerberater, Rechtsanwälte, unsere Berufshaftpflichtversicherung im Schadensfall sowie IT- und Dienstleistungsunternehmen, die für uns als Auftragsverarbeiter nach Art. 28 DSGVO tätig sind.",
        },
        {
          type: "paragraph",
          text: "Eine Weitergabe an die Uenal Immobilien GmbH oder die Uenal Facility Management UG (haftungsbeschränkt) findet nicht statt, es sei denn, Sie haben ausdrücklich eingewilligt.",
        },
      ],
    },

    {
      id: "speicherdauer",
      heading: "12. Dauer der Speicherung",
      blocks: [
        {
          type: "list",
          items: [
            "Gutachten und die zugehörigen Arbeitsunterlagen: zehn Jahre nach Fertigstellung, mit Rücksicht auf die Verjährung möglicher Haftungsansprüche",
            "steuerrechtlich aufbewahrungspflichtige Unterlagen: zehn Jahre (§ 147 AO)",
            "Unterlagen aus gerichtlichen Aufträgen: nach den Vorgaben des jeweiligen Verfahrens, im Übrigen wie vorstehend",
            "Anfragen ohne Auftragserteilung: Löschung spätestens zwölf Monate nach dem letzten Kontakt",
            "auf einer Einwilligung beruhende Daten: bis zum Widerruf",
          ],
        },
      ],
    },

    // Dieser Abschnitt wird immer ausgegeben: Cloudflare (Turnstile) ist im
    // Code nachgewiesen und damit eine gesicherte Drittlandsübermittlung.
    // Weitere Anbieter treten über `thirdCountryTransfer` hinzu, sobald sie
    // bestätigt sind.
    {
      id: "drittlaender",
      heading: "13. Übermittlung in Drittländer",
      blocks: blocks([
        {
          type: "paragraph",
          text: "Wir setzen Dienste ein, bei denen eine Verarbeitung außerhalb der Europäischen Union nicht ausgeschlossen ist. Das betrifft insbesondere Cloudflare, Inc., USA, im Rahmen des Spamschutzes unserer Formulare sowie Vercel Inc., USA, für die Bereitstellung unseres Formular-Backends (siehe Ziffer 8). Grundlage der Übermittlung ist der Angemessenheitsbeschluss der Europäischen Kommission zum EU-US Data Privacy Framework, soweit der Anbieter zertifiziert ist, im Übrigen Standardvertragsklauseln nach Art. 46 Absatz 2 lit. c DSGVO. Wenn Sie eine Übermittlung an diese Anbieter nicht wünschen, kommunizieren Sie mit uns bitte telefonisch oder postalisch.",
        },
        pendingDisclosures.thirdCountryTransfer !== null && {
          type: "paragraph",
          text: `**Weitere Dienste mit möglicher Verarbeitung außerhalb der Europäischen Union:** ${pendingDisclosures.thirdCountryTransfer}`,
        },
      ]),
    },

    {
      id: "erforderlichkeit",
      heading: "14. Erforderlichkeit der Bereitstellung",
      blocks: [
        {
          type: "paragraph",
          text: "Die Angabe Ihrer Kontakt- und Objektdaten sowie die Vorlage der wertrelevanten Unterlagen sind für die Erstellung eines Gutachtens erforderlich. Ohne diese Angaben können wir den Auftrag nicht ausführen. Weitergehende Angaben sind freiwillig.",
        },
      ],
    },

    {
      id: "automatisierte-entscheidungen",
      heading: "15. Automatisierte Entscheidungsfindung",
      blocks: [
        {
          type: "paragraph",
          text: "Eine ausschließlich auf einer automatisierten Verarbeitung beruhende Entscheidung mit rechtlicher Wirkung oder ähnlich erheblicher Beeinträchtigung im Sinne des Art. 22 DSGVO findet nicht statt. Bewertungssoftware dient allein der rechnerischen Unterstützung; die fachliche Beurteilung und das Bewertungsergebnis verantwortet der Sachverständige persönlich.",
        },
      ],
    },

    {
      id: "ihre-rechte",
      heading: "16. Ihre Rechte",
      blocks: [
        {
          type: "paragraph",
          text: "Sie haben das Recht auf Auskunft nach Art. 15, auf Berichtigung nach Art. 16, auf Löschung nach Art. 17, auf Einschränkung der Verarbeitung nach Art. 18 und auf Datenübertragbarkeit nach Art. 20 DSGVO. Soweit die Verarbeitung auf einer Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Wenden Sie sich hierzu an die unter Ziffer 2 genannte Adresse.",
        },
        {
          type: "paragraph",
          text: "Bei Gutachten, die im Auftrag eines Gerichts erstellt wurden, können einzelne Rechte durch die jeweiligen Verfahrensvorschriften eingeschränkt sein.",
        },
      ],
    },

    /*
     * Art. 21 Absatz 4 DSGVO verlangt eine optisch hervorgehobene, von den
     * übrigen Informationen getrennte Darstellung. Umsetzung als abgesetzter
     * Kasten mit Rahmen und Hintergrundfläche über variant: "legal".
     * NICHT als normalen Fließtext darstellen.
     */
    {
      id: "widerspruchsrecht",
      blocks: [
        {
          type: "callout",
          variant: "legal",
          title: "17. Widerspruchsrecht nach Art. 21 DSGVO",
          blocks: [
            {
              type: "paragraph",
              text: "**Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch einzulegen, die auf Grundlage des Art. 6 Absatz 1 lit. e oder lit. f DSGVO erfolgt.**",
            },
            {
              type: "paragraph",
              text: "**Werden Ihre Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit ohne Angabe von Gründen Widerspruch gegen diese Verarbeitung einzulegen. Nach einem solchen Widerspruch verarbeiten wir Ihre Daten nicht mehr zu diesem Zweck.**",
            },
            {
              type: "paragraph",
              text: `**Der Widerspruch ist an keine Form gebunden und kann formlos an [${privacyContactEmail}] gerichtet werden.**`,
            },
          ],
        },
      ],
    },

    {
      id: "beschwerderecht",
      heading: "18. Beschwerderecht bei einer Aufsichtsbehörde",
      blocks: [
        {
          type: "paragraph",
          text: "Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Für uns zuständig ist:",
        },
        {
          type: "address",
          lines: [
            "**Die Landesbeauftragte für den Datenschutz Niedersachsen**",
            "Prinzenstraße 5, 30159 Hannover",
            "Telefon: [0511 120 4500](tel:+495111204500)",
            "E-Mail: [poststelle@lfd.niedersachsen.de](mailto:poststelle@lfd.niedersachsen.de)",
          ],
        },
      ],
    },

    {
      id: "aenderungen",
      heading: "19. Änderungen dieser Datenschutzerklärung",
      blocks: [
        {
          type: "paragraph",
          text: "Wir passen diese Datenschutzerklärung an, wenn sich unsere Verarbeitung oder die rechtlichen Vorgaben ändern. Die jeweils aktuelle Fassung finden Sie unter [uenal-gutachten.de/datenschutz](/datenschutz).",
        },
      ],
    },
  ]),
};

/* ==========================================================================
 * ALLGEMEINE GESCHÄFTSBEDINGUNGEN  —  /agb
 * Vorlage: 01_AGB.md (Stand August 2026).
 *
 * Hinweis: Es wird bewusst NICHT auf die Online-Streitbeilegungsplattform der
 * Europäischen Kommission verwiesen. Die Plattform wurde eingestellt; ein
 * Verweis darauf ist irreführend. § 13 enthält allein die Erklärung zur
 * Nichtteilnahme nach § 36 Absatz 1 Nummer 1 VSBG.
 * ========================================================================== */

export const agbContent: LegalDocumentContent = {
  title: "AGB",
  subtitle: "Allgemeine Geschäftsbedingungen",
  status: "Stand: August 2026",
  metaTitle: "Allgemeine Geschäftsbedingungen (AGB)",
  metaDescription: `Allgemeine Geschäftsbedingungen des ${name}: Leistungsumfang, Honorar, Nutzungsrechte, Unparteilichkeit, Haftung und Widerrufsrecht für Verbraucher.`,
  path: "/agb",
  sections: sections([
    {
      id: "paragraf-1",
      heading: "§ 1 Geltungsbereich",
      blocks: [
        {
          type: "paragraph",
          text: `(1) Diese Allgemeinen Geschäftsbedingungen gelten für sämtliche Verträge zwischen dem ${name}, Inhaber ${address.owner}, ${inlineAddress} (nachfolgend „Sachverständiger") und seinen Auftraggebern (nachfolgend „Auftraggeber") über die Erstellung von Wertgutachten, Wertindikationen, Stellungnahmen und Beratungsleistungen zur Immobilienbewertung.`,
        },
        {
          type: "paragraph",
          text: "(2) **Sie gelten ausdrücklich nicht für Aufträge, die dem Sachverständigen durch ein Gericht, eine Staatsanwaltschaft oder eine Behörde erteilt werden.** Für diese Aufträge gelten ausschließlich die jeweiligen gesetzlichen Vorschriften, insbesondere das Justizvergütungs- und -entschädigungsgesetz (JVEG), die Zivilprozessordnung und das Gesetz über die Zwangsversteigerung und die Zwangsverwaltung (ZVG).",
        },
        {
          type: "paragraph",
          text: "(3) Verbraucher im Sinne dieser Bedingungen ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können (§ 13 BGB). Unternehmer ist eine natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss des Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt (§ 14 BGB).",
        },
        {
          type: "paragraph",
          text: "(4) Abweichende oder ergänzende Bedingungen des Auftraggebers werden nicht Vertragsbestandteil, es sei denn, der Sachverständige stimmt ihrer Geltung ausdrücklich in Textform zu.",
        },
      ],
    },

    {
      id: "paragraf-2",
      heading: "§ 2 Gegenstand und Grenzen der Leistung",
      blocks: [
        {
          type: "paragraph",
          text: "(1) Der Sachverständige erstellt Gutachten und gutachterliche Stellungnahmen nach den anerkannten Regeln der Immobilienbewertung, insbesondere nach der Immobilienwertermittlungsverordnung (ImmoWertV) und den zugehörigen Richtlinien.",
        },
        {
          type: "paragraph",
          text: "(2) Gegenstand, Bewertungsstichtag, Wertbegriff, Verwendungszweck und Umfang der Ortsbesichtigung werden vor Auftragsannahme in Textform festgelegt. Der Sachverständige schuldet die sorgfältige Erstellung des vereinbarten Gutachtens, nicht ein bestimmtes Wertergebnis.",
        },
        {
          type: "paragraph",
          text: "(3) Der Sachverständige schuldet keine Rechtsberatung, keine Steuerberatung, keine Finanzierungsberatung, keine Bauschadensbegutachtung und keine Prüfung der Bauordnungs- oder Genehmigungskonformität, soweit dies nicht ausdrücklich vereinbart ist. Der Auftraggeber wird darauf hingewiesen, in rechtlichen und steuerlichen Fragen eigene fachliche Beratung einzuholen.",
        },
        {
          type: "paragraph",
          text: "(4) Eine Wertindikation, eine Marktpreiseinschätzung oder ein Kurzgutachten ersetzt kein Verkehrswertgutachten und ist zur Vorlage bei Gerichten und Finanzbehörden regelmäßig nicht geeignet. Der Sachverständige weist hierauf im jeweiligen Dokument gesondert hin.",
        },
        {
          type: "paragraph",
          text: "(5) Zerstörungsfreie Untersuchungen und Bauteilöffnungen sind nicht Gegenstand des Auftrags. Verdeckte Mängel, die ohne Bauteilöffnung nicht erkennbar sind, können nicht berücksichtigt werden.",
        },
      ],
    },

    {
      id: "paragraf-3",
      heading: "§ 3 Zustandekommen des Vertrages",
      blocks: [
        {
          type: "paragraph",
          text: "(1) Angebote des Sachverständigen sind freibleibend, sofern sie nicht ausdrücklich als verbindlich bezeichnet sind.",
        },
        {
          type: "paragraph",
          text: "(2) Der Vertrag kommt durch Auftragsbestätigung des Sachverständigen in Textform oder durch Beginn der Bearbeitung mit Kenntnis und Billigung des Auftraggebers zustande.",
        },
        {
          type: "paragraph",
          text: "(3) Der Sachverständige ist berechtigt, einen Auftrag ohne Angabe von Gründen abzulehnen, insbesondere wenn seine Unparteilichkeit nach § 8 nicht gewährleistet ist.",
        },
      ],
    },

    {
      id: "paragraf-4",
      heading: "§ 4 Mitwirkungspflichten des Auftraggebers",
      blocks: [
        {
          type: "paragraph",
          text: "(1) Der Auftraggeber stellt dem Sachverständigen alle für die Bewertung erforderlichen Unterlagen vollständig und in lesbarer Form zur Verfügung, insbesondere Grundbuchauszug, Flurkarte, Teilungserklärung, Bauzeichnungen, Baubeschreibung, Wohnflächenberechnung, Energieausweis, Miet- und Pachtverträge sowie Unterlagen zu durchgeführten Modernisierungen.",
        },
        {
          type: "paragraph",
          text: "(2) Der Auftraggeber sorgt dafür, dass das Bewertungsobjekt zum vereinbarten Termin zugänglich ist und alle relevanten Gebäudeteile besichtigt werden können.",
        },
        {
          type: "paragraph",
          text: "(3) Der Auftraggeber weist auf ihm bekannte wertrelevante Umstände hin, insbesondere auf Rechte Dritter, Baulasten, Altlasten, Feuchteschäden, laufende oder beschlossene Sanierungsmaßnahmen, Rückstände in der Erhaltungsrücklage und anhängige Rechtsstreitigkeiten.",
        },
        {
          type: "paragraph",
          text: "(4) Der Sachverständige darf die Angaben und Unterlagen des Auftraggebers seiner Bewertung zugrunde legen, soweit sich ihm ihre Unrichtigkeit nicht aufdrängen musste. Er ist nicht verpflichtet, Angaben Dritter auf ihre Richtigkeit zu überprüfen, soweit dies nicht ausdrücklich vereinbart ist.",
        },
        {
          type: "paragraph",
          text: "(5) Verzögerungen, die auf fehlender oder verspäteter Mitwirkung beruhen, verlängern die vereinbarte Bearbeitungsfrist entsprechend. Mehraufwand, der dem Sachverständigen dadurch entsteht, wird nach Zeitaufwand vergütet.",
        },
      ],
    },

    {
      id: "paragraf-5",
      heading: "§ 5 Honorar, Auslagen und Zahlung",
      blocks: blocks([
        {
          type: "paragraph",
          text: "(1) Das Honorar wird als Pauschalhonorar oder nach Zeitaufwand vereinbart. Maßgeblich ist die Vereinbarung im Angebot oder in der Auftragsbestätigung.",
        },
        {
          type: "paragraph",
          text: "(2) **Das Honorar ist nicht vom ermittelten Wert abhängig.** Eine Vereinbarung des Honorars in Abhängigkeit vom Bewertungsergebnis ist ausgeschlossen.",
        },
        {
          type: "paragraph",
          text: "(3) Notwendige Auslagen, insbesondere Gebühren für Grundbuchauszüge, Auskünfte des Gutachterausschusses, Kaufpreissammlungen, Katasterunterlagen und Baulastenauskünfte sowie Fahrtkosten, werden zusätzlich in tatsächlicher Höhe berechnet, sofern nichts anderes vereinbart ist.",
        },
        {
          type: "paragraph",
          text: "(4) Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer; gegenüber Verbrauchern werden Endpreise einschließlich Umsatzsteuer ausgewiesen.",
        },
        {
          type: "paragraph",
          text: "(5) Das Honorar ist innerhalb von vierzehn Tagen nach Rechnungsstellung ohne Abzug fällig. Der Sachverständige ist berechtigt, einen angemessenen Vorschuss zu verlangen und die Herausgabe des Gutachtens von dessen Zahlung abhängig zu machen.",
        },
        {
          type: "paragraph",
          text: "(6) Der Auftraggeber kann nur mit unbestrittenen oder rechtskräftig festgestellten Forderungen aufrechnen.",
        },
      ]),
    },

    {
      id: "paragraf-6",
      heading: "§ 6 Fristen und Abnahme",
      blocks: [
        {
          type: "paragraph",
          text: "(1) Vereinbarte Fertigstellungstermine sind verbindlich, soweit die Mitwirkungspflichten nach § 4 rechtzeitig erfüllt wurden und keine Umstände eintreten, die der Sachverständige nicht zu vertreten hat.",
        },
        {
          type: "paragraph",
          text: "(2) Das Gutachten gilt als abgenommen, wenn der Auftraggeber es entgegengenommen und nicht innerhalb von vier Wochen Mängel in Textform angezeigt hat. Gegenüber Verbrauchern gilt dies nur, wenn der Sachverständige bei Übergabe auf diese Wirkung hingewiesen hat.",
        },
        {
          type: "paragraph",
          text: "(3) Offensichtliche Schreib- und Rechenfehler berichtigt der Sachverständige unentgeltlich.",
        },
      ],
    },

    {
      id: "paragraf-7",
      heading: "§ 7 Nutzungsrechte und Zweckbindung",
      blocks: [
        {
          type: "paragraph",
          text: "(1) Das Gutachten ist urheberrechtlich geschützt. Der Auftraggeber erhält ein einfaches, nicht übertragbares Nutzungsrecht für den im Auftrag festgelegten Zweck.",
        },
        {
          type: "paragraph",
          text: "(2) Die Weitergabe an Dritte, die Veröffentlichung, die auszugsweise Wiedergabe und die Verwendung für einen anderen als den vereinbarten Zweck bedürfen der vorherigen Zustimmung des Sachverständigen in Textform. Die Weitergabe an den eigenen Steuerberater, Rechtsanwalt, an das Finanzamt, an ein Gericht oder an eine finanzierende Bank zum vereinbarten Zweck ist hiervon ausgenommen.",
        },
        {
          type: "paragraph",
          text: "(3) Wird das Gutachten unbefugt an Dritte weitergegeben, haftet der Sachverständige diesen Dritten gegenüber nicht. Der Auftraggeber stellt den Sachverständigen von Ansprüchen frei, die Dritte aufgrund einer unbefugten Weitergabe geltend machen.",
        },
        {
          type: "paragraph",
          text: "(4) Auszüge, Zusammenfassungen und sinnentstellende Kürzungen des Gutachtens sind unzulässig. Das Gutachten darf nur vollständig einschließlich aller Anlagen und Hinweise verwendet werden.",
        },
        {
          type: "paragraph",
          text: "(5) Das Gutachten ist auf den vereinbarten Wertermittlungsstichtag bezogen. Es verliert mit zunehmendem zeitlichen Abstand an Aussagekraft und ist nicht ohne Weiteres auf spätere Zeitpunkte übertragbar.",
        },
      ],
    },

    {
      id: "paragraf-8",
      heading: "§ 8 Unparteilichkeit und Interessenkonflikte",
      blocks: [
        {
          type: "paragraph",
          text: "(1) Der Sachverständige erstattet seine Gutachten unabhängig, unparteiisch und weisungsfrei. Er ist nicht an Erwartungen des Auftraggebers hinsichtlich des Ergebnisses gebunden.",
        },
        {
          type: "paragraph",
          text: "(2) Der Sachverständige legt vor Auftragsannahme offen, wenn er zu dem Bewertungsobjekt, dem Auftraggeber oder einer weiteren Partei in einer Beziehung steht, die geeignet ist, Zweifel an seiner Unparteilichkeit zu begründen.",
        },
        /*
         * Absatz 3 ist bewusst deutlich formuliert und gehört sichtbar in die
         * AGB, nicht ins Kleingedruckte. Er entkräftet den naheliegendsten
         * Einwand gegen die Unabhängigkeit des Büros. Nicht abschwächen.
         */
        {
          type: "paragraph",
          text: "(3) **Der Sachverständige ist zugleich Geschäftsführer der Uenal Immobilien GmbH, die als Immobilienmaklerin tätig ist.** Er übernimmt keinen Bewertungsauftrag für ein Objekt, mit dessen Vermittlung die Uenal Immobilien GmbH beauftragt ist oder war, und er nimmt keinen Vermittlungsauftrag für ein Objekt an, das er zuvor bewertet hat, ohne dies allen Beteiligten vorher offenzulegen. Beauftragen mehrere Parteien mit gegenläufigen Interessen den Sachverständigen zu demselben Objekt, lehnt er den zweiten Auftrag ab.",
        },
      ],
    },

    {
      id: "paragraf-9",
      heading: "§ 9 Verschwiegenheit",
      blocks: [
        {
          type: "paragraph",
          text: "(1) Der Sachverständige behandelt alle ihm im Rahmen des Auftrags bekannt gewordenen Tatsachen vertraulich, auch über das Ende des Auftrags hinaus.",
        },
        {
          type: "paragraph",
          text: "(2) Die Verschwiegenheitspflicht entfällt, soweit eine gesetzliche Offenbarungspflicht besteht, der Auftraggeber den Sachverständigen von ihr entbindet oder die Offenlegung zur Durchsetzung eigener Ansprüche des Sachverständigen erforderlich ist.",
        },
      ],
    },

    {
      id: "paragraf-10",
      heading: "§ 10 Haftung",
      blocks: blocks([
        {
          type: "paragraph",
          text: "(1) Der Sachverständige haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit, bei arglistigem Verschweigen eines Mangels, bei der Verletzung von Leben, Körper oder Gesundheit sowie bei Übernahme einer Garantie.",
        },
        {
          type: "paragraph",
          text: "(2) Bei einfacher Fahrlässigkeit haftet der Sachverständige nur für die Verletzung wesentlicher Vertragspflichten. Wesentliche Vertragspflichten sind solche, deren Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglicht und auf deren Einhaltung der Auftraggeber regelmäßig vertrauen darf. In diesem Fall ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.",
        },
        { type: "paragraph", text: "(3) Im Übrigen ist die Haftung ausgeschlossen." },
        {
          type: "paragraph",
          text: "(4) Eine Haftung für Wertentwicklungen nach dem Wertermittlungsstichtag sowie für Abweichungen des später tatsächlich erzielten Kaufpreises vom ermittelten Wert besteht nicht.",
        },
        {
          type: "paragraph",
          // Konkrete Versicherungsangaben werden ergänzt, sobald bestätigt.
          text: pendingDisclosures.berufshaftpflicht
            ? `(5) Der Sachverständige unterhält eine Berufshaftpflichtversicherung bei der ${pendingDisclosures.berufshaftpflicht.versicherer} mit einer Deckungssumme von ${pendingDisclosures.berufshaftpflicht.deckungssumme}.`
            : "(5) Der Sachverständige unterhält eine Berufshaftpflichtversicherung.",
        },
      ]),
    },

    {
      id: "paragraf-11",
      heading: "§ 11 Widerrufsrecht für Verbraucher",
      blocks: [
        {
          type: "paragraph",
          text: "(1) Verbrauchern steht bei Verträgen, die im Wege des Fernabsatzes oder außerhalb von Geschäftsräumen geschlossen werden, ein gesetzliches Widerrufsrecht nach §§ 312b, 312c, 312g, 355 BGB zu. Die Einzelheiten ergeben sich aus der gesonderten [Widerrufsbelehrung](/widerrufsbelehrung), die dem Verbraucher vor Vertragsschluss in Textform zur Verfügung gestellt wird und Bestandteil des Vertrages ist.",
        },
        {
          type: "paragraph",
          text: "(2) Wünscht der Verbraucher, dass der Sachverständige mit der Bearbeitung bereits vor Ablauf der Widerrufsfrist beginnt, bedarf dies seines ausdrücklichen Verlangens in Textform. Widerruft der Verbraucher anschließend, schuldet er Wertersatz für die bis zum Widerruf erbrachten Leistungen nach Maßgabe des § 357 Absatz 8 BGB.",
        },
      ],
    },

    {
      id: "paragraf-12",
      heading: "§ 12 Datenschutz",
      blocks: [
        {
          type: "paragraph",
          text: "Der Sachverständige verarbeitet personenbezogene Daten nach den Vorgaben der Datenschutz-Grundverordnung und des Bundesdatenschutzgesetzes. Einzelheiten zu Zwecken, Rechtsgrundlagen, Empfängern, Speicherdauer und Betroffenenrechten ergeben sich aus der [Datenschutzerklärung](/datenschutz).",
        },
      ],
    },

    {
      id: "paragraf-13",
      heading: "§ 13 Verbraucherstreitbeilegung",
      blocks: [
        {
          type: "paragraph",
          text: "Der Sachverständige ist weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 Absatz 1 Nummer 1 VSBG).",
        },
      ],
    },

    {
      id: "paragraf-14",
      heading: "§ 14 Schlussbestimmungen",
      blocks: [
        {
          type: "paragraph",
          text: "(1) Es gilt das Recht der Bundesrepublik Deutschland. Bei Verbrauchern gilt diese Rechtswahl nur insoweit, als dadurch der Schutz zwingender Vorschriften des Rechts des Staates des gewöhnlichen Aufenthalts nicht entzogen wird.",
        },
        {
          type: "paragraph",
          text: "(2) Ist der Auftraggeber Kaufmann im Sinne des Handelsgesetzbuches, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis der Sitz des Sachverständigen. Erfüllungsort ist der Sitz des Sachverständigen.",
        },
        {
          type: "paragraph",
          text: "(3) Änderungen und Ergänzungen dieser Bedingungen bedürfen der Textform.",
        },
        {
          type: "paragraph",
          text: "(4) Sollten einzelne Bestimmungen dieser Bedingungen unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle der unwirksamen Bestimmung treten die gesetzlichen Vorschriften.",
        },
      ],
    },
  ]),
};

/* ==========================================================================
 * WIDERRUFSBELEHRUNG  —  /widerrufsbelehrung
 *
 * WICHTIG: Der endgültige, mandantenseitig freigegebene Text wird separat
 * geliefert (siehe `pendingDisclosures.widerrufsbelehrungFinalised`).
 * Bis dahin ist hier die gesetzliche Musterbelehrung nach Anlage 1 zu
 * Art. 246a § 1 Absatz 2 Satz 1 Nummer 1 EGBGB hinterlegt, angepasst an
 * Dienstleistungsverträge, sowie das Muster-Widerrufsformular nach Anlage 2.
 *
 * Hintergrund: Bewertungsaufträge kommen fast immer telefonisch, per E-Mail
 * oder beim Ortstermin zustande und gelten damit als Fernabsatzverträge oder
 * als Verträge außerhalb von Geschäftsräumen. Ohne ordnungsgemäße Belehrung
 * kann ein Verbraucher noch nach zwölf Monaten und vierzehn Tagen widerrufen
 * und das Honorar zurückverlangen, obwohl das Gutachten längst erstellt ist.
 *
 * Vor Freigabe anwaltlich prüfen und die Fristangaben gegen die tatsächliche
 * Vertragspraxis abgleichen.
 * ========================================================================== */

export const widerrufsbelehrungContent: LegalDocumentContent = {
  title: "Widerrufsbelehrung",
  subtitle: "Widerrufsrecht für Verbraucher und Muster-Widerrufsformular",
  status: "Stand: August 2026",
  metaTitle: "Widerrufsbelehrung",
  metaDescription: `Widerrufsbelehrung des ${name} für Verbraucher: Widerrufsfrist, Ausübung des Widerrufs, Widerrufsfolgen, Wertersatz und Muster-Widerrufsformular.`,
  path: "/widerrufsbelehrung",
  sections: sections([
    {
      id: "einleitung",
      blocks: [
        {
          type: "lead",
          text: "Die folgende Belehrung gilt für Verbraucher im Sinne des § 13 BGB. Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können. Bei Verträgen mit Unternehmern besteht kein Widerrufsrecht.",
        },
      ],
    },

    {
      id: "widerrufsrecht",
      heading: "Widerrufsrecht",
      blocks: [
        {
          type: "paragraph",
          text: "Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.",
        },
        {
          type: "paragraph",
          text: "Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.",
        },
        {
          type: "paragraph",
          text: "Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können hierfür das unten abgedruckte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist. Die Erklärung ist zu richten an:",
        },
        {
          type: "address",
          lines: [
            `**${name}**`,
            address.owner,
            address.street,
            `${address.zip} ${address.city}`,
            `Telefon: [${contact.phoneDisplay}](tel:${contact.phone})`,
            `E-Mail: [${contact.email}](mailto:${contact.email})`,
          ],
        },
        {
          type: "paragraph",
          text: "Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.",
        },
      ],
    },

    {
      id: "widerrufsfolgen",
      heading: "Folgen des Widerrufs",
      blocks: [
        {
          type: "paragraph",
          text: "Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.",
        },
      ],
    },

    {
      id: "vorzeitiger-beginn",
      blocks: [
        {
          type: "callout",
          variant: "legal",
          title: "Wichtig: Vorzeitiger Beginn der Leistung und Wertersatz",
          blocks: [
            {
              type: "paragraph",
              text: "**Haben Sie verlangt, dass wir mit der Erstellung des Gutachtens oder einer sonstigen Dienstleistung noch vor Ablauf der Widerrufsfrist beginnen, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Leistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Leistungen entspricht (§ 357 Absatz 8 BGB).**",
            },
            {
              type: "paragraph",
              text: "**Ihr Widerrufsrecht erlischt bei einem Vertrag über die Erbringung von Dienstleistungen, wenn wir die Dienstleistung vollständig erbracht haben und mit der Ausführung erst begonnen haben, nachdem Sie dazu Ihre ausdrückliche Zustimmung gegeben und gleichzeitig Ihre Kenntnis davon bestätigt haben, dass Sie Ihr Widerrufsrecht bei vollständiger Vertragserfüllung durch uns verlieren (§ 356 Absatz 4 BGB).**",
            },
          ],
        },
      ],
    },

    {
      id: "muster-widerrufsformular",
      blocks: [
        {
          type: "callout",
          variant: "form",
          title: "Muster-Widerrufsformular",
          blocks: [
            {
              type: "paragraph",
              text: "Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.",
            },
            {
              type: "address",
              lines: [
                "An:",
                `**${name}**`,
                address.owner,
                address.street,
                `${address.zip} ${address.city}`,
                `E-Mail: [${contact.email}](mailto:${contact.email})`,
              ],
            },
            {
              type: "paragraph",
              text: "Hiermit widerrufe(n) ich / wir den von mir / uns abgeschlossenen Vertrag über die Erbringung der folgenden Dienstleistung:",
            },
            {
              type: "list",
              items: [
                "Bezeichnung der Dienstleistung: _____________________________",
                "Beauftragt am: _____________________________",
                "Name des / der Verbraucher(s): _____________________________",
                "Anschrift des / der Verbraucher(s): _____________________________",
                "Unterschrift des / der Verbraucher(s) (nur bei Mitteilung auf Papier): _____________________________",
                "Datum: _____________________________",
              ],
            },
            {
              type: "paragraph",
              text: "(*) Unerwünschtes bitte streichen.",
            },
          ],
        },
      ],
    },

    {
      id: "ausnahmen",
      heading: "Kein Widerrufsrecht bei gerichtlichen und behördlichen Aufträgen",
      blocks: [
        {
          type: "paragraph",
          text: "Bei Aufträgen, die durch ein Gericht, eine Staatsanwaltschaft oder eine Behörde erteilt werden, besteht kein Widerrufsrecht. Für diese Aufträge gelten ausschließlich die jeweiligen gesetzlichen Vorschriften, insbesondere das JVEG, die ZPO und das ZVG. Ergänzend gelten unsere [Allgemeinen Geschäftsbedingungen](/agb).",
        },
      ],
    },
  ]),
};

/* ==========================================================================
 * Registry — erleichtert das Einbinden neuer Rechtsseiten
 * ========================================================================== */

export const legalDocuments = {
  impressum: impressumContent,
  datenschutz: datenschutzContent,
  agb: agbContent,
  widerrufsbelehrung: widerrufsbelehrungContent,
} as const;

export type LegalDocumentKey = keyof typeof legalDocuments;
