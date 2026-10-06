# Food Futures workspace

Vineeth's work for Food Futures. The product is an app that helps people make everyday food choices that are better for them and the planet (see `docs/PRODUCT.md`). This folder holds everything: context, data, the website, and later the product itself.

This is a company project, separate from the OSS contribution workspace. The OSS rules (target repos, contribution docs, dashboards) do not apply here.

## Layout

- `website/`: the marketing site, a hand-built copy of https://foodfutures.framer.website/ (plain HTML, CSS, JS; no build step). `website/README.md` explains how it maps to the original.
- `docs/PRODUCT.md`: what we know about the product, plus open questions. Update it as Vineeth shares context.
- `docs/DESIGN.md`: the design system pulled from the live site. Tokens live in `website/styles.css` `:root`.
- `docs/context/`: notes, briefs, meeting notes, anything Vineeth shares. One file per topic, dated.
- `data/`: raw data Vineeth provides. Gitignored; never commit it unless he says so.
- `tools/parity/`: checks the local website against the live Framer site.
- `.claude/skills/`: `website-parity` and `framer-extract`.

## Run the website

```sh
cd website && python3 -m http.server 8000   # then open http://localhost:8000
```

Every push to `main` deploys `website/` live to https://www.foodfuturesapp.com (GitHub Pages, `.github/workflows/pages.yml`). This repo is public: https://github.com/FoodFuturesApp/landing.

## Working rules

- Read `docs/PRODUCT.md` and the newest files in `docs/context/` before starting work. Treat them as the source of truth over anything guessed.
- When Vineeth gives new context or feedback, record it in `docs/context/` (or update PRODUCT.md) in the same session, so the next session starts with it.
- Ask before changing product facts, claims, or copy on the website.
- Never buy, upgrade, renew, or enable anything paid on GitHub or GoDaddy (no paid plans, add-ons, or trials that need a card). Stop and ask Vineeth.
- Keep this folder off iCloud-synced locations (Desktop, Documents). Files there get evicted and reads stall.
- Commits are authored as `Vineeth Sai <vineethsai4444@gmail.com>`.
- Writing: short, plain, lead with the answer. No em dashes.
