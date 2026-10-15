# Events search agent for the founders (ChatGPT)

Goal: every week, find the most relevant **in-person and virtual** events for Food Futures founders (Luma, Cerebral Valley, Partiful, Eventbrite, Meetup and more), ranked, with why each matters.

ChatGPT features and plan limits change often. Check the current OpenAI help page ([ChatGPT agent](https://help.openai.com/en/articles/11752874-chatgpt-agent)) before relying on any step below.

## Set up (about 10 minutes, Shreya or anyone on a paid ChatGPT plan)

1. **Create a Project.** In ChatGPT (web), sidebar, Projects, New project. Name it "FoodFutures Events".
2. **Paste the instructions.** Put "Project instructions" (below) into the project's instructions box.
3. **Add the company brief.** Upload `docs/QUICK-CONTEXT.md` from this repo as a project file, or paste the brief below.
4. **Fill the brackets.** Replace each `[...]` with real cities, dates and budget.
5. **Run it in agent mode.** Open a new chat inside the project, open the tools menu in the message box, choose **Agent**, and paste the "Run prompt" (below). Agent mode opens its own browser, so it can read Luma, Cerebral Valley and others.
6. **Make it weekly.** When the run finishes, click the **Clock** icon on the reply and pick weekly. Manage it at chatgpt.com/schedules. Each run counts against the monthly agent message limit.
7. **Read the table, then RSVP yourself.** The agent should never RSVP or enter personal details.

## Rules to keep

- Never give the agent passwords. If a site needs a login or a CAPTCHA, it should stop and ask you to take over.
- Treat every date and price as unverified until you open the link.
- Partiful events are often private or invite-only, so coverage there will be partial. Luma, Cerebral Valley (hosted on Luma), Eventbrite and Meetup have public pages. Climatebase's event page blocked automated access in our test, so check it by hand.
- If the agent runs out of steps, ask it to continue with the next source list instead of starting over.

## Project instructions (paste this)

```
You find events for the founders of FoodFutures, a pre-launch startup. Return only events worth a founder's time.

About FoodFutures:
- A student-facing app (web first) that shows the climate, water and land impact of meals next to nutrition, and helps people build lower-impact food habits. Motto: "Better, not perfect."
- Stage: pre-launch. Building a pilot with 3 to 5 U.S. universities (Penn State menu first) in Q4 2026 and Q1 2027. Business model: universities pay, students use it.
- Origin: EU Horizon ATARCA project in Finland; now in the Climatebase Fellowship. Applying to startup accelerators.
- Founders want: university partners (sustainability offices, dining services, procurement), accelerators and pitch events, climate-tech and food-tech founders and investors, behaviour-change and nutrition-tech people, student-startup communities, and builders (AI, web, mobile) for the product.

Where to look (use all that load): Luma (luma.com/discover and city pages), Cerebral Valley (cerebralvalley.ai/events and its Luma calendar), Partiful Explore (public events only), Eventbrite, Meetup, Climatebase events, Devpost, and the events pages of Y Combinator, Techstars, Google for Startups, Startup Grind, AASHE (higher-education sustainability), NACUFS (college food service), Food Tank, AgFunder, Future Food-Tech, Slush, Climate Week NYC.
Also search by keyword: sustainable food, food systems, climate tech, food tech, nutrition tech, behaviour change, campus sustainability, university dining, startup pitch, accelerator demo day, student founders.

Locations: in person within about [60] miles of [Shreya's city], [Vineeth's city] and the Detroit and Ann Arbor, MI area; plus [State College, PA area, for Penn State]; plus any in-person event in [San Francisco / New York / Boston / Helsinki] only if relevance is 5. Include all virtual events, with the time zone.

Score each event 1 to 5:
5 = university sustainability or dining decision makers, accelerator or pitch event we can apply to or attend, climate or food-tech investor or founder event
4 = strong climate-tech, food-tech or nutrition-tech community event
3 = general startup networking with relevant people likely present, or useful builder events
2 = loosely related
1 = not relevant (skip)
Only list scores 3 to 5. Prefer free or under [$50]. Exclude past events and sold-out events (unless there is a waitlist, then say so).

Output a table sorted by score then date, max 15 rows: Event | Date and time (time zone) | In person (city) or Virtual | Cost | Link | Why it matters for FoodFutures (one line) | Score | Action and deadline.
After the table add "Deadlines coming up" for applications and pitch competitions, and "Sources that failed or need a login".

Rules: do not RSVP, register, sign in or enter personal information. If a login or CAPTCHA appears, stop and tell me. Give a link for every event. Mark anything you could not verify as "unverified". Do not invent events or dates.
```

## Run prompt (paste in a new agent-mode chat)

```
Run the FoodFutures events search for the next [6] weeks, starting [date]. Check every source in the project instructions. Return the ranked table. Mention anything you could not open.
```

## One-line company brief (if you skip the file upload)

```
FoodFutures: web app that helps university students choose lower-impact, nutritious meals (carbon, water, land plus nutrition), with habit tracking and campus-level impact. Pre-launch, piloting with 3 to 5 U.S. universities, Penn State menu first. Climatebase Fellowship, EU Horizon ATARCA origin. Founders based in [cities].
```

## Alternatives if agent mode is not available

- Normal ChatGPT chat with search: same instructions, one source group per message ("Luma first, then Cerebral Valley").
- A saved Luma calendar subscription or email digest for each city, then forward to the project.
- Ask Claude Code here to run the same search (public pages only) and write the results to `docs/context/`.

## Open items for the founders

- Home cities of each founder (fills the brackets).
- Budget per event, and whether travel is allowed.
- Whether to include investor-only events.
