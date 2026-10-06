---
name: website-parity
description: Use when changing the Food Futures website (website/) and it must still match the live Framer site, or when asked how close the rebuild is. Runs tools/parity/parity.py and explains how to read and fix its output.
---

# Website parity check

The rebuild in `website/` matches https://foodfutures.framer.website/ to the subpixel. Keep it that way unless Vineeth asks for a deliberate change.

1. Serve the site: `cd website && python3 -m http.server 8000` (run in the background).
2. Run `.venv/bin/python tools/parity/parity.py 1440 1000 810 390`. First time: `python3 -m venv .venv && .venv/bin/pip install playwright pillow`.
3. Read the result:
   - `layout: identical` and page heights equal is the bar.
   - Pixel diffs under about 1% are anti-aliasing. The live site renders large statements on a GPU layer, so they look slightly softer.
   - "How it Works" auto-advances every 5s, so frames that catch different cards will differ. That is timing, not a bug.
4. When a position is off, compare computed styles of that element on both sites before editing. Lessons from the first build:
   - Use `em` line-heights, not unitless. Chrome rounds `1.3em` but floors `1.3`, which drifts 0.05px per line.
   - Framer images are `object-fit: cover` (its "fill") or `contain` (its "fit").
   - `svg[hidden]` needs `[hidden] { display: none }` once `svg { display: block }` is set.
   - CSS `scroll-behavior: smooth` also smooths scripted scrolls, so tests must scroll with `behavior: 'instant'`.

Intentional differences (do not "fix"): no Made in Framer badge; added focus rings, selection color and reduced-motion support; the phone mockup screen is empty on phones, as on the live site.
