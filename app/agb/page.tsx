export const metadata = { title: "AGB – Renuvia Care" };

export default function AGBPage() {
  return (
    <div className="container-x py-12 lg:py-20 max-w-3xl">
      <h1 className="font-display text-4xl tracking-tight mb-6">Allgemeine Geschäftsbedingungen</h1>
      <div className="prose space-y-4 text-ink/75 leading-relaxed">
        <p>
          Diese Allgemeinen Geschäftsbedingungen (AGB) regeln den Vertrag zwischen Renuvia Care
          und den Kund:innen, die über den Online-Shop renuvia-care.ch Bestellungen aufgeben.
        </p>
        <h2 className="font-display text-2xl mt-8">1. Geltungsbereich</h2>
        <p>Diese AGB gelten für alle Bestellungen über den Online-Shop.</p>
        <h2 className="font-display text-2xl mt-8">2. Vertragsabschluss</h2>
        <p>Der Vertrag kommt durch die Bestätigung deiner Bestellung per E-Mail zustande.</p>
        <h2 className="font-display text-2xl mt-8">3. Preise und Versand</h2>
        <p>Alle Preise verstehen sich in CHF inklusive MwSt. Der Versand innerhalb der Schweiz ist gratis.</p>
        <h2 className="font-display text-2xl mt-8">4. Widerrufsrecht</h2>
        <p>Du hast 30 Tage Zeit, das Produkt zurückzugeben, sofern es ungebraucht und in der Originalverpackung ist.</p>
        <p className="text-sm text-ink/55 mt-12">Stand: {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
