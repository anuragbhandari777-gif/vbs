"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";

interface ServiceCardProps {
  iconNode: ReactNode;
  title: string;
  summary: string;
  body: string;
  detail: string;
  bullets: string[];
  image: string;
  imageAlt: string;
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
  image,
  imageAlt,
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
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const slideClass = direction === "left" ? "slide-from-left" : "slide-from-right";
  const imageFirst = direction === "left";

  return (
    <article
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
      className={[
        "surface-card rounded-3xl overflow-hidden transition-all duration-500 ease-out cursor-default opacity-0",
        visible ? slideClass : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={`flex flex-col ${imageFirst ? "md:flex-row" : "md:flex-row-reverse"}`}>

        {/* Image panel */}
        <div className="relative h-52 w-full shrink-0 md:h-auto md:w-72 lg:w-80 overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className={[
              "object-cover transition-transform duration-700 ease-out",
              hovered ? "scale-105" : "scale-100",
            ].join(" ")}
          />
          {/* dark overlay so text-on-image never needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20" />
        </div>

        {/* Text panel */}
        <div className="flex flex-1 flex-col justify-center gap-0 p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              {iconNode}
            </div>
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>

          {/* summary — always visible */}
          <p className="text-sm leading-relaxed text-muted-foreground">
            {summary}
          </p>

          {/* expanded content */}
          <div
            className={[
              "overflow-hidden transition-all duration-500 ease-out",
              hovered ? "max-h-[600px] opacity-100 mt-5" : "max-h-0 opacity-0",
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
              hovered ? "opacity-0 pointer-events-none" : "opacity-100",
            ].join(" ")}
          >
            Hover to learn more →
          </p>
        </div>
      </div>
    </article>
  );
}
