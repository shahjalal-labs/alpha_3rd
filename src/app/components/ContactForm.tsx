"use client";

import { Building2, Mail, Phone, User } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { siteConfig } from "@/config/siteConfig";
import {
  Turnstile,
  type TurnstileInstance,
} from "@marsidev/react-turnstile";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface InquiryResponse {
  message: string;
  success: boolean;
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ContactForm() {
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

  const handleSubmit = async (e: React.FormEvent) => {
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
        "https://alpa-backend-api.vercel.app/alpa-third/send-opinion",
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

  return (
    <section
      id="kontakt-form"
      className="pb-16 md:py-32 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto px-8">
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Gutachten{" "}
            <span className="text-[#0A0A0A]">
              anfragen
            </span>
          </h2>

          <p className="text-xl text-gray-600">
            Unverbindliche Erstanfrage – {siteConfig.responseCommitment}
          </p>
        </motion.div>

        <motion.div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="cf-name" className="block text-sm font-semibold mb-2 text-gray-700">
                  Name *
                </label>

                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />

                  <Input
                    id="cf-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="pl-11 min-h-[48px] h-12 border-gray-300 focus:border-[#0A0A0A] focus:ring-[#0A0A0A] text-base"
                    placeholder="Ihr Name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="cf-email" className="block text-sm font-semibold mb-2 text-gray-700">
                  E-Mail *
                </label>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />

                  <Input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="pl-11 min-h-[48px] h-12 border-gray-300 focus:border-[#0A0A0A] focus:ring-[#0A0A0A] text-base"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="cf-phone" className="block text-sm font-semibold mb-2 text-gray-700">
                  Telefon *
                </label>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />

                  <Input
                    id="cf-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className="pl-11 min-h-[48px] h-12 border-gray-300 focus:border-[#0A0A0A] focus:ring-[#0A0A0A] text-base"
                    placeholder="+49 ..."
                  />
                </div>
              </div>

              {/* Report Type */}
              <div>
                <label htmlFor="cf-typeOfReport" className="block text-sm font-semibold mb-2 text-gray-700">
                  Art des Gutachtens
                </label>

                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />

                  <select
                    id="cf-typeOfReport"
                    name="typeOfReport"
                    aria-label="Art des Gutachtens"
                    value={formData.typeOfReport}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        typeOfReport: e.target.value,
                      })
                    }
                    className="w-full pl-11 pr-4 min-h-[48px] h-12 border border-gray-300 rounded-md focus:border-[#0A0A0A] focus:ring-[#0A0A0A] bg-white text-base cursor-pointer"
                  >
                    <option value="">
                      Bitte wählen
                    </option>

                    <option value="verkehrswertgutachten">
                      Verkehrswertgutachten
                    </option>

                    <option value="kurzgutachten">
                      Kurzgutachten
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="cf-message" className="block text-sm font-semibold mb-2 text-gray-700">
                Ihre Nachricht *
              </label>

              <Textarea
                id="cf-message"
                name="message"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="min-h-32 border-gray-300 focus:border-[#0A0A0A] focus:ring-[#0A0A0A] text-base"
                placeholder="Beschreiben Sie Ihr Anliegen..."
              />
            </div>

            {/* DSGVO Consent Checkbox (German Copy Block 6.3 / SV-020) */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <input
                type="checkbox"
                id="privacy-consent-home"
                required
                checked={agreedToPrivacy}
                onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-[#0A0A0A] focus:ring-[#0A0A0A] cursor-pointer"
              />
              <label htmlFor="privacy-consent-home" className="text-xs text-gray-600 leading-relaxed cursor-pointer select-none">
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
                    action: "opinion",
                  }}
                  onSuccess={(token) => {
                    setTurnstileToken(token);
                  }}
                  onExpire={() => {
                    setTurnstileToken("");
                  }}
                  onError={() => {
                    setTurnstileToken("");

                    toast.error(
                      "Die Sicherheitsprüfung konnte nicht geladen werden.",
                    );
                  }}
                />
              ) : (
                <p className="text-red-500 text-sm">
                  Sicherheitsprüfung ist nicht konfiguriert.
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                * Pflichtfelder
              </p>

              <Button
                type="submit"
                aria-label="Gutachten anfragen"
                disabled={
                  isSubmitting || !turnstileToken || !agreedToPrivacy
                }
                className="bg-[#0A0A0A] hover:bg-[#555555] text-white px-8 py-4 min-h-[48px] text-lg rounded-full w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting
                  ? "Wird gesendet..."
                  : "Gutachten anfragen"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}