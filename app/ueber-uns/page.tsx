import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Über uns – Renuvia Care" };

export default function AboutPage() {
  return (
    <div className="container-x py-12 lg:py-20 space-y-20">
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <span className="badge">Unsere Story</span>
          <h1 className="font-display text-5xl tracking-tight">
            Selfcare ist kein Luxus.<br />
            <span className="italic text-rose-600">Es ist ein Ritual.</span>
          </h1>
          <p className="text-ink/70 leading-relaxed">
            Renuvia Care wurde aus der Überzeugung geboren, dass tägliche Hautpflege einfach, wirksam und schön sein darf.
            Unser Anspruch: Schweizer Qualität, dermatologisch geprüfte Produkte und ein Erlebnis, das du jeden Tag spürst.
          </p>
          <p className="text-ink/70 leading-relaxed">
            Vom kleinen Studio in Bösingen aus entwickeln wir Produkte, die wir selbst täglich nutzen –
            und die wir mit Liebe an dich weitergeben.
          </p>
          <Link href="/produkt/silktouch" className="btn-primary">Produkt entdecken</Link>
        </div>
        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=1400&q=80"
            alt="Renuvia Studio"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-5">
        {[
          { num: "01", title: "Schweizer Qualität", body: "Hergestellt mit Sorgfalt in Bösingen, geprüft nach höchsten Standards." },
          { num: "02", title: "Dermatologisch", body: "Jedes Produkt wird in Zusammenarbeit mit Hautexpert:innen entwickelt." },
          { num: "03", title: "Nachhaltig", body: "Plastikreduzierte Verpackung. Langlebige Produkte statt Wegwerfware." }
        ].map((v) => (
          <div key={v.num} className="card">
            <span className="font-display text-rose-500 text-sm">{v.num}</span>
            <h3 className="font-display text-2xl mt-2 mb-2">{v.title}</h3>
            <p className="text-ink/65 text-sm leading-relaxed">{v.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
