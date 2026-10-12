"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type TrustlocalWidgetProps = {
  showHeader?: boolean;
  containerClassName?: string;
  widgetClassName?: string;
  background?: "white" | "transparent";
};

export default function TrustlocalWidget({
  showHeader = true,
  containerClassName,
  widgetClassName,
  background = "white",
}: TrustlocalWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          timeoutId = setTimeout(() => {
            setShouldLoad(true);
          }, 500);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={containerClassName || "mb-8 max-w-[500px] rounded-2xl p-3"}
    >
      {shouldLoad ? (
        <Script
          src="https://static.trustlocal.de/widget/widget_v2.js"
          strategy="afterInteractive"
        />
      ) : null}

      <div className="h-auto overflow-hidden rounded-lg">
        {shouldLoad ? (
          <div
            className={widgetClassName || "trustlocal-widget min-h-[80px]"}
            data-id="2kbDZMuKU_yWwR_f_pi6j0vHitek3oW64siUjdKr-BzDUA"
            data-language-code="de"
            data-country-code="DE"
            data-badge="default"
            data-quote="hidden"
            data-size="small"
            data-type="landscape"
            data-border="shadow"
            data-theme="light"
            data-background={background}
            data-google="default"
          />
        ) : (
          <div className="flex min-h-[80px] items-center justify-between bg-gray-100 px-4">
            <div className="text-xs font-medium text-gray-500">
              Trustlocal-Bewertungen werden geladen...
            </div>
            <div
              className="h-2 w-16 rounded-full bg-gray-300"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
    </div>
  );
}


