# Data format: brief

## The project

Frontier Lap (repo root; open `index.html`, read `.memory/MEMORY.md` and `README.md` first) is a one-page site that shows the AI labs as race cars. A replay runs from November 2024 to November 2026, one step per event (a model release or another moment that changed the order). Five cars on track at a time; the gaps between them show how far apart the labs are. It is public on GitHub Pages from `main`.

## Today

All data sits inside `index.html`, in the `<script id="race-data">` block (around lines 195-700):
- `SNAPSHOTS`: a custom plain-text table inside a JS template literal. One block per event: a date line with headline and `@lab`, a `> caption` line, then five car lines `lab  +gap  note`, where the gap is seconds **to the car directly ahead**. A copy of the current table: `research/ranking-review/merged.txt`. The comment at the top of the block documents the syntax.
- `LABS`: JS object, one entry per lab (name, sub, colours, stripes, logo, `changes` = rebrands from a date on).
- `LOGOS`: SVG path data per lab.

What hurts:
- Gap-to-car-ahead means changing one car shifts every car behind it; swapping two labs means recomputing three numbers.
- You can't see one lab's path over time without scrolling through 31 blocks.
- It's a custom syntax inside a JS string inside a 200 KB HTML file: not a standard format, not editable in normal tools.

## What the owner wants

A **standard, human-friendly data format** that lives in its own file(s) in the repo, which a person can open and adjust whenever they feel like it (especially the recent past), plus a **small script that renders it into `index.html`**, so the page stays one self-contained file (it must still work when `index.html` is opened alone; a separate `data.js` loaded at runtime broke that once). The app logic then works from the embedded data.

Coming soon, so the format should have room for it: an **expert panel** of about 10 trusted voices (see `research/ranking-review/VOICES.md`). The idea is to record, per event, each voice's view of the order (with a link), and derive the standings from that panel, with the Artificial Analysis Intelligence Index as a tie-breaker / cross-check. Don't design the panel in full; just make sure your format doesn't paint us into a corner.

## Your task

Write `research/data-format/proposal-<you>.md` (`<you>` = `neon`, `sol` or `astra`). Cover:
1. **The format(s) you recommend** (CSV, TSV, TOML, YAML, JSON, JSON5, Markdown tables, a mix, or something else) and the **file layout** (which files, what each holds). Say why, and why not the main alternatives.
2. **How gaps are stored** (e.g. to car ahead, to leader, absolute score) and how order is expressed.
3. **Concrete sample**: the last three events of the current table (2026-11-09, 2026-11-10, 2026-11-20 in `merged.txt`) written in your format, plus one LABS entry with a rebrand (e.g. `spacexai` or `meta`). Real values, converted correctly.
4. **The edit experience**: walk through two realistic edits ("pull OpenAI 0.3 s closer on 2026-11-20", "insert a new event on 2026-11-15 where Google passes OpenAI") and how many lines/cells change.
5. **The render script**: language/runtime (the repo has no package.json today; keep dependencies near zero), what it does, how it validates (unknown lab ids, duplicate dates, bad gaps…), and how it embeds the result into `index.html` (markers, what replaces what). Pseudocode or a short sketch is fine; don't build it.
6. Where LOGOS (SVG paths) should live.
7. Risks and what you'd leave out.

Keep it to about 2 pages. Be opinionated: one recommendation, not a survey.

## Rules

- Write only your own proposal file. Don't edit `index.html` or anything else. Don't commit.
- Today is 2026-11-25.
