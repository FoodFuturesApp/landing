# Food Futures design system

Pulled from the live Framer site on 2026-10-05. Source of truth for values: `website/styles.css` `:root`.

## Color

| Token | Value | Use |
|---|---|---|
| page | `#f3f3f3` | background |
| ink | `#000` | headings, body |
| ink-muted | `rgb(0 0 0 / .6)` | secondary text, links at rest |
| accent | `#00a577` | buttons, progress |
| glass | `rgb(255 255 255 / .76)` + 12px blur | floating cards |
| hairline | `rgb(0 0 0 / .08)` | borders, footer rule |

## Type

- **General Sans** (400, 500, 600, 700): everything by default. Display 68px (phone 57), heading 48px (phone 39), lead 23px (phone 19), statements 50 to 52px (phone 32), UI 14px.
- **Inter Variable** 24px: small section labels.
- **DM Mono** 500, 13px uppercase: the announcement link.
- Tight tracking on display text (-0.04em) and headings (-0.03em).

## Layout and breakpoints

- Content width 872px (How it Works 1100px).
- Breakpoints: desktop 1200px+, tablet 810 to 1199px, phone 809px and below.

## Motion

- Springs from Framer: cards stiffness 260 / damping 40; button lift 400/30; links 400/40.
- Text reveal: clip-path wipe, 0.8s, `cubic-bezier(.2, .65, .3, .9)`, replays on scroll.
- Page load: 0.6s linear fade.
