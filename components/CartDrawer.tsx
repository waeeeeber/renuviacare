"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "./CartProvider";
import { IconClose } from "./Icons";
import { formatPrice } from "@/lib/products";

export default function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, setQty, remove } = useCart();

  return (
    <div
      className={`fixed inset-0 z-50 transition ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-ink/40 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={closeCart}
      />
      <aside
        className={`absolute right-0 top-0 bottom-0 w-full sm:w-[420px] bg-cream shadow-soft flex flex-col transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-ink/10">
          <h2 className="font-display text-xl">Dein Warenkorb</h2>
          <button onClick={closeCart} aria-label="Schliessen" className="p-1"><IconClose /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="text-center py-16 text-ink/60">
              <p className="mb-6">Dein Warenkorb ist noch leer.</p>
              <Link href="/produkt/silktouch" onClick={closeCart} className="btn-primary">
                Jetzt entdecken
              </Link>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((i) => (
                <li key={`${i.productSlug}-${i.variantId}`} className="flex gap-4">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-white shrink-0">
                    <Image src={i.image} alt={i.name} fill sizes="80px" className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <p className="font-medium truncate">{i.name}</p>
                      <button
                        onClick={() => remove(i.productSlug, i.variantId)}
                        className="text-xs text-ink/50 hover:text-rose-600"
                      >
                        Entfernen
                      </button>
                    </div>
                    <p className="text-sm text-ink/60">{i.variantName}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-ink/15 bg-white">
                        <button
                          className="px-3 py-1 hover:text-rose-600"
                          onClick={() => setQty(i.productSlug, i.variantId, i.quantity - 1)}
                        >−</button>
                        <span className="px-2 text-sm">{i.quantity}</span>
                        <button
                          className="px-3 py-1 hover:text-rose-600"
                          onClick={() => setQty(i.productSlug, i.variantId, i.quantity + 1)}
                        >+</button>
                      </div>
                      <span className="font-medium">{formatPrice(i.price * i.quantity)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-ink/10 p-5 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-ink/60">Zwischensumme</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-ink/50">Versand und Steuern werden im Checkout berechnet.</p>
            <Link href="/checkout" onClick={closeCart} className="btn-primary w-full">
              Zur Kasse
            </Link>
            <Link href="/warenkorb" onClick={closeCart} className="block text-center text-sm underline-offset-4 hover:underline text-ink/70">
              Warenkorb anzeigen
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}
