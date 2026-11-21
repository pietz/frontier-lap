# Fastest Lab: standings history, November 2024 to November 2026

Fourteen snapshots of who had the best model lineup, on the page's gap scale. The data lives in `snapshots.js` in this folder; this file explains each call and lists the sources.

**How to read the gaps.** `gap` is seconds to the car directly ahead; the number in brackets is the total gap to the leader. The scale is anchored on the owner's fixed November 2026 take (Anthropic 0, OpenAI +1.00, Google +0.25, Meta +1.70, SpaceX AI +0.30): about 0.25s is wheel to wheel, 1.0s is a clear lead, 1.7s is a big break.

**How the calls were made.** Artificial Analysis (AA) Intelligence Index standing at the time is the backbone. On top of that I weighed coding and agentic results, LMArena, lineup breadth (sizes, image, video, agents), whether the best model was actually available to people, and community mood. Where those disagree with AA, the rationale says so.

**A caveat on AA numbers.** AA rebased its index repeatedly (v2 in 2025, v4.0 in January 2026, v4.1 in June, v4.2 and v4.3 in September, v5 in late October 2026). Scores are only comparable within one version, so every score below is quoted as of its own date. What carries across versions is the rank order and the size of the gap in points.

## Summary

| Date | P1 | P2 | P3 | P4 | P5 |
|---|---|---|---|---|---|
| 2024-11-20 | OpenAI | Anthropic +0.40 | Google +0.45 | Meta +1.30 | xAI +0.35 |
| 2025-02-28 | OpenAI | Anthropic +0.35 | Google +0.30 | xAI +0.15 | Meta +1.70 |
| 2025-04-10 | Google | OpenAI +0.20 | Anthropic +0.30 | xAI +0.45 | Meta +1.90 |
| 2025-06-10 | OpenAI | Google +0.15 | Anthropic +0.15 | xAI +0.90 | Meta +1.90 |
| 2025-08-10 | OpenAI | Anthropic +0.30 | Google +0.10 | xAI +0.25 | Meta +2.60 |
| 2025-10-01 | OpenAI | Anthropic +0.20 | Google +0.25 | xAI +0.50 | Meta +2.60 |
| 2025-12-03 | Google | Anthropic +0.20 | OpenAI +0.20 | xAI +0.90 | Meta +2.40 |
| 2026-02-20 | Anthropic | Google +0.15 | OpenAI +0.15 | xAI +1.40 | Meta +2.10 |
| 2026-04-24 | OpenAI | Anthropic +0.25 | Google +0.30 | Meta +1.20 | xAI +0.15 |
| 2026-06-10 | Anthropic | OpenAI +1.30 | Google +0.45 | Meta +0.60 | xAI +0.15 |
| 2026-07-25 | Anthropic | OpenAI +0.45 | SpaceX AI +1.00 | Google +0.10 | Meta +0.25 |
| 2026-09-10 | Anthropic | OpenAI +0.30 | Meta +1.10 | SpaceX AI +0.20 | Google +0.25 |
| 2026-10-15 | Anthropic | OpenAI +0.85 | Google +0.45 | Meta +0.55 | SpaceX AI +0.60 |
| 2026-11-20 | Anthropic | OpenAI +1.00 | Google +0.25 | Meta +1.70 | SpaceX AI +0.30 |

The last row is the owner's take, unchanged.

---

## 1. 2024-11-20 · "OpenAI's race to lose"

| Pos | Lab | Gap (total) | Key models |
|---|---|---|---|
| P1 | OpenAI | 0 | o1-preview and o1-mini, GPT-4o |
| P2 | Anthropic | +0.40 (0.40) | Claude 3.5 Sonnet (new), Claude 3.5 Haiku, computer use beta |
| P3 | Google | +0.45 (0.85) | Gemini 1.5 Pro and Flash, gemini-exp-1114 and 1121 |
| P4 | Meta | +1.30 (2.15) | Llama 3.2, Llama 3.1 405B |
| P5 | xAI | +0.35 (2.50) | Grok 2 |

**Rationale.** OpenAI had the only reasoning models in wide use and the broadest lineup. Anthropic's upgraded 3.5 Sonnet (49.0% on SWE-bench Verified) was the model developers reached for, which keeps it close. Google's experimental Geminis were trading the LMArena top spot with GPT-4o but none of it was a shipped flagship yet. Meta led open weights; Grok 2 was a tier below the front three.

**Sources.**
- Claude 3.5 Sonnet (new), 22 Oct 2024, 33.4% to 49.0% on SWE-bench Verified: https://www.anthropic.com/news/3-5-models-and-computer-use
- o1-preview released 12 Sep 2024: https://en.wikipedia.org/wiki/OpenAI_o1
- gemini-exp-1121 tied #1 on LMArena with GPT-4o-1120: https://simonwillison.net/2024/Nov/22/gemini-exp-1121 and https://analyticsindiamag.com/ai-news-updates/gemini-exp-1121-propels-google-to-the-top-of-llm-rankings-alongside-openais-gpt-4o
- Llama 3.1 (23 Jul 2024) and 3.2 (25 Sep 2024): https://en.wikipedia.org/wiki/Llama_(language_model)
- Grok 2 released 20 Aug 2024: https://en.wikipedia.org/wiki/Grok_(chatbot)

## 2. 2025-02-28 · "Grok 3 gatecrashes the front"

| Pos | Lab | Gap (total) | Key models |
|---|---|---|---|
| P1 | OpenAI | 0 | o1 and o1 pro, o3-mini, GPT-4.5, o3 announced |
| P2 | Anthropic | +0.35 (0.35) | Claude 3.7 Sonnet, Claude Code (research preview) |
| P3 | Google | +0.30 (0.65) | Gemini 2.0 Flash, 2.0 Pro, Veo 2 |
| P4 | xAI | +0.15 (0.80) | Grok 3 |
| P5 | Meta | +1.70 (2.50) | Llama 3.3 |

**Rationale.** OpenAI shipped full o1 and o1 pro (5 Dec), previewed o3 (20 Dec) and released o3-mini (31 Jan) and GPT-4.5 (27 Feb), the last seen as incremental and very expensive. Claude 3.7 Sonnet plus Claude Code (24 Feb) kept Anthropic the coding reference. Grok 3 (17 Feb) was the first model over 1400 on LMArena, which moves xAI from the back to Google's gearbox in one step.

**Outside the five.** DeepSeek R1 (20 Jan 2025) would have been top-5 here, ahead of Meta: AA rated it above Google, Meta and Anthropic models on overall quality at the time, the app passed ChatGPT on the US App Store by 27 Jan, and Nvidia fell about 17 to 18% in a day.

**Sources.**
- o1, o1 pro, o3, o3-mini dates: https://en.wikipedia.org/wiki/OpenAI_o1 and https://en.wikipedia.org/wiki/OpenAI_o3
- o3 scored 87.5% on ARC-AGI at high compute: https://www.maginative.com/article/openais-o3-sets-new-record-scoring-87-5-on-arc-agi-benchmark/
- GPT-4.5, 27 Feb 2025, "$75 per million input tokens", "mostly seen by reviewers as an incremental upgrade": https://en.wikipedia.org/wiki/GPT-4.5
- Claude 3.7 Sonnet and Claude Code, 24 Feb 2025: https://techcrunch.com/2025/02/24/anthropic-launches-a-new-ai-model-that-thinks-as-long-as-you-want
- Grok 3, 17 Feb 2025, first over 1400 on LMArena (about 1402): https://thezvi.substack.com/p/go-grok-yourself and https://decrypt.co/306722/grok-3-review-how-elon-musks-ai-compares-to-chatgpt-claude-deepseek-and-gemini
- Gemini 2.0 Flash GA with 2.0 Pro, 5 Feb 2025: https://en.wikipedia.org/wiki/Google_Gemini
- Llama 3.3, 7 Dec 2024: https://en.wikipedia.org/wiki/Llama_(language_model)
- DeepSeek R1: https://en.wikipedia.org/wiki/DeepSeek_(chatbot) and https://fortune.com/2025/01/27/deepseek-chinese-ai-startup-nvidia-ai/

## 3. 2025-04-10 · "Gemini 2.5 takes pole"

| Pos | Lab | Gap (total) | Key models |
|---|---|---|---|
| P1 | Google | 0 | Gemini 2.5 Pro Experimental, Gemini 2.0 Flash |
| P2 | OpenAI | +0.20 (0.20) | GPT-4.5, o1 pro, o3-mini, GPT-4o image generation |
| P3 | Anthropic | +0.30 (0.50) | Claude 3.7 Sonnet, Claude Code |
| P4 | xAI | +0.45 (0.95) | Grok 3 |
| P5 | Meta | +1.90 (2.85) | Llama 4 Scout and Maverick |

**Rationale.** Gemini 2.5 Pro (25 Mar) debuted at #1 on LMArena by roughly 40 points, the first time Google clearly had the best single model. OpenAI stays close on breadth, and o3 landed six days after this snapshot. Llama 4 (5 Apr) was the low point for Meta: the LMArena score came from an unreleased "experimental chat version", and the public model ranked 32nd.

**Outside the five.** DeepSeek was still arguably ahead of Meta.

**Sources.**
- Gemini 2.5 Pro "debuts at #1 on LMArena by a significant margin": https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/
- The 40-point margin over Grok 3 and GPT-4.5: https://www.analyticsvidhya.com/blog/2025/03/gemini-2-5-pro-is-now-1-on-chatbot-arena/
- Llama 4, 5 Apr 2025, experimental-version benchmark: https://en.wikipedia.org/wiki/Llama_(language_model) and https://www.neowin.net/news/unmodified-llama-4-maverick-ranks-below-rivals-following-meta-cheating-allegations/
- Wider criticism of the arena after Llama 4: https://simonwillison.net/2025/Apr/30/criticism-of-the-chatbot-arena/
- o3 and o4-mini released 16 Apr 2025: https://en.wikipedia.org/wiki/OpenAI_o3

## 4. 2025-06-10 · "Three abreast into summer"

| Pos | Lab | Gap (total) | Key models |
|---|---|---|---|
| P1 | OpenAI | 0 | o3, o3-pro, o4-mini |
| P2 | Google | +0.15 (0.15) | Gemini 2.5 Pro and Flash, Veo 3 |
| P3 | Anthropic | +0.15 (0.30) | Claude Opus 4 and Sonnet 4, Claude Code (GA) |
| P4 | xAI | +0.90 (1.20) | Grok 3 |
| P5 | Meta | +1.90 (3.10) | Llama 4 |

**Rationale.** The tightest three-way fight of the period. AA's Q2 2025 numbers had o3-pro at 71 and Gemini 2.5 Pro at 70; Claude 4 (22 May) scored lower on the index but led coding (72.5% SWE-bench Verified against 69.1% for o3 and 63.2% for Gemini 2.5 Pro) and Claude Code went generally available. Grok 3 was now four months old. Meta delayed Behemoth and started assembling a superintelligence lab.

**Sources.**
- AA Q2 2025 report (o3-pro 71, Gemini 2.5 Pro 70, DeepSeek R1 68): https://artificialanalysis.ai/downloads/state-of-ai/2025/Q2-2025-Artificial-Analysis-State-of-AI-Highlights-Report.pdf
- Claude 4, 22 May 2025, 72.5% SWE-bench: https://www.anthropic.com/news/claude-4 ; competitor scores: https://www.ithome.com.tw/news/169131
- Claude Code GA in May 2025: https://en.wikipedia.org/wiki/Claude_(language_model)
- o3-pro, 10 Jun 2025: https://en.wikipedia.org/wiki/OpenAI_o3
- Veo 3, May 2025: https://en.wikipedia.org/wiki/Veo_(text-to-video_model)
- Behemoth delay: https://www.axios.com/2025/05/15/meta-behemoth-llama-scaling-delays ; lab plans: https://siliconangle.com/2025/06/10/meta-reportedly-forming-superintelligence-lab-amid-llama-4-behemoth-delays/

## 5. 2025-08-10 · "GPT-5: bumpy but ahead"

| Pos | Lab | Gap (total) | Key models |
|---|---|---|---|
| P1 | OpenAI | 0 | GPT-5 (with mini and nano) |
| P2 | Anthropic | +0.30 (0.30) | Claude Opus 4.1, Sonnet 4, Claude Code |
| P3 | Google | +0.10 (0.40) | Gemini 2.5 Pro, Veo 3 |
| P4 | xAI | +0.25 (0.65) | Grok 4 and Grok 4 Heavy |
| P5 | Meta | +2.60 (3.25) | Llama 4 |

**Rationale.** Grok 4 (9 Jul) topped the AA index at 73, ahead of o3-pro and Gemini 2.5 Pro. That is xAI's closest approach to the front, and it lasted a month. GPT-5 (7 Aug) took the top spot back, but the launch triggered a user revolt over the removed models and a broken router, so the lead is modest. Claude Code revenue was up 5.5x by July. Meta founded Meta Superintelligence Labs on 30 June and shipped nothing.

**Sources.**
- Grok 4 at 73 on AA: https://artificialanalysis.ai/downloads/state-of-ai/2025/Q2-2025-Artificial-Analysis-State-of-AI-Highlights-Report.pdf ; release 9 Jul 2025: https://en.wikipedia.org/wiki/Grok_(chatbot)
- GPT-5, 7 Aug 2025: https://en.wikipedia.org/wiki/GPT-5 ; backlash and Altman's "mistake" admission: https://www.theregister.com/2025/08/11/openai_tweaks_gpt5_after_user/ and https://venturebeat.com/ai/chatgpt-users-dismayed-as-openai-pulls-popular-models-gpt-4o-o3-and-more-enterprise-api-remains-for-now
- GPT-5 (high) leading AA at 68 as of late September: https://www.rdworldonline.com/best-coding-model-or-just-better-anthropic-launches-claude-sonnet-4-5-to-a-skeptical-crowd/
- Opus 4.1 (5 Aug 2025), Claude Code revenue: https://en.wikipedia.org/wiki/Claude_(language_model)
- MSL founded 30 Jun 2025: https://en.wikipedia.org/wiki/Meta_Superintelligence_Labs

## 6. 2025-10-01 · "The coding war"

| Pos | Lab | Gap (total) | Key models |
|---|---|---|---|
| P1 | OpenAI | 0 | GPT-5, GPT-5-Codex, Sora 2 |
| P2 | Anthropic | +0.20 (0.20) | Claude Sonnet 4.5, Opus 4.1, Claude Code |
| P3 | Google | +0.25 (0.45) | Gemini 2.5 Pro, Nano Banana, Veo 3 |
| P4 | xAI | +0.50 (0.95) | Grok 4, Grok 4 Fast, Grok Code Fast 1 |
| P5 | Meta | +2.60 (3.55) | Llama 4 |

**Rationale.** A quarterly checkpoint with no change of order. Sonnet 4.5 (29 Sep) scored 77.2% on SWE-bench Verified and closed Anthropic's gap, though it sat at 61 on AA against 68 for GPT-5 (high). Google's flagship was six months old, but Nano Banana (26 Aug) became a viral hit. xAI's releases were about speed and price, not the frontier.

**Sources.**
- Sonnet 4.5: 77.2% SWE-bench, AA 61 vs GPT-5 68: https://www.rdworldonline.com/best-coding-model-or-just-better-anthropic-launches-claude-sonnet-4-5-to-a-skeptical-crowd/ and https://fortune.com/2025/09/29/anthropic-releases-claude-sonnet-4-5-a-model-it-says-can-build-software-and-accomplish-business-tasks-autonomously/
- Sora 2, 30 Sep 2025: https://en.wikipedia.org/wiki/Sora_(text-to-video_model)
- Nano Banana, 26 Aug 2025, "viral Internet sensation": https://en.wikipedia.org/wiki/Nano_Banana
- Grok Code Fast 1 (28 Aug) and Grok 4 Fast (Sep 2025): https://en.wikipedia.org/wiki/Grok_(chatbot)
- GPT-5-Codex (mid-September 2025) is from memory; the pages I fetched did not confirm its date.

## 7. 2025-12-03 · "Code red at OpenAI"

| Pos | Lab | Gap (total) | Key models |
|---|---|---|---|
| P1 | Google | 0 | Gemini 3 Pro, Nano Banana Pro |
| P2 | Anthropic | +0.20 (0.20) | Claude Opus 4.5, Sonnet 4.5, Haiku 4.5 |
| P3 | OpenAI | +0.20 (0.40) | GPT-5.1 |
| P4 | xAI | +0.90 (1.30) | Grok 4.1 |
| P5 | Meta | +2.40 (3.70) | Llama 4 |

**Rationale.** Gemini 3 Pro (18 Nov) debuted three points clear of GPT-5.1 on AA (73) and at 1501 on LMArena, leading text, WebDev and vision. Opus 4.5 (24 Nov) answered within a week as the first model over 80% on SWE-bench Verified, which puts Anthropic ahead of OpenAI. OpenAI's own reaction was an internal "code red" memo on 2 December. Yann LeCun left Meta on 20 November.

**Sources.**
- Gemini 3 Pro on AA: https://artificialanalysis.ai/articles/gemini-3-pro-everything-you-need-to-know
- LMArena 1501 and leaderboard sweep: https://www.deeplearning.ai/the-batch/googles-gemini-3-pro-and-nano-banana-pro-boast-best-in-class-multimodal-reasoning-and-image-generation and https://thomas-wiegold.com/blog/google-gemini-3-hits-1-on-lmarena/
- Opus 4.5, 24 Nov 2025, 80.9%: https://en.wikipedia.org/wiki/Claude_(language_model) and https://www.getmaxim.ai/articles/gemini-3-pro-vs-claude-opus-4-5-vs-gpt-5-the-ultimate-frontier-model-comparison/
- Code red memo: https://en.wikipedia.org/wiki/GPT-5.2 and https://div.beehiiv.com/p/from-code-red-to-code-red
- Nano Banana Pro, 20 Nov 2025: https://en.wikipedia.org/wiki/Nano_Banana
- Grok 4.1 (17 Nov 2025): https://en.wikipedia.org/wiki/Grok_(chatbot) ; LeCun's exit: https://en.wikipedia.org/wiki/Meta_Superintelligence_Labs

## 8. 2026-02-20 · "Claude Code fever"

| Pos | Lab | Gap (total) | Key models |
|---|---|---|---|
| P1 | Anthropic | 0 | Claude Opus 4.6, Sonnet 4.6, Claude Code |
| P2 | Google | +0.15 (0.15) | Gemini 3.1 Pro, Gemini 3 Flash, Gemini 3 Deep Think |
| P3 | OpenAI | +0.15 (0.30) | GPT-5.2, GPT-5.3-Codex |
| P4 | xAI | +1.40 (1.70) | Grok 4.20 |
| P5 | Meta | +2.10 (3.80) | Llama 4 |

**Rationale.** Anthropic's first lead, and a judgement call. On AA the three were level in January (GPT-5.2 at 50, Opus 4.5 at 49, Gemini 3 Pro at 48 on the new v4.0), Opus 4.6 (5 Feb) took the top spot at 53, and Gemini 3.1 Pro (19 Feb) then went four points clear at 57. I put Anthropic ahead anyway because Claude Code with Opus 4.5 became the story of the winter: it went viral over the holidays and Claude's web audience more than doubled. GPT-5.3-Codex launched within minutes of Opus 4.6. Grok 4.20 scored 48; SpaceX bought xAI on 2 February.

**Sources.**
- AA v4.0 three-way tie: https://the-decoder.com/new-artificial-analysis-benchmark-shows-openai-anthropic-and-google-locked-in-a-three-way-tie-at-the-top/
- Opus 4.6 takes AA top spot: https://officechai.com/ai/claude-opus-4-6-takes-top-spot-on-artificial-analysis-intelligence-index-has-two-point-lead-over-gpt-5-2
- Gemini 3.1 Pro tops AA at 57: https://the-decoder.com/googles-gemini-3-1-pro-preview-tops-artificial-analysis-intelligence-index-at-less-than-half-the-cost-of-its-rivals/ and https://artificialanalysis.ai/es/articles/gemini-3-1-pro-preview-new-leader-in-ai
- Claude Code's holiday moment: https://www.theverge.com/report/874308/anthropic-claude-code-opus-hype-moment and https://thezvi.substack.com/p/claude-codes ; "went viral" over the 2025 to 2026 holidays: https://en.wikipedia.org/wiki/Claude_(language_model)
- Same-day Opus 4.6 and GPT-5.3-Codex: https://www.theneuron.ai/explainer-articles/anthropic-openai-best-ai-models-same-day-opus-codex/
- GPT-5.2, 11 Dec 2025: https://en.wikipedia.org/wiki/GPT-5.2
- Grok 4.20 at 48: https://www.datalearner.com/en/leaderboards/external/aa-quality-index ; SpaceX and xAI merger: https://fortune.com/2026/02/02/elon-musk-spacex-xai-ipo-trillion

## 9. 2026-04-24 · "GPT-5.5 strikes back"

| Pos | Lab | Gap (total) | Key models |
|---|---|---|---|
| P1 | OpenAI | 0 | GPT-5.5 and GPT-5.5 Pro, GPT-5.4, Codex |
| P2 | Anthropic | +0.25 (0.25) | Claude Opus 4.7, Sonnet 4.6, Mythos Preview (partners only) |
| P3 | Google | +0.30 (0.55) | Gemini 3.1 Pro, Gemini 3 Flash |
| P4 | Meta | +1.20 (1.75) | Muse Spark |
| P5 | xAI | +0.15 (1.90) | Grok 4.20, Grok 4.3 |

**Rationale.** OpenAI's last lead. GPT-5.4 (5 Mar) tied Gemini 3.1 Pro at 57, then GPT-5.5 (23 Apr) went three points clear at 60, breaking a three-way tie. It arrived a week after Opus 4.7, whose over-eager safeguards caused a developer backlash and some switching to Codex. Anthropic's strongest model, Mythos Preview (7 Apr), was limited to Project Glasswing partners, so it counts for little in a lineup people can use. Muse Spark (8 Apr) scored 52, inside AA's top five, which brings Meta from 3.8s back to under 2s.

**Sources.**
- GPT-5.5 tops AA by three points: https://artificialanalysis.ai/articles/openai-gpt5-5-is-the-new-leading-AI-model/ and https://officechai.com/ai/gpt-5-5-tops-artificial-analysis-with-score-of-60/
- GPT-5.4 tie with Gemini 3.1 Pro: https://officechai.com/ai/gpt-5-4-tied-with-gemini-3-1-pro-on-artificial-analysis-intelligence-index-first-time-a-new-openai-model-hasnt-topped-index-outright ; date: https://en.wikipedia.org/wiki/GPT-5.4
- GPT-5.5 details and benchmarks: https://en.wikipedia.org/wiki/GPT-5.5
- Opus 4.7 backlash: https://maxfavilli.substack.com/p/opus-47-the-best-model-nobody-likes and https://www.buildfastwithai.com/blogs/claude-opus-4-7-regression-explained-2026
- Mythos Preview and Glasswing: https://en.wikipedia.org/wiki/Claude_Mythos
- Muse Spark at 52, "Meta is back in the AI race": https://artificialanalysis.ai/articles/muse-spark-everything-you-need-to-know ; launch: https://en.wikipedia.org/wiki/Meta_Superintelligence_Labs
- Grok 4.3 (April 2026): https://en.wikipedia.org/wiki/Grok_(chatbot)

## 10. 2026-06-10 · "Fable 5 rewrites the board"

| Pos | Lab | Gap (total) | Key models |
|---|---|---|---|
| P1 | Anthropic | 0 | Claude Fable 5, Opus 4.8, Mythos 5 (partners only) |
| P2 | OpenAI | +1.30 (1.30) | GPT-5.5 |
| P3 | Google | +0.45 (1.75) | Gemini 3.5 Flash, Gemini 3.1 Pro, Gemini Omni |
| P4 | Meta | +0.60 (2.35) | Muse Spark |
| P5 | xAI | +0.15 (2.50) | Grok 4.3, Grok Build |

**Rationale.** The biggest single-day swing in the two years. Fable 5 (9 Jun) launched at 64.9 on AA, about five points ahead of any other lab's best model, with Anthropic holding the top two places; Opus 4.8 (28 May) had already edged GPT-5.5 on coding. Google's I/O brought Gemini 3.5 Flash (55) but no new Pro.

**What happened next.** On 12 June a US Commerce Department letter led Anthropic to revoke access to Fable 5 and Mythos 5 for all customers; access returned on 1 July. The snapshot is dated before that. If you want the red flag on the timeline, add a snapshot around 2026-06-20 with Anthropic's gap to OpenAI cut to about 0.3 (Opus 4.8 only).

**Sources.**
- Fable 5 at #1, 64.9: https://artificialanalysis.ai/articles/claude-fable-5-mythos-intelligence-index
- AA v4.1 (15 Jun): Fable 5 60, Opus 4.8 56, GPT-5.5 55: https://artificialanalysis.ai/es/articles/artificial-analysis-intelligence-index-v4-1
- Opus 4.8 vs GPT-5.5 on coding: https://www.vellum.ai/blog/claude-opus-4-8-benchmarks-explained
- Access suspension and restoration: https://en.wikipedia.org/wiki/Claude_Mythos
- Gemini 3.5 Flash at 55: https://artificialanalysis.ai/articles/gemini-3-5-flash-everything-you-need-to-know
- Grok Build, 15 May 2026: https://en.wikipedia.org/wiki/Grok_(chatbot)

## 11. 2026-07-25 · "The pack closes in"

| Pos | Lab | Gap (total) | Key models |
|---|---|---|---|
| P1 | Anthropic | 0 | Claude Fable 5, Opus 5, Sonnet 5 |
| P2 | OpenAI | +0.45 (0.45) | GPT-5.6 Sol, Terra and Luna |
| P3 | SpaceX AI | +1.00 (1.45) | Grok 4.5 |
| P4 | Google | +0.10 (1.55) | Gemini 3.6 Flash, 3.5 Flash-Lite, Gemini 3.1 Pro |
| P5 | Meta | +0.25 (1.80) | Muse Spark 1.1, Muse Image and Video |

**Rationale.** GPT-5.6 Sol (public 9 Jul after a government review) reached 59 against Fable 5's 60 and led AA's Coding Agent Index, so the front gap shrinks; Opus 5 (24 Jul) stops it closing completely. xAI rebranded as SpaceX AI on 6 July and Grok 4.5 two days later scored 54, placing fourth and, in AA's words, ahead of "notably Google's Gemini models". Google's 21 July release was three Flash-tier models and no 3.5 Pro. That is why SpaceX AI sits ahead of Google here, by a nose.

**Outside the five.** Moonshot's Kimi K3 (16 Jul) scored 57, third overall on AA. On the index alone it would have been P3.

**Sources.**
- Six labs above 50, scores as of 17 Jul: https://artificialanalysis.ai/articles/four-frontier-launches-in-eight-days-six-labs-now-field-a-model-above-50-on-the-artificial-analysis-intelligence-index
- Grok 4.5 fourth at 54: https://artificialanalysis.ai/articles/grok-4-5-brings-spacexai-to-the-the-intelligence-frontier ; price vs rivals: https://the-decoder.com/grok-4-5-is-so-cheap-compared-to-fable-5-and-gpt-5-5-that-benchmark-gaps-may-not-matter-much/
- Rebrand, 6 Jul 2026: https://techweez.com/2026/07/09/spacexai-grok-4-5-launch/ and https://www.theepochtimes.com/tech/xai-rebrands-as-spacexai-launches-new-grok-4-5-model-6059463
- GPT-5.6 timeline and Coding Agent Index: https://en.wikipedia.org/wiki/GPT-5.6 and https://9to5mac.com/2026/07/08/openai-shares-update-on-gpt-5-6-availability-after-holding-back-release/
- Opus 5, 24 Jul 2026: https://platform.claude.com/docs/en/release-notes/overview and https://www.digitalapplied.com/blog/claude-opus-5-launch-benchmarks-pricing-2026
- Google's Flash-only July ("but no 3.5 Pro"): https://en.wikipedia.org/wiki/Google_Gemini and https://datanorth.ai/news/google-releases-gemini-3-6-flash
- Muse Image and Video, 7 Jul 2026: https://en.wikipedia.org/wiki/Meta_AI

## 12. 2026-09-10 · "GPT-6 arrives"

| Pos | Lab | Gap (total) | Key models |
|---|---|---|---|
| P1 | Anthropic | 0 | Claude Fable 5.1, Opus 5, Sonnet 5 |
| P2 | OpenAI | +0.30 (0.30) | GPT-6 Astra, GPT-5.6 Sol |
| P3 | Meta | +1.10 (1.40) | Muse Spark 1.3, Muse Code, Muse Glimmer |
| P4 | SpaceX AI | +0.20 (1.60) | Grok 4.6 |
| P5 | Google | +0.25 (1.85) | Gemini 3.8 Flash, Gemini 3.1 Pro |

**Rationale.** Fable 5.1 (1 Sep) topped AA at 66. GPT-6 Astra (3 to 4 Sep) first scored a "disappointing" 61, level with GPT-5.6 Sol; after AA's v4.2 overhaul it was second, and by 9 Sep AA had it level with Fable 5.1 on both the Intelligence and Coding Agent indexes. Hence a small gap. Behind them, Muse Spark 1.3 (2 Sep) scored 62 at max, "behind only Claude Fable 5.1 and Claude Opus 5", and Grok 4.6 (12 Aug) had tied GPT-5.6 Sol at 61. Google's best was 56: it had not shipped a Pro model since February, and three weeks later AA described Gemini 4 as bringing Google "back to being one of the top three labs". This is Google's low point and the only snapshot where it is last.

**Outside the five.** Kimi K3 and GLM-5.1 both scored 60, ahead of Google. Moonshot would have been top-5.

**Sources.**
- Fable 5.1 at 66, full ranking on 2 Sep: https://officechai.com/ai/claude-fable-5-1-scores-tops-artificial-analysis-intelligence-index-with-score-of-66-beats-opus-5-by-3-points/ and https://x.com/ArtificialAnlys/status/2094881171066978525
- GPT-6 Astra at 61 on launch: https://officechai.com/ai/openai-gpt-6-astra-scores-a-disappointing-61-on-artificial-analysis-intelligence-index-same-as-gpt-5-6-sol/
- AA v4.2 overhaul, order Anthropic, OpenAI, Meta: https://the-decoder.com/artificial-analysis-overhauls-its-intelligence-index-after-gpt-6-astra-scoring-drew-skepticism/
- Astra level with Fable 5.1 by 9 Sep: https://artificialanalysis.ai/articles/benchmarking-gpt-6-astra ; launch details: https://en.wikipedia.org/wiki/GPT-6
- Muse Spark 1.3: https://x.com/ArtificialAnlys/status/2095247787277553929 ; Muse Spark 1.2 and Muse Code (5 Aug): https://artificialanalysis.ai/articles/muse-spark-1-2 ; Glimmer: https://en.wikipedia.org/wiki/Meta_Superintelligence_Labs
- Grok 4.6 at 61: https://felloai.com/grok-4-6/ and https://www.eesel.ai/blog/grok-4-6-review
- Gemini 3.8 Flash (2 Sep): https://en.wikipedia.org/wiki/Google_Gemini ; "back to being one of the top three labs": https://x.com/ArtificialAnlys/status/2105392625788637299

## 13. 2026-10-15 · "Gemini 4 rejoins the fight"

| Pos | Lab | Gap (total) | Key models |
|---|---|---|---|
| P1 | Anthropic | 0 | Claude Opus 5.5, Sonnet 5.5, Haiku 5.5, Fable 5.1 |
| P2 | OpenAI | +0.85 (0.85) | GPT-6 Astra, GPT-6.1 Sol, GPT-6 Luna |
| P3 | Google | +0.45 (1.30) | Gemini 4 Argon |
| P4 | Meta | +0.55 (1.85) | Muse Wonder and Wonder Full, Muse Spark Open |
| P5 | SpaceX AI | +0.60 (2.45) | Grok 4.7 |

**Rationale.** Opus 5.5 (22 Sep) scored 58, "the highest score we have measured by several points", and the full 5.5 family followed. Gemini 4 Argon (announced 30 Sep, generally available 13 Oct) matched GPT-6 Astra at 53, which restores Google to P3. Muse Wonder (12 Oct) is Meta's high-water mark: Wonder Full scored 56, second only to Opus 5.5 on that index version. I still keep Meta behind Google because Wonder Full is not on the API and the lineup is thinner. Grok 4.7 (21 Sep) gained only two points and Grok 5 kept slipping.

**Sources.**
- Opus 5.5 takes the top spot: https://artificialanalysis.ai/articles/claude-opus-5-5 ; 5.5 family dates: https://en.wikipedia.org/wiki/Claude_(language_model)
- Gemini 4 Argon equals Astra at 53: https://x.com/ArtificialAnlys/status/2105392625788637299 ; rollout on 13 Oct: https://www.techtimes.com/articles/329026/20261015/gemini-4-argon-rolls-out-benchmark-scores-reflect-high-mode-not-subscriber-default.htm
- Muse Wonder 52 and Wonder Full 56: https://x.com/ArtificialAnlys/status/2109697083519447118 ; API withheld: https://venturebeat.com/technology/metas-new-muse-wonder-and-muse-wonder-full-models-achieve-frontier-performance-but-only-the-weaker-one-is-available-via-api ; reception: https://winbuzzer.com/2026/10/13/metas-wonder-ai-models-improve-coding-test-scores-xcxwbn/
- Muse Spark Open, 15 Oct 2026: https://en.wikipedia.org/wiki/Meta_AI
- Grok 4.7 at 46, "top 4 AI labs": https://artificialanalysis.ai/articles/benchmarking-grok-4-7 ; Grok 5 status: https://geotoolbox.ai/blog/grok-5
- GPT-6 Sol, Luna and Instant: https://en.wikipedia.org/wiki/GPT-6

## 14. 2026-11-20 · "Clear air up front" (owner's take, unchanged)

| Pos | Lab | Gap (total) | Key models |
|---|---|---|---|
| P1 | Anthropic | 0 | Claude Fable 5.2, Opus 5.5, Sonnet 5.5, Haiku 5.5 |
| P2 | OpenAI | +1.00 (1.00) | GPT-6.2 Astra and Sol, GPT-6.1 Terra |
| P3 | Google | +0.25 (1.25) | Gemini 4 Neon, Carbon, Hydrogen and Argon |
| P4 | Meta | +1.70 (2.95) | Muse Wonder and Wonder Full |
| P5 | SpaceX AI | +0.30 (3.25) | Grok 4.7 |

**How the research lines up with it.** The current AA board (v5.0.1) reads Fable 5.2 at 65, GPT-6.2 Astra at 62, Gemini 4 Neon at 61 and Carbon at 60, Muse Wonder Full at 50 and Grok 4.7 at 35. That is the owner's order and the owner's shape: a clear leader, a tight P2 and P3, and a big break to the back pair. The one place the owner is kinder than AA is SpaceX AI, which trails Meta by 15 index points but only 0.3s here.

**The month in between.** AA v5 (27 Oct) put Opus 5.5 at 58, GPT-6 Astra at 57 and Gemini 4 Argon at 50. Gemini 4 Carbon (28 Oct, limited access) then scored 60 and topped both the AA board and LMArena text for about ten days, until Fable 5.2 (9 Nov) took it back. GPT-6.2 (17 Nov) and Gemini 4 Neon (18 Nov), Google's fourth model in seven weeks, completed the picture.

**Sources.**
- Current board: https://artificialanalysis.ai/leaderboards/models
- AA v5: https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5
- Fable 5.2: https://www.anthropic.com/claude-fable-and-mythos-5-2 and https://venturebeat.com/technology/anthropic-releases-claude-fable-5-2-and-mythos-5-2-pairing-new-record-high-benchmarks-with-20-api-cost-reduction
- GPT-6.2 second at 62: https://the-decoder.com/openai-launches-gpt-6-2-astra-and-sol-with-lower-api-prices-and-some-benchmark-gains/
- Gemini 4 Neon third at 61: https://artificialanalysis.ai/articles/gemini-4-neon-intelligence-gain
- Gemini 4 Carbon leading in early November: https://www.developersdigest.tech/benchmarks/artificial-analysis and https://www.developersdigest.tech/benchmarks/lmarena
- Muse Wonder on v5: https://www.lindy.ai/blog/muse-wonder

---

## Confidence and the calls you may want to retune

**Confidence by period.**
- **High: order of the front three, 2025.** Well documented and I knew it independently of the search results. The gaps between them are small throughout, so P1 in several snapshots is a matter of a tenth or two.
- **Medium: 2026 dates and scores.** Dates come from Wikipedia and AA's own articles, which agree. Scores are AA's, but spread across five index versions; I relied on rank and point gaps, not absolute numbers.
- **Lower: mood in mid and late 2026.** Sentiment evidence for that stretch is mostly blogs and aggregators. Reddit and X were not searchable directly, so "vibes" there rests on secondary write-ups.

**Judgement calls, most debatable first.**

1. **Google in summer 2026 (snapshots 11 and 12).** I have Google at P4 in July and P5 in September. AA supports this: Google had no model above 50 in July, sat at 56 against 61 to 66 for the others in early September, and AA itself said Gemini 4 brought Google "back" into the top three. But if you weigh breadth heavily (Flash price-performance, Nano Banana, Veo, Omni, distribution), Google arguably never left P3. To retune, move Google to P3 in both and put it about 1.0 behind OpenAI, with the other two 0.15 to 0.25 behind it.
2. **Anthropic at P1 in February 2026 (snapshot 8).** AA had Gemini 3.1 Pro four points clear on 19 February. I led with Anthropic because of the Claude Code moment and the coding and agentic weight in the brief. An index-first reading is Google P1, Anthropic +0.15, OpenAI +0.15.
3. **OpenAI at P1 in April 2026 (snapshot 9).** Based on GPT-5.5 topping AA and the Opus 4.7 backlash. If you count Mythos Preview as part of Anthropic's lineup even though it was partner-only, Anthropic never lost the lead after February.
4. **Meta's peak in September and October 2026.** AA briefly ranked Meta third (Muse Spark 1.3) and then second (Muse Wonder Full). I capped Meta at P3, about 1.4s back, and then P4, because the best variants were limited-preview or withheld from the API. The drop from 1.85s back in October to 2.95s in November is mostly Google and OpenAI pulling away plus AA's v5 rebase, not Meta getting worse.
5. **SpaceX AI at the back in November.** The owner's 0.3s behind Meta is much closer than AA's 15-point gap. I kept earlier snapshots consistent with the owner's reading, so SpaceX AI fades gradually from 1.45s back in July to 3.25s, as Grok 5 slipped while everyone else shipped a new generation.
6. **Who led in spring 2025 (snapshots 3 and 4).** Google leads on 10 April because Gemini 2.5 Pro was plainly the best model before o3 shipped on 16 April. By June I have OpenAI back in front by 0.15. Either could be flipped without contradicting the sources.
7. **Meta versus xAI at the back, 2024 and spring 2026.** Both pairs are within 0.35s and could be swapped. In April to June 2026 I have Meta ahead on the strength of Muse Spark; Grok 4.3 scored one point higher than Muse Spark on one AA version and lower on the next.
8. **Size of the Fable 5 lead (snapshot 10).** 1.30s is the largest lead in the file, larger than the owner's 1.00 for today. It reflects a five-point index lead against today's three, discounted for price and the 8% fallback routing. Trim it to 1.0 if you want November to remain the biggest lead on the timeline.

**Optional extra snapshots.** Two moments were left out to stay at fourteen:
- **2026-06-20, the red flag:** Fable 5 and Mythos 5 offline by government order. Anthropic 0, OpenAI +0.30, Google +0.45, Meta +0.60, xAI +0.15.
- **2026-11-03, Carbon on top of the board:** Gemini 4 Carbon led AA and LMArena text but was not generally available. Anthropic 0, Google +0.35, OpenAI +0.25, Meta +1.30, SpaceX AI +0.50.

**Things I could not verify.**
- GPT-5-Codex's September 2025 date (from memory; the fetched pages did not confirm it). It is not used in any `note`.
- Three details used in notes are from memory, not from a page fetched for this research: OpenAI's Deep Research launch (early February 2025), the Ghibli-style image trend after GPT-4o image generation (late March 2025), and Genie 3 (August 2025). I am confident in all three, but they carry no source URL above.
- A report that OpenAI scrapped a planned GPT-6.1 Astra in October 2026 appeared in one source only, so I left it out.
- Exact release dates for Grok 4.20 (February 2026), Grok 4.3 (April 2026) and Muse Spark 1.1 are given by month only in the sources.

## Owner decision (2026-11-20): guest cars
Outsider labs join as guest cars for the periods they were genuinely top 5, using the new dynamic data format:
- **DeepSeek** (R1): the Feb, Apr and Jun 2025 snapshots, ahead of Meta. Drops out after that.
- **Moonshot / Kimi** (K3): the Jul and Sep 2026 snapshots. Kimi K3 was third on AA at launch in July and ahead of Google in September.
