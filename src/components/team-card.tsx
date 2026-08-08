// src/components/team-card.tsx
//
// Follows the same convention as your existing service-card.tsx —
// a small presentational component that the /team page maps over.
// Uses your real design tokens (border-border, bg-surface, text-muted-foreground,
// text-gradient, font-display, etc.) instead of custom CSS, so it matches the
// rest of the site without any extra styling work.

import type { TeamMember } from "@/data/team";

function initials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="surface-card group flex flex-col rounded-3xl border border-border bg-background/60 p-8 transition hover:border-foreground/20">
      <div className="flex items-center gap-4">
        {member.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.photo}
            alt={member.name}
            className="size-14 rounded-2xl border border-border object-cover"
          />
        ) : (
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface font-display text-lg font-semibold">
            <span className="text-gradient">{initials(member.name)}</span>
          </div>
        )}
        <div>
          <h3 className="font-display text-lg font-semibold tracking-tight">
            {member.name}
          </h3>
          <p className="text-sm text-muted-foreground">{member.role}</p>
          {member.experienceYears && (
            <p className="mt-0.5 text-xs uppercase tracking-wide text-muted-foreground/70">
              {member.experienceYears} yrs experience
            </p>
          )}
        </div>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        {member.bio}
      </p>

      {member.specialties.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {member.specialties.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-surface/80 px-3 py-1 text-xs text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      )}

      {member.highlights && member.highlights.length > 0 && (
        <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
          {member.highlights.map((h, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-gradient">▹</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      {(member.education || member.linkedin || member.portfolio) && (
        <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5">
          <span className="text-xs text-muted-foreground">{member.education}</span>
          <div className="flex gap-2">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
              >
                LinkedIn
              </a>
            )}
            {member.portfolio && (
              <a
                href={member.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:text-foreground"
              >
                Portfolio
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
