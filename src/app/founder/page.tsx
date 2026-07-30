import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Founder — Veda Byte Solutions",
  description:
    "Anurag Bhandari, founder of Veda Byte Solutions — the engineering philosophy behind the company and why it was built the way it was.",
  openGraph: {
    title: "Founder — Veda Byte Solutions",
    description:
      "The engineering philosophy behind Veda Byte Solutions.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function Founder() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="halo pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-44 text-center">
            <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
              The person behind the work
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
              Veda Byte Solutions was founded in 2025 by Anurag Bhandari — an
              engineer who got tired of watching businesses settle for software
              that just barely works.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="surface-card grid gap-10 rounded-[2rem] p-8 md:grid-cols-[1fr_1.4fr] md:p-14">
            {/* Photo placeholder */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-64 w-full items-center justify-center rounded-3xl border border-border bg-secondary/40 text-muted-foreground md:h-full">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex size-20 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary">
                    AB
                  </div>
                  <p className="text-sm font-medium">Anurag Bhandari</p>
                  <p className="mt-1 text-xs text-muted-foreground">Photo coming soon</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">
                Founder
              </p>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
                Anurag Bhandari
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Founder, Veda Byte Solutions
              </p>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Anurag started Veda Byte Solutions after seeing the same pattern
                  repeat across too many organizations: a team would buy or build
                  something that looked good at launch, only to find themselves
                  rebuilding it eighteen months later because it couldn&apos;t
                  keep up with how the business actually grew.
                </p>
                <p>
                  The company was built to solve that specific problem — to deliver
                  software that&apos;s engineered for real use, not just
                  demonstration. Membership systems, payment integrations, custom
                  dashboards, mobile apps: platforms that have to keep working,
                  not just look good on day one.
                </p>
                <p>
                  His engineering philosophy is direct: write code that holds up,
                  tell clients the truth about what their budget will actually
                  deliver, and never hand over a system that no one will want
                  to maintain.
                </p>
              </div>

              <p className="mt-6 text-xs italic text-muted-foreground/60">
                Extended bio and background — coming soon.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24 text-center">
          <Link
            href="/contact"
            className="btn-primary inline-flex rounded-full px-8 py-3.5 text-sm font-semibold"
          >
            Request a consultation
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
