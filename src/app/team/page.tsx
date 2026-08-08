// src/app/team/page.tsx
//
// Route: /team
// Fixed: now wraps content with <SiteHeader /> and <SiteFooter />, matching
// the exact pattern used in about/page.tsx — each page imports and renders
// these itself, they aren't handled globally in layout.tsx.
//
// Data comes from src/data/team.ts — update that file when new team members
// submit the intake form, and this page updates automatically.

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TEAM_DATA } from "@/data/team";
import { TeamCard } from "@/components/team-card";

export const metadata: Metadata = {
  title: "Meet the Team — Veda Byte Solutions",
  description:
    "The engineers, designers, and specialists behind Veda Byte Solutions.",
  openGraph: {
    title: "Meet the Team — Veda Byte Solutions",
    description:
      "The engineers, designers, and specialists behind Veda Byte Solutions.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function TeamPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="halo pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-44 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              Meet the team
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
              The engineers behind{" "}
              <span className="text-gradient">vedabyte</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
              Small by design — every person here works directly with
              clients, not behind layers of process. Here&apos;s who
              you&apos;ll actually be talking to.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TEAM_DATA.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
