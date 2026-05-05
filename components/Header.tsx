"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartProvider";
import { IconCart, IconMenu, IconClose } from "./Icons";

const nav = [
  { href: "/", label: "Home" },
  { href: "/produkt/silktouch", label: "SilkTouch™" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" }
];

export default function Header() {
  const { count, openCart } = useCart();
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/85 backdrop-blur border-b border-ink/5">
      <div className="bg-ink text-white text-xs">
        <div className="container-x flex items-center justify-center gap-3 py-2 tracking-wide uppercase">
          <span>✦ Gratis Versand in der Schweiz</span>
          <span className="hidden sm:inline opacity-50">·</span>
          <span className="hidden sm:inline">30 Tage Zufriedenheitsgarantie</span>
        </div>
      </div>
      <div className="container-x flex items-center justify-between h-16">
        <button
          className="lg:hidden p-2 -ml-2"
          onClick={() => setMenu(true)}
          aria-label="Menü öffnen"
        >
          <IconMenu />
        </button>
        <Link href="/" className="font-display text-2xl tracking-tight">
          Renuvia<span className="text-rose-500">.</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-rose-600 transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={openCart}
          className="relative p-2 -mr-2"
          aria-label="Warenkorb öffnen"
        >
          <IconCart />
          {count > 0 && (
            <span className="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-[10px] rounded-full min-w-[18px] h-[18px] px-1 flex items-center justify-center">
              {count}
            </span>
          )}
        </button>
      </div>

      {menu && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setMenu(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-cream p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="font-display text-xl">Renuvia<span className="text-rose-500">.</span></span>
              <button onClick={() => setMenu(false)} aria-label="Schliessen"><IconClose /></button>
            </div>
            <nav className="flex flex-col gap-4 text-lg">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} onClick={() => setMenu(false)} className="hover:text-rose-600">
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
