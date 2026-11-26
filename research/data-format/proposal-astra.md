# Edit standings in CSV, render the replay offline

Use two UTF-8 CSV files in `data/`. Each row of `events.csv` describes a moment. Each row of `standings.csv` describes one car at that moment. Join them on ISO date. Filter the standings sheet by lab to read its entire run, or by date to edit the field. Store seconds behind the leader, with zero for first place. Sort numerically to get the order. Row order has no meaning, so sorting a spreadsheet by lab is safe.

Keep nested, infrequently edited records in `data/labs.json` and `data/logos.json`. The latter holds the existing logo records verbatim as data, including boxes, scale, backgrounds and paths. Separating those long paths keeps rebrands readable. CSV fits the two rectangular sheets and handles commas and quotes in prose. A wide sheet with a pair of columns for every lab gets awkward as guests come and go. JSON or TOML for the whole race would make a single lab's history harder to filter. YAML adds parser and type-conversion concerns for little benefit here.

## The final three events

`events.csv`

```csv
date,headline,event_lab,caption
2026-11-09,Fable 5.2 restores order,anthropic,"Fable 5.2 takes the top score back, 20% cheaper."
2026-11-10,Carbon goes public,google,Gemini 4 Carbon opens to everyone and Google takes second.
2026-11-20,Clear air up front,openai,"GPT-6.2 and Gemini 4 Neon land, and OpenAI is second again."
```

`standings.csv`

```csv
date,lab,behind_s,note
2026-11-09,anthropic,0.00,"Fable 5.2: 65 on the index, clear again."
2026-11-09,openai,1.25,Astra eight points back.
2026-11-09,google,1.75,Carbon opens to everyone tomorrow.
2026-11-09,meta,2.85,Muse Wonder can't see the leaders.
2026-11-09,moonshot,3.20,K3.1 Pro weights out since 4 Nov.
2026-11-10,anthropic,0.00,Fable 5.2 stays in front.
2026-11-10,google,0.95,"Carbon: second, and now on sale."
2026-11-10,openai,1.45,Astra three points back.
2026-11-10,meta,2.55,Wonder Full holds fourth.
2026-11-10,moonshot,2.90,Kimi K3.1 Pro remains fifth.
2026-11-20,anthropic,0.00,Clear leader.
2026-11-20,openai,0.80,GPT-6.2 Astra retakes second.
2026-11-20,google,0.95,Neon and Carbon: right on OpenAI's gearbox.
2026-11-20,meta,2.40,"Muse Wonder: strong, but not on the API."
2026-11-20,moonshot,2.70,"Kimi K3.1 Pro: fifth, ahead of Grok 4.7."
```

One entry of `labs.json`

```json
{
  "spacexai": {
    "name": "xAI", "sub": "Grok", "color": "#14161B", "accent": "#C3CAD3", "logo": "xai",
    "changes": [
      {"from": "2026-07-06", "name": "SpaceX AI", "sub": "Grok · ex-xAI", "logo": "spacexai"}
    ]
  }
}
```

## Two edits

**Pull OpenAI 0.30 s closer on November 20.** Change one cell from 0.80 to 0.50. Google's distance to the leader stays 0.95. Its displayed interval behind OpenAI grows automatically from 0.15 to 0.45.

**Insert a November 15 pass.** Google already leads OpenAI on November 10. A new November 15 snapshot alone therefore cannot show that pass. If the intended event is Google *extending* its lead, add one event row and five standings rows, copying the field and updating the date, distances and notes. For an actual pass while retaining the published history, first establish an intervening OpenAI lead from a source. For example, in a hypothetical November 14 snapshot set OpenAI to 0.85 and Google to 0.95, then on November 15 move Google to 0.75. That takes twelve new rows across the two files, with no edits to later rows. Without evidence for the extra event, leave the historical replay alone.

## Render and verify

Run `python3 scripts/render.py` using only the standard library. Read CSV with `csv.DictReader` and `newline=""`, parse seconds with `Decimal`, and load the two JSON objects. Check headers, field counts, real ISO dates, unique events and unique date/lab pairs. Require a complete field per event, reject orphan rows, unknown labs and unresolved logo references (including rebrands). Check an event's optional highlighted lab against the current and previous field. Require finite, nonnegative distances with at most two decimal places, one zero and distinct distances per field. Report the file, row and offending value before writing anything.

Sort events by date and cars by distance. Subtract consecutive distances to recover the existing interval values. Emit the page's supported object-array form of SNAPSHOTS alongside LABS and LOGOS as three classic script globals. JSON-encode every value and escape literal less-than signs as `\u003c` so a caption containing a closing script tag survives embedding. Replace only the contents between the unique opening `<script id="race-data">` and its closing tag. Fail for missing or ambiguous boundaries. Write atomically after validation. A `--check` mode compares the generated HTML to the checked-in file and catches stale output. At migration, compare every reconstructed interval, note and event to the old table and run the replay check on desktop and phone sizes from an isolated copy of the HTML.

**Limits.** Taking the lead can require rebasing the field to zero. Spreadsheet apps can also localize dates and decimal separators, so import dates as text and validate exports. During migration retain editorial comments in the existing research archive. Later, a separate panel observations table can key each sourced opinion by event, voice and lab, with rank and URL. Keep Artificial Analysis measurements and index versions separately for tie-breaking or cross-checking. The panel can produce an order without claiming to measure seconds. Leave weighting, missing votes and rank-to-gap calibration until there are actual ballots to evaluate.
