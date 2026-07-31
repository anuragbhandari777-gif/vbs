import Link from "next/link";

const columns = [
  {
    title: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Founder", href: "/founder" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Custom Software", href: "/services" },
      { label: "Mobile Apps", href: "/services" },
      { label: "Cloud & DevOps", href: "/services" },
      { label: "UI/UX Design", href: "/services" },
      { label: "IT Staffing", href: "/services" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-bold">
              veda<span className="text-gradient">byte</span> solutions
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We build reliable, well-engineered digital platforms for
              organizations that need more than a template — membership systems,
              payment integrations, dashboards, and mobile applications.
            </p>
            <Link
              href="/contact"
              className="btn-primary mt-6 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              Request a consultation
            </Link>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 border-t border-border pt-10 sm:grid-cols-2">
          <div>
            <p className="font-display text-sm font-semibold">Kirtipur, Nepal</p>
            <p className="mt-1 text-sm text-muted-foreground">44600</p>
          </div>
          <div>
            <p className="text-sm text-primary">+977 9811933213456456</p>
            <p className="text-sm text-primary">+977 9849916191</p>
            <p className="mt-1 text-sm text-muted-foreground">
              vedabytesolutions1@gmail.com
            </p>
          </div>
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          Copyright © {new Date().getFullYear()} Veda Byte Solutions. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
