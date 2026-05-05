"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/products";

export default function CartPage() {
  const { items, subtotal, setQty, remove } = useCart();
  const shipping = subtotal >= 0 ? 0 : 0;
  const total = subtotal + shipping;

  return (
    <div className="container-x py-12 lg:py-20">
      <h1 className="font-display text-4xl sm:text-5xl tracking-tight mb-10">Warenkorb</h1>

      {items.length === 0 ? (
        <div className="card text-center py-20">
          <p className="text-ink/70 mb-6">Dein Warenkorb ist leer.</p>
          <Link href="/produkt/silktouch" className="btn-primary">Jetzt entdecken</Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {items.map((i) => (
              <div key={`${i.productSlug}-${i.variantId}`} className="card flex gap-5">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-rose-50 shrink-0">
                  <Image src={i.image} alt={i.name} fill sizes="120px" className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-3">
                    <div>
                      <p className="font-medium">{i.name}</p>
                      <p className="text-sm text-ink/60">{i.variantName}</p>
                    </div>
                    <span className="font-medium">{formatPrice(i.price * i.quantity)}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-full border border-ink/15 bg-white">
                      <button onClick={() => setQty(i.productSlug, i.variantId, i.quantity - 1)} className="px-3 py-1 hover:text-rose-600">−</button>
                      <span className="px-2 text-sm">{i.quantity}</span>
                      <button onClick={() => setQty(i.productSlug, i.variantId, i.quantity + 1)} className="px-3 py-1 hover:text-rose-600">+</button>
                    </div>
                    <button onClick={() => remove(i.productSlug, i.variantId)} className="text-sm text-ink/55 hover:text-rose-600">
                      Entfernen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="card h-fit lg:sticky lg:top-28 space-y-4">
            <h2 className="font-display text-2xl">Zusammenfassung</h2>
            <div className="flex justify-between text-sm">
              <span className="text-ink/65">Zwischensumme</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-ink/65">Versand</span>
              <span className="text-emerald-600">Gratis</span>
            </div>
            <div className="border-t border-ink/10 pt-4 flex justify-between">
              <span className="font-medium">Gesamt</span>
              <span className="font-display text-xl">{formatPrice(total)}</span>
            </div>
            <Link href="/checkout" className="btn-primary w-full">Zur Kasse</Link>
            <p className="text-xs text-ink/50 text-center">Sichere Zahlung · TWINT, Karte, PayPal</p>
          </aside>
        </div>
      )}
    </div>
  );
}
