export const metadata = { title: "Impressum – Renuvia Care" };

export default function ImpressumPage() {
  return (
    <div className="container-x py-12 lg:py-20 max-w-3xl">
      <h1 className="font-display text-4xl tracking-tight mb-6">Impressum</h1>
      <div className="space-y-4 text-ink/75 leading-relaxed">
        <div>
          <h2 className="font-display text-xl">Anbieter</h2>
          <p>Renuvia Care<br />Industriestrasse 23<br />3178 Bösingen<br />Schweiz</p>
        </div>
        <div>
          <h2 className="font-display text-xl">Kontakt</h2>
          <p>E-Mail: <a className="underline" href="mailto:info@renuvia-care.ch">info@renuvia-care.ch</a></p>
        </div>
        <p className="text-sm text-ink/55 mt-8">
          Verantwortlich für den Inhalt dieser Website ist Renuvia Care.
        </p>
      </div>
    </div>
  );
}
