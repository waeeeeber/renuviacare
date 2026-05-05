# Renuvia Care – Webshop

Modernen Webshop für die Schweizer Selfcare-Brand **Renuvia Care**, gebaut mit Next.js 14 (App Router), TypeScript und Tailwind CSS.

## Features

- Edler Hero, Produkt-Showcase, Testimonials, Newsletter, Marketing-Marquee
- Produktdetailseite mit Variantenwahl (Farb-Swatches), Galerie, Mengenwahl
- Warenkorb mit Drawer + dedizierter Seite, persistent über `localStorage`
- Mehrstufiger Checkout (Kontakt, Lieferadresse, Zahlung: TWINT/Karte/PayPal)
- Statische Seiten: Über uns, FAQ, Kontakt, AGB, Impressum, 404
- Responsive, dermatologisch-spa Ästhetik (Cream/Rose/Ink Palette, Fraunces + Inter)

## Setup

```bash
npm install
npm run dev
```

App läuft auf [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Struktur

```
app/                  # Next.js App Router Pages
  page.tsx            # Home
  produkt/[slug]/     # Produktdetail (dynamisch)
  warenkorb/          # Warenkorb-Seite
  checkout/           # Checkout
  kontakt/, faq/, ueber-uns/, agb/, impressum/
components/           # UI (Header, Footer, CartDrawer, ProductDetail, …)
lib/products.ts       # Produktdaten (zentral)
```

## Nächste Schritte

- Anbindung an echtes E-Commerce-Backend (Shopify, Stripe, Medusa)
- CMS für Produktdaten (z. B. Sanity)
- Mehrsprachigkeit (DE/FR/IT/EN) via `next-intl`
- Tracking (Google Analytics / Plausible) und Datenschutz-Banner
