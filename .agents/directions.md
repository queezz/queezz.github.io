# Directions — CV site cleanup

Forward-looking map: where things stand and what's next. Detailed session
records are in [`log/`](log/); the full background dig is
[`CV_SITE_ARCHAEOLOGY_2026-07-02.md`](CV_SITE_ARCHAEOLOGY_2026-07-02.md).

## TL;DR for the next session
Cleaning up (not rebuilding) the CV site. A working custom **Jinja2 static
site** (`build.py`) is the keeper; the old runtime-JS pages and the Chirpy
trial are being retired/parked. Repo/branch admin + a build venv are **done**.
Next up is **Phase 1: add a GitHub Action deploy + retire the Gen-1 pages** —
all local + previewed before any push. **Nothing has been pushed; the live
sites are still the old version.**

## Confirmed decisions
- **Keep the custom Jinja2 build** (`arseniykuzmin.github.io/dev`); drop Chirpy
  from the CV. Chirpy is parked for a **future blog** on `cvpage` branch
  `blog-chirpy` (+ the `chirpy` remote).
- **CV live at BOTH URLs** (arseniykuzmin.github.io and queezz.github.io) —
  a mirror, one source of truth.
- **Deploy via GitHub Action** (build on push, publish `dist/`) — not manual,
  not committed output.
- **User rules:** never push before testing locally. Commits: no
  `Co-Authored-By`; end with `agent: <model>` (see [`commit-culture.md`](commit-culture.md)).

## Assumed defaults (confirm with user; otherwise proceed on these)
- **Source of truth = `arseniykuzmin.github.io`** (build.py + freshest data already there).
- **Work on `dev`; when good, merge `dev`→`master`; the Action deploys from `master`.**

## Current state (2026-07-02)
- **arseniykuzmin.github.io**: on `dev` (`6fcc058` PASS 5). Working tree clean
  except a pre-existing `M cv.code-workspace` (**not ours — leave it**). `dist/`
  is committed and **reproduces zero-diff** from `build.py`. Phase 1 NOT started.
- **cvpage**: on `master`, **ahead of origin by 2** commits (both are `.agents/`
  notes — unpushed, per the "test before push" rule). Branches: local `master`
  + `blog-chirpy`; origin `master` + `blog-chirpy`; `chirpy/main` kept. All
  `codex/*` branches deleted.
- **Build venv**: `~/.venvs/cvsite` (python.org 3.14.5). Run:
  `~/.venvs/cvsite/Scripts/python arseniykuzmin.github.io/build.py`.

## Key technical note (read before Phase 1)
`build.py` currently writes **HTML only** into `dist/` and relies on
`base href="../"` to borrow `styles/`, `img/`, `scripts/`, `favicon`, `kaa.*`
from the repo root during local preview. For an Action to deploy `dist/` as a
standalone site, **build.py must assemble a self-contained `dist/`** (copy those
assets in; switch HTML to paths that work when `dist/` IS the site root). This
is the first real code change of Phase 1.

## Plan

### Phase 1 — build & deploy `arseniykuzmin.github.io` (all local + previewed; no push)
1. Upgrade `build.py` → **self-contained `dist/`** (copy `styles/`, `img/`,
   `scripts/`, `favicon.ico`, `kaa.*`, + any root-referenced assets; fix
   `base_href`/URLs for serving `dist/` at root).
2. Add `.github/workflows/pages.yml`: checkout → setup-python → `pip install -r
   requirements.txt` → `python build.py` → `actions/upload-pages-artifact`
   (path `dist/`) → `actions/deploy-pages`. Trigger: push to `master` +
   `workflow_dispatch`.
3. **Stop tracking build output**: `git rm --cached -r dist/`; add `.gitignore`
   (`dist/`, `__pycache__/`, `*.pyc`, `.venv/`). CI rebuilds it fresh.
4. **Retire Gen-1**: delete runtime-JS root pages (`index.html`,
   `conferences.html`, `projects.html`, `publications.html`, `project.html`,
   `projects/<slug>/index.html`) + the standalone scripts only they use;
   `backup.html`; dead `sidemenu.html/js/css` + `project_detail_ui.js`.
   **Verify nothing in `templates/` references a file before deleting it.**
5. **Fix canonical OG/meta** (currently point at `queezz.github.io`; set
   canonical per the "both live" split + cross-link).
6. **Rebuild + preview locally** (serve `dist/`); confirm parity with the live
   site before anything ships.

### Phase 2 — mirror to `queezz.github.io` (needs the user)
Extend the Action to also publish `dist/` to `queezz/queezz.github.io`. The
repos are under different accounts, so this needs a **cross-repo deploy token**
(PAT or deploy key) as a repo secret — **the user must create it** (agent can't;
`gh` isn't installed). Until then, `queezz.github.io` stays live on its current
content.

### Phase 3 — cosmetics / performance / UI regularity (against the clean build)
- **Perf:** ~13.9 MB of images (several 1–2 MB PNGs) → resize + WebP/AVIF +
  `srcset` (biggest win). Dedupe images duplicated across `img/` and
  `projects/<slug>/`.
- **CSS:** consolidate the 9 stylesheets; hoist the color/dark-mode palette to
  CSS variables; replace the `moveProfileIfNeeded` JS layout hack with CSS.
- **Regularity:** consistent section/figure/card spacing + type scale.
- Full findings: archaeology §5–§7.

## Things that need the user (don't block Phase 1)
- Confirm the two assumed defaults (source repo; `dev`→`master` deploy flow).
- Phase 2 deploy token for the queezz mirror.
- Push the 2 `.agents` commits on `cvpage/master` when ready.
- Whether the future blog stays on `queezz.github.io` or moves (affects the
  "both live" URL split).
