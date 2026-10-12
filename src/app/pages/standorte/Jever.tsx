import {
  CheckCircle,
  Clock,
  Euro,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

export default function TreppenhausreinigungJever() {
  const benefits = [
    "Regelmäßige und zuverlässige Reinigung",
    "Professionelle Reinigungsmittel",
    "Erfahrenes Team vor Ort",
    "Flexible Terminvereinbarung",
  ];

  const services = [
    "Wöchentliche Treppenhausreinigung",
    "Fensterreinigung im Treppenhaus",
    "Handlaufreinigung und Desinfektion",
    "Fußbodenreinigung und -pflege",
    "Entfernung von Spinnweben",
    "Reinigung der Briefkastenanlage",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative md:py-32 py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A0A0A] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A0A0A] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
          // initial="hidden"
          // animate="visible"
          // variants={{
          //   hidden: { opacity: 0 },
          //   visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          // }}
          >
            <motion.div className="inline-block mb-6 px-4 py-1 bg-[#0A0A0A]/20 rounded-full">
              <span className="text-white bg-white/10 px-3 py-1 rounded-full text-sm font-semibold">
                JEVER
              </span>
            </motion.div>

            <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Treppenhausreinigung in{" "}
              <span className="text-[#0A0A0A]">Jever</span>
            </motion.h1>

            <motion.p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-8">
              Professionelle Reinigungsdienste für makellose Treppenhäuser in
              Jever und Umgebung
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+4944888600455">
                <button className="bg-[#0A0A0A] hover:bg-[#000060] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
                  <Phone className="inline-block w-5 h-5 mr-2" />
                  Jetzt anrufen
                </button>
              </a>
              <a href="#kontakt">
                <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
                  Angebot anfordern
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="md:py-32 py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Ihr Partner für{" "}
              <span className="text-[#0A0A0A]">Treppenhausreinigung</span> in
              Jever
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Als etablierter Dienstleister für Facility Management bietet
                Uenal Sachverständigenbüro professionelle Treppenhausreinigung in Jever und der
                gesamten Region Friesland. Wir verstehen, dass ein sauberes
                Treppenhaus der Visitenkarte Ihrer Immobilie entspricht.
              </p>
              <p>
                Unsere erfahrenen Reinigungskräfte sorgen dafür, dass Ihre
                Treppenhäuser in Jever stets in einwandfreiem Zustand sind. Mit
                modernen Reinigungsmethoden und hochwertigen Reinigungsmitteln
                garantieren wir Sauberkeit auf höchstem Niveau.
              </p>
              <p>
                Ob Wohnungseigentumsgemeinschaften, Hausverwaltungen oder
                private Vermieter in Jever – wir bieten maßgeschneiderte
                Lösungen für Ihre Anforderungen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="md:py-32 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Unser <span className="text-[#0A0A0A]">Leistungsumfang</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Umfassende Treppenhausreinigung für Immobilien in Jever
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#0A0A0A] hover:shadow-lg transition-all"
              >
                <div className="mb-4 w-12 h-12 bg-[#0A0A0A]/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[#0A0A0A]" />
                </div>
                <h3 className="text-lg font-bold mb-2">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="md:py-32 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Warum Uenal Sachverständigenbüro in <span className="text-[#0A0A0A]">Jever</span>?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0A0A0A] flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-gradient-to-br from-[#0A0A0A] to-[#000060] p-8 rounded-2xl text-white">
                <Clock className="w-12 h-12 mb-4 opacity-80" />
                <h3 className="text-3xl font-bold mb-2">24h</h3>
                <p className="text-gray-200">Rückmeldung</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl text-white">
                <MapPin className="w-12 h-12 mb-4 opacity-80" />
                <h3 className="text-3xl font-bold mb-2">Lokal</h3>
                <p className="text-gray-200">in Jever</p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl text-white">
                <Sparkles className="w-12 h-12 mb-4 opacity-80" />
                <h3 className="text-3xl font-bold mb-2">Top</h3>
                <p className="text-gray-200">Qualität</p>
              </div>
              <div className="bg-gradient-to-br from-[#0A0A0A] to-[#000060] p-8 rounded-2xl text-white">
                <Euro className="w-12 h-12 mb-4 opacity-80" />
                <h3 className="text-3xl font-bold mb-2">Fair</h3>
                <p className="text-gray-200">Preise</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Local Info */}
      <section className="md:py-32 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              <span className="text-[#0A0A0A]">Jever</span> und Umgebung
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Als lokaler Dienstleister kennen wir Jever und die Region bestens.
              Ob in der historischen Altstadt, in Wohngebieten wie Moorwarfen
              oder in den umliegenden Ortsteilen – wir sind schnell vor Ort und
              bieten unseren Service im gesamten Stadtgebiet von Jever an.
            </p>
            <p className="text-lg text-gray-600">
              Unser Tätigkeitsgebiet erstreckt sich über ganz Friesland, mit
              besonderem Fokus auf Jever und Umgebung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="kontakt" className="md:py-32 py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Kostenloses <span className="text-white">Angebot</span> anfordern
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Kontaktieren Sie uns für ein unverbindliches Angebot für
              Treppenhausreinigung in Jever
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+4944888600455"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0A0A0A] rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                Jetzt anrufen
              </motion.a>
              <motion.a
                href="mailto:info@uenal-gutachten.de"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white rounded-full hover:bg-white/20 transition-all duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                E-Mail schreiben
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
