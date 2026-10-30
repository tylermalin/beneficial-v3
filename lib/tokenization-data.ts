// Source: Beneficial Technology — "Asset tokenization, 2018 to 2030" interactive
// market report. Figures as reported in source material; projections are analyst
// estimates. Data as of September 2026.

export type Milestone = {
  date: string
  title: string
  body: string
}

export type Era = {
  n: string
  years: string
  title: string
  lede: string
  note: string
  hero: {
    kicker: string
    value: string
    caption: string
  }
  milestones: Milestone[]
}

export const ERAS: Era[] = [
  {
    n: '01',
    years: '2018–2022',
    title: 'Foundations & early experiments',
    lede: 'Tokenization starts as a niche experiment in illiquid assets. Liquidity is thin, but the vision is set.',
    note: 'it started small',
    hero: {
      kicker: 'BCG & ADDX projection, 2022',
      value: '$16.1T',
      caption: 'Projected business opportunity in asset tokenization by 2030.',
    },
    milestones: [
      {
        date: '2018',
        title: 'Birth of security token offerings',
        body: 'Early platforms tokenize residential real estate and private equity. Secondary liquidity stays negligible.',
      },
      {
        date: '2021',
        title: 'Regulatory & market milestones',
        body: 'The industry moves toward standardized transparency after early cryptographic proof of reserves. Robinhood goes public.',
      },
      {
        date: '2022',
        title: 'The $16.1T forecast',
        body: 'A BCG and ADDX report sizes the 2030 opportunity at $16.1 trillion, giving institutions a number to plan around.',
      },
    ],
  },
  {
    n: '02',
    years: '2023–2024',
    title: 'The sovereign pivot',
    lede: 'The market shifts from exotic illiquid assets to the most demanded asset on earth: sovereign debt.',
    note: 'cash moved first',
    hero: {
      kicker: 'Tokenized Treasury value',
      value: '$15B+',
      caption: 'By late 2026, up from $2.4B when BlackRock launched BUIDL.',
    },
    milestones: [
      {
        date: '2023',
        title: 'Treasuries enter the chain',
        body: 'Ondo Finance launches OUSG, a tokenized Treasury ETF wrapper, and sovereign debt becomes the anchor asset.',
      },
      {
        date: 'Mar 2024',
        title: 'The BUIDL moment',
        body: 'BlackRock launches BUIDL on Ethereum. Institutional credibility is validated overnight.',
      },
      {
        date: 'Late 2024',
        title: 'Safe-haven validation',
        body: 'Tokenized Treasuries act as digital safe havens during cross-asset stress, drawing crypto-native treasury inflows.',
      },
    ],
  },
  {
    n: '03',
    years: '2025',
    title: 'The institutional boom',
    lede: 'Tokenized equities reach mainstream retail and regulators start integrating rather than resisting.',
    note: 'four times in twelve months',
    hero: {
      kicker: 'Distributed RWA value, ex-stablecoins',
      value: '$21B+',
      caption: 'December 2025, up from $5.42B in January. Roughly 4× in a single year.',
    },
    milestones: [
      {
        date: 'Jun 2025',
        title: "Robinhood's European launch",
        body: '200+ tokenized stock and ETF tokens go live for EU/EEA users.',
      },
      {
        date: 'Dec 2025',
        title: 'M&A and regulatory integration',
        body: 'Kraken acquires Backed Finance. The SEC issues a no-action letter for the DTC tokenization pilot.',
      },
    ],
  },
  {
    n: '04',
    years: '2026',
    title: 'Regulated production at scale',
    lede: 'Pilots become production. Core market infrastructure settles tokenized securities for real.',
    note: 'from pilot to plumbing',
    hero: {
      kicker: 'On-chain monetary substrate, Sept 2026',
      value: '$340B+',
      caption: 'Stablecoins plus yield-bearing RWAs. Tokenized equities growing at 17% monthly.',
    },
    milestones: [
      {
        date: 'Jul 2026',
        title: 'DTCC goes live',
        body: 'First live production trades of tokenized blue-chip stocks and Treasuries, with 40 participating institutions.',
      },
      {
        date: 'Late 2026',
        title: 'The agentic economy begins',
        body: 'The x402 payment protocol lets autonomous AI agents transact with tokenized assets natively over HTTP.',
      },
    ],
  },
  {
    n: '05',
    years: '2030+',
    title: 'The 2030 horizon',
    lede: 'Tokenization becomes the default global rail: money, securities and identity as interoperable data.',
    note: 'the rail becomes the default',
    hero: {
      kicker: 'Tokenized market cap, 2030',
      value: '$2T–$16T',
      caption: 'McKinsey base case to BCG optimistic. The spread is the opportunity.',
    },
    milestones: [
      {
        date: '2030',
        title: 'Interoperable finance',
        body: 'Money, securities and identity exist as interoperable data on shared rails.',
      },
    ],
  },
]

export type AssetRow = {
  name: string
  aumB: number // AUM in USD billions
  aumLabel: string
  players: string
}

// Distributed on-chain AUM by asset category, September 2026.
export const MARKET_ROWS: AssetRow[] = [
  { name: 'Fiat stablecoins', aumB: 305.19, aumLabel: '$305.19B', players: 'Tether, Circle' },
  { name: 'Treasuries & MMFs', aumB: 13.55, aumLabel: '$13.55B', players: 'BlackRock (BUIDL), Ondo, Franklin Templeton' },
  { name: 'Private credit', aumB: 7.96, aumLabel: '$7.96B', players: 'Maple Finance, Centrifuge, Apollo' },
  { name: 'Commodities', aumB: 4.85, aumLabel: '$4.85B', players: 'Paxos Gold (PAXG), Tether Gold (XAUT)' },
  { name: 'Equities & ETFs', aumB: 2.92, aumLabel: '$2.92B', players: 'Robinhood, Kraken, Coinbase, Backed' },
  { name: 'Real estate', aumB: 0.226, aumLabel: '$226.32M', players: 'RealT, Lofty, Propy' },
]

export const TOTAL_AUM_LABEL = '$334.7B'
export const TOTAL_EX_STABLE_LABEL = '$29.5B'
