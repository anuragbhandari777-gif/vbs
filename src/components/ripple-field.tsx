"use client";

import { useEffect, useRef, useState } from "react";

type Drop = { id: number; x: number; y: number };

/**
 * Decorative ripple field: slow concentric pulse rings plus
 * click-triggered ripples that follow the pointer.
 */
export function RippleField({ rings = 5 }: { rings?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el) return;

    let id = 0;
    const onPointerDown = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const drop = {
        id: id++,
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      setDrops((d) => [...d, drop]);
      window.setTimeout(
        () => setDrops((d) => d.filter((x) => x.id !== drop.id)),
        1400,
      );
    };

    el.addEventListener("pointerdown", onPointerDown);
    return () => el.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2">
        {Array.from({ length: rings }).map((_, i) => (
          <span
            key={i}
            className="ripple-ring absolute left-1/2 top-1/2 block size-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/25 sm:size-[30rem]"
            style={{ animationDelay: `${i * 1.6}s` }}
          />
        ))}
      </div>

      {drops.map((d) => (
        <span
          key={d.id}
          className="ripple-drop absolute block size-6 rounded-full border border-primary/60"
          style={{ left: d.x, top: d.y }}
        />
      ))}
    </div>
  );
}
