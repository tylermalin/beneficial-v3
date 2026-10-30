#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
SKILL=/Users/tylermalin/.claude/plugins/cache/nateherk/nateherk-design/0.3.1/skills/scroll-craft
K="$SKILL/scripts/kie.mjs"
# L1: open -> gap, dolly forward, ends at the span anchor (03)
node "$K" shot "The camera makes a slow, steady dolly forward along the central concrete channel toward the bright horizon, one smooth continuous move with no tilt. The architecture stays perfectly still; nothing enters or leaves. Slow, cinematic, controlled." out/01.png out/leg1.mp4 --tail out/03.png --dur 5 &
# L2 PEAK: approach + pass beneath the span (03 -> 04)
node "$K" shot "The camera continues slowly forward down the central axis and passes just beneath the concrete span crossing overhead, one smooth continuous dolly-in. The structure stays perfectly still; nothing enters or leaves. Slow, cinematic, controlled." out/03.png out/leg2.mp4 --tail out/04.png --dur 5 &
# L3: emerge from beneath, rise toward whole (04 -> 05)
node "$K" shot "The camera drifts slowly forward and rises gently, emerging from beneath the span to open onto the whole structure, one smooth continuous move. Nothing enters or leaves. Slow, cinematic, controlled." out/04.png out/leg3.mp4 --tail out/05.png --dur 5 &
# L4: whole, settle to rest (05, free end)
node "$K" shot "The camera pulls back very slowly and steadily as the whole structure settles into view, one smooth continuous move coming almost to rest. Nothing enters or leaves. Slow, cinematic, controlled." out/05.png out/leg4.mp4 --dur 5 &
wait
echo "ALL SHOTS DONE"
ls -la out/leg*.mp4
