import Link from "next/link";
import Image from "next/image";
import { products, formatPrice } from "@/lib/products";
import { FeatureIcon, IconStar, IconTruck, IconReturn, IconLock } from "@/components/Icons";
import NewsletterForm from "@/components/NewsletterForm";

export default function HomePage() {
  const product = products[0];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-12 lg:pt-20 pb-16">
          <div className="space-y-7">
            <span className="badge">✦ Frühlings-Sale · −10%</span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Deine Dusche.<br />
              <span className="italic text-rose-600">Dein Spa.</span>
            </h1>
            <p className="text-lg text-ink/70 max-w-md">
              Das Renuvia SilkTouch™ verwandelt deine tägliche Routine in ein Selfcare-Ritual.
              Sanft wirksames Peeling, antibakteriell – made for glowing skin.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/produkt/silktouch" className="btn-primary">Jetzt entdecken</Link>
              <Link href="/ueber-uns" className="btn-outline">Unsere Story</Link>
            </div>
            <div className="flex items-center gap-3 pt-4">
              <div className="flex text-rose-500">
                {[0,1,2,3,4].map(i => <IconStar key={i} />)}
              </div>
              <span className="text-sm text-ink/60">1’000+ zufriedene Kund:innen</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-rose-100/60 rounded-[3rem] -z-10 blur-2xl" />
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-rose-50 shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1400&q=80"
                alt="Renuvia SilkTouch Spa Moment"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white rounded-2xl shadow-soft p-4 flex items-center gap-3 max-w-xs">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-600">✦</div>
              <div className="text-sm">
                <div className="font-medium">In 15 Min trocken</div>
                <div className="text-ink/60 text-xs">Hygienisch dank Silberionen</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-ink/10 bg-white py-4">
        <div className="marquee">
          <div className="marquee-track text-sm tracking-[0.25em] uppercase text-ink/60">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-12 pr-12">
                <span>✦ Gratis Versand CH</span>
                <span>✦ 30 Tage Rückgabe</span>
                <span>✦ Dermatologisch empfohlen</span>
                <span>✦ Hergestellt in der Schweiz</span>
                <span>✦ 1’000+ Reviews</span>
                <span>✦ Antibakterielle Silberionen</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container-x py-20">
        <div className="max-w-2xl mb-12">
          <span className="badge mb-4">Warum Renuvia</span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight mt-4">
            Selfcare, neu gedacht.
          </h2>
          <p className="text-ink/70 mt-4">
            Wir kombinieren Schweizer Präzision mit dermatologischem Know-how – damit aus deiner Dusche
            ein tägliches Ritual wird.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {product.features.map((f) => (
            <div key={f.title} className="card hover:-translate-y-1 transition-transform">
              <div className="w-11 h-11 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-5">
                <FeatureIcon name={f.icon} className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl mb-2">{f.title}</h3>
              <p className="text-sm text-ink/65 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section className="bg-ink text-cream">
        <div className="container-x py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-[2.5rem] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=1400&q=80"
              alt="SilkTouch Detail"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <span className="badge">Bestseller</span>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
              {product.name}
            </h2>
            <p className="text-cream/75 text-lg max-w-md">{product.shortDescription}</p>
            <ul className="space-y-2">
              {product.highlights.slice(0, 4).map((h) => (
                <li key={h} className="flex items-center gap-3 text-cream/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                  <span className="text-sm">{h}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-baseline gap-3">
              <span className="font-display text-3xl">{formatPrice(product.price)}</span>
              {product.compareAt && (
                <span className="text-cream/50 line-through">{formatPrice(product.compareAt)}</span>
              )}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={`/produkt/${product.slug}`} className="btn-primary bg-cream text-ink hover:bg-rose-400 hover:text-white">
                Zum Produkt
              </Link>
              <Link href={`/produkt/${product.slug}#review`} className="text-cream/80 underline-offset-4 hover:underline self-center">
                Reviews lesen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-x py-20">
        <div className="max-w-2xl mb-12">
          <span className="badge">Reviews</span>
          <h2 className="font-display text-4xl sm:text-5xl tracking-tight mt-4">
            Geliebt von 1’000+ Kund:innen.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { name: "Lara M.", text: "Meine Haut fühlt sich seidig weich an – ich nutze es jeden Tag." },
            { name: "Sophie K.", text: "Endlich erreiche ich meinen Rücken mühelos. Game-Changer!" },
            { name: "Anna T.", text: "Der Silberionen-Effekt ist top. Trocknet super schnell." }
          ].map((r) => (
            <div key={r.name} className="card">
              <div className="flex text-rose-500 mb-3">
                {[0,1,2,3,4].map(i => <IconStar key={i} />)}
              </div>
              <p className="text-ink/80 leading-relaxed">"{r.text}"</p>
              <p className="text-sm text-ink/50 mt-4">— {r.name}, verifizierter Kauf</p>
            </div>
          ))}
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="container-x pb-20">
        <div className="grid sm:grid-cols-3 gap-4 bg-white rounded-3xl p-6 sm:p-8 shadow-soft">
          {[
            { icon: <IconTruck />, title: "Gratis Versand", body: "Innerhalb der Schweiz" },
            { icon: <IconReturn />, title: "30 Tage Rückgabe", body: "Risikofrei testen" },
            { icon: <IconLock />, title: "Sicher bezahlen", body: "TWINT, Karte, PayPal" }
          ].map((g) => (
            <div key={g.title} className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center">{g.icon}</div>
              <div>
                <div className="font-medium">{g.title}</div>
                <div className="text-sm text-ink/60">{g.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="container-x pb-24">
        <div className="rounded-3xl bg-rose-100 p-8 sm:p-14 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-display text-3xl sm:text-4xl tracking-tight">
              −10% auf deine erste Bestellung.
            </h3>
            <p className="text-ink/70 mt-3 max-w-md">
              Abonniere unseren Newsletter und erhalte Selfcare-Tipps, Aktionen und Neuheiten direkt in dein Postfach.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
