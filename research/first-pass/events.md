# Fastest Lab: the replay as events

Companion to `events.txt`, the event-based replacement for the SNAPSHOTS table. It holds 29 entries: an opening state, 27 events and the owner's closing standings. At about 2.5 s a step that is roughly 70 s of replay.

**How it relates to the quarterly research.** `standings-history.md` stays the backbone. Nine of its fourteen snapshots reappear here unchanged as the state right after the event that produced them (marked "= quarterly" below). The states in between are new and were built by one rule: at each event the event's lab moves, and everyone else keeps their distance to the leader unless they shipped something since the last event. Where a car moves on someone else's event, its note says why.

**What was checked in this pass.** Every 2026 event date and headline score from July onwards was re-checked on the web on 2026-11-20, plus the June suspension, Muse Spark, Opus 4.6 and Grok 4. Dates and scores for 2025 and early 2026 are carried over from the quarterly research and its sources. Scores are Artificial Analysis (AA) Intelligence Index values as of their own date; the index was rebased several times, so only rank and point gaps carry across.

**Format notes for whoever wires this into the page.**
- Every date is unique. The current page skips a second snapshot on the same date, so Grok 4.5 (8 Jul) and GPT-5.6 Sol (9 Jul), and Muse Spark 1.3 (2 Sep) and GPT-6 Astra (3 Sep), must stay on separate days.
- The tightest four-car pack is 0.45 s, the same as on the current page, so car size does not shrink.
- The most cars in one event is six.
- The v1 page does not understand `@lab` or `> caption` lines; it would show the tag in the headline and report the caption as an unknown lab.

## The events

Gaps in brackets are totals to the leader.

### 1. 2024-11-20 · OpenAI's race to lose (opening state)
o1-preview, GPT-4o; Claude 3.5 Sonnet (new); gemini-exp models; Llama 3.2; Grok 2.
= quarterly. OpenAI had the only reasoning models in wide use. Anthropic's upgraded 3.5 Sonnet was the developers' pick, Google's best work was still experimental.
- https://www.anthropic.com/news/3-5-models-and-computer-use
- https://en.wikipedia.org/wiki/OpenAI_o1
- https://simonwillison.net/2024/Nov/22/gemini-exp-1121

### 2. 2025-01-20 · DeepSeek shocks the paddock · @deepseek
DeepSeek R1.
R1 reached o1-level reasoning with open weights at a small fraction of the price. A week later the app passed ChatGPT on the US App Store and Nvidia fell about 17% in a day. DeepSeek joins at P4 (1.05), ahead of Meta and of xAI, which was still on Grok 2. OpenAI's lead over Anthropic grows from 0.40 to 0.50 because o1, o1 pro and the o3 preview all landed in December.
- https://en.wikipedia.org/wiki/DeepSeek_(chatbot)
- https://fortune.com/2025/01/27/deepseek-chinese-ai-startup-nvidia-ai/
- https://en.wikipedia.org/wiki/OpenAI_o3

### 3. 2025-02-17 · Grok 3 gatecrashes the front · @spacexai
Grok 3.
First model over 1400 on LMArena. xAI goes from last (2.55) to P4 (0.85), 0.15 behind Google. Anthropic sits at its furthest back (0.55) in the week before 3.7.
- https://thezvi.substack.com/p/go-grok-yourself
- https://decrypt.co/306722/grok-3-review-how-elon-musks-ai-compares-to-chatgpt-claude-deepseek-and-gemini

### 4. 2025-02-24 · Claude 3.7 brings Claude Code · @anthropic
Claude 3.7 Sonnet, Claude Code (research preview).
= quarterly (28 Feb). The first hybrid reasoning model and the launch of Claude Code. Anthropic closes from 0.55 to 0.35. GPT-4.5 followed three days later and changed nothing.
- https://techcrunch.com/2025/02/24/anthropic-launches-a-new-ai-model-that-thinks-as-long-as-you-want
- https://en.wikipedia.org/wiki/GPT-4.5

### 5. 2025-03-25 · Gemini 2.5 takes pole · @google
Gemini 2.5 Pro Experimental.
Debuted #1 on LMArena by about 40 points. First change of leader: Google from P3 to P1, OpenAI 0.20 behind. GPT-4o image generation shipped the same day and went viral, which keeps OpenAI close.
- https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/
- https://www.analyticsvidhya.com/blog/2025/03/gemini-2-5-pro-is-now-1-on-chatbot-arena/

### 6. 2025-04-05 · Llama 4 stumbles · @meta
Llama 4 Scout and Maverick.
= quarterly (10 Apr). No change of order; a notable moment. The LMArena score came from an unreleased "experimental chat version" and the public model ranked 32nd. Meta drops from 2.60 to 2.85.
- https://en.wikipedia.org/wiki/Llama_(language_model)
- https://www.neowin.net/news/unmodified-llama-4-maverick-ranks-below-rivals-following-meta-cheating-allegations/

### 7. 2025-04-16 · o3 puts OpenAI back in front · @openai
o3, o4-mini.
The full o3 shipped four months after its preview. OpenAI retakes P1 by 0.15. Anthropic is 0.50 back while waiting for Claude 4.
- https://en.wikipedia.org/wiki/OpenAI_o3

### 8. 2025-05-22 · Claude 4: three abreast · @anthropic
Claude Opus 4, Sonnet 4, Claude Code generally available.
= quarterly (10 Jun). 72.5% on SWE-bench Verified against 69.1% for o3. The front three are within 0.30. Google I/O two days earlier brought the updated 2.5 Pro and Veo 3.
- https://www.anthropic.com/news/claude-4
- https://www.ithome.com.tw/news/169131
- https://en.wikipedia.org/wiki/Veo_(text-to-video_model)

### 9. 2025-07-09 · Grok 4 tops the index · @spacexai
Grok 4, Grok 4 Heavy.
73 on AA against 71 for o3-pro, 70 for Gemini 2.5 Pro, 64 for Claude 4 Opus. AA called it xAI's first time in first place. xAI closes from 1.20 to 0.50 but stays P4, because it was one model with no coding agent or wider lineup. See judgement call 3.
- https://threadreaderapp.com/scrolly/1943166841150644622
- https://artificialanalysis.ai/downloads/state-of-ai/2025/Q2-2025-Artificial-Analysis-State-of-AI-Highlights-Report.pdf
- https://en.wikipedia.org/wiki/Grok_(chatbot)

### 10. 2025-08-07 · GPT-5: bumpy but ahead · @openai
GPT-5, with mini and nano.
= quarterly (10 Aug). GPT-5 took the top spot back but the launch caused a user revolt over retired models. Anthropic passes Google for P2 here on Opus 4.1 (5 Aug) and Claude Code revenue. DeepSeek leaves the track: see judgement call 5.
- https://en.wikipedia.org/wiki/GPT-5
- https://www.theregister.com/2025/08/11/openai_tweaks_gpt5_after_user/
- https://en.wikipedia.org/wiki/Claude_(language_model)

### 11. 2025-11-18 · Gemini 3 takes pole · @google
Gemini 3 Pro.
Three points clear of GPT-5.1 on AA and 1501 on LMArena. Google from P3 to P1. This is the state before Opus 4.5, so OpenAI is still P2 (0.30) with Anthropic 0.15 behind it.
- https://artificialanalysis.ai/articles/gemini-3-pro-everything-you-need-to-know
- https://www.deeplearning.ai/the-batch/googles-gemini-3-pro-and-nano-banana-pro-boast-best-in-class-multimodal-reasoning-and-image-generation

### 12. 2025-11-24 · Opus 4.5 answers in six days · @anthropic
Claude Opus 4.5.
= quarterly (3 Dec). First model over 80% on SWE-bench Verified. Anthropic passes OpenAI, which is third for the first time. The "code red" memo (2 Dec) is folded into the caption.
- https://en.wikipedia.org/wiki/Claude_(language_model)
- https://en.wikipedia.org/wiki/GPT-5.2

### 13. 2026-02-05 · Claude Code fever · @anthropic
Claude Opus 4.6; GPT-5.3-Codex the same day.
Anthropic's first lead. Opus 4.6 took the AA top spot at 53, on top of Claude Code's viral winter. Google drops from P1 to P3 on this step because Gemini 3 Pro was three months old while OpenAI had shipped GPT-5.2 (11 Dec) and GPT-5.3-Codex.
- https://the-decoder.com/claude-opus-4-6-takes-the-top-spot-on-artificial-analysis-intelligence-index-but-openais-codex-5-3-looms/
- https://thezvi.substack.com/p/claude-opus-46-escalates-things-quickly
- https://www.theverge.com/report/874308/anthropic-claude-code-opus-hype-moment

### 14. 2026-02-19 · Gemini 3.1 Pro tops the index · @google
Gemini 3.1 Pro.
= quarterly (20 Feb). 57 on AA, four clear of Opus 4.6, at under half the cost. Google passes OpenAI for P2. Anthropic stays ahead on the Claude Code moment. See judgement call 1.
- https://the-decoder.com/googles-gemini-3-1-pro-preview-tops-artificial-analysis-intelligence-index-at-less-than-half-the-cost-of-its-rivals/

### 15. 2026-04-08 · Meta is back · @meta
Muse Spark.
52 on AA, behind only Gemini 3.1 Pro, GPT-5.4 and Opus 4.6; Meta's first closed model. Meta jumps from 3.80 to 1.60 and passes xAI. Mythos Preview (7 Apr) was partners-only and counts for little.
- https://artificialanalysis.ai/articles/muse-spark-everything-you-need-to-know
- https://venturebeat.com/technology/goodbye-llama-meta-launches-new-proprietary-ai-model-muse-spark-first-since
- https://en.wikipedia.org/wiki/Claude_Mythos

### 16. 2026-04-23 · GPT-5.5 strikes back · @openai
GPT-5.5, GPT-5.5 Pro.
= quarterly (24 Apr). Three points clear on AA, a week after the Opus 4.7 backlash. OpenAI from P3 to P1, its last lead.
- https://artificialanalysis.ai/articles/openai-gpt5-5-is-the-new-leading-AI-model/
- https://maxfavilli.substack.com/p/opus-47-the-best-model-nobody-likes

### 17. 2026-06-09 · Fable 5 rewrites the board · @anthropic
Claude Fable 5 (Mythos 5 for partners).
= quarterly (10 Jun). About five index points ahead of any other lab's best model. The largest gap in the file at 1.30.
- https://artificialanalysis.ai/articles/claude-fable-5-mythos-intelligence-index
- https://the-decoder.com/anthropic-releases-claude-fable-5-and-mythos-5-with-major-gains-in-coding-and-science/

### 18. 2026-06-12 · Red flag for Fable 5 · @anthropic
No model; a government directive.
The Commerce Department directed Anthropic to suspend foreign nationals' access; Anthropic could not segment by nationality and disabled Fable 5 and Mythos 5 for everyone. The field compresses by a full second, with Opus 4.8 still one index point ahead of GPT-5.5. Restoration was announced on 30 June and access was back on 1 July, which the next event shows.
- https://www.anthropic.com/news/fable-mythos-access
- https://thenewstack.io/us-gov-orders-anthropic-to-pull-fable-5-and-mythos-5-three-days-after-launch/
- https://www.shacknews.com/article/149860/anthropic-restore-access-fable-5-mythos-5

### 19. 2026-07-08 · SpaceX AI finds pace · @spacexai
Grok 4.5, two days after the rebrand.
54 on AA, fourth behind Fable 5, GPT-5.5 and Opus 4.8, and ahead of every Gemini. SpaceX AI passes Google for P3. Anthropic's gap is back to 1.30 because Fable 5 returned a week earlier.
- https://artificialanalysis.ai/articles/grok-4-5-brings-spacexai-to-the-the-intelligence-frontier
- https://techweez.com/2026/07/09/spacexai-grok-4-5-launch/

### 20. 2026-07-09 · GPT-5.6 Sol closes the gap · @openai
GPT-5.6 Sol, Terra, Luna.
59 against Fable 5's 60, and first on AA's Coding Agent Index. OpenAI closes from 1.30 to 0.40. One outlet reports Grok 4.5 and GPT-5.6 as launching on the same day; AA dates Grok 4.5 to 8 July.
- https://thenewstack.io/openai-gpt-56-live/
- https://cryptobriefing.com/openai-gpt-5-6-sol-intelligence-coding-index/
- https://pureai.com/articles/2026/07/10/openai-and-xai-launch-competing-models-on-the-same-day.aspx

### 21. 2026-07-16 · Kimi K3 crashes the party · @moonshot
Kimi K3.
57 on AA, third behind Fable 5 and GPT-5.6 Sol. Moonshot joins at P3 (0.90). The back three sit 0.05 to 0.20 further back than the 25 July quarterly snapshot, because their distance to the leader is held constant across the three July events.
- https://artificialanalysis.ai/articles/kimi-k3-achieves-3-in-the-artificial-analysis-intelligence-index-comparable-to-opus-4-8-and-gpt-5-5
- https://artificialanalysis.ai/articles/four-frontier-launches-in-eight-days-six-labs-now-field-a-model-above-50-on-the-artificial-analysis-intelligence-index

### 22. 2026-09-02 · Meta onto the podium · @meta
Muse Spark 1.3; Claude Fable 5.1 the day before.
Muse Spark 1.3 (max, limited preview) scored 62, behind only Fable 5.1 (66) and Opus 5. Meta goes from last (P6) to P3. OpenAI's gap widens to 0.90 in the same step because Opus 5 and Fable 5.1 had put Anthropic five points clear of Sol. See judgement call 2.
- https://artificialanalysis.ai/es/articles/muse-spark-1-3
- https://officechai.com/ai/claude-fable-5-1-scores-tops-artificial-analysis-intelligence-index-with-score-of-66-beats-opus-5-by-3-points/

### 23. 2026-09-03 · GPT-6 arrives · @openai
GPT-6 Astra.
= quarterly (10 Sep). Launched with "welcome to the AGI era", scored 61 at first (level with GPT-5.6 Sol), then drew level with Fable 5.1 after AA's v4.2 overhaul. OpenAI closes from 0.90 to 0.30. The gap shown is the settled one, about a week after launch.
- https://axios.com/2026/09/03/openai-astra-gpt-6-agi-brockman
- https://officechai.com/ai/openai-gpt-6-astra-scores-a-disappointing-61-on-artificial-analysis-intelligence-index-same-as-gpt-5-6-sol/
- https://artificialanalysis.ai/articles/benchmarking-gpt-6-astra

### 24. 2026-09-22 · Opus 5.5 pulls away · @anthropic
Claude Opus 5.5.
58 on AA v4.3, five clear of GPT-6 Astra and Fable 5.1, which were tied at 53. Anthropic's lead goes from 0.30 to 0.85 and the whole field falls back by the same amount.
- https://artificialanalysis.ai/articles/claude-opus-5-5
- https://officechai.com/ai/claude-opus-5-5-creates-5-point-lead-over-gpt-6-astra-jumps-to-top-spot-on-artificial-analysis-intelligence-index/

### 25. 2026-09-30 · Gemini 4 rejoins the fight · @google
Gemini 4 Argon (generally available 13 Oct).
53, level with GPT-6 Astra, at 60% of its cost per task. AA's headline: "Google is back as one of the top three labs". Google goes from last to P3 and Moonshot leaves the track.
- https://artificialanalysis.ai/articles/gemini-4-argon-google-top-three-labs
- https://officechai.com/ai/gemini-4-argon-ties-with-gpt-6-astra-on-artificial-analysis-intelligence-index-at-a-40-cheaper-price/

### 26. 2026-10-12 · Muse Wonder stuns the timing screens · @meta
Muse Wonder, Muse Wonder Full.
Wonder Full scored 56, ahead of GPT-6 Astra (53), and tied for first on AA's Coding Agents Index at 68. It is not on the API. Meta closes to 0.30 behind Google. **This differs from the quarterly snapshot** (0.55 behind Google on 15 Oct): the launch-day numbers are stronger than that gap suggests. See judgement call 2.
- https://artificialanalysis.ai/articles/muse-wonder
- https://venturebeat.com/technology/metas-new-muse-wonder-and-muse-wonder-full-models-achieve-frontier-performance-but-only-the-weaker-one-is-available-via-api

### 27. 2026-10-28 · Gemini 4 Carbon tops the board · @google
Gemini 4 Carbon (limited access), one day after AA Intelligence Index v5.
Carbon led AA v5 and the Arena text board (1528 Elo) but was available only to select cybersecurity companies. Google passes OpenAI for P2, 0.40 behind Anthropic. v5 also re-rated Astra to within a point of Opus 5.5 and dropped Wonder Full to 50, which is why OpenAI edges closer and Meta falls back on this step. See judgement call 4.
- https://www.deeplearning.ai/the-batch/gemini-leads-the-pack-again/
- https://benchlm.ai/models/gemini-4-carbon
- https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5

### 28. 2026-11-09 · Fable 5.2 restores order · @anthropic
Claude Fable 5.2 (Mythos 5.2 for vetted organisations).
65 on the AA board against 60 for Carbon and 57 for Astra, with a 20% API price cut. The lead goes from 0.40 to 1.25. Meta and SpaceX AI are already at their final distances (2.95 and 3.25), so the last step moves only OpenAI.
- https://www.anthropic.com/claude-fable-and-mythos-5-2
- https://venturebeat.com/technology/anthropic-releases-claude-fable-5-2-and-mythos-5-2-pairing-new-record-high-benchmarks-with-20-api-cost-reduction
- https://benchlm.ai/models/claude-fable-5-2

### 29. 2026-11-20 · Clear air up front (closing state, the owner's take)
GPT-6.2 Astra and Sol (17 Nov), Gemini 4 Neon (18 Nov).
Order, gaps and notes are copied from the last snapshot in `index.html`; a script compared them. GPT-6.2 Astra scored 62, second behind Fable 5.2, and Neon 61, so OpenAI moves from 1.45 to 1.00 and retakes P2 while Google holds at 1.25. These two releases are the caption of the closing state instead of events of their own, because a separate event would end on a picture identical to the final one.
- https://artificialanalysis.ai/articles/openai-has-the-2-model-in-the-intelligence-index-with-the-release-of-gpt-6-2-astra-and-gpt-6-2-sol
- https://www.trendingtopics.eu/gpt-6-2-astra-openai-takes-second-place-behind-anthropics-fable-5-2/
- https://artificialanalysis.ai/articles/gemini-4-neon-intelligence-gain

## What finer resolution showed that the quarterly view did not

1. **Three outsiders briefly outscored a top-three lab on launch day.** Grok 4 was first on AA (July 2025). Muse Spark 1.3 was one point ahead of OpenAI's best for one day (2 Sep 2026). Muse Wonder Full was three points ahead of both GPT-6 Astra and Gemini 4 Argon (12 Oct 2026). The quarterly snapshots smoothed all three away.
2. **Google was arguably first for twelve days.** Carbon topped AA v5 from 28 Oct until Fable 5.2 on 9 Nov.
3. **Moonshot's window may be wider than July to September.** Kimi K2.6 (20 Apr 2026) was fourth on AA behind only the big three, ahead of Muse Spark. Kimi K3.1 Pro (23 Oct) was fourth again, ahead of GPT-6 Astra and Gemini 4 Argon, for four days until v5 moved it to ninth.
   - https://artificialanalysis.ai/articles/kimi-k2-6-the-new-leading-open-weights-model
   - https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks
   - https://letsdatascience.com/news/artificial-analysis-index-v5-drops-kimi-k31-pro-from-fourth-563911c6
4. **Anthropic's February to April 2026 lead rests on Claude Code, not on the index.** On 8 April Opus 4.6 was at 53 against 57 for both Gemini 3.1 Pro and GPT-5.4.
5. **The Fable 5 restoration date.** The announcement was 30 June; access returned 1 July.

## Events left out, and where they would go

| Date | Event | Why it is out | If you add it |
|---|---|---|---|
| 2024-12-20 | o1 and o1 pro (5 Dec), o3 preview | No change of order; folded into the R1 event | OpenAI 0, Anthropic +0.50, Google +0.30, Meta +1.35, xAI +0.35 |
| 2025-09-29 | Claude Sonnet 4.5, Sora 2 a day later | No change of order | The quarterly 1 Oct row: OpenAI 0, Anthropic +0.20, Google +0.25, xAI +0.50, Meta +2.60 |
| 2025-12-11 | GPT-5.2, the code red answer | Three-way tie, order unchanged | Google 0, Anthropic +0.10, OpenAI +0.10, xAI +1.20, Meta +2.40 |
| 2026-03-05 | GPT-5.4 | Tied Gemini 3.1 Pro; folded into Muse Spark | Anthropic 0, Google +0.15, OpenAI +0.10, xAI +1.45, Meta +2.10 |
| 2026-07-24 | Claude Opus 5 | Folded into the 2 Sep step | The 16 Jul state with OpenAI at +0.60 |
| 2026-08-12 | Grok 4.6, tied GPT-5.6 Sol at 61 | Minor, and August was quiet otherwise | The 16 Jul state with SpaceX AI third, +0.60 behind OpenAI |
| 2026-10-23 | Kimi K3.1 Pro | Four days at fourth, then re-rated | Would bring Moonshot back for one event |
| 2026-11-17 | GPT-6.2 and Gemini 4 Neon | Merged into the closing state | An event with the final standings, dated 17 or 18 Nov |

## Judgement calls, least sure first

1. **Anthropic leading from February to April 2026 (events 13 to 15).** Gemini 3.1 Pro went four points clear on 19 February and GPT-5.4 matched it in March, yet Anthropic stays P1 by 0.15 to 0.25 on the strength of Claude Code. GPT-5.5 later takes P1 on a three-point lead, so the treatment is not symmetric. Index-first alternative: at event 14 put Google first with Anthropic +0.15 and OpenAI +0.15, and keep Google first at event 15.
2. **Meta capped behind OpenAI and Google at its two peaks (events 22 and 26).** On both days Meta's best model outscored OpenAI's. It is held back because the top variants were limited preview or not on the API and the lineup behind them is thin. If you count launch-day scores at face value, Meta is P2 at event 22 for one day and P2 or P3 at event 26. The 0.30 gap to Google at event 26 is my adjustment; the quarterly file had 0.55.
3. **Grok 4 at P4 (event 9).** AA had xAI first on the day. I closed the gap to 0.50 and kept the order, because the next event (GPT-5, four weeks later) would otherwise have to push xAI back from the front. If you want the highlighted car to overtake, P3 ahead of Anthropic is defensible: Claude 4 Opus was nine index points behind Grok 4.
4. **Carbon and partner-only models (event 27).** Mythos Preview in April counted for almost nothing because only partners had it. Carbon was also restricted, yet it moves Google to P2 here because it topped two public leaderboards and the research file already suggested this step. Stricter alternative: drop event 27 and let Fable 5.2 arrive with OpenAI second throughout.
5. **When the guests leave.** DeepSeek pulls off at GPT-5 (August 2025). In truth it stayed ahead of Meta on quality all through 2025; it leaves because the frontier moved a generation and other Chinese labs took its open-weights role. Moonshot leaves when Gemini 4 Argon restores Google. Both exits follow the owner's guest-car decision, not a specific event that hurt them.
6. **The red flag (event 18).** It is the only event that is not a release. It adds a dramatic compress-and-release, but Anthropic's lead then reappears at a SpaceX AI event (19), explained only by a note. Dropping it costs nothing elsewhere.
7. **Size of the leads.** Fable 5 at 1.30 and Fable 5.2 at 1.25 (to Google) are both bigger than the owner's closing 1.00. Trim them to about 1.0 if November should show the largest lead on the timeline.
8. **GPT-6 at its settled gap (event 23).** The launch-day score was a disappointing 61. Showing that would leave OpenAI at about 0.80 on 3 September, with the catch-up to 0.30 never shown.
9. **Carried over from the quarterly research:** Google at the back in summer 2026, who led in spring 2025, and SpaceX AI's slow fade to the owner's 0.30 behind Meta. See `standings-history.md`.

## Not confirmed in this pass

- Fable 5.2's score of 65 comes from the AA board as read in the quarterly research. Today's searches found the release date (9 Nov) and third-party write-ups, but not an AA article with the number.
- Gemini 3.1 Pro's exact day (19 Feb) is from the quarterly research's sources; today's search confirmed only "February 2026".
- Whether Grok 4.5 and GPT-5.6 Sol launched one day apart or on the same day. Sources differ.
- 2025 dates were not re-fetched. They match the quarterly research and my own knowledge.
