/* ════════════════════════════════════════════════════════════════════════
   TEMPORARY test standings · open index.html?data=test to drive them.
   ════════════════════════════════════════════════════════════════════════

   Made-up numbers that exercise everything the real data doesn't yet:
   eight snapshots over two years, seven labs, two that join late
   (DeepSeek and xAI in Feb 2025), one that leaves (Mistral, Dec 2025), a
   rebrand that lands between two snapshots (xAI → SpaceX AI, July 2026),
   a three-abreast fight and uneven calendar gaps.

   This file runs after data.js, so it only replaces SNAPSHOTS and reuses
   the labs and logos from there. Delete it once the real history is in.
   ════════════════════════════════════════════════════════════════════════ */

SNAPSHOTS = `

2024-11-20  Five on the grid
  openai                o1 on pole, the field regrouping.
  anthropic   +0.40     The coders' car of choice.
  google      +0.45     Experimental Geminis trading fastest laps.
  meta        +1.30     Best of the open-weights class.
  mistral     +0.50     Europe's entry, hanging on.

2025-02-28  Two new cars in the fight
  openai                Deep Research, o3-mini, GPT-4.5. Still ahead.
  anthropic   +0.35     Sonnet 3.7 arrives with Claude Code.
  deepseek    +0.30     R1: from nowhere into the podium fight.
  google      +0.25     Gemini 2.0: quick, not quickest.
  spacexai    +0.40     Grok 3 gatecrashes the top five.
  meta        +1.20     Swamped by the newcomers.
  mistral     +0.45     Losing the tow.

2025-06-10  Three abreast into summer
  openai                o3-pro, by a front wing.
  google      +0.15     I/O upgrades: 2.5 Pro and Veo 3.
  anthropic   +0.15     Claude 4 tops the coding sector.
  spacexai    +0.90     Waiting on the Grok 4 upgrade.
  deepseek    +0.35     Quiet since R1.
  meta        +1.00     Behemoth delayed. Chequebook out.
  mistral     +0.40     Still circulating.

2025-10-01  The coding war
  openai                GPT-5 on top; Sora 2 lands.
  anthropic   +0.20     Sonnet 4.5: 77% on SWE-bench.
  google      +0.25     Nano Banana wins the crowd.
  spacexai    +0.50     Fast and cheap, drifting back.
  deepseek    +0.60     V3.1 keeps it honest.
  mistral     +0.90     Medium 3 mugs Meta.
  meta        +0.30     Still in the garage.

2025-12-03  Mistral parks it
  google                Gemini 3 Pro tops the timing screens.
  anthropic   +0.20     Opus 4.5 breaks 80% on SWE-bench.
  openai      +0.20     Code red on the pit wall.
  spacexai    +0.90     Grok 4.1 can't follow the leaders.
  deepseek    +0.45     Hanging on to the top five.
  meta        +1.20     LeCun leaves the team.

2026-04-24  GPT-5.5 strikes back
  openai                GPT-5.5 goes three points clear.
  anthropic   +0.25     Mythos locked away; Opus 4.7 grumbles.
  google      +0.30     Gemini 3.1 Pro still in touch.
  meta        +1.20     Muse Spark: straight into the top five.
  spacexai    +0.15     Mugged by a Meta comeback.
  deepseek    +0.50     V4 can't hold them off.

2026-07-25  The pack closes in
  anthropic             Fable back from its red flag.
  openai      +0.45     GPT-5.6 Sol: one point off the lead.
  spacexai    +1.00     New name, new pace: Grok 4.5.
  google      +0.10     Three new Flashes, still no Pro.
  meta        +0.25     Muse Spark 1.1 keeps the tow.
  deepseek    +0.80     Dropping off the back.

2026-11-20  Clear air up front
  anthropic             Clear leader.
  openai      +1.00     Still second.
  google      +0.25     Caught up a lot. Right on OpenAI's gearbox.
  meta        +1.70     Muse did well. Just ahead of SpaceX AI.
  spacexai    +0.30     Close behind Meta.
  deepseek    +0.60     Last car on the lead lap.

`;
