"use client";

import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  text: string;
  /** ms per character while typing (default 55) */
  speed?: number;
  /** ms per character while deleting (default 33) */
  deleteSpeed?: number;
  /** ms before the very first type-pass (default 400) */
  delay?: number;
  /** ms to pause at full text before deleting (default 10000) */
  pauseFull?: number;
  /** ms to pause at empty before retyping (default 600) */
  pauseEmpty?: number;
  className?: string;
}

export function Typewriter({
  text,
  speed = 55,
  deleteSpeed = 33,
  delay = 400,
  pauseFull = 10000,
  pauseEmpty = 600,
  className,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const schedule = (fn: () => void, ms: number) => {
      timerRef.current = setTimeout(fn, ms);
    };

    const typeNext = () => {
      indexRef.current += 1;
      setDisplayed(text.slice(0, indexRef.current));

      if (indexRef.current < text.length) {
        schedule(typeNext, speed);
      } else {
        schedule(deleteNext, pauseFull);
      }
    };

    const deleteNext = () => {
      indexRef.current -= 1;
      setDisplayed(text.slice(0, indexRef.current));

      if (indexRef.current > 0) {
        schedule(deleteNext, deleteSpeed);
      } else {
        schedule(typeNext, pauseEmpty);
      }
    };

    schedule(typeNext, delay);

    return () => {
      if (timerRef.current !== null) clearTimeout(timerRef.current);
    };
    // intentionally runs once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span className={className}>
      {displayed}
      <span
        aria-hidden="true"
        className="inline-block w-[3px] ml-[2px] rounded-sm bg-current align-middle"
        style={{ height: "0.82em", animation: "vb-blink 1s step-start infinite" }}
      />
    </span>
  );
}
