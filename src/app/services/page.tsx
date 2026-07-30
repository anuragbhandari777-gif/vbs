import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Smartphone, Cloud, Palette, Users, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RippleField } from "@/components/ripple-field";
import { ServiceCard } from "@/components/service-card";

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
    summary:
      "Bespoke platforms built around how a business actually operates — not forced into a generic template. For organizations that have outgrown off-the-shelf tools.",
    body: "Most software fails not because the code is bad, but because it was designed for a fictional average business. We build around your specific workflows, constraints, and growth trajectory. That means fewer workarounds, less shadow IT, and systems your team actually wants to use. Every engagement starts with understanding the problem before writing a single line of code — and ends with something you could hand off to any competent engineer without embarrassment.",
    bullets: [
      "Membership and subscription platforms built for real operational complexity",
      "Internal dashboards and admin tools that handle edge cases, not just the happy path",
      "Payment integrations and financial workflows with proper error handling and auditability",
      "Legacy system replacements that keep the business running while modernizing underneath",
      "API-first architecture so your platform can grow and integrate without rewrites",
    ],
    detail: "Typical engagements: web applications, internal tools, API development, system integrations.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&q=80&fit=crop",
    imageAlt: "Lines of code on a dark monitor",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    summary:
      "Native and cross-platform mobile applications built with the same engineering discipline as our web platforms — reliable, maintainable, and ready to scale.",
    body: "Mobile isn't a simplified version of the web — it has its own constraints around performance, offline behaviour, device diversity, and app store compliance. We treat mobile with the same architectural rigour as any other platform, which means apps that don't degrade over time as requirements evolve. Whether the right choice is React Native for speed-to-market or native Swift/Kotlin for performance-critical work, we'll give you an honest recommendation rather than defaulting to whatever's easiest for us.",
    bullets: [
      "iOS and Android apps designed for the platform conventions users expect",
      "React Native builds that share logic without sacrificing feel",
      "Offline-first architecture for apps that need to work in low-connectivity environments",
      "App Store and Play Store submission, review navigation, and ongoing compliance",
      "Push notification pipelines, deep linking, and background sync that actually work",
    ],
    detail: "Typical engagements: iOS and Android apps, React Native, cross-platform product builds.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=640&q=80&fit=crop",
    imageAlt: "Person holding a smartphone with app interface",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    summary:
      "Infrastructure setup, deployment pipelines, and cloud architecture so systems stay stable and scalable as usage grows. Release days should be calm, not chaotic.",
    body: "Good infrastructure is invisible until it isn't. We set up environments that are boring by design — automated deployments, proper secret management, observability from day one, and infrastructure-as-code so nothing exists only in someone's memory. If you've inherited a system held together with manual processes and hope, we can modernise it without taking the business offline in the process. The goal is a setup where your engineers can ship with confidence and on-call rotations aren't a source of dread.",
    bullets: [
      "AWS, GCP, and Azure setup with least-privilege IAM and cost guardrails",
      "CI/CD pipelines that run tests, enforce quality gates, and deploy without manual steps",
      "Docker and Kubernetes configurations sized to actual load, not cargo-culted from blog posts",
      "Monitoring, alerting, and logging that surfaces real problems before users notice",
      "Database management, backup strategies, and disaster recovery that have actually been tested",
    ],
    detail: "Typical engagements: AWS/GCP/Azure setup, CI/CD pipelines, containerisation, monitoring.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=640&q=80&fit=crop",
    imageAlt: "Data center server racks with blue lighting",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    summary:
      "Interfaces designed for clarity and real usability — built to work for the people actually using the product every day, not just to look good in a pitch deck.",
    body: "Design that doesn't connect to how people actually use software is decoration. Our design work starts with the workflows and mental models of the people who will use the product, then works outward to visual polish — not the other way around. That means fewer support tickets, less training overhead, and products that people recommend rather than tolerate. When we design alongside our engineering work, it also means fewer late-stage surprises: designers and engineers arguing through tradeoffs early rather than discovering constraints after the mockups are finished.",
    bullets: [
      "User research and workflow analysis before any wireframes are produced",
      "Information architecture that reflects how users think, not how the database is organised",
      "Interaction design with real states — loading, error, empty, edge cases — not just the happy path",
      "Design systems that give engineering a consistent, documented component vocabulary",
      "Usability testing with real users at key milestones, not just internal sign-off",
    ],
    detail: "Typical engagements: product design, wireframing, user testing, design systems.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=640&q=80&fit=crop",
    imageAlt: "Designer working on UI wireframes and colour palettes",
  },
  {
    icon: Users,
    title: "IT Staffing & Consulting",
    summary:
      "Experienced technical talent and consulting support for organizations that need extra engineering capacity or expert guidance — without a stake in the answer.",
    body: "Hiring senior engineers is slow and expensive. Sometimes you need capability immediately for a defined period, or you need an outside perspective on a technical decision without paying for a full engagement. We provide both. Our consulting work is structured to give you a clear read on your situation — what's actually causing the problem, what would genuinely fix it, and what the realistic tradeoffs are — rather than a proposal designed to maximise the scope of follow-on work. If the honest answer is that you don't need us, we'll say so.",
    bullets: [
      "Staff augmentation with engineers who can contribute without a long onboarding runway",
      "Architecture review and technical due diligence for acquisitions or major platform decisions",
      "CTO advisory for early-stage companies without full-time technical leadership",
      "Engineering process assessments — delivery velocity, code quality, team structure",
      "Hiring support: defining roles, reviewing candidates, structuring technical interviews",
    ],
    detail: "Typical engagements: team augmentation, technical advisory, architecture review, hiring support.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=640&q=80&fit=crop",
    imageAlt: "Team collaborating around a table in a modern office",
  },
];

export default function Services() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <RippleField rings={5} />
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

        <section className="mx-auto max-w-5xl px-6 pb-16">
          <div className="space-y-5">
            {services.map((s, i) => (
              <ServiceCard
                key={s.title}
                iconNode={<s.icon className="size-5 text-primary" />}
                title={s.title}
                summary={s.summary}
                body={s.body}
                detail={s.detail}
                bullets={s.bullets}
                image={s.image}
                imageAlt={s.imageAlt}
                direction={i % 2 === 0 ? "left" : "right"}
                index={i}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 pb-24">
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
