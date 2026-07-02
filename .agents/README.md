# .agents/

Working logs and handoffs for AI-assisted sessions on the **CV site**.

This is **operational scratch space** — notes about the site work, tracked as
part of the `cvpage` repo. The site is public and always has been, so there's
nothing to hide in its dev history; keeping these notes in the main repo
(rather than a second, independent one) is one less thing to maintain.

The CV site spans two public repos; these notes cover work on both:

- `arseniykuzmin.github.io/` → `github.com/arseniykuzmin/arseniykuzmin.github.io` (public CV; currently live).
- `cvpage/` → `github.com/queezz/queezz.github.io` (dev/staging; these notes live here).

## Layout

- [`directions.md`](directions.md) — **start here**: current status + the
  forward-looking plan (what's done, what's next). The resume point.
- [`CV_SITE_ARCHAEOLOGY_2026-07-02.md`](CV_SITE_ARCHAEOLOGY_2026-07-02.md) — the
  **archaeology**: full dig into the two repos / three generations, metadata
  inventory, and the cleanup findings. Background, not a plan.
- [`log/`](log/) — dated session **handoffs** (`YYYY-MM-DD-*.md`), the detailed record.
- [`handoff-template.md`](handoff-template.md) — copy-paste skeleton for a handoff.
- [`commit-culture.md`](commit-culture.md) — commit message style and the `agent:`
  line (no AI co-author).

## Naming convention

One file per session/handoff, in [`log/`](log/), named:

```
YYYY-MM-DD-short-title-kebab.md
```

If two handoffs land on the same day, append a counter:
`2026-07-02-cv-site-archaeology-2.md`.

## What goes in a handoff

Keep it short and skimmable:

- **Goal** — what this session set out to do.
- **Decisions** — choices made and why (so the next session doesn't relitigate).
- **Changed** — files/commands added or modified.
- **State** — what works now, what's verified.
- **Next** — the obvious next step(s).

See [`handoff-template.md`](handoff-template.md).
