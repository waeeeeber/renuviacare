"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/products";
import { IconLock } from "@/components/Icons";

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [step, setStep] = useState<"form" | "done">("form");
  const [payment, setPayment] = useState("twint");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("done");
    clear();
  };

  if (step === "done") {
    return (
      <div className="container-x py-24 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-2xl mb-6">✓</div>
        <h1 className="font-display text-4xl tracking-tight">Vielen Dank!</h1>
        <p className="text-ink/70 mt-4 max-w-md mx-auto">
          Deine Bestellung ist bei uns eingegangen. Wir senden dir in Kürze eine Bestätigung per E-Mail.
        </p>
        <Link href="/" className="btn-primary mt-8">Zurück zur Startseite</Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container-x py-24 text-center">
        <h1 className="font-display text-3xl">Dein Warenkorb ist leer</h1>
        <Link href="/produkt/silktouch" className="btn-primary mt-6 inline-flex">Jetzt entdecken</Link>
      </div>
    );
  }

  return (
    <div className="container-x py-12 lg:py-20">
      <h1 className="font-display text-4xl sm:text-5xl tracking-tight mb-10">Checkout</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        <form onSubmit={onSubmit} className="lg:col-span-2 space-y-8">
          {/* Contact */}
          <section className="card space-y-4">
            <h2 className="font-display text-2xl">Kontakt</h2>
            <Field label="E-Mail" type="email" name="email" required />
          </section>

          {/* Shipping */}
          <section className="card space-y-4">
            <h2 className="font-display text-2xl">Lieferadresse</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Vorname" name="firstName" required />
              <Field label="Nachname" name="lastName" required />
            </div>
            <Field label="Strasse & Hausnummer" name="address" required />
            <div className="grid sm:grid-cols-3 gap-4">
              <Field label="PLZ" name="zip" required />
              <div className="sm:col-span-2"><Field label="Ort" name="city" required /></div>
            </div>
            <Select label="Land" name="country" defaultValue="CH">
              <option value="CH">Schweiz</option>
              <option value="LI">Liechtenstein</option>
              <option value="DE">Deutschland</option>
              <option value="AT">Österreich</option>
            </Select>
          </section>

          {/* Payment */}
          <section className="card space-y-4">
            <h2 className="font-display text-2xl flex items-center gap-2">Zahlung <IconLock className="w-4 h-4 text-ink/50" /></h2>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "twint", label: "TWINT" },
                { id: "card", label: "Karte" },
                { id: "paypal", label: "PayPal" }
              ].map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPayment(p.id)}
                  className={`rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                    payment === p.id ? "border-rose-500 bg-rose-50" : "border-ink/15 bg-white hover:border-ink/40"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
            {payment === "card" && (
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="sm:col-span-2"><Field label="Kartennummer" name="cc" placeholder="1234 5678 9012 3456" /></div>
                <Field label="MM/JJ" name="exp" placeholder="12/27" />
                <Field label="CVC" name="cvc" placeholder="123" />
              </div>
            )}
            <p className="text-xs text-ink/50 pt-2">Verschlüsselte Zahlung. Deine Daten sind sicher.</p>
          </section>

          <button className="btn-primary w-full">Jetzt bestellen · {formatPrice(subtotal)}</button>
        </form>

        <aside className="card h-fit lg:sticky lg:top-28 space-y-5">
          <h2 className="font-display text-2xl">Bestellung</h2>
          <ul className="space-y-3">
            {items.map((i) => (
              <li key={`${i.productSlug}-${i.variantId}`} className="flex gap-3">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-rose-50 shrink-0">
                  <Image src={i.image} alt={i.name} fill sizes="56px" className="object-cover" />
                  <span className="absolute -top-1 -right-1 bg-ink text-white text-[10px] rounded-full min-w-[18px] h-[18px] px-1 flex items-center justify-center">
                    {i.quantity}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{i.name}</p>
                  <p className="text-xs text-ink/60">{i.variantName}</p>
                </div>
                <span className="text-sm">{formatPrice(i.price * i.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-ink/10 pt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-ink/65">Zwischensumme</span><span>{formatPrice(subtotal)}</span></div>
            <div className="flex justify-between"><span className="text-ink/65">Versand</span><span className="text-emerald-600">Gratis</span></div>
            <div className="flex justify-between font-medium pt-2 border-t border-ink/10"><span>Gesamt</span><span className="font-display text-lg">{formatPrice(subtotal)}</span></div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({
  label, name, type = "text", required, placeholder
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-ink/70 mb-1 block">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl bg-white border border-ink/15 px-4 py-3 outline-none focus:border-rose-400"
      />
    </label>
  );
}

function Select({
  label, name, defaultValue, children
}: { label: string; name: string; defaultValue?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-ink/70 mb-1 block">{label}</span>
      <select
        name={name}
        defaultValue={defaultValue}
        className="w-full rounded-xl bg-white border border-ink/15 px-4 py-3 outline-none focus:border-rose-400"
      >
        {children}
      </select>
    </label>
  );
}
