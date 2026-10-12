import logo from "@/imports/PNG.png";
import { siteConfig } from "@/config/siteConfig";

import { Mail, MapPin, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { transliterate } from "../common/route-map";

export default function Footer() {
  const cities = [
    "Apen",
    "Bad Zwischenahn",
    "Bockhorn",
    "Brake",
    "Butjadingen",
    "Edewecht",
    "Elsfleth",
    "Großenkneten",
    "Hatten",
    "Hude",
    "Jever",
    "Nordenham",
    "Oldenburg",
    "Ovelgönne",
    "Rastede",
    "Sande",
    "Schortens",
    "Stadland",
    "Varel",
    "Wangerland",
    "Wangerooge",
    "Wardenburg",
    "Westerstede",
    "Wiefelstede",
    "Wilhelmshaven",
    "Zetel",
  ];

  // const services = [
  //   { name: "Treppenhausreinigung", slug: "treppenhausreinigung" },
  //   { name: "Bauendreinigung", slug: "bauendreinigung" },
  //   { name: "Grundreinigung", slug: "grundreinigung" },
  //   { name: "Entrümpelung", slug: "entruempelung" },
  //   { name: "Objektkontrolle", slug: "objektkontrolle" },
  //   { name: "Reparaturarbeiten", slug: "reparaturarbeiten" },
  //   { name: "Handwerkerkoordination", slug: "handwerkerkoordination" },
  //   { name: "Wohnungsverwaltung", slug: "wohnungsverwaltung" },
  // ];

  const keywords = [
    "Immobilienbewertung",
    "Hausbewertung",
    "Immobiliengutachter",
    "Sachverständiger Immobilien",
    "Immobiliensachverständiger",
    "Verkehrswertgutachten",
    "Gutachter Immobilien",
    "Kurzgutachten Immobilien",
    "Haus bewerten lassen",
    "Immobilie bewerten lassen",
    "Wertgutachten Immobilien",
    "Immobiliengutachten",
    "Grundstücksbewertung",
    "Wohnungsbewertung",
    "Mehrfamilienhaus bewerten",
    "Gutachten Erbschaft Immobilie",
    "Gutachten Scheidung Immobilie",
    "Gutachten Zwangsversteigerung",
    "Marktwert Immobilie ermitteln",
    "Zertifizierter Sachverständiger",
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
        {/* Company Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mb-12 pb-12 border-b border-gray-800">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Image
              src={logo}
              alt="Uenal Sachverständigenbüro Logo"
              width={240}
              height={60}
              sizes="(max-width: 640px) 180px, 240px"
              className="h-16 w-auto mb-4 brightness-0 invert object-contain"
              loading="lazy"
            />

            <h3 className="text-xl font-bold mb-2">
              Uenal Sachverständigenbüro
            </h3>
            <p className="text-white mb-4">Immobilienbewertung mit Substanz</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 w-[90%]">
              Zertifizierter Sachverständiger für Immobilienwertermittlung (DGuSV).
              Mitglied im Deutschen Gutachter- und Sachverständigenverband e.V. (DGuSV).
            </p>

            {/* Social Media */}
            {siteConfig.showSocialLinks && (
              <div>
                <h4 className="font-bold mb-3 text-sm">Folgen Sie uns</h4>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-800 hover:border-[#0A0A0A] transition-all group"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-5 h-5 text-gray-400 group-hover:text-[#0A0A0A] transition-colors" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-800 hover:border-[#0A0A0A] transition-all group"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5 text-gray-400 group-hover:text-[#0A0A0A] transition-colors" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-800 hover:border-[#0A0A0A] transition-all group"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="w-5 h-5 text-gray-400 group-hover:text-[#0A0A0A] transition-colors" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-800 hover:border-[#0A0A0A] transition-all group"
                    aria-label="TikTok"
                  >
                    <FaTiktok className="w-5 h-5 text-gray-400 group-hover:text-[#0A0A0A] transition-colors" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-base text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#0A0A0A] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen"
                  className="hover:text-[#0A0A0A] transition-colors"
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  href="/ueber-uns"
                  className="hover:text-[#0A0A0A] transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#0A0A0A] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="hover:text-[#0A0A0A] transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {/* Anschrift */}
              <li>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                  <div>
                    <div className="text-white font-semibold">
                      Uenal Sachverständigenbüro
                    </div>
                    <div>Carl-Benz-Str. 5</div>
                    <div>26655 Westerstede</div>
                  </div>
                </div>
              </li>

              {/* Kontakt-Buttons */}
              <li className="pt-2 border-t border-gray-800">
                <div className="flex flex-col sm:flex-row gap-2">
                  {/* <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-white text-white group-hover:bg-white group-hover:text-black transition-colors"
                  >
                    <Mail className="w-4 h-4 text-white flex-shrink-0  transition-colors" />
                    E-Mail schreiben
                  </a>
                  <a
                    href="tel:+4944888600455"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors font-semibold"
                  >
                    <Phone className="w-4 h-4 text-black flex-shrink-0" />
                    Jetzt anrufen
                  </a> */}
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-white flex-shrink-0" />
                    <a
                      href="tel:+4944888600455"
                      className="hover:text-white transition-colors"
                    >
                      +49 4488 8600455
                    </a>
                  </div>
                </div>
              </li>
              {/* <li className="pt-2 border-t border-gray-800">
                <WhatsAppButtons
                  variant="inline"
                  text="Per WhatsApp schreiben"
                  className="w-full justify-center"
                />
              </li> */}
              <li className="flex items-center gap-2 pt-2 border-t border-gray-800">
                <Mail className="w-4 h-4 text-white flex-shrink-0 hover:text-white transition-colors" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regional SEO Section */}
        <div className="py-12 border-b border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-12">
            {keywords.map((keyword) => (
              <div key={keyword}>
                <h4 className="font-bold mb-4 text-sm">{keyword}</h4>
                <div className="flex flex-col gap-2 text-sm">
                  {cities.map((city) => (
                    <Link
                      key={`${keyword}-${city}`}
                      href={`/${transliterate(keyword)}-${transliterate(city)}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 Uenal Sachverständigenbüro. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/impressum"
              className="hover:text-[#0A0A0A] transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-[#0A0A0A] transition-colors"
            >
              Datenschutz
            </Link>
            <Link
              href="/agb"
              className="hover:text-[#0A0A0A] transition-colors"
            >
              AGB
            </Link>
            <Link
              href="/widerrufsbelehrung"
              className="hover:text-[#0A0A0A] transition-colors"
            >
              Widerrufsbelehrung
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
