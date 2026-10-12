import {
  ArrowRight,
  Award,
  CheckCircle,
  Heart,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

export default function Karriere() {
  // const fadeInUp = {
  //   hidden: { opacity: 0, y: 40 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  // };

  const benefits = [
    {
      icon: Users,
      title: "Wachsendes Unternehmen",
      description: "Flache Hierarchien und ein unterstützendes Team",
    },
    {
      icon: Award,
      title: "Moderne Ausstattung",
      description: "Moderne Arbeitsmittel und digitale Prozesse",
    },
    {
      icon: Heart,
      title: "Faire Bedingungen",
      description: "Attraktive Bezahlung und flexible Arbeitszeiten",
    },
    {
      icon: TrendingUp,
      title: "Wertschätzung",
      description: "Angenehmes Arbeitsumfeld und Anerkennung Ihrer Arbeit",
    },
  ];

  const requirements = [
    "Erfahrung in der Immobilienwirtschaft oder im Sachverständigenwesen",
    "Zuverlässigkeit, Pünktlichkeit und Auge für Details",
    "Eigeninitiative und Flexibilität sind selbstverständlich",
    "Teamfähigkeit und Offenheit für neue Methoden",
    "Gute Deutschkenntnisse für die Verständigung mit Kollegen und Kunden",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:md:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
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
          //   visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          // }}
          >
            <motion.div
              className="inline-block mb-6 px-4 py-1 bg-[#0A0A0A]/20 rounded-full"
              // variants={fadeInUp}
            >
              <span className="text-white bg-white/10 px-3 py-1 rounded-full text-sm font-semibold">
                KARRIERE
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              // variants={fadeInUp}
            >
              Gestalten Sie Ihre <span className="text-white">Zukunft</span> mit
              dem Uenal Sachverständigenbüro
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
              // variants={fadeInUp}
            >
              Werden Sie Teil unseres dynamischen Teams
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true }}
            // variants={fadeInUp}
            className="space-y-6 text-gray-700 leading-relaxed text-lg"
          >
            <p>
              Als renommierter Dienstleister für Immobilien bieten wir Ihnen
              nicht nur ein Jobangebot, sondern eine einzigartige Gelegenheit,
              Ihre Leidenschaft für Immobilien in eine erfüllende Karriere zu
              verwandeln.
            </p>
            <p>
              Wenn Sie sich nach einer beruflichen Herausforderung sehnen, die
              Sie stetig vorantreibt, dann sind Sie bei uns genau richtig. Unser
              Team aus engagierten Experten schafft nicht nur beeindruckende
              Lebensräume, sondern auch Chancen für individuelles Wachstum und
              berufliche Entfaltung.
            </p>
            <p className="font-semibold text-black text-xl">
              Werden Sie Teil unseres Teams und gestalten Sie die Zukunft der
              Immobilienbranche mit uns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true }}
            // variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Was wir <span className="text-[#0A0A0A]">bieten</span>
            </h2>
            <p className="text-xl text-gray-600">
              Ihre Vorteile beim Uenal Sachverständigenbüro
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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
                //       ease: "easeOut"
                //     }
                //   }
                // }}
                className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#0A0A0A] hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4 w-12 h-12 bg-[#0A0A0A]/10 rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-[#0A0A0A]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Offer */}
      <section className="py-16 md:md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true }}
            // variants={fadeInUp}
            className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 md:p-12"
          >
            <div className="mb-8">
              <div className="inline-block mb-4 px-4 py-1 bg-[#0A0A0A]/10 rounded-full">
                <span className="text-[#0A0A0A] text-sm font-semibold">
                  STELLENANGEBOT
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Reinigungskraft für{" "}
                <span className="text-[#0A0A0A]">Treppenhausreinigung</span>{" "}
                (m/w/d)
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Sie sind eine engagierte Reinigungskraft mit einem Auge für
                Sauberkeit und einem Sinn für Ordnung? Bei uns haben Sie die
                Chance, als zuverlässige Reinigungskraft für
                Treppenhausreinigung in einem aufstrebenden Unternehmen Ihre
                Fähigkeiten einzubringen und gemeinsam mit einem dynamischen
                Team neue Maßstäbe zu setzen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-black">
                  Unsere Angebote für Sie:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0A0A0A] flex-shrink-0 mt-1" />
                    <span>
                      Werden Sie Teil eines wachsenden Unternehmens mit flachen
                      Hierarchien und einem unterstützenden Team
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0A0A0A] flex-shrink-0 mt-1" />
                    <span>
                      Nutzen Sie unsere modernen Reinigungswerkzeuge und
                      -methoden für eine effiziente und gründliche Reinigung
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0A0A0A] flex-shrink-0 mt-1" />
                    <span>
                      Profitieren Sie von einer fairen Bezahlung und attraktiven
                      Arbeitszeiten
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0A0A0A] flex-shrink-0 mt-1" />
                    <span>
                      Freuen Sie sich auf ein angenehmes Arbeitsumfeld und die
                      Wertschätzung Ihrer Arbeit
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-black">
                  Ihr Profil:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {requirements.map((req, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0A0A0A] flex-shrink-0 mt-1" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
              <h3 className="text-xl font-bold mb-4">Ihre Aufgaben bei uns:</h3>
              <p className="text-gray-700">
                Reinigen Sie regelmäßig Treppenhäuser in verschiedenen Objekten,
                um einen sauberen und einladenden Eindruck zu gewährleisten.
              </p>
            </div>

            <div className="text-center">
              <motion.a
                href="mailto:info@uenal-gutachten.de?subject=Bewerbung%20als%20Reinigungskraft"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A0A0A] text-white rounded-full hover:bg-[#555555] transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Jetzt bewerben
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <p className="text-sm text-gray-500 mt-4">
                Senden Sie Ihre Bewerbungsunterlagen an info@uenal-gutachten.de
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      {/* <section className="py-16 md:md:py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true }}
            // variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Alparslan Ünal</h2>
            <p className="text-xl text-gray-300 mb-8">Inhaber</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+4944888600455"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0A0A0A] rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Jetzt anrufen
              </a>
              <a
                href="mailto:info@uenal-gutachten.de"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white border-2 border-white rounded-full hover:bg-white/20 transition-all duration-300 font-semibold"
              >
                E-Mail schreiben
              </a>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}
