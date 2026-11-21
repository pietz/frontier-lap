# Ranking review: brief

## The project

Frontier Lap (this repo; open `index.html`) is a playful, opinionated one-page site. It shows the AI labs as race cars, and the gaps between the cars show how far apart the labs are. A replay goes through two years, **November 2024 to November 2026**, one step per meaningful event (a model release or another moment that changed the order). Only the **top five labs** are on track at any moment. A lab that falls to sixth drops out of view.

**What "best" means here:** who has the best model lineup at that moment, i.e. the frontier capability a serious user can actually get. Mostly that is the best available model. A lineup that is broader or better in practice (coding agents, price, availability) can break a tie. A model that is announced but not usable (partners only, waitlist, pulled offline) counts less than one people can use.

**The gap scale:** gaps are in "seconds" to the car directly ahead.
- 0.25 = wheel to wheel, hard to separate
- 1.0 = a clear lead
- 1.7 = a big break

The current data is in the `race-data` block of `index.html`, a SNAPSHOTS text table. It is also in `research/first-pass/events.txt`, with its sources in `research/first-pass/events.md` and `research/first-pass/standings-history.md`. The owner disagrees with parts of it, for example Moonshot's (Kimi K3) strong entry. Use it as a starting point to check and challenge, not as truth.

## The method the owner wants

1. **The backbone is the Artificial Analysis Intelligence Index** at each point in time. Its methodology and version change over time (v2, v3, v4.x, v5…). Respect the version that applied on each date, and note it when a re-rating changed the order rather than a new model.
2. **On top of that, informed opinion:** trusted, not-too-partisan voices on X/Twitter, YouTube and blogs, plus independent evaluators. The owner named three:
   - **Every**, the San Francisco company that publishes hands-on model reviews and benchmarks
   - **Theo** (t3.gg, creator of T3 Code)
   - **Matt Shumer**
   Others are welcome if they are credible.
3. **Where opinion and the index disagree, say so and pick a side with a reason.** Two examples: a model that wins the index but that practitioners don't use, and a lab that leads on real coding work while trailing on the index.

## Phase 1: who to listen to

Write `research/ranking-review/voices-<you>.md`, where `<you>` is `sonnet`, `sol` or `neon`. List 8 to 15 people or organisations whose public model opinions are worth weighing from Nov 2024 to Nov 2026. For each one give:
- who they are
- where they publish
- what they are good at judging (coding, agents, writing, raw reasoning, value)
- any known lean or conflict of interest, such as an investor, employee, sponsor, or a known favourite lab
- a trust rating from 1 to 5, with one line of reasoning

Include the three the owner named, and give them a rating too, honestly. End the file with your recommended top 6. Cite links. Keep it under about 2 pages.

## Phase 2: the ranking (you will be told when to start)

Write `research/ranking-review/ranking-<you>.md`. It covers the full horizon from November 2024 to November 2026. List each moment the top five changed meaningfully, in date order, and for each one give:
- the date and the event: the release or other moment, linked to its source
- the top five, in order, with a gap to the car ahead on the scale above
- the Artificial Analysis index scores and index version behind it, where they exist
- what the trusted voices said, quoted or paraphrased with links
- one or two sentences of reasoning, especially where you go against the index

Then:
- a short section **"Where I disagree with the current data"**: what in `research/first-pass/events.txt` you would change and why
- an **appendix: the same timeline in the page's SNAPSHOTS text format** (see the comment at the top of the `race-data` block in `index.html`), so it can be dropped in for a test replay

Aim for roughly 20 to 35 events. Prefer fewer, meaningful steps to many tiny ones.

## Rules

- Only write your own files in `research/ranking-review/`. Don't edit `index.html` or anything else. Don't commit.
- Today is 2026-11-21. Research with the web and use real sources. If you can't verify something, mark it as unverified rather than guessing.
- Be opinionated but fair. No lab gets a pass.
