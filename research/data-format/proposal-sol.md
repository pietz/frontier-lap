# Frontier Lap data format
*25 November 2026*

Use two UTF-8 CSV files for race edits and one TOML file for lab identities and artwork. The CSVs have headers and use standard double-quote escaping. They open in a spreadsheet for filtering and in a text editor for quick edits.

| File | Contents |
|---|---|
| `data/events.csv` | One row per event, keyed by its ISO date. Headline, optional highlighted lab, and optional caption. |
| `data/standings.csv` | One row per event and lab. Keep rows grouped by lab and dated within each group so a lab's whole run reads down the file. Filter by date to see one field. |
| `data/labs.toml` | `[labs.<id>]` for identity and livery, `[[labs.<id>.changes]]` for dated rebrands, and `[logos.<id>]` for the current logo box, size, optional background, and fill/path pairs. Keep SVG path strings and source comments verbatim. |

CSV keeps each standings edit on one line and works in ordinary spreadsheet tools. An event-shaped TOML, YAML or JSON file would still scatter a lab's history across snapshots. TOML earns its place for the nested registry and source comments. JSON makes those comments harder to keep beside the paths, and YAML adds a parser dependency. Markdown tables make long notes and escaped pipes awkward to edit.

Each car stores **seconds behind the leader** to two decimal places. Exactly one car has `0.00`. The renderer sorts by ascending gap, with distinct values within an event so order has one source. Missing rows mean the lab is off track. Use integer hundredths in the renderer for comparisons and subtraction. During migration, sum the original intervals in rank order. On November 20, Google's `0.95` is OpenAI's `0.80` plus the original `0.15` interval.

## Worked sample

`data/events.csv`

```csv
date,headline,event_lab,caption
2026-11-09,Fable 5.2 restores order,anthropic,"Fable 5.2 takes the top score back, 20% cheaper."
2026-11-10,Carbon goes public,google,Gemini 4 Carbon opens to everyone and Google takes second.
2026-11-20,Clear air up front,openai,"GPT-6.2 and Gemini 4 Neon land, and OpenAI is second again."
```

`data/standings.csv`

```csv
lab,date,behind_leader_s,note
anthropic,2026-11-09,0.00,"Fable 5.2: 65 on the index, clear again."
anthropic,2026-11-10,0.00,Fable 5.2 stays in front.
anthropic,2026-11-20,0.00,Clear leader.
google,2026-11-09,1.75,Carbon opens to everyone tomorrow.
google,2026-11-10,0.95,"Carbon: second, and now on sale."
google,2026-11-20,0.95,Neon and Carbon: right on OpenAI's gearbox.
meta,2026-11-09,2.85,Muse Wonder can't see the leaders.
meta,2026-11-10,2.55,Wonder Full holds fourth.
meta,2026-11-20,2.40,"Muse Wonder: strong, but not on the API."
moonshot,2026-11-09,3.20,K3.1 Pro weights out since 4 Nov.
moonshot,2026-11-10,2.90,Kimi K3.1 Pro remains fifth.
moonshot,2026-11-20,2.70,"Kimi K3.1 Pro: fifth, ahead of Grok 4.7."
openai,2026-11-09,1.25,Astra eight points back.
openai,2026-11-10,1.45,Astra three points back.
openai,2026-11-20,0.80,GPT-6.2 Astra retakes second.
```

`data/labs.toml` excerpt

```toml
[labs.spacexai]
name = "xAI"
sub = "Grok"
color = "#14161B"
accent = "#C3CAD3"
logo = "xai"

[[labs.spacexai.changes]]
from = "2026-07-06"
name = "SpaceX AI"
sub = "Grok · ex-xAI"
logo = "spacexai"
```

## Editing the replay

- **Pull OpenAI 0.3 s closer on November 20.** Change `0.80` to `0.50` in one cell on one line. Google stays at `0.95` behind the leader and its road interval grows to `0.45`. If the new interval changes the intended meaning of “right on OpenAI's gearbox,” revise Google's note in a second cell.
- **Insert November 15.** Add one event row between November 10 and 20 and five standings rows, one in each lab's group. For example, give Anthropic `0.00`, Google `0.85`, OpenAI `1.10`, Meta `2.55`, and Moonshot `2.90`. That's six new rows and zero edits to existing rows. Google already passed OpenAI on November 10, so these values depict Google extending its lead over OpenAI. To depict a second pass on November 15 while keeping the supplied events, the replay needs an intervening OpenAI retake. A hypothetical November 14 event with OpenAI at `0.85` and Google at `1.10` would add six more rows. Use that sequence only if the event history supports it.

## Build and validation

Run `python3 scripts/render_data.py` with Python 3.11+ using `csv`, `tomllib`, and `json` from the standard library.

1. Read and validate all inputs before writing. Reject wrong CSV headers or row widths, impossible or non-ISO dates, duplicate event dates or standings keys, unknown labs or orphan standings, and fields without exactly five cars. Reject missing, malformed, negative or non-finite gaps, equal gaps, and fields without exactly one zero. Check the highlighted lab against the current or previous event's field. Validate registry field types, hex colours, unique rebrand dates per lab, explicit logo references, and logo box and path structure. Report file, row or key, and offending value.
2. Sort events by date and standings by gap. Subtract each preceding car's integer hundredths from the current car's and emit the existing `SNAPSHOTS` array of objects with interval `gap` in seconds. Emit `LABS` and `LOGOS` in their current shapes. Serialize the three `var` assignments with JSON, escaping every literal `<` as `\u003c` so a caption containing `</script>` stays data.
3. Put unique begin/end JS comments inside `<script id="race-data">`. Replace only the content between them, failing on missing, duplicated or reversed markers. Render deterministically and replace the page atomically. A `--check` mode can fail on stale output before pushing to Pages. Commit the generated page with source edits. For the migration, compare every emitted event and interval with today's data and open a copy of `index.html` by itself to verify the replay.

Panel evidence can live alongside the race files, joined by event date and stable lab IDs. A future `data/panel.toml` can hold a dated record per voice with a source URL and a ranked subset of lab IDs. Keep the Artificial Analysis scores, index version and source with that event's evidence. The panel can later supply the resolved standings through the same renderer input contract. Leave weighting, partial rankings, tie-breaking and score-to-seconds conversion for that work.

Spreadsheet apps can rewrite dates and decimals. Import ISO dates as text and review the CSV diff after saving. With separate tables, a date edit also touches its five standings rows. Leave out a custom editor, runtime fetches and support for tied gaps until the race needs them.
