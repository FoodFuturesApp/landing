# Plan, goals, roles and roadmap

From the Project Execution Plan, the Project Proposal (2026-10-12) and the Mural board.

## Project

- **Name:** FoodFutures U.S. Pilot. Location: U.S.
- **Business model being tested:** B2B2C. Universities pay (institutional annual pricing), students use the app.
- **Contact for the project:** Shreya Sood (founder, product). Company inbox: info@foodfuturesapp.com.

## Goals

**Primary:** launch and validate FoodFutures with 3 to 5 U.S. university partners, up to 500 active users.

**Secondary:** find product-market-fit signals, implementation barriers, university willingness to pay, student engagement patterns, and what scaling past the pilot needs.

Proposal goal list:
1. Dev: web MVP ready for real student use (Q4 2026).
2. Biz: learn university requirements on dining data, privacy, implementation, reporting, procurement.
3. Data: analyse other proteins and regional data.
4. Q1 2027: secure 3 to 5 pilot or design partners.
5. Q1 2027: test whether students use it repeatedly.
6. Validate the Food Wellbeing Index and the impact-tracking experience.
7. Test willingness to pay, find a viable annual institutional price.
8. Produce results and case studies for fundraising and partnerships.

## Scope

**Q4 2026**
1. Tech: build and deploy FoodFutures as a web-based platform, starting with the Penn State menu.
2. Biz: apply to startup accelerators, improve go-to-market, get the student surveys filled.
3. Social media marketing (organic for now).
4. Data: U.S.-specific data research, pulses research, carb integration.
5. Design: milestones and habit tracking.

**Q1 2027:** evaluate, A/B test, iterate; test the business model; partner reporting and pilot evaluation.

## Quality bar

- Dev: basic foundation check; onboarding (done); web app vs app store (leaning web app); Personal Foodprint Calculator (high priority); integrate the latest Food Wellbeing Index for proteins and carbs; decide where to automate; decide where to use AI (for example photo validation).
- Biz, data, design: impact information a non-expert can understand; one consistent environmental method, including the science-based segment.

## Technical spec (planned)

- Infrastructure: a FoodFutures-controlled GitHub org (now `FoodFuturesApp`), a FoodFutures-controlled Google Cloud project, production and development environments, domain-connected web app, populated website.
- Core systems: user authentication; menu and food database (Penn State daily menu: https://www.absecom.psu.edu/menus/user-pages/daily-menu.cfm); Food Wellbeing Index and nutrition data; starting-point calculator and goal setting; meal logging; individual impact history; community and campus aggregate impact; basic analytics.
- Data and privacy: collect only what the product needs; avoid unnecessary student PII; access controls; document data sources and calculation methods; give pilot partners privacy and data-handling information.

## Roles (resource allocation)

| Area | Owner |
|---|---|
| Product strategy, UX and UI | Shreya |
| Web development | Vineeth and Divyan |
| Environmental dataset | Joshua |
| University outreach | Arshiya |
| Cloud and infrastructure | Vineeth |
| Pilot analytics | All |

Rob Ratcliffe wrote the earlier prototype repo (see engineering note).

## Communication plan (proposed, marked "?" in the doc)

Core team weekly 30 to 45 min; developers weekly build review plus GitHub issues; biz biweekly pilot check-in; data weekly; advisors monthly.

## Milestones (Proposal)

- Dev: Foodprint Calculator launched; home screen interaction implemented.
- Data: global average data (done); start finding regional data.
- Biz: secure partnership or permission to use a university's menu; get surveys filled; move closer to a Q1 pilot launch; build social presence.
- Design: habit-tracking features; milestone feature.
- High level: accelerator ("AccelerTOR" in the doc) and mentorship.
- The Execution Plan schedule table is mostly empty (only 4 task names, no dates).

## Mural roadmap (one quarter, weeks from Oct 12 to Dec 28, 2026)

Lanes: Foundation Check, Foodprint Calculator, Venue Selection Feature, Integrating Menu, "Duplication FoodWellbeing Index" (likely means replicating or implementing the index), Photo Validation, Other.

Sticky notes (all near the week of Oct 12 to Oct 26):
- "Set up we flow doc + links doc"
- "github repo, reuse code from the previous Rob's repo"
- "Look at how to extract Penn State's menu data into the app"
- "Make asset SVG folder", "remove beef from calculator", "Edit the bottom navigation bar", "Try making connections at Chipotle", "App design for carbs also"

Bars still say "Task / initiative". Approximate timing from their position:

| Lane | Approx. window |
|---|---|
| Foodprint Calculator | late Oct to about Nov 22 |
| Venue Selection Feature | early Nov to about Nov 22 |
| Integrating Menu | mid Nov to about Dec 13 |
| FoodWellbeing Index | late Nov to about Dec 6 |
| Photo Validation | early to mid Dec |
| Other | mid to late Dec |

## Pilot offer to universities (from the flyer)

No-cost Fall pilot for early U.S. campus partners. Asks of a campus: connect dining systems (ideally by API) for ingredients and allergens, circulate the student survey, include QR sign-up in Welcome Week and posters. Data on food items and student eating habits is shared only with university leadership.

## Open questions

- Which universities are in talks besides Penn State? Who at Penn State?
- Exact dates in the schedule table.
- Is the "Fall 2026 pilot" in the flyer the same as the "Q1 2027" pilot in the plan? Dates look inconsistent.
- Pricing idea for universities (nothing written yet).
