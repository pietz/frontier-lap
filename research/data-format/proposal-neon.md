# Data Format Proposal (neon)

## 1. Recommendation: Split CSV + TOML + JSON

Keep **all source data** under `data/` and treat `<script id="race-data">` inside `index.html` as a generated artifact built by a zero-dependency Python script:

```text
data/
  events.csv      # Timeline metadata: date, headline, event_lab, caption (31 rows)
  gaps.csv        # Wide matrix: date + one column per lab, seconds behind leader (31 rows)
  notes.csv       # Car labels: date, lab, note (155 rows)
  labs.toml       # Lab registry: display name, colours, stripes, logo key, rebrands
  logos.json      # Canvas-ready SVG path specs & source URLs (rarely touched)
scripts/
  build.py        # Validates data/, computes deltas, embeds JS into index.html
```

**Why this split:**
- **Wide `gaps.csv` solves the visibility problem.** All 31 events across all 7 labs fit on one screen. Reading down the `openai` column shows OpenAI's entire two-year arc without scrolling through 31 blocks, and double-clicking the file opens it natively in Numbers, Excel, or Google Sheets (and GitHub renders it as a table).
- **Clean seam for the future expert panel.** When the ~10-voice panel arrives (`data/panel.csv` + `data/index.csv`), it only needs to derive or cross-check `data/gaps.csv`. Editorial prose (`events.csv`, `notes.csv`) stays untouched—no merging generated numbers into hand-written text files.
- **TOML for `labs.toml`.** Supports `#` comments (needed for livery rationale and rebrand notes), handles nested `changes` tables and `stripes` arrays cleanly, and parses with Python 3.11+'s built-in `tomllib` (zero dependencies).

**Why not the main alternatives:**
- **YAML:** Not in Python's standard library (adds a `pip`/venv dependency) and has well-known footguns (unquoted dates turning into date objects, indentation errors). Still vertical blocks—doesn't show one lab over time.
- **JSON / JSON5:** JSON forbids comments and trailing commas; JSON5 isn't in Python stdlib. Both are noisy for hand-editing 31 events.
- **Single long `standings.csv` (`date,lab,gap,note`):** Easier for adding an event (2 files instead of 3), but 155 interleaved rows still hide a lab's trajectory in plain text, and tangles panel-derived gaps with hand-written notes.
- **Markdown tables:** Fragile to parse, noisy diffs when column widths shift, don't open in spreadsheets, and awkward for nested `LABS` data.

---

## 2. Gaps and Order: Seconds Behind Leader

Store **cumulative seconds behind the leader** (`0.00` for P1, positive numbers for P2–P5, blank cell = off track).

- **Order is derived by sorting ascending on gap.** Swapping two cars never requires reordering rows or recalculating neighbours.
- **Ties** (two cars with the exact same gap) are broken deterministically: whoever was ahead in the previous snapshot stays ahead (no phantom overtake), falling back to `labs.toml` order on the opening snapshot.
- **Matches both the racing domain and the engine.** F1 timing towers show gap to leader (`+0.80`, `+0.95`, `+2.40`), and `index.html` already converts gap-to-ahead into cumulative gap-to-leader on load (`cum += gap`). Compare Nov 10 → Nov 20 below: in gap-to-leader you immediately see Google didn't move (`0.95` → `0.95`) while OpenAI jumped past it (`1.45` → `0.80`).
- **Why not an absolute score?** The owner thinks in relative seconds (`0.25` wheel-to-wheel, `1.00` clear lead, `1.70` big break), and benchmark scales reset across versions (AA Index v3 → v4 → v5). Gap-to-leader stays anchored at `0.00` forever.

---

## 3. Concrete Sample

### `data/events.csv` (last 3 events)

```csv
date,headline,event_lab,caption
2026-11-09,Fable 5.2 restores order,anthropic,"Fable 5.2 takes the top score back, 20% cheaper."
2026-11-10,Carbon goes public,google,Gemini 4 Carbon opens to everyone and Google takes second.
2026-11-20,Clear air up front,openai,"GPT-6.2 and Gemini 4 Neon land, and OpenAI is second again."
```

### `data/gaps.csv` (last 3 events, converted from `merged.txt`)

```csv
date,anthropic,openai,google,meta,spacexai,deepseek,moonshot
2026-11-09,0.00,1.25,1.75,2.85,,,3.20
2026-11-10,0.00,1.45,0.95,2.55,,,2.90
2026-11-20,0.00,0.80,0.95,2.40,,,2.70
```

*(Check: on 2026-11-20, deltas are `0.80 − 0.00 = +0.80`, `0.95 − 0.80 = +0.15`, `2.40 − 0.95 = +1.45`, `2.70 − 2.40 = +0.30`.)*

### `data/notes.csv` (last 3 events)

```csv
date,lab,note
2026-11-09,anthropic,"Fable 5.2: 65 on the index, clear again."
2026-11-09,openai,Astra eight points back.
2026-11-09,google,Carbon opens to everyone tomorrow.
2026-11-09,meta,Muse Wonder can't see the leaders.
2026-11-09,moonshot,K3.1 Pro weights out since 4 Nov.
2026-11-10,anthropic,Fable 5.2 stays in front.
2026-11-10,google,"Carbon: second, and now on sale."
2026-11-10,openai,Astra three points back.
2026-11-10,meta,Wonder Full holds fourth.
2026-11-10,moonshot,Kimi K3.1 Pro remains fifth.
2026-11-20,anthropic,Clear leader.
2026-11-20,openai,GPT-6.2 Astra retakes second.
2026-11-20,google,Neon and Carbon: right on OpenAI's gearbox.
2026-11-20,meta,"Muse Wonder: strong, but not on the API."
2026-11-20,moonshot,"Kimi K3.1 Pro: fifth, ahead of Grok 4.7."
```

### `data/labs.toml` (sample entry with rebrand)

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

---

## 4. The Edit Experience

### Edit 1: "Pull OpenAI 0.3 s closer on 2026-11-20"
- Open `data/gaps.csv`, go to the `2026-11-20` row, change `openai` from `0.80` to `0.50`.
- Run `python3 scripts/build.py`.
- **Diff:** **1 file, 1 line, 1 cell.** Google (`0.95`), Meta (`2.40`), and Moonshot (`2.70`) stay untouched (today this requires editing two cars).

### Edit 2: "Insert a new event on 2026-11-15 where Google passes OpenAI"
- `data/events.csv`: append/insert **1 row** (`2026-11-15,Headline,google,Caption...`).
- `data/gaps.csv`: append/insert **1 row** (`2026-11-15,0.00,1.10,0.70,2.55,,,2.90`). Putting `0.70` in `google` and `1.10` in `openai` expresses the pass automatically—no row shuffling, and `build.py` sorts all rows by date.
- `data/notes.csv`: append/insert **5 rows** (one short note per on-track lab).
- Run `python3 scripts/build.py`.
- **Diff:** **3 files, 7 added lines, 0 existing lines modified.**

---

## 5. The Render Script (`scripts/build.py`)

**Runtime:** Python 3.11+ standard library only (`csv`, `tomllib`, `json`, `re`, `pathlib`). No `package.json`, no virtualenv, no `pip install`.

**What it does:**
1. Loads `data/labs.toml`, `data/logos.json`, `data/events.csv`, `data/gaps.csv`, `data/notes.csv`.
2. **Validates** (fails with file + line number before writing anything):
   - Dates are valid `YYYY-MM-DD`, unique in `events.csv` and `gaps.csv`, and match 1:1 across both files.
   - All lab IDs (column headers in `gaps.csv`, `event_lab`, `notes.csv`) exist in `labs.toml`.
   - Every non-empty gap is a finite float `>= 0`; every event has a `0.00` leader; warn if an event doesn't have 5 cars or has an exact tie.
   - `event_lab` (if set) is on track in that snapshot or the immediately preceding one.
   - Warn on missing/orphan notes in `notes.csv` and captions over 110 characters (2-line desktop / 3-line mobile budget).
   - Valid `#RGB`/`#RRGGBB` hex colours, valid `changes[].from` dates, and every referenced `logo` key exists in `logos.json`.
3. **Compiles** gap-to-leader rows into `index.html`'s existing object-form `SNAPSHOTS` (converting cumulative gaps back to car-ahead deltas `round(cur - prev, 2)` so the page's runtime engine needs **zero changes**), plus `LABS` and `LOGOS` (stripping doc-only metadata fields from `logos.json`). Escapes `</script` as `<\/script`.
4. **Embeds** into `index.html` between explicit markers inside `<script id="race-data">`, writing atomically:

```html
<script id="race-data">
// GENERATED BY scripts/build.py — edit files in data/, not here.
/* === BEGIN GENERATED DATA === */
var SNAPSHOTS = [ ... ];
var LABS = { ... };
var LOGOS = { ... };
/* === END GENERATED DATA === */
</script>
```

Supports `--check` (exits non-zero if `index.html` differs from what `data/` produces) for a lightweight pre-commit hook or GitHub Action.

```python
# Sketch of core compilation in scripts/build.py
snapshots = []
prev_order = []
for date in sorted(events):
    row = gaps[date]
    ranked = sorted(row.items(), key=lambda kv: (kv[1], tie_rank(kv[0], prev_order, lab_order)))
    standings, prev_gap = [], 0.0
    for lab, cum_gap in ranked:
        standings.append({"lab": lab, "gap": round(cum_gap - prev_gap, 2), "note": notes[(date, lab)]})
        prev_gap = cum_gap
    prev_order = [lab for lab, _ in ranked]
    snapshots.append({**events[date], "standings": standings})
```

---

## 6. Where `LOGOS` Should Live

Move `LOGOS` out of `index.html` into **`data/logos.json`**, keeping the exact canvas-ready schema (`box`, `size`, optional `bg`, `paths`) plus optional `"source"` and `"note"` strings (which `build.py` strips before embedding).

- **Why not raw `.svg` files?** The canvas painter doesn't draw `<img>`—it executes `Path2D(d)` with custom `box` crops (e.g., SpaceX AI's box intentionally crops to "XA" so the swoosh bleeds off the roundel) and custom linear-gradient structs (Meta). Writing a zero-dependency SVG parser for `<defs>`, transforms, and polygons would be brittle for ~9 marks that change once or twice a year.
- **Why not leave `LOGOS` hand-edited in `index.html`?** Moving it to `data/logos.json` guarantees `index.html`'s data block is 100% generated with one source of truth.

---

## 7. Risks and What I'd Leave Out

**Risks:**
- **Forgetting to run `build.py`** after editing `data/` leaves `index.html` stale on GitHub Pages. *Mitigation:* `build.py --check` in a git pre-commit hook (and/or a 10-line GitHub Action on push).
- **Leader pull-away edits** (making P1 pull 0.3 s further ahead of everyone else) require bumping 4 cells in `gaps.csv` instead of 1. Rare compared to moving P2–P5, and trivial in a spreadsheet.
- **Hand-editing CSV commas** in prose columns (`caption`, `note`). *Mitigation:* `build.py` checks column counts and fails loudly on malformed rows; spreadsheet editors and VS Code CSV extensions quote automatically.
- **Room for the expert panel:** Future `data/panel.csv` (`date,voice,order,url,note`) and `data/index.csv` (`date,version,<labs...>`) drop straight into `data/` alongside `gaps.csv`, with a future `scripts/derive.py` (or flag on `build.py`) computing or cross-checking `gaps.csv`.

**What I'd leave out:**
- **No `package.json` or JS build toolchain** — Python 3.11+ stdlib is already on macOS and keeps the repo dependency-free.
- **No per-snapshot inline overrides (`| name= | sub= | logo=`)** — unused across all 31 events; `labs.toml` `changes` already handles rebrands.
- **No `(demo)` flag** — unused in v2; trivially added as an optional column later if needed.
- **No panel derivation logic yet** — don't over-design the scoring algorithm before `VOICES.md` is turned into real per-event data.
