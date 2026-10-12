"use client";

/**
 * Gemeinsamer Renderer für alle Rechtsseiten (Impressum, Datenschutzerklärung,
 * AGB, Widerrufsbelehrung).
 *
 * Die Inhalte kommen ausschließlich aus src/config/legalContent.ts. Diese
 * Komponente enthält bewusst keinen Rechtstext, sondern nur Darstellung —
 * so bleibt das Layout aller Rechtsseiten identisch und Textänderungen
 * erfolgen an einer einzigen Stelle.
 */

import { motion } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";
import type {
  LegalBlock,
  LegalDocumentContent,
  LegalSection,
} from "@/config/legalContent";

/* --------------------------------------------------------------------------
 * Inline-Formatierung: **fett** und [Text](ziel)
 * -------------------------------------------------------------------------- */

const INLINE_PATTERN = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  const linkClasses =
    "text-black font-medium underline decoration-gray-400 hover:decoration-black underline-offset-2 transition-colors";

  // Interne Seiten über next/link, damit kein Full-Page-Reload entsteht.
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={linkClasses}>
        {children}
      </Link>
    );
  }

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={linkClasses}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}

/** Wandelt **fett** und [Text](ziel) in React-Knoten um. */
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = new RegExp(INLINE_PATTERN.source, "g");

  let lastIndex = 0;
  let matchIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    // Nicht getroffene Alternativgruppen sind zur Laufzeit `undefined`;
    // die Typdeklaration von RegExpExecArray gibt das nicht her.
    const full = match[0];
    const boldText = match[1] as string | undefined;
    const linkText = match[2] as string | undefined;
    const linkHref = match[3] as string | undefined;

    if (boldText !== undefined) {
      nodes.push(
        <strong
          key={`${keyPrefix}-b${matchIndex}`}
          className="font-semibold text-black"
        >
          {renderInline(boldText, `${keyPrefix}-b${matchIndex}`)}
        </strong>,
      );
    } else if (linkText !== undefined && linkHref !== undefined) {
      nodes.push(
        <InlineLink key={`${keyPrefix}-a${matchIndex}`} href={linkHref}>
          {linkText}
        </InlineLink>,
      );
    }

    lastIndex = match.index + full.length;
    matchIndex += 1;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

/* --------------------------------------------------------------------------
 * Blöcke
 * -------------------------------------------------------------------------- */

const CALLOUT_STYLES = {
  /** Dezenter Hinweis. */
  info: "bg-gray-50 border-l-4 border-black rounded-r-lg p-6",
  /**
   * Deutlich hervorgehoben und vom übrigen Text getrennt.
   * Pflichtdarstellung für das Widerspruchsrecht nach Art. 21 Abs. 4 DSGVO.
   */
  legal: "bg-gray-50 border-2 border-black rounded-xl p-6 md:p-8 my-4",
  /** Formularmuster. */
  form: "bg-gray-50 border border-gray-300 rounded-xl p-6 md:p-8",
} as const;

const CALLOUT_TITLE_STYLES = {
  info: "text-lg font-bold text-black mb-3",
  legal: "text-xl md:text-2xl font-bold text-black mb-4 uppercase tracking-wide",
  form: "text-xl font-bold text-black mb-4",
} as const;

function Block({ block, id }: { block: LegalBlock; id: string }) {
  switch (block.type) {
    case "lead":
      return (
        <p className="text-lg text-gray-700 leading-relaxed">
          {renderInline(block.text, id)}
        </p>
      );

    case "paragraph":
      return <p>{renderInline(block.text, id)}</p>;

    case "subheading":
      return (
        <h3 className="text-lg font-bold text-black mt-6 mb-2">
          {renderInline(block.text, id)}
        </h3>
      );

    case "list":
      return (
        <ul className="list-disc pl-6 space-y-2">
          {block.items.map((item, index) => (
            <li key={`${id}-li${index}`}>
              {renderInline(item, `${id}-li${index}`)}
            </li>
          ))}
        </ul>
      );

    case "address":
      return (
        <div className="space-y-1">
          {block.lines.map((line, index) => (
            <div key={`${id}-ad${index}`}>
              {renderInline(line, `${id}-ad${index}`)}
            </div>
          ))}
        </div>
      );

    case "meta":
      return (
        <div className="space-y-1 text-sm text-gray-600 border-l-2 border-gray-200 pl-4">
          {block.items.map((item, index) => (
            <p key={`${id}-me${index}`}>
              {renderInline(item, `${id}-me${index}`)}
            </p>
          ))}
        </div>
      );

    case "callout": {
      const variant = block.variant ?? "info";

      return (
        <div className={CALLOUT_STYLES[variant]}>
          {block.title && (
            <h3 className={CALLOUT_TITLE_STYLES[variant]}>
              {renderInline(block.title, `${id}-ct`)}
            </h3>
          )}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {block.blocks.map((child, index) => (
              <Block
                key={`${id}-cb${index}`}
                block={child}
                id={`${id}-cb${index}`}
              />
            ))}
          </div>
        </div>
      );
    }

    default:
      return null;
  }
}

/* --------------------------------------------------------------------------
 * Abschnitte
 * -------------------------------------------------------------------------- */

function Section({
  section,
  isFirst,
}: {
  section: LegalSection;
  isFirst: boolean;
}) {
  const hasBlocks = section.blocks.length > 0;

  // Abschnitt ohne Inhalt und ohne Überschrift wird übersprungen.
  if (!hasBlocks && !section.heading) return null;

  const divider = isFirst ? "" : "border-t border-gray-200 pt-8";

  // Reine Gliederungsüberschrift ("Teil A", "Teil B") ohne eigenen Inhalt.
  if (!hasBlocks && section.heading) {
    return (
      <div id={section.id} className={`scroll-mt-28 ${divider}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          {section.heading}
        </h2>
      </div>
    );
  }

  return (
    <div id={section.id} className={`scroll-mt-28 ${divider}`}>
      {section.heading && (
        <h2 className="text-2xl font-bold text-black mb-4">
          {section.heading}
        </h2>
      )}
      <div className="space-y-4">
        {section.blocks.map((block, index) => (
          <Block
            key={`${section.id}-${index}`}
            block={block}
            id={`${section.id}-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------------------
 * Seite
 * -------------------------------------------------------------------------- */

export default function LegalDocument({
  content,
}: {
  content: LegalDocumentContent;
}) {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A0A0A] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A0A0A] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {content.title}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {content.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Inhalt */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-12 text-gray-700 leading-relaxed">
          {content.status && (
            <p className="text-sm text-gray-500 uppercase tracking-wide">
              {content.status}
            </p>
          )}

          {content.sections.map((section, index) => (
            <Section
              key={section.id}
              section={section}
              // Der Stand-Hinweis übernimmt bereits die obere Abgrenzung.
              isFirst={index === 0 && !content.status}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
