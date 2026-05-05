import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x py-32 text-center">
      <p className="font-display text-7xl text-rose-500">404</p>
      <h1 className="font-display text-3xl mt-4">Seite nicht gefunden</h1>
      <p className="text-ink/65 mt-2">Die gesuchte Seite existiert leider nicht.</p>
      <Link href="/" className="btn-primary mt-8 inline-flex">Zurück zur Startseite</Link>
    </div>
  );
}
