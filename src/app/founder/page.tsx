import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import profilePhoto from "@/assets/profile.png";

export const metadata: Metadata = {
  title: "Meet the Founder — Veda Byte Solutions",
  description:
    "Anurag Bhandari, founder of Veda Byte Solutions, on why the company was built around engineering discipline rather than template solutions.",
};

export default function Founder() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="halo pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-44 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              Meet the founder
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">
              Anurag Bhandari
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="surface-card grid gap-10 rounded-[2rem] p-8 md:grid-cols-[280px_1fr] md:p-14">
            <div className="mx-auto md:mx-0">
              <div className="relative size-56 overflow-hidden rounded-3xl md:size-64">
                <Image
                  src={profilePhoto}
                  alt="Anurag Bhandari, Founder of Veda Byte Solutions"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Anurag Bhandari founded Veda Byte Solutions in 2025 with a
                straightforward goal: build software that holds up long after
                launch day, not just websites that look good in a demo.
              </p>
              <p>
                With a background in custom software engineering, Anurag leads
                every project personally, working directly with clients rather
                than passing them through layers of account managers.
              </p>
              <p>
                That hands-on approach shapes how Veda Byte operates — small,
                senior teams, honest technical guidance, and systems built to be
                maintained and scaled, not rebuilt from scratch two years later.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex w-fit items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
                >
                  Get in touch <ArrowUpRight className="size-4" />
                </Link>

                
                 <a href="/anurag-bhandari-cv.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  Download CV <Download className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}