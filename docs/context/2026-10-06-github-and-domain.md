# GitHub and domain

Set up 2026-10-06.

- GitHub org: https://github.com/FoodFuturesApp (free plan). `foodfutures` was taken.
- Repos:
  - `landing` (public): this workspace, with full history. The free plan only serves Pages from public repos, so `docs/` is public too. `data/` stays out.
  - `frontend` (private): README only for now.
  - `backend` (private): README only for now.
- Hosting: GitHub Pages deploys `website/` on every push to `main`. The custom domain is www.foodfuturesapp.com; foodfuturesapp.com redirects to www.
- DNS at GoDaddy: `www` CNAME `foodfuturesapp.github.io`, and `@` A records 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153. Email records (Microsoft 365) are unchanged.
- The old GoDaddy Website Builder site ("Food Futures App") no longer serves the domain. It still exists in GoDaddy.
- Money rule from Vineeth: never buy, upgrade, renew, or enable anything paid on GitHub or GoDaddy. Ask first.
