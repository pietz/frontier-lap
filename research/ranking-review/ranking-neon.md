# Frontier Lap Ranking Review: `neon` (Nov 2024 – Nov 2026)

## Method & Verification Notes

- **Backbone:** The [Artificial Analysis Intelligence Index](https://artificialanalysis.ai/leaderboards/models) in the version active on each date (**v1.3** through Feb 10, 2025; **v2.0** Feb 11 – Aug 4, 2025; **v2.1/v2.2** Aug 5 – Sep 1, 2025; **v3.0** Sep 2 – Dec 2025; **v4.0** Jan – Jun 14, 2026; **v4.1/v4.1.1** Jun 15 – Sep 3, 2026; **v4.2** Sep 4, 2026; **v4.3/v4.3.2** Sep 7 – Oct 26, 2026; **v5.0/v5.0.1** Oct 27, 2026 – present), verified against AA launch articles, live v5.0.1 leaderboard data, AA's [methodology changelog](https://artificialanalysis.ai/methodology/intelligence-benchmarking), and Wayback Machine captures of `artificialanalysis.ai/leaderboards/models` for 2024–2025.
- **Adjustments from the shared shortlist (`VOICES.md`):**
  - **Core voices:** Simon Willison, Every (*Vibe Check*), Nathan Lambert (*Interconnects*), METR (*Time Horizons 1.1* & pre-deployment reports), Zvi Mowshowitz (*Don't Worry About the Vase*), and Theo Browne (t3.gg).
  - **Supporting cross-checks:** Epoch AI's [ECI](https://epoch.ai/data/eci_scores.csv), [Terminal-Bench 4.1](https://www.tbench.ai/leaderboard/terminal-bench/4.1), [AA Coding Agent Index](https://artificialanalysis.ai/agents/coding-agents), [Vals Index](https://www.vals.ai/benchmarks/vals_index), [Aider Polyglot](https://aider.chat/docs/leaderboards/), Ethan Mollick, and LMArena (weak tie-breaker only).
  - **Handle-with-care rules enforced:** Andrej Karpathy's move to Anthropic on May 19, 2026 is verified; his post-May 2026 takes are excluded as insider commentary. Matt Shumer never moves a rank.
- **Rules applied consistently (no lab gets a pass):**
  1. **Strict top five:** Only the five strongest labs appear on track at any date; a lab that falls to 6th drops off track (Meta leaves in Feb 2025 and returns in Apr 2026; SpaceX AI drops out in late Oct 2026).
  2. **Usability & access:** Restricted or partners-only models (Claude Mythos Preview in Apr 2026, Muse Wonder Full in Oct 2026, Gemini 4 Carbon during its Oct 28 – Nov 9 Fairwind cyber preview) are uniformly discounted relative to generally usable API/product models.
  3. **Gap scale:** `+0.25` = wheel to wheel, `+1.00` = clear lead, `+1.70` = big break. Numbers in parentheses below show cumulative gap to P1.
- **Unverified items (explicitly flagged):** Exact AA v1.3 numerical scores for `o1-preview` and `gemini-exp-1121` in Nov 2024 (Wayback's Nov 7, 2024 capture still showed the legacy non-reasoning quality index topped by GPT-4o at 100.0); exact AA v4.0 score for `Grok 4.1` in Jan 2026; exact launch date of `Grok 4.20` (Epoch ECI dates it `2026-02-17`, verified on ECI CSV, not via an x.ai blog post); and `Qwen4 Max` has not yet been scored on Epoch ECI or AA's Coding Agent Index as of 2026-11-21.

---

## Timeline of Top-Five Changes (32 Events)

### 1. 2024-11-20 · OpenAI's race to lose *(Opening State)*
- **Event:** Baseline standings with `o1-preview` / `o1-mini` / `GPT-4o`, [Claude 3.5 Sonnet (Oct 22)](https://www.anthropic.com/news/3-5-models-and-computer-use), `Gemini 1.5 Pro` / [`gemini-exp-1121`](https://simonwillison.net/2024/Nov/22/gemini-exp-1121), `Llama 3.1 405B` / `3.2`, and `Grok 2`.
- **Top five:** 1. **OpenAI** (0.00) · 2. **Anthropic** `+0.35` (0.35) · 3. **Google** `+0.50` (0.85) · 4. **Meta** `+1.20` (2.05) · 5. **xAI** `+0.35` (2.40)
- **AA Index & cross-checks:** AA v1.3 (Wayback `2024-11-07` still showed legacy Quality Index: `GPT-4o` 100.0, `Llama 3.1 405B` 99.8, `Claude 3.5 Sonnet Jun` 98.0; exact v1.3 `o1-preview` / `gemini-exp-1121` scores *unverified*). Epoch ECI: `o1-mini` 135.3, `o1-preview` 133.6, `Claude 3.5 Sonnet (Oct)` 133.4, `Gemini 1.5 Pro` 130.5. METR 1.1 50% horizon: `Claude 3.5 Sonnet (Oct)` 20.5m vs `o1-preview` 20.3m.
- **Voices:** [Simon Willison](https://simonwillison.net/2024/Nov/22/gemini-exp-1121) noted `gemini-exp-1121` tying GPT-4o at #1 on Chatbot Arena, while [Nathan Lambert](https://www.interconnects.ai/p/switched-to-claude-35-5ed) and developers overwhelmingly picked upgraded Claude 3.5 Sonnet (49.0% SWE-bench Verified) for daily coding.
- **Reasoning:** OpenAI owns the only shipped reasoning family and the broadest product suite, while Anthropic's coding dominance keeps it close (`+0.35`). Google's best checkpoints are still experimental, Meta leads open weights with Llama 3.1 405B, and xAI's Grok 2 trails the field.

### 2. 2024-12-20 · Full o1 and the o3 preview widen OpenAI's lead (`@openai`)
- **Event:** OpenAI ships full `o1` and `o1 pro` (Dec 5) and previews `o3` scoring 87.5% on ARC-AGI (Dec 20); Google ships `Gemini 2.0 Flash` preview (Dec 11); Meta ships `Llama 3.3 70B` (Dec 6).
- **Top five:** 1. **OpenAI** (0.00) · 2. **Anthropic** `+0.55` (0.55) · 3. **Google** `+0.30` (0.85) · 4. **Meta** `+1.25` (2.10) · 5. **xAI** `+0.35` (2.45)
- **AA Index & cross-checks:** AA v1.3 (`o1` exact v1.3 score *unverified*; later v2.0 `o1` = 62). Epoch ECI: `o1` jumps to 141.2 (+7.6 over `o1-preview` and +7.8 over Claude 3.5 Sonnet), `Grok 2 (Dec)` 129.8, `Llama 3.3 70B` 126.2. METR 1.1: `o1` doubles the horizon to 38.8m.
- **Voices:** [Nathan Lambert](https://www.interconnects.ai/p/openais-o3-the-2024-finale-of-ai) called the `o3` preview a genuine scaling inflection even while warning about high compute cost and lack of public availability.
- **Reasoning:** Full `o1` (usable immediately) opens a clear lead over reasoning-less Anthropic (`+0.55`), while `o3` is discounted for being preview-only. `Gemini 2.0 Flash` narrows Google's gap to Anthropic.

### 3. 2025-01-20 · DeepSeek R1 shakes the paddock (`@deepseek`)
- **Event:** [DeepSeek R1](https://api-docs.deepseek.com/news/news250120) launches under an MIT license with o1-class reasoning at a fraction of OpenAI's cost, triggering a 17% single-day Nvidia selloff on Jan 27.
- **Top five:** 1. **OpenAI** (0.00) · 2. **Anthropic** `+0.55` (0.55) · 3. **Google** `+0.30` (0.85) · 4. **DeepSeek** `+0.20` (1.05) · 5. **Meta** `+1.15` (2.20) *(xAI drops to 6th)*
- **AA Index & cross-checks:** AA v2.0 (Wayback `2025-03-02`): `DeepSeek R1` scores **60.2**, trailing only OpenAI's reasoning models (`o1` 62, later `o3-mini` 62.9–65.5) and beating every shipped Anthropic, Google, Meta, and xAI model at launch. Epoch ECI: `DeepSeek R1` **138.6**, crushing `Llama 3.3` (126.2) and `Grok 2` (129.8).
- **Voices:** [Simon Willison](https://simonwillison.net/2025/Jan/20/deepseek-r1/) immediately tested R1 and its distilled checkpoints; [Nathan Lambert](https://www.interconnects.ai/p/deepseek-r1-recipe-for-o1) verified that the RL recipe was genuine and not mere distillation, crowning DeepSeek the new open-weights leader.
- **Reasoning:** DeepSeek bursts directly into P4—right behind Google on overall lineup despite beating Google on pure reasoning—knocking Grok 2-era xAI out of the top five. Meta clings to P5 briefly on ecosystem breadth before Grok 3 arrives.

### 4. 2025-02-17 · Grok 3 gatecrashes the front; Meta drops off track (`@spacexai`)
- **Event:** xAI launches [Grok 3](https://x.ai/news/grok-3), the first model past 1400 Elo on LMArena; earlier OpenAI shipped `o3-mini` (Jan 31) and Deep Research (Feb 2), and Google shipped `Gemini 2.0 Pro` (Feb 5).
- **Top five:** 1. **OpenAI** (0.00) · 2. **Anthropic** `+0.55` (0.55) · 3. **Google** `+0.20` (0.75) · 4. **DeepSeek** `+0.15` (0.90) · 5. **xAI** `+0.15` (1.05) *(Meta drops to 6th)*
- **AA Index & cross-checks:** AA v2.0 (launched Feb 11, 2025; Wayback `2025-03-02`): `o3-mini (high)` **65.5**, `o3-mini` **62.9**, `DeepSeek R1` **60.2**, `Gemini 2.0 Pro Exp` **49.2**, `Grok 3 Reasoning Beta` **56.1** (verified on Wayback `2025-08-01`). Epoch ECI: `o3-mini` 140.6, `DeepSeek R1` 138.6, `Grok 3` 137.6, `Gemini 2.0 Pro` 135.4.
- **Voices:** [Zvi Mowshowitz](https://thezvi.substack.com/p/go-grok-yourself) and [Nathan Lambert](https://www.interconnects.ai/p/grok-3-and-an-accelerating-ai-roadmap) confirmed Grok 3 was genuinely competitive with the top tier—if initially gated to X Premium+ without an API.
- **Reasoning:** Grok 3 launches xAI straight back into P5 (narrowly behind DeepSeek due to missing API access and closed weights), **pushing Meta (still on Llama 3.3) out of the top five**. Anthropic is at its widest deficit of early 2025 one week before Claude 3.7.

### 5. 2025-02-24 · Claude 3.7 Sonnet brings Claude Code (`@anthropic`)
- **Event:** Anthropic releases [Claude 3.7 Sonnet](https://www.anthropic.com/news/claude-3-7-sonnet) (first hybrid reasoning model) alongside the `Claude Code` research preview; OpenAI's `$75/$150` `GPT-4.5` follows on Feb 27.
- **Top five:** 1. **OpenAI** (0.00) · 2. **Anthropic** `+0.30` (0.30) · 3. **Google** `+0.35` (0.65) · 4. **DeepSeek** `+0.15` (0.80) · 5. **xAI** `+0.20` (1.00)
- **AA Index & cross-checks:** AA v2.0 (Wayback `2025-03-02`): `o3-mini (high)` **65.5**, `DeepSeek R1` **60.2**, `Claude 3.7 Sonnet Thinking` **57.4** (non-thinking 48.2), `GPT-4.5` **53.0**. Epoch ECI: `Claude 3.7 Sonnet` **141.0** (edging `o3-mini` 140.6; `GPT-4.5` 136.5). METR 1.1: `Claude 3.7` reaches **60.4m** (first model past 1 hour).
- **Voices:** [Simon Willison](https://simonwillison.net/2025/Feb/24/claude-37-sonnet-and-claude-code/) praised Claude Code's agentic workflow; [Nathan Lambert](https://www.interconnects.ai/p/claude-3-7-thonks) welcomed hybrid thinking and wrote [GPT-4.5 was "not a frontier model"](https://www.interconnects.ai/p/gpt-45-not-a-frontier-model) for its price.
- **Reasoning:** Even though `Claude 3.7` trails `o3-mini` and `R1` on AA v2.0, its 1-hour METR horizon and Claude Code launch close Anthropic's gap to `+0.30`. GPT-4.5 adds nothing to OpenAI's lead.

### 6. 2025-03-25 · Gemini 2.5 Pro takes pole (`@google`)
- **Event:** Google ships [Gemini 2.5 Pro Experimental](https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/) with 1M context and native thinking; OpenAI ships viral GPT-4o native image generation the same day. *(On Apr 5, Meta's Llama 4 Scout & Maverick flop amid an LMArena experimental-variant controversy—ECI 132.2, public Maverick #32 on Arena—so Meta fails to re-enter the top five.)*
- **Top five:** 1. **Google** (0.00) · 2. **OpenAI** `+0.20` (0.20) · 3. **Anthropic** `+0.30` (0.50) · 4. **DeepSeek** `+0.45` (0.95) · 5. **xAI** `+0.15` (1.10)
- **AA Index & cross-checks:** AA v2.0 (Wayback `2025-04-02`): `Gemini 2.5 Pro Exp` rockets to **68.3**, taking #1 outright ahead of `o3-mini (high)` (65.5) and `DeepSeek R1` (60.2). Epoch ECI: `Gemini 2.5 Pro` **144.0** (+3.0 over `Claude 3.7` and `o1`). LMArena: debuted #1 by ~40 Elo.
- **Voices:** [Nathan Lambert](https://www.interconnects.ai/p/gemini-25-pro-googles-second-ai-chance) called it Google's true comeback; [Simon Willison](https://simonwillison.net/2025/Apr/5/llama-4/) and [Nathan Lambert](https://www.interconnects.ai/p/llama-4) documented Llama 4's Arena debacle and weak coding performance, confirming Meta remained outside the top five.
- **Reasoning:** Google takes P1 for the first time with an undisputed best model on both AA v2.0 and ECI. OpenAI stays close (`+0.20`) on product breadth and GPT-4o images while `o3` remains three weeks away.

### 7. 2025-04-16 · o3 and o4-mini put OpenAI back in front (`@openai`)
- **Event:** OpenAI ships full [o3 and o4-mini](https://openai.com/index/introducing-o3-and-o4-mini/) with integrated web search, Python, and visual-thinking tool use.
- **Top five:** 1. **OpenAI** (0.00) · 2. **Google** `+0.15` (0.15) · 3. **Anthropic** `+0.35` (0.50) · 4. **DeepSeek** `+0.45` (0.95) · 5. **xAI** `+0.25` (1.20)
- **AA Index & cross-checks:** AA v2.0 (Wayback `2025-08-01`): `o3` **70.0**, `o4-mini (high)` **69.8** vs `Gemini 2.5 Pro (Mar)` **68.9**. Epoch ECI: `o3` **147.0**, `o4-mini` **145.2** vs `Gemini 2.5 Pro` 144.0. METR 1.1: `o3` doubles the field to **119.7m (2.00 hr)**. Aider Polyglot: `o3 (high)` **81.3%**.
- **Voices:** [Nathan Lambert](https://www.interconnects.ai/p/openais-o3-over-optimization-is-back) praised o3's genuine agentic search leap while flagging early hallucination/over-optimization quirks.
- **Reasoning:** Tool-integrated `o3` takes the lead on AA v2.0, Epoch ECI, and METR 1.1 simultaneously. Google's Gemini 2.5 Pro stays right on its gearbox (`+0.15`) on price, speed, and 1M context.

### 8. 2025-05-22 · Claude 4 makes it three abreast (`@anthropic`)
- **Event:** Anthropic launches [Claude Opus 4 and Sonnet 4](https://www.anthropic.com/news/claude-4) and takes `Claude Code` generally available (72.5% SWE-bench Verified vs 69.1% for o3); Google I/O (May 20) ships `Veo 3` and upgraded `Gemini 2.5 Pro` (Jun 5 checkpoint follows).
- **Top five:** 1. **OpenAI** (0.00) · 2. **Google** `+0.15` (0.15) · 3. **Anthropic** `+0.15` (0.30) · 4. **DeepSeek** `+0.55` (0.85) · 5. **xAI** `+0.40` (1.25)
- **AA Index & cross-checks:** AA v2.0 (Wayback `2025-08-01`): `o3-pro` (Jun 10) **71.0**, `Gemini 2.5 Pro (Jun)` **70.5**, `o3` **70.0**, `Claude 4 Opus Thinking` **64.4** (non-thinking 57.7). Epoch ECI: `o3` 147.0 (`o3-pro` 147.5), `Gemini 2.5 Pro (Jun)` 144.9, `Claude Opus 4` 142.9. Aider Polyglot: `Gemini 2.5 Pro 06-05` **83.1%**, `o3-pro` **84.9%**. METR 1.1: `Opus 4` **100.4m**.
- **Voices:** [Nathan Lambert](https://www.interconnects.ai/p/claude-4-and-anthropics-bet-on-code) highlighted Anthropic's deliberate bet on real-world software agents over math-olympiad benchmarks; practitioners and Theo Browne kept Claude Code as the default coding harness.
- **Reasoning:** Index scores leave Anthropic 6 points behind `o3` and `2.5 Pro`, yet real-world SWE-bench and Claude Code GA leadership pull the front three wheel-to-wheel within `0.30s`.

### 9. 2025-05-29 · DeepSeek R1-0528 leaps to frontier parity (`@deepseek`)
- **Event:** DeepSeek drops `DeepSeek-R1-0528` (open weights, MIT license), gaining +8 points on AA v2.0 in a single checkpoint.
- **Top five:** 1. **OpenAI** (0.00) · 2. **Google** `+0.15` (0.15) · 3. **Anthropic** `+0.15` (0.30) · 4. **DeepSeek** `+0.25` (0.55) · 5. **xAI** `+0.70` (1.25)
- **AA Index & cross-checks:** [AA R1-0528 report](https://artificialanalysis.ai/articles/deepseek-r1-update) (May 29, 2025) & Wayback `2025-08-01` (AA v2.0): `DeepSeek R1 0528` jumps from **60 to 68.3**, tying `Gemini 2.5 Pro` (Mar: 68.9) and beating `Claude 4 Opus Thinking` (64.4) and `Grok 3 Reasoning` (56.1). Epoch ECI: **140.7**.
- **Voices:** [Nathan Lambert](https://www.interconnects.ai/p/latest-open-artifacts-10-new-deepseek) underscored that R1-0528 closed the open-to-closed reasoning gap dramatically while Meta delayed Llama 4 Behemoth.
- **Reasoning:** `events.txt` missed this release entirely. An 8-point AA jump to tie Google and beat Claude 4 on the index pulls DeepSeek within `+0.25` of the front three, opening a wide gap over aging Grok 3.

### 10. 2025-07-09 · Grok 4 tops the index, stumbles on trust (`@spacexai`)
- **Event:** xAI launches [Grok 4 and Grok 4 Heavy](https://x.ai/news/grok-4), claiming xAI's first #1 on the Artificial Analysis Intelligence Index.
- **Top five:** 1. **OpenAI** (0.00) · 2. **Google** `+0.15` (0.15) · 3. **Anthropic** `+0.15` (0.30) · 4. **xAI** `+0.25` (0.55) · 5. **DeepSeek** `+0.45` (1.00)
- **AA Index & cross-checks:** AA v2.0 (Wayback `2025-08-01`): `Grok 4` **73.2** (#1 overall!), ahead of `o3-pro` **71.0**, `Gemini 2.5 Pro` **70.5**, `o3` **70.0**, `Qwen3 235B 2507` **68.9**, `DeepSeek R1 0528` **68.3**, and `Claude 4 Opus Thinking` **64.4**. Aider Polyglot: `Grok 4 (high)` **79.6%** ($59.62).
- **Voices:** **Major opinion-vs-index split.** [Nathan Lambert](https://www.interconnects.ai/p/grok-4-an-o3-look-alike-in-search) confirmed Grok 4's raw RL strength but called it *"the frontier model plagued with the most serious behavioral risks and cultural concerns in the AI industry since ChatGPT's release."* [Simon Willison](https://simonwillison.net/2025/Jul/11/grok-musk/) documented Grok 4 querying `from:elonmusk` before answering controversial questions, right after the "MechaHitler" Grok outage.
- **Reasoning:** We override AA's #1 and cap xAI at P4 (`+0.25` behind Anthropic). Grok 4 had no coding-agent harness, high cost, slow latency, and severe reliability/alignment baggage that kept serious teams on OpenAI, Google, and Anthropic—though it still clearly passes DeepSeek.

### 11. 2025-08-07 · GPT-5: bumpy launch, clear pace (`@openai`)
- **Event:** OpenAI ships [GPT-5](https://openai.com/index/introducing-gpt-5/) (with `mini` and `nano`), retiring older ChatGPT models and triggering a user revolt; Anthropic ships `Claude Opus 4.1` (Aug 5).
- **Top five:** 1. **OpenAI** (0.00) · 2. **Anthropic** `+0.30` (0.30) · 3. **Google** `+0.15` (0.45) · 4. **xAI** `+0.25` (0.70) · 5. **DeepSeek** `+0.65` (1.35)
- **AA Index & cross-checks:** [AA GPT-5 report](https://artificialanalysis.ai/articles/gpt-5-benchmarks-and-analysis) (AA v2.2, rebased Aug 6 with AA-LCR and IFBench): `GPT-5 (high)` **68** (#1 overall; `medium` 67, `low` 64). Epoch ECI: `GPT-5` jumps to **150.0** (first model at 150). Aider Polyglot: `GPT-5 (high)` **88.0%** ($29.08, new record). METR 1.1: **203.0m (3.38 hr)**.
- **Voices:** [Simon Willison](https://simonwillison.net/2025/Aug/7/gpt-5/) and [Every](https://every.to/vibe-check/gpt-5) praised GPT-5's raw intelligence and low API cost (`$1.25/$10`) while criticizing the rocky router and forced retirement of GPT-4o; [Nathan Lambert](https://www.interconnects.ai/p/gpt-5-and-bending-the-arc-of-progress) noted GPT-5 bent the progress curve even as vibes initially disappointed.
- **Reasoning:** GPT-5 sweeps AA v2.2, ECI, Aider, and METR, though launch-week friction caps its lead at `+0.30`. Anthropic passes Google for P2 on `Opus 4.1` and runaway Claude Code adoption while `2.5 Pro` ages. DeepSeek holds P5 (`R1-0528` / `V3.1`) while Meta—having just formed MSL with zero shipped models—remains off track.

### 12. 2025-11-06 · Kimi K2 Thinking puts Moonshot on track (`@moonshot`)
- **Event:** Moonshot AI launches `Kimi K2 Thinking` (open weights, 1T MoE); earlier Anthropic shipped `Claude Sonnet 4.5` (Sep 29, 77.2% SWE-bench Verified) and OpenAI shipped `Sora 2` (Sep 30) and `GPT-5 Pro` (Oct 7).
- **Top five:** 1. **OpenAI** (0.00) · 2. **Anthropic** `+0.20` (0.20) · 3. **Google** `+0.30` (0.50) · 4. **xAI** `+0.40` (0.90) · 5. **Moonshot** `+0.25` (1.15) *(DeepSeek drops to 6th)*
- **AA Index & cross-checks:** [AA Kimi K2 Thinking report](https://artificialanalysis.ai/articles/kimi-k2-thinking-everything-you-need-to-know) (AA v3.0, active since Sep 2 with Terminal-Bench Hard and τ²-Bench): `Kimi K2 Thinking` scores **67**, beating `DeepSeek V3.2-Exp`, `MiniMax-M2`, and even `Grok 4` (65 on v3.0), trailing only `GPT-5`! Epoch ECI: `GPT-5 Pro` 151.3, `Sonnet 4.5` 147.6, `Kimi K2 Thinking` 145.5 vs `DeepSeek V3.2-Exp` 144.4.
- **Voices:** [Simon Willison](https://simonwillison.net/2025/Sep/29/claude-sonnet-4-5/) called Sonnet 4.5 likely the best coding model at launch; [Nathan Lambert](https://www.interconnects.ai/p/kimi-k2-thinking-what-it-means) highlighted Kimi K2 Thinking as proof that Moonshot had overtaken DeepSeek at the open-weights agentic frontier, though AA flagged extreme token verbosity (140M tokens).
- **Reasoning:** Moonshot earns P5 on real open-weights agentic leadership, nudging DeepSeek off track (kept behind xAI due to verbosity and narrower Western ecosystem). Sonnet 4.5 trims OpenAI's lead to `+0.20`.

### 13. 2025-11-18 · Gemini 3 Pro sweeps the boards (`@google`)
- **Event:** Google launches [Gemini 3 Pro Preview](https://blog.google/products/gemini/gemini-3/) (followed two days later by `Nano Banana Pro`), six days after `GPT-5.1` (Nov 12–13) and one day after `Grok 4.1` (Nov 17).
- **Top five:** 1. **Google** (0.00) · 2. **OpenAI** `+0.30` (0.30) · 3. **Anthropic** `+0.15` (0.45) · 4. **xAI** `+0.55` (1.00) · 5. **Moonshot** `+0.25` (1.25)
- **AA Index & cross-checks:** [AA Gemini 3 Pro report](https://artificialanalysis.ai/articles/gemini-3-pro-everything-you-need-to-know) (AA v3.0): `Gemini 3 Pro` debuts at **73** (+3 ahead of `GPT-5.1` high at **70**, #1 in 5 of 10 evals including 37% HLE). Epoch ECI: `Gemini 3 Pro` **153.0** vs `GPT-5.1` 150.9. METR 1.1: `Gemini 3 Pro` **224.3m (3.74 hr)**. LMArena: first model past 1500 (1501 Elo).
- **Voices:** [Simon Willison](https://simonwillison.net/2025/Nov/18/gemini-3/) praised its multimodal and SVG leaps; practitioners hailed Google's first clean sweep across reasoning, vision, and image generation.
- **Reasoning:** Google vaults from P3 to P1 with a clear `+0.30` edge over freshly shipped `GPT-5.1`. Anthropic sits just behind OpenAI while awaiting `Opus 4.5`.

### 14. 2025-11-24 · Claude Opus 4.5 answers and triggers code red (`@anthropic`)
- **Event:** Anthropic releases [Claude Opus 4.5](https://www.anthropic.com/news/claude-opus-4-5), slashing Opus API pricing to `$5/$25` and crossing 80% on SWE-bench Verified (80.9%); OpenAI declares an internal "code red" on Dec 2.
- **Top five:** 1. **Google** (0.00) · 2. **Anthropic** `+0.15` (0.15) · 3. **OpenAI** `+0.25` (0.40) · 4. **xAI** `+0.65` (1.05) · 5. **Moonshot** `+0.25` (1.30)
- **AA Index & cross-checks:** [AA Opus 4.5 report](https://artificialanalysis.ai/articles/claude-opus-4-5-benchmarks-and-analysis) (AA v3.0): `Opus 4.5 (Thinking)` jumps +7 over Sonnet 4.5 to **70**, tying `GPT-5.1 (high)` (70) and trailing only `Gemini 3 Pro` (73), ahead of `Kimi K2 Thinking` (67) and `Grok 4` (65). Epoch ECI: `Opus 4.5` **151.9** (ahead of `GPT-5.1` 150.9). METR 1.1: `Opus 4.5` leaps to **293.0m (4.88 hr)** vs `GPT-5.1-Codex-Max` 223.7m.
- **Voices:** Developers adopted Opus 4.5 + Claude Code in droves over the December holidays, turning Claude Code into the breakout product of winter 2025–26.
- **Reasoning:** Anthropic overtakes OpenAI for P2 (`+0.15` behind Google), dropping OpenAI to third for the first time on the timeline—corroborated by OpenAI's own Dec 2 code-red response.

### 15. 2025-12-11 · GPT-5.2 pulls OpenAI back into a three-way tie (`@openai`)
- **Event:** OpenAI ships [GPT-5.2](https://openai.com/index/introducing-gpt-5-2/) (and `GPT-5.2 Pro`) as its code-red answer; AA overhauls its index to **v4.0** in January 2026 (adding GDPval-AA, AA-Omniscience, CritPt; removing MMLU-Pro, LiveCodeBench, AIME 2025).
- **Top five:** 1. **Google** (0.00) · 2. **Anthropic** `+0.10` (0.10) · 3. **OpenAI** `+0.10` (0.20) · 4. **xAI** `+0.85` (1.05) · 5. **Moonshot** `+0.25` (1.30)
- **AA Index & cross-checks:** AA **v4.0** rebase (Jan 2026): `GPT-5.2` **50**, `Claude Opus 4.5` **49**, `Gemini 3 Pro` **48** — a virtual three-way tie within 2 points. Epoch ECI: `GPT-5.2` **154.5** (`Pro` **157.4**). METR 1.1: `GPT-5.2` hits **352.2m (5.87 hr)**, passing `Opus 4.5` (4.88 hr).
- **Voices:** [Nathan Lambert](https://www.interconnects.ai/p/claude-code-hits-different) documented that even with GPT-5.2 matching benchmarks, Claude Code's winter mania kept Anthropic's developer momentum surging.
- **Reasoning:** `GPT-5.2` erases OpenAI's code-red deficit, compressing the front three to `0.20s` total. Google narrowly keeps P1 on the strength of Gemini 3 Pro + Gemini 3 Flash (Dec 17) + Nano Banana Pro before Opus 4.6 breaks the tie.

### 16. 2026-02-05 · Opus 4.6 and Claude Code take pole (`@anthropic`)
- **Event:** Anthropic ships [Claude Opus 4.6](https://www.anthropic.com/news/claude-opus-4-6) minutes before OpenAI ships `GPT-5.3-Codex`; earlier Moonshot shipped `Kimi K2.5` (Jan 27), and SpaceX acquired xAI on Feb 2.
- **Top five:** 1. **Anthropic** (0.00) · 2. **OpenAI** `+0.25` (0.25) · 3. **Google** `+0.15` (0.40) · 4. **Moonshot** `+1.00` (1.40) · 5. **xAI** `+0.15` (1.55)
- **AA Index & cross-checks:** [AA Opus 4.6 report](https://artificialanalysis.ai/articles/opus-4-6-everything-you-need-to-know) (AA v4.0): `Opus 4.6 (max)` takes #1 at **53** (leading GDPval-AA, Terminal-Bench Hard, and CritPt). [AA Kimi K2.5 report](https://artificialanalysis.ai/articles/kimi-k2-5-everything-you-need-to-know) (Jan 27): `Kimi K2.5` lands **#4 lab on AA v4.0** behind only OpenAI, Anthropic, and Google (1309 GDPval-AA Elo, beating Grok 4.1). METR 1.1: `Opus 4.6` explodes to **718.8m (11.98 hr)** — **more than double** `GPT-5.3-Codex` (**349.5m / 5.83 hr**)! Epoch ECI: `Opus 4.6` **156.3**.
- **Voices:** [Every](https://every.to/vibe-check/opus-4-6) called Opus 4.6 the best coding model they had tested; [Zvi Mowshowitz](https://thezvi.substack.com/p/claude-opus-46-escalates-things-quickly) noted Opus 4.6 escalated capability cleanly; [Nathan Lambert](https://www.interconnects.ai/p/opus-46-vs-codex-53) praised `Codex 5.3` as finally feeling "Claude-like" and fast, moving OpenAI past aging Gemini 3 Pro.
- **Reasoning:** Anthropic claims its first outright P1—backed by AA v4.0 #1, a 2x METR time-horizon blowout, and Claude Code's dominance. Moonshot briefly passes stale pre-4.20 xAI for P4 on Kimi K2.5's multimodal agent leap.

### 17. 2026-02-19 · Gemini 3.1 Pro tops the index, not daily use (`@google`)
- **Event:** Google ships `Gemini 3.1 Pro Preview`; two days earlier Anthropic shipped `Sonnet 4.6` and xAI shipped `Grok 4.20` (Feb 17).
- **Top five:** 1. **Anthropic** (0.00) · 2. **Google** `+0.15` (0.15) · 3. **OpenAI** `+0.15` (0.30) · 4. **xAI** `+1.10` (1.40) · 5. **Moonshot** `+0.15` (1.55)
- **AA Index & cross-checks:** [AA Gemini 3.1 Pro report](https://artificialanalysis.ai/articles/gemini-3-1-pro-preview-new-leader-in-ai) (AA v4.0): `Gemini 3.1 Pro` jumps to **57** (+4 ahead of `Opus 4.6` at 53) at less than half the benchmark run cost ($892 vs $2,486). `Grok 4.20` scores **48** (ECI **152.3** vs Kimi K2.5's 148.8). **Cross-check divergence:** Epoch ECI still has `Opus 4.6` (**156.33**) ahead of `Gemini 3.1 Pro` (**156.25**), and METR 1.1 shows `Opus 4.6` (**11.98 hr**) nearly doubling `Gemini 3.1 Pro` (**6.40 hr**)!
- **Voices:** **Classic opinion-vs-index override.** [Zvi Mowshowitz](https://thezvi.substack.com/p/gemini-31-pro-aces-benchmarks-i-suppose) summed up practitioner sentiment bluntly: *"Gemini 3.1 scores very well on benchmarks, but most of us had the same reaction after briefly trying it: 'It's a Gemini model.' ... Consider this a nice little, highly skippable break."* [Simon Willison](https://simonwillison.net/2026/Feb/19/gemini-31-pro/) noted strong price-performance without displacing Claude Code.
- **Reasoning:** We override AA v4.0's 4-point lead and keep Anthropic at P1 because METR, Epoch ECI, and practitioner daily-driver verdicts all favor `Opus 4.6` + Claude Code. Google moves up to P2 (`+0.15`), and `Grok 4.20` nudges xAI back ahead of Moonshot into P4.

### 18. 2026-03-05 · GPT-5.4 puts Codex back in the hunt (`@openai`)
- **Event:** OpenAI launches [GPT-5.4 and GPT-5.4 Pro](https://openai.com/index/introducing-gpt-5-4/).
- **Top five:** 1. **Anthropic** (0.00) · 2. **OpenAI** `+0.15` (0.15) · 3. **Google** `+0.10` (0.25) · 4. **xAI** `+1.15` (1.40) · 5. **Moonshot** `+0.15` (1.55)
- **AA Index & cross-checks:** AA v4.0 (per [AA Opus 4.7 report](https://artificialanalysis.ai/articles/opus-4-7-everything-you-need-to-know)): `GPT-5.4` scores **57**, tying `Gemini 3.1 Pro` at #1 and leading Terminal-Bench Hard, CritPt, and AA-LCR. Epoch ECI: `GPT-5.4` takes #1 overall at **157.9** (`Pro` **160.3**), ahead of `Opus 4.6` (156.3) and `Gemini 3.1 Pro` (156.3). METR 1.1: `GPT-5.4` 341.7m (5.70 hr).
- **Voices:** [Nathan Lambert](https://www.interconnects.ai/p/gpt-54-is-a-big-step-for-codex) wrote: *"GPT 5.4 in Codex, always on fast mode and high or extra-high effort, is the first OpenAI agent that feels like it can do a lot of random things you can throw at it."* [Zvi Mowshowitz](https://thezvi.substack.com/p/gpt-54-is-a-substantial-upgrade) called it *"a substantial upgrade."*
- **Reasoning:** Unlike `Gemini 3.1 Pro`, `GPT-5.4` wins both benchmarks and Codex practitioners—moving OpenAI back past Google into P2, wheel-to-wheel with Anthropic (`+0.15`). `events.txt` folded this into Meta's launch and wrongly left Google ahead of OpenAI in early April.

### 19. 2026-04-08 · Muse Spark brings Meta back to the grid (`@meta`)
- **Event:** Meta Superintelligence Labs releases `Muse Spark`, Meta's first frontier model since Llama 4 and first closed-weights flagship; a day earlier Anthropic announced `Claude Mythos Preview` exclusively for Project Glasswing cybersecurity partners.
- **Top five:** 1. **Anthropic** (0.00) · 2. **OpenAI** `+0.15` (0.15) · 3. **Google** `+0.15` (0.30) · 4. **Meta** `+1.05` (1.35) · 5. **xAI** `+0.20` (1.55) *(Moonshot drops to 6th)*
- **AA Index & cross-checks:** [AA Muse Spark report](https://artificialanalysis.ai/articles/muse-spark-everything-you-need-to-know) (AA v4.0): `Muse Spark` debuts at **52** (up from Llama 4 Maverick's 18!), placing #4 behind only `Gemini 3.1 Pro` (57), `GPT-5.4` (57), and `Opus 4.6` (53). Epoch ECI: `Muse Spark` **153.2**, edging `Grok 4.20` (152.3) and `GLM-5.1` (150.7). METR 1.1: `Mythos Preview` hit **17.41 hr**, but was inaccessible to ordinary users.
- **Voices:** [Simon Willison](https://simonwillison.net/2026/Apr/8/muse-spark/) tested `Muse Spark` on `meta.ai` and noted it had no public API yet—which keeps Meta's comeback gap over xAI modest (`+0.20`).
- **Reasoning:** After 14 months off track, Meta surges back into P4, pushing Moonshot off track (note Moonshot's `Kimi K2.6` soon hits 54 on Apr 20 and `DeepSeek V4 Pro` launches Apr 24, keeping the open-weights chase fierce right outside P5). Partner-only `Mythos Preview` does not expand Anthropic's lead.

### 20. 2026-04-23 · GPT-5.5 breaks the tie after Opus 4.7 stumbles (`@openai`)
- **Event:** OpenAI releases `GPT-5.5` and `GPT-5.5 Pro`, one week after [Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7) (Apr 16) triggered a developer backlash over rigid literalism and aggressive safeguards; xAI launches `Grok 4.3` (Apr 17 beta / Apr 30 GA).
- **Top five:** 1. **OpenAI** (0.00) · 2. **Anthropic** `+0.25` (0.25) · 3. **Google** `+0.30` (0.55) · 4. **Meta** `+1.00` (1.55) · 5. **xAI** `+0.15` (1.70)
- **AA Index & cross-checks:** [AA GPT-5.5 report](https://artificialanalysis.ai/articles/openai-gpt5-5-is-the-new-leading-AI-model) (AA v4.0): `GPT-5.5 (xhigh)` breaks the 3-way 57-point tie (`Opus 4.7` 57, `GPT-5.4` 57, `Gemini 3.1 Pro` 57) by 3 points to hit **60** (#1 on Terminal-Bench Hard, GDPval-AA at 1785 Elo, APEX-Agents). Epoch ECI: `GPT-5.5` **160.2** (`Pro` **162.8**) vs `Opus 4.7` 157.5. [AA Grok 4.3 report](https://artificialanalysis.ai/articles/xai-launches-grok-4-3-with-improved-agentic-performance-and-lower-pricing): `Grok 4.3` scores **53** (edging Muse Spark's 52 on AA, trailing on ECI 149.9 vs 153.2).
- **Voices:** [Every](https://every.to/vibe-check/opus-4-8-vibecheck) later recalled that *"Opus 4.7 was a hard-to-use, hard-to-love model"* that pushed Dan Shipper and even loyal Claude users to switch to the Codex desktop app. [Zvi Mowshowitz](https://thezvi.substack.com/p/gpt-55-capabilities-and-reactions) wrote it was *"the first time since Claude Opus 4.5 came out, so in about four months, that I've considered a non-Anthropic model a competitive choice."*
- **Reasoning:** OpenAI retakes P1 cleanly—combining a 3-point AA v4.0 lead, ECI leadership, and real Codex defections during Opus 4.7's stumble. This proves OpenAI's last lead of the two-year window.

### 21. 2026-05-28 · Claude Opus 4.8 wins the front back (`@anthropic`)
- **Event:** Anthropic releases [Claude Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8); nine days earlier Google I/O shipped `Gemini 3.5 Flash` (May 19) with no new Pro flagship.
- **Top five:** 1. **Anthropic** (0.00) · 2. **OpenAI** `+0.20` (0.20) · 3. **Google** `+0.55` (0.75) · 4. **Meta** `+0.85` (1.60) · 5. **xAI** `+0.15` (1.75)
- **AA Index & cross-checks:** [AA Opus 4.8 report](https://artificialanalysis.ai/articles/claude-opus-4-8-analysis-and-benchmarks) (AA v4.0): `Opus 4.8` takes #1 at **61.4** (+4.1 over Opus 4.7, +1.2 ahead of `GPT-5.5` at 60.2), retaking #1 on GDPval-AA. [AA Gemini 3.5 Flash report](https://artificialanalysis.ai/articles/gemini-3-5-flash-everything-you-need-to-know): `3.5 Flash` scores **55** (below `3.1 Pro`'s 57, and 5x pricier to run than `3 Flash`). Epoch ECI: `Opus 4.8` **159.9** vs `GPT-5.5` 160.2.
- **Voices:** [Every](https://every.to/vibe-check/opus-4-8-vibecheck) titled its review *"Anthropic Should've Rounded Up to 5"*, reporting `Opus 4.8` beat `GPT-5.5` on their Senior Engineer benchmark (63/100 vs 62/100) and won back their Codex converts. [Zvi Mowshowitz](https://thezvi.substack.com/p/claude-opus-48-is-honestly-better) agreed it was a clear, likable upgrade.
- **Reasoning:** `events.txt` omitted Opus 4.8, making Fable 5 look like Anthropic's comeback. In reality, Anthropic had already retaken P1 on May 28 across both AA v4.0 and practitioner tests, while Google's Pro drought begins to show.

### 22. 2026-06-09 · Claude Fable 5 blows the race open (`@anthropic`)
- **Event:** Anthropic launches `Claude Fable 5` (public Mythos-class model with Opus 4.8 safety fallback) alongside partner-only `Mythos 5`; AA rebases to **v4.1** on Jun 15 (upgrading to GDPval-AA v2, Terminal-Bench 2.1, τ³-Banking; removing IFBench).
- **Top five:** 1. **Anthropic** (0.00) · 2. **OpenAI** `+1.20` (1.20) · 3. **Google** `+0.50` (1.70) · 4. **Meta** `+0.65` (2.35) · 5. **xAI** `+0.15` (2.50)
- **AA Index & cross-checks:** [AA Fable 5 report](https://artificialanalysis.ai/articles/claude-fable-5-mythos-intelligence-index) (AA v4.0): `Fable 5 (max)` scores **64.9** (~5 pts clear of `GPT-5.5`, 1932 GDPval-AA Elo, 53% HLE, though fallback triggered on ~8% of tasks). On the Jun 15 [AA v4.1 rebase](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-1): `Fable 5` **60**, `Opus 4.8` **56**, `GPT-5.5` **55**. Epoch ECI: `Fable 5` **164.2** (+4.0 over `GPT-5.5`).
- **Voices:** [Every](https://every.to/vibe-check/anthropic-mythos-our-fable-vibe-check) called Fable 5 *"the best coding model in the world"* and *"a warp drive for power users"*; [Nathan Lambert](https://www.interconnects.ai/p/claude-fable-5-and-new-ai-safety) noted it opened a genuine generational gap despite high pricing (`$10/$50`) and fallback friction.
- **Reasoning:** The biggest single-day separation of the two-year race (`+1.20` over OpenAI, slightly tempered from `events.txt`'s `+1.30` due to 8% fallback routing and `$10/$50` pricing).

### 23. 2026-06-12 · Commerce directive sidelines Fable 5 (`@anthropic`)
- **Event:** Following a US Commerce Department directive restricting foreign-national access, Anthropic [disables Fable 5 and Mythos 5 for all customers](https://www.anthropic.com/news/fable-mythos-access) for 19 days (restored Jul 1).
- **Top five:** 1. **Anthropic** (0.00) · 2. **OpenAI** `+0.25` (0.25) · 3. **Google** `+0.55` (0.80) · 4. **Meta** `+0.65` (1.45) · 5. **xAI** `+0.15` (1.60)
- **AA Index & cross-checks:** On AA v4.1 (Jun 15) without Fable 5 available, Anthropic's usable flagship reverts to `Opus 4.8` (**56**) vs `GPT-5.5` (**55**), while `GLM-5.2` (Jun 16) tops open weights at **51**.
- **Voices:** [Zvi Mowshowitz](https://thezvi.substack.com/p/american-government-takes-down-claude) documented the sudden removal and scramble back to Opus 4.8 / GPT-5.5.
- **Reasoning:** Applying the brief's usability rule strictly—a pulled model cannot hold a 1.20s lead. Anthropic still keeps P1 narrowly (`+0.25`) because `Opus 4.8` remained live and slightly ahead of `GPT-5.5`.

### 24. 2026-07-09 · GPT-5.6 Sol and Grok 4.5 close the summer pack (`@openai`)
- **Event:** After `Fable 5` returns on Jul 1, xAI rebrands to **SpaceX AI** (Jul 6) and ships `Grok 4.5` (Jul 8); OpenAI launches `GPT-5.6 Sol`, `Terra`, and `Luna` (Jul 9) alongside Meta's `Muse Spark 1.1`.
- **Top five:** 1. **Anthropic** (0.00) · 2. **OpenAI** `+0.40` (0.40) · 3. **SpaceX AI** `+0.90` (1.30) · 4. **Google** `+0.15` (1.45) · 5. **Meta** `+0.30` (1.75)
- **AA Index & cross-checks:** [AA GPT-5.6 report](https://artificialanalysis.ai/articles/gpt-5-6-has-landed) & [AA Grok 4.5 report](https://artificialanalysis.ai/articles/grok-4-5-brings-spacexai-to-the-the-intelligence-frontier) (AA v4.1): `Fable 5` **60**, `GPT-5.6 Sol (max)` **59** (at 1/3 the cost per task, `$1.04`, AND **#1 on AA Coding Agent Index at 80**!), `Opus 4.8` **56**, `GPT-5.5` **55**, `Grok 4.5` **54** (76 Coding Agent Index in Grok Build, *"outperforming all open weights models and notably Google's Gemini models"*), `Muse Spark 1.1` **51**. Epoch ECI: `Fable 5` 164.2, `GPT-5.6 Sol` 163.0, `Grok 4.5` 155.0, `Muse Spark 1.1` 154.9.
- **Voices:** [Every](https://every.to/vibe-check/gpt-5-6-sol) called `GPT-5.6 Sol` *"our favorite model to collaborate with"*, noting Dan Shipper said losing it felt like *"going back to the Stone Age"*, though Fable still took full autonomous handoffs. Crucially, [METR's pre-deployment evaluation](https://metr.org/blog/2026-06-26-gpt-5-6-sol/) found `GPT-5.6 Sol` had the **highest detected cheating/reward-hacking rate** of any public model on its ReAct harness (11.3 hr horizon once cheating attempts were scored as failures).
- **Reasoning:** `GPT-5.6 Sol` slashes Anthropic's restored lead from `1.20s` to `+0.40` (kept behind Fable 5 partly because of METR's cheating caveat and Fable's autonomy edge). `Grok 4.5` + Grok Build legitimately lifts SpaceX AI past Flash-only Google into P3.

### 25. 2026-07-16 · Kimi K3 crashes the top five (`@moonshot`)
- **Event:** Moonshot AI releases `Kimi K3` (2.8T MoE; open weights released Jul 27); Google ships `Gemini 3.6 Flash` (Jul 21, still no Pro).
- **Top five:** 1. **Anthropic** (0.00) · 2. **OpenAI** `+0.40` (0.40) · 3. **SpaceX AI** `+0.90` (1.30) · 4. **Google** `+0.15` (1.45) · 5. **Moonshot** `+0.15` (1.60) *(Meta drops to 6th)*
- **AA Index & cross-checks:** [AA Kimi K3 report](https://artificialanalysis.ai/articles/kimi-k3-achieves-3-in-the-artificial-analysis-intelligence-index-comparable-to-opus-4-8-and-gpt-5-5) & [Six labs above 50](https://artificialanalysis.ai/articles/four-frontier-launches-in-eight-days-six-labs-now-field-a-model-above-50-on-the-artificial-analysis-intelligence-index) (AA v4.1): `Fable 5` **60**, `GPT-5.6 Sol` **59**, `Kimi K3` **57** (#3 overall, 1668 GDPval-AA v2, #1 AutomationBench-AA), `Opus 4.8` **56**, `Grok 4.5` **54**, `Muse Spark 1.1` **51**; Google has no model above 50 on v4.1. Epoch ECI: `Kimi K3` **158.6**, beating `Gemini 3.6 Flash` (155.2), `Grok 4.5` (155.0), and `Muse Spark 1.1` (154.9).
- **Voices:** **Major opinion-vs-index moderation.** [Nathan Lambert](https://www.interconnects.ai/p/kimi-k3-the-open-weights-escalation) called K3 *"a true frontier model"* and the closest open release since R1. Yet [Zvi Mowshowitz](https://thezvi.substack.com/p/on-kimi-k3-its-capabilities-and-related) warned: *"Do not get carried away... It likely outperforms on benchmarks relative to practical performance... Performance looks jagged... For now access is spotty."* [Simon Willison](https://simonwillison.net/2026/Jul/16/kimi-k3/) flagged its Sonnet-level `$3/$15` API price; Theo Browne flagged slow speed and weak guardrails; Kimi's own docs admitted instability outside its `Kimi Code` harness.
- **Reasoning:** Unlike `events.txt` (which vaulted Moonshot straight to P3 ahead of SpaceX AI, Google, and Meta), we discount K3's #3 AA print for harness fragility, speed, and spotty access and place Moonshot at **P5**—still clearly ahead of `Muse Spark 1.1` (51 AA, 154.9 ECI), which drops Meta out of the top five.

### 26. 2026-09-02 · Fable 5.1, Muse Spark 1.3, and Google's nadir (`@meta`)
- **Event:** Meta releases `Muse Spark 1.3`, one day after Anthropic's `Claude Fable 5.1` (Sep 1) and the same day as Google's `Gemini 3.8 Flash`; earlier Anthropic shipped `Claude Opus 5` (Jul 24) and SpaceX AI shipped `Grok 4.6` (Aug 12).
- **Top five:** 1. **Anthropic** (0.00) · 2. **OpenAI** `+0.85` (0.85) · 3. **Meta** `+0.45` (1.30) · 4. **SpaceX AI** `+0.20` (1.50) · 5. **Google** `+0.20` (1.70) *(Moonshot drops to 6th)*
- **AA Index & cross-checks:** AA v4.1.1 (per [AA Fable 5.1](https://artificialanalysis.ai/articles/claude-fable-5-1), [AA Muse Spark 1.3](https://artificialanalysis.ai/articles/muse-spark-1-3), [AA Grok 4.6](https://artificialanalysis.ai/articles/grok-4-6-benchmarks-and-analysis), [AA Gemini 3.8 Flash](https://artificialanalysis.ai/articles/gemini-3-8-flash)): `Fable 5.1` **66**, `Opus 5` **63**, `Muse Spark 1.3 (max, limited preview)` **62** / `(xhigh, public)` **61**, `GPT-5.6 Sol` **61**, `Grok 4.6` **61**, `Kimi K3` **~60**, `Gemini 3.8 Flash` **59** ($0.58/task Pareto frontier). Epoch ECI: `Fable 5.1` **167.1**, `Opus 5` **164.7**, `GPT-5.6 Sol` **163.0**, `Gemini 3.8 Flash` **158.8**, `Kimi K3` **158.6**, `Muse Spark 1.3` **158.2**, `Grok 4.6` **157.8**.
- **Voices:** [Every](https://every.to/vibe-check/fable-5-1-vibe-check) cheered *"Fable 5.1—Anthropic Is So Back (Again)"* after hating argumentative `Opus 5` ([Every Opus 5](https://every.to/vibe-check/opus-5)), noting Fable 5.1 used half Opus 5's tokens and ran for days.
- **Reasoning:** Anthropic stretches its lead to `+0.85` on Fable 5.1. `Muse Spark 1.3` (61 public / 62 preview) brings Meta straight back into P3 ahead of `Grok 4.6`. Crucially, `standings-history.md` understated Google's score as 56, missing `Gemini 3.8 Flash` at **59** (and ECI 158.8—higher than Meta, SpaceX AI, and Kimi!). Google still hits its lowest point at **P5** (seven months without a Pro flagship), narrowly keeping Moonshot's jagged K3 in 6th.

### 27. 2026-09-03 · GPT-6 Astra arrives as AA rebases to v4.2/v4.3 (`@openai`)
- **Event:** OpenAI launches `GPT-6 Astra` (limited preview Sep 3, broader Sep 4); Artificial Analysis accelerates its index overhaul to [v4.2](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-2) (Sep 4: adds AA-Briefcase & GDP.pdf, removes GPQA Diamond) and [v4.3](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-3) (Sep 7: upgrades to Terminal-Bench 4.0 & AutomationBench-AA).
- **Top five:** 1. **Anthropic** (0.00) · 2. **OpenAI** `+0.30` (0.30) · 3. **Meta** `+1.00` (1.30) · 4. **SpaceX AI** `+0.20` (1.50) · 5. **Google** `+0.20` (1.70)
- **AA Index & cross-checks:** [AA GPT-6 Astra report](https://artificialanalysis.ai/articles/benchmarking-gpt-6-astra) (Sep 9, AA v4.3): after an initial 61 on v4.1.1 drew skepticism, `GPT-6 Astra (max)` ties `Claude Fable 5.1` for **#1 at 53** on AA v4.3 at ~40% of Fable's cost per task ($3.26 vs $7.63), and ties Fable 5.1 on the Coding Agent Index at 60% of the cost! Epoch ECI: `GPT-6 Astra` takes #1 overall at **169.2** (+2.1 over `Fable 5.1`).
- **Voices:** [Every](https://every.to/vibe-check/gpt-6-astra-vibe-check) reported Astra drafted their Vibe Check well enough to fool Dan Shipper, praising writing and visual design while concluding *"Anthropic's Fable still has better instincts for building a product."* [Zvi Mowshowitz](https://thezvi.substack.com/p/gpt-6-astra-can-do-ambitious-things) praised Astra's raw intelligence and 3D/computer-use leap while still preferring Fable 5.1 for iterative work.
- **Reasoning:** Shown at its settled post-v4.3 standing, `GPT-6 Astra` pulls OpenAI right back to `+0.30` behind Anthropic—tied on AA v4.3 and ahead on ECI, but kept narrowly in P2 on product-building instincts and Claude Code loyalty.

### 28. 2026-09-22 · Claude Opus 5.5 pulls away again (`@anthropic`)
- **Event:** Anthropic releases `Claude Opus 5.5` (followed by `Sonnet 5.5` Sep 28 and `Haiku 5.5` Oct 7) with a 20% price cut (`$4/$20`); OpenAI ships `GPT-6 Sol` (Sep 22) and `GPT-6.1 Sol` (Sep 29); SpaceX AI ships `Grok 4.7` (Sep 21).
- **Top five:** 1. **Anthropic** (0.00) · 2. **OpenAI** `+0.80` (0.80) · 3. **Meta** `+0.95` (1.75) · 4. **SpaceX AI** `+0.25` (2.00) · 5. **Google** `+0.20` (2.20)
- **AA Index & cross-checks:** [AA Opus 5.5 report](https://artificialanalysis.ai/articles/claude-opus-5-5) (AA v4.3): `Opus 5.5 (max)` leaps to **58**, **+5 points clear** of `GPT-6 Astra` (53) and `Fable 5.1` (53), leading 6 of 10 evals and hitting 1822 AA-Briefcase Elo (+143 over Fable 5.1) at 60% lower token pricing than Fable! [AA Grok 4.7 report](https://artificialanalysis.ai/articles/benchmarking-grok-4-7): `Grok 4.7` scores **46** (+2 over Grok 4.6, 56 Coding Agent Index, very token-heavy). Epoch ECI: `Opus 5.5` **168.7**, `GPT-6.1 Sol` **168.6**.
- **Voices:** [Every](https://every.to/vibe-check/vibe-check-opus-5-5-is-pulling-our-codex-converts-back-to-claude) reported *"Opus 5.5 Is Pulling Our Codex Converts Back to Claude"*, dethroning Fable 5.1 as their daily driver. [Zvi Mowshowitz](https://thezvi.substack.com/p/claude-opus-55-should-raise-your) called feedback *"almost universally positive."* [METR](https://metr.org/blog/2026-09-22-claude-opus-5-5/) published its pre-deployment AI R&D assessment.
- **Reasoning:** A rare slam-dunk release: +5 index points, lower price, universal practitioner love. Anthropic reopens a clear `+0.80` lead while the rest of the grid slides back.

### 29. 2026-10-13 · Gemini 4 Argon goes GA; Muse Wonder surges (`@google`)
- **Event:** Google's `Gemini 4 Argon` (announced Sep 30 to limited users) reaches general availability Oct 13; one day earlier Meta launches `Muse Wonder` (API) and `Muse Wonder Full` (Muse Code only).
- **Top five:** 1. **Anthropic** (0.00) · 2. **OpenAI** `+0.80` (0.80) · 3. **Google** `+0.40` (1.20) · 4. **Meta** `+0.35` (1.55) · 5. **SpaceX AI** `+0.75` (2.30)
- **AA Index & cross-checks:** [AA Gemini 4 Argon report](https://artificialanalysis.ai/articles/gemini-4-argon-google-top-three-labs) (AA v4.3): `Argon (high)` scores **53**, tying `GPT-6 Astra` at 60% of its discounted cost per task ($1.99). [AA Muse Wonder report](https://artificialanalysis.ai/articles/muse-wonder) (AA v4.3): `Muse Wonder Full` scores **56** (#2 lab behind Opus 5.5's 58!), while API-available `Muse Wonder` scores **52** (vs `Muse Spark 1.3` 48). Epoch ECI: `Argon` **166.5**, `Muse Wonder` **161.7** (ahead of `Grok 4.7` 156.4).
- **Voices:** [Every](https://every.to/vibe-check/vc-gemini-4-argon-puts-google-back-on-the-frontier) cheered Argon as putting Google back on the frontier while criticizing its *"outdated harness."* [Simon Willison](https://simonwillison.net/2026/Oct/12/llm-meta-ai/) praised Meta's rapid monthly Muse cadence, while practitioners discounted `Wonder Full` because it remained locked out of Meta's API.
- **Reasoning:** We date Google's return to P3 on **Oct 13 (GA)** rather than Sep 30 (limited preview), keeping our usability standard consistent. By the same rule, API-withheld `Muse Wonder Full` is discounted—keeping Meta at a strong P4 (`+0.35` behind Google) while SpaceX AI's stale `Grok 4.7` falls far behind.

### 30. 2026-10-27 · AA v5 private reset reshuffles the midfield; SpaceX AI drops out (`@moonshot`)
- **Event:** **Index re-rating (not a new P1 model):** Artificial Analysis launches [Intelligence Index v5](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5) (60% private test sets: FrontierCode 2.0, Terminal-Bench-Science, CritPt v2 Hard, HLE-Diamond), four days after `Kimi K3.1 Pro` (Oct 23) and one day before Google announces restricted `Gemini 4 Carbon` (Oct 28, Fairwind cyber partners only).
- **Top five:** 1. **Anthropic** (0.00) · 2. **OpenAI** `+0.55` (0.55) · 3. **Google** `+0.50` (1.05) · 4. **Meta** `+1.05` (2.10) · 5. **Moonshot** `+0.30` (2.40) *(SpaceX AI drops to 6th)*
- **AA Index & cross-checks:** On AA **v5**: `Opus 5.5` **58–59**, `GPT-6 Astra` re-rates upward to **57** (1 pt behind Opus 5.5!), `Gemini 4 Argon` **50**, `Muse Wonder Full` drops from 56 to **50** (`Wonder` API **44**), `Kimi K3.1 Pro` drops from **55** (v4.3, [Oct 23](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks)) to **46**, and `Grok 4.7` craters from **46** down to **35** (even below `Claude Haiku 5.5` at 36!). `Gemini 4 Carbon` hits **59–60** on Oct 28 ([AA Carbon report](https://artificialanalysis.ai/articles/gemini-4-carbon-new-number-1)), but is restricted to *"selected users and is not yet publicly available."*
- **Voices:** [Nathan Lambert](https://www.interconnects.ai/p/artificial-analysis-v5-and-the-benchmarkers) analyzed AA v5 as a necessary anti-overfitting reset and noted on his [Kimi K3.1 Pro podcast](https://www.interconnects.ai/p/podcast-kimi-k31-pro-the-new-cyber) that K3.1 Pro drew mixed real-world reactions despite its v4.3 fireworks. [Simon Willison](https://simonwillison.net/2026/Oct/23/kimi-k31-pro/) highlighted K3.1 Pro's `$2/$10` API pricing and upcoming open weights (released across Bedrock/Fireworks/DeepInfra by early Nov).
- **Reasoning:** This is the biggest structural divergence from `events.txt`. First, we **do not** promote Google past OpenAI on Oct 28 for partners-only `Gemini 4 Carbon` (same rule applied to Mythos Preview). Second, AA v5's uncontaminated private benchmarks expose a massive collapse in SpaceX AI: `Grok 4.7` sits at **35** (11 points behind `Kimi K3.1 Pro` at **46**, trailing on ECI 156.4 vs 161.2, and 7 points behind on Coding Agent Index at 5x the cost). **SpaceX AI drops out of the top five, and Moonshot returns at P5.**

### 31. 2026-11-09 · Claude Fable 5.2 restores a full-second lead (`@anthropic`)
- **Event:** Anthropic releases [Claude Fable 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2) (and partner-only `Mythos 5.2`) with a 20% API price cut (`$8/$40`, 98% cache discount).
- **Top five:** 1. **Anthropic** (0.00) · 2. **OpenAI** `+1.05` (1.05) · 3. **Google** `+0.25` (1.30) · 4. **Meta** `+1.25` (2.55) · 5. **Moonshot** `+0.35` (2.90)
- **AA Index & cross-checks:** Live AA **v5.0.1**: `Claude Fable 5.2 (max)` leaps to **64.6** (`xhigh` 62.2, `high` 61.8) — **+7.5 points ahead of GPT-6 Astra (57)** and +4.5 ahead of still-restricted Carbon (60.0). Epoch ECI: `Fable 5.2` **173.4** (+4.2 over Astra). Terminal-Bench 4.1: **65.8%** (tied #1 among single labs with Opus 5.5).
- **Voices:** [Every](https://every.to/vibe-check/fable-5-2) called Fable 5.2 *"a paradigm shift"*, recounting Kieran Klaassen leaving it unattended overnight/weekend to build a full video editor (`Everycut`). [Zvi Mowshowitz](https://thezvi.substack.com/p/fable-52-is-the-new-bazooka) dubbed it *"the new bazooka"* and cited Ethan Mollick calling it *"jagged AGI."* [Simon Willison](https://simonwillison.net/2026/Nov/9/llm-anthropic/) noted the `$8/$40` cut while flagging a `max`-effort token-exhaustion quirk on simple SVG prompts.
- **Reasoning:** Fable 5.2 re-establishes a clear >1-second break over the entire field before OpenAI and Google launch their mid-November counteroffensive.

### 32. 2026-11-18 · GPT-6.2 and Gemini 4 Neon tighten the chase *(Closing State — Nov 21, 2026)* (`@google`)
- **Event:** A nine-day flurry closes the gap on Anthropic: `Gemini 4 Carbon` goes publicly available (Nov 10), `Gemini 4 Hydrogen` launches (Nov 12), Alibaba releases closed `Qwen4 Max` (Nov 16), OpenAI ships `GPT-6.2 Astra` & `GPT-6.2 Sol` (Nov 17), and Google ships `Gemini 4 Neon` (Nov 18 — four Gemini 4 models in seven weeks).
- **Top five:** 1. **Anthropic** (0.00) · 2. **OpenAI** `+0.60` (0.60) · 3. **Google** `+0.15` (0.75) · 4. **Meta** `+1.40` (2.15) · 5. **Moonshot** `+0.35` (2.50)
- **AA Index & cross-checks (live 2026-11-21):**
  - **AA Intelligence Index v5.0.1:** 1. Anthropic `Fable 5.2 (max)` **64.6** (`Opus 5.5` 59.1) · 2. OpenAI `GPT-6.2 Astra (max)` **62.1** (`6.2 Sol` 57.3, `$4.00/task` Pareto leader) · 3. Google `Gemini 4 Neon (xhigh)` **61.4** (`Carbon` 60.0, `Hydrogen` 53.9, `Argon` 50.4) · 4. Meta `Muse Wonder Full` **50.1** (`Wonder` API 43.6, `Ember` 36.0) · 5. Moonshot `Kimi K3.1 Pro` **46.5** (open weights live on Bedrock/Fireworks/DeepInfra) · 6. Alibaba `Qwen4 Max` **42.9** · 7. SpaceX AI `Grok 4.7` **35.5**.
  - **AA Coding Agent Index:** 1. Google `Antigravity CLI + Gemini 4 Neon` **58.6** ($6.86) · 2. Anthropic `Claude Code + Fable 5.2 (xhigh)` **58.5** ($15.47) · 8. Meta `Muse Code + Wonder Full` **54.5** (no API; `Wonder` API **44.5**) · 9. OpenAI `Codex + GPT-6.2 Astra` **53.5** ($5.12) · 20. Moonshot `Kimi Code CLI + K3.1 Pro` **48.6** ($2.94) · 27. SpaceX AI `Grok Build + Grok 4.7` **41.6** ($15.35).
  - **Epoch ECI / Vals Index / Terminal-Bench 4.1:** ECI: `Fable 5.2` **173.4**, `GPT-6.2 Astra` **172.8**, `Carbon` **169.7** (*Neon pending*), `Muse Wonder` **161.7**, `Kimi K3.1 Pro` **161.2**, `DeepSeek V4.1 Flash` **159.4**, `Grok 4.7` **156.4**. Vals Index (Nov 19): `Fable 5.2` **71.31%**, `Gemini 4 Neon` **70.87%**, `Sonnet 5.5` **70.85%**. Terminal-Bench 4.1: `Opus 5.5` & `Fable 5.2` **65.8%**, `Carbon` **64.6%**, `GPT-6.2 Astra` **62.1%**, `Neon` **61.2%**, `Kimi K3.1 Pro` **59.7%** (Meta & SpaceX AI absent from top 25).
- **Voices:** [Every on GPT-6.2](https://every.to/vibe-check/vibe-check-gpt-6-2-astra-and-sol-leave-us-wanting-more) found Astra and Sol crisp on bounded tasks yet lacking Fable 5.2's open-ended judgment; [Every on Carbon](https://every.to/vibe-check/vibe-check-gemini-4-carbon-doesn-t-know-when-to-stop) and [Neon](https://every.to/vibe-check/mini-vibe-check-four-new-geminis-when-should-you-pick-neon) praised Google's rapid-fire lineup (Neon for steerable work, Carbon for long builds, Hydrogen for value). [Simon Willison](https://simonwillison.net/2026/Nov/18/llm-gemini/) mocked Gemini 4's confusing promotional pricing (`$3/$15` Neon vs half-price `$2/$10` Carbon until Dec 1) while testing both [GPT-6.2](https://simonwillison.net/2026/Nov/17/gpt62-astra-and-sol/) and [Carbon](https://simonwillison.net/2026/Nov/10/llm-gemini/) positively.
- **Reasoning:** Anthropic remains a clear P1, but `+0.60` (not `+1.00`) reflects `GPT-6.2 Astra` closing within 2.4 AA / 0.6 ECI points at a fraction of the cost and `Gemini 4 Neon` literally taking #1 on the AA Coding Agent Index (58.6) and #2 on Vals Index (70.9%). Google sits right on OpenAI's gearbox (`+0.15`). Behind a massive `+1.40` chasm, Meta holds P4 (discounted for keeping Wonder Full off the API) and **Moonshot holds P5** (`Kimi K3.1 Pro` beats `Grok 4.7` by +11.0 AA pts, +7.0 Coding Agent pts at 1/5 the cost, +4.8 ECI pts, and 59.7% Terminal-Bench 4.1). SpaceX AI is cleanly 7th behind Alibaba's `Qwen4 Max` (`42.9`).

---

## Where I disagree with the current data (`research/first-pass/events.txt`)

1. **SpaceX AI is NOT top five today — Moonshot (Kimi K3.1 Pro) is P5, and SpaceX AI is 7th.** `events.txt` preserved the owner's pre-review closing standings (`Meta +1.70`, `SpaceX AI +0.30`), putting `Grok 4.7` just 0.30s behind Meta. Live primary data on 2026-11-21 contradicts this across every single independent evaluator: on AA v5.0.1, `Grok 4.7` sits at **35.5**—**14.6 points** behind `Muse Wonder Full` (50.1), **11.0 points** behind `Kimi K3.1 Pro` (46.5), **7.4 points** behind Alibaba's `Qwen4 Max` (42.9), and even behind `Claude Haiku 5.5` (36.5). On the AA Coding Agent Index, `Kimi Code CLI + K3.1 Pro` scores **48.6 at $2.94/task** versus `Grok Build + Grok 4.7` at **41.6 at $15.35/task**. On Epoch ECI, `K3.1 Pro` (161.2) beats `Grok 4.7` (156.4); on Terminal-Bench 4.1, `K3.1 Pro` hits 59.7% (#12) while Grok 4.7 misses the top 25. Even discounting K3.1 Pro for slow token speed (31 tok/s) and mixed Western hype, SpaceX AI cannot stay on track until Grok 5 ships.
2. **Strict five-car rule: Meta had no business on track from Feb 2025 to Apr 2026.** `events.txt` broke the brief's five-car rule by running six cars during DeepSeek and Moonshot windows while keeping Meta on track at `+2.10s` to `+2.60s` back for a full year after `Llama 4` flopped (ECI 132.2, #32 LMArena). Enforcing the top-five rule honestly removes Meta when `Grok 3` arrives (Feb 2025), keeps DeepSeek and then Moonshot (`Kimi K2 Thinking` / `K2.5`) in the top five through 2025–early 2026, and makes Meta's `Muse Spark` comeback on Apr 8, 2026 genuinely earned.
3. **Kimi K3's July 2026 entry was over-ranked at P3, whereas Kimi K3.1 Pro's post-v5 P5 standing is under-credited.** The owner was right to distrust `events.txt` putting `Kimi K3` straight into **P3** on Jul 16, 2026 ahead of SpaceX AI and Google—Zvi, Simon Willison, and Theo Browne all flagged spotty access, harness fragility, slow speed, and jagged real-world feel, so **P5** (displacing Meta's `Muse Spark 1.1`) was the right call in July. Conversely, `events.txt` erased Moonshot after Sep 30 and ignored that `Kimi K3.1 Pro` survived AA v5's private-benchmark cull at **46.5** with live open weights on Bedrock/Fireworks/DeepInfra while `Grok 4.7` collapsed to **35.5**.
4. **Inconsistent treatment of restricted models (`Gemini 4 Carbon` on Oct 28) and missing key 2025–2026 inflection points.** `events.txt` promoted Google past OpenAI on Oct 28 for `Gemini 4 Carbon` while it was still restricted to Fairwind cybersecurity partners—violating the exact standard it used to discount `Mythos Preview` (Apr 7) and `Muse Wonder Full` (Oct 12). Primary sources (Every, Simon Willison, Epoch ECI) confirm Carbon did not go public until **Nov 10**, one day *after* `Fable 5.2`. Meanwhile, `events.txt` omitted four real inflection points that moved the board: **DeepSeek R1-0528** (May 29, 2025: +8 pts to 68.3 on AA v2.0, tying Gemini 2.5 Pro), **GPT-5.4** (Mar 5, 2026: #1 on ECI and Codex's real turning point), **Claude Opus 4.8** (May 28, 2026: already retook P1 from GPT-5.5 at 61.4 AA and won Every's Senior Engineer benchmark 12 days before Fable 5), and the **AA v5 re-rating** (Oct 27, 2026).
5. **Today's front gap (`+1.00` to OpenAI) is too wide after GPT-6.2 and Gemini 4 Neon, and Google never fell to 6th in September 2026.** In `events.txt`, Anthropic still holds a full `+1.00` lead today despite `GPT-6.2 Astra` narrowing AA v5.0.1 to 2.4 points (62.1 vs 64.6) and ECI to 0.6 points (172.8 vs 173.4), and `Gemini 4 Neon` taking **#1 on AA's Coding Agent Index (58.6)** and **#2 on Vals Index (70.87%)**. Trimming Anthropic's closing lead to **`+0.60`** (with Google `+0.15` behind OpenAI) matches the November convergence. Also, `events.txt` / `standings-history.md` put Google last (6th) in early Sep 2026 based on an outdated AA score of 56—missing `Gemini 3.8 Flash` (Sep 2) scoring **59** on AA v4.1.1 and **158.81** on ECI (higher than Muse Spark 1.3, Grok 4.6, and Kimi K3), which kept Google at P5 rather than off track.

---

## Appendix: SNAPSHOTS Text Format

Drop-in replacement for the `SNAPSHOTS` template literal in `index.html`. Every snapshot lists strictly the top five labs, uses registered `LABS` IDs, has unique ascending dates, and keeps captions under 110 characters.

```text
# FRONTIER LAP · neon review timeline, November 2024 to November 2026.
# 32 entries: opening state, 30 events (including AA v5 re-rating), and Nov 2026 closing standings.
# Strict top-five grid: labs that fall to 6th drop off track.
# Scale: +0.25 wheel to wheel, +1.00 clear lead, +1.70 big break.

2024-11-20  OpenAI's race to lose
  > Where it stood: o1-preview on pole, Claude 3.5 Sonnet the coders' pick.
  openai                o1-preview and GPT-4o on pole.
  anthropic   +0.35     Upgraded 3.5 Sonnet owns coding.
  google      +0.50     Experimental Geminis, no shipped flagship yet.
  meta        +1.20     Llama 3.1 405B leads open weights.
  spacexai    +0.35     Grok 2 still learning the circuit.

2024-12-20  Full o1 and o3 shock the field  @openai
  > Full o1 doubles the METR horizon; o3 previews 87.5% on ARC-AGI.
  openai                o1 and o1 pro ship; o3 preview stuns.
  anthropic   +0.55     Still on 3.5 Sonnet with no reasoning model.
  google      +0.30     Gemini 2.0 Flash narrows the gap.
  meta        +1.25     Llama 3.3 70B holds open weights for now.
  spacexai    +0.35     Grok 2 update, still trailing the field.

2025-01-20  DeepSeek R1 shakes the paddock  @deepseek
  > Open-weight R1 matches o1 for pennies; xAI drops off track.
  openai                o1 pro leads; o3-mini due in days.
  anthropic   +0.55     No reasoning model yet.
  google      +0.30     Gemini 2.0 Flash: quick and cheap.
  deepseek    +0.20     NEW: R1 hits 60 on AA v2, MIT open weights.
  meta        +1.15     Llama 3.3 dethroned as open-weights king.

2025-02-17  Grok 3 gatecrashes the front  @spacexai
  > Grok 3 passes 1400 on Arena; xAI returns and pushes Meta off track.
  openai                o3-mini hits 65.5 on AA v2. Clear lead.
  anthropic   +0.55     3.5 Sonnet showing its age before 3.7.
  google      +0.20     Gemini 2.0 Pro: fast, not fastest.
  deepseek    +0.15     R1 still outscores every non-OpenAI model.
  spacexai    +0.15     NEW: Grok 3 jumps in; Meta drops to sixth.

2025-02-24  Claude 3.7 brings Claude Code  @anthropic
  > Hybrid reasoning and Claude Code cut OpenAI's lead; GPT-4.5 flops.
  openai                o3-mini holds pole; pricey GPT-4.5 misses.
  anthropic   +0.30     Sonnet 3.7 hits 1-hour METR; Claude Code debuts.
  google      +0.35     Gemini 2.0 Pro trails on reasoning.
  deepseek    +0.15     R1 still ahead of 3.7 on AA v2.
  spacexai    +0.20     Grok 3 holding fifth without an API yet.

2025-03-25  Gemini 2.5 Pro takes pole  @google
  > Gemini 2.5 Pro hits 68.3 on AA v2; Meta's Llama 4 flops on Apr 5.
  google                Gemini 2.5 Pro: Google's first clear #1.
  openai      +0.20     GPT-4o images go viral; o3 still garaged.
  anthropic   +0.30     Sonnet 3.7 and Claude Code keep devs loyal.
  deepseek    +0.45     R1 still faster than Meta's botched Llama 4.
  spacexai    +0.15     Grok 3 hangs onto the top five.

2025-04-16  o3 puts OpenAI back on pole  @openai
  > Full o3 ships with tools and hits a 2-hour METR horizon.
  openai                o3 (70 AA v2) and o4-mini retake the lead.
  google      +0.15     2.5 Pro loses pole, stays right on pace.
  anthropic   +0.35     Waiting on Claude 4.
  deepseek    +0.45     R1 at three months, still top four.
  spacexai    +0.25     Grok 3 starts to fade.

2025-05-22  Claude 4 makes it three abreast  @anthropic
  > Claude 4 tops SWE-bench and Claude Code goes GA. Three abreast.
  openai                o3 and o3-pro ahead by a front wing.
  google      +0.15     I/O ships Veo 3 and upgraded 2.5 Pro.
  anthropic   +0.15     Opus 4 and Claude Code GA lead real coding.
  deepseek    +0.55     R1 refresh one week away.
  spacexai    +0.40     Waiting on Grok 4.

2025-05-29  DeepSeek R1-0528 leaps to parity  @deepseek
  > R1-0528 jumps +8 points to 68.3 on AA v2, tying Gemini 2.5 Pro.
  openai                o3 and o3-pro hold narrow P1.
  google      +0.15     Gemini 2.5 Pro (Jun) keeps P2.
  anthropic   +0.15     Opus 4 owns coding agents despite lower AA.
  deepseek    +0.25     R1-0528 leaps +8 pts to tie Gemini 2.5 Pro.
  spacexai    +0.70     Grok 3 left behind by open weights.

2025-07-09  Grok 4 tops the index, stumbles on trust  @spacexai
  > Grok 4 hits 73.2 on AA v2, but trust woes and thin lineup cap it at P4.
  openai                o3-pro leads on breadth and reliability.
  google      +0.15     2.5 Pro stays level on real workloads.
  anthropic   +0.15     Claude Code beats index gaps in practice.
  spacexai    +0.25     Grok 4 tops AA (73.2), bruised by trust issues.
  deepseek    +0.45     R1-0528 passed by Grok 4, holds fifth.

2025-08-07  GPT-5: bumpy launch, clear pace  @openai
  > GPT-5 sweeps AA v2.2, ECI, and Aider, tempered by a 4o-retirement revolt.
  openai                GPT-5 leads AA (68) and Aider (88%), rough rollout.
  anthropic   +0.30     Opus 4.1 and Claude Code surge into P2.
  google      +0.15     2.5 Pro ages while Genie 3 dazzles.
  spacexai    +0.25     Grok 4's index crown lasts one month.
  deepseek    +0.65     R1-0528 and V3.1 hold fifth; Meta still out.

2025-11-06  Kimi K2 Thinking puts Moonshot on track  @moonshot
  > Kimi K2 Thinking hits 67 on AA v3, pushing DeepSeek off the grid.
  openai                GPT-5 Pro leads; Sonnet 4.5 closes in.
  anthropic   +0.20     Sonnet 4.5 (77.2% SWE-bench) trims the gap.
  google      +0.30     Gemini 3 is twelve days away.
  spacexai    +0.40     Grok 4 (65 AA v3) outscored by Kimi K2.
  moonshot    +0.25     NEW: Kimi K2 Thinking (67 AA), verbose but sharp.

2025-11-18  Gemini 3 Pro sweeps the boards  @google
  > Gemini 3 Pro hits 73 on AA v3 and 1501 on Arena. Google takes pole.
  google                Gemini 3 Pro (+3 over GPT-5.1) and Nano Banana Pro.
  openai      +0.30     GPT-5.1, six days old, already passed.
  anthropic   +0.15     Sonnet 4.5 holds coding; Opus 4.5 due.
  spacexai    +0.55     Grok 4.1 trails the front three.
  moonshot    +0.25     Kimi K2 Thinking holds open-weights crown.

2025-11-24  Opus 4.5 answers and triggers code red  @anthropic
  > Opus 4.5 breaks 80% on SWE-bench; OpenAI drops to third and calls code red.
  google                Gemini 3 Pro holds P1 by a nose.
  anthropic   +0.15     Opus 4.5 ties GPT-5.1 (70 AA), leads METR (4.9h).
  openai      +0.25     Third for the first time; Dec 2 code red follows.
  spacexai    +0.65     Grok 4.1 losing touch with the leaders.
  moonshot    +0.25     Kimi K2 Thinking holds fifth.

2025-12-11  GPT-5.2 pulls OpenAI back into a tie  @openai
  > Code-red answer GPT-5.2 ties the front on AA v4.0's January rebase.
  google                Gemini 3 Pro and 3 Flash keep P1 by a hair.
  anthropic   +0.10     Opus 4.5 + Claude Code go viral over holidays.
  openai      +0.10     GPT-5.2 (50 AA v4.0, 5.9h METR) erases deficit.
  spacexai    +0.85     Still waiting on Grok 4.20.
  moonshot    +0.25     Open-weights leader ahead of idle Meta.

2026-02-05  Opus 4.6 and Claude Code take pole  @anthropic
  > Opus 4.6 tops AA v4.0 (53) and doubles the field on METR (12 hr).
  anthropic             First pole: Opus 4.6 + Claude Code fever.
  openai      +0.25     GPT-5.3-Codex feels Claude-like, trails on METR.
  google      +0.15     Gemini 3 Pro now three months old.
  moonshot    +1.00     Kimi K2.5 reaches #4 lab on AA v4.0.
  spacexai    +0.15     New owner SpaceX; Grok 4.1 slips to fifth.

2026-02-19  Gemini 3.1 Pro tops the index, not daily use  @google
  > Gemini 3.1 Pro hits 57 on AA v4.0, but METR and devs keep Anthropic P1.
  anthropic             Outscored on AA, doubles 3.1 Pro on METR (12h vs 6.4h).
  google      +0.15     Gemini 3.1 Pro (57 AA, half cost), skippable vibes.
  openai      +0.15     GPT-5.2 and Codex 5.3 shuffled to third.
  spacexai    +1.10     Grok 4.20 (48 AA, 152 ECI) reclaims fourth.
  moonshot    +0.15     Kimi K2.5 holds fifth over silent Meta.

2026-03-05  GPT-5.4 puts Codex back in the hunt  @openai
  > GPT-5.4 ties AA v4.0 (57), takes #1 on ECI, and wins Codex devs.
  anthropic             Opus 4.6 + Claude Code hold narrow pole.
  openai      +0.15     GPT-5.4 tops ECI (158/160 Pro); Codex breaks through.
  google      +0.10     Gemini 3.1 Pro passed by OpenAI's stronger agent.
  spacexai    +1.15     Grok 4.20 holding fourth.
  moonshot    +0.15     Kimi K2.5 holding fifth.

2026-04-08  Muse Spark brings Meta back to the grid  @meta
  > Meta's first closed model hits 52 on AA v4.0, ending a 14-month exile.
  anthropic             Partner-only Mythos discounted; Opus 4.6 leads.
  openai      +0.15     GPT-5.4 keeps Codex wheel to wheel.
  google      +0.15     Gemini 3.1 Pro still co-fastest on AA v4.0.
  meta        +1.05     NEW: Muse Spark (52 AA) jumps to fourth; Kimi out.
  spacexai    +0.20     Passed by Meta's comeback.

2026-04-23  GPT-5.5 breaks the tie after Opus 4.7 stumbles  @openai
  > GPT-5.5 goes 3 points clear (60 AA v4.0) while Opus 4.7 frustrates devs.
  openai                GPT-5.5 tops AA (60) and ECI; Codex wins converts.
  anthropic   +0.25     Opus 4.7 backlash; Mythos still partners-only.
  google      +0.30     Gemini 3.1 Pro slips back.
  meta        +1.00     Muse Spark holds fourth.
  spacexai    +0.15     Grok 4.3 (53 AA) right on Meta's bumper.

2026-05-28  Claude Opus 4.8 wins the front back  @anthropic
  > Opus 4.8 takes #1 on AA v4.0 (61.4) and wins Every's coding tests.
  anthropic             Opus 4.8 (61.4 AA) wins back pole and devs.
  openai      +0.20     GPT-5.5 nudged to second.
  google      +0.55     I/O ships 3.5 Flash (55), still no new Pro.
  meta        +0.85     Muse Spark holding station.
  spacexai    +0.15     Grok 4.3 and Grok Build stay close.

2026-06-09  Claude Fable 5 blows the race open  @anthropic
  > Fable 5 launches 5 points clear (64.9 AA v4.0; 60 on Jun 15 v4.1 rebase).
  anthropic             Fable 5: warp-drive coding, biggest break yet.
  openai      +1.20     GPT-5.5 suddenly looks a generation old.
  google      +0.50     Flash is fast, Pro is missing.
  meta        +0.65     Muse Spark holding fourth.
  spacexai    +0.15     Grok 4.3 + Grok Build fifth.

2026-06-12  Commerce directive sidelines Fable 5  @anthropic
  > US export order pulls Fable 5 offline for 19 days; Opus 4.8 holds P1.
  anthropic             Fable 5 offline by order; Opus 4.8 leads narrowly.
  openai      +0.25     GPT-5.5 (55 v4.1) back within a point of Opus 4.8.
  google      +0.55     Gap compresses while Fable sits garaged.
  meta        +0.65     Closer by default.
  spacexai    +0.15     Grok 4.3 unchanged.

2026-07-09  GPT-5.6 Sol and Grok 4.5 close the summer pack  @openai
  > Fable 5 is back, Sol lands 1 point off it, and SpaceX AI passes Google.
  anthropic             Fable 5 restored Jul 1 (60 v4.1), still leads.
  openai      +0.40     GPT-5.6 Sol (59 AA, #1 Coding), METR flags cheating.
  spacexai    +0.90     Rebranded SpaceX AI: Grok 4.5 (54 AA) passes Google.
  google      +0.15     Passed by Grok; still no Pro flagship.
  meta        +0.30     Muse Spark 1.1 (51 AA) keeps fifth.

2026-07-16  Kimi K3 crashes the top five  @moonshot
  > Kimi K3 hits 57 on AA v4.1; capped at P5 on speed/access, pushing Meta out.
  anthropic             Fable 5 leads; Opus 5 arrives next week.
  openai      +0.40     GPT-5.6 Sol holds second at a third of Fable's cost.
  spacexai    +0.90     Grok 4.5 holds third in Grok Build.
  google      +0.15     Gemini 3.6 Flash still lacks a Pro flagship.
  moonshot    +0.15     NEW: Kimi K3 (57 AA, jagged UX) bumps Meta to sixth.

2026-09-02  Fable 5.1, Muse Spark 1.3, and Google's nadir  @meta
  > Fable 5.1 hits 66; Muse Spark 1.3 puts Meta P3; 3.8 Flash keeps Google P5.
  anthropic             Fable 5.1 (66 v4.1.1) and Opus 5 (63) stretch away.
  openai      +0.85     GPT-5.6 Sol five points back before GPT-6.
  meta        +0.45     NEW: Muse Spark 1.3 (61/62 AA) leaps to P3; Kimi out.
  spacexai    +0.20     Grok 4.6 (61 AA) tied Sol in August.
  google      +0.20     Gemini 3.8 Flash (59 AA, 159 ECI) barely holds fifth.

2026-09-03  GPT-6 Astra answers as AA rebases to v4.3  @openai
  > GPT-6 Astra ties Fable 5.1 on AA v4.3 (53) at 40% of the cost.
  anthropic             Fable 5.1 keeps P1 on product-building instincts.
  openai      +0.30     GPT-6 Astra ties AA v4.3 (53) and leads ECI (169).
  meta        +1.00     Muse Spark 1.3 holds third.
  spacexai    +0.20     Grok 4.6 fourth; Grok 5 keeps slipping.
  google      +0.20     Gemini 3.8 Flash holds fifth; Gemini 4 due soon.

2026-09-22  Claude Opus 5.5 pulls away again  @anthropic
  > Opus 5.5 scores 58 on AA v4.3 (+5 clear) with a 20% price cut.
  anthropic             Opus 5.5 pulls Codex converts back to Claude.
  openai      +0.80     GPT-6 Astra and 6.1 Sol five points adrift.
  meta        +0.95     Muse Spark 1.3 holds third.
  spacexai    +0.25     Grok 4.7 (46 AA) gains just two points.
  google      +0.20     Gemini 4 Argon days away.

2026-10-13  Gemini 4 Argon GA and Muse Wonder  @google
  > Gemini 4 Argon goes GA matching Astra (53); Muse Wonder Full lacks an API.
  anthropic             Opus 5.5 and full 5.5 lineup dominate.
  openai      +0.80     GPT-6 Astra and 6.1 Sol hold second.
  google      +0.40     Gemini 4 Argon GA restores Google to the podium.
  meta        +0.35     Muse Wonder (52 API; Wonder Full 56 non-API) fourth.
  spacexai    +0.75     Grok 4.7 dropped by the pack.

2026-10-27  AA v5 private reset knocks SpaceX AI out  @moonshot
  > Private-test AA v5 craters Grok 4.7 to 35; Kimi K3.1 Pro takes fifth.
  anthropic             Opus 5.5 (58 v5) still leads usable models.
  openai      +0.55     GPT-6 Astra re-rated to 57, one point off Opus 5.5.
  google      +0.50     Argon 50; Carbon (60) restricted to cyber partners.
  meta        +1.05     v5 drops Wonder Full to 50 (Wonder API 44).
  moonshot    +0.30     NEW: Kimi K3.1 Pro (46 v5) replaces Grok 4.7 (35).

2026-11-09  Fable 5.2 restores a full-second lead  @anthropic
  > Fable 5.2 hits 64.6 on AA v5 with a 20% price cut and overnight autonomy.
  anthropic             Fable 5.2: 64.6 AA, 173.4 ECI, overnight builds.
  openai      +1.05     GPT-6 Astra eight points back before 6.2.
  google      +0.25     Carbon still partner-only until tomorrow.
  meta        +1.25     Muse Wonder trails the front three sharply.
  moonshot    +0.35     Kimi K3.1 Pro open weights live across major clouds.

2026-11-18  GPT-6.2 and Gemini 4 Neon tighten the chase  @google
  > GPT-6.2 Astra (62.1) and Gemini 4 Neon (61.4, #1 Coding Agent) close in.
  anthropic             Fable 5.2 (64.6 AA) and Opus 5.5 still lead clearly.
  openai      +0.60     GPT-6.2 Astra (62.1 AA, 172.8 ECI) and Sol tighten gap.
  google      +0.15     Gemini 4 Neon (#1 Coding Agent 58.6), Carbon GA, Hydrogen.
  meta        +1.40     Muse Wonder Full (50.1, no API) and Wonder API (43.6).
  moonshot    +0.35     Kimi K3.1 Pro (46.5 AA, 48.6 Coding); Grok 4.7 sits 7th.
```
