"use client";

import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-12">
          <h1 className="text-[120px] md:text-[180px] font-bold text-black leading-none mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Seite nicht gefunden
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-xl mx-auto">
            Die von Ihnen gesuchte Seite existiert leider nicht.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#0A0A0A] hover:bg-[#555555] text-white px-8 py-4 rounded-md text-lg font-medium transition-all"
          >
            <Home className="w-5 h-5" />
            Zur Startseite
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-md text-lg font-medium transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Zurück
          </button>
        </div>
      </div>
    </div>
  );
}
