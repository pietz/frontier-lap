# Frontier Lap ranking review · Sol

## Standings on 21 November 2026

| Place | Lab | Gap to car ahead | Best accessible model used for the ranking | AA v5.0.1 |
|---|---|---:|---|---:|
| 1 | Anthropic | 0 | Claude Fable 5.2 max, default fallback | 65 |
| 2 | OpenAI | +0.80 | GPT-6.2 Astra max | 62 |
| 3 | Google | +0.20 | Gemini 4 Neon xhigh | 61 |
| 4 | Meta | +1.55 | Muse Wonder Full max in Muse Code | 50 |
| 5 | Moonshot | +0.30 | Kimi K3.1 Pro via API | 46 |

AA lists the API-accessible Muse Wonder at 44, Qwen4 Max at 43 and Grok 4.7 xhigh at 35. Meta's lead over Moonshot assumes Muse Code is a viable way for the user to access Wonder Full. OpenAI's edge over Google is smaller than Anthropic's lead over OpenAI. Every's reviews and AA's separate coding test suggest a much tighter fight on everyday engineering than on the hardest general work. [AA leaderboard](https://artificialanalysis.ai/leaderboards/models) · [AA Muse Wonder access](https://artificialanalysis.ai/articles/muse-wonder) · [AA Neon tests](https://artificialanalysis.ai/articles/gemini-4-neon-intelligence-gain) · [Every on Fable 5.2](https://every.to/vibe-check/fable-5-2) · [Every on Neon](https://every.to/vibe-check/mini-vibe-check-four-new-geminis-when-should-you-pick-neon)

## How I scored the race

The primary unit is the lab's best model accessible to a serious user by public API, app, coding product or downloadable weights. Paid access qualifies. Partner-only evaluations count as evidence of potential, and the rank comes from a model ordinary users can get. I use public coding tools, price and lineup depth to break close calls and give an explicit reason when they outweigh the composite. The gaps are editorial seconds to the car ahead. About 0.25 is wheel to wheel, 1.00 is a clear lead, and 1.70 is a big break.

I read dated AA articles and original data in Wayback captures. The November 2024 and January 2025 pages displayed AA's legacy **Quality Index**. AA dates its v1 family through 10 February 2025, v2.0 from 11 February, v2.1 from 5 August, v2.2 from 6 August and v3.0 from 2 September. AA publishes month ranges for some v4 and v5 patches, so several events use the version family. A named capture date after the event is a retrospective comparison on the stated version, and unverified launch-day numbers are marked. The model names and release dates come from the labs where possible. [AA methodology and version history](https://artificialanalysis.ai/methodology/intelligence-benchmarking#version-history)

The replay uses the cars already registered in the page. This is a material constraint around the cutoff. Alibaba has a case for fifth in August 2025, and Z AI's publicly available GLM-5 at 50 has a strong case for fourth in February and March 2026, ahead of K2.5 and the verified Grok options. An unrestricted lab grid for those February and March rows would put Z AI fourth and Moonshot fifth. GLM-5.2 reached 51 in July, and GLM-5.3 tied K3 at 60 on the 1 September capture. The shared shortlist informs the practical tie-breaks where I found pertinent published work. I use AA's own measured findings where I could verify the composite and access. [AA GLM-5](https://artificialanalysis.ai/articles/glm-5-everything-you-need-to-know) · [AA archive, 7 August 2025](https://web.archive.org/web/20250807171948/https://artificialanalysis.ai/leaderboards/models) · [AA July 2026 cross-check](https://artificialanalysis.ai/articles/four-frontier-launches-in-eight-days-six-labs-now-field-a-model-above-50-on-the-artificial-analysis-intelligence-index) · [AA archive, 1 September](https://web.archive.org/web/20260901032805/https://artificialanalysis.ai/leaderboards/models)

## Timeline

### 2024-11-20 · OpenAI starts on pole

**Order** · OpenAI 0 · Anthropic +0.70 · Google +0.20 · Meta +0.95 · xAI +0.40

OpenAI's o1-preview and Anthropic's upgraded Claude 3.5 Sonnet were publicly usable. The **legacy AA Quality Index** on the 22 November capture gives o1-preview 85, Claude 3.5 Sonnet 80, Gemini 1.5 Pro (September) 80 and Llama 3.1 405B 72. Grok 2's period score is unverified. Willison documented subsequent Gemini experimental releases and tested their API access. The opening goes to reasoning, with the coding model slightly ahead of the tied generalist. [OpenAI](https://openai.com/index/introducing-openai-o1-preview/) · [Anthropic](https://www.anthropic.com/news/3-5-models-and-computer-use) · [Meta](https://ai.meta.com/blog/meta-llama-3-1/) · [xAI](https://x.ai/news/grok-2) · [AA archive, 22 November](https://web.archive.org/web/20241122181314/https://artificialanalysis.ai/leaderboards/models) · [Willison](https://simonwillison.net/2024/Nov/22/gemini-exp-1121/)

### 2025-01-20 · DeepSeek R1 challenges o1

**Order** · OpenAI 0 · DeepSeek +0.30 · Anthropic +0.75 · Google +0.20 · Meta +0.90

DeepSeek released R1 on its API, app and under MIT weights. The **legacy AA Quality Index** on 1 February shows o1 90, R1 89, Gemini 1.5 Pro and Claude 3.5 Sonnet 80, and Llama 3.1 405B 74. This nearby capture already includes o3-mini, which I exclude from January 20. Willison ran a distillation locally and noted the difference between the open weights and the hosted service. OpenAI's full o1 and paid o1 pro had shipped on 5 December, so its broader reasoning lineup breaks the near tie. [DeepSeek](https://api-docs.deepseek.com/news/news250120) · [OpenAI](https://openai.com/index/introducing-chatgpt-pro/) · [AA archive, 1 February](https://web.archive.org/web/20250201063124/https://artificialanalysis.ai/leaderboards/models) · [Willison](https://simonwillison.net/2025/Jan/20/deepseek-r1/)

### 2025-02-17 · Grok 3 enters the front pack

**Order** · OpenAI 0 · DeepSeek +0.35 · xAI +0.25 · Anthropic +0.30 · Google +0.25

**AA v2.0** starts 11 February. The 25 February capture has o3-mini 62.9, R1 60.2, Gemini 2.0 Pro Experimental 49.2 and Claude 3.5 Sonnet 44.3. The public Grok 3 reasoning variant has no verified launch-day AA score. xAI reported a 1402 Arena score for its test build, and Zvi's launch roundup described meaningful reasoning competition alongside uneven real-world reports. I put xAI close to R1 and ahead of the two labs still relying mostly on standard models. The U.S. launch stream was on 17 February, with the written announcement dated 19 February. [xAI](https://x.ai/news/grok-3) · [AA methodology](https://artificialanalysis.ai/methodology/intelligence-benchmarking#version-history) · [AA archive, 25 February](https://web.archive.org/web/20250225122746/https://artificialanalysis.ai/leaderboards/models) · [Zvi](https://thezvi.substack.com/p/go-grok-yourself)

### 2025-02-24 · Claude 3.7 brings Claude Code

**Order** · OpenAI 0 · DeepSeek +0.35 · Anthropic +0.20 · xAI +0.20 · Google +0.35

**AA v2.0**, first score I recovered for Claude 3.7 Sonnet Extended Thinking is 57.4 on 26 March, versus R1 60.2 and o3-mini (high) 65.5 in the same capture. Every found the model especially capable for coding and useful on prototypes, with a tendency to overreach on production work. That closes the gap and moves Claude past xAI, while R1 keeps second. Anthropic's story has a related-article date near the top, so I checked the launch against the platform notes. [Anthropic announcement](https://www.anthropic.com/news/claude-3-7-sonnet) · [Claude release notes](https://platform.claude.com/docs/en/release-notes/overview) · [AA archive, 26 March](https://web.archive.org/web/20250326001855/https://artificialanalysis.ai/leaderboards/models) · [Every](https://every.to/vibe-check/vibe-check-claude-3-7-sonnet-and-claude-code)

### 2025-03-25 · Gemini 2.5 takes the lead

**Order** · Google 0 · OpenAI +0.40 · DeepSeek +0.55 · Anthropic +0.25 · xAI +0.40

**AA v2.0**, 2 April capture: Gemini 2.5 Pro Experimental 68.3, o3-mini (high) 65.5, R1 60.2 and Claude 3.7 Extended Thinking 57.4. Grok 3 reasoning is unverified on this capture. Google put the preview in AI Studio and the Gemini app for Advanced subscribers. Every later reported that 2.5 Pro became its team's preferred model in Cursor for context and reasoning. This is a first-place change backed by the composite and a usable product. [Google](https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/) · [AA archive, 2 April](https://web.archive.org/web/20250402114911/https://artificialanalysis.ai/leaderboards/models) · [Every](https://every.to/vibe-check/vibe-check-gemini-3-pro-a-reliable-workhorse-with-surprising-flair)

### 2025-04-16 · o3 edges Gemini

**Order** · OpenAI 0 · Google +0.20 · DeepSeek +0.75 · Anthropic +0.20 · xAI +0.25

**AA v2.0**, 3 June capture for models already shipped: o3 70.0, o4-mini high 69.8 and March Gemini 2.5 Pro 68.9. The April preview's earliest verified figure is 68.3 on 2 April. Grok 3 mini high was subsequently measured at 66.7, but I could not confirm its exact public API start or contemporaneous April score. It can beat older Claude and R1 variants on short reasoning tests. I keep it fifth here given the limited evidence about its April availability and the value of full-size R1 and Claude Code. Meta released Llama 4 on 5 April, but the public Maverick was 50.5 on the June v2 board. Willison documented how its Arena submission differed from the released model. [OpenAI](https://openai.com/index/introducing-o3-and-o4-mini/) · [Meta](https://ai.meta.com/blog/llama-4-multimodal-intelligence/) · [AA archive, 3 June](https://web.archive.org/web/20250603043751/https://artificialanalysis.ai/leaderboards/models) · [Willison](https://simonwillison.net/2025/Apr/30/criticism-of-the-chatbot-arena/)

### 2025-05-28 · Claude 4 and R1 narrow the field

**Order** · OpenAI 0 · Google +0.20 · DeepSeek +0.20 · Anthropic +0.30 · xAI +0.20

Anthropic released Claude Opus 4 and Sonnet 4 on 22 May and made Claude Code generally available. DeepSeek updated R1 on 28 May. **AA v2.0**, 3 June: o3 70.0, March Gemini 2.5 Pro 68.9, R1 0528 68.3, Grok 3 mini high 66.7 and Claude Opus 4 Extended Thinking 64.4. Aider's period leaderboard illustrates the harness dependence: the R1 refresh scored 71.4% and Opus 4 without extended thinking scored 70.7% on its Polyglot test in runs from late May and early June. I give Anthropic fourth over xAI because Claude Code makes its coding strength more usable and full-size Grok 3 Reasoning Beta scored 56.1. [Anthropic](https://www.anthropic.com/news/claude-4) · [DeepSeek](https://api-docs.deepseek.com/news/news250528) · [AA archive, 3 June](https://web.archive.org/web/20250603043751/https://artificialanalysis.ai/leaderboards/models) · [Aider](https://aider.chat/docs/leaderboards/)

### 2025-07-09 · Grok 4 takes pole

**Order** · xAI 0 · OpenAI +0.25 · Google +0.20 · DeepSeek +0.35 · Anthropic +0.30

**AA v2.0**, 11 July capture: Grok 4 73.2, o3-pro 71.0, Gemini 2.5 Pro 70.5, R1 0528 68.3 and Opus 4 Extended Thinking 64.4. Willison confirmed access to the regular Grok 4 via the API and located the expensive Heavy variant in SuperGrok Heavy. The available standard model wins pole. Claude Code and OpenAI's lineup shrink the gaps, with insufficient evidence to overrule the lead. The launch was 9 July Pacific time, and some pages date their coverage 10 July. [xAI](https://x.ai/news/grok-4) · [AA archive, 11 July](https://web.archive.org/web/20250711191631/https://artificialanalysis.ai/leaderboards/models) · [AA Q2 report, pp. 10–12](https://artificialanalysis.ai/downloads/state-of-ai/2025/Q2-2025-Artificial-Analysis-State-of-AI-Highlights-Report.pdf) · [Willison](https://simonwillison.net/2025/Jul/10/grok-4/)

### 2025-08-07 · GPT-5 retakes the lead

**Order** · OpenAI 0 · xAI +0.30 · Google +0.40 · Anthropic +0.20 · DeepSeek +0.40

**AA v2.2** applies from 6 August. AA's 7 August capture showed Grok 4 and o3-pro both 67.5, Gemini 2.5 Pro 64.6, Qwen3 235B 2507 Reasoning 63.6 and R1 0528 58.7. GPT-5 was missing from that particular capture. On 1 September, still v2.2, GPT-5 high was 69.0, Opus 4.1 thinking 61.0, DeepSeek V3.1 Reasoning 59.7 and R1 0528 58.6. Every found Opus 4.1 an incremental coding upgrade and GPT-5 strong on instruction following. I keep xAI second on the composite and retain DeepSeek narrowly for the breadth and repeatable deployment of R1. Alibaba is the index-first fifth-place alternative and would need a car registered in LABS. [OpenAI](https://openai.com/index/introducing-gpt-5/) · [Anthropic](https://www.anthropic.com/news/claude-opus-4-1) · [AA archive, 7 August](https://web.archive.org/web/20250807171948/https://artificialanalysis.ai/leaderboards/models) · [AA archive, 1 September](https://web.archive.org/web/20250901150210/https://artificialanalysis.ai/leaderboards/models) · [Every](https://every.to/vibe-check/vibe-check-genie-3-claude-4-1-gpt-oss-and-gpt-5)

### 2025-09-29 · Sonnet 4.5 closes on Grok

**Order** · OpenAI 0 · xAI +0.45 · Anthropic +0.20 · Google +0.30 · DeepSeek +0.50

**AA v3.0**, introduced 2 September, added agentic evaluations. AA's Q3 report gives GPT-5 high 68, Grok 4 65, Claude Sonnet 4.5 Thinking 63 and Gemini 2.5 Pro 60. DeepSeek's exact 29 September score is unverified. Every found Sonnet 4.5 faster and more reliable than its previous coding choice, particularly for large pull requests and multi-file work. That clears Google and narrows the gap to xAI. [Anthropic](https://www.anthropic.com/news/claude-sonnet-4-5) · [AA Q3 report, p. 18](https://artificialanalysiscdn.com/public-reports/state-of-ai-2025-q3-highlights-artificial-analysis.pdf) · [Every](https://every.to/vibe-check/vibe-check-claude-sonnet-4-5)

### 2025-11-06 · Kimi K2 Thinking enters

**Order** · OpenAI 0 · Moonshot +0.35 · xAI +0.20 · Anthropic +0.25 · Google +0.25

Moonshot released Kimi K2 Thinking under modified MIT terms with an API. **AA v3.0** gives it 67 in AA's 25 November launch comparison versus Grok 4 at 65. The exact 6 November board is unverified, so the size of the move is uncertain. Moonshot's published long tool-use tests supply corroboration of a serious general-purpose reasoning model. I give it the close call over Grok and drop DeepSeek rather than keeping Meta on track by default. [Moonshot launch date and API](https://platform.kimi.com/blog/posts/k2-think) · [Moonshot model notes](https://www.kimi.com/en/blog/kimi-k2-thinking) · [AA comparison](https://artificialanalysis.ai/articles/claude-opus-4-5-benchmarks-and-analysis)

### 2025-11-18 · Gemini 3 puts Google back on pole

**Order** · Google 0 · OpenAI +0.55 · Moonshot +0.40 · xAI +0.20 · Anthropic +0.15

**AA v3.0**, Gemini 3 Pro Preview 73, GPT-5.1 high 70, Kimi K2 Thinking 67, Grok 4 65, Claude Sonnet 4.5 Thinking 63. The Kimi and Grok readings come from AA's 25 November contemporary comparison. Grok 4.1 shipped on 17 November, but its same-version composite is unverified here. Every found Gemini strong across coding, images and large-context work while still preferring other tools on some tasks. Its lead is clear enough to move the whole lineup. [Google](https://blog.google/products-and-platforms/products/gemini/gemini-3/) · [xAI](https://x.ai/news/grok-4-1) · [AA Gemini launch](https://artificialanalysis.ai/articles/gemini-3-pro-everything-you-need-to-know) · [AA comparison](https://artificialanalysis.ai/articles/claude-opus-4-5-benchmarks-and-analysis) · [Every](https://every.to/vibe-check/vibe-check-gemini-3-pro-a-reliable-workhorse-with-surprising-flair)

### 2025-11-24 · Opus 4.5 breaks the tie for second

**Order** · Google 0 · Anthropic +0.40 · OpenAI +0.15 · Moonshot +0.40 · xAI +0.25

**AA v3.0**, Gemini 3 Pro 73, Opus 4.5 Thinking and GPT-5.1 high 70, K2 Thinking 67 and Grok 4 65. Every reported longer productive coding runs on both real codebases and quick prototypes. Its review breaks the tie for Anthropic. Gemini's broader result keeps it first. [Anthropic](https://www.anthropic.com/news/claude-opus-4-5) · [AA launch comparison](https://artificialanalysis.ai/articles/claude-opus-4-5-benchmarks-and-analysis) · [Every](https://every.to/vibe-check/vibe-check-opus-4-5-is-the-coding-model-we-ve-been-waiting-for)

### 2025-12-11 · GPT-5.2 moves OpenAI back in front

**Order** · OpenAI 0 · Google +0.20 · Anthropic +0.25 · Moonshot +0.45 · xAI +0.25

**AA v3.0**, AA's year-end report names GPT-5.2 xhigh the leader, with Gemini 3 Pro and Opus 4.5 in the same pack. Exact launch-day AA scores for GPT-5.2 and other changes since November are unverified. OpenAI's release showed gains on complex professional tasks. DeepSeek V3.2-Speciale was offered on a temporary API ending 15 December, so I keep Moonshot and xAI as the durable back pair given the available evidence. [OpenAI](https://openai.com/index/introducing-gpt-5-2/) · [AA year-end report, pp. 11, 15](https://artificialanalysiscdn.com/public-reports/state-of-ai-2025-year-end-highlights-artificial-analysis.pdf) · [DeepSeek](https://api-docs.deepseek.com/news/news251201)

### 2026-01-27 · The index resets and Kimi upgrades

**Order** · OpenAI 0 · Anthropic +0.20 · Google +0.15 · Moonshot +0.45 · xAI +0.30

**AA v4.0 family**, January. AA's Kimi K2.5 release analysis puts it behind only OpenAI, Anthropic and Google and finds its knowledge-work Elo above Gemini 3 Pro. A nearby 5 February capture has GPT-5.2 xhigh 51.2, Opus 4.5 49.7, Gemini 3 Pro high 48.4, K2.5 46.7 and Grok 4 41.4. The January launch-day scores and exact v4.0 patch remain unverified. Z AI's GLM-4.7 scores 42.1 in that capture. I retain Grok by a small margin on lineup and availability. The switch to v4, along with Moonshot's publicly downloadable and API-served K2.5, moves the gaps. AA added knowledge work, factual recall and physics and retired several saturated tests. [Moonshot](https://www.kimi.com/en/blog/kimi-k2-5) · [AA K2.5 release analysis](https://artificialanalysis.ai/articles/kimi-k2-5-everything-you-need-to-know) · [AA archive, 5 February](https://web.archive.org/web/20260205184229/https://artificialanalysis.ai/leaderboards/models) · [AA version history](https://artificialanalysis.ai/methodology/intelligence-benchmarking#version-history)

### 2026-02-05 · Opus 4.6 takes the lead

**Order** · Anthropic 0 · OpenAI +0.35 · Google +0.20 · Moonshot +0.55 · xAI +0.25

**AA v4.0 family** — The 5 February capture shows GPT-5.2 xhigh at 51.2 and Gemini 3 Pro high at 48.4. The 2 March capture has Opus 4.6 max at 53.0 and GPT-5.3-Codex xhigh at 54.0. I could not recover those last two scores from the release day itself. Both shipped on 5 February, with GPT-5.3-Codex initially in Codex. Zvi found both substantial coding upgrades and preferred Opus for broader work as well. That supports an Anthropic lead with a competitive second, given the specialist's narrower release channel. [Anthropic](https://www.anthropic.com/news/claude-opus-4-6) · [OpenAI](https://openai.com/index/introducing-gpt-5-3-codex/) · [AA archive, 5 February](https://web.archive.org/web/20260205184229/https://artificialanalysis.ai/leaderboards/models) · [AA archive, 2 March](https://web.archive.org/web/20260302234417/https://artificialanalysis.ai/leaderboards/models) · [Zvi](https://thezvi.substack.com/p/claude-opus-46-escalates-things-quickly)

### 2026-02-19 · Gemini 3.1 Pro takes pole

**Order** · Google 0 · Anthropic +0.65 · OpenAI +0.30 · Moonshot +0.40 · xAI +0.35

**AA v4.0 family** — Gemini 3.1 Pro Preview 57 at launch, with Opus 4.6 max 53, GPT-5.2 xhigh 51 and K2.5 47 on the 2 March capture. The capture also gives separately scoped GPT-5.3-Codex 54. Z AI's GLM-5 at 50 has a strong claim to fourth across all labs. The verified Grok 4.20 API release was 10 March, and I could not verify a February broad rollout or launch-day score. Zvi's preference for Claude Code applies to a particular workflow. A public preview across Google AI Studio, enterprise surfaces and the paid Gemini app, plus a four-point win, is enough for Google to lead. Fourth and fifth are low-confidence. [Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/) · [AA Gemini archive, 19 February](https://web.archive.org/web/20260219174834/https://artificialanalysis.ai/models/gemini-3-1-pro-preview) · [AA archive, 2 March](https://web.archive.org/web/20260302234417/https://artificialanalysis.ai/leaderboards/models) · [AA GLM-5](https://artificialanalysis.ai/articles/glm-5-everything-you-need-to-know) · [xAI API release notes](https://docs.x.ai/developers/release-notes) · [Zvi](https://thezvi.substack.com/p/claude-opus-46-escalates-things-quickly)

### 2026-03-05 · GPT-5.4 draws level

**Order** · OpenAI 0 · Google +0.15 · Anthropic +0.40 · Moonshot +0.40 · xAI +0.35

**AA v4.0 family** — GPT-5.4 xhigh and Gemini 3.1 Pro Preview 57, and Opus 4.6 max 53 on the available period evidence. OpenAI confirms the date. I could not retrieve a 5 March AA capture. The 2 March capture gives Gemini 57.2, Opus 53.0, and narrowly scoped GPT-5.3-Codex 54.0. AA's April release comparisons corroborate the later tie among the general-purpose models. Zvi called GPT-5.4 a substantial upgrade, especially for well-specified work. Its capability across both the API and Codex gives it the tie-break, with Claude Code still keeping Opus near the lead. [OpenAI](https://openai.com/index/introducing-gpt-5-4/) · [AA 2 March archive](https://web.archive.org/web/20260302234417/https://artificialanalysis.ai/leaderboards/models) · [AA April comparison](https://artificialanalysis.ai/articles/kimi-k2-6-the-new-leading-open-weights-model) · [Zvi](https://thezvi.substack.com/p/gpt-54-is-a-substantial-upgrade)

### 2026-04-08 · Muse Spark brings Meta back

**Order** · OpenAI 0 · Google +0.15 · Anthropic +0.40 · Meta +0.20 · xAI +0.30

**AA v4.0 family** — Muse Spark 52, behind Gemini 3.1 Pro, GPT-5.4 and Opus 4.6 and ahead of Grok 4.20. AA measured especially strong vision and confirmed the lack of public API at launch. Meta's own app makes this worth fourth with a small access penalty. Grok 4.20 had been available on the API since 10 March and takes the last registered slot, with closely matched open models in the wider field. Anthropic announced Mythos Preview through Project Glasswing on 7 April. Partner access leaves the public Anthropic rank unchanged. [AA Muse Spark launch analysis](https://artificialanalysis.ai/articles/muse-spark-everything-you-need-to-know) · [xAI API release notes](https://docs.x.ai/developers/release-notes) · [Anthropic Project Glasswing](https://www.anthropic.com/news/project-glasswing)

### 2026-04-20 · Kimi K2.6 takes fourth

**Order** · OpenAI 0 · Google +0.15 · Anthropic +0.15 · Moonshot +0.45 · Meta +0.30

**AA v4.0 family** — GPT-5.4, Gemini 3.1 Pro and Claude Opus 4.7 57, Kimi K2.6 54, Muse Spark 52 in its launch analysis. AA found stronger tool use and low hallucination for K2.6, and verified Moonshot's and multiple independent providers' API access. The measured lead and the ability to run it justify Moonshot fourth. Meta's measured 52 gives it the last slot over xAI on the evidence available around this snapshot. [Moonshot](https://www.kimi.com/en/blog/kimi-k2-6) · [Anthropic Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7) · [AA K2.6 release analysis](https://artificialanalysis.ai/articles/kimi-k2-6-the-new-leading-open-weights-model)

### 2026-04-23 · GPT-5.5 opens a lead

**Order** · OpenAI 0 · Anthropic +0.55 · Google +0.20 · Moonshot +0.40 · Meta +0.30

**AA v4.0 family** — GPT-5.5 xhigh 60, Opus 4.7 max and Gemini 3.1 Pro Preview 57, Kimi K2.6 54 and Muse Spark 52. Zvi found GPT-5.5 competitive on well-specified coding and agent tasks while preferring Claude for exploratory work. This is a clear lead for OpenAI with Anthropic a narrow second, based on the combination of Opus and its accessible coding workflow. [OpenAI](https://openai.com/index/introducing-gpt-5-5/) · [AA GPT-5.5](https://artificialanalysis.ai/articles/openai-gpt5-5-is-the-new-leading-AI-model/) · [AA K2.6](https://artificialanalysis.ai/articles/kimi-k2-6-the-new-leading-open-weights-model) · [Zvi](https://thezvi.substack.com/p/gpt-55-capabilities-and-reactions)

### 2026-06-09 · Fable 5 puts Anthropic out front

**Order** · Anthropic 0 · OpenAI +1.15 · Google +0.45 · Moonshot +0.35 · xAI +0.20

**AA v4.0 family**, Fable 5 max with fallback 64.9, GPT-5.5 about 60. The latest verified v4.0-family references give Gemini 3.1 Pro 57, Flash 3.5 55, K2.6 54, Grok 4.3 high 53 and Muse Spark 52. Opus 4.8 is AA's second model overall at Fable launch. Every's hands-on Opus 4.8 review found durable coding improvements. The public Fable service puts a clear lead on top of that baseline. AA reported fallback on about 8% of evaluation tasks, which is part of the tested service. [Anthropic](https://www.anthropic.com/news/claude-fable-5-mythos-5) · [AA Fable launch](https://artificialanalysis.ai/articles/claude-fable-5-mythos-intelligence-index) · [AA Gemini 3.5 Flash](https://artificialanalysis.ai/articles/gemini-3-5-flash-everything-you-need-to-know) · [Every](https://every.to/vibe-check/opus-4-8-vibecheck)

### 2026-06-12 · Fable goes offline

**Order** · Anthropic 0 · OpenAI +0.20 · Google +0.45 · Moonshot +0.35 · xAI +0.20

Anthropic reported suspending all customer access on 12 June. **AA v4.0 family** still applied on the day. Fable's 64.9 score was no longer usable for the ranking. The subsequent **v4.1** report on 15 June put Opus 4.8 at 56 against GPT-5.5 at 55, and offline Fable at 60. Every's hands-on Opus 4.8 results support the small residual lead. The 15 June figures are a cross-check on a different version. [Anthropic](https://www.anthropic.com/news/fable-mythos-access) · [AA v4.1](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-1) · [Every](https://every.to/vibe-check/opus-4-8-vibecheck)

### 2026-07-01 · Fable returns under the new index

**Order** · Anthropic 0 · OpenAI +0.95 · Google +0.65 · Meta +0.25 · Moonshot +0.25

Anthropic announced the restoration on 30 June and updated its page on 1 July to confirm redeployment. **AA v4.1** rates Fable 5 max with fallback 60, Opus 4.8 max 56 and GPT-5.5 xhigh 55. The 1 July capture has Gemini 3.5 Flash at 50 and Muse Spark and K2.6 both at 43. AA's July cross-check places Grok 4.3 at 38. The active Fable restores most of the gap. I put Meta narrowly above Kimi for its breadth in vision and its consumer surfaces. In a wider field, Z AI's GLM-5.2 at 51 is a credible rival to Google. [Anthropic](https://www.anthropic.com/news/redeploying-fable-5) · [AA v4.1](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-1) · [AA Grok 4.5 comparison](https://artificialanalysis.ai/articles/grok-4-5-brings-spacexai-to-the-the-intelligence-frontier) · [AA archive, 1 July](https://web.archive.org/web/20260701120956/https://artificialanalysis.ai/leaderboards/models)

### 2026-07-10 · Sol and Grok 4.5 close in

**Order** · Anthropic 0 · OpenAI +0.30 · SpaceX AI +0.70 · Google +0.30 · Meta +0.20

SpaceX AI and AA date Grok 4.5 to 8 July and OpenAI dates the ChatGPT rollout of GPT-5.6 Sol to 9 July. Meta's Muse Spark 1.1 followed on 10 July, the date of the combined grid. **AA v4.1** — Fable 5 60, GPT-5.6 Sol 59, Grok 4.5 54, Muse Spark 1.1 51 in AA's 17 July cross-check. AA put Grok 4.5 with Grok Build at 76 on its separate coding-agent index, level with GPT-5.5 in Codex and well ahead on cost. This is enough for third. AA's report had no Gemini at 51 or above. Google still edges Meta for fourth on its broadly usable multimodal and API lineup, a subjective call. Meta's release restores its edge over K2.6 and puts it fifth. [SpaceX AI](https://x.ai/news/grok-4-5) · [OpenAI model release notes](https://help.openai.com/en/articles/9624314-model-release-notes) · [AA July cross-check](https://artificialanalysis.ai/articles/four-frontier-launches-in-eight-days-six-labs-now-field-a-model-above-50-on-the-artificial-analysis-intelligence-index) · [AA Grok coding comparison](https://artificialanalysis.ai/articles/grok-4-5-brings-spacexai-to-the-the-intelligence-frontier) · [AA Muse Spark 1.1](https://artificialanalysis.ai/articles/muse-spark-1-1-everything-you-need-to-know)

### 2026-07-16 · Kimi K3 returns Moonshot to fourth

**Order** · Anthropic 0 · OpenAI +0.30 · SpaceX AI +0.65 · Moonshot +0.20 · Google +0.30

**AA v4.1** — Fable 5 60, GPT-5.6 Sol 59, Kimi K3 57, Grok 4.5 54, Muse Spark 1.1 and GLM-5.2 51, with Google's best under 51 in AA's cross-check. AA confirmed excellent AA-Briefcase and workflow automation results plus a public Kimi API. The weights were still pending at launch. I award SpaceX AI third narrowly for Grok Build's strong measured coding and its efficient broad API. I found no matched launch-day coding-agent result for K3, so this is a judgment under incomplete evidence. K3 is a real fourth-place contender. It has enough measured lead and accessible capability to displace Meta. [Moonshot](https://www.kimi.com/en/blog/kimi-k3) · [AA K3 launch analysis](https://artificialanalysis.ai/articles/kimi-k3-achieves-3-in-the-artificial-analysis-intelligence-index-comparable-to-opus-4-8-and-gpt-5-5) · [AA July cross-check](https://artificialanalysis.ai/articles/four-frontier-launches-in-eight-days-six-labs-now-field-a-model-above-50-on-the-artificial-analysis-intelligence-index) · [AA Grok Build test](https://artificialanalysis.ai/articles/grok-4-5-brings-spacexai-to-the-the-intelligence-frontier)

### 2026-09-02 · Meta moves onto the podium

**Order** · Anthropic 0 · OpenAI +0.80 · Meta +0.20 · SpaceX AI +0.15 · Moonshot +0.20

**AA v4.1.1** — Fable 5.1 max 66, Opus 5 max 63, Muse Spark 1.3 xhigh, GPT-5.6 Sol max and Grok 4.6 high all 61, and Kimi K3 max 60 on the 1 September archive. Muse Spark max 62 was a partner preview. SpaceX AI had shipped Grok 4.6 on 12 August and Anthropic shipped Fable 5.1 on 1 September. AA found that the available Muse version had the lowest cost per task among this peer group. That earns a close third for Meta, with Codex experience keeping OpenAI second. The new September Gemini's exact launch-day score is unverified here. The 1 September archive also gives GLM-5.3 at 60. I give K3 the tie for its broader input and verified knowledge-work strengths. [Claude release notes](https://platform.claude.com/docs/en/release-notes/overview) · [SpaceX AI](https://x.ai/news/grok-4-6) · [AA Muse Spark 1.3](https://artificialanalysis.ai/ja/articles/muse-spark-1-3) · [AA archive, 1 September](https://web.archive.org/web/20260901032805/https://artificialanalysis.ai/leaderboards/models)

### 2026-09-07 · Astra and the new index close the gap

**Order** · Anthropic 0 · OpenAI +0.15 · Meta +0.55 · SpaceX AI +0.35 · Moonshot +0.30

OpenAI dates GPT-6 Astra to 3 September. Its reported 61 on launch-day **v4.1.1** is unverified from AA's own launch-day ranking. AA announced **v4.2** on 4 September and **v4.3** on 7 September, adding long-horizon knowledge work and harder, more varied agent tests. On v4.3 Fable 5.1 max with fallback and Astra max tie at 53. Opus 5 max is 51, Fable 5 is 50 and partner-preview Muse Spark 1.3 max is 48. AA's 9 September review also finds Astra level on coding and cheaper at matched scores. I preserve a narrow Anthropic edge for its alternate models and mature Claude Code workflow. Astra's price makes first defensible, and the back pair is approximate on this reset date. [OpenAI safety overview](https://openai.com/index/safety-overview-gpt-6-astra/) · [AA v4.2](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-2) · [AA v4.3](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-3) · [AA Astra tests, 9 September](https://artificialanalysis.ai/articles/benchmarking-gpt-6-astra)

### 2026-09-22 · Opus 5.5 pulls away

**Order** · Anthropic 0 · OpenAI +0.90 · SpaceX AI +0.65 · Meta +0.15 · Moonshot +0.35

**AA v4.3 family** — Opus 5.5 max 58, Astra max and Fable 5.1 max 53, the nearby 2 October board gives Grok 4.7 xhigh 46, Muse Spark 1.3 xhigh 45, its max preview 48, and Kimi K3 max 44. GLM-5.3 also scores 45. AA found Opus leading six of ten tests, and Grok Build made a large gain on the separate coding-agent index. Anthropic widens its lead. I put SpaceX AI a nose ahead of Meta here on the accessible variant and the coding gain. Z AI has a legitimate claim to the last slot in an unrestricted grid. The Google runner at the time was still its pre-Argon Flash lineup. [Anthropic](https://www.anthropic.com/claude-opus-5-5) · [AA Opus 5.5](https://artificialanalysis.ai/articles/claude-opus-5-5) · [AA Grok 4.7](https://artificialanalysis.ai/articles/benchmarking-grok-4-7) · [AA archive, 2 October](https://web.archive.org/web/20261002174155/https://artificialanalysis.ai/leaderboards/models)

### 2026-10-13 · Public Argon brings Google back

**Order** · Anthropic 0 · OpenAI +0.85 · Google +0.20 · Meta +0.20 · SpaceX AI +0.55

AA measured Argon on 30 September and explicitly said it was restricted to selected users. Google announced broader availability on 13 October. **AA v4.3 family** — Opus 5.5 58, Astra and Argon 53, Muse Wonder Full 56 in Muse Code, regular API-accessible Muse Wonder 52, and Grok 4.7 46. AA also measured Wonder Full with Muse Code at 68 on the separate Coding Agents Index. Meta released the Wonder pair on 12 October. Every found Argon genuinely competitive but had reservations about the harness. I award Google third for broad access to its flagship across the API and app. Meta gets near parity because a serious user can still access Full through Muse Code. [Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/) · [AA Argon preview](https://artificialanalysis.ai/articles/gemini-4-argon-google-top-three-labs) · [AA Muse Wonder](https://artificialanalysis.ai/articles/muse-wonder) · [Every](https://every.to/vibe-check/vc-gemini-4-argon-puts-google-back-on-the-frontier)

### 2026-10-23 · Kimi K3.1 Pro takes third

**Order** · Anthropic 0 · OpenAI +0.75 · Moonshot +0.20 · Google +0.15 · Meta +0.20

**AA v4.3 family** — Opus 5.5 58, Muse Wonder Full 56, Kimi K3.1 Pro 55, GPT-6 Astra and Gemini 4 Argon 53 in the release comparison. K3.1 Pro reached 67% on Terminal-Bench 4.0 in AA's testing, against 13% for K3. Nathan Lambert and the Interconnects panel discussed the mixed reaction despite strong benchmarks and questioned uptake. Public API access and the cross-test coding improvement give Moonshot third, with extra weight on OpenAI's tooling and Meta's broad-API access caveat. Fourth overall is AA's rank among model rows, including more than one Anthropic variant. [Moonshot](https://www.kimi.ai/blog/kimi-k3-1-pro) · [AA K3.1 Pro](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks) · [Interconnects](https://www.interconnects.ai/p/podcast-kimi-k31-pro-the-new-cyber)

### 2026-10-27 · AA v5 changes the pack

**Order** · Anthropic 0 · OpenAI +0.25 · Google +0.85 · Meta +0.25 · Moonshot +0.35

**AA v5.0** at launch: Opus 5.5 58, Astra 57, Argon 50 and Kimi K3.1 Pro 46. The 1 November capture gives Muse Wonder Full 50 and regular Muse Wonder 43. AA added new private and held-out tests, including testing for agentic software maintenance and scientific work. These are rank changes on a new index scale. On 28 October the partner-only Carbon preview could score above the field. The 1 November archived AA board shows Carbon 59 under v5.0, versus 60 on the later v5.0.1 board. Google confirmed the initial restriction, so Argon still determines its public position. [AA v5 launch](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5) · [AA archive, 1 November](https://web.archive.org/web/20261101010321/https://artificialanalysis.ai/leaderboards/models) · [Google Carbon rollout](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/)

### 2026-11-09 · Fable 5.2 opens the lead again

**Order** · Anthropic 0 · OpenAI +1.25 · Google +0.80 · Meta +0.25 · Moonshot +0.35

Anthropic confirms public Fable 5.2 and separately gated Mythos 5.2. **AA v5 family** — public Fable 5.2 max with fallback 65 on the checked v5.0.1 board. Exact launch-day score and patch boundary are unverified. The nearby v5.0 archive gives GPT-6 Astra 57, Argon 50 and Muse Wonder Full 50. Every found Fable unusually capable on long unattended jobs, and Mollick documented complex cross-domain work during his prerelease access. Zvi sees its largest advantage on unusually hard problems. Carbon's broad launch is the next day, so this one-day public gap is real. [Anthropic](https://www.anthropic.com/claude-fable-and-mythos-5-2) · [AA current board](https://artificialanalysis.ai/leaderboards/models) · [Every](https://every.to/vibe-check/fable-5-2) · [Mollick](https://www.oneusefulthing.org/p/fable-52-and-jagged-agi) · [Zvi](https://thezvi.substack.com/p/fable-52-is-the-new-bazooka)

### 2026-11-10 · Carbon's public launch moves Google to second

**Order** · Anthropic 0 · Google +0.95 · OpenAI +0.35 · Meta +1.05 · Moonshot +0.35

**AA v5 family** — Carbon high is 59 on the 1 November archive and 60 on the later v5.0.1 board, with GPT-6 Astra max at 57 on both dated evidence and subsequent comparison. The exact 10 November patch and score are unverified. Google confirms Carbon's public date. Every found it a strong coder with weaker judgment about when to stop. I give the composite and the release channel enough weight for Google to take second until GPT-6.2. [Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/) · [AA archive, 1 November](https://web.archive.org/web/20261101010321/https://artificialanalysis.ai/leaderboards/models) · [AA Astra 6.2 comparison](https://artificialanalysis.ai/articles/openai-has-the-2-model-in-the-intelligence-index-with-the-release-of-gpt-6-2-astra-and-gpt-6-2-sol) · [Every](https://every.to/vibe-check/vibe-check-gemini-4-carbon-doesn-t-know-when-to-stop)

### 2026-11-18 · Astra and Neon close the replay

**Order** · Anthropic 0 · OpenAI +0.80 · Google +0.20 · Meta +1.55 · Moonshot +0.30

OpenAI released GPT-6.2 Astra and Sol on 17 November and Google released Gemini 4 Neon on 18 November. **AA v5.0.1**, checked 21 November: Fable 5.2 max with fallback 65, Astra 6.2 max 62, Neon xhigh 61, Muse Wonder Full max 50 in Muse Code and regular Wonder max 44 on the API, and publicly callable Kimi K3.1 Pro 46. Grok 4.7 xhigh scores 35 and Qwen4 Max 43. Every found Astra/Sol efficient on bounded work and liked Neon for work it could steer. AA puts Neon roughly level with the top Claude configurations on the separate Coding Agent Index. I keep Astra ahead by one point plus lineup breadth. Meta narrowly leads Kimi on the reachable Muse Code ceiling and its strong October agent result, while API-only users have a good case for the opposite order. Kimi's 11-point lead on Grok earns fifth. The 18 November grid is my 21 November closing call. [OpenAI](https://openai.com/index/introducing-gpt-6-2-astra-sol/) · [Google](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/) · [AA leaderboard](https://artificialanalysis.ai/leaderboards/models) · [AA Neon analysis](https://artificialanalysis.ai/articles/gemini-4-neon-intelligence-gain) · [Every on Astra and Sol](https://every.to/vibe-check/vibe-check-gpt-6-2-astra-and-sol-leave-us-wanting-more) · [Every on Neon](https://every.to/vibe-check/mini-vibe-check-four-new-geminis-when-should-you-pick-neon)

## Where I disagree with the current data

1. **R1 is second on arrival and DeepSeek survives GPT-5.** I put R1 directly behind OpenAI in January. I carry DeepSeek through September 2025, when Meta's last released flagship was considerably further back on the index. Kimi K2 Thinking is what takes the slot in November. [AA archive, 1 February](https://web.archive.org/web/20250201063124/https://artificialanalysis.ai/leaderboards/models) · [AA archive, 1 September](https://web.archive.org/web/20250901150210/https://artificialanalysis.ai/leaderboards/models)
2. **Grok 4 gets its July 2025 lead.** The 73.2 result belongs to the standard Grok 4 that people could buy or call. Its rivals had stronger coding workflows, which makes this a narrow lead. The next index version compresses it, and GPT-5 takes first. [AA archive, 11 July](https://web.archive.org/web/20250711191631/https://artificialanalysis.ai/leaderboards/models) · [AA archive, 7 August](https://web.archive.org/web/20250807171948/https://artificialanalysis.ai/leaderboards/models)
3. **Google leads in February 2026 and OpenAI edges it in March.** Gemini 3.1 Pro's index lead is wide enough to move Google ahead of Claude. GPT-5.4 reaches Gemini territory while adding a strong general-and-Codex lineup, which gives OpenAI the next narrow lead. [AA Gemini launch archive](https://web.archive.org/web/20260219174834/https://artificialanalysis.ai/models/gemini-3-1-pro-preview) · [OpenAI GPT-5.4](https://openai.com/index/introducing-gpt-5-4/) · [AA April comparison](https://artificialanalysis.ai/articles/kimi-k2-6-the-new-leading-open-weights-model)
4. **Moonshot has a longer run and finishes fifth.** I put K2 Thinking and K2.6 on track well before K3. K3 enters fourth in July despite ranking third on AA, since Grok 4.5 had measured results in a usable coding agent. K3.1 Pro returns Moonshot to the podium briefly in October and beats Grok 4.7 by 11 points under v5.0.1, taking the closing slot. [AA July comparison](https://artificialanalysis.ai/articles/four-frontier-launches-in-eight-days-six-labs-now-field-a-model-above-50-on-the-artificial-analysis-intelligence-index) · [AA K3.1 Pro](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks) · [AA current leaderboard](https://artificialanalysis.ai/leaderboards/models)
5. **The index changes and the public launches get their own dates.** I put Astra's convergence on the 7 September v4.3 update, date Argon's move to 13 October, and move Google to second when Carbon becomes public on 10 November. AA's 27 October v5 update gets its own event. The partner-only Carbon preview and partner-only Mythos Preview are treated alike. [AA v4.3](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-3) · [Google Argon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/) · [AA v5](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5) · [Google Carbon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/)

## Appendix · SNAPSHOTS

Paste the contents of this block into the page's SNAPSHOTS template literal.

```text
2024-11-20  OpenAI starts on pole
  > o1-preview leads on reasoning. Claude and Gemini are close behind each other.
  openai               o1-preview leads on reasoning.
  anthropic  +0.70     Claude 3.5 Sonnet and computer use.
  google     +0.20     Gemini 1.5 Pro, with experimental updates.
  meta       +0.95     Llama 3.1 405B leads its open class.
  spacexai   +0.40     Grok 2 in beta.

2025-01-20  DeepSeek R1 challenges o1  @deepseek
  > R1 brings near-o1 reasoning to a public API and downloadable weights.
  openai               o1 and o1 pro lead the lineup.
  deepseek   +0.30     NEW: R1 makes reasoning widely accessible.
  anthropic  +0.75     Claude 3.5 Sonnet remains strong on code.
  google     +0.20     Gemini 2.0 Flash is fast.
  meta       +0.90     Llama holds the fifth slot.

2025-02-17  Grok 3 enters the front pack  @spacexai
  > Grok 3's paid beta gives xAI a contender and takes Llama out of the top five.
  openai               o3-mini strengthens the reasoning lineup.
  deepseek   +0.35     R1 holds second.
  spacexai   +0.25     Grok 3 reasoning starts in paid beta.
  anthropic  +0.30     Hybrid reasoning is a week away.
  google     +0.25     Gemini 2.0 Pro is experimental.

2025-02-24  Claude 3.7 brings Claude Code  @anthropic
  > Anthropic moves up with a reasoning model and its first terminal coding agent.
  openai               o3-mini leads the verified index.
  deepseek   +0.35     R1 holds the reasoning edge.
  anthropic  +0.20     Claude 3.7 and the Claude Code preview.
  spacexai   +0.20     Grok 3 beta remains close.
  google     +0.35     Gemini 2.0 Pro Experimental.

2025-03-25  Gemini 2.5 takes the lead  @google
  > Gemini 2.5 Pro Experimental reaches users and moves Google from fifth to first.
  google               Gemini 2.5 Pro Experimental.
  openai     +0.40     o3-mini high keeps it close.
  deepseek   +0.55     R1 is still strong on reasoning.
  anthropic  +0.25     Claude 3.7 gains ground on code.
  spacexai   +0.40     Grok 3 is still competitive.

2025-04-16  o3 edges Gemini  @openai
  > Full o3 ships with tools and retakes the lead by a small margin.
  openai               o3 and o4-mini ship with tools.
  google     +0.20     Gemini 2.5 Pro is still close.
  deepseek   +0.75     R1 stays in the top three.
  anthropic  +0.20     Claude Code keeps Anthropic close.
  spacexai   +0.25     Grok 3 family holds fifth.

2025-05-28  Claude 4 and R1 narrow the field  @deepseek
  > Claude Code opens to everyone and DeepSeek's R1 refresh nearly matches Gemini.
  openai               o3 keeps a narrow lead.
  google     +0.20     Gemini 2.5 Pro remains in reach.
  deepseek   +0.20     R1 0528 gains strongly on reasoning.
  anthropic  +0.30     Claude Opus 4 and Claude Code GA.
  spacexai   +0.20     Grok 3 mini high is quick on reasoning.

2025-07-09  Grok 4 takes pole  @spacexai
  > Grok 4 is available through a paid plan and the API. xAI takes a narrow lead.
  spacexai             Grok 4 tops the Intelligence Index.
  openai     +0.25     o3-pro is close enough to challenge.
  google     +0.20     Gemini 2.5 Pro trails by a fraction.
  deepseek   +0.35     R1 0528 keeps fourth.
  anthropic  +0.30     Claude Code keeps Opus in contention.

2025-08-07  GPT-5 retakes the lead  @openai
  > GPT-5 puts OpenAI back ahead. Grok 4 stays close after the index changes.
  openai               GPT-5 leads at high reasoning effort.
  spacexai   +0.30     Grok 4 stays close on the revised index.
  google     +0.40     Gemini 2.5 Pro holds third.
  anthropic  +0.20     Opus 4.1 improves Claude's coding.
  deepseek   +0.40     R1 0528 remains in the five.

2025-09-29  Sonnet 4.5 closes on Grok  @anthropic
  > Sonnet 4.5 gives Claude Code a sharper model and moves Anthropic ahead of Google.
  openai               GPT-5 leads the v3 index.
  spacexai   +0.45     Grok 4 holds second.
  anthropic  +0.20     Sonnet 4.5 moves ahead of Google.
  google     +0.30     Gemini 2.5 Pro remains competitive.
  deepseek   +0.50     DeepSeek still has useful open models.

2025-11-06  Kimi K2 Thinking enters  @moonshot
  > Moonshot's open-weight reasoning model makes the top five months before K3.
  openai               GPT-5 remains the incumbent.
  moonshot   +0.35     NEW: Kimi K2 Thinking reaches the front pack.
  spacexai   +0.20     Grok 4 is still strong at raw reasoning.
  anthropic  +0.25     Sonnet 4.5 keeps Claude Code strong.
  google     +0.25     Gemini 2.5 Pro takes fifth.

2025-11-18  Gemini 3 puts Google back on pole  @google
  > Gemini 3 Pro Preview leads five of ten AA tests at launch.
  google               Gemini 3 Pro Preview takes the lead.
  openai     +0.55     GPT-5.1 high is the closest challenger.
  moonshot   +0.40     Kimi K2 Thinking remains competitive.
  spacexai   +0.20     Grok 4 and 4.1 sustain xAI.
  anthropic  +0.15     Sonnet 4.5 keeps the coding lane.

2025-11-24  Opus 4.5 breaks the tie for second  @anthropic
  > Opus 4.5 ties GPT-5.1 on the index and moves ahead on practical coding.
  google               Gemini 3 Pro holds first overall.
  anthropic  +0.40     Opus 4.5 and Claude Code move to second.
  openai     +0.15     GPT-5.1 matches Opus on the composite.
  moonshot   +0.40     K2 Thinking stays in touch.
  spacexai   +0.25     Grok 4 holds fifth.

2025-12-11  GPT-5.2 moves OpenAI back in front  @openai
  > GPT-5.2 brings stronger professional reasoning and restores a narrow OpenAI lead.
  openai               GPT-5.2 xhigh joins the lineup.
  google     +0.20     Gemini 3 Pro remains close.
  anthropic  +0.25     Opus 4.5 is the coding alternative.
  moonshot   +0.45     K2 Thinking stays in the five.
  spacexai   +0.25     Grok 4 remains competitive.

2026-01-27  The index resets and Kimi upgrades  @moonshot
  > AA v4 compresses the leaders. Kimi K2.5 strengthens Moonshot's place in the five.
  openai               GPT-5.2 leads a close front three.
  anthropic  +0.20     Opus 4.5 stays close on knowledge work.
  google     +0.15     Gemini 3 Pro stays in the lead pack.
  moonshot   +0.45     K2.5 adds multimodal reasoning.
  spacexai   +0.30     Grok 4 remains the fifth car.

2026-02-05  Opus 4.6 takes the lead  @anthropic
  > Opus 4.6 takes the composite lead. GPT-5.3-Codex keeps OpenAI close in the terminal.
  anthropic            Opus 4.6 leads and ships in Claude Code.
  openai     +0.35     GPT-5.2 and GPT-5.3-Codex.
  google     +0.20     Gemini 3 Pro holds third.
  moonshot   +0.55     Kimi K2.5 offers strong value.
  spacexai   +0.25     Grok trails the front pack.

2026-02-19  Gemini 3.1 Pro takes pole  @google
  > Gemini 3.1 Pro opens a four-point composite lead. Claude Code keeps the gap small.
  google               Gemini 3.1 Pro Preview takes first.
  anthropic  +0.65     Opus 4.6 remains a coding favorite.
  openai     +0.30     GPT-5.2 and Codex hold third.
  moonshot   +0.40     K2.5 holds fourth on multimodal value.
  spacexai   +0.35     Grok 4 holds the final slot.

2026-03-05  GPT-5.4 draws level  @openai
  > GPT-5.4 matches Gemini on AA. API and Codex breadth give OpenAI a narrow edge.
  openai               GPT-5.4 reaches the top tier.
  google     +0.15     Gemini 3.1 Pro is tied on AA.
  anthropic  +0.40     Opus 4.6 and Claude Code take third.
  moonshot   +0.40     K2.5 holds fourth on multimodal value.
  spacexai   +0.35     Grok 4 holds the final slot.

2026-04-08  Muse Spark brings Meta back  @meta
  > Muse Spark gives Meta a usable frontier model in its own app and a place in the five.
  openai               GPT-5.4 remains a narrow leader.
  google     +0.15     Gemini 3.1 Pro matches it on AA.
  anthropic  +0.40     Opus 4.6 is the accessible flagship.
  meta       +0.20     NEW: Muse Spark returns Meta to the five.
  spacexai   +0.30     Grok 4.20 holds fifth by a small margin.

2026-04-20  Kimi K2.6 takes fourth  @moonshot
  > Kimi K2.6 is fourth on AA and ships with both API access and downloadable weights.
  openai               GPT-5.4 keeps the tie-break.
  google     +0.15     Gemini 3.1 Pro is level on AA.
  anthropic  +0.15     Opus 4.7 closes the front pack.
  moonshot   +0.45     K2.6 takes fourth with open weights.
  meta       +0.30     Muse Spark holds fifth.

2026-04-23  GPT-5.5 opens a lead  @openai
  > GPT-5.5 goes three points clear as the strongest public model.
  openai               GPT-5.5 takes the lead outright.
  anthropic  +0.55     Opus 4.7 and Claude Code take second.
  google     +0.20     Gemini 3.1 Pro is still level with Opus.
  moonshot   +0.40     Kimi K2.6 keeps fourth.
  meta       +0.30     Muse Spark holds the last slot.

2026-06-09  Fable 5 puts Anthropic out front  @anthropic
  > Public Fable 5 goes nearly five points clear of the next lab's best model.
  anthropic            Fable 5 opens a clear lead.
  openai     +1.15     GPT-5.5 is the closest challenger.
  google     +0.45     Gemini 3.1 Pro and 3.5 Flash.
  moonshot   +0.35     Kimi K2.6 remains useful and accessible.
  spacexai   +0.20     Grok 4.3 takes fifth on the period index.

2026-06-12  Fable goes offline  @anthropic
  > Anthropic disables Fable access. Opus 4.8 leaves the front two much closer.
  anthropic            Opus 4.8 is the best accessible Claude.
  openai     +0.20     GPT-5.5 is back in reach.
  google     +0.45     Gemini's gap to the leader shrinks.
  moonshot   +0.35     Kimi K2.6 holds fourth.
  spacexai   +0.20     Grok 4.3 holds fifth.

2026-07-01  Fable returns under the new index  @anthropic
  > Fable is back in Claude and the API. AA's June reset also rearranges the back pair.
  anthropic            Fable 5 returns with public access.
  openai     +0.95     GPT-5.5 trails the restored Fable.
  google     +0.65     Gemini 3.1 Pro and Flash hold third.
  meta       +0.25     Muse Spark regains fourth after the reset.
  moonshot   +0.25     K2.6 keeps fifth.

2026-07-10  Sol and Grok 4.5 close in  @openai
  > GPT-5.6 Sol closes to one index point. Grok 4.5 puts SpaceX AI back on the podium.
  anthropic            Fable 5 holds a narrow lead.
  openai     +0.30     GPT-5.6 Sol reaches 59.
  spacexai   +0.70     Grok 4.5 and Grok Build move to third.
  google     +0.30     Gemini's lineup keeps it ahead of Meta.
  meta       +0.20     Muse Spark 1.1 renews the lineup.

2026-07-16  Kimi K3 returns Moonshot to fourth  @moonshot
  > K3 scores third on AA. Grok Build keeps SpaceX AI ahead in the lineup ranking.
  anthropic            Fable 5 leads the composite.
  openai     +0.30     GPT-5.6 Sol remains a close second.
  spacexai   +0.65     Grok 4.5's coding workflow breaks the tie.
  moonshot   +0.20     Kimi K3 is third on AA and fourth here.
  google     +0.30     Gemini's public lineup keeps fifth.

2026-09-02  Meta moves onto the podium  @meta
  > Muse Spark 1.3 ties Sol and Grok at public effort. Meta edges into third.
  anthropic            Fable 5.1 opens the lead.
  openai     +0.80     GPT-5.6 Sol retains second on Codex.
  meta       +0.20     Muse Spark 1.3 xhigh takes third.
  spacexai   +0.15     Grok 4.6 remains close.
  moonshot   +0.20     Kimi K3 holds off Gemini.

2026-09-07  Astra and the new index close the gap  @openai
  > AA reweights the index twice after Astra ships. Astra and Fable 5.1 tie at 53.
  anthropic            Fable 5.1 holds a narrow lead on breadth.
  openai     +0.15     GPT-6 Astra ties Fable 5.1 on v4.3.
  meta       +0.55     Muse Spark 1.3 stays third.
  spacexai   +0.35     Grok 4.6 holds fourth.
  moonshot   +0.30     Kimi K3 stays in the five.

2026-09-22  Opus 5.5 pulls away  @anthropic
  > Opus 5.5 opens a five-point lead. Grok 4.7 moves SpaceX AI back to third.
  anthropic            Opus 5.5 takes the benchmark lead.
  openai     +0.90     GPT-6 Astra holds second.
  spacexai   +0.65     Grok 4.7 retakes third.
  meta       +0.15     Muse Spark 1.3 xhigh stays close.
  moonshot   +0.35     Kimi K3 retains fifth.

2026-10-13  Public Argon brings Google back  @google
  > Argon becomes public. Muse Wonder Full keeps Meta close behind in its coding tool.
  anthropic            Opus 5.5 holds a clear lead.
  openai     +0.85     Astra ties Argon on AA.
  google     +0.20     Argon moves Google back to third.
  meta       +0.20     Muse Wonder Full runs in Muse Code.
  spacexai   +0.55     Grok 4.7 takes the last slot.

2026-10-23  Kimi K3.1 Pro takes third  @moonshot
  > K3.1 Pro beats Astra and Argon on the composite and ships through Moonshot's API.
  anthropic            Opus 5.5 retains the lead.
  openai     +0.75     Codex and Astra hold second.
  moonshot   +0.20     K3.1 Pro moves into third.
  google     +0.15     Argon stays close behind Kimi.
  meta       +0.20     Muse Wonder Full holds fifth.

2026-10-27  AA v5 changes the pack
  > A new test mix moves Astra closer and drops Kimi behind Google and Meta.
  anthropic            Opus 5.5 stays ahead on the new index.
  openai     +0.25     Astra sits within one index point.
  google     +0.85     Argon matches Wonder Full with broad access.
  meta       +0.25     Muse Wonder Full holds fourth.
  moonshot   +0.35     K3.1 Pro takes fifth on the new test mix.

2026-11-09  Fable 5.2 opens the lead again  @anthropic
  > Fable 5.2 reaches general users and opens a clear lead on hard tasks.
  anthropic            Fable 5.2 takes the clear lead.
  openai     +1.25     Astra is the best public challenger.
  google     +0.80     Argon still anchors Google's public lineup.
  meta       +0.25     Wonder Full is accessible in Muse Code.
  moonshot   +0.35     K3.1 Pro holds fifth.

2026-11-10  Carbon's public launch moves Google to second  @google
  > Carbon opens to developers and subscribers. Google moves ahead of the original Astra.
  anthropic            Fable 5.2 stays in front.
  google     +0.95     Public Gemini 4 Carbon takes second.
  openai     +0.35     GPT-6 Astra remains in touch.
  meta       +1.05     Muse Wonder Full holds fourth.
  moonshot   +0.35     Kimi K3.1 Pro remains fifth.

2026-11-18  Astra and Neon close the replay  @google
  > Astra 6.2 takes second and Neon stays close. Fable 5.2 still leads.
  anthropic            Fable 5.2 and Opus 5.5 lead the lineup.
  openai     +0.80     GPT-6.2 Astra is second at 62.
  google     +0.20     Gemini 4 Neon is close behind at 61.
  meta       +1.55     Muse Wonder Full earns fourth via Muse Code.
  moonshot   +0.30     Kimi K3.1 Pro wins the last spot.
```
