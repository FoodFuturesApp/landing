# Food Futures, rebuilt

A hand-written recreation of https://foodfutures.framer.website/: plain HTML, CSS and JS, with no Framer, no dependencies and no build step. Fonts and images are self-hosted in `assets/`.

Run it: `python3 -m http.server 8000` in this folder, then open http://localhost:8000.

## Where each phase lives

1. **Design tokens:** the `:root` block at the top of `styles.css` (colors, type scale, content width, motion curves). Every value was read from the live build's computed styles and Framer's component source, not eyeballed.
2. **Layout:** semantic sections in `index.html`, with media queries at Framer's exact breakpoints: desktop 1200px and up, tablet 810 to 1199px, phone 809px and below.
3. **Interactions:** `script.js`, plus the CSS beside each component.
   - Springs: Framer's spring settings (for example stiffness 260, damping 40) are sampled into CSS `linear()` easings at load, so plain CSS transitions follow the same physics.
   - Header and hero fade in (0.6s linear, hero 0.1s later).
   - The three cards around the phone slide in once on enter (spring 260/40, delays 0, 0.2 and 0.4s).
   - The statements wipe in with a clip-path whenever 30% is visible, and hide again when they leave (0.8s, `cubic-bezier(.2, .65, .3, .9)`, as in the original).
   - How it Works: the open card doubles in width (0.5s), runs a 5s progress line, then hands off and loops. Click any card to jump. Below 768px it becomes a plain list, like the original component.
   - Hovers: links darken, arrows nudge 4px, the green button's label lifts 4px.
   - The original has no parallax, sticky sections or page transitions (it is one page), so there are none here.
4. **Code:** the three files above.

## How close it is

Measured in headless Chrome at 1440, 1000, 810 and 390px against the live site:

- Every text block and image sits at the same position and size, and page heights match (7109px on desktop).
- Animations sampled frame by frame follow the same curves; start times can differ by a frame or two.
- Remaining screenshot differences are anti-aliasing. The original draws the large statements on a GPU layer, so they look a touch softer there.

## Differences

- No "Made in Framer" badge.
- Added keyboard focus rings, a themed text selection, and reduced-motion support (no reveals, no auto-advance).
- Kept the original's quirks on purpose: the phone mockup's screen is empty on phones (Framer collapses it), and How it Works still uses the template's placeholder copy (to be replaced, see `docs/context/2026-10-09-google-startups-site-fixes.md`).
- Changed for launch (2026-10-09): tab title is "Food Futures" (was the template's "Nova"), the dead header and footer links are removed, the footer links to `privacy.html` and info@foodfuturesapp.com, and the hero tag links to the story section.

Images, logo and copy belong to the original site. Fonts: General Sans (Fontshare free license), Inter and DM Mono (SIL Open Font License).
