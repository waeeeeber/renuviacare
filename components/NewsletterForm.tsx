"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <form
      className="flex flex-col sm:flex-row gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        if (email) setDone(true);
      }}
    >
      {done ? (
        <p className="text-ink/80">Danke! Schau in dein Postfach für deinen Gutscheincode ✦</p>
      ) : (
        <>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="deine@email.ch"
            className="flex-1 rounded-full bg-white px-5 py-3 outline-none border border-transparent focus:border-rose-400"
          />
          <button className="btn-primary">Abonnieren</button>
        </>
      )}
    </form>
  );
}
