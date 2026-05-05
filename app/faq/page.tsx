export const metadata = { title: "FAQ – Renuvia Care" };

const faqs = [
  {
    q: "Wie verwende ich das SilkTouch™ Duschtuch?",
    a: "Befeuchte das Tuch mit warmem Wasser, gib etwas Duschgel hinzu und massiere deine Haut in kreisenden Bewegungen. Anschliessend abspülen und an der Luft trocknen lassen."
  },
  {
    q: "Wie oft sollte ich es benutzen?",
    a: "Für die meisten Hauttypen empfehlen wir eine Anwendung 2–3 Mal pro Woche. Bei empfindlicher Haut starte mit einer Anwendung pro Woche."
  },
  {
    q: "Wie pflege ich das Tuch?",
    a: "Nach jeder Anwendung gut ausspülen und an einem luftigen Ort trocknen. Dank Silberionen-Beschichtung trocknet es in unter 15 Minuten und bleibt hygienisch."
  },
  {
    q: "Wie lange ist die Lieferzeit?",
    a: "Innerhalb der Schweiz liefern wir in der Regel innerhalb von 2–3 Werktagen. Versand ist gratis."
  },
  {
    q: "Welche Zahlungsmittel akzeptiert ihr?",
    a: "TWINT, Kreditkarte (Visa, Mastercard, Amex) sowie PayPal."
  },
  {
    q: "Kann ich zurücksenden?",
    a: "Ja – du hast 30 Tage Zeit, das Produkt zurückzugeben, falls du nicht zufrieden bist. Schreib uns einfach an info@renuvia-care.ch."
  }
];

export default function FAQPage() {
  return (
    <div className="container-x py-12 lg:py-20">
      <div className="max-w-2xl mb-12">
        <span className="badge">FAQ</span>
        <h1 className="font-display text-5xl tracking-tight mt-4">Häufig gestellte Fragen</h1>
      </div>
      <div className="max-w-3xl divide-y divide-ink/10 border-y border-ink/10">
        {faqs.map((f, i) => (
          <details key={i} className="group py-6">
            <summary className="cursor-pointer flex items-center justify-between gap-6 list-none">
              <span className="font-display text-xl">{f.q}</span>
              <span className="text-rose-500 text-2xl group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="text-ink/70 leading-relaxed mt-4 pr-12">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
