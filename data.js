/* ════════════════════════════════════════════════════════════════════════
   FASTEST LAB · the data. Everything the page shows comes from this file.
   ════════════════════════════════════════════════════════════════════════

   Three blocks, most-edited first:

     SNAPSHOTS   who was where, and when      a plain-text table
     LABS        who the labs are             name, sub, livery, rebrands
     LOGOS       the marks on the cars        SVG path data

   Open index.html again after saving. No build step, no server needed.
   If something is wrong the page keeps running with what it could read,
   shows a yellow warning at the top, and the browser console names every
   problem: the snapshot, the lab and what to write instead.


   SNAPSHOTS · a worked example
   ────────────────────────────

       2026-11-20  Clear air up front
         anthropic            Clear leader.
         openai     +1.00     Still second.
         google     +0.25     Right on OpenAI's gearbox.

   • A line that starts with a date (YYYY-MM-DD) opens a snapshot. The rest
     of that line is the headline. Add (demo) at the end to flag the
     snapshot as an illustrative guess.
   • Every line below it is one car, in finishing order, P1 first:

         lab id      gap to the car AHEAD      note

     The gap is in seconds: +0.25 is wheel to wheel, +1.00 is a clear lead.
     Bigger number = more empty road. The leader has no gap.
   • A lab that isn't listed isn't on track at that date. In a replay it
     comes up the kerb from behind at the first snapshot that lists it,
     and pulls off onto the kerb when a snapshot stops listing it.
   • Snapshots can be in any order; the page sorts them by date. Indentation
     and column alignment are only for your eyes.
   • Lines starting with # are comments. Blank lines are ignored.
   • One-off override for a single car in a single snapshot, after the note:

         spacexai   +0.30     Close behind Meta.   | name=X.AI | sub=Grok 5

     (name, sub and logo can be overridden. Lasting changes belong in LABS.)
   • The only character you can't use is the backtick ` because it ends
     the block.

   Generated data can use the same table, or the older object form, which
   the page also accepts unchanged:

       var SNAPSHOTS = [
         { date: '2026-11-20', headline: 'Clear air up front', standings: [
           { lab: 'anthropic', gap: 0,    note: 'Clear leader.' },
           { lab: 'openai',    gap: 1.00, note: 'Still second.' },
         ] },
       ];
   ════════════════════════════════════════════════════════════════════════ */

var SNAPSHOTS = `

# The two (demo) snapshots are placeholder guesses so the timeline has
# somewhere to go. Retune or delete them.

2025-11-20  Three-way knife fight  (demo)
  google                Gemini has the moment.
  anthropic   +0.25     Tucked into the slipstream.
  openai      +0.45     Third, but only just.
  spacexai    +1.00     Quick in a straight line.
  meta        +1.50     A very long pit stop.

2026-05-20  Anthropic breaks the tow  (demo)
  anthropic             Out front and pulling away.
  openai      +0.55     Leading the chase.
  google      +0.35     Lost the lead, kept the pace.
  spacexai    +1.10     Holding fourth, for now.
  meta        +0.70     Muse is finding lap time.

# The real one: the owner's take, November 2026.
2026-11-20  Clear air up front
  anthropic             Clear leader.
  openai      +1.00     Still second.
  google      +0.25     Caught up a lot. Right on OpenAI's gearbox.
  meta        +1.70     Muse did well. Just ahead of SpaceX AI.
  spacexai    +0.30     Close behind Meta.

`;

/* ════════════════════════════════════════════════════════════════════════
   LABS · the registry. One entry per lab that has ever been on track.
   ════════════════════════════════════════════════════════════════════════

   id        the key on the left; it is what SNAPSHOTS lines refer to
   name      what the label says
   sub       the small line under it (model family)
   color     car body          accent   second livery colour
   stripes   optional list of colours for the nose and rear wing
   logo      which LOGOS entry to paint on the car (default: the lab's id)
   changes   rebrands. Each one says "from this date on, these fields are
             different": any of name, sub, logo. Add a line, keep the old
             ones, and earlier snapshots keep showing the old identity.

   A lab can sit here without appearing in any snapshot; it just never
   drives. To add a lab: add it here, add its mark to LOGOS (optional, the
   car runs with a blank roundel without one), then list it in a snapshot.
   ════════════════════════════════════════════════════════════════════════ */

var LABS = {
  anthropic: { name: 'Anthropic', sub: 'Claude',            color: '#D9774F', accent: '#F6EDE0' },
  openai:    { name: 'OpenAI',    sub: 'GPT',               color: '#12A37F', accent: '#F2FFFA' },
  google:    { name: 'Google',    sub: 'Gemini · DeepMind', color: '#F3F5F9', accent: '#3B82F6',
               stripes: ['#4285F4', '#EA4335', '#FBBC05', '#34A853'] },
  meta:      { name: 'Meta',      sub: 'Llama',             color: '#0A6CFF', accent: '#EAF2FF',
               changes: [
                 { from: '2026-04-08', sub: 'Muse' },                 // Muse Spark replaces Llama
               ] },
  spacexai:  { name: 'xAI',       sub: 'Grok',              color: '#14161B', accent: '#C3CAD3', logo: 'xai',
               changes: [
                 { from: '2026-07-06', name: 'SpaceX AI', sub: 'Grok · ex-xAI', logo: 'spacexai' },
               ] },

  // Registered and ready, not in any snapshot yet (data-test.js uses them).
  deepseek:  { name: 'DeepSeek',  sub: 'DeepSeek',          color: '#1B2559', accent: '#5B7BFF' },
  mistral:   { name: 'Mistral',   sub: 'Le Chat',           color: '#FFB300', accent: '#1A1410',
               stripes: ['#FFD800', '#FFAF00', '#FF8205', '#FA500F', '#E10500'] },
};

/* ════════════════════════════════════════════════════════════════════════
   LOGOS · the labs' official marks, inlined so the page works offline.
   ════════════════════════════════════════════════════════════════════════

   Path data is copied unmodified from the source files noted on each
   entry and keeps the brand's own colours and proportions. Each mark is
   drawn on the car's engine-cover roundel and in the chip beside its name.

   box    the mark's bounding box in its source file: [x, y, width, height]
   size   how much of the roundel's diameter the mark's longer side spans
   bg     roundel colour, when the livery accent would clash with the mark
   paths  [fill, path data] pairs; a fill is a colour or a linear gradient
   ════════════════════════════════════════════════════════════════════════ */

var LOGOS = {
  // Anthropic mark, in the brand's dark slate.
  // Source: https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/anthropic.svg (simpleicons.org)
  anthropic: { box: [0, 3.541, 24, 16.918], size: .7, paths: [
    ['#141413', 'M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z'],
  ] },
  // OpenAI "blossom" symbol (2025 redraw), black on white.
  // Source: https://commons.wikimedia.org/wiki/File:OpenAI_logo_2025_(symbol).svg
  openai: { box: [1.676, 1.75, 16.65, 16.5], size: .74, paths: [
    ['#000000', 'M11.248 18.25q-.825 0-1.568-.314a4.3 4.3 0 0 1-1.32-.874 4 4 0 0 1-1.304.214 4 4 0 0 1-2.046-.544 4.27 4.27 0 0 1-1.518-1.485 4 4 0 0 1-.56-2.095q0-.48.131-1.04A4.4 4.4 0 0 1 2.04 10.71a4.07 4.07 0 0 1 .017-3.4 4.2 4.2 0 0 1 1.056-1.418 3.8 3.8 0 0 1 1.6-.842 3.9 3.9 0 0 1 .76-1.683q.593-.759 1.451-1.188a4.04 4.04 0 0 1 1.832-.429q.825 0 1.567.313.742.314 1.32.875a4 4 0 0 1 1.304-.215q1.106 0 2.046.545a4.14 4.14 0 0 1 1.501 1.485q.578.941.578 2.095 0 .48-.132 1.04.66.61 1.023 1.419.363.792.363 1.666 0 .892-.38 1.717a4.3 4.3 0 0 1-1.072 1.435 3.8 3.8 0 0 1-1.584.825 3.8 3.8 0 0 1-.775 1.683 4.06 4.06 0 0 1-1.436 1.188 4.04 4.04 0 0 1-1.832.429m-4.076-2.062q.825 0 1.435-.347l3.103-1.782a.36.36 0 0 0 .164-.313v-1.42L7.881 14.62a.67.67 0 0 1-.726 0l-3.118-1.798a.5.5 0 0 1-.017.115v.198q0 .841.396 1.551.413.693 1.139 1.089a3.2 3.2 0 0 0 1.617.412m.165-2.69a.4.4 0 0 0 .181.05q.083 0 .165-.05l1.238-.71-3.977-2.31a.7.7 0 0 1-.363-.643v-3.58q-.825.362-1.32 1.122a2.9 2.9 0 0 0-.495 1.65q0 .809.413 1.55.412.743 1.072 1.123zm3.91 3.663q.875 0 1.585-.396a2.96 2.96 0 0 0 1.534-2.64v-3.564a.32.32 0 0 0-.165-.297l-1.254-.726v4.604a.7.7 0 0 1-.363.643l-3.119 1.799a3 3 0 0 0 1.783.577m.627-6.039V8.878L10.01 7.822 8.129 8.878v2.244l1.881 1.056zM7.057 5.859a.7.7 0 0 1 .363-.644l3.119-1.798a3 3 0 0 0-1.782-.578q-.874 0-1.584.396A2.96 2.96 0 0 0 6.05 4.324a3.07 3.07 0 0 0-.396 1.551v3.547q0 .199.165.314l1.237.726zm8.383 7.887q.825-.364 1.303-1.123.495-.758.495-1.65a3.15 3.15 0 0 0-.412-1.55q-.413-.743-1.073-1.123l-3.086-1.782q-.099-.065-.181-.049a.3.3 0 0 0-.165.05l-1.238.692 3.993 2.327a.6.6 0 0 1 .264.264.64.64 0 0 1 .1.363zm-3.317-8.382a.63.63 0 0 1 .726 0l3.135 1.831v-.297q0-.792-.396-1.501a2.86 2.86 0 0 0-1.105-1.155q-.71-.43-1.65-.43-.825 0-1.436.347L8.294 5.941a.36.36 0 0 0-.165.314v1.418z'],
  ] },
  // Google "G" in its four brand colours, on white as Google shows it.
  // Source: https://commons.wikimedia.org/wiki/File:Google_%22G%22_logo.svg (from google.com)
  google: { box: [1, 1, 22, 22], size: .64, bg: '#FFFFFF', paths: [
    ['#4285F4', 'M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'],
    ['#34A853', 'M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'],
    ['#FBBC05', 'M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'],
    ['#EA4335', 'M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'],
  ] },
  // Meta symbol with its official blue gradients.
  // Source: https://commons.wikimedia.org/wiki/File:Meta_Platforms_Inc._logo_(cropped).svg (from about.meta.com/brand/resources)
  meta: { box: [0, 0, 287.56, 191], size: .76, paths: [
    ['#0081fb', 'm31.06,125.96c0,10.98 2.41,19.41 5.56,24.51 4.13,6.68 10.29,9.51 16.57,9.51 8.1,0 15.51-2.01 29.79-21.76 11.44-15.83 24.92-38.05 33.99-51.98l15.36-23.6c10.67-16.39 23.02-34.61 37.18-46.96 11.56-10.08 24.03-15.68 36.58-15.68 21.07,0 41.14,12.21 56.5,35.11 16.81,25.08 24.97,56.67 24.97,89.27 0,19.38-3.82,33.62-10.32,44.87-6.28,10.88-18.52,21.75-39.11,21.75l0-31.02c17.63,0 22.03-16.2 22.03-34.74 0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85,0-26.8,11.2-40.23,31.17-7.14,10.61-14.47,23.54-22.7,38.13l-9.06,16.05c-18.2,32.27-22.81,39.62-31.91,51.75-15.95,21.24-29.57,29.29-47.5,29.29-21.27,0-34.72-9.21-43.05-23.09-6.8-11.31-10.14-26.15-10.14-43.06z'],
    [{ x1: 61, y1: 117, x2: 259, y2: 127, stops: [[0, '#0064e1'], [.4, '#0064e1'], [.83, '#0073ee'], [1, '#0082fb']] }, 'm24.49,37.3c14.24-21.95 34.79-37.3 58.36-37.3 13.65,0 27.22,4.04 41.39,15.61 15.5,12.65 32.02,33.48 52.63,67.81l7.39,12.32c17.84,29.72 27.99,45.01 33.93,52.22 7.64,9.26 12.99,12.02 19.94,12.02 17.63,0 22.03-16.2 22.03-34.74l27.4-.86c0,19.38-3.82,33.62-10.32,44.87-6.28,10.88-18.52,21.75-39.11,21.75-12.8,0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71l-25.79-43.08c-12.94-21.62-24.81-37.74-31.68-45.04-7.39-7.85-16.89-17.33-32.05-17.33-12.27,0-22.69,8.61-31.41,21.78z'],
    [{ x1: 45, y1: 139, x2: 45, y2: 66, stops: [[0, '#0082fb'], [1, '#0064e0']] }, 'm82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78-12.33,18.61-19.88,46.33-19.88,72.95 0,10.98 2.41,19.41 5.56,24.51l-26.48,17.44c-6.8-11.31-10.14-26.15-10.14-43.06 0-30.75 8.44-62.8 24.49-87.55 14.24-21.95 34.79-37.3 58.36-37.3z'],
  ] },
  // SpaceXAI symbol (the July 2026 rebrand of xAI: SpaceX's swooping X with the "A" set inside it).
  // Black on white: the mark is thin and wide, so it needs all the contrast it can get at this size.
  // Source: https://commons.wikimedia.org/wiki/File:SpaceXAI_2026_logo.svg (from x.ai)
  spacexai: { box: [674.732, 388.668, 758.458, 289.8], size: .9, bg: '#FFFFFF', paths: [
    ['#000000', 'M1433.19 388.934C1345.69 396.068 1001.73 438.71 763.235 678.467H674.732L684.62 668.612C734.53 620.395 955.373 416.045 1433.19 388.668V388.934Z'],
    ['#000000', 'M1133.66 678.467H1064.29L927.618 578.979C940.213 571.058 952.888 563.515 965.603 556.33L1133.66 678.467Z'],
    ['#000000', 'M1022.8 678.468H953.463L932.43 663.169H814.998C823.265 655.828 831.635 648.702 840.092 641.784H902.996L870.444 618.106C882.079 609.448 893.843 601.155 905.701 593.211L1022.8 678.468Z'],
    ['#000000', 'M770.433 495.02L823.901 533.876C810.594 541.712 798.139 549.468 786.514 557.055L701.158 494.986L770.433 495.02Z'],
  ] },
  // xAI mark as used until the July 2026 rebrand, black on white like its successor.
  // Source: https://commons.wikimedia.org/wiki/File:XAI-Logo.svg (from x.ai, public domain).
  // The file's four polygons, written as paths with the coordinates unchanged.
  xai: { box: [0, 0, 466.04, 516.93], size: .7, bg: '#FFFFFF', paths: [
    ['#000000', 'M0.12 182.71L234.14 516.92L338.15 516.92L104.13 182.71Z'],
    ['#000000', 'M0 516.92L104.08 516.92L156.08 442.67L104.04 368.34Z'],
    ['#000000', 'M466.04 0L361.96 0L182.1 256.86L234.15 331.18Z'],
    ['#000000', 'M380.78 516.92L466.04 516.92L466.04 37.16L380.78 158.92Z'],
  ] },
  // DeepSeek whale in the brand blue, on white.
  // Source: https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/deepseek.svg (simpleicons.org)
  deepseek: { box: [0, 3.169, 24, 17.661], size: .76, bg: '#FFFFFF', paths: [
    ['#4D6BFE', 'M23.748 4.651c-.254-.124-.364.113-.512.233-.051.04-.094.09-.137.137-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.155-.708-.311-.955-.65-.172-.24-.219-.509-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.094.172.187.129.323-.082.28-.18.553-.266.833-.055.179-.137.218-.328.14a5.5 5.5 0 0 1-1.737-1.179c-.857-.828-1.631-1.743-2.597-2.46a12 12 0 0 0-.689-.47c-.985-.957.13-1.743.387-1.836.27-.098.094-.433-.778-.428-.872.003-1.67.295-2.687.685a3 3 0 0 1-.465.136 9.6 9.6 0 0 0-2.883-.101c-1.885.21-3.39 1.1-4.497 2.622C.082 8.776-.231 10.854.152 13.02c.403 2.284 1.568 4.175 3.36 5.653 1.857 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.132-.284 4.994-1.86.47.234.962.328 1.78.398.629.058 1.235-.031 1.705-.129.735-.155.684-.836.418-.961-2.155-1.004-1.682-.595-2.112-.926 1.095-1.295 2.768-3.598 3.284-6.733.05-.346.115-.834.108-1.114-.004-.171.035-.238.23-.257a4.2 4.2 0 0 0 1.545-.475c1.397-.763 1.96-2.016 2.093-3.517.02-.23-.004-.467-.247-.588M11.58 18.168c-2.088-1.642-3.101-2.183-3.52-2.16-.39.024-.32.472-.234.763.09.288.207.487.371.74.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.168-1.361-.801-2.5-1.86-3.301-3.306-.775-1.393-1.225-2.888-1.299-4.482-.02-.385.094-.522.477-.592a4.7 4.7 0 0 1 1.53-.038c2.131.311 3.946 1.264 5.467 2.774.868.86 1.525 1.887 2.202 2.89.72 1.066 1.494 2.082 2.48 2.915.348.291.626.513.892.677-.802.09-2.14.109-3.055-.615zm1.001-6.44a.306.306 0 0 1 .415-.287.3.3 0 0 1 .113.074.3.3 0 0 1 .086.214c0 .17-.136.307-.308.307a.303.303 0 0 1-.306-.307m3.11 1.596c-.2.081-.4.151-.591.16a1.25 1.25 0 0 1-.798-.254c-.274-.23-.47-.358-.551-.758a1.7 1.7 0 0 1 .015-.588c.07-.327-.007-.537-.238-.727-.188-.156-.426-.199-.689-.199a.6.6 0 0 1-.254-.078.253.253 0 0 1-.114-.358 1 1 0 0 1 .192-.21c.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.392.451.462.576.685.915.176.264.336.536.446.848.066.194-.02.353-.25.45'],
  ] },
  // Mistral AI "M" in the brand orange, on the brand's cream.
  // Source: https://cdn.jsdelivr.net/npm/simple-icons@16.38.0/icons/mistralai.svg (simpleicons.org)
  mistral: { box: [0, 3.429, 24, 17.143], size: .7, bg: '#FFFAEB', paths: [
    ['#FA520F', 'M17.143 3.429v3.428h-3.429v3.429h-3.428V6.857H6.857V3.43H3.43v13.714H0v3.428h10.286v-3.428H6.857v-3.429h3.429v3.429h3.429v-3.429h3.428v3.429h-3.428v3.428H24v-3.428h-3.43V3.429z'],
  ] },
};
