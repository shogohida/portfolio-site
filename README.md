# Shogo Hida — Portfolio Site

Static, dependency-free portfolio (HTML/CSS/vanilla JS — no build step) with an EN/JP
language toggle and light/dark theme. Content is based on `Shogo_Hida_CV.docx` (EN) and
`職務経歴書 小森翔吾.docx` (JA), plus four featured personal projects.

## Run locally

```bash
cd portfolio-site
python3 -m http.server 8000
# open http://localhost:8000
```

No build step, no dependencies — any static file server works.

## Deploy: Cloudflare Pages (recommended — $0/month)

Free tier covers this site completely: unlimited bandwidth/requests, global CDN,
automatic HTTPS, and automatic redeploys on every `git push`.

1. Push this folder to a **new GitHub repo** (public or private, either works):
   ```bash
   cd portfolio-site
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/shogohida/portfolio-site.git
   git push -u origin main
   ```
2. Go to the [Cloudflare dashboard](https://dash.cloudflare.com/) → **Workers & Pages**
   → **Create application** → **Pages** → **Connect to Git**.
3. Select the `portfolio-site` repo. Build settings:
   - Framework preset: **None**
   - Build command: *(leave empty)*
   - Build output directory: `/`
4. Deploy. You'll get a free `https://portfolio-site-xxx.pages.dev` URL immediately —
   this is already a permanent, always-on public URL suitable for a resume/LinkedIn link.
5. **Optional custom domain** (e.g. `shogohida.dev`): buy a domain (~$10–15/year — Cloudflare
   Registrar sells at wholesale cost, no markup) and add it under the Pages project's
   **Custom domains** tab. DNS + SSL are handled automatically.

**Total cost: $0/month**, or ~$1–1.5k JPY/year if you add a custom domain. No server to
maintain, no uptime risk from a sleeping free-tier VM — it's served from Cloudflare's CDN.

## Alternative: GitHub Pages ($0/month, simplest setup)

If you'd rather not create a separate Cloudflare account:

1. Push this folder to a **public** GitHub repo (GitHub Pages requires a public repo on
   free personal accounts).
2. Repo → **Settings** → **Pages** → Source: `Deploy from a branch` → `main` / `/ (root)`.
3. Site is live at `https://shogohida.github.io/portfolio-site/` within a minute or two.

Cloudflare Pages is still the better default: no requirement to make the repo public,
faster global CDN, and cleaner custom-domain support — but GitHub Pages is one click if
you want to skip creating another account.

## Important: make the featured project repos public

The four project cards link to:
- `https://github.com/shogohida/ghg-rag`
- `https://github.com/shogohida/incident-agent`
- `https://github.com/shogohida/raftkv`
- `https://github.com/shogohida/cleanarchguard`

These exist locally in `~/Downloads/` with a GitHub remote already configured, but **none
of them have been pushed yet** — the URLs currently 404. Push each one before sharing the
portfolio link with recruiters:

```bash
cd ~/Downloads/ghg-rag && git push -u origin main
cd ~/Downloads/incident-agent && git push -u origin main
cd ~/Downloads/raftkv && git push -u origin main
cd ~/Downloads/cleanarchguard && git push -u origin main
```

(`ecocopilot` also has a `.git` set up locally but no remote configured, and `policydiff`
has no git repo at all yet — neither is currently linked from the site, so no action is
needed unless you want to feature them too.)

## File structure

```
portfolio-site/
├── index.html    All page content (EN baked in as default, JA in .ja spans)
├── style.css     Design system: colors, layout, responsive rules
├── i18n.js       Language toggle + theme toggle (localStorage-persisted)
├── assets/
│   ├── Shogo_Hida_Resume_EN.docx
│   └── Shogo_Hida_Resume_JA.docx
└── README.md
```

To edit content, just edit `index.html` directly — English text lives in `<span class="en">`
elements, Japanese in `<span class="ja">`, right next to each other.
