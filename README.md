# srdphub.com — production site (SRDP identity v1.0)

This repo **is** the live website. GitHub Pages serves branch `main`, folder `/`,
on the custom domain **srdphub.com** (`CNAME`; HTTPS enforced, certificate
renews automatically). **A push to `main` is live within about a minute.**

Plain static HTML/CSS/JS, no build step. Preview locally with
`python3 -m http.server 8766` in this folder and open http://localhost:8766.

For anything partners care about (profiles, cases, positioning) use a branch
and a pull request so the other partners can review; typo fixes can go
straight to `main`.

The older repo `srdp-hub/srdphub.com` is **archived**; don't publish there.

## What's here

| File | Purpose |
|---|---|
| `index.html` | Home — hero, problem, what-is-SRDP, 3 steps, switchability, cases, partners band, client-first CTA |
| `cases.html` | SEIN (`#sein`), Intrakoop (`#intrakoop`) — DHD PLUGIN temporarily archived in `_archive/dhd-plugin-case.html` |
| `partners.html` | Cooperative model, four founding-partner profiles **with links**, "Same direction" (Rijks ICT Gilde + Mozilla — moved here from the homepage) |
| `contact.html` | **For organisations** — the prominent CTA target ("Praat met een partner"), single form + what-happens-next |
| `join.html` | For professionals (`#consultant`) and MSPs (`#msp`) — quieter, two forms |
| `404.html` | Not-found page (GitHub Pages picks it up automatically) |
| `assets/` | tokens.css (design tokens v1.0 — single source of truth), site.css, site.js, logos, partner logos, Mozilla motifs, favicon, og-image |
| `CNAME` / `robots.txt` / `sitemap.xml` / `llms.txt` | Domain + crawler/GEO files |
| `_archive/` | Parked content (DHD PLUGIN case). Not published: Jekyll skips folders starting with `_`. **Do not add `.nojekyll`**, or it goes live. |

## Before launch — to do

1. **Forms**: live via Formspree (form ID `xpqeozlb`); each form sends a hidden
   `audience` field (client / consultant / msp) so submissions can be filtered.
   Confirm the Formspree form delivers to hello@srdphub.com.
2. **Mailbox**: hello@srdphub.com is shown site-wide — make sure it exists.
3. **Partner sign-off**: profiles on `partners.html` and case copy on
   `cases.html` are draft (flagged on-page with a dashed note — remove the
   `draft-note` elements once approved).
4. **Partner logos**: only Timformatie has a logo; the other three render as
   wordmarks until logos are supplied (drop into `assets/partners/`, swap in
   `partners.html` + `index.html`).
5. **Fonts**: loaded from Google Fonts CDN for simplicity. Brand guideline says
   self-host (all OFL) — consider downloading Mozilla Headline / Mozilla Text /
   JetBrains Mono into `assets/fonts/` later and replacing the `<link>` tags.

## SEO / GEO notes

- Both languages live in every page's HTML (NL default, EN via the toggle —
  persisted in localStorage). Crawlers and AI engines see both.
- Per-page `<title>`, meta description, canonical, Open Graph + `og-image.png`.
- JSON-LD: Organization + WebSite (home), ContactPage, AboutPage, CollectionPage.
- `llms.txt` gives AI engines a citable summary; `sitemap.xml` + `robots.txt` for crawlers.
- If real `/en/` routes are ever wanted for SEO, generate them from these pages
  and add `hreflang` links; keep the toggle UX.

## Brand rules (SRDP identity v1.0; tokens in `assets/tokens.css`)

- Fonts: Mozilla Headline (display), Mozilla Text (body), JetBrains Mono (labels).
- Ink `#161616` on paper `#FBFAF6`; **cyan `#7DEDF6`** is THE accent (surface
  only — text-safe companion is deep blue `#006BD4`). One accent at a time.
- Hard offset shadows (`8px 8px 0` cyan), 2px ink borders, tight radii,
  marker highlights (`.mark`), Mozilla motifs as CSS masks. No gradients/glows.
- Logo: branching-nodes icon + Mozilla Headline wordmark. On cyan backgrounds
  use the all-ink icon. Never typeset extra text against the lockup.
- **Rijks ICT Gilde** stays framed as a *kindred mission*, never a partnership.
- Keep the Mozilla Foundation credit in the footer of every page.
- Founding partners always alphabetical: Factful, @kapitan, KundoLabs, Timformatie.
