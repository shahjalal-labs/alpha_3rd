"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "../../imports/PNG.png";
import { Button } from "../components/ui/button";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/leistungen", label: "Leistungen" },
    { path: "/ueber-uns", label: "Über uns" },
    { path: "/blog", label: "Blog" },
    { path: "/kontakt", label: "Kontakt" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#0A0A0A]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={logo}
              alt="Uenal Sachverständigenbüro Logo"
              width={180}
              height={48}
              sizes="(max-width: 640px) 150px, 180px"
              className="h-12 w-auto object-contain"
              priority
            />
            <div className="hidden md:block">
              <div className="text-lg font-bold text-black tracking-tight">
                Uenal Sachverständigenbüro
              </div>
              <div className="text-xs text-gray-600 font-medium">
                Immobilienbewertung mit Substanz
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-end gap-8">
            {navItems.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-base font-medium transition-colors hover:text-[#0A0A0A] border-b-2 border-transparent pb-1 ${isActive(link.path)
                  ? "border-black text-[#0A0A0A]"
                  : "text-black"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+4944888600455" aria-label="Jetzt anrufen: +49 4488 8600455">
              <Button className="bg-[#0A0A0A] hover:bg-[#555555] text-white min-h-[44px]">
                <Phone className="w-4 h-4 mr-2" />
                Jetzt anrufen
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden text-black min-w-[48px] min-h-[48px] flex items-center justify-center -mr-2 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pt-4 pb-2 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium transition-colors hover:text-[#0A0A0A] min-h-[48px] flex items-center border-b-2 border-transparent px-1 ${isActive(item.path)
                  ? "border-black text-[#0A0A0A]"
                  : "text-black"
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3">
              <a href="tel:+4944888600455" className="block w-full" aria-label="Jetzt anrufen: +49 4488 8600455">
                <Button className="w-full bg-[#0A0A0A] hover:bg-[#555555] text-white min-h-[48px] text-base">
                  <Phone className="w-4 h-4 mr-2" />
                  Jetzt anrufen
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
