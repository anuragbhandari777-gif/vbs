import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Typewriter } from "@/components/typewriter";

export const metadata: Metadata = {
  title: "About — Veda Byte Solutions",
  description:
    "Founded in 2025 by Anurag Bhandari, Veda Byte Solutions was built on a simple idea: most businesses don't need another template website — they need software that actually holds up.",
  openGraph: {
    title: "About — Veda Byte Solutions",
    description:
      "A software development company that engineers systems meant to be maintained and scaled.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function About() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="halo pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-44 text-center">
            <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
              <Typewriter text="More than a template website" speed={55} delay={300} />
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
              Veda Byte Solutions was founded in 2025 on a simple idea: most
              businesses don&apos;t need another template website — they need
              software that actually holds up.
            </p>
          </div>
        </section>

        {/* Founding story */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="surface-card rounded-[2rem] p-8 md:p-14">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              The founding story
            </p>
            <div className="mt-8 grid gap-10 md:grid-cols-[1fr_1fr]">
              <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Founded in 2025 by Anurag Bhandari, Veda Byte Solutions was built
                  on a simple idea: most businesses don&apos;t need another template
                  website — they need software that actually holds up.
                </p>
                <p>
                  Membership systems, payment integrations, custom dashboards, mobile
                  apps — the kind of platforms that have to keep working as a business
                  grows, not just look good on launch day.
                </p>
                <p>
                  The company was built to serve startups, small and medium businesses,
                  and larger organizations that have outgrown off-the-shelf tools and
                  need engineering done right the first time.
                </p>
              </div>
              <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
                <p>
                  The engineering philosophy is straightforward: write code that a
                  competent engineer can read, maintain, and extend — not just code
                  that passes tests today. Every project we take on is built with that
                  standard in mind.
                </p>
                <p>
                  That means proper architecture before a line of production code is
                  written, honest conversations about what&apos;s feasible within a
                  budget, and delivery that doesn&apos;t leave clients holding a
                  codebase no one wants to touch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="text-3xl font-bold sm:text-4xl">How we approach the work</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "We engineer, we don't template",
                body: "Every system is built around how your business actually operates — not stretched and patched to fit a generic framework. That distinction matters when you need to change something in year two.",
              },
              {
                title: "Maintainability is part of the deliverable",
                body: "Code that works today but can't be touched by anyone else isn't finished work. We write systems that your own engineers — or a future team — can understand and build on.",
              },
              {
                title: "Straight answers, not sales pitch",
                body: "If a simpler approach will serve you better than a complex one, we'll say so. If something you want isn't feasible in your budget, we'll tell you before we start, not after.",
              },
              {
                title: "Small teams, direct access",
                body: "You work with senior engineers who are building your product, not a project manager relaying messages. Fewer people in the chain means fewer misunderstandings and faster decisions.",
              },
            ].map((v) => (
              <article key={v.title} className="surface-card rounded-3xl p-8">
                <h3 className="text-lg font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            <Link
              href="/founder"
              className="btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
            >
              Meet the founder <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="/contact"
              className="btn-primary inline-flex rounded-full px-7 py-3 text-sm font-semibold"
            >
              Request a consultation
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
