import dgusvSeal from "@/imports/Siegel_DGuSV_2026_PNG.png";
import ewivsSeal from "@/assets/ewivs_siegel_de.png";

export const siteConfig = {
  name: "Uenal Sachverständigenbüro",
  tagline: "Immobilienbewertung mit Substanz",
  foundedYear: 2025,
  
  contact: {
    phone: "+4944888600455",
    phoneDisplay: "+49 4488 8600455",
    email: "info@uenal-gutachten.de",
    address: {
      owner: "Alparslan Ünal",
      street: "Carl-Benz-Str. 5",
      city: "Westerstede",
      zip: "26655",
      full: "Carl-Benz-Str. 5, 26655 Westerstede",
    },
    hours: "Mo–Fr: 09:00 – 18:00 Uhr",
  },

  responseCommitment: "Wir melden uns in der Regel innerhalb eines Werktages. Bei Anfragen am Wochenende spätestens am nächsten Werktag.",

  googleRating: {
    value: "5.0",
    text: "5.0 auf Google",
    url: "https://maps.google.com/?q=Uenal+Sachverst%C3%A4ndigenb%C3%BCro+Westerstede",
  },

  showSocialLinks: false,
  socialLinks: {
    instagram: "",
    linkedin: "",
    facebook: "",
    tiktok: "",
  },

  // Central Qualification Block — SINGLE SOURCE OF TRUTH (Do not alter text or order)
  qualifications: {
    heading1: "Qualifikation",
    items1: [
      {
        title: "Immobilienkaufmann (IHK)",
        details: null,
      },
      {
        title: "Sachverständiger für Immobilienwertermittlung (DGuSV)",
        issuingBody: "Deutscher Gutachter und Sachverständigen Verband e.V.",
        certificateNo: "EU# DE/17275",
        checkDigit: "VI-DE89842",
        expiryDate: "31.12.2026",
        fullText: "Deutscher Gutachter und Sachverständigen Verband e.V., Zertifikatsnummer EU# DE/17275, Prüfziffer VI-DE89842",
      },
      {
        title: "Personenzertifikat EU/A-001 – Sachverständiger für die Bewertung von Grundstücken & Standardimmobilien",
        issuingBody: "EWIVS Certification GmbH",
        certificateNo: "ZN 2026-EU/118-5260",
        validUntil: "11.06.2028",
        fullText: "EWIVS Certification GmbH, Zertifikat-Nr. ZN 2026-EU/118-5260, gültig bis 11.06.2028",
      },
    ],
    heading2: "Weiterbildung",
    items2: [
      {
        title: "Immobilienwertermittler (TRA) – TÜV Rheinland Akademie, 2024",
        details: "Vergleichs-, Ertrags- und Sachwertverfahren, Rechtsgrundlagen der Immobilienwertermittlung, Flächendefinitionen",
      },
    ],
  },

  seals: {
    dgusv: {
      src: dgusvSeal,
      alt: "DGuSV Siegel 2026",
      expiryDate: "31.12.2026",
    },
    ewivs: {
      src: ewivsSeal,
      alt: "EWIVS Certification – Personenzertifikat EU/A-001",
      expiryDate: "11.06.2028",
    },
  },

  amtsgerichteText: "Als Sachverständiger für Zwangsversteigerungsverfahren tätig, u. a. für die Amtsgerichte Osterholz-Scharmbeck, Buxtehude, Rotenburg (Wümme) und Gifhorn.",
  
  taetigkeitsgebiet: "Wilhelmshaven, Friesland, Ammerland, Oldenburg, Osterholz, Stade, Rotenburg (Wümme), Gifhorn und bundesweit",
};
