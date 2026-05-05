import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-cream">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="space-y-4">
          <div className="font-display text-2xl">Renuvia<span className="text-rose-400">.</span></div>
          <p className="text-sm text-cream/70 max-w-xs">
            Dein Partner für hochwertige Selfcare. Hergestellt mit Sorgfalt in der Schweiz.
          </p>
        </div>
        <div>
          <div className="text-sm font-medium uppercase tracking-wider mb-4">Shop</div>
          <ul className="space-y-2 text-sm text-cream/70">
            <li><Link href="/produkt/silktouch" className="hover:text-white">SilkTouch™</Link></li>
            <li><Link href="/warenkorb" className="hover:text-white">Warenkorb</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-medium uppercase tracking-wider mb-4">Unternehmen</div>
          <ul className="space-y-2 text-sm text-cream/70">
            <li><Link href="/ueber-uns" className="hover:text-white">Über uns</Link></li>
            <li><Link href="/kontakt" className="hover:text-white">Kontakt</Link></li>
            <li><Link href="/agb" className="hover:text-white">AGB</Link></li>
            <li><Link href="/impressum" className="hover:text-white">Impressum</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-medium uppercase tracking-wider mb-4">Kontakt</div>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>Renuvia Care</li>
            <li>Industriestrasse 23</li>
            <li>3178 Bösingen, CH</li>
            <li><a href="mailto:info@renuvia-care.ch" className="hover:text-white">info@renuvia-care.ch</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 text-xs text-cream/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Renuvia Care. Alle Rechte vorbehalten.</span>
          <span>Gefertigt mit Liebe in der Schweiz 🇨🇭</span>
        </div>
      </div>
    </footer>
  );
}
