# Technical Stack Inventory — Uenal Sachverständigenbüro (`uenal-gutachten.de`)

This document discloses the technical stack, infrastructure, DNS, and data processing flow for `uenal-gutachten.de` as required under audit item **SV-021** (and serves as technical documentation for GDPR/Datenschutz disclosures under **SV-009**).

---

## 1. Application Framework & Environment
- **Framework:** Next.js `15.3.8` (React `18.3.1`, React Router `7.13.0` compatibility layer)
- **Language & Runtime:** TypeScript `5.8.3`, Node.js ESM environment
- **Styling:** TailwindCSS `4.1.12`, PostCSS `@tailwindcss/postcss`, Radix UI primitives, Motion (`motion/react` `12.23.24`), Lucide Icons & React Icons
- **Toast Notifications:** Sonner `2.0.3`

---

## 2. Infrastructure, Hosting & DNS
- **Hosting Provider:** Vercel Inc. (Vercel Cloud Platform)
- **Deployment Region:** EU (Frankfurt / `fra1`) with Standard Contractual Clauses (SCC) for edge routing
- **Image Proxy / Optimization:** Next.js Image Optimization Proxy hosted on Vercel
- **DNS Provider:** Direct domain DNS mapping to Vercel edge servers
- **SSL / Security Headers:** HSTS enabled (`max-age=31536000`), `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, Content Security Policy (CSP) enforcing HTTPS upgrades.

---

## 3. Web Assets & Fonts
- **Fonts:** System & locally bundled font stack (Inter / Roboto fallback). No runtime external requests to Google Fonts API.
- **Seals & Logos:** Self-hosted PNG/SVG assets in `src/assets` and `src/imports` (DGuSV seal, EWIVS seal, company logo).
- **Icons:** Bundled SVG icon modules (`lucide-react`, `react-icons`).

---

## 4. Backend APIs & Form Processing
- **Form Backend API:** `https://alpa-backend-api.vercel.app/alpa-third/send-opinion` and `/send-message`
- **Bot Protection & Security:** Cloudflare Turnstile (`@marsidev/react-turnstile`) widget integrated on contact forms.
- **Email Delivery:** Direct notification routing to `info@uenal-gutachten.de`.
- **Sensitive Document Handling:** Auftragsdaten (Grundbuchauszüge, Bauakten, Fotos) processed strictly for appraisal contracts under Art. 6 (1) (b) DSGVO.

---

## 5. Analytics & Cookies
- **Analytics:** None active (No Google Analytics, Meta Pixel, or third-party trackers).
- **Cookies:** **Ausschließlich technisch notwendige Cookies** / session storage for security verification (Turnstile) and layout state.
- **Consent Banner:** Not required in current configuration as zero tracking or non-essential cookies are set.

---

## 6. Domains & Repositories
- **Primary Domain:** `uenal-gutachten.de`
- **Email Server / MX:** Host / MX server configured for `info@uenal-gutachten.de`
