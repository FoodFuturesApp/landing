# Dataset and Food Wellbeing Index (FWI)

Source: Google Sheet "List of products" (13 tabs). Local copy: `data/sources/list-of-products.xlsx`, tabs as CSV in `data/sources/sheet-csv/`. Never edit the original sheet.

## Method in one paragraph

Environmental numbers come mainly from **Poore and Nemecek 2018** (Science, doi:10.1126/science.aaq0216), global averages per kg. They are converted to per 100 g of food (and per 100 g protein and per 100 kcal). Each of three impacts (carbon, water, land) is placed in one of six categories by its share of the maximum value in the table. The three categories are summed into a total score, which gives an environmental band. Combined with protein density, that gives an **Eat often / Eat sometimes / Eat rarely** label. Nutrition values are from USDA FNDDS 2021 to 2023 (provisional).

**Canonical tab:** the dev-team links doc points to "Final 6 ranks simplified" (gid 584536480). Use it as the current scoring table.

## Six-level scale

| Category | % of max | Letter | Meaning |
|---|---|---|---|
| Very Low | 0 to 5% | 1 / A | minimal |
| Lower | 5 to 15% | 2 / B | small |
| Moderate | 15 to 30% | 3 / C | medium |
| High | 30 to 50% | 4 / D | large, noticeable |
| Very High | 50 to 80% | 5 / E | heavy |
| Exceptional | over 80% | 6 / F | maximum |

Maxima used (per 100 g serving): carbon 10 kg CO2e, water 561 L, land 37 m2.

Total score (carbon + water + land categories, range 3 to 18): 3 to 8 Low environmental impact; 9 to 12 Moderate; 13 to 18 Higher.

Protein density bands (g protein per 100 kcal): 15 or more = Higher, 9 to under 15 = Moderate, under 9 = Lower. Other bands exist for protein per 100 g, calories per 100 g and saturated fat.

A traffic-light helper tab maps Green 0.75, Yellow 0.5, Red 0.25.

## Results in the "Final 6 ranks" tab

| Food | Carbon / Water / Land category | Total | Environment | Protein density | Label |
|---|---|---|---|---|---|
| Beef (beef herd) | 6 / 3 / 6 | 15 | Higher | Moderate | Eat rarely |
| Beef (dairy herd) | 4 / 4 / 2 | 10 | Moderate | not filled | Eat sometimes |
| Pork | 2 / 4 / 1 | 7 | Lower | Moderate | Eat often |
| Poultry | 2 / 2 / 1 | 5 | Lower | Higher | Eat often |
| Lamb | 4 / 4 / 6 | 14 | Higher | Lower | Eat rarely |
| Soy (tofu) | 1 / 1 / 1 | 3 | Lower | Moderate | Eat often |
| Fish | 2 / 5 / 1 | 8 | Lower | Moderate | Eat often |
| Prawns | 3 / 5 / 1 | 9 | Moderate | Higher | Eat sometimes |
| Vegan substitutes | 1 / 1 / 1 | 3 | Lower | Lower | Eat sometimes |
| Cheese | 3 / 6 / 3 | 12 | Moderate | Lower | Eat rarely |
| Egg | 1 / 2 / 1 | 4 | Lower | Lower | Eat sometimes |

The rule that turns total score and density into the label is **not written down** in the sheet. Observed pattern: low impact plus moderate or higher density gives often; low impact with lower density gives sometimes; higher impact gives rarely. Cheese (moderate, lower density, rarely) and prawns (moderate, higher density, sometimes) show density and saturated fat probably matter. Needs Joshua or Shreya to confirm before it is coded.

Selected raw values (per kg, Poore and Nemecek): beef herd 99.48 kg CO2e, 1451 L water, 326.21 m2 land; poultry 9.87 kg CO2e, 660 L, 12.22 m2; soy/tofu 3.16 kg CO2e, 149 L, 3.52 m2; cheese 23.88 kg CO2e, 5605 L, 87.79 m2; rice 4.45 kg CO2e, 2248 L; potato 0.46 kg CO2e, 59 L.

Teaching example used in LinkedIn: shrimp has much lower carbon than beef but much higher water, so it is "eat sometimes", not "eat often".

## Tabs

1. Final Data: main table, 5 impact types in several units (per kg, per 100 g, per 100 g protein, per 1000 kcal, per 100 kcal). Impacts: carbon, water, material footprint (column exists, empty), land, eutrophication.
2. Per 100 gms: 0 to 1 relative scores and "radius" and "threshold" values for the radial chart (carbon radius for beef 119.87).
3. 6 ranks simplified, 4. Final 6 ranks simplified: the scale above.
5. Provisional Nutrition Data: protein, calories, saturated fat per 100 g with bands. Example beef 27.13 g protein, 231 kcal, 5.22 g sat fat, density 11.74.
6 to 9. Carbon, Water, Land, Eutrophication tabs: per-impact scoring.
10. Category lookup (Green, Yellow, Red).
11. Data Resources List (below).
12. Notes on data wishes (below).
13. Nutrition: about 147 real menu rows for Chipotle (chicken, steak, barbacoa, carnitas, sofritas, beans, tortillas, rice, cheese, sour cream, queso with calories, portion and protein) and SweetGreens (tofu, chickpeas, avocado, chicken, cheese, fish and more). Impact columns are empty. These are the test venues behind the prototype (Chipotle is the mock outlet in the API).

## Coverage gaps (important)

- Blank rows (no data yet): beans (chickpea, kidney, pinto), cottage cheese, yogurt, rice noodles, couscous, quinoa, tortilla, sweet potato, milk, almond milk, oat milk (partly), and most fruit and vegetables (some filled: apples, bananas, berries, citrus, onions, peas, tomatoes).
- Carbs are only partly covered (rice, potato, wheat, corn, oatmeal). The plan says "pulses research + carb integration" is a Q4 task.
- Vegan substitutes use a different source (Bryant 2022) and have gaps (water 0, N/A scores).
- Data is global average, not U.S. or regional. Regional data is a stated goal.
- The sheet has a few inconsistencies between tabs (for example beef water category 2 in one tab, 3 in another). Treat the "Final 6 ranks" tab as current.

## Data Resources List

- Poore and Nemecek 2018, Science: global averages for 20+ food categories (also behind EAT-Lancet and Our World in Data).
- Smith et al. 2016, PLoS One: nutrient composition of food products.
- Siegrist et al. 2024: meat and milk substitutes.
- Our World in Data: food miles and transport; GHG per kg and per 100 g (used in the Climatebase Food and Ag lecture).
- Gephart et al. 2021, Nature: environmental impacts of fish and aquatic foods.

## Data wishes (notes tab)

Specific data for protein and carb foods; processed vs unprocessed (especially plant-based meat); organic vs non-organic (coffee); milk vs plant milks. Watch-outs: trade-offs between impacts. Possible labels: FairTrade, Rainforest Alliance, USDA Organic, animal welfare (cage-free), local. Market target: university students. Fruit and vegetable packaging and material footprint (waste vs packaging trade-off). Meat byproducts. Funding ideas (EAT-Lancet). How to follow menu changes seamlessly.

## Penn State menu (first menu source)

Checked 2026-10-15, public page, no login: https://www.absecom.psu.edu/menus/user-pages/daily-menu.cfm
- Pick a date (7 days shown), a meal (Breakfast, Lunch, Dinner, Late Night) and a location. Locations include University Park dining (East Food District @ Findlay, North @ Warnock, Pollock Dining Commons, South @ Redifer, West @ Waring) and many branch campuses (Altoona, Beaver, Behrend, Berks, Brandywine, Greater Allegheny, Harrisburg, Hazleton, Mont Alto, and more).
- Items are grouped by category (Entrees, Vegetables/Starches, Salad Bar, Desserts, Fruit Bar). One lunch at one location listed 85 items.
- Each item links to `nutrition-label.cfm?mid=<id>`, a page with serving size, calories, fat, saturated and trans fat, cholesterol, sodium, carbs, fibre, sugars, added sugars, protein, some vitamins and minerals, and the **ingredient list** (allergens must be read from it).
- No API was seen, so ingestion would mean parsing HTML. The Mural notes say to look at how to extract this data. The plan also says to secure permission to use a university's menu first, so ask Penn State Food Services before any automated pulling.
- Mapping menu items to the index needs a step that matches an item (for example "Fajita Chicken") to a protein or carb category in the sheet.

## Naming

Same index, several names: Food Wellbeing Index (FWI, plans and Mural), Food Wellbeing & Suffering Index (splash screen, prototype README), FWSI. The dataset also models animal welfare. Decide one public name.
