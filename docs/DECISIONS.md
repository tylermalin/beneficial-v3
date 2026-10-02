# Architecture & Scope Decisions

---

## 2026-10-02 — TASK-009: Browser qual form uses Server Action, not direct /api/qualify call

**Decision:** The qualification form will use a Next.js Server Action rather than fetching `/api/qualify` directly from the browser.

**Reason:** `/api/qualify` requires HMAC-SHA256 (`X-Webhook-Signature`) for every request. Signing requires `QUAL_WEBHOOK_SECRET`, which cannot be exposed as a `NEXT_PUBLIC_` env var without being readable by anyone who views source. Browser-originating submissions from our own frontend do not need HMAC — they are protected by Next.js Server Action CSRF protection (same-origin, signed action ID).

**What changes:**
- Add `app/actions/qualify.ts` — a Server Action that validates the 5 fields, calls `createNotionInquiry`, and sends the internal notification email. The secret never leaves the server.
- Update `qual-form.tsx` to use the Server Action via `useActionState` (or `<form action={...}>`).
- `/api/qualify` is unchanged and remains the HMAC-protected endpoint for external callers (Zapier, cal.com webhooks, etc.).
- Remove `NEXT_PUBLIC_QUAL_FORM_LIVE` flag — the form is always live once the Server Action is deployed. The flag served as a temporary bypass for the signing problem; it is no longer needed.

**Alternatives ruled out:**
- Origin/Host check on `/api/qualify`: spoofable, weak.
- Proxy route that signs internally: adds a hop and duplicates the route. A Server Action is the correct Next.js primitive for browser-to-server form submission.

**Owner:** TechLead — 2026-10-02

---

## 2026-10-02 — TASK-012: Webhook implementation is a Vercel serverless function (not a Notion Worker)

**Decision:** `/api/qualify` is a Next.js App Router Route Handler deployed as a Vercel serverless function.

**Reason:** Already in Vercel project, no additional infrastructure, no latency added by a worker hop. Notion Worker would require a separate service with separate deployment and secrets management.

**Owner:** TechLead — 2026-10-02

---

## 2026-10-02 — TASK-013 de-dup scope: title match, not angle match

**Decision:** The Notion helper deduplicates by full page title (`Inquiry — {angle} — {date}`), not by angle alone.

**Reason:** Same-angle submissions on different days are distinct inquiry events. Deduplicating by angle alone would silently overwrite earlier rows.

**Owner:** TechLead — 2026-10-02
