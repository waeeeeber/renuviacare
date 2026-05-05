"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "./CartProvider";
import { FeatureIcon, IconStar, IconTruck, IconReturn, IconLock } from "./Icons";
import { type Product, formatPrice } from "@/lib/products";

export default function ProductDetail({ product }: { product: Product }) {
  const { add, openCart } = useCart();
  const [variant, setVariant] = useState(product.variants[0]);
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);

  const handleAdd = () => {
    add({
      productSlug: product.slug,
      variantId: variant.id,
      variantName: variant.name,
      name: product.name,
      price: product.price,
      image: product.images[0].src,
      quantity: qty
    });
    openCart();
  };

  return (
    <article className="container-x py-10 lg:py-16">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-white shadow-soft">
            <Image
              src={product.images[activeImg].src}
              alt={product.images[activeImg].alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {product.badge && (
              <span className="absolute top-5 left-5 badge bg-ink text-white">{product.badge}</span>
            )}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {product.images.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setActiveImg(i)}
                className={`relative aspect-square rounded-2xl overflow-hidden ${
                  activeImg === i ? "ring-2 ring-rose-500" : "ring-1 ring-ink/10"
                }`}
              >
                <Image src={img.src} alt={img.alt} fill sizes="200px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-7">
          <div>
            <p className="text-sm uppercase tracking-widest text-ink/50">{product.subtitle}</p>
            <h1 className="font-display text-4xl sm:text-5xl tracking-tight mt-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mt-3">
              <div className="flex text-rose-500">
                {[0,1,2,3,4].map((i) => <IconStar key={i} />)}
              </div>
              <span className="text-sm text-ink/60">4.9 · 1’000+ Bewertungen</span>
            </div>
          </div>

          <p className="text-ink/75 leading-relaxed">{product.shortDescription}</p>

          <div className="flex items-baseline gap-3">
            <span className="font-display text-3xl">{formatPrice(product.price)}</span>
            {product.compareAt && (
              <>
                <span className="text-ink/50 line-through">{formatPrice(product.compareAt)}</span>
                <span className="badge">Spare 10%</span>
              </>
            )}
          </div>

          {/* Variants */}
          <div>
            <div className="text-sm font-medium mb-3">Farbe: <span className="text-ink/60 font-normal">{variant.name}</span></div>
            <div className="flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setVariant(v)}
                  aria-label={v.name}
                  className={`w-10 h-10 rounded-full border-2 transition ${
                    variant.id === v.id ? "border-rose-500 scale-110" : "border-ink/15 hover:border-ink/40"
                  }`}
                  style={{ background: v.swatch }}
                />
              ))}
            </div>
          </div>

          {/* Quantity + CTA */}
          <div className="flex flex-wrap gap-4">
            <div className="inline-flex items-center rounded-full border border-ink/15 bg-white">
              <button className="px-4 py-3 hover:text-rose-600" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span className="px-3 text-sm w-6 text-center">{qty}</span>
              <button className="px-4 py-3 hover:text-rose-600" onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <button onClick={handleAdd} className="btn-primary flex-1 min-w-[220px]">
              In den Warenkorb · {formatPrice(product.price * qty)}
            </button>
          </div>

          <ul className="grid sm:grid-cols-2 gap-3 pt-2">
            {product.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-ink/75">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                {h}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-ink/10">
            <div className="flex flex-col items-center text-center gap-2">
              <IconTruck /><span className="text-xs text-ink/65">Gratis Versand</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <IconReturn /><span className="text-xs text-ink/65">30 Tage Rückgabe</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <IconLock /><span className="text-xs text-ink/65">Sicher bezahlen</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <section className="grid lg:grid-cols-3 gap-10 mt-24">
        <div className="lg:col-span-1">
          <span className="badge">Produktdetails</span>
          <h2 className="font-display text-3xl tracking-tight mt-4">
            Eine Liebeserklärung an deine Haut.
          </h2>
        </div>
        <div className="lg:col-span-2 space-y-4 text-ink/75 leading-relaxed">
          {product.description.map((p) => <p key={p}>{p}</p>)}
        </div>
      </section>

      {/* Features grid */}
      <section className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {product.features.map((f) => (
          <div key={f.title} className="card">
            <div className="w-11 h-11 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-5">
              <FeatureIcon name={f.icon} className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl mb-2">{f.title}</h3>
            <p className="text-sm text-ink/65 leading-relaxed">{f.body}</p>
          </div>
        ))}
      </section>

      {/* Reviews */}
      <section id="review" className="mt-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="badge">Reviews</span>
            <h2 className="font-display text-3xl tracking-tight mt-4">Was unsere Kund:innen sagen</h2>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex text-rose-500">{[0,1,2,3,4].map((i) => <IconStar key={i} />)}</div>
            <span className="text-sm text-ink/60">4.9 / 5.0</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { name: "Lara M.", text: "Die beste Investition in meine Hautpflege-Routine. Fühlt sich an wie ein Spa-Besuch zuhause." },
            { name: "Sophie K.", text: "Endlich ein Peeling-Tuch, das wirklich den Rücken erreicht. Qualität ist hervorragend." },
            { name: "Anna T.", text: "Trocknet super schnell und riecht nicht. Die antibakterielle Wirkung merkt man wirklich." }
          ].map((r) => (
            <div key={r.name} className="card">
              <div className="flex text-rose-500 mb-3">{[0,1,2,3,4].map((i) => <IconStar key={i} />)}</div>
              <p className="text-ink/80 leading-relaxed">"{r.text}"</p>
              <p className="text-sm text-ink/50 mt-4">— {r.name}, verifizierter Kauf</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
