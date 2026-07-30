import type { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Smartphone,
  Cloud,
  Palette,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RippleField } from "@/components/ripple-field";

export const metadata: Metadata = {
  title: "Veda Byte Solutions — Custom Software Development",
  description:
    "Veda Byte Solutions builds reliable, well-engineered digital platforms — membership systems, payment integrations, dashboards, and mobile applications built on solid, maintainable foundations.",
  openGraph: {
    title: "Veda Byte Solutions — Custom Software Development",
    description:
      "We don't do generic template sites. We engineer systems meant to be maintained and scaled.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    body: "Bespoke platforms built around how a business actually operates. For organizations that have outgrown off-the-shelf tools.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    body: "Native and cross-platform mobile applications built with the same engineering discipline as our web platforms — reliable, maintainable, ready to scale.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    body: "Infrastructure setup, deployment pipelines, and cloud architecture so systems stay stable as usage grows.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    body: "Interfaces designed for clarity and real usability, not just visual polish — built to work for the people actually using the product every day.",
  },
  {
    icon: Users,
    title: "IT Staffing & Consulting",
    body: "Experienced technical talent and consulting support for organizations that need extra engineering capacity or expert guidance on a project.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="halo pointer-events-none absolute inset-0" />
          <RippleField />
          <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-48 text-center">
            <span className="btn-ghost rise-in rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Software development studio · Founded 2025
            </span>
            <h1
              className="rise-in mt-8 text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl"
              style={{ animationDelay: "0.1s" }}
            >
              Software that holds up
              <br className="hidden sm:block" /> when your business{" "}
              <span className="text-gradient">grows</span>
            </h1>
            <p
              className="rise-in mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              style={{ animationDelay: "0.2s" }}
            >
              Most businesses don&apos;t need another template website. They need
              platforms that keep working — membership systems, payment integrations,
              custom dashboards, mobile apps. That&apos;s what we build.
            </p>
            <div
              className="rise-in mt-10 flex flex-wrap justify-center gap-3"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                href="/contact"
                className="btn-primary rounded-full px-7 py-3 text-sm font-semibold"
              >
                Request a consultation
              </Link>
              <Link
                href="/services"
                className="btn-ghost rounded-full px-7 py-3 text-sm font-semibold"
              >
                See our services
              </Link>
            </div>
          </div>

          {/* Hero service cards */}
          <div className="relative mx-auto grid max-w-6xl gap-4 px-6 pb-24 md:grid-cols-3">
            {services.slice(0, 3).map((s, idx) => (
              <article
                key={s.title}
                className="surface-card tilt-card rise-in group rounded-3xl p-7"
                style={{ animationDelay: `${0.4 + idx * 0.12}s` }}
              >
                <s.icon className="size-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-8 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* What sets us apart */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="surface-card grid gap-10 rounded-[2rem] p-8 md:grid-cols-2 md:p-14">
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">
                Why Veda Byte
              </p>
              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                The kind of foundation you don&apos;t have to rebuild in two years
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                We don&apos;t do generic template sites. Every system we build is
                designed around the specific way your business operates — so it
                can grow with you instead of against you.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Founded in 2025 by Anurag Bhandari, Veda Byte Solutions was built
                on a simple premise: organizations that need software that actually
                holds up deserve engineers who care about maintainability, not just
                launch day.
              </p>
              <Link
                href="/about"
                className="btn-ghost mt-8 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                Our story <ArrowUpRight className="size-4" />
              </Link>
            </div>

            <div className="rounded-3xl border border-border bg-background/60 p-8">
              <ul className="space-y-6">
                {[
                  {
                    heading: "Built to last",
                    detail:
                      "Maintainable codebases with proper architecture — not patched together under deadline pressure.",
                  },
                  {
                    heading: "Small, senior teams",
                    detail:
                      "You work directly with the engineers building your product, not a rotating cast of juniors.",
                  },
                  {
                    heading: "No hand-waving",
                    detail:
                      "We give you a straight answer on what will work, what won't, and why — before we write a line of code.",
                  },
                ].map((item) => (
                  <li key={item.heading} className="flex gap-4">
                    <span className="mt-1 size-2 shrink-0 rounded-full bg-primary" />
                    <div>
                      <p className="text-sm font-semibold">{item.heading}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services overview */}
        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">What we do</h2>
              <p className="mt-4 max-w-xl text-sm text-muted-foreground">
                Five practice areas, one consistent standard: software you can
                hand to your own engineers and be proud of.
              </p>
            </div>
            <Link
              href="/services"
              className="btn-ghost inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              All services <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="surface-card rounded-3xl p-8">
                <s.icon className="size-6 text-primary" />
                <h3 className="mt-8 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden">
          <div className="halo pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-3xl px-6 py-28 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              Let&apos;s talk about your project
            </p>
            <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              Tell us what you&apos;re building
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Send a short brief. We&apos;ll give you a straight read on what it
              would take to build it properly — no sales deck, no runaround.
            </p>
            <Link
              href="/contact"
              className="btn-primary mt-10 inline-flex rounded-full px-8 py-3.5 text-sm font-semibold"
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
