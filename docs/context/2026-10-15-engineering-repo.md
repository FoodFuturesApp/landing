# Prototype repo: rlratcliffe/food-futures

Private GitHub repo (about 3 MB, default branch `main`, last update 2026-06-03). Owned by Rob Ratcliffe, with a merged branch from Armaan (`armaan_wip`). The clone was shallow, so authorship of the rest is unknown. Local read-only shallow clone: `data/sources/food-futures-repo/`. **Do not copy its code into this public repo.** The plan says to reuse it ("reuse code from the previous Rob's repo") inside a FoodFutures-controlled org.

## Stack

- Frontend: React Native with Expo (SDK 55) and Expo Router, React 19, TypeScript, react-native-svg, reanimated, axios. Runs in the browser (`w`), Android or iOS.
- Backend: Python FastAPI with Supabase (Postgres and storage) client. Docker Compose for local run.
- Auth: Clerk provider code exists (`backend/app/auth/clerk.py`), but auth is currently removed from the app ("click through the signin").
- README title: "Food Futures: Food Wellbeing & Suffering Index".

## What works and what does not

- `backend/app/main.py` swaps between real and mock routers. **Mocks are active** (`locations_mock`, `users_mock`). The backend is described as "temporary for development because I needed some kind of data to test with".
- Mock data: two locations (At home, Chipotle in San Francisco); Chipotle proteins (Sofritas often, Chicken sometimes, Steak rarely, Everything Burrito rarely) and a carb (Chips). Footprint numbers in the mock are marked "not accurate, just guessing".
- API (see `backend/openapi.yaml`): list locations; menu items by location and type (proteins or carbs); menu item detail; save protein and carb for a date; upload a meal photo for a date; wellbeing feature lookup (for example Heart Healthy, Ethical Farmed with certifier names).
- Screens built: onboarding carousel (5 steps), auth, choose outlet, lunch menu (with the radial chart, impact scale, accordion items, allergen icons), take picture, style guide (long-press the avatar in dev).
- Screens "under development": Impact history, Wallet.
- Design system: composable components in `frontend/components/design-system` (Button, BottomSheet, PieChart, SegmentedControl, Typography, many icons including allergens). Tokens in `frontend/constants/theme.ts`.
- Repo has its own CLAUDE.md with that team's working preferences (succinct, one question at a time, multi-user production mindset, use design tokens).

## Gaps to the plan

- No real database schema in the repo (no SQL or migrations seen), no real menu ingestion, no calculator, no scoring code, no goals or challenges, no photo validation logic (upload only), no analytics.
- Plan is web-first and the sheet scoring is not implemented in code.
- Infra: plan wants a FoodFutures-controlled GitHub org and Google Cloud project. Org `FoodFuturesApp` exists (the website repo lives there).

## Suggested first moves (not decided)

1. Move or fork the prototype into `FoodFuturesApp` (private), keep history.
2. Turn the "Final 6 ranks" sheet into a versioned JSON or table plus a scoring function with tests.
3. Replace mocks with the Penn State menu pipeline.
4. Build the Foodprint Calculator (high priority in the plan).
