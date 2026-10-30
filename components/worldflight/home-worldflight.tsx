'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

declare global {
  interface Window {
    ScrollCraft?: { mount: (el: Element, opts?: unknown) => { destroy?: () => void }; instances: unknown[] }
  }
}

type Owner = 'you' | 'counsel' | 'facts'
const OWNER_LABEL: Record<Owner, string> = { you: 'You control', counsel: 'Needs counsel', facts: 'Gather facts' }

const TREES: { q: string; vars: [string, Owner][] }[] = [
  { q: 'Is our token a security?', vars: [
    ['How the token is sold and marketed', 'you'],
    ['What the token does at launch vs. later', 'you'],
    ['How decentralized the network and effort are', 'facts'],
    ['Where buyers are and how they are reached', 'you'],
    ['Which legal framework(s) apply to that pattern', 'counsel'],
  ]},
  { q: 'Do we need a Cayman foundation?', vars: [
    ['What the entity needs to hold or do', 'you'],
    ['Where your team, buyers, and operations sit', 'facts'],
    ['Tax posture of the founders and the entity', 'counsel'],
    ['Governance model: foundation, company, or DAO wrapper', 'you'],
    ['Banking, audit, and ongoing admin you can sustain', 'you'],
  ]},
  { q: 'Can we sell carbon credits on-chain?', vars: [
    ['What the credit actually is: registry, methodology, vintage', 'facts'],
    ['Registry rules on tokenization and transfer', 'facts'],
    ['How the token maps to the underlying credit', 'you'],
    ['Commodity or securities characterization on-chain', 'counsel'],
    ['Buyer location and cross-border transfer rules', 'counsel'],
  ]},
  { q: 'Does our AI feature trigger regulated obligations?', vars: [
    ['What decision the AI influences', 'you'],
    ['Sector rules for that decision', 'counsel'],
    ['Data the model uses: personal, sensitive, cross-border', 'facts'],
    ['Degree of human oversight in the loop', 'you'],
    ['Jurisdictions of your users', 'facts'],
  ]},
  { q: 'Can US persons join our token sale?', vars: [
    ['The token’s characterization', 'counsel'],
    ['The distribution mechanism: sale, airdrop, rewards', 'you'],
    ['Eligibility controls you can enforce: KYC, geoblock', 'you'],
    ['What participants receive and when', 'you'],
    ['Exemptions or registration paths that fit', 'counsel'],
  ]},
  { q: 'Which entity should hold our IP?', vars: [
    ['Where the IP is created and by whom', 'facts'],
    ['Who the customer is and where', 'you'],
    ['Token / foundation vs. operating-company split', 'you'],
    ['Tax and liability consequences of the holder', 'counsel'],
    ['Investor and diligence expectations', 'you'],
  ]},
]

const WAYPOINTS = ['Surface', 'The seam', "What's built", 'Whole']

export function HomeWorldflight() {
  const [dep, setDep] = useState(0)
  const [active, setActive] = useState(0)
  const apiRef = useRef<{ destroy?: () => void } | null>(null)

  function mountEngine() {
    if (!window.ScrollCraft || apiRef.current) return
    apiRef.current = window.ScrollCraft.mount(document.body)
    requestAnimationFrame(() => dispatchEvent(new Event('resize')))
  }

  useEffect(() => {
    // engine may already be present (client nav back to home)
    mountEngine()
    const onWaypoint = (e: Event) => setActive((e as CustomEvent).detail.index)
    addEventListener('sc:waypoint', onWaypoint)
    const relayout = () => dispatchEvent(new Event('resize'))
    addEventListener('load', relayout)
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayout)
    return () => {
      removeEventListener('sc:waypoint', onWaypoint)
      removeEventListener('load', relayout)
      apiRef.current?.destroy?.()
      apiRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function goToLeg(i: number) {
    const segs = Array.from(document.querySelectorAll('[data-sc-segment]'))
    const weights = segs.map((s) => parseFloat((s as HTMLElement).dataset.scW || '1.3'))
    let total = 0
    for (let k = 0; k < i; k++) total += weights[k]
    scrollTo({ top: (total + weights[i] * 0.4) * innerHeight, behavior: 'smooth' })
  }

  return (
    <>
      {/* engine stylesheet (homepage only) + script */}
      <link rel="stylesheet" href="/scrollcraft.css" />
      <Script src="/scrollcraft.js" strategy="afterInteractive" onLoad={mountEngine} />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <span data-sc-progress />
      <div className="sc-grain" aria-hidden="true" />

      {/* full site nav, raised above the flight + landed layers so people can explore */}
      <div className="wf-nav">
        <Navigation />
      </div>

      {/* ============ THE FLIGHT ============ */}
      <div data-sc-mode="worldflight" data-sc-seam="0.16" data-sc-lerp="0.12">
        <div data-sc-world>
          {[1, 2, 3, 4].map((n, i) => (
            <div
              key={n}
              data-sc-segment
              data-sc-w={['1.3', '1.6', '1.3', '1.2'][i]}
              data-sc-linger={['0.32', '0.42', '0.34', '0.3'][i]}
              data-sc-waypoint={WAYPOINTS[i]}
            >
              <img className="sc-world__poster" src={`/flight/p0${n}.webp`} alt="" decoding="async" />
              <video data-sc-src={`/flight/leg${n}.mp4`} data-sc-src-mobile={`/flight/leg${n}-m.mp4`} muted playsInline />
            </div>
          ))}
        </div>

        <div data-sc-world-copy>
          <div className="sc-world__scrim sc-scrim sc-scrim--band" aria-hidden="true" />

          <div className="sc-copy sc-copy--lead" data-sc-copy data-sc-window="hero">
            <h1 className="sc-display">If your legal questions keep coming back <em>&ldquo;it depends,&rdquo;</em> you&rsquo;re in the right place.</h1>
          </div>
          <div className="sc-copy sc-copy--lead" data-sc-copy data-sc-window="0.13 0.27">
            <p className="sc-body">Your counsel sits on one side. Your operating team sits on the other. They never meet in the middle. That gap is where token launches stall, raises slip, and structures get rebuilt after the fact.</p>
          </div>
          <div className="sc-copy sc-copy--lead" data-sc-copy data-sc-window="0.31 0.52">
            <h2 className="sc-display sc-display--lg">Beneficial Technology is the layer that owns the seam.</h2>
          </div>
          <div className="sc-copy sc-copy--trail" data-sc-copy data-sc-window="0.57 0.74">
            <p className="sc-body">Multi-entity structures. SAFT and SAFE-T instruments. Compliance architecture. Investor narrative. Production software. Built as outputs, not slideware.</p>
          </div>
          <div className="sc-copy sc-copy--lead" data-sc-copy data-sc-window="finale">
            <h2 className="sc-display sc-display--lg">One system. One team that owns it, end to end.</h2>
          </div>
        </div>

        <div data-sc-spacer aria-hidden="true" />
      </div>

      <nav className="wf-rail" aria-label="Flight waypoints">
        {WAYPOINTS.map((w, i) => (
          <button
            key={w}
            className="wf-rail__leg"
            data-leg={i}
            aria-current={i === active}
            onClick={() => goToLeg(i)}
          >
            <span className="wf-rail__dot" />
            <span className="wf-rail__label">{w}</span>
          </button>
        ))}
      </nav>

      {/* ============ THE LANDED PAGE ============ */}
      <div className="wf-landed">
        {/* Depends On */}
        <section className="wf-sec" id="depends-on" aria-labelledby="dep-title">
          <p className="wf-kicker">The signature question</p>
          <h2 id="dep-title" className="sc-display sc-display--lg">&ldquo;It depends&rdquo; is an answer with the map torn off.</h2>
          <p className="sc-body wf-lede wf-muted" style={{ marginTop: '1rem' }}>Pick a question you&rsquo;ve been told that on. We&rsquo;ll show the variables it actually turns on: which you control, and which need counsel. Structure only. No answer.</p>

          <div className="wf-dep__qs" role="tablist" aria-label="Questions">
            {TREES.map((t, i) => (
              <button key={t.q} role="tab" aria-selected={i === dep} className="wf-dep__q" onClick={() => setDep(i)}>{t.q}</button>
            ))}
          </div>

          <div className="wf-dep__panel" role="tabpanel">
            <h3 className="wf-dep__head">{TREES[dep].q}</h3>
            <p className="wf-muted" style={{ fontSize: 14, margin: 0 }}>The answer turns on these, not on a rule you can look up.</p>
            <ul className="wf-dep__vars">
              {TREES[dep].vars.map(([label, owner]) => (
                <li key={label} className="wf-dep__var">
                  <p>{label}</p>
                  <span className={`wf-tag wf-tag--${owner}`}>{OWNER_LABEL[owner]}</span>
                </li>
              ))}
            </ul>
            <p className="wf-dep__note"><span className="mk">&#9633;</span> A map of what the answer depends on, not the answer. Structure only, reviewed by counsel.</p>
            <a className="wf-btn" href="https://cal.com/beneficialtech" style={{ marginTop: '1.4rem' }}>Resolve yours. Book a scoping call</a>
          </div>
        </section>

        {/* Who it's for */}
        <section className="wf-sec wf-sec--line" aria-labelledby="who-title">
          <p className="wf-kicker">Who it&rsquo;s for</p>
          <h2 id="who-title" className="sc-display sc-display--lg">Founders building where the playbook runs out.</h2>
          <ul className="wf-who">
            <li><h3>Token &amp; network founders</h3><p>Launching a token, designing distribution, and deciding what&rsquo;s a security before the raise, not after.</p></li>
            <li><h3>Climate-asset builders</h3><p>Issuing carbon and environmental assets on-chain, where the registry, the instrument, and the chain all have to agree.</p></li>
            <li><h3>Regulated-AI founders</h3><p>Shipping AI into credit, health, employment, or safety decisions, where the model&rsquo;s output is a regulated act.</p></li>
            <li><h3>Cross-jurisdiction teams</h3><p>Standing up multi-entity and offshore structures, with counsel coordinated instead of contradicting each other.</p></li>
            <li><h3>Pre-seed to Series&nbsp;A</h3><p>Early enough that the structure you choose now is the one you&rsquo;ll either build on or rebuild.</p></li>
          </ul>
        </section>

        {/* Tiers */}
        <section className="wf-sec wf-sec--line" aria-labelledby="tiers-title">
          <p className="wf-kicker">How it works</p>
          <h2 id="tiers-title" className="sc-display sc-display--lg">Plain tiers. Prices on the page.</h2>
          <div className="wf-tiers">
            <div className="wf-tier">
              <div className="wf-tier__top"><span className="wf-tier__name">Operator</span><span className="wf-tier__price">$8,500<span>&thinsp;/ mo</span></span></div>
              <p className="d">Fractional structural guidance across operations, strategy, and technology for pre-seed, seed, and growing SMB founders.</p>
            </div>
            <div className="wf-tier wf-tier--feat">
              <div className="wf-tier__top"><span className="wf-tier__name">Architect</span><span className="wf-tier__price">$15,000<span>&thinsp;/ mo</span></span></div>
              <span className="wf-tier__feat-tag">Most engagements</span>
              <p className="d">For scaling enterprises and token networks launching custom tech, navigating global structures, or building in heavily regulated spaces.</p>
            </div>
            <div className="wf-tier">
              <div className="wf-tier__top"><span className="wf-tier__name">Project</span><span className="wf-tier__price">From $25,000</span></div>
              <p className="d">Flat-fee, time-boxed engagements: full-stack builds, regulatory positioning audits, multi-entity structuring memos, SAFT drafting.</p>
            </div>
            <div className="wf-tier">
              <div className="wf-tier__top"><span className="wf-tier__name">Custom</span><span className="wf-tier__price">Bespoke</span></div>
              <p className="d">A custom advisory, development, or legal-engineering plan aligned to your timeline and capacity.</p>
            </div>
          </div>
        </section>

        {/* Posture */}
        <section className="wf-sec wf-sec--line">
          <p className="wf-kicker">The posture</p>
          <p className="wf-posture">Not a law firm. We build what your counsel <em>reviews</em> and your team <em>runs</em>.</p>
        </section>

        {/* Close */}
        <section className="wf-sec wf-close wf-sec--line">
          <h2>Your structure and your systems are one design problem. Let&rsquo;s own the seam.</h2>
          <a className="wf-btn" href="https://cal.com/beneficialtech">Book a scoping call</a>
        </section>

        <Footer />
      </div>
    </>
  )
}

const CSS = `
:root { --sc-canvas:#070707; --sc-surface:#0f0f0f; --sc-ink:#fff; --sc-ink-soft:#b4b4b4; --sc-accent:#ccff00; --sc-accent-ink:#0a0a0a; --sc-font-display:var(--font-geist-sans),"Geist",system-ui,sans-serif; --sc-font-text:var(--font-geist-sans),"Geist",system-ui,sans-serif; }
/* raise the site nav above the flight (stage z1/copy z20) and the landed layer (z300) */
.wf-nav nav { z-index:500; }
body .sc-world__scrim.sc-scrim--band { background:linear-gradient(to top, rgba(0,0,0,.90) 0%, rgba(0,0,0,.72) 26%, rgba(0,0,0,.40) 48%, rgba(0,0,0,.12) 64%, transparent 78%); }
.sc-copy[data-sc-window="hero"] .sc-display { font-size:clamp(2rem,5vw,3.6rem); max-width:18ch; line-height:1.04; }
.sc-copy[data-sc-window="finale"] .sc-display { font-size:clamp(1.9rem,4.2vw,3rem); max-width:16ch; line-height:1.06; }
.sc-copy[data-sc-window="hero"] em, .sc-copy[data-sc-window="finale"] em { font-style:italic; color:var(--sc-accent); }
@media (max-width:760px){ .sc-copy[data-sc-window="hero"] .sc-display { font-size:clamp(1.75rem,7vw,2.4rem); max-width:14ch; } }
.wf-rail { position:fixed; right:clamp(1rem,3vw,2rem); top:50%; transform:translateY(-50%); z-index:410; display:flex; flex-direction:column; gap:.9rem; }
@media (max-width:760px){ .wf-rail { display:none; } }
.wf-rail__leg { display:flex; align-items:center; gap:.7rem; background:none; border:0; cursor:pointer; padding:0; font:500 11px var(--sc-font-mono,"JetBrains Mono",monospace); letter-spacing:.14em; text-transform:uppercase; color:rgba(255,255,255,.4); transition:color .25s var(--sc-ease-out); }
.wf-rail__dot { width:7px; height:7px; border-radius:50%; background:currentColor; transition:transform .25s var(--sc-ease-out); }
.wf-rail__leg[aria-current="true"] { color:var(--sc-accent); }
.wf-rail__leg[aria-current="true"] .wf-rail__dot { transform:scale(1.5); }
.wf-rail__label { opacity:0; transform:translateX(6px); transition:opacity .25s,transform .25s; }
.wf-rail__leg[aria-current="true"] .wf-rail__label, .wf-rail:hover .wf-rail__label { opacity:1; transform:none; }
.wf-landed { position:relative; z-index:300; background:var(--sc-canvas); }
.wf-sec { padding:clamp(5rem,11vw,9rem) clamp(1.25rem,5vw,3rem); max-width:1200px; margin:0 auto; }
.wf-sec--line { border-top:1px solid rgba(255,255,255,.08); }
.wf-kicker { font:500 12px var(--sc-font-mono,"JetBrains Mono",monospace); letter-spacing:.18em; text-transform:uppercase; color:var(--sc-accent); margin:0 0 1.4rem; }
.wf-lede { max-width:40ch; } .wf-muted { color:var(--sc-ink-soft); }
.wf-dep__qs { display:flex; flex-wrap:wrap; gap:.6rem; margin:2rem 0 2.5rem; }
.wf-dep__q { font:400 15px var(--sc-font-text); color:var(--sc-ink-soft); background:var(--sc-surface); border:1px solid rgba(255,255,255,.1); border-radius:999px; padding:.6rem 1.1rem; cursor:pointer; transition:color .15s,border-color .15s,background .15s; }
.wf-dep__q:hover { color:var(--sc-ink); border-color:rgba(255,255,255,.25); }
.wf-dep__q[aria-selected="true"] { color:var(--sc-accent-ink); background:var(--sc-accent); border-color:var(--sc-accent); }
.wf-dep__q:focus-visible { outline:2px solid var(--sc-accent); outline-offset:3px; }
.wf-dep__head { font-size:clamp(1.4rem,3vw,2rem); font-weight:300; letter-spacing:-.02em; line-height:1.1; margin:0 0 .4rem; max-width:20ch; }
.wf-dep__vars { list-style:none; margin:1.8rem 0 0; padding:0; border-top:1px solid rgba(255,255,255,.08); }
.wf-dep__var { display:flex; gap:1rem; align-items:baseline; padding:1rem 0; border-bottom:1px solid rgba(255,255,255,.08); }
.wf-dep__var p { margin:0; font-size:15px; color:var(--sc-ink); }
.wf-tag { flex:none; font:500 11px var(--sc-font-mono,"JetBrains Mono",monospace); letter-spacing:.08em; padding:.2rem .5rem; border-radius:4px; border:1px solid; white-space:nowrap; }
.wf-tag--you { color:#ccff00; border-color:rgba(204,255,0,.4); }
.wf-tag--counsel { color:#9ab7ff; border-color:rgba(154,183,255,.4); }
.wf-tag--facts { color:#b4b4b4; border-color:rgba(255,255,255,.2); }
.wf-dep__note { margin-top:1.6rem; font-size:13px; color:var(--sc-ink-soft); display:flex; gap:.6rem; align-items:flex-start; }
.wf-dep__note .mk { color:var(--sc-accent); flex:none; }
.wf-who { list-style:none; margin:2.5rem 0 0; padding:0; }
.wf-who li { display:grid; grid-template-columns:1fr; gap:.3rem; padding:1.6rem 0; border-top:1px solid rgba(255,255,255,.08); }
@media (min-width:760px){ .wf-who li { grid-template-columns:22ch 1fr; gap:2.5rem; align-items:baseline; } }
.wf-who h3 { margin:0; font-size:20px; font-weight:400; letter-spacing:-.01em; }
.wf-who p { margin:0; color:var(--sc-ink-soft); font-size:15px; max-width:56ch; }
.wf-tiers { display:grid; gap:1px; margin-top:2.5rem; background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.08); border-radius:10px; overflow:hidden; }
@media (min-width:900px){ .wf-tiers { grid-template-columns:repeat(2,1fr); } }
.wf-tier { background:var(--sc-surface); padding:clamp(1.6rem,3vw,2.2rem); display:flex; flex-direction:column; gap:1rem; }
.wf-tier--feat { background:#121207; }
.wf-tier__top { display:flex; align-items:baseline; justify-content:space-between; gap:1rem; }
.wf-tier__name { font-size:22px; font-weight:400; letter-spacing:-.01em; }
.wf-tier__price { font-variant-numeric:tabular-nums; font-size:clamp(1.8rem,3vw,2.4rem); font-weight:500; line-height:1; }
.wf-tier__price span { font-size:13px; color:var(--sc-ink-soft); font-weight:400; }
.wf-tier__feat-tag { font:500 11px var(--sc-font-mono,"JetBrains Mono",monospace); letter-spacing:.1em; text-transform:uppercase; color:var(--sc-accent); }
.wf-tier p.d { margin:0; color:var(--sc-ink-soft); font-size:14px; line-height:1.6; }
.wf-posture { max-width:24ch; font-size:clamp(2rem,5vw,3.4rem); font-weight:300; letter-spacing:-.03em; line-height:1.08; }
.wf-posture em { font-style:normal; color:var(--sc-accent); }
.wf-close { padding-block:clamp(6rem,13vw,10rem); }
.wf-close h2 { font-size:clamp(2.2rem,6vw,4rem); font-weight:300; letter-spacing:-.03em; line-height:1.05; max-width:16ch; margin:0; }
.wf-btn { display:inline-flex; align-items:center; gap:.5rem; margin-top:2.2rem; background:var(--sc-accent); color:var(--sc-accent-ink); font:500 15px var(--sc-font-text); text-decoration:none; padding:.9rem 1.5rem; border-radius:8px; transition:transform .12s var(--sc-ease-out),filter .15s; }
.wf-btn:hover { filter:brightness(1.06); } .wf-btn:active { transform:translateY(1px); }
.wf-btn:focus-visible { outline:2px solid var(--sc-accent); outline-offset:3px; }
`
