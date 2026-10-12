"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Lock, Mail, KeyRound, Eye, EyeOff, ShieldCheck, AlertCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import logo from "@/imports/PNG.png";

const VALID_EMAIL = "info@uenal-gutachten.de";
const VALID_PASS = "gutachten@123456";
const STORAGE_KEY = "uenal_website_access_token";

interface AccessGuardProps {
  children: React.ReactNode;
}

export function lockWebsiteAccess() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event("uenal-lock-site"));
  }
}

export default function AccessGuard({ children }: AccessGuardProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isProtectedDomain, setIsProtectedDomain] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const host = window.location.hostname;
    // Production domain (uenal-gutachten.de) is public unless explicitly locked via env var
    const isProd = host === "uenal-gutachten.de" || host === "www.uenal-gutachten.de";
    const needsProtection = process.env.NEXT_PUBLIC_PASSWORD_PROTECT === "true" || !isProd;

    setIsProtectedDomain(needsProtection);

    if (!needsProtection) {
      setIsAuthenticated(true);
      return;
    }

    const localAuth = localStorage.getItem(STORAGE_KEY);
    const sessionAuth = sessionStorage.getItem(STORAGE_KEY);

    if (localAuth === "granted" || sessionAuth === "granted") {
      setIsAuthenticated(true);
    }

    const handleLockEvent = () => {
      setIsAuthenticated(false);
      setEmail("");
      setPassword("");
      setError("");
      toast.info("Website wurde gesperrt", {
        description: "Zugang verlangt erneute Authentifizierung.",
      });
    };

    window.addEventListener("uenal-lock-site", handleLockEvent);
    return () => window.removeEventListener("uenal-lock-site", handleLockEvent);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      const cleanEmail = email.trim().toLowerCase();
      const cleanPass = password;

      if (cleanEmail === VALID_EMAIL.toLowerCase() && cleanPass === VALID_PASS) {
        localStorage.setItem(STORAGE_KEY, "granted");
        sessionStorage.setItem(STORAGE_KEY, "granted");
        setIsAuthenticated(true);
        toast.success("Zugriff gewährt", {
          description: "Willkommen auf der Website des Uenal Sachverständigenbüros.",
        });
      } else {
        setError("Ungültige E-Mail-Adresse oder Passwort.");
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 600);
        toast.error("Zugriff verweigert", {
          description: "Bitte überprüfen Sie Ihre Anmeldedaten.",
        });
      }
      setIsLoading(false);
    }, 450);
  };

  // Only lock on client when mounted and domain requires protection and user is not authenticated
  const isLocked = isMounted && isProtectedDomain && !isAuthenticated;

  return (
    <>
      {/* Content wrapper: always server-rendered in HTML, blurred & interactive-disabled only when locked */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isLocked
            ? "filter blur-xl pointer-events-none select-none h-screen overflow-hidden"
            : ""
        }`}
        aria-hidden={isLocked}
      >
        {children}
      </div>

      {/* Access Protection Modal Backdrop */}
      <AnimatePresence>
        {isLocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-2xl overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                x: isShaking ? [0, -10, 10, -10, 10, -5, 5, 0] : 0,
              }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
                x: isShaking ? { duration: 0.5 } : { duration: 0.3 },
              }}
              className="relative w-full max-w-md bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white border border-slate-800/80 shadow-2xl shadow-black/80 rounded-3xl overflow-hidden p-6 sm:p-8"
            >
              {/* Decorative Glow Elements */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Logo Header */}
              <div className="flex flex-col items-center text-center space-y-4 mb-6">
                <div className="bg-white/95 p-3 rounded-2xl shadow-lg border border-white/20">
                  <Image
                    src={logo}
                    alt="Uenal Sachverständigenbüro"
                    className="h-10 w-auto object-contain"
                    priority
                  />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-semibold tracking-wide uppercase">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Passwortgeschützter Bereich</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    Website-Zugang
                  </h2>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    Geben Sie Ihre Zugangsdaten ein, um die Preview freizuschalten.
                  </p>
                </div>
              </div>

              {/* Error Message Box */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-red-300 text-xs sm:text-sm"
                >
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{error}</span>
                </motion.div>
              )}

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Field */}
                <div>
                  <label htmlFor="access-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                    E-Mail Adresse
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="access-email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="info@uenal-gutachten.de"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-800/70 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/60 focus:border-amber-500 transition-all duration-200"
                      autoComplete="username"
                      autoFocus
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="access-password" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Passwort
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <KeyRound className="w-4 h-4" />
                    </div>
                    <input
                      id="access-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-10 pr-10 py-2.5 bg-slate-800/70 border border-slate-700/80 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/60 focus:border-amber-500 transition-all duration-200"
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      aria-label={showPassword ? "Passwort verbergen" : "Passwort anzeigen"}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200 focus:outline-none min-w-[44px] min-h-[44px] justify-center"
                      tabIndex={0}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-4 min-h-[48px] bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 active:from-amber-700 active:to-amber-800 text-slate-950 font-semibold rounded-xl text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer mt-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Überprüfe...</span>
                    </>
                  ) : (
                    <>
                      <span>Website Freischalten</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Security Footer Note */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
                <Lock className="w-3 h-3 text-slate-400" />
                <span>SSL-Verschlüsselt • Ünal Sachverständigenbüro</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
