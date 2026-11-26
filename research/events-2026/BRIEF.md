# 2026 events: brief

## The project

Frontier Lap (repo root; read `README.md` and `.memory/MEMORY.md` first) is a one-page site that shows the AI labs as race cars. A replay steps through time, one step per event; five cars are on track at a time, and the gaps between them show how far apart the labs are. "Best" means who has the best model lineup at that moment: the frontier capability a serious user can actually get. Mostly that's the best available model; a lineup that is better in practice (coding agents, price, availability) can break a tie, and a model that's announced but not usable (partners only, waitlist, pulled offline) counts less.

## Your task

Research the **big AI events of 2026** (1 January to today, 25 November 2026) involving these seven labs only:
`anthropic`, `openai`, `google`, `meta`, `spacexai` (xAI, SpaceX AI since July 2026), `moonshot` (Kimi), `deepseek`.

Decide which moments are worth a step in the replay. An event earns a step when it changes the order or clearly changes a gap: a major model release, a model pulled or restricted, a big re-rating (e.g. a new Artificial Analysis Intelligence Index version). Minor point releases, previews nobody can use, and small refreshes don't get their own step; mention them in another event's caption if they matter. Aim for roughly **12 to 20 events** for the year. Prefer fewer, meaningful steps.

How to rank: the Artificial Analysis Intelligence Index (in the version that applied on the date) is the backbone; trusted voices (see `research/ranking-review/VOICES.md`) adjust it where practice and benchmark disagree. Use the web and real sources. If you can't verify something, say so in the `why` line rather than guessing.

The current data is a starting point to check and challenge, not truth: the 2026 entries of `research/ranking-review/merged.txt`.

## Output

Write `research/events-2026/<you>.toml` (`<you>` = `sol`, `astra` or `sonnet`) in exactly this shape. Keep it lean: the caption and the rough ranking matter most.

```toml
# One line on your overall take, if any.

[[events]]
date    = 2026-01-01           # opening state: where the field stands on 1 January; no lab, no caption needed
title   = "Where 2026 starts"
gaps    = { anthropic = 0.00, openai = 0.10, google = 0.25, moonshot = 0.80, spacexai = 1.00 }
why     = "One line: what the order rests on."
sources = ["https://..."]

[[events]]
date    = 2026-02-05           # the day it became publicly usable
title   = "Claude Code fever"   # 2 to 5 words
lab     = "anthropic"           # whose event it is (that car gets highlighted)
caption = "Opus 4.6 tops the index after a winter of Claude Code mania."   # one sentence, at most ~100 characters
gaps    = { anthropic = 0.00, openai = 0.25, google = 0.45, moonshot = 1.00, spacexai = 1.20 }
why     = "One line: index scores/version and any judgement call against the index."
sources = ["https://...", "https://..."]
```

Rules for `gaps`:
- Exactly the **top five** labs at that moment, each with its distance **behind the leader** in seconds. The leader is `0.00`. Order follows from the numbers, so no two may be equal.
- Scale: `0.25` = wheel to wheel, `1.00` = a clear lead, `1.70` = a big break. Rough is fine, to 0.05.
- Gaps between consecutive cars must reflect real differences; don't spread the field evenly by default.

End the file with a short comment block: `# Left out:` listing releases you considered and dropped, one line each, with the reason.

## Rules

- Write only your own file. Don't edit anything else. Don't commit.
- Today is 2026-11-25.
