import { motion } from "motion/react";
import GoogleReviewsCarousel from "./GoogleReviewsCarousel";

export default function TestimonialsSection() {
  // const fadeInUp = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: { duration: 0.8, ease: "easeOut" as const },
  //   },
  // };

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div
            className="text-center mb-8 md:mb-16"
            // variants={fadeInUp}
          >
            <div className="inline-block mb-6 px-4 py-1 bg-[#0A0A0A]/10 rounded-full">
              <span className="text-[#0A0A0A] text-sm font-semibold">
                KUNDENSTIMMEN
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
              Was unsere Kunden sagen
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Echte Bewertungen von echten Kunden.
              <br />
              <span className="font-semibold text-black">
                Lassen Sie unsere Google-Bewertungen für sich sprechen.
              </span>
            </p>
          </motion.div>

          {/* Google Reviews Carousel */}
          <motion.div
          // variants={fadeInUp}
          >
            <GoogleReviewsCarousel />
          </motion.div>

          {/* <motion.div
            className="mt-16 text-center bg-black text-white rounded-2xl p-12"
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold mb-4">
              Ihre Erfolgsgeschichte beginnt hier
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Werden Sie Teil unserer zufriedenen Kunden
            </p>
            <a href="/#kontakt">
              <button className="bg-[#B8A67D] hover:bg-[#A39670] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Jetzt Kontakt aufnehmen
              </button>
            </a>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}
