
import type { ReactNode } from "react";
// import AccessGuard from "../components/AccessGuard";
import FloatingCTA from "../components/FloatingCTA";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    // <AccessGuard>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </div>
    // </AccessGuard>
  );
}



