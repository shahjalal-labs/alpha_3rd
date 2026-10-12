"use client";

import GeBa from "@/assets/comapny-logo/GeBa-Logo.jpg";
import Haertle from "@/assets/comapny-logo/hartle.png";
import leg from "@/assets/comapny-logo/LEG_Immobilien_Logo_2021.svg";
import Wohnungsbau from "@/assets/comapny-logo/neues_logo.png";
import Bauverein from "@/assets/comapny-logo/pravion.jpg";
import Hajo from "@/assets/comapny-logo/sajiow.png";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function CustomerCarousel() {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [showArrows, setShowArrows] = useState(true);
  const [showDots, setShowDots] = useState(false);

  useEffect(() => {
    const updateCarouselLayout = () => {
      requestAnimationFrame(() => {
        const width = window.innerWidth;

        if (width < 640) {
          setSlidesToShow(1);
          setShowArrows(false);
          setShowDots(true);
        } else if (width < 1024) {
          setSlidesToShow(2);
          setShowArrows(false);
          setShowDots(true);
        } else if (width < 1280) {
          setSlidesToShow(3);
          setShowArrows(true);
          setShowDots(false);
        } else {
          setSlidesToShow(4);
          setShowArrows(true);
          setShowDots(false);
        }
      });
    };

    updateCarouselLayout();

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateCarouselLayout, 150);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const settings = {
    dots: showDots,
    infinite: true,
    speed: 3500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: showArrows,
  };

  const customers = [
    { id: 1, name: "LEG", logo: leg },
    { id: 2, name: "Bauverein Rüstringen", logo: Bauverein },
    {
      id: 3,
      name: "Wohnungsbau-Gesellschaft Friesland mbH",
      logo: Wohnungsbau,
    },
    { id: 4, name: "Haertle", logo: Haertle },
    { id: 5, name: "GeBa Hausverwaltung", logo: GeBa },
    { id: 6, name: "Hajo-Jürgens-Immobilien", logo: Hajo },
  ];

  return (
    <section className="pb-16 pt-12 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          // initial={{ opacity: 0, y: 40 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          // transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Kunden die auf <span className="text-[#0A0A0A]">uns bauen</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Vertrauen Sie auf unsere langjährige Erfahrung und starke
            Partnerschaften
          </p>
        </motion.div>

        <div className="customer-carousel">
          <Slider
            key={`customers-${slidesToShow}-${showArrows}-${showDots}`}
            {...settings}
          >
            {customers.map((customer) => (
              <div key={customer.id} className="px-2 sm:px-3 lg:px-4">
                <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 min-h-[150px] sm:min-h-[165px] lg:h-40 flex items-center justify-center hover:border-[#0A0A0A] transition-all duration-300 hover:shadow-xl">
                  <div className="text-center space-y-3">
                    <div className="w-40 sm:w-48 lg:w-56 h-12 sm:h-14 lg:h-16 mx-auto flex items-center justify-center">
                      <Image
                        src={customer.logo}
                        alt={customer.name}
                        className="max-h-16 max-w-full w-auto object-contain mx-auto"
                      />
                    </div>
                    <p className="text-sm sm:text-base font-medium text-gray-700 leading-tight px-1">
                      {customer.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <style>{`
          .customer-carousel .slick-dots {
            bottom: -28px;
          }

          .customer-carousel .slick-dots li button:before {
            font-size: 8px;
            color: #0A0A0A;
            opacity: 0.3;
          }

          .customer-carousel .slick-dots li.slick-active button:before {
            opacity: 1;
          }

          .customer-carousel .slick-prev,
          .customer-carousel .slick-next {
            width: 34px;
            height: 34px;
            z-index: 10;
          }

          .customer-carousel .slick-prev {
            left: -14px;
          }

          .customer-carousel .slick-next {
            right: -14px;
          }

          .customer-carousel .slick-prev:before,
          .customer-carousel .slick-next:before {
            font-size: 24px;
            color: #0A0A0A;
            opacity: 0.8;
          }

          @media (max-width: 1279px) {
            .customer-carousel .slick-prev {
              left: -6px;
            }

            .customer-carousel .slick-next {
              right: -6px;
            }
          }

          @media (max-width: 1023px) {
            .customer-carousel .slick-prev,
            .customer-carousel .slick-next {
              display: none !important;
            }
          }
        `}</style>

        {/* 
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Ihre Kunden und Logos werden hier im Laufband präsentiert.
          </p>
        </div> */}
      </div>
    </section>
  );
}
