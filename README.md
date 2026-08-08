# Shogo Hida — Portfolio Site

**Live: https://shogo-hida-portfolio.pages.dev**

Static, dependency-free portfolio (HTML/CSS/vanilla JS — no build step) with an EN/JP
language toggle and light/dark theme. Content is based on `Shogo_Hida_CV.docx` (EN) and
`職務経歴書 小森翔吾.docx` (JA), plus five featured personal projects.

Deployed on Cloudflare Pages (free tier). Source: https://github.com/shogohida/portfolio-site

## Run locally

```bash
cd portfolio-site
python3 -m http.server 8000
# open http://localhost:8000
```

No build step, no dependencies — any static file server works.

## Deploy: Cloudflare Pages (recommended — $0/month)

**Current status:** deployed via direct upload (`wrangler pages deploy`), source pushed to
GitHub at https://github.com/shogohida/portfolio-site. This gets you a permanent, always-on
public URL immediately, but **is not yet wired to auto-redeploy on `git push`** — see
"Redeploying" below for both options.

Free tier covers this site completely: unlimited bandwidth/requests, global CDN, automatic HTTPS.

### Redeploying after edits

**Option A — manual redeploy (what was used to stand this up):**
```bash
cd portfolio-site
npx wrangler pages deploy . --project-name=shogo-hida-portfolio --branch=main
```
Run this any time you edit `index.html`/`style.css`/`i18n.js` and want the live site updated.

**Option B — connect Git for automatic redeploys on every push** (one-time dashboard setup,
requires authorizing Cloudflare's GitHub App on your account):
1. [Cloudflare dashboard](https://dash.cloudflare.com/) → **Workers & Pages** →
   `shogo-hida-portfolio` project → **Settings** → **Builds & deployments** → **Connect to Git**.
2. Select the `shogohida/portfolio-site` repo, branch `main`. Build settings:
   Framework preset **None**, build command empty, output directory `/`.
3. From then on, `git push` to `main` redeploys automatically — no more manual `wrangler` calls.

**Optional custom domain** (e.g. `shogohida.dev`): buy a domain (~$10–15/year — Cloudflare
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

## Featured project repos — status

The six project cards link to, all confirmed public:
- https://github.com/shogohida/ghg-rag
- https://github.com/shogohida/incident-agent
- https://github.com/shogohida/raftkv — plus a live demo at https://raftkv-demo.onrender.com
- https://github.com/shogohida/sqllab — plus a live demo at https://sqllab-demo.onrender.com
- https://github.com/shogohida/cleanarchguard
- https://github.com/shogohida/routelab — plus a live demo at https://routelab-demo.onrender.com

`raftkv`, `sqllab`, and `routelab` are deployed for free on Render (`render.yaml` in each
repo, no Docker, no credit card required for the free plan). Free-tier services sleep
after 15 minutes of inactivity — the first request after a sleep takes a few seconds to
wake up. `routelab`'s demo has been observed intermittently 404-ing well past the normal
wake-up window (an underlying Render free-tier flakiness, not an app bug — the same
request against the same warm instance succeeds moments later); if it happens, retry
after a few seconds.

`ghg-rag`, `incident-agent`, and `cleanarchguard` are GitHub-only: each either needs a
metered LLM API key on a public endpoint (cost/abuse risk) or, in `cleanarchguard`'s
case, has no browser UI to demo — see each repo's own README for why.

`ecocopilot` also has a `.git` set up locally but no remote configured, and `policydiff`
has no git repo at all yet — neither is currently linked from the site. `ecocopilot`
specifically can't get a free public demo either: its default local LLM
(`qwen2.5:14b-instruct` via Ollama) needs 8–12GB RAM, far beyond any free hosting tier.

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
