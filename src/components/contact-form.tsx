"use client";

import { useState } from "react";
import { toast } from "sonner";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="surface-card rounded-[2rem] p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        toast.success("Thanks — we'll be in touch shortly.");
      }}
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm">
          Name
          <input
            required
            name="name"
            className="rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm">
          Work email
          <input
            required
            type="email"
            name="email"
            className="rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
            placeholder="you@company.com"
          />
        </label>
        <label className="grid gap-2 text-sm">
          What are you building?
          <textarea
            required
            name="message"
            rows={5}
            className="rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary"
            placeholder="A few sentences is plenty."
          />
        </label>
        <button
          type="submit"
          className="btn-primary rounded-full px-6 py-3 text-sm font-semibold"
        >
          {sent ? "Message sent" : "Send message"}
        </button>
      </div>
    </form>
  );
}
