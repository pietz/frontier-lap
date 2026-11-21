# Brief: AI lab race page

Build a small, playful, opinionated single-page website that ranks the AI labs by **who currently has the best model lineup**. It's a hype/fun project, not a serious benchmark. It should feel like a little experience, not a dashboard.

## The concept

Show the labs as **race cars seen from directly above** (top-down 2D), driving up the screen on a road. The **road/world underneath scrolls** to create the motion; the cars mostly hold position relative to each other, with a little life: slight wobble, drift side to side, small surges forward and back, but on average they keep their set gaps.

Inspiration: the Formula 1 TV graphic that visualises qualifying gaps by showing the cars stacked along the track at their relative distances, so you can see at a glance how close or far apart they are. The **distance between cars is the message**.

Each car is identifiable by its **livery color** plus a **small badge/emblem on the car** for the company (a simple stylized monogram or mark you draw yourself in SVG/CSS; don't download or embed official logo files). Put the lab name and position (P1, P2…) next to each car, readable at a glance.

## Current standings (the owner's take, November 2026)

| Pos | Lab | Note |
|---|---|---|
| P1 | Anthropic | Clear leader |
| | *gap* | a noticeable gap |
| P2 | OpenAI | Still second |
| P3 | Google (DeepMind / Gemini) | Has caught up a lot; very close behind OpenAI |
| | *larger gap* | clearly bigger than the first gap |
| P4 | Meta (Muse model) | Muse did well; just ahead of SpaceX AI |
| P5 | SpaceX AI (formerly xAI, Grok) | Close behind Meta |

So: one gap from P1 to the P2/P3 pair, a tight P2–P3 battle, a larger gap down to the P4/P5 pair, and a tight P4–P5 battle.

## Requirements

- **Data-driven**: standings live in one obvious data object at the top of the script (lab id, name, color, emblem, and a gap/distance value), so the owner can retune the gaps by editing numbers.
- **Built for a timeline later**: structure the data as a list of dated snapshots (just one snapshot today is fine; adding one or two plausible earlier snapshots to demo it is a nice bonus). A time slider that animates cars between snapshots is the planned next feature; design so it slots in naturally, and build it if you have the time and it works well.
- **Catchy name**: come up with a name for the site and use it as the title/header. Briefly justify it in your report.
- Self-contained: a single `index.html` (inline CSS/JS) that works by opening the file directly in a browser. Fonts from Google Fonts are fine; no build step, no server.
- Looks good on desktop and is usable on mobile width.
- Taste matters: this is being compared side by side against other builds of the same brief. Make it something people want to screenshot and share.

## Deliverable and verification

- Write everything into **your own folder only** (given in your task). Do not touch sibling folders.
- Actually look at the result: render it in a headless browser (e.g. Playwright/Chromium if available) and take a screenshot to `screenshot.png` in your folder; check the animation runs without console errors. Iterate on what you see.
- Finish with a short report: the name you chose and why, the key design decisions, how to retune the gaps, and anything you couldn't do.
