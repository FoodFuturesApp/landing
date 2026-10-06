"""Compare the local website against the live Framer site.

Usage (from the repo root, with the site served on :8000):
    python3 -m venv .venv && .venv/bin/pip install playwright pillow
    .venv/bin/python tools/parity/parity.py [width ...]

For each width it prints text blocks whose position or size differs, the page
heights, and the share of differing pixels at a few scroll positions. Uses the
installed Google Chrome, so no browser download is needed.
"""
import asyncio
import io
import sys

from PIL import Image, ImageChops
from playwright.async_api import async_playwright

LIVE, LOCAL = "https://foodfutures.framer.website/", "http://127.0.0.1:8000/"
TEXTS = ["Make a difference", "A data driven", "We Believe", "Sustainable eating", "Sustainability is",
         "Making sustainable", "How it Works", "01", "Make everyday", "© 2026", "Instagram"]
HIDE_BADGE = "document.querySelectorAll('.__framer-badge').forEach(e => e.style.display = 'none')"
MEASURE = r"""
texts => {
  const all = [...document.querySelectorAll('body *')];
  const out = {};
  for (const t of texts) {
    const el = all.find(n => [...n.childNodes].some(c => c.nodeType === 3 && c.textContent.trim().startsWith(t))
                             && n.getBoundingClientRect().width > 0);
    if (el) { const r = el.getBoundingClientRect(); out[t] = [r.left, r.top + scrollY, r.height].map(Math.round).join(','); }
  }
  out['page height'] = document.documentElement.scrollHeight;
  return out;
}
"""


async def capture(browser, url, width):
    page = await browser.new_page(viewport={"width": width, "height": 900})
    await page.goto(url, wait_until="load")
    await page.wait_for_timeout(2500)
    layout = await page.evaluate(MEASURE, TEXTS)
    shots = []
    for y in (0, 500, 1500):
        await page.evaluate(f"window.scrollTo({{top: {y}, behavior: 'instant'}})")
        await page.wait_for_timeout(1500)
        await page.evaluate(HIDE_BADGE)
        shots.append(Image.open(io.BytesIO(await page.screenshot())).convert("RGB"))
    await page.close()
    return layout, shots


async def main(widths):
    async with async_playwright() as p:
        browser = await p.chromium.launch(channel="chrome")
        for w in widths:
            (la, sa), (lb, sb) = await asyncio.gather(capture(browser, LIVE, w), capture(browser, LOCAL, w))
            print(f"== {w}px")
            diffs = [k for k in la if la.get(k) != lb.get(k)]
            for k in diffs:
                print(f"  {k:20} live {la.get(k)}  local {lb.get(k)}")
            if not diffs:
                print("  layout: identical")
            for y, a, b in zip((0, 500, 1500), sa, sb):
                d = ImageChops.difference(a, b).convert("L").point(lambda v: 255 if v > 40 else 0)
                print(f"  y={y}: {100 * d.histogram()[255] / (a.width * a.height):.2f}% pixels differ")
        await browser.close()


asyncio.run(main([int(w) for w in sys.argv[1:]] or [1440, 1000, 390]))
