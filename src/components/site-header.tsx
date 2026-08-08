"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/founder", label: "Founder" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="nav-shimmer mx-auto flex max-w-6xl items-center justify-between rounded-full border border-border bg-surface/80 px-5 py-3 backdrop-blur-xl">
        <Link href="/" className="font-display text-lg font-bold tracking-tight">
          veda<span className="text-gradient">byte</span>
          <span className="ml-2 hidden text-[10px] uppercase tracking-[0.35em] text-muted-foreground sm:inline">
            solutions
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => {
            const isActive = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition-colors hover:text-foreground ${isActive ? "text-foreground" : "text-muted-foreground"}`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="btn-primary hidden rounded-full px-5 py-2 text-sm font-semibold sm:inline-flex"
          >
            Request a Quote
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="btn-ghost rounded-full p-2 md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border bg-surface/95 p-4 backdrop-blur-xl md:hidden">
          {[...links, { href: "/contact", label: "Contact" } as const].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
