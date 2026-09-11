'use client'

import { useState } from 'react'
import styles from './concept-site.module.css'

const CALENDAR_URL = 'https://cal.com/beneficialtech'

const expertise = [
  { number: '01', label: 'Structure', title: 'Build something investors and counsel can diligence.', items: ['Entity architecture', 'Token design', 'Regulatory positioning', 'Capital instruments', 'Cross-border structure'] },
  { number: '02', label: 'Build', title: 'Turn the operating model into working systems.', items: ['AI implementation', 'Internal workflows', 'Production software', 'Client portals', 'Automation'] },
  { number: '03', label: 'Scale', title: 'Prepare for the next institutional threshold.', items: ['Fundraising architecture', 'Investor narrative', 'Board preparation', 'GTM systems', 'Strategic partnerships'] },
]

const work = [
  ['Climate infrastructure', 'Series A', 'Untangling the past to finance the future.', 'Restructured cap table and outstanding SAFT obligations for a company that had raised $4M ahead of its next institutional round.', 'Company architecture + capital readiness', '$4M'],
  ['Environmental data', 'DePIN', 'A network designed to survive its launch.', 'Designed token architecture and regulatory positioning for an environmental-data network preparing to enter market.', 'Token design + regulatory architecture', '01'],
  ['Climate finance', 'Seed', 'Making a new market legible to capital.', 'Structured instruments and sharpened investor narrative supporting a $6M seed for a climate-finance company.', 'Financing instruments + investor narrative', '$6M'],
  ['Real-world assets', 'Cross-border', 'One product. Multiple rulebooks.', 'Aligned cross-jurisdiction structure, technical implementation, and go-to-market constraints for an RWA issuer.', 'Cross-border architecture + implementation', '03'],
]

const engagements = [
  ['Fractional partner', 'Ongoing senior capacity for decisions that compound.', 'Strategy and execution across recurring structural, technical, and operating needs.', 'From $8.5K / month'],
  ['Embedded partner', 'A cross-functional operator inside the hard part.', 'Deeper integration for complex regulated or technical companies moving quickly.', 'From $15K / month'],
  ['Defined project', 'One consequential outcome, taken end to end.', 'A focused build, structure, diagnostic, or special situation with a clear finish line.', 'From $25K'],
]

function Mark() {
  return <svg className={styles.mark} viewBox="0 0 36 36" aria-hidden="true"><path d="M18 2v32M2 18h32" /><circle cx="18" cy="18" r="10" /></svg>
}

function CalendarLink({ children, className = styles.button }: { children: React.ReactNode; className?: string }) {
  return <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className={className}>{children} <span>↗</span></a>
}

export function ConceptSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const year = new Date().getFullYear()

  return <main className={styles.site}>
    <header className={styles.header}>
      <a className={styles.brand} href="#top" aria-label="Beneficial home"><Mark /><span>beneficial</span></a>
      <nav className={styles.navigation} aria-label="Main navigation"><a href="#expertise">Expertise</a><a href="#work">Work</a><a href="#approach">Approach</a><a href="#experience">Experience</a></nav>
      <CalendarLink className={styles.headerCta}>Bring us the problem</CalendarLink>
      <button className={styles.menuButton} type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu"><span /><span /></button>
      {menuOpen && <nav className={styles.mobileMenu} aria-label="Mobile navigation"><a onClick={() => setMenuOpen(false)} href="#expertise">Expertise</a><a onClick={() => setMenuOpen(false)} href="#work">Work</a><a onClick={() => setMenuOpen(false)} href="#approach">Approach</a><a onClick={() => setMenuOpen(false)} href="#experience">Experience</a><CalendarLink className={styles.mobileCta}>Bring us the problem</CalendarLink></nav>}
    </header>

    <section id="top" className={styles.hero}>
      <p className={styles.kicker}><i /> Strategy + engineering for regulated technology</p>
      <h1>Build at the<br /><em>regulated frontier.</em></h1>
      <div className={styles.heroLower}><p>Beneficial helps founders structure, build, and scale companies where <strong>technology and regulation collide.</strong></p><div><CalendarLink>Discuss your company</CalendarLink><a href="#work" className={styles.textLink}>See selected work <span>↓</span></a></div></div>
      <div className={styles.frontier} aria-hidden="true"><span>Engineering</span><span>Regulation</span><b>The gap<br />is the work.</b></div>
      <div className={styles.proofRail}><span><strong>20+</strong> founders advised</span><span><strong>07</strong> token structures</span><span><strong>03</strong> jurisdictions</span><span><strong>48h</strong> to scope</span></div>
    </section>

    <section id="approach" className={`${styles.section} ${styles.manifesto}`}><p className={styles.sectionLabel}><span>01</span> The missing layer</p><div><p className={styles.eyebrow}>Most hard technology problems aren&apos;t purely technical.</p><h2>Your counsel understands the rules.<br />Your engineers understand the system.<br />Your investors understand the opportunity.</h2><div className={styles.manifestoEnd}><h2><em>Someone still has to make all three agree.</em></h2><p>That&apos;s where Beneficial works—turning fragmented expertise into a company that can withstand diligence and ship.</p></div></div></section>

    <section id="expertise" className={`${styles.section} ${styles.expertise}`}><p className={`${styles.sectionLabel} ${styles.lightLabel}`}><span>02</span> What we make possible</p><div className={styles.sectionIntro}><h2>One partner across the<br /><em>whole problem.</em></h2><p>Not a deck. Not a memo in isolation. The architecture and implementation required to move from consequential decision to operating reality.</p></div><div className={styles.expertiseGrid}>{expertise.map((item) => <article key={item.label} className={styles.expertiseCard}><div><span>{item.number} / {item.label}</span><b>↗</b></div><h3>{item.title}</h3><ul>{item.items.map((name) => <li key={name}>{name}</li>)}</ul></article>)}</div></section>

    <section id="work" className={`${styles.section} ${styles.work}`}><p className={styles.sectionLabel}><span>03</span> Selected work</p><div className={styles.sectionIntro}><h2>Evidence, not<br /><em>adjectives.</em></h2><p>Selected engagements where company structure, regulation, and technology became inseparable.</p></div><div className={styles.workStack}>{work.map(([sector, stage, title, description, result, metric], index) => <article className={styles.case} key={title}><div className={styles.caseMeta}><span>0{index + 1} / 04</span><span>{sector}</span><span>{stage}</span></div><h3>{title}</h3><p>{description}</p><div className={styles.caseFooter}><span>The intervention</span><strong>{result}</strong></div><div className={styles.metric}><b>{metric}</b><small>{index === 1 ? 'Coherent network' : index === 3 ? 'Jurisdictions' : 'Capital raised'}</small></div></article>)}</div><p className={styles.confidential}>Certain client details are withheld due to confidentiality. References available during diligence.</p></section>

    <section className={`${styles.section} ${styles.fit}`}><p className={styles.sectionLabel}><span>04</span> Built for consequential moments</p><h2>You call us when…</h2><div>{['The thing you’re building doesn’t fit neatly inside an existing category.', 'Your lawyers, operators, and engineers are solving different versions of the same problem.', 'The next fundraise, launch, or market entry will expose structural debt.', 'You need senior judgment and someone who can execute—not another layer of coordination.'].map((item, i) => <p key={item}><span>0{i + 1}</span>{item}</p>)}</div></section>

    <section className={`${styles.section} ${styles.engagements}`}><p className={`${styles.sectionLabel} ${styles.lightLabel}`}><span>05</span> Ways to work together</p><div className={styles.sectionIntro}><h2>Built around the<br /><em>problem, not hours.</em></h2><p>Every engagement begins with a working session. If there&apos;s a fit, you receive a clear scope within 48 hours.</p></div><div className={styles.engagementGrid}>{engagements.map(([label, title, description, price]) => <article key={label}><span>{label}</span><h3>{title}</h3><p>{description}</p><footer><strong>{price}</strong><CalendarLink className={styles.inlineLink}>Explore fit</CalendarLink></footer></article>)}</div></section>

    <section id="experience" className={`${styles.section} ${styles.experience}`}><p className={styles.sectionLabel}><span>06</span> The Beneficial experience</p><div className={styles.sectionIntro}><h2>Less managing<br />the consultants.<br /><em>More momentum.</em></h2><p>From first signal to final deliverable, the relationship runs through one calm, legible system. You always know what is decided, what is blocked, and what happens next.</p></div><div className={styles.journey}>{[['01 / Signal', 'Tell us where it gets complicated.'], ['02 / Fit', 'Book the right conversation.'], ['03 / Scope', 'A decision-ready scope in 48 hours.'], ['04 / Activate', 'Sign once. Start aligned.'], ['05 / Operate', 'Every important thing has a home.']].map(([number, text]) => <article key={number}><span>{number}</span><strong>{text}</strong></article>)}</div><div className={styles.roomPreview}><aside><span>Beneficial / Project</span><b>Command center</b><b>Decisions <i>03</i></b><b>Workstreams</b><b>Documents</b><small>Client experience<br />Preview</small></aside><div><header><span>Regulated launch / Week 03</span><i>On track</i></header><h3>Three things require<br />attention this week.</h3><div className={styles.decisions}>{['Confirm launch jurisdiction', 'Token utility memo v2', 'Investor diligence questions'].map((item, i) => <p key={item}><span>0{i + 1} / {i === 0 ? 'Due today' : 'Review'}</span><strong>{item}</strong></p>)}</div></div></div><p className={styles.previewNotice}>A secure client workspace is in development and is not yet available.</p></section>

    <section className={`${styles.section} ${styles.founder}`}><p className={styles.sectionLabel}><span>07</span> Principal-led by design</p><div className={styles.founderGrid}><div><h2>Built by an operator who speaks <em>lawyer</em> and <em>engineer.</em></h2><p>Beneficial was founded by Tyler, an operator-attorney and technologist who has spent his career working across the seams most firms treat as handoffs.</p><CalendarLink className={styles.textLink}>Work directly with Tyler</CalendarLink></div><div className={styles.portrait} aria-label="Abstract founder portrait"><span>TYLER<br />FOUNDER + PRINCIPAL</span></div><div className={styles.credentials}><p><strong>15+</strong> years across law, technology + operations</p><p><strong>02</strong> prior company exits</p><p><strong>JD</strong> Fordham Law · CFTC fellowship</p><p><strong>01</strong> published book on practical legal AI</p></div></div><p className={styles.disclosure}>Beneficial is not a law firm and does not provide legal advice. We work alongside specialized counsel—organizing facts, systems, architecture, and implementation so legal experts can focus on legal judgment.</p></section>

    <section className={`${styles.section} ${styles.insights}`}><p className={styles.sectionLabel}><span>08</span> Useful before you hire us</p><div className={styles.sectionIntro}><h2>Tools for the<br /><em>frontier.</em></h2><p>Practical systems for expensive problems. No generic thought leadership.</p></div><div className={styles.resourceGrid}><a href="/resources"><span>Book / Playbook</span><strong>01</strong><h3>The Everyday<br />Legal AI Playbook</h3><p>A practical field guide for applying AI inside real legal and operating workflows.</p></a><a href="/tools/repo-ip-auditor"><span>Interactive tool</span><strong>02</strong><h3>Repo IP<br />Auditor</h3><p>Surface license and ownership exposure without uploading your source code.</p></a></div></section>

    <section className={styles.contact}><p className={`${styles.sectionLabel} ${styles.lightLabel}`}><span>09</span> Start a conversation</p><div><p>30 minutes. No pitch.<br />If we&apos;re not the right team, we&apos;ll tell you.</p><h2>Bring us the<br /><em>complicated problem.</em></h2><CalendarLink className={styles.lightButton}>Discuss your company</CalendarLink></div><footer><a className={`${styles.brand} ${styles.brandLight}`} href="#top"><Mark /><span>beneficial</span></a><a href="mailto:tyler@beneficial.technology">tyler@beneficial.technology</a><span>© {year} Beneficial Technology</span><a href="/privacy-policy">Privacy</a></footer></section>
  </main>
}
