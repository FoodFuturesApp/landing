---
name: framer-extract
description: Use when pulling exact design values or animation behavior from a Framer-published site (any *.framer.website or Framer-hosted page), for example to rebuild a section, add a new page in the same style, or check what the original does.
---

# Extract specs from a Framer site

Read values from the build; never eyeball screenshots.

1. **HTML** (`curl` the page): fonts in `<style data-framer-font-css>`, breakpoints in `<script id="__framer__breakpoints">`, page-load animations in `<script id="__framer__appearAnimationsContent">` (JSON keyed by `data-framer-appear-id`). Layer names are in `data-framer-name`.
2. **Component code**: download every `framerusercontent.com/sites/.../*.mjs` linked in the HTML. The page module holds the layout CSS per breakpoint. Search it for:
   - `__framer__enter` / `__framer__animate`: scroll-in effects and their springs (`stiffness`, `damping`, `delay`).
   - `-hover` variants and `.hover` CSS rules: hover states.
   - `displayName` to find a component, `defaultProps` for its size.
   - Code components (e.g. text reveals) are plain React with Motion; read their props and `useInView` options.
3. **Computed styles**: in headless Chrome (Playwright, `channel="chrome"`), walk the DOM and dump layout, type and color for every element at each breakpoint. Framer wraps variants in `display: contents` divs, so descend through zero-size nodes instead of skipping them.
4. **Motion**: convert Framer springs to CSS with the `spring()` helper in `website/script.js` (samples the physics into `linear()`). Motion's spring with `bounce` and `duration` maps to damping ratio `1 - bounce`; solve stiffness the way Motion's `findSpring` does.
5. **Verify**: sample animated values per frame with `requestAnimationFrame` on both sites, and run the `website-parity` skill for layout.
