"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="container-x py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <span className="badge">Kontakt</span>
          <h1 className="font-display text-5xl tracking-tight">Wir sind für dich da.</h1>
          <p className="text-ink/70 leading-relaxed">
            Hast du Fragen zu unseren Produkten, deiner Bestellung oder einer Rücksendung?
            Schreib uns – wir antworten in der Regel innerhalb von 24 Stunden.
          </p>
          <div className="card space-y-3">
            <div>
              <div className="text-xs uppercase tracking-widest text-ink/50">E-Mail</div>
              <a href="mailto:info@renuvia-care.ch" className="font-display text-xl hover:text-rose-600">info@renuvia-care.ch</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-ink/50">Adresse</div>
              <p className="text-ink/80">Renuvia Care<br />Industriestrasse 23<br />3178 Bösingen, Schweiz</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="card space-y-4"
        >
          {sent ? (
            <div className="py-12 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xl mb-4">✓</div>
              <p className="font-display text-2xl">Danke für deine Nachricht.</p>
              <p className="text-ink/65 mt-2">Wir melden uns in Kürze bei dir.</p>
            </div>
          ) : (
            <>
              <h2 className="font-display text-2xl">Schreib uns</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="Name" name="name" required />
                <Input label="E-Mail" name="email" type="email" required />
              </div>
              <Input label="Betreff" name="subject" />
              <label className="block">
                <span className="text-xs font-medium text-ink/70 mb-1 block">Nachricht</span>
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-xl bg-white border border-ink/15 px-4 py-3 outline-none focus:border-rose-400"
                />
              </label>
              <button className="btn-primary w-full">Nachricht senden</button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

function Input({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-ink/70 mb-1 block">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl bg-white border border-ink/15 px-4 py-3 outline-none focus:border-rose-400"
      />
    </label>
  );
}
