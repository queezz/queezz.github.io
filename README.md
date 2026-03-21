# CV site (dev branch) — Jekyll + Chirpy

This branch is a **Jekyll** site using the **[jekyll-theme-chirpy](https://github.com/cotes2020/jekyll-theme-chirpy)** theme. The `master` branch is the older, mostly static HTML layout; **dev** migrates the same content into Chirpy’s structure and tooling.

## What changed on dev

- **Theme and dependencies** — `Gemfile` pins `jekyll-theme-chirpy` (~> 7.4) and adds `jekyll-feed`, plus `html-proofer` for tests. Windows-oriented gems (`wdm`, `tzinfo-data`) support local file watching and time zones.
- **Configuration** — `_config.yml` sets `theme: jekyll-theme-chirpy` and enables Chirpy’s usual plugins (`jekyll-paginate`, `jekyll-seo-tag`, `jekyll-feed`, `jekyll-archives`), pagination, archive URLs, and optional PWA settings. Replace placeholder title, `url`, and social blocks with your real site metadata when you publish.
- **Navigation** — Sidebar tabs are Markdown files under **`_tabs/`** (e.g. blog, conferences, projects, publications, test).
- **Home / CV** — Main landing content lives in **`cv.html`**; **`index.html`** is adjusted for the Jekyll setup.
- **Reusable HTML** — Section bodies are split into **`_includes/`** (projects, publications, conferences, test list, etc.).
- **Blog** — Posts are **`_posts/*.md`** with normal Jekyll front matter.
- **Layouts and hooks** — **`_layouts/split.html`** and **`_plugins/posts-lastmod-hook.rb`** support the theme and post timestamps.
- **Deploy** — **`.github/workflows/pages-deploy.yml`** runs `bundle exec jekyll build` with `JEKYLL_ENV=production`, then runs **htmlproofer** on `_site`.

Standalone pages such as `projects.html`, `publications.html`, and `conferences.html` from the old layout are removed here in favor of tabs + includes.

## Prerequisites

- **Ruby** 3.x (CI uses 3.3). On Windows, [RubyInstaller](https://rubyinstaller.org/) with the MSYS2 devkit is a common choice.

## Run locally

From the repository root:

```powershell
bundle install
bundle exec jekyll serve
```

Open the URL Jekyll prints (typically [http://127.0.0.1:4000/](http://127.0.0.1:4000/)). For live reload while editing:

```powershell
bundle exec jekyll serve --livereload
```

Production-style build (closer to CI):

```powershell
$env:JEKYLL_ENV = "production"
bundle exec jekyll build
```

## Tests (optional)

After a build:

```powershell
bundle exec htmlproofer _site --disable-external --ignore-urls "/^http:\/\/127.0.0.1/,/^http:\/\/0.0.0.0/,/^http:\/\/localhost/"
```

(Match the flags in `.github/workflows/pages-deploy.yml` if you want parity with CI.)

## Note on `_site`

`_site` is the **generated** output directory. Prefer building locally or in CI and keeping `_site` out of version control unless you intentionally commit a static export.
