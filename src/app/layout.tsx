import favicon from "@/assets/favIcon.png";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Toaster } from "sonner";
import SiteShell from "./common/site-shell";
import { generatePageMetadata, generateProfessionalServiceSchema } from "./utils/seoMetadata";
import "./globals.css";

export const metadata: Metadata = {
  ...generatePageMetadata(),
  icons: {
    icon: favicon.src,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = generateProfessionalServiceSchema();

  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <SiteShell>{children}</SiteShell>
        <Toaster />
      </body>
    </html>
  );
}
