# PLAN — beneficial.technology (worldflight hybrid)

## Grammar decision
**Worldflight (flight) → landed grounded page (act/standard sections).** A hybrid,
chosen deliberately.

Why worldflight for the spine: the brief's thesis is *one system, no silos*, and
the structural fork answer was explicitly "one unbroken world." Worldflight is the
only grammar with no seams, because there are no blocks — one fixed stage, copy
windowed over it.

Why the other seven lost: all act/chapter grammars (filmic one-shot, editorial,
gallery, kinetic-type, pinned-scrollytelling, split-screen, working-surface)
*cut the page into blocks*, which reproduces exactly the counsel/ops silo BT
exists to remove. Filmic one-shot — the one the skill's first four builds all used
— would have been the lazy pick; it was rejected on thesis, not taste.

**The divergence, stated plainly:** a *pure* worldflight cannot carry the
interactive utility the brief requires (Depends-On explorer, 5 profile cards,
visible pricing). So the flight carries the argument and then **resolves to a held
final frame**, below which the document proper begins: still, grounded sections.
This is faithful to the energy curve (fly, then land and go calm) and keeps all
video on the cinematic half only, which the performance budget needs.

## Fingerprint gate
Registry `FINGERPRINTS.md` is **empty** (first build in this workspace). The gate
requires ≥4 of 6 dimensions distinct from every existing row; with zero rows it
passes trivially. Recorded dimensions for this build (seed the registry on ship):

| Dim | This build |
|---|---|
| Grammar | worldflight → landed grounded page (hybrid) |
| Nav treatment | no persistent nav during flight; a thin waypoint rail (Surface/Gap/Layer/Built/Whole); grounded nav appears only after landing |
| Hero device | single-axis concrete push-in, Salk/Kahn world, copy on an empty field |
| Act-sequence shape | 5-leg flight (silent→peak→resolve) then 5 still document sections |
| Close pattern | zoom-out to whole structure, held, then grounded CTA that resolves |
| Signature move | "Depends On" dependency-tree explorer (ambiguity as product) |

## Flight plan + score (the cinematic half)
One pace: hold `rate = weight / clip_seconds` within a few percent. Worldflight
tuning: `data-sc-lerp="0.12"`, `data-sc-seam="0.16"`.

| Leg | Waypoint | Feeling | Device | Weight | Copy |
|---|---|---|---|---|---|
| L1 | Surface | recognition | slow push-in, empty concrete axis | 1.0 | hero line (empty field) |
| L2 | The gap | unease | dolly that widens the void between two masses | 1.1 | windowed: the cost |
| L3 | The layer | relief → **PEAK** | camera holds; the span assembles across the void | **1.7** | windowed: "someone owns the seam" |
| L4 | What's built | confidence | travel along the finished span | 1.2 | windowed: artifacts as outputs |
| L5 | Whole | readiness | pull back to the whole structure, held | 1.2 | finale line |

Peak = L3, largest span, preceded by the quiet of L2. Four+ distinct devices, no
family twice in a row, ≤2 scrub-heavy legs doing "texture" (none here are
gratuitous). Total flight ≈ 6.2vh + 1 spacer. Deliberately NOT in the
6–7 acts @ ~13.6vh band the skill flags as a fingerprint.

## Grounded sections (the landed half — document flow, restrained)
Reuse the site's Obsidian-Lime tokens so it reads as one site.
1. **Depends On** — the signature move. Interactive, hand-built trees. (See DEPENDS-ON.md; UPL-gated on Tyler.)
2. **Who it's for** — 5 founder profiles.
3. **How it works** — tiers, prices visible.
4. **The posture** — "Not a law firm…" one sentence, real weight.
5. **Close** — the whole-structure frame echo + "Book a scoping call".

## Performance budget (hard, set before design — BT sells CWV)
- **LCP ≤ 2.0s on a mid phone.** LCP element is the **hero poster (WebP), never a
  video.** Clips are `preload="none"`, fetched only within ±1.6vh.
- **Total shipped video ≤ ~9MB desktop / ≤ ~5MB mobile.** 5 legs × ~1.5–1.8MB
  mobile. GOP 8 desktop / 4 mobile (scrub encode).
- **CLS ≈ 0.** Spacer sized once at mount; `fonts.ready` relayout; poster matches
  clip frame exactly (pulled from encoded mp4).
- **Reduced motion ships the whole story** with zero clips fetched — posters
  cross-dissolve through the same seams, same copy windows. The static page tells
  the full narrative.
- **Mobile is authored, not a fallback:** portrait posters/clips for the hero,
  touch-tuned lerp, grown tap targets. Verified on a real phone, not only headless.

## Asset generation recipe (READY — fires when KIE_AI_API_KEY is set)
World: Louis Kahn / Salk Institute. **Style preamble, reused verbatim in every
prompt:**

> Board-formed and travertine concrete architecture in the spirit of Louis Kahn's
> Salk Institute. A single strong central axis. Raking low natural light under a
> flat overcast sky, long soft shadows, cool neutral grey palette with warm
> travertine highlights. Monumental, precise, quiet, no people, no text, no signage.
> Photographic, large-format, deep depth of field, fine concrete texture.

Per-leg scene + camera (chain on start frames, serial):
- **L1** still: "an empty concrete plaza seen straight down its central axis,
  vanishing point centred, wide negative sky above for a headline." move: "slow
  steady dolly forward along the axis, no tilt."
- **L2** still (from L1 tail): "two large separated concrete masses left and
  right, a clear empty void between them down the axis." move: "slow dolly forward
  into the void; the gap between the masses widens."
- **L3** still (from L2 tail): "a horizontal spanning structure of concrete
  members bridging the void between the two masses, mid-assembly, members locking
  into the span." move: "camera holds nearly still, a slow push as the span reads
  complete." *(crux leg — expect rerolls; the 'assembling' read is the peak.)*
- **L4** still (from L3 tail): "travelling low along the underside of the finished
  concrete span, regular bays and openings passing." move: "smooth lateral travel
  along the span, one direction."
- **L5** still (from L4 tail): "the whole assembled structure seen from a distance,
  two masses joined by the span, complete, on its axis." move: "slow pull-back
  revealing the whole structure, held at the end."

Commands per leg (example L1):
```
node <skill>/scripts/kie.mjs still "<preamble>\n\n<L1 scene>" out/01.png --ar 16:9
node <skill>/scripts/kie.mjs shot  "<L1 move>" out/01.png out/01.mp4 --dur 5
bash  <skill>/scripts/encode.sh out/01.mp4 assets/01.mp4
bash  <skill>/scripts/encode.sh out/01.mp4 assets/01-m.mp4 mobile
ffmpeg -i assets/01.mp4 -frames:v 1 -q:v 3 assets/p01.webp   # poster from ENCODED mp4
ffmpeg -sseof -0.15 -i assets/01.mp4 -frames:v 1 -q:v 2 out/chain01.png  # next leg start
```
Planned spend (plan at published rates; real debit ≈ 0.4×): 5 clips ×160 +
~5 stills ×28 ≈ **940 credits planned** (~**380 real**). Probe before/after.
