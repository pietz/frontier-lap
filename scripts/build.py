#!/usr/bin/env python3
"""Check data/race.csv and copy it into index.html between the RACE markers.

    python3 scripts/build.py

No dependencies. Stops with a list of problems instead of writing a broken page.
"""
import csv, re, sys, datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CSV, HTML = ROOT / 'data' / 'race.csv', ROOT / 'index.html'
HEAD = ['date', 'event', 'p1', 'p2', 'p3', 'p4', 'p5', 's1', 's2', 's3', 's4', 's5', 'caption']

html = HTML.read_text(encoding='utf-8')
labs_src = re.search(r'var LABS = \{(.*?)\n\};', html, re.S).group(1)
LABS = set(re.findall(r'^\s{2}(\w+):\s*\{', labs_src, re.M))

problems, dates, steps = [], set(), 0
text = CSV.read_text(encoding='utf-8')
rows = list(csv.reader(text.splitlines()))
if not rows or [h.strip() for h in rows[0]] != HEAD:
    sys.exit(f'race.csv: the first line must be\n  {",".join(HEAD)}')
prev = set()
for n, r in enumerate(rows[1:], start=2):
    if not any(c.strip() for c in r):
        continue
    if len(r) != len(HEAD):
        problems.append(f'line {n}: {len(r)} cells, expected {len(HEAD)} (quote a caption that has a comma)'); continue
    d = dict(zip(HEAD, (c.strip() for c in r)))
    try:
        datetime.date.fromisoformat(d['date'])
    except ValueError:
        problems.append(f'line {n}: "{d["date"]}" is not a date (YYYY-MM-DD)')
    if dates and d['date'] < max(dates):
        problems.append(f'line {n}: {d["date"]} comes after a later date; keep the rows in date order')
    dates.add(d['date']); steps += 1
    ids = [d[f'p{i}'] for i in range(1, 6)]
    for i in ids:
        if i not in LABS:
            problems.append(f'line {n}: unknown lab "{i}" (LABS has: {", ".join(sorted(LABS))})')
    if len(set(ids)) != 5:
        problems.append(f'line {n}: a lab is listed twice')
    try:
        sc = [int(d[f's{i}']) for i in range(1, 6)]
        if any(v < 0 for v in sc):
            problems.append(f'line {n}: numbers must be 0 or more')
        if sc[0] <= 0:
            problems.append(f'line {n}: s1 must be above 0')
        for i in range(4):
            if sc[i] <= sc[i + 1]:
                problems.append(f'line {n}: s{i + 2} ({sc[i + 1]}) must be lower than s{i + 1} ({sc[i]}); each place at least one below the one ahead')
    except ValueError:
        problems.append(f'line {n}: s1..s5 must be whole numbers')
    if d['event'] and d['event'] not in ids and d['event'] not in prev:
        problems.append(f'line {n}: event "{d["event"]}" is on track neither here nor in the step before')
    if '`' in d['caption'] or '${' in d['caption']:
        problems.append(f'line {n}: a caption may not contain ` or ${{')
    prev = set(ids)

if problems:
    sys.exit('race.csv has problems, index.html not changed:\n  ' + '\n  '.join(problems))

block = '/* RACE:BEGIN */\n' + text.strip() + '\n/* RACE:END */'
new, k = re.subn(r'/\* RACE:BEGIN \*/.*?/\* RACE:END \*/', lambda _: block, html, flags=re.S)
if k != 1:
    sys.exit('index.html: could not find exactly one RACE:BEGIN / RACE:END pair')
HTML.write_text(new, encoding='utf-8')
print(f'index.html updated: {steps} steps from data/race.csv')
