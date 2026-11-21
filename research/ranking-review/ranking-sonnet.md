# Phase 2: the ranking (sonnet)

Window: 2024-11-20 to 2026-11-21. 29 steps. Today is 2026-11-21.

## How I did it

**Backbone.** Artificial Analysis (AA) Intelligence Index, in the version that applied on the date. I read AA's own articles and model pages (not snippets), and for late 2024 to mid 2025 I read archived copies of its leaderboard on the Wayback Machine. **Voices** are the shared shortlist in [VOICES.md](VOICES.md). I read Simon Willison's posts, Every's Vibe Checks (many are paywalled after the first paragraph, so I quote only what is public), Zvi, Nathan Lambert's podcast page and Theo's tier list (the last one through a summary by The AI Daily Brief, so second-hand). Matt Shumer never moved a rank; I did not rely on him.

**Index versions on the timeline.** Scores are only comparable inside one version. AA's numbering before v4 is not clear to me, so I label it by what the page said.

| Dates | AA version | What changed |
|---|---|---|
| to Jan 2025 | Quality Index (MMLU, GPQA, Math, HumanEval) | [22 Nov 2024 archive](http://web.archive.org/web/20241122181314/https://artificialanalysis.ai/leaderboards/models), [21 Jan 2025 archive](http://web.archive.org/web/20250121140947/https://artificialanalysis.ai/leaderboards/models) |
| Feb to Aug 2025 | Intelligence Index "v2", 7 then 8 evals | Rebased: Claude 3.5 Sonnet went from 80 to 44, R1 debuted at 60 ([25 Feb 2025 archive](http://web.archive.org/web/20250225122746/https://artificialanalysis.ai/leaderboards/models)) |
| late 2025 | 10 evals (v3 is my label, not AA's) | Gemini 3 Pro 73 |
| 7 Jan 2026 | v4.0 | Top score fell from 73 to 50; Gemini 3 Pro 73 became 48 ([Decoder](https://the-decoder.com/new-artificial-analysis-benchmark-shows-openai-anthropic-and-google-locked-in-a-three-way-tie-at-the-top/)) |
| 15 Jun 2026 | v4.1 | [Agentic reweight](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-1): Fable 5 64.9 became 60, Gemini 3.1 Pro 57 became 46 |
| 6 Aug | v4.1.1 | [Grader patch](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-1-1), scores up about 1 |
| 4 and 7 Sep | v4.2, v4.3 | [v4.2](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-2), [v4.3](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-3): Astra 61 became 53 |
| 27 Oct | v5 | [Private-test-set heavy](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5): Astra 53 became 57, K3.1 Pro 55 became 46 |

Three times a re-rating, not a new model, changed the order: **v2 (Feb 2025)** put DeepSeek far above Anthropic and Google; **v4.0 (Jan 2026)** turned a Google lead into a three-way tie; **v4.3 and v5 (Sep and Oct 2026)** moved OpenAI from fourth by score to second and Meta and Moonshot down.

## Rules I used

1. **Index decides when the gap is 3 points or more.** Inside 2 points it is a tie, and practitioners and availability break it.
2. **One deliberate exception: Anthropic's coding lead.** I keep Anthropic above its index rank in spring 2025 (third, not fifth) and in first place from Dec 2025 to Apr 2026, when the index never had it clearly first (a tie in Jan, four behind Gemini 3.1 Pro in Feb). Every and Simon describe Claude Code as the story of both periods, and the brief names this case. Each step says so.
3. **Announced is not available.** A model shown only to select users counts less (Mythos Preview, Argon before 13 Oct, Carbon before 10 Nov, Muse Wonder Full).
4. **Exactly five cars.** A lab that is sixth drops out, including Meta and xAI. DeepSeek and Moonshot come in as guests only when AA placed them in its top four labs, or they were 3 or more points clear of the weakest regular car.
5. **Gaps** follow the index at about 0.3 per point near the front, capped near 1.3. So 3 points is about 1.0 and 5 points about 1.3. The first pass uses 1.30 for Fable 5's five points but 0.85 for Opus 5.5's five points; mine are consistent.

## The timeline

Format: top five in order, with the gap to the car ahead in seconds.

### 1. 2024-11-20 · Opening state
[AA archive, 22 Nov 2024](http://web.archive.org/web/20241122181314/https://artificialanalysis.ai/leaderboards/models).
- OpenAI · Anthropic +0.40 · Google +0.30 · Meta +1.10 · xAI +0.40
- **AA (Quality Index):** o1-preview 85, o1-mini 82, Gemini 1.5 Pro (Sep) 80, Claude 3.5 Sonnet (Oct) 80, GPT-4o 77, Llama 3.1 405B 72, Grok Beta 70. Qwen2.5 72B (75) and Mistral Large 2 (74) beat Meta and xAI on the index but are not cars.
- **Voices:** none checked for this date; Simon's [2025 review](https://simonwillison.net/2025/Dec/31/the-year-in-llms/) calls 2025 "the year that OpenAI lost their lead", which is the arc from here.
- **Why:** only OpenAI had reasoning models in wide use. Anthropic and Google tie on the index; Anthropic was the coders' pick.

### 2. 2025-01-20 · DeepSeek R1
[Simon's review](https://simonwillison.net/2025/Dec/31/the-year-in-llms/): R1 "promptly triggered a major AI/semiconductor selloff", Nvidia down about $593bn.
- OpenAI · Anthropic +0.45 · DeepSeek +0.15 · Google +0.30 · Meta +0.90
- **AA:** the 21 Jan page ([archive](http://web.archive.org/web/20250121140947/https://artificialanalysis.ai/leaderboards/models)) had o1-preview 86, o1-mini 84, Gemini 2.0 Flash exp 82 and not yet R1. After the v2 rebase (25 Feb): o3-mini 63, o1 62, **R1 60**, Gemini 2.0 Pro 49, **Claude 3.5 Sonnet 44**.
- **Why:** the index puts DeepSeek second; I put it third behind Anthropic because 3.5 Sonnet was still what people coded with and R1's app was struggling under load. Close call; this is a re-rating moment.

### 3. 2025-02-24 · Claude 3.7 Sonnet and Claude Code
[TechCrunch](https://techcrunch.com/2025/02/24/anthropic-launches-a-new-ai-model-that-thinks-as-long-as-you-want). Grok 3 (17 Feb) is folded in here.
- OpenAI · Anthropic +0.30 · DeepSeek +0.25 · Google +0.20 · xAI +0.20
- **AA:** o3-mini 63, o1 62, R1 60 (25 Feb); Claude 3.7 Sonnet thinking 57 and non-thinking 48 ([26 Mar archive](http://web.archive.org/web/20250326175030/https://artificialanalysis.ai/leaderboards/models)). Grok 3 was not on AA yet (API came in April; unverified).
- **Voices:** Simon: Claude Code was "the most impactful event of 2025", released "quietly", bundled in the 3.7 post ([review](https://simonwillison.net/2025/Dec/31/the-year-in-llms/)).
- **Why:** against the index (Anthropic 57, below R1 and o3-mini) I keep Anthropic second because Claude Code starts here. xAI replaces Meta on Grok 3's Arena result (first past 1400, per the first pass; I did not re-check).

### 4. 2025-03-25 · Gemini 2.5 Pro Experimental
[Simon's test](https://simonwillison.net/2025/Mar/25/gemini/).
- Google · OpenAI +0.20 · Anthropic +0.25 · DeepSeek +0.30 · xAI +0.25
- **AA:** o3-mini-high 66 on 26 Mar. Gemini 2.5 Pro Preview is listed at 68 on 18 Apr ([archive](http://web.archive.org/web/20250418184014/https://artificialanalysis.ai/leaderboards/models)).
- **Voices:** Simon (from a search summary of the post, not a full read): a "very strong new model", Python results comparable to Claude 3.7 Sonnet, "my previous favourite", and top of the Arena.
- **Why:** first time Google was plainly first. Keep OpenAI close on o1 pro, o3-mini-high and the image-generation hit.

### 5. 2025-04-16 · o3 and o4-mini (Llama 4 on 5 Apr)
[AA archive, 18 Apr](http://web.archive.org/web/20250418184014/https://artificialanalysis.ai/leaderboards/models).
- OpenAI · Google +0.15 · Anthropic +0.35 · xAI +0.20 · DeepSeek +0.40
- **AA (v2):** o4-mini (high) 70, Gemini 2.5 Pro 68, **Grok 3 mini 67**, o3-mini-high 66, R1 60, **Claude 3.7 thinking 57**, Llama 4 Maverick 51.
- **Voices:** I found no primary voice for the o3 day. Simon on Llama 4: "kind of disappointing", with the Arena variant scandal ([review](https://simonwillison.net/2025/Dec/31/the-year-in-llms/)).
- **Where I go against the index:** the index has Anthropic fifth here (xAI and DeepSeek both ahead). I keep it third because 3.7 plus Claude Code was what developers used; Every's May review shows the same preference. Meta drops out for good after Llama 4.

### 6. 2025-05-22 · Claude Opus 4 and Sonnet 4, Claude Code GA
[Every's review](https://every.to/vibe-check/vibe-check-claude-4-sonnet).
- OpenAI · Google +0.15 · Anthropic +0.15 · xAI +0.30 · DeepSeek +0.25
- **AA (v2):** o4-mini 70, Gemini 2.5 Pro 69, o3 67, Grok 3 mini 67 (23 May archive). Claude 4 Opus is given as 64 in the first pass (I did not find it in the Q2 report text). R1-0528 follows on 29 May at 68, which AA calls ["tied #2 AI lab"](https://artificialanalysis.ai/articles/deepseek-r1-update).
- **Voices:** Every (Dan Shipper): Claude 4 Opus "crushes pull requests, research deep dives, and honest editing, yet o3 keeps the daily-driver crown."
- **Why:** three-way front. Anthropic is third on the index and first at code; I do not move it past OpenAI because o3 stayed the daily driver.

### 7. 2025-07-09 · Grok 4
[AA Q2 2025 report](https://artificialanalysis.ai/downloads/state-of-ai/2025/Q2-2025-Artificial-Analysis-State-of-AI-Highlights-Report.pdf) (read).
- OpenAI · Google +0.15 · Anthropic +0.15 · xAI +0.30 · DeepSeek +0.35
- **AA (v2):** Grok 4 **73**, o3-pro 71, Gemini 2.5 Pro 70, R1 68 (read in the report); Claude 4 Opus 64 is the first pass's figure. AA: xAI "leads the intelligence frontier for the first time".
- **Voices:** Every ran a Vibe Check titled "Grok 4 Aced Its Exams. The Real World Is a Different Story" (title seen only in a tracking link; not read).
- **Where I go against the index:** Grok 4 leads by two points, which is a tie. No coding agent, no reputation in real work. xAI moves from fifth to fourth, not to first.

### 8. 2025-08-07 · GPT-5
[AA](https://artificialanalysis.ai/articles/gpt-5-benchmarks-and-analysis), [Simon](https://simonwillison.net/2025/Aug/7/gpt-5/), [Every](https://every.to/vibe-check/gpt-5).
- OpenAI · Anthropic +0.25 · Google +0.15 · xAI +0.30 · DeepSeek +0.40
- **AA:** GPT-5 (high) **68**, medium 67, low 64, minimal 44.
- **Voices:** Simon (search summary): a sensible default, not a dramatic leap. Every: "GPT-5 is not going to become your daily driver for frontier AI coding" (search summary), and the best model "99 percent of the world will have ever used" in ChatGPT.
- **Why:** best model, modest lead, rough launch. Opus 4.1 two days earlier keeps Anthropic close.

### 9. 2025-11-18 · Gemini 3 Pro (Kimi K2 Thinking on 7 Nov joins)
[AA](https://artificialanalysis.ai/articles/gemini-3-pro-everything-you-need-to-know), [AA on K2 Thinking](https://artificialanalysis.ai/articles/kimi-k2-thinking-everything-you-need-to-know).
- Google · OpenAI +0.30 · Anthropic +0.15 · xAI +0.45 · Moonshot +0.25
- **AA (pre-v4):** Gemini 3 Pro **73**, GPT-5.1 70, **K2 Thinking 67** ("second only to GPT-5 among proprietary"), Grok 4 65, Sonnet 4.5 63.
- **Voices:** Every: "a solid, dependable upgrade... a workhorse" ([review](https://every.to/vibe-check/vibe-check-gemini-3-pro-a-reliable-workhorse-with-surprising-flair)). Simon found the pelicans "a regression from GPT-5" ([post](https://simonwillison.net/2025/Nov/18/gemini-3/)).
- **Where I differ:** Moonshot enters here, which the first pass does not do until 2026. AA put it above xAI and Anthropic's Sonnet 4.5 on score; I put it fifth, a tie with Grok 4 broken by xAI's wider lineup. Meta is out: Llama 4 scored 13 to 18, and Meta shipped nothing.

### 10. 2025-11-24 · Claude Opus 4.5
[AA](https://artificialanalysis.ai/articles/claude-opus-4-5-benchmarks-and-analysis), [Every](https://every.to/vibe-check/vibe-check-opus-4-5-is-the-coding-model-we-ve-been-waiting-for), [Simon](https://simonwillison.net/2025/Nov/24/claude-opus/).
- Google · Anthropic +0.15 · OpenAI +0.15 · xAI +0.60 · Moonshot +0.20
- **AA:** Opus 4.5 **70**, level with GPT-5.1 (70), three behind Gemini 3 Pro (73).
- **Voices:** Every: "the best coding model we've ever used", though it failed their editing test. Simon, looking back: November was when "coding agents" went from "often make mistakes" to "reliable enough to use on a day-to-day basis" ([2026 talk](https://simonwillison.net/2026/Sep/27/2026-in-llms-so-far/)).
- **Why:** three points is not a tie, so Google stays first; but Anthropic is within a hair and is the coders' car.

### 11. 2025-12-11 · GPT-5.2, and the first Anthropic lead
[Simon on 5.2](https://simonwillison.net/2025/Dec/11/gpt-52/), [AA v4.0 via Decoder](https://the-decoder.com/new-artificial-analysis-benchmark-shows-openai-anthropic-and-google-locked-in-a-three-way-tie-at-the-top/).
- Anthropic · OpenAI +0.10 · Google +0.15 · xAI +0.70 · Moonshot +0.20
- **AA v4.0 (7 Jan):** GPT-5.2 (xhigh) **50.6** (read in [AA's Jan 2026 leaderboard archive](http://web.archive.org/web/20260114032141/https://artificialanalysis.ai/leaderboards/models)), Opus 4.5 about 49 and Gemini 3 Pro about 48 (the first pass's figures; the archive's name labels were garbled so I could not confirm them). AA's Feb articles call GPT-5.2 the "previous Intelligence Index leader".
- **Voices:** Simon: "For code a lot of developers rate Opus 4.5 very slightly ahead of GPT-5.2 Codex" ([review](https://simonwillison.net/2025/Dec/31/the-year-in-llms/)). Every, looking back at December: "OpenAI was losing the agentic coding race. Claude Code had captured developers' hearts" ([GPT-5.4 review](https://every.to/vibe-check/gpt-5-4-openai-is-back)).
- **Where I differ:** a three-point tie on the index, broken by practice. The first pass dates Anthropic's first lead to 5 Feb; I date it here.

### 12. 2026-02-05 · Claude Opus 4.6 and GPT-5.3-Codex
[AA](https://artificialanalysis.ai/articles/opus-4-6-everything-you-need-to-know), [Every](https://every.to/vibe-check/opus-4-6).
- Anthropic · OpenAI +0.20 · Google +0.25 · Moonshot +0.55 · xAI +0.20
- **AA (v4.0):** Opus 4.6 **53** is first, ahead of GPT-5.2 (51). Gemini 3 Pro 48. Kimi K2.5 (27 Jan) was [placed behind only OpenAI, Anthropic and Google](https://artificialanalysis.ai/articles/kimi-k2-5-everything-you-need-to-know). Grok 4.20 about 48.
- **Voices:** Every: "the best AI coder we've tested" with "maddening" habits; the Codex head-to-head scored it 9.25 to 7.5 (search summary). Simon: "mostly all-in on Claude Opus 4.6 running in Claude Code" (search summary).
- **Why:** index and practice agree for once.

### 13. 2026-02-19 · Gemini 3.1 Pro
[AA](https://artificialanalysis.ai/articles/gemini-3-1-pro-preview-new-leader-in-ai), [Simon](https://simonwillison.net/2026/Feb/19/gemini-31-pro/).
- Anthropic · Google +0.10 · OpenAI +0.20 · Moonshot +0.50 · xAI +0.20
- **AA (v4.0):** Gemini 3.1 Pro **57**, four ahead of Opus 4.6 (53), at under half the cost; leads 6 of 10 evals.
- **Voices:** Simon: priced like Gemini 3 Pro, "less than half the price of Claude Opus 4.6" with "very similar benchmark scores" (search summary). Every's February review still names Opus 4.6 the best coder.
- **Where I go against the index:** this is the brief's example of a lab that leads real coding work while trailing the index. I keep Anthropic first but shrink the gap to 0.10. An index-first reading puts Google first from here to April.

### 14. 2026-04-08 · Muse Spark, with Mythos Preview the day before
[AA on Muse Spark](https://artificialanalysis.ai/articles/muse-spark-everything-you-need-to-know), [Simon's talk](https://simonwillison.net/2026/Sep/27/2026-in-llms-so-far/). GPT-5.4 (5 Mar) is folded in.
- Anthropic · Google +0.10 · OpenAI +0.10 · Meta +1.20 · xAI +0.30
- **AA (v4.0):** Gemini 3.1 Pro 57.2, GPT-5.4 56.8, Opus 4.6 53, **Muse Spark 52** ("not yet accessible via an API"), Sonnet 4.6 51, Grok 4.20 49. Llama 4 Maverick had been 18.
- **Voices:** Every, 5 Mar: GPT-5.4 "shifts the competitive balance back towards OpenAI on the coding front". Simon on Mythos: "too dangerous to release" is an old marketing ploy, but he found the claims credible.
- **Why:** Mythos Preview was partners-only, so it adds only a little. Anthropic's lead is thin and rests on work done (AA later says Anthropic "leads on real-world agentic work"). Meta re-enters at fourth.

### 15. 2026-04-23 · GPT-5.5 (Opus 4.7 on 16 Apr, Kimi K2.6 on 20 Apr)
[AA](https://artificialanalysis.ai/articles/openai-gpt5-5-is-the-new-leading-AI-model), [AA on Opus 4.7](https://artificialanalysis.ai/articles/opus-4-7-everything-you-need-to-know), [AA on K2.6](https://artificialanalysis.ai/articles/kimi-k2-6-the-new-leading-open-weights-model), [Every](https://every.to/vibe-check/gpt-5-5).
- OpenAI · Anthropic +0.25 · Google +0.25 · Moonshot +0.85 · Meta +0.15
- **AA (v4.0):** GPT-5.5 **60**, "breaking a three-way tie". Opus 4.7 57.3, Gemini 3.1 Pro 57.2, GPT-5.4 56.8. K2.6 **54**, "#4 behind only Anthropic, Google, and OpenAI". Muse Spark 52.
- **Voices:** Every: GPT-5.5 "much faster than Opus 4.7"; on their Senior Engineer Benchmark 62.5 against "the low 30s" for Opus 4.7. Every later called Opus 4.7 "a hard-to-use, hard-to-love model" and said Dan switched to Codex.
- **Why:** OpenAI's last lead. Moonshot takes fourth: AA ranked K2.6 above Muse Spark, and K2.6 was usable (API, open weights) while Muse Spark was app-only.

### 16. 2026-05-28 · Claude Opus 4.8 (missing from the first pass)
[AA](https://artificialanalysis.ai/articles/claude-opus-4-8-analysis-and-benchmarks), [Every](https://every.to/vibe-check/opus-4-8-vibecheck).
- Anthropic · OpenAI +0.25 · Google +0.40 · xAI +0.70 · Meta +0.15
- **AA (v4.0):** Opus 4.8 **61.4**, 1.2 ahead of GPT-5.5 (xhigh). [Gemini 3.5 Flash](https://artificialanalysis.ai/articles/gemini-3-5-flash-everything-you-need-to-know) (19 May) 55, Grok 4.3 53.
- **Voices:** Every: "Anthropic is so back"; Opus 4.8 beats GPT-5.5 on their Senior Engineer test 63 to 62 and is "the best model we've tested for writing and knowledge work."
- **Where I differ:** the first pass leaves OpenAI first from 23 Apr to 9 Jun. AA and Every both put Anthropic back in front on 28 May. A one-point lead, so the gap is small.

### 17. 2026-06-09 · Claude Fable 5 (Mythos 5 for partners)
[AA](https://artificialanalysis.ai/articles/claude-fable-5-mythos-intelligence-index), [Simon](https://simonwillison.net/2026/jun/9/claude-fable-5), [Every](https://every.to/vibe-check/anthropic-mythos-our-fable-vibe-check).
- Anthropic · OpenAI +1.30 · Google +0.45 · xAI +0.35 · Meta +0.15
- **AA:** Fable 5 **64.9** (v4.0), "nearly 5 points ahead of any other lab's best". After the v4.1 re-rating (15 Jun): Fable 5 60, Opus 4.8 56, GPT-5.5 55, but "currently unavailable".
- **Voices:** Every: "the best coding model in the world", "a warp drive for power users". Simon, after 5.5 hours: "something of a beast... slow, expensive".
- **Why:** biggest single swing. Fable and Opus hold the top two places.

### 18. 2026-06-12 · Fable 5 pulled by government order
[Fortune](https://fortune.com/2026/06/13/anthropic-disables-fable-mythos-export-controls-national-security-threat/), [Simon's talk](https://simonwillison.net/2026/Sep/27/2026-in-llms-so-far/).
- Anthropic · OpenAI +0.25 · Google +0.40 · xAI +0.35 · Meta +0.15
- **AA (v4.1):** Opus 4.8 (56) "the most intelligent available model", one ahead of GPT-5.5 (55).
- **Voices:** Simon: Fable "had 30 days as definitely the best model, and for 18 of those days it wasn't available".
- **Why:** a non-release moment; the only one in the file. Anthropic's lead falls to what Opus 4.8 offers.

### 19. 2026-07-09 · GPT-5.6 Sol, Terra and Luna (Fable back 1 Jul; Grok 4.5 on 8 Jul)
[AA](https://artificialanalysis.ai/articles/gpt-5-6-has-landed), [AA on Grok 4.5](https://artificialanalysis.ai/articles/grok-4-5-brings-spacexai-to-the-the-intelligence-frontier), [Every](https://every.to/vibe-check/gpt-5-6-sol).
- Anthropic · OpenAI +0.40 · xAI +1.00 · Google +0.25 · Meta +0.15
- **AA (v4.1):** Fable 5 60, **Sol 59**, Opus 4.8 56, GPT-5.5 55, **Grok 4.5 54** (fourth, ahead of every Gemini), Muse Spark 1.1 51, Gemini 3.6 Flash 50.
- **Voices:** Simon: Fable returned 1 July "clearly the best model in the world for a glorious eight days... GPT-5.6 on the 9th of July... within spitting distance". Every: "Sol is our favorite model to collaborate with... Fable still gets the assignments we want to hand off completely."
- **Why:** Sol also tops AA's Coding Agent Index (80). xAI third on Grok Build (76 on that index).

### 20. 2026-07-16 · Kimi K3
[AA](https://artificialanalysis.ai/articles/kimi-k3-achieves-3-in-the-artificial-analysis-intelligence-index-comparable-to-opus-4-8-and-gpt-5-5), [Simon](https://simonwillison.net/2026/jul/16/kimi-k3), [Zvi](https://thezvi.substack.com/p/on-kimi-k3-its-capabilities-and-related), [Lambert podcast](https://www.interconnects.ai/p/open-models-recap-more-on-kimi-k3).
- Anthropic · OpenAI +0.45 · xAI +0.90 · Moonshot +0.15 · Google +0.35
- **AA (v4.1):** Fable 5 60, Sol 59, **Kimi K3 57** (third by score), Opus 4.8 56. K3 is $0.94 per task, Grok 4.5 $0.31. Weights not yet released.
- **Voices:** Zvi: "in aggregate it is several months behind the closed model frontier, at least four and my median guess is six... likely outperforms on benchmarks relative to practical performance." Lambert, via a secondary summary: 3 to 5 months. Simon: leads Arena's Frontend Code board, but he also doubts his own pelican test.
- **Where I go against the index (and agree with the owner):** AA has Moonshot third. I put it fourth: its score is at max effort with heavy tokens, it has no coding-agent harness in AA's index, and Grok 4.5 in Grok Build ranks third there. This is the most debatable call on the page; Theo's Aug tier list puts K3 above Grok 4.6, which argues the other way.

### 21. 2026-08-12 · Grok 4.6
[AA](https://artificialanalysis.ai/articles/grok-4-6-benchmarks-and-analysis), [AA on Muse Spark 1.2](https://artificialanalysis.ai/articles/muse-spark-1-2), [Simon](https://simonwillison.net/2026/Aug/5/muse-code-and-muse-spark-12/). Opus 5 (24 Jul) is folded in.
- Anthropic · OpenAI +0.45 · xAI +0.10 · Moonshot +0.15 · Meta +0.25
- **AA (v4.1.1):** Opus 5 **63**, Fable 5 62, Sol 61, **Grok 4.6 61**, Kimi K3 just behind, Muse Spark 1.2 57, Gemini 3.6 Flash 52.
- **Voices:** Theo's tier list ~22 Aug (via [AI Daily Brief](https://aidailybrief.beehiiv.com/p/the-ai-model-tier-list)): Fable 5 alone in S, Sol alone in A, Kimi K3 in B, Grok 4.6 and Muse Spark 1.2 in C, Opus 5 in D, Gemini 3.7 Flash and 3.1 Pro "below F". Every on Opus 5 (24 Jul): "Brilliant in Flashes, Frustrating in Practice", "a hard model to love."
- **Why:** Grok 4.6 ties Sol on score; Sol keeps second on the Codex lineup. Meta is back on Muse Spark 1.2 and its own coding agent. Google drops out: no model above 52.

### 22. 2026-09-02 · Fable 5.1 (1 Sep) and Muse Spark 1.3
[AA on Fable 5.1](https://artificialanalysis.ai/articles/claude-fable-5-1), [AA on Muse Spark 1.3](https://artificialanalysis.ai/articles/muse-spark-1-3), [AA on Gemini 3.8 Flash](https://artificialanalysis.ai/articles/gemini-3-8-flash), [Every](https://every.to/vibe-check/fable-5-1-vibe-check).
- Anthropic · OpenAI +0.90 · Meta +0.15 · xAI +0.15 · Moonshot +0.15
- **AA (v4.1.1):** Fable 5.1 **66**, Opus 5 63, Fable 5 62, Sol 61, Grok 4.6 61, **Muse Spark 1.3 61** (62 at max, limited preview), Kimi K3 about 60 (first pass's figure), **Gemini 3.8 Flash 59**.
- **Voices:** Every: Fable 5.1 is "fast, friendly" and "Anthropic is so back (again)".
- **Where I differ:** the first pass has Google last, "seven months without a Pro". AA scored Gemini 3.8 Flash at 59 the same day, level with Sol at xhigh. I still leave Google out: it is tied with Moonshot and well behind the leaders, and Theo's tier list put the Geminis he tested (3.7 Flash, 3.1 Pro) at the bottom. Meta third is a tie with Sol and Grok broken by momentum; I treat it as soft.

### 23. 2026-09-03 · GPT-6 Astra
[AA](https://artificialanalysis.ai/articles/benchmarking-gpt-6-astra), [Simon](https://simonwillison.net/2026/Sep/3/gpt6-astra/), [Every](https://every.to/vibe-check/gpt-6-astra-vibe-check).
- Anthropic · OpenAI +0.15 · Meta +1.00 · xAI +0.25 · Moonshot +0.15
- **AA:** launch score 61 (v4.1.1), "5 points lower than Fable 5.1". Under v4.2 and v4.3 (4 and 7 Sep) Astra and Fable 5.1 are **tied at 53**, Opus 5 51, Fable 5 50, Muse Spark 1.3 (max) 48, Sol 47. **A re-rating, not a model, closed the gap.**
- **Voices:** Every: "a big upgrade with some bad habits"; "Anthropic's Fable still has better instincts for building a product."
- **Why:** the gap shown is the settled one, as in the first pass. Meta's drop from tied to five behind is the v4.3 rebase again.

### 24. 2026-09-22 · Claude Opus 5.5 (GPT-6 Sol and Luna the same day)
[AA](https://artificialanalysis.ai/articles/claude-opus-5-5), [Simon](https://simonwillison.net/2026/Sep/22/opus-and-sol-and-luna/), [Every](https://every.to/vibe-check/vibe-check-opus-5-5-is-pulling-our-codex-converts-back-to-claude), [Zvi AI #188](https://www.lesswrong.com/posts/S2EAn9v4BwRdptsom/ai-188-gemini-dot-argon).
- Anthropic · OpenAI +1.30 · Meta +1.00 · xAI +0.30 · Moonshot +0.15
- **AA (v4.3):** Opus 5.5 **58**, "the highest score we have measured by several points"; Astra and Fable 5.1 53. [Grok 4.7](https://artificialanalysis.ai/articles/benchmarking-grok-4-7) (21 Sep) 46 and fourth in the Coding Agent Index; Kimi K3 44; Gemini 3.8 Flash 41.
- **Voices:** Every: it is "pulling our Codex converts back to Claude". Zvi (1 Oct): "pending Argon I consider Opus 5.5 my favorite model by a wide margin." Simon: "a new price war".
- **Why:** five points is a big break. Moonshot is back in fifth because the rebase put K3 three ahead of Google's best.

### 25. 2026-10-13 · Gemini 4 Argon opens to users
[AA (30 Sep)](https://artificialanalysis.ai/articles/gemini-4-argon-google-top-three-labs), [Simon](https://simonwillison.net/2026/Oct/13/llm-gemini/), [Every](https://every.to/vibe-check/vc-gemini-4-argon-puts-google-back-on-the-frontier), [Zvi AI #188](https://www.lesswrong.com/posts/S2EAn9v4BwRdptsom/ai-188-gemini-dot-argon). Muse Wonder was 12 Oct.
- Anthropic · OpenAI +1.30 · Google +0.20 · Meta +0.30 · xAI +0.50
- **AA (v4.3):** Argon **53**, level with Astra (53), "rolled out to selected users and is not publicly available" on 30 Sep. [Muse Wonder](https://artificialanalysis.ai/articles/muse-wonder) 52 and Wonder Full **56**, with Full only for Muse Code users.
- **Voices:** Simon on 13 Oct: Argon "made available today via the Gemini API" and the $100/month plan. Zvi on 1 Oct: "What we don't have is access to the model." Every: "a breakthrough for Google loyalists", held back by "its outdated harness".
- **Where I differ:** the first pass dates Google's return to 30 Sep. It was usable on 13 Oct. Wonder Full scores higher than Argon but is not on the API, so Meta stays behind Google.

### 26. 2026-10-23 · Kimi K3.1 Pro
[AA](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks), [Simon](https://simonwillison.net/2026/Oct/23/kimi-k31-pro/).
- Anthropic · OpenAI +1.00 · Google +0.25 · Meta +0.30 · Moonshot +0.25
- **AA (v4.3):** Opus 5.5 58, Sonnet 5.5 56, Wonder Full 56, **K3.1 Pro 55**, then Astra and Argon 53. Weights "promised by Nov 4".
- **Voices:** Simon: "the first time a (soon-to-be) open weight model has scored this highly against the frontier."
- **Where I go against the index:** by score OpenAI is only fourth here. I keep it second (Astra and Sol 6.1 are the Codex lineup, Sol 6.1 costs under a quarter of Astra per task, and Every's same-day "GPT-6 Sol vs. Opus 5.5" piece frames the choice as one clear tradeoff, with Sol the fast, cheap daily driver per a search summary). Four days later v5 put Astra second again, so the index came round to this.

### 27. 2026-10-28 · Gemini 4 Carbon, one day after AA v5
[AA on v5](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5), [AA on Carbon](https://artificialanalysis.ai/articles/gemini-4-carbon-new-number-1).
- Anthropic · OpenAI +0.60 · Google +0.30 · Meta +1.00 · Moonshot +0.25
- **AA v5:** Opus 5.5 **58**, Astra 57, Sol 6.1 55, Argon 50, K3.1 Pro 46 (was 55). Carbon **59** at launch (60 on later pages): "the new #1", but "rolled out to selected users and not yet publicly available".
- **Voices:** none that day. Every's Carbon review is 10 Nov: a "stronger coder" that "picked a bad day to launch".
- **Where I differ:** the first pass moves Google to second here. I do not: nobody outside selected users could use Carbon until 10 Nov. This is also a re-rating step: v5 lifted OpenAI and dropped Meta and Moonshot.

### 28. 2026-11-10 · Fable 5.2 (9 Nov) and Carbon goes general
[Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-2) (first pass, not re-read), [AA model page](https://artificialanalysis.ai/models/claude-fable-5-2), [Every](https://every.to/vibe-check/fable-5-2), [Simon](https://simonwillison.net/2026/Nov/9/llm-anthropic/), [Carbon GA](https://letsdatascience.com/news/google-rolls-out-gemini-4-carbon-to-general-public-9b41bcb4).
- Anthropic · Google +1.30 · OpenAI +0.50 · Meta +1.10 · Moonshot +0.25
- **AA v5:** Fable 5.2 **65**, Carbon 60, Astra 57. Kimi K3.1 Pro weights published 4 Nov ([TechNode](https://technode.com/2026/11/05/moonshot-ai-releases-kimi-k3-1-pro-model-weights/), secondary).
- **Voices:** Every: Fable 5.2 "is a paradigm shift", the "first model we've tested that lets professionals build production-grade tools... without ever reading the underlying code". Simon: "currently ranked first on Artificial Analysis".
- **Why:** with Carbon open to all, Google is second for about a week. Five points over Carbon is a big break.

### 29. 2026-11-21 · Closing state
[AA leaderboard](https://artificialanalysis.ai/leaderboards/models), [AA on GPT-6.2](https://artificialanalysis.ai/articles/openai-has-the-2-model-in-the-intelligence-index-with-the-release-of-gpt-6-2-astra-and-gpt-6-2-sol), [AA on Neon](https://artificialanalysis.ai/articles/gemini-4-neon-intelligence-gain), [Every](https://every.to/vibe-check/vibe-check-gpt-6-2-astra-and-sol-leave-us-wanting-more), [Simon](https://simonwillison.net/2026/Nov/17/gpt62-astra-and-sol/).
- Anthropic · OpenAI +1.00 · Google +0.15 · Meta +1.45 · Moonshot +0.25
- **AA v5.0.1 (read 21 Nov):** Fable 5.2 65, **GPT-6.2 Astra 62**, **Gemini 4 Neon 61**, Carbon 60, Opus 5.5 59, Sol 6.2 57, Sonnet 5.5 55, Hydrogen 54, Terra 6.1 51, Argon 50, **Muse Wonder Full 50** (no API), **Kimi K3.1 Pro 46**, Muse Wonder 44, Qwen4 Max 43, Haiku 5.5 36, **Grok 4.7 35**.
- **Voices:** Every on GPT-6.2: it "handles bounded tasks efficiently", but "the work we most want help with still demands more judgment". Simon: neither Sol nor Astra morphed his test as well as Fable 5.2 and Carbon.
- **Why:** the first four match the owner's take. The fifth does not: see below.

## Where I disagree with the current data

Compared with `research/first-pass/events.txt`:

1. **The closing fifth car: Moonshot, not SpaceX AI.** On AA v5, Kimi K3.1 Pro scores 46 with open weights out on 4 Nov and an API, against 35 for Grok 4.7 (and 43 for Alibaba's Qwen4 Max, 36 for Claude Haiku 5.5). Grok 4.7 has been fading since Sep and Grok 5 has not arrived. I would end the replay with Moonshot fifth, or at least swap them. Meta is also fourth only through Wonder Full, which is not on the API (Wonder itself is 44).
2. **Moonshot appears earlier and softer.** First pass: guest from 16 Jul to 30 Sep, third on entry (0.50 behind OpenAI). Mine: guest in Nov 2025 (K2 Thinking, AA's "second only to GPT-5 among proprietary"), Feb 2026 (K2.5), Apr 2026 (K2.6, AA's "#4 lab"), and again from mid-Sep to now, never above fourth. I side with the owner on K3's strength: Zvi's "four, median six months behind" and its max-effort, token-hungry score justify fourth, not third.
3. **Opus 4.8 on 28 May is missing, and the first Anthropic lead is earlier.** The first pass has OpenAI first from 23 Apr to 9 Jun. AA put Opus 4.8 first on 28 May (61.4 against 60.2) and Every called it "the most complete model we've tested". And Anthropic's first lead belongs in Dec 2025, when AA called GPT-5.2, Opus 4.5 and Gemini 3 Pro a three-way tie and Claude Code decided it; the first pass starts it on 5 Feb.
4. **Meta is not top five from Apr 2025 to Mar 2026.** The first pass keeps Meta fifth at +2.4 to +2.6 behind. AA scored Llama 4 at 13 to 18 while five other labs sat above 60 (Nov 2025). I drop Meta after Llama 4 and bring it back with Muse Spark (8 Apr 2026), which also removes the 2.4 to 2.6 gaps.
5. **Google in autumn 2026, and Carbon.** The first pass moves Google to second on 28 Oct, when Carbon was for selected users only, and dates Argon's return to 30 Sep, when it was announced but not usable (13 Oct). I move both to the days people could use them. In the other direction: Gemini 3.8 Flash scored 59 on 2 Sep, so "last, for the only time" overstates how far behind Google was; it was a tie for fifth that I broke against it.
6. **Smaller points.** The five-point lead is 1.30 on both Fable 5 and Opus 5.5 (the first pass has 1.30 and 0.85). Llama 4 (5 Apr 2025) and Grok 3 (17 Feb) do not move the top five, so I fold them into neighbours. The v4.0 re-rating of 7 Jan and the v4.3 and v5 re-ratings are called out in the captions.

## What I could not verify

- **Anthropic's Fable 5.2 announcement** and the first pass's 9 Nov dates were not re-read; I took the date from Simon, Every and AA's model page. AA has no launch article for Fable 5.2 in its article list, only the model page (65).
- **Grok 3 (17 Feb 2025) and its 1400 Arena score, Llama 4 (5 Apr) and Claude 3.7 (24 Feb)** come from the first pass's sources. Simon's review confirms them only loosely.
- **AA's v2 and v3 version labels** for 2025. I give the pages' own wording and my own label for the late-2025 scoring.
- **Theo's tier list** is read through The AI Daily Brief, not Theo's own posts. I found no Theo coverage for 2025 or for Oct to Nov 2026.
- **Every's paywalled reviews** (Fable 5.1, Astra, Opus 5.5, Carbon, Fable 5.2, GPT-6.2): I quote only the public first paragraph. Several 2025 and early 2026 Every and Simon lines come from search summaries and are marked so.
- **Lambert's "3 to 5 months"** is from a secondary summary (aiweekly); I saw only the intro of the podcast page.
- **Kimi K3.1 Pro weights on 4 Nov** are from secondary coverage; I did not open the Hugging Face repo.
- **GPT-5.4 date (5 Mar), Mythos Preview (7 Apr)** are confirmed by Every's dated review and Simon's talk ("April"); the exact day for Mythos is from the first pass.
- I did not get a Zvi, Theo or METR view for most 2025 dates. METR's [time-horizon page](https://metr.org/time-horizons/) says it is "no longer actively updated" (last 8 Sep 2026), so it carries no weight for the last two months.

## Appendix: the same timeline in the page's SNAPSHOTS format

Dates are unique, each snapshot has five cars, and every `@lab` is on track in that snapshot or the one before. A script checked this, and the minimum four-car pack is 0.45. Paste between the backticks of the `SNAPSHOTS` block.

```
# FRONTIER LAP · ranking-sonnet · November 2024 to November 2026
# 29 snapshots, five cars each. Scale: 0.25 wheel to wheel, 1.0 a clear lead, 1.7 a big break.
# Rule used for gaps: about 0.3 per Artificial Analysis point near the front, capped near 1.3.
# DeepSeek and Moonshot appear only when they were in the AA top four labs or 3+ points clear of the
# weakest regular car (see "Rules" in ranking-sonnet.md). Meta and xAI drop out when they fall to sixth.

# Opening state. AA Quality Index v1 (22 Nov 2024): o1-preview 85, 3.5 Sonnet 80, Gemini 1.5 Pro 80
2024-11-20  OpenAI's race to lose
  > Where it stood: o1 on pole, Claude 3.5 Sonnet the coders' pick.
  openai                o1-preview on pole, the field regrouping.
  anthropic   +0.40     The coders' car of choice.
  google      +0.30     Experimental Geminis trading fastest laps.
  meta        +1.10     Best of the open-weights class.
  spacexai    +0.40     Grok 2: still learning the circuit.

# DeepSeek R1 (20 Jan). AA Intelligence Index v2 a month later: o3-mini 63, o1 62, R1 60, Claude 3.5 Sonnet 44
2025-01-20  DeepSeek shocks the paddock  @deepseek
  > R1 matches o1 for pennies. Nvidia loses roughly $590 billion in a day.
  openai                o1 pro out, o3 previewed. Lead grows.
  anthropic   +0.45     Still on 3.5 Sonnet. No reasoning model.
  deepseek    +0.15     NEW: R1, o1-level, open weights.
  google      +0.30     Gemini 2.0 Flash: quick and cheap.
  meta        +0.90     Llama 3.3. No longer the open-weights king.

# Claude 3.7 Sonnet + Claude Code preview (24 Feb). Grok 3 was 17 Feb; o3-mini 31 Jan; Gemini 2.0 Pro 5 Feb
2025-02-24  Claude 3.7 brings Claude Code  @anthropic
  > Claude 3.7 thinks on demand, and Claude Code quietly arrives.
  openai                o3-mini and Deep Research. GPT-4.5 in three days.
  anthropic   +0.30     Sonnet 3.7 arrives with Claude Code.
  deepseek    +0.25     R1 still level with o1 on the index.
  google      +0.20     Gemini 2.0 Pro: quick, not quickest.
  spacexai    +0.20     NEW: Grok 3, first past 1400 on LMArena.

# Gemini 2.5 Pro Experimental (25 Mar). AA lists it at 68 two weeks later, against o3-mini-high 66
2025-03-25  Gemini 2.5 takes pole  @google
  > Gemini 2.5 Pro: Google's first undisputed best model.
  google                Gemini 2.5 Pro. Forty Elo clear.
  openai      +0.20     Ghibli images go viral. o3 still garaged.
  anthropic   +0.25     Sonnet 3.7 keeps the coders loyal.
  deepseek    +0.30     V3 refresh and R1, nothing newer.
  spacexai    +0.25     Grok 3 hangs on to the pack.

# o3 and o4-mini (16 Apr). AA v2 two days later: o4-mini 70, 2.5 Pro 68, Grok 3 mini 67, R1 60, Claude 3.7 57
2025-04-16  o3 puts OpenAI back in front  @openai
  > o3 ships with tools. OpenAI retakes the lead. Meta drops out after Llama 4.
  openai                o3 and o4-mini: back in front.
  google      +0.15     2.5 Pro loses pole, not pace.
  anthropic   +0.35     Waiting on Claude 4. Index says fifth, coders say third.
  spacexai    +0.20     Grok 3 mini scores 67 on the index.
  deepseek    +0.40     R1 at three months old.

# Claude Opus 4 and Sonnet 4, Claude Code GA (22 May). DeepSeek R1-0528 follows on 29 May at 68
2025-05-22  Claude 4: three abreast  @anthropic
  > Claude 4 leads SWE-bench. Three abreast at the front.
  openai                o3 ahead by a front wing.
  google      +0.15     I/O upgrades: 2.5 Pro and Veo 3.
  anthropic   +0.15     Claude 4 tops the coding sector.
  spacexai    +0.30     Waiting on the Grok 4 upgrade.
  deepseek    +0.25     An R1 refresh is a week away.

# Grok 4 (9 Jul). AA v2: Grok 4 73, o3-pro 71, Gemini 2.5 Pro 70, R1-0528 68, Claude 4 Opus 64
2025-07-09  Grok 4 tops the index  @spacexai
  > Grok 4 tops the index for the first time. Practitioners shrug.
  openai                o3-pro leads on breadth, not benchmarks.
  google      +0.15     2.5 Pro: level with o3.
  anthropic   +0.15     Claude 4 Opus: behind on index, ahead on code.
  spacexai    +0.30     Grok 4: fastest single lap, no coding agent.
  deepseek    +0.35     R1-0528 holds fifth.

# GPT-5 (7 Aug). AA: GPT-5 (high) 68. Opus 4.1 was 5 Aug
2025-08-07  GPT-5: bumpy but ahead  @openai
  > GPT-5 retakes the top, then a user revolt forces a retreat.
  openai                Rough launch, still fastest.
  anthropic   +0.25     Opus 4.1 and a Claude Code boom.
  google      +0.15     2.5 Pro ages. Genie 3 dazzles.
  spacexai    +0.30     Grok 4 led the index for a month.
  deepseek    +0.40     Last of the original guests.

# Gemini 3 Pro (18 Nov). AA (pre-v4): Gemini 3 Pro 73, GPT-5.1 70, Kimi K2 Thinking 67 (7 Nov), Grok 4 65, Sonnet 4.5 63
2025-11-18  Gemini 3 takes pole  @google
  > Gemini 3 Pro sweeps the boards. Google leads again.
  google                Gemini 3 Pro tops the timing screens.
  openai      +0.30     GPT-5.1, a week old, already passed.
  anthropic   +0.15     Sonnet 4.5 strong on code. Opus due.
  spacexai    +0.45     Grok 4.1 can't follow the leaders.
  moonshot    +0.25     NEW: Kimi K2 Thinking, best open model.

# Claude Opus 4.5 (24 Nov). AA: Opus 4.5 70, level with GPT-5.1, three behind Gemini 3 Pro
2025-11-24  Opus 4.5 answers in six days  @anthropic
  > Opus 4.5 passes 80% on SWE-bench. Coding agents cross a line.
  google                Gemini 3 Pro and Nano Banana Pro.
  anthropic   +0.15     Opus 4.5 breaks 80% on SWE-bench.
  openai      +0.15     Level on the index. Code red follows.
  spacexai    +0.60     Grok 4.1 losing touch.
  moonshot    +0.20     K2 Thinking still the open-weights bar.

# GPT-5.2 (11 Dec). AA v4.0 (7 Jan): GPT-5.2 51, Opus 4.5 49, Gemini 3 Pro 48. The old 73 became 48
2025-12-11  Three-way tie, Claude Code in front  @openai
  > GPT-5.2 answers the code red. On the index it's a dead heat.
  anthropic             Claude Code over the holidays tips the tie.
  openai      +0.10     GPT-5.2 takes the index by a nose.
  google      +0.15     Gemini 3 Pro, a month old.
  spacexai    +0.70     Grok 4.1 Fast. No new pace.
  moonshot    +0.20     Kimi K2.5 follows in January.

# Claude Opus 4.6 and GPT-5.3-Codex (both 5 Feb). AA v4.0: Opus 4.6 53, GPT-5.2 51, Gemini 3 Pro 48, K2.5 about 47
2026-02-05  Claude Code fever  @anthropic
  > Opus 4.6 rides a winter of Claude Code mania to the top.
  anthropic             First clear lead: Opus 4.6, Claude Code.
  openai      +0.20     GPT-5.3-Codex, launched minutes after Opus.
  google      +0.25     Gemini 3 Pro, now three months old.
  moonshot    +0.55     K2.5: only the big three score higher.
  spacexai    +0.20     New owner SpaceX, Grok 4.20 at 48.

# Gemini 3.1 Pro (19 Feb): 57 on AA v4.0, four clear of Opus 4.6 at under half the cost
2026-02-19  Gemini 3.1 Pro tops the index  @google
  > Gemini 3.1 Pro tops the index. Claude Code keeps Anthropic ahead.
  anthropic             Outscored by four, still the one developers pick.
  google      +0.10     Gemini 3.1 Pro: the index leader.
  openai      +0.20     GPT-5.2 and Codex, shuffled to third.
  moonshot    +0.50     K2.5, still best of the rest.
  spacexai    +0.20     Grok 4.20 scores 48.

# Muse Spark (8 Apr). Also since February: GPT-5.4 (5 Mar), Claude Mythos Preview, partners only (7 Apr)
2026-04-08  Meta is back  @meta
  > Muse Spark lands fourth. Mythos is partners-only. Goodbye, Llama.
  anthropic             Opus 4.6 leads on work done, not on the index.
  google      +0.10     Gemini 3.1 Pro, co-fastest on the index.
  openai      +0.10     GPT-5.4: "OpenAI is back", per Every.
  meta        +1.20     NEW: Muse Spark, 52, app only for now.
  spacexai    +0.30     Grok 4.20 just behind Meta.

# GPT-5.5 (23 Apr). Opus 4.7 was 16 Apr (57, tied); Kimi K2.6 was 20 Apr (54, "#4 lab")
2026-04-23  GPT-5.5 strikes back  @openai
  > GPT-5.5 goes three points clear. OpenAI back on pole.
  openai                GPT-5.5 goes three points clear.
  anthropic   +0.25     Opus 4.7 is hard to love. Mythos stays locked.
  google      +0.25     Gemini 3.1 Pro still in touch.
  moonshot    +0.85     Kimi K2.6: first open model in the top four.
  meta        +0.15     Muse Spark holds on, no API yet.

# Claude Opus 4.8 (28 May): 61.4 on AA v4.0, 1.2 clear of GPT-5.5. Google I/O brought Gemini 3.5 Flash, no Pro
2026-05-28  Opus 4.8 retakes the lead  @anthropic
  > Opus 4.8 edges back to the top of the index and wins Every's tests.
  anthropic             Opus 4.8: "Anthropic should've rounded up to 5".
  openai      +0.25     GPT-5.5 a point and a bit back.
  google      +0.40     Flash is quick. Where is Pro?
  spacexai    +0.70     Grok 4.3 and Grok Build.
  meta        +0.15     Muse Spark, no upgrade yet.

# Claude Fable 5 (9 Jun): 64.9 on AA v4.0, nearly five clear. v4.1 on 15 Jun: Fable 60, Opus 4.8 56, GPT-5.5 55
2026-06-09  Fable 5 rewrites the board  @anthropic
  > Fable 5 launches five points clear. The biggest swing yet.
  anthropic             Fable 5: five points clear at launch.
  openai      +1.30     GPT-5.5 suddenly looks a generation old.
  google      +0.45     Flash is quick. Where is Pro?
  spacexai    +0.35     Grok Build joins the coding race.
  meta        +0.15     Muse Spark holding station.

# Fable 5 and Mythos 5 disabled for all customers after a Commerce Department directive (12 Jun)
2026-06-12  Red flag for Fable 5  @anthropic
  > Fable 5 pulled offline by government order. Opus 4.8 leads.
  anthropic             Fable garaged by order. Opus 4.8 leads.
  openai      +0.25     GPT-5.5 back within striking distance.
  google      +0.40     Gap halves without a new part.
  spacexai    +0.35     Grok 4.3, same story.
  meta        +0.15     Closer by default.

# GPT-5.6 Sol, Terra, Luna (9 Jul). Fable back 1 Jul; Grok 4.5 8 Jul (54). AA v4.1: Fable 60, Sol 59
2026-07-09  GPT-5.6 Sol closes the gap  @openai
  > GPT-5.6 Sol lands one point behind Fable 5. Spitting distance.
  anthropic             Fable back since 1 July. Lead cut to one point.
  openai      +0.40     GPT-5.6 Sol: tops the Coding Agent Index.
  spacexai    +1.00     Grok 4.5 at 54, a day old, holding third.
  google      +0.25     Best model is still a Flash.
  meta        +0.15     Muse Spark 1.1 keeps the tow.

# Kimi K3 (16 Jul): 57 on AA v4.1, third overall by score. Zvi: four to six months behind the closed frontier
2026-07-16  Kimi K3 crashes the party  @moonshot
  > Kimi K3 debuts third on the index. Fourth on the road.
  anthropic             Fable 5 leads; Opus 5 is next.
  openai      +0.45     GPT-5.6 Sol: one point off the lead.
  spacexai    +0.90     Grok 4.5 and Grok Build: a coding agent too.
  moonshot    +0.15     NEW: Kimi K3. Big, slow, benchmark-strong.
  google      +0.35     No model above 50. Still no Pro.

# Grok 4.6 (12 Aug): 61 on AA v4.1.1, level with GPT-5.6 Sol. Since July: Opus 5 (24 Jul, 63), Muse Spark 1.2 + Muse Code (5 Aug, 57)
2026-08-12  SpaceX AI is back on the frontier  @spacexai
  > Grok 4.6 ties GPT-5.6 Sol on the index. Meta returns.
  anthropic             Opus 5 and Fable 5: the top two.
  openai      +0.45     GPT-5.6 Sol, still the Codex car.
  spacexai    +0.10     Grok 4.6: level with Sol, at under half the price.
  moonshot    +0.15     Kimi K3 loses third by a point.
  meta        +0.25     Muse Spark 1.2 and Muse Code bring it back.

# Fable 5.1 (1 Sep, 66) and Muse Spark 1.3 (2 Sep, 61; max 62 in limited preview). Gemini 3.8 Flash same day: 59
2026-09-02  Meta onto the podium  @meta
  > Muse Spark 1.3 ties Sol and Grok 4.6 behind Fable 5.1. Meta on the podium.
  anthropic             Fable 5.1 tops the index at 66.
  openai      +0.90     GPT-5.6 Sol, five points adrift.
  meta        +0.15     Muse Spark 1.3: level with Sol on the index.
  spacexai    +0.15     Grok 4.6, level on 61.
  moonshot    +0.15     Kimi K3 just ahead of Gemini 3.8 Flash.

# GPT-6 Astra (3 Sep): 61 at launch, level with Sol. AA v4.2 (4 Sep) and v4.3 (7 Sep) re-rate it to 53, level with Fable 5.1
2026-09-03  GPT-6 arrives  @openai
  > GPT-6 arrives. OpenAI declares the AGI era. The index re-rates it level.
  anthropic             Fable 5.1 keeps its nose ahead.
  openai      +0.15     GPT-6 Astra: level once the index settles.
  meta        +1.00     Muse Spark 1.3 (48 on v4.3) holds third.
  spacexai    +0.25     Grok 4.6. Grok 5 keeps slipping.
  moonshot    +0.15     Kimi K3, still in the points.

# Claude Opus 5.5 (22 Sep): 58 on AA v4.3, five clear of Astra and Fable 5.1 (53). GPT-6 Sol and Luna the same day; Grok 4.7 the day before
2026-09-22  Opus 5.5 pulls away  @anthropic
  > Opus 5.5 scores five clear of GPT-6. Anthropic pulls away.
  anthropic             Opus 5.5: fastest by several points.
  openai      +1.30     GPT-6 fast and cheap, but not Opus fast.
  meta        +1.00     Muse Spark 1.3, still third.
  spacexai    +0.30     Grok 4.7: fourth in Grok Build, 46 on the index.
  moonshot    +0.15     Kimi K3 hanging on.

# Gemini 4 Argon (13 Oct, usable): 53 on AA v4.3, level with Astra. Announced 30 Sep to selected users; Muse Wonder 12 Oct
2026-10-13  Gemini 4 Argon opens up  @google
  > Argon ties GPT-6 for less, and you can finally use it. Kimi is squeezed out.
  anthropic             Opus 5.5 and Sonnet 5.5 lead.
  openai      +1.30     Astra matched by a Gemini.
  google      +0.20     Gemini 4 Argon: back on the podium.
  meta        +0.30     Wonder Full scores 56, but not on the API.
  spacexai    +0.50     Grok 4.7 fading.

# Kimi K3.1 Pro (23 Oct): 55 on AA v4.3, fourth overall, ahead of Astra and Argon. Weights promised for 4 Nov
2026-10-23  Kimi K3.1 Pro lands  @moonshot
  > Kimi K3.1 Pro scores 55 on the index. Open weights are promised.
  anthropic             Opus 5.5 still the benchmark.
  openai      +1.00     Astra scores lower on this index. Still P2 on the road.
  google      +0.25     Argon, a week into general access.
  meta        +0.30     Wonder: Meta's best lap, API-less at the top.
  moonshot    +0.25     NEW: K3.1 Pro, the first open model this close.

# AA Intelligence Index v5 (27 Oct) re-rates the board: Opus 5.5 58, Astra 57, Sol 6.1 55, Argon 50, K3.1 Pro 46. Carbon (28 Oct) 59, limited access
2026-10-28  Gemini 4 Carbon tops the index  @google
  > Carbon tops the new index, but it's selected users only. v5 is unkind to Kimi.
  anthropic             Opus 5.5 at 58 on v5. One point behind Carbon.
  openai      +0.60     Astra re-rated up to 57.
  google      +0.30     Carbon: index leader, limited access.
  meta        +1.00     Wonder Full falls to 50 on v5.
  moonshot    +0.25     K3.1 Pro falls to 46 on v5.

# Claude Fable 5.2 (9 Nov): 65 on AA v5. Gemini 4 Carbon generally available 10 Nov (60). GPT-6 Astra 57
2026-11-10  Fable 5.2 restores order  @anthropic
  > Fable 5.2 takes the index back, 20% cheaper. Carbon opens to everyone.
  anthropic             Fable 5.2: five points clear again.
  google      +1.30     Carbon: second and now on sale.
  openai      +0.50     Astra three points back.
  meta        +1.10     Wonder Full can't see the leaders.
  moonshot    +0.25     K3.1 Pro weights out since 4 Nov.

# Closing state. GPT-6.2 Astra (17 Nov, 62) and Gemini 4 Neon (18 Nov, 61) on AA v5.0.1: Fable 5.2 65
2026-11-21  Clear air up front  @openai
  > GPT-6.2 and Neon land. OpenAI is second again, Google a hair behind.
  anthropic             Clear leader.
  openai      +1.00     GPT-6.2 Astra retakes second.
  google      +0.15     Neon and Carbon: right on OpenAI's gearbox.
  meta        +1.45     Muse Wonder: good, but off the API at the top.
  moonshot    +0.25     Kimi K3.1 Pro: open weights, ahead of Grok 4.7.
```
