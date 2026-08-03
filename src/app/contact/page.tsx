import LinkedInIcon from "@/components/linkedin-icon";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Veda Byte Solutions",
  description:
    "Tell Veda Byte Solutions about your project and get a straight response from a senior engineer — not a sales desk.",
  openGraph: {
    title: "Contact — Veda Byte Solutions",
    description:
      "Tell us what you're building. We'll give you a straight read on what it would take.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function Contact() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="halo pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-44">
            <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
              <div>
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                  Let&apos;s talk about{" "}
                  <span className="text-gradient">your project</span>
                </h1>
                <p className="mt-6 text-base text-muted-foreground">
                  Send a short brief — what you&apos;re building, roughly what
                  you&apos;re working with, and what&apos;s blocking you. A
                  senior engineer reads every message.
                </p>

                <ul className="mt-10 space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                    <a
                      href="mailto:vedabytesolutions1@gmail.com"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      vedabytesolutions1@gmail.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                    <div className="text-muted-foreground">
                      <p>+977 9811933213</p>
                      <p>+977 9849916191</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">
                      Kirtipur, Nepal — 44600
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
  <LinkedInIcon size={16} />
  
   <a href="https://www.linkedin.com/in/vedabyte-solutions-359161425/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground transition-colors hover:text-foreground"
  >
    LinkedIn
  </a>
</li>
                </ul>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
