# Phase 1: who to listen to (sonnet)

Window: Nov 2024 to Nov 2026. Today is 2026-11-21.

**Method note.** I worked from web-search results and snippets, not full page reads. Where a claim comes from a summary, an aggregator or a single post, I say so. "Unverified" means I could not confirm it. Ratings are 1 to 5 and are about how much weight to give the source when ordering labs, not about how good the source is in general.

**The index is the backbone, not a voice.** Artificial Analysis (AA) comes first because the owner's method starts there. The other entries are the "informed opinion" layer.

## The list

### 1. Artificial Analysis (the backbone)
- **Who:** Independent benchmarking company. Founders are Micah Hill-Smith and George Cameron. It publishes the Intelligence Index, plus cost, speed and a Coding Agent Index.
- **Where:** [artificialanalysis.ai](https://artificialanalysis.ai/about), X.
- **Good at:** A single comparable number for raw reasoning, agents and coding, with cost and token data. Versions change. v4.0 was a big overhaul to 10 evals ([VentureBeat](https://venturebeat.com/technology/artificial-analysis-overhauls-its-ai-intelligence-index-replacing-popular)). v4.1 landed in June 2026 and v4.3 changed Terminal-Bench and the agent evals ([v4.3](https://artificialanalysis.ai/es/articles/artificial-analysis-intelligence-index-v4-3)). v5.0 arrived 2026-10-27 ([v5](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5)). Old scores get re-scored, so only compare within one version.
- **Lean / conflicts:** It states a strict policy that providers cannot pay for results. Seed money came from AI Grant, run by Nat Friedman and Daniel Gross ([f4.fund](https://f4.fund/startups/artificialanalysis)). I found no controversy. Its weakness is that some evals are public, so labs can optimise for them, and the index can miss feel and harness quality.
- **Trust: 4.** The best single dated measurement, but it must be version-pinned.

### 2. Simon Willison
- **Who:** Independent developer and co-creator of Django. Runs a daily weblog and builds the `llm` CLI.
- **Where:** [simonwillison.net](https://simonwillison.net/2026/jun/9/claude-fable-5), Mastodon and X.
- **Good at:** Fast, honest first impressions with reproducible prompts, pricing and limits, and the open and local model scene. His Fable 5 write-up came after about 5.5 hours of testing ([Jun 9](https://simonwillison.net/2026/jun/9/claude-fable-5)). He flags when he has not tested a model, as with Opus 5 on [Jul 24](https://simonwillison.net/2026/Jul/24/introducing-claude-opus-5/). He also questions his own pelican test ([pelicanmaxxing](https://simonwillison.net/2026/jul/22/are-ai-labs-pelicanmaxxing), [Kimi K3](https://simonwillison.net/2026/jul/16/kimi-k3)).
- **Lean / conflicts:** No lab affiliation found. He discloses early access when he has it. He likes open and local models, and his coding view is Python and CLI shaped.
- **Trust: 5.** The most consistently calibrated and transparent voice I found.

### 3. Every (Dan Shipper, Katie Parrott and team)
- **Who:** San Francisco media and software company. Its "Vibe Check" series is hands-on, day-zero model review by people who run the models daily.
- **Where:** [every.to/vibe-check](https://every.to/vibe-check/opus-5), newsletter, X.
- **Good at:** Real writing, agent and coding work in a team's own workflows, and how a model fits existing skills and plugins. Their Opus 5 review (Jul 2026) was titled "Brilliant in Flashes, Frustrating in Practice" and reports a rough first week ([Opus 5](https://every.to/vibe-check/opus-5)). They also cover Gemini, o3 and others ([o3 pro](https://every.to/vibe-check/o3-pro-vibe-check-a-slow-steady-last-resort)).
- **Lean / conflicts:** Shipper says Every gets early access and that labs ask for their opinion pre-launch ([Platformer](https://platformer.news/every-dan-shipper-interview-ai-writing)). In 2025 Shipper discussed "why Anthropic dominates coding" ([TBPN digest](https://tbpn-digest.vercel.app/story/2025-05-22/dan-shipper-on-claude-4-everys-2m-sif-seed-round-and-why-anthropic-dominates-coding)). Reid Hoffman led a 2025 funding round. I found no evidence that a lab invests in Every or sponsors it. Day-zero takes can shift after a week.
- **Trust: 4.** Very good practitioner signal, with a mild Anthropic and access tilt. Weigh the week-two follow-ups more than day zero.

### 4. Theo (t3.gg)
- **Who:** Theo Browne, YouTuber and CEO of Ping Labs ([YC](https://www.ycombinator.com/companies/ping-gg)), which makes T3 Chat and T3 Code.
- **Where:** YouTube (t3.gg), X.
- **Good at:** Coding models in real app work, price and value, and harness quality. He is also blunt about pricing. His 2026 tier list put Fable 5 alone at the top and gave Opus 5 and Sonnet 5 a D, per secondary coverage ([AI Daily Brief](https://aidailybrief.beehiiv.com/p/the-ai-model-tier-list), [Digg](https://digg.com/tech/r3275l03)). He himself says one tier list hides cost, speed and token-efficiency axes.
- **Lean / conflicts:** He sells a product that resells and orchestrates models, so cost and speed shape his taste. He is an entertainer, so takes can be loud. I found no confirmed lab sponsorship. One post alleges OpenAI payment ([Digg](https://digg.com/ai/p8kxlsuo)), which is unverified. He criticises Anthropic, OpenAI and Google at different times, so no single favourite shows.
- **Trust: 3.** Good coding and value signal, but vibes-driven and commercially exposed. Use him to break ties on coding and price, not to set order.

### 5. Matt Shumer
- **Who:** CEO of OthersideAI (HyperWrite). Runs Shumer Capital, with stakes in Groq, Etched, OpenRouter and others per his profile ([shumer.dev](https://shumer.dev/)).
- **Where:** X, shumer.dev.
- **Good at:** Early-adopter excitement and what changed for a heavy user. His viral Feb 2026 essay "Something Big Is Happening" got tens of millions of views ([Fortune critique](https://fortune.com/2026/02/20/something-big-is-happening-in-ai-but-thats-the-only-thing-matt-shumer-got-right/)).
- **Lean / conflicts:** Reflection 70B (Sept 2024) was widely questioned. Independent tests, including AA's, could not reproduce his claims, and he later acknowledged the benchmarks were not reached ([VentureBeat](https://venturebeat.com/ai/new-open-source-ai-leader-reflection-70bs-performance-questioned-accused-of-fraud), [Decoder](https://the-decoder.com/worlds-best-open-source-model-falls-short-of-promised-performance/)). Critics cite a hype history. He is an investor in AI infrastructure. In Nov 2025 he said he had no Anthropic early access. Digg pages describing early-access reviews of Fable models are unverified.
- **Trust: 2.** Fine as a "what are heavy users excited about" pulse. His record on claims and his hype tone mean I would not let him move a rank on his own.

### 6. Zvi Mowshowitz
- **Who:** Writer of "Don't Worry About the Vase", a weekly roundup that reads system cards and collects reactions.
- **Where:** [thezvi.substack.com](https://thezvi.substack.com), LessWrong. Examples: Opus 5 system card and reactions posts, [Kimi K3](https://thezvi.substack.com/p/on-kimi-k3-its-capabilities-and-related).
- **Good at:** Aggregating who said what across X, benchmarks and system cards, and catching gaps between marketing and practice. Not a hands-on coding tester.
- **Lean / conflicts:** Strong AI-safety lens, which colours emphasis. No lab ties found. Long and dense.
- **Trust: 4.** Best "sentiment of the field" aggregator, with the sources linked.

### 7. Ethan Mollick (One Useful Thing)
- **Who:** Wharton professor and writer on how people use AI at work.
- **Where:** [oneusefulthing.org](https://www.oneusefulthing.org/archive), X, LinkedIn. Example: [GPT-5.5 review, Apr 2026](https://velikov-mihail.github.io/ai-econ-wiki/summaries/sign-of-future-gpt55/) (third-party summary). He keeps an updated "which AI to use" guide.
- **Good at:** Knowledge work, the jagged frontier and a clear read on the consumer product tier. Weaker on deep coding.
- **Lean / conflicts:** Gets early access and uses it openly. I found no financial tie, but did not check his disclosures.
- **Trust: 4.** Credible and fair, but less relevant to coding-lead calls.

### 8. Nathan Lambert (Interconnects)
- **Who:** Post-training researcher at Ai2, writes Interconnects and co-hosts a podcast.
- **Where:** [interconnects.ai](https://podbay.fm/p/interconnects), X.
- **Good at:** Open-weight and Chinese models and the open-closed gap. On Kimi K3 he put the gap at about 3 to 5 months, per secondary coverage ([aiweekly](https://aiweekly.co/alerts/moonshots-kimi-k3-compresses-open-weight-gap-to-3-5-months)). I did not read the posts themselves.
- **Lean / conflicts:** Works at an open-model nonprofit, so he favours open weights. That is a useful counterweight to the closed-lab focus elsewhere.
- **Trust: 4.** The right person for deciding how strong Moonshot, DeepSeek and Qwen entries should be.

### 9. Epoch AI
- **Who:** Nonprofit AI research group. Runs the Benchmarking Hub and the Epoch Capabilities Index (ECI).
- **Where:** [epoch.ai](https://epoch.ai/blog/capabilities-index), [ECI frontier trend](https://epoch.ai/data-insights/eci-frontier-trend), [transparency page](https://epoch.ai/about/transparency).
- **Good at:** An independent composite that stitches benchmarks over time. This is the best cross-check on AA because it uses different methods. ECI has moved to a Bayesian model and refits, so scores shift. Third-party write-ups say the top models are within error bars.
- **Lean / conflicts:** Funding is disclosed on its transparency page. Pre-launch tests use only Epoch's own benchmarks and can change.
- **Trust: 4.** Use as the second index.

### 10. METR
- **Who:** Nonprofit evaluator of autonomous capability. Measures task-completion time horizons.
- **Where:** [metr.org/time-horizons](https://metr.org/time-horizons/), [TH1.1 post, Jan 2026](https://metr.org/blog/2026-1-29-time-horizon-1-1).
- **Good at:** Long-task agent autonomy, a different axis from the indexes. METR itself says its suite has a ceiling problem for the newest models.
- **Lean / conflicts:** Safety-oriented. Pre-deployment access to labs can limit what it publishes. Narrow scope.
- **Trust: 3.** Reliable, but it measures one dimension and has few dated points.

### 11. SemiAnalysis (Dylan Patel and team)
- **Who:** Research and consulting firm on AI hardware and economics. Also writes on coding assistants.
- **Where:** [newsletter.semianalysis.com](https://newsletter.semianalysis.com/i/195395591/gpt-55), [Kimi K3 piece](https://newsletter.semianalysis.com/p/kimi-k3-the-manos-the-mythos-the).
- **Good at:** Which model a heavy team really uses daily. The GPT-5.5 piece says Opus had been their daily driver before that release (paywalled, so I saw only the opening).
- **Lean / conflicts:** Sells to hyperscalers and chip buyers, and the InferenceX benchmark lists vendor supporters. That affects hardware coverage more than model takes. Paywalled.
- **Trust: 3.** Good for who-switched-to-what, thin on systematic model comparisons.

### 12. AI Explained (Philip)
- **Who:** YouTuber and podcaster who built SimpleBench, a private commonsense-reasoning benchmark.
- **Where:** YouTube, [podcast](https://podcasts.apple.com/us/podcast/id1776606099), [SimpleBench](https://www.datalearner.com/en/benchmarks/simple-bench).
- **Good at:** Careful reasoning evaluations and calling out benchmark theatre ("Welcome to the Vibe Era"). Covered Mythos, Opus 4.7, GPT-5.4/5.5 and the 5.6 Sol/Terra/Luna set per listings. I could not confirm episode dates.
- **Lean / conflicts:** Independent. Narrow focus on reasoning.
- **Trust: 4.** Good private-benchmark check against the index.

### 13. Latent Space / swyx (AINews)
- **Who:** Podcast and daily AINews digest for AI engineers.
- **Where:** [latent.space](https://latent.space/p/ainews-gpt-6-astra-openais-biggest), [Fable 5 and Mythos issue](https://latent.space/p/ainews-anthropic-claude-fable-5-mythos).
- **Good at:** The dated record of releases, pricing and benchmark claims. Best for building the timeline, less for judging.
- **Lean / conflicts:** Industry insider with lab guests. I did not verify the hosts' current employer or investments.
- **Trust: 4 as a dating source, 3 as a judge.**

### 14. Andrej Karpathy
- **Who:** Researcher and educator, ex-OpenAI and ex-Tesla, now running Eureka Labs.
- **Where:** X, YouTube, talks. His Dec 2025 to Mar 2026 posts say coding agents crossed a usefulness threshold ([Decoder](https://the-decoder.com/andrej-karpathy-says-programming-is-unrecognizable-now-that-ai-agents-actually-work/)).
- **Good at:** Naming real shifts in agentic coding. Rarely ranks models head to head.
- **Lean / conflicts:** Former OpenAI. No current lab ties found.
- **Trust: 3.** Strong for moment detection, weak for ordering.

## Considered and not recommended
- **LMArena (now Arena):** crowd preference, with documented style and sampling bias ([Leaderboard Illusion](https://arxiv.org/html/2504.20879v2)). Use only as a sanity check on chat feel.
- **Gary Marcus:** useful skeptic on benchmark claims ([GPT-6 Astra take](https://garymarcus.substack.com/p/hot-take-on-gpt-6-astra), [ARC harness story](https://thenextweb.com/news/openai-astra-arc-agi-3-harness-62-7-vs-99-9-benchmark-revisions)), but a fixed prior against hype makes him a poor ranker.

## Recommended top 6 (on top of the AA index)
1. **Simon Willison** (5): calibrated, transparent, dated first impressions.
2. **Every** (4): day-zero hands-on work in real workflows. Watch the access and Anthropic tilt.
3. **Zvi Mowshowitz** (4): best aggregator of everyone else, and catches system-card caveats.
4. **Epoch AI** (4): the independent second index to cross-check AA, especially across version changes.
5. **Nathan Lambert** (4): the judge for open and Chinese labs, e.g. Moonshot.
6. **Theo** (3): coding and value tie-breaker. Discount the loud tier lists.

Alternates: AI Explained (4, private reasoning benchmark), Mollick (4, knowledge work), SemiAnalysis (3). Matt Shumer (2) stays on the list as a pulse only.

## Caveats to carry into Phase 2
- Many 2026 model names and dates (Fable, Astra, Kimi K3, Gemini 4 and so on) came from search snippets and aggregators. Check each against a primary page before citing it.
- I could not reach AA's historical v2/v3 tables for late 2024 and early 2025. Phase 2 will need archived pages for that stretch.
