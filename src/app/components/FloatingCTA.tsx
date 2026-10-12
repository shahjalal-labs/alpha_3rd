import { Phone } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="hidden md:block fixed bottom-6 right-6 z-40">
      <a
        href="tel:+4944888600455"
        aria-label="Jetzt anrufen: +49 4488 8600455"
        className="bg-[#0A0A0A] hover:bg-[#555555] text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 flex items-center justify-center group min-w-[56px] min-h-[56px]"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Jetzt anrufen
        </span>
      </a>
    </div>
  );
}
