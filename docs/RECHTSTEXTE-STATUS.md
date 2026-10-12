# Rechtstexte uenal-gutachten.de — Umsetzungsstand und offene Punkte

Stand: 25.08.2026

Alle Rechtstexte liegen zentral in `src/config/legalContent.ts`. Gerendert werden sie
über `src/app/components/legal/LegalDocument.tsx`. Textänderungen ausschließlich in der
Config vornehmen, nie in den Seitenkomponenten — sonst laufen die vier Seiten optisch
auseinander.

## 1. Was umgesetzt ist

| Seite | Route | Metadaten | Quelle |
| --- | --- | --- | --- |
| Impressum | `/impressum` | eigener Title + Description | `02_Impressum.md` |
| Datenschutzerklärung | `/datenschutz` | eigener Title + Description | `03_Datenschutzerklaerung.md` |
| AGB | `/agb` (neu angelegt) | eigener Title + Description | `01_AGB.md` |
| Widerrufsbelehrung | `/widerrufsbelehrung` (neu angelegt) | eigener Title + Description | gesetzliches Muster, Text folgt |

Weitere Änderungen: Footer verlinkt jetzt alle vier Rechtsseiten und zeigt die
E-Mail-Adresse aus `siteConfig` (der Mailto zeigte zuvor auf `info@uenal-fm.de`);
das Widerspruchsrecht nach Art. 21 DSGVO steht in einem gerahmten Kasten;
`/agb` und `/widerrufsbelehrung` sind in `sitemap.ts` aufgenommen.

Bereits vor dieser Runde erledigt und nur noch geprüft: DDG statt TMG,
keine Verweise auf die EU-Streitbeilegungsplattform, keine „Quelle: eRecht24"-Zeilen,
Social-Media-Icons hinter `siteConfig.showSocialLinks` (steht auf `false`),
Alt-Texte der Logos in Header und Footer.

Nicht angetastet: die Formulierung „Zertifizierter Sachverständiger" — weiterhin
15 Vorkommen in `src/`, keines davon geändert, solange der Zertifizierungsstatus
nicht bestätigt ist.

## 2. Offene Angaben (Mandant)

Die zugehörigen Abschnitte werden erst ausgegeben, wenn der Wert in
`pendingDisclosures` (`src/config/legalContent.ts`) gesetzt wird. Bis dahin
erscheint kein Platzhaltertext.

1. `ustIdNr` — USt-IdNr. nach § 27a UStG, oder Bestätigung, dass die
   Kleinunternehmerregelung nach § 19 UStG greift. Die Steuernummer darf nicht
   veröffentlicht werden.
2. `berufshaftpflicht` — Versicherer, Anschrift, Deckungssumme, räumlicher
   Geltungsbereich. Ohne diese Angabe ist das Impressum nicht freigabefähig.
3. `hostingProvider` — Name, Anschrift und Sitzland des Hosters. Nach Aufbau der
   Seite liegt Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA nahe.
4. `logfileRetention` — Löschfrist der Server-Logfiles, üblich 7 bis 30 Tage.
5. `privacyEmail` — existiert `datenschutz@uenal-gutachten.de`? Sonst bleibt
   `info@uenal-gutachten.de`, was zulässig ist.
6. `widerrufsbelehrungFinalised` — der endgültige Belehrungstext wird separat
   geliefert; derzeit steht die gesetzliche Musterbelehrung auf der Seite.

## 3. Nachtrag zu Teil A — neu aufgetauchte Fragen

Bei der Prüfung des Codes sind zwei Dienste aufgefallen, die im Fragebogen
nicht vorkamen, aber offenlegungspflichtig sind. Beide sind inzwischen in
Ziffer 8 und Ziffer 13 der Datenschutzerklärung beschrieben; die vertraglichen
Punkte sind noch zu klären.

**Cloudflare Turnstile** ist auf `/kontakt` und im Kontaktformular der Startseite
aktiv (`@marsidev/react-turnstile`, Site-Key aus `NEXT_PUBLIC_TURNSTILE_SITE_KEY`).
Dabei werden IP-Adresse sowie Browser- und Geräteangaben an Cloudflare, Inc., USA
übermittelt. Offen: Liegt ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO mit
Cloudflare vor? (`cloudflareDpaInPlace`)

**Formular-Backend:** Alle Formularanfragen gehen per POST an
`https://alpa-backend-api.vercel.app/alpa-third/send-message` bzw.
`/alpa-third/send-opinion`. Offen: Wer betreibt diese Schnittstelle, wo stehen
die Server, gibt es einen AVV, und wie lange werden die übermittelten Anfragen
dort gespeichert? (`formBackendOperator`)

Ergänzend zu prüfen: Wird für E-Mail, Kalender und Dateiablage Microsoft 365
oder ein anderer Dienst mit Verarbeitung außerhalb der EU genutzt? Falls ja,
gehört der Anbieter in `thirdCountryTransfer` (Ziffer 13).

## 4. Bewusste Abweichungen von den Vorlagen

**Cookies (Ziffer 7).** Die Vorlage beschreibt ein Einwilligungsbanner. Auf dieser
Website existiert keines, und es werden nur technisch notwendige Daten verarbeitet.
Der Abschnitt beschreibt daher den tatsächlichen Zustand. Sobald ein Analyse- oder
Marketingdienst eingebunden wird, braucht die Seite ein Banner nach § 25 TDDDG und
der Abschnitt muss neu geschrieben werden.

**Haftungsabschnitte im Impressum.** Haftung für Inhalte, Haftung für Links und
Urheberrecht sind erhalten geblieben, obwohl `02_Impressum.md` sie nicht enthält —
der Auftrag verlangte ausdrücklich die Umstellung der §§ 7 bis 10 auf das DDG, was
das Vorhandensein dieser Abschnitte voraussetzt. Sie sind bereits DDG-konform
formuliert.

## 5. Checkliste für die FM-Website (noch nicht umgesetzt)

Für uenal-fm.de lag kein Projektordner vor. Dieselben Punkte sind dort zu prüfen:

1. „§ 5 TMG" auf „§ 5 DDG" umstellen, ebenso §§ 7 bis 10 TMG auf §§ 7 bis 10 DDG.
2. Alle Verweise auf die EU-Plattform zur Online-Streitbeilegung entfernen,
   einschließlich der Überschrift „Verbraucherinformationen zur alternativen
   Streitschlichtung". Der Satz zur Nichtteilnahme an einem Streitbeilegungs-
   verfahren bleibt stehen.
3. „Quelle: eRecht24" überall entfernen.
4. Den Abschnitt zum Widerspruchsrecht nach Art. 21 DSGVO optisch abgesetzt
   darstellen (Rahmen oder farbiger Hintergrund), nicht als normalen Fließtext.
5. Social-Media-Icons, die auf `#` verweisen, hinter einen Konfigurationsschalter
   legen, bis echte Profil-URLs vorliegen.
6. Rechtstexte in eine zentrale Content-Datei je Website verschieben, analog zu
   `src/config/legalContent.ts`.
7. Mailto-Adressen im Footer gegen die angezeigte Adresse prüfen.
8. Alt-Texte der Logos auf den richtigen Firmennamen prüfen.
9. Impressum und Datenschutz eigene Title- und Description-Tags geben.
10. Datenschutzerklärung um den Abschnitt zu Diensten Dritter ergänzen (Hosting,
    Schriftarten, Karten, Analyse, Spamschutz, Formularübermittlung).

## 6. Noch nicht behoben

Im Footer haben alle Links die Hover-Farbe `hover:text-[#0A0A0A]` auf schwarzem
Grund; beim Überfahren werden sie damit praktisch unsichtbar. Das betrifft die
gesamte Fußzeile und bestand schon vorher. Die neuen Links wurden bewusst
genauso gestylt, um das Design nicht einseitig zu verändern. Empfehlung:
projektweit auf `hover:text-white` umstellen.

## 7. Nicht verifiziert

Der Linux-Container dieser Sitzung hatte keinen Speicherplatz, daher konnten
`tsc` und `next build` nicht ausgeführt werden. Die Änderungen wurden statisch
geprüft. Bitte vor dem Deploy einmal `npm run build` laufen lassen — `next.config.mjs`
setzt `typescript.ignoreBuildErrors: true`, Typfehler würden den Build also nicht
stoppen.
