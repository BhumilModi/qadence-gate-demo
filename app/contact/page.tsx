"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  async function send(form: HTMLFormElement) {
    const res = await fetch("/api/contact", { method: "POST", body: new FormData(form) });
    if (res.ok) setSent(true);
  }

  if (sent) return <p role="status">Thanks, we will reply within a day.</p>;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        send(e.currentTarget);
      }}
    >
      <h1>Contact</h1>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={4} required />
      <button type="submit" onClick={(e) => e.currentTarget.form && send(e.currentTarget.form)}>
        Send
      </button>
    </form>
  );
}
