import type { Practice } from '@/components/expertise/expertise-page'

const LEGAL = '/expertise/legal-engineering'
const AI = '/expertise/ai-automation'
const RWA = '/expertise/rwa-tokenization'
const CAPITAL = '/expertise/capital-formation'

export const legalEngineering: Practice = {
  slug: 'legal-engineering',
  num: '01',
  category: 'STRUCTURE',
  name: 'Legal Engineering',
  headline: 'Legal structure, designed like a system.',
  subhead:
    'Entities, agreements, and governance usually get drafted one document at a time. We design them as one architecture, so the structure still holds at your next raise, your next jurisdiction, and your first serious diligence.',
  difference: {
    kicker: 'The difference',
    headline: 'Lawyers draft documents. We design the system the documents describe.',
    intro:
      'Traditional legal work is reactive and document-shaped. A new investor arrives, so someone drafts a side letter. A new market opens, so someone forms an entity. Each piece is correct. Over time, the whole stops making sense. Legal engineering starts from the other end. We map how ownership, control, money, and IP should flow across the business, then design the entities and agreements that make it so. Where it helps, the rules get encoded into software, so governance is enforced, not just written down.',
    rows: [
      { before: 'Entities added as needs arise', after: "Entity map designed for where you're going" },
      { before: 'Agreements negotiated in isolation', after: 'Agreements that reference and reinforce each other' },
      { before: 'Governance lives in a PDF', after: 'Decision rights defined, documented, and where useful, enforced in code' },
    ],
  },
  whenPeopleCall: {
    kicker: 'When people call',
    headline: 'The structure usually breaks at a moment like this.',
    items: [
      { title: 'Your first institutional raise.', body: 'Investors will ask who owns the IP, who controls the entities, and what happens if a founder leaves. You want clean answers before diligence starts.' },
      { title: 'A second jurisdiction.', body: "Expanding, adding an SPV, or onboarding foreign investors, and the original structure wasn't built for it." },
      { title: 'IP scattered across people and entities.', body: "Contractors, early collaborators, or a prior company still hold pieces of what you're building on." },
      { title: 'Software that acts for the company.', body: 'AI agents or smart contracts make commitments, and nobody has defined what they are authorized to do.' },
    ],
    cta: 'Recognize one of these? Book a call',
  },
  deliverables: {
    kicker: 'Deliverables',
    headline: 'Three layers of structure. Each one documented.',
    items: [
      { title: 'Entity & SPV architecture', whatItIs: 'A map of every entity, who owns it, who controls it, and why it exists. Holding companies, SPVs, and cross-border vehicles designed around where the business is going.', whatItPrevents: "Structures that investors have to untangle before they'll commit." },
      { title: 'Agreements & IP chain of title', whatItIs: 'Founder, contractor, and commercial agreements that assign IP to the right entity, and reference each other so nothing falls between them.', whatItPrevents: 'The diligence finding that a key piece of IP belongs to someone else.' },
      { title: 'Governance & regulatory map', whatItIs: 'Who can decide what, at which entity, with whose approval. Mapped against the regulatory regimes that apply in each jurisdiction.', whatItPrevents: 'Authority disputes, and regulatory exposure nobody noticed until it was expensive.' },
    ],
  },
  delivery: {
    kicker: 'Delivery',
    headline: 'Clarity at every gate.',
    intro: "Nothing moves to the next phase until you've approved the last one in writing.",
    steps: [
      { title: 'Map', body: 'We document what exists today: entities, ownership, agreements, IP, and decision rights. You get a current-state map and a list of the gaps that matter most.', gate: 'You approve the map.' },
      { title: 'Design', body: 'We design the target structure and the path to get there, with tradeoffs on cost, tax, control, and timing laid out plainly.', gate: 'You approve the design, after counsel review in each relevant jurisdiction.' },
      { title: 'Implement', body: 'Entities formed, agreements executed, governance documented, and everything handed over in a form your investors and auditors can follow.', gate: 'You sign off on the final record.' },
    ],
    guardrails: { title: 'Guardrails, built in.', body: 'Licensed counsel reviews every design in each jurisdiction it touches. Ownership, substance, and decision authority are documented, not assumed.' },
  },
  oneArchitecture: {
    kicker: 'One architecture',
    headline: 'Legal structure is the foundation the other three stand on.',
    links: [
      { name: 'Capital Formation', href: CAPITAL, body: 'Investors price what they can understand. A clean entity map and IP chain of title shorten diligence and protect valuation.' },
      { name: 'RWA Tokenization', href: RWA, body: 'Every token sits on a legal wrapper. The SPV, investor eligibility rules, and custody arrangements are designed here first.' },
      { name: 'AI Automation', href: AI, body: "When agents act for the company, their authority has to come from somewhere. Governance designed here defines what they're allowed to do." },
    ],
    footer:
      'Delivered into the tools you already use. Entity records, executed agreements, and governance documents land in your entity-management platform, contract system, and data room, organized for diligence.',
  },
  work: {
    kicker: 'Work',
    headline: 'Legal engineering, in the literal sense.',
    items: [
      { tag: 'Built experience', title: 'AgentCorp', body: 'A formation protocol that gives each AI agent its own Delaware Series LLC. Authority, liability, and governance defined for software that acts on its own.' },
      { tag: 'Built experience', title: 'Agent compliance middleware', body: 'Open-source middleware that encodes Delaware corporate law into the decision path of AI agents. Every action checked against the rules, every decision written to a hash-chained evidence log.' },
    ],
  },
}

export const aiAutomation: Practice = {
  slug: 'ai-automation',
  num: '02',
  category: 'INTELLIGENCE',
  name: 'AI Automation',
  headline: 'Get AI out of the pilot and into the operating model.',
  subhead:
    "Most AI projects stall between demo and production. The model works. What's missing is who can see what, who approves what, and how anyone knows it's paying off. We build that layer.",
  difference: {
    kicker: 'Why pilots stall',
    headline: 'The model is rarely the problem.',
    intro:
      'Most people assume AI projects stall on capability. In practice they stall on three questions nobody designed answers for: who can see what, who answers for it, and whether it is working. Answer those three, and production stops being a debate.',
    rows: [
      { before: 'A system that retrieves across the whole company shows someone a document they should not see, so security says no.', after: 'Retrieval that respects the access rights people already have.' },
      { before: 'An agent sends, signs, or spends, and no one is accountable, so legal says no.', after: 'A named human accountable for each consequential action.' },
      { before: 'No baseline and no measure, so finance says no.', after: 'A baseline per workflow, so value is measured, not estimated.' },
    ],
  },
  whenPeopleCall: {
    kicker: 'When people call',
    headline: "Usually it's one of these.",
    items: [
      { title: 'The pilot worked, and nothing happened next.', body: "The demo impressed people. Six months later it's still a demo." },
      { title: 'Security or legal keeps saying no.', body: "Usually with good reason: nobody can show what the system sees, or who's responsible when it acts." },
      { title: 'Your agents are about to act, not just answer.', body: 'Sending email, updating records, approving spend. The stakes changed, and the controls have not.' },
      { title: 'Nobody can say what AI is saving you.', body: "Lots of tools, lots of usage, and no number you'd put in front of a board." },
    ],
    cta: 'Recognize one of these? Book a call',
  },
  deliverables: {
    kicker: 'Deliverables',
    headline: 'Three layers between a model and production.',
    items: [
      { title: 'Workflow economics', whatItIs: 'A map of where work actually happens, which steps AI should take on, and a baseline for each one, so value is measured, not estimated.', whatItPrevents: 'Automating the wrong thing, then being unable to prove anything paid off.' },
      { title: 'Permission-aware knowledge systems', whatItIs: 'Retrieval over your private data that respects the access rights people already have, connected to the systems where work gets done.', whatItPrevents: 'The assistant that shows an intern the board deck.' },
      { title: 'Authority, approval & monitoring', whatItIs: 'Defined limits on what each agent can do, human approval where decisions are consequential, and monitoring that catches drift after launch.', whatItPrevents: 'An agent acting outside its authority, with no record of why.' },
    ],
  },
  delivery: {
    kicker: 'Delivery',
    headline: 'Clarity at every gate.',
    intro: "Nothing reaches production until you've approved how it behaves, what it sees, and how it will be measured.",
    steps: [
      { title: 'Map', body: 'We document the workflows, data, and decisions in scope, set a baseline for each, and rank candidates by value and risk.', gate: 'You approve the shortlist and the success measures.' },
      { title: 'Build', body: 'We connect the system to your data and tools, with permissions, approval steps, and logging designed in from the start.', gate: 'You approve its behavior on your own test cases before it touches live work.' },
      { title: 'Run', body: 'A controlled rollout with monitoring live from day one, then a readout against the original baseline.', gate: 'You decide whether to scale, adjust, or stop, based on numbers.' },
    ],
    guardrails: { title: 'Guardrails, built in.', body: 'Each system sees only the data its users are already allowed to see, keeps nothing longer than it needs, and sends consequential decisions to a human. Every model evaluation and approval is logged, so you can show an auditor what happened and why.' },
  },
  oneArchitecture: {
    kicker: 'One architecture',
    headline: "An agent's authority has to come from somewhere.",
    links: [
      { name: 'Legal Engineering', href: LEGAL, body: 'Governance defines which entity an agent acts for and what it is authorized to commit to. We design that before we write the first workflow.' },
      { name: 'RWA Tokenization', href: RWA, body: 'Automated compliance checks, investor eligibility, and reporting run on the same permission and audit model.' },
      { name: 'Capital Formation', href: CAPITAL, body: 'A measured, auditable AI operation is an asset in diligence. An unexplained one is a risk.' },
    ],
    footer:
      'Built on your infrastructure, not ours. Private retrieval, model gateways, workflow orchestration, and observability, deployed inside your environment.',
  },
  work: {
    kicker: 'Work',
    headline: 'We build the controls we recommend.',
    items: [
      { tag: 'Built experience', title: 'Agent compliance middleware', body: 'Open-source middleware that checks every agent action against encoded corporate-law rules before it executes, and writes each decision to a hash-chained evidence log.' },
    ],
  },
}

export const rwaTokenization: Practice = {
  slug: 'rwa-tokenization',
  num: '03',
  category: 'ASSETS',
  name: 'RWA Tokenization',
  headline: 'Bring a real asset on-chain, designed to hold up.',
  subhead:
    'Tokenizing a real asset fails when the SPV, investor eligibility, and custody are designed separately. We design issuance structures where the asset, the legal wrapper, and the on-chain rails are built together from day one.',
  difference: {
    kicker: 'The difference',
    headline: 'A token is only as sound as the structure underneath it.',
    intro:
      "A token's economics depend on how the issuing entity is structured. That entity's governance depends on what the software can actually enforce. And the raise depends on whether investors can see all of it clearly in diligence. When the SPV, the eligibility rules, and the custody arrangement are designed by three different parties, the gaps between them surface late and cost the most to fix. We start from the whole issuance and engineer each connection deliberately.",
    rows: [
      { before: 'SPV, token, and custody designed separately', after: 'Asset, legal wrapper, and on-chain rails designed together' },
      { before: 'Investor eligibility bolted on at the sale', after: 'Eligibility rules encoded into issuance from day one' },
      { before: 'Off-chain asset and on-chain token drift apart', after: 'A verifiable link between the asset and its token' },
    ],
  },
  whenPeopleCall: {
    kicker: 'When people call',
    headline: "Usually it's one of these.",
    items: [
      { title: "You're bringing a real asset on-chain.", body: 'Issuance, custody, and investor eligibility all have to line up, and each advisor only sees one of them.' },
      { title: 'Your token and your equity have to coexist.', body: "Token holders and equity investors both have claims, and the two structures can't contradict each other." },
      { title: 'The off-chain asset needs to be provable.', body: 'Buyers and auditors need to trust that the token maps to something real, measured rather than asserted.' },
      { title: 'A registry or regulator sits in the path.', body: 'Carbon credits, securities, or commodities bring rules on what can be tokenized, transferred, and sold, and to whom.' },
    ],
    cta: 'Recognize one of these? Book a call',
  },
  deliverables: {
    kicker: 'Deliverables',
    headline: 'The asset, the wrapper, and the rails, designed as one.',
    items: [
      { title: 'Issuance & SPV structure', whatItIs: 'The legal wrapper that holds the asset and issues the token: entity, jurisdiction, and custody arrangement designed around the asset and its buyers.', whatItPrevents: 'A token with no enforceable claim on the thing it represents.' },
      { title: 'Eligibility & transfer rules', whatItIs: 'Who can buy, hold, and transfer, encoded into the token and its offering so compliance is built in, not policed after the fact.', whatItPrevents: 'A sale that reaches people it legally should not.' },
      { title: 'Proof & on-chain rails', whatItIs: 'The link between the off-chain asset and its on-chain representation, with the chain, custody, and reporting chosen to fit the asset.', whatItPrevents: 'An on-chain record nobody can reconcile to the real asset.' },
    ],
  },
  delivery: {
    kicker: 'Delivery',
    headline: 'Clarity at every gate.',
    intro: "Nothing moves to the next phase until you've approved the last one in writing.",
    steps: [
      { title: 'Map', body: 'We document the asset, the parties, the registries or regulators in the path, and the buyers you intend to reach. You get a current-state map and the riskiest seam in it.', gate: 'You approve the map.' },
      { title: 'Design', body: 'We design the SPV, eligibility rules, custody, and on-chain rails together, with tradeoffs on jurisdiction, cost, and compliance laid out plainly.', gate: 'You approve the design, after counsel review in each relevant jurisdiction.' },
      { title: 'Implement', body: 'Entity formed, offering documented, token and rails stood up, and everything handed over in a form investors and auditors can follow.', gate: 'You sign off on the final record.' },
    ],
    guardrails: { title: 'Guardrails, built in.', body: 'Securities characterization and offering restrictions reviewed by qualified counsel. The link between the asset and its token is documented and verifiable, not assumed.' },
  },
  oneArchitecture: {
    kicker: 'One architecture',
    headline: 'A token touches every other practice.',
    links: [
      { name: 'Legal Engineering', href: LEGAL, body: 'Every token sits on a legal wrapper. The SPV, investor eligibility, and custody are designed in the legal structure first.' },
      { name: 'Capital Formation', href: CAPITAL, body: 'When a raise involves a token, equity and token rights have to be designed together, or one will undermine the other.' },
      { name: 'AI Automation', href: AI, body: 'Compliance checks, eligibility, and reporting can run on the same permission and audit model as the rest of your operation.' },
    ],
    footer:
      'Built to be checked. Issuance records, eligibility rules, and the asset-to-token link land where your counsel, custodian, and auditors can follow them.',
  },
  work: {
    kicker: 'Work',
    headline: 'We tokenize assets we would hold ourselves.',
    items: [
      { tag: 'RWA · Infrastructure', title: 'Mālama Labs', body: 'A network of environmental sensors that sign their own data in hardware, then anchor it on-chain. Measured, not estimated. (Specific anchoring dates and record counts are being reconciled before publication.)' },
    ],
  },
}

export const capitalFormation: Practice = {
  slug: 'capital-formation',
  num: '04',
  category: 'GROWTH',
  name: 'Capital Formation',
  headline: 'Be ready before investors start looking.',
  subhead:
    "Most raises don't fail in the pitch. They lose time, leverage, and valuation in diligence, when the structure, the numbers, and the story don't line up. We make sure they do before the first meeting.",
  difference: {
    kicker: 'Where raises lose value',
    headline: 'Diligence is where leverage goes to die.',
    intro:
      'Most founders assume the hard part of a raise is getting the meeting. The expensive part comes after the term sheet. Every unanswered question in diligence costs time, and every surprise costs leverage. Close the gaps before anyone else finds them.',
    rows: [
      { before: 'The structure surprises them', after: 'A clean entity map that answers ownership and control up front' },
      { before: "The numbers don't reconcile", after: 'Model, data room, and deck that tell the same story' },
      { before: "The instrument doesn't fit the business", after: 'The right instrument for this round and the next' },
    ],
  },
  whenPeopleCall: {
    kicker: 'When people call',
    headline: "Usually it's one of these.",
    items: [
      { title: "You're raising in the next six months.", body: "Early enough to fix the structure. Late enough that it can't wait." },
      { title: 'You have a term sheet and questions.', body: 'The headline number looks good. You want to understand what the rest of the terms mean for the business and the next round.' },
      { title: 'Your raise involves a token.', body: 'Equity investors, token holders, and possibly a token side letter, all needing to fit together without contradicting each other.' },
      { title: 'A previous raise left a mess.', body: 'Stacked SAFEs, side letters nobody tracks, or a cap table that takes an hour to explain.' },
    ],
    cta: 'Recognize one of these? Book a call',
  },
  deliverables: {
    kicker: 'Deliverables',
    headline: 'Three things investors check. All ready before they ask.',
    items: [
      { title: 'Capital architecture', whatItIs: 'The right instrument for this round and the next: equity, SAFE, debt, token, or a combination, modeled against your cap table and the structure behind it.', whatItPrevents: 'An instrument that solves this round and complicates the next two.' },
      { title: 'Diligence readiness', whatItIs: 'A data room organized around the questions investors actually ask, with the model, the deck, and the documents telling the same story.', whatItPrevents: 'Weeks lost to follow-up requests, and trust lost to inconsistencies.' },
      { title: 'Term analysis', whatItIs: 'A plain-language read of every term sheet: what each provision means for control, dilution, and future rounds, coordinated with your counsel through close.', whatItPrevents: 'Signing terms whose consequences show up two rounds later.' },
    ],
  },
  delivery: {
    kicker: 'Delivery',
    headline: 'Clarity at every gate.',
    intro: 'You see every finding before an investor does, and nothing goes into the data room without your approval.',
    steps: [
      { title: 'Assess', body: "We review the structure, cap table, financials, and materials the way an investor's diligence team would, and rank what needs fixing.", gate: 'You approve the readiness plan.' },
      { title: 'Prepare', body: 'We fix the structure, choose the instrument, and build the model, data room, and materials so they reconcile.', gate: 'You and your counsel approve the instrument and the disclosures.' },
      { title: 'Support', body: 'As term sheets arrive, we analyze them, answer diligence questions, and coordinate with counsel through close.', gate: 'Every term is your decision, made with a clear read of the consequences.' },
    ],
    guardrails: { title: 'Guardrails, built in.', body: 'Offering restrictions and investor eligibility reviewed by qualified securities counsel. Financial assumptions checked against source data. Every disclosure consistent across every document, with access controlled and logged.' },
  },
  oneArchitecture: {
    kicker: 'One architecture',
    headline: 'Every other practice shows up in diligence.',
    links: [
      { name: 'Legal Engineering', href: LEGAL, body: 'The entity map and IP chain of title are the first things a diligence team checks. Clean structure shortens the raise.' },
      { name: 'RWA Tokenization', href: RWA, body: 'When a raise involves a token, equity and token rights have to be designed together, or one will undermine the other.' },
      { name: 'AI Automation', href: AI, body: "A measured, governed AI operation is a value story investors can verify. An unexplained one is a risk they'll price in." },
    ],
    footer:
      'Ready in the tools investors expect. Financial models, cap table platforms, and diligence rooms, set up so every number traces back to its source.',
  },
  work: {
    kicker: 'Work',
    headline: "We structure raises we'd be willing to sit across the table from.",
    items: [
      { tag: 'Capital Formation · AI Automation', title: 'Proofable (formerly NEUS Network)', body: 'A repositioning from the ground up: a new name and brand, new product descriptions, and a rebuilt data room, all pointing to one clear use case. Relaunched as Proofable in September 2026.' },
    ],
  },
}

export const PRACTICES: Practice[] = [legalEngineering, aiAutomation, rwaTokenization, capitalFormation]
