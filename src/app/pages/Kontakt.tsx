"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { siteConfig } from "@/config/siteConfig";

import {
  Turnstile,
  type TurnstileInstance,
} from "@marsidev/react-turnstile";

interface InquiryResponse {
  message?: string;
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    typeOfReport: "",
    message: "",
  });

  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");

  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!agreedToPrivacy) {
      toast.error(
        "Bitte stimmen Sie der Datenschutzerklärung zu, um Ihre Anfrage abzusenden.",
      );
      return;
    }

    if (!turnstileToken) {
      toast.error(
        "Bitte bestätigen Sie, dass Sie ein Mensch sind.",
      );
      return;
    }

    setIsSubmitting(true);

    const data = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      typeOfReport: formData.typeOfReport,
      message: formData.message.trim(),
      turnstileToken,
    };

    try {
      const response = await fetch(
        "https://alpa-backend-api.vercel.app/alpa-third/send-message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const responseData = (await response
        .json()
        .catch(() => null)) as InquiryResponse | null;

      if (response.ok) {
        toast.success(
          responseData?.message ||
            "Anfrage erfolgreich gesendet!",
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          typeOfReport: "",
          message: "",
        });
        setAgreedToPrivacy(false);
        setTurnstileToken("");
        turnstileRef.current?.reset();
      } else {
        toast.error(
          responseData?.message ||
            "Fehler beim Senden der Anfrage. Bitte versuchen Sie es später erneut.",
        );

        setTurnstileToken("");
        turnstileRef.current?.reset();
      }
    } catch {
      toast.error(
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
      );

      setTurnstileToken("");
      turnstileRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative md:py-32 py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A0A0A] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A0A0A] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div>
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-6">
              Kontaktieren Sie <span className="text-white">uns</span>
            </motion.h1>

            <motion.p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Wir freuen uns auf Ihre Anfrage. {siteConfig.responseCommitment}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="md:py-32 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">
                Erreichen Sie uns{" "}
                <span className="text-[#0A0A0A]">direkt</span>
              </h2>

              <div className="space-y-6 mb-12">
                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#0A0A0A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#0A0A0A]" />
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-[#0A0A0A] hover:underline"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#0A0A0A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#0A0A0A]" />
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">E-Mail</h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-[#0A0A0A] hover:underline"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#0A0A0A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#0A0A0A]" />
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-gray-600">{siteConfig.name}</p>
                    <p className="text-gray-600">{siteConfig.contact.address.street}</p>
                    <p className="text-gray-600">{siteConfig.contact.address.zip} {siteConfig.contact.address.city}</p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#0A0A0A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#0A0A0A]" />
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">Erreichbarkeit</h3>
                    <p className="text-gray-600">{siteConfig.contact.hours}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-6">
                  Senden Sie uns eine{" "}
                  <span className="text-[#0A0A0A]">Nachricht</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:border-transparent bg-white"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:border-transparent bg-white"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:border-transparent bg-white"
                    />
                  </div>

                  {/* Report Type */}
                  <div>
                    <label htmlFor="typeOfReport" className="block text-sm font-medium mb-2">
                      Art des Gutachtens *
                    </label>
                    <select
                      id="typeOfReport"
                      name="typeOfReport"
                      required
                      value={formData.typeOfReport}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          typeOfReport: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:border-transparent bg-white"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="verkehrswertgutachten">Verkehrswertgutachten</option>
                      <option value="kurzgutachten">Kurzgutachten</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:border-transparent resize-none bg-white"
                    />
                  </div>

                  {/* DSGVO Consent Checkbox (German Copy Block 6.3 / SV-020) */}
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200">
                    <input
                      type="checkbox"
                      id="privacy-consent-page"
                      required
                      checked={agreedToPrivacy}
                      onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-[#0A0A0A] focus:ring-[#0A0A0A] cursor-pointer"
                    />
                    <label htmlFor="privacy-consent-page" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                      Ich habe die{" "}
                      <Link href="/datenschutz" className="text-[#0A0A0A] underline hover:text-black">
                        Datenschutzerklärung
                      </Link>{" "}
                      zur Kenntnis genommen. Ich stimme zu, dass meine Angaben und Daten zur Beantwortung meiner Anfrage elektronisch erhoben und gespeichert werden.{" "}
                      <span className="text-gray-500">
                        Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an {siteConfig.contact.email} widerrufen.
                      </span>
                    </label>
                  </div>

                  {/* Cloudflare Turnstile */}
                  <div className="flex justify-center py-2">
                    {TURNSTILE_SITE_KEY ? (
                      <Turnstile
                        ref={turnstileRef}
                        siteKey={TURNSTILE_SITE_KEY}
                        options={{
                          theme: "light",
                          size: "normal",
                          appearance: "always",
                          action: "contact",
                        }}
                        onSuccess={(token) => {
                          setTurnstileToken(token);
                        }}
                        onExpire={() => {
                          setTurnstileToken("");
                        }}
                        onError={() => {
                          setTurnstileToken("");
                          toast.error("Die Sicherheitsprüfung konnte nicht geladen werden.");
                        }}
                      />
                    ) : (
                      <p className="text-red-500 text-sm">
                        Sicherheitsprüfung ist nicht konfiguriert.
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting || !turnstileToken || !agreedToPrivacy}
                    className="w-full bg-[#0A0A0A] text-white py-4 rounded-lg hover:bg-[#555555] transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}