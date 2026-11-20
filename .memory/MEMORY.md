# Fastest Lab: project memory

- **index.html must stay one self-contained file.** The owner previews it in a viewer that opens index.html alone, so sibling files such as data.js never load. In Nov 2026 a separate data.js broke the page ("no usable snapshots"). The data now lives in the `<script id="race-data">` block near the top of index.html. Test changes with index.html copied alone into an empty folder.
- **Editing the race:** change the SNAPSHOTS text table in the DATA block. `gap` is seconds to the car directly ahead. The owner's scale: 1.0 = clear lead, 0.25 = wheel to wheel, 1.7 = big break. Labs and their rebrands go in LABS (`changes: [{from, name, sub, logo}]`), and logo SVG paths go in LOGOS.
- **Knobs:** the TUNING and PLAYBACK blocks just below DATA. `PLAYBACK.length` = replay seconds. `?cars=f1|gt|toy` picks the car style, and `?speed=2` speeds up the replay.
- **Background material** is in the parent folder ../:
  - BRIEF.md: the concept
  - research/standings-history.md: sources and judgement calls behind each snapshot
  - NAMES.md: parked name research
- **Verify headless** with Playwright `chromium.launch({channel:'chrome'})`; no bundled browsers are installed.
