import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";

export interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  city?: string;
}

export function generatePageMetadata({
  title,
  description,
  path = "",
}: SEOProps = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`;
    
  const pageDesc = description
    ? description
    : "Zertifizierter Sachverständiger für Immobilienwertermittlung (DGuSV). Verkehrswertgutachten & Kurzgutachten nach ImmoWertV im Nordwesten & bundesweit.";

  const canonicalUrl = `https://uenal-gutachten.de${path}`;

  const isPreview =
    process.env.VERCEL_ENV === "preview" ||
    process.env.NEXT_PUBLIC_IS_PREVIEW === "true" ||
    (typeof process.env.VERCEL_URL === "string" &&
      process.env.VERCEL_URL.includes("vercel.app"));

  return {
    title: pageTitle,
    description: pageDesc,
    // robots: isPreview
    //   ? {
    //       index: false,
    //       follow: false,
    //       nocache: true,
    //       googleBot: {
    //         index: false,
    //         follow: false,
    //         noimageindex: true,
    //       },
    //     }
    //   : {
    //       index: true,
    //       follow: true,
    //     },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "de_DE",
      type: "website",
      images: [
        {
          url: "https://uenal-gutachten.de/assets/logo.png",
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDesc,
      images: ["https://uenal-gutachten.de/assets/logo.png"],
    },
  };
}

export function generateProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": siteConfig.name,
    "image": "https://uenal-gutachten.de/assets/logo.png",
    "@id": "https://uenal-gutachten.de/#organization",
    "url": "https://uenal-gutachten.de",
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.street,
      "addressLocality": siteConfig.contact.address.city,
      "postalCode": siteConfig.contact.address.zip,
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.2573,
      "longitude": 7.9255
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "areaServed": [
      "Westerstede",
      "Oldenburg",
      "Wilhelmshaven",
      "Ammerland",
      "Friesland",
      "Osterholz-Scharmbeck",
      "Stade",
      "Rotenburg (Wümme)",
      "Gifhorn"
    ],
    "priceRange": "$$",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional Certification",
        "name": "Sachverständiger für Immobilienwertermittlung (DGuSV)",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Deutscher Gutachter und Sachverständigen Verband e.V."
        }
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Personenzertifikat EU/A-001",
        "name": "Sachverständiger für die Bewertung von Grundstücken & Standardimmobilien",
        "recognizedBy": {
          "@type": "Organization",
          "name": "EWIVS Certification GmbH"
        }
      }
    ]
  };
}
