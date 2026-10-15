# Food Futures: quick context (read this first)

Updated 2026-10-15. Detailed notes are in `docs/context/2026-10-15-*.md`. Product basics: `docs/PRODUCT.md`.

## One line

A student-facing app that shows what meals do to climate, water and land next to nutrition, and helps people build lower-impact food habits. Motto: "Better, not perfect." Website: https://www.foodfuturesapp.com . Contact: info@foodfuturesapp.com .

## Stage and goal

Pre-launch. Q4 2026: web MVP and Penn State menu. Goal: 3 to 5 U.S. university partners and up to 500 active users in the pilot (Q4 2026 to Q1 2027). Model: B2B2C, universities pay. Applying to startup accelerators. Origin: EU Horizon ATARCA project (Finland), now in the Climatebase Fellowship.

## People

- Shreya Sood: founder, product strategy, UX/UI, main contact.
- Vineeth: web development and cloud/infrastructure (this workspace).
- Divyan: web development. Joshua: environmental dataset. Arshiya: university outreach.
- Rob Ratcliffe: owner of the earlier prototype repo. Armaan: contributor.

## How the product works (App Flow)

Scan QR or open link, sign up (OTP), then a starting-point Foodprint Calculator (food, frequency, portion), a weekly challenge, then pick an outlet (at home or campus venue), choose protein then carbs (or a whole dining-hall meal), see each option's impact and nutrition, record the choice with a **photo**, then see **individual and collective impact**. Wallet: tokens for good choices, redeemable at campus partners (idea stage).

## The index

Food Wellbeing Index (also written Food Wellbeing & Suffering Index). Carbon, water, land (plus eutrophication) from Poore and Nemecek 2018, per 100 g. Six levels A to F, summed to a total (3 to 18), plus protein density, giving **Eat often / sometimes / rarely**. Only about a dozen proteins are complete. Carbs, beans, dairy, produce are partly empty. The rule for the final label is not written down.

## Design

Pale lime background (#F5FFE1, #E2F0CE), green primary (#2D9B6F, #00A577), yellow and pink for mid and high impact, radial impact chart, hand-drawn icons, farm-animal art. App font Moderat. Impact levels: Lowest, Low, Moderate, High, Very High, Exceptional.

## Tech

Private prototype `rlratcliffe/food-futures`: Expo (React Native) plus FastAPI plus Supabase, mock data only, auth removed, Impact and Wallet screens unbuilt. Website: `website/` (hand-built copy of the Framer site), deploys from `main` to GitHub Pages. Public repo: FoodFuturesApp/landing.

## Where things are

- Website and Google application fixes: `docs/context/2026-10-09-google-startups-site-fixes.md`
- Pilot flyer and deck: `docs/context/2026-10-09-shreya-pitch-and-pilot-docs.md`
- Raw copies of sources (gitignored): `data/sources/`
- Events search agent: `docs/events-agent.md`

## Rules of this workspace

Ask before changing product facts or website copy. Never edit the source docs, sheet, Figma, Mural or the private repo. This repo is public: no personal contact details, no private code. Short, plain writing, no em dashes.

## Open questions

Platform (web only or app stores), pricing, which universities are in talks, who confirms the Eat often/rarely rule, whether the Fall 2026 and Q1 2027 pilot dates are the same pilot.
