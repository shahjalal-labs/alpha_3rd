"use client";

import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Handshake,
} from "lucide-react";
import { motion } from "motion/react";

export default function Leistungen() {
  const services = [
    {
      icon: FileText,
      title: "Verkehrswertgutachten",
      description: "Rechtssichere Wertermittlung für Ihre Immobilie",
      details: [
        "Vollgutachten nach ImmoWertV",
        "Gerichtsverwertbar & bankkonform",
        "Wohn- und Gewerbeimmobilien",
        "Umfassende Markt- und Lageanalyse",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Kurzgutachten",
      description: "Schnelle und fundierte Werteinschätzung",
      details: [
        "Kompakter Bewertungsbericht",
        "Für private Kauf- & Verkaufsentscheidungen",
        "Kurze Bearbeitungszeit",
        "Transparente Kostendarstellung",
      ],
    },
    {
      icon: Handshake,
      title: "Kauf- & Verkaufsbegleitung",
      description: "Neutrale Expertise bei Ihrer Immobilientransaktion",
      details: [
        "Unabhängige Bewertung vor dem Kauf",
        "Marktgerechte Preisfindung beim Verkauf",
        "Unterstützung in Verhandlungen",
        "Objektbesichtigung & Zustandsanalyse",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative md:py-32 py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A0A0A] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A0A0A] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
          // initial="hidden"
          // animate="visible"
          // variants={{
          //   hidden: { opacity: 0 },
          //   visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          // }}
          >
            <motion.div
              className="inline-block mb-6 px-4 py-1 bg-[#0A0A0A]/20 rounded-full"
              // variants={fadeInUp}
            >
              <span className="text-white bg-white/10 px-3 py-1 rounded-full text-sm font-semibold">
                UNSERE LEISTUNGEN
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              // variants={fadeInUp}
            >
              Professionelle{" "}
              <span className="text-white">Immobilienbewertung</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
              // variants={fadeInUp}
            >
              Von der Wertermittlung bis zur Begleitung – kompetent aus einer
              Hand
            </motion.p>

            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full"
              // variants={fadeInUp}
            >
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold text-white">
                Mit fundierter Expertise nach ImmoWertV und langjähriger
                Marktkenntnis
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="md:py-32 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                // initial="hidden"
                // whileInView="visible"
                // viewport={{ once: true }}
                // variants={{
                //   hidden: { opacity: 0, y: 40 },
                //   visible: {
                //     opacity: 1,
                //     y: 0,
                //     transition: {
                //       duration: 0.6,
                //       delay: index * 0.1,
                //       ease: "easeOut",
                //     },
                //   },
                // }}
                className="group p-8 bg-white border border-gray-200 rounded-2xl hover:border-[#0A0A0A] hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-6 w-16 h-16 bg-[#0A0A0A]/10 rounded-xl flex items-center justify-center group-hover:bg-[#0A0A0A] transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-[#0A0A0A] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-[#0A0A0A] mt-1">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="md:py-32 py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
          // variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Interesse an unseren{" "}
              <span className="text-white">Leistungen</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Angebot
            </p>
            <motion.a
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0A0A0A] rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
