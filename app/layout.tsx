import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "Renuvia Care – Dein Partner für hochwertige Selfcare",
  description:
    "Renuvia SilkTouch™ – das antibakterielle Peeling-Duschtuch mit Silberionen. Verwandle deine Dusche in eine Spa-Routine.",
  metadataBase: new URL("https://renuvia-care.ch"),
  openGraph: {
    title: "Renuvia Care – Spa-Erlebnis für zuhause",
    description: "Premium Selfcare aus der Schweiz.",
    type: "website",
    locale: "de_CH"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
