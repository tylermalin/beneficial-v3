#!/usr/bin/env bash
# Copies the pure scoring core out of the auditor package into lib/ip-audit/core.
# The site vendors it so the build has no unpublished dependency. Once
# @beneficialtech/repo-ip-auditor is on npm, delete this script, add the
# package to dependencies, and change one import path in lib/ip-audit.
set -euo pipefail
SRC="${1:?usage: sync-ip-audit-core.sh /path/to/repo-ip-auditor/src}"
DST="$(cd "$(dirname "$0")/.." && pwd)/lib/ip-audit/core"
for f in types licenses identity headers manifests score markdown; do
  {
    echo "// Vendored from @beneficialtech/repo-ip-auditor/core. Do not edit here."
    echo "// Regenerate with scripts/sync-ip-audit-core.sh after changing the package."
    sed -E "s/from '\.\/([a-z]+)\.js'/from '.\/\1'/" "$SRC/$f.ts"
  } > "$DST/$f.ts"
done
echo "Synced core to $DST"
