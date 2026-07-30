import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Smartphone, Cloud, Palette, Users, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Services — Veda Byte Solutions",
  description:
    "Custom software development, mobile apps, cloud & DevOps, UI/UX design, and IT staffing — built to a standard that lasts.",
  openGraph: {
    title: "Services — Veda Byte Solutions",
    description:
      "Five practice areas, one consistent standard: software you can hand to your own engineers and be proud of.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    body: "Bespoke platforms built around how a business actually operates, not forced into a generic template. For organizations that have outgrown off-the-shelf tools — membership systems, internal dashboards, payment integrations, and anything else that needs to work reliably at scale.",
    detail: "Typical engagements: web applications, internal tools, API development, system integrations.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    body: "Native and cross-platform mobile applications built with the same engineering discipline as our web platforms — reliable, maintainable, ready to scale. We don't cut corners on architecture just because it's mobile.",
    detail: "Typical engagements: iOS and Android apps, React Native, cross-platform product builds.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    body: "Infrastructure setup, deployment pipelines, and cloud architecture so systems stay stable and scalable as usage grows. The kind of foundation that means release days are calm, not chaotic.",
    detail: "Typical engagements: AWS/GCP/Azure setup, CI/CD pipelines, containerisation, monitoring.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    body: "Interfaces designed for clarity and real usability, not just visual polish — built to work for the people actually using the product every day. Design that makes the engineering more useful, not just more attractive.",
    detail: "Typical engagements: product design, wireframing, user testing, design systems.",
  },
  {
    icon: Users,
    title: "IT Staffing & Consulting",
    body: "Experienced technical talent and consulting support for organizations that need extra engineering capacity or expert guidance on a project. Honest technical advice without a stake in the answer.",
    detail: "Typical engagements: team augmentation, technical advisory, architecture review, hiring support.",
  },
];

export default function Services() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="halo pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-44 text-center">
            <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
              What we build,{" "}
              <span className="text-gradient">and how we build it</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
              Five practice areas. One standard: software that works when you
              need it to, not just on demo day.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="space-y-4">
            {services.map((s) => (
              <article key={s.title} className="surface-card rounded-3xl p-8 md:p-10">
                <div className="grid gap-8 md:grid-cols-[auto_1fr]">
                  <s.icon className="size-7 text-primary" />
                  <div>
                    <h2 className="text-xl font-semibold">{s.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {s.body}
                    </p>
                    <p className="mt-4 text-xs text-muted-foreground/70">
                      {s.detail}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="surface-card rounded-[2rem] p-10 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
              Most engagements start with a conversation about what you&apos;re
              trying to build. Send us a brief — we&apos;ll give you a straight
              read on what it would take.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="btn-primary inline-flex rounded-full px-7 py-3 text-sm font-semibold"
              >
                Request a consultation
              </Link>
              <Link
                href="/founder"
                className="btn-ghost inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
              >
                Meet the founder <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
