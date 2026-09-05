# phoebezlin.com

Static personal site. No build step, no framework, no server. Four pages of plain
HTML that read their copy from a single file.

Live at https://www.phoebezlin.com — served by GitHub Pages from the `main` branch.

---

## Structure

```
index.html                     →  /
writing/index.html             →  /writing
about/index.html               →  /about
work/agentic-hub/index.html    →  /work/agentic-hub
content.js                     all site copy
support.js                     rendering runtime (do not edit)
images/                        photos and screenshots
files/                         résumé PDF and other downloads
CNAME                          the custom domain, required by GitHub Pages
.nojekyll                      tells GitHub Pages to serve files as-is
```

Folder-per-page is what keeps `.html` out of the URLs. To add a page, make a new
folder with an `index.html` inside it.

---

## Editing content

Everything a visitor reads lives in **`content.js`**. Open it on GitHub, edit the
text between the quotes, commit. The site rebuilds within a minute.

The shape of the file:

| Key | What it controls |
| --- | --- |
| `name`, `email`, `footerNote` | Used across all pages |
| `home.intro` | The opening paragraph |
| `home.projects[]` | Project list. Each has `slug`, `title`, `date`, `shots`, `teaser` |
| `writing.entries[]` | Papers. Each has `title`, `date`, `venue`, `authors`, `blurb` |
| `about.bio`, `about.links[]` | About page intro and utility links |
| `about.beliefsTitle`, `about.beliefs[]` | The beliefs section |
| `about.resume[]` | Roles, grouped by year |
| `caseStudies` | One entry per project slug — see below |

Rules that matter: keep the keys and the quotes, change only what's inside them.
Add or remove items in a `[ ... ]` list to add or remove entries. A trailing comma
after the last item in a list will break the page, so watch for it.

### Adding a case study

Each project's `slug` in `home.projects` maps to a key in `caseStudies` and to a
folder under `work/`. To add one for, say, `analytics`:

1. In `content.js`, copy the whole `"agentic-hub"` block inside `caseStudies` and
   rename the key to `"analytics"`. Edit its text.
2. Copy `work/agentic-hub/index.html` to `work/analytics/index.html`. No edits
   needed — the page reads its slug from the folder name.
3. Optionally update the `<title>` and `og:` tags in the new file's `<head>`.

A project without a matching `caseStudies` key falls back to the first study, so
links never 404.

---

## Adding images

Drop files into `images/` and reference them as `/images/name.jpg`.

Export at final size before committing: **2000px on the long edge, 200–400 KB**
each, JPEG for photos and PNG for UI screenshots. The repo is the CDN here, so
uncompressed exports cost every visitor load time.

The portrait on the About page is `/images/portrait.jpg` — replace the file and
keep the name to swap it.

Project and case-study image blocks currently render as placeholders. In
`content.js`, `home.projects[].shots` sets how many appear per project, and
`caseStudies.<slug>.gallery[]` defines the case study grid — each line's `col`
is how many of six columns wide it sits, `ratio` is its shape.

The résumé and any other downloads go in `files/`, linked as `/files/name.pdf`
from `about.links` in `content.js`.

---

## Deploying

Already wired: push to `main` and GitHub Pages publishes. First-time setup, for
reference:

1. **Settings → Pages** → Source: *Deploy from a branch* → `main` / `/ (root)`.
2. Custom domain: `www.phoebezlin.com`. The `CNAME` file in this repo records it.
3. At Squarespace, in the domain's DNS settings:

   | Type | Name | Value |
   | --- | --- | --- |
   | CNAME | `www` | `yourusername.github.io` |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |

   The CNAME serves www. The A records let the bare domain resolve, and GitHub
   redirects it to www. Verify those IPs against GitHub's current docs — they
   change rarely, but they do.
4. Tick **Enforce HTTPS** once the certificate issues, usually within the hour.

### One caveat

Asset paths are root-absolute (`/support.js`, `/content.js`, `/images/...`), which
is correct for a custom domain at the root. They will *not* resolve on a
`username.github.io/reponame` preview URL. Test on the real domain, or locally:

```
cd site && python3 -m http.server 8000
```

then open `http://localhost:8000`.

---

## Still to do

- Real images in `images/`, résumé PDF in `files/`
- `favicon.ico` at the repo root
- `images/og.png` — 1200×630 social preview, referenced by every page's `<head>`
- Case study copy for the remaining four projects
- Optional: self-host the three Google Fonts (Newsreader, Karla, JetBrains Mono)
  to drop the external request
- Optional: analytics — Plausible or Fathom, one script tag in each page's `<head>`

---

## How it works, briefly

Each page is a normal HTML document that loads `support.js`, a small runtime that
renders the markup and fills in values from `content.js`. Theme preference (light
or dark) persists in `localStorage`; home-page scroll position is restored when
you come back from a case study. There is no JavaScript framework, no bundler, and
nothing to install.
