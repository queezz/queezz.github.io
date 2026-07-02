# Commit Culture

Conventions for commits on this project (the CV site and these `.agents/`
notes, which live inside the `cvpage` repo). Adapted from the paperlib
archive's culture. Rules hold until changed here.

## Authorship

- **Never add Claude / an AI as a git co-author.** No `Co-Authored-By` trailer.
- Instead, end the commit message with a single line naming the agent:

  ```
  agent: claude opus 4.8
  ```

  Update the model name if a different agent writes the commit. Human-authored
  commits omit the line.

## Commit messages

- **Short title** (~50 chars), no trailing period. State the change, not the diff.
- **Controlled-width body** (wrap ~62 cols). One or two sentences of context,
  then bullet lists when they help scanning.
- Blank line, then the `agent:` line last.

## Branching & pushing

- Personal repos — when the user says "commit", commit without feature-branch /
  PR ceremony, to the repo's working branch (`cvpage` uses `master`).
- **Pushing `cvpage` updates the live `queezz.github.io` site**, so a push is
  the user's call — don't push unprompted.

## What to stage

- Add paths **deliberately**; don't `git add -A` blindly.
- These `.agents/` files are notes/handoffs (markdown). Keep it that way — no
  build artifacts, no site output, no images unless a handoff needs one.

## Scope note

These notes are *about* the CV site; they don't contain the site itself. They
now live inside the `cvpage` repo (the site is public, so no need for a separate
private repo) and cover work across both site repos (`cvpage`,
`arseniykuzmin.github.io`).
