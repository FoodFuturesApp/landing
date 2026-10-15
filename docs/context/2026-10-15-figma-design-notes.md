# Figma design notes: "landing page gif"

File: https://www.figma.com/design/9jucEqMzOnVSNnV7VM01GE/landing-page-gif (view only; never edit). Despite the name, it holds the whole product design, flows and marketing art. Three pages: **Page 1**, **FF**, **Biochar**.

## Page "FF": the product design (most important)

### App Flow (frame, 12036 x 5827)

Legend: blue circle = starting point, green = key action, blue box = screen not created yet, purple = future features, pink = edge case.

1. **Entry:** open link or scan QR code, then "Welcome to Food Futures" (onboarding screens), then Log in / sign up (new user: create account with OTP verification; returning user: login), then account verified.
2. **Create your Starting Point** (can skip): FoodPrint Calculator (select food, frequency, portion size), review answers (edit, add, remove), "Your estimated weekly Foodprint" (carbon, water, land, biodiversity, nutrition key insights), personalised recommendation ("one small swap, big difference"), set a weekly challenge (accept, choose another, or skip for now).
3. **Explore / Home (choose outlet):** browse menu, protein first when eating at home.
   - Home: separate protein and carbs. View protein options, then Select option or Learn More ("if user wants to understand impact better"), Protein Details (food wellbeing index and nutrition density, allergens, other wellbeing features), Protein Selected, then View Carbs Options with the same pattern, Carb Details, Carb Selected, Meal Summary, then Record this choice (take photo, upload or manual entry).
   - Dining Hall: the whole meal is selected. Choose meal (combined option available), Select option (if only protein is selected, redirect to carbs) or Learn More, Meal Details (food impact, nutrition, ingredients, allergens), Meal Summary, Record this choice.
4. **Validate by Photo** (camera, gallery or receipt), Confirm Choice, Choice registered, View Progress / Impact.
5. **Impact:** Individual (your meals, impact vs baseline, challenge progress) and Collective (community impact, aggregate data).

Other FF layers: Onboarding, "Registration?", "Let's get started with the app!", Register with Facebook / Google, Starting point quiz Q1 to Q6 and quiz start (the "i" button on skip explains why), Goals home page, Making food selection, Impact Tracking, Redeem, "Future Ideas", Sign In inspiration, Full design. Reference screenshots include Atoms (the Atomic Habits app) for habit tracking.

A Figma Make prompt is stored: "Create a habit tracking page for high, medium and low impact meals with ability to view daily, weekly and monthly reports. Design keeping in mind that there are days when the user will validate 1 meal, 2 or sometimes all 3. Also add an option where user can add their sustainability efforts such as composting."

### Screens seen in "Full design"

- **Lunch menu card:** header avatar "RealGreenMe" with Water use / Animal welfare tags; outlet picker ("UniCafe Kaivopiha", "Eating at home"); date strip; each dish shows allergens and ingredients dropdowns, "Protein source: Plant-based / Chicken / Pork", an **Eat often / Eat sometimes / Eat rarely** tag, a **radial (polar) chart**, and a green "Choose this option" button. Example dishes: Seitan-vegetable sauce (Best option), Gochujang Lentil Stew, Crispy Chicken Patties with Mango Sauce, Meatballs and Creamy Dijon Sauce.
- **Radar axes:** carbon footprint, material footprint, water footprint, land use, animal welfare, packaging waste, calories, nutrition, protein. Colour = impact category, filled area = magnitude. Each ring is an impact level; "Lower scores A to B are better for the environment."
- **Lunch impact (weekly):** vertical bar from green to red with "your weekly lunch impact" vs a "recommended carbon budget" and an "average" lunch marker (small text, not fully legible); weekly summary tiles such as "4 plant-based meals, 2 chicken meals, 1 cheese meal"; CO2e per 100 g protein scale: plant-based 200 g, fish 300 g, chicken 380 g, pork 570 g, cheese 1300 g, beef 1900 g.
- **Lifestyle screen:** "Your consumption pattern compatibility with 1.5 degree lifestyle", with markers 1.5, 2.2, 2.8, 1.8 and a "See Breakdown" button.
- **Wallet / Redeem:** "Redeem your tokens" with offers (leftover food from Sodexo for 30 tokens, coffee from any Unicafe for 15 tokens). A note says it is "Still including, but need to figure out how". So **My Wallet = tokens earned for good choices, redeemable at campus partners.**
- **Beef detail card:** "BEEF", "Eat Rarely", "A high impact protein with moderate protein density", "Overall: Higher Environmental Impact", Carbon / Water / Land footprint each "High | 122" on a Lowest, Low, Moderate, High, Very High, Exceptional scale. Comparison chips like "3x lower carbon impact", "93x lower land use", "Lowest-impact protein".
- **Splash:** logo "FOOD WELLBEING & SUFFERING INDEX", links "I'm a new user" and "I'm already a user. Sign me in", cartoon cow, sheep, bird, milk cartons.

Other brand names seen: "RealGreenMe" (user handle and possibly an earlier product name), "Food Wellbeing & Suffering Index" (earlier product name; also the prototype repo title).

## Page "Page 1": marketing and inspiration

- **Hero art for the website:** several frames named "Size for desktop Framer" (pink with three phone screens; also template images from a Finnish healthcare app that look like leftovers).
- **Marketing copy frames:** "The FoodFutures journey", "Empowering Individual Action for Collective Impact", "Problem statement", "Wireframe - Page 1", "Food Futures", "Linkedin cover" (pink banner, "FoodFutures: Better choices for you and the planet", app screens on the right; it is the live LinkedIn cover).
- **Poster mockup:** table-tent poster "INTENT TO ACTION: 1.5 DEGREE LIFESTYLE, Sustainable Consumption Course. GET A FREE CUP OF COFFEE: ONBOARD NOW" with QR code and app screens, shown on a cafe counter. This suggests an earlier pilot tied to a sustainable consumption course, using free coffee to onboard students (inferred, not confirmed).
- **Menu mockups:** McDonald's menu items (Egg McMuffin, McPlant, Filet-O-Fish, etc.) with FF impact overlays, Wolt app inspiration, Android Compact frames, Chipotle-style items (see data note).
- **Beef vs shrimp comparison frames** (basis for the LinkedIn post about trade-offs).
- Type specimen frames ("meal", "for you and the planet", "Kinder").
- Moodboard (Little Planet, geometric patterns) from a Figma AI moodboard tool.
- Unrelated or template content: a Finnish healthcare app ("Home Page v1.0", "Booking Step 1", "Edit Account", "Referral notification", "Onboarding v1.1"), "DfG web design" frames, an "about me page" template, "The Content Creator" brand board, photos (IMG_xxxx). Ignore for product decisions.

## Page "Biochar"

Not Food Futures. Biochar feasibility tool UI work: "Biochar Project Setup (Tool 1)" at biochar-feasibility.netlify.app, "Biochar Logistics Calc (Tool 3)" at axwils2.github.io, dashboards, icon sets. Treat as a separate side project.

## Brand and design system

- Colours (from the prototype repo theme, matching Figma): background #FFFFFF, card #E2F0CE, new white #F5FFE1, primary #2D9B6F, mid green #0EC683, dark green #00A577, light green #5BE894, eat often #62E595, eat sometimes #FAF77F, eat rarely #FAA9C5, red #F2513B, yellows #F4C200 #FFE200 #FFF980, pinks #ED77B0 #FF8DBE #FFA8C6, blue #005AD3 and #9FDFFF, greys #7A7A7A #EDEDEB, alt background #F2FFD7.
- Impact scale colours (Figma, six levels): Lowest (dark green), Low (light green), Moderate (yellow), High (amber), Very High (light pink), Exceptional (pink/magenta).
- Font in the app: Moderat (Regular, Bold). The website uses the Framer template's General Sans.
- Style: pale lime backgrounds, rounded cards, hand-drawn black-outline icons (carbon cloud, water drops, land plots, eutrophication), playful farm-animal illustrations.
- Logo: circular globe with leaf and plate, text "FOOD FUTURES" around the edge, navy on white.

## Using this for the website

- Real "How it Works" copy can come from the App Flow: View (menu with impact), Validate (photo), Track (individual and collective). Needs Shreya's approval before going live.
- The pink hero frames and screens are good source art. Check with Shreya before reusing any image that shows another product's UI.
