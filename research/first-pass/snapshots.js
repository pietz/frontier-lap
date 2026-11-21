/* ════════════════════════════════════════════════════════════════════════
   Fastest Lab · researched standings history, Nov 2024 → Nov 2026
   Drop-in replacement for the SNAPSHOTS array in fastest-lab/index.html.

   Same format as the page: labs in finishing order, P1 first; `gap` is the
   interval in seconds to the car directly AHEAD (the leader's gap is 0).
   Scale is calibrated on the owner's fixed Nov 2026 take:
   ~0.25s = wheel to wheel, 1.0s = a clear lead, 1.7s = a big break.

   Per-entry overrides: xAI ran as name 'xAI' / sub 'Grok' until the July 2026
   SpaceX AI rebrand; Meta's sub is 'Llama' until Muse Spark (April 2026).

   Rationale and sources for every snapshot: standings-history.md
   ════════════════════════════════════════════════════════════════════════ */

const SNAPSHOTS = [
  { // o1-preview era; Claude 3.5 Sonnet (new) is the coders' pick; Gemini still experimental
    date: '2024-11-20', headline: "OpenAI's race to lose",
    standings: [
      { lab: 'openai',    gap: 0,    note: 'o1 on pole, the field regrouping.' },
      { lab: 'anthropic', gap: 0.40, note: "The coders' car of choice." },
      { lab: 'google',    gap: 0.45, note: 'Experimental Geminis trading fastest laps.' },
      { lab: 'meta',      gap: 1.30, note: 'Best of the open-weights class.', sub: 'Llama' },
      { lab: 'spacexai',  gap: 0.35, note: 'Grok 2: still learning the circuit.', name: 'xAI', sub: 'Grok' },
    ],
  },
  { // Grok 3 (Feb 17), Claude 3.7 Sonnet + Claude Code (Feb 24), GPT-4.5 (Feb 27); DeepSeek R1 would be top-5
    date: '2025-02-28', headline: 'Grok 3 gatecrashes the front',
    standings: [
      { lab: 'openai',    gap: 0,    note: 'Deep Research, o3-mini, GPT-4.5. Still ahead.' },
      { lab: 'anthropic', gap: 0.35, note: 'Sonnet 3.7 arrives with Claude Code.' },
      { lab: 'google',    gap: 0.30, note: 'Gemini 2.0: quick, not quickest.' },
      { lab: 'spacexai',  gap: 0.15, note: 'Grok 3 comes from nowhere.', name: 'xAI', sub: 'Grok' },
      { lab: 'meta',      gap: 1.70, note: 'Overtaken by wildcard entry DeepSeek.', sub: 'Llama' },
    ],
  },
  { // Gemini 2.5 Pro (Mar 25) debuts #1 on LMArena by ~40 points; Llama 4 (Apr 5) benchmark row; o3 lands Apr 16
    date: '2025-04-10', headline: 'Gemini 2.5 takes pole',
    standings: [
      { lab: 'google',    gap: 0,    note: 'Gemini 2.5 Pro. Forty Elo clear.' },
      { lab: 'openai',    gap: 0.20, note: 'Ghibli goes viral; o3 still garaged.' },
      { lab: 'anthropic', gap: 0.30, note: 'Sonnet 3.7 keeps the coders loyal.' },
      { lab: 'spacexai',  gap: 0.45, note: 'Grok 3 hangs on to the pack.', name: 'xAI', sub: 'Grok' },
      { lab: 'meta',      gap: 1.90, note: 'Llama 4: stewards reviewing those benchmarks.', sub: 'Llama' },
    ],
  },
  { // o3 / o3-pro, Gemini 2.5 Pro + Veo 3 at I/O, Claude 4 (May 22); Meta delays Behemoth
    date: '2025-06-10', headline: 'Three abreast into summer',
    standings: [
      { lab: 'openai',    gap: 0,    note: 'o3-pro, by a front wing.' },
      { lab: 'google',    gap: 0.15, note: 'I/O upgrades: 2.5 Pro and Veo 3.' },
      { lab: 'anthropic', gap: 0.15, note: 'Claude 4 tops the coding sector.' },
      { lab: 'spacexai',  gap: 0.90, note: 'Waiting on the Grok 4 upgrade.', name: 'xAI', sub: 'Grok' },
      { lab: 'meta',      gap: 1.90, note: 'Behemoth delayed. Chequebook out.', sub: 'Llama' },
    ],
  },
  { // Grok 4 (Jul 9) tops the AA index for a month; GPT-5 (Aug 7) takes it back despite a rough launch
    date: '2025-08-10', headline: 'GPT-5: bumpy but ahead',
    standings: [
      { lab: 'openai',    gap: 0,    note: 'Rough launch, still fastest.' },
      { lab: 'anthropic', gap: 0.30, note: 'Opus 4.1 and a Claude Code boom.' },
      { lab: 'google',    gap: 0.10, note: 'Genie 3 dazzles; 2.5 Pro ages.' },
      { lab: 'spacexai',  gap: 0.25, note: 'Grok 4 led the index in July.', name: 'xAI', sub: 'Grok' },
      { lab: 'meta',      gap: 2.60, note: 'Signing drivers, not setting laps.', sub: 'Llama' },
    ],
  },
  { // Claude Sonnet 4.5 (Sep 29), Sora 2 (Sep 30), Nano Banana (Aug 26)
    date: '2025-10-01', headline: 'The coding war',
    standings: [
      { lab: 'openai',    gap: 0,    note: 'GPT-5 on top; Sora 2 lands.' },
      { lab: 'anthropic', gap: 0.20, note: 'Sonnet 4.5: 77% on SWE-bench.' },
      { lab: 'google',    gap: 0.25, note: 'Nano Banana wins the crowd.' },
      { lab: 'spacexai',  gap: 0.50, note: 'Fast and cheap, drifting back.', name: 'xAI', sub: 'Grok' },
      { lab: 'meta',      gap: 2.60, note: 'Still in the garage.', sub: 'Llama' },
    ],
  },
  { // Gemini 3 Pro (Nov 18), Claude Opus 4.5 (Nov 24), OpenAI "code red" memo (Dec 2)
    date: '2025-12-03', headline: 'Code red at OpenAI',
    standings: [
      { lab: 'google',    gap: 0,    note: 'Gemini 3 Pro tops the timing screens.' },
      { lab: 'anthropic', gap: 0.20, note: 'Opus 4.5 breaks 80% on SWE-bench.' },
      { lab: 'openai',    gap: 0.20, note: 'Code red on the pit wall.' },
      { lab: 'spacexai',  gap: 0.90, note: "Grok 4.1 can't follow the leaders.", name: 'xAI', sub: 'Grok' },
      { lab: 'meta',      gap: 2.40, note: 'LeCun leaves the team.', sub: 'Llama' },
    ],
  },
  { // Claude Code's holiday breakout, Opus 4.6 + GPT-5.3-Codex (Feb 5), Gemini 3.1 Pro (Feb 19)
    date: '2026-02-20', headline: 'Claude Code fever',
    standings: [
      { lab: 'anthropic', gap: 0,    note: 'Opus 4.6 and a Claude Code craze.' },
      { lab: 'google',    gap: 0.15, note: 'Gemini 3.1 Pro tops the index.' },
      { lab: 'openai',    gap: 0.15, note: 'GPT-5.3-Codex launched minutes after Opus.' },
      { lab: 'spacexai',  gap: 1.40, note: 'New owner SpaceX, same pace.', name: 'xAI', sub: 'Grok' },
      { lab: 'meta',      gap: 2.10, note: 'Ten months since Llama 4.', sub: 'Llama' },
    ],
  },
  { // GPT-5.5 (Apr 23) tops the index by 3; Opus 4.7 backlash; Mythos Preview restricted; Muse Spark (Apr 8)
    date: '2026-04-24', headline: 'GPT-5.5 strikes back',
    standings: [
      { lab: 'openai',    gap: 0,    note: 'GPT-5.5 goes three points clear.' },
      { lab: 'anthropic', gap: 0.25, note: 'Mythos locked away; Opus 4.7 grumbles.' },
      { lab: 'google',    gap: 0.30, note: 'Gemini 3.1 Pro still in touch.' },
      { lab: 'meta',      gap: 1.20, note: 'Muse Spark: straight into the top five.' },
      { lab: 'spacexai',  gap: 0.15, note: 'Mugged by a Meta comeback.', name: 'xAI', sub: 'Grok' },
    ],
  },
  { // Claude Fable 5 (Jun 9) launches ~5 index points clear of every other lab
    date: '2026-06-10', headline: 'Fable 5 rewrites the board',
    standings: [
      { lab: 'anthropic', gap: 0,    note: 'Fable 5: five points clear at launch.' },
      { lab: 'openai',    gap: 1.30, note: 'GPT-5.5 suddenly looks a generation old.' },
      { lab: 'google',    gap: 0.45, note: 'Flash is quick. Where is Pro?' },
      { lab: 'meta',      gap: 0.60, note: 'Muse Spark holding station.' },
      { lab: 'spacexai',  gap: 0.15, note: 'Grok Build joins the coding race.', name: 'xAI', sub: 'Grok' },
    ],
  },
  { // GPT-5.6 Sol (Jul 9), SpaceX AI rebrand + Grok 4.5 (Jul 6-8), Opus 5 (Jul 24); Google ships Flash only
    date: '2026-07-25', headline: 'The pack closes in',
    standings: [
      { lab: 'anthropic', gap: 0,    note: 'Fable back from its red flag.' },
      { lab: 'openai',    gap: 0.45, note: 'GPT-5.6 Sol: one point off the lead.' },
      { lab: 'spacexai',  gap: 1.00, note: 'New name, new pace: Grok 4.5.' },
      { lab: 'google',    gap: 0.10, note: 'Three new Flashes, still no Pro.' },
      { lab: 'meta',      gap: 0.25, note: 'Muse Spark 1.1 keeps the tow.' },
    ],
  },
  { // Fable 5.1 (Sep 1), Muse Spark 1.3 (Sep 2), GPT-6 Astra (Sep 3-4); Google at its low point
    date: '2026-09-10', headline: 'GPT-6 arrives',
    standings: [
      { lab: 'anthropic', gap: 0,    note: 'Fable 5.1 keeps its nose ahead.' },
      { lab: 'openai',    gap: 0.30, note: 'GPT-6 Astra: level on coding.' },
      { lab: 'meta',      gap: 1.10, note: 'Muse Spark 1.3: best of the rest.' },
      { lab: 'spacexai',  gap: 0.20, note: 'Grok 4.6 matched GPT-5.6. Briefly.' },
      { lab: 'google',    gap: 0.25, note: 'Seven months without a Pro.' },
    ],
  },
  { // Opus 5.5 (Sep 22), Gemini 4 Argon (Sep 30, GA Oct 13), Muse Wonder (Oct 12), Grok 4.7 (Sep 21)
    date: '2026-10-15', headline: 'Gemini 4 rejoins the fight',
    standings: [
      { lab: 'anthropic', gap: 0,    note: 'Opus 5.5: fastest by several points.' },
      { lab: 'openai',    gap: 0.85, note: 'GPT-6 fast, but not Opus fast.' },
      { lab: 'google',    gap: 0.45, note: 'Gemini 4 Argon: back on the podium.' },
      { lab: 'meta',      gap: 0.55, note: 'Muse Wonder stuns the timing screens.' },
      { lab: 'spacexai',  gap: 0.60, note: 'Grok 4.7 in. Grok 5 missing.' },
    ],
  },
  { // ← the real one: the owner's take, November 2026
    date: '2026-11-20', headline: 'Clear air up front',
    standings: [
      { lab: 'anthropic', gap: 0,    note: 'Clear leader.' },
      { lab: 'openai',    gap: 1.00, note: 'Still second.' },                              // the noticeable gap
      { lab: 'google',    gap: 0.25, note: "Caught up a lot. Right on OpenAI's gearbox." }, // tight battle
      { lab: 'meta',      gap: 1.70, note: 'Muse did well. Just ahead of SpaceX AI.' },     // the larger gap
      { lab: 'spacexai',  gap: 0.30, note: 'Close behind Meta.' },                          // tight battle
    ],
  },
];
