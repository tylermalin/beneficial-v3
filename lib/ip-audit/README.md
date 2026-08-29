# ip-audit

The scoring core is vendored from `@beneficialtechnology/repo-ip-auditor/core` so this
site builds without an unpublished dependency. `core/` is generated: edit the
package, then run `scripts/sync-ip-audit-core.sh /path/to/repo-ip-auditor/src`.

Once the package is published, add it to `dependencies`, delete `core/` and the
sync script, and change the import in `scan-github.ts` and `sample.ts` back to
`@beneficialtechnology/repo-ip-auditor/core`. The CLI, the GitHub Action, and this page
score with the same functions, which is the only reason the published rubric
means anything.
