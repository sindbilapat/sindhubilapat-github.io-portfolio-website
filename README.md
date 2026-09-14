# Sindhu Bilapati — Portfolio Website

A one-page portfolio site built from the "Sindhu Bilapati Engineering Portfolio" document, covering all 10 projects, technical skills, and leadership experience.

## Files

```
index.html          the whole site
css/style.css        styles
js/script.js         nav toggle, project modal, filters, scroll effects
assets/images/       project + headshot photos (already compressed for web)
```

Everything is plain HTML/CSS/JS — no build step, no dependencies to install.

## Preview it locally

Just double-click `index.html`, or from a terminal in this folder run:

```
python3 -m http.server 8000
```

then open `http://localhost:8000` in a browser.

## Publish it on GitHub Pages

1. Create a new repository on GitHub (for example `sindhu-portfolio`), or use an existing one.
2. Copy all the files in this folder (`index.html`, `css/`, `js/`, `assets/`) into the root of that repository.
3. Commit and push:
   ```
   git add .
   git commit -m "Add portfolio site"
   git push
   ```
4. On GitHub, go to the repo's **Settings → Pages**.
5. Under "Build and deployment," set **Source** to **Deploy from a branch**, pick the branch (usually `main`) and folder `/ (root)`, then click **Save**.
6. GitHub will publish the site at `https://<username>.github.io/<repo-name>/` within a minute or two.

If you'd rather the site live at `https://<username>.github.io/` directly (no repo name in the URL), name the repository exactly `<username>.github.io` and put these files at its root.

## Things you'll likely want to personalize

- **Contact info / links** — email, phone, and LinkedIn are in `index.html` (search for `bilapatisindhu@gmail.com`) and also appear in the hero and footer.
- **Photos** — swap any file in `assets/images/` (keep the same filename, or update the `src`/`data-project` references in `index.html`).
- **Project text** — the short card blurbs live in `index.html`; the full objective/work/outcome/tools text for the pop-up modal lives in the `projects` object near the top of `js/script.js`.
- **Colors** — all colors are CSS variables at the top of `css/style.css` (`--brand-navy`, `--sage`, etc.), so re-theming is a find-and-replace of a few hex values. Dark mode is already handled — it follows the visitor's system setting automatically.
- **Resume/CV** — there's no download-resume button yet; if you want one, drop a PDF into `assets/` and add a button next to "Get in touch" in the hero.

## Notes

- The site is fully responsive (phone/tablet/desktop) and supports light and dark mode automatically based on the visitor's system setting.
- Clicking any project card opens a detail view with the full objective, process, outcome, and tools — no page reload, no extra libraries.
