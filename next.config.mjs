// https://uenal-gutachten.de----securityheaders

/** @type {import('next').NextConfig} */

const nextConfig = {
  poweredByHeader: false,

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 160, 256, 384],
    minimumCacheTTL: 31536000,
  },

  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  async redirects() {
    return [
      {
        source: "/:path*großenkneten:suffix*",
        destination: "/:path*grossenkneten:suffix*",
        permanent: true,
      },
      {
        source: "/:path*ovelgönne:suffix*",
        destination: "/:path*ovelgoenne:suffix*",
        permanent: true,
      },
      {
        source: "/:path*sachverständiger:suffix*",
        destination: "/:path*sachverstaendiger:suffix*",
        permanent: true,
      },
      {
        source: "/:path*grundstücksbewertung:suffix*",
        destination: "/:path*grundstuecksbewertung:suffix*",
        permanent: true,
      },
    ];
  },

  async headers() {
    const isPreview =
      process.env.VERCEL_ENV === "preview" ||
      process.env.NEXT_PUBLIC_IS_PREVIEW === "true" ||
      (typeof process.env.VERCEL_URL === "string" &&
        process.env.VERCEL_URL.includes("vercel.app"));

    const headersList = [
      // HSTS - Force HTTPS for 1 year
      {
        key: "Strict-Transport-Security",
        value: "max-age=31536000; includeSubDomains",
      },

      // Prevent clickjacking
      {
        key: "X-Frame-Options",
        value: "SAMEORIGIN",
      },

      // Prevent MIME-type sniffing
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },

      // Referrer Policy
      {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
      },

      // Permissions Policy
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
      },

      /*
      ...(isPreview
        ? [
            {
              key: "X-Robots-Tag",
              value: "noindex, nofollow, noarchive",
            },
          ]
        : []),
      */

      // Content Security Policy
      {
        key: "Content-Security-Policy",
        value: [
          "default-src 'self'",

          // Scripts (no unsafe-eval)
          "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com",

          // Styles
          "style-src 'self' 'unsafe-inline'",

          // Images (specific hosts instead of https: wildcard)
          "img-src 'self' data: blob: https://challenges.cloudflare.com",

          // Fonts (self-hosted and data URI only, no https: wildcard)
          "font-src 'self' data:",

          // API / fetch / XHR / WebSocket
          "connect-src 'self' https://alpa-backend-api.vercel.app https://challenges.cloudflare.com",

          // Turnstile iframe
          "frame-src 'self' https://challenges.cloudflare.com",

          // Workers
          "worker-src 'self' blob:",

          // Forms
          "form-action 'self'",

          // Prevent base tag injection
          "base-uri 'self'",

          // Prevent unauthorized framing
          "frame-ancestors 'self'",

          // Force HTTPS resources
          "upgrade-insecure-requests",
        ].join("; "),
      },
    ];

    return [
      /*
      // SV-012: Ensure any request to Vercel preview (uenal-gutachten.vercel.app or *.vercel.app) is noindex
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "(?<host>.*vercel\\.app)",
          },
        ],
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
      */
      {
        source: "/(.*)",
        headers: headersList,
      },
    ];
  },
};

export default nextConfig;