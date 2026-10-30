# AEON Design System

Two-ink risograph on paper. Deep AEON green meets coral overprint, condensed uppercase display type, halftone squiggles, and duotone photography, grounded by AEON Microgrid Data's geometric line-art mark.

## Context

**AEON Microgrid Data** (aeon). Logo supplied by the user: a three-loop triangular knot in deep green (#0B4A2A) with a geometric, wide-tracked wordmark. The company works in microgrid / energy data, so the system also carries a mono face and status colors for data views.

**Primary use:** slide decks (per the user). Documents and UI are secondary and follow the same tokens.

**Direction: "inspired, original".** The visual reference was Slidesgo's premium "Retro Decode" template (https://slidesgo.com/theme/retro-decode, Presentation Trends 2026). The user chose an original interpretation rather than a recreation, so this system borrows the *language* (paper, two inks, condensed caps, halftone rules, riso duotone imagery, handwritten annotations) and re-keys it to AEON's green. Nothing from the template is copied; no template assets are included. Local reference screenshots for the team live in `_ref/` (not shipped).

Sources given:
- Slidesgo "Retro Decode" page capture (thumbnails only; media host blocked direct fetch)
- 7 slide screenshots uploaded by the user (`uploads/refs-*.jpg`, copied to `_ref/`)
- 3 AEON logo PNGs (`uploads/logo-*.png`, copied to `assets/`)
- No codebase, Figma, or brand guidelines document.

## Content fundamentals

- **Voice:** direct, confident, plainspoken. Short declaratives. No hype adjectives.
- **Display copy is ALL CAPS** in the condensed face. Two to five words per line. "GRID DATA, DECODED." not "Unlocking the potential of grid data".
- **Body copy is sentence case**, 1–3 sentences per block. Bold a single phrase per paragraph to carry the point (the reference does this consistently).
- **Person:** "we" for AEON, "you" for the reader. Never "the user".
- **Numbers as heroes:** stats set in the display face, unit in mono. `4.2 GWh`, `99.98 %`.
- **Section numbering** is zero-padded: `01`, `02`… always in display type.
- **Handwritten annotations** (script face, `Note` component) are lowercase, aphoristic, one line: "measure what matters", "built for the edge". Use at most one per slide.
- **No emoji.** No exclamation marks in display copy. Ellipses allowed as a rhythmic device in headlines ("THIS IS HOW IT BEGAN…").
- Buttons/pills: short verbs or nouns, sentence case or caps. "See the data", "Talk to us".

## Visual foundations

**Paper.** Every surface is warm off-white paper `--paper #EEEBE3` with a tiled grain texture (`assets/paper-grain.png`, opacity ~0.55). Cards are a slightly darker paper `--paper-2`. Inverse surfaces are solid ink green.

**Two inks.** `--ink #0B4A2A` (AEON green) is text, rules, and primary fills. `--accent #F0553B` (coral) is the second ink: underlines, icon strokes, stars, one hero word, hover. Where the two overlap in imagery they "overprint" to `--overprint #4A3F26`. Tints (`--ink-tint`, `--accent-tint`) are for large flat shapes behind imagery only. Never introduce a third hue except status colors in data views.

**Type.** Display: **Anton**, uppercase, `line-height 0.92`, sizes 44–120px on a 1280×720 slide. Body: **DM Sans** 15–22px, `line-height 1.4`. Data: **DM Mono**. Annotations: **Caveat**. Wordmark-style labels: **Montserrat** caps with `0.14em` tracking (echoes the logo's "MICROGRID DATA"). Hierarchy is carried by size and case, never by weight changes in the display face.

**Halftone rules.** Underlines and dividers are halftone bars or squiggles (CSS radial-gradient dot pattern, 5px grid) in green or coral, fading to nothing at one end. Straight dividers are 1.5px dashed ink lines.

**Imagery.** Photos are converted to riso duotone: grayscale, contrast-boosted, multiplied over a flat coral or green shape that deliberately misregisters (offset 24–48px). Subjects: hardware, landscapes, infrastructure, hands at work; no stock smiling people. Engravings and line illustrations are welcome. No gradients, no 3D renders.

**Shape & corners.** Two radii only: `0` for boxes and `999px` for pills. Outlined pills (1.5px ink) are the button/tag form. No drop shadows anywhere; ink sits flat on paper.

**Layout.** 1280×720 slides, 72px margin, 40px gutter. Asymmetric: a heavy display block on one side, imagery bleeding off an edge on the other. Small script annotation pinned to a bottom corner. Logo mark small, top-right or bottom-left.

**Motion.** Minimal. Fades and 8px rises, 220ms `cubic-bezier(.2,.8,.2,1)`. No bounces. Hover: opacity 0.72 or ink→coral swap. Press: scale 0.98. Focus: 2px coral outline, 2px offset.

**Transparency & blur.** None. Overlap is expressed through multiply blending, not alpha.

## Iconography

- **Icon set:** Lucide (CDN, `https://unpkg.com/lucide@latest`), stroke 1.75, drawn in coral on paper or paper on ink. The reference used Flaticon's outlined set; Lucide is the closest open equivalent (single-weight outline, rounded joins). **Substitution flagged.**
- Icons appear small (28–36px) above a pill label, or 20px inline before a link.
- **Logo:** `assets/logo-mark.png` (knot only), `assets/logo-stacked.png` (mark + AEON + MICROGRID DATA), `assets/logo-horizontal.png`. Supplied as PNG with white removed to transparency; green is baked in — place on paper only, or request a paper-colored version for ink surfaces. No SVG was provided.
- **Unicode as ornament:** an asterisk-star `✳` or hand-drawn star motif may replace the "O" in a display word (the reference's signature move); we ship this as the `Star` component (coral, thin stroke) rather than emoji.
- No emoji anywhere.

## Caveats

- Fonts load from Google Fonts; no licensed binaries were supplied. Anton / DM Sans / DM Mono / Caveat / Montserrat are the nearest open matches to the reference's condensed grotesk, geometric sans and handwriting.
- Logo exists only as PNG in one color. An SVG and a light (paper) variant would let it sit on ink surfaces.
- Imagery: no AEON photography was provided; slide cards use `image-slot` placeholders styled with the riso treatment.
- Status colors (`--status-warn` amber) are an intentional addition for microgrid data views; not in the reference.

## Index

- `styles.css` → `tokens/{fonts,colors,typography,spacing,effects,base}.css`
- `assets/` logo PNGs, `paper-grain.png`
- `guidelines/` foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/core/` Button, Pill, Rule, Divider, Callout, Stat, Index, Note, Star, Icon
- `components/media/` RisoImage, Logo
- `slides/` sample slide cards (Title, Section, Agenda, Content, Stats, Quote, Gallery, Closing)
- `templates/pitch-deck/PitchDeck.dc.html` starting deck template
- `thumbnail.html`, `SKILL.md`
