# AGENTS.md

## Cursor Cloud specific instructions

This is a single Next.js 14 (App Router) website — not a monorepo. No database, Docker, or external services are required.

### Quick reference

| Action | Command |
|--------|---------|
| Install deps | `pnpm install` |
| Dev server | `pnpm dev` (port 3000) |
| Build | `pnpm build` |
| Lint | `pnpm lint` |

### Gotchas

- The repo ships **without an `.eslintrc.json`**. Running `pnpm lint` for the first time triggers an interactive Next.js prompt. The `.eslintrc.json` with `"extends": "next/core-web-vitals"` must exist before linting works non-interactively.
- There are pre-existing lint errors (`react/no-unescaped-entities`) across several page/component files. These are cosmetic and do not block the build.
- Both `pnpm-lock.yaml` and `package-lock.json` are present; use **pnpm** as the package manager (matches `pnpm-lock.yaml` and README recommendation).
- The `RESEND_API_KEY` env var is optional. Without it, the contact form, newsletter, and consultation booking server actions still succeed — they just skip sending emails.
- No automated test suite exists (`pnpm test` is not configured). Validation relies on `pnpm lint` and `pnpm build`.
