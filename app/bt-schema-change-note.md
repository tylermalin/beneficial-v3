# BT Schema Change Note

**Target:** the first `application/ld+json` block on `https://www.beneficial.technology/`
**Replacement file:** `bt-schema-replacement.json`
**Drafted:** 2026-08-06. Draft for Tyler's sign-off. Do not push before item 1 below is resolved.

---

## Scope of change

Diffed against the live block. 50 fields unchanged, 3 added, 1 removed, 2 rewritten.

| Field | Change |
|---|---|
| `ProfessionalService.disambiguatingDescription` | Added |
| `ProfessionalService.description` | Rewritten |
| `ProfessionalService.areaServed` | Removed "Cayman Islands" |
| `ProfessionalService.knowsAbout` | Added "SAFE-T" and "Cayman and BVI Entity Structuring" |
| `Person.description` | Rewritten |

Everything else is byte-identical: `@id` values, the offer catalog and its three prices, the Dover address, `sameAs`, `contactPoint`, `alumniOf`, `jobTitle`, `founder` and `worksFor` linkage. The node graph structure is untouched, so nothing downstream of the `@id` references breaks.

The two `@id` values must stay exactly as they are. They are what ties the Person node to the organization node, and an answer engine that loses that link reads Tyler and BT as unrelated entities.

---

## Why each change

**1. The disclaimer now appears twice, in two different fields.** `disambiguatingDescription` is the semantically correct home for it, but `description` is what actually gets extracted and paraphrased by answer engines. Putting the sentence only in `disambiguatingDescription` would be technically right and practically useless. It goes in both. The wording mirrors the footer language already live on the site, so the human-readable and machine-readable claims match.

**2. The description now leads with the service, not the credential.** The live version opens with "legal engineering and structural strategy," which reads as the product being legal work. The replacement names structural and technical consulting first and positions legal engineering as the coordination layer between the client's retained counsel and their operating team. Same business, described in the order that does not create the implication.

The em dash in the live description is also gone, which brings the markup in line with the voice rules.

**3. Cayman moved from `areaServed` to `knowsAbout`.** `areaServed` denotes territory served. BT structures Cayman entities for US and EU clients; it does not serve the Cayman market. As written it implies an offshore presence that does not exist, which is exactly the kind of small factual overreach that becomes load-bearing if anyone ever looks closely. The capability itself is preserved, just filed correctly. SAFE-T was added alongside it since the site names it as a distinct instrument and the live `knowsAbout` only listed SAFT.

**4. The Person description separates biography from offer.** The live version reads "Operator-attorney. Former litigator with 15+ year lawfirm experience" and stops there. Combined with an organization node whose description said legal engineering, that is the closest thing on the site to a structured-data claim that BT sells legal services. The replacement keeps every credential, adds an explicit sentence that Tyler does not practice law or provide legal advice through BT, and fixes the "lawfirm" typo.

---

## Two things needing your call before this ships

**1. Bar status. This is the blocker.** `entity-facts.md` lists current bar status and jurisdiction as TODO. I therefore wrote the credential line to describe background only ("15+ years of law firm experience as a litigator") rather than asserting current licensure, because asserting active bar admission in permanent structured markup without confirming it is a worse failure than the one this edit is fixing.

If you are currently admitted and want that stated, the line should say so explicitly and name the jurisdiction. If you are inactive, the current wording is already correct and nothing changes. Either way, `entity-facts.md` should get the answer recorded.

**2. Whether Mālama stays in the Person node.** It is the only place Mālama appears in BT's structured data. My read is that it should stay: it is a fact about a person, it sits in the Person node rather than the organization node, and it is already public in several places. Removing it would look like concealment of a relationship that is easy to discover. This is the biography side of the line, not the inventory side. Flagging it because it is the one judgment call in the file rather than a mechanical fix.

The macron in "Mālama" is preserved and encodes fine as `\u0101`.

---

## Validation before and after push

1. The replacement file parses as valid JSON. Confirmed.
2. Before push: run it through `validator.schema.org`. Confirm zero errors on both `ProfessionalService` and `Person`, and confirm the `@id` linkage resolves.
3. After push: re-fetch raw HTML with `curl -sL https://www.beneficial.technology/` and grep for `application/ld+json`. Confirm two blocks still present and the first parses to the new content. If the site injects schema client-side rather than at build time, this check will fail and the whole edit is invisible to crawlers.
4. Google Rich Results Test for a second opinion on parse. Note that it will not flag the substantive framing issues this change is about, only syntax.
5. Re-run three or four of the twenty baseline queries roughly 30 days out. Schema changes propagate slowly and this is not a same-week signal.

---

## Deliberately not in this change

Per-practice-area `Service` nodes, `FAQPage` markup on the field guides, `Article` markup on `/resources`, and a `slogan` field. All are reasonable AEO additions and none of them belong in a change whose purpose is fixing an implied-legal-services signal. Revisit them once the three field guides exist and there is something to mark up.
