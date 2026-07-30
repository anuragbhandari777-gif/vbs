"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface ServiceCardProps {
  iconNode: ReactNode;
  title: string;
  summary: string;
  body: string;
  detail: string;
  bullets: string[];
  direction: "left" | "right";
  index: number;
}

export function ServiceCard({
  iconNode,
  title,
  summary,
  body,
  detail,
  bullets,
  direction,
  index,
}: ServiceCardProps) {
  const ref = useRef<HTMLElement>(null);

  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const slideClass = direction === "left" ? "slide-from-left" : "slide-from-right";

  return (
    <article
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
      className={[
        "surface-card rounded-3xl p-8 md:p-10 transition-all duration-500 ease-out cursor-default",
        "opacity-0",
        visible ? slideClass : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="grid gap-6 md:grid-cols-[auto_1fr]">
        <div className="flex md:flex-col items-start gap-4 md:gap-6">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
            {iconNode}
          </div>
          {/* direction indicator bar */}
          <div
            className={[
              "hidden md:block h-px w-10 bg-primary/30 mt-6 transition-all duration-500",
              hovered ? "w-16 bg-primary/60" : "",
            ].join(" ")}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold">{title}</h2>

          {/* summary — always visible */}
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {summary}
          </p>

          {/* expanded content */}
          <div
            className={[
              "overflow-hidden transition-all duration-500 ease-out",
              hovered ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0",
            ].join(" ")}
          >
            <p className="text-sm leading-relaxed text-muted-foreground">
              {body}
            </p>

            {bullets.length > 0 && (
              <ul className="mt-4 space-y-1.5">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/60" />
                    {b}
                  </li>
                ))}
              </ul>
            )}

            <p className="mt-5 text-xs text-muted-foreground/60 border-t border-border/40 pt-4">
              {detail}
            </p>
          </div>

          {/* hover hint */}
          <p
            className={[
              "mt-3 text-xs text-primary/50 transition-opacity duration-300",
              hovered ? "opacity-0" : "opacity-100",
            ].join(" ")}
          >
            Hover to learn more →
          </p>
        </div>
      </div>
    </article>
  );
}
