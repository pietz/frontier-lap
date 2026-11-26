# Scores behind data/race.csv (Nov 2026)

- `aa-history.csv`: 959 archived Artificial Analysis Intelligence Index scores (v4.0 to v5.0.2), mostly from Wayback captures of AA's leaderboard.
- `calib.py`: maps pre-v5 scores onto the v5 scale. Each old version is fitted onto v4.3.2 (quadratic, small per-lab offsets), then v4.3.2 onto v5. A model's estimate comes from the newest version it was scored on. Measured v5 scores are used as they are.
- `v5-estimates.csv`: the result per model (`how` says measured or estimated from which version; `se` is the error).
- `gen.py`: first draft of race.csv. For each release date, each lab is rated by its best available model (Codex, mini, Flash-Lite, Haiku, open-weights side models left out; Fable 5 off 12 Jun to 1 Jul), top five kept, s = round(10 - gap_in_points / 2), floored at 0. Steps where nothing changed were dropped; Neon (18 Nov) was nudged from 8 to 9. From here race.csv is edited by hand.
